import {gate2008Complete} from './gate-2008-complete.js';
import {isro2024Complete} from './isro-2024-complete.js';
import {gate2016To2017} from './gate-2016-2017-complete.js';
import {gate2018To2019} from './gate-2018-2019-complete.js';
import {expandedPyqs} from './pyq-expanded.js';
import {isro2025Complete} from './isro-2025-complete.js';
import {gate2026Additional} from './gate-2026-complete.js';
import {additionalPractice} from './practice-bank.js';

export const topics = [
  ['math','Engineering Mathematics','Linear algebra, calculus, differential equations and probability'],
  ['networks','Networks','KCL, KVL, equivalent circuits, transients and AC power'],
  ['signals','Signals and Systems','LTI systems, transforms, sampling and convolution'],
  ['devices','Electronic Devices','Semiconductors, diodes, BJTs and MOSFETs'],
  ['analog','Analog Circuits','Small-signal models, amplifiers, op-amps and feedback'],
  ['digital','Digital Circuits','Number systems, Boolean logic, counters and data converters'],
  ['control','Control Systems','Feedback, stability, transient response and frequency response'],
  ['comm','Communications','Modulation, noise, detection and information theory'],
  ['em','Electromagnetics','Transmission lines, waveguides, antennas and propagation'],
  ['apt','General Aptitude','Verbal, quantitative, analytical and spatial aptitude'],
].map(([id,name,scope])=>({id,name,scope}));

const paper = (name, file, answer) => ({name,file,answer});
export const papers = {
  gate: [paper('2026 official master paper','https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf','https://gate2026.iitg.ac.in/doc/download/2026/Keys/EC_Keys.pdf'),
    ...Array.from({length:19},(_,i)=>2025-i).flatMap(y=> y===2017
      ? [paper('2017 · Set 1','https://static.zollege.in/public/image/7e452867a7f04a6e5e534a784bb49fe5.pdf'),paper('2017 · Set 2','EC2-2017.pdf')]
      : [paper(String(y),'EC'+y+'.pdf')])],
  isro: [paper('26 October 2025 · Electronics','isro.pdf','2025-10-26_Final_Answer_Key.pdf'),
    paper('7 January 2024 · Electronics','2024-01-07_Question_Paper.pdf','2024-01-07_Final_Answer_Key.pdf')],
  drdo: [paper('2008 SET · Electronics · memory-based copy','drdo.pdf')]
};

const mathChoice = equation => ({equation});
const choice = (choices,type='MCQ') => ({type,choices});
const numerical = (unit,places) => ({type:'NAT',unit,places});

const responseFormats = {
  'g26-1': choice(['Normal','Diurnal','Abnormal','Exceptional']),
  'g26-26': choice(['a = −½, b = −½','a = ½, b = ½','a = −3, b = 0','a = ½, b = −3'],'MSQ'),
  'g26-51': choice([
    'A = ½, B = 3 kΩ, C = 1 mS, D = ½',
    'A = 2, B = 3 Ω, C = 1 S, D = 2',
    'A = 2, B = 6 kΩ, C = 2 mS, D = 2',
    'A = 2, B = 3 kΩ, C = 1 mS, D = 2'
  ]),
  'g25-30': choice([
    'Common-gate input resistance is infinite.',
    'Common-source input resistance is infinite.',
    'Common-source input and output are in phase.',
    'Common-drain input and output are in phase.'
  ],'MSQ'),
  'g25-36': choice(['Only statement (i) is true.','Only statement (ii) is true.','Both statements are false.','Both statements are true.']),
  'i25-26': choice(['62 dB','74 dB','50 dB','31 dB']),
  'i25-25': choice([
    mathChoice('Z_{TE}=frac{ηE}{H}'),
    mathChoice('Z_{TE}=frac{η}{sqrt{1−(f_{c}/f)^{2}}}'),
    mathChoice('Z_{TE}=η sqrt{1−(f_{c}/f)^{2}}'),
    'Constant'
  ]),
  'g26-13': choice([
    mathChoice('frac{e^{−2s}}{s^{2}(s−2)}'),
    mathChoice('frac{e^{−2(s−2)}}{s^{3}}'),
    mathChoice('frac{s e^{−2s}}{(s−2)^{2}}'),
    mathChoice('frac{e^{−2s}}{s^{3}}')
  ]),
  'g26-14': choice(['Drift','Diffusion','Tunneling','Ballistic transport']),
  'g26-22': choice(['10 kHz','64 kHz','5 kHz','20 kHz']),
  'g26-27': choice(['6','7','4','5'],'MSQ'),
  'g26-33': numerical('GHz',2),
  'g26-45': choice(['52','53','54','55']),
  'g26-55': choice(['C = B','C = 2B','C > 3B','C < B'],'MSQ'),
  'g25-44': choice(['61.96 dB and 10 Mbit/s','61.96 dB and 5 Mbit/s','33.36 dB and 10 Mbit/s','33.36 dB and 5 Mbit/s']),
  'g25-63': numerical('V',2),
  'g25-64': numerical('mW',1),
  'i25-60': choice(['100 Hz','200 Hz','400 Hz','50 Hz']),
  'i25-39': choice([
    'Rises linearly even above a modulation index of 1.',
    'Keeps rising beyond 1 and eventually saturates.',
    'Stops rising at 1 and stays constant above it.',
    'Falls once the index exceeds 1.'
  ]),
  'd08-4': choice(['Current lags voltage by 45°.','Current is in phase with voltage.','Current leads voltage by 45°.','Current lags voltage by 90°.']),
  'd08-6': choice(['R + jX','R','jX','R − jX'])
};

