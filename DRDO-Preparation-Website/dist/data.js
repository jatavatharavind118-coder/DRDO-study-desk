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

export const drills = [
 ['math','A fair coin is tossed three times. What is the probability of exactly two heads?',['1/8','3/8','1/2','3/4'],1,'There are C(3,2)=3 successful equally likely sequences out of 2³=8.'],
 ['math','A 2×2 matrix has eigenvalues 3 and −2. What is its determinant?',['1','−1','6','−6'],3,'The determinant is the product of the eigenvalues: 3×(−2)=−6.'],
 ['networks','A 2 kΩ resistor is in series with 5 µF. What is the RC time constant?',['1 ms','4 ms','10 ms','100 ms'],2,'τ=RC = 2000×5×10⁻⁶ s = 10 ms.'],
 ['networks','A node receives 7 mA and sends 2 mA through one branch. What current leaves through the only other branch?',['2 mA','5 mA','7 mA','9 mA'],1,'By KCL, outgoing currents total 7 mA, so 7−2=5 mA.'],
 ['signals','What is the ideal Nyquist sampling rate for a baseband signal bandlimited to 4 kHz?',['2 kHz','4 kHz','6 kHz','8 kHz'],3,'The Nyquist rate is twice the highest frequency, giving 8 kHz.'],
 ['signals','An LTI system has h(t)=3δ(t−2). What is its output for x(t)?',['3x(t+2)','x(t−2)/3','3x(t−2)','3x(2t)'],2,'Convolving with a shifted impulse creates a matching time shift. The impulse amplitude scales the output.'],
 ['devices','What changes most directly when you increase temperature in Vₜ=kT/q?',['Vₜ increases linearly','Vₜ decreases','q increases','Vₜ stays fixed'],0,'k and q are constant, so thermal voltage increases linearly with absolute temperature.'],
 ['devices','Which mechanism moves charge carriers because their concentration varies with position?',['Drift','Diffusion','Recombination','Impact ionization'],1,'Diffusion is driven by a concentration gradient. Drift is driven by an electric field.'],
 ['analog','An ideal inverting op-amp has Rᵢₙ=2 kΩ and Rꜰ=10 kΩ. What is its voltage gain?',['−5','+5','−0.2','+0.2'],0,'For an inverting stage with negative feedback, Aᵥ=−Rꜰ/Rᵢₙ=−5.'],
 ['analog','An ideal non-inverting op-amp has Rꜰ=9 kΩ and Rg=1 kΩ. What is its gain?',['−9','+9','+10','+1'],2,'Aᵥ=1+Rꜰ/Rg=1+9=10.'],
 ['digital','How many flip-flops are needed for at least 24 counter states?',['4','5','6','8'],1,'2⁴=16 is too small and 2⁵=32 is sufficient.'],
 ['digital','An 8-bit ADC runs at 250 ksample/s. What is its raw output data rate?',['0.25 Mbit/s','1 Mbit/s','2 Mbit/s','8 Mbit/s'],2,'Multiply 8 bits/sample by 250,000 samples/s to get 2 Mbit/s.'],
 ['control','A continuous-time system has poles at −2 and +1. What is its stability?',['Asymptotically stable','Unstable','Marginally stable','It depends on the gain sign'],1,'The right-half-plane pole contributes an exponentially growing mode.'],
 ['control','For G(s)=4/(s+2) and unity negative feedback, where is the closed-loop pole?',['−2','+2','−4','−6'],3,'T=G/(1+G)=4/(s+2+4), so the pole is −6.'],
 ['comm','A 16-QAM link carries 8 Mbit/s. What is its symbol rate before overhead?',['1 Mbaud','2 Mbaud','4 Mbaud','8 Mbaud'],1,'16-QAM carries log₂16=4 bits per symbol. Divide 8 Mbit/s by 4.'],
 ['comm','What is the capacity of a 1 MHz AWGN channel at linear SNR=3?',['1 Mbit/s','2 Mbit/s','3 Mbit/s','4 Mbit/s'],1,'C = 10⁶ log₂(1+3) = 2×10⁶ bit/s.'],
 ['em','A 50 Ω line sees a 100 Ω real load. What is the voltage reflection coefficient?',['0','1/3','1/2','−1/3'],1,'Γ=(100−50)/(100+50)=1/3.'],
 ['em','How does the TE₁₀ cutoff change when the broad wall of an air-filled guide doubles?',['Doubles','Halves','Quadruples','Unchanged'],1,'For TE₁₀, f꜀=c/(2a), so doubling a halves cutoff.'],
 ['apt','A score rises from 40 to 50. What is the percentage increase?',['10%','20%','25%','40%'],2,'Use the original score as denominator: (50−40)/40=25%.'],
 ['apt','The mean of 4 numbers is 18. A number 28 is added. What is the new mean?',['18','19','20','22'],2,'The revised total is 4×18+28=100. Divide by 5 to get 20.']
].map(([topic,prompt,choices,key,why],i)=>({id:'p'+i,topic,prompt,choices,key,why}));

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
