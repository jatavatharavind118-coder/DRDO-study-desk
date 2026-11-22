import fs from 'node:fs';
import assert from 'node:assert/strict';

// Original parameterised exam-style problems; these are not official GATE PYQs.
// Six numerical instances in each of fifteen problem families per subject.
const bank=[];
const fmt=n=>Number(n.toFixed(4)).toString();
const log2=n=>Math.log2(n);
function add(topic,family,k,prompt,value,unit,wrong,concept,steps,check){
  const answer=fmt(value)+(unit?' '+unit:'');
  const alternatives=[...wrong,value/2,value*1.5,value*2,value+1,value-1];
  const distractors=[...new Set(alternatives.map(x=>fmt(x)+(unit?' '+unit:'')))].filter(x=>x!==answer);
  assert.ok(distractors.length>=3,`${topic}/${family}/${k}: distinct distractors`);
  const choices=distractors.slice(0,3); const key=(k+family.length)%4; choices.splice(key,0,answer);
  bank.push({id:`gate-${topic}-${family}-${k}`,topic,prompt,choices,key,
    why:[`Principle: ${concept}`,...steps.map((s,i)=>`Step ${i+1}: ${s}`),`Answer: ${answer}.`,`Check and interpretation: ${check}`].join('\n\n'),
    family,level:'GATE-style',format:'Original MCQ'});
}
for(let k=1;k<=6;k++){
  // Engineering Mathematics: algebra, probability, transforms and calculus.
  {
    const a=k+1,b=k+3,trace=a+b,det=a*b;
    add('math','matrix-power',k,`A 2×2 matrix A has trace ${trace} and determinant ${det}. What is trace(A³)?`,a**3+b**3,'', [trace**3,det**3,trace**2-2*det],
      'For a 2×2 matrix, trace(A³)=(trace A)³−3(det A)(trace A). This follows from the eigenvalue sum and product, even when the matrix is not diagonalizable.',
      [`Let the eigenvalues be λ₁ and λ₂. Then λ₁+λ₂=${trace} and λ₁λ₂=${det}.`,`Expand (λ₁+λ₂)³=λ₁³+λ₂³+3λ₁λ₂(λ₁+λ₂).`,`Rearrange to get trace(A³)=${trace}³−3×${det}×${trace}=${a**3+b**3}.`],
      `The eigenvalues here are ${a} and ${b}, whose cubes add to the same result. Cubing the trace directly retains unwanted cross terms.`);
  }
  {
    const n=k+2,p=0.2,ans=(n*p*(1-p)**(n-1))/(1-(1-p)**n);
    add('math','conditional-binomial',k,`${n} packets are transmitted independently, each with error probability 0.2. Given that at least one packet is erroneous, what is the probability that exactly one is erroneous? Round to four decimal places.`,ans,'',[n*p*(1-p)**(n-1),1-(1-p)**n,1-ans],
      'A conditional probability is the probability of the intersection divided by the conditioning-event probability. The error count has a binomial distribution.',
      [`Let X count erroneous packets: X~Binomial(${n},0.2).`,`P(X=1)=C(${n},1)×0.2×0.8^${n-1}=${fmt(n*p*(1-p)**(n-1))}.`,`P(X≥1)=1−P(X=0)=1−0.8^${n}=${fmt(1-(1-p)**n)}.`,`Since {X=1} is contained in {X≥1}, divide the first probability by the second: ${fmt(ans)}.`],
      'The conditional probability is larger than the unconditional probability of exactly one error because all zero-error trials have been excluded.');
  }
  {
    const a=k+1,ans=(Math.exp(-1)-Math.exp(-2));
    add('math','exponential-interval',k,`A component lifetime T is exponentially distributed with mean ${a} hours. Given T>${a} hours, find P(2T is between ${4*a} and ${6*a} hours | T>${a} hours). Round to four decimal places.`,ans,'',[Math.exp(-2)-Math.exp(-3),Math.exp(-1),1-Math.exp(-1)],
      'The exponential distribution is memoryless: after surviving a specified time, the residual lifetime has the same distribution as the original lifetime.',
      [`The event ${4*a}<2T<${6*a} is equivalent to ${2*a}<T<${3*a}.`,`The survival function is P(T>t)=exp(−t/${a}).`,`Conditioning on T>${a} gives [e⁻²−e⁻³]/e⁻¹=e⁻¹−e⁻².`,`Numerically the probability is ${fmt(ans)}. The strict endpoints do not matter for a continuous distribution.`],
      'Using the unconditional interval probability would omit the normalization for the component already having survived one mean lifetime.');
  }
  {
    const a=k+1;
    add('math','double-integral',k,`Evaluate ∫₀¹ ∫₀ˣ ${a}y^${a-1} dy dx. Round to four decimal places.`,1/(a+1),'',[1/a,a/(a+1),1/(a+2)],
      'In an iterated integral the inner variable is integrated first, while the outer variable is treated as a constant bound.',
      [`The inner antiderivative of ${a}y^${a-1} is y^${a}.`,`Evaluating at y=x and y=0 leaves x^${a}.`,`The remaining integral is ∫₀¹x^${a}dx=[x^${a+1}/${a+1}]₀¹=1/${a+1}=${fmt(1/(a+1))}.`],
      'The triangular integration region is 0≤y≤x≤1. Replacing the upper inner limit by 1 would incorrectly change the region to a square.');
  }
  {
    const a=k+1,b=a+2,ans=1/((a+1)*(b+1));
    add('math','ode-laplace',k,`A causal system obeys y″+${a+b}y′+${a*b}y=e⁻ᵗu(t), with y(0⁻)=y′(0⁻)=0. What is Y(s) evaluated at s=1? Round to four decimal places.`,ans/2,'',[ans,1/(a*b),1/(a+b+1)],
      'With zero initial conditions, differentiation in the Laplace domain multiplies by s. The input transform of e⁻ᵗu(t) is 1/(s+1).',
      [`Transform the differential equation: [s²+${a+b}s+${a*b}]Y(s)=1/(s+1).`,`Factor the quadratic as (s+${a})(s+${b}).`,`Therefore Y(s)=1/[(s+1)(s+${a})(s+${b})].`,`At s=1 the denominator is 2×${a+1}×${b+1}, yielding ${fmt(ans/2)}.`],
      'The input pole at −1 must be included. Evaluating only the system transfer function at s=1 would be twice the requested output-transform value.');
  }
  {
    const a=k+2,ans=a/2;
    add('math','constrained-minimum',k,`Real numbers x and y satisfy x+y=${a}. What is the minimum possible value of x²+y²?`,a*a/2,'',[a*a,a*a/4,a/2],
      'A quadratic restricted to a linear constraint can be minimized by substitution or by the Cauchy–Schwarz inequality.',
      [`Substitute y=${a}−x into the objective: f(x)=x²+(${a}−x)².`,`Differentiate: f′(x)=4x−${2*a}. Setting it to zero gives x=${fmt(ans)}, so y=${fmt(ans)}.`,`The second derivative is 4>0, establishing a strict minimum.`,`The minimum is 2×(${fmt(ans)})²=${fmt(a*a/2)}.`],
      `The inequality (x+y)²≤2(x²+y²) gives the same lower bound ${a*a}/2, with equality only at x=y.`);
  }
  {
    const a=k+1,ans=2*a*a;
    add('math','gaussian-moment',k,`X is a zero-mean Gaussian random variable with variance ${a}. What is Var(X²)?`,ans,'',[3*a*a,a*a,2*a],
      'For a zero-mean Gaussian with variance σ², the fourth moment is E[X⁴]=3σ⁴. Variance of X² uses both its second and fourth moments.',
      [`E[X²]=${a}, so (E[X²])²=${a*a}.`,`The Gaussian fourth moment is E[X⁴]=3×${a}²=${3*a*a}.`,`Var(X²)=E[X⁴]−(E[X²])²=${3*a*a}−${a*a}=${ans}.`],
      'Using E[X⁴] alone would give a raw moment, not a variance. Although E[X]=0, E[X²] is positive.');
  }
  {
    const a=k+1,ans=Math.PI/(2*a);
    add('math','improper-integral',k,`Evaluate ∫₀∞ 1/(x²+${a*a}) dx. Round to four decimal places.`,ans,'',[Math.PI/a,1/a,Math.PI*a/2],
      'The antiderivative of 1/(x²+a²) for a>0 is arctan(x/a)/a. An improper integral is evaluated as a limit.',
      [`Here a=${a}, so the antiderivative is arctan(x/${a})/${a}.`,`As x→∞, arctan(x/${a})→π/2; at x=0 it is zero.`,`Subtract the limits: the integral is π/(2×${a})=${fmt(ans)}.`],
      'The result decreases as a grows, consistent with the integrand becoming smaller at every fixed x. Integrating over the entire real line would double the answer.');
  }
  {
    const a=k+2,ans=a/(a+2);
    add('math','pdf-second-moment',k,`X has density f(x)=${a}x^${a-1} for 0<x<1 and zero otherwise. Find E[X²], rounded to four decimal places.`,ans,'',[a/(a+1),(a/(a+1))**2,1/(a+2)],
      'For a continuous random variable, E[g(X)]=∫g(x)f(x)dx over the support. A second moment is not generally the square of the mean.',
      [`First check normalization: ∫₀¹${a}x^${a-1}dx=1.`,`Multiply the density by x² to form ${a}x^${a+1}.`,`Integrate: E[X²]=[${a}x^${a+2}/${a+2}]₀¹=${a}/${a+2}=${fmt(ans)}.`],
      `Since 0<X<1, E[X²]≤E[X]=${fmt(a/(a+1))}. The computed second moment satisfies that bound.`);
  }

  // Networks: loaded dividers, natural responses, AC power and two-port analysis.
  {
    const v=10+k,r1=k+1,r2=2*k+3,rl=k+3,rp=r2*rl/(r2+rl),ans=v*rp/(r1+rp);
    add('networks','loaded-divider',k,`A ${v} V ideal source drives R₁=${r1} kΩ in series with R₂=${r2} kΩ. A load R_L=${rl} kΩ is connected across R₂. Find the load voltage in V, rounded to four decimal places.`,ans,'',[v*r2/(r1+r2),v*rl/(r1+rl),v*r1/(r1+rp)],
      'A load across the lower divider resistor changes that resistor to a parallel equivalent. Apply the divider rule only after forming this equivalent.',
      [`The lower equivalent is R₂∥RL=${r2}×${rl}/(${r2}+${rl})=${fmt(rp)} kΩ.`,`Total source resistance is ${r1}+${fmt(rp)}=${fmt(r1+rp)} kΩ.`,`The load shares the parallel-branch voltage: VL=${v}×${fmt(rp)}/(${fmt(r1+rp)})=${fmt(ans)} V.`],
      `The unloaded voltage is ${fmt(v*r2/(r1+r2))} V, which is larger. Treating the load as absent overestimates the actual voltage.`);
  }
  {
    const r=k+2,v=k+8,c=k+1,ans=v*(1-Math.exp(-1));
    add('networks','rc-switching',k,`An initially uncharged ${c} µF capacitor is charged from a ${v} V source through ${r} kΩ at t=0. Find vC at t=${r*c} ms, in V. Round to four decimal places.`,ans,'',[v*Math.exp(-1),v, v*(1-Math.exp(-2))],
      'The capacitor voltage in a first-order network is the final value plus the initial-to-final difference multiplied by exp(−t/τ).',
      [`The time constant is RC=${r}×${c} ms=${r*c} ms, using kΩ·µF=ms.`,`The initial voltage is 0 V and the DC final voltage is ${v} V.`,`Thus vC(t)=${v}[1−exp(−t/${r*c} ms)].`,`At the specified t=τ, vC=${v}(1−e⁻¹)=${fmt(ans)} V.`],
      'At one time constant charging has completed about 63.2% of the final voltage. The factor e⁻¹ instead describes the remaining voltage error.');
  }
  {
    const r=k+2,l=2*k+4,i=k/10,ans=i*Math.exp(-2);
    add('networks','rl-natural-response',k,`An inductor of ${l} mH carries ${i} A before being disconnected from its source and allowed to discharge through ${r} Ω at t=0. Find current at t=${2*l/r} ms in A. Round to four decimal places.`,ans,'',[i*Math.exp(-1),i*(1-Math.exp(-2)),i/2],
      'Inductor current is continuous through switching when there is no impulse voltage. The source-free RL response is i(t)=i(0⁺)exp(−Rt/L).',
      [`The initial current after switching is ${i} A.`,`The time constant is L/R=${l}/${r} ms=${l/r} ms.`,`The requested instant is twice the time constant, so i=${i}e⁻²=${fmt(ans)} A.`],
      'The resistor dissipates stored magnetic energy and current decays monotonically to zero. The natural-response formula does not contain a charging term 1−e⁻ᵗ/τ.');
  }
  {
    const v=10+2*k,r=k+2,x=k+1,ans=v*v/(4*r);
    add('networks','ac-power-match',k,`An AC Thévenin equivalent has RMS voltage ${v} V and impedance (${r}+j${x}) Ω. The load impedance can be any passive complex value. What is the maximum average load power in W?`,ans,'',[v*v/(2*r),v*v/r,v*v/(4*Math.sqrt(r*r+x*x))],
      'Maximum average AC power is transferred to the complex-conjugate load: ZL=Zth*. RMS voltage can be used directly in I²R.',
      [`Choose ZL=${r}−j${x} Ω so the reactances cancel.`,`The total impedance is ${2*r} Ω and RMS current is ${v}/${2*r} A.`,`Load power is I²RL=(${v}/${2*r})²×${r}=${fmt(ans)} W.`,`Equivalently Pmax=Vth,rms²/(4Rth).`],
      'Matching the impedance magnitude alone does not cancel reactance. Using peak voltage in the RMS formula would introduce a factor-of-two error.');
  }
  {
    const r=k+2,x=2*k+1,v=20+k,ans=v*v*r/(r*r+x*x);
    add('networks','complex-load-power',k,`A sinusoidal source of ${v} V RMS is applied across Z=(${r}+j${x}) Ω. Find average power absorbed in W, rounded to four decimal places.`,ans,'',[v*v/Math.sqrt(r*r+x*x),v*v/r,v*v*x/(r*r+x*x)],
      'Average power is Vrms² times the real part of admittance. A reactive element exchanges energy but absorbs zero net average power.',
      [`The admittance is 1/Z=(${r}−j${x})/(${r*r+x*x}) S.`,`Its real part is R/(R²+X²)=${r}/${r*r+x*x} S.`,`Therefore P=${v}²×${r}/${r*r+x*x}=${fmt(ans)} W.`],
      'Vrms²/|Z| is apparent power, not real power. The load power factor is R/|Z| and must be included.');
  }
  {
    const r=k+3,l=k+1,c=2*k+2,ans=Math.sqrt(l*1e-3/(c*1e-6))/r;
    add('networks','series-resonance-q',k,`A series RLC circuit has R=${r} Ω, L=${l} mH and C=${c} µF. Find its quality factor Q, rounded to four decimal places.`,ans,'',[ans*r*r,ans/2,2*ans],
      'For a series resonant RLC circuit, Q=ω₀L/R=(1/R)√(L/C), where ω₀=1/√(LC).',
      [`Convert L=${l}×10⁻³ H and C=${c}×10⁻⁶ F.`,`The characteristic impedance √(L/C)=√(${l*1000/c})=${fmt(Math.sqrt(l*1000/c))} Ω.`,`Divide by the series resistance: Q=${fmt(Math.sqrt(l*1000/c))}/${r}=${fmt(ans)}.`],
      'Q is dimensionless. Increasing series resistance dissipates more energy per cycle and lowers Q, which rules out formulas proportional to R.');
  }
  {
    const i=k+1,r1=k+2,r2=k+5,ans=i*r2/(r1+r2);
    add('networks','current-divider',k,`An ideal current source supplies ${i} mA into parallel resistors ${r1} kΩ and ${r2} kΩ. Find current through the ${r1} kΩ branch in mA, rounded to four decimal places.`,ans,'',[i*r1/(r1+r2),i*(r1+r2)/r1,i*r1/r2],
      'Parallel-branch currents divide in proportion to conductance, or inversely to resistance. The numerator contains the other branch resistance in the two-resistor divider formula.',
      [`The equivalent resistance is ${r1}×${r2}/(${r1}+${r2}) kΩ.`,`The common node voltage is the source current times this equivalent resistance.`,`Divide that voltage by ${r1} kΩ to obtain I₁=${i}×${r2}/(${r1}+${r2})=${fmt(ans)} mA.`],
      `Because ${r1}<${r2}, this branch carries more than half the source current. The other branch current is ${fmt(i-ans)} mA, and their sum is ${i} mA.`);
  }
  {
    const r=k+2,s=k+4,ans=r+s;
    add('networks','twoport-z',k,`A resistive T network has a ${r} Ω series arm at port 1, a ${s} Ω shunt arm from the central node to ground, and a ${k+6} Ω series arm at port 2. With currents defined entering both ports, what is z₁₁?`,ans,'Ω',[s,r,r+s+k+6],
      'The z parameter z₁₁ is V₁/I₁ with I₂=0. An open second port makes the second series arm carry zero current.',
      [`Set I₂=0 by opening port 2. No voltage drop appears across its series arm.`,`The input current then flows through the port-1 arm and the shunt arm in series.`,`Therefore z₁₁=R₁+Rsh=${r}+${s}=${ans} Ω.`],
      'The port-2 series resistance does not affect z₁₁ under the open-port condition. Shorting port 2 instead would compute a different driving-point condition.');
  }
  {
    const c1=k+2,c2=k+5,v=10+k,ans=c1*v/(c1+c2);
    add('networks','charge-sharing',k,`A ${c1} µF capacitor initially at ${v} V is connected in parallel, with matching polarities, to an initially uncharged ${c2} µF capacitor. After settling through a small resistance, what is their common voltage in V?`,ans,'',[v, v*c2/(c1+c2),v*(c1+c2)/c1],
      'For an isolated pair of capacitors, total charge is conserved during redistribution. Electrostatic energy is not conserved because the connecting resistance dissipates energy.',
      [`The initial total charge is Q=C₁V₁+C₂V₂=${c1}×${v}+${c2}×0=${c1*v} µC.`,`The final parallel capacitance is C₁+C₂=${c1+c2} µF.`,`The common final voltage is Q/(C₁+C₂)=${c1*v}/${c1+c2}=${fmt(ans)} V.`],
      'The result lies between the two initial voltages. Equating initial and final stored energies would incorrectly ignore dissipation during connection.');
  }

  // Signals and Systems.
  {
    const a=k+1,b=k+3,t=.5,ans=(Math.exp(-a*t)-Math.exp(-b*t))/(b-a);
    add('signals','exponential-convolution',k,`For x(t)=e^(−${a}t)u(t) and h(t)=e^(−${b}t)u(t), find y(0.5) where y=x*h. Round to four decimal places.`,ans,'',[Math.exp(-(a+b)*t),Math.exp(-a*t)+Math.exp(-b*t),ans*2],
      'Convolution of two causal exponentials is integrated only over the overlap 0≤τ≤t. The output is a difference of exponentials divided by their rate difference.',
      [`Write y(t)=∫₀ᵗ e^(−${a}τ)e^(−${b}(t−τ))dτ.`,`Factor out e^(−${b}t) and integrate e^(${b-a}τ).`,`This gives y(t)=[e^(−${a}t)−e^(−${b}t)]/${b-a} for t≥0.`,`At t=0.5, the value is ${fmt(ans)}.`],
      'Pointwise multiplication of the input and impulse response is not convolution. Since both functions are nonnegative, the convolution must also be nonnegative.');
  }
  {
    const a=.1+.03*k,b=.65+.02*k,n=3,ans=(b**(n+1)-a**(n+1))/(b-a);
    add('signals','discrete-convolution',k,`For x[n]=(${fmt(a)})ⁿu[n] and h[n]=(${fmt(b)})ⁿu[n], calculate (x*h)[3]. Round to four decimal places.`,ans,'',[a**3*b**3,a**3+b**3,ans/2],
      'For causal discrete sequences, the convolution at index n is a finite sum over m=0,…,n. A finite geometric sum gives a closed form.',
      [`At n=3, sum aᵐb^(3−m) for m=0,1,2,3.`,`The four terms are b³+ab²+a²b+a³, where a=${fmt(a)} and b=${fmt(b)}.`,`Using (b⁴−a⁴)/(b−a), the sum equals ${fmt(ans)}.`],
      'There are four overlapping terms at index 3, including both endpoints. Omitting m=0 or m=3 drops a valid impulse-response contribution.');
  }
  {
    const f=7+k,fs=2*f-3;
    const alias=fs-f;
    add('signals','alias-folding',k,`The signal cos(2π×${f}000t) is sampled at ${fs} ksample/s. What positive alias frequency is observed within the first Nyquist band, in kHz?`,alias,'kHz',[f,fs+f,fs/2],
      'Sampling replicates spectra at integer multiples of fs. A real sinusoid is represented by a frequency in the first Nyquist band 0≤f≤fs/2.',
      [`The original frequency is ${f} kHz, above the Nyquist frequency ${fs/2} kHz.`,`Subtract fs=${fs} kHz to get ${f-fs} kHz. A cosine at a negative frequency has the same samples as its positive-frequency counterpart.`,`Thus the baseband alias is |${f}−${fs}|=${alias} kHz.`],
      `The result ${alias} kHz lies below fs/2=${fs/2} kHz. The original signal is therefore indistinguishable from this lower-frequency cosine after sampling.`);
  }
  {
    const a=k+1,ans=1/Math.sqrt(a*a+4);
    add('signals','lti-sinusoidal',k,`A stable LTI system has H(s)=1/(s+${a}). With input cos(2t), what is the steady-state output amplitude? Round to four decimal places.`,ans,'',[1/a,1/(a*a+4),Math.sqrt(a*a+4)],
      'A sinusoid is an eigenfunction of an LTI system. Its steady-state amplitude is multiplied by the frequency-response magnitude at the input angular frequency.',
      [`Evaluate H(jω) at ω=2 rad/s: H(j2)=1/(${a}+j2).`,`The denominator magnitude is √(${a}²+2²)=√${a*a+4}.`,`The input has unit amplitude, so output amplitude is |H(j2)|=1/√${a*a+4}=${fmt(ans)}.`],
      'The squared magnitude is a power ratio, not an amplitude ratio. The decaying transient is excluded by the steady-state qualification.');
  }
  {
    const a=.2+.04*k,ans=1/(1-a*a);
    add('signals','sequence-energy',k,`Find the total energy of x[n]=(${fmt(a)})ⁿu[n], rounded to four decimal places.`,ans,'',[1/(1-a),a*a/(1-a*a),1/(1+a*a)],
      'Discrete-time energy is the sum of squared magnitudes over every integer index. Causality restricts the nonzero terms to n≥0.',
      [`Square the magnitude to get |x[n]|²=(${fmt(a*a)})ⁿ for n≥0.`,`Since |${fmt(a)}|<1, the geometric series converges.`,`E=Σₙ₌₀∞a²ⁿ=1/(1−a²)=1/(1−${fmt(a*a)})=${fmt(ans)}.`],
      'The n=0 sample equals one and must be included. Summing x[n] without squaring would give an area-like sum, not energy.');
  }
  {
    const a=k+1,ans=Math.exp(-a/2);
    add('signals','shifted-impulse',k,`An LTI system has h(t)=e^(−${a}t)u(t). Its input is δ(t−1)+2δ(t−2). Find y(1.5), rounded to four decimal places.`,ans,'',[ans+2*Math.exp(a/2),2*ans,Math.exp(-1.5*a)],
      'Each delayed impulse produces a delayed copy of the impulse response. Causality determines which copies have begun at the observation time.',
      [`By linearity, y(t)=h(t−1)+2h(t−2).`,`At t=1.5, t−1=0.5 but t−2=−0.5, so the second term is zero.`,`The remaining term is e^(−${a}×0.5)=${fmt(ans)}.`],
      'Ignoring the unit-step factor would incorrectly include a response to the impulse at t=2 before it has occurred.');
  }
  {
    const n=k+4,m=2,ans=n/2;
    add('signals','dft-bin-amplitude',k,`For N=${n}, x[n]=cos(2π×2n/N), 0≤n<N. Using X[r]=Σx[n]e^(−j2πrn/N), what is |X[2]|?`,ans,'',[n,1, n/4],
      'A cosine is half the sum of two complex exponentials. The unnormalized DFT gives magnitude N for a complex exponential aligned with a DFT bin.',
      [`Expand x[n]=(e^(j2π2n/N)+e^(−j2π2n/N))/2.`,`For N=${n}>4, bins 2 and N−2 are distinct, so each exponential contributes to a different DFT bin.`,`At r=2, the matching exponential contributes N/2=${fmt(ans)}, while the other sums to zero.`],
      'The DFT convention has no 1/N factor in the forward transform. DC and Nyquist cosines need special treatment, but bin 2 is neither for this N.');
  }
  {
    const a=k+2,ans=2/a;
    add('signals','fourier-dc',k,`For x(t)=e^(−${a}|t|), define X(ω)=∫₋∞∞x(t)e^(−jωt)dt. Find X(0), rounded to four decimal places.`,ans,'',[1/a,a/2,2*a],
      'The Fourier transform at zero frequency equals the signed area under the time-domain signal. Even symmetry reduces the integral to twice its positive-time half.',
      [`Set ω=0 so the complex exponential in the transform becomes one.`,`Since x(t) is even, X(0)=2∫₀∞e^(−${a}t)dt.`,`The one-sided integral is 1/${a}, hence X(0)=2/${a}=${fmt(ans)}.`],
      'This is an amplitude-area quantity, not energy. Squaring the signal first would produce a different integral.');
  }
  {
    const a=.1+.05*k,ans=1/(1+a);
    add('signals','difference-equation',k,`A causal system at initial rest obeys y[n]−${fmt(a)}y[n−1]=x[n]. For x[n]=(−1)ⁿu[n], what is the amplitude of the asymptotic alternating output? Round to four decimal places.`,ans,'',[1/(1-a),a/(1+a),1+a],
      'The steady alternating input has discrete-time angular frequency π. A stable system scales it by the magnitude of H(eʲπ).',
      [`At initial rest, H(z)=1/(1−${fmt(a)}z⁻¹). The pole magnitude ${fmt(a)} is less than one, ensuring a decaying transient.`,`At z=eʲπ=−1, H(−1)=1/(1+${fmt(a)}).`,`Thus the asymptotic output is [1/(1+${fmt(a)})](−1)ⁿ and its amplitude is ${fmt(ans)}.`],
      'Evaluating at z=1 would give the DC gain, not the alternating-input gain. The input switch-on creates a transient that vanishes as n grows.');
  }

  // Semiconductor devices.
  {
    const i=1+k,is=.01,vt=.026,ans=vt*Math.log(1+i/is);
    add('devices','diode-bias',k,`An ideal p-n diode has I_S=10 µA, ideality factor 1 and V_T=26 mV. Find the forward voltage needed for ${i} mA, in V, rounded to four decimal places.`,ans,'',[.7,vt*Math.log(i),ans*2],
      'The ideal Shockley law is I=IS[exp(V/(nVT))−1]. Solve the exponential relationship for voltage rather than assuming a fixed diode drop.',
      [`Convert IS=10 µA to 0.01 mA, matching the current unit.`,`Rearrange to exp(V/VT)=1+I/IS=1+${i}/0.01=${1+i/is}.`,`Taking the natural logarithm gives V=0.026 ln(${1+i/is})=${fmt(ans)} V.`],
      'A natural logarithm is required because the diode equation uses base e. A fixed 0.7 V approximation is inconsistent with the specified ideal diode parameters.');
  }
  {
    const r=k+2,i=k+1,vt=.026,rd=vt/(i/1000),ans=rd/(r*1000+rd)*10;
    add('devices','diode-incremental',k,`A diode biased at ${i} mA has n=1 and V_T=26 mV. A small 10 mV AC source is applied through ${r} kΩ, with the DC bias maintained separately. What is the diode AC voltage amplitude in mV? Round to four decimal places.`,ans,'',[10,10*rd/(r+rd),10*(r*1000)/(r*1000+rd)],
      'Linearize the diode at its bias point using rd=nVT/ID, then solve a voltage divider. This incremental model applies only for sufficiently small AC excursions.',
      [`The incremental resistance is rd=0.026/(${i}×10⁻³)=${fmt(rd)} Ω.`,`The source resistance is ${r*1000} Ω, so the diode receives fraction rd/(R+rd).`,`Its voltage amplitude is 10×${fmt(rd)}/(${r*1000}+${fmt(rd)})=${fmt(ans)} mV.`],
      'The very small diode voltage compared with VT validates the small-signal approximation. The source’s full 10 mV does not appear across the diode.');
  }
  {
    const beta=50+10*k,vcc=10+k,rb=500+50*k,rc=1+k/5,ib=(vcc-.7)/rb,ic=beta*ib,ans=vcc-ic*rc;
    add('devices','bjt-active-check',k,`An NPN has grounded emitter, β=${beta}, V_BE=0.7 V, R_B=${rb} kΩ from collector-independent V_CC=${vcc} V to base, and R_C=${fmt(rc)} kΩ from V_CC to collector. Assuming forward-active operation, find V_CE in V. Round to four decimal places.`,ans,'',[vcc, vcc-ib*rc,ic*rc],
      'For fixed-base bias in forward-active operation, IB=(VCC−VBE)/RB and IC=βIB. Collector voltage then follows from the resistor drop.',
      [`The base current is (${vcc}−0.7)/${rb}=${fmt(ib)} mA.`,`The collector current is ${beta}×${fmt(ib)}=${fmt(ic)} mA.`,`The collector drop is IC RC=${fmt(ic*rc)} V.`,`Thus VCE=VCC−ICRC=${vcc}−${fmt(ic*rc)}=${fmt(ans)} V.`],
      `VCE exceeds VBE=0.7 V here, so the collector-base junction remains reverse biased and the forward-active assumption is self-consistent.`);
  }
  {
    const ic=k/2+1,beta=100+10*k,gm=ic/.026,ans=beta/gm;
    add('devices','bjt-rpi',k,`A BJT at 300 K has collector current ${ic} mA and β=${beta}. Take V_T=26 mV. Find its hybrid-π input resistance rπ in kΩ, rounded to four decimal places.`,ans,'',[1/gm,beta*ic/.026,ans/2],
      'The hybrid-π resistance is rπ=β/gm, with gm=IC/VT at the operating point. Consistent mA and V units give gm in mS and rπ in kΩ.',
      [`Compute gm=${ic}/0.026=${fmt(gm)} mS.`,`Then rπ=${beta}/${fmt(gm)} kΩ.`,`The resulting input resistance is ${fmt(ans)} kΩ. It relates a small vbe to the resulting small base current.`],
      'The inverse transconductance 1/gm is not rπ; the factor β is required because base current is smaller than collector current.');
  }
  {
    const kn=.2+.05*k,vov=1+k/10,id=.5*kn*vov*vov,ans=kn*vov;
    add('devices','mos-gm',k,`A long-channel nMOS in saturation obeys I_D=(K/2)(V_GS−V_TH)² with K=${fmt(kn)} mA/V². At overdrive ${fmt(vov)} V, find g_m in mS. Neglect channel-length modulation.`,ans,'',[id/vov,kn*vov/2,kn*vov*vov],
      'MOS transconductance is the derivative of drain current with respect to gate-source voltage while holding drain voltage fixed.',
      [`Differentiate ID=(K/2)VOV² to obtain gm=K VOV.`,`Use K=${fmt(kn)} mA/V² and VOV=${fmt(vov)} V.`,`Thus gm=${fmt(kn)}×${fmt(vov)}=${fmt(ans)} mA/V=${fmt(ans)} mS.`,`As a cross-check, ID=${fmt(id)} mA and 2ID/VOV gives the same gm.`],
      'Using ID/VOV misses a factor of two for the square-law model. The stated K convention explicitly includes the one-half factor.');
  }
  {
    const vds=.1+.02*k,vov=1+k/10,kn=.5,ans=kn*(vov*vds-vds*vds/2);
    add('devices','mos-triode',k,`An nMOS has K=0.5 mA/V², overdrive V_GS−V_TH=${fmt(vov)} V, and V_DS=${fmt(vds)} V. Using the long-channel model, find I_D in mA. Round to four decimal places.`,ans,'',[.5*kn*vov*vov,kn*vov*vds,2*kn*(vov*vds-vds*vds/2)],
      'For 0≤VDS<VOV the MOSFET is in the triode region, with ID=K[VOV VDS−VDS²/2]. The saturation square law does not apply in this region.',
      [`Here VDS=${fmt(vds)} V is below VOV=${fmt(vov)} V, establishing triode operation.`,`Compute VOV VDS=${fmt(vov*vds)} V² and VDS²/2=${fmt(vds*vds/2)} V².`,`Multiply their difference by K=0.5 to obtain ID=${fmt(ans)} mA.`],
      'The VDS²/2 correction distinguishes the triode expression from a purely linear resistor approximation. The specified voltages are positive and produce positive drain current.');
  }
  {
    const nd=(k+1)*1e15,na=(k+2)*1e16,ni=1e10,ans=.026*Math.log(nd*na/ni**2);
    add('devices','junction-built-in',k,`An abrupt silicon p-n junction at equilibrium has N_D=${nd.toExponential(2)} cm⁻³, N_A=${na.toExponential(2)} cm⁻³ and n_i=10¹⁰ cm⁻³. Taking V_T=26 mV, find the built-in potential in V, rounded to four decimal places.`,ans,'',[.026*Math.log(nd/ni),.026*Math.log10(nd*na/ni**2),ans*2],
      'For a nondegenerate abrupt junction at thermal equilibrium, Vbi=VT ln(NAND/ni²). The potential balances diffusion against drift.',
      [`Form the dimensionless concentration ratio NAND/ni²=${(nd*na/ni**2).toExponential(4)}.`,`Take its natural logarithm, not the base-10 logarithm.`,`Multiply by 0.026 V to obtain Vbi=${fmt(ans)} V.`],
      'All carrier concentrations use the same cm⁻³ units, which cancel in the ratio. This internal equilibrium barrier is not an externally extractable terminal voltage.');
  }
  {
    const va=50+5*k,ic=.5+.1*k,ans=va/ic;
    add('devices','early-resistance',k,`At an operating point a BJT has I_C=${fmt(ic)} mA and Early voltage V_A=${va} V. Using r_o≈V_A/I_C, find r_o in kΩ, rounded to four decimal places.`,ans,'',[va*ic,ic/va,ans/2],
      'The Early effect gives the forward-active BJT a finite output conductance. For VCE much smaller than VA, the output resistance is approximately VA/IC.',
      [`Use the stated approximation ro≈VA/IC.`,`Since V divided by mA gives kΩ, ro=${va}/${fmt(ic)} kΩ.`,`Numerically ro=${fmt(ans)} kΩ. A larger bias current would reduce this resistance at fixed Early voltage.`],
      'This resistance models the slope of the collector characteristic at fixed base-emitter voltage. It is different from the DC ratio VCE/IC.');
  }
  {
    const mu=500+20*k,nd=(k+1)*1e15,ans=1/(1.6e-19*mu*nd);
    add('devices','semiconductor-resistivity',k,`An n-type bar has electron concentration ${(nd).toExponential(1)} cm⁻³ and mobility ${mu} cm²/(V·s). Neglect holes and take q=1.6×10⁻¹⁹ C. Find resistivity in Ω·cm, rounded to four decimal places.`,ans,'Ω·cm',[1/ans,ans*100,ans/100],
      'With electrons dominating conduction, conductivity is σ=q n μn and resistivity is its reciprocal. The supplied centimetre-based units yield Ω·cm.',
      [`Insert q=1.6×10⁻¹⁹, n=${nd.toExponential(1)} and μn=${mu}.`,`Conductivity is σ=${fmt(1/ans)} S/cm.`,`Therefore ρ=1/σ=${fmt(ans)} Ω·cm.`],
      'Increasing electron concentration or mobility increases conductivity and decreases resistivity. Converting to Ω·m would multiply the numerical Ω·cm value by 0.01.');
  }

  // Analog circuits.
  {
    const gm=2+k,rc=4+k,re=.2+.05*k,ans=-gm*rc/(1+gm*re);
    add('analog','emitter-degeneration',k,`A common-emitter amplifier has g_m=${gm} mS, collector load ${rc} kΩ and unbypassed emitter resistance ${fmt(re)} kΩ. Take β→∞ and r_o→∞. What is v_o/v_b, rounded to four decimal places?`,ans,'',[-gm*rc,gm*rc/(1+gm*re),-rc/re],
      'Emitter degeneration feeds an emitter voltage back against the base-emitter signal. With infinite β, emitter and collector small-signal currents are equal.',
      [`Write ic=gm(vb−ve) and ve=ic RE.`,`Then ic(1+gmRE)=gm vb, so ic/vb=gm/(1+gmRE).`,`Since vo=−ic RC, gain is −gmRC/(1+gmRE).`,`Substitution gives −${gm}×${rc}/[1+${gm}×${fmt(re)}]=${fmt(ans)}.`],
      'The degeneration reduces the magnitude below the bypassed-emitter value gmRC. The simpler −RC/RE approximation requires gmRE≫1.');
  }
  {
    const a=100+20*k,rf=10+k,rg=1,ng=1+rf/rg,ans=ng/(1+ng/a);
    add('analog','finite-opamp-gain',k,`A non-inverting amplifier uses R_f=${rf} kΩ and R_g=1 kΩ. Its op-amp has finite DC open-loop gain A=${a}, infinite input resistance and zero output resistance. Find the closed-loop DC gain, rounded to four decimal places.`,ans,'',[ng,a,ng/(1-ng/a)],
      'For finite open-loop gain, use vo=A(v+−v−) and the feedback divider v−=βvo. The ideal virtual-short approximation is not exact.',
      [`The feedback factor is β=Rg/(Rf+Rg)=1/${ng}.`,`Solving vo=A(vin−βvo) gives vo/vin=A/(1+Aβ).`,`This can be written ${ng}/(1+${ng}/${a})=${fmt(ans)}.`],
      `The result is slightly smaller than the ideal non-inverting gain ${ng}. A negative-feedback denominator contains a plus sign.`);
  }
  {
    const r1=2+k,r2=4+k,rf=8+k,v1=.2*k,v2=.1*(k+1),ans=-rf*(v1/r1+v2/r2);
    add('analog','weighted-summer',k,`An ideal inverting summer has grounded non-inverting input, feedback ${rf} kΩ, and inputs ${fmt(v1)} V through ${r1} kΩ and ${fmt(v2)} V through ${r2} kΩ. Assuming linear operation, find output in V.`,ans,'',[-ans,-rf*v1/r1,-rf*(v1+v2)/(r1+r2)],
      'At virtual ground, each source drives an input current independently. The op-amp input draws no current, so the feedback branch carries their sum.',
      [`Input currents are ${fmt(v1)}/${r1}=${fmt(v1/r1)} mA and ${fmt(v2)}/${r2}=${fmt(v2/r2)} mA.`,`Their sum is ${fmt(v1/r1+v2/r2)} mA.`,`The output is the negative feedback-resistor drop: vo=−${rf}×(${fmt(v1/r1+v2/r2)})=${fmt(ans)} V.`],
      'Different input resistors give different weights. Adding input voltages before applying one divider ratio would discard these weights.');
  }
  {
    const gm=2+.3*k,rd=5+k,ro=20+2*k,ans=-gm*rd*ro/(rd+ro);
    add('analog','common-source-ro',k,`A common-source MOS amplifier has source at AC ground, g_m=${fmt(gm)} mS, r_o=${ro} kΩ and drain resistor ${rd} kΩ to AC ground. Find unloaded midband voltage gain, rounded to four decimal places.`,ans,'',[-gm*rd,gm*rd*ro/(rd+ro),-gm*(rd+ro)],
      'The drain sees RD in parallel with the transistor output resistance ro. The controlled drain current gm vgs develops an inverted output across this equivalent load.',
      [`Effective drain load is RD∥ro=${rd}×${ro}/(${rd}+${ro})=${fmt(rd*ro/(rd+ro))} kΩ.`,`The source is at AC ground, so vgs equals input voltage.`,`Gain is −gm(RD∥ro)=−${fmt(gm)}×${fmt(rd*ro/(rd+ro))}=${fmt(ans)}.`],
      'Finite ro reduces gain magnitude compared with −gmRD. Since mS×kΩ is dimensionless, no additional factor of 1000 is required.');
  }
  {
    const rc=1+k,cc=10+2*k,ans=1/(2*Math.PI*rc*1000*cc*1e-9)/1000;
    add('analog','highpass-frequency',k,`A coupling capacitor of ${cc} nF feeds an amplifier input resistance ${rc} kΩ from an ideal voltage source. Treat the amplifier input as purely resistive. Find the high-pass −3 dB frequency in kHz.`,ans,'kHz',[2*Math.PI*ans,ans/(2*Math.PI),ans*10],
      'The coupling capacitor and input resistance form H(s)=sRC/(1+sRC). Its lower cutoff is the frequency at which capacitor reactance magnitude equals R.',
      [`Use R=${rc}×10³ Ω and C=${cc}×10⁻⁹ F.`,`The corner angular frequency is ωc=1/(RC).`,`Convert to hertz with fc=1/(2πRC), then divide by 1000: fc=${fmt(ans)} kHz.`],
      'At the corner, magnitude is 1/√2 of the high-frequency passband value. Confusing ωc with fc introduces a factor of 2π.');
  }
  {
    const rf=10+k,rin=2+k/2,gbw=2+k/2,ans=gbw/(1+rf/rin);
    add('analog','inverting-bandwidth',k,`A dominant-pole op-amp has GBW=${gbw} MHz. An inverting amplifier uses R_in=${rin} kΩ and R_f=${rf} kΩ. Estimate its closed-loop bandwidth in MHz using noise gain.`,ans,'MHz',[gbw/(rf/rin),gbw*(1+rf/rin),gbw/2],
      'For a single-pole voltage-feedback op-amp, bandwidth is approximately GBW divided by noise gain. An inverting stage has noise gain 1+Rf/Rin, not |signal gain|.',
      [`The signal gain is −Rf/Rin=−${fmt(rf/rin)}.`,`Noise gain is 1+Rf/Rin=${fmt(1+rf/rin)}.`,`Bandwidth ≈${gbw}/${fmt(1+rf/rin)}=${fmt(ans)} MHz.`],
      'The distinction between signal gain and noise gain matters most at low inverting gains. The estimate assumes the dominant-pole model and no extra capacitive poles.');
  }
  {
    const sr=1+k/2,f=50+10*k,ans=sr*1e6/(2*Math.PI*f*1000);
    add('analog','slew-amplitude',k,`An op-amp has slew rate ${sr} V/µs. For a sinusoidal output at ${f} kHz, what is the maximum peak amplitude in V allowed by slew rate alone?`,ans,'V',[2*ans,ans/2,sr*1000/f],
      'A sinusoid vp sin(2πft) has maximum slope 2πfvp. Avoiding slew-rate distortion requires that slope not exceed SR.',
      [`Convert SR to ${sr}×10⁶ V/s and frequency to ${f}×10³ Hz.`,`Set 2πfVp=SR at the limit.`,`Thus Vp=SR/(2πf)=${sr}×10⁶/(2π×${f}×10³)=${fmt(ans)} V.`],
      'This is peak amplitude, not peak-to-peak amplitude. Supply rails or small-signal bandwidth may impose a lower practical limit, but they are excluded here.');
  }
  {
    const gm=5+k,rl=1+k/5,ans=gm*rl/(1+gm*rl);
    add('analog','source-follower',k,`A MOS source follower has g_m=${gm} mS and effective source load ${rl} kΩ. Neglect body effect and r_o. Find its voltage gain, rounded to four decimal places.`,ans,'',[gm*rl,1/(1+gm*rl),-gm*rl/(1+gm*rl)],
      'A source follower develops its output at the source. The resulting source voltage reduces vgs, creating local negative feedback.',
      [`The current is gm(vin−vo), and this flows through the source load.`,`Write vo=gmRL(vin−vo) and solve for vo/vin=gmRL/(1+gmRL).`,`Here gmRL=${fmt(gm*rl)}, giving gain ${fmt(ans)}.`],
      'The gain is positive and strictly less than one in this model. The reciprocal 1/(1+gmRL) describes the residual gate-source fraction, not the output gain.');
  }
  {
    const c=2+k,r=10+k,v=.1+.02*k,t=.1,ans=-v*t/(r*c*1e-3);
    add('analog','ideal-integrator',k,`An ideal inverting integrator uses R=${r} kΩ and C=${c} µF. Its output is initially zero. A constant ${fmt(v)} V input is applied for 0.1 s. Assuming no saturation, what is output at 0.1 s in V?`,ans,'V',[-ans,ans/2,ans*2],
      'An ideal inverting integrator obeys vo(t)=vo(0)−(1/RC)∫vin(t)dt. A constant input produces a linear output ramp.',
      [`RC=${r}×${c}×10⁻³=${fmt(r*c*1e-3)} s.`,`The input-time integral over 0.1 s is ${fmt(v)}×0.1=${fmt(v*.1)} V·s.`,`With zero initial output, vo=−${fmt(v*.1)}/${fmt(r*c*1e-3)}=${fmt(ans)} V.`],
      'The minus sign follows from the inverting connection. The stated no-saturation condition permits the ideal ramp calculation without supply-rail clipping.');
  }

  // Digital circuits.
  {
    const bits=k+5,f=10+2*k,ans=2**bits/f;
    add('digital','ripple-counter-period',k,`A ${bits}-bit binary counter starts at zero and is clocked at ${f} MHz. How many µs elapse before it first returns to zero, assuming ideal operation?`,ans,'µs',[2**(bits-1)/f,2**bits*f,bits/f],
      'An n-bit binary counter repeats after 2ⁿ input clocks. The repeat time is the number of clock periods in a full state cycle.',
      [`There are 2^${bits}=${2**bits} distinct states, including zero.`,`At ${f} MHz the clock period is 1/${f} µs.`,`The first full wrap occurs after ${2**bits}/${f}=${fmt(ans)} µs.`],
      'The count from zero through all-one is 2ⁿ−1, but another clock is required to return to zero, making the full cycle 2ⁿ clocks.');
  }
  {
    const a=2*k+7,b=k+3,n=6,ans=(a-b+64)%64;
    add('digital','twos-complement-subtract',k,`Two unsigned 6-bit operands have values A=${a} and B=${b}. A subtractor computes A−B using 6-bit two’s-complement addition and discards carry out. What unsigned decimal value appears on its output?`,ans,'',[a+b,64-ans,ans+1],
      'Fixed-width subtraction adds the two’s complement of B and retains only the lowest n bits. This implements arithmetic modulo 2ⁿ.',
      [`The six-bit two’s complement of B is 64−${b}=${64-b}.`,`Add A to it: ${a}+${64-b}=${a+64-b}.`,`Discard the carry beyond bit 5, equivalently subtract 64, to obtain ${ans}.`],
      'The specified A exceeds B, so the unsigned difference is positive and is represented exactly. Discarding carry is part of fixed-width subtraction, not an arithmetic error.');
  }
  {
    const bits=k+4,fs=100+20*k,ans=bits*fs/1000;
    add('digital','adc-serial-clock',k,`A ${bits}-bit SAR ADC outputs one serial word for each of ${fs} ksample/s. Each frame also contains 2 status bits and 1 idle clock. What minimum serial clock in MHz supports continuous conversion?`,(bits+3)*fs/1000,'MHz',[ans,(bits+2)*fs/1000,(bits+4)*fs/1000],
      'The serial link must provide a clock slot for every conversion bit and every overhead slot in each sample frame.',
      [`A frame requires ${bits}+2+1=${bits+3} clocks.`,`At ${fs}000 frames/s, the required clock is ${bits+3}×${fs}000=${(bits+3)*fs*1000} clocks/s.`,`Divide by 10⁶ to get ${(bits+3)*fs/1000} MHz.`],
      'Counting only the ADC resolution underestimates the link rate because status and idle slots also consume serial clock periods.');
  }
  {
    const setup=1+.1*k,cq=1+.2*k,logic=3+.3*k,skew=.2,ans=1000/(setup+cq+logic+skew);
    add('digital','synchronous-timing',k,`A register-to-register path has t_CQ=${fmt(cq)} ns, combinational delay ${fmt(logic)} ns and setup time ${fmt(setup)} ns. Adverse clock uncertainty consumes another 0.2 ns. What is the maximum clock frequency in MHz?`,ans,'MHz',[1000/logic,1000/(cq+logic),1000/(cq+logic+setup-skew)],
      'For setup timing, one clock period must cover launch clock-to-Q, maximum logic delay, destination setup time and adverse uncertainty.',
      [`The minimum period is ${fmt(cq)}+${fmt(logic)}+${fmt(setup)}+0.2=${fmt(cq+logic+setup+skew)} ns.`,`Convert period to frequency with fMHz=1000/Tns.`,`Hence fmax=${fmt(ans)} MHz. This checks setup timing only.`],
      'Hold timing is a separate minimum-delay condition. Adverse uncertainty reduces the available time and therefore is added to the required period.');
  }
  {
    const n=k+5;
    add('digital','memory-chip-count',k,`A memory requires ${2**n} K words of 16 bits. Available chips each contain 4 K words of 8 bits. How many chips are needed?`,2**(n-1),'',[2**n/4,2**n,2**(n-2)+2],
      'Memory expansion may require both depth expansion and width expansion. The total chip count is the product of those two independent factors.',
      [`To make 16-bit words from 8-bit chips, use 16/8=2 chips in parallel per bank.`,`To obtain ${2**n} K words from 4 K-word chips, use ${2**n}/4=${2**n/4} banks.`,`Total chips =2×${2**n/4}=${2**(n-1)}.`],
      'Counting only address-depth banks omits the second chip needed in every bank to supply the upper byte of each 16-bit word.');
  }
  {
    const n=k+4,v=2+.2*k,code=2**(n-2)+k,ans=v*code/2**n;
    add('digital','binary-dac',k,`An ideal unipolar ${n}-bit DAC uses v_o=V_ref D/2^N with V_ref=${fmt(v)} V. Find output for unsigned input code D=${code}, in V. Round to four decimal places.`,ans,'V',[v*code/(2**n-1),v*(code+1)/2**n,v*code/2**(n-1)],
      'Use the DAC transfer convention stated in the question: each code increment is Vref/2ᴺ. The largest code remains one LSB below Vref.',
      [`There are 2^${n}=${2**n} nominal quantization steps.`,`One LSB is ${fmt(v)}/${2**n} V.`,`Multiplying by input code ${code} gives vo=${fmt(v)}×${code}/${2**n}=${fmt(ans)} V.`],
      'Scaling by 2ᴺ−1 would implement an endpoint-normalized convention, which differs from the explicitly supplied DAC law.');
  }
  {
    const a=k+4,b=k+1,ans=a^b;
    add('digital','bitwise-xor',k,`Two 5-bit unsigned words encode decimal ${a} and ${b}. Their corresponding bits feed five XOR gates. What is the unsigned decimal value of the output word?`,ans,'',[a+b,a&b,a|b].concat([ans+1,ans+2]),
      'Bitwise XOR produces one where the operand bits differ and zero where they agree. It corresponds to binary addition without inter-bit carry.',
      [`Write the operands as ${a.toString(2).padStart(5,'0')} and ${b.toString(2).padStart(5,'0')}.`,`XOR corresponding bit positions to obtain ${ans.toString(2).padStart(5,'0')}.`,`Convert that binary result back to decimal to get ${ans}.`],
      'Ordinary decimal addition may differ because it includes carries. OR also differs because it retains a one when both input bits are one.');
  }
  {
    const n=k+3,ans=2**n-1;
    add('digital','flash-comparator-count',k,`An ideal ${n}-bit flash ADC uses a full bank of threshold comparators with one comparator per internal quantization boundary. How many comparators are required?`,ans,'',[2**n,n,2**(n-1)],
      'An N-bit quantizer divides its input range into 2ᴺ bins. Separating adjacent bins requires one internal threshold between each neighboring pair.',
      [`The number of output bins is 2^${n}=${2**n}.`,`The number of boundaries between those bins is one fewer.`,`Thus a full flash architecture requires 2^${n}−1=${ans} comparators.`],
      'The rapid exponential comparator growth explains why flash ADC resolution is expensive in power and silicon area. This count excludes any separate overrange detector.');
  }
  {
    const n=k+4,t=2+.2*k,ans=2**n*t/1000;
    add('digital','counter-adc-time',k,`An ${n}-bit counter-type ADC starts its count at zero at the beginning of each conversion. The clock period is ${fmt(t)} µs. Using a worst-case budget of 2^N clocks, find the worst-case conversion time in ms.`,ans,'ms',[2**n*t,n*t/1000,2**(n-1)*t/1000],
      'A counter-type ADC can need a full-scale count search, unlike a SAR converter that needs approximately N decisions. The question specifies the clock-budget convention.',
      [`The worst-case budget is 2^${n}=${2**n} clocks.`,`Multiply by ${fmt(t)} µs per clock to get ${fmt(2**n*t)} µs.`,`Convert microseconds to milliseconds by dividing by 1000: ${fmt(ans)} ms.`],
      'Using N clocks would describe the approximate decision count of a SAR ADC, not the stated counter ramp architecture.');
  }

  // Control systems.
  {
    const a=k+1,b=2*k+3,ans=a*b;
    add('control','routh-cubic-bound',k,`For positive K, a feedback system has characteristic polynomial s³+${a}s²+${b}s+K. What is the upper boundary value of K for strict stability?`,ans,'',[a+b,b/a,a*a*b],
      'For a real cubic, the Routh first-column entries must all have the same positive sign. A zero boundary entry marks loss of strict asymptotic stability.',
      [`The first two Routh rows begin [1, ${b}] and [${a}, K].`,`The s¹ first-column entry is (${a}×${b}−K)/${a}.`,`Along with K>0, positivity requires K<${a*b}.`,`Therefore strict stability holds for 0<K<${a*b}, and the requested upper boundary is ${a*b}.`],
      'The boundary itself is excluded from strict stability. Positive polynomial coefficients alone are necessary but not sufficient for a cubic.');
  }
  {
    const wn=2+k,z=.2+.04*k,ans=Math.exp(-Math.PI*z/Math.sqrt(1-z*z))*100;
    add('control','second-order-overshoot',k,`A standard unity-DC-gain second-order system has ω_n=${wn} rad/s and damping ratio ζ=${fmt(z)}. Find percentage overshoot to a unit step, rounded to four decimal places.`,ans,'%', [ans/100,100*Math.exp(-Math.PI*z),2*ans],
      'For an underdamped standard second-order response, percentage overshoot is 100 exp[−πζ/√(1−ζ²)]. It depends on damping ratio rather than natural frequency.',
      [`The supplied ζ=${fmt(z)} lies strictly between zero and one.`,`Compute √(1−ζ²)=${fmt(Math.sqrt(1-z*z))}.`,`Insert in the overshoot formula: 100exp[−π×${fmt(z)}/${fmt(Math.sqrt(1-z*z))}]=${fmt(ans)}%.`],
      `Changing ωn=${wn} rad/s would change how quickly the peak occurs, but would not change this percentage overshoot with ζ fixed.`);
  }
  {
    const gain=k+2,a=k+1,ans=a/gain;
    add('control','ramp-error',k,`A stable unity-negative-feedback system has open loop G(s)=${gain}/[s(s+${a})]. What is its unit-ramp steady-state error? Round to four decimal places.`,ans,'',[gain/a,0,1/(1+gain/a)],
      'For a type-1 unity-feedback system, unit-ramp steady-state error is 1/Kv, where Kv=lim(s→0)sG(s). Closed-loop stability is required.',
      [`There is one open-loop pole at the origin, so the system is type 1.`,`Kv=lim(s→0)${gain}/(s+${a})=${gain}/${a}.`,`Hence ess=1/Kv=${a}/${gain}=${fmt(ans)}.`],
      'The characteristic polynomial s²+as+gain has positive coefficients here and is stable. A step input would have zero error, whereas a ramp has a finite nonzero error.');
  }
  {
    const kf=k+2,p=k+1,ans=4/(p+kf);
    add('control','first-order-settling',k,`A plant G(s)=${kf}/(s+${p}) is placed in unity negative feedback. Using the approximation t_s≈4/|closed-loop pole|, find its 2% settling time in s.`,ans,'s',[4/p,4/kf,1/(p+kf)],
      'Unity negative feedback gives T=G/(1+G). For a real negative pole −α, the response error decays exponentially with time constant 1/α.',
      [`T(s)=${kf}/(s+${p}+${kf})=${kf}/(s+${p+kf}).`,`The pole is −${p+kf}, so τ=1/${p+kf} s.`,`The specified 2% approximation is ts≈4τ=4/${p+kf}=${fmt(ans)} s.`],
      'Use the closed-loop pole, not the original plant pole. The exact normalized 2% exponential settling time would be ln(50)/α, close to 4/α.');
  }
  {
    const a=k+1,b=k+3,ans=(a+b)/(2*Math.sqrt(a*b));
    add('control','pole-damping',k,`A second-order denominator is (s+${a})(s+${b}). What is its damping ratio ζ, rounded to four decimal places?`,ans,'',[Math.sqrt(a*b),(a+b)/2,(a+b)/Math.sqrt(a*b)],
      'Compare the expanded polynomial with s²+2ζωns+ωn². Both the linear and constant coefficients are needed to extract the damping ratio.',
      [`Expand to s²+${a+b}s+${a*b}.`,`Thus ωn=√${a*b} rad/s and 2ζωn=${a+b}.`,`Rearrange: ζ=${a+b}/(2√${a*b})=${fmt(ans)}.`],
      'The two distinct real negative poles imply an overdamped system, so ζ must exceed one. This is a useful check on coefficient matching.');
  }
  {
    const tau=.1+.02*k,w=2+k,ans=-Math.atan(w*tau)*180/Math.PI;
    add('control','single-pole-phase',k,`For G(s)=1/(1+${fmt(tau)}s), find phase at ω=${w} rad/s in degrees, rounded to four decimal places.`,ans,'degrees',[-ans,-90,ans/2],
      'The phase of a first-order low-pass is the negative angle of its denominator 1+jωτ. The numerator contributes zero phase.',
      [`At the given frequency, ωτ=${w}×${fmt(tau)}=${fmt(w*tau)}.`,`The denominator angle is arctan(${fmt(w*tau)}).`,`Therefore ∠G=−arctan(${fmt(w*tau)})×180/π=${fmt(ans)} degrees.`],
      'The phase must lie between 0 and −90 degrees for positive frequency. The arctangent result in radians must be converted before reporting degrees.');
  }
  {
    const a=k+1,gain=2+k,ans=gain/(a+gain);
    add('control','step-final-value',k,`A plant G(s)=${gain}/(s+${a}) has unity negative feedback and is driven by a unit step reference. Find its final output value, rounded to four decimal places.`,ans,'',[1,1/(a+gain),gain/a],
      'For a stable closed-loop system, the final value of a unit-step response equals its closed-loop DC gain. Unity feedback does not automatically make that gain one.',
      [`The closed-loop transfer function is T(s)=G/(1+G)=${gain}/(s+${a+gain}).`,`For a unit step, Y(s)=T(s)/s.`,`By the final-value theorem, y∞=lim(s→0)sY(s)=${gain}/${a+gain}=${fmt(ans)}.`],
      `The remaining step error is ${fmt(1-ans)}. The pole −${a+gain} is in the left half-plane, validating the final-value theorem.`);
  }
  {
    const a=k+1,b=k+4,ans=a*b;
    add('control','state-determinant',k,`A continuous-time state matrix is A=[0 1; −${a*b} −${a+b}]. What is the product of its two pole magnitudes?`,ans,'',[a+b,Math.sqrt(a*b),a*a+b*b],
      'The poles are eigenvalues of A. Their product equals det(A), and their individual values can be obtained from the characteristic polynomial.',
      [`Compute det(sI−A)=s²+${a+b}s+${a*b}.`,`It factors as (s+${a})(s+${b}), so the poles are −${a} and −${b}.`,`Their magnitudes multiply to ${a}×${b}=${a*b}.`],
      'The trace is the pole sum, −(a+b), rather than their product. Both poles are negative here, so magnitude product agrees with the positive determinant.');
  }
  {
    const a=k+2,ans=180-90-Math.atan(a/a)*180/Math.PI;
    add('control','phase-margin',k,`A unity-feedback loop has G(s)=K/[s(s+${a})]. K is selected so gain crossover is ω_gc=${a} rad/s. Find phase margin in degrees.`,ans,'degrees',[90,135,180],
      'Phase margin is 180 degrees plus open-loop phase at unity-gain crossover. The integrator contributes −90 degrees, and the real pole contributes an additional lag.',
      [`At ωgc=${a}, the integrator phase is −90 degrees.`,`The (s+${a}) denominator term contributes −arctan(ωgc/${a})=−45 degrees.`,`Total phase is −135 degrees, so PM=180−135=45 degrees.`],
      `A positive K can achieve the stated crossover: K=ωgc√(ωgc²+${a}²). K sets magnitude here but contributes no extra phase.`);
  }

  // Communications.
  {
    const b=1+.2*k,snr=2**(2+k/2)-1,ans=b*log2(1+snr);
    add('comm','capacity-bandwidth',k,`An AWGN channel has bandwidth ${fmt(b)} MHz and linear SNR=${fmt(snr)}. Using the stated SNR rounded to four decimals, find Shannon capacity in Mbit/s, rounded to three decimal places.`,Number((b*log2(1+Number(fmt(snr)))).toFixed(3)),'Mbit/s',[ans/2,ans*2,b*log2(snr)],
      'Shannon capacity for a bandlimited AWGN channel is C=B log₂(1+SNR). With B in MHz, the resulting capacity is in Mbit/s.',
      [`Use linear SNR=${fmt(snr)}, so the logarithm argument is ${fmt(1+Number(fmt(snr)))}.`,`Compute log₂(1+SNR)≈${fmt(log2(1+Number(fmt(snr))))} bit/s/Hz.`,`Multiply by ${fmt(b)} MHz to obtain approximately ${(b*log2(1+Number(fmt(snr)))) .toFixed(3)} Mbit/s.`],
      'Omitting the +1 is a high-SNR approximation and is not the exact Shannon expression. Capacity is a theoretical upper bound, not an assured payload rate.');
  }
  {
    const bits=2+k%5,rb=4+k,roll=.2+.02*k,ans=(1+roll)*rb/bits;
    add('comm','qam-raised-cosine',k,`An M-QAM link with M=${2**bits} carries ${rb} Mbit/s before overhead and uses raised-cosine pulse shaping with roll-off α=${fmt(roll)}. What is its ideal RF null-to-null bandwidth in MHz?`,ans,'MHz',[rb/bits,(1+roll)*rb,ans/2],
      'An M-ary symbol carries log₂M bits. For raised-cosine shaping, the real passband null-to-null bandwidth is (1+α) times symbol rate.',
      [`Each symbol carries log₂(${2**bits})=${bits} bits.`,`The symbol rate is Rs=${rb}/${bits}=${fmt(rb/bits)} Mbaud.`,`RF bandwidth is (1+${fmt(roll)})Rs=${fmt(ans)} MHz.`],
      'The one-sided baseband bandwidth is half this passband bandwidth. Reporting that baseband value would introduce a factor-of-two error.');
  }
  {
    const pc=10+2*k,m=.2+.05*k,ans=m*m/(2+m*m)*100;
    add('comm','am-efficiency',k,`A conventional single-tone AM transmitter has carrier power ${pc} W and modulation index ${fmt(m)}. Find useful-sideband power as a percentage of total transmitted power.`,ans,'%', [m*m/2*100,m/(1+m)*100,ans/2],
      'In conventional AM, the two sidebands together carry Pc m²/2 while the carrier still consumes Pc. Efficiency is sideband power divided by total power.',
      [`Sideband power is ${pc}×${fmt(m)}²/2=${fmt(pc*m*m/2)} W.`,`Total power is Pc(1+m²/2)=${fmt(pc*(1+m*m/2))} W.`,`Efficiency is 100×m²/(2+m²)=${fmt(ans)}%.`],
      'Carrier power cancels from the efficiency ratio. Dividing sideband power by carrier power alone would overestimate useful-power efficiency.');
  }
  {
    const fm=2+k,dev=3+2*k,ans=2*(fm+dev);
    add('comm','fm-carson',k,`A message has maximum frequency ${fm} kHz. An FM modulator produces peak deviation ${dev} kHz. Using Carson’s rule, what approximate transmission bandwidth in kHz is required?`,ans,'kHz',[2*dev,2*fm,dev+fm],
      'Carson’s rule estimates practical FM bandwidth as B≈2(Δf+fm), incorporating both frequency deviation and message bandwidth.',
      [`Identify peak deviation Δf=${dev} kHz, rather than peak-to-peak deviation.`,`Add the highest message frequency: Δf+fm=${dev}+${fm}=${dev+fm} kHz.`,`Double the sum for the full passband width: B≈${ans} kHz.`],
      'This is an occupied-bandwidth estimate. Exact FM spectra have infinitely many sidebands, so the result is not a strict mathematical bandlimit.');
  }
  {
    const n=k+4,ans=6.020599913*n+1.760912591;
    add('comm','pcm-sqnr',k,`A full-scale sinusoid is quantized by an ideal uniform ${n}-bit quantizer. Under the uniform quantization-noise model, estimate SQNR in dB to four decimal places.`,ans,'dB',[6.020599913*n,ans-6.020599913,ans+6.020599913],
      'For a full-scale sinusoid and uniform quantization error with variance Δ²/12, SQNR≈6.0206N+1.7609 dB.',
      [`The sinusoid signal power is A²/2. For a span of 2A, quantization step is Δ=2A/2ᴺ.`,`Dividing A²/2 by Δ²/12 gives SQNR=(3/2)2^(2N).`,`Taking 10log₁₀ gives 10log₁₀(3/2)+20Nlog₁₀2.`,`For N=${n}, this is ${fmt(ans)} dB.`],
      'The 1.76 dB offset comes from the full-scale sinusoidal input assumption. A smaller input amplitude reduces actual SQNR.');
  }
  {
    const p=.05*k,ans=-p*log2(p)-(1-p)*log2(1-p);
    add('comm','binary-entropy',k,`An independent binary source emits 1 with probability ${fmt(p)} and 0 with probability ${fmt(1-p)}. Find its entropy in bits/symbol, rounded to four decimal places.`,ans,'bits/symbol',[1, -log2(p),ans/2],
      'Entropy is the probability-weighted average information content, H=−Σp log₂p. Both symbols contribute even when their probabilities differ.',
      [`The information contribution of 1 is −${fmt(p)}log₂(${fmt(p)}).`,`The information contribution of 0 is −${fmt(1-p)}log₂(${fmt(1-p)}).`,`Adding them gives H=${fmt(ans)} bits per source symbol.`],
      'Binary entropy cannot exceed 1 bit/symbol and is maximal for equal probabilities. It decreases when one outcome becomes easier to predict.');
  }
  {
    const rate=.5+k/40,bits=2+k%4,rs=1+k/5,ans=rate*bits*rs;
    add('comm','coded-throughput',k,`A ${2**bits}-ary modulation runs at ${fmt(rs)} Mbaud using a code of rate ${fmt(rate)}. Ignore all other overhead. What is the information-bit rate in Mbit/s?`,ans,'Mbit/s',[bits*rs,bits*rs/rate,rate*rs],
      'A code rate r means r information bits per transmitted coded bit. Modulation carries log₂M coded bits per symbol.',
      [`The modulation carries ${bits} coded bits per symbol.`,`At ${fmt(rs)} Mbaud the coded rate is ${fmt(bits*rs)} Mbit/s.`,`Multiplying by code rate ${fmt(rate)} yields information rate ${fmt(ans)} Mbit/s.`],
      'Coding adds redundancy, so the information rate must be below the raw coded-bit rate. Dividing by code rate would predict the opposite.');
  }
  {
    const temp=290,b=1+k,fn=2+k/2,ans=1.38e-23*temp*b*1e6*10**(fn/10)*1e12;
    add('comm','receiver-noise',k,`A matched receiver has noise figure ${fn} dB and bandwidth ${b} MHz. At T₀=290 K, with k_B=1.38×10⁻²³ J/K, find its equivalent total input-referred noise power Fk_BT₀B in pW.`,ans,'pW',[ans/10**(fn/10),ans*10,ans/10],
      'Noise factor F is a linear power ratio and equals 10^(NF/10). The specified total input-referred noise is F times the thermal input-noise reference.',
      [`Convert NF=${fn} dB to F=10^(${fn}/10)=${fmt(10**(fn/10))}.`,`The thermal reference is kT₀B=1.38×10⁻²³×290×${b}×10⁶ W.`,`Multiply by F and convert W to pW by multiplying by 10¹², giving ${fmt(ans)} pW.`],
      'The receiver-added equivalent noise alone would use (F−1)kT₀B. The question explicitly requests total FkT₀B, including source thermal noise.');
  }
  {
    const snrdb=10+k,eta=2+k%4,ans=snrdb-10*Math.log10(eta);
    add('comm','ebn0-conversion',k,`A digital link has received signal-to-noise ratio ${snrdb} dB measured over bandwidth B. Its bit rate satisfies R_b/B=${eta} bit/s/Hz. Find E_b/N₀ in dB.`,ans,'dB',[snrdb+10*Math.log10(eta),snrdb/eta,10**(snrdb/10)/eta],
      'Since SNR=P/(N₀B) and Eb=P/Rb, the linear relation is Eb/N₀=SNR×B/Rb. Decibels convert multiplication to addition.',
      [`The bandwidth-to-bit-rate ratio is B/Rb=1/${eta}.`,`Thus (Eb/N₀)dB=SNRdB−10log₁₀(Rb/B).`,`Substitute ${snrdb}−10log₁₀(${eta})=${fmt(ans)} dB.`],
      'For spectral efficiency above one bit/s/Hz, Eb/N₀ in dB is smaller than the measured SNR in dB. A linear ratio must not be reported as a decibel value.');
  }

  // Electromagnetics.
  {
    const z0=50,r=20+5*k,x=10+4*k,p=10+k,ref=((r-z0)**2+x*x)/((r+z0)**2+x*x),ans=p*(1-ref);
    add('em','complex-load-power',k,`A lossless 50 Ω transmission line is terminated by (${r}−j${x}) Ω. If incident average power is ${p} mW, find average load power in mW, rounded to four decimal places.`,ans,'mW',[p*ref,p*(1-Math.sqrt(ref)),p],
      'At a lossless line termination, the reflected power fraction is |Γ|², where Γ=(ZL−Z0)/(ZL+Z0). Delivered power is the remaining fraction of incident power.',
      [`Compute |Γ|²=[(${r}−50)²+${x}²]/[(${r}+50)²+${x}²].`,`This gives reflected fraction ${fmt(ref)}.`,`Load power is ${p}(1−${fmt(ref)})=${fmt(ans)} mW.`],
      'Using 1−|Γ| rather than 1−|Γ|² confuses voltage amplitude with power. A passive real part of the load ensures delivered power is nonnegative.');
  }
  {
    const z0=40+5*k,rl=100+10*k,ans=z0*z0/rl;
    add('em','quarter-wave-transform',k,`A lossless quarter-wave transmission line has characteristic impedance ${z0} Ω and load resistance ${rl} Ω. What is input resistance in Ω?`,ans,'Ω',[rl,z0,rl*rl/z0],
      'At an electrical length of π/2, a lossless line inverts the load impedance: Zin=Z0²/ZL. This is a frequency-specific impedance transformation.',
      [`Use Z0=${z0} Ω and ZL=${rl} Ω.`,`Square the line impedance: Z0²=${z0*z0} Ω².`,`Divide by the load: Zin=${z0*z0}/${rl}=${fmt(ans)} Ω.`],
      'A line one-half wavelength long would reproduce the load instead. The quarter-wave condition is essential to the inversion formula.');
  }
  {
    const v=1.5+.1*k,ans=((v-1)/(v+1))**2*100;
    add('em','vswr-reflected-power',k,`A lossless line has VSWR=${fmt(v)}. What percentage of incident power is reflected? Round to four decimal places.`,ans,'%',[(v-1)/(v+1)*100,100-ans,ans/2],
      'First convert VSWR to voltage-reflection magnitude, then square that magnitude to obtain the reflected power fraction.',
      [`From S=(1+|Γ|)/(1−|Γ|), rearrange |Γ|=(S−1)/(S+1).`,`For S=${fmt(v)}, |Γ|=${fmt((v-1)/(v+1))}.`,`The reflected percentage is 100|Γ|²=${fmt(ans)}%.`],
      'VSWR itself is an amplitude ratio along the standing wave, not a power-reflection ratio. A matched line has S=1 and zero reflected power.');
  }
  {
    const a=2+.2*k,f=10+k,c=3e8,fc=c/(2*a/100)/1e9,ans=Math.sqrt(1-(fc/f)**2);
    add('em','waveguide-velocity',k,`An air-filled rectangular guide has broad wall a=${fmt(a)} cm and carries TE₁₀ at ${f} GHz. Taking c=3×10⁸ m/s, find group velocity divided by c, rounded to four decimal places.`,ans,'',[1/ans,fc/f,1-(fc/f)**2],
      'For a lossless air-filled waveguide, TE group velocity is vg=c√[1−(fc/f)²]. It is lower than c for a propagating mode above cutoff.',
      [`TE₁₀ cutoff is fc=c/(2a)=${fmt(fc)} GHz after converting centimetres to metres.`,`The operating frequency ${f} GHz exceeds cutoff, so propagation is possible.`,`Compute vg/c=√[1−(${fmt(fc)}/${f})²]=${fmt(ans)}.`],
      'The reciprocal factor would give phase velocity divided by c. Phase velocity can exceed c in a waveguide while group velocity remains below c.');
  }
  {
    const er=2+k,ans=377/Math.sqrt(er);
    add('em','dielectric-impedance',k,`A uniform plane wave propagates in a lossless nonmagnetic dielectric with relative permittivity ${er}. Taking free-space impedance as 377 Ω, find intrinsic impedance in Ω.`,ans,'Ω',[377*Math.sqrt(er),377/er,377*er],
      'Intrinsic impedance of a lossless medium is η=√(μ/ε). For μr=1, it reduces to η0/√εr.',
      [`Set μ=μ0 and ε=${er}ε0.`,`Then η=√(μ0/ε0)/√${er}=377/√${er}.`,`The resulting impedance is ${fmt(ans)} Ω, which relates electric-field amplitude to magnetic-field amplitude.`],
      'The refractive index is √εr, while intrinsic impedance varies inversely with it for a nonmagnetic medium. Relative permittivity is dimensionless.');
  }
  {
    const turns=k+1,area=.02+.005*k,b=.1+.02*k,w=100+20*k,r=5+k,ans=turns*area*b*w/r;
    add('em','faraday-loop-current',k,`A ${turns}-turn coil has area ${fmt(area)} m² per turn and resistance ${r} Ω. Uniform normal flux density is B(t)=${fmt(b)}cos(${w}t) T. Neglect inductance. Find peak induced current in A.`,ans,'A',[ans/turns,ans/w,ans*2],
      'Faraday’s law uses the time derivative of total flux linkage NΦ. For a sinusoidal normal field, peak induced emf is NABpeakω.',
      [`Flux linkage is λ(t)=NAB(t)=${turns}×${fmt(area)}×${fmt(b)}cos(${w}t).`,`Differentiation gives peak emf N A Bpeak ω=${fmt(turns*area*b*w)} V.`,`With inductance neglected, peak current is emfpeak/R=${fmt(turns*area*b*w)}/${r}=${fmt(ans)} A.`],
      'The angular frequency is already in rad/s, so no extra 2π is needed. Lenz’s law specifies the current direction; only the peak magnitude is requested.');
  }
  {
    const sigma=1e7,f=1+k,mu=4*Math.PI*1e-7,ans=Math.sqrt(2/(2*Math.PI*f*1e6*mu*sigma))*1e6;
    add('em','skin-depth',k,`A good nonmagnetic conductor has σ=10⁷ S/m and μ=4π×10⁻⁷ H/m. At ${f} MHz, find skin depth in µm using δ=√[2/(ωμσ)].`,ans,'µm',[ans*Math.sqrt(2),ans/Math.sqrt(2),ans*10],
      'In a good conductor, fields decay exponentially into the material. Skin depth is the distance over which field amplitude falls by a factor e.',
      [`Convert angular frequency: ω=2π×${f}×10⁶ rad/s.`,`Insert ω, μ=4π×10⁻⁷ and σ=10⁷ into δ=√[2/(ωμσ)].`,`The result in metres is ${Number(ans*1e-6).toExponential(4)} m. Multiplying by 10⁶ gives ${fmt(ans)} µm.`],
      'Skin depth scales as 1/√f and becomes smaller at higher frequency. Confusing hertz with angular frequency changes the numerical result.');
  }
  {
    const pt=1+k,gt=2,gr=3,f=1+k/10,r=100+10*k,lambda=.3/f,ans=pt*gt*gr*(lambda/(4*Math.PI*r))**2*1e9;
    add('em','friis-link',k,`In a free-space far-field link, transmit power is ${pt} W, linear antenna gains are G_t=2 and G_r=3, separation is ${r} m, and frequency is ${fmt(f)} GHz. With c=3×10⁸ m/s and perfect alignment/matching, find received power in nW.`,ans,'nW',[ans/6,ans*4,ans/4],
      'The Friis formula is Pr=PtGtGr[λ/(4πR)]² for a matched free-space far-field link. Gains here are linear rather than decibels.',
      [`The wavelength is λ=c/f=0.3/${fmt(f)}=${fmt(lambda)} m.`,`The propagation factor is [${fmt(lambda)}/(4π×${r})]².`,`Multiply by PtGtGr=${pt}×2×3 and convert W to nW to obtain ${fmt(ans)} nW.`],
      'Power falls with separation squared. Omitting either antenna gain or using dB-valued gains directly would change the result.');
  }
  {
    const e=10+2*k,ans=e*e/(2*377);
    add('em','poynting-average',k,`A uniform plane wave in free space has peak electric field ${e} V/m. Taking η₀=377 Ω, find time-average power density in W/m².`,ans,'W/m²',[e*e/377,377*e*e/2,e/377],
      'For a sinusoidal plane wave, the average Poynting magnitude is Epeak Hpeak/2=Epeak²/(2η). Peak and RMS field conventions must be distinguished.',
      [`The peak magnetic field is Hpeak=Epeak/η₀=${e}/377 A/m.`,`Average power density is one-half the product of the peak field amplitudes.`,`Thus Sav=${e}²/(2×377)=${fmt(ans)} W/m².`],
      'Using E²/η without the one-half factor is correct only when E denotes RMS field. The problem explicitly supplies peak field.');
  }

  // General Aptitude: quantitative and analytical problems with explicit assumptions.
  {
    const a=k+4,b=k+8,ans=a*b/(a+b);
    add('apt','combined-work',k,`A completes a job in ${a} days and B in ${b} days at constant rates. They start together and work without interference. In how many days is the job complete?`,ans,'days',[a+b,(a+b)/2,a*b/(b-a)],
      'Independent work rates add. A completion time must be converted into a fraction of the job completed per unit time before combining workers.',
      [`A completes 1/${a} of the job per day and B completes 1/${b}.`,`Their combined rate is (${a}+${b})/(${a}×${b}) jobs/day.`,`Time is the reciprocal, ${a}×${b}/(${a}+${b})=${fmt(ans)} days.`],
      `The combined time is less than ${a} days, the faster individual time. Averaging the completion times would fail this basic check.`);
  }
  {
    const dist=20+5*k,v1=30+2*k,v2=50+2*k,ans=2*v1*v2/(v1+v2);
    add('apt','equal-distance-speed',k,`A traveller covers ${dist} km at ${v1} km/h and the next ${dist} km at ${v2} km/h. Ignoring stops, what is the overall average speed in km/h?`,ans,'km/h',[(v1+v2)/2,Math.sqrt(v1*v2),v1*v2/(v1+v2)],
      'Average speed is total distance divided by total time. Equal distances at different speeds lead to a harmonic mean, not an arithmetic mean.',
      [`Total distance is ${2*dist} km.`,`Travel time is ${dist}/${v1}+${dist}/${v2} h.`,`Divide distance by time: vavg=2v₁v₂/(v₁+v₂)=${fmt(ans)} km/h.`],
      'More time is spent on the slower segment, so the average is below the arithmetic mean of the two speeds. The common segment distance cancels.');
  }
  {
    const markup=20+2*k,discount=5+k,ans=((1+markup/100)*(1-discount/100)-1)*100;
    add('apt','markup-discount',k,`An item is marked ${markup}% above its cost price and then sold at a ${discount}% discount on marked price. What is the net profit percentage relative to cost?`,ans,'%', [markup-discount,markup+discount,ans/2],
      'Markup is based on cost while discount is based on marked price. Successive percentage operations multiply their scale factors.',
      [`Take cost as 100 units. Marked price is 100×(1+${markup}/100)=${100+markup}.`,`Selling price is ${100+markup}×(1−${discount}/100)=${fmt((100+markup)*(1-discount/100))}.`,`Profit percentage on cost is selling price minus 100, namely ${fmt(ans)}%.`],
      'Simply subtracting discount percentage from markup percentage ignores their different bases. The multiplicative calculation also works when the net result is a loss.');
  }
  {
    const n=8+k,r=2+k%3;
    const choose=(n,r)=>{let v=1;for(let i=1;i<=r;i++)v=v*(n-r+i)/i;return v;};
    const probability=choose(n-2,r-2)/choose(n,r);
    add('apt','committee-selection',k,`A committee of ${r} people is selected uniformly from ${n} candidates, including two named candidates A and B. What is the probability both A and B are selected?`,probability,'',[r/n,(r/n)**2,(r-1)/(n-1)],
      'Committee selection is without replacement. Count committees that contain both named people and divide by the count of all equally likely committees.',
      [`All committees number C(${n},${r}).`,`With A and B already included, choose the remaining ${r-2} members from ${n-2}, giving C(${n-2},${r-2}).`,`Their ratio simplifies to r(r−1)/[n(n−1)]=${r}×${r-1}/(${n}×${n-1})=${fmt(probability)}.`],
      'Multiplying r/n by itself incorrectly treats the two inclusion events as independent. The second inclusion probability changes after the first is fixed.');
  }
  {
    const p=2+k,t=3+k;
    add('apt','pipes-drain',k,`An inlet fills an empty tank in ${p} hours. A drain empties a full tank in ${p+t} hours. Both are opened together when the tank is empty, with constant flow rates. How long until it fills?`,p*(p+t)/t,'hours',[p*(p+t)/(2*p+t),p+t,t],
      'The inlet contributes a positive fill rate and the drain a negative fill rate. Net filling time is the reciprocal of their rate difference.',
      [`The inlet rate is 1/${p} tank/h and drain rate is 1/${p+t} tank/h.`,`Net rate is 1/${p}−1/${p+t}=${t}/[${p}×${p+t}] tank/h.`,`Thus filling time is ${p}×${p+t}/${t}=${fmt(p*(p+t)/t)} hours.`],
      'The drain makes filling slower than the inlet alone, so the answer must exceed the inlet’s filling time. Adding rates would describe two inlets.');
  }
  {
    const n=k+4,mean=20+k,removed=10+k,ans=(n*mean-removed)/(n-1);
    add('apt','updated-average',k,`The average of ${n} observations is ${mean}. One observation equal to ${removed} is removed. What is the mean of the remaining observations?`,ans,'',[(mean+removed)/2,(n*mean-removed)/n,mean-removed/n],
      'Recover the original total from mean times count, subtract the removed observation, then divide by the new count.',
      [`The original sum is ${n}×${mean}=${n*mean}.`,`After removing ${removed}, the sum becomes ${n*mean-removed} and the count becomes ${n-1}.`,`The new mean is ${n*mean-removed}/${n-1}=${fmt(ans)}.`],
      'The removed value lies below the original mean, so removing it raises the mean. Dividing by the original count would miss the count change.');
  }
  {
    const p=2+k/2,years=2,ans=((1+p/100)**2-1)*100;
    add('apt','compound-growth',k,`A population grows at ${p}% per year compounded annually for two years. What is the total percentage increase over its initial value?`,ans,'%', [2*p,p*p,ans/2],
      'Annual compounding applies each year’s growth to the previous year’s enlarged population. The two-year growth factor is (1+r)².',
      [`Convert the annual percentage to rate r=${p}/100.`,`After two years, final/initial=(1+${p}/100)².`,`Subtract one and multiply by 100 to obtain total growth ${fmt(ans)}%.`],
      `The result exceeds the simple two-year increase ${2*p}% because the first year’s increase also grows in the second year.`);
  }
  {
    const first=k+2,step=k+1,n=10+k,ans=n*(2*first+(n-1)*step)/2;
    add('apt','arithmetic-sum',k,`A production schedule makes ${first} units on day 1 and increases output by ${step} units each successive day. How many units are made over the first ${n} days?`,ans,'units',[n*(first+(n-1)*step),n*first+n*step,ans+step*n],
      'Daily outputs form an arithmetic progression. Its total is the number of terms times the average of the first and last terms.',
      [`First output a=${first}; common difference d=${step}.`,`Day-${n} output is a+(n−1)d=${first}+${n-1}×${step}=${first+(n-1)*step}.`,`Total is n[2a+(n−1)d]/2=${n}×[${first}+${first+(n-1)*step}]/2=${ans} units.`],
      'There are n−1 increases between the first and nth days. Using n increases would shift every endpoint calculation by one day.');
  }
  {
    const good=5+k,bad=3+k,total=good+bad,ans=good*(good-1)/(total*(total-1));
    add('apt','without-replacement',k,`A box contains ${good} working and ${bad} defective components. Two are drawn randomly without replacement. What is the probability that both work?`,ans,'',[(good/total)**2,good/total,1-ans],
      'Without replacement, the second draw’s probabilities depend on the first draw. Use the multiplication rule with a conditional probability.',
      [`The first component works with probability ${good}/${total}.`,`If it works, ${good-1} working components remain among ${total-1} total.`,`Multiply: P(both work)=(${good}/${total})×(${good-1}/${total-1})=${fmt(ans)}.`],
      'Squaring the first-draw probability would apply to replacement or independent draws. Here taking out a working component slightly lowers the next success probability.');
  }
}

