// Each row follows the order of the topics in topic-curriculum.js.
// A term and its meaning form a recall question, with the other row terms as distractors.
const rows = text => text.trim().split('\n').map(line=>line.split('|').map(pair=>pair.split('~')));

export const topicChecks = {
network: rows(
'Charge~Quantity of electricity measured in coulombs|Voltage~Energy transferred per unit charge|Current~Rate at which charge crosses a point|Power~Rate of energy transfer\n'+
'Ideal voltage source~Maintains fixed terminal voltage with zero output resistance|Ideal current source~Maintains fixed current with infinite output resistance|Dependent source~Has an output set by another circuit variable|Norton source transformation~Places the equivalent current source in parallel with the unchanged resistance\n'+
'Series circuit~All elements carry the same current|Parallel circuit~All branches share the same voltage|Voltage divider~Allocates voltage in proportion to series resistance|Star–delta conversion~Preserves the terminal behavior of a three-terminal resistive network\n'+
'Node~Equipotential region where branches connect|Branch~Connection path between two nodes|Loop~Any closed circuit path|Mesh~A closed path containing no smaller loop in a planar drawing\n'+
'Nodal analysis~Writes KCL in terms of node voltages|Mesh analysis~Writes KVL in terms of loop currents|Supernode~Handles an ideal voltage source between two nonreference nodes|Supermesh~Handles a current source on a branch shared by two meshes\n'+
'Superposition~Adds individual voltage or current responses to independent sources|Thévenin model~Open-circuit voltage in series with equivalent impedance|Norton model~Short-circuit current in parallel with equivalent impedance|Reciprocity~Permits swapping excitation and response ports in qualifying linear networks\n'+
'Capacitor voltage~Remains continuous through switching when current is finite|Inductor current~Remains continuous through switching when voltage is finite|RC time constant~Equals resistance seen by the capacitor times capacitance|RL time constant~Equals inductance divided by the resistance seen by the inductor\n'+
'Admittance~Reciprocal of impedance, measured in siemens|Real power~Average energy transfer, measured in watts|Reactive power~Imaginary component of complex power, measured in vars|Apparent power~Magnitude of complex power, measured in volt-amperes\n'+
'Series resonance~Minimum input impedance for a series RLC with constant resistance|Ideal parallel resonance~Maximum input impedance for a parallel RLC with shunt resistance|Half-power points~Frequencies where the relevant response power is half its peak value|Quality factor~Resonant frequency divided by the half-power bandwidth\n'+
'Z parameters~Express port voltages in terms of port currents|Y parameters~Express port currents in terms of port voltages|h parameters~Express input voltage and output current using input current and output voltage|ABCD parameters~Describe the port transmission relation used to combine cascaded stages'),
devices: rows(
'Valence-band edge~Highest energy at the top of the valence band|Conduction-band edge~Lowest energy at the bottom of the conduction band|Conductor~Can have a partially filled or overlapping band|Insulator~Typically has a much larger forbidden gap than a semiconductor\n'+
'Intrinsic semiconductor~Has equal equilibrium electron and hole concentrations|N-type material~Has electrons as majority carriers after donor doping|P-type material~Has holes as majority carriers after acceptor doping|Germanium~Has higher intrinsic carrier concentration than silicon near room temperature\n'+
'Drift~Net carrier motion driven by an electric field|Diffusion~Net carrier motion caused by a concentration gradient|Generation~Creates electron–hole pairs|Recombination~Removes electron–hole pairs\n'+
'Depletion region~Junction region containing fixed ionized dopants and few mobile carriers|Built-in potential~Barrier established at an unbiased PN junction|Forward bias~Reduces the junction barrier|Reverse bias~Widens the depletion region before breakdown\n'+
'Zener breakdown~Tunneling through a sufficiently narrow depletion region|Avalanche breakdown~Carrier multiplication through energetic collisions|Junction capacitance~Associated with depleted charge and usually falls as reverse bias increases|Diffusion capacitance~Associated with stored injected charge during forward conduction\n'+
'LED~Produces light through carrier recombination|Photodiode~Detects incident light and is often reverse-biased|Schottky diode~Uses a metal–semiconductor junction|Solar cell~Delivers electrical power from illumination\n'+
'Cutoff~BJT region with very small collector current|Forward active~Base–emitter forward biased and base–collector reverse biased|BJT saturation~Both junctions are forward biased|Common collector~Emitter-follower amplifier configuration\n'+
'JFET~Uses reverse bias on a gate junction to vary its channel|Enhancement MOSFET~Requires channel-forming gate bias to conduct in the basic model|Depletion MOSFET~Can conduct at zero gate-source bias|NMOS triode region~With gate overdrive positive, the drain voltage is below that overdrive'),
analog: rows(
'Half-wave rectifier~Produces one output pulse per AC period|Centre-tapped full-wave rectifier~Uses alternate halves of a tapped transformer winding|Bridge rectifier~Uses two conducting diodes in each half-cycle|Full-wave ripple frequency~Equals twice the AC input frequency\n'+
'Rectification efficiency~DC load power divided by AC input power|Ripple factor~RMS AC component divided by the DC component|Peak inverse voltage~Maximum reverse voltage a diode must withstand|Zener shunt resistor~Limits current supplied to the diode and load\n'+
'Positive clipper~Removes the part of a waveform above a selected level|Clamper~Shifts waveform DC level while ideally preserving its swing|Voltage multiplier~Stacks diode–capacitor charging stages|Multiplier under load~Has output sag due to charge drawn between cycles\n'+
'Q-point~Device operating current and voltage with no input signal|DC load line~External circuit constraint relating DC voltage and current|Emitter degeneration~Adds negative feedback to reduce bias sensitivity|Saturation clipping~Occurs when signal swing drives a BJT beyond its active region into saturation\n'+
'Common source~Usually gives an inverting voltage gain|Common gate~Noninverting stage driven at the low-resistance source input|Common drain~Source follower with positive gain below one|Common collector~BJT follower with the output at the emitter\n'+
'Coupling capacitor~Passes changing signals between stages while blocking DC|Bypass capacitor~Can reduce AC emitter or source degeneration|Miller effect~Can increase effective input capacitance of an inverting amplifier|Cascaded gain~Product of loaded stage gains\n'+
'Differential gain~Ratio of output to differential input|Common-mode gain~Response to equal changes at both inputs|CMRR~Magnitude ratio of differential to common-mode gain|Current mirror~Copies reference-branch current into an output branch\n'+
'Inverting amplifier~Ideal linear closed-loop gain equals −Rf/Rin|Noninverting amplifier~Ideal closed-loop gain equals 1+Rf/Rg|Follower~Gives positive unity voltage gain|Virtual short~Inputs nearly share a voltage in linear negative-feedback operation\n'+
'Summing amplifier~Adds weighted inputs|Integrator~Uses capacitive feedback in a standard inverting op-amp circuit|Differentiator~Uses an input capacitor in a standard inverting op-amp circuit|Schmitt trigger~Uses hysteresis with distinct rising and falling thresholds\n'+
'Negative feedback~Typically reduces closed-loop gain sensitivity|Positive feedback~Can sustain oscillations or produce switching hysteresis|Barkhausen phase condition~Total loop phase at oscillation is 0° modulo 360°|Oscillator startup~Usually requires small-signal loop gain above unity\n'+
'Hartley~Uses an inductive feedback divider|Colpitts~Uses a capacitive feedback divider|Wien bridge~Uses a lead–lag RC frequency-selective network|Crystal oscillator~Uses high-Q mechanical resonance in quartz\n'+
'Class A amplifier~Conducts throughout the cycle|Class B amplifier~Conducts for approximately half the cycle per output device|555 monostable~Produces one timed pulse from a trigger|555 astable~Repeatedly charges and discharges to make a periodic waveform'),
digital: rows(
'Binary~Uses base two|Octal~Groups binary digits into threes|Hexadecimal~Groups binary digits into fours|Decimal~Uses place values that are powers of ten\n'+
'One’s complement~Flips each bit|Two’s complement negation~Flips each bit and then adds one|Signed overflow~Two same-sign operands produce an opposite-sign sum|Unsigned carry~A carry leaves the fixed most significant bit\n'+
'BCD~Encodes each decimal digit separately|Gray code~Neighboring counts differ in one bit|Even parity~Forces an even total count of ones|Parity detection~Detects an odd number of flipped bits\n'+
'AND~Output high only when all inputs are high|OR~Output high when any input is high|XOR~Output high when two inputs differ|NOR~Inverts OR and is universal by itself\n'+
'Minterm~Product term true for exactly one input combination|Maxterm~Sum term false for exactly one combination|SOP K-map~Groups ones to derive product terms|POS K-map~Groups zeros to derive sum terms\n'+
'Demultiplexer~Routes one input to a selected output|Comparator~Tests equality or relative order|Priority encoder~Encodes the highest-priority asserted input|Decoder~Activates an output based on an input code\n'+
'D flip-flop~Copies its data input on the active clock edge|JK flip-flop~Toggles for both inputs asserted|Level-sensitive latch~Can follow data while its enable level is active|Excitation table~Gives inputs needed for a desired state transition\n'+
'Ripple counter~Clocks subsequent stages from earlier outputs|Synchronous counter~Uses a shared clock for all stages|Ring counter~Circulates an asserted bit in its intended sequence|Johnson counter~Feeds back the inverted output of the last stage\n'+
'SIPO~Collects serial bits as a parallel word|PISO~Outputs a parallel-loaded word one bit at a time|Moore output~Depends on current state only|Mealy output~Depends on state and current input\n'+
'Setup time~Minimum interval data is stable before the active edge|Hold time~Minimum interval data is stable after the active edge|Fan-out~Number of standard loads an output can drive|Noise margin~Tolerable voltage perturbation before a logic level becomes ambiguous\n'+
'ROM~Typically preserves programmed contents with power removed|SRAM~Uses a bistable cell without periodic refresh while powered|DRAM~Stores charge in cells that require refresh|FPGA LUT~Configurable table implementing a combinational function\n'+
'ADC~Converts an analog level to a digital code|DAC~Converts a digital code to an analog level|Flash ADC~Performs many threshold comparisons in parallel|SAR ADC~Trials bit decisions from most significant to least significant'),
signals: rows(
'Even signal~Unchanged by time reversal|Odd signal~Changes sign under time reversal|Energy signal~Has finite nonzero total squared magnitude|Power signal~Has finite nonzero long-run average squared magnitude\n'+
'Unit step~Turns on and then stays at one|Unit ramp~Rises linearly from zero after the origin|Impulse~Has unit area and the sifting property|Exponential~Models growth or decay at a constant relative rate\n'+
'Delay~Replaces t by t−T for positive T|Time compression~Replaces t by at with a greater than one|Time reversal~Replaces t by −t|Amplitude scaling~Multiplies the entire signal by a constant\n'+
'Linearity~Satisfies superposition|Time invariance~Input shift causes the same output shift|Causality~Depends on present and past inputs only|Memoryless system~Depends on the input at the present instant only\n'+
'Impulse response~LTI output to a unit impulse|Step response~LTI output to a unit step|Convolution~Combines the input with shifted copies of the impulse response|BIBO condition~Continuous-time impulse response is absolutely integrable in the usual LTI case\n'+
'Fourier series~Represents periodic signals using harmonics|Fourier transform~Describes frequency content via an integral transform|Pure time delay~Adds linear frequency-domain phase without changing magnitude|Cosine spectrum~Has equal-frequency-magnitude lines on both sides of zero\n'+
'Pole~A singular point of a reduced rational transform expression|Zero~Location where a reduced rational transfer function vanishes|ROC~Set of complex frequencies where the bilateral transform converges|Inverse Laplace transform~Recovers time dependence using the expression and region of convergence\n'+
'Bilateral Z-transform~Sums x[n] times z raised to −n|Right-sided rational sequence~Has ROC outside the outermost pole|Stable causal rational discrete system~Has poles strictly inside the unit circle|Difference equation~Relates discrete output and input samples algebraically over shifted indices\n'+
'Nyquist rate~Twice the highest frequency of an ideally low-pass bandlimited input|Nyquist frequency~Half of a given sample rate|Aliasing~Overlap or folding of replicated spectra after sampling|Anti-alias filter~Removes unwanted frequencies before sampling\n'+
'Autocorrelation~Compares a waveform with its delayed copies|Cross-correlation~Compares two different waveforms at relative lags|Energy spectral density~Squared Fourier magnitude of a finite-energy signal|Power spectral density~Fourier transform of the autocorrelation for a wide-sense stationary process'),
dsp: rows(
'DTFT~Frequency-domain description continuous and periodic in angular frequency|Discrete-time frequency response~DTFT of the LTI impulse response when it exists|Magnitude response~Sets gain for each sinusoidal component|Phase response~Sets frequency-dependent phase change\n'+
'DFT~Produces N discrete frequency samples from an N-sample block|Inverse DFT~Recovers the time-domain block from its bins|Bin spacing~Sample rate divided by transform size|Zero-padding for spectral display~Samples the same underlying spectrum more densely\n'+
'Linear convolution~Combines sequences without cyclic wraparound|Circular convolution~Wraps indices modulo the transform length|DFT pointwise multiplication~Corresponds to circular convolution in the time domain|Sufficient padding~Requires at least Lx+Lh−1 points for full linear convolution\n'+
'Butterfly~Combines pairs of intermediate FFT values|Twiddle factor~A complex rotation used in FFT combinations|Direct DFT complexity~Grows quadratically in transform length|Radix-2 FFT complexity~Grows in proportion to N log₂N\n'+
'FIR~Has an impulse response of finite duration|IIR~Can have an impulse response of infinite duration|Symmetric FIR~Supports linear phase with constant group delay away from zeros|Direct-form implementation~Maps difference-equation coefficients to delays, multipliers and sums\n'+
'Rectangular window~Uses equal sample weights inside the record|Hann window~Tapers samples near the edges|Spectral leakage~Spreads finite-record tone energy across DFT bins|Window-method FIR design~Truncates and tapers an ideal filter impulse response\n'+
'Upsampling~Inserts zeros before interpolation filtering|Downsampling~Keeps every Mth sample|Anti-image filter~Suppresses replicated bands after zero insertion|Anti-alias filter~Limits bandwidth before sample-rate reduction'),
control: rows(
'Open-loop control~Acts without measuring the controlled output|Closed-loop control~Uses measured output to form a correction|Plant~Physical process whose response is controlled|Transfer function~Laplace-domain output-to-input ratio with zero initial conditions\n'+
'Series blocks~Their gains multiply|Parallel blocks~Their signed gains add|Non-touching loops~Have no shared node|Mason path cofactor~Excludes loops touching that forward path\n'+
'Pole~Denominator root of the reduced transfer function|Zero~Numerator root of the reduced transfer function|Step~Changes to a fixed new value and stays there|Ramp~Increases linearly with time after it starts\n'+
'Rise time~Measures the first rise between specified output levels|Peak time~Time of the first overshoot maximum|Percent overshoot~Peak excess divided by final value, as a percentage|Settling time~Time after which output stays inside a tolerance band\n'+
'System type~Counts uncancelled integrators in the unity-feedback open-loop path|Position constant Kp~Used for unit-step error|Velocity constant Kv~Used for unit-ramp error|Acceleration constant Ka~Used for unit-parabolic-input error\n'+
'Routh first column~Its sign changes count right-half-plane poles in a regular array|Root-locus starting point~An open-loop pole at gain tending to zero|Root-locus endpoint~An open-loop zero or infinity|Relative stability~Concerned with the margin from the stability boundary\n'+
'Gain crossover~Loop magnitude is one or 0 dB|Phase crossover~Loop phase is −180° for the usual margin calculation|Phase margin~Additional lag required at gain crossover|Nyquist critical point~The point −1 on the complex loop-gain plane\n'+
'Proportional control~Responds to the present error|Integral control~Responds to accumulated error|Derivative control~Responds to the error slope|Lead compensation~Adds positive phase over a frequency band\n'+
'Matrix A~Maps present state into its autonomous rate of change|Matrix B~Maps control input into state evolution|Matrix C~Maps state into measured output|Matrix D~Represents direct input-to-output feedthrough'),
comm: rows(
'Baseband~Frequency band near zero carrying the source waveform|Passband~Band around a nonzero carrier|Bit rate~Number of bits transmitted per second|Symbol rate~Number of signaling symbols transmitted per second\n'+
'Thermal noise~Available noise power is kTB over bandwidth B|SNR~Signal-to-noise power ratio|Noise figure~Quantifies the SNR degradation of a network|Shannon capacity~Theoretical maximum reliable rate under the channel assumptions\n'+
'Conventional AM~Transmits a carrier and two sidebands|DSB-SC~Transmits both sidebands and suppresses the carrier|SSB~Keeps one sideband|VSB~Keeps one sideband plus part of the other\n'+
'Frequency modulation~Makes instantaneous frequency track the message|Phase modulation~Makes instantaneous phase track the message|FM tone index~Ratio of peak frequency deviation to the modulating tone frequency|Carson bandwidth~Approximately twice the sum of peak deviation and highest message frequency\n'+
'Local oscillator~Provides the reference frequency for mixing|Intermediate frequency~Selected fixed frequency after mixing the desired signal|Image frequency~Undesired RF on the opposite side of the LO giving the same IF|RF preselector~Limits unwanted signals before mixing\n'+
'PAM~Changes pulse amplitude|PWM~Changes pulse width|PPM~Changes pulse position|PCM~Represents quantized samples using binary words\n'+
'NRZ~Holds its signaling level through the bit interval|RZ~Returns to zero within the bit period|Manchester~Includes a mid-bit transition for clock recovery|ISI~A pulse from one symbol affects another symbol decision\n'+
'ASK~Varies amplitude between signaling states|FSK~Selects among discrete transmitted frequencies|BPSK~Uses two carrier phases separated by 180°|QAM~Uses different combinations of in-phase and quadrature amplitudes\n'+
'Coherent detection~Uses a synchronized carrier reference|Noncoherent detection~Does not require known carrier phase in suitable signaling|Matched filter~Maximizes output SNR at the decision time for a known pulse in AWGN|Nyquist zero-ISI criterion~Requires zero contribution at nonzero symbol-spaced offsets\n'+
'FDM~Separates users or streams into frequency bands|TDM~Assigns different time slots|CDMA~Separates signals with spreading codes|OFDM cyclic prefix~Copies the symbol tail to its beginning\n'+
'Parity~Detects an odd number of flipped bits|CRC~Forms a polynomial division remainder over GF(2)|Hamming distance~Counts positions in which two codewords differ|Minimum distance~Determines guaranteed error detection and correction capability\n'+
'Rayleigh fading~Models diffuse paths without a dominant component|Rician fading~Includes a dominant component as well as diffuse paths|Diversity~Uses additional observations to increase reliability|Beamforming~Weights antenna branches to steer or combine signal energy'),
em: rows(
'Coulomb’s law~Electrostatic point-charge force varies inversely with separation squared|Gauss’s electric law~Electric displacement flux through a closed surface equals enclosed free charge|Gauss’s magnetic law~Net magnetic flux through a closed surface is zero|Faraday’s law~Changing magnetic flux induces emf\n'+
'Polarization~Describes the trajectory of the electric-field vector|Wave impedance~Ratio of electric to magnetic field for a traveling wave|Poynting vector~Instantaneous power-flow density given by E cross H|Electric surface current~Can cause a jump in tangential H across an interface\n'+
'Attenuation~Reduction in amplitude as a wave propagates|Skin depth~Distance for field amplitude to decrease to about 37%|Lossless wave speed~Reciprocal of the square root of permeability times permittivity|Reflection~A wave returns from an impedance discontinuity\n'+
'Characteristic impedance~Voltage-to-current ratio for a single traveling wave on the line|Attenuation constant~Real part of the propagation constant|Phase constant~Imaginary part of the propagation constant|Half-wavelength lossless line~Repeats its termination impedance at the input\n'+
'Voltage reflection coefficient~Ratio of reflected voltage wave to incident voltage wave at the reference plane|Reflected power fraction~Squared magnitude of the reflection coefficient for a lossless line|VSWR~Ratio of standing-wave voltage maximum to minimum|Return loss~Negative twenty times the base-ten logarithm of reflection magnitude\n'+
'Open termination~Ideal voltage reflection coefficient is +1|Short termination~Ideal voltage reflection coefficient is −1|Quarter-wave transformer~Inverts load impedance at the design frequency|Smith chart~Graphically relates normalized impedance to reflection coefficient\n'+
'TE mode~Has zero longitudinal electric field|TM mode~Has zero longitudinal magnetic field|Cutoff frequency~A mode becomes evanescent below this frequency in a lossless guide|Cavity resonator~Encloses fields to support discrete resonant modes\n'+
'S11~Input reflection with other ports matched|S21~Forward transmission with other ports matched|dBm~Power in decibels relative to 1 mW|Mixer~Translates frequency by combining an input with a local oscillator'),
antennas: rows(
'Dipole~Has two conducting arms|Monopole~Uses a conducting reference plane or counterpoise as part of the antenna|Half-power beamwidth~Angle between the two −3 dB points of the main lobe|Sidelobe~A smaller direction-of-radiation peak outside the main lobe\n'+
'Directivity~Radiation intensity relative to average intensity for the same radiated power|Gain~Includes radiation efficiency as well as directivity|Effective aperture~Relates incoming power density to available received power|Polarization mismatch~For two linear polarizations, reduces received power by a cosine-squared factor\n'+
'Array factor~Contribution to the combined pattern from spacing and complex weights|Broadside operation~Main beam points perpendicular to an ideal linear array under equal-phase excitation|Progressive phase~Per-element excitation change used to steer an array beam|Grating lobe~Unwanted strong secondary beam associated with spatial sampling\n'+
'Ground wave~Follows the surface of Earth|Sky wave~Returns via ionospheric refraction under suitable conditions|Line of sight~Uses a direct geometrical path|Diffraction~Spreads energy around an obstacle edge\n'+
'Friis relation~Relates received and transmitted powers under ideal far-field free-space conditions|Free-space path loss~Increases with distance squared at a fixed frequency|Antenna gain in dBi~Added to a link budget with isotropic references|Receive power in dBm~Equals transmit dBm plus gains minus losses when all units are consistent\n'+
'Round-trip echo delay~Gives one-way distance after multiplication by half the propagation speed|Unmodulated CW sensing~Can measure radial motion via Doppler but not ordinary absolute range by delay|Doppler shift~Frequency change due to radial motion|Pulse receiver~Processes returning signals after transmission\n'+
'PRI~Time interval from one transmitted pulse to the next|PRF~Number of pulse transmissions per second|Range resolution~Ability to separate objects at different distances|Unambiguous range~Limit before echoes can be confused with a different pulse interval'),
embedded: rows(
'CPU~Fetches, decodes and executes instructions|ALU~Performs arithmetic and logic operations|Registers~Hold fast working values inside the processor|Address bus~Selects memory or device locations\n'+
'ISA~Defines visible instructions and their architectural effects|Immediate addressing~Encodes an operand within the instruction|Stack~Stores items in last-in, first-out order|Interrupt~Redirects execution to handle an event before resuming\n'+
'8085~Eight-bit data processor with a 16-bit address bus|8086~Uses segment and offset to produce a 20-bit physical address|8051~Microcontroller family with integrated peripherals|RISC~Generally emphasizes regular encodings and load/store operations\n'+
'Address decoder~Selects the memory or peripheral associated with an address range|Memory-mapped I/O~Uses normal memory addresses and load/store access|Isolated I/O~Uses a distinct port address space and dedicated access on suitable processors|Device register~May have a hardware side effect when read or written\n'+
'Timer~Counts internal clock ticks, often after prescaling|Event counter~Counts external transitions or events|GPIO~Reads or drives digital pin states when configured|PWM duty cycle~Fraction of the period for which the waveform is high\n'+
'UART~Uses asynchronous start and stop framing|SPI~Uses a shared clock and device-select signals|I²C~Uses two shared open-drain lines and device addresses|DMA~Moves blocks with limited CPU intervention'),
measure: rows(
'Accuracy~Closeness to a reference value|Precision~Repeatability of measurements|Resolution~Smallest distinguishable or displayed increment|Loading~Change in circuit behavior caused by the measuring instrument\n'+
'Voltmeter~Normally connected in parallel with measurement terminals|Ammeter~Normally inserted in series with the branch|Oscilloscope~Displays voltage as a function of time|Function generator~Provides a known stimulus waveform\n'+
'Voltage scale~Vertical divisions multiplied by volts per division and probe factor|Period~Horizontal divisions per cycle multiplied by time per division|Frequency~Reciprocal of waveform period|Phase displacement~360° times relative time offset divided by period for equal-frequency sinusoids\n'+
'Wheatstone bridge~Balances ratios of resistive arms|AC bridge~Balances complex impedance ratios using AC excitation|Detector null~Occurs when the bridge midpoint voltages agree|Ratio arms~Known arms set the reference ratio used for balance\n'+
'RTD~Uses temperature dependence of a metal resistance|Thermocouple~Uses voltage produced by a junction temperature difference|Strain gauge~Uses resistance change under deformation|LVDT~Uses differential transformer coupling for displacement\n'+
'Signal conditioning~Filters, scales or isolates a sensor output|Instrumentation amplifier~Amplifies a differential signal with high input impedance and common-mode rejection|Grounding~Establishes reference voltages and current return paths|Shielding~Reduces undesired electromagnetic coupling')
};