const q=(id,exam,topic,ref,file,page,prompt,answer,steps)=>({id,exam,topic,ref,file,page,prompt,answer,steps,response:responseFormats[id]});
export const questions = [
 q('g26-1','gate','apt','GATE 2026 · Q1','https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf',1,'Which word means the opposite of nocturnal?','Diurnal · option B',['Nocturnal means active at night.','Diurnal means active during daytime.']),
 q('g26-26','gate','math','GATE 2026 · Q26','https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf',26,'For the matrix with rows (2,1,1), (1,3,0) and (−1,a,b), which cases give nonzero determinant?','B and D',['Use cofactor signs +, −, + along the first row. The three contributions are 6b, −b and a+3.','For A the terms sum to −2.5−0.5+3=0. For C they sum to 0−3+3=0.','For B the determinant is 6 and for D it is −11.5. These are the two invertible cases.']),
 q('g26-51','gate','networks','GATE 2026 · Q51','https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf',48,'A T network has 1 kΩ in each series arm and a 1 kΩ shunt arm. Find its ABCD parameters.','A=D=2, B=3 kΩ, C=1 mS · option D',['Treat the middle 1 kΩ resistor as a shunt admittance of 1 mS. Each outer resistor is a series impedance of 1 kΩ.','Cascade the blocks in order: series, shunt, series. Use port-2 current directed outward. This gives A and D as 1+ZY, C as Y, and B as 2Z+Z²Y.','Here ZY=1. Therefore A=D=2, C=1 mS and B=3000 Ω. A and D are dimensionless.']),
 q('g25-30','gate','analog','GATE 2025 · Q30','EC2025.pdf',28,'Which statements are true for ideal DC-coupled, single-stage MOSFET amplifiers with finite load resistances?','Yes to both · options B and D',['In a common-source stage the signal is applied at the gate, which draws zero ideal DC current.','A common-drain stage is a source follower, so its small-signal voltage gain is positive.','A common-gate input is at the source and has finite incremental resistance.']),
 q('g25-36','gate','control','GATE 2025 · Q36','EC2025.pdf',31,'A plant is G(s)=1/(10s²) in unity negative feedback. Which of these statements are true? (i) No pure integral controller with positive gain can stabilize the closed loop. (ii) A PD controller with both gains positive can stabilize the closed loop.','Pure integral cannot. Positive PD can. · option D',['Integral control gives characteristic polynomial 10s³+Kᵢ. With Kᵢ>0, the complex conjugate roots have positive real parts.','With PD control the polynomial is 10s²+Kᴅs+Kₚ.','When Kᴅ and Kₚ are positive, both roots have negative real parts.']),
 q('i25-26','isro','digital','ISRO 2025 · Set A · Q26','isro.pdf',11,'A 10-bit ADC has quantization SQNR of 62 dB. Estimate the SQNR if two bits are added.','74 dB · option B',['Each extra bit approximately halves quantization step size.','Halving step size reduces quantization-noise power by about 6 dB.','Add about 12 dB to 62 dB.']),
 q('i25-25','isro','em','ISRO 2025 · Set A · Q25','isro.pdf',11,'In a rectangular guide, how does the TE wave impedance depend on cutoff frequency f꜀?','ZTE = η / √(1−(f꜀/f)²) · option B',['For propagation above cutoff, β=k√(1−(f꜀/f)²).','For TE modes, ZTE=ωμ/β.','Because ωμ/k=η, substituting β produces the given ratio.']),

 q('g26-13','gate','signals','GATE 2026 · Q13','https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf',13,'Find the Laplace transform of u(t−2) convolved with t u(t).','e^(−2s)/s³ · option D',['Transform the delayed step to e^(−2s)/s.','Transform the causal ramp to 1/s².','Multiply both transforms because the time-domain operation is convolution.']),
 q('g26-14','gate','devices','GATE 2026 · Q14','https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf',14,'What carrier transport mechanism dominates in Zener breakdown?','Tunneling · option C',['Heavy doping produces a narrow depletion layer.','A strong reverse field lets electrons tunnel across the barrier.','Avalanche breakdown instead arises from impact ionization.']),
 q('g26-22','gate','comm','GATE 2026 · Q22','https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf',22,'Find the equivalent Nyquist bandwidth when a four-level baseband source sends 10,000 symbols/s.','5 kHz · option C',['The specified rate is symbols per second.','Use B = Rₛ/2 for the ideal baseband Nyquist bandwidth.','10,000/2 = 5,000 Hz.']),
 q('g26-27','gate','digital','GATE 2026 · Q27','https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf',27,'How many flip-flops does a binary ripple counter need to count from 0 through 64?','7 flip-flops · option B',['The inclusive count has 65 distinct states.','Six flip-flops allow 64 states, which only covers 0 to 63.','Seven flip-flops allow 128 states, enough to implement the required count.']),
 q('g26-33','gate','em','GATE 2026 · Q33','https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf',31,'Find the dominant-mode cutoff frequency of an air-filled rectangular waveguide measuring 0.28 by 0.14 inches.','21.09 GHz',['The broad side is a = 0.28 × 0.0254 = 0.007112 m.','TE₁₀ has cutoff c/(2a).','Use c = 3×10⁸ m/s to obtain approximately 21.09 GHz.']),
 q('g26-45','gate','digital','GATE 2026 · Q45','https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf',42,'Find the two-digit decimal 10’s complement of 47.','53 · option B',['For a two-digit decimal word, subtract the number from 10².','100 − 47 = 53.']),
 q('g26-55','gate','comm','GATE 2026 · Q55','https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf',52,'An AWGN link has B = 1 MHz, noise density −174 dBm/Hz and received signal power −80 dBm. Which statements about the Shannon capacity C are true?','C > 3B, with C ≈ 11.3 Mbit/s',['A 1 MHz bandwidth includes one million hertz. Add 10 log₁₀ of that factor to the per-hertz density to get −114 dBm total noise.','Signal minus noise gives 34 dB. Convert the dB ratio to a power ratio by raising 10 to 34/10.','Shannon’s logarithm gives 11.3 bit/s/Hz. Multiply by 1 MHz to get 11.3 Mbit/s, which exceeds 3 Mbit/s.']),
 q('g25-44','gate','digital','GATE 2025 · Q44','EC2025.pdf',39,'A 10-bit ADC samples at 1 MHz with a full-scale span of 3.3 V. For a 500 kHz sinusoid, find the maximum ideal quantization SQNR and the raw output data rate.','61.96 dB and 10 Mbit/s · option A',['An ideal uniform N-bit ADC gives about 6.02N + 1.76 dB for a full-scale sine.','For N=10, that gives 61.96 dB.','Each of 10⁶ samples per second gives 10 bits.']),
 q('g25-63','gate','devices','GATE 2025 · Q63','EC2025.pdf',52,'An ideal diode has Iₛ = 10 µA at 300 K. What forward voltage produces 100 mA?','0.24 V',['At 300 K, kT/q is approximately 25.9 mV.','Rearrange Shockley’s equation to V = Vₜ ln(1 + I/Iₛ).','The ratio I/Iₛ is 10,000, giving approximately 0.238 V.']),
 q('g25-64','gate','em','GATE 2025 · Q64','EC2025.pdf',52,'On a lossless 50 Ω line terminated in 50 − j75 Ω, find the power absorbed by the load for 10 mW incident.','6.4 mW',['Γ = (−j75)/(100−j75).','|Γ|² = 75²/(100²+75²) = 0.36.','The load absorbs (1−0.36) × 10 mW = 6.40 mW.']),
 q('i25-60','isro','signals','ISRO 2025 · Set A · Q60','isro.pdf',26,'Find the Nyquist sampling rate for 5 cos(100πt) + 2 sin(200πt).','200 Hz · option B',['Convert rad/s to Hz by dividing by 2π.','The two frequencies are 50 Hz and 100 Hz.','Twice the largest frequency gives 200 samples/s.']),
 q('i25-39','isro','analog','ISRO 2025 · Set A · Q39','isro.pdf',16,'For a bipolar PWM inverter, how does the fundamental change when the modulation index rises from 0.8 to 1.2?','It increases beyond index 1 and eventually saturates · option B',['Below 1, sinusoidal PWM is in its linear modulation region.','Above 1 the waveform enters overmodulation, and the fundamental rises nonlinearly.','At the square-wave limit the fundamental cannot keep increasing.']),
 q('d08-4','drdo','networks','DRDO SET 2008 · Q4 · memory-based','drdo.pdf',1,'A series R–L circuit has R = 10 Ω and L = 20 mH. At 500 rad/s, how does its current phase compare with its voltage phase?','Current lags voltage by 45° · option A',['Inductive reactance is 500 × 0.020 = 10 Ω.','The impedance angle is tan⁻¹(10/10) = 45°.','V = IZ, so the voltage leads the current by that angle.']),
 q('d08-6','drdo','networks','DRDO SET 2008 · Q6 · memory-based','drdo.pdf',1,'A Thévenin source has impedance R + jX. What load impedance takes maximum average power?','R − jX · option D',['Match the load resistance to R.','Use load reactance −X to cancel the source reactance.','The resulting load is the complex conjugate of the source impedance.'])
];

questions.push(...gate2026Additional);
for (const item of isro2025Complete) {
 const index=questions.findIndex(q=>q.id===item.id);
 if(index>=0) questions[index]={...item,topic:questions[index].topic}; else questions.push(item);
}

for (const item of [...expandedPyqs,...gate2018To2019,...gate2016To2017,...isro2024Complete,...gate2008Complete]) {
 const index=questions.findIndex(q=>q.id===item.id);
 if(index>=0) questions[index]={...item,topic:questions[index].topic}; else questions.push(item);
}

