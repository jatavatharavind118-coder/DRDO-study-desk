// Authored explanations for questions needing a fuller derivation or clearer notation.
const text=text=>({text}),eq=(equation,boxed=false)=>({equation,boxed}),end=conclusion=>({conclusion});
export const examSolutionGuides={
 'i25-1':{
  question:[text('Consider the causal signal'),eq('x(t)=δ(t)−frac{4}{3}e^{−t}u(t)+frac{1}{3}e^{2t}u(t)'),text('Find the poles and zeros of its Laplace transform X(s). Here δ(t) is the unit impulse and u(t) is the unit step.')],
  meaning:'First obtain X(s). Then factor its numerator and denominator: numerator roots give zeros, and uncancelled denominator roots give poles.',
  sections:[
   {title:'Take the Laplace transform',blocks:[text('Use the standard causal transform pairs:'),eq('δ(t)↔1;e^{−t}u(t)↔frac{1}{s+1};e^{2t}u(t)↔frac{1}{s−2}'),text('Apply linearity, keeping the signs and scale factors:'),eq('X(s)=1−frac{4}{3(s+1)}+frac{1}{3(s−2)}'),text('Both exponential terms are right-sided. Their common region of convergence is Re(s)>2.')]},
   {title:'Put the terms over a common denominator',blocks:[text('Choose (s+1)(s−2) as the common denominator:'),eq('X(s)=frac{(s+1)(s−2)−(4/3)(s−2)+(1/3)(s+1)}{(s+1)(s−2)}'),text('Expand only the numerator, then collect like powers of s:'),eq('N(s)=s^2−s−2−frac{4s}{3}+frac{8}{3}+frac{s}{3}+frac{1}{3}'),eq('N(s)=s^2−2s+1=(s−1)^2')]},
   {title:'Identify the poles and zeros',blocks:[eq('X(s)=frac{(s−1)^2}{(s+1)(s−2)}',true),text('The numerator and denominator have no common factor, so there is no pole-zero cancellation.'),eq('(s+1)(s−2)=0⇒s=−1,2'),text('The numerator vanishes at s=1. Its squared factor means this is a double zero:'),eq('(s−1)^2=0⇒s=1'),end('Choose B: poles at −1 and 2; a double zero at 1.')]}
  ],answer:'B — Poles: s=−1 and s=2. Zero: s=1, with multiplicity 2.'
 },
 'd08-4':{
  question:[text('A series RL circuit has the following values and current:'),eq('R=10 Ω;L=20 mH=0.020 H;i(t)=2sin(500t) A'),text('Does the current lead or lag the total applied voltage, and by what angle?')],
  meaning:'Find the phase angle of the total series impedance. That angle is the phase of voltage relative to current.',
  sections:[
   {title:'Read the angular frequency and convert L',blocks:[text('The coefficient of t inside the sine is the angular frequency. Convert millihenries to henries before multiplying:'),eq('ω=500 rad/s;L=0.020 H')]},
   {title:'Calculate the inductive reactance and impedance',blocks:[eq('X_L=ωL=500×0.020=10 Ω'),text('Resistance contributes the real part; inductance contributes positive imaginary reactance:'),eq('Z=R+jX_L=10+j10 Ω')]},
   {title:'Determine which waveform leads',blocks:[eq('φ=tan^{−1}(frac{X_L}{R})=tan^{−1}(1)=45°'),text('Because V=IZ, the voltage phase equals the current phase plus the impedance angle. The total voltage therefore leads current by 45°.'),end('Equivalently, current lags the voltage by 45°. Choose A.')]}
  ],answer:'A — Current lags the total voltage by 45°.'
 }
};
Object.assign(examSolutionGuides,{
 'i25-2':{
  question:[text('Match a 50 Ω source to a 200 Ω resistive load at 10 MHz. Use a lossless L-section that also behaves as a high-pass network. Which element order, from source to load, is correct?')],
  meaning:'Use impedance matching to locate the shunt element, then choose capacitor/inductor signs that give high-pass behavior.',
  sections:[
   {title:'Choose which side gets the shunt element',blocks:[text('The shunt reactance goes across the larger resistance, here the 200 Ω load. The series element is on the 50 Ω source side.'),eq('R_{low}=50 Ω;R_{high}=200 Ω')]},
   {title:'Calculate the matching reactances',blocks:[eq('Q=sqrt{frac{R_{high}}{R_{low}}−1}=sqrt{3}'),eq('|X_s|=QR_{low}=86.60 Ω;|X_p|=frac{R_{high}}{Q}=115.47 Ω'),text('For a high-pass L-match, select a series capacitor, Xs<0, and a shunt inductor, Xp>0.')]},
   {title:'Verify the input impedance',blocks:[eq('200∥j115.47=50+j86.60 Ω'),text('The series capacitor contributes −j86.60 Ω, canceling the imaginary part:'),eq('Z_{in}=−j86.60+(50+j86.60)=50 Ω',true),eq('C=frac{1}{2π(10^7)(86.60)}≈183.8 pF;L=frac{115.47}{2π(10^7)}≈1.838 μH'),end('Choose C: series capacitor, followed by an inductor in parallel with the load.')]}
  ],answer:'C — Series capacitor followed by a shunt inductor.'
 },
 'i25-3':{
  question:[text('A capacitor C is connected between the input and output of an amplifier. The signed voltage gain is A, so vo=Avi. Find the equivalent input capacitance using Miller’s theorem.')],
  meaning:'Write the current entering the bridging capacitor, then compare it with the current of a grounded input capacitor.',
  sections:[
   {title:'Write the voltage across the capacitor',blocks:[eq('v_C=v_i−v_o=v_i−Av_i=(1−A)v_i'),text('A is a signed gain. An inverting amplifier has A<0.')]},
   {title:'Compare the two current expressions',blocks:[eq('i=Cfrac{d(v_i−v_o)}{dt}=C(1−A)frac{dv_i}{dt}'),text('An equivalent capacitor Cin from input to ground must draw the same current:'),eq('i=C_{in}frac{dv_i}{dt}')]},
   {title:'Read the Miller capacitance',blocks:[eq('C_{in}=C(1−A)',true),text('For example, if A=−9, Cin=10C. The negative gain increases the effective input capacitance.'),end('Choose C.')]}
  ],answer:'C — Cin=(1−A)C.'
 },
 'i25-25':{
  question:[text('For a rectangular waveguide operating above cutoff, find the TE-mode wave impedance. Let η be the intrinsic impedance of the filling medium, fc the cutoff frequency and f the operating frequency.')],
  meaning:'Start from the TE wave-impedance relation and substitute the guide propagation constant.',
  sections:[
   {title:'Use the TE impedance relation',blocks:[eq('Z_{TE}=frac{ωμ}{β}'),text('This is the ratio of transverse electric to transverse magnetic field amplitudes for a propagating TE mode.')]},
   {title:'Substitute the propagation constant',blocks:[eq('β=ωsqrt{με}sqrt{1−(f_c/f)^2}'),text('Above cutoff, f>fc, so the square root is real and positive.')]},
   {title:'Simplify and check the limiting behavior',blocks:[eq('Z_{TE}=frac{sqrt{μ/ε}}{sqrt{1−(f_c/f)^2}}=frac{η}{sqrt{1−(f_c/f)^2}}',true),text('Near cutoff this impedance becomes very large. Far above cutoff it approaches η. These limits help distinguish the TE formula from the TM formula.'),end('Choose B.')]}
  ],answer:'B — ZTE=η/√[1−(fc/f)²], for f>fc.'
 },
 'i25-26':{
  question:[text('A 10-bit ADC has a quantization SNR of 62 dB. Its resolution is increased by two bits while the signal level and input range remain the same. Find the new SNR.')],
  meaning:'Determine how the smaller quantization step changes noise power, then convert the improvement to decibels.',
  sections:[
   {title:'Find the new quantization step',blocks:[text('Each extra bit doubles the number of quantization levels. Two bits give four times as many levels over the same input range:'),eq('Δ_{new}=frac{Δ_{old}}{2^2}=frac{Δ_{old}}{4}')]},
   {title:'Compare quantization-noise powers',blocks:[text('Under the usual uniform-error model, noise variance is Δ²/12. Reducing Δ by four therefore reduces noise power by sixteen.'),eq('frac{P_{n,old}}{P_{n,new}}=4^2=16')]},
   {title:'Add the SNR improvement',blocks:[eq('ΔSNR_{dB}=10log_{10}(16)≈12.04 dB'),eq('SNR_{new}=62+12.04≈74 dB',true),end('Choose B.')]}
  ],answer:'B — Approximately 74 dB.'
 },
 'i25-60':{
  question:[text('Find the Nyquist sampling rate of the signal'),eq('x(t)=5cos(100πt)+2sin(200πt)')],
  meaning:'Convert each angular frequency into hertz, identify the highest frequency, then double it.',
  sections:[
   {title:'Read the two signal frequencies',blocks:[text('Compare each sinusoid with sin(2πft) or cos(2πft):'),eq('f_1=frac{100π}{2π}=50 Hz;f_2=frac{200π}{2π}=100 Hz')]},
   {title:'Apply the Nyquist criterion',blocks:[text('The amplitudes 5 and 2 do not change the highest frequency. The upper frequency is 100 Hz.'),eq('f_{Nyquist}=2f_{max}=2×100=200 samples/s',true),text('This is the ideal Nyquist rate. Practical sampling normally uses a rate above it to allow an anti-alias filter transition band.'),end('Choose B.')]}
  ],answer:'B — Nyquist rate: 200 samples/s, listed as 200 Hz.'
 },
 'i24-1':{
  question:[text('The 3×3 matrix A has rows (4,2x,0), (4,0,2) and (12,6,0). It is singular. Find x.')],
  meaning:'A square matrix is singular when its determinant is zero. Expand along the column with two zero entries.',
  sections:[
   {title:'Expand along the third column',blocks:[text('Only the entry 2 in row 2 contributes. Its cofactor sign is negative:'),eq('det(A)=−2(4×6−2x×12)')]},
   {title:'Set the determinant to zero',blocks:[eq('det(A)=−2(24−24x)=48(x−1)'),eq('48(x−1)=0⇒x=1',true),end('Choose C.')]}
  ],answer:'C — x=1.'
 },
 'i20-1':{
  question:[text('A uniform plane wave propagates along +x. Its magnetic field points along +y. Which direction must its electric field point?')],
  meaning:'The electric and magnetic fields must produce a Poynting vector in the stated propagation direction.',
  sections:[
   {title:'Use the power-flow direction',blocks:[eq('S=E×H'),text('For a plane wave in the stated setting, E, H and the propagation direction form a right-handed set.')]},
   {title:'Choose the correct electric-field direction',blocks:[text('Using the Cartesian cross-product rule, ẑ×ŷ=−x̂. Reversing ẑ changes that sign:'),eq('(−ẑ)×ŷ=+x̂',true),end('Therefore E points along −z. Choose B.')]}
  ],answer:'B — Electric field along −z.'
 },
 'd08-6':{
  question:[text('A source has internal impedance Zs=R+jX, with R>0. Which complex load maximizes the average power delivered to it?')],
  meaning:'First cancel the net reactance. Then optimize the load resistance.',
  sections:[
   {title:'Write the load-power expression',blocks:[text('Let ZL=RL+jXL. Using an RMS Thévenin source voltage Vs:'),eq('P_L=frac{|V_s|^2R_L}{(R+R_L)^2+(X+X_L)^2}')]},
   {title:'Cancel the reactive part',blocks:[text('For a fixed positive RL, the numerator is unchanged by XL. Minimize the denominator by making the total reactance zero:'),eq('X+X_L=0⇒X_L=−X')]},
   {title:'Optimize the real part',blocks:[eq('P_L=|V_s|^2frac{R_L}{(R+R_L)^2}'),eq('frac{d}{dR_L}(frac{R_L}{(R+R_L)^2})=frac{R−R_L}{(R+R_L)^3}'),text('The derivative changes from positive to negative at RL=R, giving the maximum.'),eq('Z_L=R−jX=Z_s^*',true),end('Choose D: the complex-conjugate load.')]}
  ],answer:'D — ZL=R−jX, the complex conjugate of the source impedance.'
 },
 'd08-21':{
  question:[text('A BJT has common-base DC current gain α=0.98. Find its common-emitter DC current gain β.')],
  meaning:'Use the current definitions to convert from α to β without assuming they are equal.',
  sections:[
   {title:'Relate the three terminal currents',blocks:[eq('α=frac{I_C}{I_E};β=frac{I_C}{I_B};I_E=I_C+I_B')]},
   {title:'Rearrange for β and substitute',blocks:[eq('β=frac{α}{1−α}'),eq('β=frac{0.98}{1−0.98}=frac{0.98}{0.02}=49',true),end('Choose B.')]}
  ],answer:'B — β=49.'
 }
});