// Application questions for the longer, multi-step quizzes. Keys use one-based topic numbers.
const applications = text => text.trim().split('\n').map(line=>{
  const [question,correct,...distractors]=line.split('|');
  return {question,correct,distractors,reason:distractors.pop()};
});

export const advancedChecks = {
'network-5': applications(
'How many independent node-voltage unknowns are there in a circuit with five nodes and one reference?|4|3|5|6|The reference voltage is fixed, leaving four nonreference voltages.\n'+
'One node has V=6 V and connects to ground through 3 kΩ. What current leaves the node through that resistor?|2 mA|0.5 mA|18 mA|3 mA|Use (6−0) V divided by 3 kΩ.\n'+
'The positive terminal of a 5 V source is at A and its negative terminal is at B. What constraint is correct?|VA − VB = 5 V|VB − VA = 5 V|VA + VB = 5 V|VA = VB|An ideal voltage source fixes the potential of its positive terminal relative to its negative terminal.\n'+
'Two clockwise mesh currents I1 and I2 oppose each other in their shared resistor R. What is its drop in the direction of I1?|R(I1−I2)|R(I1+I2)|R I2|I1/R|Use the net branch current in the selected direction.\n'+
'An ideal 2 mA source connects two nonreference nodes. Does it form a supernode by itself?|No, use its known current in KCL|Yes, because every source creates a supernode|Yes, write a fixed 2 V difference|No, because its terminal current is unknown|The branch current is specified. A floating ideal voltage source motivates a supernode.'),
'network-7': applications(
'What is τ for a 2 kΩ resistor charging a 5 µF capacitor?|10 ms|2.5 ms|100 ms|0.1 ms|RC is 2000×5×10⁻⁶ s.\n'+
'A 4 H inductor sees 2 Ω after switching. What is τ?|2 s|0.5 s|8 s|4 s|The RL time constant is L/Rth.\n'+
'An RC output starts at 2 V and settles at 10 V. What is it after one time constant?|About 7.06 V|About 6.32 V|About 4.94 V|Exactly 8 V|The initial deviation is −8 V and falls to −8/e V.\n'+
'An ideal capacitor in a stable DC steady-state circuit behaves like what at its terminals?|An open circuit|A short circuit|A constant 1 A source|A frequency-dependent inductor|Its steady voltage has zero derivative, so its current is zero.\n'+
'What natural response has two distinct real negative characteristic roots?|Overdamped|Critically damped|Underdamped|Undamped|An overdamped response is the sum of two decaying real exponential modes.'),
'devices-4': applications(
'At 300 K with n=1, a forward diode current increases about tenfold for what voltage increase in its exponential region?|60 mV|6 mV|26 mV|600 mV|The increase is VT ln(10)≈59.6 mV.\n'+
'For an ideal unbiased PN junction in thermal equilibrium, what is the net current?|Zero|IS only|Infinite|Proportional to depletion width|Drift and diffusion currents balance in equilibrium.\n'+
'What happens to depletion width when reverse bias increases before breakdown?|It widens|It narrows|It vanishes|It becomes independent of voltage|Reverse bias increases the barrier and expands the depleted charge region.\n'+
'For 300 K silicon, what value is closest to kT/q?|25.9 mV|2.59 V|0.7 V|1.12 V|Thermal voltage is temperature-scaled energy per elementary charge.\n'+
'For a forward-bias ideality factor of 2, how much more voltage is needed for the same current ratio than for n=1?|Twice as much|Half as much|The same|Four times as much|A given exponential current ratio requires voltage change proportional to n.'),
'devices-8': applications(
'An NMOS has VGS=2.0 V and VT=0.7 V. What is the gate overdrive?|1.3 V|0.7 V|2.0 V|2.7 V|Subtract the threshold from gate-to-source voltage.\n'+
'For VGS=2.0 V, VT=0.7 V and VDS=0.5 V, which ideal NMOS region applies?|Triode|Saturation|Cutoff|Reverse breakdown|The device is above threshold, but VDS is below the 1.3 V overdrive.\n'+
'What gate-to-source voltage sign normally turns on an enhancement PMOS referenced to its source?|Negative|Positive|Exactly zero|Either sign equally|The gate must be sufficiently below the source to form the p-type channel.\n'+
'Which MOS-capacitor condition creates a surface channel of the opposite carrier type to the substrate?|Inversion|Accumulation|Flat-band|Ohmic contact|At sufficiently strong bias, minority carriers dominate at the surface.\n'+
'Which term describes local channel closure at the drain end of a JFET as its drain current saturates?|Pinch-off|Gate cutoff|Avalanche|Thermal runaway|Drain-end pinch-off and turning the whole channel off with gate bias are different conditions.'),
'analog-5': applications(
'A common-source stage has gm=4 mS and effective drain load 2 kΩ. What is the approximate gain with AC-grounded source?|−8|+8|−0.5|+0.5|Multiply gm by the load resistance and include the inversion sign.\n'+
'What happens to common-source gain magnitude if the effective drain load halves and gm is unchanged?|It halves|It doubles|It remains fixed|It becomes infinite|The approximate magnitude is gm times the effective drain load.\n'+
'Which BJT stage typically has low input resistance at its emitter?|Common base|Common emitter with base input|Common collector with base input|Emitter follower input at the base|Common base drives the emitter directly.\n'+
'If a CS stage has RD=4 kΩ and RL=4 kΩ, what drain load should you use if ro is neglected?|2 kΩ|8 kΩ|4 kΩ|16 kΩ|The two resistors appear in parallel in the small-signal circuit.\n'+
'What device parameter measures small output-current change per unit input-voltage change?|Transconductance|Voltage gain|Input capacitance|Thermal voltage|Transconductance has units of amperes per volt or siemens.'),
'analog-9': applications(
'What is the output slope of an ideal inverting integrator driven by a positive constant voltage?|Negative|Positive|Zero in all cases|Alternating|The integrator output derivative is −Vin/(RC).\n'+
'An inverting summer has equal input and feedback resistances. Inputs are 0.2 V and 0.3 V. What is its ideal output?|−0.5 V|+0.5 V|−0.1 V|+0.1 V|Each input is weighted by −1, so the output is the negative sum.\n'+
'What does a differentiator produce for the steady portion of a positive-going linear ramp?|A constant negative level in the inverting case|A positive ramp|A parabola|Always a pulse train|The ramp has constant positive slope, and an inverting differentiator negates it.\n'+
'Why is hysteresis useful when comparing a noisy input near a threshold?|It reduces repeated switching|It makes the supply rails infinite|It precisely measures signal frequency|It eliminates the need for an input|Separate transition thresholds prevent small fluctuations from reversing a recent state change.\n'+
'When should you use matched resistor ratios in a basic difference amplifier?|To cancel equal signals at both inputs|To create positive feedback|To hold the output at a supply rail|To form an ideal oscillator|Matching the ratios gives equal-magnitude opposite weights to the two inputs.'),
'digital-5': applications(
'Which expression equals the complement of A AND B?|¬A OR ¬B|¬A AND ¬B|A OR B|A XOR B|De Morgan’s law complements the inputs and changes AND to OR.\n'+
'Which expression simplifies AB + A¬B?|A|B|¬A|1|Factor A and use B+¬B=1.\n'+
'How many variables disappear from a product term formed by grouping four adjacent 1s?|2|1|3|4|A group of four spans two independently changing variables.\n'+
'Are the first and last columns of a standard Gray-ordered K-map adjacent?|Yes|No|Only if they are all zeros|Only in a one-variable map|Gray-code adjacency wraps across opposite edges.\n'+
'When should a don’t-care cell be included in a simplification group?|When it helps form a larger useful group|Always, regardless of result|Only if it cannot touch a 1|Never|Unspecified outputs may be chosen to simplify the resulting logic.'),
'digital-8': applications(
'How many binary flip-flops are needed for at least 13 states?|4|3|5|13|Three bits hold only eight states, while four hold sixteen.\n'+
'How many intended states are in a six-stage one-hot ring counter?|6|12|32|64|One asserted bit circulates through the six positions.\n'+
'A toggle stage receives a 20 kHz clock. What output frequency results?|10 kHz|20 kHz|40 kHz|5 kHz|The output changes state each clock and completes a cycle after two clocks.\n'+
'Which kind of counter typically shows larger accumulated transition delays at higher bit positions?|Ripple counter|Synchronous counter|Ideal one-clock parallel counter|Combinational decoder without state|Ripple stages respond sequentially through propagation delays.\n'+
'How many states are skipped by a mod-10 counter implemented with the four-bit binary state space?|6|4|10|16|Six of the sixteen binary patterns lie outside the intended ten-state sequence.'),
'signals-7': applications(
'What is the pole of 1/(s+4)?|−4|+4|0|1|Set the denominator to zero.\n'+
'For right-sided e^(−4t)u(t), what is the ROC?|Re(s)>−4|Re(s)<−4|Re(s)=−4|The entire s-plane|The time integral converges for a negative total exponent over t≥0.\n'+
'What is the unilateral transform of u(t) for Re(s)>0?|1/s|s|1/(s+1)|e^(−s)|Integrate e^(−st) from zero to infinity.\n'+
'What does delaying a causal waveform by 2 s multiply its Laplace transform by?|e^(−2s)|e^(+2s)|s−2|1/(s−2)|The delay introduces an exponential factor with a negative sign.\n'+
'Which extra information distinguishes right- and left-sided inverse transforms of the same bilateral rational expression?|Region of convergence|Only its numerator degree|An arbitrary gain|The sample rate|Different time supports produce convergence on different sides of a pole.'),
'signals-8': applications(
'What is the Z-transform of δ[n−2]?|z⁻²|z²|z⁻¹|1−z⁻²|The sum has only the n=2 term.\n'+
'What is the causal ROC of 1/(1−0.8z⁻¹)?|Magnitude of z greater than 0.8|Magnitude of z less than 0.8|Magnitude of z equal to 0.8|All z except zero|A causal rational sequence converges outside its outermost pole.\n'+
'At what locus is the DTFT obtained from a Z-transform when the locus lies in the ROC?|The unit circle|The imaginary axis|The real axis|The circle of radius two|Set z=exp(jω), whose magnitude is one.\n'+
'Which factor represents a one-sample delay in the bilateral Z-domain?|z⁻¹|z|1+z|1−z⁻¹|A delay of k samples multiplies by z raised to −k.\n'+
'Where must the poles of a stable causal rational discrete system lie?|Strictly inside the unit circle|On the unit circle|Strictly outside the unit circle|On the negative real axis only|The causal ROC must contain the unit circle.'),
'dsp-2': applications(
'At fs=12 kHz and N=120, what frequency does bin k=5 represent?|500 Hz|100 Hz|600 Hz|5 kHz|Use kfs/N = 5×12000/120.\n'+
'If the measured record stays fixed and you double the FFT length by adding zeros, what happens to bin spacing?|It halves|It doubles|It stays fixed|It becomes equal to the sample rate|Bin spacing is fs/N, even though recording duration did not increase.\n'+
'Which bin corresponds to DC in an ordinary unshifted DFT?|k=0|k=N−1|k=N/2|k=1|DC has zero frequency, corresponding to bin zero.\n'+
'What is the DC bin of the unscaled DFT of a block with samples [2,0,1,3]?|6|1.5|3|0|All DFT kernel values at k=0 are one, so sum the samples.\n'+
'For a real-input DFT, how is bin N−k related to bin k?|It is the complex conjugate|It is always zero|It is always purely real|It is unrelated|A real time sequence has conjugate symmetry in its spectrum.'),
'dsp-5': applications(
'How many samples of group delay does a symmetric five-tap causal FIR have in bands where phase is defined?|2|5|4|0|A symmetric length-N FIR has nominal group delay (N−1)/2.\n'+
'For y[n]=x[n]+0.7y[n−1], what is the pole?|0.7|−0.7|1.7|0|The denominator 1−0.7z⁻¹ vanishes at z=0.7.\n'+
'For an FIR with coefficients [1,−1], what is its DC gain?|0|1|2|−2|The DC gain equals the sum of the taps.\n'+
'How many delay elements are needed for the usual direct tap form of a six-tap FIR?|5|6|3|12|The taps run from the present input to five samples in the past.\n'+
'What happens if an uncancelled causal IIR pole moves to magnitude 1.1?|The filter becomes BIBO unstable|It becomes a finite impulse response|It gains exact linear phase|It automatically becomes a perfect integrator|A causal pole outside the unit circle prevents the ROC from containing it.'),
'control-6': applications(
'How many right-half-plane roots follow from a regular Routh first column +,+,−,+?|2|1|3|0|Count + to − and − to +.\n'+
'Where may extra root-locus branches end if there are more open-loop poles than zeros?|At infinity|At the origin only|At the original pole only|At the gain crossover|The excess branches follow asymptotes to zeros at infinity.\n'+
'At very small positive gain, where are the closed-loop poles relative to the root-locus start points?|Near the open-loop poles|Near the gain crossover|All at −1|All on the imaginary axis|At zero gain the characteristic denominator is the open-loop denominator.\n'+
'For a regular Routh array, what does no first-column sign change imply?|No right-half-plane roots|No poles anywhere|Exactly one unstable root|All roots are real|The test counts unstable-half-plane poles, not whether roots are complex.\n'+
'What happens when a root-locus branch moves into the right half-plane for a particular gain?|That closed-loop mode grows|All modes decay faster|The system order doubles|The DC gain is necessarily one|A continuous-time pole with positive real part yields an exponentially growing term.'),
'control-9': applications(
'For a two-state linear system, what controllability-matrix rank is needed for full controllability?|2|1|0|4|Rank must equal the state dimension.\n'+
'Which matrix represents direct input-to-output feedthrough?|D|A|B|C|The output equation is y=Cx+Du.\n'+
'Which is the two-state observability array?|Stack C above CA|Place B beside AB|Stack A above AC|Place C beside B|Observability uses output measurements and their dependence on powers of A.\n'+
'What is the natural dynamics matrix for ẋ=Ax+Bu with zero input?|A|B|C|D|With u=0 the differential equation reduces to ẋ=Ax.\n'+
'Can changing only the output sensor matrix C fix controllability?|No|Yes in all cases|Only for every two-state model|Only if D is nonzero|Controllability of the state dynamics depends on A and B.'),
'comm-2': applications(
'What is the thermal noise power in dBm for −174 dBm/Hz over 1 MHz?|−114 dBm|−174 dBm|−234 dBm|−54 dBm|Add 10 log₁₀(10⁶)=60 dB to the density.\n'+
'The received signal is −80 dBm and noise is −100 dBm. What is SNR?|20 dB|−20 dB|−180 dB|0.8 dB|Subtract noise power in dBm from signal power in dBm.\n'+
'For B=2 MHz and linear SNR=7, what Shannon capacity results?|6 Mbit/s|2 Mbit/s|14 Mbit/s|8 Mbit/s|log₂(1+7)=3, multiplied by 2 MHz.\n'+
'If input SNR is 25 dB and output SNR is 20 dB, what is noise figure in dB?|5 dB|45 dB|−5 dB|1.25 dB|Subtract output SNR in dB from input SNR in dB.\n'+
'At fixed receiver temperature, what happens to integrated thermal noise if noise bandwidth doubles?|It doubles|It quadruples|It halves|It stays fixed|With T unchanged, available thermal noise kTB is proportional to bandwidth.'),
'comm-10': applications(
'For OFDM useful duration 100 µs, what is subcarrier spacing?|10 kHz|100 kHz|1 kHz|1 MHz|Take the reciprocal of 100 microseconds.\n'+
'Which transform usually creates time-domain OFDM samples from modulated subcarriers?|IFFT|FFT|Laplace transform|Z-transform only|The transmitter maps frequency-bin symbols to time samples with an inverse transform.\n'+
'From which part of an OFDM useful symbol is the cyclic prefix copied?|Its end|Its beginning|Its middle|An unrelated random block|The end samples are prepended before transmission.\n'+
'Useful time is 80 µs and prefix is 20 µs. What fraction of transmitted symbol time is useful?|80%|20%|75%|100%|Divide the useful 80 µs by total 100 µs.\n'+
'What can happen if the channel delay spread exceeds the cyclic prefix?|Residual ISI and loss of orthogonality|The useful duration automatically increases|Noise disappears|The channel becomes pure line-of-sight|A short prefix cannot fully isolate neighboring useful symbols.'),
'em-5': applications(
'What is the voltage reflection coefficient of a matched 50 Ω load on a 50 Ω line?|0|+1|−1|0.5|Equal impedances make the numerator of Γ zero.\n'+
'What is VSWR if reflection magnitude is 1/3?|2|3|1.5|1|The ratio (1+1/3)/(1−1/3) equals two.\n'+
'Which reflection magnitude gives greater return loss?|0.1|0.5|1.0|All have the same return loss|Return loss uses −20 log₁₀ of the magnitude, so smaller reflection gives a larger value.\n'+
'What fraction of incident power reaches a load on an otherwise lossless line if reflection magnitude is 0.6?|64%|36%|40%|60%|Subtract the reflected fraction 0.6² from one.\n'+
'On a real 50 Ω line, what voltage reflection coefficient does a real 100 Ω termination give?|+1/3|−1/3|+1/2|−1/2|The load difference is 50 Ω and the sum is 150 Ω.'),
'em-7': applications(
'What is the approximate TE₁₀ cutoff of an air-filled guide with broad side 20 mm?|7.5 GHz|15 GHz|3.75 GHz|750 MHz|Use c/(2a) with a=0.020 m.\n'+
'What happens to TE₁₀ cutoff if broad side a doubles in the same medium?|It halves|It doubles|It quadruples|It remains constant|Cutoff is inversely proportional to the broad dimension.\n'+
'What mainly happens to a mode operated below its cutoff in a uniform lossless guide?|Its field decays along the guide|It propagates unchanged|It becomes TEM|Its operating frequency doubles|Below cutoff the longitudinal propagation constant is evanescent.\n'+
'What longitudinal field component is zero for a TM mode?|Magnetic field|Electric field|Both field components everywhere|The Poynting vector|TM means transverse magnetic, with H along propagation equal to zero.\n'+
'What physical feature primarily determines a cavity’s resonance frequencies?|Its dimensions and filling material|The circuit wire color|The DC supply level alone|The number of external switches|Boundary conditions and wave speed select field patterns that fit inside the cavity.'),
'antennas-2': applications(
'Antenna directivity is 8 and radiation efficiency is 25%. What linear gain results?|2|8|32|0.25|Gain equals radiation efficiency multiplied by directivity.\n'+
'What is the power factor for two matched linear polarizations at 90° to each other in the ideal model?|0|0.5|1|2|Their polarization vectors are orthogonal and cosine squared is zero.\n'+
'What happens to effective aperture if wavelength doubles at fixed linear gain?|It quadruples|It doubles|It halves|It stays fixed|Effective aperture is proportional to wavelength squared.\n'+
'What distinguishes gain from directivity?|Gain includes radiation efficiency|Directivity includes DC supply current|Gain is always greater|They use different angular directions by definition|Gain accounts for radiated versus accepted power, while directivity normalizes to radiated power.\n'+
'Two linearly polarized antennas differ by 45°. What fraction of polarization-matched power is received?|50%|25%|75%|100%|Square cos 45°, which equals 1/√2.'),
'antennas-5': applications(
'At fixed distance and antenna gains, what does doubling frequency do to free-space path loss?|It increases by about 6 dB|It decreases by about 6 dB|It increases by about 3 dB|It stays fixed|Wavelength halves and the Friis distance-to-wavelength factor doubles before squaring.\n'+
'Transmit power is 10 dBm, antenna gains are 2 and 3 dBi, and path loss is 60 dB. What is received power?|−45 dBm|−55 dBm|75 dBm|−65 dBm|Add both gains and subtract the loss from 10 dBm.\n'+
'Under free-space conditions, what happens to received power if distance triples?|It becomes one ninth|It becomes one third|It becomes one sixth|It triples|At fixed gains and wavelength, Friis gives inverse-square distance dependence.\n'+
'What term must be subtracted if a cable between the transmitter and antenna has 3 dB loss?|3 dB|6 dB|3 dBm|No term|Cable attenuation reduces the power reaching the transmit antenna.\n'+
'Which setting suits the basic Friis relation?|Unobstructed far-field free space|An arbitrary near-field coupling setup|Any blocked path regardless of geometry|An arbitrary multipath room without modelling reflections|The basic relation assumes propagating far-field energy and free-space spreading.'),
'embedded-2': applications(
'Which addressing mode uses an address held in a register to locate an operand in memory?|Register indirect|Immediate|Implied|Direct absolute only|The instruction points to a register containing the effective address.\n'+
'What value normally enables return from a subroutine?|A saved return address|The current data-bus width|The interrupt mask only|The reset vector always|The return operation resumes at the location following the call.\n'+
'After pushing A then B on a standard stack, which is popped first?|B|A|Both at once|Neither|A stack follows last-in, first-out order.\n'+
'What does an interrupt handler save as needed before overwriting CPU state?|The interrupted execution context|Only the data-bus clock rate|The entire external RAM on every interrupt|Only unused memory addresses|Active registers and control state may be needed to resume the interrupted code.\n'+
'Which register usually addresses the top or next stack position according to the processor convention?|Stack pointer|Program counter|Interrupt-vector base only|ALU carry flag|The stack pointer tracks the current stack location.'),
'embedded-6': applications(
'Which interface ordinarily sends data with start and stop bits but no shared clock line?|UART|SPI|I²C|Parallel memory bus|UART framing lets the receiver find each character using a configured baud rate.\n'+
'What electrical feature is normally needed on an I²C SDA line?|A pull-up|An impedance-matched RF terminator on every sensor|A high-voltage AC source|A permanently driven logic low|Open-drain devices pull low, and the pull-up restores logic high when released.\n'+
'What does polling require the CPU to do?|Read status repeatedly|Wait for DMA to decode every instruction|Treat data as a PWM waveform|Disable normal program execution forever|Polling software checks whether the device has work ready.\n'+
'What type of transfer commonly benefits from DMA?|A block from a peripheral to memory|A single arithmetic instruction inside the ALU|A manual change to a GPIO pin only|A read of the program counter only|DMA can handle repeated data moves without CPU intervention for each word.\n'+
'What commonly distinguishes an SPI device on a shared clock and data bus?|Its chip-select signal|Its UART stop bit|An I²C address sent on SDA|Its analog output voltage|The master typically activates one peripheral with its designated chip select.'),
'measure-3': applications(
'A 2.5-division-height trace is measured at 0.2 V/div with a 10× probe and the display is set to 1×. What voltage span is present?|5 V|0.5 V|0.05 V|50 V|Multiply divisions by scale and by the unaccounted probe factor.\n'+
'A waveform has period 4 ms. What is its frequency?|250 Hz|4 Hz|2.5 kHz|400 Hz|Frequency is the reciprocal of 0.004 seconds.\n'+
'One sine wave leads another by 0.2 ms with a common 2 ms period. What is phase lead?|36°|18°|72°|180°|The time shift is one tenth of a cycle, or 36 degrees.\n'+
'What should you do if an oscilloscope already applies the 10× probe setting to its scale?|Use the displayed scale directly|Multiply by ten again|Divide by 100|Ignore vertical scale entirely|The instrument already compensated the attenuation in its displayed scale.\n'+
'What do you measure vertically to compute peak-to-peak voltage?|Highest level minus lowest level|Highest level minus time origin|RMS reading divided by frequency|Period divided by screen width|Peak-to-peak compares the two extrema of one waveform.'),
'measure-5': applications(
'An ideal strain gauge has gauge factor 2 and longitudinal strain 0.001. What is fractional resistance change?|0.002|0.0005|0.02|2|Multiply gauge factor by strain.\n'+
'Which sensor uses a semiconductor with a strong resistance-temperature dependence?|Thermistor|LVDT|Thermocouple|Piezoelectric microphone|Thermistors exploit the temperature dependence of semiconductor resistance.\n'+
'What does a thermocouple’s voltage depend on?|The measurement-junction temperature relative to its reference|Only the absolute temperature of the measurement junction|The longitudinal displacement of a core|Only the supply current through a resistance bridge|The thermoelectric voltage depends on both junction temperatures.\n'+
'At the ideal centered position of an LVDT, what is the differential secondary output?|Approximately zero|Always maximum positive voltage|Always maximum negative voltage|The primary supply current exactly|Equal secondary responses cancel in the differential connection.\n'+
'Which sensor is commonly made from platinum and measured by its resistance?|RTD|LVDT|Thermocouple|Hall sensor|Platinum RTDs use a reproducible resistance-versus-temperature relation.')
};
