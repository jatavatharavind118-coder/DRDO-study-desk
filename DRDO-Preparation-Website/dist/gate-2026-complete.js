// Paraphrased from the official EC master paper; original question numbers and keys are retained.
const file='https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf';
const rows=[];
function add(number,topic,prompt,answer,steps,choices,figure,trap){
 const page=number<=30?number:number===31?30:number<=34?31:number===35?32:number<=58?number-3:number<=60?56:number<=62?57:58;
 rows.push({id:'g26-'+number,exam:'gate',topic,ref:'GATE 2026 · Q'+number,file,page,prompt,answer,steps,trap,
  response:choices?{type:[25,26,27,28,29,54,55,56,57,58].includes(number)?'MSQ':'MCQ',choices}:{type:'NAT',unit:({30:'V',31:'mW',32:'MHz',34:'%',35:'Hz',59:'dimensionless gain K',60:'V',61:'the stated coordinate units',62:'dimensionless gain',63:'probability',64:'A/mm²',65:'V'})[number]||'the requested units',places:number===59?0:2},
  ...(figure?{figure:'pyq-figures/g26-'+number+'.png',figureAlt:figure}:{}),number});
}
add(2,'apt','An examination has a maximum of 150 marks. S1: the highest score is 100. S2: the fourth-highest score is 76. S3: at least four students have scores within 25 marks of one another. Which implication must hold?','S1 and S2 together imply S3 · A',[
 'Arrange the scores from highest to lowest. S1 fixes the highest at 100; S2 fixes the fourth at 76.',
 'The second and third scores must lie between 76 and 100. Thus the top four occupy an interval only 100 − 76 = 24 marks wide.',
 'Since 24 is less than 25, S3 necessarily follows from S1 and S2 together.'
],['S1 and S2 together imply S3','S1 and S3 together imply S2','S2 and S3 together imply S1','S1 implies S3']);
add(3,'apt','Exactly three straight line segments pass through the partly hidden figure. Which piece P, Q, R or S completes the missing rectangle WXYZ?','S · option D',[
 'Follow each visible straight segment to the boundary of the missing rectangle; its slope cannot change inside the rectangle.',
 'The descending segment must join the upper-left approach to the lower-right exit. The rising segment must continue from below-left to above-right.',
 'The third, shallow rising segment must join the remaining left and right endpoints. Only piece S preserves all three directions and boundary positions.'
],['P','Q','R','S'],'Missing rectangle and four possible line-segment completions');
add(4,'apt','For y, p and n greater than 1, [log to base p^(1/n) of y] × [log to base y^(1/n) of p] = 16. Find n.','4 · option B',[
 'Apply change of base: log base p^(1/n) of y = n ln(y)/ln(p).',
 'The other logarithm equals n ln(p)/ln(y). Multiplication cancels both logarithm ratios, leaving n².',
 'Therefore n² = 16. The condition n > 1 selects n = 4.'
],['2','4','8','16']);
add(5,'apt','The statement “For every student, another student has a score at most ten marks away” is false. Which conclusion must be true?','At least one student is more than ten marks away from every other student · B',[
 'Write the statement as: for every student x, there exists a different student y such that |score(x) − score(y)| ≤ 10.',
 'Negation changes “for every” to “there exists”, and changes the inner “there exists” to “for every”.',
 'The negated inequality is > 10. Hence some student has a score more than ten marks away from every other student.'
],['Every student is more than ten marks away from every other student','Some student is more than ten marks away from every other student','Exactly one student is more than ten marks away from some students','Each student is more than ten marks away from exactly one other student']);
add(6,'apt','Complete the clues: recognize (8 letters), a book-length story (5), two of something (6), and one of two equal parts (4). Which word can be formed by rearranging their first letters?','CHIN · option A',[
 'Recognize gives IDENTIFY; a book-length story gives NOVEL.',
 'Two of something gives COUPLE; one of two equal parts gives HALF.',
 'The first letters are I, N, C and H. Rearranging them forms CHIN.'
],['CHIN','COIN','ITCH','NOSE']);
add(7,'apt','Children P, Q, R and adults X, Y play doubles. X and Y have different children among P, Q, R. No parent shares a team with their child, and no match contains two parent–child pairs. The matches are PX vs QR, PR vs XY, and RX vs QY. Which child has no parent playing?','R · option C',[
 'PX rules out P as X’s child. RX rules out R as X’s child. Therefore X’s child must be Q.',
 'In the third match RX vs QY, X and Q already form one parent–child pair. Y therefore cannot be R’s parent, because that would introduce a second pair.',
 'The parents have different children, so Y’s child is P. R is the child without a parent in the tournament.'
],['P','Q','R','X has no child playing']);
add(8,'apt','Pk is the perimeter of a square of side k. Find P1 + P2 + … + P10.','220 · option C',[
 'A square of side k has perimeter Pk = 4k.',
 'The required sum is 4(1 + 2 + … + 10). The sum of the first ten integers is 10 × 11 / 2 = 55.',
 'Multiplying gives 4 × 55 = 220.'
],['55','110','220','440']);
add(9,'apt','Atlantis has a circular land island of radius 2.5 stades, then successive water, land, water, land and water rings of widths 1, 2, 2, 3 and 3 stades. Find the land-area to water-area ratio.','0.75 · option C',[
 'The successive outer radii are 2.5, 3.5, 5.5, 7.5, 10.5 and 13.5 stades.',
 'Land area divided by π is 2.5² + (5.5² − 3.5²) + (10.5² − 7.5²) = 78.25.',
 'Water area divided by π is (3.5² − 2.5²) + (7.5² − 5.5²) + (13.5² − 10.5²) = 104.',
 'The common π cancels. The ratio is 78.25 / 104 = 0.7524…, which rounds to 0.75.'
],['0.45','0.60','0.75','0.90']);
add(10,'apt','Apply the same transformation used for the reference lettering to “GATE - 2026 / Aptitude Test”. Which result P, Q, R or S is correct?','R · option C',[
 'Compare the reference before and after transformation. Top and bottom are reversed, while left-to-right order is retained: this is reflection about a horizontal line.',
 'Apply that reflection to both text lines. The lower line moves to the top and both lines become vertically reflected.',
 'Choose the result that keeps the original left-to-right character order. This is R; a half-turn would also reverse the character order and is a different transformation.'
],['P','Q','R','S'],'Reference lettering transformation and alternatives P, Q, R and S');
add(11,'math','The system ẇ = Aw has initial state [1,1]ᵀ and solution w(t) = [eᵗ,e^(−2t)]ᵀ. Find A.','diag(1, −2) · option A',[
 'Differentiate the two components: ẇ(t) = [eᵗ, −2e^(−2t)]ᵀ.',
 'Each first component is multiplied by 1, and each second component is multiplied by −2. No cross-coupling is needed.',
 'Thus A = [[1,0],[0,−2]]. Substituting at t = 0 also reproduces the specified initial state.'
],['[[1,0],[0,−2]]','[[−1,0],[0,2]]','[[0,−2],[1,0]]','[[0,2],[−1,0]]']);
add(12,'math','For the surface z² = 2x² − y² at P = (1,0,√2), find a unit normal vector.','(√2 î − k̂)/√3 · option D',[
 'Write the surface as F(x,y,z) = 2x² − y² − z² = 0. Its gradient is normal to the surface.',
 'At P, ∇F = (4,0,−2√2). Its magnitude is √(16 + 8) = 2√6.',
 'Divide by 2√6 to obtain (√2,0,−1)/√3. Its negative is the other unit normal.'
],['î − √2 k̂','(2î − k̂)/3','√2 î − √3 k̂','(√2 î − k̂)/√3']);
add(15,'signals','Sample x1(t) = cos(20πt) and x2(t) = cos(100πt) at 40 Hz. Among the first ten samples, which statement is true?','The fourth through seventh corresponding samples are equal · D',[
 'At t = n/40, x1[n] = cos(πn/2) and x2[n] = cos(5πn/2).',
 'For integer n, 5πn/2 = πn/2 + 2πn. Adding an integer number of complete cycles does not change the cosine.',
 'Therefore the two sampled sequences are equal at every sample. In particular, their fourth through seventh samples are equal.'
],['The first three x1 samples are all greater','The last three x1 samples are all greater','All x2 samples are greater','The fourth through seventh corresponding samples are equal']);
add(16,'signals','An initially relaxed system satisfies y[n] = (5/6)y[n−1] − (1/6)y[n−2] + x[n], with x[n] = δ[n] − (1/3)δ[n−1]. Classify its response.','Stable and causal · A',[
 'With zero initial conditions, Y(z)[1 − (5/6)z⁻¹ + (1/6)z⁻²] = 1 − (1/3)z⁻¹.',
 'Factor the denominator as [1 − (1/2)z⁻¹][1 − (1/3)z⁻¹]. The second factor cancels with the numerator.',
 'The causal inverse transform is y[n] = (1/2)ⁿu[n]. It is zero for n < 0 and its absolute sum is the convergent geometric sum 2.'
],['Stable and causal','Stable and non-causal','Unstable and causal','Unstable and non-causal']);
add(17,'analog','An ideal non-inverting op-amp has a 1 kΩ ground resistor and feedback resistors 2 kΩ + 1 kΩ in series. Opening S gives output x. S shorts the 1 kΩ feedback resistor when closed. Find the new output.','3x/4 · C',[
 'With S open, the feedback resistance is 3 kΩ, so the gain is 1 + 3/1 = 4.',
 'Closing S bypasses the 1 kΩ feedback resistor. The remaining feedback resistance is 2 kΩ and the gain becomes 1 + 2/1 = 3.',
 'The input is unchanged, so the output is multiplied by 3/4. The new value is 3x/4.'
],['x','2x/3','3x/4','x/2'],'Op-amp circuit and switch across one feedback resistor');
add(18,'analog','In the op-amp/BJT circuit, Vi = 3 V, VCC = 12 V, VBE = 0.7 V and β = 99. The emitter resistor is 1 kΩ and collector resistor is 2 kΩ. Find the op-amp output current Io.','30 µA · D',[
 'Negative feedback makes the emitter voltage equal to Vi = 3 V.',
 'The emitter current is IE = 3 V / 1 kΩ = 3 mA.',
 'Since IE = (β + 1)IB, the base current is 3 mA / 100 = 30 µA. This is the op-amp output current Io.',
 'The collector current is 2.97 mA, so VC = 12 − (2.97 mA)(2 kΩ) = 6.06 V. VC > VE confirms forward-active operation.'
],['60 µA','6 µA','3 µA','30 µA'],'Op-amp driving the base of a feedback-controlled BJT');
add(19,'control','Two identical blocks 1/(s+4) are driven by the same error signal. Their outputs are subtracted to form the feedback signal. Find C(s)/R(s).','1/(s+4) · B',[
 'Call the common input of the two blocks E(s). Each block produces E(s)/(s+4).',
 'Their difference is zero, so the feedback entering the first summing junction is zero.',
 'Hence E(s) = R(s), and the output is C(s) = R(s)/(s+4). The overall transfer function is 1/(s+4).'
],['1/(s+4)²','1/(s+4)','2/(s+4)','1/(s²+8s+17)'],'Control block diagram with identical parallel paths and subtractive feedback');
add(20,'digital','The CMOS gate shown has two series p-channel pull-up transistors and two parallel n-channel pull-down transistors driven by A and B. Which logic operation does it implement?','NOR · A',[
 'If either input is high, its n-channel transistor provides a path from Y to ground, giving output 0.',
 'Only when A = B = 0 are both n-channel paths off and both series p-channel devices on, connecting Y to VDD.',
 'Thus Y is 1 only for input 00: Y = NOT(A OR B), which is NOR.'
],['NOR','OR','XOR','AND'],'CMOS pull-up and pull-down transistor network');
add(21,'em','For an isotropic free-space link, λ = 0.30 m, transmitted power is +10 dBm and received power is −90 dBm. Using Friis’ equation, find the distance in km.','15/(2π) km · B',[
 'The power ratio is PT/PR = 10^[(10 − (−90))/10] = 10¹⁰.',
 'For unit antenna gains, D = [λ/(4π)]√(PT/PR).',
 'Substitute λ = 0.30 m: D = 0.30 × 10⁵/(4π) m = 7500/π m = 15/(2π) km.'
],['15/(4π)','15/(2π)','75/(2π)','3/(4π)']);
add(23,'networks','A circuit obeys C dV/dt = I(t) − m(t), with I(t) = qδ(t) and V(0−) = V0. What initial-condition change is equivalent to the impulse, assuming m(t) has no impulse at zero?','Remove the input impulse and shift the initial voltage to V0 + q/C · A',[
 'Integrate the equation across an arbitrarily short interval containing t = 0.',
 'The left side gives C[V(0+) − V(0−)]. The impulse contributes charge q; the integral of an ordinary bounded m(t) tends to zero.',
 'Therefore V(0+) = V0 + q/C. For t > 0, solve C dV/dt = −m(t) with this shifted starting value.'
],['Initial voltage V0 + q/C','Initial voltage V0 + q/C + m(0−)','Initial voltage V0 − q/C + m(0−)','Initial voltage q/C']);
add(24,'em','A wave travelling along +z has E(z,t) = E0[x̂ cos(ωt − kz) + ŷ sin(ωt − kz)] in a right-handed coordinate system. Identify its polarization.','Right-handed circular polarization · A',[
 'The orthogonal components have equal amplitudes and a 90° phase difference.',
 'Their squared sum is E0², so the field magnitude is constant while its direction rotates. The tip therefore traces a circle.',
 'At a fixed z, the field rotates from +x toward +y as time increases. Its rotation vector points along the +z propagation direction, giving right-handed circular polarization under the paper’s convention.'
],['Right-handed circular','Left-handed circular','Linear','Linear at −45° to x̂']);
add(25,'devices','An ideal p–n junction is forward biased by 2 V. What is the magnitude of the energy separation between the electron and hole quasi-Fermi levels?','2 eV only · A',[
 'The quasi-Fermi-level separation under a junction bias V is an energy qV.',
 'An electron passing through a potential difference of 1 V gains energy 1 eV.',
 'For V = 2 V, the separation is therefore 2 eV. A voltage unit by itself is not an energy unit.'
],['2 eV','1 eV','2 V','1 V']);
add(28,'em','Which expressions represent the dielectric loss tangent for complex permittivity ε′ − jε″ and conductivity σ?','A and B',[
 'Write the current density as J = [σ + ωε″ + jωε′]E for the stated phasor convention.',
 'The real part is the dissipative current and the imaginary part is the reactive displacement current.',
 'Their ratio is tan δ = (σ + ωε″)/(ωε′). Thus both the real-to-imaginary current ratio and the explicit formula are correct.'
],['Real / imaginary part of total displacement current','(ωε″ + σ)/(ωε′)','Susceptibility / permittivity','Polarization vector / displacement vector']);
add(29,'devices','At the same constant base current, BJT 1 has the steeper active-region IC–VCE slope and BJT 2 has a smaller but nonzero slope. Compare their Early-voltage magnitudes.','|VA1| < |VA2|, and |VA2| is finite · C and D',[
 'In the active region, the Early effect can be written approximately as IC = IC0(1 + VCE/VA).',
 'A stronger output slope corresponds to a smaller Early-voltage magnitude. BJT 1 therefore has the smaller |VA|.',
 'BJT 2 still has a nonzero slope, so its Early voltage is finite. An infinite Early voltage would require a horizontal characteristic.'
],['|VA1| > |VA2|','|VA1| is infinite','|VA1| < |VA2|','|VA2| is finite'],'Output characteristics of the two transistors');
add(30,'networks','A 1 mA current source feeds a symmetric resistor bridge with four 1 kΩ arms and a 6 V source between its midpoints. Find the voltage Vo across the bridge’s top and bottom nodes.','1.00 V',[
 'Set the bottom node to zero and call the top voltage V and the midpoint voltages VL and VR.',
 'KCL at the top gives (2V − VL − VR)/1 kΩ = 1 mA.',
 'KCL around the midpoint supernode gives [2VL + 2VR − 2V]/1 kΩ = 0, hence VL + VR = V.',
 'Substitution into the top-node equation gives V/1 kΩ = 1 mA, so Vo = 1 V. The bridge voltage source determines the midpoint difference, not their sum.'
],null,'Four-resistor bridge with its current source and midpoint voltage source');
add(31,'networks','A parallel 1 µF capacitor, 2.2 mH inductor and 1 kΩ resistor are connected directly across vi(t) = 12 sin(ωt) V. Find the resistor’s average power at resonance, in mW.','72.00 mW',[
 'At parallel resonance, the inductive and capacitive susceptances cancel. The resistor remains across the ideal voltage source.',
 'The resistor’s RMS voltage is 12/√2 V, since 12 V is the sinusoidal peak value.',
 'Average power is Vrms²/R = (12²/2)/1000 W = 0.072 W = 72 mW.'
],null,'Parallel RLC network connected to the sinusoidal voltage source');
add(32,'comm','A 16-QAM AWGN link with maximum-likelihood detection carries 4 × 10⁶ information bits/s. Find the minimum ideal passband transmission bandwidth in MHz.','1.00 MHz',[
 'Each 16-QAM symbol represents log₂(16) = 4 bits.',
 'The symbol rate is Rs = 4 × 10⁶ / 4 = 10⁶ symbols/s.',
 'With ideal zero-roll-off Nyquist pulse shaping, each baseband component occupies Rs/2 and the real QAM passband occupies Rs. Thus the minimum passband bandwidth is 1 MHz.'
],null,null,'Do not confuse the one-sided baseband bandwidth Rs/2 with the total QAM passband bandwidth Rs.');
add(34,'em','For a lossy passive two-port, |S11| and |S21| intersect at −4 dB. Find the percentage of incident power dissipated at that frequency.','20.38%',[
 'An S-parameter magnitude of −4 dB corresponds to a power ratio 10^(−4/10) = 0.398107.',
 'Both reflected and transmitted power fractions equal this value, giving a total outgoing fraction of 2 × 0.398107 = 0.796214.',
 'The remaining fraction is dissipated: 1 − 0.796214 = 0.203786. Multiply by 100 to obtain 20.38%.'
],null,null,'Use 10^(dB/10) for power fractions; the S-parameter amplitude itself uses 10^(dB/20).');
add(35,'digital','A negative-edge-triggered JK flip-flop has J = K = 1 and a 10 Hz square-wave clock. Find the frequency of Q.','5.00 Hz',[
 'J = K = 1 puts a JK flip-flop in toggle mode.',
 'One falling edge changes Q to its complement. Two falling edges are needed to return Q to its starting value.',
 'The output period is therefore twice the clock period, so fQ = 10/2 = 5 Hz.'
]);
add(36,'math','Determine convergence of SA = Σ(n²/2ⁿ), n = 1 to infinity, and SB = 1 + 1/2 + 1/8 + 1/16 + 1/64 + 1/128 + … .','Both converge · A',[
 'For SA, the ratio of successive terms is [(n+1)²/n²]/2, which tends to 1/2 < 1. The ratio test proves convergence.',
 'Group SB as (1 + 1/2) + (1/8 + 1/16) + (1/64 + 1/128) + … .',
 'Each group is 1/8 times the preceding group. This geometric series has ratio 1/8 < 1, so SB also converges.'
],['Both converge','Neither converges','Only SA converges','Only SB converges']);
add(37,'signals','A real periodic signal has complex Fourier coefficients an and satisfies x(t − T/2) = −x(t). What must hold for each integer m?','a2m = 0 · A',[
 'Shifting a Fourier-series term by T/2 multiplies its nth coefficient by e^(−jπn) = (−1)ⁿ.',
 'The given half-wave symmetry requires (−1)ⁿ an = −an.',
 'For even n = 2m, this becomes an = −an, so an = 0. All even harmonics, including DC, vanish.'
],['a2m = 0','a2m = 1','a2m = a2m+1','a2m = −1']);
add(38,'math','X is uniform on [−1,1] and N is independent standard normal. Define Y = X + N and Z = X² + N. Find E[XY] and E[XZ] (the correlations used in this question).','1/3 and 0 · A',[
 'Symmetry gives E[X] = 0 and E[X³] = 0. Direct integration gives E[X²] = (1/2)∫ from −1 to 1 of x² dx = 1/3.',
 'Independence and the zero means give E[XN] = E[X]E[N] = 0. Thus E[XY] = E[X²] + E[XN] = 1/3.',
 'Similarly E[XZ] = E[X³] + E[XN] = 0. These are unnormalized correlations; a Pearson correlation coefficient is a different quantity.'
],['1/3 and 0','1/3 and 1/9','1/3 and 1/3','1 and 0']);
add(39,'networks','Parallel branches contain series RC–C and RL–L impedances. With L = 1 µH and C = 1 µF, their current phasors differ by 90° at 159.15 kHz. Find the nearest integer value of RC × RL in Ω².','1 · B',[
 'The capacitor branch current leads by θ1 with tan θ1 = XC/RC; the inductor branch current lags by θ2 with tan θ2 = XL/RL.',
 'Since θ1 + θ2 = 90°, tan θ1 tan θ2 = 1. Therefore RC RL = XC XL.',
 'XC XL = [1/(ωC)](ωL) = L/C = 10⁻⁶/10⁻⁶ = 1 Ω².'
],['0','1','2','10']);
add(40,'control','A unity-negative-feedback system has G(s) = 1/[(s+1)(s+2)] and compensator C(s) = K(s+α). Which positive K and α place the poles at −3 ± j√5?','K = 3, α = 4 · B',[
 'The characteristic polynomial is (s+1)(s+2) + K(s+α) = s² + (3+K)s + (2+Kα).',
 'The desired conjugate poles give (s+3)² + 5 = s² + 6s + 14.',
 'Equating the s coefficients gives 3 + K = 6, hence K = 3. Equating constants gives 2 + 3α = 14, hence α = 4.'
],['2, 3','3, 4','2, 4','3, 3']);
add(41,'control','A = [[−4,−1.5],[4,0]], B = [2,0]ᵀ, C = [1.5,0.625], D = 0. Find Y(s)/U(s) for zero initial conditions.','(3s + 5)/(s² + 4s + 6) · C',[
 'Use T(s) = C(sI − A)⁻¹B + D. Here sI − A = [[s+4,1.5],[−4,s]].',
 'Its determinant is s(s+4) + 6 = s² + 4s + 6. Multiplication of its inverse by B gives [2s,8]ᵀ divided by this determinant.',
 'Multiply by C: the numerator is 1.5(2s) + 0.625(8) = 3s + 5. D contributes zero.'
],['3s/(s²+4s−6)','(3s+5)/(s²+4s−6)','(3s+5)/(s²+4s+6)','3s/(s²+4s+6)']);
add(42,'digital','A byte-addressed memory of size 256 KB begins at hexadecimal address 2500. Find its final address.','424FF hexadecimal · C',[
 '256 KB = 256 × 1024 = 262144 bytes = hexadecimal 40000 bytes.',
 'The final location is start + size − 1 because the first location already occupies offset zero.',
 'Therefore the last address is 2500 + 40000 − 1 = 424FF in hexadecimal.'
],['2FFF','124FF','424FF','324FF']);
add(43,'signals','x(t) equals 2 for 0 ≤ t < 1 and zero otherwise. Find E[x(t)] / E[3x(−3t+5)].','1/3 · C',[
 'The original energy is ∫₀¹ 2² dt = 4.',
 'Multiplying amplitude by 3 multiplies energy by 9. Compressing time by a factor of 3 divides the energy integral by 3; a shift and time reversal do not change energy.',
 'Thus the transformed energy is (9/3) × 4 = 12, and the ratio is 4/12 = 1/3.'
],['3','1','1/3','1/9']);
add(44,'comm','For coherent QPSK over AWGN, Eb/N0 = 8.4 dB. Using erfc(u) ≈ exp(−u²)/(u√π), estimate the nearest output bit error rate.','10⁻⁴ · B',[
 'Convert the bit SNR to linear scale: γb = 10^(8.4/10) ≈ 6.918.',
 'For coherent QPSK, Pb = (1/2)erfc(√γb). The approximation gives Pb ≈ exp(−γb)/(2√(πγb)).',
 'Substitution gives about 1.06 × 10⁻⁴. The nearest listed value is 10⁻⁴.'
],['10⁻³','10⁻⁴','10⁻⁵','10⁻⁶']);
add(46,'signals','For x(t) = e^(−2t)u(t), 99% of its energy lies between −B and B Hz. Which range contains B?','63/π < B < 64/π Hz · B',[
 'The Fourier transform is X(f) = 1/(2 + j2πf), so |X(f)|² = 1/[4(1+π²f²)].',
 'Integrating between −B and B gives EB = arctan(πB)/(2π). The total signal energy is ∫₀∞ e^(−4t)dt = 1/4.',
 'Set EB/(1/4) = (2/π)arctan(πB) = 0.99. Therefore πB = tan(0.495π) ≈ 63.656.',
 'Consequently 63/π < B < 64/π Hz.'
],['B > 1 kHz','63/π < B < 64/π Hz','126/π < B < 128/π Hz','B < 1 Hz']);
add(47,'signals','The system in the diagram interconnects two LTI systems h1[n], h2[n], delays and adders. Which property is necessarily true?','It is linear and time invariant · B',[
 'Let a[n] = h1[n] * x[n]. The lower branch input is x[n] + a[n−1].',
 'The output is a[n] minus a delayed version of h2[n] * (x[n] + a[n−1]). Every operation is a convolution, fixed delay or linear sum.',
 'All these operations preserve linearity and time invariance. Causality cannot be guaranteed because h1 and h2 have not been stated to be causal.'
],['Causal','Linear and time invariant','Linear and time varying','Nonlinear'],'Interconnection of the two LTI systems, delays and adders');
add(48,'digital','A 4:1 multiplexer uses select bits S1 = x and S0 = z. Its inputs are I0 = 1, I1 = 0, I2 = 1 and I3 = y. Find f(x,y,z).','xy + z̅ · C',[
 'For z = 0, either I0 or I2 is selected. Both equal 1, so the output is 1 for all x and y.',
 'For z = 1, x = 0 selects I1 = 0 and x = 1 selects I3 = y. Thus the output in this case is xy.',
 'Combining the cases gives f = z̅ + zxy = z̅ + xy by absorption.'
],['xz + y','xy̅ + z','xy + z̅','x̅y + z̅'],'4:1 multiplexer connections');
add(49,'digital','An 8-bit shift-left register and D flip-flop start cleared. The register’s outgoing bit b7 drives D. The XOR with logic 1 feeds the complemented old D-flip-flop output into b0. Find b7…b0 just after five common positive clock edges.','00011111 · A',[
 'All state bits initially equal zero. The serial input is old Q XOR 1 = NOT(old Q).',
 'During the first five edges, the old outgoing register bit remains zero, so the D flip-flop stays at zero and every inserted serial bit is 1.',
 'The register contents after successive edges are 00000001, 00000011, 00000111, 00001111 and 00011111.',
 'Use pre-edge values for both clocked components; do not ripple the newly updated D value through the same clock edge.'
],['00011111','10111111','00111111','11000011'],'Shift register, D flip-flop and XOR feedback connections');
add(50,'analog','In the BJT amplifier shown, vi(t) = A cos(10⁵t) + B sin(10⁷t). Use VBE = 0.7 V, β = 99, Early voltage 100 V, thermal voltage 25 mV and zero source resistance. Neglect transistor parasitic capacitances. Find the best output approximation.','−9.1[A cos(10⁵t) + B sin(10⁷t)] · A',[
 'The bias divider has Thevenin voltage 12 × 25/(100+25) = 2.4 V and resistance 100 kΩ || 25 kΩ = 20 kΩ.',
 'For DC the emitter resistance is 500 Ω + 1 kΩ = 1.5 kΩ. Thus IB = (2.4 − 0.7)/[20 kΩ + 100(1.5 kΩ)] = 10 µA, and IC = 0.99 mA.',
 'Therefore gm = IC/VT = 39.6 mS and ro ≈ 100/0.00099 = 101 kΩ. At both given frequencies the bypass capacitor effectively shorts the 1 kΩ emitter resistor, leaving 500 Ω degeneration.',
 'The collector load is about 5 kΩ || 101 kΩ = 4.76 kΩ. The gain is approximately −4.76 kΩ/(500 Ω + 1/gm) ≈ −9.1.',
 'The common-emitter stage inverts both components. Apply the same approximate gain to both terms to obtain option A.'
],['−9.1[A cos(10⁵t) + B sin(10⁷t)]','9.1[A cos(10⁵t) − B sin(10⁷t)]','−190.4[A cos(10⁵t) + B sin(10⁷t)]','190.4[A cos(10⁵t) − B sin(10⁷t)]'],'Biased common-emitter amplifier with partial emitter bypass');
add(52,'em','A 50 Ω line is attached to a load with ΓL = 0.5∠30°. At the new input, the reflection coefficient lies at the diametrically opposite point of the same Smith-chart circle. Find the nearest input impedance.','17.7 − j11.8 Ω · B',[
 'A diametrically opposite point changes the reflection-coefficient phase by 180° while preserving its magnitude. Thus Γin = −ΓL = −0.4330 − j0.25.',
 'Convert reflection coefficient to normalized impedance using zin = (1 + Γin)/(1 − Γin).',
 'The result is approximately 0.3545 − j0.2363. Multiply by Z0 = 50 Ω to get Zin ≈ 17.7 − j11.8 Ω.'
],['20.7 − j5.1 Ω','17.7 − j11.8 Ω','97.5 − j65.0 Ω','97.5 + j65.0 Ω']);
add(53,'analog','For the ideal op-amp circuit shown, Vi = 2 V. The input and feedback resistors at the inverting node are each 1 kΩ. The junction after that feedback resistor connects to ground through 2 kΩ and to the op-amp output through 2 kΩ. Find Ix in the indicated direction.','3.0 mA · C',[
 'The non-inverting input is grounded, so negative feedback holds the inverting input at virtual ground, 0 V.',
 'The input current is 2 V / 1 kΩ = 2 mA. Zero op-amp input current makes that current flow through the 1 kΩ feedback resistor, putting the right-hand junction at −2 V.',
 'The grounded 2 kΩ resistor supplies another [0 − (−2)]/2 kΩ = 1 mA into the right-hand junction.',
 'By KCL, the output branch must carry 2 + 1 = 3 mA from that junction toward the op-amp output, which is the indicated Ix direction.'
],['2.0 mA','1.5 mA','3.0 mA','0 mA'],'Ideal op-amp circuit with the labelled output-branch current Ix');
add(54,'devices','An LED uses a direct-bandgap semiconductor with Eg = 1.3 eV. Given h = 6.63 × 10⁻³⁴ J s and c = 3 × 10⁸ m/s, which listed wavelength bands will it NOT emit at its bandgap transition?','1410 ± 20 nm, 1090 ± 20 nm, and 510 ± 20 nm · A, B and D',[
 'A photon emitted by the bandgap transition has energy approximately Eg. Use λ = hc/Eg.',
 'Convert Eg to joules: 1.3 × 1.6 × 10⁻¹⁹ = 2.08 × 10⁻¹⁹ J.',
 'Then λ ≈ (6.63 × 10⁻³⁴)(3 × 10⁸)/(2.08 × 10⁻¹⁹) = 956.25 nm.',
 'Only 950 ± 20 nm contains this wavelength. The other three bands are the requested non-emission choices.'
],['1410 ± 20 nm','1090 ± 20 nm','950 ± 20 nm','510 ± 20 nm']);
add(56,'digital','For f(w,x,y,z) = Σm(0,2,5,7,8,10,13,14,15), with w most significant and z least significant, identify the equivalent expressions A–D shown below.','A and D',[
 'The term x̅z̅ covers minterms 0, 2, 8 and 10. The term xz covers 5, 7, 13 and 15.',
 'Their union is missing just minterm 14 from the specified function. The term wxy adds 14 and 15, so expression A is valid.',
 'Alternatively wyz̅ covers minterms 10 and 14. Adding it to x̅z̅ + xz gives exactly the same required set, so D is valid.',
 'B fails at minterm 0, where the specified function must be 1. C fails at minterm 5. Consequently only A and D match every required truth-table entry.'
],['Expression A in the figure','Expression B in the figure','Expression C in the figure','Expression D in the figure'],'The four original Boolean expressions A, B, C and D');
add(57,'comm','A real narrowband signal has representation x(t) = A(t)cos[2πfc t + θ(t)]. For suitable choices of A(t) and θ(t), which statements are valid?','A, B and C',[
 'For PSK, choose a constant envelope and phase values carrying the symbols. Therefore statement A is possible.',
 'For AM, vary the envelope A(t) with the message while holding the carrier phase fixed. Therefore B is possible.',
 'A real band-limited Gaussian noise process in a narrow band also has an envelope-and-phase representation. Thus C is possible.',
 'Narrowband FM can be written in this same form with nearly constant A(t) and time-varying phase. The assertion that this form never represents narrowband FM is false.'
],['Can represent PSK','Can represent AM','Can represent band-limited Gaussian noise','Never represents narrowband FM']);
add(58,'signals','Let x1(t) = cos(2πnt) and x2(t) = 2sin(4πnt), where n is a positive integer. Which statements about orthogonality and harmonics are valid?','A, C and D',[
 'Over 0 ≤ t < 1/n, the product integral ∫2cos(2πnt)sin(4πnt)dt is zero, so the signals are orthogonal on that interval: A is true.',
 'Their energies on that interval are 1/(2n) and 2/n. They are not both unit energy, so they are not orthonormal: B is false.',
 'The second signal has frequency 2n while the first has frequency n, so x2 is the second harmonic: C is true.',
 'Over the shorter interval 0 ≤ t < 1/(2n), substitute u = 2πnt. The product integral is 4/(3πn), which is nonzero. Therefore D is also true.'
],['Orthogonal on [0,1/n)','Orthonormal on [0,1/n)','x2 is a harmonic of x1','Non-orthogonal on [0,1/(2n))']);
add(59,'control','A unity-negative-feedback system has open-loop transfer K/[s(s+7)(s+11)]. Find the positive K for marginal stability.','1386',[
 'The closed-loop characteristic polynomial is s(s+7)(s+11) + K = s³ + 18s² + 77s + K.',
 'The Routh first column is 1, 18, (18 × 77 − K)/18, K. The boundary of the stable region occurs at 18 × 77 − K = 0.',
 'Thus K = 1386. At this value the polynomial factors as (s+18)(s²+77), giving roots −18 and ±j√77.',
 'The imaginary-axis conjugate pair is simple and the third pole is in the left half-plane, confirming marginal stability.'
]);
add(60,'devices','A diode-connected nMOS has source grounded, its gate tied to its drain, and a 1 kΩ resistor from that node to 5 V. VTH = 1 V and μCox(W/L) = 2 mA/V². Neglect channel-length modulation. Find VG.','2.56 V',[
 'Because gate and drain are tied, VGS = VDS = VG. An on device automatically meets the saturation condition VDS ≥ VGS − VTH.',
 'The saturation current is ID = (1/2)(2 mA/V²)(VG − 1)² = (VG − 1)² mA.',
 'The resistor supplies ID = (5 − VG)/1 kΩ = (5 − VG) mA. Equating currents gives (VG − 1)² = 5 − VG.',
 'Rearrange to VG² − VG − 4 = 0. The physically valid root is (1 + √17)/2 = 2.56155… V, which rounds to 2.56 V.'
]);
add(61,'math','R is the diamond-shaped square with vertices (0,0), (1,1), (2,0) and (1,−1). Evaluate ∬R (x² + y² − 1) dx dy.','0.67',[
 'Shift the origin to the square’s center: u = x − 1, v = y. The region becomes |u| + |v| ≤ 1.',
 'The integrand becomes u² + v² + 2u. The integral of 2u vanishes by symmetry.',
 'Using the four quadrants, the remaining integral is 4∫₀¹∫₀^(1−u)(u² + v²) dv du.',
 'Integrating gives 4∫₀¹[u²(1−u) + (1−u)³/3]du = 4(1/12 + 1/12) = 2/3 ≈ 0.67.'
]);
add(62,'analog','An ideal inverting op-amp has a T feedback network. R1 is the input resistor; R2 links the inverting input to a midpoint; R3 links that midpoint to the output; R4 grounds the midpoint. All resistors equal 50 kΩ. Find the gain magnitude.','3.00',[
 'The non-inverting input is grounded, so the inverting node is at virtual ground.',
 'Call the feedback midpoint voltage Vx. KCL at the inverting input gives Vi/R1 + Vx/R2 = 0. Since R1 = R2, Vx = −Vi.',
 'KCL at the midpoint gives Vx/R2 + Vx/R4 + (Vx − Vo)/R3 = 0.',
 'All resistors are equal, so 3Vx − Vo = 0. Thus Vo = −3Vi and the gain magnitude is 3.'
]);
add(63,'comm','Independent received-bit errors have probability 0.10 at the input to a (7,4,1) Hamming decoder. Find the probability that it fails to recover the word correctly.','0.15',[
 'A single-error-correcting (7,4,1) decoder succeeds when the seven-bit received word has zero or one error.',
 'With independent bit errors p = 0.1, P(0 errors) = 0.9⁷ and P(1 error) = 7(0.1)(0.9⁶).',
 'Therefore Pfail = 1 − 0.9⁷ − 7(0.1)(0.9⁶) = 0.1496944.',
 'Rounded to two decimal places, the required probability is 0.15.'
]);
add(64,'devices','Electron concentration falls linearly from 2 × 10¹⁷ cm⁻³ at x = 1 µm to 1 × 10¹⁶ cm⁻³ at x = 4 µm. Given μn = 1400 cm²/(V s), VT = 25 mV and q = 1.6 × 10⁻¹⁹ C, find electron diffusion current density in A/mm².','−35.47 A/mm² along +x; magnitude 35.47 A/mm²',[
 'Use Einstein’s relation: Dn = μnVT = 1400 × 0.025 = 35 cm²/s.',
 'The distance change is 3 µm = 3 × 10⁻⁴ cm. Thus dn/dx = (10¹⁶ − 2 × 10¹⁷)/(3 × 10⁻⁴) = −6.3333 × 10²⁰ cm⁻⁴.',
 'Conventional electron diffusion current density is Jn = qDn(dn/dx) = −3546.67 A/cm².',
 'Since 1 cm² = 100 mm², divide by 100 to obtain −35.47 A/mm². Its magnitude is 35.47 A/mm²; the final key accepts the corresponding signed or magnitude ranges.'
]);
add(65,'devices','The input vi(t) = 6sin(ωt) V feeds the shown ideal-diode biased clipper. Both resistors are 10 kΩ; the diode reference sources are 2 V and 4 V. Find the maximum output voltage.','4.00 V',[
 'At the positive input peak, vi = 6 V. The upper-biased shunt branch containing D1 conducts and places the lower end of its 10 kΩ resistor at +2 V.',
 'The other diode is reverse biased for this positive-output condition. The output node is therefore connected to 6 V through one 10 kΩ resistor and to 2 V through the other.',
 'KCL gives (Vo − 6)/10 kΩ + (Vo − 2)/10 kΩ = 0.',
 'Hence 2Vo = 8 and Vo,max = 4 V. This is consistent with D1 conducting for Vo > 2 V.'
],null,'Ideal-diode clipper with the two bias supplies and 10 kΩ resistors');
export const gate2026Additional = rows;