// Additional families broaden each subject beyond repeated substitution exercises.
for(let k=1;k<=6;k++){
  {
    const p=.01*k,sensitivity=.9,falseAlarm=.05,ans=p*sensitivity/(p*sensitivity+(1-p)*falseAlarm);
    add('math','bayes-detector',k,`A fault occurs with probability ${fmt(p)}. A detector reports positive with probability 0.9 when faulty and 0.05 when healthy. Given a positive report, find the probability of a fault.`,ans,'',[.9,p,.9*p],
      'Bayes’ theorem combines likelihood with the prior fault probability. A positive detector report can come from a real fault or a false alarm.',
      [`True-positive probability is 0.9×${fmt(p)}=${fmt(.9*p)}.`,`Total positive probability is 0.9×${fmt(p)}+0.05×${fmt(1-p)}=${fmt(.9*p+.05*(1-p))}.`,`Normalize the true-positive term by the total to obtain ${fmt(ans)}.`],
      'Sensitivity alone is not the posterior fault probability. When faults are rare, healthy components can contribute many false positives.');
  }
  {
    const a=k+1,b=k+4,ans=1/a+1/b;
    add('math','inverse-trace',k,`An invertible 2×2 matrix A has trace ${a+b} and determinant ${a*b}. Find trace(A⁻¹), rounded to four decimal places.`,ans,'',[a*b/(a+b),a+b,1/(a*b)],
      'The eigenvalues of an inverse matrix are reciprocals of the original eigenvalues. Their sum is the original eigenvalue sum divided by the original product.',
      [`Let the eigenvalues be λ₁ and λ₂ with λ₁+λ₂=${a+b} and λ₁λ₂=${a*b}.`,`Then trace(A⁻¹)=1/λ₁+1/λ₂=(λ₁+λ₂)/(λ₁λ₂).`,`Substitute the given invariants: ${a+b}/${a*b}=${fmt(ans)}.`],
      'The determinant is nonzero, so the inverse exists. Taking the reciprocal of the trace would not in general equal the trace of the inverse.');
  }
  {
    const a=k+1,r=a+1,b=a+3,ans=1/(a-b);
    add('math','residue-contour',k,`C is the counterclockwise circle |z|=${r}. For f(z)=1/[(z−${a})(z−${b})], what real coefficient c satisfies ∮_C f(z)dz=2πj c?`,ans,'',[1/(b-a),2/(a-b),0],
      'The residue theorem gives a contour integral as 2πj times the sum of residues of poles strictly inside a positively oriented contour.',
      [`The poles are z=${a} and z=${b}. Only ${a} lies inside |z|=${r}.`,`The simple-pole residue at z=${a} is lim(z→${a})(z−${a})f(z)=1/(${a}−${b}).`,`Thus the integral is 2πj×(${fmt(ans)}), and c=${fmt(ans)}.`],
      'The outside pole contributes no residue to this contour. Reversing the contour orientation would reverse the sign, but the stated orientation is counterclockwise.');
  }
  {
    const a=k+1,b=2*k+3,y0=1+k,ans=b/a+(y0-b/a)*Math.exp(-1);
    add('math','ode-initial-value',k,`For t≥0, y′+${a}y=${b}, with y(0)=${y0}. Find y(1/${a}), rounded to four decimal places.`,ans,'',[b/a,y0*Math.exp(-1),y0+b/a],
      'A first-order linear differential equation has a constant particular solution plus an exponentially decaying homogeneous solution. The initial condition fixes the decay coefficient.',
      [`At equilibrium, y∞=${b}/${a}. The homogeneous term is Ce^(−${a}t).`,`Apply y(0)=${y0} to get C=${y0}−${b}/${a}.`,`At t=1/${a}, the exponential is e⁻¹, giving y=${b}/${a}+(${y0}−${b}/${a})e⁻¹=${fmt(ans)}.`],
      'Discarding the initial condition would leave only the final value. The result lies between the initial value and the equilibrium because the decay factor is between zero and one.');
  }
  {
    const vx=k+1,vy=k+3,cov=.5,a=2,b=-1,ans=4*vx+vy-4*cov;
    add('math','correlated-variance',k,`Random variables X and Y have variances ${vx} and ${vy}, and covariance 0.5. Find Var(2X−Y).`,ans,'',[4*vx+vy,4*vx-vy,4*vx+vy+4*cov],
      'For correlated variables, Var(aX+bY)=a²Var(X)+b²Var(Y)+2abCov(X,Y). The cross term changes sign when the coefficients have opposite signs.',
      [`Here a=2 and b=−1, so the individual variance contribution is 4×${vx}+${vy}=${4*vx+vy}.`,`The covariance contribution is 2×2×(−1)×0.5=−2.`,`Adding them gives Var(2X−Y)=${ans}.`],
      'Independence was not stated and would contradict the nonzero covariance. The negative coefficient on Y does not make its own variance term negative.');
  }
  {
    const n=k+2,x0=k+1,ans=(x0+n/x0)/2;
    add('math','newton-step',k,`Newton–Raphson is used to solve x²−${n}=0 starting at x₀=${x0}. What is x₁, rounded to four decimal places?`,ans,'',[n/x0,x0-(x0*x0-n),Math.sqrt(n)],
      'Newton–Raphson updates x through xnew=x−f(x)/f′(x). A single update is generally an approximation, not the exact root.',
      [`For f(x)=x²−${n}, f′(x)=2x.`,`At x₀=${x0}, f(x₀)=${x0*x0-n} and f′(x₀)=${2*x0}.`,`Thus x₁=${x0}−(${x0*x0-n})/${2*x0}=(${x0}+${n}/${x0})/2=${fmt(ans)}.`],
      'Using the exact square root would answer a different question: this asks for one algorithmic iteration from the specified starting point.');
  }
  {
    const r=k+2,g=.1+.02*k,ans=r/(1-g);
    add('networks','dependent-input-resistance',k,`A one-port has resistor R=${r} kΩ to ground in parallel with an upward controlled current source g v/R, where v is port voltage and g=${fmt(g)}. Find the input resistance in kΩ.`,ans,'kΩ',[r*(1-g),r/(1+g),r/g],
      'Input resistance with dependent sources must be obtained from a test voltage or current while retaining the dependent source. The upward source opposes current drawn through the resistor.',
      [`Apply test voltage v. Resistor current entering the network is v/R.`,`The controlled source supplies g v/R toward the port, so net entering current is i=(1−g)v/R.`,`Therefore Rin=v/i=R/(1−g)=${r}/(1−${fmt(g)})=${fmt(ans)} kΩ.`],
      'Turning off a dependent source would incorrectly leave only R. Since 0<g<1, the input resistance is positive and exceeds R.');
  }
  {
    const v1=10+k,v2=4+k,r1=k+1,r2=k+3,r3=k+4,ans=(v1/r1+v2/r2)/(1/r1+1/r2+1/r3);
    add('networks','nodal-two-sources',k,`A node is connected through ${r1} kΩ to a fixed ${v1} V node, through ${r2} kΩ to a fixed ${v2} V node, and through ${r3} kΩ to ground. Find its voltage in V.`,ans,'V',[(v1+v2)/2,v1*r3/(r1+r3),v2*r3/(r2+r3)],
      'Nodal analysis applies KCL using each branch’s voltage difference divided by resistance. The unknown node is not an unloaded two-resistor divider.',
      [`Write (v−${v1})/${r1}+(v−${v2})/${r2}+v/${r3}=0, using kΩ and mA.`,`Collect v terms: v(1/${r1}+1/${r2}+1/${r3})=${v1}/${r1}+${v2}/${r2}.`,`Divide the source-current sum by total conductance to get v=${fmt(ans)} V.`],
      'The ground branch loads both source paths. Ignoring either fixed-voltage source changes the node equation and gives a different voltage.');
  }
  {
    const c1=k+2,c2=k+4,v=10+2*k,ce=c1*c2/(c1+c2),ans=.5*ce*v*v;
    add('networks','series-capacitor-energy',k,`Initially uncharged capacitors ${c1} µF and ${c2} µF are connected in series across ${v} V DC and allowed to settle. Find total stored electrostatic energy in µJ.`,ans,'µJ',[.5*(c1+c2)*v*v,ce*v*v,.5*c1*v*v],
      'Series capacitors carry equal charge and have equivalent capacitance Ceq=C₁C₂/(C₁+C₂). Their total stored energy is CeqV²/2.',
      [`Compute Ceq=${c1}×${c2}/(${c1}+${c2})=${fmt(ce)} µF.`,`The total terminal voltage is ${v} V.`,`Energy is (1/2)×${fmt(ce)}×${v}²=${fmt(ans)} µJ, since µF·V² gives µJ.`],
      'Using C₁+C₂ would treat the connection as parallel. The smaller capacitor has the larger voltage, but the equivalent capacitance already accounts for voltage division.');
  }
  {
    const l=k+2,c=k+4,ans=2*Math.sqrt(l*1e-3/(c*1e-6));
    add('networks','rlc-critical-damping',k,`A source-free series RLC circuit has L=${l} mH and C=${c} µF. Find the total series resistance needed for critical damping in Ω.`,ans,'Ω',[ans/2,ans*2,Math.sqrt(l/c)],
      'The series RLC natural polynomial is s²+(R/L)s+1/(LC). Critical damping occurs when the repeated-root condition α=ω₀ holds.',
      [`Identify α=R/(2L) and ω₀=1/√(LC).`,`Equating them gives Rcrit=2√(L/C).`,`Convert the given values to H and F, then calculate 2√[${l}×10⁻³/(${c}×10⁻⁶)]=${fmt(ans)} Ω.`],
      'The factor two is essential. The parallel-RLC critical-resistance relation has a different form because its damping coefficient depends inversely on resistance.');
  }
  {
    const dc=k+1,a=2*k+1,b=k+3,ans=Math.sqrt(dc*dc+(a*a+b*b)/2);
    add('networks','nonsinusoidal-rms',k,`A current is i(t)=${dc}+${a}cos(100t)+${b}sin(200t) A. Find RMS current over a common period, rounded to four decimal places.`,ans,'A',[Math.sqrt((dc*dc+a*a+b*b)/2),dc+(a+b)/Math.sqrt(2),Math.sqrt(dc*dc+a*a+b*b)],
      'RMS is the square root of the mean square. Orthogonal harmonics have zero average cross products over a common period, while the DC contribution is not halved.',
      [`The DC mean-square contribution is ${dc}²=${dc*dc}.`,`Each sinusoid contributes half its squared peak amplitude: (${a}²+${b}²)/2=${(a*a+b*b)/2}.`,`Add contributions and take the square root: Irms=√${dc*dc+(a*a+b*b)/2}=${fmt(ans)} A.`],
      'Adding the individual RMS values is invalid for orthogonal harmonics. The DC term must retain its full squared value.');
  }
  {
    const v=k+5,r1=k+2,r2=k+4,ans=v*r2/(r1+r2),rn=r1*r2/(r1+r2);
    add('networks','thevenin-divider',k,`An ideal ${v} V source drives series resistors ${r1} kΩ and ${r2} kΩ. The output terminals are across the lower ${r2} kΩ resistor. What Norton short-circuit current, in mA, corresponds to the output Thévenin equivalent?`,v/r1,'mA',[ans/r2, v/(r1+r2),ans/r1],
      'Norton current equals the terminal short-circuit current or Vth/Rth. When the output is shorted, the lower resistor is bypassed.',
      [`The open-circuit voltage is Vth=${v}×${r2}/(${r1}+${r2})=${fmt(ans)} V.`,`With the ideal source deactivated to a short, Rth=${r1}∥${r2}=${fmt(rn)} kΩ.`,`Therefore IN=Vth/Rth=${v}/${r1}=${fmt(v/r1)} mA.`],
      'The same result follows directly under an output short: all source current flows through the upper resistor and bypasses the lower resistor.');
  }
  {
    const a=.2+.05*k,ans=a**2;
    add('signals','anticausal-z',k,`X(z)=1/(1−${fmt(a)}z⁻¹) has ROC |z|<${fmt(a)}. Find x[−2], rounded to four decimal places.`,-(a**-2),'',[-a*a,a**-2,0],
      'A rational z-transform needs its ROC to determine sidedness. ROC inside the pole corresponds to an anti-causal rather than a causal exponential.',
      [`For ROC |z|<a, the inverse is x[n]=−aⁿu[−n−1].`,`At n=−2 the unit step equals one.`,`Thus x[−2]=−(${fmt(a)})⁻²=−1/${fmt(a*a)}=${fmt(-(a**-2))}.`],
      'Using the right-sided inverse aⁿu[n] would require ROC outside the pole and would give the wrong negative-time samples.');
  }
  {
    const a=k+2,w=k+1,ans=2*a/(a*a+4*w*w);
    add('signals','fourier-time-scaling',k,`For x(t)=e^(−${a}|t|), let y(t)=x(2t). Using X(ω)=∫x(t)e^(−jωt)dt, find Y(${w}), rounded to four decimal places.`,a/(a*a+w*w/4),'',[2*a/(a*a+w*w),2*a/(a*a+w*w/4),a/(a*a+w*w)],
      'Time compression y(t)=x(bt) gives Y(ω)=X(ω/b)/|b|. For e^(−a|t|), the transform is 2a/(a²+ω²).',
      [`Here b=2, so Y(ω)=(1/2)X(ω/2).`,`Substitute the known transform: Y(ω)=a/[a²+(ω/2)²].`,`At ω=${w}, Y=${a}/[${a*a}+${w*w}/4]=${fmt(a/(a*a+w*w/4))}.`],
      'Compressing the signal halves its total area, so Y(0) must be half of X(0). Forgetting the 1/2 scale factor fails that check.');
  }
  {
    const width=k+2,t=width+.5,ans=width-.5;
    add('signals','rectangle-convolution',k,`Let x(t)=1 for 0≤t≤${width} and zero otherwise. If y=x*x, find y(${t}).`,ans,'',[width,width+.5,.5],
      'Convolution of two unit-height rectangular pulses equals the length of their overlap as one is shifted. The result is triangular.',
      [`The integrand is one when τ lies in both [0,${width}] and [t−${width},t].`,`At t=${t}, these intervals overlap from 0.5 to ${width}.`,`The overlap length and hence the convolution value is ${width}−0.5=${ans}.`],
      'The peak occurs at t equal to one pulse width and equals that width. The requested point is on the descending side, so its value is slightly below the peak.');
  }
  {
    const a=k+1,b=k+2,dc=k/2,ans=dc*dc+(a*a+b*b)/2;
    add('signals','periodic-average-power',k,`Find time-average power of x(t)=${dc}+${a}cos(3t)+${b}sin(6t), assuming a 1 Ω normalization.`,ans,'',[dc*dc+a*a+b*b,(dc*dc+a*a+b*b)/2,dc+(a+b)/2],
      'Average signal power is the mean of |x(t)|² over a period. Distinct harmonics and DC are mutually orthogonal over a common period.',
      [`The DC term contributes ${dc}²=${dc*dc}.`,`The two sinusoidal terms contribute ${a}²/2 and ${b}²/2. Cross terms average to zero.`,`Thus P=${dc*dc}+${a*a}/2+${b*b}/2=${fmt(ans)}.`],
      'A nonzero periodic signal has finite average power but infinite total energy. The 1 Ω normalization avoids an additional resistance factor.');
  }
  {
    const n=k+4,a=k+1,b=k+2,ans=a*b*n;
    add('signals','circular-convolution-dc',k,`Two length-${n} sequences have every sample equal to ${a} and ${b}, respectively. Find any sample of their length-${n} circular convolution.`,ans,'',[a*b,a*b*(n-1),a*b*n*n],
      'An N-point circular convolution sums N products with indices wrapped modulo N. Constant sequences make every product identical.',
      [`Write y[r]=Σₘ₌₀ᴺ⁻¹x[m]h[(r−m) mod N].`,`Each term equals ${a}×${b}=${a*b}, independent of r and m.`,`There are ${n} terms, so every output sample equals ${n}×${a*b}=${ans}.`],
      'A DFT-domain derivation gives the same result: only the DC bins are nonzero, and the inverse transform contributes its 1/N factor.');
  }
  {
    const variance=k+1,a=.1+.05*k,ans=variance/(1-a*a);
    add('signals','white-noise-filter',k,`Zero-mean discrete white noise with variance ${variance} enters a stable filter h[n]=(${fmt(a)})ⁿu[n]. Find the output variance, rounded to four decimal places.`,ans,'',[variance/(1-a),variance*(1-a*a),variance],
      'For white input noise, distinct input samples are uncorrelated. Output variance is input variance multiplied by the sum of squared impulse-response coefficients.',
      [`Write σy²=σx²Σₙ|h[n]|².`,`Here Σₙ₌₀∞a²ⁿ=1/(1−a²), because |a|<1.`,`Therefore σy²=${variance}/(1−${fmt(a)}²)=${fmt(ans)}.`],
      'Using DC gain squared would incorrectly assume all noise samples add coherently. Whiteness eliminates the cross-covariance terms.');
  }
  {
    const ratio=1+k/2,ans=1/Math.sqrt(ratio);
    add('devices','depletion-doping',k,`For a one-sided abrupt p⁺n junction at fixed total junction potential, the lightly doped n-side concentration is multiplied by ${ratio}. By what factor does total depletion width change?`,ans,'',[Math.sqrt(ratio),1/ratio,ratio],
      'For a one-sided abrupt junction, depletion extends mainly into the lightly doped side, with W≈√[2ε(Vbi+VR)/(qND)]. Hold the total potential fixed as stated.',
      [`All quantities except ND are fixed, so W is proportional to ND⁻¹ᐟ².`,`With ND,new=${ratio}ND,old, form Wnew/Wold=√(ND,old/ND,new).`,`The width factor is 1/√${ratio}=${fmt(ans)}.`],
      'More doping requires less depleted distance to supply the compensating space charge. Fixing total junction potential avoids an extra built-in-potential change.');
  }
  {
    const vgs=k/5+1.5,vth=.5,kn=.4,id=.5*kn*(vgs-vth)**2,rd=2+k/2,vdd=10+k,ans=vdd-id*rd;
    add('devices','mos-saturation-check',k,`An nMOS source is grounded, gate held at ${fmt(vgs)} V, drain connected through ${rd} kΩ to ${vdd} V. V_TH=0.5 V and I_D=(0.4/2)(V_GS−V_TH)² mA in saturation. Neglect channel-length modulation. Find V_DS in V.`,ans,'V',[vdd,vdd-2*id*rd,id*rd],
      'First compute the square-law saturation current, then the drain resistor drop. The result must satisfy VDS≥VGS−VTH to validate the assumed region.',
      [`Overdrive is VOV=${fmt(vgs)}−0.5=${fmt(vgs-vth)} V.`,`Saturation current is ID=0.2×(${fmt(vgs-vth)})²=${fmt(id)} mA.`,`Drain voltage is VDS=${vdd}−${fmt(id)}×${rd}=${fmt(ans)} V.`,`This exceeds the overdrive ${fmt(vgs-vth)} V, so saturation is consistent.`],
      'Applying a saturation formula without checking the resulting VDS can produce an invalid bias solution. The supplied parameters keep the MOSFET in saturation.');
  }
  {
    const v=5+k,r=k+1,vf=.6,ans=(v-vf)/r;
    add('devices','piecewise-diode-circuit',k,`A ${v} V source feeds a forward-oriented diode through ${r} kΩ. The diode model is open when off and a constant 0.6 V drop when on. Find the circuit current in mA.`,ans,'mA',[v/r,(v+vf)/r,ans/2],
      'A piecewise diode circuit is solved by assuming a state and checking it. The positive source can forward bias this series diode, so the on-state model applies.',
      [`Assume the diode is on, fixing its forward voltage at 0.6 V.`,`KVL gives resistor voltage VR=${v}−0.6=${fmt(v-vf)} V.`,`The current is VR/R=${fmt(v-vf)}/${r}=${fmt(ans)} mA, which is positive and validates the on state.`],
      'The given constant-drop model differs from an ideal zero-drop diode and from the exponential Shockley model. Use the specified approximation consistently.');
  }
  {
    const vb=.7,vr=k+1,ans=Math.sqrt(vb/(vb+vr));
    add('devices','junction-capacitance',k,`An abrupt junction has built-in potential 0.7 V and zero-bias depletion capacitance C₀. At reverse bias ${vr} V, find C_j/C₀ using the depletion approximation.`,ans,'',[vb/(vb+vr),Math.sqrt((vb+vr)/vb),1/(1+vr)],
      'For an abrupt junction, depletion width grows as √(Vbi+VR), and capacitance varies inversely with depletion width. Hence Cj=C₀(1+VR/Vbi)⁻¹ᐟ².',
      [`At zero reverse bias the reference total potential is Vbi=0.7 V.`,`At the specified reverse bias it is 0.7+${vr}=${fmt(vb+vr)} V.`,`Thus Cj/C₀=√[0.7/(0.7+${vr})]=${fmt(ans)}.`],
      'Reverse bias widens depletion and lowers capacitance, so the ratio must be below one. A linearly graded junction has a different exponent.');
  }
  {
    const length=10+k,e=100+10*k,mu=1000,vel=mu*e,ans=length*1e-4/vel*1e9;
    add('devices','drift-transit',k,`An electron crosses ${length} µm of uniform silicon under field magnitude ${e} V/cm. Take mobility 1000 cm²/(V·s), ignore velocity saturation and diffusion. Find drift transit time in ns.`,ans,'ns',[ans*100,ans/100,ans*10],
      'In the low-field mobility model, drift-speed magnitude is μE. Transit time is distance divided by speed, with consistent length units.',
      [`The speed magnitude is μE=1000×${e}=${vel} cm/s.`,`Convert distance ${length} µm to ${fmt(length*1e-4)} cm.`,`Time is L/v=${Number(length*1e-4/vel).toExponential(4)} s=${fmt(ans)} ns.`],
      'Electron drift direction is opposite the electric field, but the transit-time magnitude is positive. High-field velocity saturation is explicitly excluded.');
  }
  {
    const ic=1+k/2,beta=80+10*k,ans=ic*(1+1/beta);
    add('devices','bjt-emitter-current',k,`An NPN transistor operates in forward-active mode with I_C=${ic} mA and β=${beta}. Find emitter current in mA, rounded to four decimal places.`,ans,'mA',[ic,ic*(1-1/beta),ic/beta],
      'The emitter current is the sum of collector and base currents. Finite current gain β must be retained when an exact emitter-current value is requested.',
      [`Using β=IC/IB, the base current is IB=${ic}/${beta}=${fmt(ic/beta)} mA.`,`By terminal-current conservation, IE=IC+IB.`,`Thus IE=${ic}(1+1/${beta})=${fmt(ans)} mA.`],
      'Approximating IE≈IC is useful for large β but misses the base-current contribution asked for in this calculation.');
  }
  {
    const gain=10+2*k,cgd=1+k/2,ans=cgd*(1+gain);
    add('analog','miller-input-capacitance',k,`A voltage amplifier has small-signal gain v_o/v_i=−${gain}. A ${cgd} pF capacitor connects its input and output. Under Miller’s theorem, find its equivalent input capacitance in pF.`,ans,'pF',[cgd,cgd*(gain-1),cgd*(1+1/gain)],
      'Miller’s theorem replaces an impedance bridging two nodes by separate grounded impedances when their voltage ratio is known. For a capacitor, Cin=C(1−Av).',
      [`The capacitor input current is C d(vi−vo)/dt.`,`With vo=−${gain}vi, the voltage across it is (1+${gain})vi.`,`Thus Cin=${cgd}×${gain+1}=${fmt(ans)} pF.`],
      'The inverting gain multiplies the input capacitance substantially. The smaller C(1−1/Av) term belongs to the output equivalent.');
  }
  {
    const ad=100+20*k,cmrr=60+2*k,ac=ad/10**(cmrr/20),ans=ac;
    add('analog','cmrr-gain',k,`A differential amplifier has differential voltage gain ${ad} and CMRR=${cmrr} dB. Find the magnitude of common-mode voltage gain, rounded to four decimal places.`,ans,'',[ad/10**(cmrr/10),10**(cmrr/20)/ad,ad/20],
      'CMRR is the ratio of differential gain to common-mode gain. Since these are voltage gains, its decibel definition uses 20log₁₀.',
      [`CMRRlinear=10^(${cmrr}/20).`,`Using CMRRlinear=|Ad/Ac|, rearrange |Ac|=|Ad|/CMRRlinear.`,`Therefore |Ac|=${ad}/10^(${cmrr}/20)=${fmt(ans)}.`],
      'Using 10log rather than 20log treats an amplitude ratio as a power ratio and gives a very different answer.');
  }
  {
    const fc=10+2*k,ans=fc*Math.sqrt(Math.sqrt(2)-1);
    add('analog','cascaded-pole-bandwidth',k,`Two identical, isolated, unity-DC-gain low-pass stages each have a single pole at ${fc} kHz. What is the overall −3 dB frequency in kHz?`,ans,'kHz',[fc,fc/2,fc/Math.sqrt(2)],
      'Cascaded magnitudes multiply. Two identical first-order responses produce total magnitude 1/[1+(f/fc)²], rather than a single-pole response.',
      [`For each stage, |H|=1/√[1+(f/${fc})²].`,`For the cascade, set 1/[1+(f/${fc})²]=1/√2 at −3 dB.`,`Then (f/${fc})²=√2−1, so f=${fc}√(√2−1)=${fmt(ans)} kHz.`],
      'At each individual pole frequency the cascade is already at −6 dB. Therefore its overall −3 dB frequency must be lower than the individual pole frequency.');
  }
  {
    const rs=2+k,rpi=4+k,rb=10+2*k,av=-20-k,rin=rb*rpi/(rb+rpi),ans=av*rin/(rs+rin);
    add('analog','input-loading',k,`A common-emitter stage has gain v_o/v_b=${av}, rπ=${rpi} kΩ and bias resistance ${rb} kΩ to AC ground. An input source has series resistance ${rs} kΩ. Neglect other input effects. Find v_o/v_s.`,ans,'',[av,av*rpi/(rs+rpi),-av*rin/(rs+rin)],
      'Source resistance and amplifier input resistance form a voltage divider before the stage gain. The bias resistance loads rπ in parallel.',
      [`Input resistance is Rin=${rb}∥${rpi}=${fmt(rin)} kΩ.`,`The base/source ratio is vb/vs=Rin/(Rs+Rin)=${fmt(rin/(rs+rin))}.`,`Multiply by the stage gain ${av}: vo/vs=${fmt(ans)}.`],
      'The loaded gain magnitude is smaller than the specified base-to-output gain. Omitting the bias network overestimates input resistance and overall gain.');
  }
  {
    const ri=2+k,loop=10+2*k,ans=ri*(1+loop);
    add('analog','series-feedback-input',k,`A voltage-series negative-feedback amplifier has open-loop input resistance ${ri} kΩ and loop gain Aβ=${loop}. Under the ideal feedback model, find closed-loop input resistance in kΩ.`,ans,'kΩ',[ri/(1+loop),ri*loop,ri+loop],
      'Series mixing at the input reduces the error voltage for a given applied input, increasing input resistance by the feedback factor 1+Aβ.',
      [`The series-feedback resistance transformation is Rif=Ri(1+Aβ).`,`The feedback factor here is 1+${loop}=${loop+1}.`,`Therefore Rif=${ri}×${loop+1}=${ans} kΩ.`],
      'Shunt mixing would instead reduce input resistance. The specified voltage-series topology is what determines the direction of the transformation.');
  }
  {
    const sat=5+k,r1=k+1,r2=3+k,beta=r1/(r1+r2),ans=2*sat*beta;
    add('analog','schmitt-hysteresis',k,`An ideal inverting Schmitt trigger has symmetric output saturation ±${sat} V. Its non-inverting input is a divider taking fraction β=${r1}/(${r1}+${r2}) of the output, referenced to ground. Find hysteresis width in V.`,ans,'V',[sat*beta,sat/beta,2*sat*(1-beta)],
      'The positive-feedback divider sets two switching thresholds according to the present output state. Hysteresis width is the upper threshold minus the lower threshold.',
      [`When output is +${sat} V, threshold is +βVsat=+${fmt(sat*beta)} V.`,`When output is −${sat} V, threshold is −${fmt(sat*beta)} V.`,`Their difference is 2βVsat=2×(${r1}/${r1+r2})×${sat}=${fmt(ans)} V.`],
      'The single positive threshold is only half the hysteresis width because the saturation levels and divider reference are symmetric about zero.');
  }
  {
    const n=k+3,ans=2**(n-1);
    add('digital','parity-function-count',k,`An N-input XOR gate has N=${n}. Across all 2^N equally likely binary input words, how many make its output one?`,ans,'',[2**n-1,n,2**(n-2)],
      'An XOR outputs one for odd input parity. The even- and odd-parity sets have the same size because flipping any fixed input bit pairs one with the other.',
      [`There are 2^${n}=${2**n} possible words.`,`Flipping the first bit maps each even-parity word to one unique odd-parity word and vice versa.`,`Exactly half therefore have odd parity: 2^(${n}−1)=${ans}.`],
      'XOR is not an OR gate: inputs with two ones have output zero. Counting all nonzero words would incorrectly include even-parity words.');
  }
  {
    const n=k+4,carry=1+.1*k,sum=2+.1*k,ans=(n-1)*carry+sum;
    add('digital','ripple-adder-delay',k,`An ${n}-bit ripple-carry adder has carry propagation delay ${fmt(carry)} ns per stage and final sum generation delay ${fmt(sum)} ns after carry arrives. Ignore operand-to-carry startup delay. Find delay from carry-in to most-significant sum in ns.`,ans,'ns',[n*carry+sum,n*sum,(n-1)*carry],
      'The most-significant sum depends on carry propagation through all lower stages, then the sum logic of the last stage. The stated model separates these delays.',
      [`A carry reaches the most-significant stage after ${n-1} lower-stage carry delays.`,`This propagation takes ${n-1}×${fmt(carry)}=${fmt((n-1)*carry)} ns.`,`Add the final sum delay ${fmt(sum)} ns to obtain ${fmt(ans)} ns.`],
      'The final carry-out path has a different endpoint. Counting n carry stages before generating the most-significant sum adds one stage too many.');
  }
  {
    const m=8+4*k;let r=1;while(2**r<m+r+1)r++;
    add('digital','hamming-parity',k,`A binary single-error-correcting Hamming code protects ${m} data bits. What is the minimum number of Hamming parity bits r satisfying 2^r≥m+r+1? Do not add an overall double-error-detection parity bit.`,r,'',[r-1,r+1,r+2],
      'The syndrome must identify every possible single-bit error among data and parity positions, plus the no-error case. Hence 2ʳ≥m+r+1.',
      [`For r=${r-1}, 2ʳ=${2**(r-1)} is below m+r+1=${m+r}.`,`For r=${r}, 2ʳ=${2**r} is at least m+r+1=${m+r+1}.`,`The minimum valid count is therefore ${r} parity bits.`],
      'An extended SECDED code adds one overall parity bit, but that extra protection was explicitly excluded.');
  }
  {
    const stages=4+k,instructions=20+5*k,t=2+.2*k,ans=(stages+instructions-1)*t;
    add('digital','pipeline-latency',k,`An ideal ${stages}-stage pipeline has clock period ${fmt(t)} ns. Starting empty, it processes ${instructions} instructions with no stalls and one completion per clock after filling. What is total time until all instructions finish?`,ans,'ns',[stages*instructions*t,instructions*t,(stages+instructions)*t],
      'An initially empty ideal pipeline needs one full pipeline latency for the first instruction, then one cycle for each subsequent completion.',
      [`The first instruction finishes after ${stages} cycles.`,`The remaining ${instructions-1} instructions each require one additional cycle, totaling ${stages+instructions-1} cycles.`,`Multiply by ${fmt(t)} ns/cycle to get ${fmt(ans)} ns.`],
      'Ignoring fill latency gives too small a result. Multiplying instruction count by stage count would describe fully serial execution without overlap.');
  }
  {
    const n=k+4,ans=2*n;
    add('digital','johnson-counter',k,`An ${n}-flip-flop Johnson counter is initialized to all zero and operates in its intended cycle. How many distinct states occur before repetition?`,ans,'',[n,2**n,2**n-1],
      'A Johnson counter feeds the complemented last-stage output into the first stage. Its intended cycle contains 2N states for N flip-flops.',
      [`Starting with all zeros, ones shift in for N=${n} clocks until all stages are one.`,`Zeros then shift in for another ${n} clocks, returning to all zero.`,`The cycle therefore contains 2×${n}=${ans} distinct states.`],
      'An ordinary ring counter has N intended states, while an unrestricted binary counter has 2ᴺ. Initialization matters because a Johnson counter can have other cycles.');
  }
  {
    const p=.1+.05*k,ans=2*p*(1-p);
    add('digital','xor-probability',k,`Independent binary signals A and B are each one with probability ${fmt(p)}. What is the probability that A XOR B equals one?`,ans,'',[p*p,2*p-p*p,1-p*p],
      'XOR is one for exactly one asserted input: events (A=1,B=0) and (A=0,B=1). Independence permits multiplying probabilities in each case.',
      [`P(A=1,B=0)=${fmt(p)}×${fmt(1-p)}.`,`P(A=0,B=1)=${fmt(1-p)}×${fmt(p)}.`,`Add the disjoint cases: P(XOR=1)=2p(1−p)=${fmt(ans)}.`],
      'The union probability 2p−p² belongs to OR, which also accepts the both-one case. XOR excludes that case.');
  }
  {
    const a=k+1,b=3*k+5,ans=(b-a)**2/4;
    add('control','root-locus-breakaway',k,`For unity negative feedback with G(s)=K/[(s+${a})(s+${b})], K≥0, find the gain at the real-axis breakaway point.`,ans,'',[(a+b)**2/4,(b-a)/2,a*b],
      'On the root locus, K=−(s+a)(s+b). A real-axis breakaway occurs where dK/ds=0, equivalently where the two real closed-loop roots merge.',
      [`Differentiate K(s) to get dK/ds=−[2s+${a+b}].`,`The stationary point is s=−${a+b}/2, between the two real open-loop poles.`,`Substituting gives Kbreak=(b−a)²/4=(${b}−${a})²/4=${fmt(ans)}.`],
      'The same boundary follows by setting the characteristic quadratic discriminant to zero. Positive gain beyond it produces a complex-conjugate root pair.');
  }
  {
    const alpha=.1+.05*k,ans=Math.asin((1-alpha)/(1+alpha))*180/Math.PI;
    add('control','lead-phase',k,`A lead compensator is G_c(s)=(1+sT)/(1+αsT), with α=${fmt(alpha)} and T>0. Find its maximum phase lead in degrees.`,ans,'degrees',[Math.atan(1/alpha)*180/Math.PI,90-ans,ans/2],
      'For 0<α<1, a lead network has maximum phase φmax satisfying sinφmax=(1−α)/(1+α). The time constant sets the frequency of that maximum, not its angle.',
      [`Compute (1−α)/(1+α)=(1−${fmt(alpha)})/(1+${fmt(alpha)})=${fmt((1-alpha)/(1+alpha))}.`,`Apply inverse sine to obtain the angle in radians.`,`Convert to degrees: φmax=${fmt(ans)} degrees.`],
      'The compensator pole is at a higher frequency than its zero, giving positive phase lead. Reversing the pole and zero would produce phase lag.');
  }
  {
    const pm=30+5*k,w=2+k,ans=pm*Math.PI/(180*w);
    add('control','delay-margin',k,`A nominal loop has phase margin ${pm} degrees at its unique gain crossover ${w} rad/s. A pure time delay is added, without changing loop magnitude. What delay in s exhausts that phase margin?`,ans,'s',[pm/w,pm/(360*w),2*ans],
      'A pure delay e^(−sτ) has unit magnitude and contributes phase −ωτ radians. At the unchanged gain crossover it consumes the available phase margin.',
      [`Convert phase margin to radians: PM=${pm}π/180.`,`Set the added lag ωgcτ equal to that margin at the limiting boundary.`,`Then τmax=(${pm}π/180)/${w}=${fmt(ans)} s.`],
      'This is the zero-margin boundary, so a positive remaining margin requires a smaller delay. Mixing degrees with ωτ in radians is a common error.');
  }
  {
    const a=k+1,b=k+3,ans=a;
    add('control','controllability-determinant',k,`For A=[0 1; −${a} −${b}] and B=[0; 1], find the determinant of the 2×2 controllability matrix [B AB].`,-1,'',[0,1,a],
      'A two-state system is controllable if [B AB] has full rank. For a square 2×2 controllability matrix, a nonzero determinant establishes full rank.',
      [`Multiply AB=[1; −${b}].`,`Thus [B AB]=[0 1; 1 −${b}].`,`Its determinant is 0×(−${b})−1×1=−1, independent of ${a} and ${b}.`],
      'The nonzero determinant proves controllability for these parameters. Stability of A is a separate property and is not the controllability criterion.');
  }
  {
    const kp=k+2,ki=2*k+3,a=k+1,ans=a/ki;
    add('control','pi-ramp-error',k,`A plant 1/(s+${a}) is controlled by C(s)=${kp}+${ki}/s in unity negative feedback. Assuming stable closed loop, find unit-ramp steady-state error.`,ans,'',[1/kp,1/ki,kp/ki],
      'A PI controller adds an integrator to the loop. Ramp error is set by the velocity constant of the complete controller–plant product.',
      [`Loop transfer is L(s)=(${kp}s+${ki})/[s(s+${a})].`,`Kv=lim(s→0)sL(s)=${ki}/${a}.`,`Thus unit-ramp error is 1/Kv=${a}/${ki}=${fmt(ans)}.`],
      `The characteristic polynomial is s²+${a+kp}s+${ki}, with positive coefficients, confirming stability here. Proportional gain changes dynamics but not this ramp-error constant.`);
  }
  {
    const wn=3+k,z=.2+.05*k,ans=Math.PI/(wn*Math.sqrt(1-z*z));
    add('control','second-order-peak-time',k,`A standard underdamped second-order system has ω_n=${wn} rad/s and ζ=${fmt(z)}. Find first peak time after a unit step, in s.`,ans,'s',[Math.PI/wn,1/(z*wn),2*ans],
      'The oscillatory part of a second-order step response uses damped natural frequency ωd=ωn√(1−ζ²). Its first peak occurs at π/ωd.',
      [`Compute ωd=${wn}√(1−${fmt(z)}²)=${fmt(wn*Math.sqrt(1-z*z))} rad/s.`,`The first peak occurs when ωdt=π.`,`Therefore tp=π/${fmt(wn*Math.sqrt(1-z*z))}=${fmt(ans)} s.`],
      'Using ωn directly neglects damping’s effect on oscillation frequency. Peak time differs from rise time and settling time.');
  }
  {
    const nf1=2+k/2,nf2=5+k,gain=10+2*k,F1=10**(nf1/10),F2=10**(nf2/10),G1=10**(gain/10),ans=10*Math.log10(F1+(F2-1)/G1);
    add('comm','cascade-noise-figure',k,`Two receiver stages have noise figures ${nf1} dB and ${nf2} dB. The first stage power gain is ${gain} dB. Find cascade noise figure in dB using Friis’ noise formula.`,ans,'dB',[nf1+nf2,nf1,10*Math.log10(F1+F2/G1)],
      'Friis’ cascade-noise formula uses linear noise factors and linear power gain: Ftotal=F₁+(F₂−1)/G₁. Convert to dB only after combining.',
      [`Convert F₁=10^(${nf1}/10), F₂=10^(${nf2}/10) and G₁=10^(${gain}/10).`,`Compute Ftotal=${fmt(F1)}+(${fmt(F2)}−1)/${fmt(G1)}=${fmt(F1+(F2-1)/G1)}.`,`Then NFtotal=10log₁₀(Ftotal)=${fmt(ans)} dB.`],
      'The first-stage gain suppresses the input-referred impact of later-stage noise. Noise figures in dB cannot simply be added.');
  }
  {
    const qinv=2+k/4,ans=qinv*qinv/2;
    add('comm','bpsk-target-ebn0',k,`For coherent BPSK in AWGN, P_b=Q(√(2E_b/N₀)). A target error probability has Q⁻¹(P_b)=${qinv}. What minimum linear E_b/N₀ meets this target?`,ans,'',[qinv*qinv,2*qinv*qinv,qinv/2],
      'The Q function decreases with its argument, so meeting an upper limit on bit error probability requires a sufficiently large Eb/N0.',
      [`Set the Q-function argument to its target inverse: √(2Eb/N₀)=${qinv}.`,`Square both sides to get 2Eb/N₀=${qinv*qinv}.`,`Thus the minimum linear ratio is Eb/N₀=${qinv*qinv}/2=${fmt(ans)}.`],
      'This is a linear energy-to-noise-density ratio, not a dB value. A dB answer would require an additional 10log₁₀ operation.');
  }
  {
    const p=.05+.02*k,L=2+k%3,ans=p**L;
    add('comm','selection-diversity',k,`A receiver chooses the best of ${L} independent diversity branches. Each branch is below the required SNR threshold with probability ${fmt(p)}. Find total outage probability.`,ans,'',[p,L*p,1-(1-p)**L],
      'Selection combining is in outage only when every candidate branch is below threshold. Independence makes the joint outage probability the product of branch probabilities.',
      [`Each branch has outage probability p=${fmt(p)}.`,`The best branch fails only if all ${L} branches fail simultaneously.`,`Therefore Pout=p^${L}=(${fmt(p)})^${L}=${fmt(ans)}.`],
      'The expression 1−(1−p)ᴸ instead means at least one branch fails, which is not an outage when another usable branch remains.');
  }
  {
    const band=3+k,bits=k+5,ans=2*band*bits;
    add('comm','nyquist-pcm-rate',k,`A real low-pass message is ideally bandlimited to ${band} kHz. It is sampled at the ideal Nyquist rate and quantized to ${bits} bits/sample. Ignoring overhead, find raw PCM bit rate in kbit/s.`,ans,'kbit/s',[band*bits,2*band*2**bits,2*band],
      'The ideal Nyquist sampling rate is twice the highest baseband frequency. PCM bit rate is sample rate multiplied by bits per sample.',
      [`Minimum ideal sampling rate is fs=2×${band}=${2*band} ksample/s.`,`Each sample contributes ${bits} binary digits.`,`Raw bit rate is ${2*band}×${bits}=${ans} kbit/s.`],
      'The number of quantization levels is 2ᴺ, but each sample carries N bits, not 2ᴺ bits. Practical anti-alias filtering may require a higher sample rate.');
  }
  {
    const n0=.2+.05*k,a=k+1,ans=n0/(4*a);
    add('comm','filtered-awgn-variance',k,`Continuous-time white Gaussian noise has two-sided PSD N₀/2 with N₀=${fmt(n0)}. It enters a filter h(t)=e^(−${a}t)u(t). Find output noise variance.`,ans,'',[n0/(2*a),n0/a,n0/(4*a*a)],
      'For white noise with two-sided PSD N₀/2, filter output variance is (N₀/2)∫|h(t)|²dt. The impulse-response energy supplies the noise gain.',
      [`The impulse-response energy is ∫₀∞e^(−${2*a}t)dt=1/${2*a}.`,`Multiply by N₀/2=${fmt(n0/2)}.`,`Thus σout²=N₀/(4a)=${fmt(n0)}/(4×${a})=${fmt(ans)}.`],
      'The two-sided PSD convention is specified to avoid a factor-of-two ambiguity. Replacing impulse-response energy by DC gain squared is not valid for white input noise.');
  }
  {
    const amp=1+k/2,varn=.5+k/10,p=.15+.04*k,ans=varn/(2*amp)*Math.log((1-p)/p);
    add('comm','binary-map-threshold',k,`A receiver observes r=s+n, where s=+${amp} with prior ${fmt(p)} or −${amp} otherwise. Noise is zero-mean Gaussian with variance ${fmt(varn)}. With equal error costs, decide +${amp} if r exceeds what MAP threshold?`,ans,'',[0,-ans,2*ans],
      'The MAP detector compares posterior probabilities. Equal-variance Gaussian likelihoods lead to a linear observation threshold adjusted by the prior odds.',
      [`Log likelihood ratio is ln[p(r|+A)/p(r|−A)]=2Ar/σ².`,`MAP selects +A when this exceeds ln[P(−A)/P(+A)]=ln(${fmt(1-p)}/${fmt(p)}).`,`Thus threshold γ=σ²/(2A) ln[(1−p)/p]=${fmt(ans)}.`],
      'The positive symbol is less probable here, so the threshold is positive and favors the negative symbol unless the observation provides sufficient evidence.');
  }
  {
    const er=2+k,n=Math.sqrt(er),ans=((1-n)/(1+n))**2*100;
    add('em','dielectric-boundary-reflection',k,`A plane wave in free space is normally incident on a lossless nonmagnetic dielectric with ε_r=${er}. What percentage of incident power is reflected?`,ans,'%', [Math.abs((1-n)/(1+n))*100,100-ans,ans/2],
      'At normal incidence, electric-field reflection is Γ=(η₂−η₁)/(η₂+η₁). Reflected power in the incident medium is |Γ|² times incident power.',
      [`For μr=1, η₂=η₀/√${er} and η₁=η₀.`,`Cancel η₀ to obtain Γ=(1−√${er})/(1+√${er}).`,`The reflected percentage is 100Γ²=${fmt(ans)}%.`],
      'The electric reflection coefficient is negative because the second medium has lower impedance. Power reflection is nevertheless nonnegative after squaring.');
  }
  {
    const z0=40+5*k,angle=10+5*k,ans=z0*Math.tan(angle*Math.PI/180);
    add('em','shorted-line-reactance',k,`A lossless ${z0} Ω line is short-circuited at its load and has electrical length ${angle} degrees. Find input reactance X in Ω, where Z_in=jX.`,ans,'Ω',[-ans,z0/Math.tan(angle*Math.PI/180),z0*Math.sin(angle*Math.PI/180)],
      'The input impedance of a short-circuited lossless line is Zin=jZ₀tan(βl). Electrical length supplies βl directly.',
      [`Use βl=${angle} degrees=${angle}π/180 radians.`,`Evaluate tan(βl)=${fmt(Math.tan(angle*Math.PI/180))}.`,`Multiply by Z₀: X=${z0}×${fmt(Math.tan(angle*Math.PI/180))}=${fmt(ans)} Ω.`],
      'For an electrical length between zero and 90 degrees, the shorted stub appears inductive, so X is positive. An open-circuit stub uses a negative cotangent relation.');
  }
  {
    const rs=25+5*k,rl=100+10*k,ans=Math.sqrt(rs*rl);
    add('em','quarter-wave-matching',k,`A real ${rs} Ω source resistance is to be matched to a real ${rl} Ω load using a lossless quarter-wave transformer. What characteristic impedance is required, in Ω?`,ans,'Ω',[(rs+rl)/2,rs*rl,rl-rs],
      'A quarter-wave transformer presents Zin=Zt²/RL. A match requires this input resistance to equal the source resistance.',
      [`Set Rs=Zt²/RL.`,`Rearrange to Zt²=RsRL=${rs}×${rl}=${rs*rl}.`,`Take the positive root: Zt=√${rs*rl}=${fmt(ans)} Ω.`],
      'The transformer impedance is the geometric mean of the two real resistances. The match holds at the design electrical length rather than over all frequencies.');
  }
  {
    const cap=k+2,v=10+k,w=1000+200*k,ans=cap*1e-9*v*w*1000;
    add('em','displacement-current',k,`An ideal parallel-plate capacitor has C=${cap} nF and applied voltage v(t)=${v}cos(${w}t) V. What is peak displacement current in mA? Ignore fringing and leakage.`,ans,'mA',[ans/2,ans*2,ans/w],
      'The displacement current through an ideal capacitor equals its terminal current i=C dv/dt. For a sinusoid its peak magnitude is CωVpeak.',
      [`Differentiate v(t): dv/dt=−${v*w}sin(${w}t) V/s.`,`Multiply peak slope by C=${cap}×10⁻⁹ F.`,`Convert A to mA to obtain Ipeak=${fmt(ans)} mA.`],
      'The given angular frequency needs no additional 2π. Average current is zero over a cycle, while peak displacement current is nonzero.');
  }
  {
    const g=2+k,lambda=.1+.02*k,ans=g*lambda*lambda/(4*Math.PI)*1e4;
    add('em','antenna-aperture',k,`An antenna has linear gain ${g} at wavelength ${fmt(lambda)} m. For perfect polarization matching, find maximum effective aperture in cm² using A_e=Gλ²/(4π).`,ans,'cm²',[ans/1e4,ans*4*Math.PI,ans/2],
      'Antenna gain and maximum receiving effective area are related by Ae=Gλ²/(4π). The gain must be a linear value.',
      [`Compute Gλ²=${g}×(${fmt(lambda)})²=${fmt(g*lambda*lambda)} m².`,`Divide by 4π to get aperture in square metres.`,`Since 1 m²=10000 cm², the result is ${fmt(ans)} cm².`],
      'Effective aperture is a receiving-area measure and need not equal the antenna’s physical geometric area. The square-unit conversion requires 10000 rather than 100.');
  }
  {
    const delta=10+2*k,fraction=.1+.02*k,ans=-delta*Math.log(fraction);
    add('em','conductor-field-decay',k,`Inside a good conductor, field magnitude follows |E(z)|=|E(0)|e^(−z/δ) with skin depth δ=${delta} µm. At what depth in µm does field magnitude fall to ${fmt(fraction)} of its surface value?`,ans,'µm',[delta/fraction,delta*Math.log(1/fraction)/2,2*ans],
      'Skin depth governs exponential field-amplitude attenuation. Solve the stated ratio by taking a natural logarithm.',
      [`Set e^(−z/${delta})=${fmt(fraction)}.`,`Taking ln gives −z/${delta}=ln(${fmt(fraction)}).`,`Hence z=−${delta}ln(${fmt(fraction)})=${fmt(ans)} µm.`],
      'This uses a field-amplitude ratio. Power falls with the square of field, so reaching the same numerical power fraction would require half this depth.');
  }
  {
    const volume=20+2*k,removed=2+k,ans=(1-removed/volume)**2*100;
    add('apt','repeated-mixture',k,`A tank contains ${volume} L of pure concentrate. ${removed} L is removed and replaced by water, the mixture is stirred, and the same removal/replacement is repeated once. What percentage of the final mixture is concentrate?`,ans,'%', [100*(1-2*removed/volume),100*(1-removed/volume),100-ans],
      'Every replacement retains the same fraction of whatever concentrate was present before that operation. Stirring makes the removed mixture representative of the tank.',
      [`One operation retains fraction 1−${removed}/${volume} of the concentrate.`,`Two operations retain fraction (1−${removed}/${volume})².`,`The tank returns to its original total volume each time, so final concentrate percentage is ${fmt(ans)}%.`],
      'The second removal contains some water, so it removes less concentrate than the first. Subtracting twice the first removed concentration overstates the loss.');
  }
  {
    const n=k+4,ans=2/n;
    add('apt','adjacent-arrangement',k,`${n} distinct people stand in a uniformly random row. What is the probability that two specified people are adjacent?`,ans,'',[1/n,2/(n-1),(n-1)/n],
      'For adjacency counting, treat the two specified people as a block, then allow both orders inside the block. Divide favorable permutations by all permutations.',
      [`All arrangements number ${n}!.`,`Combine the specified pair into one block, leaving ${n-1} objects with (${n-1})! orders. The pair has two internal orders.`,`Thus probability=2(${n-1})!/${n}!=2/${n}=${fmt(ans)}.`],
      'The pair can occupy any neighboring positions, not just an endpoint pair. The two internal orders must both be counted.');
  }
  {
    const u=10+k,v=2+k/2,dist=20+2*k,ans=dist/(u+v)+dist/(u-v);
    add('apt','boat-round-trip',k,`A boat moves at ${u} km/h in still water and the current is ${v} km/h. It travels ${dist} km downstream and returns the same distance upstream. What is total travel time in hours?`,ans,'hours',[2*dist/u,2*dist/(u+v),2*dist/(u-v)],
      'Current adds to speed downstream and subtracts upstream. Compute each travel time separately before adding.',
      [`Downstream speed is ${u}+${v}=${u+v} km/h.`,`Upstream speed is ${u}−${v}=${u-v} km/h, positive for these data.`,`Total time is ${dist}/${u+v}+${dist}/${u-v}=${fmt(ans)} hours.`],
      'The current slows the overall equal-distance round trip relative to travel in still water. The faster leg does not cancel the extra time spent on the slower leg.');
  }
  {
    const l1=100+10*k,l2=150+10*k,v1=36+3.6*k,v2=54+3.6*k,ans=(l1+l2)/((v1+v2)/3.6);
    add('apt','opposite-trains',k,`Trains of lengths ${l1} m and ${l2} m travel toward each other at ${fmt(v1)} km/h and ${fmt(v2)} km/h. How many seconds pass from their fronts meeting until they completely cross?`,ans,'s',[(l1+l2)/((v2-v1)/3.6),l1/((v1+v2)/3.6),(l1+l2)/(v1+v2)],
      'For opposite directions, relative speed is the sum of speeds. Complete crossing requires relative motion through the sum of both lengths.',
      [`Combined length is ${l1}+${l2}=${l1+l2} m.`,`Relative speed is (${fmt(v1)}+${fmt(v2)})/3.6=${fmt((v1+v2)/3.6)} m/s.`,`Crossing time is ${l1+l2}/${fmt((v1+v2)/3.6)}=${fmt(ans)} s.`],
      'Subtracting speeds would apply to overtaking in the same direction. Counting just one train’s length would stop before both trains fully clear each other.');
  }
  {
    const n1=20+2*k,n2=30+k,m1=60+k,m2=70+k,ans=(n1*m1+n2*m2)/(n1+n2);
    add('apt','weighted-group-average',k,`A class of ${n1} students has mean score ${m1}; another of ${n2} has mean score ${m2}. What is the mean score when the classes are combined?`,ans,'',[(m1+m2)/2,(n1*m2+n2*m1)/(n1+n2),m1+m2],
      'A combined mean is weighted by group size. Recover each group’s total score before pooling.',
      [`First total score is ${n1}×${m1}=${n1*m1}.`,`Second total score is ${n2}×${m2}=${n2*m2}.`,`Divide the total ${n1*m1+n2*m2} by ${n1+n2} students to obtain ${fmt(ans)}.`],
      'The result lies between the two class means and is closer to the mean of the larger class. A simple average of class means requires equal class sizes.');
  }
  {
    const a=k+1,b=2*k+3,product=(b+a)*(b-a),ans=b;
    add('apt','logarithm-equation',k,`For real x>${a}, solve log₂(x−${a})+log₂(x+${a})=log₂(${product}).`,ans,'',[a,b+a,Math.sqrt(product)],
      'For positive arguments, the sum of logarithms equals the logarithm of the product. The domain restriction must be checked after solving the resulting quadratic.',
      [`Combine the left side as log₂[(x−${a})(x+${a})].`,`Equate arguments: x²−${a*a}=${product}, giving x²=${b*b}.`,`The algebraic roots are ±${b}, but only +${b} satisfies x>${a}.`],
      'The negative root is extraneous to the logarithm domain even though it satisfies the squared equation. Ignoring domain conditions can produce an invalid second answer.');
  }
}

assert.equal(bank.length,900);
assert.equal(new Set(bank.map(q=>q.prompt)).size,900);
for(const q of bank){
  assert.equal(q.choices.length,4,q.id);
  assert.equal(new Set(q.choices).size,4,q.id);
  assert.ok(q.why.split('\n\n').length>=6,`${q.id}: principle, steps, answer and interpretation`);
  assert.ok(!q.choices.some(c=>/NaN|Infinity/.test(c)),q.id);
}
fs.writeFileSync(new URL('../dist/practice-bank.js',import.meta.url),
  '// Original GATE-style practice variants, generated reproducibly by scripts/generate-gate-practice.mjs.\n'+
  'export const additionalPractice = '+JSON.stringify(bank,null,2)+';\n');
console.log(`Generated and validated ${bank.length} additional practice questions.`);