export const drills = [
  [
    "math",
    "A fair coin is tossed three times. What is the probability of exactly two heads?",
    [
      "1/8",
      "3/8",
      "1/2",
      "3/4"
    ],
    1,
    "Use the binomial model because each toss is independent with head probability 1/2. Exactly two heads can appear as HHT, HTH or THH. Each ordered sequence has probability (1/2)³=1/8, so adding the three disjoint cases gives 3/8. Counting just one sequence would miss two equally valid arrangements."
  ],
  [
    "math",
    "A 2×2 matrix has eigenvalues 3 and −2. What is its determinant?",
    [
      "1",
      "−1",
      "6",
      "−6"
    ],
    3,
    "The determinant of a square matrix is the product of all its eigenvalues, counted with multiplicity. Here the product is 3×(−2)=−6. The negative sign must be retained. Adding the eigenvalues would instead give the trace, 1."
  ],
  [
    "networks",
    "A 2 kΩ resistor is in series with 5 µF. What is the RC time constant?",
    [
      "1 ms",
      "4 ms",
      "10 ms",
      "100 ms"
    ],
    2,
    "A series RC circuit has time constant τ=RC, using the resistance seen by the capacitor. Convert 2 kΩ to 2000 Ω and 5 µF to 5×10⁻⁶ F. Their product is 0.010 s=10 ms. In a natural discharge the capacitor voltage falls to 1/e of its initial value after this interval."
  ],
  [
    "networks",
    "A node receives 7 mA and sends 2 mA through one branch. What current leaves through the only other branch?",
    [
      "2 mA",
      "5 mA",
      "7 mA",
      "9 mA"
    ],
    1,
    "Kirchhoff’s current law states that current entering a node equals current leaving it, because charge does not accumulate at an ideal node. Write 7 mA=2 mA+I. Rearranging gives I=5 mA leaving through the other branch. Reversing the assumed direction would give −5 mA for the same physical current."
  ],
  [
    "signals",
    "What is the ideal Nyquist sampling rate for a baseband signal bandlimited to 4 kHz?",
    [
      "2 kHz",
      "4 kHz",
      "6 kHz",
      "8 kHz"
    ],
    3,
    "For ideal sampling of a baseband signal, the Nyquist rate is twice the highest frequency present. With fmax=4 kHz, the threshold is 2×4=8 ksample/s. The question asks for this ideal rate, often written 8 kHz for the sampling clock. Practical designs use a higher rate to allow anti-alias-filter roll-off and avoid ambiguity at the exact band edge."
  ],
  [
    "signals",
    "An LTI system has h(t)=3δ(t−2). What is its output for x(t)?",
    [
      "3x(t+2)",
      "x(t−2)/3",
      "3x(t−2)",
      "3x(2t)"
    ],
    2,
    "An LTI system produces y(t)=x(t)*h(t). Substituting h(t)=3δ(t−2), the impulse’s sifting property gives y(t)=3x(t−2). The minus sign inside x indicates a delay of two time units. The coefficient 3 scales amplitude rather than changing time."
  ],
  [
    "devices",
    "What changes most directly when you increase temperature in Vₜ=kT/q?",
    [
      "Vₜ increases linearly",
      "Vₜ decreases",
      "q increases",
      "Vₜ stays fixed"
    ],
    0,
    "Thermal voltage is VT=kT/q, where T must be measured on the absolute Kelvin scale. Both Boltzmann’s constant k and electron charge magnitude q are fixed. Therefore multiplying T by a factor multiplies VT by the same factor. For example, raising temperature from 300 K to 330 K raises VT by 10%, approximately from 25.9 to 28.5 mV."
  ],
  [
    "devices",
    "Which mechanism moves charge carriers because their concentration varies with position?",
    [
      "Drift",
      "Diffusion",
      "Recombination",
      "Impact ionization"
    ],
    1,
    "A carrier concentration gradient makes random carrier motion produce a net flow from higher to lower concentration. This transport mechanism is called diffusion. Drift, by contrast, is the directed response to an electric field. Both mechanisms can coexist, as they do in the equilibrium p-n junction where their currents balance."
  ],
  [
    "analog",
    "An ideal inverting op-amp has Rᵢₙ=2 kΩ and Rꜰ=10 kΩ. What is its voltage gain?",
    [
      "−5",
      "+5",
      "−0.2",
      "+0.2"
    ],
    0,
    "Ideal negative feedback holds the inverting input at virtual ground when the non-inverting input is grounded. Since no current enters the op-amp input, Vin/Rin must flow through Rf. This gives Vout/Vin=−Rf/Rin=−10/2=−5. The negative sign indicates inversion, and the result assumes the output remains within its operating range."
  ],
  [
    "analog",
    "An ideal non-inverting op-amp has Rꜰ=9 kΩ and Rg=1 kΩ. What is its gain?",
    [
      "−9",
      "+9",
      "+10",
      "+1"
    ],
    2,
    "In a non-inverting stage the feedback divider applies Vout Rg/(Rf+Rg) to the inverting input. Ideal negative feedback makes this equal to Vin. Rearranging gives gain 1+Rf/Rg=1+9/1=10. The positive sign means output and input have the same polarity during linear operation."
  ],
  [
    "digital",
    "How many flip-flops are needed for at least 24 counter states?",
    [
      "4",
      "5",
      "6",
      "8"
    ],
    1,
    "Each flip-flop stores one bit, so n flip-flops represent 2ⁿ possible states. Four give only 16 states, fewer than the required 24. Five give 32 states, so the minimum is ceil(log₂24)=5. A counter intended for exactly 24 states would also need logic to skip or reset the unused eight states."
  ],
  [
    "digital",
    "An 8-bit ADC runs at 250 ksample/s. What is its raw output data rate?",
    [
      "0.25 Mbit/s",
      "1 Mbit/s",
      "2 Mbit/s",
      "8 Mbit/s"
    ],
    2,
    "Raw data rate is the number of bits per sample multiplied by the number of samples per second. Here 8×250000=2000000 bit/s=2 Mbit/s. This counts conversion data only. Framing, synchronization and error-control bits would increase the transmission rate if they were included."
  ],
  [
    "control",
    "A continuous-time system has poles at −2 and +1. What is its stability?",
    [
      "Asymptotically stable",
      "Unstable",
      "Marginally stable",
      "It depends on the gain sign"
    ],
    1,
    "Continuous-time asymptotic stability requires every system pole to lie strictly in the left half-plane for the stated uncancelled modes. The pole at −2 produces a decaying exponential, but the pole at +1 produces eᵗ. That growing mode makes the system unstable. A decaying mode cannot compensate for a growing one in the stability test."
  ],
  [
    "control",
    "For G(s)=4/(s+2) and unity negative feedback, where is the closed-loop pole?",
    [
      "−2",
      "+2",
      "−4",
      "−6"
    ],
    3,
    "For unity negative feedback the transfer function is T(s)=G(s)/(1+G(s)). Substitute G(s)=4/(s+2) and multiply numerator and denominator by s+2. The result is T(s)=4/(s+6), whose pole is −6. Feedback shifts the pole from −2 to −6 in this case."
  ],
  [
    "comm",
    "A 16-QAM link carries 8 Mbit/s. What is its symbol rate before overhead?",
    [
      "1 Mbaud",
      "2 Mbaud",
      "4 Mbaud",
      "8 Mbaud"
    ],
    1,
    "A 16-QAM symbol represents one of 16 possible bit patterns, carrying log₂16=4 bits. Symbol rate is bit rate divided by bits per symbol. Thus 8 Mbit/s divided by 4 gives 2 Msymbol/s=2 Mbaud. The calculation excludes coding and framing overhead as specified."
  ],
  [
    "comm",
    "What is the capacity of a 1 MHz AWGN channel at linear SNR=3?",
    [
      "1 Mbit/s",
      "2 Mbit/s",
      "3 Mbit/s",
      "4 Mbit/s"
    ],
    1,
    "Shannon’s AWGN capacity formula is C=B log₂(1+SNR), with SNR as a linear power ratio. Insert B=10⁶ Hz and SNR=3 to get C=10⁶ log₂4. Since log₂4=2, capacity is 2×10⁶ bit/s=2 Mbit/s. This is a theoretical upper limit for reliable communication under the model assumptions."
  ],
  [
    "em",
    "A 50 Ω line sees a 100 Ω real load. What is the voltage reflection coefficient?",
    [
      "0",
      "1/3",
      "1/2",
      "−1/3"
    ],
    1,
    "The load voltage reflection coefficient is Γ=(ZL−Z0)/(ZL+Z0). With ZL=100 Ω and Z0=50 Ω, Γ=50/150=1/3. Its positive sign means the reflected voltage is in phase at the load for this resistive termination. The reflected power fraction is |Γ|²=1/9, so it is smaller than the voltage reflection magnitude."
  ],
  [
    "em",
    "How does the TE₁₀ cutoff change when the broad wall of an air-filled guide doubles?",
    [
      "Doubles",
      "Halves",
      "Quadruples",
      "Unchanged"
    ],
    1,
    "For an air-filled rectangular waveguide, the TE10 cutoff frequency is fc=c/(2a), where a is the broad-wall dimension. Replacing a with 2a gives fc,new=c/(4a)=fc,old/2. Therefore cutoff halves. This inverse dependence is a geometric result for the specified mode and filling material."
  ],
  [
    "apt",
    "A score rises from 40 to 50. What is the percentage increase?",
    [
      "10%",
      "20%",
      "25%",
      "40%"
    ],
    2,
    "Percentage increase uses the original value as the denominator. The absolute increase is 50−40=10. Dividing by the starting score gives 10/40=0.25, and multiplying by 100 gives 25%. Dividing by the final score would answer a different percentage question."
  ],
  [
    "apt",
    "The mean of 4 numbers is 18. A number 28 is added. What is the new mean?",
    [
      "18",
      "19",
      "20",
      "22"
    ],
    2,
    "An average of 18 over four numbers means their original sum is 4×18=72. Adding 28 produces a total of 100 across five numbers. The new mean is therefore 100/5=20. It rises because the added number is larger than the previous mean."
  ],
  [
    "math",
    "What is the trace of a matrix with eigenvalues 2, 4 and −1?",
    [
      "5",
      "−8",
      "8",
      "3"
    ],
    0,
    "The trace equals the sum of the eigenvalues, including multiplicities. Add 2+4−1=5. The determinant would instead be their product, −8; it is a different matrix invariant. No eigenvectors are needed to compute the trace."
  ],
  [
    "math",
    "For f(x)=x³−2x, what is f′(2)?",
    [
      "8",
      "10",
      "12",
      "6"
    ],
    1,
    "Differentiate each term using the power rule: f′(x)=3x²−2. Substituting x=2 gives 3×4−2=10. This is the slope of the tangent at x=2, rather than the value f(2)=4. Evaluate only after differentiating."
  ],
  [
    "math",
    "What is the integral of 2x from x=0 to x=3?",
    [
      "3",
      "6",
      "9",
      "18"
    ],
    2,
    "An antiderivative of 2x is x². Apply the limits to obtain 3²−0²=9. The integration constant cancels between the two limits. Geometrically this is the triangular area under y=2x over a base of 3 and height of 6."
  ],
  [
    "math",
    "A Poisson random variable has mean 3. What is its variance?",
    [
      "9",
      "√3",
      "6",
      "3"
    ],
    3,
    "For a Poisson distribution with parameter λ, both the mean and variance equal λ. The given mean fixes λ=3, so the variance is 3. Its standard deviation is √3, which must not be confused with variance. This equality is specific to the Poisson model."
  ],
  [
    "math",
    "If independent events have probabilities 0.4 and 0.5, what is the probability both occur?",
    [
      "0.2",
      "0.9",
      "0.1",
      "0.45"
    ],
    0,
    "Independence gives P(A∩B)=P(A)P(B). Multiplying 0.4×0.5 produces 0.20. Addition would count the union with an overlap correction, not simultaneous occurrence. Without independence the two marginal probabilities alone would not determine this answer."
  ],
  [
    "math",
    "What is the solution of dy/dt=−2y with y(0)=3?",
    [
      "3e²ᵗ",
      "3e⁻²ᵗ",
      "e⁻³ᵗ",
      "−2e³ᵗ"
    ],
    1,
    "Separate variables to obtain dy/y=−2dt. Integration gives y=Ce⁻²ᵗ, and y(0)=3 fixes C=3. Differentiating 3e⁻²ᵗ gives −6e⁻²ᵗ, equal to −2y. The negative exponent describes decay with time constant 0.5."
  ],
  [
    "math",
    "A square matrix has two identical rows. What is its determinant?",
    [
      "1",
      "−1",
      "0",
      "Depends on its trace"
    ],
    2,
    "Two identical rows make the rows linearly dependent. Subtracting one from the other creates a zero row without changing the determinant, proving it is zero. Therefore the matrix is singular and has no inverse. Its trace does not remove this dependence."
  ],
  [
    "math",
    "For z=3+j4, what is |z|?",
    [
      "7",
      "1",
      "25",
      "5"
    ],
    3,
    "The magnitude of a complex number a+jb is √(a²+b²). Here √(9+16)=5. The quantity 25 is the squared magnitude, while 7 is just the sum of the components. Magnitude measures distance from the origin in the complex plane."
  ],
  [
    "networks",
    "What is the equivalent resistance of 6 Ω and 3 Ω in parallel?",
    [
      "2 Ω",
      "9 Ω",
      "3 Ω",
      "18 Ω"
    ],
    0,
    "Parallel branches share the same voltage, and their currents add. Thus 1/R=1/6+1/3=1/2, giving R=2 Ω. The result is smaller than either branch resistance, as expected. Adding resistances directly would apply to a series connection."
  ],
  [
    "networks",
    "A 12 V source drives series resistors of 2 kΩ and 4 kΩ. What is the voltage across 4 kΩ?",
    [
      "4 V",
      "8 V",
      "6 V",
      "12 V"
    ],
    1,
    "The series resistance is 6 kΩ, so the current is 12/6000=2 mA. Ohm’s law across the 4 kΩ resistor gives 0.002×4000=8 V. Equivalently use the divider ratio 12×4/(2+4). This assumes no extra load is connected across that resistor."
  ],
  [
    "networks",
    "A 10 mH inductor is in series with 5 Ω. What is its time constant?",
    [
      "50 ms",
      "0.5 ms",
      "2 ms",
      "5 ms"
    ],
    2,
    "For a first-order RL circuit the natural time constant is L/R. Convert 10 mH to 0.010 H and divide by 5 Ω to obtain 0.002 s=2 ms. A decaying current falls to 1/e of its initial value in one time constant. RC is the capacitor-circuit formula and does not apply here."
  ],
  [
    "networks",
    "A 2 µF capacitor is charged to 10 V. What energy does it store?",
    [
      "10 µJ",
      "20 µJ",
      "200 µJ",
      "100 µJ"
    ],
    3,
    "Capacitor energy is W=CV²/2, found by integrating voltage against charge. Substitution gives 0.5×2×10⁻⁶×100=100×10⁻⁶ J. Hence the energy is 100 µJ. Energy depends on voltage squared, whereas charge would be CV=20 µC."
  ],
  [
    "networks",
    "A 10 V Thévenin source has resistance 5 Ω. What is its maximum load power?",
    [
      "5 W",
      "10 W",
      "2 W",
      "20 W"
    ],
    0,
    "For a resistive Thévenin source, maximum power occurs at RL=Rth=5 Ω. The current is then 10/(5+5)=1 A. Load power is I²RL=5 W, also equal to Vth²/(4Rth). At this condition an equal 5 W is dissipated in the source resistance."
  ],
  [
    "networks",
    "A load draws 2 A RMS from 100 V RMS at power factor 0.8. What is its real power?",
    [
      "200 W",
      "160 W",
      "250 W",
      "80 W"
    ],
    1,
    "For sinusoidal steady state, real power is Vrms Irms cosφ. Substituting gives 100×2×0.8=160 W. The apparent power is 200 VA and includes reactive exchange. Using RMS quantities avoids an additional factor of one half."
  ],
  [
    "networks",
    "A 1 mH inductor and 1 µF capacitor form an ideal resonant circuit. What is its angular resonant frequency?",
    [
      "1000 rad/s",
      "10000 rad/s",
      "31623 rad/s",
      "1000000 rad/s"
    ],
    2,
    "Resonance occurs when ωL=1/(ωC), so ω₀=1/√(LC). Here LC=10⁻³×10⁻⁶=10⁻⁹ s². Its inverse square root is approximately 31623 rad/s. To get frequency in hertz, divide this result by 2π."
  ],
  [
    "networks",
    "What is the impedance of a 10 µF capacitor at ω=1000 rad/s?",
    [
      "j100 Ω",
      "100 Ω",
      "−j10 Ω",
      "−j100 Ω"
    ],
    3,
    "Capacitor impedance is Z=1/(jωC)=−j/(ωC). The product ωC=1000×10×10⁻⁶=0.01, giving Z=−j100 Ω. The negative imaginary sign indicates capacitive reactance. Its magnitude falls as frequency increases."
  ],
  [
    "signals",
    "What is the fundamental period of cos(100πt)?",
    [
      "0.02 s",
      "0.01 s",
      "0.1 s",
      "50 s"
    ],
    0,
    "A sinusoid cos(ωt) repeats when its phase increases by 2π. Therefore T=2π/(100π)=0.02 s. Its frequency is 1/T=50 Hz. Angular frequency in rad/s must first be divided by 2π when converting to hertz."
  ],
  [
    "signals",
    "What is x(t)*δ(t−3)?",
    [
      "x(t+3)",
      "x(t−3)",
      "3x(t)",
      "δ(t)x(t)"
    ],
    1,
    "Convolution with δ(t−t₀) shifts a signal by t₀. In the convolution integral the impulse selects x(t−3), so the output is delayed by 3. The signal shape and amplitude remain unchanged. An advance would require δ(t+3)."
  ],
  [
    "signals",
    "An LTI system has h(t)=e⁻ᵗu(t). Is it BIBO stable?",
    [
      "No, because it is causal",
      "Only for periodic inputs",
      "Yes",
      "Only at t=0"
    ],
    2,
    "An LTI system is BIBO stable if the absolute integral of its impulse response is finite. Here the integral from 0 to infinity of e⁻ᵗ is 1. Therefore every bounded input produces a bounded output. Causality alone would not establish stability."
  ],
  [
    "signals",
    "What is the Laplace transform of e⁻²ᵗu(t), including its ROC?",
    [
      "1/(s−2), Re(s)>2",
      "1/(s+2), Re(s)<−2",
      "1/s, Re(s)>0",
      "1/(s+2), Re(s)>−2"
    ],
    3,
    "Insert the signal in the bilateral Laplace integral to obtain ∫₀∞e⁻⁽ˢ⁺²⁾ᵗdt. It evaluates to 1/(s+2) when Re(s+2)>0. Thus the ROC is Re(s)>−2. The ROC is essential because the same rational expression can describe a different sided signal."
  ],
  [
    "signals",
    "A 7 kHz real sinusoid is sampled at 10 ksample/s. What alias frequency lies in 0–5 kHz?",
    [
      "3 kHz",
      "7 kHz",
      "10 kHz",
      "17 kHz"
    ],
    0,
    "Sampling makes frequencies separated by integer multiples of fs indistinguishable. Subtract 10 kHz from 7 kHz to obtain −3 kHz. A real sinusoid at −3 kHz is equivalent to one at +3 kHz with the appropriate phase. Therefore the observed baseband alias is 3 kHz."
  ],
  [
    "signals",
    "For y[n]=x[n]+x[n−1], what is the DC gain?",
    [
      "0",
      "2",
      "1",
      "−1"
    ],
    1,
    "At DC, the input is constant: x[n]=A for every n. The output is A+A=2A, giving gain 2. Equivalently H(eʲω)=1+e⁻ʲω and H(1)=2 at ω=0. At ω=π the two terms instead cancel."
  ],
  [
    "signals",
    "What is the energy of x(t)=e⁻ᵗu(t)?",
    [
      "1",
      "2",
      "1/2",
      "Infinite"
    ],
    2,
    "Signal energy is ∫|x(t)|²dt. Squaring e⁻ᵗ gives e⁻²ᵗ, whose integral from 0 to infinity is 1/2. The integral of x(t) itself would be 1 and is not the energy. This finite-energy signal has zero infinite-time average power."
  ],
  [
    "signals",
    "A discrete-time LTI system has h[n]=δ[n]+2δ[n−1]. What is y[1] for x[n]=δ[n]?",
    [
      "0",
      "1",
      "3",
      "2"
    ],
    3,
    "An impulse input produces the impulse response itself, so y[n]=h[n]. At n=1, δ[1]=0 and δ[0]=1. Hence y[1]=0+2×1=2. This also follows by substituting the input into y[n]=x[n]+2x[n−1]."
  ],
  [
    "devices",
    "An ideal diode has Is=10 µA, ideality factor 1 and VT=25.875 mV. What forward voltage gives I=100 mA?",
    [
      "0.238 V",
      "0.026 V",
      "0.600 V",
      "2.38 V"
    ],
    0,
    "Use the Shockley equation I=Is(exp(V/VT)−1) and solve V=VT ln(1+I/Is). Convert the currents to the same units: I/Is=0.1/0.00001=10000. Thus V=0.025875 ln(10001)≈0.238 V. The low voltage follows from the specified saturation current; assuming a fixed 0.7 V drop would ignore the given diode model."
  ],
  [
    "devices",
    "At fixed temperature, a diode current rises from I to 10I with I much greater than Is and ideality factor 1. What is ΔV at VT=26 mV?",
    [
      "26 mV",
      "59.9 mV",
      "260 mV",
      "6 mV"
    ],
    1,
    "In strong forward bias the Shockley equation becomes I≈Is exp(V/VT). Taking the ratio of the two currents cancels Is and gives ΔV=VT ln(10). Therefore ΔV=26×2.3026≈59.9 mV. Equal multiplicative changes in current require equal additive voltage changes in this model."
  ],
  [
    "devices",
    "A forward-biased diode carries 2 mA with ideality factor 1 and VT=26 mV. What is its small-signal resistance?",
    [
      "52 Ω",
      "2 Ω",
      "13 Ω",
      "26 kΩ"
    ],
    2,
    "Differentiate the exponential diode law at its operating point to obtain rd≈nVT/I. With I=0.002 A, rd=0.026/0.002=13 Ω. This describes incremental voltage changes divided by incremental current changes. It differs from the DC ratio V/I and assumes current much larger than Is."
  ],
  [
    "devices",
    "A BJT has β=100 and collector current 2 mA. What is its base current?",
    [
      "200 mA",
      "2 mA",
      "200 µA",
      "20 µA"
    ],
    3,
    "In forward-active operation, β=IC/IB. Rearranging gives IB=2 mA/100=0.02 mA=20 µA. The emitter current would be IC+IB=2.02 mA. The stated β relation assumes forward-active operation rather than saturation."
  ],
  [
    "devices",
    "A BJT carries IC=1 mA at VT=25 mV. What is gm?",
    [
      "40 mS",
      "25 mS",
      "1 mS",
      "400 mS"
    ],
    0,
    "The BJT transconductance is the slope dIC/dVBE at the bias point. For the exponential collector-current law it is gm=IC/VT. Substituting gives 0.001/0.025=0.04 S=40 mS. A small 1 mV base-emitter change therefore produces approximately 40 µA collector-current change."
  ],
  [
    "devices",
    "A long-channel nMOS has VGS=3 V and threshold 1 V. What minimum VDS gives saturation in the square-law model?",
    [
      "1 V",
      "2 V",
      "3 V",
      "4 V"
    ],
    1,
    "The overdrive voltage is VOV=VGS−Vth=2 V. For a long-channel nMOS, saturation starts at VDS=VOV. Therefore the minimum drain-source voltage is 2 V. This boundary follows from the channel pinching off at the drain end."
  ],
  [
    "devices",
    "An ideal Zener regulator has a 10 V input, 5 V Zener and 1 kΩ series resistor, with no load. What is the Zener current?",
    [
      "10 mA",
      "1 mA",
      "5 mA",
      "15 mA"
    ],
    2,
    "The resistor drops the difference between source and regulated voltage: 10−5=5 V. Ohm’s law gives 5/1000=5 mA. With no external load, all of this current flows through the Zener. A connected load would subtract its current from the available Zener current."
  ],
  [
    "devices",
    "For silicon at equilibrium, n=10¹⁶ cm⁻³ and ni=10¹⁰ cm⁻³. What is p?",
    [
      "10¹⁰ cm⁻³",
      "10⁶ cm⁻³",
      "10¹⁶ cm⁻³",
      "10⁴ cm⁻³"
    ],
    3,
    "The equilibrium mass-action law is np=ni². Thus p=(10¹⁰)²/10¹⁶=10⁴ cm⁻³. Electrons are the majority carriers for the specified electron concentration. This relation assumes thermal equilibrium and the nondegenerate regime."
  ],
  [
    "analog",
    "An ideal op-amp follower has input 1.5 V within its operating range. What is its output?",
    [
      "1.5 V",
      "0 V",
      "−1.5 V",
      "Infinite"
    ],
    0,
    "The output is connected to the inverting input, providing negative feedback. Ideal linear operation forces the inverting input to equal the non-inverting input at 1.5 V. Because the inverting input is the output node, Vout=1.5 V. The open-loop gain is very large, but the closed-loop gain of this configuration is one."
  ],
  [
    "analog",
    "An inverting summing amplifier has two 1 V inputs, each through 10 kΩ, and a 10 kΩ feedback resistor. What is its output?",
    [
      "2 V",
      "−2 V",
      "1 V",
      "−1 V"
    ],
    1,
    "The inverting node is at virtual ground under ideal negative feedback. Each input contributes 1/10000=0.1 mA, so the feedback resistor carries 0.2 mA. The output must be −0.2 mA×10 kΩ=−2 V. The sign ensures the feedback current balances both input currents."
  ],
  [
    "analog",
    "A BJT common-emitter stage has gm=20 mS and effective collector load 2 kΩ. Ignoring ro and degeneration, what is its gain?",
    [
      "+40",
      "−10",
      "−40",
      "+10"
    ],
    2,
    "The transistor converts vbe to collector current gm vbe. That current produces an inverted voltage across the collector load, so Av=−gmRL. Multiplying −0.020×2000 gives −40. The result assumes the emitter is at AC ground and the transistor stays in its small-signal region."
  ],
  [
    "analog",
    "An amplifier has A=100 and negative-feedback factor β=0.09. What is its closed-loop gain?",
    [
      "100",
      "90",
      "11.1",
      "10"
    ],
    3,
    "The standard negative-feedback formula is Af=A/(1+Aβ). The loop gain is Aβ=9 and the denominator is 10. Thus Af=100/10=10. Approximating Af as 1/β would give 11.1 and is less accurate for this finite loop gain."
  ],
  [
    "analog",
    "A single-pole op-amp has gain-bandwidth product 1 MHz. What is its approximate bandwidth at noise gain 10?",
    [
      "100 kHz",
      "10 MHz",
      "1 MHz",
      "10 kHz"
    ],
    0,
    "For a dominant-pole voltage-feedback op-amp, noise gain times bandwidth is approximately the gain-bandwidth product. Divide 1 MHz by 10 to get 100 kHz. This estimate assumes the single-pole response remains valid near the crossover. Higher closed-loop gain trades bandwidth for amplification."
  ],
  [
    "analog",
    "An op-amp output is 2 sin(2π×100000t) V. What minimum slew rate is required?",
    [
      "0.2 V/µs",
      "1.26 V/µs",
      "12.6 V/µs",
      "0.126 V/µs"
    ],
    1,
    "Differentiate the output sinusoid: the peak slope is 2πfVp. With f=100 kHz and peak amplitude Vp=2 V, it is 1.2566×10⁶ V/s. Converting to volts per microsecond gives 1.26 V/µs. Using peak-to-peak amplitude instead of peak amplitude would overestimate the requirement by two."
  ],
  [
    "analog",
    "An RC low-pass has R=1 kΩ and C=100 nF. What is its −3 dB frequency?",
    [
      "100 Hz",
      "10 kHz",
      "1.59 kHz",
      "15.9 kHz"
    ],
    2,
    "For a first-order RC low-pass, fc=1/(2πRC). Here RC=1000×100×10⁻⁹=10⁻⁴ s. Therefore fc≈1591.5 Hz=1.59 kHz. At this frequency the voltage magnitude is 1/√2 of its low-frequency value."
  ],
  [
    "analog",
    "Two amplifier stages have voltage gains −5 and −4. What is their overall unloaded gain?",
    [
      "−20",
      "−9",
      "+9",
      "+20"
    ],
    3,
    "Cascaded voltage gains multiply when interstage loading is already accounted for or negligible. The product is (−5)×(−4)=+20. Each stage inverts the signal, so two inversions restore the original polarity. Adding gains would be appropriate only after expressing their magnitudes in decibels."
  ],
  [
    "digital",
    "What is the decimal value of binary 101101?",
    [
      "45",
      "41",
      "43",
      "53"
    ],
    0,
    "Assign binary place values 32,16,8,4,2,1 from left to right. The set bits contribute 32+8+4+1=45. The zero bits contribute nothing. This is unsigned interpretation; a signed two’s-complement interpretation would require an explicit signed convention."
  ],
  [
    "digital",
    "What is the 8-bit two’s-complement representation of −5?",
    [
      "00000101",
      "11111011",
      "11111010",
      "10000101"
    ],
    1,
    "Write +5 as 00000101. Invert all bits to get 11111010 and add one to get 11111011. Adding this pattern to 00000101 yields 1 00000000, whose carry is discarded in 8-bit arithmetic. The result therefore represents the additive inverse of 5."
  ],
  [
    "digital",
    "Which expression equals NOT(A AND B)?",
    [
      "A AND B",
      "NOT A AND NOT B",
      "NOT A OR NOT B",
      "A OR B"
    ],
    2,
    "De Morgan’s law converts the complement of a product into the sum of complements. Therefore NOT(A AND B)=(NOT A) OR (NOT B). The output is zero only when both A and B are one. This is precisely the behavior of a NAND gate."
  ],
  [
    "digital",
    "A T flip-flop with T=1 receives a 1 MHz clock. What is its output frequency?",
    [
      "1 MHz",
      "2 MHz",
      "250 kHz",
      "500 kHz"
    ],
    3,
    "With T=1 the output toggles on each active clock edge. It needs two edges to return to the same state and complete one output period. Consequently fout=fin/2=500 kHz. This assumes an edge-triggered flip-flop and a continuously asserted T input."
  ],
  [
    "digital",
    "An ideal 10-bit ADC spans 0–5 V. Using span/2ᴺ, what is its LSB size?",
    [
      "4.883 mV",
      "9.766 mV",
      "5 V",
      "0.488 mV"
    ],
    0,
    "An N-bit converter has 2ᴺ quantization bins. Divide the 5 V span by 1024 to get 0.0048828125 V=4.883 mV. This uses the bin-width convention specified in the question. Endpoint scaling by 2ᴺ−1 is a different convention and is not used here."
  ],
  [
    "digital",
    "How many select inputs does a 16-to-1 multiplexer require?",
    [
      "16",
      "4",
      "8",
      "2"
    ],
    1,
    "With k binary select lines, a multiplexer can distinguish 2ᵏ input addresses. Solve 2ᵏ=16 to obtain k=4. These four bits choose one data input at a time. The data-input count and the select-input count are different quantities."
  ],
  [
    "digital",
    "How many address bits are required for 4096 individually addressable memory locations?",
    [
      "10",
      "11",
      "12",
      "16"
    ],
    2,
    "Each address bit doubles the number of selectable locations. Since 4096=2¹², twelve address bits provide exactly enough addresses. This result depends on the number of locations, not the number of data bits stored at each location. Wider data words change capacity but not this address count."
  ],
  [
    "digital",
    "A JK flip-flop has J=K=1 at its active edge. What happens to Q?",
    [
      "Set to 1",
      "Reset to 0",
      "Hold",
      "Toggle"
    ],
    3,
    "The JK characteristic equation is Qnext=J·NOT Q+NOT K·Q. With J=K=1 this reduces to Qnext=NOT Q. Thus a stored zero becomes one and a stored one becomes zero. For an edge-triggered device this update occurs at the active edge."
  ],
  [
    "control",
    "For a first-order step response 1−e⁻ᵗ/τ, what percentage of final value is reached at t=τ?",
    [
      "63.2%",
      "36.8%",
      "50%",
      "100%"
    ],
    0,
    "Substitute t=τ into the response to obtain 1−e⁻¹. Since e⁻¹≈0.3679, the output is 0.6321 of its final value. Therefore it reaches about 63.2%. The remaining error, rather than the output, is 36.8%."
  ],
  [
    "control",
    "For s²+4s+25, what is the damping ratio in standard second-order form?",
    [
      "0.8",
      "0.4",
      "2",
      "5"
    ],
    1,
    "Compare with s²+2ζωns+ωn². The constant term gives ωn=5 rad/s, and 2ζ×5=4 gives ζ=0.4. Since 0<ζ<1, the corresponding standard system is underdamped. The coefficient of s alone is not the damping ratio."
  ],
  [
    "control",
    "A unity-feedback system has open-loop G(s)=10/s. What is the unit-step steady-state error, assuming closed-loop stability?",
    [
      "1",
      "0.1",
      "0",
      "10"
    ],
    2,
    "The open loop contains one integrator, making this a type-1 system. Its position error constant Kp=lim(s→0)10/s is infinite. Therefore the step error 1/(1+Kp) is zero. Closed-loop stability is required before applying this steady-state result."
  ],
  [
    "control",
    "For unity feedback G(s)=5/s, what is the steady-state error for a unit ramp?",
    [
      "0",
      "5",
      "1",
      "0.2"
    ],
    3,
    "The velocity error constant is Kv=lim(s→0)sG(s)=5. A unit ramp has slope one, so its steady-state error is 1/Kv=0.2. The closed-loop pole is at −5, satisfying the stability condition. Zero step error in a type-1 system does not imply zero ramp error."
  ],
  [
    "control",
    "For s²+3s+K, which range of K gives all roots strictly in the left half-plane?",
    [
      "K>0",
      "K<0",
      "K=0",
      "All real K"
    ],
    0,
    "For a real second-order polynomial s²+as+b, strict Hurwitz stability requires a>0 and b>0. Here a=3 is already positive, leaving K>0. At K=0 one root lies at the origin, so strict stability is lost. For K<0 the roots have opposite signs."
  ],
  [
    "control",
    "What is the high-frequency magnitude slope of 1/(1+s/10)?",
    [
      "+20 dB/decade",
      "−20 dB/decade",
      "−40 dB/decade",
      "0 dB/decade"
    ],
    1,
    "Above the pole at 10 rad/s, the denominator magnitude is approximately ω/10. Increasing ω by ten reduces the magnitude by ten. In decibels this is 20log₁₀(1/10)=−20 dB. Each additional first-order pole would contribute another −20 dB/decade asymptotically."
  ],
  [
    "control",
    "An open-loop phase is −135° at its gain crossover. What is the phase margin?",
    [
      "135°",
      "−45°",
      "45°",
      "315°"
    ],
    2,
    "Phase margin is the additional phase lag needed to reach −180° at unity loop magnitude. Compute PM=180°+(−135°)=45°. The measurement must be made at the gain crossover, where |G(jω)H(jω)|=1. It is distinct from gain margin, which is evaluated at the phase crossover."
  ],
  [
    "control",
    "For an underdamped second-order system, ωn=5 rad/s and ζ=0.6. What is its damped frequency?",
    [
      "5 rad/s",
      "3 rad/s",
      "8 rad/s",
      "4 rad/s"
    ],
    3,
    "The oscillation frequency is ωd=ωn√(1−ζ²). Substitute to obtain 5√(1−0.36)=5×0.8=4 rad/s. The real part of the poles is −ζωn=−3. Thus the poles are −3±j4, separating exponential decay from oscillation."
  ],
  [
    "comm",
    "A conventional AM signal has modulation index 0.5. What is total power divided by carrier power?",
    [
      "1.125",
      "1.5",
      "0.5",
      "2"
    ],
    0,
    "For single-tone conventional AM, total transmitted power is Pc(1+m²/2). With m=0.5, the ratio is 1+0.25/2=1.125. The two sidebands together carry 0.125Pc. Most of the transmitted power remains in the carrier at this modulation depth."
  ],
  [
    "comm",
    "An FM signal has peak deviation 75 kHz and maximum message frequency 15 kHz. What is Carson’s bandwidth?",
    [
      "90 kHz",
      "180 kHz",
      "150 kHz",
      "30 kHz"
    ],
    1,
    "Carson’s rule estimates occupied bandwidth as 2(Δf+fm). Substitution gives 2(75+15)=180 kHz. Both positive and negative sideband extents are included by the factor two. This is an approximation for practical occupied bandwidth, since ideal FM has infinitely many sidebands."
  ],
  [
    "comm",
    "A QPSK link transmits at 1 Mbaud. What is its raw bit rate?",
    [
      "0.5 Mbit/s",
      "1 Mbit/s",
      "2 Mbit/s",
      "4 Mbit/s"
    ],
    2,
    "QPSK has four possible symbols and carries log₂4=2 bits per symbol. Multiply 1 million symbols/s by 2 bits/symbol to get 2 Mbit/s. Coding, pilots and framing would reduce the net payload rate. The question asks for the raw modulation rate before those overheads."
  ],
  [
    "comm",
    "What is the entropy of a fair binary source?",
    [
      "0 bits/symbol",
      "0.5 bits/symbol",
      "2 bits/symbol",
      "1 bit/symbol"
    ],
    3,
    "Entropy is H=−Σp log₂p. With two equally likely symbols, H=−2×0.5×log₂0.5=1 bit/symbol. This is the maximum entropy for a binary alphabet. Unequal probabilities make the outcome more predictable and reduce entropy."
  ],
  [
    "comm",
    "A channel has linear SNR=100. What is its SNR in dB?",
    [
      "20 dB",
      "10 dB",
      "40 dB",
      "100 dB"
    ],
    0,
    "SNR is a power ratio, so its decibel value is 10log₁₀(SNR). Since log₁₀100=2, the result is 20 dB. The factor 20 applies to suitable amplitude ratios, not directly to a power ratio. Converting back gives 10^(20/10)=100."
  ],
  [
    "comm",
    "An ideal 8-bit PCM system samples at 8 ksample/s. What is its raw bit rate?",
    [
      "8 kbit/s",
      "64 kbit/s",
      "16 kbit/s",
      "256 kbit/s"
    ],
    1,
    "Each sample produces 8 binary digits. At 8000 samples per second the stream contains 8×8000=64000 bits/s. Hence the raw PCM rate is 64 kbit/s. Synchronization and channel coding would add to this required transmission rate."
  ],
  [
    "comm",
    "A 2 MHz AWGN channel has linear SNR=15. What is Shannon capacity?",
    [
      "2 Mbit/s",
      "4 Mbit/s",
      "8 Mbit/s",
      "30 Mbit/s"
    ],
    2,
    "Use C=B log₂(1+SNR), with SNR in linear form. Here 1+SNR=16 and log₂16=4. Thus C=2×10⁶×4=8×10⁶ bits/s. This is a theoretical reliable-communication limit under the AWGN assumptions, not a guaranteed practical payload rate."
  ],
  [
    "comm",
    "A coherent BPSK receiver in AWGN has Eb/N0=2 (linear). Which expression gives its bit error probability?",
    [
      "Q(2√2)",
      "Q(1)",
      "Q(√2)",
      "Q(2)"
    ],
    3,
    "For coherent BPSK with equiprobable bits in AWGN, Pb=Q(√(2Eb/N0)). Substitute Eb/N0=2 to obtain Q(√4)=Q(2). The input ratio must be linear rather than in dB. The Q function represents the upper-tail probability of a standard Gaussian random variable."
  ],
  [
    "em",
    "A lossless 50 Ω line ends in 50−j75 Ω and carries 10 mW incident power. What power reaches the load?",
    [
      "6.4 mW",
      "10 mW",
      "3.6 mW",
      "8 mW"
    ],
    0,
    "Compute Γ=(ZL−Z0)/(ZL+Z0)=(−j75)/(100−j75). Its squared magnitude is 75²/(100²+75²)=0.36. A lossless line delivers Pinc(1−|Γ|²)=10×0.64=6.4 mW. The reactive part causes reflection but consumes no average power itself."
  ],
  [
    "em",
    "A line has voltage reflection magnitude 0.5. What is its VSWR?",
    [
      "1.5",
      "3",
      "2",
      "0.5"
    ],
    1,
    "VSWR is (1+|Γ|)/(1−|Γ|). With |Γ|=0.5 the ratio is 1.5/0.5=3. This compares the maximum and minimum standing-wave voltage amplitudes along a lossless line. Reflected power is |Γ|²=0.25 of incident power, not 0.5."
  ],
  [
    "em",
    "A one-turn loop of area 2 m² sees uniform normal B(t)=0.3t T. What is the induced emf magnitude?",
    [
      "0.15 V",
      "6 V",
      "0.6 V",
      "0 V"
    ],
    2,
    "Faraday’s law gives |emf|=|dΦ/dt|, with Φ=BA for uniform normal flux density. The derivative dB/dt is 0.3 T/s. Multiplying by 2 m² gives 0.6 V. The sign of the emf is set by Lenz’s law and the chosen loop orientation; only the magnitude is requested."
  ],
  [
    "em",
    "A one-turn 5 m² loop has total resistance 10 Ω and uniform normal B(t)=0.5t T. Neglect inductance. What is current magnitude?",
    [
      "2.5 A",
      "0.05 A",
      "5 A",
      "0.25 A"
    ],
    3,
    "The flux is Φ=BA=5×0.5t=2.5t Wb. Its time derivative gives an induced emf magnitude of 2.5 V. With inductance neglected, Ohm’s law yields I=2.5/10=0.25 A. Lenz’s law sets the direction to oppose the increasing magnetic flux."
  ],
  [
    "em",
    "A wave travels in free space at 300 MHz. What is its wavelength, taking c=3×10⁸ m/s?",
    [
      "1 m",
      "0.1 m",
      "10 m",
      "3 m"
    ],
    0,
    "Wave speed, frequency and wavelength satisfy v=fλ. In free space λ=c/f=(3×10⁸)/(300×10⁶)=1 m. Both numerator and denominator use SI units. A dielectric with lower propagation speed would have a shorter wavelength at the same frequency."
  ],
  [
    "em",
    "An air-filled rectangular guide has broad wall a=3 cm. What is its TE10 cutoff frequency?",
    [
      "10 GHz",
      "5 GHz",
      "2.5 GHz",
      "1 GHz"
    ],
    1,
    "For the dominant TE10 mode, fc=c/(2a). Convert a=3 cm to 0.03 m and calculate 3×10⁸/0.06=5×10⁹ Hz. Thus cutoff is 5 GHz. Below cutoff the mode is evanescent rather than a propagating guided wave."
  ],
  [
    "em",
    "What is the input impedance of a lossless quarter-wave line with Z0=50 Ω and resistive load 100 Ω?",
    [
      "100 Ω",
      "50 Ω",
      "25 Ω",
      "200 Ω"
    ],
    2,
    "A lossless line of electrical length π/2 acts as an impedance inverter. At this length Zin=Z0²/ZL. Hence Zin=50²/100=25 Ω. This result holds at frequencies where the line is an odd multiple of a quarter wavelength."
  ],
  [
    "em",
    "A free-space plane wave has peak electric field 377 V/m. Using η0=377 Ω, what is its peak magnetic field?",
    [
      "377 A/m",
      "0.5 A/m",
      "142129 A/m",
      "1 A/m"
    ],
    3,
    "For a uniform plane wave in free space, E/H=η0. Therefore the peak H field is 377/377=1 A/m. The peak-to-peak or RMS convention must be consistent between both fields. The average power density would instead be Epeak Hpeak/2=188.5 W/m²."
  ],
  [
    "apt",
    "A vehicle travels 150 km in 3 hours. What is its average speed?",
    [
      "50 km/h",
      "45 km/h",
      "60 km/h",
      "450 km/h"
    ],
    0,
    "Average speed is total distance divided by total elapsed time. Dividing 150 km by 3 h gives 50 km/h. The units remain distance per time. Individual speeds during the trip are unnecessary if the total distance and total time are known."
  ],
  [
    "apt",
    "A price of ₹800 is discounted by 15%. What is the selling price?",
    [
      "₹6800",
      "₹680",
      "₹785",
      "₹720"
    ],
    1,
    "First compute the reduction: 15/100×800=₹120. Subtract it from the original price to get ₹680. Equivalently multiply ₹800 by 0.85. A 15% reduction uses the original price as its percentage base."
  ],
  [
    "apt",
    "A can finish a task in 6 days and B in 3 days. At constant independent rates, how long together?",
    [
      "9 days",
      "3 days",
      "2 days",
      "1 day"
    ],
    2,
    "A completes 1/6 of the task each day and B completes 1/3. Their combined daily rate is 1/6+1/3=1/2. The time for one whole task is 1 divided by 1/2, or 2 days. Completion times must be combined through rates rather than added directly."
  ],
  [
    "apt",
    "Two numbers are in ratio 2:3 and sum to 40. What is the larger number?",
    [
      "16",
      "20",
      "30",
      "24"
    ],
    3,
    "Represent the numbers as 2k and 3k. Their sum is 5k=40, so k=8. The larger number is 3k=24 and the smaller is 16. Checking 16+24=40 verifies both the total and the stated ratio."
  ],
  [
    "apt",
    "What is the simple interest on ₹5000 at 8% per year for 2 years?",
    [
      "₹800",
      "₹400",
      "₹5800",
      "₹832"
    ],
    0,
    "Simple interest is principal×annual rate×time. Using the rate as 0.08 gives 5000×0.08×2=₹800. The final amount would be ₹5800, which includes the principal. Compound interest would require a different calculation because interest itself would earn interest."
  ],
  [
    "apt",
    "A fair die is rolled once. What is the probability of a prime result?",
    [
      "1/3",
      "1/2",
      "2/3",
      "1/6"
    ],
    1,
    "The possible outcomes are 1 through 6, each with probability 1/6. The prime outcomes are 2, 3 and 5, giving three favorable outcomes. Therefore the probability is 3/6=1/2. The number 1 is not prime and must not be counted."
  ],
  [
    "apt",
    "A 120 m train passes a stationary pole at 54 km/h. How long does it take?",
    [
      "4 s",
      "6 s",
      "8 s",
      "10 s"
    ],
    2,
    "Convert 54 km/h to m/s by multiplying by 5/18, giving 15 m/s. To clear a point-sized pole the train must travel its own length, 120 m. The time is distance/speed=120/15=8 s. Passing a platform would require adding the platform length."
  ],
  [
    "apt",
    "A quantity rises by 20% and then falls by 20%. What is the net change?",
    [
      "No change",
      "4% increase",
      "2% decrease",
      "4% decrease"
    ],
    3,
    "Take an initial value of 100 for convenience. A 20% rise gives 120, and a 20% fall from that new base gives 120×0.8=96. The final value is 4 below the original 100, so the net change is a 4% decrease. The percentages do not cancel because their bases differ."
  ]
].map(([topic,prompt,choices,key,why],i)=>({id:'p'+i,topic,prompt,choices,key,why})).concat(additionalPractice);

export const interview = [
 ['networks','State the maximum power transfer condition for an AC circuit.','The load must be the complex conjugate of the Thévenin impedance.','Explain what happens to the reactive parts and to the load resistance.'],
 ['signals','Why does aliasing occur?','Sampling replicates the signal spectrum. With too low a sample rate, replicas overlap and different signals can become indistinguishable.','Explain why an analog anti-alias filter comes before the ADC.'],
 ['devices','How do drift and diffusion currents differ?','An electric field drives drift. A spatial carrier concentration gradient drives diffusion.','Name a region of a PN junction where both matter.'],
 ['analog','What is a virtual ground in an inverting amplifier?','With negative feedback and linear operation, the inverting input is held near the grounded non-inverting input at near-zero voltage.','Explain why it cannot supply current like a physical ground node.'],
 ['digital','How would you choose the counter width for 100 states?','Use ceil(log₂100)=7 flip-flops, and arrange the reset or state logic for the desired modulus.','Explain why six bits are insufficient.'],
 ['control','How can a closed-loop pole indicate instability?','A pole with positive real part contributes an exponentially growing mode in a continuous-time system.','Describe a test you could use without computing the roots.'],
 ['comm','Why can 16-QAM need a higher SNR than QPSK?','With similar average power, closer constellation points make symbol decisions more sensitive to noise.','State the bits per symbol for both modulations.'],
 ['em','What does a reflection coefficient of zero mean?','The load is matched to the transmission line, so there is no reflected wave at that termination.','Relate this to incident and delivered power on a lossless line.'],
 ['comm','How would you evaluate your STAR-RIS project with SDRs?','Compare the same link and traffic with baseline, transmit-only, and joint transmit-reflect configurations. Record packet error rate, throughput and latency under controlled conditions.','Explain how you would distinguish fewer retransmissions from a change in propagation delay.'],
 ['math','When is the binomial distribution appropriate?','It models the count of successes in a fixed number of independent Bernoulli trials with the same success probability.','Give an engineering example and state one reason the independence assumption could fail.']
].map(([topic,prompt,answer,follow],i)=>({id:'i'+i,topic,prompt,answer,follow}));
