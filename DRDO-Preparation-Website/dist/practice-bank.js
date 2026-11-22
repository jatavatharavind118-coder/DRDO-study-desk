// Original GATE-style practice variants, generated reproducibly by scripts/generate-gate-practice.mjs.
export const additionalPractice = [
  {
    "id": "gate-math-matrix-power-1",
    "topic": "math",
    "prompt": "A 2×2 matrix A has trace 6 and determinant 8. What is trace(A³)?",
    "choices": [
      "216",
      "72",
      "512",
      "20"
    ],
    "key": 1,
    "why": "Principle: For a 2×2 matrix, trace(A³)=(trace A)³−3(det A)(trace A). This follows from the eigenvalue sum and product, even when the matrix is not diagonalizable.\n\nStep 1: Let the eigenvalues be λ₁ and λ₂. Then λ₁+λ₂=6 and λ₁λ₂=8.\n\nStep 2: Expand (λ₁+λ₂)³=λ₁³+λ₂³+3λ₁λ₂(λ₁+λ₂).\n\nStep 3: Rearrange to get trace(A³)=6³−3×8×6=72.\n\nAnswer: 72.\n\nCheck and interpretation: The eigenvalues here are 2 and 4, whose cubes add to the same result. Cubing the trace directly retains unwanted cross terms.",
    "family": "matrix-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-conditional-binomial-1",
    "topic": "math",
    "prompt": "3 packets are transmitted independently, each with error probability 0.2. Given that at least one packet is erroneous, what is the probability that exactly one is erroneous? Round to four decimal places.",
    "choices": [
      "0.384",
      "0.7869",
      "0.488",
      "0.2131"
    ],
    "key": 1,
    "why": "Principle: A conditional probability is the probability of the intersection divided by the conditioning-event probability. The error count has a binomial distribution.\n\nStep 1: Let X count erroneous packets: X~Binomial(3,0.2).\n\nStep 2: P(X=1)=C(3,1)×0.2×0.8^2=0.384.\n\nStep 3: P(X≥1)=1−P(X=0)=1−0.8^3=0.488.\n\nStep 4: Since {X=1} is contained in {X≥1}, divide the first probability by the second: 0.7869.\n\nAnswer: 0.7869.\n\nCheck and interpretation: The conditional probability is larger than the unconditional probability of exactly one error because all zero-error trials have been excluded.",
    "family": "conditional-binomial",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-exponential-interval-1",
    "topic": "math",
    "prompt": "A component lifetime T is exponentially distributed with mean 2 hours. Given T>2 hours, find P(2T is between 8 and 12 hours | T>2 hours). Round to four decimal places.",
    "choices": [
      "0.0855",
      "0.2325",
      "0.3679",
      "0.6321"
    ],
    "key": 1,
    "why": "Principle: The exponential distribution is memoryless: after surviving a specified time, the residual lifetime has the same distribution as the original lifetime.\n\nStep 1: The event 8<2T<12 is equivalent to 4<T<6.\n\nStep 2: The survival function is P(T>t)=exp(−t/2).\n\nStep 3: Conditioning on T>2 gives [e⁻²−e⁻³]/e⁻¹=e⁻¹−e⁻².\n\nStep 4: Numerically the probability is 0.2325. The strict endpoints do not matter for a continuous distribution.\n\nAnswer: 0.2325.\n\nCheck and interpretation: Using the unconditional interval probability would omit the normalization for the component already having survived one mean lifetime.",
    "family": "exponential-interval",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-double-integral-1",
    "topic": "math",
    "prompt": "Evaluate ∫₀¹ ∫₀ˣ 2y^1 dy dx. Round to four decimal places.",
    "choices": [
      "0.3333",
      "0.5",
      "0.6667",
      "0.25"
    ],
    "key": 0,
    "why": "Principle: In an iterated integral the inner variable is integrated first, while the outer variable is treated as a constant bound.\n\nStep 1: The inner antiderivative of 2y^1 is y^2.\n\nStep 2: Evaluating at y=x and y=0 leaves x^2.\n\nStep 3: The remaining integral is ∫₀¹x^2dx=[x^3/3]₀¹=1/3=0.3333.\n\nAnswer: 0.3333.\n\nCheck and interpretation: The triangular integration region is 0≤y≤x≤1. Replacing the upper inner limit by 1 would incorrectly change the region to a square.",
    "family": "double-integral",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-ode-laplace-1",
    "topic": "math",
    "prompt": "A causal system obeys y″+6y′+8y=e⁻ᵗu(t), with y(0⁻)=y′(0⁻)=0. What is Y(s) evaluated at s=1? Round to four decimal places.",
    "choices": [
      "0.0333",
      "0.0667",
      "0.125",
      "0.1429"
    ],
    "key": 0,
    "why": "Principle: With zero initial conditions, differentiation in the Laplace domain multiplies by s. The input transform of e⁻ᵗu(t) is 1/(s+1).\n\nStep 1: Transform the differential equation: [s²+6s+8]Y(s)=1/(s+1).\n\nStep 2: Factor the quadratic as (s+2)(s+4).\n\nStep 3: Therefore Y(s)=1/[(s+1)(s+2)(s+4)].\n\nStep 4: At s=1 the denominator is 2×3×5, yielding 0.0333.\n\nAnswer: 0.0333.\n\nCheck and interpretation: The input pole at −1 must be included. Evaluating only the system transfer function at s=1 would be twice the requested output-transform value.",
    "family": "ode-laplace",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-constrained-minimum-1",
    "topic": "math",
    "prompt": "Real numbers x and y satisfy x+y=3. What is the minimum possible value of x²+y²?",
    "choices": [
      "4.5",
      "9",
      "2.25",
      "1.5"
    ],
    "key": 0,
    "why": "Principle: A quadratic restricted to a linear constraint can be minimized by substitution or by the Cauchy–Schwarz inequality.\n\nStep 1: Substitute y=3−x into the objective: f(x)=x²+(3−x)².\n\nStep 2: Differentiate: f′(x)=4x−6. Setting it to zero gives x=1.5, so y=1.5.\n\nStep 3: The second derivative is 4>0, establishing a strict minimum.\n\nStep 4: The minimum is 2×(1.5)²=4.5.\n\nAnswer: 4.5.\n\nCheck and interpretation: The inequality (x+y)²≤2(x²+y²) gives the same lower bound 9/2, with equality only at x=y.",
    "family": "constrained-minimum",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-gaussian-moment-1",
    "topic": "math",
    "prompt": "X is a zero-mean Gaussian random variable with variance 2. What is Var(X²)?",
    "choices": [
      "8",
      "12",
      "4",
      "16"
    ],
    "key": 0,
    "why": "Principle: For a zero-mean Gaussian with variance σ², the fourth moment is E[X⁴]=3σ⁴. Variance of X² uses both its second and fourth moments.\n\nStep 1: E[X²]=2, so (E[X²])²=4.\n\nStep 2: The Gaussian fourth moment is E[X⁴]=3×2²=12.\n\nStep 3: Var(X²)=E[X⁴]−(E[X²])²=12−4=8.\n\nAnswer: 8.\n\nCheck and interpretation: Using E[X⁴] alone would give a raw moment, not a variance. Although E[X]=0, E[X²] is positive.",
    "family": "gaussian-moment",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-improper-integral-1",
    "topic": "math",
    "prompt": "Evaluate ∫₀∞ 1/(x²+4) dx. Round to four decimal places.",
    "choices": [
      "1.5708",
      "0.5",
      "0.7854",
      "3.1416"
    ],
    "key": 2,
    "why": "Principle: The antiderivative of 1/(x²+a²) for a>0 is arctan(x/a)/a. An improper integral is evaluated as a limit.\n\nStep 1: Here a=2, so the antiderivative is arctan(x/2)/2.\n\nStep 2: As x→∞, arctan(x/2)→π/2; at x=0 it is zero.\n\nStep 3: Subtract the limits: the integral is π/(2×2)=0.7854.\n\nAnswer: 0.7854.\n\nCheck and interpretation: The result decreases as a grows, consistent with the integrand becoming smaller at every fixed x. Integrating over the entire real line would double the answer.",
    "family": "improper-integral",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-pdf-second-moment-1",
    "topic": "math",
    "prompt": "X has density f(x)=3x^2 for 0<x<1 and zero otherwise. Find E[X²], rounded to four decimal places.",
    "choices": [
      "0.75",
      "0.5625",
      "0.6",
      "0.2"
    ],
    "key": 2,
    "why": "Principle: For a continuous random variable, E[g(X)]=∫g(x)f(x)dx over the support. A second moment is not generally the square of the mean.\n\nStep 1: First check normalization: ∫₀¹3x^2dx=1.\n\nStep 2: Multiply the density by x² to form 3x^4.\n\nStep 3: Integrate: E[X²]=[3x^5/5]₀¹=3/5=0.6.\n\nAnswer: 0.6.\n\nCheck and interpretation: Since 0<X<1, E[X²]≤E[X]=0.75. The computed second moment satisfies that bound.",
    "family": "pdf-second-moment",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-loaded-divider-1",
    "topic": "networks",
    "prompt": "A 11 V ideal source drives R₁=2 kΩ in series with R₂=5 kΩ. A load R_L=4 kΩ is connected across R₂. Find the load voltage in V, rounded to four decimal places.",
    "choices": [
      "7.8571",
      "7.3333",
      "5.2105",
      "5.7895"
    ],
    "key": 3,
    "why": "Principle: A load across the lower divider resistor changes that resistor to a parallel equivalent. Apply the divider rule only after forming this equivalent.\n\nStep 1: The lower equivalent is R₂∥RL=5×4/(5+4)=2.2222 kΩ.\n\nStep 2: Total source resistance is 2+2.2222=4.2222 kΩ.\n\nStep 3: The load shares the parallel-branch voltage: VL=11×2.2222/(4.2222)=5.7895 V.\n\nAnswer: 5.7895.\n\nCheck and interpretation: The unloaded voltage is 7.8571 V, which is larger. Treating the load as absent overestimates the actual voltage.",
    "family": "loaded-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rc-switching-1",
    "topic": "networks",
    "prompt": "An initially uncharged 2 µF capacitor is charged from a 9 V source through 3 kΩ at t=0. Find vC at t=6 ms, in V. Round to four decimal places.",
    "choices": [
      "3.3109",
      "5.6891",
      "9",
      "7.782"
    ],
    "key": 1,
    "why": "Principle: The capacitor voltage in a first-order network is the final value plus the initial-to-final difference multiplied by exp(−t/τ).\n\nStep 1: The time constant is RC=3×2 ms=6 ms, using kΩ·µF=ms.\n\nStep 2: The initial voltage is 0 V and the DC final voltage is 9 V.\n\nStep 3: Thus vC(t)=9[1−exp(−t/6 ms)].\n\nStep 4: At the specified t=τ, vC=9(1−e⁻¹)=5.6891 V.\n\nAnswer: 5.6891.\n\nCheck and interpretation: At one time constant charging has completed about 63.2% of the final voltage. The factor e⁻¹ instead describes the remaining voltage error.",
    "family": "rc-switching",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rl-natural-response-1",
    "topic": "networks",
    "prompt": "An inductor of 6 mH carries 0.1 A before being disconnected from its source and allowed to discharge through 3 Ω at t=0. Find current at t=4 ms in A. Round to four decimal places.",
    "choices": [
      "0.0135",
      "0.0368",
      "0.0865",
      "0.05"
    ],
    "key": 0,
    "why": "Principle: Inductor current is continuous through switching when there is no impulse voltage. The source-free RL response is i(t)=i(0⁺)exp(−Rt/L).\n\nStep 1: The initial current after switching is 0.1 A.\n\nStep 2: The time constant is L/R=6/3 ms=2 ms.\n\nStep 3: The requested instant is twice the time constant, so i=0.1e⁻²=0.0135 A.\n\nAnswer: 0.0135.\n\nCheck and interpretation: The resistor dissipates stored magnetic energy and current decays monotonically to zero. The natural-response formula does not contain a charging term 1−e⁻ᵗ/τ.",
    "family": "rl-natural-response",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-ac-power-match-1",
    "topic": "networks",
    "prompt": "An AC Thévenin equivalent has RMS voltage 12 V and impedance (3+j2) Ω. The load impedance can be any passive complex value. What is the maximum average load power in W?",
    "choices": [
      "24",
      "48",
      "9.9846",
      "12"
    ],
    "key": 3,
    "why": "Principle: Maximum average AC power is transferred to the complex-conjugate load: ZL=Zth*. RMS voltage can be used directly in I²R.\n\nStep 1: Choose ZL=3−j2 Ω so the reactances cancel.\n\nStep 2: The total impedance is 6 Ω and RMS current is 12/6 A.\n\nStep 3: Load power is I²RL=(12/6)²×3=12 W.\n\nStep 4: Equivalently Pmax=Vth,rms²/(4Rth).\n\nAnswer: 12.\n\nCheck and interpretation: Matching the impedance magnitude alone does not cancel reactance. Using peak voltage in the RMS formula would introduce a factor-of-two error.",
    "family": "ac-power-match",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-complex-load-power-1",
    "topic": "networks",
    "prompt": "A sinusoidal source of 21 V RMS is applied across Z=(3+j3) Ω. Find average power absorbed in W, rounded to four decimal places.",
    "choices": [
      "103.9447",
      "147",
      "36.75",
      "73.5"
    ],
    "key": 3,
    "why": "Principle: Average power is Vrms² times the real part of admittance. A reactive element exchanges energy but absorbs zero net average power.\n\nStep 1: The admittance is 1/Z=(3−j3)/(18) S.\n\nStep 2: Its real part is R/(R²+X²)=3/18 S.\n\nStep 3: Therefore P=21²×3/18=73.5 W.\n\nAnswer: 73.5.\n\nCheck and interpretation: Vrms²/|Z| is apparent power, not real power. The load power factor is R/|Z| and must be included.",
    "family": "complex-load-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-series-resonance-q-1",
    "topic": "networks",
    "prompt": "A series RLC circuit has R=4 Ω, L=2 mH and C=4 µF. Find its quality factor Q, rounded to four decimal places.",
    "choices": [
      "89.4427",
      "2.7951",
      "11.1803",
      "5.5902"
    ],
    "key": 3,
    "why": "Principle: For a series resonant RLC circuit, Q=ω₀L/R=(1/R)√(L/C), where ω₀=1/√(LC).\n\nStep 1: Convert L=2×10⁻³ H and C=4×10⁻⁶ F.\n\nStep 2: The characteristic impedance √(L/C)=√(500)=22.3607 Ω.\n\nStep 3: Divide by the series resistance: Q=22.3607/4=5.5902.\n\nAnswer: 5.5902.\n\nCheck and interpretation: Q is dimensionless. Increasing series resistance dissipates more energy per cycle and lowers Q, which rules out formulas proportional to R.",
    "family": "series-resonance-q",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-current-divider-1",
    "topic": "networks",
    "prompt": "An ideal current source supplies 2 mA into parallel resistors 3 kΩ and 6 kΩ. Find current through the 3 kΩ branch in mA, rounded to four decimal places.",
    "choices": [
      "1.3333",
      "0.6667",
      "6",
      "1"
    ],
    "key": 0,
    "why": "Principle: Parallel-branch currents divide in proportion to conductance, or inversely to resistance. The numerator contains the other branch resistance in the two-resistor divider formula.\n\nStep 1: The equivalent resistance is 3×6/(3+6) kΩ.\n\nStep 2: The common node voltage is the source current times this equivalent resistance.\n\nStep 3: Divide that voltage by 3 kΩ to obtain I₁=2×6/(3+6)=1.3333 mA.\n\nAnswer: 1.3333.\n\nCheck and interpretation: Because 3<6, this branch carries more than half the source current. The other branch current is 0.6667 mA, and their sum is 2 mA.",
    "family": "current-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-twoport-z-1",
    "topic": "networks",
    "prompt": "A resistive T network has a 3 Ω series arm at port 1, a 5 Ω shunt arm from the central node to ground, and a 7 Ω series arm at port 2. With currents defined entering both ports, what is z₁₁?",
    "choices": [
      "5 Ω",
      "3 Ω",
      "8 Ω",
      "15 Ω"
    ],
    "key": 2,
    "why": "Principle: The z parameter z₁₁ is V₁/I₁ with I₂=0. An open second port makes the second series arm carry zero current.\n\nStep 1: Set I₂=0 by opening port 2. No voltage drop appears across its series arm.\n\nStep 2: The input current then flows through the port-1 arm and the shunt arm in series.\n\nStep 3: Therefore z₁₁=R₁+Rsh=3+5=8 Ω.\n\nAnswer: 8 Ω.\n\nCheck and interpretation: The port-2 series resistance does not affect z₁₁ under the open-port condition. Shorting port 2 instead would compute a different driving-point condition.",
    "family": "twoport-z",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-charge-sharing-1",
    "topic": "networks",
    "prompt": "A 3 µF capacitor initially at 11 V is connected in parallel, with matching polarities, to an initially uncharged 6 µF capacitor. After settling through a small resistance, what is their common voltage in V?",
    "choices": [
      "11",
      "7.3333",
      "33",
      "3.6667"
    ],
    "key": 3,
    "why": "Principle: For an isolated pair of capacitors, total charge is conserved during redistribution. Electrostatic energy is not conserved because the connecting resistance dissipates energy.\n\nStep 1: The initial total charge is Q=C₁V₁+C₂V₂=3×11+6×0=33 µC.\n\nStep 2: The final parallel capacitance is C₁+C₂=9 µF.\n\nStep 3: The common final voltage is Q/(C₁+C₂)=33/9=3.6667 V.\n\nAnswer: 3.6667.\n\nCheck and interpretation: The result lies between the two initial voltages. Equating initial and final stored energies would incorrectly ignore dissipation during connection.",
    "family": "charge-sharing",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-exponential-convolution-1",
    "topic": "signals",
    "prompt": "For x(t)=e^(−2t)u(t) and h(t)=e^(−4t)u(t), find y(0.5) where y=x*h. Round to four decimal places.",
    "choices": [
      "0.1163",
      "0.0498",
      "0.5032",
      "0.2325"
    ],
    "key": 0,
    "why": "Principle: Convolution of two causal exponentials is integrated only over the overlap 0≤τ≤t. The output is a difference of exponentials divided by their rate difference.\n\nStep 1: Write y(t)=∫₀ᵗ e^(−2τ)e^(−4(t−τ))dτ.\n\nStep 2: Factor out e^(−4t) and integrate e^(2τ).\n\nStep 3: This gives y(t)=[e^(−2t)−e^(−4t)]/2 for t≥0.\n\nStep 4: At t=0.5, the value is 0.1163.\n\nAnswer: 0.1163.\n\nCheck and interpretation: Pointwise multiplication of the input and impulse response is not convolution. Since both functions are nonnegative, the convolution must also be nonnegative.",
    "family": "exponential-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-discrete-convolution-1",
    "topic": "signals",
    "prompt": "For x[n]=(0.13)ⁿu[n] and h[n]=(0.67)ⁿu[n], calculate (x*h)[3]. Round to four decimal places.",
    "choices": [
      "0.0007",
      "0.3726",
      "0.303",
      "0.1863"
    ],
    "key": 1,
    "why": "Principle: For causal discrete sequences, the convolution at index n is a finite sum over m=0,…,n. A finite geometric sum gives a closed form.\n\nStep 1: At n=3, sum aᵐb^(3−m) for m=0,1,2,3.\n\nStep 2: The four terms are b³+ab²+a²b+a³, where a=0.13 and b=0.67.\n\nStep 3: Using (b⁴−a⁴)/(b−a), the sum equals 0.3726.\n\nAnswer: 0.3726.\n\nCheck and interpretation: There are four overlapping terms at index 3, including both endpoints. Omitting m=0 or m=3 drops a valid impulse-response contribution.",
    "family": "discrete-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-alias-folding-1",
    "topic": "signals",
    "prompt": "The signal cos(2π×8000t) is sampled at 13 ksample/s. What positive alias frequency is observed within the first Nyquist band, in kHz?",
    "choices": [
      "8 kHz",
      "21 kHz",
      "5 kHz",
      "6.5 kHz"
    ],
    "key": 2,
    "why": "Principle: Sampling replicates spectra at integer multiples of fs. A real sinusoid is represented by a frequency in the first Nyquist band 0≤f≤fs/2.\n\nStep 1: The original frequency is 8 kHz, above the Nyquist frequency 6.5 kHz.\n\nStep 2: Subtract fs=13 kHz to get -5 kHz. A cosine at a negative frequency has the same samples as its positive-frequency counterpart.\n\nStep 3: Thus the baseband alias is |8−13|=5 kHz.\n\nAnswer: 5 kHz.\n\nCheck and interpretation: The result 5 kHz lies below fs/2=6.5 kHz. The original signal is therefore indistinguishable from this lower-frequency cosine after sampling.",
    "family": "alias-folding",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-lti-sinusoidal-1",
    "topic": "signals",
    "prompt": "A stable LTI system has H(s)=1/(s+2). With input cos(2t), what is the steady-state output amplitude? Round to four decimal places.",
    "choices": [
      "0.5",
      "0.125",
      "2.8284",
      "0.3536"
    ],
    "key": 3,
    "why": "Principle: A sinusoid is an eigenfunction of an LTI system. Its steady-state amplitude is multiplied by the frequency-response magnitude at the input angular frequency.\n\nStep 1: Evaluate H(jω) at ω=2 rad/s: H(j2)=1/(2+j2).\n\nStep 2: The denominator magnitude is √(2²+2²)=√8.\n\nStep 3: The input has unit amplitude, so output amplitude is |H(j2)|=1/√8=0.3536.\n\nAnswer: 0.3536.\n\nCheck and interpretation: The squared magnitude is a power ratio, not an amplitude ratio. The decaying transient is excluded by the steady-state qualification.",
    "family": "lti-sinusoidal",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-sequence-energy-1",
    "topic": "signals",
    "prompt": "Find the total energy of x[n]=(0.24)ⁿu[n], rounded to four decimal places.",
    "choices": [
      "1.0611",
      "1.3158",
      "0.0611",
      "0.9455"
    ],
    "key": 0,
    "why": "Principle: Discrete-time energy is the sum of squared magnitudes over every integer index. Causality restricts the nonzero terms to n≥0.\n\nStep 1: Square the magnitude to get |x[n]|²=(0.0576)ⁿ for n≥0.\n\nStep 2: Since |0.24|<1, the geometric series converges.\n\nStep 3: E=Σₙ₌₀∞a²ⁿ=1/(1−a²)=1/(1−0.0576)=1.0611.\n\nAnswer: 1.0611.\n\nCheck and interpretation: The n=0 sample equals one and must be included. Summing x[n] without squaring would give an area-like sum, not energy.",
    "family": "sequence-energy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-shifted-impulse-1",
    "topic": "signals",
    "prompt": "An LTI system has h(t)=e^(−2t)u(t). Its input is δ(t−1)+2δ(t−2). Find y(1.5), rounded to four decimal places.",
    "choices": [
      "0.3679",
      "5.8044",
      "0.7358",
      "0.0498"
    ],
    "key": 0,
    "why": "Principle: Each delayed impulse produces a delayed copy of the impulse response. Causality determines which copies have begun at the observation time.\n\nStep 1: By linearity, y(t)=h(t−1)+2h(t−2).\n\nStep 2: At t=1.5, t−1=0.5 but t−2=−0.5, so the second term is zero.\n\nStep 3: The remaining term is e^(−2×0.5)=0.3679.\n\nAnswer: 0.3679.\n\nCheck and interpretation: Ignoring the unit-step factor would incorrectly include a response to the impulse at t=2 before it has occurred.",
    "family": "shifted-impulse",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-dft-bin-amplitude-1",
    "topic": "signals",
    "prompt": "For N=5, x[n]=cos(2π×2n/N), 0≤n<N. Using X[r]=Σx[n]e^(−j2πrn/N), what is |X[2]|?",
    "choices": [
      "5",
      "1",
      "2.5",
      "1.25"
    ],
    "key": 2,
    "why": "Principle: A cosine is half the sum of two complex exponentials. The unnormalized DFT gives magnitude N for a complex exponential aligned with a DFT bin.\n\nStep 1: Expand x[n]=(e^(j2π2n/N)+e^(−j2π2n/N))/2.\n\nStep 2: For N=5>4, bins 2 and N−2 are distinct, so each exponential contributes to a different DFT bin.\n\nStep 3: At r=2, the matching exponential contributes N/2=2.5, while the other sums to zero.\n\nAnswer: 2.5.\n\nCheck and interpretation: The DFT convention has no 1/N factor in the forward transform. DC and Nyquist cosines need special treatment, but bin 2 is neither for this N.",
    "family": "dft-bin-amplitude",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-fourier-dc-1",
    "topic": "signals",
    "prompt": "For x(t)=e^(−3|t|), define X(ω)=∫₋∞∞x(t)e^(−jωt)dt. Find X(0), rounded to four decimal places.",
    "choices": [
      "0.3333",
      "1.5",
      "6",
      "0.6667"
    ],
    "key": 3,
    "why": "Principle: The Fourier transform at zero frequency equals the signed area under the time-domain signal. Even symmetry reduces the integral to twice its positive-time half.\n\nStep 1: Set ω=0 so the complex exponential in the transform becomes one.\n\nStep 2: Since x(t) is even, X(0)=2∫₀∞e^(−3t)dt.\n\nStep 3: The one-sided integral is 1/3, hence X(0)=2/3=0.6667.\n\nAnswer: 0.6667.\n\nCheck and interpretation: This is an amplitude-area quantity, not energy. Squaring the signal first would produce a different integral.",
    "family": "fourier-dc",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-difference-equation-1",
    "topic": "signals",
    "prompt": "A causal system at initial rest obeys y[n]−0.15y[n−1]=x[n]. For x[n]=(−1)ⁿu[n], what is the amplitude of the asymptotic alternating output? Round to four decimal places.",
    "choices": [
      "0.8696",
      "1.1765",
      "0.1304",
      "1.15"
    ],
    "key": 0,
    "why": "Principle: The steady alternating input has discrete-time angular frequency π. A stable system scales it by the magnitude of H(eʲπ).\n\nStep 1: At initial rest, H(z)=1/(1−0.15z⁻¹). The pole magnitude 0.15 is less than one, ensuring a decaying transient.\n\nStep 2: At z=eʲπ=−1, H(−1)=1/(1+0.15).\n\nStep 3: Thus the asymptotic output is [1/(1+0.15)](−1)ⁿ and its amplitude is 0.8696.\n\nAnswer: 0.8696.\n\nCheck and interpretation: Evaluating at z=1 would give the DC gain, not the alternating-input gain. The input switch-on creates a transient that vanishes as n grows.",
    "family": "difference-equation",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-diode-bias-1",
    "topic": "devices",
    "prompt": "An ideal p-n diode has I_S=10 µA, ideality factor 1 and V_T=26 mV. Find the forward voltage needed for 2 mA, in V, rounded to four decimal places.",
    "choices": [
      "0.7",
      "0.018",
      "0.2758",
      "0.1379"
    ],
    "key": 3,
    "why": "Principle: The ideal Shockley law is I=IS[exp(V/(nVT))−1]. Solve the exponential relationship for voltage rather than assuming a fixed diode drop.\n\nStep 1: Convert IS=10 µA to 0.01 mA, matching the current unit.\n\nStep 2: Rearrange to exp(V/VT)=1+I/IS=1+2/0.01=201.\n\nStep 3: Taking the natural logarithm gives V=0.026 ln(201)=0.1379 V.\n\nAnswer: 0.1379.\n\nCheck and interpretation: A natural logarithm is required because the diode equation uses base e. A fixed 0.7 V approximation is inconsistent with the specified ideal diode parameters.",
    "family": "diode-bias",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-diode-incremental-1",
    "topic": "devices",
    "prompt": "A diode biased at 2 mA has n=1 and V_T=26 mV. A small 10 mV AC source is applied through 3 kΩ, with the DC bias maintained separately. What is the diode AC voltage amplitude in mV? Round to four decimal places.",
    "choices": [
      "10",
      "8.125",
      "0.0431",
      "9.9569"
    ],
    "key": 2,
    "why": "Principle: Linearize the diode at its bias point using rd=nVT/ID, then solve a voltage divider. This incremental model applies only for sufficiently small AC excursions.\n\nStep 1: The incremental resistance is rd=0.026/(2×10⁻³)=13 Ω.\n\nStep 2: The source resistance is 3000 Ω, so the diode receives fraction rd/(R+rd).\n\nStep 3: Its voltage amplitude is 10×13/(3000+13)=0.0431 mV.\n\nAnswer: 0.0431.\n\nCheck and interpretation: The very small diode voltage compared with VT validates the small-signal approximation. The source’s full 10 mV does not appear across the diode.",
    "family": "diode-incremental",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-active-check-1",
    "topic": "devices",
    "prompt": "An NPN has grounded emitter, β=60, V_BE=0.7 V, R_B=550 kΩ from collector-independent V_CC=11 V to base, and R_C=1.2 kΩ from V_CC to collector. Assuming forward-active operation, find V_CE in V. Round to four decimal places.",
    "choices": [
      "11",
      "9.6516",
      "10.9775",
      "1.3484"
    ],
    "key": 1,
    "why": "Principle: For fixed-base bias in forward-active operation, IB=(VCC−VBE)/RB and IC=βIB. Collector voltage then follows from the resistor drop.\n\nStep 1: The base current is (11−0.7)/550=0.0187 mA.\n\nStep 2: The collector current is 60×0.0187=1.1236 mA.\n\nStep 3: The collector drop is IC RC=1.3484 V.\n\nStep 4: Thus VCE=VCC−ICRC=11−1.3484=9.6516 V.\n\nAnswer: 9.6516.\n\nCheck and interpretation: VCE exceeds VBE=0.7 V here, so the collector-base junction remains reverse biased and the forward-active assumption is self-consistent.",
    "family": "bjt-active-check",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-rpi-1",
    "topic": "devices",
    "prompt": "A BJT at 300 K has collector current 1.5 mA and β=110. Take V_T=26 mV. Find its hybrid-π input resistance rπ in kΩ, rounded to four decimal places.",
    "choices": [
      "1.9067",
      "0.0173",
      "6346.1538",
      "0.9533"
    ],
    "key": 0,
    "why": "Principle: The hybrid-π resistance is rπ=β/gm, with gm=IC/VT at the operating point. Consistent mA and V units give gm in mS and rπ in kΩ.\n\nStep 1: Compute gm=1.5/0.026=57.6923 mS.\n\nStep 2: Then rπ=110/57.6923 kΩ.\n\nStep 3: The resulting input resistance is 1.9067 kΩ. It relates a small vbe to the resulting small base current.\n\nAnswer: 1.9067.\n\nCheck and interpretation: The inverse transconductance 1/gm is not rπ; the factor β is required because base current is smaller than collector current.",
    "family": "bjt-rpi",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-gm-1",
    "topic": "devices",
    "prompt": "A long-channel nMOS in saturation obeys I_D=(K/2)(V_GS−V_TH)² with K=0.25 mA/V². At overdrive 1.1 V, find g_m in mS. Neglect channel-length modulation.",
    "choices": [
      "0.1375",
      "0.3025",
      "0.4125",
      "0.275"
    ],
    "key": 3,
    "why": "Principle: MOS transconductance is the derivative of drain current with respect to gate-source voltage while holding drain voltage fixed.\n\nStep 1: Differentiate ID=(K/2)VOV² to obtain gm=K VOV.\n\nStep 2: Use K=0.25 mA/V² and VOV=1.1 V.\n\nStep 3: Thus gm=0.25×1.1=0.275 mA/V=0.275 mS.\n\nStep 4: As a cross-check, ID=0.1513 mA and 2ID/VOV gives the same gm.\n\nAnswer: 0.275.\n\nCheck and interpretation: Using ID/VOV misses a factor of two for the square-law model. The stated K convention explicitly includes the one-half factor.",
    "family": "mos-gm",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-triode-1",
    "topic": "devices",
    "prompt": "An nMOS has K=0.5 mA/V², overdrive V_GS−V_TH=1.1 V, and V_DS=0.12 V. Using the long-channel model, find I_D in mA. Round to four decimal places.",
    "choices": [
      "0.3025",
      "0.066",
      "0.1248",
      "0.0624"
    ],
    "key": 3,
    "why": "Principle: For 0≤VDS<VOV the MOSFET is in the triode region, with ID=K[VOV VDS−VDS²/2]. The saturation square law does not apply in this region.\n\nStep 1: Here VDS=0.12 V is below VOV=1.1 V, establishing triode operation.\n\nStep 2: Compute VOV VDS=0.132 V² and VDS²/2=0.0072 V².\n\nStep 3: Multiply their difference by K=0.5 to obtain ID=0.0624 mA.\n\nAnswer: 0.0624.\n\nCheck and interpretation: The VDS²/2 correction distinguishes the triode expression from a purely linear resistor approximation. The specified voltages are positive and produce positive drain current.",
    "family": "mos-triode",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-junction-built-in-1",
    "topic": "devices",
    "prompt": "An abrupt silicon p-n junction at equilibrium has N_D=2.00e+15 cm⁻³, N_A=3.00e+16 cm⁻³ and n_i=10¹⁰ cm⁻³. Taking V_T=26 mV, find the built-in potential in V, rounded to four decimal places.",
    "choices": [
      "0.3174",
      "0.3062",
      "0.7051",
      "1.4103"
    ],
    "key": 2,
    "why": "Principle: For a nondegenerate abrupt junction at thermal equilibrium, Vbi=VT ln(NAND/ni²). The potential balances diffusion against drift.\n\nStep 1: Form the dimensionless concentration ratio NAND/ni²=6.0000e+11.\n\nStep 2: Take its natural logarithm, not the base-10 logarithm.\n\nStep 3: Multiply by 0.026 V to obtain Vbi=0.7051 V.\n\nAnswer: 0.7051.\n\nCheck and interpretation: All carrier concentrations use the same cm⁻³ units, which cancel in the ratio. This internal equilibrium barrier is not an externally extractable terminal voltage.",
    "family": "junction-built-in",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-early-resistance-1",
    "topic": "devices",
    "prompt": "At an operating point a BJT has I_C=0.6 mA and Early voltage V_A=55 V. Using r_o≈V_A/I_C, find r_o in kΩ, rounded to four decimal places.",
    "choices": [
      "33",
      "91.6667",
      "0.0109",
      "45.8333"
    ],
    "key": 1,
    "why": "Principle: The Early effect gives the forward-active BJT a finite output conductance. For VCE much smaller than VA, the output resistance is approximately VA/IC.\n\nStep 1: Use the stated approximation ro≈VA/IC.\n\nStep 2: Since V divided by mA gives kΩ, ro=55/0.6 kΩ.\n\nStep 3: Numerically ro=91.6667 kΩ. A larger bias current would reduce this resistance at fixed Early voltage.\n\nAnswer: 91.6667.\n\nCheck and interpretation: This resistance models the slope of the collector characteristic at fixed base-emitter voltage. It is different from the DC ratio VCE/IC.",
    "family": "early-resistance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-semiconductor-resistivity-1",
    "topic": "devices",
    "prompt": "An n-type bar has electron concentration 2.0e+15 cm⁻³ and mobility 520 cm²/(V·s). Neglect holes and take q=1.6×10⁻¹⁹ C. Find resistivity in Ω·cm, rounded to four decimal places.",
    "choices": [
      "0.1664 Ω·cm",
      "600.9615 Ω·cm",
      "6.0096 Ω·cm",
      "0.0601 Ω·cm"
    ],
    "key": 2,
    "why": "Principle: With electrons dominating conduction, conductivity is σ=q n μn and resistivity is its reciprocal. The supplied centimetre-based units yield Ω·cm.\n\nStep 1: Insert q=1.6×10⁻¹⁹, n=2.0e+15 and μn=520.\n\nStep 2: Conductivity is σ=0.1664 S/cm.\n\nStep 3: Therefore ρ=1/σ=6.0096 Ω·cm.\n\nAnswer: 6.0096 Ω·cm.\n\nCheck and interpretation: Increasing electron concentration or mobility increases conductivity and decreases resistivity. Converting to Ω·m would multiply the numerical Ω·cm value by 0.01.",
    "family": "semiconductor-resistivity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-emitter-degeneration-1",
    "topic": "analog",
    "prompt": "A common-emitter amplifier has g_m=3 mS, collector load 5 kΩ and unbypassed emitter resistance 0.25 kΩ. Take β→∞ and r_o→∞. What is v_o/v_b, rounded to four decimal places?",
    "choices": [
      "-15",
      "-8.5714",
      "8.5714",
      "-20"
    ],
    "key": 1,
    "why": "Principle: Emitter degeneration feeds an emitter voltage back against the base-emitter signal. With infinite β, emitter and collector small-signal currents are equal.\n\nStep 1: Write ic=gm(vb−ve) and ve=ic RE.\n\nStep 2: Then ic(1+gmRE)=gm vb, so ic/vb=gm/(1+gmRE).\n\nStep 3: Since vo=−ic RC, gain is −gmRC/(1+gmRE).\n\nStep 4: Substitution gives −3×5/[1+3×0.25]=-8.5714.\n\nAnswer: -8.5714.\n\nCheck and interpretation: The degeneration reduces the magnitude below the bypassed-emitter value gmRC. The simpler −RC/RE approximation requires gmRE≫1.",
    "family": "emitter-degeneration",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-finite-opamp-gain-1",
    "topic": "analog",
    "prompt": "A non-inverting amplifier uses R_f=11 kΩ and R_g=1 kΩ. Its op-amp has finite DC open-loop gain A=120, infinite input resistance and zero output resistance. Find the closed-loop DC gain, rounded to four decimal places.",
    "choices": [
      "12",
      "120",
      "10.9091",
      "13.3333"
    ],
    "key": 2,
    "why": "Principle: For finite open-loop gain, use vo=A(v+−v−) and the feedback divider v−=βvo. The ideal virtual-short approximation is not exact.\n\nStep 1: The feedback factor is β=Rg/(Rf+Rg)=1/12.\n\nStep 2: Solving vo=A(vin−βvo) gives vo/vin=A/(1+Aβ).\n\nStep 3: This can be written 12/(1+12/120)=10.9091.\n\nAnswer: 10.9091.\n\nCheck and interpretation: The result is slightly smaller than the ideal non-inverting gain 12. A negative-feedback denominator contains a plus sign.",
    "family": "finite-opamp-gain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-weighted-summer-1",
    "topic": "analog",
    "prompt": "An ideal inverting summer has grounded non-inverting input, feedback 9 kΩ, and inputs 0.2 V through 3 kΩ and 0.2 V through 5 kΩ. Assuming linear operation, find output in V.",
    "choices": [
      "-0.96",
      "0.96",
      "-0.6",
      "-0.45"
    ],
    "key": 0,
    "why": "Principle: At virtual ground, each source drives an input current independently. The op-amp input draws no current, so the feedback branch carries their sum.\n\nStep 1: Input currents are 0.2/3=0.0667 mA and 0.2/5=0.04 mA.\n\nStep 2: Their sum is 0.1067 mA.\n\nStep 3: The output is the negative feedback-resistor drop: vo=−9×(0.1067)=-0.96 V.\n\nAnswer: -0.96.\n\nCheck and interpretation: Different input resistors give different weights. Adding input voltages before applying one divider ratio would discard these weights.",
    "family": "weighted-summer",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-common-source-ro-1",
    "topic": "analog",
    "prompt": "A common-source MOS amplifier has source at AC ground, g_m=2.3 mS, r_o=22 kΩ and drain resistor 6 kΩ to AC ground. Find unloaded midband voltage gain, rounded to four decimal places.",
    "choices": [
      "-13.8",
      "-10.8429",
      "10.8429",
      "-64.4"
    ],
    "key": 1,
    "why": "Principle: The drain sees RD in parallel with the transistor output resistance ro. The controlled drain current gm vgs develops an inverted output across this equivalent load.\n\nStep 1: Effective drain load is RD∥ro=6×22/(6+22)=4.7143 kΩ.\n\nStep 2: The source is at AC ground, so vgs equals input voltage.\n\nStep 3: Gain is −gm(RD∥ro)=−2.3×4.7143=-10.8429.\n\nAnswer: -10.8429.\n\nCheck and interpretation: Finite ro reduces gain magnitude compared with −gmRD. Since mS×kΩ is dimensionless, no additional factor of 1000 is required.",
    "family": "common-source-ro",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-highpass-frequency-1",
    "topic": "analog",
    "prompt": "A coupling capacitor of 12 nF feeds an amplifier input resistance 2 kΩ from an ideal voltage source. Treat the amplifier input as purely resistive. Find the high-pass −3 dB frequency in kHz.",
    "choices": [
      "41.6667 kHz",
      "1.0554 kHz",
      "66.3146 kHz",
      "6.6315 kHz"
    ],
    "key": 3,
    "why": "Principle: The coupling capacitor and input resistance form H(s)=sRC/(1+sRC). Its lower cutoff is the frequency at which capacitor reactance magnitude equals R.\n\nStep 1: Use R=2×10³ Ω and C=12×10⁻⁹ F.\n\nStep 2: The corner angular frequency is ωc=1/(RC).\n\nStep 3: Convert to hertz with fc=1/(2πRC), then divide by 1000: fc=6.6315 kHz.\n\nAnswer: 6.6315 kHz.\n\nCheck and interpretation: At the corner, magnitude is 1/√2 of the high-frequency passband value. Confusing ωc with fc introduces a factor of 2π.",
    "family": "highpass-frequency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-inverting-bandwidth-1",
    "topic": "analog",
    "prompt": "A dominant-pole op-amp has GBW=2.5 MHz. An inverting amplifier uses R_in=2.5 kΩ and R_f=11 kΩ. Estimate its closed-loop bandwidth in MHz using noise gain.",
    "choices": [
      "0.463 MHz",
      "0.5682 MHz",
      "13.5 MHz",
      "1.25 MHz"
    ],
    "key": 0,
    "why": "Principle: For a single-pole voltage-feedback op-amp, bandwidth is approximately GBW divided by noise gain. An inverting stage has noise gain 1+Rf/Rin, not |signal gain|.\n\nStep 1: The signal gain is −Rf/Rin=−4.4.\n\nStep 2: Noise gain is 1+Rf/Rin=5.4.\n\nStep 3: Bandwidth ≈2.5/5.4=0.463 MHz.\n\nAnswer: 0.463 MHz.\n\nCheck and interpretation: The distinction between signal gain and noise gain matters most at low inverting gains. The estimate assumes the dominant-pole model and no extra capacitive poles.",
    "family": "inverting-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-slew-amplitude-1",
    "topic": "analog",
    "prompt": "An op-amp has slew rate 1.5 V/µs. For a sinusoidal output at 60 kHz, what is the maximum peak amplitude in V allowed by slew rate alone?",
    "choices": [
      "7.9577 V",
      "1.9894 V",
      "25 V",
      "3.9789 V"
    ],
    "key": 3,
    "why": "Principle: A sinusoid vp sin(2πft) has maximum slope 2πfvp. Avoiding slew-rate distortion requires that slope not exceed SR.\n\nStep 1: Convert SR to 1.5×10⁶ V/s and frequency to 60×10³ Hz.\n\nStep 2: Set 2πfVp=SR at the limit.\n\nStep 3: Thus Vp=SR/(2πf)=1.5×10⁶/(2π×60×10³)=3.9789 V.\n\nAnswer: 3.9789 V.\n\nCheck and interpretation: This is peak amplitude, not peak-to-peak amplitude. Supply rails or small-signal bandwidth may impose a lower practical limit, but they are excluded here.",
    "family": "slew-amplitude",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-source-follower-1",
    "topic": "analog",
    "prompt": "A MOS source follower has g_m=6 mS and effective source load 1.2 kΩ. Neglect body effect and r_o. Find its voltage gain, rounded to four decimal places.",
    "choices": [
      "0.878",
      "7.2",
      "0.122",
      "-0.878"
    ],
    "key": 0,
    "why": "Principle: A source follower develops its output at the source. The resulting source voltage reduces vgs, creating local negative feedback.\n\nStep 1: The current is gm(vin−vo), and this flows through the source load.\n\nStep 2: Write vo=gmRL(vin−vo) and solve for vo/vin=gmRL/(1+gmRL).\n\nStep 3: Here gmRL=7.2, giving gain 0.878.\n\nAnswer: 0.878.\n\nCheck and interpretation: The gain is positive and strictly less than one in this model. The reciprocal 1/(1+gmRL) describes the residual gate-source fraction, not the output gain.",
    "family": "source-follower",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-ideal-integrator-1",
    "topic": "analog",
    "prompt": "An ideal inverting integrator uses R=11 kΩ and C=3 µF. Its output is initially zero. A constant 0.12 V input is applied for 0.1 s. Assuming no saturation, what is output at 0.1 s in V?",
    "choices": [
      "0.3636 V",
      "-0.3636 V",
      "-0.1818 V",
      "-0.7273 V"
    ],
    "key": 1,
    "why": "Principle: An ideal inverting integrator obeys vo(t)=vo(0)−(1/RC)∫vin(t)dt. A constant input produces a linear output ramp.\n\nStep 1: RC=11×3×10⁻³=0.033 s.\n\nStep 2: The input-time integral over 0.1 s is 0.12×0.1=0.012 V·s.\n\nStep 3: With zero initial output, vo=−0.012/0.033=-0.3636 V.\n\nAnswer: -0.3636 V.\n\nCheck and interpretation: The minus sign follows from the inverting connection. The stated no-saturation condition permits the ideal ramp calculation without supply-rail clipping.",
    "family": "ideal-integrator",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-ripple-counter-period-1",
    "topic": "digital",
    "prompt": "A 6-bit binary counter starts at zero and is clocked at 12 MHz. How many µs elapse before it first returns to zero, assuming ideal operation?",
    "choices": [
      "2.6667 µs",
      "768 µs",
      "5.3333 µs",
      "0.5 µs"
    ],
    "key": 2,
    "why": "Principle: An n-bit binary counter repeats after 2ⁿ input clocks. The repeat time is the number of clock periods in a full state cycle.\n\nStep 1: There are 2^6=64 distinct states, including zero.\n\nStep 2: At 12 MHz the clock period is 1/12 µs.\n\nStep 3: The first full wrap occurs after 64/12=5.3333 µs.\n\nAnswer: 5.3333 µs.\n\nCheck and interpretation: The count from zero through all-one is 2ⁿ−1, but another clock is required to return to zero, making the full cycle 2ⁿ clocks.",
    "family": "ripple-counter-period",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-twos-complement-subtract-1",
    "topic": "digital",
    "prompt": "Two unsigned 6-bit operands have values A=9 and B=4. A subtractor computes A−B using 6-bit two’s-complement addition and discards carry out. What unsigned decimal value appears on its output?",
    "choices": [
      "13",
      "5",
      "59",
      "6"
    ],
    "key": 1,
    "why": "Principle: Fixed-width subtraction adds the two’s complement of B and retains only the lowest n bits. This implements arithmetic modulo 2ⁿ.\n\nStep 1: The six-bit two’s complement of B is 64−4=60.\n\nStep 2: Add A to it: 9+60=69.\n\nStep 3: Discard the carry beyond bit 5, equivalently subtract 64, to obtain 5.\n\nAnswer: 5.\n\nCheck and interpretation: The specified A exceeds B, so the unsigned difference is positive and is represented exactly. Discarding carry is part of fixed-width subtraction, not an arithmetic error.",
    "family": "twos-complement-subtract",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-adc-serial-clock-1",
    "topic": "digital",
    "prompt": "A 5-bit SAR ADC outputs one serial word for each of 120 ksample/s. Each frame also contains 2 status bits and 1 idle clock. What minimum serial clock in MHz supports continuous conversion?",
    "choices": [
      "0.6 MHz",
      "0.96 MHz",
      "0.84 MHz",
      "1.08 MHz"
    ],
    "key": 1,
    "why": "Principle: The serial link must provide a clock slot for every conversion bit and every overhead slot in each sample frame.\n\nStep 1: A frame requires 5+2+1=8 clocks.\n\nStep 2: At 120000 frames/s, the required clock is 8×120000=960000 clocks/s.\n\nStep 3: Divide by 10⁶ to get 0.96 MHz.\n\nAnswer: 0.96 MHz.\n\nCheck and interpretation: Counting only the ADC resolution underestimates the link rate because status and idle slots also consume serial clock periods.",
    "family": "adc-serial-clock",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-synchronous-timing-1",
    "topic": "digital",
    "prompt": "A register-to-register path has t_CQ=1.2 ns, combinational delay 3.3 ns and setup time 1.1 ns. Adverse clock uncertainty consumes another 0.2 ns. What is the maximum clock frequency in MHz?",
    "choices": [
      "303.0303 MHz",
      "222.2222 MHz",
      "185.1852 MHz",
      "172.4138 MHz"
    ],
    "key": 3,
    "why": "Principle: For setup timing, one clock period must cover launch clock-to-Q, maximum logic delay, destination setup time and adverse uncertainty.\n\nStep 1: The minimum period is 1.2+3.3+1.1+0.2=5.8 ns.\n\nStep 2: Convert period to frequency with fMHz=1000/Tns.\n\nStep 3: Hence fmax=172.4138 MHz. This checks setup timing only.\n\nAnswer: 172.4138 MHz.\n\nCheck and interpretation: Hold timing is a separate minimum-delay condition. Adverse uncertainty reduces the available time and therefore is added to the required period.",
    "family": "synchronous-timing",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-memory-chip-count-1",
    "topic": "digital",
    "prompt": "A memory requires 64 K words of 16 bits. Available chips each contain 4 K words of 8 bits. How many chips are needed?",
    "choices": [
      "16",
      "64",
      "32",
      "18"
    ],
    "key": 2,
    "why": "Principle: Memory expansion may require both depth expansion and width expansion. The total chip count is the product of those two independent factors.\n\nStep 1: To make 16-bit words from 8-bit chips, use 16/8=2 chips in parallel per bank.\n\nStep 2: To obtain 64 K words from 4 K-word chips, use 64/4=16 banks.\n\nStep 3: Total chips =2×16=32.\n\nAnswer: 32.\n\nCheck and interpretation: Counting only address-depth banks omits the second chip needed in every bank to supply the upper byte of each 16-bit word.",
    "family": "memory-chip-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-binary-dac-1",
    "topic": "digital",
    "prompt": "An ideal unipolar 5-bit DAC uses v_o=V_ref D/2^N with V_ref=2.2 V. Find output for unsigned input code D=9, in V. Round to four decimal places.",
    "choices": [
      "0.6387 V",
      "0.6875 V",
      "1.2375 V",
      "0.6188 V"
    ],
    "key": 3,
    "why": "Principle: Use the DAC transfer convention stated in the question: each code increment is Vref/2ᴺ. The largest code remains one LSB below Vref.\n\nStep 1: There are 2^5=32 nominal quantization steps.\n\nStep 2: One LSB is 2.2/32 V.\n\nStep 3: Multiplying by input code 9 gives vo=2.2×9/32=0.6188 V.\n\nAnswer: 0.6188 V.\n\nCheck and interpretation: Scaling by 2ᴺ−1 would implement an endpoint-normalized convention, which differs from the explicitly supplied DAC law.",
    "family": "binary-dac",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-bitwise-xor-1",
    "topic": "digital",
    "prompt": "Two 5-bit unsigned words encode decimal 5 and 2. Their corresponding bits feed five XOR gates. What is the unsigned decimal value of the output word?",
    "choices": [
      "7",
      "0",
      "8",
      "9"
    ],
    "key": 0,
    "why": "Principle: Bitwise XOR produces one where the operand bits differ and zero where they agree. It corresponds to binary addition without inter-bit carry.\n\nStep 1: Write the operands as 00101 and 00010.\n\nStep 2: XOR corresponding bit positions to obtain 00111.\n\nStep 3: Convert that binary result back to decimal to get 7.\n\nAnswer: 7.\n\nCheck and interpretation: Ordinary decimal addition may differ because it includes carries. OR also differs because it retains a one when both input bits are one.",
    "family": "bitwise-xor",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-flash-comparator-count-1",
    "topic": "digital",
    "prompt": "An ideal 4-bit flash ADC uses a full bank of threshold comparators with one comparator per internal quantization boundary. How many comparators are required?",
    "choices": [
      "16",
      "4",
      "8",
      "15"
    ],
    "key": 3,
    "why": "Principle: An N-bit quantizer divides its input range into 2ᴺ bins. Separating adjacent bins requires one internal threshold between each neighboring pair.\n\nStep 1: The number of output bins is 2^4=16.\n\nStep 2: The number of boundaries between those bins is one fewer.\n\nStep 3: Thus a full flash architecture requires 2^4−1=15 comparators.\n\nAnswer: 15.\n\nCheck and interpretation: The rapid exponential comparator growth explains why flash ADC resolution is expensive in power and silicon area. This count excludes any separate overrange detector.",
    "family": "flash-comparator-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-counter-adc-time-1",
    "topic": "digital",
    "prompt": "An 5-bit counter-type ADC starts its count at zero at the beginning of each conversion. The clock period is 2.2 µs. Using a worst-case budget of 2^N clocks, find the worst-case conversion time in ms.",
    "choices": [
      "70.4 ms",
      "0.0704 ms",
      "0.011 ms",
      "0.0352 ms"
    ],
    "key": 1,
    "why": "Principle: A counter-type ADC can need a full-scale count search, unlike a SAR converter that needs approximately N decisions. The question specifies the clock-budget convention.\n\nStep 1: The worst-case budget is 2^5=32 clocks.\n\nStep 2: Multiply by 2.2 µs per clock to get 70.4 µs.\n\nStep 3: Convert microseconds to milliseconds by dividing by 1000: 0.0704 ms.\n\nAnswer: 0.0704 ms.\n\nCheck and interpretation: Using N clocks would describe the approximate decision count of a SAR ADC, not the stated counter ramp architecture.",
    "family": "counter-adc-time",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-routh-cubic-bound-1",
    "topic": "control",
    "prompt": "For positive K, a feedback system has characteristic polynomial s³+2s²+5s+K. What is the upper boundary value of K for strict stability?",
    "choices": [
      "7",
      "2.5",
      "10",
      "20"
    ],
    "key": 2,
    "why": "Principle: For a real cubic, the Routh first-column entries must all have the same positive sign. A zero boundary entry marks loss of strict asymptotic stability.\n\nStep 1: The first two Routh rows begin [1, 5] and [2, K].\n\nStep 2: The s¹ first-column entry is (2×5−K)/2.\n\nStep 3: Along with K>0, positivity requires K<10.\n\nStep 4: Therefore strict stability holds for 0<K<10, and the requested upper boundary is 10.\n\nAnswer: 10.\n\nCheck and interpretation: The boundary itself is excluded from strict stability. Positive polynomial coefficients alone are necessary but not sufficient for a cubic.",
    "family": "routh-cubic-bound",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-second-order-overshoot-1",
    "topic": "control",
    "prompt": "A standard unity-DC-gain second-order system has ω_n=3 rad/s and damping ratio ζ=0.24. Find percentage overshoot to a unit step, rounded to four decimal places.",
    "choices": [
      "0.4599 %",
      "47.0489 %",
      "91.9859 %",
      "45.9929 %"
    ],
    "key": 3,
    "why": "Principle: For an underdamped standard second-order response, percentage overshoot is 100 exp[−πζ/√(1−ζ²)]. It depends on damping ratio rather than natural frequency.\n\nStep 1: The supplied ζ=0.24 lies strictly between zero and one.\n\nStep 2: Compute √(1−ζ²)=0.9708.\n\nStep 3: Insert in the overshoot formula: 100exp[−π×0.24/0.9708]=45.9929%.\n\nAnswer: 45.9929 %.\n\nCheck and interpretation: Changing ωn=3 rad/s would change how quickly the peak occurs, but would not change this percentage overshoot with ζ fixed.",
    "family": "second-order-overshoot",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-ramp-error-1",
    "topic": "control",
    "prompt": "A stable unity-negative-feedback system has open loop G(s)=3/[s(s+2)]. What is its unit-ramp steady-state error? Round to four decimal places.",
    "choices": [
      "1.5",
      "0",
      "0.4",
      "0.6667"
    ],
    "key": 3,
    "why": "Principle: For a type-1 unity-feedback system, unit-ramp steady-state error is 1/Kv, where Kv=lim(s→0)sG(s). Closed-loop stability is required.\n\nStep 1: There is one open-loop pole at the origin, so the system is type 1.\n\nStep 2: Kv=lim(s→0)3/(s+2)=3/2.\n\nStep 3: Hence ess=1/Kv=2/3=0.6667.\n\nAnswer: 0.6667.\n\nCheck and interpretation: The characteristic polynomial s²+as+gain has positive coefficients here and is stable. A step input would have zero error, whereas a ramp has a finite nonzero error.",
    "family": "ramp-error",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-first-order-settling-1",
    "topic": "control",
    "prompt": "A plant G(s)=3/(s+2) is placed in unity negative feedback. Using the approximation t_s≈4/|closed-loop pole|, find its 2% settling time in s.",
    "choices": [
      "2 s",
      "0.8 s",
      "1.3333 s",
      "0.2 s"
    ],
    "key": 1,
    "why": "Principle: Unity negative feedback gives T=G/(1+G). For a real negative pole −α, the response error decays exponentially with time constant 1/α.\n\nStep 1: T(s)=3/(s+2+3)=3/(s+5).\n\nStep 2: The pole is −5, so τ=1/5 s.\n\nStep 3: The specified 2% approximation is ts≈4τ=4/5=0.8 s.\n\nAnswer: 0.8 s.\n\nCheck and interpretation: Use the closed-loop pole, not the original plant pole. The exact normalized 2% exponential settling time would be ln(50)/α, close to 4/α.",
    "family": "first-order-settling",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-pole-damping-1",
    "topic": "control",
    "prompt": "A second-order denominator is (s+2)(s+4). What is its damping ratio ζ, rounded to four decimal places?",
    "choices": [
      "2.8284",
      "1.0607",
      "3",
      "2.1213"
    ],
    "key": 1,
    "why": "Principle: Compare the expanded polynomial with s²+2ζωns+ωn². Both the linear and constant coefficients are needed to extract the damping ratio.\n\nStep 1: Expand to s²+6s+8.\n\nStep 2: Thus ωn=√8 rad/s and 2ζωn=6.\n\nStep 3: Rearrange: ζ=6/(2√8)=1.0607.\n\nAnswer: 1.0607.\n\nCheck and interpretation: The two distinct real negative poles imply an overdamped system, so ζ must exceed one. This is a useful check on coefficient matching.",
    "family": "pole-damping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-single-pole-phase-1",
    "topic": "control",
    "prompt": "For G(s)=1/(1+0.12s), find phase at ω=3 rad/s in degrees, rounded to four decimal places.",
    "choices": [
      "19.7989 degrees",
      "-90 degrees",
      "-19.7989 degrees",
      "-9.8994 degrees"
    ],
    "key": 2,
    "why": "Principle: The phase of a first-order low-pass is the negative angle of its denominator 1+jωτ. The numerator contributes zero phase.\n\nStep 1: At the given frequency, ωτ=3×0.12=0.36.\n\nStep 2: The denominator angle is arctan(0.36).\n\nStep 3: Therefore ∠G=−arctan(0.36)×180/π=-19.7989 degrees.\n\nAnswer: -19.7989 degrees.\n\nCheck and interpretation: The phase must lie between 0 and −90 degrees for positive frequency. The arctangent result in radians must be converted before reporting degrees.",
    "family": "single-pole-phase",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-step-final-value-1",
    "topic": "control",
    "prompt": "A plant G(s)=3/(s+2) has unity negative feedback and is driven by a unit step reference. Find its final output value, rounded to four decimal places.",
    "choices": [
      "1",
      "0.6",
      "0.2",
      "1.5"
    ],
    "key": 1,
    "why": "Principle: For a stable closed-loop system, the final value of a unit-step response equals its closed-loop DC gain. Unity feedback does not automatically make that gain one.\n\nStep 1: The closed-loop transfer function is T(s)=G/(1+G)=3/(s+5).\n\nStep 2: For a unit step, Y(s)=T(s)/s.\n\nStep 3: By the final-value theorem, y∞=lim(s→0)sY(s)=3/5=0.6.\n\nAnswer: 0.6.\n\nCheck and interpretation: The remaining step error is 0.4. The pole −5 is in the left half-plane, validating the final-value theorem.",
    "family": "step-final-value",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-state-determinant-1",
    "topic": "control",
    "prompt": "A continuous-time state matrix is A=[0 1; −10 −7]. What is the product of its two pole magnitudes?",
    "choices": [
      "7",
      "3.1623",
      "10",
      "29"
    ],
    "key": 2,
    "why": "Principle: The poles are eigenvalues of A. Their product equals det(A), and their individual values can be obtained from the characteristic polynomial.\n\nStep 1: Compute det(sI−A)=s²+7s+10.\n\nStep 2: It factors as (s+2)(s+5), so the poles are −2 and −5.\n\nStep 3: Their magnitudes multiply to 2×5=10.\n\nAnswer: 10.\n\nCheck and interpretation: The trace is the pole sum, −(a+b), rather than their product. Both poles are negative here, so magnitude product agrees with the positive determinant.",
    "family": "state-determinant",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-phase-margin-1",
    "topic": "control",
    "prompt": "A unity-feedback loop has G(s)=K/[s(s+3)]. K is selected so gain crossover is ω_gc=3 rad/s. Find phase margin in degrees.",
    "choices": [
      "90 degrees",
      "45 degrees",
      "135 degrees",
      "180 degrees"
    ],
    "key": 1,
    "why": "Principle: Phase margin is 180 degrees plus open-loop phase at unity-gain crossover. The integrator contributes −90 degrees, and the real pole contributes an additional lag.\n\nStep 1: At ωgc=3, the integrator phase is −90 degrees.\n\nStep 2: The (s+3) denominator term contributes −arctan(ωgc/3)=−45 degrees.\n\nStep 3: Total phase is −135 degrees, so PM=180−135=45 degrees.\n\nAnswer: 45 degrees.\n\nCheck and interpretation: A positive K can achieve the stated crossover: K=ωgc√(ωgc²+3²). K sets magnitude here but contributes no extra phase.",
    "family": "phase-margin",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-capacity-bandwidth-1",
    "topic": "comm",
    "prompt": "An AWGN channel has bandwidth 1.2 MHz and linear SNR=4.6569. Using the stated SNR rounded to four decimals, find Shannon capacity in Mbit/s, rounded to three decimal places.",
    "choices": [
      "1.5 Mbit/s",
      "6 Mbit/s",
      "2.6632 Mbit/s",
      "3 Mbit/s"
    ],
    "key": 3,
    "why": "Principle: Shannon capacity for a bandlimited AWGN channel is C=B log₂(1+SNR). With B in MHz, the resulting capacity is in Mbit/s.\n\nStep 1: Use linear SNR=4.6569, so the logarithm argument is 5.6569.\n\nStep 2: Compute log₂(1+SNR)≈2.5 bit/s/Hz.\n\nStep 3: Multiply by 1.2 MHz to obtain approximately 3.000 Mbit/s.\n\nAnswer: 3 Mbit/s.\n\nCheck and interpretation: Omitting the +1 is a high-SNR approximation and is not the exact Shannon expression. Capacity is a theoretical upper bound, not an assured payload rate.",
    "family": "capacity-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-qam-raised-cosine-1",
    "topic": "comm",
    "prompt": "An M-QAM link with M=8 carries 5 Mbit/s before overhead and uses raised-cosine pulse shaping with roll-off α=0.22. What is its ideal RF null-to-null bandwidth in MHz?",
    "choices": [
      "1.6667 MHz",
      "6.1 MHz",
      "2.0333 MHz",
      "1.0167 MHz"
    ],
    "key": 2,
    "why": "Principle: An M-ary symbol carries log₂M bits. For raised-cosine shaping, the real passband null-to-null bandwidth is (1+α) times symbol rate.\n\nStep 1: Each symbol carries log₂(8)=3 bits.\n\nStep 2: The symbol rate is Rs=5/3=1.6667 Mbaud.\n\nStep 3: RF bandwidth is (1+0.22)Rs=2.0333 MHz.\n\nAnswer: 2.0333 MHz.\n\nCheck and interpretation: The one-sided baseband bandwidth is half this passband bandwidth. Reporting that baseband value would introduce a factor-of-two error.",
    "family": "qam-raised-cosine",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-am-efficiency-1",
    "topic": "comm",
    "prompt": "A conventional single-tone AM transmitter has carrier power 12 W and modulation index 0.25. Find useful-sideband power as a percentage of total transmitted power.",
    "choices": [
      "3.125 %",
      "20 %",
      "3.0303 %",
      "1.5152 %"
    ],
    "key": 2,
    "why": "Principle: In conventional AM, the two sidebands together carry Pc m²/2 while the carrier still consumes Pc. Efficiency is sideband power divided by total power.\n\nStep 1: Sideband power is 12×0.25²/2=0.375 W.\n\nStep 2: Total power is Pc(1+m²/2)=12.375 W.\n\nStep 3: Efficiency is 100×m²/(2+m²)=3.0303%.\n\nAnswer: 3.0303 %.\n\nCheck and interpretation: Carrier power cancels from the efficiency ratio. Dividing sideband power by carrier power alone would overestimate useful-power efficiency.",
    "family": "am-efficiency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-fm-carson-1",
    "topic": "comm",
    "prompt": "A message has maximum frequency 3 kHz. An FM modulator produces peak deviation 5 kHz. Using Carson’s rule, what approximate transmission bandwidth in kHz is required?",
    "choices": [
      "10 kHz",
      "6 kHz",
      "16 kHz",
      "8 kHz"
    ],
    "key": 2,
    "why": "Principle: Carson’s rule estimates practical FM bandwidth as B≈2(Δf+fm), incorporating both frequency deviation and message bandwidth.\n\nStep 1: Identify peak deviation Δf=5 kHz, rather than peak-to-peak deviation.\n\nStep 2: Add the highest message frequency: Δf+fm=5+3=8 kHz.\n\nStep 3: Double the sum for the full passband width: B≈16 kHz.\n\nAnswer: 16 kHz.\n\nCheck and interpretation: This is an occupied-bandwidth estimate. Exact FM spectra have infinitely many sidebands, so the result is not a strict mathematical bandlimit.",
    "family": "fm-carson",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-pcm-sqnr-1",
    "topic": "comm",
    "prompt": "A full-scale sinusoid is quantized by an ideal uniform 5-bit quantizer. Under the uniform quantization-noise model, estimate SQNR in dB to four decimal places.",
    "choices": [
      "30.103 dB",
      "31.8639 dB",
      "25.8433 dB",
      "37.8845 dB"
    ],
    "key": 1,
    "why": "Principle: For a full-scale sinusoid and uniform quantization error with variance Δ²/12, SQNR≈6.0206N+1.7609 dB.\n\nStep 1: The sinusoid signal power is A²/2. For a span of 2A, quantization step is Δ=2A/2ᴺ.\n\nStep 2: Dividing A²/2 by Δ²/12 gives SQNR=(3/2)2^(2N).\n\nStep 3: Taking 10log₁₀ gives 10log₁₀(3/2)+20Nlog₁₀2.\n\nStep 4: For N=5, this is 31.8639 dB.\n\nAnswer: 31.8639 dB.\n\nCheck and interpretation: The 1.76 dB offset comes from the full-scale sinusoidal input assumption. A smaller input amplitude reduces actual SQNR.",
    "family": "pcm-sqnr",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-binary-entropy-1",
    "topic": "comm",
    "prompt": "An independent binary source emits 1 with probability 0.05 and 0 with probability 0.95. Find its entropy in bits/symbol, rounded to four decimal places.",
    "choices": [
      "1 bits/symbol",
      "4.3219 bits/symbol",
      "0.1432 bits/symbol",
      "0.2864 bits/symbol"
    ],
    "key": 3,
    "why": "Principle: Entropy is the probability-weighted average information content, H=−Σp log₂p. Both symbols contribute even when their probabilities differ.\n\nStep 1: The information contribution of 1 is −0.05log₂(0.05).\n\nStep 2: The information contribution of 0 is −0.95log₂(0.95).\n\nStep 3: Adding them gives H=0.2864 bits per source symbol.\n\nAnswer: 0.2864 bits/symbol.\n\nCheck and interpretation: Binary entropy cannot exceed 1 bit/symbol and is maximal for equal probabilities. It decreases when one outcome becomes easier to predict.",
    "family": "binary-entropy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-coded-throughput-1",
    "topic": "comm",
    "prompt": "A 8-ary modulation runs at 1.2 Mbaud using a code of rate 0.525. Ignore all other overhead. What is the information-bit rate in Mbit/s?",
    "choices": [
      "3.6 Mbit/s",
      "1.89 Mbit/s",
      "6.8571 Mbit/s",
      "0.63 Mbit/s"
    ],
    "key": 1,
    "why": "Principle: A code rate r means r information bits per transmitted coded bit. Modulation carries log₂M coded bits per symbol.\n\nStep 1: The modulation carries 3 coded bits per symbol.\n\nStep 2: At 1.2 Mbaud the coded rate is 3.6 Mbit/s.\n\nStep 3: Multiplying by code rate 0.525 yields information rate 1.89 Mbit/s.\n\nAnswer: 1.89 Mbit/s.\n\nCheck and interpretation: Coding adds redundancy, so the information rate must be below the raw coded-bit rate. Dividing by code rate would predict the opposite.",
    "family": "coded-throughput",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-receiver-noise-1",
    "topic": "comm",
    "prompt": "A matched receiver has noise figure 2.5 dB and bandwidth 2 MHz. At T₀=290 K, with k_B=1.38×10⁻²³ J/K, find its equivalent total input-referred noise power Fk_BT₀B in pW.",
    "choices": [
      "0.008 pW",
      "0.1423 pW",
      "0.0014 pW",
      "0.0142 pW"
    ],
    "key": 3,
    "why": "Principle: Noise factor F is a linear power ratio and equals 10^(NF/10). The specified total input-referred noise is F times the thermal input-noise reference.\n\nStep 1: Convert NF=2.5 dB to F=10^(2.5/10)=1.7783.\n\nStep 2: The thermal reference is kT₀B=1.38×10⁻²³×290×2×10⁶ W.\n\nStep 3: Multiply by F and convert W to pW by multiplying by 10¹², giving 0.0142 pW.\n\nAnswer: 0.0142 pW.\n\nCheck and interpretation: The receiver-added equivalent noise alone would use (F−1)kT₀B. The question explicitly requests total FkT₀B, including source thermal noise.",
    "family": "receiver-noise",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-ebn0-conversion-1",
    "topic": "comm",
    "prompt": "A digital link has received signal-to-noise ratio 11 dB measured over bandwidth B. Its bit rate satisfies R_b/B=3 bit/s/Hz. Find E_b/N₀ in dB.",
    "choices": [
      "6.2288 dB",
      "15.7712 dB",
      "3.6667 dB",
      "4.1964 dB"
    ],
    "key": 0,
    "why": "Principle: Since SNR=P/(N₀B) and Eb=P/Rb, the linear relation is Eb/N₀=SNR×B/Rb. Decibels convert multiplication to addition.\n\nStep 1: The bandwidth-to-bit-rate ratio is B/Rb=1/3.\n\nStep 2: Thus (Eb/N₀)dB=SNRdB−10log₁₀(Rb/B).\n\nStep 3: Substitute 11−10log₁₀(3)=6.2288 dB.\n\nAnswer: 6.2288 dB.\n\nCheck and interpretation: For spectral efficiency above one bit/s/Hz, Eb/N₀ in dB is smaller than the measured SNR in dB. A linear ratio must not be reported as a decibel value.",
    "family": "ebn0-conversion",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-complex-load-power-1",
    "topic": "em",
    "prompt": "A lossless 50 Ω transmission line is terminated by (25−j14) Ω. If incident average power is 11 mW, find average load power in mW, rounded to four decimal places.",
    "choices": [
      "1.5515 mW",
      "6.8689 mW",
      "11 mW",
      "9.4485 mW"
    ],
    "key": 3,
    "why": "Principle: At a lossless line termination, the reflected power fraction is |Γ|², where Γ=(ZL−Z0)/(ZL+Z0). Delivered power is the remaining fraction of incident power.\n\nStep 1: Compute |Γ|²=[(25−50)²+14²]/[(25+50)²+14²].\n\nStep 2: This gives reflected fraction 0.141.\n\nStep 3: Load power is 11(1−0.141)=9.4485 mW.\n\nAnswer: 9.4485 mW.\n\nCheck and interpretation: Using 1−|Γ| rather than 1−|Γ|² confuses voltage amplitude with power. A passive real part of the load ensures delivered power is nonnegative.",
    "family": "complex-load-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-quarter-wave-transform-1",
    "topic": "em",
    "prompt": "A lossless quarter-wave transmission line has characteristic impedance 45 Ω and load resistance 110 Ω. What is input resistance in Ω?",
    "choices": [
      "110 Ω",
      "45 Ω",
      "268.8889 Ω",
      "18.4091 Ω"
    ],
    "key": 3,
    "why": "Principle: At an electrical length of π/2, a lossless line inverts the load impedance: Zin=Z0²/ZL. This is a frequency-specific impedance transformation.\n\nStep 1: Use Z0=45 Ω and ZL=110 Ω.\n\nStep 2: Square the line impedance: Z0²=2025 Ω².\n\nStep 3: Divide by the load: Zin=2025/110=18.4091 Ω.\n\nAnswer: 18.4091 Ω.\n\nCheck and interpretation: A line one-half wavelength long would reproduce the load instead. The quarter-wave condition is essential to the inversion formula.",
    "family": "quarter-wave-transform",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-vswr-reflected-power-1",
    "topic": "em",
    "prompt": "A lossless line has VSWR=1.6. What percentage of incident power is reflected? Round to four decimal places.",
    "choices": [
      "23.0769 %",
      "5.3254 %",
      "94.6746 %",
      "2.6627 %"
    ],
    "key": 1,
    "why": "Principle: First convert VSWR to voltage-reflection magnitude, then square that magnitude to obtain the reflected power fraction.\n\nStep 1: From S=(1+|Γ|)/(1−|Γ|), rearrange |Γ|=(S−1)/(S+1).\n\nStep 2: For S=1.6, |Γ|=0.2308.\n\nStep 3: The reflected percentage is 100|Γ|²=5.3254%.\n\nAnswer: 5.3254 %.\n\nCheck and interpretation: VSWR itself is an amplitude ratio along the standing wave, not a power-reflection ratio. A matched line has S=1 and zero reflected power.",
    "family": "vswr-reflected-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-waveguide-velocity-1",
    "topic": "em",
    "prompt": "An air-filled rectangular guide has broad wall a=2.2 cm and carries TE₁₀ at 11 GHz. Taking c=3×10⁸ m/s, find group velocity divided by c, rounded to four decimal places.",
    "choices": [
      "1.2743",
      "0.6198",
      "0.6158",
      "0.7847"
    ],
    "key": 3,
    "why": "Principle: For a lossless air-filled waveguide, TE group velocity is vg=c√[1−(fc/f)²]. It is lower than c for a propagating mode above cutoff.\n\nStep 1: TE₁₀ cutoff is fc=c/(2a)=6.8182 GHz after converting centimetres to metres.\n\nStep 2: The operating frequency 11 GHz exceeds cutoff, so propagation is possible.\n\nStep 3: Compute vg/c=√[1−(6.8182/11)²]=0.7847.\n\nAnswer: 0.7847.\n\nCheck and interpretation: The reciprocal factor would give phase velocity divided by c. Phase velocity can exceed c in a waveguide while group velocity remains below c.",
    "family": "waveguide-velocity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-dielectric-impedance-1",
    "topic": "em",
    "prompt": "A uniform plane wave propagates in a lossless nonmagnetic dielectric with relative permittivity 3. Taking free-space impedance as 377 Ω, find intrinsic impedance in Ω.",
    "choices": [
      "652.9832 Ω",
      "217.6611 Ω",
      "125.6667 Ω",
      "1131 Ω"
    ],
    "key": 1,
    "why": "Principle: Intrinsic impedance of a lossless medium is η=√(μ/ε). For μr=1, it reduces to η0/√εr.\n\nStep 1: Set μ=μ0 and ε=3ε0.\n\nStep 2: Then η=√(μ0/ε0)/√3=377/√3.\n\nStep 3: The resulting impedance is 217.6611 Ω, which relates electric-field amplitude to magnetic-field amplitude.\n\nAnswer: 217.6611 Ω.\n\nCheck and interpretation: The refractive index is √εr, while intrinsic impedance varies inversely with it for a nonmagnetic medium. Relative permittivity is dimensionless.",
    "family": "dielectric-impedance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-faraday-loop-current-1",
    "topic": "em",
    "prompt": "A 2-turn coil has area 0.025 m² per turn and resistance 6 Ω. Uniform normal flux density is B(t)=0.12cos(120t) T. Neglect inductance. Find peak induced current in A.",
    "choices": [
      "0.06 A",
      "0.12 A",
      "0.001 A",
      "0.24 A"
    ],
    "key": 1,
    "why": "Principle: Faraday’s law uses the time derivative of total flux linkage NΦ. For a sinusoidal normal field, peak induced emf is NABpeakω.\n\nStep 1: Flux linkage is λ(t)=NAB(t)=2×0.025×0.12cos(120t).\n\nStep 2: Differentiation gives peak emf N A Bpeak ω=0.72 V.\n\nStep 3: With inductance neglected, peak current is emfpeak/R=0.72/6=0.12 A.\n\nAnswer: 0.12 A.\n\nCheck and interpretation: The angular frequency is already in rad/s, so no extra 2π is needed. Lenz’s law specifies the current direction; only the peak magnitude is requested.",
    "family": "faraday-loop-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-skin-depth-1",
    "topic": "em",
    "prompt": "A good nonmagnetic conductor has σ=10⁷ S/m and μ=4π×10⁻⁷ H/m. At 2 MHz, find skin depth in µm using δ=√[2/(ωμσ)].",
    "choices": [
      "159.1549 µm",
      "79.5775 µm",
      "1125.3954 µm",
      "112.5395 µm"
    ],
    "key": 3,
    "why": "Principle: In a good conductor, fields decay exponentially into the material. Skin depth is the distance over which field amplitude falls by a factor e.\n\nStep 1: Convert angular frequency: ω=2π×2×10⁶ rad/s.\n\nStep 2: Insert ω, μ=4π×10⁻⁷ and σ=10⁷ into δ=√[2/(ωμσ)].\n\nStep 3: The result in metres is 1.1254e-4 m. Multiplying by 10⁶ gives 112.5395 µm.\n\nAnswer: 112.5395 µm.\n\nCheck and interpretation: Skin depth scales as 1/√f and becomes smaller at higher frequency. Confusing hertz with angular frequency changes the numerical result.",
    "family": "skin-depth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-friis-link-1",
    "topic": "em",
    "prompt": "In a free-space far-field link, transmit power is 2 W, linear antenna gains are G_t=2 and G_r=3, separation is 110 m, and frequency is 1.1 GHz. With c=3×10⁸ m/s and perfect alignment/matching, find received power in nW.",
    "choices": [
      "77.8542 nW",
      "1868.5008 nW",
      "116.7813 nW",
      "467.1252 nW"
    ],
    "key": 3,
    "why": "Principle: The Friis formula is Pr=PtGtGr[λ/(4πR)]² for a matched free-space far-field link. Gains here are linear rather than decibels.\n\nStep 1: The wavelength is λ=c/f=0.3/1.1=0.2727 m.\n\nStep 2: The propagation factor is [0.2727/(4π×110)]².\n\nStep 3: Multiply by PtGtGr=2×2×3 and convert W to nW to obtain 467.1252 nW.\n\nAnswer: 467.1252 nW.\n\nCheck and interpretation: Power falls with separation squared. Omitting either antenna gain or using dB-valued gains directly would change the result.",
    "family": "friis-link",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-poynting-average-1",
    "topic": "em",
    "prompt": "A uniform plane wave in free space has peak electric field 12 V/m. Taking η₀=377 Ω, find time-average power density in W/m².",
    "choices": [
      "0.382 W/m²",
      "0.191 W/m²",
      "27144 W/m²",
      "0.0318 W/m²"
    ],
    "key": 1,
    "why": "Principle: For a sinusoidal plane wave, the average Poynting magnitude is Epeak Hpeak/2=Epeak²/(2η). Peak and RMS field conventions must be distinguished.\n\nStep 1: The peak magnetic field is Hpeak=Epeak/η₀=12/377 A/m.\n\nStep 2: Average power density is one-half the product of the peak field amplitudes.\n\nStep 3: Thus Sav=12²/(2×377)=0.191 W/m².\n\nAnswer: 0.191 W/m².\n\nCheck and interpretation: Using E²/η without the one-half factor is correct only when E denotes RMS field. The problem explicitly supplies peak field.",
    "family": "poynting-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-combined-work-1",
    "topic": "apt",
    "prompt": "A completes a job in 5 days and B in 9 days at constant rates. They start together and work without interference. In how many days is the job complete?",
    "choices": [
      "14 days",
      "7 days",
      "3.2143 days",
      "11.25 days"
    ],
    "key": 2,
    "why": "Principle: Independent work rates add. A completion time must be converted into a fraction of the job completed per unit time before combining workers.\n\nStep 1: A completes 1/5 of the job per day and B completes 1/9.\n\nStep 2: Their combined rate is (5+9)/(5×9) jobs/day.\n\nStep 3: Time is the reciprocal, 5×9/(5+9)=3.2143 days.\n\nAnswer: 3.2143 days.\n\nCheck and interpretation: The combined time is less than 5 days, the faster individual time. Averaging the completion times would fail this basic check.",
    "family": "combined-work",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-equal-distance-speed-1",
    "topic": "apt",
    "prompt": "A traveller covers 25 km at 32 km/h and the next 25 km at 52 km/h. Ignoring stops, what is the overall average speed in km/h?",
    "choices": [
      "42 km/h",
      "39.619 km/h",
      "40.7922 km/h",
      "19.8095 km/h"
    ],
    "key": 1,
    "why": "Principle: Average speed is total distance divided by total time. Equal distances at different speeds lead to a harmonic mean, not an arithmetic mean.\n\nStep 1: Total distance is 50 km.\n\nStep 2: Travel time is 25/32+25/52 h.\n\nStep 3: Divide distance by time: vavg=2v₁v₂/(v₁+v₂)=39.619 km/h.\n\nAnswer: 39.619 km/h.\n\nCheck and interpretation: More time is spent on the slower segment, so the average is below the arithmetic mean of the two speeds. The common segment distance cancels.",
    "family": "equal-distance-speed",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-markup-discount-1",
    "topic": "apt",
    "prompt": "An item is marked 22% above its cost price and then sold at a 6% discount on marked price. What is the net profit percentage relative to cost?",
    "choices": [
      "14.68 %",
      "16 %",
      "28 %",
      "7.34 %"
    ],
    "key": 0,
    "why": "Principle: Markup is based on cost while discount is based on marked price. Successive percentage operations multiply their scale factors.\n\nStep 1: Take cost as 100 units. Marked price is 100×(1+22/100)=122.\n\nStep 2: Selling price is 122×(1−6/100)=114.68.\n\nStep 3: Profit percentage on cost is selling price minus 100, namely 14.68%.\n\nAnswer: 14.68 %.\n\nCheck and interpretation: Simply subtracting discount percentage from markup percentage ignores their different bases. The multiplicative calculation also works when the net result is a loss.",
    "family": "markup-discount",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-committee-selection-1",
    "topic": "apt",
    "prompt": "A committee of 3 people is selected uniformly from 9 candidates, including two named candidates A and B. What is the probability both A and B are selected?",
    "choices": [
      "0.0833",
      "0.3333",
      "0.1111",
      "0.25"
    ],
    "key": 0,
    "why": "Principle: Committee selection is without replacement. Count committees that contain both named people and divide by the count of all equally likely committees.\n\nStep 1: All committees number C(9,3).\n\nStep 2: With A and B already included, choose the remaining 1 members from 7, giving C(7,1).\n\nStep 3: Their ratio simplifies to r(r−1)/[n(n−1)]=3×2/(9×8)=0.0833.\n\nAnswer: 0.0833.\n\nCheck and interpretation: Multiplying r/n by itself incorrectly treats the two inclusion events as independent. The second inclusion probability changes after the first is fixed.",
    "family": "committee-selection",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-pipes-drain-1",
    "topic": "apt",
    "prompt": "An inlet fills an empty tank in 3 hours. A drain empties a full tank in 7 hours. Both are opened together when the tank is empty, with constant flow rates. How long until it fills?",
    "choices": [
      "5.25 hours",
      "2.1 hours",
      "7 hours",
      "4 hours"
    ],
    "key": 0,
    "why": "Principle: The inlet contributes a positive fill rate and the drain a negative fill rate. Net filling time is the reciprocal of their rate difference.\n\nStep 1: The inlet rate is 1/3 tank/h and drain rate is 1/7 tank/h.\n\nStep 2: Net rate is 1/3−1/7=4/[3×7] tank/h.\n\nStep 3: Thus filling time is 3×7/4=5.25 hours.\n\nAnswer: 5.25 hours.\n\nCheck and interpretation: The drain makes filling slower than the inlet alone, so the answer must exceed the inlet’s filling time. Adding rates would describe two inlets.",
    "family": "pipes-drain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-updated-average-1",
    "topic": "apt",
    "prompt": "The average of 5 observations is 21. One observation equal to 11 is removed. What is the mean of the remaining observations?",
    "choices": [
      "23.5",
      "16",
      "18.8",
      "11.75"
    ],
    "key": 0,
    "why": "Principle: Recover the original total from mean times count, subtract the removed observation, then divide by the new count.\n\nStep 1: The original sum is 5×21=105.\n\nStep 2: After removing 11, the sum becomes 94 and the count becomes 4.\n\nStep 3: The new mean is 94/4=23.5.\n\nAnswer: 23.5.\n\nCheck and interpretation: The removed value lies below the original mean, so removing it raises the mean. Dividing by the original count would miss the count change.",
    "family": "updated-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-compound-growth-1",
    "topic": "apt",
    "prompt": "A population grows at 2.5% per year compounded annually for two years. What is the total percentage increase over its initial value?",
    "choices": [
      "5.0625 %",
      "5 %",
      "6.25 %",
      "2.5312 %"
    ],
    "key": 0,
    "why": "Principle: Annual compounding applies each year’s growth to the previous year’s enlarged population. The two-year growth factor is (1+r)².\n\nStep 1: Convert the annual percentage to rate r=2.5/100.\n\nStep 2: After two years, final/initial=(1+2.5/100)².\n\nStep 3: Subtract one and multiply by 100 to obtain total growth 5.0625%.\n\nAnswer: 5.0625 %.\n\nCheck and interpretation: The result exceeds the simple two-year increase 5% because the first year’s increase also grows in the second year.",
    "family": "compound-growth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-arithmetic-sum-1",
    "topic": "apt",
    "prompt": "A production schedule makes 3 units on day 1 and increases output by 2 units each successive day. How many units are made over the first 11 days?",
    "choices": [
      "253 units",
      "55 units",
      "165 units",
      "143 units"
    ],
    "key": 3,
    "why": "Principle: Daily outputs form an arithmetic progression. Its total is the number of terms times the average of the first and last terms.\n\nStep 1: First output a=3; common difference d=2.\n\nStep 2: Day-11 output is a+(n−1)d=3+10×2=23.\n\nStep 3: Total is n[2a+(n−1)d]/2=11×[3+23]/2=143 units.\n\nAnswer: 143 units.\n\nCheck and interpretation: There are n−1 increases between the first and nth days. Using n increases would shift every endpoint calculation by one day.",
    "family": "arithmetic-sum",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-without-replacement-1",
    "topic": "apt",
    "prompt": "A box contains 6 working and 4 defective components. Two are drawn randomly without replacement. What is the probability that both work?",
    "choices": [
      "0.3333",
      "0.36",
      "0.6",
      "0.6667"
    ],
    "key": 0,
    "why": "Principle: Without replacement, the second draw’s probabilities depend on the first draw. Use the multiplication rule with a conditional probability.\n\nStep 1: The first component works with probability 6/10.\n\nStep 2: If it works, 5 working components remain among 9 total.\n\nStep 3: Multiply: P(both work)=(6/10)×(5/9)=0.3333.\n\nAnswer: 0.3333.\n\nCheck and interpretation: Squaring the first-draw probability would apply to replacement or independent draws. Here taking out a working component slightly lowers the next success probability.",
    "family": "without-replacement",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-matrix-power-2",
    "topic": "math",
    "prompt": "A 2×2 matrix A has trace 8 and determinant 15. What is trace(A³)?",
    "choices": [
      "512",
      "3375",
      "152",
      "34"
    ],
    "key": 2,
    "why": "Principle: For a 2×2 matrix, trace(A³)=(trace A)³−3(det A)(trace A). This follows from the eigenvalue sum and product, even when the matrix is not diagonalizable.\n\nStep 1: Let the eigenvalues be λ₁ and λ₂. Then λ₁+λ₂=8 and λ₁λ₂=15.\n\nStep 2: Expand (λ₁+λ₂)³=λ₁³+λ₂³+3λ₁λ₂(λ₁+λ₂).\n\nStep 3: Rearrange to get trace(A³)=8³−3×15×8=152.\n\nAnswer: 152.\n\nCheck and interpretation: The eigenvalues here are 3 and 5, whose cubes add to the same result. Cubing the trace directly retains unwanted cross terms.",
    "family": "matrix-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-conditional-binomial-2",
    "topic": "math",
    "prompt": "4 packets are transmitted independently, each with error probability 0.2. Given that at least one packet is erroneous, what is the probability that exactly one is erroneous? Round to four decimal places.",
    "choices": [
      "0.4096",
      "0.5904",
      "0.6938",
      "0.3062"
    ],
    "key": 2,
    "why": "Principle: A conditional probability is the probability of the intersection divided by the conditioning-event probability. The error count has a binomial distribution.\n\nStep 1: Let X count erroneous packets: X~Binomial(4,0.2).\n\nStep 2: P(X=1)=C(4,1)×0.2×0.8^3=0.4096.\n\nStep 3: P(X≥1)=1−P(X=0)=1−0.8^4=0.5904.\n\nStep 4: Since {X=1} is contained in {X≥1}, divide the first probability by the second: 0.6938.\n\nAnswer: 0.6938.\n\nCheck and interpretation: The conditional probability is larger than the unconditional probability of exactly one error because all zero-error trials have been excluded.",
    "family": "conditional-binomial",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-exponential-interval-2",
    "topic": "math",
    "prompt": "A component lifetime T is exponentially distributed with mean 3 hours. Given T>3 hours, find P(2T is between 12 and 18 hours | T>3 hours). Round to four decimal places.",
    "choices": [
      "0.0855",
      "0.3679",
      "0.2325",
      "0.6321"
    ],
    "key": 2,
    "why": "Principle: The exponential distribution is memoryless: after surviving a specified time, the residual lifetime has the same distribution as the original lifetime.\n\nStep 1: The event 12<2T<18 is equivalent to 6<T<9.\n\nStep 2: The survival function is P(T>t)=exp(−t/3).\n\nStep 3: Conditioning on T>3 gives [e⁻²−e⁻³]/e⁻¹=e⁻¹−e⁻².\n\nStep 4: Numerically the probability is 0.2325. The strict endpoints do not matter for a continuous distribution.\n\nAnswer: 0.2325.\n\nCheck and interpretation: Using the unconditional interval probability would omit the normalization for the component already having survived one mean lifetime.",
    "family": "exponential-interval",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-double-integral-2",
    "topic": "math",
    "prompt": "Evaluate ∫₀¹ ∫₀ˣ 3y^2 dy dx. Round to four decimal places.",
    "choices": [
      "0.3333",
      "0.25",
      "0.75",
      "0.2"
    ],
    "key": 1,
    "why": "Principle: In an iterated integral the inner variable is integrated first, while the outer variable is treated as a constant bound.\n\nStep 1: The inner antiderivative of 3y^2 is y^3.\n\nStep 2: Evaluating at y=x and y=0 leaves x^3.\n\nStep 3: The remaining integral is ∫₀¹x^3dx=[x^4/4]₀¹=1/4=0.25.\n\nAnswer: 0.25.\n\nCheck and interpretation: The triangular integration region is 0≤y≤x≤1. Replacing the upper inner limit by 1 would incorrectly change the region to a square.",
    "family": "double-integral",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-ode-laplace-2",
    "topic": "math",
    "prompt": "A causal system obeys y″+8y′+15y=e⁻ᵗu(t), with y(0⁻)=y′(0⁻)=0. What is Y(s) evaluated at s=1? Round to four decimal places.",
    "choices": [
      "0.0417",
      "0.0208",
      "0.0667",
      "0.1111"
    ],
    "key": 1,
    "why": "Principle: With zero initial conditions, differentiation in the Laplace domain multiplies by s. The input transform of e⁻ᵗu(t) is 1/(s+1).\n\nStep 1: Transform the differential equation: [s²+8s+15]Y(s)=1/(s+1).\n\nStep 2: Factor the quadratic as (s+3)(s+5).\n\nStep 3: Therefore Y(s)=1/[(s+1)(s+3)(s+5)].\n\nStep 4: At s=1 the denominator is 2×4×6, yielding 0.0208.\n\nAnswer: 0.0208.\n\nCheck and interpretation: The input pole at −1 must be included. Evaluating only the system transfer function at s=1 would be twice the requested output-transform value.",
    "family": "ode-laplace",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-constrained-minimum-2",
    "topic": "math",
    "prompt": "Real numbers x and y satisfy x+y=4. What is the minimum possible value of x²+y²?",
    "choices": [
      "16",
      "8",
      "4",
      "2"
    ],
    "key": 1,
    "why": "Principle: A quadratic restricted to a linear constraint can be minimized by substitution or by the Cauchy–Schwarz inequality.\n\nStep 1: Substitute y=4−x into the objective: f(x)=x²+(4−x)².\n\nStep 2: Differentiate: f′(x)=4x−8. Setting it to zero gives x=2, so y=2.\n\nStep 3: The second derivative is 4>0, establishing a strict minimum.\n\nStep 4: The minimum is 2×(2)²=8.\n\nAnswer: 8.\n\nCheck and interpretation: The inequality (x+y)²≤2(x²+y²) gives the same lower bound 16/2, with equality only at x=y.",
    "family": "constrained-minimum",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-gaussian-moment-2",
    "topic": "math",
    "prompt": "X is a zero-mean Gaussian random variable with variance 3. What is Var(X²)?",
    "choices": [
      "27",
      "18",
      "9",
      "6"
    ],
    "key": 1,
    "why": "Principle: For a zero-mean Gaussian with variance σ², the fourth moment is E[X⁴]=3σ⁴. Variance of X² uses both its second and fourth moments.\n\nStep 1: E[X²]=3, so (E[X²])²=9.\n\nStep 2: The Gaussian fourth moment is E[X⁴]=3×3²=27.\n\nStep 3: Var(X²)=E[X⁴]−(E[X²])²=27−9=18.\n\nAnswer: 18.\n\nCheck and interpretation: Using E[X⁴] alone would give a raw moment, not a variance. Although E[X]=0, E[X²] is positive.",
    "family": "gaussian-moment",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-improper-integral-2",
    "topic": "math",
    "prompt": "Evaluate ∫₀∞ 1/(x²+9) dx. Round to four decimal places.",
    "choices": [
      "1.0472",
      "0.3333",
      "4.7124",
      "0.5236"
    ],
    "key": 3,
    "why": "Principle: The antiderivative of 1/(x²+a²) for a>0 is arctan(x/a)/a. An improper integral is evaluated as a limit.\n\nStep 1: Here a=3, so the antiderivative is arctan(x/3)/3.\n\nStep 2: As x→∞, arctan(x/3)→π/2; at x=0 it is zero.\n\nStep 3: Subtract the limits: the integral is π/(2×3)=0.5236.\n\nAnswer: 0.5236.\n\nCheck and interpretation: The result decreases as a grows, consistent with the integrand becoming smaller at every fixed x. Integrating over the entire real line would double the answer.",
    "family": "improper-integral",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-pdf-second-moment-2",
    "topic": "math",
    "prompt": "X has density f(x)=4x^3 for 0<x<1 and zero otherwise. Find E[X²], rounded to four decimal places.",
    "choices": [
      "0.8",
      "0.64",
      "0.1667",
      "0.6667"
    ],
    "key": 3,
    "why": "Principle: For a continuous random variable, E[g(X)]=∫g(x)f(x)dx over the support. A second moment is not generally the square of the mean.\n\nStep 1: First check normalization: ∫₀¹4x^3dx=1.\n\nStep 2: Multiply the density by x² to form 4x^5.\n\nStep 3: Integrate: E[X²]=[4x^6/6]₀¹=4/6=0.6667.\n\nAnswer: 0.6667.\n\nCheck and interpretation: Since 0<X<1, E[X²]≤E[X]=0.8. The computed second moment satisfies that bound.",
    "family": "pdf-second-moment",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-loaded-divider-2",
    "topic": "networks",
    "prompt": "A 12 V ideal source drives R₁=3 kΩ in series with R₂=7 kΩ. A load R_L=5 kΩ is connected across R₂. Find the load voltage in V, rounded to four decimal places.",
    "choices": [
      "5.9155",
      "8.4",
      "7.5",
      "6.0845"
    ],
    "key": 0,
    "why": "Principle: A load across the lower divider resistor changes that resistor to a parallel equivalent. Apply the divider rule only after forming this equivalent.\n\nStep 1: The lower equivalent is R₂∥RL=7×5/(7+5)=2.9167 kΩ.\n\nStep 2: Total source resistance is 3+2.9167=5.9167 kΩ.\n\nStep 3: The load shares the parallel-branch voltage: VL=12×2.9167/(5.9167)=5.9155 V.\n\nAnswer: 5.9155.\n\nCheck and interpretation: The unloaded voltage is 8.4 V, which is larger. Treating the load as absent overestimates the actual voltage.",
    "family": "loaded-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rc-switching-2",
    "topic": "networks",
    "prompt": "An initially uncharged 3 µF capacitor is charged from a 10 V source through 4 kΩ at t=0. Find vC at t=12 ms, in V. Round to four decimal places.",
    "choices": [
      "3.6788",
      "10",
      "6.3212",
      "8.6466"
    ],
    "key": 2,
    "why": "Principle: The capacitor voltage in a first-order network is the final value plus the initial-to-final difference multiplied by exp(−t/τ).\n\nStep 1: The time constant is RC=4×3 ms=12 ms, using kΩ·µF=ms.\n\nStep 2: The initial voltage is 0 V and the DC final voltage is 10 V.\n\nStep 3: Thus vC(t)=10[1−exp(−t/12 ms)].\n\nStep 4: At the specified t=τ, vC=10(1−e⁻¹)=6.3212 V.\n\nAnswer: 6.3212.\n\nCheck and interpretation: At one time constant charging has completed about 63.2% of the final voltage. The factor e⁻¹ instead describes the remaining voltage error.",
    "family": "rc-switching",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rl-natural-response-2",
    "topic": "networks",
    "prompt": "An inductor of 8 mH carries 0.2 A before being disconnected from its source and allowed to discharge through 4 Ω at t=0. Find current at t=4 ms in A. Round to four decimal places.",
    "choices": [
      "0.0736",
      "0.0271",
      "0.1729",
      "0.1"
    ],
    "key": 1,
    "why": "Principle: Inductor current is continuous through switching when there is no impulse voltage. The source-free RL response is i(t)=i(0⁺)exp(−Rt/L).\n\nStep 1: The initial current after switching is 0.2 A.\n\nStep 2: The time constant is L/R=8/4 ms=2 ms.\n\nStep 3: The requested instant is twice the time constant, so i=0.2e⁻²=0.0271 A.\n\nAnswer: 0.0271.\n\nCheck and interpretation: The resistor dissipates stored magnetic energy and current decays monotonically to zero. The natural-response formula does not contain a charging term 1−e⁻ᵗ/τ.",
    "family": "rl-natural-response",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-ac-power-match-2",
    "topic": "networks",
    "prompt": "An AC Thévenin equivalent has RMS voltage 14 V and impedance (4+j3) Ω. The load impedance can be any passive complex value. What is the maximum average load power in W?",
    "choices": [
      "12.25",
      "24.5",
      "49",
      "9.8"
    ],
    "key": 0,
    "why": "Principle: Maximum average AC power is transferred to the complex-conjugate load: ZL=Zth*. RMS voltage can be used directly in I²R.\n\nStep 1: Choose ZL=4−j3 Ω so the reactances cancel.\n\nStep 2: The total impedance is 8 Ω and RMS current is 14/8 A.\n\nStep 3: Load power is I²RL=(14/8)²×4=12.25 W.\n\nStep 4: Equivalently Pmax=Vth,rms²/(4Rth).\n\nAnswer: 12.25.\n\nCheck and interpretation: Matching the impedance magnitude alone does not cancel reactance. Using peak voltage in the RMS formula would introduce a factor-of-two error.",
    "family": "ac-power-match",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-complex-load-power-2",
    "topic": "networks",
    "prompt": "A sinusoidal source of 22 V RMS is applied across Z=(4+j5) Ω. Find average power absorbed in W, rounded to four decimal places.",
    "choices": [
      "47.2195",
      "75.5881",
      "121",
      "59.0244"
    ],
    "key": 0,
    "why": "Principle: Average power is Vrms² times the real part of admittance. A reactive element exchanges energy but absorbs zero net average power.\n\nStep 1: The admittance is 1/Z=(4−j5)/(41) S.\n\nStep 2: Its real part is R/(R²+X²)=4/41 S.\n\nStep 3: Therefore P=22²×4/41=47.2195 W.\n\nAnswer: 47.2195.\n\nCheck and interpretation: Vrms²/|Z| is apparent power, not real power. The load power factor is R/|Z| and must be included.",
    "family": "complex-load-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-series-resonance-q-2",
    "topic": "networks",
    "prompt": "A series RLC circuit has R=5 Ω, L=3 mH and C=6 µF. Find its quality factor Q, rounded to four decimal places.",
    "choices": [
      "4.4721",
      "111.8034",
      "2.2361",
      "8.9443"
    ],
    "key": 0,
    "why": "Principle: For a series resonant RLC circuit, Q=ω₀L/R=(1/R)√(L/C), where ω₀=1/√(LC).\n\nStep 1: Convert L=3×10⁻³ H and C=6×10⁻⁶ F.\n\nStep 2: The characteristic impedance √(L/C)=√(500)=22.3607 Ω.\n\nStep 3: Divide by the series resistance: Q=22.3607/5=4.4721.\n\nAnswer: 4.4721.\n\nCheck and interpretation: Q is dimensionless. Increasing series resistance dissipates more energy per cycle and lowers Q, which rules out formulas proportional to R.",
    "family": "series-resonance-q",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-current-divider-2",
    "topic": "networks",
    "prompt": "An ideal current source supplies 3 mA into parallel resistors 4 kΩ and 7 kΩ. Find current through the 4 kΩ branch in mA, rounded to four decimal places.",
    "choices": [
      "1.0909",
      "1.9091",
      "8.25",
      "1.7143"
    ],
    "key": 1,
    "why": "Principle: Parallel-branch currents divide in proportion to conductance, or inversely to resistance. The numerator contains the other branch resistance in the two-resistor divider formula.\n\nStep 1: The equivalent resistance is 4×7/(4+7) kΩ.\n\nStep 2: The common node voltage is the source current times this equivalent resistance.\n\nStep 3: Divide that voltage by 4 kΩ to obtain I₁=3×7/(4+7)=1.9091 mA.\n\nAnswer: 1.9091.\n\nCheck and interpretation: Because 4<7, this branch carries more than half the source current. The other branch current is 1.0909 mA, and their sum is 3 mA.",
    "family": "current-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-twoport-z-2",
    "topic": "networks",
    "prompt": "A resistive T network has a 4 Ω series arm at port 1, a 6 Ω shunt arm from the central node to ground, and a 8 Ω series arm at port 2. With currents defined entering both ports, what is z₁₁?",
    "choices": [
      "6 Ω",
      "4 Ω",
      "18 Ω",
      "10 Ω"
    ],
    "key": 3,
    "why": "Principle: The z parameter z₁₁ is V₁/I₁ with I₂=0. An open second port makes the second series arm carry zero current.\n\nStep 1: Set I₂=0 by opening port 2. No voltage drop appears across its series arm.\n\nStep 2: The input current then flows through the port-1 arm and the shunt arm in series.\n\nStep 3: Therefore z₁₁=R₁+Rsh=4+6=10 Ω.\n\nAnswer: 10 Ω.\n\nCheck and interpretation: The port-2 series resistance does not affect z₁₁ under the open-port condition. Shorting port 2 instead would compute a different driving-point condition.",
    "family": "twoport-z",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-charge-sharing-2",
    "topic": "networks",
    "prompt": "A 4 µF capacitor initially at 12 V is connected in parallel, with matching polarities, to an initially uncharged 7 µF capacitor. After settling through a small resistance, what is their common voltage in V?",
    "choices": [
      "4.3636",
      "12",
      "7.6364",
      "33"
    ],
    "key": 0,
    "why": "Principle: For an isolated pair of capacitors, total charge is conserved during redistribution. Electrostatic energy is not conserved because the connecting resistance dissipates energy.\n\nStep 1: The initial total charge is Q=C₁V₁+C₂V₂=4×12+7×0=48 µC.\n\nStep 2: The final parallel capacitance is C₁+C₂=11 µF.\n\nStep 3: The common final voltage is Q/(C₁+C₂)=48/11=4.3636 V.\n\nAnswer: 4.3636.\n\nCheck and interpretation: The result lies between the two initial voltages. Equating initial and final stored energies would incorrectly ignore dissipation during connection.",
    "family": "charge-sharing",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-exponential-convolution-2",
    "topic": "signals",
    "prompt": "For x(t)=e^(−3t)u(t) and h(t)=e^(−5t)u(t), find y(0.5) where y=x*h. Round to four decimal places.",
    "choices": [
      "0.0183",
      "0.0705",
      "0.3052",
      "0.141"
    ],
    "key": 1,
    "why": "Principle: Convolution of two causal exponentials is integrated only over the overlap 0≤τ≤t. The output is a difference of exponentials divided by their rate difference.\n\nStep 1: Write y(t)=∫₀ᵗ e^(−3τ)e^(−5(t−τ))dτ.\n\nStep 2: Factor out e^(−5t) and integrate e^(2τ).\n\nStep 3: This gives y(t)=[e^(−3t)−e^(−5t)]/2 for t≥0.\n\nStep 4: At t=0.5, the value is 0.0705.\n\nAnswer: 0.0705.\n\nCheck and interpretation: Pointwise multiplication of the input and impulse response is not convolution. Since both functions are nonnegative, the convolution must also be nonnegative.",
    "family": "exponential-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-discrete-convolution-2",
    "topic": "signals",
    "prompt": "For x[n]=(0.16)ⁿu[n] and h[n]=(0.69)ⁿu[n], calculate (x*h)[3]. Round to four decimal places.",
    "choices": [
      "0.0013",
      "0.3326",
      "0.4264",
      "0.2132"
    ],
    "key": 2,
    "why": "Principle: For causal discrete sequences, the convolution at index n is a finite sum over m=0,…,n. A finite geometric sum gives a closed form.\n\nStep 1: At n=3, sum aᵐb^(3−m) for m=0,1,2,3.\n\nStep 2: The four terms are b³+ab²+a²b+a³, where a=0.16 and b=0.69.\n\nStep 3: Using (b⁴−a⁴)/(b−a), the sum equals 0.4264.\n\nAnswer: 0.4264.\n\nCheck and interpretation: There are four overlapping terms at index 3, including both endpoints. Omitting m=0 or m=3 drops a valid impulse-response contribution.",
    "family": "discrete-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-alias-folding-2",
    "topic": "signals",
    "prompt": "The signal cos(2π×9000t) is sampled at 15 ksample/s. What positive alias frequency is observed within the first Nyquist band, in kHz?",
    "choices": [
      "9 kHz",
      "24 kHz",
      "7.5 kHz",
      "6 kHz"
    ],
    "key": 3,
    "why": "Principle: Sampling replicates spectra at integer multiples of fs. A real sinusoid is represented by a frequency in the first Nyquist band 0≤f≤fs/2.\n\nStep 1: The original frequency is 9 kHz, above the Nyquist frequency 7.5 kHz.\n\nStep 2: Subtract fs=15 kHz to get -6 kHz. A cosine at a negative frequency has the same samples as its positive-frequency counterpart.\n\nStep 3: Thus the baseband alias is |9−15|=6 kHz.\n\nAnswer: 6 kHz.\n\nCheck and interpretation: The result 6 kHz lies below fs/2=7.5 kHz. The original signal is therefore indistinguishable from this lower-frequency cosine after sampling.",
    "family": "alias-folding",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-lti-sinusoidal-2",
    "topic": "signals",
    "prompt": "A stable LTI system has H(s)=1/(s+3). With input cos(2t), what is the steady-state output amplitude? Round to four decimal places.",
    "choices": [
      "0.2774",
      "0.3333",
      "0.0769",
      "3.6056"
    ],
    "key": 0,
    "why": "Principle: A sinusoid is an eigenfunction of an LTI system. Its steady-state amplitude is multiplied by the frequency-response magnitude at the input angular frequency.\n\nStep 1: Evaluate H(jω) at ω=2 rad/s: H(j2)=1/(3+j2).\n\nStep 2: The denominator magnitude is √(3²+2²)=√13.\n\nStep 3: The input has unit amplitude, so output amplitude is |H(j2)|=1/√13=0.2774.\n\nAnswer: 0.2774.\n\nCheck and interpretation: The squared magnitude is a power ratio, not an amplitude ratio. The decaying transient is excluded by the steady-state qualification.",
    "family": "lti-sinusoidal",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-sequence-energy-2",
    "topic": "signals",
    "prompt": "Find the total energy of x[n]=(0.28)ⁿu[n], rounded to four decimal places.",
    "choices": [
      "1.3889",
      "1.0851",
      "0.0851",
      "0.9273"
    ],
    "key": 1,
    "why": "Principle: Discrete-time energy is the sum of squared magnitudes over every integer index. Causality restricts the nonzero terms to n≥0.\n\nStep 1: Square the magnitude to get |x[n]|²=(0.0784)ⁿ for n≥0.\n\nStep 2: Since |0.28|<1, the geometric series converges.\n\nStep 3: E=Σₙ₌₀∞a²ⁿ=1/(1−a²)=1/(1−0.0784)=1.0851.\n\nAnswer: 1.0851.\n\nCheck and interpretation: The n=0 sample equals one and must be included. Summing x[n] without squaring would give an area-like sum, not energy.",
    "family": "sequence-energy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-shifted-impulse-2",
    "topic": "signals",
    "prompt": "An LTI system has h(t)=e^(−3t)u(t). Its input is δ(t−1)+2δ(t−2). Find y(1.5), rounded to four decimal places.",
    "choices": [
      "9.1865",
      "0.2231",
      "0.4463",
      "0.0111"
    ],
    "key": 1,
    "why": "Principle: Each delayed impulse produces a delayed copy of the impulse response. Causality determines which copies have begun at the observation time.\n\nStep 1: By linearity, y(t)=h(t−1)+2h(t−2).\n\nStep 2: At t=1.5, t−1=0.5 but t−2=−0.5, so the second term is zero.\n\nStep 3: The remaining term is e^(−3×0.5)=0.2231.\n\nAnswer: 0.2231.\n\nCheck and interpretation: Ignoring the unit-step factor would incorrectly include a response to the impulse at t=2 before it has occurred.",
    "family": "shifted-impulse",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-dft-bin-amplitude-2",
    "topic": "signals",
    "prompt": "For N=6, x[n]=cos(2π×2n/N), 0≤n<N. Using X[r]=Σx[n]e^(−j2πrn/N), what is |X[2]|?",
    "choices": [
      "6",
      "1",
      "1.5",
      "3"
    ],
    "key": 3,
    "why": "Principle: A cosine is half the sum of two complex exponentials. The unnormalized DFT gives magnitude N for a complex exponential aligned with a DFT bin.\n\nStep 1: Expand x[n]=(e^(j2π2n/N)+e^(−j2π2n/N))/2.\n\nStep 2: For N=6>4, bins 2 and N−2 are distinct, so each exponential contributes to a different DFT bin.\n\nStep 3: At r=2, the matching exponential contributes N/2=3, while the other sums to zero.\n\nAnswer: 3.\n\nCheck and interpretation: The DFT convention has no 1/N factor in the forward transform. DC and Nyquist cosines need special treatment, but bin 2 is neither for this N.",
    "family": "dft-bin-amplitude",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-fourier-dc-2",
    "topic": "signals",
    "prompt": "For x(t)=e^(−4|t|), define X(ω)=∫₋∞∞x(t)e^(−jωt)dt. Find X(0), rounded to four decimal places.",
    "choices": [
      "0.5",
      "0.25",
      "2",
      "8"
    ],
    "key": 0,
    "why": "Principle: The Fourier transform at zero frequency equals the signed area under the time-domain signal. Even symmetry reduces the integral to twice its positive-time half.\n\nStep 1: Set ω=0 so the complex exponential in the transform becomes one.\n\nStep 2: Since x(t) is even, X(0)=2∫₀∞e^(−4t)dt.\n\nStep 3: The one-sided integral is 1/4, hence X(0)=2/4=0.5.\n\nAnswer: 0.5.\n\nCheck and interpretation: This is an amplitude-area quantity, not energy. Squaring the signal first would produce a different integral.",
    "family": "fourier-dc",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-difference-equation-2",
    "topic": "signals",
    "prompt": "A causal system at initial rest obeys y[n]−0.2y[n−1]=x[n]. For x[n]=(−1)ⁿu[n], what is the amplitude of the asymptotic alternating output? Round to four decimal places.",
    "choices": [
      "1.25",
      "0.8333",
      "0.1667",
      "1.2"
    ],
    "key": 1,
    "why": "Principle: The steady alternating input has discrete-time angular frequency π. A stable system scales it by the magnitude of H(eʲπ).\n\nStep 1: At initial rest, H(z)=1/(1−0.2z⁻¹). The pole magnitude 0.2 is less than one, ensuring a decaying transient.\n\nStep 2: At z=eʲπ=−1, H(−1)=1/(1+0.2).\n\nStep 3: Thus the asymptotic output is [1/(1+0.2)](−1)ⁿ and its amplitude is 0.8333.\n\nAnswer: 0.8333.\n\nCheck and interpretation: Evaluating at z=1 would give the DC gain, not the alternating-input gain. The input switch-on creates a transient that vanishes as n grows.",
    "family": "difference-equation",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-diode-bias-2",
    "topic": "devices",
    "prompt": "An ideal p-n diode has I_S=10 µA, ideality factor 1 and V_T=26 mV. Find the forward voltage needed for 3 mA, in V, rounded to four decimal places.",
    "choices": [
      "0.1484",
      "0.7",
      "0.0286",
      "0.2968"
    ],
    "key": 0,
    "why": "Principle: The ideal Shockley law is I=IS[exp(V/(nVT))−1]. Solve the exponential relationship for voltage rather than assuming a fixed diode drop.\n\nStep 1: Convert IS=10 µA to 0.01 mA, matching the current unit.\n\nStep 2: Rearrange to exp(V/VT)=1+I/IS=1+3/0.01=301.\n\nStep 3: Taking the natural logarithm gives V=0.026 ln(301)=0.1484 V.\n\nAnswer: 0.1484.\n\nCheck and interpretation: A natural logarithm is required because the diode equation uses base e. A fixed 0.7 V approximation is inconsistent with the specified ideal diode parameters.",
    "family": "diode-bias",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-diode-incremental-2",
    "topic": "devices",
    "prompt": "A diode biased at 3 mA has n=1 and V_T=26 mV. A small 10 mV AC source is applied through 4 kΩ, with the DC bias maintained separately. What is the diode AC voltage amplitude in mV? Round to four decimal places.",
    "choices": [
      "10",
      "6.8421",
      "9.9784",
      "0.0216"
    ],
    "key": 3,
    "why": "Principle: Linearize the diode at its bias point using rd=nVT/ID, then solve a voltage divider. This incremental model applies only for sufficiently small AC excursions.\n\nStep 1: The incremental resistance is rd=0.026/(3×10⁻³)=8.6667 Ω.\n\nStep 2: The source resistance is 4000 Ω, so the diode receives fraction rd/(R+rd).\n\nStep 3: Its voltage amplitude is 10×8.6667/(4000+8.6667)=0.0216 mV.\n\nAnswer: 0.0216.\n\nCheck and interpretation: The very small diode voltage compared with VT validates the small-signal approximation. The source’s full 10 mV does not appear across the diode.",
    "family": "diode-incremental",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-active-check-2",
    "topic": "devices",
    "prompt": "An NPN has grounded emitter, β=70, V_BE=0.7 V, R_B=600 kΩ from collector-independent V_CC=12 V to base, and R_C=1.4 kΩ from V_CC to collector. Assuming forward-active operation, find V_CE in V. Round to four decimal places.",
    "choices": [
      "12",
      "11.9736",
      "10.1543",
      "1.8457"
    ],
    "key": 2,
    "why": "Principle: For fixed-base bias in forward-active operation, IB=(VCC−VBE)/RB and IC=βIB. Collector voltage then follows from the resistor drop.\n\nStep 1: The base current is (12−0.7)/600=0.0188 mA.\n\nStep 2: The collector current is 70×0.0188=1.3183 mA.\n\nStep 3: The collector drop is IC RC=1.8457 V.\n\nStep 4: Thus VCE=VCC−ICRC=12−1.8457=10.1543 V.\n\nAnswer: 10.1543.\n\nCheck and interpretation: VCE exceeds VBE=0.7 V here, so the collector-base junction remains reverse biased and the forward-active assumption is self-consistent.",
    "family": "bjt-active-check",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-rpi-2",
    "topic": "devices",
    "prompt": "A BJT at 300 K has collector current 2 mA and β=120. Take V_T=26 mV. Find its hybrid-π input resistance rπ in kΩ, rounded to four decimal places.",
    "choices": [
      "0.013",
      "1.56",
      "9230.7692",
      "0.78"
    ],
    "key": 1,
    "why": "Principle: The hybrid-π resistance is rπ=β/gm, with gm=IC/VT at the operating point. Consistent mA and V units give gm in mS and rπ in kΩ.\n\nStep 1: Compute gm=2/0.026=76.9231 mS.\n\nStep 2: Then rπ=120/76.9231 kΩ.\n\nStep 3: The resulting input resistance is 1.56 kΩ. It relates a small vbe to the resulting small base current.\n\nAnswer: 1.56.\n\nCheck and interpretation: The inverse transconductance 1/gm is not rπ; the factor β is required because base current is smaller than collector current.",
    "family": "bjt-rpi",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-gm-2",
    "topic": "devices",
    "prompt": "A long-channel nMOS in saturation obeys I_D=(K/2)(V_GS−V_TH)² with K=0.3 mA/V². At overdrive 1.2 V, find g_m in mS. Neglect channel-length modulation.",
    "choices": [
      "0.36",
      "0.18",
      "0.432",
      "0.54"
    ],
    "key": 0,
    "why": "Principle: MOS transconductance is the derivative of drain current with respect to gate-source voltage while holding drain voltage fixed.\n\nStep 1: Differentiate ID=(K/2)VOV² to obtain gm=K VOV.\n\nStep 2: Use K=0.3 mA/V² and VOV=1.2 V.\n\nStep 3: Thus gm=0.3×1.2=0.36 mA/V=0.36 mS.\n\nStep 4: As a cross-check, ID=0.216 mA and 2ID/VOV gives the same gm.\n\nAnswer: 0.36.\n\nCheck and interpretation: Using ID/VOV misses a factor of two for the square-law model. The stated K convention explicitly includes the one-half factor.",
    "family": "mos-gm",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-triode-2",
    "topic": "devices",
    "prompt": "An nMOS has K=0.5 mA/V², overdrive V_GS−V_TH=1.2 V, and V_DS=0.14 V. Using the long-channel model, find I_D in mA. Round to four decimal places.",
    "choices": [
      "0.0791",
      "0.36",
      "0.084",
      "0.1582"
    ],
    "key": 0,
    "why": "Principle: For 0≤VDS<VOV the MOSFET is in the triode region, with ID=K[VOV VDS−VDS²/2]. The saturation square law does not apply in this region.\n\nStep 1: Here VDS=0.14 V is below VOV=1.2 V, establishing triode operation.\n\nStep 2: Compute VOV VDS=0.168 V² and VDS²/2=0.0098 V².\n\nStep 3: Multiply their difference by K=0.5 to obtain ID=0.0791 mA.\n\nAnswer: 0.0791.\n\nCheck and interpretation: The VDS²/2 correction distinguishes the triode expression from a purely linear resistor approximation. The specified voltages are positive and produce positive drain current.",
    "family": "mos-triode",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-junction-built-in-2",
    "topic": "devices",
    "prompt": "An abrupt silicon p-n junction at equilibrium has N_D=3.00e+15 cm⁻³, N_A=4.00e+16 cm⁻³ and n_i=10¹⁰ cm⁻³. Taking V_T=26 mV, find the built-in potential in V, rounded to four decimal places.",
    "choices": [
      "0.3279",
      "0.3141",
      "1.4463",
      "0.7231"
    ],
    "key": 3,
    "why": "Principle: For a nondegenerate abrupt junction at thermal equilibrium, Vbi=VT ln(NAND/ni²). The potential balances diffusion against drift.\n\nStep 1: Form the dimensionless concentration ratio NAND/ni²=1.2000e+12.\n\nStep 2: Take its natural logarithm, not the base-10 logarithm.\n\nStep 3: Multiply by 0.026 V to obtain Vbi=0.7231 V.\n\nAnswer: 0.7231.\n\nCheck and interpretation: All carrier concentrations use the same cm⁻³ units, which cancel in the ratio. This internal equilibrium barrier is not an externally extractable terminal voltage.",
    "family": "junction-built-in",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-early-resistance-2",
    "topic": "devices",
    "prompt": "At an operating point a BJT has I_C=0.7 mA and Early voltage V_A=60 V. Using r_o≈V_A/I_C, find r_o in kΩ, rounded to four decimal places.",
    "choices": [
      "42",
      "0.0117",
      "85.7143",
      "42.8571"
    ],
    "key": 2,
    "why": "Principle: The Early effect gives the forward-active BJT a finite output conductance. For VCE much smaller than VA, the output resistance is approximately VA/IC.\n\nStep 1: Use the stated approximation ro≈VA/IC.\n\nStep 2: Since V divided by mA gives kΩ, ro=60/0.7 kΩ.\n\nStep 3: Numerically ro=85.7143 kΩ. A larger bias current would reduce this resistance at fixed Early voltage.\n\nAnswer: 85.7143.\n\nCheck and interpretation: This resistance models the slope of the collector characteristic at fixed base-emitter voltage. It is different from the DC ratio VCE/IC.",
    "family": "early-resistance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-semiconductor-resistivity-2",
    "topic": "devices",
    "prompt": "An n-type bar has electron concentration 3.0e+15 cm⁻³ and mobility 540 cm²/(V·s). Neglect holes and take q=1.6×10⁻¹⁹ C. Find resistivity in Ω·cm, rounded to four decimal places.",
    "choices": [
      "0.2592 Ω·cm",
      "385.8025 Ω·cm",
      "0.0386 Ω·cm",
      "3.858 Ω·cm"
    ],
    "key": 3,
    "why": "Principle: With electrons dominating conduction, conductivity is σ=q n μn and resistivity is its reciprocal. The supplied centimetre-based units yield Ω·cm.\n\nStep 1: Insert q=1.6×10⁻¹⁹, n=3.0e+15 and μn=540.\n\nStep 2: Conductivity is σ=0.2592 S/cm.\n\nStep 3: Therefore ρ=1/σ=3.858 Ω·cm.\n\nAnswer: 3.858 Ω·cm.\n\nCheck and interpretation: Increasing electron concentration or mobility increases conductivity and decreases resistivity. Converting to Ω·m would multiply the numerical Ω·cm value by 0.01.",
    "family": "semiconductor-resistivity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-emitter-degeneration-2",
    "topic": "analog",
    "prompt": "A common-emitter amplifier has g_m=4 mS, collector load 6 kΩ and unbypassed emitter resistance 0.3 kΩ. Take β→∞ and r_o→∞. What is v_o/v_b, rounded to four decimal places?",
    "choices": [
      "-24",
      "10.9091",
      "-10.9091",
      "-20"
    ],
    "key": 2,
    "why": "Principle: Emitter degeneration feeds an emitter voltage back against the base-emitter signal. With infinite β, emitter and collector small-signal currents are equal.\n\nStep 1: Write ic=gm(vb−ve) and ve=ic RE.\n\nStep 2: Then ic(1+gmRE)=gm vb, so ic/vb=gm/(1+gmRE).\n\nStep 3: Since vo=−ic RC, gain is −gmRC/(1+gmRE).\n\nStep 4: Substitution gives −4×6/[1+4×0.3]=-10.9091.\n\nAnswer: -10.9091.\n\nCheck and interpretation: The degeneration reduces the magnitude below the bypassed-emitter value gmRC. The simpler −RC/RE approximation requires gmRE≫1.",
    "family": "emitter-degeneration",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-finite-opamp-gain-2",
    "topic": "analog",
    "prompt": "A non-inverting amplifier uses R_f=12 kΩ and R_g=1 kΩ. Its op-amp has finite DC open-loop gain A=140, infinite input resistance and zero output resistance. Find the closed-loop DC gain, rounded to four decimal places.",
    "choices": [
      "13",
      "140",
      "14.3307",
      "11.8954"
    ],
    "key": 3,
    "why": "Principle: For finite open-loop gain, use vo=A(v+−v−) and the feedback divider v−=βvo. The ideal virtual-short approximation is not exact.\n\nStep 1: The feedback factor is β=Rg/(Rf+Rg)=1/13.\n\nStep 2: Solving vo=A(vin−βvo) gives vo/vin=A/(1+Aβ).\n\nStep 3: This can be written 13/(1+13/140)=11.8954.\n\nAnswer: 11.8954.\n\nCheck and interpretation: The result is slightly smaller than the ideal non-inverting gain 13. A negative-feedback denominator contains a plus sign.",
    "family": "finite-opamp-gain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-weighted-summer-2",
    "topic": "analog",
    "prompt": "An ideal inverting summer has grounded non-inverting input, feedback 10 kΩ, and inputs 0.4 V through 4 kΩ and 0.3 V through 6 kΩ. Assuming linear operation, find output in V.",
    "choices": [
      "1.5",
      "-1.5",
      "-1",
      "-0.7"
    ],
    "key": 1,
    "why": "Principle: At virtual ground, each source drives an input current independently. The op-amp input draws no current, so the feedback branch carries their sum.\n\nStep 1: Input currents are 0.4/4=0.1 mA and 0.3/6=0.05 mA.\n\nStep 2: Their sum is 0.15 mA.\n\nStep 3: The output is the negative feedback-resistor drop: vo=−10×(0.15)=-1.5 V.\n\nAnswer: -1.5.\n\nCheck and interpretation: Different input resistors give different weights. Adding input voltages before applying one divider ratio would discard these weights.",
    "family": "weighted-summer",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-common-source-ro-2",
    "topic": "analog",
    "prompt": "A common-source MOS amplifier has source at AC ground, g_m=2.6 mS, r_o=24 kΩ and drain resistor 7 kΩ to AC ground. Find unloaded midband voltage gain, rounded to four decimal places.",
    "choices": [
      "-18.2",
      "14.0903",
      "-14.0903",
      "-80.6"
    ],
    "key": 2,
    "why": "Principle: The drain sees RD in parallel with the transistor output resistance ro. The controlled drain current gm vgs develops an inverted output across this equivalent load.\n\nStep 1: Effective drain load is RD∥ro=7×24/(7+24)=5.4194 kΩ.\n\nStep 2: The source is at AC ground, so vgs equals input voltage.\n\nStep 3: Gain is −gm(RD∥ro)=−2.6×5.4194=-14.0903.\n\nAnswer: -14.0903.\n\nCheck and interpretation: Finite ro reduces gain magnitude compared with −gmRD. Since mS×kΩ is dimensionless, no additional factor of 1000 is required.",
    "family": "common-source-ro",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-highpass-frequency-2",
    "topic": "analog",
    "prompt": "A coupling capacitor of 14 nF feeds an amplifier input resistance 3 kΩ from an ideal voltage source. Treat the amplifier input as purely resistive. Find the high-pass −3 dB frequency in kHz.",
    "choices": [
      "3.7894 kHz",
      "23.8095 kHz",
      "0.6031 kHz",
      "37.894 kHz"
    ],
    "key": 0,
    "why": "Principle: The coupling capacitor and input resistance form H(s)=sRC/(1+sRC). Its lower cutoff is the frequency at which capacitor reactance magnitude equals R.\n\nStep 1: Use R=3×10³ Ω and C=14×10⁻⁹ F.\n\nStep 2: The corner angular frequency is ωc=1/(RC).\n\nStep 3: Convert to hertz with fc=1/(2πRC), then divide by 1000: fc=3.7894 kHz.\n\nAnswer: 3.7894 kHz.\n\nCheck and interpretation: At the corner, magnitude is 1/√2 of the high-frequency passband value. Confusing ωc with fc introduces a factor of 2π.",
    "family": "highpass-frequency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-inverting-bandwidth-2",
    "topic": "analog",
    "prompt": "A dominant-pole op-amp has GBW=3 MHz. An inverting amplifier uses R_in=3 kΩ and R_f=12 kΩ. Estimate its closed-loop bandwidth in MHz using noise gain.",
    "choices": [
      "0.75 MHz",
      "0.6 MHz",
      "15 MHz",
      "1.5 MHz"
    ],
    "key": 1,
    "why": "Principle: For a single-pole voltage-feedback op-amp, bandwidth is approximately GBW divided by noise gain. An inverting stage has noise gain 1+Rf/Rin, not |signal gain|.\n\nStep 1: The signal gain is −Rf/Rin=−4.\n\nStep 2: Noise gain is 1+Rf/Rin=5.\n\nStep 3: Bandwidth ≈3/5=0.6 MHz.\n\nAnswer: 0.6 MHz.\n\nCheck and interpretation: The distinction between signal gain and noise gain matters most at low inverting gains. The estimate assumes the dominant-pole model and no extra capacitive poles.",
    "family": "inverting-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-slew-amplitude-2",
    "topic": "analog",
    "prompt": "An op-amp has slew rate 2 V/µs. For a sinusoidal output at 70 kHz, what is the maximum peak amplitude in V allowed by slew rate alone?",
    "choices": [
      "4.5473 V",
      "9.0946 V",
      "2.2736 V",
      "28.5714 V"
    ],
    "key": 0,
    "why": "Principle: A sinusoid vp sin(2πft) has maximum slope 2πfvp. Avoiding slew-rate distortion requires that slope not exceed SR.\n\nStep 1: Convert SR to 2×10⁶ V/s and frequency to 70×10³ Hz.\n\nStep 2: Set 2πfVp=SR at the limit.\n\nStep 3: Thus Vp=SR/(2πf)=2×10⁶/(2π×70×10³)=4.5473 V.\n\nAnswer: 4.5473 V.\n\nCheck and interpretation: This is peak amplitude, not peak-to-peak amplitude. Supply rails or small-signal bandwidth may impose a lower practical limit, but they are excluded here.",
    "family": "slew-amplitude",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-source-follower-2",
    "topic": "analog",
    "prompt": "A MOS source follower has g_m=7 mS and effective source load 1.4 kΩ. Neglect body effect and r_o. Find its voltage gain, rounded to four decimal places.",
    "choices": [
      "9.8",
      "0.9074",
      "0.0926",
      "-0.9074"
    ],
    "key": 1,
    "why": "Principle: A source follower develops its output at the source. The resulting source voltage reduces vgs, creating local negative feedback.\n\nStep 1: The current is gm(vin−vo), and this flows through the source load.\n\nStep 2: Write vo=gmRL(vin−vo) and solve for vo/vin=gmRL/(1+gmRL).\n\nStep 3: Here gmRL=9.8, giving gain 0.9074.\n\nAnswer: 0.9074.\n\nCheck and interpretation: The gain is positive and strictly less than one in this model. The reciprocal 1/(1+gmRL) describes the residual gate-source fraction, not the output gain.",
    "family": "source-follower",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-ideal-integrator-2",
    "topic": "analog",
    "prompt": "An ideal inverting integrator uses R=12 kΩ and C=4 µF. Its output is initially zero. A constant 0.14 V input is applied for 0.1 s. Assuming no saturation, what is output at 0.1 s in V?",
    "choices": [
      "0.2917 V",
      "-0.1458 V",
      "-0.2917 V",
      "-0.5833 V"
    ],
    "key": 2,
    "why": "Principle: An ideal inverting integrator obeys vo(t)=vo(0)−(1/RC)∫vin(t)dt. A constant input produces a linear output ramp.\n\nStep 1: RC=12×4×10⁻³=0.048 s.\n\nStep 2: The input-time integral over 0.1 s is 0.14×0.1=0.014 V·s.\n\nStep 3: With zero initial output, vo=−0.014/0.048=-0.2917 V.\n\nAnswer: -0.2917 V.\n\nCheck and interpretation: The minus sign follows from the inverting connection. The stated no-saturation condition permits the ideal ramp calculation without supply-rail clipping.",
    "family": "ideal-integrator",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-ripple-counter-period-2",
    "topic": "digital",
    "prompt": "A 7-bit binary counter starts at zero and is clocked at 14 MHz. How many µs elapse before it first returns to zero, assuming ideal operation?",
    "choices": [
      "4.5714 µs",
      "1792 µs",
      "0.5 µs",
      "9.1429 µs"
    ],
    "key": 3,
    "why": "Principle: An n-bit binary counter repeats after 2ⁿ input clocks. The repeat time is the number of clock periods in a full state cycle.\n\nStep 1: There are 2^7=128 distinct states, including zero.\n\nStep 2: At 14 MHz the clock period is 1/14 µs.\n\nStep 3: The first full wrap occurs after 128/14=9.1429 µs.\n\nAnswer: 9.1429 µs.\n\nCheck and interpretation: The count from zero through all-one is 2ⁿ−1, but another clock is required to return to zero, making the full cycle 2ⁿ clocks.",
    "family": "ripple-counter-period",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-twos-complement-subtract-2",
    "topic": "digital",
    "prompt": "Two unsigned 6-bit operands have values A=11 and B=5. A subtractor computes A−B using 6-bit two’s-complement addition and discards carry out. What unsigned decimal value appears on its output?",
    "choices": [
      "16",
      "58",
      "6",
      "7"
    ],
    "key": 2,
    "why": "Principle: Fixed-width subtraction adds the two’s complement of B and retains only the lowest n bits. This implements arithmetic modulo 2ⁿ.\n\nStep 1: The six-bit two’s complement of B is 64−5=59.\n\nStep 2: Add A to it: 11+59=70.\n\nStep 3: Discard the carry beyond bit 5, equivalently subtract 64, to obtain 6.\n\nAnswer: 6.\n\nCheck and interpretation: The specified A exceeds B, so the unsigned difference is positive and is represented exactly. Discarding carry is part of fixed-width subtraction, not an arithmetic error.",
    "family": "twos-complement-subtract",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-adc-serial-clock-2",
    "topic": "digital",
    "prompt": "A 6-bit SAR ADC outputs one serial word for each of 140 ksample/s. Each frame also contains 2 status bits and 1 idle clock. What minimum serial clock in MHz supports continuous conversion?",
    "choices": [
      "0.84 MHz",
      "1.12 MHz",
      "1.26 MHz",
      "1.4 MHz"
    ],
    "key": 2,
    "why": "Principle: The serial link must provide a clock slot for every conversion bit and every overhead slot in each sample frame.\n\nStep 1: A frame requires 6+2+1=9 clocks.\n\nStep 2: At 140000 frames/s, the required clock is 9×140000=1260000 clocks/s.\n\nStep 3: Divide by 10⁶ to get 1.26 MHz.\n\nAnswer: 1.26 MHz.\n\nCheck and interpretation: Counting only the ADC resolution underestimates the link rate because status and idle slots also consume serial clock periods.",
    "family": "adc-serial-clock",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-synchronous-timing-2",
    "topic": "digital",
    "prompt": "A register-to-register path has t_CQ=1.4 ns, combinational delay 3.6 ns and setup time 1.2 ns. Adverse clock uncertainty consumes another 0.2 ns. What is the maximum clock frequency in MHz?",
    "choices": [
      "156.25 MHz",
      "277.7778 MHz",
      "200 MHz",
      "166.6667 MHz"
    ],
    "key": 0,
    "why": "Principle: For setup timing, one clock period must cover launch clock-to-Q, maximum logic delay, destination setup time and adverse uncertainty.\n\nStep 1: The minimum period is 1.4+3.6+1.2+0.2=6.4 ns.\n\nStep 2: Convert period to frequency with fMHz=1000/Tns.\n\nStep 3: Hence fmax=156.25 MHz. This checks setup timing only.\n\nAnswer: 156.25 MHz.\n\nCheck and interpretation: Hold timing is a separate minimum-delay condition. Adverse uncertainty reduces the available time and therefore is added to the required period.",
    "family": "synchronous-timing",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-memory-chip-count-2",
    "topic": "digital",
    "prompt": "A memory requires 128 K words of 16 bits. Available chips each contain 4 K words of 8 bits. How many chips are needed?",
    "choices": [
      "32",
      "128",
      "34",
      "64"
    ],
    "key": 3,
    "why": "Principle: Memory expansion may require both depth expansion and width expansion. The total chip count is the product of those two independent factors.\n\nStep 1: To make 16-bit words from 8-bit chips, use 16/8=2 chips in parallel per bank.\n\nStep 2: To obtain 128 K words from 4 K-word chips, use 128/4=32 banks.\n\nStep 3: Total chips =2×32=64.\n\nAnswer: 64.\n\nCheck and interpretation: Counting only address-depth banks omits the second chip needed in every bank to supply the upper byte of each 16-bit word.",
    "family": "memory-chip-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-binary-dac-2",
    "topic": "digital",
    "prompt": "An ideal unipolar 6-bit DAC uses v_o=V_ref D/2^N with V_ref=2.4 V. Find output for unsigned input code D=18, in V. Round to four decimal places.",
    "choices": [
      "0.675 V",
      "0.6857 V",
      "0.7125 V",
      "1.35 V"
    ],
    "key": 0,
    "why": "Principle: Use the DAC transfer convention stated in the question: each code increment is Vref/2ᴺ. The largest code remains one LSB below Vref.\n\nStep 1: There are 2^6=64 nominal quantization steps.\n\nStep 2: One LSB is 2.4/64 V.\n\nStep 3: Multiplying by input code 18 gives vo=2.4×18/64=0.675 V.\n\nAnswer: 0.675 V.\n\nCheck and interpretation: Scaling by 2ᴺ−1 would implement an endpoint-normalized convention, which differs from the explicitly supplied DAC law.",
    "family": "binary-dac",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-bitwise-xor-2",
    "topic": "digital",
    "prompt": "Two 5-bit unsigned words encode decimal 6 and 3. Their corresponding bits feed five XOR gates. What is the unsigned decimal value of the output word?",
    "choices": [
      "9",
      "5",
      "2",
      "7"
    ],
    "key": 1,
    "why": "Principle: Bitwise XOR produces one where the operand bits differ and zero where they agree. It corresponds to binary addition without inter-bit carry.\n\nStep 1: Write the operands as 00110 and 00011.\n\nStep 2: XOR corresponding bit positions to obtain 00101.\n\nStep 3: Convert that binary result back to decimal to get 5.\n\nAnswer: 5.\n\nCheck and interpretation: Ordinary decimal addition may differ because it includes carries. OR also differs because it retains a one when both input bits are one.",
    "family": "bitwise-xor",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-flash-comparator-count-2",
    "topic": "digital",
    "prompt": "An ideal 5-bit flash ADC uses a full bank of threshold comparators with one comparator per internal quantization boundary. How many comparators are required?",
    "choices": [
      "31",
      "32",
      "5",
      "16"
    ],
    "key": 0,
    "why": "Principle: An N-bit quantizer divides its input range into 2ᴺ bins. Separating adjacent bins requires one internal threshold between each neighboring pair.\n\nStep 1: The number of output bins is 2^5=32.\n\nStep 2: The number of boundaries between those bins is one fewer.\n\nStep 3: Thus a full flash architecture requires 2^5−1=31 comparators.\n\nAnswer: 31.\n\nCheck and interpretation: The rapid exponential comparator growth explains why flash ADC resolution is expensive in power and silicon area. This count excludes any separate overrange detector.",
    "family": "flash-comparator-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-counter-adc-time-2",
    "topic": "digital",
    "prompt": "An 6-bit counter-type ADC starts its count at zero at the beginning of each conversion. The clock period is 2.4 µs. Using a worst-case budget of 2^N clocks, find the worst-case conversion time in ms.",
    "choices": [
      "153.6 ms",
      "0.0144 ms",
      "0.1536 ms",
      "0.0768 ms"
    ],
    "key": 2,
    "why": "Principle: A counter-type ADC can need a full-scale count search, unlike a SAR converter that needs approximately N decisions. The question specifies the clock-budget convention.\n\nStep 1: The worst-case budget is 2^6=64 clocks.\n\nStep 2: Multiply by 2.4 µs per clock to get 153.6 µs.\n\nStep 3: Convert microseconds to milliseconds by dividing by 1000: 0.1536 ms.\n\nAnswer: 0.1536 ms.\n\nCheck and interpretation: Using N clocks would describe the approximate decision count of a SAR ADC, not the stated counter ramp architecture.",
    "family": "counter-adc-time",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-routh-cubic-bound-2",
    "topic": "control",
    "prompt": "For positive K, a feedback system has characteristic polynomial s³+3s²+7s+K. What is the upper boundary value of K for strict stability?",
    "choices": [
      "10",
      "2.3333",
      "63",
      "21"
    ],
    "key": 3,
    "why": "Principle: For a real cubic, the Routh first-column entries must all have the same positive sign. A zero boundary entry marks loss of strict asymptotic stability.\n\nStep 1: The first two Routh rows begin [1, 7] and [3, K].\n\nStep 2: The s¹ first-column entry is (3×7−K)/3.\n\nStep 3: Along with K>0, positivity requires K<21.\n\nStep 4: Therefore strict stability holds for 0<K<21, and the requested upper boundary is 21.\n\nAnswer: 21.\n\nCheck and interpretation: The boundary itself is excluded from strict stability. Positive polynomial coefficients alone are necessary but not sufficient for a cubic.",
    "family": "routh-cubic-bound",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-second-order-overshoot-2",
    "topic": "control",
    "prompt": "A standard unity-DC-gain second-order system has ω_n=4 rad/s and damping ratio ζ=0.28. Find percentage overshoot to a unit step, rounded to four decimal places.",
    "choices": [
      "39.9997 %",
      "0.4 %",
      "41.493 %",
      "79.9994 %"
    ],
    "key": 0,
    "why": "Principle: For an underdamped standard second-order response, percentage overshoot is 100 exp[−πζ/√(1−ζ²)]. It depends on damping ratio rather than natural frequency.\n\nStep 1: The supplied ζ=0.28 lies strictly between zero and one.\n\nStep 2: Compute √(1−ζ²)=0.96.\n\nStep 3: Insert in the overshoot formula: 100exp[−π×0.28/0.96]=39.9997%.\n\nAnswer: 39.9997 %.\n\nCheck and interpretation: Changing ωn=4 rad/s would change how quickly the peak occurs, but would not change this percentage overshoot with ζ fixed.",
    "family": "second-order-overshoot",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-ramp-error-2",
    "topic": "control",
    "prompt": "A stable unity-negative-feedback system has open loop G(s)=4/[s(s+3)]. What is its unit-ramp steady-state error? Round to four decimal places.",
    "choices": [
      "0.75",
      "1.3333",
      "0",
      "0.4286"
    ],
    "key": 0,
    "why": "Principle: For a type-1 unity-feedback system, unit-ramp steady-state error is 1/Kv, where Kv=lim(s→0)sG(s). Closed-loop stability is required.\n\nStep 1: There is one open-loop pole at the origin, so the system is type 1.\n\nStep 2: Kv=lim(s→0)4/(s+3)=4/3.\n\nStep 3: Hence ess=1/Kv=3/4=0.75.\n\nAnswer: 0.75.\n\nCheck and interpretation: The characteristic polynomial s²+as+gain has positive coefficients here and is stable. A step input would have zero error, whereas a ramp has a finite nonzero error.",
    "family": "ramp-error",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-first-order-settling-2",
    "topic": "control",
    "prompt": "A plant G(s)=4/(s+3) is placed in unity negative feedback. Using the approximation t_s≈4/|closed-loop pole|, find its 2% settling time in s.",
    "choices": [
      "1.3333 s",
      "1 s",
      "0.5714 s",
      "0.1429 s"
    ],
    "key": 2,
    "why": "Principle: Unity negative feedback gives T=G/(1+G). For a real negative pole −α, the response error decays exponentially with time constant 1/α.\n\nStep 1: T(s)=4/(s+3+4)=4/(s+7).\n\nStep 2: The pole is −7, so τ=1/7 s.\n\nStep 3: The specified 2% approximation is ts≈4τ=4/7=0.5714 s.\n\nAnswer: 0.5714 s.\n\nCheck and interpretation: Use the closed-loop pole, not the original plant pole. The exact normalized 2% exponential settling time would be ln(50)/α, close to 4/α.",
    "family": "first-order-settling",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-pole-damping-2",
    "topic": "control",
    "prompt": "A second-order denominator is (s+3)(s+5). What is its damping ratio ζ, rounded to four decimal places?",
    "choices": [
      "3.873",
      "4",
      "1.0328",
      "2.0656"
    ],
    "key": 2,
    "why": "Principle: Compare the expanded polynomial with s²+2ζωns+ωn². Both the linear and constant coefficients are needed to extract the damping ratio.\n\nStep 1: Expand to s²+8s+15.\n\nStep 2: Thus ωn=√15 rad/s and 2ζωn=8.\n\nStep 3: Rearrange: ζ=8/(2√15)=1.0328.\n\nAnswer: 1.0328.\n\nCheck and interpretation: The two distinct real negative poles imply an overdamped system, so ζ must exceed one. This is a useful check on coefficient matching.",
    "family": "pole-damping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-single-pole-phase-2",
    "topic": "control",
    "prompt": "For G(s)=1/(1+0.14s), find phase at ω=4 rad/s in degrees, rounded to four decimal places.",
    "choices": [
      "29.2488 degrees",
      "-90 degrees",
      "-14.6244 degrees",
      "-29.2488 degrees"
    ],
    "key": 3,
    "why": "Principle: The phase of a first-order low-pass is the negative angle of its denominator 1+jωτ. The numerator contributes zero phase.\n\nStep 1: At the given frequency, ωτ=4×0.14=0.56.\n\nStep 2: The denominator angle is arctan(0.56).\n\nStep 3: Therefore ∠G=−arctan(0.56)×180/π=-29.2488 degrees.\n\nAnswer: -29.2488 degrees.\n\nCheck and interpretation: The phase must lie between 0 and −90 degrees for positive frequency. The arctangent result in radians must be converted before reporting degrees.",
    "family": "single-pole-phase",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-step-final-value-2",
    "topic": "control",
    "prompt": "A plant G(s)=4/(s+3) has unity negative feedback and is driven by a unit step reference. Find its final output value, rounded to four decimal places.",
    "choices": [
      "1",
      "0.1429",
      "0.5714",
      "1.3333"
    ],
    "key": 2,
    "why": "Principle: For a stable closed-loop system, the final value of a unit-step response equals its closed-loop DC gain. Unity feedback does not automatically make that gain one.\n\nStep 1: The closed-loop transfer function is T(s)=G/(1+G)=4/(s+7).\n\nStep 2: For a unit step, Y(s)=T(s)/s.\n\nStep 3: By the final-value theorem, y∞=lim(s→0)sY(s)=4/7=0.5714.\n\nAnswer: 0.5714.\n\nCheck and interpretation: The remaining step error is 0.4286. The pole −7 is in the left half-plane, validating the final-value theorem.",
    "family": "step-final-value",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-state-determinant-2",
    "topic": "control",
    "prompt": "A continuous-time state matrix is A=[0 1; −18 −9]. What is the product of its two pole magnitudes?",
    "choices": [
      "9",
      "4.2426",
      "45",
      "18"
    ],
    "key": 3,
    "why": "Principle: The poles are eigenvalues of A. Their product equals det(A), and their individual values can be obtained from the characteristic polynomial.\n\nStep 1: Compute det(sI−A)=s²+9s+18.\n\nStep 2: It factors as (s+3)(s+6), so the poles are −3 and −6.\n\nStep 3: Their magnitudes multiply to 3×6=18.\n\nAnswer: 18.\n\nCheck and interpretation: The trace is the pole sum, −(a+b), rather than their product. Both poles are negative here, so magnitude product agrees with the positive determinant.",
    "family": "state-determinant",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-phase-margin-2",
    "topic": "control",
    "prompt": "A unity-feedback loop has G(s)=K/[s(s+4)]. K is selected so gain crossover is ω_gc=4 rad/s. Find phase margin in degrees.",
    "choices": [
      "90 degrees",
      "135 degrees",
      "45 degrees",
      "180 degrees"
    ],
    "key": 2,
    "why": "Principle: Phase margin is 180 degrees plus open-loop phase at unity-gain crossover. The integrator contributes −90 degrees, and the real pole contributes an additional lag.\n\nStep 1: At ωgc=4, the integrator phase is −90 degrees.\n\nStep 2: The (s+4) denominator term contributes −arctan(ωgc/4)=−45 degrees.\n\nStep 3: Total phase is −135 degrees, so PM=180−135=45 degrees.\n\nAnswer: 45 degrees.\n\nCheck and interpretation: A positive K can achieve the stated crossover: K=ωgc√(ωgc²+4²). K sets magnitude here but contributes no extra phase.",
    "family": "phase-margin",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-capacity-bandwidth-2",
    "topic": "comm",
    "prompt": "An AWGN channel has bandwidth 1.4 MHz and linear SNR=7. Using the stated SNR rounded to four decimals, find Shannon capacity in Mbit/s, rounded to three decimal places.",
    "choices": [
      "4.2 Mbit/s",
      "2.1 Mbit/s",
      "8.4 Mbit/s",
      "3.9303 Mbit/s"
    ],
    "key": 0,
    "why": "Principle: Shannon capacity for a bandlimited AWGN channel is C=B log₂(1+SNR). With B in MHz, the resulting capacity is in Mbit/s.\n\nStep 1: Use linear SNR=7, so the logarithm argument is 8.\n\nStep 2: Compute log₂(1+SNR)≈3 bit/s/Hz.\n\nStep 3: Multiply by 1.4 MHz to obtain approximately 4.200 Mbit/s.\n\nAnswer: 4.2 Mbit/s.\n\nCheck and interpretation: Omitting the +1 is a high-SNR approximation and is not the exact Shannon expression. Capacity is a theoretical upper bound, not an assured payload rate.",
    "family": "capacity-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-qam-raised-cosine-2",
    "topic": "comm",
    "prompt": "An M-QAM link with M=16 carries 6 Mbit/s before overhead and uses raised-cosine pulse shaping with roll-off α=0.24. What is its ideal RF null-to-null bandwidth in MHz?",
    "choices": [
      "1.5 MHz",
      "7.44 MHz",
      "0.93 MHz",
      "1.86 MHz"
    ],
    "key": 3,
    "why": "Principle: An M-ary symbol carries log₂M bits. For raised-cosine shaping, the real passband null-to-null bandwidth is (1+α) times symbol rate.\n\nStep 1: Each symbol carries log₂(16)=4 bits.\n\nStep 2: The symbol rate is Rs=6/4=1.5 Mbaud.\n\nStep 3: RF bandwidth is (1+0.24)Rs=1.86 MHz.\n\nAnswer: 1.86 MHz.\n\nCheck and interpretation: The one-sided baseband bandwidth is half this passband bandwidth. Reporting that baseband value would introduce a factor-of-two error.",
    "family": "qam-raised-cosine",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-am-efficiency-2",
    "topic": "comm",
    "prompt": "A conventional single-tone AM transmitter has carrier power 14 W and modulation index 0.3. Find useful-sideband power as a percentage of total transmitted power.",
    "choices": [
      "4.5 %",
      "23.0769 %",
      "2.1531 %",
      "4.3062 %"
    ],
    "key": 3,
    "why": "Principle: In conventional AM, the two sidebands together carry Pc m²/2 while the carrier still consumes Pc. Efficiency is sideband power divided by total power.\n\nStep 1: Sideband power is 14×0.3²/2=0.63 W.\n\nStep 2: Total power is Pc(1+m²/2)=14.63 W.\n\nStep 3: Efficiency is 100×m²/(2+m²)=4.3062%.\n\nAnswer: 4.3062 %.\n\nCheck and interpretation: Carrier power cancels from the efficiency ratio. Dividing sideband power by carrier power alone would overestimate useful-power efficiency.",
    "family": "am-efficiency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-fm-carson-2",
    "topic": "comm",
    "prompt": "A message has maximum frequency 4 kHz. An FM modulator produces peak deviation 7 kHz. Using Carson’s rule, what approximate transmission bandwidth in kHz is required?",
    "choices": [
      "14 kHz",
      "8 kHz",
      "11 kHz",
      "22 kHz"
    ],
    "key": 3,
    "why": "Principle: Carson’s rule estimates practical FM bandwidth as B≈2(Δf+fm), incorporating both frequency deviation and message bandwidth.\n\nStep 1: Identify peak deviation Δf=7 kHz, rather than peak-to-peak deviation.\n\nStep 2: Add the highest message frequency: Δf+fm=7+4=11 kHz.\n\nStep 3: Double the sum for the full passband width: B≈22 kHz.\n\nAnswer: 22 kHz.\n\nCheck and interpretation: This is an occupied-bandwidth estimate. Exact FM spectra have infinitely many sidebands, so the result is not a strict mathematical bandlimit.",
    "family": "fm-carson",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-pcm-sqnr-2",
    "topic": "comm",
    "prompt": "A full-scale sinusoid is quantized by an ideal uniform 6-bit quantizer. Under the uniform quantization-noise model, estimate SQNR in dB to four decimal places.",
    "choices": [
      "36.1236 dB",
      "31.8639 dB",
      "37.8845 dB",
      "43.9051 dB"
    ],
    "key": 2,
    "why": "Principle: For a full-scale sinusoid and uniform quantization error with variance Δ²/12, SQNR≈6.0206N+1.7609 dB.\n\nStep 1: The sinusoid signal power is A²/2. For a span of 2A, quantization step is Δ=2A/2ᴺ.\n\nStep 2: Dividing A²/2 by Δ²/12 gives SQNR=(3/2)2^(2N).\n\nStep 3: Taking 10log₁₀ gives 10log₁₀(3/2)+20Nlog₁₀2.\n\nStep 4: For N=6, this is 37.8845 dB.\n\nAnswer: 37.8845 dB.\n\nCheck and interpretation: The 1.76 dB offset comes from the full-scale sinusoidal input assumption. A smaller input amplitude reduces actual SQNR.",
    "family": "pcm-sqnr",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-binary-entropy-2",
    "topic": "comm",
    "prompt": "An independent binary source emits 1 with probability 0.1 and 0 with probability 0.9. Find its entropy in bits/symbol, rounded to four decimal places.",
    "choices": [
      "0.469 bits/symbol",
      "1 bits/symbol",
      "3.3219 bits/symbol",
      "0.2345 bits/symbol"
    ],
    "key": 0,
    "why": "Principle: Entropy is the probability-weighted average information content, H=−Σp log₂p. Both symbols contribute even when their probabilities differ.\n\nStep 1: The information contribution of 1 is −0.1log₂(0.1).\n\nStep 2: The information contribution of 0 is −0.9log₂(0.9).\n\nStep 3: Adding them gives H=0.469 bits per source symbol.\n\nAnswer: 0.469 bits/symbol.\n\nCheck and interpretation: Binary entropy cannot exceed 1 bit/symbol and is maximal for equal probabilities. It decreases when one outcome becomes easier to predict.",
    "family": "binary-entropy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-coded-throughput-2",
    "topic": "comm",
    "prompt": "A 16-ary modulation runs at 1.4 Mbaud using a code of rate 0.55. Ignore all other overhead. What is the information-bit rate in Mbit/s?",
    "choices": [
      "5.6 Mbit/s",
      "10.1818 Mbit/s",
      "3.08 Mbit/s",
      "0.77 Mbit/s"
    ],
    "key": 2,
    "why": "Principle: A code rate r means r information bits per transmitted coded bit. Modulation carries log₂M coded bits per symbol.\n\nStep 1: The modulation carries 4 coded bits per symbol.\n\nStep 2: At 1.4 Mbaud the coded rate is 5.6 Mbit/s.\n\nStep 3: Multiplying by code rate 0.55 yields information rate 3.08 Mbit/s.\n\nAnswer: 3.08 Mbit/s.\n\nCheck and interpretation: Coding adds redundancy, so the information rate must be below the raw coded-bit rate. Dividing by code rate would predict the opposite.",
    "family": "coded-throughput",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-receiver-noise-2",
    "topic": "comm",
    "prompt": "A matched receiver has noise figure 3 dB and bandwidth 3 MHz. At T₀=290 K, with k_B=1.38×10⁻²³ J/K, find its equivalent total input-referred noise power Fk_BT₀B in pW.",
    "choices": [
      "0.024 pW",
      "0.012 pW",
      "0.2396 pW",
      "0.0024 pW"
    ],
    "key": 0,
    "why": "Principle: Noise factor F is a linear power ratio and equals 10^(NF/10). The specified total input-referred noise is F times the thermal input-noise reference.\n\nStep 1: Convert NF=3 dB to F=10^(3/10)=1.9953.\n\nStep 2: The thermal reference is kT₀B=1.38×10⁻²³×290×3×10⁶ W.\n\nStep 3: Multiply by F and convert W to pW by multiplying by 10¹², giving 0.024 pW.\n\nAnswer: 0.024 pW.\n\nCheck and interpretation: The receiver-added equivalent noise alone would use (F−1)kT₀B. The question explicitly requests total FkT₀B, including source thermal noise.",
    "family": "receiver-noise",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-ebn0-conversion-2",
    "topic": "comm",
    "prompt": "A digital link has received signal-to-noise ratio 12 dB measured over bandwidth B. Its bit rate satisfies R_b/B=4 bit/s/Hz. Find E_b/N₀ in dB.",
    "choices": [
      "18.0206 dB",
      "5.9794 dB",
      "3 dB",
      "3.9622 dB"
    ],
    "key": 1,
    "why": "Principle: Since SNR=P/(N₀B) and Eb=P/Rb, the linear relation is Eb/N₀=SNR×B/Rb. Decibels convert multiplication to addition.\n\nStep 1: The bandwidth-to-bit-rate ratio is B/Rb=1/4.\n\nStep 2: Thus (Eb/N₀)dB=SNRdB−10log₁₀(Rb/B).\n\nStep 3: Substitute 12−10log₁₀(4)=5.9794 dB.\n\nAnswer: 5.9794 dB.\n\nCheck and interpretation: For spectral efficiency above one bit/s/Hz, Eb/N₀ in dB is smaller than the measured SNR in dB. A linear ratio must not be reported as a decibel value.",
    "family": "ebn0-conversion",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-complex-load-power-2",
    "topic": "em",
    "prompt": "A lossless 50 Ω transmission line is terminated by (30−j18) Ω. If incident average power is 12 mW, find average load power in mW, rounded to four decimal places.",
    "choices": [
      "10.7079 mW",
      "1.2921 mW",
      "8.0624 mW",
      "12 mW"
    ],
    "key": 0,
    "why": "Principle: At a lossless line termination, the reflected power fraction is |Γ|², where Γ=(ZL−Z0)/(ZL+Z0). Delivered power is the remaining fraction of incident power.\n\nStep 1: Compute |Γ|²=[(30−50)²+18²]/[(30+50)²+18²].\n\nStep 2: This gives reflected fraction 0.1077.\n\nStep 3: Load power is 12(1−0.1077)=10.7079 mW.\n\nAnswer: 10.7079 mW.\n\nCheck and interpretation: Using 1−|Γ| rather than 1−|Γ|² confuses voltage amplitude with power. A passive real part of the load ensures delivered power is nonnegative.",
    "family": "complex-load-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-quarter-wave-transform-2",
    "topic": "em",
    "prompt": "A lossless quarter-wave transmission line has characteristic impedance 50 Ω and load resistance 120 Ω. What is input resistance in Ω?",
    "choices": [
      "20.8333 Ω",
      "120 Ω",
      "50 Ω",
      "288 Ω"
    ],
    "key": 0,
    "why": "Principle: At an electrical length of π/2, a lossless line inverts the load impedance: Zin=Z0²/ZL. This is a frequency-specific impedance transformation.\n\nStep 1: Use Z0=50 Ω and ZL=120 Ω.\n\nStep 2: Square the line impedance: Z0²=2500 Ω².\n\nStep 3: Divide by the load: Zin=2500/120=20.8333 Ω.\n\nAnswer: 20.8333 Ω.\n\nCheck and interpretation: A line one-half wavelength long would reproduce the load instead. The quarter-wave condition is essential to the inversion formula.",
    "family": "quarter-wave-transform",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-vswr-reflected-power-2",
    "topic": "em",
    "prompt": "A lossless line has VSWR=1.7. What percentage of incident power is reflected? Round to four decimal places.",
    "choices": [
      "25.9259 %",
      "93.2785 %",
      "6.7215 %",
      "3.3608 %"
    ],
    "key": 2,
    "why": "Principle: First convert VSWR to voltage-reflection magnitude, then square that magnitude to obtain the reflected power fraction.\n\nStep 1: From S=(1+|Γ|)/(1−|Γ|), rearrange |Γ|=(S−1)/(S+1).\n\nStep 2: For S=1.7, |Γ|=0.2593.\n\nStep 3: The reflected percentage is 100|Γ|²=6.7215%.\n\nAnswer: 6.7215 %.\n\nCheck and interpretation: VSWR itself is an amplitude ratio along the standing wave, not a power-reflection ratio. A matched line has S=1 and zero reflected power.",
    "family": "vswr-reflected-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-waveguide-velocity-2",
    "topic": "em",
    "prompt": "An air-filled rectangular guide has broad wall a=2.4 cm and carries TE₁₀ at 12 GHz. Taking c=3×10⁸ m/s, find group velocity divided by c, rounded to four decimal places.",
    "choices": [
      "0.8537",
      "1.1714",
      "0.5208",
      "0.7287"
    ],
    "key": 0,
    "why": "Principle: For a lossless air-filled waveguide, TE group velocity is vg=c√[1−(fc/f)²]. It is lower than c for a propagating mode above cutoff.\n\nStep 1: TE₁₀ cutoff is fc=c/(2a)=6.25 GHz after converting centimetres to metres.\n\nStep 2: The operating frequency 12 GHz exceeds cutoff, so propagation is possible.\n\nStep 3: Compute vg/c=√[1−(6.25/12)²]=0.8537.\n\nAnswer: 0.8537.\n\nCheck and interpretation: The reciprocal factor would give phase velocity divided by c. Phase velocity can exceed c in a waveguide while group velocity remains below c.",
    "family": "waveguide-velocity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-dielectric-impedance-2",
    "topic": "em",
    "prompt": "A uniform plane wave propagates in a lossless nonmagnetic dielectric with relative permittivity 4. Taking free-space impedance as 377 Ω, find intrinsic impedance in Ω.",
    "choices": [
      "754 Ω",
      "94.25 Ω",
      "188.5 Ω",
      "1508 Ω"
    ],
    "key": 2,
    "why": "Principle: Intrinsic impedance of a lossless medium is η=√(μ/ε). For μr=1, it reduces to η0/√εr.\n\nStep 1: Set μ=μ0 and ε=4ε0.\n\nStep 2: Then η=√(μ0/ε0)/√4=377/√4.\n\nStep 3: The resulting impedance is 188.5 Ω, which relates electric-field amplitude to magnetic-field amplitude.\n\nAnswer: 188.5 Ω.\n\nCheck and interpretation: The refractive index is √εr, while intrinsic impedance varies inversely with it for a nonmagnetic medium. Relative permittivity is dimensionless.",
    "family": "dielectric-impedance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-faraday-loop-current-2",
    "topic": "em",
    "prompt": "A 3-turn coil has area 0.03 m² per turn and resistance 7 Ω. Uniform normal flux density is B(t)=0.14cos(140t) T. Neglect inductance. Find peak induced current in A.",
    "choices": [
      "0.084 A",
      "0.0018 A",
      "0.252 A",
      "0.504 A"
    ],
    "key": 2,
    "why": "Principle: Faraday’s law uses the time derivative of total flux linkage NΦ. For a sinusoidal normal field, peak induced emf is NABpeakω.\n\nStep 1: Flux linkage is λ(t)=NAB(t)=3×0.03×0.14cos(140t).\n\nStep 2: Differentiation gives peak emf N A Bpeak ω=1.764 V.\n\nStep 3: With inductance neglected, peak current is emfpeak/R=1.764/7=0.252 A.\n\nAnswer: 0.252 A.\n\nCheck and interpretation: The angular frequency is already in rad/s, so no extra 2π is needed. Lenz’s law specifies the current direction; only the peak magnitude is requested.",
    "family": "faraday-loop-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-skin-depth-2",
    "topic": "em",
    "prompt": "A good nonmagnetic conductor has σ=10⁷ S/m and μ=4π×10⁻⁷ H/m. At 3 MHz, find skin depth in µm using δ=√[2/(ωμσ)].",
    "choices": [
      "91.8881 µm",
      "129.9495 µm",
      "64.9747 µm",
      "918.8815 µm"
    ],
    "key": 0,
    "why": "Principle: In a good conductor, fields decay exponentially into the material. Skin depth is the distance over which field amplitude falls by a factor e.\n\nStep 1: Convert angular frequency: ω=2π×3×10⁶ rad/s.\n\nStep 2: Insert ω, μ=4π×10⁻⁷ and σ=10⁷ into δ=√[2/(ωμσ)].\n\nStep 3: The result in metres is 9.1888e-5 m. Multiplying by 10⁶ gives 91.8881 µm.\n\nAnswer: 91.8881 µm.\n\nCheck and interpretation: Skin depth scales as 1/√f and becomes smaller at higher frequency. Confusing hertz with angular frequency changes the numerical result.",
    "family": "skin-depth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-friis-link-2",
    "topic": "em",
    "prompt": "In a free-space far-field link, transmit power is 3 W, linear antenna gains are G_t=2 and G_r=3, separation is 120 m, and frequency is 1.2 GHz. With c=3×10⁸ m/s and perfect alignment/matching, find received power in nW.",
    "choices": [
      "494.7323 nW",
      "82.4554 nW",
      "1978.9294 nW",
      "123.6831 nW"
    ],
    "key": 0,
    "why": "Principle: The Friis formula is Pr=PtGtGr[λ/(4πR)]² for a matched free-space far-field link. Gains here are linear rather than decibels.\n\nStep 1: The wavelength is λ=c/f=0.3/1.2=0.25 m.\n\nStep 2: The propagation factor is [0.25/(4π×120)]².\n\nStep 3: Multiply by PtGtGr=3×2×3 and convert W to nW to obtain 494.7323 nW.\n\nAnswer: 494.7323 nW.\n\nCheck and interpretation: Power falls with separation squared. Omitting either antenna gain or using dB-valued gains directly would change the result.",
    "family": "friis-link",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-poynting-average-2",
    "topic": "em",
    "prompt": "A uniform plane wave in free space has peak electric field 14 V/m. Taking η₀=377 Ω, find time-average power density in W/m².",
    "choices": [
      "0.5199 W/m²",
      "36946 W/m²",
      "0.2599 W/m²",
      "0.0371 W/m²"
    ],
    "key": 2,
    "why": "Principle: For a sinusoidal plane wave, the average Poynting magnitude is Epeak Hpeak/2=Epeak²/(2η). Peak and RMS field conventions must be distinguished.\n\nStep 1: The peak magnetic field is Hpeak=Epeak/η₀=14/377 A/m.\n\nStep 2: Average power density is one-half the product of the peak field amplitudes.\n\nStep 3: Thus Sav=14²/(2×377)=0.2599 W/m².\n\nAnswer: 0.2599 W/m².\n\nCheck and interpretation: Using E²/η without the one-half factor is correct only when E denotes RMS field. The problem explicitly supplies peak field.",
    "family": "poynting-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-combined-work-2",
    "topic": "apt",
    "prompt": "A completes a job in 6 days and B in 10 days at constant rates. They start together and work without interference. In how many days is the job complete?",
    "choices": [
      "16 days",
      "8 days",
      "15 days",
      "3.75 days"
    ],
    "key": 3,
    "why": "Principle: Independent work rates add. A completion time must be converted into a fraction of the job completed per unit time before combining workers.\n\nStep 1: A completes 1/6 of the job per day and B completes 1/10.\n\nStep 2: Their combined rate is (6+10)/(6×10) jobs/day.\n\nStep 3: Time is the reciprocal, 6×10/(6+10)=3.75 days.\n\nAnswer: 3.75 days.\n\nCheck and interpretation: The combined time is less than 6 days, the faster individual time. Averaging the completion times would fail this basic check.",
    "family": "combined-work",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-equal-distance-speed-2",
    "topic": "apt",
    "prompt": "A traveller covers 30 km at 34 km/h and the next 30 km at 54 km/h. Ignoring stops, what is the overall average speed in km/h?",
    "choices": [
      "44 km/h",
      "42.8486 km/h",
      "41.7273 km/h",
      "20.8636 km/h"
    ],
    "key": 2,
    "why": "Principle: Average speed is total distance divided by total time. Equal distances at different speeds lead to a harmonic mean, not an arithmetic mean.\n\nStep 1: Total distance is 60 km.\n\nStep 2: Travel time is 30/34+30/54 h.\n\nStep 3: Divide distance by time: vavg=2v₁v₂/(v₁+v₂)=41.7273 km/h.\n\nAnswer: 41.7273 km/h.\n\nCheck and interpretation: More time is spent on the slower segment, so the average is below the arithmetic mean of the two speeds. The common segment distance cancels.",
    "family": "equal-distance-speed",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-markup-discount-2",
    "topic": "apt",
    "prompt": "An item is marked 24% above its cost price and then sold at a 7% discount on marked price. What is the net profit percentage relative to cost?",
    "choices": [
      "17 %",
      "15.32 %",
      "31 %",
      "7.66 %"
    ],
    "key": 1,
    "why": "Principle: Markup is based on cost while discount is based on marked price. Successive percentage operations multiply their scale factors.\n\nStep 1: Take cost as 100 units. Marked price is 100×(1+24/100)=124.\n\nStep 2: Selling price is 124×(1−7/100)=115.32.\n\nStep 3: Profit percentage on cost is selling price minus 100, namely 15.32%.\n\nAnswer: 15.32 %.\n\nCheck and interpretation: Simply subtracting discount percentage from markup percentage ignores their different bases. The multiplicative calculation also works when the net result is a loss.",
    "family": "markup-discount",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-committee-selection-2",
    "topic": "apt",
    "prompt": "A committee of 4 people is selected uniformly from 10 candidates, including two named candidates A and B. What is the probability both A and B are selected?",
    "choices": [
      "0.4",
      "0.1333",
      "0.16",
      "0.3333"
    ],
    "key": 1,
    "why": "Principle: Committee selection is without replacement. Count committees that contain both named people and divide by the count of all equally likely committees.\n\nStep 1: All committees number C(10,4).\n\nStep 2: With A and B already included, choose the remaining 2 members from 8, giving C(8,2).\n\nStep 3: Their ratio simplifies to r(r−1)/[n(n−1)]=4×3/(10×9)=0.1333.\n\nAnswer: 0.1333.\n\nCheck and interpretation: Multiplying r/n by itself incorrectly treats the two inclusion events as independent. The second inclusion probability changes after the first is fixed.",
    "family": "committee-selection",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-pipes-drain-2",
    "topic": "apt",
    "prompt": "An inlet fills an empty tank in 4 hours. A drain empties a full tank in 9 hours. Both are opened together when the tank is empty, with constant flow rates. How long until it fills?",
    "choices": [
      "2.7692 hours",
      "7.2 hours",
      "9 hours",
      "5 hours"
    ],
    "key": 1,
    "why": "Principle: The inlet contributes a positive fill rate and the drain a negative fill rate. Net filling time is the reciprocal of their rate difference.\n\nStep 1: The inlet rate is 1/4 tank/h and drain rate is 1/9 tank/h.\n\nStep 2: Net rate is 1/4−1/9=5/[4×9] tank/h.\n\nStep 3: Thus filling time is 4×9/5=7.2 hours.\n\nAnswer: 7.2 hours.\n\nCheck and interpretation: The drain makes filling slower than the inlet alone, so the answer must exceed the inlet’s filling time. Adding rates would describe two inlets.",
    "family": "pipes-drain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-updated-average-2",
    "topic": "apt",
    "prompt": "The average of 6 observations is 22. One observation equal to 12 is removed. What is the mean of the remaining observations?",
    "choices": [
      "17",
      "24",
      "20",
      "12"
    ],
    "key": 1,
    "why": "Principle: Recover the original total from mean times count, subtract the removed observation, then divide by the new count.\n\nStep 1: The original sum is 6×22=132.\n\nStep 2: After removing 12, the sum becomes 120 and the count becomes 5.\n\nStep 3: The new mean is 120/5=24.\n\nAnswer: 24.\n\nCheck and interpretation: The removed value lies below the original mean, so removing it raises the mean. Dividing by the original count would miss the count change.",
    "family": "updated-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-compound-growth-2",
    "topic": "apt",
    "prompt": "A population grows at 3% per year compounded annually for two years. What is the total percentage increase over its initial value?",
    "choices": [
      "6 %",
      "6.09 %",
      "9 %",
      "3.045 %"
    ],
    "key": 1,
    "why": "Principle: Annual compounding applies each year’s growth to the previous year’s enlarged population. The two-year growth factor is (1+r)².\n\nStep 1: Convert the annual percentage to rate r=3/100.\n\nStep 2: After two years, final/initial=(1+3/100)².\n\nStep 3: Subtract one and multiply by 100 to obtain total growth 6.09%.\n\nAnswer: 6.09 %.\n\nCheck and interpretation: The result exceeds the simple two-year increase 6% because the first year’s increase also grows in the second year.",
    "family": "compound-growth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-arithmetic-sum-2",
    "topic": "apt",
    "prompt": "A production schedule makes 4 units on day 1 and increases output by 3 units each successive day. How many units are made over the first 12 days?",
    "choices": [
      "246 units",
      "444 units",
      "84 units",
      "282 units"
    ],
    "key": 0,
    "why": "Principle: Daily outputs form an arithmetic progression. Its total is the number of terms times the average of the first and last terms.\n\nStep 1: First output a=4; common difference d=3.\n\nStep 2: Day-12 output is a+(n−1)d=4+11×3=37.\n\nStep 3: Total is n[2a+(n−1)d]/2=12×[4+37]/2=246 units.\n\nAnswer: 246 units.\n\nCheck and interpretation: There are n−1 increases between the first and nth days. Using n increases would shift every endpoint calculation by one day.",
    "family": "arithmetic-sum",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-without-replacement-2",
    "topic": "apt",
    "prompt": "A box contains 7 working and 5 defective components. Two are drawn randomly without replacement. What is the probability that both work?",
    "choices": [
      "0.3403",
      "0.3182",
      "0.5833",
      "0.6818"
    ],
    "key": 1,
    "why": "Principle: Without replacement, the second draw’s probabilities depend on the first draw. Use the multiplication rule with a conditional probability.\n\nStep 1: The first component works with probability 7/12.\n\nStep 2: If it works, 6 working components remain among 11 total.\n\nStep 3: Multiply: P(both work)=(7/12)×(6/11)=0.3182.\n\nAnswer: 0.3182.\n\nCheck and interpretation: Squaring the first-draw probability would apply to replacement or independent draws. Here taking out a working component slightly lowers the next success probability.",
    "family": "without-replacement",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-matrix-power-3",
    "topic": "math",
    "prompt": "A 2×2 matrix A has trace 10 and determinant 24. What is trace(A³)?",
    "choices": [
      "1000",
      "13824",
      "52",
      "280"
    ],
    "key": 3,
    "why": "Principle: For a 2×2 matrix, trace(A³)=(trace A)³−3(det A)(trace A). This follows from the eigenvalue sum and product, even when the matrix is not diagonalizable.\n\nStep 1: Let the eigenvalues be λ₁ and λ₂. Then λ₁+λ₂=10 and λ₁λ₂=24.\n\nStep 2: Expand (λ₁+λ₂)³=λ₁³+λ₂³+3λ₁λ₂(λ₁+λ₂).\n\nStep 3: Rearrange to get trace(A³)=10³−3×24×10=280.\n\nAnswer: 280.\n\nCheck and interpretation: The eigenvalues here are 4 and 6, whose cubes add to the same result. Cubing the trace directly retains unwanted cross terms.",
    "family": "matrix-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-conditional-binomial-3",
    "topic": "math",
    "prompt": "5 packets are transmitted independently, each with error probability 0.2. Given that at least one packet is erroneous, what is the probability that exactly one is erroneous? Round to four decimal places.",
    "choices": [
      "0.4096",
      "0.6723",
      "0.3908",
      "0.6092"
    ],
    "key": 3,
    "why": "Principle: A conditional probability is the probability of the intersection divided by the conditioning-event probability. The error count has a binomial distribution.\n\nStep 1: Let X count erroneous packets: X~Binomial(5,0.2).\n\nStep 2: P(X=1)=C(5,1)×0.2×0.8^4=0.4096.\n\nStep 3: P(X≥1)=1−P(X=0)=1−0.8^5=0.6723.\n\nStep 4: Since {X=1} is contained in {X≥1}, divide the first probability by the second: 0.6092.\n\nAnswer: 0.6092.\n\nCheck and interpretation: The conditional probability is larger than the unconditional probability of exactly one error because all zero-error trials have been excluded.",
    "family": "conditional-binomial",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-exponential-interval-3",
    "topic": "math",
    "prompt": "A component lifetime T is exponentially distributed with mean 4 hours. Given T>4 hours, find P(2T is between 16 and 24 hours | T>4 hours). Round to four decimal places.",
    "choices": [
      "0.0855",
      "0.3679",
      "0.6321",
      "0.2325"
    ],
    "key": 3,
    "why": "Principle: The exponential distribution is memoryless: after surviving a specified time, the residual lifetime has the same distribution as the original lifetime.\n\nStep 1: The event 16<2T<24 is equivalent to 8<T<12.\n\nStep 2: The survival function is P(T>t)=exp(−t/4).\n\nStep 3: Conditioning on T>4 gives [e⁻²−e⁻³]/e⁻¹=e⁻¹−e⁻².\n\nStep 4: Numerically the probability is 0.2325. The strict endpoints do not matter for a continuous distribution.\n\nAnswer: 0.2325.\n\nCheck and interpretation: Using the unconditional interval probability would omit the normalization for the component already having survived one mean lifetime.",
    "family": "exponential-interval",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-double-integral-3",
    "topic": "math",
    "prompt": "Evaluate ∫₀¹ ∫₀ˣ 4y^3 dy dx. Round to four decimal places.",
    "choices": [
      "0.25",
      "0.8",
      "0.2",
      "0.1667"
    ],
    "key": 2,
    "why": "Principle: In an iterated integral the inner variable is integrated first, while the outer variable is treated as a constant bound.\n\nStep 1: The inner antiderivative of 4y^3 is y^4.\n\nStep 2: Evaluating at y=x and y=0 leaves x^4.\n\nStep 3: The remaining integral is ∫₀¹x^4dx=[x^5/5]₀¹=1/5=0.2.\n\nAnswer: 0.2.\n\nCheck and interpretation: The triangular integration region is 0≤y≤x≤1. Replacing the upper inner limit by 1 would incorrectly change the region to a square.",
    "family": "double-integral",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-ode-laplace-3",
    "topic": "math",
    "prompt": "A causal system obeys y″+10y′+24y=e⁻ᵗu(t), with y(0⁻)=y′(0⁻)=0. What is Y(s) evaluated at s=1? Round to four decimal places.",
    "choices": [
      "0.0286",
      "0.0417",
      "0.0143",
      "0.0909"
    ],
    "key": 2,
    "why": "Principle: With zero initial conditions, differentiation in the Laplace domain multiplies by s. The input transform of e⁻ᵗu(t) is 1/(s+1).\n\nStep 1: Transform the differential equation: [s²+10s+24]Y(s)=1/(s+1).\n\nStep 2: Factor the quadratic as (s+4)(s+6).\n\nStep 3: Therefore Y(s)=1/[(s+1)(s+4)(s+6)].\n\nStep 4: At s=1 the denominator is 2×5×7, yielding 0.0143.\n\nAnswer: 0.0143.\n\nCheck and interpretation: The input pole at −1 must be included. Evaluating only the system transfer function at s=1 would be twice the requested output-transform value.",
    "family": "ode-laplace",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-constrained-minimum-3",
    "topic": "math",
    "prompt": "Real numbers x and y satisfy x+y=5. What is the minimum possible value of x²+y²?",
    "choices": [
      "25",
      "6.25",
      "12.5",
      "2.5"
    ],
    "key": 2,
    "why": "Principle: A quadratic restricted to a linear constraint can be minimized by substitution or by the Cauchy–Schwarz inequality.\n\nStep 1: Substitute y=5−x into the objective: f(x)=x²+(5−x)².\n\nStep 2: Differentiate: f′(x)=4x−10. Setting it to zero gives x=2.5, so y=2.5.\n\nStep 3: The second derivative is 4>0, establishing a strict minimum.\n\nStep 4: The minimum is 2×(2.5)²=12.5.\n\nAnswer: 12.5.\n\nCheck and interpretation: The inequality (x+y)²≤2(x²+y²) gives the same lower bound 25/2, with equality only at x=y.",
    "family": "constrained-minimum",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-gaussian-moment-3",
    "topic": "math",
    "prompt": "X is a zero-mean Gaussian random variable with variance 4. What is Var(X²)?",
    "choices": [
      "48",
      "16",
      "32",
      "8"
    ],
    "key": 2,
    "why": "Principle: For a zero-mean Gaussian with variance σ², the fourth moment is E[X⁴]=3σ⁴. Variance of X² uses both its second and fourth moments.\n\nStep 1: E[X²]=4, so (E[X²])²=16.\n\nStep 2: The Gaussian fourth moment is E[X⁴]=3×4²=48.\n\nStep 3: Var(X²)=E[X⁴]−(E[X²])²=48−16=32.\n\nAnswer: 32.\n\nCheck and interpretation: Using E[X⁴] alone would give a raw moment, not a variance. Although E[X]=0, E[X²] is positive.",
    "family": "gaussian-moment",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-improper-integral-3",
    "topic": "math",
    "prompt": "Evaluate ∫₀∞ 1/(x²+16) dx. Round to four decimal places.",
    "choices": [
      "0.3927",
      "0.7854",
      "0.25",
      "6.2832"
    ],
    "key": 0,
    "why": "Principle: The antiderivative of 1/(x²+a²) for a>0 is arctan(x/a)/a. An improper integral is evaluated as a limit.\n\nStep 1: Here a=4, so the antiderivative is arctan(x/4)/4.\n\nStep 2: As x→∞, arctan(x/4)→π/2; at x=0 it is zero.\n\nStep 3: Subtract the limits: the integral is π/(2×4)=0.3927.\n\nAnswer: 0.3927.\n\nCheck and interpretation: The result decreases as a grows, consistent with the integrand becoming smaller at every fixed x. Integrating over the entire real line would double the answer.",
    "family": "improper-integral",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-pdf-second-moment-3",
    "topic": "math",
    "prompt": "X has density f(x)=5x^4 for 0<x<1 and zero otherwise. Find E[X²], rounded to four decimal places.",
    "choices": [
      "0.7143",
      "0.8333",
      "0.6944",
      "0.1429"
    ],
    "key": 0,
    "why": "Principle: For a continuous random variable, E[g(X)]=∫g(x)f(x)dx over the support. A second moment is not generally the square of the mean.\n\nStep 1: First check normalization: ∫₀¹5x^4dx=1.\n\nStep 2: Multiply the density by x² to form 5x^6.\n\nStep 3: Integrate: E[X²]=[5x^7/7]₀¹=5/7=0.7143.\n\nAnswer: 0.7143.\n\nCheck and interpretation: Since 0<X<1, E[X²]≤E[X]=0.8333. The computed second moment satisfies that bound.",
    "family": "pdf-second-moment",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-loaded-divider-3",
    "topic": "networks",
    "prompt": "A 13 V ideal source drives R₁=4 kΩ in series with R₂=9 kΩ. A load R_L=6 kΩ is connected across R₂. Find the load voltage in V, rounded to four decimal places.",
    "choices": [
      "9",
      "6.1579",
      "7.8",
      "6.8421"
    ],
    "key": 1,
    "why": "Principle: A load across the lower divider resistor changes that resistor to a parallel equivalent. Apply the divider rule only after forming this equivalent.\n\nStep 1: The lower equivalent is R₂∥RL=9×6/(9+6)=3.6 kΩ.\n\nStep 2: Total source resistance is 4+3.6=7.6 kΩ.\n\nStep 3: The load shares the parallel-branch voltage: VL=13×3.6/(7.6)=6.1579 V.\n\nAnswer: 6.1579.\n\nCheck and interpretation: The unloaded voltage is 9 V, which is larger. Treating the load as absent overestimates the actual voltage.",
    "family": "loaded-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rc-switching-3",
    "topic": "networks",
    "prompt": "An initially uncharged 4 µF capacitor is charged from a 11 V source through 5 kΩ at t=0. Find vC at t=20 ms, in V. Round to four decimal places.",
    "choices": [
      "4.0467",
      "11",
      "9.5113",
      "6.9533"
    ],
    "key": 3,
    "why": "Principle: The capacitor voltage in a first-order network is the final value plus the initial-to-final difference multiplied by exp(−t/τ).\n\nStep 1: The time constant is RC=5×4 ms=20 ms, using kΩ·µF=ms.\n\nStep 2: The initial voltage is 0 V and the DC final voltage is 11 V.\n\nStep 3: Thus vC(t)=11[1−exp(−t/20 ms)].\n\nStep 4: At the specified t=τ, vC=11(1−e⁻¹)=6.9533 V.\n\nAnswer: 6.9533.\n\nCheck and interpretation: At one time constant charging has completed about 63.2% of the final voltage. The factor e⁻¹ instead describes the remaining voltage error.",
    "family": "rc-switching",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rl-natural-response-3",
    "topic": "networks",
    "prompt": "An inductor of 10 mH carries 0.3 A before being disconnected from its source and allowed to discharge through 5 Ω at t=0. Find current at t=4 ms in A. Round to four decimal places.",
    "choices": [
      "0.1104",
      "0.2594",
      "0.0406",
      "0.15"
    ],
    "key": 2,
    "why": "Principle: Inductor current is continuous through switching when there is no impulse voltage. The source-free RL response is i(t)=i(0⁺)exp(−Rt/L).\n\nStep 1: The initial current after switching is 0.3 A.\n\nStep 2: The time constant is L/R=10/5 ms=2 ms.\n\nStep 3: The requested instant is twice the time constant, so i=0.3e⁻²=0.0406 A.\n\nAnswer: 0.0406.\n\nCheck and interpretation: The resistor dissipates stored magnetic energy and current decays monotonically to zero. The natural-response formula does not contain a charging term 1−e⁻ᵗ/τ.",
    "family": "rl-natural-response",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-ac-power-match-3",
    "topic": "networks",
    "prompt": "An AC Thévenin equivalent has RMS voltage 16 V and impedance (5+j4) Ω. The load impedance can be any passive complex value. What is the maximum average load power in W?",
    "choices": [
      "25.6",
      "12.8",
      "51.2",
      "9.9951"
    ],
    "key": 1,
    "why": "Principle: Maximum average AC power is transferred to the complex-conjugate load: ZL=Zth*. RMS voltage can be used directly in I²R.\n\nStep 1: Choose ZL=5−j4 Ω so the reactances cancel.\n\nStep 2: The total impedance is 10 Ω and RMS current is 16/10 A.\n\nStep 3: Load power is I²RL=(16/10)²×5=12.8 W.\n\nStep 4: Equivalently Pmax=Vth,rms²/(4Rth).\n\nAnswer: 12.8.\n\nCheck and interpretation: Matching the impedance magnitude alone does not cancel reactance. Using peak voltage in the RMS formula would introduce a factor-of-two error.",
    "family": "ac-power-match",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-complex-load-power-3",
    "topic": "networks",
    "prompt": "A sinusoidal source of 23 V RMS is applied across Z=(5+j7) Ω. Find average power absorbed in W, rounded to four decimal places.",
    "choices": [
      "61.495",
      "35.7432",
      "105.8",
      "50.0405"
    ],
    "key": 1,
    "why": "Principle: Average power is Vrms² times the real part of admittance. A reactive element exchanges energy but absorbs zero net average power.\n\nStep 1: The admittance is 1/Z=(5−j7)/(74) S.\n\nStep 2: Its real part is R/(R²+X²)=5/74 S.\n\nStep 3: Therefore P=23²×5/74=35.7432 W.\n\nAnswer: 35.7432.\n\nCheck and interpretation: Vrms²/|Z| is apparent power, not real power. The load power factor is R/|Z| and must be included.",
    "family": "complex-load-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-series-resonance-q-3",
    "topic": "networks",
    "prompt": "A series RLC circuit has R=6 Ω, L=4 mH and C=8 µF. Find its quality factor Q, rounded to four decimal places.",
    "choices": [
      "134.1641",
      "3.7268",
      "1.8634",
      "7.4536"
    ],
    "key": 1,
    "why": "Principle: For a series resonant RLC circuit, Q=ω₀L/R=(1/R)√(L/C), where ω₀=1/√(LC).\n\nStep 1: Convert L=4×10⁻³ H and C=8×10⁻⁶ F.\n\nStep 2: The characteristic impedance √(L/C)=√(500)=22.3607 Ω.\n\nStep 3: Divide by the series resistance: Q=22.3607/6=3.7268.\n\nAnswer: 3.7268.\n\nCheck and interpretation: Q is dimensionless. Increasing series resistance dissipates more energy per cycle and lowers Q, which rules out formulas proportional to R.",
    "family": "series-resonance-q",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-current-divider-3",
    "topic": "networks",
    "prompt": "An ideal current source supplies 4 mA into parallel resistors 5 kΩ and 8 kΩ. Find current through the 5 kΩ branch in mA, rounded to four decimal places.",
    "choices": [
      "1.5385",
      "10.4",
      "2.4615",
      "2.5"
    ],
    "key": 2,
    "why": "Principle: Parallel-branch currents divide in proportion to conductance, or inversely to resistance. The numerator contains the other branch resistance in the two-resistor divider formula.\n\nStep 1: The equivalent resistance is 5×8/(5+8) kΩ.\n\nStep 2: The common node voltage is the source current times this equivalent resistance.\n\nStep 3: Divide that voltage by 5 kΩ to obtain I₁=4×8/(5+8)=2.4615 mA.\n\nAnswer: 2.4615.\n\nCheck and interpretation: Because 5<8, this branch carries more than half the source current. The other branch current is 1.5385 mA, and their sum is 4 mA.",
    "family": "current-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-twoport-z-3",
    "topic": "networks",
    "prompt": "A resistive T network has a 5 Ω series arm at port 1, a 7 Ω shunt arm from the central node to ground, and a 9 Ω series arm at port 2. With currents defined entering both ports, what is z₁₁?",
    "choices": [
      "12 Ω",
      "7 Ω",
      "5 Ω",
      "21 Ω"
    ],
    "key": 0,
    "why": "Principle: The z parameter z₁₁ is V₁/I₁ with I₂=0. An open second port makes the second series arm carry zero current.\n\nStep 1: Set I₂=0 by opening port 2. No voltage drop appears across its series arm.\n\nStep 2: The input current then flows through the port-1 arm and the shunt arm in series.\n\nStep 3: Therefore z₁₁=R₁+Rsh=5+7=12 Ω.\n\nAnswer: 12 Ω.\n\nCheck and interpretation: The port-2 series resistance does not affect z₁₁ under the open-port condition. Shorting port 2 instead would compute a different driving-point condition.",
    "family": "twoport-z",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-charge-sharing-3",
    "topic": "networks",
    "prompt": "A 5 µF capacitor initially at 13 V is connected in parallel, with matching polarities, to an initially uncharged 8 µF capacitor. After settling through a small resistance, what is their common voltage in V?",
    "choices": [
      "13",
      "5",
      "8",
      "33.8"
    ],
    "key": 1,
    "why": "Principle: For an isolated pair of capacitors, total charge is conserved during redistribution. Electrostatic energy is not conserved because the connecting resistance dissipates energy.\n\nStep 1: The initial total charge is Q=C₁V₁+C₂V₂=5×13+8×0=65 µC.\n\nStep 2: The final parallel capacitance is C₁+C₂=13 µF.\n\nStep 3: The common final voltage is Q/(C₁+C₂)=65/13=5 V.\n\nAnswer: 5.\n\nCheck and interpretation: The result lies between the two initial voltages. Equating initial and final stored energies would incorrectly ignore dissipation during connection.",
    "family": "charge-sharing",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-exponential-convolution-3",
    "topic": "signals",
    "prompt": "For x(t)=e^(−4t)u(t) and h(t)=e^(−6t)u(t), find y(0.5) where y=x*h. Round to four decimal places.",
    "choices": [
      "0.0067",
      "0.1851",
      "0.0428",
      "0.0855"
    ],
    "key": 2,
    "why": "Principle: Convolution of two causal exponentials is integrated only over the overlap 0≤τ≤t. The output is a difference of exponentials divided by their rate difference.\n\nStep 1: Write y(t)=∫₀ᵗ e^(−4τ)e^(−6(t−τ))dτ.\n\nStep 2: Factor out e^(−6t) and integrate e^(2τ).\n\nStep 3: This gives y(t)=[e^(−4t)−e^(−6t)]/2 for t≥0.\n\nStep 4: At t=0.5, the value is 0.0428.\n\nAnswer: 0.0428.\n\nCheck and interpretation: Pointwise multiplication of the input and impulse response is not convolution. Since both functions are nonnegative, the convolution must also be nonnegative.",
    "family": "exponential-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-discrete-convolution-3",
    "topic": "signals",
    "prompt": "For x[n]=(0.19)ⁿu[n] and h[n]=(0.71)ⁿu[n], calculate (x*h)[3]. Round to four decimal places.",
    "choices": [
      "0.0025",
      "0.3648",
      "0.2431",
      "0.4862"
    ],
    "key": 3,
    "why": "Principle: For causal discrete sequences, the convolution at index n is a finite sum over m=0,…,n. A finite geometric sum gives a closed form.\n\nStep 1: At n=3, sum aᵐb^(3−m) for m=0,1,2,3.\n\nStep 2: The four terms are b³+ab²+a²b+a³, where a=0.19 and b=0.71.\n\nStep 3: Using (b⁴−a⁴)/(b−a), the sum equals 0.4862.\n\nAnswer: 0.4862.\n\nCheck and interpretation: There are four overlapping terms at index 3, including both endpoints. Omitting m=0 or m=3 drops a valid impulse-response contribution.",
    "family": "discrete-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-alias-folding-3",
    "topic": "signals",
    "prompt": "The signal cos(2π×10000t) is sampled at 17 ksample/s. What positive alias frequency is observed within the first Nyquist band, in kHz?",
    "choices": [
      "7 kHz",
      "10 kHz",
      "27 kHz",
      "8.5 kHz"
    ],
    "key": 0,
    "why": "Principle: Sampling replicates spectra at integer multiples of fs. A real sinusoid is represented by a frequency in the first Nyquist band 0≤f≤fs/2.\n\nStep 1: The original frequency is 10 kHz, above the Nyquist frequency 8.5 kHz.\n\nStep 2: Subtract fs=17 kHz to get -7 kHz. A cosine at a negative frequency has the same samples as its positive-frequency counterpart.\n\nStep 3: Thus the baseband alias is |10−17|=7 kHz.\n\nAnswer: 7 kHz.\n\nCheck and interpretation: The result 7 kHz lies below fs/2=8.5 kHz. The original signal is therefore indistinguishable from this lower-frequency cosine after sampling.",
    "family": "alias-folding",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-lti-sinusoidal-3",
    "topic": "signals",
    "prompt": "A stable LTI system has H(s)=1/(s+4). With input cos(2t), what is the steady-state output amplitude? Round to four decimal places.",
    "choices": [
      "0.25",
      "0.2236",
      "0.05",
      "4.4721"
    ],
    "key": 1,
    "why": "Principle: A sinusoid is an eigenfunction of an LTI system. Its steady-state amplitude is multiplied by the frequency-response magnitude at the input angular frequency.\n\nStep 1: Evaluate H(jω) at ω=2 rad/s: H(j2)=1/(4+j2).\n\nStep 2: The denominator magnitude is √(4²+2²)=√20.\n\nStep 3: The input has unit amplitude, so output amplitude is |H(j2)|=1/√20=0.2236.\n\nAnswer: 0.2236.\n\nCheck and interpretation: The squared magnitude is a power ratio, not an amplitude ratio. The decaying transient is excluded by the steady-state qualification.",
    "family": "lti-sinusoidal",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-sequence-energy-3",
    "topic": "signals",
    "prompt": "Find the total energy of x[n]=(0.32)ⁿu[n], rounded to four decimal places.",
    "choices": [
      "1.4706",
      "0.1141",
      "1.1141",
      "0.9071"
    ],
    "key": 2,
    "why": "Principle: Discrete-time energy is the sum of squared magnitudes over every integer index. Causality restricts the nonzero terms to n≥0.\n\nStep 1: Square the magnitude to get |x[n]|²=(0.1024)ⁿ for n≥0.\n\nStep 2: Since |0.32|<1, the geometric series converges.\n\nStep 3: E=Σₙ₌₀∞a²ⁿ=1/(1−a²)=1/(1−0.1024)=1.1141.\n\nAnswer: 1.1141.\n\nCheck and interpretation: The n=0 sample equals one and must be included. Summing x[n] without squaring would give an area-like sum, not energy.",
    "family": "sequence-energy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-shifted-impulse-3",
    "topic": "signals",
    "prompt": "An LTI system has h(t)=e^(−4t)u(t). Its input is δ(t−1)+2δ(t−2). Find y(1.5), rounded to four decimal places.",
    "choices": [
      "14.9134",
      "0.2707",
      "0.1353",
      "0.0025"
    ],
    "key": 2,
    "why": "Principle: Each delayed impulse produces a delayed copy of the impulse response. Causality determines which copies have begun at the observation time.\n\nStep 1: By linearity, y(t)=h(t−1)+2h(t−2).\n\nStep 2: At t=1.5, t−1=0.5 but t−2=−0.5, so the second term is zero.\n\nStep 3: The remaining term is e^(−4×0.5)=0.1353.\n\nAnswer: 0.1353.\n\nCheck and interpretation: Ignoring the unit-step factor would incorrectly include a response to the impulse at t=2 before it has occurred.",
    "family": "shifted-impulse",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-dft-bin-amplitude-3",
    "topic": "signals",
    "prompt": "For N=7, x[n]=cos(2π×2n/N), 0≤n<N. Using X[r]=Σx[n]e^(−j2πrn/N), what is |X[2]|?",
    "choices": [
      "3.5",
      "7",
      "1",
      "1.75"
    ],
    "key": 0,
    "why": "Principle: A cosine is half the sum of two complex exponentials. The unnormalized DFT gives magnitude N for a complex exponential aligned with a DFT bin.\n\nStep 1: Expand x[n]=(e^(j2π2n/N)+e^(−j2π2n/N))/2.\n\nStep 2: For N=7>4, bins 2 and N−2 are distinct, so each exponential contributes to a different DFT bin.\n\nStep 3: At r=2, the matching exponential contributes N/2=3.5, while the other sums to zero.\n\nAnswer: 3.5.\n\nCheck and interpretation: The DFT convention has no 1/N factor in the forward transform. DC and Nyquist cosines need special treatment, but bin 2 is neither for this N.",
    "family": "dft-bin-amplitude",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-fourier-dc-3",
    "topic": "signals",
    "prompt": "For x(t)=e^(−5|t|), define X(ω)=∫₋∞∞x(t)e^(−jωt)dt. Find X(0), rounded to four decimal places.",
    "choices": [
      "0.2",
      "0.4",
      "2.5",
      "10"
    ],
    "key": 1,
    "why": "Principle: The Fourier transform at zero frequency equals the signed area under the time-domain signal. Even symmetry reduces the integral to twice its positive-time half.\n\nStep 1: Set ω=0 so the complex exponential in the transform becomes one.\n\nStep 2: Since x(t) is even, X(0)=2∫₀∞e^(−5t)dt.\n\nStep 3: The one-sided integral is 1/5, hence X(0)=2/5=0.4.\n\nAnswer: 0.4.\n\nCheck and interpretation: This is an amplitude-area quantity, not energy. Squaring the signal first would produce a different integral.",
    "family": "fourier-dc",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-difference-equation-3",
    "topic": "signals",
    "prompt": "A causal system at initial rest obeys y[n]−0.25y[n−1]=x[n]. For x[n]=(−1)ⁿu[n], what is the amplitude of the asymptotic alternating output? Round to four decimal places.",
    "choices": [
      "1.3333",
      "0.2",
      "0.8",
      "1.25"
    ],
    "key": 2,
    "why": "Principle: The steady alternating input has discrete-time angular frequency π. A stable system scales it by the magnitude of H(eʲπ).\n\nStep 1: At initial rest, H(z)=1/(1−0.25z⁻¹). The pole magnitude 0.25 is less than one, ensuring a decaying transient.\n\nStep 2: At z=eʲπ=−1, H(−1)=1/(1+0.25).\n\nStep 3: Thus the asymptotic output is [1/(1+0.25)](−1)ⁿ and its amplitude is 0.8.\n\nAnswer: 0.8.\n\nCheck and interpretation: Evaluating at z=1 would give the DC gain, not the alternating-input gain. The input switch-on creates a transient that vanishes as n grows.",
    "family": "difference-equation",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-diode-bias-3",
    "topic": "devices",
    "prompt": "An ideal p-n diode has I_S=10 µA, ideality factor 1 and V_T=26 mV. Find the forward voltage needed for 4 mA, in V, rounded to four decimal places.",
    "choices": [
      "0.7",
      "0.1558",
      "0.036",
      "0.3117"
    ],
    "key": 1,
    "why": "Principle: The ideal Shockley law is I=IS[exp(V/(nVT))−1]. Solve the exponential relationship for voltage rather than assuming a fixed diode drop.\n\nStep 1: Convert IS=10 µA to 0.01 mA, matching the current unit.\n\nStep 2: Rearrange to exp(V/VT)=1+I/IS=1+4/0.01=401.\n\nStep 3: Taking the natural logarithm gives V=0.026 ln(401)=0.1558 V.\n\nAnswer: 0.1558.\n\nCheck and interpretation: A natural logarithm is required because the diode equation uses base e. A fixed 0.7 V approximation is inconsistent with the specified ideal diode parameters.",
    "family": "diode-bias",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-diode-incremental-3",
    "topic": "devices",
    "prompt": "A diode biased at 4 mA has n=1 and V_T=26 mV. A small 10 mV AC source is applied through 5 kΩ, with the DC bias maintained separately. What is the diode AC voltage amplitude in mV? Round to four decimal places.",
    "choices": [
      "0.013",
      "10",
      "5.6522",
      "9.987"
    ],
    "key": 0,
    "why": "Principle: Linearize the diode at its bias point using rd=nVT/ID, then solve a voltage divider. This incremental model applies only for sufficiently small AC excursions.\n\nStep 1: The incremental resistance is rd=0.026/(4×10⁻³)=6.5 Ω.\n\nStep 2: The source resistance is 5000 Ω, so the diode receives fraction rd/(R+rd).\n\nStep 3: Its voltage amplitude is 10×6.5/(5000+6.5)=0.013 mV.\n\nAnswer: 0.013.\n\nCheck and interpretation: The very small diode voltage compared with VT validates the small-signal approximation. The source’s full 10 mV does not appear across the diode.",
    "family": "diode-incremental",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-active-check-3",
    "topic": "devices",
    "prompt": "An NPN has grounded emitter, β=80, V_BE=0.7 V, R_B=650 kΩ from collector-independent V_CC=13 V to base, and R_C=1.6 kΩ from V_CC to collector. Assuming forward-active operation, find V_CE in V. Round to four decimal places.",
    "choices": [
      "13",
      "12.9697",
      "2.4222",
      "10.5778"
    ],
    "key": 3,
    "why": "Principle: For fixed-base bias in forward-active operation, IB=(VCC−VBE)/RB and IC=βIB. Collector voltage then follows from the resistor drop.\n\nStep 1: The base current is (13−0.7)/650=0.0189 mA.\n\nStep 2: The collector current is 80×0.0189=1.5138 mA.\n\nStep 3: The collector drop is IC RC=2.4222 V.\n\nStep 4: Thus VCE=VCC−ICRC=13−2.4222=10.5778 V.\n\nAnswer: 10.5778.\n\nCheck and interpretation: VCE exceeds VBE=0.7 V here, so the collector-base junction remains reverse biased and the forward-active assumption is self-consistent.",
    "family": "bjt-active-check",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-rpi-3",
    "topic": "devices",
    "prompt": "A BJT at 300 K has collector current 2.5 mA and β=130. Take V_T=26 mV. Find its hybrid-π input resistance rπ in kΩ, rounded to four decimal places.",
    "choices": [
      "0.0104",
      "12500",
      "1.352",
      "0.676"
    ],
    "key": 2,
    "why": "Principle: The hybrid-π resistance is rπ=β/gm, with gm=IC/VT at the operating point. Consistent mA and V units give gm in mS and rπ in kΩ.\n\nStep 1: Compute gm=2.5/0.026=96.1538 mS.\n\nStep 2: Then rπ=130/96.1538 kΩ.\n\nStep 3: The resulting input resistance is 1.352 kΩ. It relates a small vbe to the resulting small base current.\n\nAnswer: 1.352.\n\nCheck and interpretation: The inverse transconductance 1/gm is not rπ; the factor β is required because base current is smaller than collector current.",
    "family": "bjt-rpi",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-gm-3",
    "topic": "devices",
    "prompt": "A long-channel nMOS in saturation obeys I_D=(K/2)(V_GS−V_TH)² with K=0.35 mA/V². At overdrive 1.3 V, find g_m in mS. Neglect channel-length modulation.",
    "choices": [
      "0.2275",
      "0.455",
      "0.5915",
      "0.6825"
    ],
    "key": 1,
    "why": "Principle: MOS transconductance is the derivative of drain current with respect to gate-source voltage while holding drain voltage fixed.\n\nStep 1: Differentiate ID=(K/2)VOV² to obtain gm=K VOV.\n\nStep 2: Use K=0.35 mA/V² and VOV=1.3 V.\n\nStep 3: Thus gm=0.35×1.3=0.455 mA/V=0.455 mS.\n\nStep 4: As a cross-check, ID=0.2958 mA and 2ID/VOV gives the same gm.\n\nAnswer: 0.455.\n\nCheck and interpretation: Using ID/VOV misses a factor of two for the square-law model. The stated K convention explicitly includes the one-half factor.",
    "family": "mos-gm",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-triode-3",
    "topic": "devices",
    "prompt": "An nMOS has K=0.5 mA/V², overdrive V_GS−V_TH=1.3 V, and V_DS=0.16 V. Using the long-channel model, find I_D in mA. Round to four decimal places.",
    "choices": [
      "0.4225",
      "0.0976",
      "0.104",
      "0.1952"
    ],
    "key": 1,
    "why": "Principle: For 0≤VDS<VOV the MOSFET is in the triode region, with ID=K[VOV VDS−VDS²/2]. The saturation square law does not apply in this region.\n\nStep 1: Here VDS=0.16 V is below VOV=1.3 V, establishing triode operation.\n\nStep 2: Compute VOV VDS=0.208 V² and VDS²/2=0.0128 V².\n\nStep 3: Multiply their difference by K=0.5 to obtain ID=0.0976 mA.\n\nAnswer: 0.0976.\n\nCheck and interpretation: The VDS²/2 correction distinguishes the triode expression from a purely linear resistor approximation. The specified voltages are positive and produce positive drain current.",
    "family": "mos-triode",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-junction-built-in-3",
    "topic": "devices",
    "prompt": "An abrupt silicon p-n junction at equilibrium has N_D=4.00e+15 cm⁻³, N_A=5.00e+16 cm⁻³ and n_i=10¹⁰ cm⁻³. Taking V_T=26 mV, find the built-in potential in V, rounded to four decimal places.",
    "choices": [
      "0.7364",
      "0.3354",
      "0.3198",
      "1.4729"
    ],
    "key": 0,
    "why": "Principle: For a nondegenerate abrupt junction at thermal equilibrium, Vbi=VT ln(NAND/ni²). The potential balances diffusion against drift.\n\nStep 1: Form the dimensionless concentration ratio NAND/ni²=2.0000e+12.\n\nStep 2: Take its natural logarithm, not the base-10 logarithm.\n\nStep 3: Multiply by 0.026 V to obtain Vbi=0.7364 V.\n\nAnswer: 0.7364.\n\nCheck and interpretation: All carrier concentrations use the same cm⁻³ units, which cancel in the ratio. This internal equilibrium barrier is not an externally extractable terminal voltage.",
    "family": "junction-built-in",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-early-resistance-3",
    "topic": "devices",
    "prompt": "At an operating point a BJT has I_C=0.8 mA and Early voltage V_A=65 V. Using r_o≈V_A/I_C, find r_o in kΩ, rounded to four decimal places.",
    "choices": [
      "52",
      "0.0123",
      "40.625",
      "81.25"
    ],
    "key": 3,
    "why": "Principle: The Early effect gives the forward-active BJT a finite output conductance. For VCE much smaller than VA, the output resistance is approximately VA/IC.\n\nStep 1: Use the stated approximation ro≈VA/IC.\n\nStep 2: Since V divided by mA gives kΩ, ro=65/0.8 kΩ.\n\nStep 3: Numerically ro=81.25 kΩ. A larger bias current would reduce this resistance at fixed Early voltage.\n\nAnswer: 81.25.\n\nCheck and interpretation: This resistance models the slope of the collector characteristic at fixed base-emitter voltage. It is different from the DC ratio VCE/IC.",
    "family": "early-resistance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-semiconductor-resistivity-3",
    "topic": "devices",
    "prompt": "An n-type bar has electron concentration 4.0e+15 cm⁻³ and mobility 560 cm²/(V·s). Neglect holes and take q=1.6×10⁻¹⁹ C. Find resistivity in Ω·cm, rounded to four decimal places.",
    "choices": [
      "2.7902 Ω·cm",
      "0.3584 Ω·cm",
      "279.0179 Ω·cm",
      "0.0279 Ω·cm"
    ],
    "key": 0,
    "why": "Principle: With electrons dominating conduction, conductivity is σ=q n μn and resistivity is its reciprocal. The supplied centimetre-based units yield Ω·cm.\n\nStep 1: Insert q=1.6×10⁻¹⁹, n=4.0e+15 and μn=560.\n\nStep 2: Conductivity is σ=0.3584 S/cm.\n\nStep 3: Therefore ρ=1/σ=2.7902 Ω·cm.\n\nAnswer: 2.7902 Ω·cm.\n\nCheck and interpretation: Increasing electron concentration or mobility increases conductivity and decreases resistivity. Converting to Ω·m would multiply the numerical Ω·cm value by 0.01.",
    "family": "semiconductor-resistivity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-emitter-degeneration-3",
    "topic": "analog",
    "prompt": "A common-emitter amplifier has g_m=5 mS, collector load 7 kΩ and unbypassed emitter resistance 0.35 kΩ. Take β→∞ and r_o→∞. What is v_o/v_b, rounded to four decimal places?",
    "choices": [
      "-35",
      "12.7273",
      "-20",
      "-12.7273"
    ],
    "key": 3,
    "why": "Principle: Emitter degeneration feeds an emitter voltage back against the base-emitter signal. With infinite β, emitter and collector small-signal currents are equal.\n\nStep 1: Write ic=gm(vb−ve) and ve=ic RE.\n\nStep 2: Then ic(1+gmRE)=gm vb, so ic/vb=gm/(1+gmRE).\n\nStep 3: Since vo=−ic RC, gain is −gmRC/(1+gmRE).\n\nStep 4: Substitution gives −5×7/[1+5×0.35]=-12.7273.\n\nAnswer: -12.7273.\n\nCheck and interpretation: The degeneration reduces the magnitude below the bypassed-emitter value gmRC. The simpler −RC/RE approximation requires gmRE≫1.",
    "family": "emitter-degeneration",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-finite-opamp-gain-3",
    "topic": "analog",
    "prompt": "A non-inverting amplifier uses R_f=13 kΩ and R_g=1 kΩ. Its op-amp has finite DC open-loop gain A=160, infinite input resistance and zero output resistance. Find the closed-loop DC gain, rounded to four decimal places.",
    "choices": [
      "12.8736",
      "14",
      "160",
      "15.3425"
    ],
    "key": 0,
    "why": "Principle: For finite open-loop gain, use vo=A(v+−v−) and the feedback divider v−=βvo. The ideal virtual-short approximation is not exact.\n\nStep 1: The feedback factor is β=Rg/(Rf+Rg)=1/14.\n\nStep 2: Solving vo=A(vin−βvo) gives vo/vin=A/(1+Aβ).\n\nStep 3: This can be written 14/(1+14/160)=12.8736.\n\nAnswer: 12.8736.\n\nCheck and interpretation: The result is slightly smaller than the ideal non-inverting gain 14. A negative-feedback denominator contains a plus sign.",
    "family": "finite-opamp-gain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-weighted-summer-3",
    "topic": "analog",
    "prompt": "An ideal inverting summer has grounded non-inverting input, feedback 11 kΩ, and inputs 0.6 V through 5 kΩ and 0.4 V through 7 kΩ. Assuming linear operation, find output in V.",
    "choices": [
      "1.9486",
      "-1.32",
      "-1.9486",
      "-0.9167"
    ],
    "key": 2,
    "why": "Principle: At virtual ground, each source drives an input current independently. The op-amp input draws no current, so the feedback branch carries their sum.\n\nStep 1: Input currents are 0.6/5=0.12 mA and 0.4/7=0.0571 mA.\n\nStep 2: Their sum is 0.1771 mA.\n\nStep 3: The output is the negative feedback-resistor drop: vo=−11×(0.1771)=-1.9486 V.\n\nAnswer: -1.9486.\n\nCheck and interpretation: Different input resistors give different weights. Adding input voltages before applying one divider ratio would discard these weights.",
    "family": "weighted-summer",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-common-source-ro-3",
    "topic": "analog",
    "prompt": "A common-source MOS amplifier has source at AC ground, g_m=2.9 mS, r_o=26 kΩ and drain resistor 8 kΩ to AC ground. Find unloaded midband voltage gain, rounded to four decimal places.",
    "choices": [
      "-23.2",
      "17.7412",
      "-98.6",
      "-17.7412"
    ],
    "key": 3,
    "why": "Principle: The drain sees RD in parallel with the transistor output resistance ro. The controlled drain current gm vgs develops an inverted output across this equivalent load.\n\nStep 1: Effective drain load is RD∥ro=8×26/(8+26)=6.1176 kΩ.\n\nStep 2: The source is at AC ground, so vgs equals input voltage.\n\nStep 3: Gain is −gm(RD∥ro)=−2.9×6.1176=-17.7412.\n\nAnswer: -17.7412.\n\nCheck and interpretation: Finite ro reduces gain magnitude compared with −gmRD. Since mS×kΩ is dimensionless, no additional factor of 1000 is required.",
    "family": "common-source-ro",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-highpass-frequency-3",
    "topic": "analog",
    "prompt": "A coupling capacitor of 16 nF feeds an amplifier input resistance 4 kΩ from an ideal voltage source. Treat the amplifier input as purely resistive. Find the high-pass −3 dB frequency in kHz.",
    "choices": [
      "15.625 kHz",
      "2.4868 kHz",
      "0.3958 kHz",
      "24.868 kHz"
    ],
    "key": 1,
    "why": "Principle: The coupling capacitor and input resistance form H(s)=sRC/(1+sRC). Its lower cutoff is the frequency at which capacitor reactance magnitude equals R.\n\nStep 1: Use R=4×10³ Ω and C=16×10⁻⁹ F.\n\nStep 2: The corner angular frequency is ωc=1/(RC).\n\nStep 3: Convert to hertz with fc=1/(2πRC), then divide by 1000: fc=2.4868 kHz.\n\nAnswer: 2.4868 kHz.\n\nCheck and interpretation: At the corner, magnitude is 1/√2 of the high-frequency passband value. Confusing ωc with fc introduces a factor of 2π.",
    "family": "highpass-frequency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-inverting-bandwidth-3",
    "topic": "analog",
    "prompt": "A dominant-pole op-amp has GBW=3.5 MHz. An inverting amplifier uses R_in=3.5 kΩ and R_f=13 kΩ. Estimate its closed-loop bandwidth in MHz using noise gain.",
    "choices": [
      "0.9423 MHz",
      "16.5 MHz",
      "0.7424 MHz",
      "1.75 MHz"
    ],
    "key": 2,
    "why": "Principle: For a single-pole voltage-feedback op-amp, bandwidth is approximately GBW divided by noise gain. An inverting stage has noise gain 1+Rf/Rin, not |signal gain|.\n\nStep 1: The signal gain is −Rf/Rin=−3.7143.\n\nStep 2: Noise gain is 1+Rf/Rin=4.7143.\n\nStep 3: Bandwidth ≈3.5/4.7143=0.7424 MHz.\n\nAnswer: 0.7424 MHz.\n\nCheck and interpretation: The distinction between signal gain and noise gain matters most at low inverting gains. The estimate assumes the dominant-pole model and no extra capacitive poles.",
    "family": "inverting-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-slew-amplitude-3",
    "topic": "analog",
    "prompt": "An op-amp has slew rate 2.5 V/µs. For a sinusoidal output at 80 kHz, what is the maximum peak amplitude in V allowed by slew rate alone?",
    "choices": [
      "9.9472 V",
      "4.9736 V",
      "2.4868 V",
      "31.25 V"
    ],
    "key": 1,
    "why": "Principle: A sinusoid vp sin(2πft) has maximum slope 2πfvp. Avoiding slew-rate distortion requires that slope not exceed SR.\n\nStep 1: Convert SR to 2.5×10⁶ V/s and frequency to 80×10³ Hz.\n\nStep 2: Set 2πfVp=SR at the limit.\n\nStep 3: Thus Vp=SR/(2πf)=2.5×10⁶/(2π×80×10³)=4.9736 V.\n\nAnswer: 4.9736 V.\n\nCheck and interpretation: This is peak amplitude, not peak-to-peak amplitude. Supply rails or small-signal bandwidth may impose a lower practical limit, but they are excluded here.",
    "family": "slew-amplitude",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-source-follower-3",
    "topic": "analog",
    "prompt": "A MOS source follower has g_m=8 mS and effective source load 1.6 kΩ. Neglect body effect and r_o. Find its voltage gain, rounded to four decimal places.",
    "choices": [
      "12.8",
      "0.0725",
      "0.9275",
      "-0.9275"
    ],
    "key": 2,
    "why": "Principle: A source follower develops its output at the source. The resulting source voltage reduces vgs, creating local negative feedback.\n\nStep 1: The current is gm(vin−vo), and this flows through the source load.\n\nStep 2: Write vo=gmRL(vin−vo) and solve for vo/vin=gmRL/(1+gmRL).\n\nStep 3: Here gmRL=12.8, giving gain 0.9275.\n\nAnswer: 0.9275.\n\nCheck and interpretation: The gain is positive and strictly less than one in this model. The reciprocal 1/(1+gmRL) describes the residual gate-source fraction, not the output gain.",
    "family": "source-follower",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-ideal-integrator-3",
    "topic": "analog",
    "prompt": "An ideal inverting integrator uses R=13 kΩ and C=5 µF. Its output is initially zero. A constant 0.16 V input is applied for 0.1 s. Assuming no saturation, what is output at 0.1 s in V?",
    "choices": [
      "0.2462 V",
      "-0.1231 V",
      "-0.4923 V",
      "-0.2462 V"
    ],
    "key": 3,
    "why": "Principle: An ideal inverting integrator obeys vo(t)=vo(0)−(1/RC)∫vin(t)dt. A constant input produces a linear output ramp.\n\nStep 1: RC=13×5×10⁻³=0.065 s.\n\nStep 2: The input-time integral over 0.1 s is 0.16×0.1=0.016 V·s.\n\nStep 3: With zero initial output, vo=−0.016/0.065=-0.2462 V.\n\nAnswer: -0.2462 V.\n\nCheck and interpretation: The minus sign follows from the inverting connection. The stated no-saturation condition permits the ideal ramp calculation without supply-rail clipping.",
    "family": "ideal-integrator",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-ripple-counter-period-3",
    "topic": "digital",
    "prompt": "A 8-bit binary counter starts at zero and is clocked at 16 MHz. How many µs elapse before it first returns to zero, assuming ideal operation?",
    "choices": [
      "16 µs",
      "8 µs",
      "4096 µs",
      "0.5 µs"
    ],
    "key": 0,
    "why": "Principle: An n-bit binary counter repeats after 2ⁿ input clocks. The repeat time is the number of clock periods in a full state cycle.\n\nStep 1: There are 2^8=256 distinct states, including zero.\n\nStep 2: At 16 MHz the clock period is 1/16 µs.\n\nStep 3: The first full wrap occurs after 256/16=16 µs.\n\nAnswer: 16 µs.\n\nCheck and interpretation: The count from zero through all-one is 2ⁿ−1, but another clock is required to return to zero, making the full cycle 2ⁿ clocks.",
    "family": "ripple-counter-period",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-twos-complement-subtract-3",
    "topic": "digital",
    "prompt": "Two unsigned 6-bit operands have values A=13 and B=6. A subtractor computes A−B using 6-bit two’s-complement addition and discards carry out. What unsigned decimal value appears on its output?",
    "choices": [
      "19",
      "57",
      "8",
      "7"
    ],
    "key": 3,
    "why": "Principle: Fixed-width subtraction adds the two’s complement of B and retains only the lowest n bits. This implements arithmetic modulo 2ⁿ.\n\nStep 1: The six-bit two’s complement of B is 64−6=58.\n\nStep 2: Add A to it: 13+58=71.\n\nStep 3: Discard the carry beyond bit 5, equivalently subtract 64, to obtain 7.\n\nAnswer: 7.\n\nCheck and interpretation: The specified A exceeds B, so the unsigned difference is positive and is represented exactly. Discarding carry is part of fixed-width subtraction, not an arithmetic error.",
    "family": "twos-complement-subtract",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-adc-serial-clock-3",
    "topic": "digital",
    "prompt": "A 7-bit SAR ADC outputs one serial word for each of 160 ksample/s. Each frame also contains 2 status bits and 1 idle clock. What minimum serial clock in MHz supports continuous conversion?",
    "choices": [
      "1.12 MHz",
      "1.44 MHz",
      "1.76 MHz",
      "1.6 MHz"
    ],
    "key": 3,
    "why": "Principle: The serial link must provide a clock slot for every conversion bit and every overhead slot in each sample frame.\n\nStep 1: A frame requires 7+2+1=10 clocks.\n\nStep 2: At 160000 frames/s, the required clock is 10×160000=1600000 clocks/s.\n\nStep 3: Divide by 10⁶ to get 1.6 MHz.\n\nAnswer: 1.6 MHz.\n\nCheck and interpretation: Counting only the ADC resolution underestimates the link rate because status and idle slots also consume serial clock periods.",
    "family": "adc-serial-clock",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-synchronous-timing-3",
    "topic": "digital",
    "prompt": "A register-to-register path has t_CQ=1.6 ns, combinational delay 3.9 ns and setup time 1.3 ns. Adverse clock uncertainty consumes another 0.2 ns. What is the maximum clock frequency in MHz?",
    "choices": [
      "256.4103 MHz",
      "142.8571 MHz",
      "181.8182 MHz",
      "151.5152 MHz"
    ],
    "key": 1,
    "why": "Principle: For setup timing, one clock period must cover launch clock-to-Q, maximum logic delay, destination setup time and adverse uncertainty.\n\nStep 1: The minimum period is 1.6+3.9+1.3+0.2=7 ns.\n\nStep 2: Convert period to frequency with fMHz=1000/Tns.\n\nStep 3: Hence fmax=142.8571 MHz. This checks setup timing only.\n\nAnswer: 142.8571 MHz.\n\nCheck and interpretation: Hold timing is a separate minimum-delay condition. Adverse uncertainty reduces the available time and therefore is added to the required period.",
    "family": "synchronous-timing",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-memory-chip-count-3",
    "topic": "digital",
    "prompt": "A memory requires 256 K words of 16 bits. Available chips each contain 4 K words of 8 bits. How many chips are needed?",
    "choices": [
      "128",
      "64",
      "256",
      "66"
    ],
    "key": 0,
    "why": "Principle: Memory expansion may require both depth expansion and width expansion. The total chip count is the product of those two independent factors.\n\nStep 1: To make 16-bit words from 8-bit chips, use 16/8=2 chips in parallel per bank.\n\nStep 2: To obtain 256 K words from 4 K-word chips, use 256/4=64 banks.\n\nStep 3: Total chips =2×64=128.\n\nAnswer: 128.\n\nCheck and interpretation: Counting only address-depth banks omits the second chip needed in every bank to supply the upper byte of each 16-bit word.",
    "family": "memory-chip-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-binary-dac-3",
    "topic": "digital",
    "prompt": "An ideal unipolar 7-bit DAC uses v_o=V_ref D/2^N with V_ref=2.6 V. Find output for unsigned input code D=35, in V. Round to four decimal places.",
    "choices": [
      "0.7165 V",
      "0.7109 V",
      "0.7313 V",
      "1.4219 V"
    ],
    "key": 1,
    "why": "Principle: Use the DAC transfer convention stated in the question: each code increment is Vref/2ᴺ. The largest code remains one LSB below Vref.\n\nStep 1: There are 2^7=128 nominal quantization steps.\n\nStep 2: One LSB is 2.6/128 V.\n\nStep 3: Multiplying by input code 35 gives vo=2.6×35/128=0.7109 V.\n\nAnswer: 0.7109 V.\n\nCheck and interpretation: Scaling by 2ᴺ−1 would implement an endpoint-normalized convention, which differs from the explicitly supplied DAC law.",
    "family": "binary-dac",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-bitwise-xor-3",
    "topic": "digital",
    "prompt": "Two 5-bit unsigned words encode decimal 7 and 4. Their corresponding bits feed five XOR gates. What is the unsigned decimal value of the output word?",
    "choices": [
      "11",
      "4",
      "3",
      "7"
    ],
    "key": 2,
    "why": "Principle: Bitwise XOR produces one where the operand bits differ and zero where they agree. It corresponds to binary addition without inter-bit carry.\n\nStep 1: Write the operands as 00111 and 00100.\n\nStep 2: XOR corresponding bit positions to obtain 00011.\n\nStep 3: Convert that binary result back to decimal to get 3.\n\nAnswer: 3.\n\nCheck and interpretation: Ordinary decimal addition may differ because it includes carries. OR also differs because it retains a one when both input bits are one.",
    "family": "bitwise-xor",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-flash-comparator-count-3",
    "topic": "digital",
    "prompt": "An ideal 6-bit flash ADC uses a full bank of threshold comparators with one comparator per internal quantization boundary. How many comparators are required?",
    "choices": [
      "64",
      "63",
      "6",
      "32"
    ],
    "key": 1,
    "why": "Principle: An N-bit quantizer divides its input range into 2ᴺ bins. Separating adjacent bins requires one internal threshold between each neighboring pair.\n\nStep 1: The number of output bins is 2^6=64.\n\nStep 2: The number of boundaries between those bins is one fewer.\n\nStep 3: Thus a full flash architecture requires 2^6−1=63 comparators.\n\nAnswer: 63.\n\nCheck and interpretation: The rapid exponential comparator growth explains why flash ADC resolution is expensive in power and silicon area. This count excludes any separate overrange detector.",
    "family": "flash-comparator-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-counter-adc-time-3",
    "topic": "digital",
    "prompt": "An 7-bit counter-type ADC starts its count at zero at the beginning of each conversion. The clock period is 2.6 µs. Using a worst-case budget of 2^N clocks, find the worst-case conversion time in ms.",
    "choices": [
      "332.8 ms",
      "0.0182 ms",
      "0.1664 ms",
      "0.3328 ms"
    ],
    "key": 3,
    "why": "Principle: A counter-type ADC can need a full-scale count search, unlike a SAR converter that needs approximately N decisions. The question specifies the clock-budget convention.\n\nStep 1: The worst-case budget is 2^7=128 clocks.\n\nStep 2: Multiply by 2.6 µs per clock to get 332.8 µs.\n\nStep 3: Convert microseconds to milliseconds by dividing by 1000: 0.3328 ms.\n\nAnswer: 0.3328 ms.\n\nCheck and interpretation: Using N clocks would describe the approximate decision count of a SAR ADC, not the stated counter ramp architecture.",
    "family": "counter-adc-time",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-routh-cubic-bound-3",
    "topic": "control",
    "prompt": "For positive K, a feedback system has characteristic polynomial s³+4s²+9s+K. What is the upper boundary value of K for strict stability?",
    "choices": [
      "36",
      "13",
      "2.25",
      "144"
    ],
    "key": 0,
    "why": "Principle: For a real cubic, the Routh first-column entries must all have the same positive sign. A zero boundary entry marks loss of strict asymptotic stability.\n\nStep 1: The first two Routh rows begin [1, 9] and [4, K].\n\nStep 2: The s¹ first-column entry is (4×9−K)/4.\n\nStep 3: Along with K>0, positivity requires K<36.\n\nStep 4: Therefore strict stability holds for 0<K<36, and the requested upper boundary is 36.\n\nAnswer: 36.\n\nCheck and interpretation: The boundary itself is excluded from strict stability. Positive polynomial coefficients alone are necessary but not sufficient for a cubic.",
    "family": "routh-cubic-bound",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-second-order-overshoot-3",
    "topic": "control",
    "prompt": "A standard unity-DC-gain second-order system has ω_n=5 rad/s and damping ratio ζ=0.32. Find percentage overshoot to a unit step, rounded to four decimal places.",
    "choices": [
      "0.3461 %",
      "34.6073 %",
      "36.5931 %",
      "69.2146 %"
    ],
    "key": 1,
    "why": "Principle: For an underdamped standard second-order response, percentage overshoot is 100 exp[−πζ/√(1−ζ²)]. It depends on damping ratio rather than natural frequency.\n\nStep 1: The supplied ζ=0.32 lies strictly between zero and one.\n\nStep 2: Compute √(1−ζ²)=0.9474.\n\nStep 3: Insert in the overshoot formula: 100exp[−π×0.32/0.9474]=34.6073%.\n\nAnswer: 34.6073 %.\n\nCheck and interpretation: Changing ωn=5 rad/s would change how quickly the peak occurs, but would not change this percentage overshoot with ζ fixed.",
    "family": "second-order-overshoot",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-ramp-error-3",
    "topic": "control",
    "prompt": "A stable unity-negative-feedback system has open loop G(s)=5/[s(s+4)]. What is its unit-ramp steady-state error? Round to four decimal places.",
    "choices": [
      "1.25",
      "0.8",
      "0",
      "0.4444"
    ],
    "key": 1,
    "why": "Principle: For a type-1 unity-feedback system, unit-ramp steady-state error is 1/Kv, where Kv=lim(s→0)sG(s). Closed-loop stability is required.\n\nStep 1: There is one open-loop pole at the origin, so the system is type 1.\n\nStep 2: Kv=lim(s→0)5/(s+4)=5/4.\n\nStep 3: Hence ess=1/Kv=4/5=0.8.\n\nAnswer: 0.8.\n\nCheck and interpretation: The characteristic polynomial s²+as+gain has positive coefficients here and is stable. A step input would have zero error, whereas a ramp has a finite nonzero error.",
    "family": "ramp-error",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-first-order-settling-3",
    "topic": "control",
    "prompt": "A plant G(s)=5/(s+4) is placed in unity negative feedback. Using the approximation t_s≈4/|closed-loop pole|, find its 2% settling time in s.",
    "choices": [
      "1 s",
      "0.8 s",
      "0.1111 s",
      "0.4444 s"
    ],
    "key": 3,
    "why": "Principle: Unity negative feedback gives T=G/(1+G). For a real negative pole −α, the response error decays exponentially with time constant 1/α.\n\nStep 1: T(s)=5/(s+4+5)=5/(s+9).\n\nStep 2: The pole is −9, so τ=1/9 s.\n\nStep 3: The specified 2% approximation is ts≈4τ=4/9=0.4444 s.\n\nAnswer: 0.4444 s.\n\nCheck and interpretation: Use the closed-loop pole, not the original plant pole. The exact normalized 2% exponential settling time would be ln(50)/α, close to 4/α.",
    "family": "first-order-settling",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-pole-damping-3",
    "topic": "control",
    "prompt": "A second-order denominator is (s+4)(s+6). What is its damping ratio ζ, rounded to four decimal places?",
    "choices": [
      "4.899",
      "5",
      "2.0412",
      "1.0206"
    ],
    "key": 3,
    "why": "Principle: Compare the expanded polynomial with s²+2ζωns+ωn². Both the linear and constant coefficients are needed to extract the damping ratio.\n\nStep 1: Expand to s²+10s+24.\n\nStep 2: Thus ωn=√24 rad/s and 2ζωn=10.\n\nStep 3: Rearrange: ζ=10/(2√24)=1.0206.\n\nAnswer: 1.0206.\n\nCheck and interpretation: The two distinct real negative poles imply an overdamped system, so ζ must exceed one. This is a useful check on coefficient matching.",
    "family": "pole-damping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-single-pole-phase-3",
    "topic": "control",
    "prompt": "For G(s)=1/(1+0.16s), find phase at ω=5 rad/s in degrees, rounded to four decimal places.",
    "choices": [
      "-38.6598 degrees",
      "38.6598 degrees",
      "-90 degrees",
      "-19.3299 degrees"
    ],
    "key": 0,
    "why": "Principle: The phase of a first-order low-pass is the negative angle of its denominator 1+jωτ. The numerator contributes zero phase.\n\nStep 1: At the given frequency, ωτ=5×0.16=0.8.\n\nStep 2: The denominator angle is arctan(0.8).\n\nStep 3: Therefore ∠G=−arctan(0.8)×180/π=-38.6598 degrees.\n\nAnswer: -38.6598 degrees.\n\nCheck and interpretation: The phase must lie between 0 and −90 degrees for positive frequency. The arctangent result in radians must be converted before reporting degrees.",
    "family": "single-pole-phase",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-step-final-value-3",
    "topic": "control",
    "prompt": "A plant G(s)=5/(s+4) has unity negative feedback and is driven by a unit step reference. Find its final output value, rounded to four decimal places.",
    "choices": [
      "1",
      "0.1111",
      "1.25",
      "0.5556"
    ],
    "key": 3,
    "why": "Principle: For a stable closed-loop system, the final value of a unit-step response equals its closed-loop DC gain. Unity feedback does not automatically make that gain one.\n\nStep 1: The closed-loop transfer function is T(s)=G/(1+G)=5/(s+9).\n\nStep 2: For a unit step, Y(s)=T(s)/s.\n\nStep 3: By the final-value theorem, y∞=lim(s→0)sY(s)=5/9=0.5556.\n\nAnswer: 0.5556.\n\nCheck and interpretation: The remaining step error is 0.4444. The pole −9 is in the left half-plane, validating the final-value theorem.",
    "family": "step-final-value",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-state-determinant-3",
    "topic": "control",
    "prompt": "A continuous-time state matrix is A=[0 1; −28 −11]. What is the product of its two pole magnitudes?",
    "choices": [
      "28",
      "11",
      "5.2915",
      "65"
    ],
    "key": 0,
    "why": "Principle: The poles are eigenvalues of A. Their product equals det(A), and their individual values can be obtained from the characteristic polynomial.\n\nStep 1: Compute det(sI−A)=s²+11s+28.\n\nStep 2: It factors as (s+4)(s+7), so the poles are −4 and −7.\n\nStep 3: Their magnitudes multiply to 4×7=28.\n\nAnswer: 28.\n\nCheck and interpretation: The trace is the pole sum, −(a+b), rather than their product. Both poles are negative here, so magnitude product agrees with the positive determinant.",
    "family": "state-determinant",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-phase-margin-3",
    "topic": "control",
    "prompt": "A unity-feedback loop has G(s)=K/[s(s+5)]. K is selected so gain crossover is ω_gc=5 rad/s. Find phase margin in degrees.",
    "choices": [
      "90 degrees",
      "135 degrees",
      "180 degrees",
      "45 degrees"
    ],
    "key": 3,
    "why": "Principle: Phase margin is 180 degrees plus open-loop phase at unity-gain crossover. The integrator contributes −90 degrees, and the real pole contributes an additional lag.\n\nStep 1: At ωgc=5, the integrator phase is −90 degrees.\n\nStep 2: The (s+5) denominator term contributes −arctan(ωgc/5)=−45 degrees.\n\nStep 3: Total phase is −135 degrees, so PM=180−135=45 degrees.\n\nAnswer: 45 degrees.\n\nCheck and interpretation: A positive K can achieve the stated crossover: K=ωgc√(ωgc²+5²). K sets magnitude here but contributes no extra phase.",
    "family": "phase-margin",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-capacity-bandwidth-3",
    "topic": "comm",
    "prompt": "An AWGN channel has bandwidth 1.6 MHz and linear SNR=10.3137. Using the stated SNR rounded to four decimals, find Shannon capacity in Mbit/s, rounded to three decimal places.",
    "choices": [
      "2.8 Mbit/s",
      "5.6 Mbit/s",
      "11.2 Mbit/s",
      "5.3864 Mbit/s"
    ],
    "key": 1,
    "why": "Principle: Shannon capacity for a bandlimited AWGN channel is C=B log₂(1+SNR). With B in MHz, the resulting capacity is in Mbit/s.\n\nStep 1: Use linear SNR=10.3137, so the logarithm argument is 11.3137.\n\nStep 2: Compute log₂(1+SNR)≈3.5 bit/s/Hz.\n\nStep 3: Multiply by 1.6 MHz to obtain approximately 5.600 Mbit/s.\n\nAnswer: 5.6 Mbit/s.\n\nCheck and interpretation: Omitting the +1 is a high-SNR approximation and is not the exact Shannon expression. Capacity is a theoretical upper bound, not an assured payload rate.",
    "family": "capacity-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-qam-raised-cosine-3",
    "topic": "comm",
    "prompt": "An M-QAM link with M=32 carries 7 Mbit/s before overhead and uses raised-cosine pulse shaping with roll-off α=0.26. What is its ideal RF null-to-null bandwidth in MHz?",
    "choices": [
      "1.764 MHz",
      "1.4 MHz",
      "8.82 MHz",
      "0.882 MHz"
    ],
    "key": 0,
    "why": "Principle: An M-ary symbol carries log₂M bits. For raised-cosine shaping, the real passband null-to-null bandwidth is (1+α) times symbol rate.\n\nStep 1: Each symbol carries log₂(32)=5 bits.\n\nStep 2: The symbol rate is Rs=7/5=1.4 Mbaud.\n\nStep 3: RF bandwidth is (1+0.26)Rs=1.764 MHz.\n\nAnswer: 1.764 MHz.\n\nCheck and interpretation: The one-sided baseband bandwidth is half this passband bandwidth. Reporting that baseband value would introduce a factor-of-two error.",
    "family": "qam-raised-cosine",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-am-efficiency-3",
    "topic": "comm",
    "prompt": "A conventional single-tone AM transmitter has carrier power 16 W and modulation index 0.35. Find useful-sideband power as a percentage of total transmitted power.",
    "choices": [
      "5.7715 %",
      "6.125 %",
      "25.9259 %",
      "2.8857 %"
    ],
    "key": 0,
    "why": "Principle: In conventional AM, the two sidebands together carry Pc m²/2 while the carrier still consumes Pc. Efficiency is sideband power divided by total power.\n\nStep 1: Sideband power is 16×0.35²/2=0.98 W.\n\nStep 2: Total power is Pc(1+m²/2)=16.98 W.\n\nStep 3: Efficiency is 100×m²/(2+m²)=5.7715%.\n\nAnswer: 5.7715 %.\n\nCheck and interpretation: Carrier power cancels from the efficiency ratio. Dividing sideband power by carrier power alone would overestimate useful-power efficiency.",
    "family": "am-efficiency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-fm-carson-3",
    "topic": "comm",
    "prompt": "A message has maximum frequency 5 kHz. An FM modulator produces peak deviation 9 kHz. Using Carson’s rule, what approximate transmission bandwidth in kHz is required?",
    "choices": [
      "28 kHz",
      "18 kHz",
      "10 kHz",
      "14 kHz"
    ],
    "key": 0,
    "why": "Principle: Carson’s rule estimates practical FM bandwidth as B≈2(Δf+fm), incorporating both frequency deviation and message bandwidth.\n\nStep 1: Identify peak deviation Δf=9 kHz, rather than peak-to-peak deviation.\n\nStep 2: Add the highest message frequency: Δf+fm=9+5=14 kHz.\n\nStep 3: Double the sum for the full passband width: B≈28 kHz.\n\nAnswer: 28 kHz.\n\nCheck and interpretation: This is an occupied-bandwidth estimate. Exact FM spectra have infinitely many sidebands, so the result is not a strict mathematical bandlimit.",
    "family": "fm-carson",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-pcm-sqnr-3",
    "topic": "comm",
    "prompt": "A full-scale sinusoid is quantized by an ideal uniform 7-bit quantizer. Under the uniform quantization-noise model, estimate SQNR in dB to four decimal places.",
    "choices": [
      "42.1442 dB",
      "37.8845 dB",
      "49.9257 dB",
      "43.9051 dB"
    ],
    "key": 3,
    "why": "Principle: For a full-scale sinusoid and uniform quantization error with variance Δ²/12, SQNR≈6.0206N+1.7609 dB.\n\nStep 1: The sinusoid signal power is A²/2. For a span of 2A, quantization step is Δ=2A/2ᴺ.\n\nStep 2: Dividing A²/2 by Δ²/12 gives SQNR=(3/2)2^(2N).\n\nStep 3: Taking 10log₁₀ gives 10log₁₀(3/2)+20Nlog₁₀2.\n\nStep 4: For N=7, this is 43.9051 dB.\n\nAnswer: 43.9051 dB.\n\nCheck and interpretation: The 1.76 dB offset comes from the full-scale sinusoidal input assumption. A smaller input amplitude reduces actual SQNR.",
    "family": "pcm-sqnr",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-binary-entropy-3",
    "topic": "comm",
    "prompt": "An independent binary source emits 1 with probability 0.15 and 0 with probability 0.85. Find its entropy in bits/symbol, rounded to four decimal places.",
    "choices": [
      "1 bits/symbol",
      "0.6098 bits/symbol",
      "2.737 bits/symbol",
      "0.3049 bits/symbol"
    ],
    "key": 1,
    "why": "Principle: Entropy is the probability-weighted average information content, H=−Σp log₂p. Both symbols contribute even when their probabilities differ.\n\nStep 1: The information contribution of 1 is −0.15log₂(0.15).\n\nStep 2: The information contribution of 0 is −0.85log₂(0.85).\n\nStep 3: Adding them gives H=0.6098 bits per source symbol.\n\nAnswer: 0.6098 bits/symbol.\n\nCheck and interpretation: Binary entropy cannot exceed 1 bit/symbol and is maximal for equal probabilities. It decreases when one outcome becomes easier to predict.",
    "family": "binary-entropy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-coded-throughput-3",
    "topic": "comm",
    "prompt": "A 32-ary modulation runs at 1.6 Mbaud using a code of rate 0.575. Ignore all other overhead. What is the information-bit rate in Mbit/s?",
    "choices": [
      "8 Mbit/s",
      "13.913 Mbit/s",
      "0.92 Mbit/s",
      "4.6 Mbit/s"
    ],
    "key": 3,
    "why": "Principle: A code rate r means r information bits per transmitted coded bit. Modulation carries log₂M coded bits per symbol.\n\nStep 1: The modulation carries 5 coded bits per symbol.\n\nStep 2: At 1.6 Mbaud the coded rate is 8 Mbit/s.\n\nStep 3: Multiplying by code rate 0.575 yields information rate 4.6 Mbit/s.\n\nAnswer: 4.6 Mbit/s.\n\nCheck and interpretation: Coding adds redundancy, so the information rate must be below the raw coded-bit rate. Dividing by code rate would predict the opposite.",
    "family": "coded-throughput",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-receiver-noise-3",
    "topic": "comm",
    "prompt": "A matched receiver has noise figure 3.5 dB and bandwidth 4 MHz. At T₀=290 K, with k_B=1.38×10⁻²³ J/K, find its equivalent total input-referred noise power Fk_BT₀B in pW.",
    "choices": [
      "0.016 pW",
      "0.0358 pW",
      "0.3584 pW",
      "0.0036 pW"
    ],
    "key": 1,
    "why": "Principle: Noise factor F is a linear power ratio and equals 10^(NF/10). The specified total input-referred noise is F times the thermal input-noise reference.\n\nStep 1: Convert NF=3.5 dB to F=10^(3.5/10)=2.2387.\n\nStep 2: The thermal reference is kT₀B=1.38×10⁻²³×290×4×10⁶ W.\n\nStep 3: Multiply by F and convert W to pW by multiplying by 10¹², giving 0.0358 pW.\n\nAnswer: 0.0358 pW.\n\nCheck and interpretation: The receiver-added equivalent noise alone would use (F−1)kT₀B. The question explicitly requests total FkT₀B, including source thermal noise.",
    "family": "receiver-noise",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-ebn0-conversion-3",
    "topic": "comm",
    "prompt": "A digital link has received signal-to-noise ratio 13 dB measured over bandwidth B. Its bit rate satisfies R_b/B=5 bit/s/Hz. Find E_b/N₀ in dB.",
    "choices": [
      "19.9897 dB",
      "2.6 dB",
      "6.0103 dB",
      "3.9905 dB"
    ],
    "key": 2,
    "why": "Principle: Since SNR=P/(N₀B) and Eb=P/Rb, the linear relation is Eb/N₀=SNR×B/Rb. Decibels convert multiplication to addition.\n\nStep 1: The bandwidth-to-bit-rate ratio is B/Rb=1/5.\n\nStep 2: Thus (Eb/N₀)dB=SNRdB−10log₁₀(Rb/B).\n\nStep 3: Substitute 13−10log₁₀(5)=6.0103 dB.\n\nAnswer: 6.0103 dB.\n\nCheck and interpretation: For spectral efficiency above one bit/s/Hz, Eb/N₀ in dB is smaller than the measured SNR in dB. A linear ratio must not be reported as a decibel value.",
    "family": "ebn0-conversion",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-complex-load-power-3",
    "topic": "em",
    "prompt": "A lossless 50 Ω transmission line is terminated by (35−j22) Ω. If incident average power is 13 mW, find average load power in mW, rounded to four decimal places.",
    "choices": [
      "1.1956 mW",
      "11.8044 mW",
      "9.0575 mW",
      "13 mW"
    ],
    "key": 1,
    "why": "Principle: At a lossless line termination, the reflected power fraction is |Γ|², where Γ=(ZL−Z0)/(ZL+Z0). Delivered power is the remaining fraction of incident power.\n\nStep 1: Compute |Γ|²=[(35−50)²+22²]/[(35+50)²+22²].\n\nStep 2: This gives reflected fraction 0.092.\n\nStep 3: Load power is 13(1−0.092)=11.8044 mW.\n\nAnswer: 11.8044 mW.\n\nCheck and interpretation: Using 1−|Γ| rather than 1−|Γ|² confuses voltage amplitude with power. A passive real part of the load ensures delivered power is nonnegative.",
    "family": "complex-load-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-quarter-wave-transform-3",
    "topic": "em",
    "prompt": "A lossless quarter-wave transmission line has characteristic impedance 55 Ω and load resistance 130 Ω. What is input resistance in Ω?",
    "choices": [
      "130 Ω",
      "23.2692 Ω",
      "55 Ω",
      "307.2727 Ω"
    ],
    "key": 1,
    "why": "Principle: At an electrical length of π/2, a lossless line inverts the load impedance: Zin=Z0²/ZL. This is a frequency-specific impedance transformation.\n\nStep 1: Use Z0=55 Ω and ZL=130 Ω.\n\nStep 2: Square the line impedance: Z0²=3025 Ω².\n\nStep 3: Divide by the load: Zin=3025/130=23.2692 Ω.\n\nAnswer: 23.2692 Ω.\n\nCheck and interpretation: A line one-half wavelength long would reproduce the load instead. The quarter-wave condition is essential to the inversion formula.",
    "family": "quarter-wave-transform",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-vswr-reflected-power-3",
    "topic": "em",
    "prompt": "A lossless line has VSWR=1.8. What percentage of incident power is reflected? Round to four decimal places.",
    "choices": [
      "28.5714 %",
      "91.8367 %",
      "4.0816 %",
      "8.1633 %"
    ],
    "key": 3,
    "why": "Principle: First convert VSWR to voltage-reflection magnitude, then square that magnitude to obtain the reflected power fraction.\n\nStep 1: From S=(1+|Γ|)/(1−|Γ|), rearrange |Γ|=(S−1)/(S+1).\n\nStep 2: For S=1.8, |Γ|=0.2857.\n\nStep 3: The reflected percentage is 100|Γ|²=8.1633%.\n\nAnswer: 8.1633 %.\n\nCheck and interpretation: VSWR itself is an amplitude ratio along the standing wave, not a power-reflection ratio. A matched line has S=1 and zero reflected power.",
    "family": "vswr-reflected-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-waveguide-velocity-3",
    "topic": "em",
    "prompt": "An air-filled rectangular guide has broad wall a=2.6 cm and carries TE₁₀ at 13 GHz. Taking c=3×10⁸ m/s, find group velocity divided by c, rounded to four decimal places.",
    "choices": [
      "1.1159",
      "0.8961",
      "0.4438",
      "0.8031"
    ],
    "key": 1,
    "why": "Principle: For a lossless air-filled waveguide, TE group velocity is vg=c√[1−(fc/f)²]. It is lower than c for a propagating mode above cutoff.\n\nStep 1: TE₁₀ cutoff is fc=c/(2a)=5.7692 GHz after converting centimetres to metres.\n\nStep 2: The operating frequency 13 GHz exceeds cutoff, so propagation is possible.\n\nStep 3: Compute vg/c=√[1−(5.7692/13)²]=0.8961.\n\nAnswer: 0.8961.\n\nCheck and interpretation: The reciprocal factor would give phase velocity divided by c. Phase velocity can exceed c in a waveguide while group velocity remains below c.",
    "family": "waveguide-velocity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-dielectric-impedance-3",
    "topic": "em",
    "prompt": "A uniform plane wave propagates in a lossless nonmagnetic dielectric with relative permittivity 5. Taking free-space impedance as 377 Ω, find intrinsic impedance in Ω.",
    "choices": [
      "842.9976 Ω",
      "75.4 Ω",
      "1885 Ω",
      "168.5995 Ω"
    ],
    "key": 3,
    "why": "Principle: Intrinsic impedance of a lossless medium is η=√(μ/ε). For μr=1, it reduces to η0/√εr.\n\nStep 1: Set μ=μ0 and ε=5ε0.\n\nStep 2: Then η=√(μ0/ε0)/√5=377/√5.\n\nStep 3: The resulting impedance is 168.5995 Ω, which relates electric-field amplitude to magnetic-field amplitude.\n\nAnswer: 168.5995 Ω.\n\nCheck and interpretation: The refractive index is √εr, while intrinsic impedance varies inversely with it for a nonmagnetic medium. Relative permittivity is dimensionless.",
    "family": "dielectric-impedance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-faraday-loop-current-3",
    "topic": "em",
    "prompt": "A 4-turn coil has area 0.035 m² per turn and resistance 8 Ω. Uniform normal flux density is B(t)=0.16cos(160t) T. Neglect inductance. Find peak induced current in A.",
    "choices": [
      "0.112 A",
      "0.0028 A",
      "0.896 A",
      "0.448 A"
    ],
    "key": 3,
    "why": "Principle: Faraday’s law uses the time derivative of total flux linkage NΦ. For a sinusoidal normal field, peak induced emf is NABpeakω.\n\nStep 1: Flux linkage is λ(t)=NAB(t)=4×0.035×0.16cos(160t).\n\nStep 2: Differentiation gives peak emf N A Bpeak ω=3.584 V.\n\nStep 3: With inductance neglected, peak current is emfpeak/R=3.584/8=0.448 A.\n\nAnswer: 0.448 A.\n\nCheck and interpretation: The angular frequency is already in rad/s, so no extra 2π is needed. Lenz’s law specifies the current direction; only the peak magnitude is requested.",
    "family": "faraday-loop-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-skin-depth-3",
    "topic": "em",
    "prompt": "A good nonmagnetic conductor has σ=10⁷ S/m and μ=4π×10⁻⁷ H/m. At 4 MHz, find skin depth in µm using δ=√[2/(ωμσ)].",
    "choices": [
      "112.5395 µm",
      "79.5775 µm",
      "56.2698 µm",
      "795.7747 µm"
    ],
    "key": 1,
    "why": "Principle: In a good conductor, fields decay exponentially into the material. Skin depth is the distance over which field amplitude falls by a factor e.\n\nStep 1: Convert angular frequency: ω=2π×4×10⁶ rad/s.\n\nStep 2: Insert ω, μ=4π×10⁻⁷ and σ=10⁷ into δ=√[2/(ωμσ)].\n\nStep 3: The result in metres is 7.9577e-5 m. Multiplying by 10⁶ gives 79.5775 µm.\n\nAnswer: 79.5775 µm.\n\nCheck and interpretation: Skin depth scales as 1/√f and becomes smaller at higher frequency. Confusing hertz with angular frequency changes the numerical result.",
    "family": "skin-depth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-friis-link-3",
    "topic": "em",
    "prompt": "In a free-space far-field link, transmit power is 4 W, linear antenna gains are G_t=2 and G_r=3, separation is 130 m, and frequency is 1.3 GHz. With c=3×10⁸ m/s and perfect alignment/matching, find received power in nW.",
    "choices": [
      "79.8196 nW",
      "478.9174 nW",
      "1915.6696 nW",
      "119.7293 nW"
    ],
    "key": 1,
    "why": "Principle: The Friis formula is Pr=PtGtGr[λ/(4πR)]² for a matched free-space far-field link. Gains here are linear rather than decibels.\n\nStep 1: The wavelength is λ=c/f=0.3/1.3=0.2308 m.\n\nStep 2: The propagation factor is [0.2308/(4π×130)]².\n\nStep 3: Multiply by PtGtGr=4×2×3 and convert W to nW to obtain 478.9174 nW.\n\nAnswer: 478.9174 nW.\n\nCheck and interpretation: Power falls with separation squared. Omitting either antenna gain or using dB-valued gains directly would change the result.",
    "family": "friis-link",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-poynting-average-3",
    "topic": "em",
    "prompt": "A uniform plane wave in free space has peak electric field 16 V/m. Taking η₀=377 Ω, find time-average power density in W/m².",
    "choices": [
      "0.679 W/m²",
      "48256 W/m²",
      "0.0424 W/m²",
      "0.3395 W/m²"
    ],
    "key": 3,
    "why": "Principle: For a sinusoidal plane wave, the average Poynting magnitude is Epeak Hpeak/2=Epeak²/(2η). Peak and RMS field conventions must be distinguished.\n\nStep 1: The peak magnetic field is Hpeak=Epeak/η₀=16/377 A/m.\n\nStep 2: Average power density is one-half the product of the peak field amplitudes.\n\nStep 3: Thus Sav=16²/(2×377)=0.3395 W/m².\n\nAnswer: 0.3395 W/m².\n\nCheck and interpretation: Using E²/η without the one-half factor is correct only when E denotes RMS field. The problem explicitly supplies peak field.",
    "family": "poynting-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-combined-work-3",
    "topic": "apt",
    "prompt": "A completes a job in 7 days and B in 11 days at constant rates. They start together and work without interference. In how many days is the job complete?",
    "choices": [
      "4.2778 days",
      "18 days",
      "9 days",
      "19.25 days"
    ],
    "key": 0,
    "why": "Principle: Independent work rates add. A completion time must be converted into a fraction of the job completed per unit time before combining workers.\n\nStep 1: A completes 1/7 of the job per day and B completes 1/11.\n\nStep 2: Their combined rate is (7+11)/(7×11) jobs/day.\n\nStep 3: Time is the reciprocal, 7×11/(7+11)=4.2778 days.\n\nAnswer: 4.2778 days.\n\nCheck and interpretation: The combined time is less than 7 days, the faster individual time. Averaging the completion times would fail this basic check.",
    "family": "combined-work",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-equal-distance-speed-3",
    "topic": "apt",
    "prompt": "A traveller covers 35 km at 36 km/h and the next 35 km at 56 km/h. Ignoring stops, what is the overall average speed in km/h?",
    "choices": [
      "46 km/h",
      "44.8999 km/h",
      "21.913 km/h",
      "43.8261 km/h"
    ],
    "key": 3,
    "why": "Principle: Average speed is total distance divided by total time. Equal distances at different speeds lead to a harmonic mean, not an arithmetic mean.\n\nStep 1: Total distance is 70 km.\n\nStep 2: Travel time is 35/36+35/56 h.\n\nStep 3: Divide distance by time: vavg=2v₁v₂/(v₁+v₂)=43.8261 km/h.\n\nAnswer: 43.8261 km/h.\n\nCheck and interpretation: More time is spent on the slower segment, so the average is below the arithmetic mean of the two speeds. The common segment distance cancels.",
    "family": "equal-distance-speed",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-markup-discount-3",
    "topic": "apt",
    "prompt": "An item is marked 26% above its cost price and then sold at a 8% discount on marked price. What is the net profit percentage relative to cost?",
    "choices": [
      "18 %",
      "34 %",
      "15.92 %",
      "7.96 %"
    ],
    "key": 2,
    "why": "Principle: Markup is based on cost while discount is based on marked price. Successive percentage operations multiply their scale factors.\n\nStep 1: Take cost as 100 units. Marked price is 100×(1+26/100)=126.\n\nStep 2: Selling price is 126×(1−8/100)=115.92.\n\nStep 3: Profit percentage on cost is selling price minus 100, namely 15.92%.\n\nAnswer: 15.92 %.\n\nCheck and interpretation: Simply subtracting discount percentage from markup percentage ignores their different bases. The multiplicative calculation also works when the net result is a loss.",
    "family": "markup-discount",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-committee-selection-3",
    "topic": "apt",
    "prompt": "A committee of 2 people is selected uniformly from 11 candidates, including two named candidates A and B. What is the probability both A and B are selected?",
    "choices": [
      "0.1818",
      "0.0331",
      "0.0182",
      "0.1"
    ],
    "key": 2,
    "why": "Principle: Committee selection is without replacement. Count committees that contain both named people and divide by the count of all equally likely committees.\n\nStep 1: All committees number C(11,2).\n\nStep 2: With A and B already included, choose the remaining 0 members from 9, giving C(9,0).\n\nStep 3: Their ratio simplifies to r(r−1)/[n(n−1)]=2×1/(11×10)=0.0182.\n\nAnswer: 0.0182.\n\nCheck and interpretation: Multiplying r/n by itself incorrectly treats the two inclusion events as independent. The second inclusion probability changes after the first is fixed.",
    "family": "committee-selection",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-pipes-drain-3",
    "topic": "apt",
    "prompt": "An inlet fills an empty tank in 5 hours. A drain empties a full tank in 11 hours. Both are opened together when the tank is empty, with constant flow rates. How long until it fills?",
    "choices": [
      "3.4375 hours",
      "11 hours",
      "9.1667 hours",
      "6 hours"
    ],
    "key": 2,
    "why": "Principle: The inlet contributes a positive fill rate and the drain a negative fill rate. Net filling time is the reciprocal of their rate difference.\n\nStep 1: The inlet rate is 1/5 tank/h and drain rate is 1/11 tank/h.\n\nStep 2: Net rate is 1/5−1/11=6/[5×11] tank/h.\n\nStep 3: Thus filling time is 5×11/6=9.1667 hours.\n\nAnswer: 9.1667 hours.\n\nCheck and interpretation: The drain makes filling slower than the inlet alone, so the answer must exceed the inlet’s filling time. Adding rates would describe two inlets.",
    "family": "pipes-drain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-updated-average-3",
    "topic": "apt",
    "prompt": "The average of 7 observations is 23. One observation equal to 13 is removed. What is the mean of the remaining observations?",
    "choices": [
      "18",
      "21.1429",
      "24.6667",
      "12.3333"
    ],
    "key": 2,
    "why": "Principle: Recover the original total from mean times count, subtract the removed observation, then divide by the new count.\n\nStep 1: The original sum is 7×23=161.\n\nStep 2: After removing 13, the sum becomes 148 and the count becomes 6.\n\nStep 3: The new mean is 148/6=24.6667.\n\nAnswer: 24.6667.\n\nCheck and interpretation: The removed value lies below the original mean, so removing it raises the mean. Dividing by the original count would miss the count change.",
    "family": "updated-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-compound-growth-3",
    "topic": "apt",
    "prompt": "A population grows at 3.5% per year compounded annually for two years. What is the total percentage increase over its initial value?",
    "choices": [
      "7 %",
      "12.25 %",
      "7.1225 %",
      "3.5612 %"
    ],
    "key": 2,
    "why": "Principle: Annual compounding applies each year’s growth to the previous year’s enlarged population. The two-year growth factor is (1+r)².\n\nStep 1: Convert the annual percentage to rate r=3.5/100.\n\nStep 2: After two years, final/initial=(1+3.5/100)².\n\nStep 3: Subtract one and multiply by 100 to obtain total growth 7.1225%.\n\nAnswer: 7.1225 %.\n\nCheck and interpretation: The result exceeds the simple two-year increase 7% because the first year’s increase also grows in the second year.",
    "family": "compound-growth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-arithmetic-sum-3",
    "topic": "apt",
    "prompt": "A production schedule makes 5 units on day 1 and increases output by 4 units each successive day. How many units are made over the first 13 days?",
    "choices": [
      "689 units",
      "377 units",
      "117 units",
      "429 units"
    ],
    "key": 1,
    "why": "Principle: Daily outputs form an arithmetic progression. Its total is the number of terms times the average of the first and last terms.\n\nStep 1: First output a=5; common difference d=4.\n\nStep 2: Day-13 output is a+(n−1)d=5+12×4=53.\n\nStep 3: Total is n[2a+(n−1)d]/2=13×[5+53]/2=377 units.\n\nAnswer: 377 units.\n\nCheck and interpretation: There are n−1 increases between the first and nth days. Using n increases would shift every endpoint calculation by one day.",
    "family": "arithmetic-sum",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-without-replacement-3",
    "topic": "apt",
    "prompt": "A box contains 8 working and 6 defective components. Two are drawn randomly without replacement. What is the probability that both work?",
    "choices": [
      "0.3265",
      "0.5714",
      "0.3077",
      "0.6923"
    ],
    "key": 2,
    "why": "Principle: Without replacement, the second draw’s probabilities depend on the first draw. Use the multiplication rule with a conditional probability.\n\nStep 1: The first component works with probability 8/14.\n\nStep 2: If it works, 7 working components remain among 13 total.\n\nStep 3: Multiply: P(both work)=(8/14)×(7/13)=0.3077.\n\nAnswer: 0.3077.\n\nCheck and interpretation: Squaring the first-draw probability would apply to replacement or independent draws. Here taking out a working component slightly lowers the next success probability.",
    "family": "without-replacement",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-matrix-power-4",
    "topic": "math",
    "prompt": "A 2×2 matrix A has trace 12 and determinant 35. What is trace(A³)?",
    "choices": [
      "468",
      "1728",
      "42875",
      "74"
    ],
    "key": 0,
    "why": "Principle: For a 2×2 matrix, trace(A³)=(trace A)³−3(det A)(trace A). This follows from the eigenvalue sum and product, even when the matrix is not diagonalizable.\n\nStep 1: Let the eigenvalues be λ₁ and λ₂. Then λ₁+λ₂=12 and λ₁λ₂=35.\n\nStep 2: Expand (λ₁+λ₂)³=λ₁³+λ₂³+3λ₁λ₂(λ₁+λ₂).\n\nStep 3: Rearrange to get trace(A³)=12³−3×35×12=468.\n\nAnswer: 468.\n\nCheck and interpretation: The eigenvalues here are 5 and 7, whose cubes add to the same result. Cubing the trace directly retains unwanted cross terms.",
    "family": "matrix-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-conditional-binomial-4",
    "topic": "math",
    "prompt": "6 packets are transmitted independently, each with error probability 0.2. Given that at least one packet is erroneous, what is the probability that exactly one is erroneous? Round to four decimal places.",
    "choices": [
      "0.5329",
      "0.3932",
      "0.7379",
      "0.4671"
    ],
    "key": 0,
    "why": "Principle: A conditional probability is the probability of the intersection divided by the conditioning-event probability. The error count has a binomial distribution.\n\nStep 1: Let X count erroneous packets: X~Binomial(6,0.2).\n\nStep 2: P(X=1)=C(6,1)×0.2×0.8^5=0.3932.\n\nStep 3: P(X≥1)=1−P(X=0)=1−0.8^6=0.7379.\n\nStep 4: Since {X=1} is contained in {X≥1}, divide the first probability by the second: 0.5329.\n\nAnswer: 0.5329.\n\nCheck and interpretation: The conditional probability is larger than the unconditional probability of exactly one error because all zero-error trials have been excluded.",
    "family": "conditional-binomial",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-exponential-interval-4",
    "topic": "math",
    "prompt": "A component lifetime T is exponentially distributed with mean 5 hours. Given T>5 hours, find P(2T is between 20 and 30 hours | T>5 hours). Round to four decimal places.",
    "choices": [
      "0.2325",
      "0.0855",
      "0.3679",
      "0.6321"
    ],
    "key": 0,
    "why": "Principle: The exponential distribution is memoryless: after surviving a specified time, the residual lifetime has the same distribution as the original lifetime.\n\nStep 1: The event 20<2T<30 is equivalent to 10<T<15.\n\nStep 2: The survival function is P(T>t)=exp(−t/5).\n\nStep 3: Conditioning on T>5 gives [e⁻²−e⁻³]/e⁻¹=e⁻¹−e⁻².\n\nStep 4: Numerically the probability is 0.2325. The strict endpoints do not matter for a continuous distribution.\n\nAnswer: 0.2325.\n\nCheck and interpretation: Using the unconditional interval probability would omit the normalization for the component already having survived one mean lifetime.",
    "family": "exponential-interval",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-double-integral-4",
    "topic": "math",
    "prompt": "Evaluate ∫₀¹ ∫₀ˣ 5y^4 dy dx. Round to four decimal places.",
    "choices": [
      "0.2",
      "0.8333",
      "0.1429",
      "0.1667"
    ],
    "key": 3,
    "why": "Principle: In an iterated integral the inner variable is integrated first, while the outer variable is treated as a constant bound.\n\nStep 1: The inner antiderivative of 5y^4 is y^5.\n\nStep 2: Evaluating at y=x and y=0 leaves x^5.\n\nStep 3: The remaining integral is ∫₀¹x^5dx=[x^6/6]₀¹=1/6=0.1667.\n\nAnswer: 0.1667.\n\nCheck and interpretation: The triangular integration region is 0≤y≤x≤1. Replacing the upper inner limit by 1 would incorrectly change the region to a square.",
    "family": "double-integral",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-ode-laplace-4",
    "topic": "math",
    "prompt": "A causal system obeys y″+12y′+35y=e⁻ᵗu(t), with y(0⁻)=y′(0⁻)=0. What is Y(s) evaluated at s=1? Round to four decimal places.",
    "choices": [
      "0.0208",
      "0.0286",
      "0.0769",
      "0.0104"
    ],
    "key": 3,
    "why": "Principle: With zero initial conditions, differentiation in the Laplace domain multiplies by s. The input transform of e⁻ᵗu(t) is 1/(s+1).\n\nStep 1: Transform the differential equation: [s²+12s+35]Y(s)=1/(s+1).\n\nStep 2: Factor the quadratic as (s+5)(s+7).\n\nStep 3: Therefore Y(s)=1/[(s+1)(s+5)(s+7)].\n\nStep 4: At s=1 the denominator is 2×6×8, yielding 0.0104.\n\nAnswer: 0.0104.\n\nCheck and interpretation: The input pole at −1 must be included. Evaluating only the system transfer function at s=1 would be twice the requested output-transform value.",
    "family": "ode-laplace",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-constrained-minimum-4",
    "topic": "math",
    "prompt": "Real numbers x and y satisfy x+y=6. What is the minimum possible value of x²+y²?",
    "choices": [
      "36",
      "9",
      "3",
      "18"
    ],
    "key": 3,
    "why": "Principle: A quadratic restricted to a linear constraint can be minimized by substitution or by the Cauchy–Schwarz inequality.\n\nStep 1: Substitute y=6−x into the objective: f(x)=x²+(6−x)².\n\nStep 2: Differentiate: f′(x)=4x−12. Setting it to zero gives x=3, so y=3.\n\nStep 3: The second derivative is 4>0, establishing a strict minimum.\n\nStep 4: The minimum is 2×(3)²=18.\n\nAnswer: 18.\n\nCheck and interpretation: The inequality (x+y)²≤2(x²+y²) gives the same lower bound 36/2, with equality only at x=y.",
    "family": "constrained-minimum",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-gaussian-moment-4",
    "topic": "math",
    "prompt": "X is a zero-mean Gaussian random variable with variance 5. What is Var(X²)?",
    "choices": [
      "75",
      "25",
      "10",
      "50"
    ],
    "key": 3,
    "why": "Principle: For a zero-mean Gaussian with variance σ², the fourth moment is E[X⁴]=3σ⁴. Variance of X² uses both its second and fourth moments.\n\nStep 1: E[X²]=5, so (E[X²])²=25.\n\nStep 2: The Gaussian fourth moment is E[X⁴]=3×5²=75.\n\nStep 3: Var(X²)=E[X⁴]−(E[X²])²=75−25=50.\n\nAnswer: 50.\n\nCheck and interpretation: Using E[X⁴] alone would give a raw moment, not a variance. Although E[X]=0, E[X²] is positive.",
    "family": "gaussian-moment",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-improper-integral-4",
    "topic": "math",
    "prompt": "Evaluate ∫₀∞ 1/(x²+25) dx. Round to four decimal places.",
    "choices": [
      "0.6283",
      "0.3142",
      "0.2",
      "7.854"
    ],
    "key": 1,
    "why": "Principle: The antiderivative of 1/(x²+a²) for a>0 is arctan(x/a)/a. An improper integral is evaluated as a limit.\n\nStep 1: Here a=5, so the antiderivative is arctan(x/5)/5.\n\nStep 2: As x→∞, arctan(x/5)→π/2; at x=0 it is zero.\n\nStep 3: Subtract the limits: the integral is π/(2×5)=0.3142.\n\nAnswer: 0.3142.\n\nCheck and interpretation: The result decreases as a grows, consistent with the integrand becoming smaller at every fixed x. Integrating over the entire real line would double the answer.",
    "family": "improper-integral",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-pdf-second-moment-4",
    "topic": "math",
    "prompt": "X has density f(x)=6x^5 for 0<x<1 and zero otherwise. Find E[X²], rounded to four decimal places.",
    "choices": [
      "0.8571",
      "0.75",
      "0.7347",
      "0.125"
    ],
    "key": 1,
    "why": "Principle: For a continuous random variable, E[g(X)]=∫g(x)f(x)dx over the support. A second moment is not generally the square of the mean.\n\nStep 1: First check normalization: ∫₀¹6x^5dx=1.\n\nStep 2: Multiply the density by x² to form 6x^7.\n\nStep 3: Integrate: E[X²]=[6x^8/8]₀¹=6/8=0.75.\n\nAnswer: 0.75.\n\nCheck and interpretation: Since 0<X<1, E[X²]≤E[X]=0.8571. The computed second moment satisfies that bound.",
    "family": "pdf-second-moment",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-loaded-divider-4",
    "topic": "networks",
    "prompt": "A 14 V ideal source drives R₁=5 kΩ in series with R₂=11 kΩ. A load R_L=7 kΩ is connected across R₂. Find the load voltage in V, rounded to four decimal places.",
    "choices": [
      "9.625",
      "8.1667",
      "6.4551",
      "7.5449"
    ],
    "key": 2,
    "why": "Principle: A load across the lower divider resistor changes that resistor to a parallel equivalent. Apply the divider rule only after forming this equivalent.\n\nStep 1: The lower equivalent is R₂∥RL=11×7/(11+7)=4.2778 kΩ.\n\nStep 2: Total source resistance is 5+4.2778=9.2778 kΩ.\n\nStep 3: The load shares the parallel-branch voltage: VL=14×4.2778/(9.2778)=6.4551 V.\n\nAnswer: 6.4551.\n\nCheck and interpretation: The unloaded voltage is 9.625 V, which is larger. Treating the load as absent overestimates the actual voltage.",
    "family": "loaded-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rc-switching-4",
    "topic": "networks",
    "prompt": "An initially uncharged 5 µF capacitor is charged from a 12 V source through 6 kΩ at t=0. Find vC at t=30 ms, in V. Round to four decimal places.",
    "choices": [
      "7.5854",
      "4.4146",
      "12",
      "10.376"
    ],
    "key": 0,
    "why": "Principle: The capacitor voltage in a first-order network is the final value plus the initial-to-final difference multiplied by exp(−t/τ).\n\nStep 1: The time constant is RC=6×5 ms=30 ms, using kΩ·µF=ms.\n\nStep 2: The initial voltage is 0 V and the DC final voltage is 12 V.\n\nStep 3: Thus vC(t)=12[1−exp(−t/30 ms)].\n\nStep 4: At the specified t=τ, vC=12(1−e⁻¹)=7.5854 V.\n\nAnswer: 7.5854.\n\nCheck and interpretation: At one time constant charging has completed about 63.2% of the final voltage. The factor e⁻¹ instead describes the remaining voltage error.",
    "family": "rc-switching",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rl-natural-response-4",
    "topic": "networks",
    "prompt": "An inductor of 12 mH carries 0.4 A before being disconnected from its source and allowed to discharge through 6 Ω at t=0. Find current at t=4 ms in A. Round to four decimal places.",
    "choices": [
      "0.1472",
      "0.3459",
      "0.2",
      "0.0541"
    ],
    "key": 3,
    "why": "Principle: Inductor current is continuous through switching when there is no impulse voltage. The source-free RL response is i(t)=i(0⁺)exp(−Rt/L).\n\nStep 1: The initial current after switching is 0.4 A.\n\nStep 2: The time constant is L/R=12/6 ms=2 ms.\n\nStep 3: The requested instant is twice the time constant, so i=0.4e⁻²=0.0541 A.\n\nAnswer: 0.0541.\n\nCheck and interpretation: The resistor dissipates stored magnetic energy and current decays monotonically to zero. The natural-response formula does not contain a charging term 1−e⁻ᵗ/τ.",
    "family": "rl-natural-response",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-ac-power-match-4",
    "topic": "networks",
    "prompt": "An AC Thévenin equivalent has RMS voltage 18 V and impedance (6+j5) Ω. The load impedance can be any passive complex value. What is the maximum average load power in W?",
    "choices": [
      "27",
      "54",
      "13.5",
      "10.371"
    ],
    "key": 2,
    "why": "Principle: Maximum average AC power is transferred to the complex-conjugate load: ZL=Zth*. RMS voltage can be used directly in I²R.\n\nStep 1: Choose ZL=6−j5 Ω so the reactances cancel.\n\nStep 2: The total impedance is 12 Ω and RMS current is 18/12 A.\n\nStep 3: Load power is I²RL=(18/12)²×6=13.5 W.\n\nStep 4: Equivalently Pmax=Vth,rms²/(4Rth).\n\nAnswer: 13.5.\n\nCheck and interpretation: Matching the impedance magnitude alone does not cancel reactance. Using peak voltage in the RMS formula would introduce a factor-of-two error.",
    "family": "ac-power-match",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-complex-load-power-4",
    "topic": "networks",
    "prompt": "A sinusoidal source of 24 V RMS is applied across Z=(6+j9) Ω. Find average power absorbed in W, rounded to four decimal places.",
    "choices": [
      "53.2512",
      "96",
      "29.5385",
      "44.3077"
    ],
    "key": 2,
    "why": "Principle: Average power is Vrms² times the real part of admittance. A reactive element exchanges energy but absorbs zero net average power.\n\nStep 1: The admittance is 1/Z=(6−j9)/(117) S.\n\nStep 2: Its real part is R/(R²+X²)=6/117 S.\n\nStep 3: Therefore P=24²×6/117=29.5385 W.\n\nAnswer: 29.5385.\n\nCheck and interpretation: Vrms²/|Z| is apparent power, not real power. The load power factor is R/|Z| and must be included.",
    "family": "complex-load-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-series-resonance-q-4",
    "topic": "networks",
    "prompt": "A series RLC circuit has R=7 Ω, L=5 mH and C=10 µF. Find its quality factor Q, rounded to four decimal places.",
    "choices": [
      "156.5248",
      "1.5972",
      "3.1944",
      "6.3888"
    ],
    "key": 2,
    "why": "Principle: For a series resonant RLC circuit, Q=ω₀L/R=(1/R)√(L/C), where ω₀=1/√(LC).\n\nStep 1: Convert L=5×10⁻³ H and C=10×10⁻⁶ F.\n\nStep 2: The characteristic impedance √(L/C)=√(500)=22.3607 Ω.\n\nStep 3: Divide by the series resistance: Q=22.3607/7=3.1944.\n\nAnswer: 3.1944.\n\nCheck and interpretation: Q is dimensionless. Increasing series resistance dissipates more energy per cycle and lowers Q, which rules out formulas proportional to R.",
    "family": "series-resonance-q",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-current-divider-4",
    "topic": "networks",
    "prompt": "An ideal current source supplies 5 mA into parallel resistors 6 kΩ and 9 kΩ. Find current through the 6 kΩ branch in mA, rounded to four decimal places.",
    "choices": [
      "2",
      "12.5",
      "3.3333",
      "3"
    ],
    "key": 3,
    "why": "Principle: Parallel-branch currents divide in proportion to conductance, or inversely to resistance. The numerator contains the other branch resistance in the two-resistor divider formula.\n\nStep 1: The equivalent resistance is 6×9/(6+9) kΩ.\n\nStep 2: The common node voltage is the source current times this equivalent resistance.\n\nStep 3: Divide that voltage by 6 kΩ to obtain I₁=5×9/(6+9)=3 mA.\n\nAnswer: 3.\n\nCheck and interpretation: Because 6<9, this branch carries more than half the source current. The other branch current is 2 mA, and their sum is 5 mA.",
    "family": "current-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-twoport-z-4",
    "topic": "networks",
    "prompt": "A resistive T network has a 6 Ω series arm at port 1, a 8 Ω shunt arm from the central node to ground, and a 10 Ω series arm at port 2. With currents defined entering both ports, what is z₁₁?",
    "choices": [
      "8 Ω",
      "14 Ω",
      "6 Ω",
      "24 Ω"
    ],
    "key": 1,
    "why": "Principle: The z parameter z₁₁ is V₁/I₁ with I₂=0. An open second port makes the second series arm carry zero current.\n\nStep 1: Set I₂=0 by opening port 2. No voltage drop appears across its series arm.\n\nStep 2: The input current then flows through the port-1 arm and the shunt arm in series.\n\nStep 3: Therefore z₁₁=R₁+Rsh=6+8=14 Ω.\n\nAnswer: 14 Ω.\n\nCheck and interpretation: The port-2 series resistance does not affect z₁₁ under the open-port condition. Shorting port 2 instead would compute a different driving-point condition.",
    "family": "twoport-z",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-charge-sharing-4",
    "topic": "networks",
    "prompt": "A 6 µF capacitor initially at 14 V is connected in parallel, with matching polarities, to an initially uncharged 9 µF capacitor. After settling through a small resistance, what is their common voltage in V?",
    "choices": [
      "14",
      "8.4",
      "5.6",
      "35"
    ],
    "key": 2,
    "why": "Principle: For an isolated pair of capacitors, total charge is conserved during redistribution. Electrostatic energy is not conserved because the connecting resistance dissipates energy.\n\nStep 1: The initial total charge is Q=C₁V₁+C₂V₂=6×14+9×0=84 µC.\n\nStep 2: The final parallel capacitance is C₁+C₂=15 µF.\n\nStep 3: The common final voltage is Q/(C₁+C₂)=84/15=5.6 V.\n\nAnswer: 5.6.\n\nCheck and interpretation: The result lies between the two initial voltages. Equating initial and final stored energies would incorrectly ignore dissipation during connection.",
    "family": "charge-sharing",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-exponential-convolution-4",
    "topic": "signals",
    "prompt": "For x(t)=e^(−5t)u(t) and h(t)=e^(−7t)u(t), find y(0.5) where y=x*h. Round to four decimal places.",
    "choices": [
      "0.0025",
      "0.1123",
      "0.0519",
      "0.0259"
    ],
    "key": 3,
    "why": "Principle: Convolution of two causal exponentials is integrated only over the overlap 0≤τ≤t. The output is a difference of exponentials divided by their rate difference.\n\nStep 1: Write y(t)=∫₀ᵗ e^(−5τ)e^(−7(t−τ))dτ.\n\nStep 2: Factor out e^(−7t) and integrate e^(2τ).\n\nStep 3: This gives y(t)=[e^(−5t)−e^(−7t)]/2 for t≥0.\n\nStep 4: At t=0.5, the value is 0.0259.\n\nAnswer: 0.0259.\n\nCheck and interpretation: Pointwise multiplication of the input and impulse response is not convolution. Since both functions are nonnegative, the convolution must also be nonnegative.",
    "family": "exponential-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-discrete-convolution-4",
    "topic": "signals",
    "prompt": "For x[n]=(0.22)ⁿu[n] and h[n]=(0.73)ⁿu[n], calculate (x*h)[3]. Round to four decimal places.",
    "choices": [
      "0.5522",
      "0.0041",
      "0.3997",
      "0.2761"
    ],
    "key": 0,
    "why": "Principle: For causal discrete sequences, the convolution at index n is a finite sum over m=0,…,n. A finite geometric sum gives a closed form.\n\nStep 1: At n=3, sum aᵐb^(3−m) for m=0,1,2,3.\n\nStep 2: The four terms are b³+ab²+a²b+a³, where a=0.22 and b=0.73.\n\nStep 3: Using (b⁴−a⁴)/(b−a), the sum equals 0.5522.\n\nAnswer: 0.5522.\n\nCheck and interpretation: There are four overlapping terms at index 3, including both endpoints. Omitting m=0 or m=3 drops a valid impulse-response contribution.",
    "family": "discrete-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-alias-folding-4",
    "topic": "signals",
    "prompt": "The signal cos(2π×11000t) is sampled at 19 ksample/s. What positive alias frequency is observed within the first Nyquist band, in kHz?",
    "choices": [
      "11 kHz",
      "8 kHz",
      "30 kHz",
      "9.5 kHz"
    ],
    "key": 1,
    "why": "Principle: Sampling replicates spectra at integer multiples of fs. A real sinusoid is represented by a frequency in the first Nyquist band 0≤f≤fs/2.\n\nStep 1: The original frequency is 11 kHz, above the Nyquist frequency 9.5 kHz.\n\nStep 2: Subtract fs=19 kHz to get -8 kHz. A cosine at a negative frequency has the same samples as its positive-frequency counterpart.\n\nStep 3: Thus the baseband alias is |11−19|=8 kHz.\n\nAnswer: 8 kHz.\n\nCheck and interpretation: The result 8 kHz lies below fs/2=9.5 kHz. The original signal is therefore indistinguishable from this lower-frequency cosine after sampling.",
    "family": "alias-folding",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-lti-sinusoidal-4",
    "topic": "signals",
    "prompt": "A stable LTI system has H(s)=1/(s+5). With input cos(2t), what is the steady-state output amplitude? Round to four decimal places.",
    "choices": [
      "0.2",
      "0.0345",
      "0.1857",
      "5.3852"
    ],
    "key": 2,
    "why": "Principle: A sinusoid is an eigenfunction of an LTI system. Its steady-state amplitude is multiplied by the frequency-response magnitude at the input angular frequency.\n\nStep 1: Evaluate H(jω) at ω=2 rad/s: H(j2)=1/(5+j2).\n\nStep 2: The denominator magnitude is √(5²+2²)=√29.\n\nStep 3: The input has unit amplitude, so output amplitude is |H(j2)|=1/√29=0.1857.\n\nAnswer: 0.1857.\n\nCheck and interpretation: The squared magnitude is a power ratio, not an amplitude ratio. The decaying transient is excluded by the steady-state qualification.",
    "family": "lti-sinusoidal",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-sequence-energy-4",
    "topic": "signals",
    "prompt": "Find the total energy of x[n]=(0.36)ⁿu[n], rounded to four decimal places.",
    "choices": [
      "1.5625",
      "0.1489",
      "0.8853",
      "1.1489"
    ],
    "key": 3,
    "why": "Principle: Discrete-time energy is the sum of squared magnitudes over every integer index. Causality restricts the nonzero terms to n≥0.\n\nStep 1: Square the magnitude to get |x[n]|²=(0.1296)ⁿ for n≥0.\n\nStep 2: Since |0.36|<1, the geometric series converges.\n\nStep 3: E=Σₙ₌₀∞a²ⁿ=1/(1−a²)=1/(1−0.1296)=1.1489.\n\nAnswer: 1.1489.\n\nCheck and interpretation: The n=0 sample equals one and must be included. Summing x[n] without squaring would give an area-like sum, not energy.",
    "family": "sequence-energy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-shifted-impulse-4",
    "topic": "signals",
    "prompt": "An LTI system has h(t)=e^(−5t)u(t). Its input is δ(t−1)+2δ(t−2). Find y(1.5), rounded to four decimal places.",
    "choices": [
      "24.4471",
      "0.1642",
      "0.0006",
      "0.0821"
    ],
    "key": 3,
    "why": "Principle: Each delayed impulse produces a delayed copy of the impulse response. Causality determines which copies have begun at the observation time.\n\nStep 1: By linearity, y(t)=h(t−1)+2h(t−2).\n\nStep 2: At t=1.5, t−1=0.5 but t−2=−0.5, so the second term is zero.\n\nStep 3: The remaining term is e^(−5×0.5)=0.0821.\n\nAnswer: 0.0821.\n\nCheck and interpretation: Ignoring the unit-step factor would incorrectly include a response to the impulse at t=2 before it has occurred.",
    "family": "shifted-impulse",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-dft-bin-amplitude-4",
    "topic": "signals",
    "prompt": "For N=8, x[n]=cos(2π×2n/N), 0≤n<N. Using X[r]=Σx[n]e^(−j2πrn/N), what is |X[2]|?",
    "choices": [
      "8",
      "4",
      "1",
      "2"
    ],
    "key": 1,
    "why": "Principle: A cosine is half the sum of two complex exponentials. The unnormalized DFT gives magnitude N for a complex exponential aligned with a DFT bin.\n\nStep 1: Expand x[n]=(e^(j2π2n/N)+e^(−j2π2n/N))/2.\n\nStep 2: For N=8>4, bins 2 and N−2 are distinct, so each exponential contributes to a different DFT bin.\n\nStep 3: At r=2, the matching exponential contributes N/2=4, while the other sums to zero.\n\nAnswer: 4.\n\nCheck and interpretation: The DFT convention has no 1/N factor in the forward transform. DC and Nyquist cosines need special treatment, but bin 2 is neither for this N.",
    "family": "dft-bin-amplitude",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-fourier-dc-4",
    "topic": "signals",
    "prompt": "For x(t)=e^(−6|t|), define X(ω)=∫₋∞∞x(t)e^(−jωt)dt. Find X(0), rounded to four decimal places.",
    "choices": [
      "0.1667",
      "3",
      "0.3333",
      "12"
    ],
    "key": 2,
    "why": "Principle: The Fourier transform at zero frequency equals the signed area under the time-domain signal. Even symmetry reduces the integral to twice its positive-time half.\n\nStep 1: Set ω=0 so the complex exponential in the transform becomes one.\n\nStep 2: Since x(t) is even, X(0)=2∫₀∞e^(−6t)dt.\n\nStep 3: The one-sided integral is 1/6, hence X(0)=2/6=0.3333.\n\nAnswer: 0.3333.\n\nCheck and interpretation: This is an amplitude-area quantity, not energy. Squaring the signal first would produce a different integral.",
    "family": "fourier-dc",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-difference-equation-4",
    "topic": "signals",
    "prompt": "A causal system at initial rest obeys y[n]−0.3y[n−1]=x[n]. For x[n]=(−1)ⁿu[n], what is the amplitude of the asymptotic alternating output? Round to four decimal places.",
    "choices": [
      "1.4286",
      "0.2308",
      "1.3",
      "0.7692"
    ],
    "key": 3,
    "why": "Principle: The steady alternating input has discrete-time angular frequency π. A stable system scales it by the magnitude of H(eʲπ).\n\nStep 1: At initial rest, H(z)=1/(1−0.3z⁻¹). The pole magnitude 0.3 is less than one, ensuring a decaying transient.\n\nStep 2: At z=eʲπ=−1, H(−1)=1/(1+0.3).\n\nStep 3: Thus the asymptotic output is [1/(1+0.3)](−1)ⁿ and its amplitude is 0.7692.\n\nAnswer: 0.7692.\n\nCheck and interpretation: Evaluating at z=1 would give the DC gain, not the alternating-input gain. The input switch-on creates a transient that vanishes as n grows.",
    "family": "difference-equation",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-diode-bias-4",
    "topic": "devices",
    "prompt": "An ideal p-n diode has I_S=10 µA, ideality factor 1 and V_T=26 mV. Find the forward voltage needed for 5 mA, in V, rounded to four decimal places.",
    "choices": [
      "0.7",
      "0.0418",
      "0.1616",
      "0.3233"
    ],
    "key": 2,
    "why": "Principle: The ideal Shockley law is I=IS[exp(V/(nVT))−1]. Solve the exponential relationship for voltage rather than assuming a fixed diode drop.\n\nStep 1: Convert IS=10 µA to 0.01 mA, matching the current unit.\n\nStep 2: Rearrange to exp(V/VT)=1+I/IS=1+5/0.01=501.\n\nStep 3: Taking the natural logarithm gives V=0.026 ln(501)=0.1616 V.\n\nAnswer: 0.1616.\n\nCheck and interpretation: A natural logarithm is required because the diode equation uses base e. A fixed 0.7 V approximation is inconsistent with the specified ideal diode parameters.",
    "family": "diode-bias",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-diode-incremental-4",
    "topic": "devices",
    "prompt": "A diode biased at 5 mA has n=1 and V_T=26 mV. A small 10 mV AC source is applied through 6 kΩ, with the DC bias maintained separately. What is the diode AC voltage amplitude in mV? Round to four decimal places.",
    "choices": [
      "10",
      "0.0087",
      "4.6429",
      "9.9913"
    ],
    "key": 1,
    "why": "Principle: Linearize the diode at its bias point using rd=nVT/ID, then solve a voltage divider. This incremental model applies only for sufficiently small AC excursions.\n\nStep 1: The incremental resistance is rd=0.026/(5×10⁻³)=5.2 Ω.\n\nStep 2: The source resistance is 6000 Ω, so the diode receives fraction rd/(R+rd).\n\nStep 3: Its voltage amplitude is 10×5.2/(6000+5.2)=0.0087 mV.\n\nAnswer: 0.0087.\n\nCheck and interpretation: The very small diode voltage compared with VT validates the small-signal approximation. The source’s full 10 mV does not appear across the diode.",
    "family": "diode-incremental",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-active-check-4",
    "topic": "devices",
    "prompt": "An NPN has grounded emitter, β=90, V_BE=0.7 V, R_B=700 kΩ from collector-independent V_CC=14 V to base, and R_C=1.8 kΩ from V_CC to collector. Assuming forward-active operation, find V_CE in V. Round to four decimal places.",
    "choices": [
      "10.922",
      "14",
      "13.9658",
      "3.078"
    ],
    "key": 0,
    "why": "Principle: For fixed-base bias in forward-active operation, IB=(VCC−VBE)/RB and IC=βIB. Collector voltage then follows from the resistor drop.\n\nStep 1: The base current is (14−0.7)/700=0.019 mA.\n\nStep 2: The collector current is 90×0.019=1.71 mA.\n\nStep 3: The collector drop is IC RC=3.078 V.\n\nStep 4: Thus VCE=VCC−ICRC=14−3.078=10.922 V.\n\nAnswer: 10.922.\n\nCheck and interpretation: VCE exceeds VBE=0.7 V here, so the collector-base junction remains reverse biased and the forward-active assumption is self-consistent.",
    "family": "bjt-active-check",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-rpi-4",
    "topic": "devices",
    "prompt": "A BJT at 300 K has collector current 3 mA and β=140. Take V_T=26 mV. Find its hybrid-π input resistance rπ in kΩ, rounded to four decimal places.",
    "choices": [
      "0.0087",
      "16153.8462",
      "0.6067",
      "1.2133"
    ],
    "key": 3,
    "why": "Principle: The hybrid-π resistance is rπ=β/gm, with gm=IC/VT at the operating point. Consistent mA and V units give gm in mS and rπ in kΩ.\n\nStep 1: Compute gm=3/0.026=115.3846 mS.\n\nStep 2: Then rπ=140/115.3846 kΩ.\n\nStep 3: The resulting input resistance is 1.2133 kΩ. It relates a small vbe to the resulting small base current.\n\nAnswer: 1.2133.\n\nCheck and interpretation: The inverse transconductance 1/gm is not rπ; the factor β is required because base current is smaller than collector current.",
    "family": "bjt-rpi",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-gm-4",
    "topic": "devices",
    "prompt": "A long-channel nMOS in saturation obeys I_D=(K/2)(V_GS−V_TH)² with K=0.4 mA/V². At overdrive 1.4 V, find g_m in mS. Neglect channel-length modulation.",
    "choices": [
      "0.28",
      "0.784",
      "0.56",
      "0.84"
    ],
    "key": 2,
    "why": "Principle: MOS transconductance is the derivative of drain current with respect to gate-source voltage while holding drain voltage fixed.\n\nStep 1: Differentiate ID=(K/2)VOV² to obtain gm=K VOV.\n\nStep 2: Use K=0.4 mA/V² and VOV=1.4 V.\n\nStep 3: Thus gm=0.4×1.4=0.56 mA/V=0.56 mS.\n\nStep 4: As a cross-check, ID=0.392 mA and 2ID/VOV gives the same gm.\n\nAnswer: 0.56.\n\nCheck and interpretation: Using ID/VOV misses a factor of two for the square-law model. The stated K convention explicitly includes the one-half factor.",
    "family": "mos-gm",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-triode-4",
    "topic": "devices",
    "prompt": "An nMOS has K=0.5 mA/V², overdrive V_GS−V_TH=1.4 V, and V_DS=0.18 V. Using the long-channel model, find I_D in mA. Round to four decimal places.",
    "choices": [
      "0.49",
      "0.126",
      "0.1179",
      "0.2358"
    ],
    "key": 2,
    "why": "Principle: For 0≤VDS<VOV the MOSFET is in the triode region, with ID=K[VOV VDS−VDS²/2]. The saturation square law does not apply in this region.\n\nStep 1: Here VDS=0.18 V is below VOV=1.4 V, establishing triode operation.\n\nStep 2: Compute VOV VDS=0.252 V² and VDS²/2=0.0162 V².\n\nStep 3: Multiply their difference by K=0.5 to obtain ID=0.1179 mA.\n\nAnswer: 0.1179.\n\nCheck and interpretation: The VDS²/2 correction distinguishes the triode expression from a purely linear resistor approximation. The specified voltages are positive and produce positive drain current.",
    "family": "mos-triode",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-junction-built-in-4",
    "topic": "devices",
    "prompt": "An abrupt silicon p-n junction at equilibrium has N_D=5.00e+15 cm⁻³, N_A=6.00e+16 cm⁻³ and n_i=10¹⁰ cm⁻³. Taking V_T=26 mV, find the built-in potential in V, rounded to four decimal places.",
    "choices": [
      "0.3412",
      "0.747",
      "0.3244",
      "1.4939"
    ],
    "key": 1,
    "why": "Principle: For a nondegenerate abrupt junction at thermal equilibrium, Vbi=VT ln(NAND/ni²). The potential balances diffusion against drift.\n\nStep 1: Form the dimensionless concentration ratio NAND/ni²=3.0000e+12.\n\nStep 2: Take its natural logarithm, not the base-10 logarithm.\n\nStep 3: Multiply by 0.026 V to obtain Vbi=0.747 V.\n\nAnswer: 0.747.\n\nCheck and interpretation: All carrier concentrations use the same cm⁻³ units, which cancel in the ratio. This internal equilibrium barrier is not an externally extractable terminal voltage.",
    "family": "junction-built-in",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-early-resistance-4",
    "topic": "devices",
    "prompt": "At an operating point a BJT has I_C=0.9 mA and Early voltage V_A=70 V. Using r_o≈V_A/I_C, find r_o in kΩ, rounded to four decimal places.",
    "choices": [
      "77.7778",
      "63",
      "0.0129",
      "38.8889"
    ],
    "key": 0,
    "why": "Principle: The Early effect gives the forward-active BJT a finite output conductance. For VCE much smaller than VA, the output resistance is approximately VA/IC.\n\nStep 1: Use the stated approximation ro≈VA/IC.\n\nStep 2: Since V divided by mA gives kΩ, ro=70/0.9 kΩ.\n\nStep 3: Numerically ro=77.7778 kΩ. A larger bias current would reduce this resistance at fixed Early voltage.\n\nAnswer: 77.7778.\n\nCheck and interpretation: This resistance models the slope of the collector characteristic at fixed base-emitter voltage. It is different from the DC ratio VCE/IC.",
    "family": "early-resistance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-semiconductor-resistivity-4",
    "topic": "devices",
    "prompt": "An n-type bar has electron concentration 5.0e+15 cm⁻³ and mobility 580 cm²/(V·s). Neglect holes and take q=1.6×10⁻¹⁹ C. Find resistivity in Ω·cm, rounded to four decimal places.",
    "choices": [
      "0.464 Ω·cm",
      "2.1552 Ω·cm",
      "215.5172 Ω·cm",
      "0.0216 Ω·cm"
    ],
    "key": 1,
    "why": "Principle: With electrons dominating conduction, conductivity is σ=q n μn and resistivity is its reciprocal. The supplied centimetre-based units yield Ω·cm.\n\nStep 1: Insert q=1.6×10⁻¹⁹, n=5.0e+15 and μn=580.\n\nStep 2: Conductivity is σ=0.464 S/cm.\n\nStep 3: Therefore ρ=1/σ=2.1552 Ω·cm.\n\nAnswer: 2.1552 Ω·cm.\n\nCheck and interpretation: Increasing electron concentration or mobility increases conductivity and decreases resistivity. Converting to Ω·m would multiply the numerical Ω·cm value by 0.01.",
    "family": "semiconductor-resistivity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-emitter-degeneration-4",
    "topic": "analog",
    "prompt": "A common-emitter amplifier has g_m=6 mS, collector load 8 kΩ and unbypassed emitter resistance 0.4 kΩ. Take β→∞ and r_o→∞. What is v_o/v_b, rounded to four decimal places?",
    "choices": [
      "-14.1176",
      "-48",
      "14.1176",
      "-20"
    ],
    "key": 0,
    "why": "Principle: Emitter degeneration feeds an emitter voltage back against the base-emitter signal. With infinite β, emitter and collector small-signal currents are equal.\n\nStep 1: Write ic=gm(vb−ve) and ve=ic RE.\n\nStep 2: Then ic(1+gmRE)=gm vb, so ic/vb=gm/(1+gmRE).\n\nStep 3: Since vo=−ic RC, gain is −gmRC/(1+gmRE).\n\nStep 4: Substitution gives −6×8/[1+6×0.4]=-14.1176.\n\nAnswer: -14.1176.\n\nCheck and interpretation: The degeneration reduces the magnitude below the bypassed-emitter value gmRC. The simpler −RC/RE approximation requires gmRE≫1.",
    "family": "emitter-degeneration",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-finite-opamp-gain-4",
    "topic": "analog",
    "prompt": "A non-inverting amplifier uses R_f=14 kΩ and R_g=1 kΩ. Its op-amp has finite DC open-loop gain A=180, infinite input resistance and zero output resistance. Find the closed-loop DC gain, rounded to four decimal places.",
    "choices": [
      "15",
      "13.8462",
      "180",
      "16.3636"
    ],
    "key": 1,
    "why": "Principle: For finite open-loop gain, use vo=A(v+−v−) and the feedback divider v−=βvo. The ideal virtual-short approximation is not exact.\n\nStep 1: The feedback factor is β=Rg/(Rf+Rg)=1/15.\n\nStep 2: Solving vo=A(vin−βvo) gives vo/vin=A/(1+Aβ).\n\nStep 3: This can be written 15/(1+15/180)=13.8462.\n\nAnswer: 13.8462.\n\nCheck and interpretation: The result is slightly smaller than the ideal non-inverting gain 15. A negative-feedback denominator contains a plus sign.",
    "family": "finite-opamp-gain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-weighted-summer-4",
    "topic": "analog",
    "prompt": "An ideal inverting summer has grounded non-inverting input, feedback 12 kΩ, and inputs 0.8 V through 6 kΩ and 0.5 V through 8 kΩ. Assuming linear operation, find output in V.",
    "choices": [
      "2.35",
      "-1.6",
      "-1.1143",
      "-2.35"
    ],
    "key": 3,
    "why": "Principle: At virtual ground, each source drives an input current independently. The op-amp input draws no current, so the feedback branch carries their sum.\n\nStep 1: Input currents are 0.8/6=0.1333 mA and 0.5/8=0.0625 mA.\n\nStep 2: Their sum is 0.1958 mA.\n\nStep 3: The output is the negative feedback-resistor drop: vo=−12×(0.1958)=-2.35 V.\n\nAnswer: -2.35.\n\nCheck and interpretation: Different input resistors give different weights. Adding input voltages before applying one divider ratio would discard these weights.",
    "family": "weighted-summer",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-common-source-ro-4",
    "topic": "analog",
    "prompt": "A common-source MOS amplifier has source at AC ground, g_m=3.2 mS, r_o=28 kΩ and drain resistor 9 kΩ to AC ground. Find unloaded midband voltage gain, rounded to four decimal places.",
    "choices": [
      "-21.7946",
      "-28.8",
      "21.7946",
      "-118.4"
    ],
    "key": 0,
    "why": "Principle: The drain sees RD in parallel with the transistor output resistance ro. The controlled drain current gm vgs develops an inverted output across this equivalent load.\n\nStep 1: Effective drain load is RD∥ro=9×28/(9+28)=6.8108 kΩ.\n\nStep 2: The source is at AC ground, so vgs equals input voltage.\n\nStep 3: Gain is −gm(RD∥ro)=−3.2×6.8108=-21.7946.\n\nAnswer: -21.7946.\n\nCheck and interpretation: Finite ro reduces gain magnitude compared with −gmRD. Since mS×kΩ is dimensionless, no additional factor of 1000 is required.",
    "family": "common-source-ro",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-highpass-frequency-4",
    "topic": "analog",
    "prompt": "A coupling capacitor of 18 nF feeds an amplifier input resistance 5 kΩ from an ideal voltage source. Treat the amplifier input as purely resistive. Find the high-pass −3 dB frequency in kHz.",
    "choices": [
      "11.1111 kHz",
      "0.2814 kHz",
      "1.7684 kHz",
      "17.6839 kHz"
    ],
    "key": 2,
    "why": "Principle: The coupling capacitor and input resistance form H(s)=sRC/(1+sRC). Its lower cutoff is the frequency at which capacitor reactance magnitude equals R.\n\nStep 1: Use R=5×10³ Ω and C=18×10⁻⁹ F.\n\nStep 2: The corner angular frequency is ωc=1/(RC).\n\nStep 3: Convert to hertz with fc=1/(2πRC), then divide by 1000: fc=1.7684 kHz.\n\nAnswer: 1.7684 kHz.\n\nCheck and interpretation: At the corner, magnitude is 1/√2 of the high-frequency passband value. Confusing ωc with fc introduces a factor of 2π.",
    "family": "highpass-frequency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-inverting-bandwidth-4",
    "topic": "analog",
    "prompt": "A dominant-pole op-amp has GBW=4 MHz. An inverting amplifier uses R_in=4 kΩ and R_f=14 kΩ. Estimate its closed-loop bandwidth in MHz using noise gain.",
    "choices": [
      "1.1429 MHz",
      "18 MHz",
      "2 MHz",
      "0.8889 MHz"
    ],
    "key": 3,
    "why": "Principle: For a single-pole voltage-feedback op-amp, bandwidth is approximately GBW divided by noise gain. An inverting stage has noise gain 1+Rf/Rin, not |signal gain|.\n\nStep 1: The signal gain is −Rf/Rin=−3.5.\n\nStep 2: Noise gain is 1+Rf/Rin=4.5.\n\nStep 3: Bandwidth ≈4/4.5=0.8889 MHz.\n\nAnswer: 0.8889 MHz.\n\nCheck and interpretation: The distinction between signal gain and noise gain matters most at low inverting gains. The estimate assumes the dominant-pole model and no extra capacitive poles.",
    "family": "inverting-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-slew-amplitude-4",
    "topic": "analog",
    "prompt": "An op-amp has slew rate 3 V/µs. For a sinusoidal output at 90 kHz, what is the maximum peak amplitude in V allowed by slew rate alone?",
    "choices": [
      "10.6103 V",
      "2.6526 V",
      "5.3052 V",
      "33.3333 V"
    ],
    "key": 2,
    "why": "Principle: A sinusoid vp sin(2πft) has maximum slope 2πfvp. Avoiding slew-rate distortion requires that slope not exceed SR.\n\nStep 1: Convert SR to 3×10⁶ V/s and frequency to 90×10³ Hz.\n\nStep 2: Set 2πfVp=SR at the limit.\n\nStep 3: Thus Vp=SR/(2πf)=3×10⁶/(2π×90×10³)=5.3052 V.\n\nAnswer: 5.3052 V.\n\nCheck and interpretation: This is peak amplitude, not peak-to-peak amplitude. Supply rails or small-signal bandwidth may impose a lower practical limit, but they are excluded here.",
    "family": "slew-amplitude",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-source-follower-4",
    "topic": "analog",
    "prompt": "A MOS source follower has g_m=9 mS and effective source load 1.8 kΩ. Neglect body effect and r_o. Find its voltage gain, rounded to four decimal places.",
    "choices": [
      "16.2",
      "0.0581",
      "-0.9419",
      "0.9419"
    ],
    "key": 3,
    "why": "Principle: A source follower develops its output at the source. The resulting source voltage reduces vgs, creating local negative feedback.\n\nStep 1: The current is gm(vin−vo), and this flows through the source load.\n\nStep 2: Write vo=gmRL(vin−vo) and solve for vo/vin=gmRL/(1+gmRL).\n\nStep 3: Here gmRL=16.2, giving gain 0.9419.\n\nAnswer: 0.9419.\n\nCheck and interpretation: The gain is positive and strictly less than one in this model. The reciprocal 1/(1+gmRL) describes the residual gate-source fraction, not the output gain.",
    "family": "source-follower",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-ideal-integrator-4",
    "topic": "analog",
    "prompt": "An ideal inverting integrator uses R=14 kΩ and C=6 µF. Its output is initially zero. A constant 0.18 V input is applied for 0.1 s. Assuming no saturation, what is output at 0.1 s in V?",
    "choices": [
      "-0.2143 V",
      "0.2143 V",
      "-0.1071 V",
      "-0.4286 V"
    ],
    "key": 0,
    "why": "Principle: An ideal inverting integrator obeys vo(t)=vo(0)−(1/RC)∫vin(t)dt. A constant input produces a linear output ramp.\n\nStep 1: RC=14×6×10⁻³=0.084 s.\n\nStep 2: The input-time integral over 0.1 s is 0.18×0.1=0.018 V·s.\n\nStep 3: With zero initial output, vo=−0.018/0.084=-0.2143 V.\n\nAnswer: -0.2143 V.\n\nCheck and interpretation: The minus sign follows from the inverting connection. The stated no-saturation condition permits the ideal ramp calculation without supply-rail clipping.",
    "family": "ideal-integrator",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-ripple-counter-period-4",
    "topic": "digital",
    "prompt": "A 9-bit binary counter starts at zero and is clocked at 18 MHz. How many µs elapse before it first returns to zero, assuming ideal operation?",
    "choices": [
      "14.2222 µs",
      "28.4444 µs",
      "9216 µs",
      "0.5 µs"
    ],
    "key": 1,
    "why": "Principle: An n-bit binary counter repeats after 2ⁿ input clocks. The repeat time is the number of clock periods in a full state cycle.\n\nStep 1: There are 2^9=512 distinct states, including zero.\n\nStep 2: At 18 MHz the clock period is 1/18 µs.\n\nStep 3: The first full wrap occurs after 512/18=28.4444 µs.\n\nAnswer: 28.4444 µs.\n\nCheck and interpretation: The count from zero through all-one is 2ⁿ−1, but another clock is required to return to zero, making the full cycle 2ⁿ clocks.",
    "family": "ripple-counter-period",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-twos-complement-subtract-4",
    "topic": "digital",
    "prompt": "Two unsigned 6-bit operands have values A=15 and B=7. A subtractor computes A−B using 6-bit two’s-complement addition and discards carry out. What unsigned decimal value appears on its output?",
    "choices": [
      "8",
      "22",
      "56",
      "9"
    ],
    "key": 0,
    "why": "Principle: Fixed-width subtraction adds the two’s complement of B and retains only the lowest n bits. This implements arithmetic modulo 2ⁿ.\n\nStep 1: The six-bit two’s complement of B is 64−7=57.\n\nStep 2: Add A to it: 15+57=72.\n\nStep 3: Discard the carry beyond bit 5, equivalently subtract 64, to obtain 8.\n\nAnswer: 8.\n\nCheck and interpretation: The specified A exceeds B, so the unsigned difference is positive and is represented exactly. Discarding carry is part of fixed-width subtraction, not an arithmetic error.",
    "family": "twos-complement-subtract",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-adc-serial-clock-4",
    "topic": "digital",
    "prompt": "A 8-bit SAR ADC outputs one serial word for each of 180 ksample/s. Each frame also contains 2 status bits and 1 idle clock. What minimum serial clock in MHz supports continuous conversion?",
    "choices": [
      "1.98 MHz",
      "1.44 MHz",
      "1.8 MHz",
      "2.16 MHz"
    ],
    "key": 0,
    "why": "Principle: The serial link must provide a clock slot for every conversion bit and every overhead slot in each sample frame.\n\nStep 1: A frame requires 8+2+1=11 clocks.\n\nStep 2: At 180000 frames/s, the required clock is 11×180000=1980000 clocks/s.\n\nStep 3: Divide by 10⁶ to get 1.98 MHz.\n\nAnswer: 1.98 MHz.\n\nCheck and interpretation: Counting only the ADC resolution underestimates the link rate because status and idle slots also consume serial clock periods.",
    "family": "adc-serial-clock",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-synchronous-timing-4",
    "topic": "digital",
    "prompt": "A register-to-register path has t_CQ=1.8 ns, combinational delay 4.2 ns and setup time 1.4 ns. Adverse clock uncertainty consumes another 0.2 ns. What is the maximum clock frequency in MHz?",
    "choices": [
      "238.0952 MHz",
      "166.6667 MHz",
      "131.5789 MHz",
      "138.8889 MHz"
    ],
    "key": 2,
    "why": "Principle: For setup timing, one clock period must cover launch clock-to-Q, maximum logic delay, destination setup time and adverse uncertainty.\n\nStep 1: The minimum period is 1.8+4.2+1.4+0.2=7.6 ns.\n\nStep 2: Convert period to frequency with fMHz=1000/Tns.\n\nStep 3: Hence fmax=131.5789 MHz. This checks setup timing only.\n\nAnswer: 131.5789 MHz.\n\nCheck and interpretation: Hold timing is a separate minimum-delay condition. Adverse uncertainty reduces the available time and therefore is added to the required period.",
    "family": "synchronous-timing",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-memory-chip-count-4",
    "topic": "digital",
    "prompt": "A memory requires 512 K words of 16 bits. Available chips each contain 4 K words of 8 bits. How many chips are needed?",
    "choices": [
      "128",
      "256",
      "512",
      "130"
    ],
    "key": 1,
    "why": "Principle: Memory expansion may require both depth expansion and width expansion. The total chip count is the product of those two independent factors.\n\nStep 1: To make 16-bit words from 8-bit chips, use 16/8=2 chips in parallel per bank.\n\nStep 2: To obtain 512 K words from 4 K-word chips, use 512/4=128 banks.\n\nStep 3: Total chips =2×128=256.\n\nAnswer: 256.\n\nCheck and interpretation: Counting only address-depth banks omits the second chip needed in every bank to supply the upper byte of each 16-bit word.",
    "family": "memory-chip-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-binary-dac-4",
    "topic": "digital",
    "prompt": "An ideal unipolar 8-bit DAC uses v_o=V_ref D/2^N with V_ref=2.8 V. Find output for unsigned input code D=68, in V. Round to four decimal places.",
    "choices": [
      "0.7467 V",
      "0.7547 V",
      "0.7437 V",
      "1.4875 V"
    ],
    "key": 2,
    "why": "Principle: Use the DAC transfer convention stated in the question: each code increment is Vref/2ᴺ. The largest code remains one LSB below Vref.\n\nStep 1: There are 2^8=256 nominal quantization steps.\n\nStep 2: One LSB is 2.8/256 V.\n\nStep 3: Multiplying by input code 68 gives vo=2.8×68/256=0.7437 V.\n\nAnswer: 0.7437 V.\n\nCheck and interpretation: Scaling by 2ᴺ−1 would implement an endpoint-normalized convention, which differs from the explicitly supplied DAC law.",
    "family": "binary-dac",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-bitwise-xor-4",
    "topic": "digital",
    "prompt": "Two 5-bit unsigned words encode decimal 8 and 5. Their corresponding bits feed five XOR gates. What is the unsigned decimal value of the output word?",
    "choices": [
      "0",
      "14",
      "15",
      "13"
    ],
    "key": 3,
    "why": "Principle: Bitwise XOR produces one where the operand bits differ and zero where they agree. It corresponds to binary addition without inter-bit carry.\n\nStep 1: Write the operands as 01000 and 00101.\n\nStep 2: XOR corresponding bit positions to obtain 01101.\n\nStep 3: Convert that binary result back to decimal to get 13.\n\nAnswer: 13.\n\nCheck and interpretation: Ordinary decimal addition may differ because it includes carries. OR also differs because it retains a one when both input bits are one.",
    "family": "bitwise-xor",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-flash-comparator-count-4",
    "topic": "digital",
    "prompt": "An ideal 7-bit flash ADC uses a full bank of threshold comparators with one comparator per internal quantization boundary. How many comparators are required?",
    "choices": [
      "128",
      "7",
      "127",
      "64"
    ],
    "key": 2,
    "why": "Principle: An N-bit quantizer divides its input range into 2ᴺ bins. Separating adjacent bins requires one internal threshold between each neighboring pair.\n\nStep 1: The number of output bins is 2^7=128.\n\nStep 2: The number of boundaries between those bins is one fewer.\n\nStep 3: Thus a full flash architecture requires 2^7−1=127 comparators.\n\nAnswer: 127.\n\nCheck and interpretation: The rapid exponential comparator growth explains why flash ADC resolution is expensive in power and silicon area. This count excludes any separate overrange detector.",
    "family": "flash-comparator-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-counter-adc-time-4",
    "topic": "digital",
    "prompt": "An 8-bit counter-type ADC starts its count at zero at the beginning of each conversion. The clock period is 2.8 µs. Using a worst-case budget of 2^N clocks, find the worst-case conversion time in ms.",
    "choices": [
      "0.7168 ms",
      "716.8 ms",
      "0.0224 ms",
      "0.3584 ms"
    ],
    "key": 0,
    "why": "Principle: A counter-type ADC can need a full-scale count search, unlike a SAR converter that needs approximately N decisions. The question specifies the clock-budget convention.\n\nStep 1: The worst-case budget is 2^8=256 clocks.\n\nStep 2: Multiply by 2.8 µs per clock to get 716.8 µs.\n\nStep 3: Convert microseconds to milliseconds by dividing by 1000: 0.7168 ms.\n\nAnswer: 0.7168 ms.\n\nCheck and interpretation: Using N clocks would describe the approximate decision count of a SAR ADC, not the stated counter ramp architecture.",
    "family": "counter-adc-time",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-routh-cubic-bound-4",
    "topic": "control",
    "prompt": "For positive K, a feedback system has characteristic polynomial s³+5s²+11s+K. What is the upper boundary value of K for strict stability?",
    "choices": [
      "16",
      "55",
      "2.2",
      "275"
    ],
    "key": 1,
    "why": "Principle: For a real cubic, the Routh first-column entries must all have the same positive sign. A zero boundary entry marks loss of strict asymptotic stability.\n\nStep 1: The first two Routh rows begin [1, 11] and [5, K].\n\nStep 2: The s¹ first-column entry is (5×11−K)/5.\n\nStep 3: Along with K>0, positivity requires K<55.\n\nStep 4: Therefore strict stability holds for 0<K<55, and the requested upper boundary is 55.\n\nAnswer: 55.\n\nCheck and interpretation: The boundary itself is excluded from strict stability. Positive polynomial coefficients alone are necessary but not sufficient for a cubic.",
    "family": "routh-cubic-bound",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-second-order-overshoot-4",
    "topic": "control",
    "prompt": "A standard unity-DC-gain second-order system has ω_n=6 rad/s and damping ratio ζ=0.36. Find percentage overshoot to a unit step, rounded to four decimal places.",
    "choices": [
      "0.2975 %",
      "32.2719 %",
      "29.7526 %",
      "59.5053 %"
    ],
    "key": 2,
    "why": "Principle: For an underdamped standard second-order response, percentage overshoot is 100 exp[−πζ/√(1−ζ²)]. It depends on damping ratio rather than natural frequency.\n\nStep 1: The supplied ζ=0.36 lies strictly between zero and one.\n\nStep 2: Compute √(1−ζ²)=0.933.\n\nStep 3: Insert in the overshoot formula: 100exp[−π×0.36/0.933]=29.7526%.\n\nAnswer: 29.7526 %.\n\nCheck and interpretation: Changing ωn=6 rad/s would change how quickly the peak occurs, but would not change this percentage overshoot with ζ fixed.",
    "family": "second-order-overshoot",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-ramp-error-4",
    "topic": "control",
    "prompt": "A stable unity-negative-feedback system has open loop G(s)=6/[s(s+5)]. What is its unit-ramp steady-state error? Round to four decimal places.",
    "choices": [
      "1.2",
      "0",
      "0.8333",
      "0.4545"
    ],
    "key": 2,
    "why": "Principle: For a type-1 unity-feedback system, unit-ramp steady-state error is 1/Kv, where Kv=lim(s→0)sG(s). Closed-loop stability is required.\n\nStep 1: There is one open-loop pole at the origin, so the system is type 1.\n\nStep 2: Kv=lim(s→0)6/(s+5)=6/5.\n\nStep 3: Hence ess=1/Kv=5/6=0.8333.\n\nAnswer: 0.8333.\n\nCheck and interpretation: The characteristic polynomial s²+as+gain has positive coefficients here and is stable. A step input would have zero error, whereas a ramp has a finite nonzero error.",
    "family": "ramp-error",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-first-order-settling-4",
    "topic": "control",
    "prompt": "A plant G(s)=6/(s+5) is placed in unity negative feedback. Using the approximation t_s≈4/|closed-loop pole|, find its 2% settling time in s.",
    "choices": [
      "0.3636 s",
      "0.8 s",
      "0.6667 s",
      "0.0909 s"
    ],
    "key": 0,
    "why": "Principle: Unity negative feedback gives T=G/(1+G). For a real negative pole −α, the response error decays exponentially with time constant 1/α.\n\nStep 1: T(s)=6/(s+5+6)=6/(s+11).\n\nStep 2: The pole is −11, so τ=1/11 s.\n\nStep 3: The specified 2% approximation is ts≈4τ=4/11=0.3636 s.\n\nAnswer: 0.3636 s.\n\nCheck and interpretation: Use the closed-loop pole, not the original plant pole. The exact normalized 2% exponential settling time would be ln(50)/α, close to 4/α.",
    "family": "first-order-settling",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-pole-damping-4",
    "topic": "control",
    "prompt": "A second-order denominator is (s+5)(s+7). What is its damping ratio ζ, rounded to four decimal places?",
    "choices": [
      "1.0142",
      "5.9161",
      "6",
      "2.0284"
    ],
    "key": 0,
    "why": "Principle: Compare the expanded polynomial with s²+2ζωns+ωn². Both the linear and constant coefficients are needed to extract the damping ratio.\n\nStep 1: Expand to s²+12s+35.\n\nStep 2: Thus ωn=√35 rad/s and 2ζωn=12.\n\nStep 3: Rearrange: ζ=12/(2√35)=1.0142.\n\nAnswer: 1.0142.\n\nCheck and interpretation: The two distinct real negative poles imply an overdamped system, so ζ must exceed one. This is a useful check on coefficient matching.",
    "family": "pole-damping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-single-pole-phase-4",
    "topic": "control",
    "prompt": "For G(s)=1/(1+0.18s), find phase at ω=6 rad/s in degrees, rounded to four decimal places.",
    "choices": [
      "47.2026 degrees",
      "-47.2026 degrees",
      "-90 degrees",
      "-23.6013 degrees"
    ],
    "key": 1,
    "why": "Principle: The phase of a first-order low-pass is the negative angle of its denominator 1+jωτ. The numerator contributes zero phase.\n\nStep 1: At the given frequency, ωτ=6×0.18=1.08.\n\nStep 2: The denominator angle is arctan(1.08).\n\nStep 3: Therefore ∠G=−arctan(1.08)×180/π=-47.2026 degrees.\n\nAnswer: -47.2026 degrees.\n\nCheck and interpretation: The phase must lie between 0 and −90 degrees for positive frequency. The arctangent result in radians must be converted before reporting degrees.",
    "family": "single-pole-phase",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-step-final-value-4",
    "topic": "control",
    "prompt": "A plant G(s)=6/(s+5) has unity negative feedback and is driven by a unit step reference. Find its final output value, rounded to four decimal places.",
    "choices": [
      "0.5455",
      "1",
      "0.0909",
      "1.2"
    ],
    "key": 0,
    "why": "Principle: For a stable closed-loop system, the final value of a unit-step response equals its closed-loop DC gain. Unity feedback does not automatically make that gain one.\n\nStep 1: The closed-loop transfer function is T(s)=G/(1+G)=6/(s+11).\n\nStep 2: For a unit step, Y(s)=T(s)/s.\n\nStep 3: By the final-value theorem, y∞=lim(s→0)sY(s)=6/11=0.5455.\n\nAnswer: 0.5455.\n\nCheck and interpretation: The remaining step error is 0.4545. The pole −11 is in the left half-plane, validating the final-value theorem.",
    "family": "step-final-value",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-state-determinant-4",
    "topic": "control",
    "prompt": "A continuous-time state matrix is A=[0 1; −40 −13]. What is the product of its two pole magnitudes?",
    "choices": [
      "13",
      "40",
      "6.3246",
      "89"
    ],
    "key": 1,
    "why": "Principle: The poles are eigenvalues of A. Their product equals det(A), and their individual values can be obtained from the characteristic polynomial.\n\nStep 1: Compute det(sI−A)=s²+13s+40.\n\nStep 2: It factors as (s+5)(s+8), so the poles are −5 and −8.\n\nStep 3: Their magnitudes multiply to 5×8=40.\n\nAnswer: 40.\n\nCheck and interpretation: The trace is the pole sum, −(a+b), rather than their product. Both poles are negative here, so magnitude product agrees with the positive determinant.",
    "family": "state-determinant",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-phase-margin-4",
    "topic": "control",
    "prompt": "A unity-feedback loop has G(s)=K/[s(s+6)]. K is selected so gain crossover is ω_gc=6 rad/s. Find phase margin in degrees.",
    "choices": [
      "45 degrees",
      "90 degrees",
      "135 degrees",
      "180 degrees"
    ],
    "key": 0,
    "why": "Principle: Phase margin is 180 degrees plus open-loop phase at unity-gain crossover. The integrator contributes −90 degrees, and the real pole contributes an additional lag.\n\nStep 1: At ωgc=6, the integrator phase is −90 degrees.\n\nStep 2: The (s+6) denominator term contributes −arctan(ωgc/6)=−45 degrees.\n\nStep 3: Total phase is −135 degrees, so PM=180−135=45 degrees.\n\nAnswer: 45 degrees.\n\nCheck and interpretation: A positive K can achieve the stated crossover: K=ωgc√(ωgc²+6²). K sets magnitude here but contributes no extra phase.",
    "family": "phase-margin",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-capacity-bandwidth-4",
    "topic": "comm",
    "prompt": "An AWGN channel has bandwidth 1.8 MHz and linear SNR=15. Using the stated SNR rounded to four decimals, find Shannon capacity in Mbit/s, rounded to three decimal places.",
    "choices": [
      "3.6 Mbit/s",
      "14.4 Mbit/s",
      "7.2 Mbit/s",
      "7.0324 Mbit/s"
    ],
    "key": 2,
    "why": "Principle: Shannon capacity for a bandlimited AWGN channel is C=B log₂(1+SNR). With B in MHz, the resulting capacity is in Mbit/s.\n\nStep 1: Use linear SNR=15, so the logarithm argument is 16.\n\nStep 2: Compute log₂(1+SNR)≈4 bit/s/Hz.\n\nStep 3: Multiply by 1.8 MHz to obtain approximately 7.200 Mbit/s.\n\nAnswer: 7.2 Mbit/s.\n\nCheck and interpretation: Omitting the +1 is a high-SNR approximation and is not the exact Shannon expression. Capacity is a theoretical upper bound, not an assured payload rate.",
    "family": "capacity-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-qam-raised-cosine-4",
    "topic": "comm",
    "prompt": "An M-QAM link with M=64 carries 8 Mbit/s before overhead and uses raised-cosine pulse shaping with roll-off α=0.28. What is its ideal RF null-to-null bandwidth in MHz?",
    "choices": [
      "1.3333 MHz",
      "1.7067 MHz",
      "10.24 MHz",
      "0.8533 MHz"
    ],
    "key": 1,
    "why": "Principle: An M-ary symbol carries log₂M bits. For raised-cosine shaping, the real passband null-to-null bandwidth is (1+α) times symbol rate.\n\nStep 1: Each symbol carries log₂(64)=6 bits.\n\nStep 2: The symbol rate is Rs=8/6=1.3333 Mbaud.\n\nStep 3: RF bandwidth is (1+0.28)Rs=1.7067 MHz.\n\nAnswer: 1.7067 MHz.\n\nCheck and interpretation: The one-sided baseband bandwidth is half this passband bandwidth. Reporting that baseband value would introduce a factor-of-two error.",
    "family": "qam-raised-cosine",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-am-efficiency-4",
    "topic": "comm",
    "prompt": "A conventional single-tone AM transmitter has carrier power 18 W and modulation index 0.4. Find useful-sideband power as a percentage of total transmitted power.",
    "choices": [
      "8 %",
      "7.4074 %",
      "28.5714 %",
      "3.7037 %"
    ],
    "key": 1,
    "why": "Principle: In conventional AM, the two sidebands together carry Pc m²/2 while the carrier still consumes Pc. Efficiency is sideband power divided by total power.\n\nStep 1: Sideband power is 18×0.4²/2=1.44 W.\n\nStep 2: Total power is Pc(1+m²/2)=19.44 W.\n\nStep 3: Efficiency is 100×m²/(2+m²)=7.4074%.\n\nAnswer: 7.4074 %.\n\nCheck and interpretation: Carrier power cancels from the efficiency ratio. Dividing sideband power by carrier power alone would overestimate useful-power efficiency.",
    "family": "am-efficiency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-fm-carson-4",
    "topic": "comm",
    "prompt": "A message has maximum frequency 6 kHz. An FM modulator produces peak deviation 11 kHz. Using Carson’s rule, what approximate transmission bandwidth in kHz is required?",
    "choices": [
      "22 kHz",
      "34 kHz",
      "12 kHz",
      "17 kHz"
    ],
    "key": 1,
    "why": "Principle: Carson’s rule estimates practical FM bandwidth as B≈2(Δf+fm), incorporating both frequency deviation and message bandwidth.\n\nStep 1: Identify peak deviation Δf=11 kHz, rather than peak-to-peak deviation.\n\nStep 2: Add the highest message frequency: Δf+fm=11+6=17 kHz.\n\nStep 3: Double the sum for the full passband width: B≈34 kHz.\n\nAnswer: 34 kHz.\n\nCheck and interpretation: This is an occupied-bandwidth estimate. Exact FM spectra have infinitely many sidebands, so the result is not a strict mathematical bandlimit.",
    "family": "fm-carson",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-pcm-sqnr-4",
    "topic": "comm",
    "prompt": "A full-scale sinusoid is quantized by an ideal uniform 8-bit quantizer. Under the uniform quantization-noise model, estimate SQNR in dB to four decimal places.",
    "choices": [
      "49.9257 dB",
      "48.1648 dB",
      "43.9051 dB",
      "55.9463 dB"
    ],
    "key": 0,
    "why": "Principle: For a full-scale sinusoid and uniform quantization error with variance Δ²/12, SQNR≈6.0206N+1.7609 dB.\n\nStep 1: The sinusoid signal power is A²/2. For a span of 2A, quantization step is Δ=2A/2ᴺ.\n\nStep 2: Dividing A²/2 by Δ²/12 gives SQNR=(3/2)2^(2N).\n\nStep 3: Taking 10log₁₀ gives 10log₁₀(3/2)+20Nlog₁₀2.\n\nStep 4: For N=8, this is 49.9257 dB.\n\nAnswer: 49.9257 dB.\n\nCheck and interpretation: The 1.76 dB offset comes from the full-scale sinusoidal input assumption. A smaller input amplitude reduces actual SQNR.",
    "family": "pcm-sqnr",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-binary-entropy-4",
    "topic": "comm",
    "prompt": "An independent binary source emits 1 with probability 0.2 and 0 with probability 0.8. Find its entropy in bits/symbol, rounded to four decimal places.",
    "choices": [
      "1 bits/symbol",
      "2.3219 bits/symbol",
      "0.7219 bits/symbol",
      "0.361 bits/symbol"
    ],
    "key": 2,
    "why": "Principle: Entropy is the probability-weighted average information content, H=−Σp log₂p. Both symbols contribute even when their probabilities differ.\n\nStep 1: The information contribution of 1 is −0.2log₂(0.2).\n\nStep 2: The information contribution of 0 is −0.8log₂(0.8).\n\nStep 3: Adding them gives H=0.7219 bits per source symbol.\n\nAnswer: 0.7219 bits/symbol.\n\nCheck and interpretation: Binary entropy cannot exceed 1 bit/symbol and is maximal for equal probabilities. It decreases when one outcome becomes easier to predict.",
    "family": "binary-entropy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-coded-throughput-4",
    "topic": "comm",
    "prompt": "A 4-ary modulation runs at 1.8 Mbaud using a code of rate 0.6. Ignore all other overhead. What is the information-bit rate in Mbit/s?",
    "choices": [
      "2.16 Mbit/s",
      "3.6 Mbit/s",
      "6 Mbit/s",
      "1.08 Mbit/s"
    ],
    "key": 0,
    "why": "Principle: A code rate r means r information bits per transmitted coded bit. Modulation carries log₂M coded bits per symbol.\n\nStep 1: The modulation carries 2 coded bits per symbol.\n\nStep 2: At 1.8 Mbaud the coded rate is 3.6 Mbit/s.\n\nStep 3: Multiplying by code rate 0.6 yields information rate 2.16 Mbit/s.\n\nAnswer: 2.16 Mbit/s.\n\nCheck and interpretation: Coding adds redundancy, so the information rate must be below the raw coded-bit rate. Dividing by code rate would predict the opposite.",
    "family": "coded-throughput",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-receiver-noise-4",
    "topic": "comm",
    "prompt": "A matched receiver has noise figure 4 dB and bandwidth 5 MHz. At T₀=290 K, with k_B=1.38×10⁻²³ J/K, find its equivalent total input-referred noise power Fk_BT₀B in pW.",
    "choices": [
      "0.02 pW",
      "0.5026 pW",
      "0.0503 pW",
      "0.005 pW"
    ],
    "key": 2,
    "why": "Principle: Noise factor F is a linear power ratio and equals 10^(NF/10). The specified total input-referred noise is F times the thermal input-noise reference.\n\nStep 1: Convert NF=4 dB to F=10^(4/10)=2.5119.\n\nStep 2: The thermal reference is kT₀B=1.38×10⁻²³×290×5×10⁶ W.\n\nStep 3: Multiply by F and convert W to pW by multiplying by 10¹², giving 0.0503 pW.\n\nAnswer: 0.0503 pW.\n\nCheck and interpretation: The receiver-added equivalent noise alone would use (F−1)kT₀B. The question explicitly requests total FkT₀B, including source thermal noise.",
    "family": "receiver-noise",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-ebn0-conversion-4",
    "topic": "comm",
    "prompt": "A digital link has received signal-to-noise ratio 14 dB measured over bandwidth B. Its bit rate satisfies R_b/B=2 bit/s/Hz. Find E_b/N₀ in dB.",
    "choices": [
      "17.0103 dB",
      "7 dB",
      "12.5594 dB",
      "10.9897 dB"
    ],
    "key": 3,
    "why": "Principle: Since SNR=P/(N₀B) and Eb=P/Rb, the linear relation is Eb/N₀=SNR×B/Rb. Decibels convert multiplication to addition.\n\nStep 1: The bandwidth-to-bit-rate ratio is B/Rb=1/2.\n\nStep 2: Thus (Eb/N₀)dB=SNRdB−10log₁₀(Rb/B).\n\nStep 3: Substitute 14−10log₁₀(2)=10.9897 dB.\n\nAnswer: 10.9897 dB.\n\nCheck and interpretation: For spectral efficiency above one bit/s/Hz, Eb/N₀ in dB is smaller than the measured SNR in dB. A linear ratio must not be reported as a decibel value.",
    "family": "ebn0-conversion",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-complex-load-power-4",
    "topic": "em",
    "prompt": "A lossless 50 Ω transmission line is terminated by (40−j26) Ω. If incident average power is 14 mW, find average load power in mW, rounded to four decimal places.",
    "choices": [
      "1.2379 mW",
      "9.837 mW",
      "12.7621 mW",
      "14 mW"
    ],
    "key": 2,
    "why": "Principle: At a lossless line termination, the reflected power fraction is |Γ|², where Γ=(ZL−Z0)/(ZL+Z0). Delivered power is the remaining fraction of incident power.\n\nStep 1: Compute |Γ|²=[(40−50)²+26²]/[(40+50)²+26²].\n\nStep 2: This gives reflected fraction 0.0884.\n\nStep 3: Load power is 14(1−0.0884)=12.7621 mW.\n\nAnswer: 12.7621 mW.\n\nCheck and interpretation: Using 1−|Γ| rather than 1−|Γ|² confuses voltage amplitude with power. A passive real part of the load ensures delivered power is nonnegative.",
    "family": "complex-load-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-quarter-wave-transform-4",
    "topic": "em",
    "prompt": "A lossless quarter-wave transmission line has characteristic impedance 60 Ω and load resistance 140 Ω. What is input resistance in Ω?",
    "choices": [
      "140 Ω",
      "60 Ω",
      "25.7143 Ω",
      "326.6667 Ω"
    ],
    "key": 2,
    "why": "Principle: At an electrical length of π/2, a lossless line inverts the load impedance: Zin=Z0²/ZL. This is a frequency-specific impedance transformation.\n\nStep 1: Use Z0=60 Ω and ZL=140 Ω.\n\nStep 2: Square the line impedance: Z0²=3600 Ω².\n\nStep 3: Divide by the load: Zin=3600/140=25.7143 Ω.\n\nAnswer: 25.7143 Ω.\n\nCheck and interpretation: A line one-half wavelength long would reproduce the load instead. The quarter-wave condition is essential to the inversion formula.",
    "family": "quarter-wave-transform",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-vswr-reflected-power-4",
    "topic": "em",
    "prompt": "A lossless line has VSWR=1.9. What percentage of incident power is reflected? Round to four decimal places.",
    "choices": [
      "9.6314 %",
      "31.0345 %",
      "90.3686 %",
      "4.8157 %"
    ],
    "key": 0,
    "why": "Principle: First convert VSWR to voltage-reflection magnitude, then square that magnitude to obtain the reflected power fraction.\n\nStep 1: From S=(1+|Γ|)/(1−|Γ|), rearrange |Γ|=(S−1)/(S+1).\n\nStep 2: For S=1.9, |Γ|=0.3103.\n\nStep 3: The reflected percentage is 100|Γ|²=9.6314%.\n\nAnswer: 9.6314 %.\n\nCheck and interpretation: VSWR itself is an amplitude ratio along the standing wave, not a power-reflection ratio. A matched line has S=1 and zero reflected power.",
    "family": "vswr-reflected-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-waveguide-velocity-4",
    "topic": "em",
    "prompt": "An air-filled rectangular guide has broad wall a=2.8 cm and carries TE₁₀ at 14 GHz. Taking c=3×10⁸ m/s, find group velocity divided by c, rounded to four decimal places.",
    "choices": [
      "1.0824",
      "0.3827",
      "0.9239",
      "0.8536"
    ],
    "key": 2,
    "why": "Principle: For a lossless air-filled waveguide, TE group velocity is vg=c√[1−(fc/f)²]. It is lower than c for a propagating mode above cutoff.\n\nStep 1: TE₁₀ cutoff is fc=c/(2a)=5.3571 GHz after converting centimetres to metres.\n\nStep 2: The operating frequency 14 GHz exceeds cutoff, so propagation is possible.\n\nStep 3: Compute vg/c=√[1−(5.3571/14)²]=0.9239.\n\nAnswer: 0.9239.\n\nCheck and interpretation: The reciprocal factor would give phase velocity divided by c. Phase velocity can exceed c in a waveguide while group velocity remains below c.",
    "family": "waveguide-velocity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-dielectric-impedance-4",
    "topic": "em",
    "prompt": "A uniform plane wave propagates in a lossless nonmagnetic dielectric with relative permittivity 6. Taking free-space impedance as 377 Ω, find intrinsic impedance in Ω.",
    "choices": [
      "153.9096 Ω",
      "923.4576 Ω",
      "62.8333 Ω",
      "2262 Ω"
    ],
    "key": 0,
    "why": "Principle: Intrinsic impedance of a lossless medium is η=√(μ/ε). For μr=1, it reduces to η0/√εr.\n\nStep 1: Set μ=μ0 and ε=6ε0.\n\nStep 2: Then η=√(μ0/ε0)/√6=377/√6.\n\nStep 3: The resulting impedance is 153.9096 Ω, which relates electric-field amplitude to magnetic-field amplitude.\n\nAnswer: 153.9096 Ω.\n\nCheck and interpretation: The refractive index is √εr, while intrinsic impedance varies inversely with it for a nonmagnetic medium. Relative permittivity is dimensionless.",
    "family": "dielectric-impedance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-faraday-loop-current-4",
    "topic": "em",
    "prompt": "A 5-turn coil has area 0.04 m² per turn and resistance 9 Ω. Uniform normal flux density is B(t)=0.18cos(180t) T. Neglect inductance. Find peak induced current in A.",
    "choices": [
      "0.72 A",
      "0.144 A",
      "0.004 A",
      "1.44 A"
    ],
    "key": 0,
    "why": "Principle: Faraday’s law uses the time derivative of total flux linkage NΦ. For a sinusoidal normal field, peak induced emf is NABpeakω.\n\nStep 1: Flux linkage is λ(t)=NAB(t)=5×0.04×0.18cos(180t).\n\nStep 2: Differentiation gives peak emf N A Bpeak ω=6.48 V.\n\nStep 3: With inductance neglected, peak current is emfpeak/R=6.48/9=0.72 A.\n\nAnswer: 0.72 A.\n\nCheck and interpretation: The angular frequency is already in rad/s, so no extra 2π is needed. Lenz’s law specifies the current direction; only the peak magnitude is requested.",
    "family": "faraday-loop-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-skin-depth-4",
    "topic": "em",
    "prompt": "A good nonmagnetic conductor has σ=10⁷ S/m and μ=4π×10⁻⁷ H/m. At 5 MHz, find skin depth in µm using δ=√[2/(ωμσ)].",
    "choices": [
      "100.6584 µm",
      "50.3292 µm",
      "71.1763 µm",
      "711.7625 µm"
    ],
    "key": 2,
    "why": "Principle: In a good conductor, fields decay exponentially into the material. Skin depth is the distance over which field amplitude falls by a factor e.\n\nStep 1: Convert angular frequency: ω=2π×5×10⁶ rad/s.\n\nStep 2: Insert ω, μ=4π×10⁻⁷ and σ=10⁷ into δ=√[2/(ωμσ)].\n\nStep 3: The result in metres is 7.1176e-5 m. Multiplying by 10⁶ gives 71.1763 µm.\n\nAnswer: 71.1763 µm.\n\nCheck and interpretation: Skin depth scales as 1/√f and becomes smaller at higher frequency. Confusing hertz with angular frequency changes the numerical result.",
    "family": "skin-depth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-friis-link-4",
    "topic": "em",
    "prompt": "In a free-space far-field link, transmit power is 5 W, linear antenna gains are G_t=2 and G_r=3, separation is 140 m, and frequency is 1.4 GHz. With c=3×10⁸ m/s and perfect alignment/matching, find received power in nW.",
    "choices": [
      "74.1789 nW",
      "1780.2946 nW",
      "445.0737 nW",
      "111.2684 nW"
    ],
    "key": 2,
    "why": "Principle: The Friis formula is Pr=PtGtGr[λ/(4πR)]² for a matched free-space far-field link. Gains here are linear rather than decibels.\n\nStep 1: The wavelength is λ=c/f=0.3/1.4=0.2143 m.\n\nStep 2: The propagation factor is [0.2143/(4π×140)]².\n\nStep 3: Multiply by PtGtGr=5×2×3 and convert W to nW to obtain 445.0737 nW.\n\nAnswer: 445.0737 nW.\n\nCheck and interpretation: Power falls with separation squared. Omitting either antenna gain or using dB-valued gains directly would change the result.",
    "family": "friis-link",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-poynting-average-4",
    "topic": "em",
    "prompt": "A uniform plane wave in free space has peak electric field 18 V/m. Taking η₀=377 Ω, find time-average power density in W/m².",
    "choices": [
      "0.4297 W/m²",
      "0.8594 W/m²",
      "61074 W/m²",
      "0.0477 W/m²"
    ],
    "key": 0,
    "why": "Principle: For a sinusoidal plane wave, the average Poynting magnitude is Epeak Hpeak/2=Epeak²/(2η). Peak and RMS field conventions must be distinguished.\n\nStep 1: The peak magnetic field is Hpeak=Epeak/η₀=18/377 A/m.\n\nStep 2: Average power density is one-half the product of the peak field amplitudes.\n\nStep 3: Thus Sav=18²/(2×377)=0.4297 W/m².\n\nAnswer: 0.4297 W/m².\n\nCheck and interpretation: Using E²/η without the one-half factor is correct only when E denotes RMS field. The problem explicitly supplies peak field.",
    "family": "poynting-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-combined-work-4",
    "topic": "apt",
    "prompt": "A completes a job in 8 days and B in 12 days at constant rates. They start together and work without interference. In how many days is the job complete?",
    "choices": [
      "20 days",
      "4.8 days",
      "10 days",
      "24 days"
    ],
    "key": 1,
    "why": "Principle: Independent work rates add. A completion time must be converted into a fraction of the job completed per unit time before combining workers.\n\nStep 1: A completes 1/8 of the job per day and B completes 1/12.\n\nStep 2: Their combined rate is (8+12)/(8×12) jobs/day.\n\nStep 3: Time is the reciprocal, 8×12/(8+12)=4.8 days.\n\nAnswer: 4.8 days.\n\nCheck and interpretation: The combined time is less than 8 days, the faster individual time. Averaging the completion times would fail this basic check.",
    "family": "combined-work",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-equal-distance-speed-4",
    "topic": "apt",
    "prompt": "A traveller covers 40 km at 38 km/h and the next 40 km at 58 km/h. Ignoring stops, what is the overall average speed in km/h?",
    "choices": [
      "45.9167 km/h",
      "48 km/h",
      "46.9468 km/h",
      "22.9583 km/h"
    ],
    "key": 0,
    "why": "Principle: Average speed is total distance divided by total time. Equal distances at different speeds lead to a harmonic mean, not an arithmetic mean.\n\nStep 1: Total distance is 80 km.\n\nStep 2: Travel time is 40/38+40/58 h.\n\nStep 3: Divide distance by time: vavg=2v₁v₂/(v₁+v₂)=45.9167 km/h.\n\nAnswer: 45.9167 km/h.\n\nCheck and interpretation: More time is spent on the slower segment, so the average is below the arithmetic mean of the two speeds. The common segment distance cancels.",
    "family": "equal-distance-speed",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-markup-discount-4",
    "topic": "apt",
    "prompt": "An item is marked 28% above its cost price and then sold at a 9% discount on marked price. What is the net profit percentage relative to cost?",
    "choices": [
      "19 %",
      "37 %",
      "8.24 %",
      "16.48 %"
    ],
    "key": 3,
    "why": "Principle: Markup is based on cost while discount is based on marked price. Successive percentage operations multiply their scale factors.\n\nStep 1: Take cost as 100 units. Marked price is 100×(1+28/100)=128.\n\nStep 2: Selling price is 128×(1−9/100)=116.48.\n\nStep 3: Profit percentage on cost is selling price minus 100, namely 16.48%.\n\nAnswer: 16.48 %.\n\nCheck and interpretation: Simply subtracting discount percentage from markup percentage ignores their different bases. The multiplicative calculation also works when the net result is a loss.",
    "family": "markup-discount",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-committee-selection-4",
    "topic": "apt",
    "prompt": "A committee of 3 people is selected uniformly from 12 candidates, including two named candidates A and B. What is the probability both A and B are selected?",
    "choices": [
      "0.25",
      "0.0625",
      "0.1818",
      "0.0455"
    ],
    "key": 3,
    "why": "Principle: Committee selection is without replacement. Count committees that contain both named people and divide by the count of all equally likely committees.\n\nStep 1: All committees number C(12,3).\n\nStep 2: With A and B already included, choose the remaining 1 members from 10, giving C(10,1).\n\nStep 3: Their ratio simplifies to r(r−1)/[n(n−1)]=3×2/(12×11)=0.0455.\n\nAnswer: 0.0455.\n\nCheck and interpretation: Multiplying r/n by itself incorrectly treats the two inclusion events as independent. The second inclusion probability changes after the first is fixed.",
    "family": "committee-selection",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-pipes-drain-4",
    "topic": "apt",
    "prompt": "An inlet fills an empty tank in 6 hours. A drain empties a full tank in 13 hours. Both are opened together when the tank is empty, with constant flow rates. How long until it fills?",
    "choices": [
      "4.1053 hours",
      "13 hours",
      "7 hours",
      "11.1429 hours"
    ],
    "key": 3,
    "why": "Principle: The inlet contributes a positive fill rate and the drain a negative fill rate. Net filling time is the reciprocal of their rate difference.\n\nStep 1: The inlet rate is 1/6 tank/h and drain rate is 1/13 tank/h.\n\nStep 2: Net rate is 1/6−1/13=7/[6×13] tank/h.\n\nStep 3: Thus filling time is 6×13/7=11.1429 hours.\n\nAnswer: 11.1429 hours.\n\nCheck and interpretation: The drain makes filling slower than the inlet alone, so the answer must exceed the inlet’s filling time. Adding rates would describe two inlets.",
    "family": "pipes-drain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-updated-average-4",
    "topic": "apt",
    "prompt": "The average of 8 observations is 24. One observation equal to 14 is removed. What is the mean of the remaining observations?",
    "choices": [
      "19",
      "22.25",
      "12.7143",
      "25.4286"
    ],
    "key": 3,
    "why": "Principle: Recover the original total from mean times count, subtract the removed observation, then divide by the new count.\n\nStep 1: The original sum is 8×24=192.\n\nStep 2: After removing 14, the sum becomes 178 and the count becomes 7.\n\nStep 3: The new mean is 178/7=25.4286.\n\nAnswer: 25.4286.\n\nCheck and interpretation: The removed value lies below the original mean, so removing it raises the mean. Dividing by the original count would miss the count change.",
    "family": "updated-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-compound-growth-4",
    "topic": "apt",
    "prompt": "A population grows at 4% per year compounded annually for two years. What is the total percentage increase over its initial value?",
    "choices": [
      "8 %",
      "16 %",
      "4.08 %",
      "8.16 %"
    ],
    "key": 3,
    "why": "Principle: Annual compounding applies each year’s growth to the previous year’s enlarged population. The two-year growth factor is (1+r)².\n\nStep 1: Convert the annual percentage to rate r=4/100.\n\nStep 2: After two years, final/initial=(1+4/100)².\n\nStep 3: Subtract one and multiply by 100 to obtain total growth 8.16%.\n\nAnswer: 8.16 %.\n\nCheck and interpretation: The result exceeds the simple two-year increase 8% because the first year’s increase also grows in the second year.",
    "family": "compound-growth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-arithmetic-sum-4",
    "topic": "apt",
    "prompt": "A production schedule makes 6 units on day 1 and increases output by 5 units each successive day. How many units are made over the first 14 days?",
    "choices": [
      "994 units",
      "154 units",
      "539 units",
      "609 units"
    ],
    "key": 2,
    "why": "Principle: Daily outputs form an arithmetic progression. Its total is the number of terms times the average of the first and last terms.\n\nStep 1: First output a=6; common difference d=5.\n\nStep 2: Day-14 output is a+(n−1)d=6+13×5=71.\n\nStep 3: Total is n[2a+(n−1)d]/2=14×[6+71]/2=539 units.\n\nAnswer: 539 units.\n\nCheck and interpretation: There are n−1 increases between the first and nth days. Using n increases would shift every endpoint calculation by one day.",
    "family": "arithmetic-sum",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-without-replacement-4",
    "topic": "apt",
    "prompt": "A box contains 9 working and 7 defective components. Two are drawn randomly without replacement. What is the probability that both work?",
    "choices": [
      "0.3164",
      "0.5625",
      "0.7",
      "0.3"
    ],
    "key": 3,
    "why": "Principle: Without replacement, the second draw’s probabilities depend on the first draw. Use the multiplication rule with a conditional probability.\n\nStep 1: The first component works with probability 9/16.\n\nStep 2: If it works, 8 working components remain among 15 total.\n\nStep 3: Multiply: P(both work)=(9/16)×(8/15)=0.3.\n\nAnswer: 0.3.\n\nCheck and interpretation: Squaring the first-draw probability would apply to replacement or independent draws. Here taking out a working component slightly lowers the next success probability.",
    "family": "without-replacement",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-matrix-power-5",
    "topic": "math",
    "prompt": "A 2×2 matrix A has trace 14 and determinant 48. What is trace(A³)?",
    "choices": [
      "2744",
      "728",
      "110592",
      "100"
    ],
    "key": 1,
    "why": "Principle: For a 2×2 matrix, trace(A³)=(trace A)³−3(det A)(trace A). This follows from the eigenvalue sum and product, even when the matrix is not diagonalizable.\n\nStep 1: Let the eigenvalues be λ₁ and λ₂. Then λ₁+λ₂=14 and λ₁λ₂=48.\n\nStep 2: Expand (λ₁+λ₂)³=λ₁³+λ₂³+3λ₁λ₂(λ₁+λ₂).\n\nStep 3: Rearrange to get trace(A³)=14³−3×48×14=728.\n\nAnswer: 728.\n\nCheck and interpretation: The eigenvalues here are 6 and 8, whose cubes add to the same result. Cubing the trace directly retains unwanted cross terms.",
    "family": "matrix-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-conditional-binomial-5",
    "topic": "math",
    "prompt": "7 packets are transmitted independently, each with error probability 0.2. Given that at least one packet is erroneous, what is the probability that exactly one is erroneous? Round to four decimal places.",
    "choices": [
      "0.367",
      "0.4644",
      "0.7903",
      "0.5356"
    ],
    "key": 1,
    "why": "Principle: A conditional probability is the probability of the intersection divided by the conditioning-event probability. The error count has a binomial distribution.\n\nStep 1: Let X count erroneous packets: X~Binomial(7,0.2).\n\nStep 2: P(X=1)=C(7,1)×0.2×0.8^6=0.367.\n\nStep 3: P(X≥1)=1−P(X=0)=1−0.8^7=0.7903.\n\nStep 4: Since {X=1} is contained in {X≥1}, divide the first probability by the second: 0.4644.\n\nAnswer: 0.4644.\n\nCheck and interpretation: The conditional probability is larger than the unconditional probability of exactly one error because all zero-error trials have been excluded.",
    "family": "conditional-binomial",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-exponential-interval-5",
    "topic": "math",
    "prompt": "A component lifetime T is exponentially distributed with mean 6 hours. Given T>6 hours, find P(2T is between 24 and 36 hours | T>6 hours). Round to four decimal places.",
    "choices": [
      "0.0855",
      "0.2325",
      "0.3679",
      "0.6321"
    ],
    "key": 1,
    "why": "Principle: The exponential distribution is memoryless: after surviving a specified time, the residual lifetime has the same distribution as the original lifetime.\n\nStep 1: The event 24<2T<36 is equivalent to 12<T<18.\n\nStep 2: The survival function is P(T>t)=exp(−t/6).\n\nStep 3: Conditioning on T>6 gives [e⁻²−e⁻³]/e⁻¹=e⁻¹−e⁻².\n\nStep 4: Numerically the probability is 0.2325. The strict endpoints do not matter for a continuous distribution.\n\nAnswer: 0.2325.\n\nCheck and interpretation: Using the unconditional interval probability would omit the normalization for the component already having survived one mean lifetime.",
    "family": "exponential-interval",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-double-integral-5",
    "topic": "math",
    "prompt": "Evaluate ∫₀¹ ∫₀ˣ 6y^5 dy dx. Round to four decimal places.",
    "choices": [
      "0.1429",
      "0.1667",
      "0.8571",
      "0.125"
    ],
    "key": 0,
    "why": "Principle: In an iterated integral the inner variable is integrated first, while the outer variable is treated as a constant bound.\n\nStep 1: The inner antiderivative of 6y^5 is y^6.\n\nStep 2: Evaluating at y=x and y=0 leaves x^6.\n\nStep 3: The remaining integral is ∫₀¹x^6dx=[x^7/7]₀¹=1/7=0.1429.\n\nAnswer: 0.1429.\n\nCheck and interpretation: The triangular integration region is 0≤y≤x≤1. Replacing the upper inner limit by 1 would incorrectly change the region to a square.",
    "family": "double-integral",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-ode-laplace-5",
    "topic": "math",
    "prompt": "A causal system obeys y″+14y′+48y=e⁻ᵗu(t), with y(0⁻)=y′(0⁻)=0. What is Y(s) evaluated at s=1? Round to four decimal places.",
    "choices": [
      "0.0079",
      "0.0159",
      "0.0208",
      "0.0667"
    ],
    "key": 0,
    "why": "Principle: With zero initial conditions, differentiation in the Laplace domain multiplies by s. The input transform of e⁻ᵗu(t) is 1/(s+1).\n\nStep 1: Transform the differential equation: [s²+14s+48]Y(s)=1/(s+1).\n\nStep 2: Factor the quadratic as (s+6)(s+8).\n\nStep 3: Therefore Y(s)=1/[(s+1)(s+6)(s+8)].\n\nStep 4: At s=1 the denominator is 2×7×9, yielding 0.0079.\n\nAnswer: 0.0079.\n\nCheck and interpretation: The input pole at −1 must be included. Evaluating only the system transfer function at s=1 would be twice the requested output-transform value.",
    "family": "ode-laplace",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-constrained-minimum-5",
    "topic": "math",
    "prompt": "Real numbers x and y satisfy x+y=7. What is the minimum possible value of x²+y²?",
    "choices": [
      "24.5",
      "49",
      "12.25",
      "3.5"
    ],
    "key": 0,
    "why": "Principle: A quadratic restricted to a linear constraint can be minimized by substitution or by the Cauchy–Schwarz inequality.\n\nStep 1: Substitute y=7−x into the objective: f(x)=x²+(7−x)².\n\nStep 2: Differentiate: f′(x)=4x−14. Setting it to zero gives x=3.5, so y=3.5.\n\nStep 3: The second derivative is 4>0, establishing a strict minimum.\n\nStep 4: The minimum is 2×(3.5)²=24.5.\n\nAnswer: 24.5.\n\nCheck and interpretation: The inequality (x+y)²≤2(x²+y²) gives the same lower bound 49/2, with equality only at x=y.",
    "family": "constrained-minimum",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-gaussian-moment-5",
    "topic": "math",
    "prompt": "X is a zero-mean Gaussian random variable with variance 6. What is Var(X²)?",
    "choices": [
      "72",
      "108",
      "36",
      "12"
    ],
    "key": 0,
    "why": "Principle: For a zero-mean Gaussian with variance σ², the fourth moment is E[X⁴]=3σ⁴. Variance of X² uses both its second and fourth moments.\n\nStep 1: E[X²]=6, so (E[X²])²=36.\n\nStep 2: The Gaussian fourth moment is E[X⁴]=3×6²=108.\n\nStep 3: Var(X²)=E[X⁴]−(E[X²])²=108−36=72.\n\nAnswer: 72.\n\nCheck and interpretation: Using E[X⁴] alone would give a raw moment, not a variance. Although E[X]=0, E[X²] is positive.",
    "family": "gaussian-moment",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-improper-integral-5",
    "topic": "math",
    "prompt": "Evaluate ∫₀∞ 1/(x²+36) dx. Round to four decimal places.",
    "choices": [
      "0.5236",
      "0.1667",
      "0.2618",
      "9.4248"
    ],
    "key": 2,
    "why": "Principle: The antiderivative of 1/(x²+a²) for a>0 is arctan(x/a)/a. An improper integral is evaluated as a limit.\n\nStep 1: Here a=6, so the antiderivative is arctan(x/6)/6.\n\nStep 2: As x→∞, arctan(x/6)→π/2; at x=0 it is zero.\n\nStep 3: Subtract the limits: the integral is π/(2×6)=0.2618.\n\nAnswer: 0.2618.\n\nCheck and interpretation: The result decreases as a grows, consistent with the integrand becoming smaller at every fixed x. Integrating over the entire real line would double the answer.",
    "family": "improper-integral",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-pdf-second-moment-5",
    "topic": "math",
    "prompt": "X has density f(x)=7x^6 for 0<x<1 and zero otherwise. Find E[X²], rounded to four decimal places.",
    "choices": [
      "0.875",
      "0.7656",
      "0.7778",
      "0.1111"
    ],
    "key": 2,
    "why": "Principle: For a continuous random variable, E[g(X)]=∫g(x)f(x)dx over the support. A second moment is not generally the square of the mean.\n\nStep 1: First check normalization: ∫₀¹7x^6dx=1.\n\nStep 2: Multiply the density by x² to form 7x^8.\n\nStep 3: Integrate: E[X²]=[7x^9/9]₀¹=7/9=0.7778.\n\nAnswer: 0.7778.\n\nCheck and interpretation: Since 0<X<1, E[X²]≤E[X]=0.875. The computed second moment satisfies that bound.",
    "family": "pdf-second-moment",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-loaded-divider-5",
    "topic": "networks",
    "prompt": "A 15 V ideal source drives R₁=6 kΩ in series with R₂=13 kΩ. A load R_L=8 kΩ is connected across R₂. Find the load voltage in V, rounded to four decimal places.",
    "choices": [
      "10.2632",
      "8.5714",
      "8.2174",
      "6.7826"
    ],
    "key": 3,
    "why": "Principle: A load across the lower divider resistor changes that resistor to a parallel equivalent. Apply the divider rule only after forming this equivalent.\n\nStep 1: The lower equivalent is R₂∥RL=13×8/(13+8)=4.9524 kΩ.\n\nStep 2: Total source resistance is 6+4.9524=10.9524 kΩ.\n\nStep 3: The load shares the parallel-branch voltage: VL=15×4.9524/(10.9524)=6.7826 V.\n\nAnswer: 6.7826.\n\nCheck and interpretation: The unloaded voltage is 10.2632 V, which is larger. Treating the load as absent overestimates the actual voltage.",
    "family": "loaded-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rc-switching-5",
    "topic": "networks",
    "prompt": "An initially uncharged 6 µF capacitor is charged from a 13 V source through 7 kΩ at t=0. Find vC at t=42 ms, in V. Round to four decimal places.",
    "choices": [
      "4.7824",
      "8.2176",
      "13",
      "11.2406"
    ],
    "key": 1,
    "why": "Principle: The capacitor voltage in a first-order network is the final value plus the initial-to-final difference multiplied by exp(−t/τ).\n\nStep 1: The time constant is RC=7×6 ms=42 ms, using kΩ·µF=ms.\n\nStep 2: The initial voltage is 0 V and the DC final voltage is 13 V.\n\nStep 3: Thus vC(t)=13[1−exp(−t/42 ms)].\n\nStep 4: At the specified t=τ, vC=13(1−e⁻¹)=8.2176 V.\n\nAnswer: 8.2176.\n\nCheck and interpretation: At one time constant charging has completed about 63.2% of the final voltage. The factor e⁻¹ instead describes the remaining voltage error.",
    "family": "rc-switching",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rl-natural-response-5",
    "topic": "networks",
    "prompt": "An inductor of 14 mH carries 0.5 A before being disconnected from its source and allowed to discharge through 7 Ω at t=0. Find current at t=4 ms in A. Round to four decimal places.",
    "choices": [
      "0.0677",
      "0.1839",
      "0.4323",
      "0.25"
    ],
    "key": 0,
    "why": "Principle: Inductor current is continuous through switching when there is no impulse voltage. The source-free RL response is i(t)=i(0⁺)exp(−Rt/L).\n\nStep 1: The initial current after switching is 0.5 A.\n\nStep 2: The time constant is L/R=14/7 ms=2 ms.\n\nStep 3: The requested instant is twice the time constant, so i=0.5e⁻²=0.0677 A.\n\nAnswer: 0.0677.\n\nCheck and interpretation: The resistor dissipates stored magnetic energy and current decays monotonically to zero. The natural-response formula does not contain a charging term 1−e⁻ᵗ/τ.",
    "family": "rl-natural-response",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-ac-power-match-5",
    "topic": "networks",
    "prompt": "An AC Thévenin equivalent has RMS voltage 20 V and impedance (7+j6) Ω. The load impedance can be any passive complex value. What is the maximum average load power in W?",
    "choices": [
      "28.5714",
      "57.1429",
      "10.8465",
      "14.2857"
    ],
    "key": 3,
    "why": "Principle: Maximum average AC power is transferred to the complex-conjugate load: ZL=Zth*. RMS voltage can be used directly in I²R.\n\nStep 1: Choose ZL=7−j6 Ω so the reactances cancel.\n\nStep 2: The total impedance is 14 Ω and RMS current is 20/14 A.\n\nStep 3: Load power is I²RL=(20/14)²×7=14.2857 W.\n\nStep 4: Equivalently Pmax=Vth,rms²/(4Rth).\n\nAnswer: 14.2857.\n\nCheck and interpretation: Matching the impedance magnitude alone does not cancel reactance. Using peak voltage in the RMS formula would introduce a factor-of-two error.",
    "family": "ac-power-match",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-complex-load-power-5",
    "topic": "networks",
    "prompt": "A sinusoidal source of 25 V RMS is applied across Z=(7+j11) Ω. Find average power absorbed in W, rounded to four decimal places.",
    "choices": [
      "47.9353",
      "89.2857",
      "40.4412",
      "25.7353"
    ],
    "key": 3,
    "why": "Principle: Average power is Vrms² times the real part of admittance. A reactive element exchanges energy but absorbs zero net average power.\n\nStep 1: The admittance is 1/Z=(7−j11)/(170) S.\n\nStep 2: Its real part is R/(R²+X²)=7/170 S.\n\nStep 3: Therefore P=25²×7/170=25.7353 W.\n\nAnswer: 25.7353.\n\nCheck and interpretation: Vrms²/|Z| is apparent power, not real power. The load power factor is R/|Z| and must be included.",
    "family": "complex-load-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-series-resonance-q-5",
    "topic": "networks",
    "prompt": "A series RLC circuit has R=8 Ω, L=6 mH and C=12 µF. Find its quality factor Q, rounded to four decimal places.",
    "choices": [
      "178.8854",
      "1.3975",
      "5.5902",
      "2.7951"
    ],
    "key": 3,
    "why": "Principle: For a series resonant RLC circuit, Q=ω₀L/R=(1/R)√(L/C), where ω₀=1/√(LC).\n\nStep 1: Convert L=6×10⁻³ H and C=12×10⁻⁶ F.\n\nStep 2: The characteristic impedance √(L/C)=√(500)=22.3607 Ω.\n\nStep 3: Divide by the series resistance: Q=22.3607/8=2.7951.\n\nAnswer: 2.7951.\n\nCheck and interpretation: Q is dimensionless. Increasing series resistance dissipates more energy per cycle and lowers Q, which rules out formulas proportional to R.",
    "family": "series-resonance-q",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-current-divider-5",
    "topic": "networks",
    "prompt": "An ideal current source supplies 6 mA into parallel resistors 7 kΩ and 10 kΩ. Find current through the 7 kΩ branch in mA, rounded to four decimal places.",
    "choices": [
      "3.5294",
      "2.4706",
      "14.5714",
      "4.2"
    ],
    "key": 0,
    "why": "Principle: Parallel-branch currents divide in proportion to conductance, or inversely to resistance. The numerator contains the other branch resistance in the two-resistor divider formula.\n\nStep 1: The equivalent resistance is 7×10/(7+10) kΩ.\n\nStep 2: The common node voltage is the source current times this equivalent resistance.\n\nStep 3: Divide that voltage by 7 kΩ to obtain I₁=6×10/(7+10)=3.5294 mA.\n\nAnswer: 3.5294.\n\nCheck and interpretation: Because 7<10, this branch carries more than half the source current. The other branch current is 2.4706 mA, and their sum is 6 mA.",
    "family": "current-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-twoport-z-5",
    "topic": "networks",
    "prompt": "A resistive T network has a 7 Ω series arm at port 1, a 9 Ω shunt arm from the central node to ground, and a 11 Ω series arm at port 2. With currents defined entering both ports, what is z₁₁?",
    "choices": [
      "9 Ω",
      "7 Ω",
      "16 Ω",
      "27 Ω"
    ],
    "key": 2,
    "why": "Principle: The z parameter z₁₁ is V₁/I₁ with I₂=0. An open second port makes the second series arm carry zero current.\n\nStep 1: Set I₂=0 by opening port 2. No voltage drop appears across its series arm.\n\nStep 2: The input current then flows through the port-1 arm and the shunt arm in series.\n\nStep 3: Therefore z₁₁=R₁+Rsh=7+9=16 Ω.\n\nAnswer: 16 Ω.\n\nCheck and interpretation: The port-2 series resistance does not affect z₁₁ under the open-port condition. Shorting port 2 instead would compute a different driving-point condition.",
    "family": "twoport-z",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-charge-sharing-5",
    "topic": "networks",
    "prompt": "A 7 µF capacitor initially at 15 V is connected in parallel, with matching polarities, to an initially uncharged 10 µF capacitor. After settling through a small resistance, what is their common voltage in V?",
    "choices": [
      "15",
      "8.8235",
      "36.4286",
      "6.1765"
    ],
    "key": 3,
    "why": "Principle: For an isolated pair of capacitors, total charge is conserved during redistribution. Electrostatic energy is not conserved because the connecting resistance dissipates energy.\n\nStep 1: The initial total charge is Q=C₁V₁+C₂V₂=7×15+10×0=105 µC.\n\nStep 2: The final parallel capacitance is C₁+C₂=17 µF.\n\nStep 3: The common final voltage is Q/(C₁+C₂)=105/17=6.1765 V.\n\nAnswer: 6.1765.\n\nCheck and interpretation: The result lies between the two initial voltages. Equating initial and final stored energies would incorrectly ignore dissipation during connection.",
    "family": "charge-sharing",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-exponential-convolution-5",
    "topic": "signals",
    "prompt": "For x(t)=e^(−6t)u(t) and h(t)=e^(−8t)u(t), find y(0.5) where y=x*h. Round to four decimal places.",
    "choices": [
      "0.0157",
      "0.0009",
      "0.0681",
      "0.0315"
    ],
    "key": 0,
    "why": "Principle: Convolution of two causal exponentials is integrated only over the overlap 0≤τ≤t. The output is a difference of exponentials divided by their rate difference.\n\nStep 1: Write y(t)=∫₀ᵗ e^(−6τ)e^(−8(t−τ))dτ.\n\nStep 2: Factor out e^(−8t) and integrate e^(2τ).\n\nStep 3: This gives y(t)=[e^(−6t)−e^(−8t)]/2 for t≥0.\n\nStep 4: At t=0.5, the value is 0.0157.\n\nAnswer: 0.0157.\n\nCheck and interpretation: Pointwise multiplication of the input and impulse response is not convolution. Since both functions are nonnegative, the convolution must also be nonnegative.",
    "family": "exponential-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-discrete-convolution-5",
    "topic": "signals",
    "prompt": "For x[n]=(0.25)ⁿu[n] and h[n]=(0.75)ⁿu[n], calculate (x*h)[3]. Round to four decimal places.",
    "choices": [
      "0.0066",
      "0.625",
      "0.4375",
      "0.3125"
    ],
    "key": 1,
    "why": "Principle: For causal discrete sequences, the convolution at index n is a finite sum over m=0,…,n. A finite geometric sum gives a closed form.\n\nStep 1: At n=3, sum aᵐb^(3−m) for m=0,1,2,3.\n\nStep 2: The four terms are b³+ab²+a²b+a³, where a=0.25 and b=0.75.\n\nStep 3: Using (b⁴−a⁴)/(b−a), the sum equals 0.625.\n\nAnswer: 0.625.\n\nCheck and interpretation: There are four overlapping terms at index 3, including both endpoints. Omitting m=0 or m=3 drops a valid impulse-response contribution.",
    "family": "discrete-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-alias-folding-5",
    "topic": "signals",
    "prompt": "The signal cos(2π×12000t) is sampled at 21 ksample/s. What positive alias frequency is observed within the first Nyquist band, in kHz?",
    "choices": [
      "12 kHz",
      "33 kHz",
      "9 kHz",
      "10.5 kHz"
    ],
    "key": 2,
    "why": "Principle: Sampling replicates spectra at integer multiples of fs. A real sinusoid is represented by a frequency in the first Nyquist band 0≤f≤fs/2.\n\nStep 1: The original frequency is 12 kHz, above the Nyquist frequency 10.5 kHz.\n\nStep 2: Subtract fs=21 kHz to get -9 kHz. A cosine at a negative frequency has the same samples as its positive-frequency counterpart.\n\nStep 3: Thus the baseband alias is |12−21|=9 kHz.\n\nAnswer: 9 kHz.\n\nCheck and interpretation: The result 9 kHz lies below fs/2=10.5 kHz. The original signal is therefore indistinguishable from this lower-frequency cosine after sampling.",
    "family": "alias-folding",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-lti-sinusoidal-5",
    "topic": "signals",
    "prompt": "A stable LTI system has H(s)=1/(s+6). With input cos(2t), what is the steady-state output amplitude? Round to four decimal places.",
    "choices": [
      "0.1667",
      "0.025",
      "6.3246",
      "0.1581"
    ],
    "key": 3,
    "why": "Principle: A sinusoid is an eigenfunction of an LTI system. Its steady-state amplitude is multiplied by the frequency-response magnitude at the input angular frequency.\n\nStep 1: Evaluate H(jω) at ω=2 rad/s: H(j2)=1/(6+j2).\n\nStep 2: The denominator magnitude is √(6²+2²)=√40.\n\nStep 3: The input has unit amplitude, so output amplitude is |H(j2)|=1/√40=0.1581.\n\nAnswer: 0.1581.\n\nCheck and interpretation: The squared magnitude is a power ratio, not an amplitude ratio. The decaying transient is excluded by the steady-state qualification.",
    "family": "lti-sinusoidal",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-sequence-energy-5",
    "topic": "signals",
    "prompt": "Find the total energy of x[n]=(0.4)ⁿu[n], rounded to four decimal places.",
    "choices": [
      "1.1905",
      "1.6667",
      "0.1905",
      "0.8621"
    ],
    "key": 0,
    "why": "Principle: Discrete-time energy is the sum of squared magnitudes over every integer index. Causality restricts the nonzero terms to n≥0.\n\nStep 1: Square the magnitude to get |x[n]|²=(0.16)ⁿ for n≥0.\n\nStep 2: Since |0.4|<1, the geometric series converges.\n\nStep 3: E=Σₙ₌₀∞a²ⁿ=1/(1−a²)=1/(1−0.16)=1.1905.\n\nAnswer: 1.1905.\n\nCheck and interpretation: The n=0 sample equals one and must be included. Summing x[n] without squaring would give an area-like sum, not energy.",
    "family": "sequence-energy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-shifted-impulse-5",
    "topic": "signals",
    "prompt": "An LTI system has h(t)=e^(−6t)u(t). Its input is δ(t−1)+2δ(t−2). Find y(1.5), rounded to four decimal places.",
    "choices": [
      "0.0498",
      "40.2209",
      "0.0996",
      "0.0001"
    ],
    "key": 0,
    "why": "Principle: Each delayed impulse produces a delayed copy of the impulse response. Causality determines which copies have begun at the observation time.\n\nStep 1: By linearity, y(t)=h(t−1)+2h(t−2).\n\nStep 2: At t=1.5, t−1=0.5 but t−2=−0.5, so the second term is zero.\n\nStep 3: The remaining term is e^(−6×0.5)=0.0498.\n\nAnswer: 0.0498.\n\nCheck and interpretation: Ignoring the unit-step factor would incorrectly include a response to the impulse at t=2 before it has occurred.",
    "family": "shifted-impulse",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-dft-bin-amplitude-5",
    "topic": "signals",
    "prompt": "For N=9, x[n]=cos(2π×2n/N), 0≤n<N. Using X[r]=Σx[n]e^(−j2πrn/N), what is |X[2]|?",
    "choices": [
      "9",
      "1",
      "4.5",
      "2.25"
    ],
    "key": 2,
    "why": "Principle: A cosine is half the sum of two complex exponentials. The unnormalized DFT gives magnitude N for a complex exponential aligned with a DFT bin.\n\nStep 1: Expand x[n]=(e^(j2π2n/N)+e^(−j2π2n/N))/2.\n\nStep 2: For N=9>4, bins 2 and N−2 are distinct, so each exponential contributes to a different DFT bin.\n\nStep 3: At r=2, the matching exponential contributes N/2=4.5, while the other sums to zero.\n\nAnswer: 4.5.\n\nCheck and interpretation: The DFT convention has no 1/N factor in the forward transform. DC and Nyquist cosines need special treatment, but bin 2 is neither for this N.",
    "family": "dft-bin-amplitude",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-fourier-dc-5",
    "topic": "signals",
    "prompt": "For x(t)=e^(−7|t|), define X(ω)=∫₋∞∞x(t)e^(−jωt)dt. Find X(0), rounded to four decimal places.",
    "choices": [
      "0.1429",
      "3.5",
      "14",
      "0.2857"
    ],
    "key": 3,
    "why": "Principle: The Fourier transform at zero frequency equals the signed area under the time-domain signal. Even symmetry reduces the integral to twice its positive-time half.\n\nStep 1: Set ω=0 so the complex exponential in the transform becomes one.\n\nStep 2: Since x(t) is even, X(0)=2∫₀∞e^(−7t)dt.\n\nStep 3: The one-sided integral is 1/7, hence X(0)=2/7=0.2857.\n\nAnswer: 0.2857.\n\nCheck and interpretation: This is an amplitude-area quantity, not energy. Squaring the signal first would produce a different integral.",
    "family": "fourier-dc",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-difference-equation-5",
    "topic": "signals",
    "prompt": "A causal system at initial rest obeys y[n]−0.35y[n−1]=x[n]. For x[n]=(−1)ⁿu[n], what is the amplitude of the asymptotic alternating output? Round to four decimal places.",
    "choices": [
      "0.7407",
      "1.5385",
      "0.2593",
      "1.35"
    ],
    "key": 0,
    "why": "Principle: The steady alternating input has discrete-time angular frequency π. A stable system scales it by the magnitude of H(eʲπ).\n\nStep 1: At initial rest, H(z)=1/(1−0.35z⁻¹). The pole magnitude 0.35 is less than one, ensuring a decaying transient.\n\nStep 2: At z=eʲπ=−1, H(−1)=1/(1+0.35).\n\nStep 3: Thus the asymptotic output is [1/(1+0.35)](−1)ⁿ and its amplitude is 0.7407.\n\nAnswer: 0.7407.\n\nCheck and interpretation: Evaluating at z=1 would give the DC gain, not the alternating-input gain. The input switch-on creates a transient that vanishes as n grows.",
    "family": "difference-equation",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-diode-bias-5",
    "topic": "devices",
    "prompt": "An ideal p-n diode has I_S=10 µA, ideality factor 1 and V_T=26 mV. Find the forward voltage needed for 6 mA, in V, rounded to four decimal places.",
    "choices": [
      "0.7",
      "0.0466",
      "0.3327",
      "0.1664"
    ],
    "key": 3,
    "why": "Principle: The ideal Shockley law is I=IS[exp(V/(nVT))−1]. Solve the exponential relationship for voltage rather than assuming a fixed diode drop.\n\nStep 1: Convert IS=10 µA to 0.01 mA, matching the current unit.\n\nStep 2: Rearrange to exp(V/VT)=1+I/IS=1+6/0.01=601.\n\nStep 3: Taking the natural logarithm gives V=0.026 ln(601)=0.1664 V.\n\nAnswer: 0.1664.\n\nCheck and interpretation: A natural logarithm is required because the diode equation uses base e. A fixed 0.7 V approximation is inconsistent with the specified ideal diode parameters.",
    "family": "diode-bias",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-diode-incremental-5",
    "topic": "devices",
    "prompt": "A diode biased at 6 mA has n=1 and V_T=26 mV. A small 10 mV AC source is applied through 7 kΩ, with the DC bias maintained separately. What is the diode AC voltage amplitude in mV? Round to four decimal places.",
    "choices": [
      "10",
      "3.8235",
      "0.0062",
      "9.9938"
    ],
    "key": 2,
    "why": "Principle: Linearize the diode at its bias point using rd=nVT/ID, then solve a voltage divider. This incremental model applies only for sufficiently small AC excursions.\n\nStep 1: The incremental resistance is rd=0.026/(6×10⁻³)=4.3333 Ω.\n\nStep 2: The source resistance is 7000 Ω, so the diode receives fraction rd/(R+rd).\n\nStep 3: Its voltage amplitude is 10×4.3333/(7000+4.3333)=0.0062 mV.\n\nAnswer: 0.0062.\n\nCheck and interpretation: The very small diode voltage compared with VT validates the small-signal approximation. The source’s full 10 mV does not appear across the diode.",
    "family": "diode-incremental",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-active-check-5",
    "topic": "devices",
    "prompt": "An NPN has grounded emitter, β=100, V_BE=0.7 V, R_B=750 kΩ from collector-independent V_CC=15 V to base, and R_C=2 kΩ from V_CC to collector. Assuming forward-active operation, find V_CE in V. Round to four decimal places.",
    "choices": [
      "15",
      "11.1867",
      "14.9619",
      "3.8133"
    ],
    "key": 1,
    "why": "Principle: For fixed-base bias in forward-active operation, IB=(VCC−VBE)/RB and IC=βIB. Collector voltage then follows from the resistor drop.\n\nStep 1: The base current is (15−0.7)/750=0.0191 mA.\n\nStep 2: The collector current is 100×0.0191=1.9067 mA.\n\nStep 3: The collector drop is IC RC=3.8133 V.\n\nStep 4: Thus VCE=VCC−ICRC=15−3.8133=11.1867 V.\n\nAnswer: 11.1867.\n\nCheck and interpretation: VCE exceeds VBE=0.7 V here, so the collector-base junction remains reverse biased and the forward-active assumption is self-consistent.",
    "family": "bjt-active-check",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-rpi-5",
    "topic": "devices",
    "prompt": "A BJT at 300 K has collector current 3.5 mA and β=150. Take V_T=26 mV. Find its hybrid-π input resistance rπ in kΩ, rounded to four decimal places.",
    "choices": [
      "1.1143",
      "0.0074",
      "20192.3077",
      "0.5571"
    ],
    "key": 0,
    "why": "Principle: The hybrid-π resistance is rπ=β/gm, with gm=IC/VT at the operating point. Consistent mA and V units give gm in mS and rπ in kΩ.\n\nStep 1: Compute gm=3.5/0.026=134.6154 mS.\n\nStep 2: Then rπ=150/134.6154 kΩ.\n\nStep 3: The resulting input resistance is 1.1143 kΩ. It relates a small vbe to the resulting small base current.\n\nAnswer: 1.1143.\n\nCheck and interpretation: The inverse transconductance 1/gm is not rπ; the factor β is required because base current is smaller than collector current.",
    "family": "bjt-rpi",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-gm-5",
    "topic": "devices",
    "prompt": "A long-channel nMOS in saturation obeys I_D=(K/2)(V_GS−V_TH)² with K=0.45 mA/V². At overdrive 1.5 V, find g_m in mS. Neglect channel-length modulation.",
    "choices": [
      "0.3375",
      "1.0125",
      "1.35",
      "0.675"
    ],
    "key": 3,
    "why": "Principle: MOS transconductance is the derivative of drain current with respect to gate-source voltage while holding drain voltage fixed.\n\nStep 1: Differentiate ID=(K/2)VOV² to obtain gm=K VOV.\n\nStep 2: Use K=0.45 mA/V² and VOV=1.5 V.\n\nStep 3: Thus gm=0.45×1.5=0.675 mA/V=0.675 mS.\n\nStep 4: As a cross-check, ID=0.5063 mA and 2ID/VOV gives the same gm.\n\nAnswer: 0.675.\n\nCheck and interpretation: Using ID/VOV misses a factor of two for the square-law model. The stated K convention explicitly includes the one-half factor.",
    "family": "mos-gm",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-triode-5",
    "topic": "devices",
    "prompt": "An nMOS has K=0.5 mA/V², overdrive V_GS−V_TH=1.5 V, and V_DS=0.2 V. Using the long-channel model, find I_D in mA. Round to four decimal places.",
    "choices": [
      "0.5625",
      "0.15",
      "0.28",
      "0.14"
    ],
    "key": 3,
    "why": "Principle: For 0≤VDS<VOV the MOSFET is in the triode region, with ID=K[VOV VDS−VDS²/2]. The saturation square law does not apply in this region.\n\nStep 1: Here VDS=0.2 V is below VOV=1.5 V, establishing triode operation.\n\nStep 2: Compute VOV VDS=0.3 V² and VDS²/2=0.02 V².\n\nStep 3: Multiply their difference by K=0.5 to obtain ID=0.14 mA.\n\nAnswer: 0.14.\n\nCheck and interpretation: The VDS²/2 correction distinguishes the triode expression from a purely linear resistor approximation. The specified voltages are positive and produce positive drain current.",
    "family": "mos-triode",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-junction-built-in-5",
    "topic": "devices",
    "prompt": "An abrupt silicon p-n junction at equilibrium has N_D=6.00e+15 cm⁻³, N_A=7.00e+16 cm⁻³ and n_i=10¹⁰ cm⁻³. Taking V_T=26 mV, find the built-in potential in V, rounded to four decimal places.",
    "choices": [
      "0.3459",
      "0.3282",
      "0.7557",
      "1.5114"
    ],
    "key": 2,
    "why": "Principle: For a nondegenerate abrupt junction at thermal equilibrium, Vbi=VT ln(NAND/ni²). The potential balances diffusion against drift.\n\nStep 1: Form the dimensionless concentration ratio NAND/ni²=4.2000e+12.\n\nStep 2: Take its natural logarithm, not the base-10 logarithm.\n\nStep 3: Multiply by 0.026 V to obtain Vbi=0.7557 V.\n\nAnswer: 0.7557.\n\nCheck and interpretation: All carrier concentrations use the same cm⁻³ units, which cancel in the ratio. This internal equilibrium barrier is not an externally extractable terminal voltage.",
    "family": "junction-built-in",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-early-resistance-5",
    "topic": "devices",
    "prompt": "At an operating point a BJT has I_C=1 mA and Early voltage V_A=75 V. Using r_o≈V_A/I_C, find r_o in kΩ, rounded to four decimal places.",
    "choices": [
      "0.0133",
      "75",
      "37.5",
      "112.5"
    ],
    "key": 1,
    "why": "Principle: The Early effect gives the forward-active BJT a finite output conductance. For VCE much smaller than VA, the output resistance is approximately VA/IC.\n\nStep 1: Use the stated approximation ro≈VA/IC.\n\nStep 2: Since V divided by mA gives kΩ, ro=75/1 kΩ.\n\nStep 3: Numerically ro=75 kΩ. A larger bias current would reduce this resistance at fixed Early voltage.\n\nAnswer: 75.\n\nCheck and interpretation: This resistance models the slope of the collector characteristic at fixed base-emitter voltage. It is different from the DC ratio VCE/IC.",
    "family": "early-resistance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-semiconductor-resistivity-5",
    "topic": "devices",
    "prompt": "An n-type bar has electron concentration 6.0e+15 cm⁻³ and mobility 600 cm²/(V·s). Neglect holes and take q=1.6×10⁻¹⁹ C. Find resistivity in Ω·cm, rounded to four decimal places.",
    "choices": [
      "0.576 Ω·cm",
      "173.6111 Ω·cm",
      "1.7361 Ω·cm",
      "0.0174 Ω·cm"
    ],
    "key": 2,
    "why": "Principle: With electrons dominating conduction, conductivity is σ=q n μn and resistivity is its reciprocal. The supplied centimetre-based units yield Ω·cm.\n\nStep 1: Insert q=1.6×10⁻¹⁹, n=6.0e+15 and μn=600.\n\nStep 2: Conductivity is σ=0.576 S/cm.\n\nStep 3: Therefore ρ=1/σ=1.7361 Ω·cm.\n\nAnswer: 1.7361 Ω·cm.\n\nCheck and interpretation: Increasing electron concentration or mobility increases conductivity and decreases resistivity. Converting to Ω·m would multiply the numerical Ω·cm value by 0.01.",
    "family": "semiconductor-resistivity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-emitter-degeneration-5",
    "topic": "analog",
    "prompt": "A common-emitter amplifier has g_m=7 mS, collector load 9 kΩ and unbypassed emitter resistance 0.45 kΩ. Take β→∞ and r_o→∞. What is v_o/v_b, rounded to four decimal places?",
    "choices": [
      "-63",
      "-15.1807",
      "15.1807",
      "-20"
    ],
    "key": 1,
    "why": "Principle: Emitter degeneration feeds an emitter voltage back against the base-emitter signal. With infinite β, emitter and collector small-signal currents are equal.\n\nStep 1: Write ic=gm(vb−ve) and ve=ic RE.\n\nStep 2: Then ic(1+gmRE)=gm vb, so ic/vb=gm/(1+gmRE).\n\nStep 3: Since vo=−ic RC, gain is −gmRC/(1+gmRE).\n\nStep 4: Substitution gives −7×9/[1+7×0.45]=-15.1807.\n\nAnswer: -15.1807.\n\nCheck and interpretation: The degeneration reduces the magnitude below the bypassed-emitter value gmRC. The simpler −RC/RE approximation requires gmRE≫1.",
    "family": "emitter-degeneration",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-finite-opamp-gain-5",
    "topic": "analog",
    "prompt": "A non-inverting amplifier uses R_f=15 kΩ and R_g=1 kΩ. Its op-amp has finite DC open-loop gain A=200, infinite input resistance and zero output resistance. Find the closed-loop DC gain, rounded to four decimal places.",
    "choices": [
      "16",
      "200",
      "14.8148",
      "17.3913"
    ],
    "key": 2,
    "why": "Principle: For finite open-loop gain, use vo=A(v+−v−) and the feedback divider v−=βvo. The ideal virtual-short approximation is not exact.\n\nStep 1: The feedback factor is β=Rg/(Rf+Rg)=1/16.\n\nStep 2: Solving vo=A(vin−βvo) gives vo/vin=A/(1+Aβ).\n\nStep 3: This can be written 16/(1+16/200)=14.8148.\n\nAnswer: 14.8148.\n\nCheck and interpretation: The result is slightly smaller than the ideal non-inverting gain 16. A negative-feedback denominator contains a plus sign.",
    "family": "finite-opamp-gain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-weighted-summer-5",
    "topic": "analog",
    "prompt": "An ideal inverting summer has grounded non-inverting input, feedback 13 kΩ, and inputs 1 V through 7 kΩ and 0.6 V through 9 kΩ. Assuming linear operation, find output in V.",
    "choices": [
      "-2.7238",
      "2.7238",
      "-1.8571",
      "-1.3"
    ],
    "key": 0,
    "why": "Principle: At virtual ground, each source drives an input current independently. The op-amp input draws no current, so the feedback branch carries their sum.\n\nStep 1: Input currents are 1/7=0.1429 mA and 0.6/9=0.0667 mA.\n\nStep 2: Their sum is 0.2095 mA.\n\nStep 3: The output is the negative feedback-resistor drop: vo=−13×(0.2095)=-2.7238 V.\n\nAnswer: -2.7238.\n\nCheck and interpretation: Different input resistors give different weights. Adding input voltages before applying one divider ratio would discard these weights.",
    "family": "weighted-summer",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-common-source-ro-5",
    "topic": "analog",
    "prompt": "A common-source MOS amplifier has source at AC ground, g_m=3.5 mS, r_o=30 kΩ and drain resistor 10 kΩ to AC ground. Find unloaded midband voltage gain, rounded to four decimal places.",
    "choices": [
      "-35",
      "-26.25",
      "26.25",
      "-140"
    ],
    "key": 1,
    "why": "Principle: The drain sees RD in parallel with the transistor output resistance ro. The controlled drain current gm vgs develops an inverted output across this equivalent load.\n\nStep 1: Effective drain load is RD∥ro=10×30/(10+30)=7.5 kΩ.\n\nStep 2: The source is at AC ground, so vgs equals input voltage.\n\nStep 3: Gain is −gm(RD∥ro)=−3.5×7.5=-26.25.\n\nAnswer: -26.25.\n\nCheck and interpretation: Finite ro reduces gain magnitude compared with −gmRD. Since mS×kΩ is dimensionless, no additional factor of 1000 is required.",
    "family": "common-source-ro",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-highpass-frequency-5",
    "topic": "analog",
    "prompt": "A coupling capacitor of 20 nF feeds an amplifier input resistance 6 kΩ from an ideal voltage source. Treat the amplifier input as purely resistive. Find the high-pass −3 dB frequency in kHz.",
    "choices": [
      "8.3333 kHz",
      "0.2111 kHz",
      "13.2629 kHz",
      "1.3263 kHz"
    ],
    "key": 3,
    "why": "Principle: The coupling capacitor and input resistance form H(s)=sRC/(1+sRC). Its lower cutoff is the frequency at which capacitor reactance magnitude equals R.\n\nStep 1: Use R=6×10³ Ω and C=20×10⁻⁹ F.\n\nStep 2: The corner angular frequency is ωc=1/(RC).\n\nStep 3: Convert to hertz with fc=1/(2πRC), then divide by 1000: fc=1.3263 kHz.\n\nAnswer: 1.3263 kHz.\n\nCheck and interpretation: At the corner, magnitude is 1/√2 of the high-frequency passband value. Confusing ωc with fc introduces a factor of 2π.",
    "family": "highpass-frequency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-inverting-bandwidth-5",
    "topic": "analog",
    "prompt": "A dominant-pole op-amp has GBW=4.5 MHz. An inverting amplifier uses R_in=4.5 kΩ and R_f=15 kΩ. Estimate its closed-loop bandwidth in MHz using noise gain.",
    "choices": [
      "1.0385 MHz",
      "1.35 MHz",
      "19.5 MHz",
      "2.25 MHz"
    ],
    "key": 0,
    "why": "Principle: For a single-pole voltage-feedback op-amp, bandwidth is approximately GBW divided by noise gain. An inverting stage has noise gain 1+Rf/Rin, not |signal gain|.\n\nStep 1: The signal gain is −Rf/Rin=−3.3333.\n\nStep 2: Noise gain is 1+Rf/Rin=4.3333.\n\nStep 3: Bandwidth ≈4.5/4.3333=1.0385 MHz.\n\nAnswer: 1.0385 MHz.\n\nCheck and interpretation: The distinction between signal gain and noise gain matters most at low inverting gains. The estimate assumes the dominant-pole model and no extra capacitive poles.",
    "family": "inverting-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-slew-amplitude-5",
    "topic": "analog",
    "prompt": "An op-amp has slew rate 3.5 V/µs. For a sinusoidal output at 100 kHz, what is the maximum peak amplitude in V allowed by slew rate alone?",
    "choices": [
      "11.1408 V",
      "2.7852 V",
      "35 V",
      "5.5704 V"
    ],
    "key": 3,
    "why": "Principle: A sinusoid vp sin(2πft) has maximum slope 2πfvp. Avoiding slew-rate distortion requires that slope not exceed SR.\n\nStep 1: Convert SR to 3.5×10⁶ V/s and frequency to 100×10³ Hz.\n\nStep 2: Set 2πfVp=SR at the limit.\n\nStep 3: Thus Vp=SR/(2πf)=3.5×10⁶/(2π×100×10³)=5.5704 V.\n\nAnswer: 5.5704 V.\n\nCheck and interpretation: This is peak amplitude, not peak-to-peak amplitude. Supply rails or small-signal bandwidth may impose a lower practical limit, but they are excluded here.",
    "family": "slew-amplitude",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-source-follower-5",
    "topic": "analog",
    "prompt": "A MOS source follower has g_m=10 mS and effective source load 2 kΩ. Neglect body effect and r_o. Find its voltage gain, rounded to four decimal places.",
    "choices": [
      "0.9524",
      "20",
      "0.0476",
      "-0.9524"
    ],
    "key": 0,
    "why": "Principle: A source follower develops its output at the source. The resulting source voltage reduces vgs, creating local negative feedback.\n\nStep 1: The current is gm(vin−vo), and this flows through the source load.\n\nStep 2: Write vo=gmRL(vin−vo) and solve for vo/vin=gmRL/(1+gmRL).\n\nStep 3: Here gmRL=20, giving gain 0.9524.\n\nAnswer: 0.9524.\n\nCheck and interpretation: The gain is positive and strictly less than one in this model. The reciprocal 1/(1+gmRL) describes the residual gate-source fraction, not the output gain.",
    "family": "source-follower",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-ideal-integrator-5",
    "topic": "analog",
    "prompt": "An ideal inverting integrator uses R=15 kΩ and C=7 µF. Its output is initially zero. A constant 0.2 V input is applied for 0.1 s. Assuming no saturation, what is output at 0.1 s in V?",
    "choices": [
      "0.1905 V",
      "-0.1905 V",
      "-0.0952 V",
      "-0.381 V"
    ],
    "key": 1,
    "why": "Principle: An ideal inverting integrator obeys vo(t)=vo(0)−(1/RC)∫vin(t)dt. A constant input produces a linear output ramp.\n\nStep 1: RC=15×7×10⁻³=0.105 s.\n\nStep 2: The input-time integral over 0.1 s is 0.2×0.1=0.02 V·s.\n\nStep 3: With zero initial output, vo=−0.02/0.105=-0.1905 V.\n\nAnswer: -0.1905 V.\n\nCheck and interpretation: The minus sign follows from the inverting connection. The stated no-saturation condition permits the ideal ramp calculation without supply-rail clipping.",
    "family": "ideal-integrator",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-ripple-counter-period-5",
    "topic": "digital",
    "prompt": "A 10-bit binary counter starts at zero and is clocked at 20 MHz. How many µs elapse before it first returns to zero, assuming ideal operation?",
    "choices": [
      "25.6 µs",
      "20480 µs",
      "51.2 µs",
      "0.5 µs"
    ],
    "key": 2,
    "why": "Principle: An n-bit binary counter repeats after 2ⁿ input clocks. The repeat time is the number of clock periods in a full state cycle.\n\nStep 1: There are 2^10=1024 distinct states, including zero.\n\nStep 2: At 20 MHz the clock period is 1/20 µs.\n\nStep 3: The first full wrap occurs after 1024/20=51.2 µs.\n\nAnswer: 51.2 µs.\n\nCheck and interpretation: The count from zero through all-one is 2ⁿ−1, but another clock is required to return to zero, making the full cycle 2ⁿ clocks.",
    "family": "ripple-counter-period",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-twos-complement-subtract-5",
    "topic": "digital",
    "prompt": "Two unsigned 6-bit operands have values A=17 and B=8. A subtractor computes A−B using 6-bit two’s-complement addition and discards carry out. What unsigned decimal value appears on its output?",
    "choices": [
      "25",
      "9",
      "55",
      "10"
    ],
    "key": 1,
    "why": "Principle: Fixed-width subtraction adds the two’s complement of B and retains only the lowest n bits. This implements arithmetic modulo 2ⁿ.\n\nStep 1: The six-bit two’s complement of B is 64−8=56.\n\nStep 2: Add A to it: 17+56=73.\n\nStep 3: Discard the carry beyond bit 5, equivalently subtract 64, to obtain 9.\n\nAnswer: 9.\n\nCheck and interpretation: The specified A exceeds B, so the unsigned difference is positive and is represented exactly. Discarding carry is part of fixed-width subtraction, not an arithmetic error.",
    "family": "twos-complement-subtract",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-adc-serial-clock-5",
    "topic": "digital",
    "prompt": "A 9-bit SAR ADC outputs one serial word for each of 200 ksample/s. Each frame also contains 2 status bits and 1 idle clock. What minimum serial clock in MHz supports continuous conversion?",
    "choices": [
      "1.8 MHz",
      "2.4 MHz",
      "2.2 MHz",
      "2.6 MHz"
    ],
    "key": 1,
    "why": "Principle: The serial link must provide a clock slot for every conversion bit and every overhead slot in each sample frame.\n\nStep 1: A frame requires 9+2+1=12 clocks.\n\nStep 2: At 200000 frames/s, the required clock is 12×200000=2400000 clocks/s.\n\nStep 3: Divide by 10⁶ to get 2.4 MHz.\n\nAnswer: 2.4 MHz.\n\nCheck and interpretation: Counting only the ADC resolution underestimates the link rate because status and idle slots also consume serial clock periods.",
    "family": "adc-serial-clock",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-synchronous-timing-5",
    "topic": "digital",
    "prompt": "A register-to-register path has t_CQ=2 ns, combinational delay 4.5 ns and setup time 1.5 ns. Adverse clock uncertainty consumes another 0.2 ns. What is the maximum clock frequency in MHz?",
    "choices": [
      "222.2222 MHz",
      "153.8462 MHz",
      "128.2051 MHz",
      "121.9512 MHz"
    ],
    "key": 3,
    "why": "Principle: For setup timing, one clock period must cover launch clock-to-Q, maximum logic delay, destination setup time and adverse uncertainty.\n\nStep 1: The minimum period is 2+4.5+1.5+0.2=8.2 ns.\n\nStep 2: Convert period to frequency with fMHz=1000/Tns.\n\nStep 3: Hence fmax=121.9512 MHz. This checks setup timing only.\n\nAnswer: 121.9512 MHz.\n\nCheck and interpretation: Hold timing is a separate minimum-delay condition. Adverse uncertainty reduces the available time and therefore is added to the required period.",
    "family": "synchronous-timing",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-memory-chip-count-5",
    "topic": "digital",
    "prompt": "A memory requires 1024 K words of 16 bits. Available chips each contain 4 K words of 8 bits. How many chips are needed?",
    "choices": [
      "256",
      "1024",
      "512",
      "258"
    ],
    "key": 2,
    "why": "Principle: Memory expansion may require both depth expansion and width expansion. The total chip count is the product of those two independent factors.\n\nStep 1: To make 16-bit words from 8-bit chips, use 16/8=2 chips in parallel per bank.\n\nStep 2: To obtain 1024 K words from 4 K-word chips, use 1024/4=256 banks.\n\nStep 3: Total chips =2×256=512.\n\nAnswer: 512.\n\nCheck and interpretation: Counting only address-depth banks omits the second chip needed in every bank to supply the upper byte of each 16-bit word.",
    "family": "memory-chip-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-binary-dac-5",
    "topic": "digital",
    "prompt": "An ideal unipolar 9-bit DAC uses v_o=V_ref D/2^N with V_ref=3 V. Find output for unsigned input code D=133, in V. Round to four decimal places.",
    "choices": [
      "0.7808 V",
      "0.7852 V",
      "1.5586 V",
      "0.7793 V"
    ],
    "key": 3,
    "why": "Principle: Use the DAC transfer convention stated in the question: each code increment is Vref/2ᴺ. The largest code remains one LSB below Vref.\n\nStep 1: There are 2^9=512 nominal quantization steps.\n\nStep 2: One LSB is 3/512 V.\n\nStep 3: Multiplying by input code 133 gives vo=3×133/512=0.7793 V.\n\nAnswer: 0.7793 V.\n\nCheck and interpretation: Scaling by 2ᴺ−1 would implement an endpoint-normalized convention, which differs from the explicitly supplied DAC law.",
    "family": "binary-dac",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-bitwise-xor-5",
    "topic": "digital",
    "prompt": "Two 5-bit unsigned words encode decimal 9 and 6. Their corresponding bits feed five XOR gates. What is the unsigned decimal value of the output word?",
    "choices": [
      "15",
      "0",
      "16",
      "17"
    ],
    "key": 0,
    "why": "Principle: Bitwise XOR produces one where the operand bits differ and zero where they agree. It corresponds to binary addition without inter-bit carry.\n\nStep 1: Write the operands as 01001 and 00110.\n\nStep 2: XOR corresponding bit positions to obtain 01111.\n\nStep 3: Convert that binary result back to decimal to get 15.\n\nAnswer: 15.\n\nCheck and interpretation: Ordinary decimal addition may differ because it includes carries. OR also differs because it retains a one when both input bits are one.",
    "family": "bitwise-xor",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-flash-comparator-count-5",
    "topic": "digital",
    "prompt": "An ideal 8-bit flash ADC uses a full bank of threshold comparators with one comparator per internal quantization boundary. How many comparators are required?",
    "choices": [
      "256",
      "8",
      "128",
      "255"
    ],
    "key": 3,
    "why": "Principle: An N-bit quantizer divides its input range into 2ᴺ bins. Separating adjacent bins requires one internal threshold between each neighboring pair.\n\nStep 1: The number of output bins is 2^8=256.\n\nStep 2: The number of boundaries between those bins is one fewer.\n\nStep 3: Thus a full flash architecture requires 2^8−1=255 comparators.\n\nAnswer: 255.\n\nCheck and interpretation: The rapid exponential comparator growth explains why flash ADC resolution is expensive in power and silicon area. This count excludes any separate overrange detector.",
    "family": "flash-comparator-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-counter-adc-time-5",
    "topic": "digital",
    "prompt": "An 9-bit counter-type ADC starts its count at zero at the beginning of each conversion. The clock period is 3 µs. Using a worst-case budget of 2^N clocks, find the worst-case conversion time in ms.",
    "choices": [
      "1536 ms",
      "1.536 ms",
      "0.027 ms",
      "0.768 ms"
    ],
    "key": 1,
    "why": "Principle: A counter-type ADC can need a full-scale count search, unlike a SAR converter that needs approximately N decisions. The question specifies the clock-budget convention.\n\nStep 1: The worst-case budget is 2^9=512 clocks.\n\nStep 2: Multiply by 3 µs per clock to get 1536 µs.\n\nStep 3: Convert microseconds to milliseconds by dividing by 1000: 1.536 ms.\n\nAnswer: 1.536 ms.\n\nCheck and interpretation: Using N clocks would describe the approximate decision count of a SAR ADC, not the stated counter ramp architecture.",
    "family": "counter-adc-time",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-routh-cubic-bound-5",
    "topic": "control",
    "prompt": "For positive K, a feedback system has characteristic polynomial s³+6s²+13s+K. What is the upper boundary value of K for strict stability?",
    "choices": [
      "19",
      "2.1667",
      "78",
      "468"
    ],
    "key": 2,
    "why": "Principle: For a real cubic, the Routh first-column entries must all have the same positive sign. A zero boundary entry marks loss of strict asymptotic stability.\n\nStep 1: The first two Routh rows begin [1, 13] and [6, K].\n\nStep 2: The s¹ first-column entry is (6×13−K)/6.\n\nStep 3: Along with K>0, positivity requires K<78.\n\nStep 4: Therefore strict stability holds for 0<K<78, and the requested upper boundary is 78.\n\nAnswer: 78.\n\nCheck and interpretation: The boundary itself is excluded from strict stability. Positive polynomial coefficients alone are necessary but not sufficient for a cubic.",
    "family": "routh-cubic-bound",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-second-order-overshoot-5",
    "topic": "control",
    "prompt": "A standard unity-DC-gain second-order system has ω_n=7 rad/s and damping ratio ζ=0.4. Find percentage overshoot to a unit step, rounded to four decimal places.",
    "choices": [
      "0.2538 %",
      "28.461 %",
      "50.7653 %",
      "25.3827 %"
    ],
    "key": 3,
    "why": "Principle: For an underdamped standard second-order response, percentage overshoot is 100 exp[−πζ/√(1−ζ²)]. It depends on damping ratio rather than natural frequency.\n\nStep 1: The supplied ζ=0.4 lies strictly between zero and one.\n\nStep 2: Compute √(1−ζ²)=0.9165.\n\nStep 3: Insert in the overshoot formula: 100exp[−π×0.4/0.9165]=25.3827%.\n\nAnswer: 25.3827 %.\n\nCheck and interpretation: Changing ωn=7 rad/s would change how quickly the peak occurs, but would not change this percentage overshoot with ζ fixed.",
    "family": "second-order-overshoot",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-ramp-error-5",
    "topic": "control",
    "prompt": "A stable unity-negative-feedback system has open loop G(s)=7/[s(s+6)]. What is its unit-ramp steady-state error? Round to four decimal places.",
    "choices": [
      "1.1667",
      "0",
      "0.4615",
      "0.8571"
    ],
    "key": 3,
    "why": "Principle: For a type-1 unity-feedback system, unit-ramp steady-state error is 1/Kv, where Kv=lim(s→0)sG(s). Closed-loop stability is required.\n\nStep 1: There is one open-loop pole at the origin, so the system is type 1.\n\nStep 2: Kv=lim(s→0)7/(s+6)=7/6.\n\nStep 3: Hence ess=1/Kv=6/7=0.8571.\n\nAnswer: 0.8571.\n\nCheck and interpretation: The characteristic polynomial s²+as+gain has positive coefficients here and is stable. A step input would have zero error, whereas a ramp has a finite nonzero error.",
    "family": "ramp-error",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-first-order-settling-5",
    "topic": "control",
    "prompt": "A plant G(s)=7/(s+6) is placed in unity negative feedback. Using the approximation t_s≈4/|closed-loop pole|, find its 2% settling time in s.",
    "choices": [
      "0.6667 s",
      "0.3077 s",
      "0.5714 s",
      "0.0769 s"
    ],
    "key": 1,
    "why": "Principle: Unity negative feedback gives T=G/(1+G). For a real negative pole −α, the response error decays exponentially with time constant 1/α.\n\nStep 1: T(s)=7/(s+6+7)=7/(s+13).\n\nStep 2: The pole is −13, so τ=1/13 s.\n\nStep 3: The specified 2% approximation is ts≈4τ=4/13=0.3077 s.\n\nAnswer: 0.3077 s.\n\nCheck and interpretation: Use the closed-loop pole, not the original plant pole. The exact normalized 2% exponential settling time would be ln(50)/α, close to 4/α.",
    "family": "first-order-settling",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-pole-damping-5",
    "topic": "control",
    "prompt": "A second-order denominator is (s+6)(s+8). What is its damping ratio ζ, rounded to four decimal places?",
    "choices": [
      "6.9282",
      "1.0104",
      "7",
      "2.0207"
    ],
    "key": 1,
    "why": "Principle: Compare the expanded polynomial with s²+2ζωns+ωn². Both the linear and constant coefficients are needed to extract the damping ratio.\n\nStep 1: Expand to s²+14s+48.\n\nStep 2: Thus ωn=√48 rad/s and 2ζωn=14.\n\nStep 3: Rearrange: ζ=14/(2√48)=1.0104.\n\nAnswer: 1.0104.\n\nCheck and interpretation: The two distinct real negative poles imply an overdamped system, so ζ must exceed one. This is a useful check on coefficient matching.",
    "family": "pole-damping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-single-pole-phase-5",
    "topic": "control",
    "prompt": "For G(s)=1/(1+0.2s), find phase at ω=7 rad/s in degrees, rounded to four decimal places.",
    "choices": [
      "54.4623 degrees",
      "-90 degrees",
      "-54.4623 degrees",
      "-27.2312 degrees"
    ],
    "key": 2,
    "why": "Principle: The phase of a first-order low-pass is the negative angle of its denominator 1+jωτ. The numerator contributes zero phase.\n\nStep 1: At the given frequency, ωτ=7×0.2=1.4.\n\nStep 2: The denominator angle is arctan(1.4).\n\nStep 3: Therefore ∠G=−arctan(1.4)×180/π=-54.4623 degrees.\n\nAnswer: -54.4623 degrees.\n\nCheck and interpretation: The phase must lie between 0 and −90 degrees for positive frequency. The arctangent result in radians must be converted before reporting degrees.",
    "family": "single-pole-phase",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-step-final-value-5",
    "topic": "control",
    "prompt": "A plant G(s)=7/(s+6) has unity negative feedback and is driven by a unit step reference. Find its final output value, rounded to four decimal places.",
    "choices": [
      "1",
      "0.5385",
      "0.0769",
      "1.1667"
    ],
    "key": 1,
    "why": "Principle: For a stable closed-loop system, the final value of a unit-step response equals its closed-loop DC gain. Unity feedback does not automatically make that gain one.\n\nStep 1: The closed-loop transfer function is T(s)=G/(1+G)=7/(s+13).\n\nStep 2: For a unit step, Y(s)=T(s)/s.\n\nStep 3: By the final-value theorem, y∞=lim(s→0)sY(s)=7/13=0.5385.\n\nAnswer: 0.5385.\n\nCheck and interpretation: The remaining step error is 0.4615. The pole −13 is in the left half-plane, validating the final-value theorem.",
    "family": "step-final-value",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-state-determinant-5",
    "topic": "control",
    "prompt": "A continuous-time state matrix is A=[0 1; −54 −15]. What is the product of its two pole magnitudes?",
    "choices": [
      "15",
      "7.3485",
      "54",
      "117"
    ],
    "key": 2,
    "why": "Principle: The poles are eigenvalues of A. Their product equals det(A), and their individual values can be obtained from the characteristic polynomial.\n\nStep 1: Compute det(sI−A)=s²+15s+54.\n\nStep 2: It factors as (s+6)(s+9), so the poles are −6 and −9.\n\nStep 3: Their magnitudes multiply to 6×9=54.\n\nAnswer: 54.\n\nCheck and interpretation: The trace is the pole sum, −(a+b), rather than their product. Both poles are negative here, so magnitude product agrees with the positive determinant.",
    "family": "state-determinant",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-phase-margin-5",
    "topic": "control",
    "prompt": "A unity-feedback loop has G(s)=K/[s(s+7)]. K is selected so gain crossover is ω_gc=7 rad/s. Find phase margin in degrees.",
    "choices": [
      "90 degrees",
      "45 degrees",
      "135 degrees",
      "180 degrees"
    ],
    "key": 1,
    "why": "Principle: Phase margin is 180 degrees plus open-loop phase at unity-gain crossover. The integrator contributes −90 degrees, and the real pole contributes an additional lag.\n\nStep 1: At ωgc=7, the integrator phase is −90 degrees.\n\nStep 2: The (s+7) denominator term contributes −arctan(ωgc/7)=−45 degrees.\n\nStep 3: Total phase is −135 degrees, so PM=180−135=45 degrees.\n\nAnswer: 45 degrees.\n\nCheck and interpretation: A positive K can achieve the stated crossover: K=ωgc√(ωgc²+7²). K sets magnitude here but contributes no extra phase.",
    "family": "phase-margin",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-capacity-bandwidth-5",
    "topic": "comm",
    "prompt": "An AWGN channel has bandwidth 2 MHz and linear SNR=21.6274. Using the stated SNR rounded to four decimals, find Shannon capacity in Mbit/s, rounded to three decimal places.",
    "choices": [
      "4.5 Mbit/s",
      "18 Mbit/s",
      "8.8696 Mbit/s",
      "9 Mbit/s"
    ],
    "key": 3,
    "why": "Principle: Shannon capacity for a bandlimited AWGN channel is C=B log₂(1+SNR). With B in MHz, the resulting capacity is in Mbit/s.\n\nStep 1: Use linear SNR=21.6274, so the logarithm argument is 22.6274.\n\nStep 2: Compute log₂(1+SNR)≈4.5 bit/s/Hz.\n\nStep 3: Multiply by 2 MHz to obtain approximately 9.000 Mbit/s.\n\nAnswer: 9 Mbit/s.\n\nCheck and interpretation: Omitting the +1 is a high-SNR approximation and is not the exact Shannon expression. Capacity is a theoretical upper bound, not an assured payload rate.",
    "family": "capacity-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-qam-raised-cosine-5",
    "topic": "comm",
    "prompt": "An M-QAM link with M=4 carries 9 Mbit/s before overhead and uses raised-cosine pulse shaping with roll-off α=0.3. What is its ideal RF null-to-null bandwidth in MHz?",
    "choices": [
      "4.5 MHz",
      "11.7 MHz",
      "5.85 MHz",
      "2.925 MHz"
    ],
    "key": 2,
    "why": "Principle: An M-ary symbol carries log₂M bits. For raised-cosine shaping, the real passband null-to-null bandwidth is (1+α) times symbol rate.\n\nStep 1: Each symbol carries log₂(4)=2 bits.\n\nStep 2: The symbol rate is Rs=9/2=4.5 Mbaud.\n\nStep 3: RF bandwidth is (1+0.3)Rs=5.85 MHz.\n\nAnswer: 5.85 MHz.\n\nCheck and interpretation: The one-sided baseband bandwidth is half this passband bandwidth. Reporting that baseband value would introduce a factor-of-two error.",
    "family": "qam-raised-cosine",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-am-efficiency-5",
    "topic": "comm",
    "prompt": "A conventional single-tone AM transmitter has carrier power 20 W and modulation index 0.45. Find useful-sideband power as a percentage of total transmitted power.",
    "choices": [
      "10.125 %",
      "31.0345 %",
      "9.1941 %",
      "4.597 %"
    ],
    "key": 2,
    "why": "Principle: In conventional AM, the two sidebands together carry Pc m²/2 while the carrier still consumes Pc. Efficiency is sideband power divided by total power.\n\nStep 1: Sideband power is 20×0.45²/2=2.025 W.\n\nStep 2: Total power is Pc(1+m²/2)=22.025 W.\n\nStep 3: Efficiency is 100×m²/(2+m²)=9.1941%.\n\nAnswer: 9.1941 %.\n\nCheck and interpretation: Carrier power cancels from the efficiency ratio. Dividing sideband power by carrier power alone would overestimate useful-power efficiency.",
    "family": "am-efficiency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-fm-carson-5",
    "topic": "comm",
    "prompt": "A message has maximum frequency 7 kHz. An FM modulator produces peak deviation 13 kHz. Using Carson’s rule, what approximate transmission bandwidth in kHz is required?",
    "choices": [
      "26 kHz",
      "14 kHz",
      "40 kHz",
      "20 kHz"
    ],
    "key": 2,
    "why": "Principle: Carson’s rule estimates practical FM bandwidth as B≈2(Δf+fm), incorporating both frequency deviation and message bandwidth.\n\nStep 1: Identify peak deviation Δf=13 kHz, rather than peak-to-peak deviation.\n\nStep 2: Add the highest message frequency: Δf+fm=13+7=20 kHz.\n\nStep 3: Double the sum for the full passband width: B≈40 kHz.\n\nAnswer: 40 kHz.\n\nCheck and interpretation: This is an occupied-bandwidth estimate. Exact FM spectra have infinitely many sidebands, so the result is not a strict mathematical bandlimit.",
    "family": "fm-carson",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-pcm-sqnr-5",
    "topic": "comm",
    "prompt": "A full-scale sinusoid is quantized by an ideal uniform 9-bit quantizer. Under the uniform quantization-noise model, estimate SQNR in dB to four decimal places.",
    "choices": [
      "54.1854 dB",
      "55.9463 dB",
      "49.9257 dB",
      "61.9669 dB"
    ],
    "key": 1,
    "why": "Principle: For a full-scale sinusoid and uniform quantization error with variance Δ²/12, SQNR≈6.0206N+1.7609 dB.\n\nStep 1: The sinusoid signal power is A²/2. For a span of 2A, quantization step is Δ=2A/2ᴺ.\n\nStep 2: Dividing A²/2 by Δ²/12 gives SQNR=(3/2)2^(2N).\n\nStep 3: Taking 10log₁₀ gives 10log₁₀(3/2)+20Nlog₁₀2.\n\nStep 4: For N=9, this is 55.9463 dB.\n\nAnswer: 55.9463 dB.\n\nCheck and interpretation: The 1.76 dB offset comes from the full-scale sinusoidal input assumption. A smaller input amplitude reduces actual SQNR.",
    "family": "pcm-sqnr",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-binary-entropy-5",
    "topic": "comm",
    "prompt": "An independent binary source emits 1 with probability 0.25 and 0 with probability 0.75. Find its entropy in bits/symbol, rounded to four decimal places.",
    "choices": [
      "1 bits/symbol",
      "2 bits/symbol",
      "0.4056 bits/symbol",
      "0.8113 bits/symbol"
    ],
    "key": 3,
    "why": "Principle: Entropy is the probability-weighted average information content, H=−Σp log₂p. Both symbols contribute even when their probabilities differ.\n\nStep 1: The information contribution of 1 is −0.25log₂(0.25).\n\nStep 2: The information contribution of 0 is −0.75log₂(0.75).\n\nStep 3: Adding them gives H=0.8113 bits per source symbol.\n\nAnswer: 0.8113 bits/symbol.\n\nCheck and interpretation: Binary entropy cannot exceed 1 bit/symbol and is maximal for equal probabilities. It decreases when one outcome becomes easier to predict.",
    "family": "binary-entropy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-coded-throughput-5",
    "topic": "comm",
    "prompt": "A 8-ary modulation runs at 2 Mbaud using a code of rate 0.625. Ignore all other overhead. What is the information-bit rate in Mbit/s?",
    "choices": [
      "6 Mbit/s",
      "3.75 Mbit/s",
      "9.6 Mbit/s",
      "1.25 Mbit/s"
    ],
    "key": 1,
    "why": "Principle: A code rate r means r information bits per transmitted coded bit. Modulation carries log₂M coded bits per symbol.\n\nStep 1: The modulation carries 3 coded bits per symbol.\n\nStep 2: At 2 Mbaud the coded rate is 6 Mbit/s.\n\nStep 3: Multiplying by code rate 0.625 yields information rate 3.75 Mbit/s.\n\nAnswer: 3.75 Mbit/s.\n\nCheck and interpretation: Coding adds redundancy, so the information rate must be below the raw coded-bit rate. Dividing by code rate would predict the opposite.",
    "family": "coded-throughput",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-receiver-noise-5",
    "topic": "comm",
    "prompt": "A matched receiver has noise figure 4.5 dB and bandwidth 6 MHz. At T₀=290 K, with k_B=1.38×10⁻²³ J/K, find its equivalent total input-referred noise power Fk_BT₀B in pW.",
    "choices": [
      "0.024 pW",
      "0.6768 pW",
      "0.0068 pW",
      "0.0677 pW"
    ],
    "key": 3,
    "why": "Principle: Noise factor F is a linear power ratio and equals 10^(NF/10). The specified total input-referred noise is F times the thermal input-noise reference.\n\nStep 1: Convert NF=4.5 dB to F=10^(4.5/10)=2.8184.\n\nStep 2: The thermal reference is kT₀B=1.38×10⁻²³×290×6×10⁶ W.\n\nStep 3: Multiply by F and convert W to pW by multiplying by 10¹², giving 0.0677 pW.\n\nAnswer: 0.0677 pW.\n\nCheck and interpretation: The receiver-added equivalent noise alone would use (F−1)kT₀B. The question explicitly requests total FkT₀B, including source thermal noise.",
    "family": "receiver-noise",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-ebn0-conversion-5",
    "topic": "comm",
    "prompt": "A digital link has received signal-to-noise ratio 15 dB measured over bandwidth B. Its bit rate satisfies R_b/B=3 bit/s/Hz. Find E_b/N₀ in dB.",
    "choices": [
      "10.2288 dB",
      "19.7712 dB",
      "5 dB",
      "10.5409 dB"
    ],
    "key": 0,
    "why": "Principle: Since SNR=P/(N₀B) and Eb=P/Rb, the linear relation is Eb/N₀=SNR×B/Rb. Decibels convert multiplication to addition.\n\nStep 1: The bandwidth-to-bit-rate ratio is B/Rb=1/3.\n\nStep 2: Thus (Eb/N₀)dB=SNRdB−10log₁₀(Rb/B).\n\nStep 3: Substitute 15−10log₁₀(3)=10.2288 dB.\n\nAnswer: 10.2288 dB.\n\nCheck and interpretation: For spectral efficiency above one bit/s/Hz, Eb/N₀ in dB is smaller than the measured SNR in dB. A linear ratio must not be reported as a decibel value.",
    "family": "ebn0-conversion",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-complex-load-power-5",
    "topic": "em",
    "prompt": "A lossless 50 Ω transmission line is terminated by (45−j30) Ω. If incident average power is 15 mW, find average load power in mW, rounded to four decimal places.",
    "choices": [
      "1.398 mW",
      "10.4207 mW",
      "15 mW",
      "13.602 mW"
    ],
    "key": 3,
    "why": "Principle: At a lossless line termination, the reflected power fraction is |Γ|², where Γ=(ZL−Z0)/(ZL+Z0). Delivered power is the remaining fraction of incident power.\n\nStep 1: Compute |Γ|²=[(45−50)²+30²]/[(45+50)²+30²].\n\nStep 2: This gives reflected fraction 0.0932.\n\nStep 3: Load power is 15(1−0.0932)=13.602 mW.\n\nAnswer: 13.602 mW.\n\nCheck and interpretation: Using 1−|Γ| rather than 1−|Γ|² confuses voltage amplitude with power. A passive real part of the load ensures delivered power is nonnegative.",
    "family": "complex-load-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-quarter-wave-transform-5",
    "topic": "em",
    "prompt": "A lossless quarter-wave transmission line has characteristic impedance 65 Ω and load resistance 150 Ω. What is input resistance in Ω?",
    "choices": [
      "150 Ω",
      "65 Ω",
      "346.1538 Ω",
      "28.1667 Ω"
    ],
    "key": 3,
    "why": "Principle: At an electrical length of π/2, a lossless line inverts the load impedance: Zin=Z0²/ZL. This is a frequency-specific impedance transformation.\n\nStep 1: Use Z0=65 Ω and ZL=150 Ω.\n\nStep 2: Square the line impedance: Z0²=4225 Ω².\n\nStep 3: Divide by the load: Zin=4225/150=28.1667 Ω.\n\nAnswer: 28.1667 Ω.\n\nCheck and interpretation: A line one-half wavelength long would reproduce the load instead. The quarter-wave condition is essential to the inversion formula.",
    "family": "quarter-wave-transform",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-vswr-reflected-power-5",
    "topic": "em",
    "prompt": "A lossless line has VSWR=2. What percentage of incident power is reflected? Round to four decimal places.",
    "choices": [
      "33.3333 %",
      "11.1111 %",
      "88.8889 %",
      "5.5556 %"
    ],
    "key": 1,
    "why": "Principle: First convert VSWR to voltage-reflection magnitude, then square that magnitude to obtain the reflected power fraction.\n\nStep 1: From S=(1+|Γ|)/(1−|Γ|), rearrange |Γ|=(S−1)/(S+1).\n\nStep 2: For S=2, |Γ|=0.3333.\n\nStep 3: The reflected percentage is 100|Γ|²=11.1111%.\n\nAnswer: 11.1111 %.\n\nCheck and interpretation: VSWR itself is an amplitude ratio along the standing wave, not a power-reflection ratio. A matched line has S=1 and zero reflected power.",
    "family": "vswr-reflected-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-waveguide-velocity-5",
    "topic": "em",
    "prompt": "An air-filled rectangular guide has broad wall a=3 cm and carries TE₁₀ at 15 GHz. Taking c=3×10⁸ m/s, find group velocity divided by c, rounded to four decimal places.",
    "choices": [
      "1.0607",
      "0.3333",
      "0.8889",
      "0.9428"
    ],
    "key": 3,
    "why": "Principle: For a lossless air-filled waveguide, TE group velocity is vg=c√[1−(fc/f)²]. It is lower than c for a propagating mode above cutoff.\n\nStep 1: TE₁₀ cutoff is fc=c/(2a)=5 GHz after converting centimetres to metres.\n\nStep 2: The operating frequency 15 GHz exceeds cutoff, so propagation is possible.\n\nStep 3: Compute vg/c=√[1−(5/15)²]=0.9428.\n\nAnswer: 0.9428.\n\nCheck and interpretation: The reciprocal factor would give phase velocity divided by c. Phase velocity can exceed c in a waveguide while group velocity remains below c.",
    "family": "waveguide-velocity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-dielectric-impedance-5",
    "topic": "em",
    "prompt": "A uniform plane wave propagates in a lossless nonmagnetic dielectric with relative permittivity 7. Taking free-space impedance as 377 Ω, find intrinsic impedance in Ω.",
    "choices": [
      "997.4482 Ω",
      "142.4926 Ω",
      "53.8571 Ω",
      "2639 Ω"
    ],
    "key": 1,
    "why": "Principle: Intrinsic impedance of a lossless medium is η=√(μ/ε). For μr=1, it reduces to η0/√εr.\n\nStep 1: Set μ=μ0 and ε=7ε0.\n\nStep 2: Then η=√(μ0/ε0)/√7=377/√7.\n\nStep 3: The resulting impedance is 142.4926 Ω, which relates electric-field amplitude to magnetic-field amplitude.\n\nAnswer: 142.4926 Ω.\n\nCheck and interpretation: The refractive index is √εr, while intrinsic impedance varies inversely with it for a nonmagnetic medium. Relative permittivity is dimensionless.",
    "family": "dielectric-impedance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-faraday-loop-current-5",
    "topic": "em",
    "prompt": "A 6-turn coil has area 0.045 m² per turn and resistance 10 Ω. Uniform normal flux density is B(t)=0.2cos(200t) T. Neglect inductance. Find peak induced current in A.",
    "choices": [
      "0.18 A",
      "1.08 A",
      "0.0054 A",
      "2.16 A"
    ],
    "key": 1,
    "why": "Principle: Faraday’s law uses the time derivative of total flux linkage NΦ. For a sinusoidal normal field, peak induced emf is NABpeakω.\n\nStep 1: Flux linkage is λ(t)=NAB(t)=6×0.045×0.2cos(200t).\n\nStep 2: Differentiation gives peak emf N A Bpeak ω=10.8 V.\n\nStep 3: With inductance neglected, peak current is emfpeak/R=10.8/10=1.08 A.\n\nAnswer: 1.08 A.\n\nCheck and interpretation: The angular frequency is already in rad/s, so no extra 2π is needed. Lenz’s law specifies the current direction; only the peak magnitude is requested.",
    "family": "faraday-loop-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-skin-depth-5",
    "topic": "em",
    "prompt": "A good nonmagnetic conductor has σ=10⁷ S/m and μ=4π×10⁻⁷ H/m. At 6 MHz, find skin depth in µm using δ=√[2/(ωμσ)].",
    "choices": [
      "91.8881 µm",
      "45.9441 µm",
      "649.7473 µm",
      "64.9747 µm"
    ],
    "key": 3,
    "why": "Principle: In a good conductor, fields decay exponentially into the material. Skin depth is the distance over which field amplitude falls by a factor e.\n\nStep 1: Convert angular frequency: ω=2π×6×10⁶ rad/s.\n\nStep 2: Insert ω, μ=4π×10⁻⁷ and σ=10⁷ into δ=√[2/(ωμσ)].\n\nStep 3: The result in metres is 6.4975e-5 m. Multiplying by 10⁶ gives 64.9747 µm.\n\nAnswer: 64.9747 µm.\n\nCheck and interpretation: Skin depth scales as 1/√f and becomes smaller at higher frequency. Confusing hertz with angular frequency changes the numerical result.",
    "family": "skin-depth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-friis-link-5",
    "topic": "em",
    "prompt": "In a free-space far-field link, transmit power is 6 W, linear antenna gains are G_t=2 and G_r=3, separation is 150 m, and frequency is 1.5 GHz. With c=3×10⁸ m/s and perfect alignment/matching, find received power in nW.",
    "choices": [
      "67.5475 nW",
      "1621.1389 nW",
      "101.3212 nW",
      "405.2847 nW"
    ],
    "key": 3,
    "why": "Principle: The Friis formula is Pr=PtGtGr[λ/(4πR)]² for a matched free-space far-field link. Gains here are linear rather than decibels.\n\nStep 1: The wavelength is λ=c/f=0.3/1.5=0.2 m.\n\nStep 2: The propagation factor is [0.2/(4π×150)]².\n\nStep 3: Multiply by PtGtGr=6×2×3 and convert W to nW to obtain 405.2847 nW.\n\nAnswer: 405.2847 nW.\n\nCheck and interpretation: Power falls with separation squared. Omitting either antenna gain or using dB-valued gains directly would change the result.",
    "family": "friis-link",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-poynting-average-5",
    "topic": "em",
    "prompt": "A uniform plane wave in free space has peak electric field 20 V/m. Taking η₀=377 Ω, find time-average power density in W/m².",
    "choices": [
      "1.061 W/m²",
      "0.5305 W/m²",
      "75400 W/m²",
      "0.0531 W/m²"
    ],
    "key": 1,
    "why": "Principle: For a sinusoidal plane wave, the average Poynting magnitude is Epeak Hpeak/2=Epeak²/(2η). Peak and RMS field conventions must be distinguished.\n\nStep 1: The peak magnetic field is Hpeak=Epeak/η₀=20/377 A/m.\n\nStep 2: Average power density is one-half the product of the peak field amplitudes.\n\nStep 3: Thus Sav=20²/(2×377)=0.5305 W/m².\n\nAnswer: 0.5305 W/m².\n\nCheck and interpretation: Using E²/η without the one-half factor is correct only when E denotes RMS field. The problem explicitly supplies peak field.",
    "family": "poynting-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-combined-work-5",
    "topic": "apt",
    "prompt": "A completes a job in 9 days and B in 13 days at constant rates. They start together and work without interference. In how many days is the job complete?",
    "choices": [
      "22 days",
      "11 days",
      "5.3182 days",
      "29.25 days"
    ],
    "key": 2,
    "why": "Principle: Independent work rates add. A completion time must be converted into a fraction of the job completed per unit time before combining workers.\n\nStep 1: A completes 1/9 of the job per day and B completes 1/13.\n\nStep 2: Their combined rate is (9+13)/(9×13) jobs/day.\n\nStep 3: Time is the reciprocal, 9×13/(9+13)=5.3182 days.\n\nAnswer: 5.3182 days.\n\nCheck and interpretation: The combined time is less than 9 days, the faster individual time. Averaging the completion times would fail this basic check.",
    "family": "combined-work",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-equal-distance-speed-5",
    "topic": "apt",
    "prompt": "A traveller covers 45 km at 40 km/h and the next 45 km at 60 km/h. Ignoring stops, what is the overall average speed in km/h?",
    "choices": [
      "50 km/h",
      "48 km/h",
      "48.9898 km/h",
      "24 km/h"
    ],
    "key": 1,
    "why": "Principle: Average speed is total distance divided by total time. Equal distances at different speeds lead to a harmonic mean, not an arithmetic mean.\n\nStep 1: Total distance is 90 km.\n\nStep 2: Travel time is 45/40+45/60 h.\n\nStep 3: Divide distance by time: vavg=2v₁v₂/(v₁+v₂)=48 km/h.\n\nAnswer: 48 km/h.\n\nCheck and interpretation: More time is spent on the slower segment, so the average is below the arithmetic mean of the two speeds. The common segment distance cancels.",
    "family": "equal-distance-speed",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-markup-discount-5",
    "topic": "apt",
    "prompt": "An item is marked 30% above its cost price and then sold at a 10% discount on marked price. What is the net profit percentage relative to cost?",
    "choices": [
      "17 %",
      "20 %",
      "40 %",
      "8.5 %"
    ],
    "key": 0,
    "why": "Principle: Markup is based on cost while discount is based on marked price. Successive percentage operations multiply their scale factors.\n\nStep 1: Take cost as 100 units. Marked price is 100×(1+30/100)=130.\n\nStep 2: Selling price is 130×(1−10/100)=117.\n\nStep 3: Profit percentage on cost is selling price minus 100, namely 17%.\n\nAnswer: 17 %.\n\nCheck and interpretation: Simply subtracting discount percentage from markup percentage ignores their different bases. The multiplicative calculation also works when the net result is a loss.",
    "family": "markup-discount",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-committee-selection-5",
    "topic": "apt",
    "prompt": "A committee of 4 people is selected uniformly from 13 candidates, including two named candidates A and B. What is the probability both A and B are selected?",
    "choices": [
      "0.0769",
      "0.3077",
      "0.0947",
      "0.25"
    ],
    "key": 0,
    "why": "Principle: Committee selection is without replacement. Count committees that contain both named people and divide by the count of all equally likely committees.\n\nStep 1: All committees number C(13,4).\n\nStep 2: With A and B already included, choose the remaining 2 members from 11, giving C(11,2).\n\nStep 3: Their ratio simplifies to r(r−1)/[n(n−1)]=4×3/(13×12)=0.0769.\n\nAnswer: 0.0769.\n\nCheck and interpretation: Multiplying r/n by itself incorrectly treats the two inclusion events as independent. The second inclusion probability changes after the first is fixed.",
    "family": "committee-selection",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-pipes-drain-5",
    "topic": "apt",
    "prompt": "An inlet fills an empty tank in 7 hours. A drain empties a full tank in 15 hours. Both are opened together when the tank is empty, with constant flow rates. How long until it fills?",
    "choices": [
      "13.125 hours",
      "4.7727 hours",
      "15 hours",
      "8 hours"
    ],
    "key": 0,
    "why": "Principle: The inlet contributes a positive fill rate and the drain a negative fill rate. Net filling time is the reciprocal of their rate difference.\n\nStep 1: The inlet rate is 1/7 tank/h and drain rate is 1/15 tank/h.\n\nStep 2: Net rate is 1/7−1/15=8/[7×15] tank/h.\n\nStep 3: Thus filling time is 7×15/8=13.125 hours.\n\nAnswer: 13.125 hours.\n\nCheck and interpretation: The drain makes filling slower than the inlet alone, so the answer must exceed the inlet’s filling time. Adding rates would describe two inlets.",
    "family": "pipes-drain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-updated-average-5",
    "topic": "apt",
    "prompt": "The average of 9 observations is 25. One observation equal to 15 is removed. What is the mean of the remaining observations?",
    "choices": [
      "26.25",
      "20",
      "23.3333",
      "13.125"
    ],
    "key": 0,
    "why": "Principle: Recover the original total from mean times count, subtract the removed observation, then divide by the new count.\n\nStep 1: The original sum is 9×25=225.\n\nStep 2: After removing 15, the sum becomes 210 and the count becomes 8.\n\nStep 3: The new mean is 210/8=26.25.\n\nAnswer: 26.25.\n\nCheck and interpretation: The removed value lies below the original mean, so removing it raises the mean. Dividing by the original count would miss the count change.",
    "family": "updated-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-compound-growth-5",
    "topic": "apt",
    "prompt": "A population grows at 4.5% per year compounded annually for two years. What is the total percentage increase over its initial value?",
    "choices": [
      "9.2025 %",
      "9 %",
      "20.25 %",
      "4.6012 %"
    ],
    "key": 0,
    "why": "Principle: Annual compounding applies each year’s growth to the previous year’s enlarged population. The two-year growth factor is (1+r)².\n\nStep 1: Convert the annual percentage to rate r=4.5/100.\n\nStep 2: After two years, final/initial=(1+4.5/100)².\n\nStep 3: Subtract one and multiply by 100 to obtain total growth 9.2025%.\n\nAnswer: 9.2025 %.\n\nCheck and interpretation: The result exceeds the simple two-year increase 9% because the first year’s increase also grows in the second year.",
    "family": "compound-growth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-arithmetic-sum-5",
    "topic": "apt",
    "prompt": "A production schedule makes 7 units on day 1 and increases output by 6 units each successive day. How many units are made over the first 15 days?",
    "choices": [
      "1365 units",
      "195 units",
      "825 units",
      "735 units"
    ],
    "key": 3,
    "why": "Principle: Daily outputs form an arithmetic progression. Its total is the number of terms times the average of the first and last terms.\n\nStep 1: First output a=7; common difference d=6.\n\nStep 2: Day-15 output is a+(n−1)d=7+14×6=91.\n\nStep 3: Total is n[2a+(n−1)d]/2=15×[7+91]/2=735 units.\n\nAnswer: 735 units.\n\nCheck and interpretation: There are n−1 increases between the first and nth days. Using n increases would shift every endpoint calculation by one day.",
    "family": "arithmetic-sum",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-without-replacement-5",
    "topic": "apt",
    "prompt": "A box contains 10 working and 8 defective components. Two are drawn randomly without replacement. What is the probability that both work?",
    "choices": [
      "0.2941",
      "0.3086",
      "0.5556",
      "0.7059"
    ],
    "key": 0,
    "why": "Principle: Without replacement, the second draw’s probabilities depend on the first draw. Use the multiplication rule with a conditional probability.\n\nStep 1: The first component works with probability 10/18.\n\nStep 2: If it works, 9 working components remain among 17 total.\n\nStep 3: Multiply: P(both work)=(10/18)×(9/17)=0.2941.\n\nAnswer: 0.2941.\n\nCheck and interpretation: Squaring the first-draw probability would apply to replacement or independent draws. Here taking out a working component slightly lowers the next success probability.",
    "family": "without-replacement",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-matrix-power-6",
    "topic": "math",
    "prompt": "A 2×2 matrix A has trace 16 and determinant 63. What is trace(A³)?",
    "choices": [
      "4096",
      "250047",
      "1072",
      "130"
    ],
    "key": 2,
    "why": "Principle: For a 2×2 matrix, trace(A³)=(trace A)³−3(det A)(trace A). This follows from the eigenvalue sum and product, even when the matrix is not diagonalizable.\n\nStep 1: Let the eigenvalues be λ₁ and λ₂. Then λ₁+λ₂=16 and λ₁λ₂=63.\n\nStep 2: Expand (λ₁+λ₂)³=λ₁³+λ₂³+3λ₁λ₂(λ₁+λ₂).\n\nStep 3: Rearrange to get trace(A³)=16³−3×63×16=1072.\n\nAnswer: 1072.\n\nCheck and interpretation: The eigenvalues here are 7 and 9, whose cubes add to the same result. Cubing the trace directly retains unwanted cross terms.",
    "family": "matrix-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-conditional-binomial-6",
    "topic": "math",
    "prompt": "8 packets are transmitted independently, each with error probability 0.2. Given that at least one packet is erroneous, what is the probability that exactly one is erroneous? Round to four decimal places.",
    "choices": [
      "0.3355",
      "0.8322",
      "0.4032",
      "0.5968"
    ],
    "key": 2,
    "why": "Principle: A conditional probability is the probability of the intersection divided by the conditioning-event probability. The error count has a binomial distribution.\n\nStep 1: Let X count erroneous packets: X~Binomial(8,0.2).\n\nStep 2: P(X=1)=C(8,1)×0.2×0.8^7=0.3355.\n\nStep 3: P(X≥1)=1−P(X=0)=1−0.8^8=0.8322.\n\nStep 4: Since {X=1} is contained in {X≥1}, divide the first probability by the second: 0.4032.\n\nAnswer: 0.4032.\n\nCheck and interpretation: The conditional probability is larger than the unconditional probability of exactly one error because all zero-error trials have been excluded.",
    "family": "conditional-binomial",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-exponential-interval-6",
    "topic": "math",
    "prompt": "A component lifetime T is exponentially distributed with mean 7 hours. Given T>7 hours, find P(2T is between 28 and 42 hours | T>7 hours). Round to four decimal places.",
    "choices": [
      "0.0855",
      "0.3679",
      "0.2325",
      "0.6321"
    ],
    "key": 2,
    "why": "Principle: The exponential distribution is memoryless: after surviving a specified time, the residual lifetime has the same distribution as the original lifetime.\n\nStep 1: The event 28<2T<42 is equivalent to 14<T<21.\n\nStep 2: The survival function is P(T>t)=exp(−t/7).\n\nStep 3: Conditioning on T>7 gives [e⁻²−e⁻³]/e⁻¹=e⁻¹−e⁻².\n\nStep 4: Numerically the probability is 0.2325. The strict endpoints do not matter for a continuous distribution.\n\nAnswer: 0.2325.\n\nCheck and interpretation: Using the unconditional interval probability would omit the normalization for the component already having survived one mean lifetime.",
    "family": "exponential-interval",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-double-integral-6",
    "topic": "math",
    "prompt": "Evaluate ∫₀¹ ∫₀ˣ 7y^6 dy dx. Round to four decimal places.",
    "choices": [
      "0.1429",
      "0.125",
      "0.875",
      "0.1111"
    ],
    "key": 1,
    "why": "Principle: In an iterated integral the inner variable is integrated first, while the outer variable is treated as a constant bound.\n\nStep 1: The inner antiderivative of 7y^6 is y^7.\n\nStep 2: Evaluating at y=x and y=0 leaves x^7.\n\nStep 3: The remaining integral is ∫₀¹x^7dx=[x^8/8]₀¹=1/8=0.125.\n\nAnswer: 0.125.\n\nCheck and interpretation: The triangular integration region is 0≤y≤x≤1. Replacing the upper inner limit by 1 would incorrectly change the region to a square.",
    "family": "double-integral",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-ode-laplace-6",
    "topic": "math",
    "prompt": "A causal system obeys y″+16y′+63y=e⁻ᵗu(t), with y(0⁻)=y′(0⁻)=0. What is Y(s) evaluated at s=1? Round to four decimal places.",
    "choices": [
      "0.0125",
      "0.0063",
      "0.0159",
      "0.0588"
    ],
    "key": 1,
    "why": "Principle: With zero initial conditions, differentiation in the Laplace domain multiplies by s. The input transform of e⁻ᵗu(t) is 1/(s+1).\n\nStep 1: Transform the differential equation: [s²+16s+63]Y(s)=1/(s+1).\n\nStep 2: Factor the quadratic as (s+7)(s+9).\n\nStep 3: Therefore Y(s)=1/[(s+1)(s+7)(s+9)].\n\nStep 4: At s=1 the denominator is 2×8×10, yielding 0.0063.\n\nAnswer: 0.0063.\n\nCheck and interpretation: The input pole at −1 must be included. Evaluating only the system transfer function at s=1 would be twice the requested output-transform value.",
    "family": "ode-laplace",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-constrained-minimum-6",
    "topic": "math",
    "prompt": "Real numbers x and y satisfy x+y=8. What is the minimum possible value of x²+y²?",
    "choices": [
      "64",
      "32",
      "16",
      "4"
    ],
    "key": 1,
    "why": "Principle: A quadratic restricted to a linear constraint can be minimized by substitution or by the Cauchy–Schwarz inequality.\n\nStep 1: Substitute y=8−x into the objective: f(x)=x²+(8−x)².\n\nStep 2: Differentiate: f′(x)=4x−16. Setting it to zero gives x=4, so y=4.\n\nStep 3: The second derivative is 4>0, establishing a strict minimum.\n\nStep 4: The minimum is 2×(4)²=32.\n\nAnswer: 32.\n\nCheck and interpretation: The inequality (x+y)²≤2(x²+y²) gives the same lower bound 64/2, with equality only at x=y.",
    "family": "constrained-minimum",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-gaussian-moment-6",
    "topic": "math",
    "prompt": "X is a zero-mean Gaussian random variable with variance 7. What is Var(X²)?",
    "choices": [
      "147",
      "98",
      "49",
      "14"
    ],
    "key": 1,
    "why": "Principle: For a zero-mean Gaussian with variance σ², the fourth moment is E[X⁴]=3σ⁴. Variance of X² uses both its second and fourth moments.\n\nStep 1: E[X²]=7, so (E[X²])²=49.\n\nStep 2: The Gaussian fourth moment is E[X⁴]=3×7²=147.\n\nStep 3: Var(X²)=E[X⁴]−(E[X²])²=147−49=98.\n\nAnswer: 98.\n\nCheck and interpretation: Using E[X⁴] alone would give a raw moment, not a variance. Although E[X]=0, E[X²] is positive.",
    "family": "gaussian-moment",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-improper-integral-6",
    "topic": "math",
    "prompt": "Evaluate ∫₀∞ 1/(x²+49) dx. Round to four decimal places.",
    "choices": [
      "0.4488",
      "0.1429",
      "10.9956",
      "0.2244"
    ],
    "key": 3,
    "why": "Principle: The antiderivative of 1/(x²+a²) for a>0 is arctan(x/a)/a. An improper integral is evaluated as a limit.\n\nStep 1: Here a=7, so the antiderivative is arctan(x/7)/7.\n\nStep 2: As x→∞, arctan(x/7)→π/2; at x=0 it is zero.\n\nStep 3: Subtract the limits: the integral is π/(2×7)=0.2244.\n\nAnswer: 0.2244.\n\nCheck and interpretation: The result decreases as a grows, consistent with the integrand becoming smaller at every fixed x. Integrating over the entire real line would double the answer.",
    "family": "improper-integral",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-pdf-second-moment-6",
    "topic": "math",
    "prompt": "X has density f(x)=8x^7 for 0<x<1 and zero otherwise. Find E[X²], rounded to four decimal places.",
    "choices": [
      "0.8889",
      "0.7901",
      "0.1",
      "0.8"
    ],
    "key": 3,
    "why": "Principle: For a continuous random variable, E[g(X)]=∫g(x)f(x)dx over the support. A second moment is not generally the square of the mean.\n\nStep 1: First check normalization: ∫₀¹8x^7dx=1.\n\nStep 2: Multiply the density by x² to form 8x^9.\n\nStep 3: Integrate: E[X²]=[8x^10/10]₀¹=8/10=0.8.\n\nAnswer: 0.8.\n\nCheck and interpretation: Since 0<X<1, E[X²]≤E[X]=0.8889. The computed second moment satisfies that bound.",
    "family": "pdf-second-moment",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-loaded-divider-6",
    "topic": "networks",
    "prompt": "A 16 V ideal source drives R₁=7 kΩ in series with R₂=15 kΩ. A load R_L=9 kΩ is connected across R₂. Find the load voltage in V, rounded to four decimal places.",
    "choices": [
      "7.1287",
      "10.9091",
      "9",
      "8.8713"
    ],
    "key": 0,
    "why": "Principle: A load across the lower divider resistor changes that resistor to a parallel equivalent. Apply the divider rule only after forming this equivalent.\n\nStep 1: The lower equivalent is R₂∥RL=15×9/(15+9)=5.625 kΩ.\n\nStep 2: Total source resistance is 7+5.625=12.625 kΩ.\n\nStep 3: The load shares the parallel-branch voltage: VL=16×5.625/(12.625)=7.1287 V.\n\nAnswer: 7.1287.\n\nCheck and interpretation: The unloaded voltage is 10.9091 V, which is larger. Treating the load as absent overestimates the actual voltage.",
    "family": "loaded-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rc-switching-6",
    "topic": "networks",
    "prompt": "An initially uncharged 7 µF capacitor is charged from a 14 V source through 8 kΩ at t=0. Find vC at t=56 ms, in V. Round to four decimal places.",
    "choices": [
      "5.1503",
      "14",
      "8.8497",
      "12.1053"
    ],
    "key": 2,
    "why": "Principle: The capacitor voltage in a first-order network is the final value plus the initial-to-final difference multiplied by exp(−t/τ).\n\nStep 1: The time constant is RC=8×7 ms=56 ms, using kΩ·µF=ms.\n\nStep 2: The initial voltage is 0 V and the DC final voltage is 14 V.\n\nStep 3: Thus vC(t)=14[1−exp(−t/56 ms)].\n\nStep 4: At the specified t=τ, vC=14(1−e⁻¹)=8.8497 V.\n\nAnswer: 8.8497.\n\nCheck and interpretation: At one time constant charging has completed about 63.2% of the final voltage. The factor e⁻¹ instead describes the remaining voltage error.",
    "family": "rc-switching",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rl-natural-response-6",
    "topic": "networks",
    "prompt": "An inductor of 16 mH carries 0.6 A before being disconnected from its source and allowed to discharge through 8 Ω at t=0. Find current at t=4 ms in A. Round to four decimal places.",
    "choices": [
      "0.2207",
      "0.0812",
      "0.5188",
      "0.3"
    ],
    "key": 1,
    "why": "Principle: Inductor current is continuous through switching when there is no impulse voltage. The source-free RL response is i(t)=i(0⁺)exp(−Rt/L).\n\nStep 1: The initial current after switching is 0.6 A.\n\nStep 2: The time constant is L/R=16/8 ms=2 ms.\n\nStep 3: The requested instant is twice the time constant, so i=0.6e⁻²=0.0812 A.\n\nAnswer: 0.0812.\n\nCheck and interpretation: The resistor dissipates stored magnetic energy and current decays monotonically to zero. The natural-response formula does not contain a charging term 1−e⁻ᵗ/τ.",
    "family": "rl-natural-response",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-ac-power-match-6",
    "topic": "networks",
    "prompt": "An AC Thévenin equivalent has RMS voltage 22 V and impedance (8+j7) Ω. The load impedance can be any passive complex value. What is the maximum average load power in W?",
    "choices": [
      "15.125",
      "30.25",
      "60.5",
      "11.3827"
    ],
    "key": 0,
    "why": "Principle: Maximum average AC power is transferred to the complex-conjugate load: ZL=Zth*. RMS voltage can be used directly in I²R.\n\nStep 1: Choose ZL=8−j7 Ω so the reactances cancel.\n\nStep 2: The total impedance is 16 Ω and RMS current is 22/16 A.\n\nStep 3: Load power is I²RL=(22/16)²×8=15.125 W.\n\nStep 4: Equivalently Pmax=Vth,rms²/(4Rth).\n\nAnswer: 15.125.\n\nCheck and interpretation: Matching the impedance magnitude alone does not cancel reactance. Using peak voltage in the RMS formula would introduce a factor-of-two error.",
    "family": "ac-power-match",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-complex-load-power-6",
    "topic": "networks",
    "prompt": "A sinusoidal source of 26 V RMS is applied across Z=(8+j13) Ω. Find average power absorbed in W, rounded to four decimal places.",
    "choices": [
      "23.2103",
      "44.2862",
      "84.5",
      "37.7167"
    ],
    "key": 0,
    "why": "Principle: Average power is Vrms² times the real part of admittance. A reactive element exchanges energy but absorbs zero net average power.\n\nStep 1: The admittance is 1/Z=(8−j13)/(233) S.\n\nStep 2: Its real part is R/(R²+X²)=8/233 S.\n\nStep 3: Therefore P=26²×8/233=23.2103 W.\n\nAnswer: 23.2103.\n\nCheck and interpretation: Vrms²/|Z| is apparent power, not real power. The load power factor is R/|Z| and must be included.",
    "family": "complex-load-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-series-resonance-q-6",
    "topic": "networks",
    "prompt": "A series RLC circuit has R=9 Ω, L=7 mH and C=14 µF. Find its quality factor Q, rounded to four decimal places.",
    "choices": [
      "2.4845",
      "201.2461",
      "1.2423",
      "4.969"
    ],
    "key": 0,
    "why": "Principle: For a series resonant RLC circuit, Q=ω₀L/R=(1/R)√(L/C), where ω₀=1/√(LC).\n\nStep 1: Convert L=7×10⁻³ H and C=14×10⁻⁶ F.\n\nStep 2: The characteristic impedance √(L/C)=√(500)=22.3607 Ω.\n\nStep 3: Divide by the series resistance: Q=22.3607/9=2.4845.\n\nAnswer: 2.4845.\n\nCheck and interpretation: Q is dimensionless. Increasing series resistance dissipates more energy per cycle and lowers Q, which rules out formulas proportional to R.",
    "family": "series-resonance-q",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-current-divider-6",
    "topic": "networks",
    "prompt": "An ideal current source supplies 7 mA into parallel resistors 8 kΩ and 11 kΩ. Find current through the 8 kΩ branch in mA, rounded to four decimal places.",
    "choices": [
      "2.9474",
      "4.0526",
      "16.625",
      "5.0909"
    ],
    "key": 1,
    "why": "Principle: Parallel-branch currents divide in proportion to conductance, or inversely to resistance. The numerator contains the other branch resistance in the two-resistor divider formula.\n\nStep 1: The equivalent resistance is 8×11/(8+11) kΩ.\n\nStep 2: The common node voltage is the source current times this equivalent resistance.\n\nStep 3: Divide that voltage by 8 kΩ to obtain I₁=7×11/(8+11)=4.0526 mA.\n\nAnswer: 4.0526.\n\nCheck and interpretation: Because 8<11, this branch carries more than half the source current. The other branch current is 2.9474 mA, and their sum is 7 mA.",
    "family": "current-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-twoport-z-6",
    "topic": "networks",
    "prompt": "A resistive T network has a 8 Ω series arm at port 1, a 10 Ω shunt arm from the central node to ground, and a 12 Ω series arm at port 2. With currents defined entering both ports, what is z₁₁?",
    "choices": [
      "10 Ω",
      "8 Ω",
      "30 Ω",
      "18 Ω"
    ],
    "key": 3,
    "why": "Principle: The z parameter z₁₁ is V₁/I₁ with I₂=0. An open second port makes the second series arm carry zero current.\n\nStep 1: Set I₂=0 by opening port 2. No voltage drop appears across its series arm.\n\nStep 2: The input current then flows through the port-1 arm and the shunt arm in series.\n\nStep 3: Therefore z₁₁=R₁+Rsh=8+10=18 Ω.\n\nAnswer: 18 Ω.\n\nCheck and interpretation: The port-2 series resistance does not affect z₁₁ under the open-port condition. Shorting port 2 instead would compute a different driving-point condition.",
    "family": "twoport-z",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-charge-sharing-6",
    "topic": "networks",
    "prompt": "A 8 µF capacitor initially at 16 V is connected in parallel, with matching polarities, to an initially uncharged 11 µF capacitor. After settling through a small resistance, what is their common voltage in V?",
    "choices": [
      "6.7368",
      "16",
      "9.2632",
      "38"
    ],
    "key": 0,
    "why": "Principle: For an isolated pair of capacitors, total charge is conserved during redistribution. Electrostatic energy is not conserved because the connecting resistance dissipates energy.\n\nStep 1: The initial total charge is Q=C₁V₁+C₂V₂=8×16+11×0=128 µC.\n\nStep 2: The final parallel capacitance is C₁+C₂=19 µF.\n\nStep 3: The common final voltage is Q/(C₁+C₂)=128/19=6.7368 V.\n\nAnswer: 6.7368.\n\nCheck and interpretation: The result lies between the two initial voltages. Equating initial and final stored energies would incorrectly ignore dissipation during connection.",
    "family": "charge-sharing",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-exponential-convolution-6",
    "topic": "signals",
    "prompt": "For x(t)=e^(−7t)u(t) and h(t)=e^(−9t)u(t), find y(0.5) where y=x*h. Round to four decimal places.",
    "choices": [
      "0.0003",
      "0.0095",
      "0.0413",
      "0.0191"
    ],
    "key": 1,
    "why": "Principle: Convolution of two causal exponentials is integrated only over the overlap 0≤τ≤t. The output is a difference of exponentials divided by their rate difference.\n\nStep 1: Write y(t)=∫₀ᵗ e^(−7τ)e^(−9(t−τ))dτ.\n\nStep 2: Factor out e^(−9t) and integrate e^(2τ).\n\nStep 3: This gives y(t)=[e^(−7t)−e^(−9t)]/2 for t≥0.\n\nStep 4: At t=0.5, the value is 0.0095.\n\nAnswer: 0.0095.\n\nCheck and interpretation: Pointwise multiplication of the input and impulse response is not convolution. Since both functions are nonnegative, the convolution must also be nonnegative.",
    "family": "exponential-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-discrete-convolution-6",
    "topic": "signals",
    "prompt": "For x[n]=(0.28)ⁿu[n] and h[n]=(0.77)ⁿu[n], calculate (x*h)[3]. Round to four decimal places.",
    "choices": [
      "0.01",
      "0.4785",
      "0.7049",
      "0.3524"
    ],
    "key": 2,
    "why": "Principle: For causal discrete sequences, the convolution at index n is a finite sum over m=0,…,n. A finite geometric sum gives a closed form.\n\nStep 1: At n=3, sum aᵐb^(3−m) for m=0,1,2,3.\n\nStep 2: The four terms are b³+ab²+a²b+a³, where a=0.28 and b=0.77.\n\nStep 3: Using (b⁴−a⁴)/(b−a), the sum equals 0.7049.\n\nAnswer: 0.7049.\n\nCheck and interpretation: There are four overlapping terms at index 3, including both endpoints. Omitting m=0 or m=3 drops a valid impulse-response contribution.",
    "family": "discrete-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-alias-folding-6",
    "topic": "signals",
    "prompt": "The signal cos(2π×13000t) is sampled at 23 ksample/s. What positive alias frequency is observed within the first Nyquist band, in kHz?",
    "choices": [
      "13 kHz",
      "36 kHz",
      "11.5 kHz",
      "10 kHz"
    ],
    "key": 3,
    "why": "Principle: Sampling replicates spectra at integer multiples of fs. A real sinusoid is represented by a frequency in the first Nyquist band 0≤f≤fs/2.\n\nStep 1: The original frequency is 13 kHz, above the Nyquist frequency 11.5 kHz.\n\nStep 2: Subtract fs=23 kHz to get -10 kHz. A cosine at a negative frequency has the same samples as its positive-frequency counterpart.\n\nStep 3: Thus the baseband alias is |13−23|=10 kHz.\n\nAnswer: 10 kHz.\n\nCheck and interpretation: The result 10 kHz lies below fs/2=11.5 kHz. The original signal is therefore indistinguishable from this lower-frequency cosine after sampling.",
    "family": "alias-folding",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-lti-sinusoidal-6",
    "topic": "signals",
    "prompt": "A stable LTI system has H(s)=1/(s+7). With input cos(2t), what is the steady-state output amplitude? Round to four decimal places.",
    "choices": [
      "0.1374",
      "0.1429",
      "0.0189",
      "7.2801"
    ],
    "key": 0,
    "why": "Principle: A sinusoid is an eigenfunction of an LTI system. Its steady-state amplitude is multiplied by the frequency-response magnitude at the input angular frequency.\n\nStep 1: Evaluate H(jω) at ω=2 rad/s: H(j2)=1/(7+j2).\n\nStep 2: The denominator magnitude is √(7²+2²)=√53.\n\nStep 3: The input has unit amplitude, so output amplitude is |H(j2)|=1/√53=0.1374.\n\nAnswer: 0.1374.\n\nCheck and interpretation: The squared magnitude is a power ratio, not an amplitude ratio. The decaying transient is excluded by the steady-state qualification.",
    "family": "lti-sinusoidal",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-sequence-energy-6",
    "topic": "signals",
    "prompt": "Find the total energy of x[n]=(0.44)ⁿu[n], rounded to four decimal places.",
    "choices": [
      "1.7857",
      "1.2401",
      "0.2401",
      "0.8378"
    ],
    "key": 1,
    "why": "Principle: Discrete-time energy is the sum of squared magnitudes over every integer index. Causality restricts the nonzero terms to n≥0.\n\nStep 1: Square the magnitude to get |x[n]|²=(0.1936)ⁿ for n≥0.\n\nStep 2: Since |0.44|<1, the geometric series converges.\n\nStep 3: E=Σₙ₌₀∞a²ⁿ=1/(1−a²)=1/(1−0.1936)=1.2401.\n\nAnswer: 1.2401.\n\nCheck and interpretation: The n=0 sample equals one and must be included. Summing x[n] without squaring would give an area-like sum, not energy.",
    "family": "sequence-energy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-shifted-impulse-6",
    "topic": "signals",
    "prompt": "An LTI system has h(t)=e^(−7t)u(t). Its input is δ(t−1)+2δ(t−2). Find y(1.5), rounded to four decimal places.",
    "choices": [
      "66.2611",
      "0.0302",
      "0.0604",
      "0"
    ],
    "key": 1,
    "why": "Principle: Each delayed impulse produces a delayed copy of the impulse response. Causality determines which copies have begun at the observation time.\n\nStep 1: By linearity, y(t)=h(t−1)+2h(t−2).\n\nStep 2: At t=1.5, t−1=0.5 but t−2=−0.5, so the second term is zero.\n\nStep 3: The remaining term is e^(−7×0.5)=0.0302.\n\nAnswer: 0.0302.\n\nCheck and interpretation: Ignoring the unit-step factor would incorrectly include a response to the impulse at t=2 before it has occurred.",
    "family": "shifted-impulse",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-dft-bin-amplitude-6",
    "topic": "signals",
    "prompt": "For N=10, x[n]=cos(2π×2n/N), 0≤n<N. Using X[r]=Σx[n]e^(−j2πrn/N), what is |X[2]|?",
    "choices": [
      "10",
      "1",
      "2.5",
      "5"
    ],
    "key": 3,
    "why": "Principle: A cosine is half the sum of two complex exponentials. The unnormalized DFT gives magnitude N for a complex exponential aligned with a DFT bin.\n\nStep 1: Expand x[n]=(e^(j2π2n/N)+e^(−j2π2n/N))/2.\n\nStep 2: For N=10>4, bins 2 and N−2 are distinct, so each exponential contributes to a different DFT bin.\n\nStep 3: At r=2, the matching exponential contributes N/2=5, while the other sums to zero.\n\nAnswer: 5.\n\nCheck and interpretation: The DFT convention has no 1/N factor in the forward transform. DC and Nyquist cosines need special treatment, but bin 2 is neither for this N.",
    "family": "dft-bin-amplitude",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-fourier-dc-6",
    "topic": "signals",
    "prompt": "For x(t)=e^(−8|t|), define X(ω)=∫₋∞∞x(t)e^(−jωt)dt. Find X(0), rounded to four decimal places.",
    "choices": [
      "0.25",
      "0.125",
      "4",
      "16"
    ],
    "key": 0,
    "why": "Principle: The Fourier transform at zero frequency equals the signed area under the time-domain signal. Even symmetry reduces the integral to twice its positive-time half.\n\nStep 1: Set ω=0 so the complex exponential in the transform becomes one.\n\nStep 2: Since x(t) is even, X(0)=2∫₀∞e^(−8t)dt.\n\nStep 3: The one-sided integral is 1/8, hence X(0)=2/8=0.25.\n\nAnswer: 0.25.\n\nCheck and interpretation: This is an amplitude-area quantity, not energy. Squaring the signal first would produce a different integral.",
    "family": "fourier-dc",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-difference-equation-6",
    "topic": "signals",
    "prompt": "A causal system at initial rest obeys y[n]−0.4y[n−1]=x[n]. For x[n]=(−1)ⁿu[n], what is the amplitude of the asymptotic alternating output? Round to four decimal places.",
    "choices": [
      "1.6667",
      "0.7143",
      "0.2857",
      "1.4"
    ],
    "key": 1,
    "why": "Principle: The steady alternating input has discrete-time angular frequency π. A stable system scales it by the magnitude of H(eʲπ).\n\nStep 1: At initial rest, H(z)=1/(1−0.4z⁻¹). The pole magnitude 0.4 is less than one, ensuring a decaying transient.\n\nStep 2: At z=eʲπ=−1, H(−1)=1/(1+0.4).\n\nStep 3: Thus the asymptotic output is [1/(1+0.4)](−1)ⁿ and its amplitude is 0.7143.\n\nAnswer: 0.7143.\n\nCheck and interpretation: Evaluating at z=1 would give the DC gain, not the alternating-input gain. The input switch-on creates a transient that vanishes as n grows.",
    "family": "difference-equation",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-diode-bias-6",
    "topic": "devices",
    "prompt": "An ideal p-n diode has I_S=10 µA, ideality factor 1 and V_T=26 mV. Find the forward voltage needed for 7 mA, in V, rounded to four decimal places.",
    "choices": [
      "0.1704",
      "0.7",
      "0.0506",
      "0.3407"
    ],
    "key": 0,
    "why": "Principle: The ideal Shockley law is I=IS[exp(V/(nVT))−1]. Solve the exponential relationship for voltage rather than assuming a fixed diode drop.\n\nStep 1: Convert IS=10 µA to 0.01 mA, matching the current unit.\n\nStep 2: Rearrange to exp(V/VT)=1+I/IS=1+7/0.01=701.\n\nStep 3: Taking the natural logarithm gives V=0.026 ln(701)=0.1704 V.\n\nAnswer: 0.1704.\n\nCheck and interpretation: A natural logarithm is required because the diode equation uses base e. A fixed 0.7 V approximation is inconsistent with the specified ideal diode parameters.",
    "family": "diode-bias",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-diode-incremental-6",
    "topic": "devices",
    "prompt": "A diode biased at 7 mA has n=1 and V_T=26 mV. A small 10 mV AC source is applied through 8 kΩ, with the DC bias maintained separately. What is the diode AC voltage amplitude in mV? Round to four decimal places.",
    "choices": [
      "10",
      "3.1707",
      "9.9954",
      "0.0046"
    ],
    "key": 3,
    "why": "Principle: Linearize the diode at its bias point using rd=nVT/ID, then solve a voltage divider. This incremental model applies only for sufficiently small AC excursions.\n\nStep 1: The incremental resistance is rd=0.026/(7×10⁻³)=3.7143 Ω.\n\nStep 2: The source resistance is 8000 Ω, so the diode receives fraction rd/(R+rd).\n\nStep 3: Its voltage amplitude is 10×3.7143/(8000+3.7143)=0.0046 mV.\n\nAnswer: 0.0046.\n\nCheck and interpretation: The very small diode voltage compared with VT validates the small-signal approximation. The source’s full 10 mV does not appear across the diode.",
    "family": "diode-incremental",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-active-check-6",
    "topic": "devices",
    "prompt": "An NPN has grounded emitter, β=110, V_BE=0.7 V, R_B=800 kΩ from collector-independent V_CC=16 V to base, and R_C=2.2 kΩ from V_CC to collector. Assuming forward-active operation, find V_CE in V. Round to four decimal places.",
    "choices": [
      "16",
      "15.9579",
      "11.3718",
      "4.6282"
    ],
    "key": 2,
    "why": "Principle: For fixed-base bias in forward-active operation, IB=(VCC−VBE)/RB and IC=βIB. Collector voltage then follows from the resistor drop.\n\nStep 1: The base current is (16−0.7)/800=0.0191 mA.\n\nStep 2: The collector current is 110×0.0191=2.1037 mA.\n\nStep 3: The collector drop is IC RC=4.6282 V.\n\nStep 4: Thus VCE=VCC−ICRC=16−4.6282=11.3718 V.\n\nAnswer: 11.3718.\n\nCheck and interpretation: VCE exceeds VBE=0.7 V here, so the collector-base junction remains reverse biased and the forward-active assumption is self-consistent.",
    "family": "bjt-active-check",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-rpi-6",
    "topic": "devices",
    "prompt": "A BJT at 300 K has collector current 4 mA and β=160. Take V_T=26 mV. Find its hybrid-π input resistance rπ in kΩ, rounded to four decimal places.",
    "choices": [
      "0.0065",
      "1.04",
      "24615.3846",
      "0.52"
    ],
    "key": 1,
    "why": "Principle: The hybrid-π resistance is rπ=β/gm, with gm=IC/VT at the operating point. Consistent mA and V units give gm in mS and rπ in kΩ.\n\nStep 1: Compute gm=4/0.026=153.8462 mS.\n\nStep 2: Then rπ=160/153.8462 kΩ.\n\nStep 3: The resulting input resistance is 1.04 kΩ. It relates a small vbe to the resulting small base current.\n\nAnswer: 1.04.\n\nCheck and interpretation: The inverse transconductance 1/gm is not rπ; the factor β is required because base current is smaller than collector current.",
    "family": "bjt-rpi",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-gm-6",
    "topic": "devices",
    "prompt": "A long-channel nMOS in saturation obeys I_D=(K/2)(V_GS−V_TH)² with K=0.5 mA/V². At overdrive 1.6 V, find g_m in mS. Neglect channel-length modulation.",
    "choices": [
      "0.8",
      "0.4",
      "1.28",
      "1.2"
    ],
    "key": 0,
    "why": "Principle: MOS transconductance is the derivative of drain current with respect to gate-source voltage while holding drain voltage fixed.\n\nStep 1: Differentiate ID=(K/2)VOV² to obtain gm=K VOV.\n\nStep 2: Use K=0.5 mA/V² and VOV=1.6 V.\n\nStep 3: Thus gm=0.5×1.6=0.8 mA/V=0.8 mS.\n\nStep 4: As a cross-check, ID=0.64 mA and 2ID/VOV gives the same gm.\n\nAnswer: 0.8.\n\nCheck and interpretation: Using ID/VOV misses a factor of two for the square-law model. The stated K convention explicitly includes the one-half factor.",
    "family": "mos-gm",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-triode-6",
    "topic": "devices",
    "prompt": "An nMOS has K=0.5 mA/V², overdrive V_GS−V_TH=1.6 V, and V_DS=0.22 V. Using the long-channel model, find I_D in mA. Round to four decimal places.",
    "choices": [
      "0.1639",
      "0.64",
      "0.176",
      "0.3278"
    ],
    "key": 0,
    "why": "Principle: For 0≤VDS<VOV the MOSFET is in the triode region, with ID=K[VOV VDS−VDS²/2]. The saturation square law does not apply in this region.\n\nStep 1: Here VDS=0.22 V is below VOV=1.6 V, establishing triode operation.\n\nStep 2: Compute VOV VDS=0.352 V² and VDS²/2=0.0242 V².\n\nStep 3: Multiply their difference by K=0.5 to obtain ID=0.1639 mA.\n\nAnswer: 0.1639.\n\nCheck and interpretation: The VDS²/2 correction distinguishes the triode expression from a purely linear resistor approximation. The specified voltages are positive and produce positive drain current.",
    "family": "mos-triode",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-junction-built-in-6",
    "topic": "devices",
    "prompt": "An abrupt silicon p-n junction at equilibrium has N_D=7.00e+15 cm⁻³, N_A=8.00e+16 cm⁻³ and n_i=10¹⁰ cm⁻³. Taking V_T=26 mV, find the built-in potential in V, rounded to four decimal places.",
    "choices": [
      "0.3499",
      "0.3315",
      "1.5264",
      "0.7632"
    ],
    "key": 3,
    "why": "Principle: For a nondegenerate abrupt junction at thermal equilibrium, Vbi=VT ln(NAND/ni²). The potential balances diffusion against drift.\n\nStep 1: Form the dimensionless concentration ratio NAND/ni²=5.6000e+12.\n\nStep 2: Take its natural logarithm, not the base-10 logarithm.\n\nStep 3: Multiply by 0.026 V to obtain Vbi=0.7632 V.\n\nAnswer: 0.7632.\n\nCheck and interpretation: All carrier concentrations use the same cm⁻³ units, which cancel in the ratio. This internal equilibrium barrier is not an externally extractable terminal voltage.",
    "family": "junction-built-in",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-early-resistance-6",
    "topic": "devices",
    "prompt": "At an operating point a BJT has I_C=1.1 mA and Early voltage V_A=80 V. Using r_o≈V_A/I_C, find r_o in kΩ, rounded to four decimal places.",
    "choices": [
      "88",
      "0.0138",
      "72.7273",
      "36.3636"
    ],
    "key": 2,
    "why": "Principle: The Early effect gives the forward-active BJT a finite output conductance. For VCE much smaller than VA, the output resistance is approximately VA/IC.\n\nStep 1: Use the stated approximation ro≈VA/IC.\n\nStep 2: Since V divided by mA gives kΩ, ro=80/1.1 kΩ.\n\nStep 3: Numerically ro=72.7273 kΩ. A larger bias current would reduce this resistance at fixed Early voltage.\n\nAnswer: 72.7273.\n\nCheck and interpretation: This resistance models the slope of the collector characteristic at fixed base-emitter voltage. It is different from the DC ratio VCE/IC.",
    "family": "early-resistance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-semiconductor-resistivity-6",
    "topic": "devices",
    "prompt": "An n-type bar has electron concentration 7.0e+15 cm⁻³ and mobility 620 cm²/(V·s). Neglect holes and take q=1.6×10⁻¹⁹ C. Find resistivity in Ω·cm, rounded to four decimal places.",
    "choices": [
      "0.6944 Ω·cm",
      "144.0092 Ω·cm",
      "0.0144 Ω·cm",
      "1.4401 Ω·cm"
    ],
    "key": 3,
    "why": "Principle: With electrons dominating conduction, conductivity is σ=q n μn and resistivity is its reciprocal. The supplied centimetre-based units yield Ω·cm.\n\nStep 1: Insert q=1.6×10⁻¹⁹, n=7.0e+15 and μn=620.\n\nStep 2: Conductivity is σ=0.6944 S/cm.\n\nStep 3: Therefore ρ=1/σ=1.4401 Ω·cm.\n\nAnswer: 1.4401 Ω·cm.\n\nCheck and interpretation: Increasing electron concentration or mobility increases conductivity and decreases resistivity. Converting to Ω·m would multiply the numerical Ω·cm value by 0.01.",
    "family": "semiconductor-resistivity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-emitter-degeneration-6",
    "topic": "analog",
    "prompt": "A common-emitter amplifier has g_m=8 mS, collector load 10 kΩ and unbypassed emitter resistance 0.5 kΩ. Take β→∞ and r_o→∞. What is v_o/v_b, rounded to four decimal places?",
    "choices": [
      "-80",
      "16",
      "-16",
      "-20"
    ],
    "key": 2,
    "why": "Principle: Emitter degeneration feeds an emitter voltage back against the base-emitter signal. With infinite β, emitter and collector small-signal currents are equal.\n\nStep 1: Write ic=gm(vb−ve) and ve=ic RE.\n\nStep 2: Then ic(1+gmRE)=gm vb, so ic/vb=gm/(1+gmRE).\n\nStep 3: Since vo=−ic RC, gain is −gmRC/(1+gmRE).\n\nStep 4: Substitution gives −8×10/[1+8×0.5]=-16.\n\nAnswer: -16.\n\nCheck and interpretation: The degeneration reduces the magnitude below the bypassed-emitter value gmRC. The simpler −RC/RE approximation requires gmRE≫1.",
    "family": "emitter-degeneration",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-finite-opamp-gain-6",
    "topic": "analog",
    "prompt": "A non-inverting amplifier uses R_f=16 kΩ and R_g=1 kΩ. Its op-amp has finite DC open-loop gain A=220, infinite input resistance and zero output resistance. Find the closed-loop DC gain, rounded to four decimal places.",
    "choices": [
      "17",
      "220",
      "18.4236",
      "15.7806"
    ],
    "key": 3,
    "why": "Principle: For finite open-loop gain, use vo=A(v+−v−) and the feedback divider v−=βvo. The ideal virtual-short approximation is not exact.\n\nStep 1: The feedback factor is β=Rg/(Rf+Rg)=1/17.\n\nStep 2: Solving vo=A(vin−βvo) gives vo/vin=A/(1+Aβ).\n\nStep 3: This can be written 17/(1+17/220)=15.7806.\n\nAnswer: 15.7806.\n\nCheck and interpretation: The result is slightly smaller than the ideal non-inverting gain 17. A negative-feedback denominator contains a plus sign.",
    "family": "finite-opamp-gain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-weighted-summer-6",
    "topic": "analog",
    "prompt": "An ideal inverting summer has grounded non-inverting input, feedback 14 kΩ, and inputs 1.2 V through 8 kΩ and 0.7 V through 10 kΩ. Assuming linear operation, find output in V.",
    "choices": [
      "3.08",
      "-3.08",
      "-2.1",
      "-1.4778"
    ],
    "key": 1,
    "why": "Principle: At virtual ground, each source drives an input current independently. The op-amp input draws no current, so the feedback branch carries their sum.\n\nStep 1: Input currents are 1.2/8=0.15 mA and 0.7/10=0.07 mA.\n\nStep 2: Their sum is 0.22 mA.\n\nStep 3: The output is the negative feedback-resistor drop: vo=−14×(0.22)=-3.08 V.\n\nAnswer: -3.08.\n\nCheck and interpretation: Different input resistors give different weights. Adding input voltages before applying one divider ratio would discard these weights.",
    "family": "weighted-summer",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-common-source-ro-6",
    "topic": "analog",
    "prompt": "A common-source MOS amplifier has source at AC ground, g_m=3.8 mS, r_o=32 kΩ and drain resistor 11 kΩ to AC ground. Find unloaded midband voltage gain, rounded to four decimal places.",
    "choices": [
      "-41.8",
      "31.107",
      "-31.107",
      "-163.4"
    ],
    "key": 2,
    "why": "Principle: The drain sees RD in parallel with the transistor output resistance ro. The controlled drain current gm vgs develops an inverted output across this equivalent load.\n\nStep 1: Effective drain load is RD∥ro=11×32/(11+32)=8.186 kΩ.\n\nStep 2: The source is at AC ground, so vgs equals input voltage.\n\nStep 3: Gain is −gm(RD∥ro)=−3.8×8.186=-31.107.\n\nAnswer: -31.107.\n\nCheck and interpretation: Finite ro reduces gain magnitude compared with −gmRD. Since mS×kΩ is dimensionless, no additional factor of 1000 is required.",
    "family": "common-source-ro",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-highpass-frequency-6",
    "topic": "analog",
    "prompt": "A coupling capacitor of 22 nF feeds an amplifier input resistance 7 kΩ from an ideal voltage source. Treat the amplifier input as purely resistive. Find the high-pass −3 dB frequency in kHz.",
    "choices": [
      "1.0335 kHz",
      "6.4935 kHz",
      "0.1645 kHz",
      "10.3347 kHz"
    ],
    "key": 0,
    "why": "Principle: The coupling capacitor and input resistance form H(s)=sRC/(1+sRC). Its lower cutoff is the frequency at which capacitor reactance magnitude equals R.\n\nStep 1: Use R=7×10³ Ω and C=22×10⁻⁹ F.\n\nStep 2: The corner angular frequency is ωc=1/(RC).\n\nStep 3: Convert to hertz with fc=1/(2πRC), then divide by 1000: fc=1.0335 kHz.\n\nAnswer: 1.0335 kHz.\n\nCheck and interpretation: At the corner, magnitude is 1/√2 of the high-frequency passband value. Confusing ωc with fc introduces a factor of 2π.",
    "family": "highpass-frequency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-inverting-bandwidth-6",
    "topic": "analog",
    "prompt": "A dominant-pole op-amp has GBW=5 MHz. An inverting amplifier uses R_in=5 kΩ and R_f=16 kΩ. Estimate its closed-loop bandwidth in MHz using noise gain.",
    "choices": [
      "1.5625 MHz",
      "1.1905 MHz",
      "21 MHz",
      "2.5 MHz"
    ],
    "key": 1,
    "why": "Principle: For a single-pole voltage-feedback op-amp, bandwidth is approximately GBW divided by noise gain. An inverting stage has noise gain 1+Rf/Rin, not |signal gain|.\n\nStep 1: The signal gain is −Rf/Rin=−3.2.\n\nStep 2: Noise gain is 1+Rf/Rin=4.2.\n\nStep 3: Bandwidth ≈5/4.2=1.1905 MHz.\n\nAnswer: 1.1905 MHz.\n\nCheck and interpretation: The distinction between signal gain and noise gain matters most at low inverting gains. The estimate assumes the dominant-pole model and no extra capacitive poles.",
    "family": "inverting-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-slew-amplitude-6",
    "topic": "analog",
    "prompt": "An op-amp has slew rate 4 V/µs. For a sinusoidal output at 110 kHz, what is the maximum peak amplitude in V allowed by slew rate alone?",
    "choices": [
      "5.7875 V",
      "11.5749 V",
      "2.8937 V",
      "36.3636 V"
    ],
    "key": 0,
    "why": "Principle: A sinusoid vp sin(2πft) has maximum slope 2πfvp. Avoiding slew-rate distortion requires that slope not exceed SR.\n\nStep 1: Convert SR to 4×10⁶ V/s and frequency to 110×10³ Hz.\n\nStep 2: Set 2πfVp=SR at the limit.\n\nStep 3: Thus Vp=SR/(2πf)=4×10⁶/(2π×110×10³)=5.7875 V.\n\nAnswer: 5.7875 V.\n\nCheck and interpretation: This is peak amplitude, not peak-to-peak amplitude. Supply rails or small-signal bandwidth may impose a lower practical limit, but they are excluded here.",
    "family": "slew-amplitude",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-source-follower-6",
    "topic": "analog",
    "prompt": "A MOS source follower has g_m=11 mS and effective source load 2.2 kΩ. Neglect body effect and r_o. Find its voltage gain, rounded to four decimal places.",
    "choices": [
      "24.2",
      "0.9603",
      "0.0397",
      "-0.9603"
    ],
    "key": 1,
    "why": "Principle: A source follower develops its output at the source. The resulting source voltage reduces vgs, creating local negative feedback.\n\nStep 1: The current is gm(vin−vo), and this flows through the source load.\n\nStep 2: Write vo=gmRL(vin−vo) and solve for vo/vin=gmRL/(1+gmRL).\n\nStep 3: Here gmRL=24.2, giving gain 0.9603.\n\nAnswer: 0.9603.\n\nCheck and interpretation: The gain is positive and strictly less than one in this model. The reciprocal 1/(1+gmRL) describes the residual gate-source fraction, not the output gain.",
    "family": "source-follower",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-ideal-integrator-6",
    "topic": "analog",
    "prompt": "An ideal inverting integrator uses R=16 kΩ and C=8 µF. Its output is initially zero. A constant 0.22 V input is applied for 0.1 s. Assuming no saturation, what is output at 0.1 s in V?",
    "choices": [
      "0.1719 V",
      "-0.0859 V",
      "-0.1719 V",
      "-0.3438 V"
    ],
    "key": 2,
    "why": "Principle: An ideal inverting integrator obeys vo(t)=vo(0)−(1/RC)∫vin(t)dt. A constant input produces a linear output ramp.\n\nStep 1: RC=16×8×10⁻³=0.128 s.\n\nStep 2: The input-time integral over 0.1 s is 0.22×0.1=0.022 V·s.\n\nStep 3: With zero initial output, vo=−0.022/0.128=-0.1719 V.\n\nAnswer: -0.1719 V.\n\nCheck and interpretation: The minus sign follows from the inverting connection. The stated no-saturation condition permits the ideal ramp calculation without supply-rail clipping.",
    "family": "ideal-integrator",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-ripple-counter-period-6",
    "topic": "digital",
    "prompt": "A 11-bit binary counter starts at zero and is clocked at 22 MHz. How many µs elapse before it first returns to zero, assuming ideal operation?",
    "choices": [
      "46.5455 µs",
      "45056 µs",
      "0.5 µs",
      "93.0909 µs"
    ],
    "key": 3,
    "why": "Principle: An n-bit binary counter repeats after 2ⁿ input clocks. The repeat time is the number of clock periods in a full state cycle.\n\nStep 1: There are 2^11=2048 distinct states, including zero.\n\nStep 2: At 22 MHz the clock period is 1/22 µs.\n\nStep 3: The first full wrap occurs after 2048/22=93.0909 µs.\n\nAnswer: 93.0909 µs.\n\nCheck and interpretation: The count from zero through all-one is 2ⁿ−1, but another clock is required to return to zero, making the full cycle 2ⁿ clocks.",
    "family": "ripple-counter-period",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-twos-complement-subtract-6",
    "topic": "digital",
    "prompt": "Two unsigned 6-bit operands have values A=19 and B=9. A subtractor computes A−B using 6-bit two’s-complement addition and discards carry out. What unsigned decimal value appears on its output?",
    "choices": [
      "28",
      "54",
      "10",
      "11"
    ],
    "key": 2,
    "why": "Principle: Fixed-width subtraction adds the two’s complement of B and retains only the lowest n bits. This implements arithmetic modulo 2ⁿ.\n\nStep 1: The six-bit two’s complement of B is 64−9=55.\n\nStep 2: Add A to it: 19+55=74.\n\nStep 3: Discard the carry beyond bit 5, equivalently subtract 64, to obtain 10.\n\nAnswer: 10.\n\nCheck and interpretation: The specified A exceeds B, so the unsigned difference is positive and is represented exactly. Discarding carry is part of fixed-width subtraction, not an arithmetic error.",
    "family": "twos-complement-subtract",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-adc-serial-clock-6",
    "topic": "digital",
    "prompt": "A 10-bit SAR ADC outputs one serial word for each of 220 ksample/s. Each frame also contains 2 status bits and 1 idle clock. What minimum serial clock in MHz supports continuous conversion?",
    "choices": [
      "2.2 MHz",
      "2.64 MHz",
      "2.86 MHz",
      "3.08 MHz"
    ],
    "key": 2,
    "why": "Principle: The serial link must provide a clock slot for every conversion bit and every overhead slot in each sample frame.\n\nStep 1: A frame requires 10+2+1=13 clocks.\n\nStep 2: At 220000 frames/s, the required clock is 13×220000=2860000 clocks/s.\n\nStep 3: Divide by 10⁶ to get 2.86 MHz.\n\nAnswer: 2.86 MHz.\n\nCheck and interpretation: Counting only the ADC resolution underestimates the link rate because status and idle slots also consume serial clock periods.",
    "family": "adc-serial-clock",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-synchronous-timing-6",
    "topic": "digital",
    "prompt": "A register-to-register path has t_CQ=2.2 ns, combinational delay 4.8 ns and setup time 1.6 ns. Adverse clock uncertainty consumes another 0.2 ns. What is the maximum clock frequency in MHz?",
    "choices": [
      "113.6364 MHz",
      "208.3333 MHz",
      "142.8571 MHz",
      "119.0476 MHz"
    ],
    "key": 0,
    "why": "Principle: For setup timing, one clock period must cover launch clock-to-Q, maximum logic delay, destination setup time and adverse uncertainty.\n\nStep 1: The minimum period is 2.2+4.8+1.6+0.2=8.8 ns.\n\nStep 2: Convert period to frequency with fMHz=1000/Tns.\n\nStep 3: Hence fmax=113.6364 MHz. This checks setup timing only.\n\nAnswer: 113.6364 MHz.\n\nCheck and interpretation: Hold timing is a separate minimum-delay condition. Adverse uncertainty reduces the available time and therefore is added to the required period.",
    "family": "synchronous-timing",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-memory-chip-count-6",
    "topic": "digital",
    "prompt": "A memory requires 2048 K words of 16 bits. Available chips each contain 4 K words of 8 bits. How many chips are needed?",
    "choices": [
      "512",
      "2048",
      "514",
      "1024"
    ],
    "key": 3,
    "why": "Principle: Memory expansion may require both depth expansion and width expansion. The total chip count is the product of those two independent factors.\n\nStep 1: To make 16-bit words from 8-bit chips, use 16/8=2 chips in parallel per bank.\n\nStep 2: To obtain 2048 K words from 4 K-word chips, use 2048/4=512 banks.\n\nStep 3: Total chips =2×512=1024.\n\nAnswer: 1024.\n\nCheck and interpretation: Counting only address-depth banks omits the second chip needed in every bank to supply the upper byte of each 16-bit word.",
    "family": "memory-chip-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-binary-dac-6",
    "topic": "digital",
    "prompt": "An ideal unipolar 10-bit DAC uses v_o=V_ref D/2^N with V_ref=3.2 V. Find output for unsigned input code D=262, in V. Round to four decimal places.",
    "choices": [
      "0.8188 V",
      "0.8196 V",
      "0.8219 V",
      "1.6375 V"
    ],
    "key": 0,
    "why": "Principle: Use the DAC transfer convention stated in the question: each code increment is Vref/2ᴺ. The largest code remains one LSB below Vref.\n\nStep 1: There are 2^10=1024 nominal quantization steps.\n\nStep 2: One LSB is 3.2/1024 V.\n\nStep 3: Multiplying by input code 262 gives vo=3.2×262/1024=0.8188 V.\n\nAnswer: 0.8188 V.\n\nCheck and interpretation: Scaling by 2ᴺ−1 would implement an endpoint-normalized convention, which differs from the explicitly supplied DAC law.",
    "family": "binary-dac",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-bitwise-xor-6",
    "topic": "digital",
    "prompt": "Two 5-bit unsigned words encode decimal 10 and 7. Their corresponding bits feed five XOR gates. What is the unsigned decimal value of the output word?",
    "choices": [
      "17",
      "13",
      "2",
      "15"
    ],
    "key": 1,
    "why": "Principle: Bitwise XOR produces one where the operand bits differ and zero where they agree. It corresponds to binary addition without inter-bit carry.\n\nStep 1: Write the operands as 01010 and 00111.\n\nStep 2: XOR corresponding bit positions to obtain 01101.\n\nStep 3: Convert that binary result back to decimal to get 13.\n\nAnswer: 13.\n\nCheck and interpretation: Ordinary decimal addition may differ because it includes carries. OR also differs because it retains a one when both input bits are one.",
    "family": "bitwise-xor",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-flash-comparator-count-6",
    "topic": "digital",
    "prompt": "An ideal 9-bit flash ADC uses a full bank of threshold comparators with one comparator per internal quantization boundary. How many comparators are required?",
    "choices": [
      "511",
      "512",
      "9",
      "256"
    ],
    "key": 0,
    "why": "Principle: An N-bit quantizer divides its input range into 2ᴺ bins. Separating adjacent bins requires one internal threshold between each neighboring pair.\n\nStep 1: The number of output bins is 2^9=512.\n\nStep 2: The number of boundaries between those bins is one fewer.\n\nStep 3: Thus a full flash architecture requires 2^9−1=511 comparators.\n\nAnswer: 511.\n\nCheck and interpretation: The rapid exponential comparator growth explains why flash ADC resolution is expensive in power and silicon area. This count excludes any separate overrange detector.",
    "family": "flash-comparator-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-counter-adc-time-6",
    "topic": "digital",
    "prompt": "An 10-bit counter-type ADC starts its count at zero at the beginning of each conversion. The clock period is 3.2 µs. Using a worst-case budget of 2^N clocks, find the worst-case conversion time in ms.",
    "choices": [
      "3276.8 ms",
      "0.032 ms",
      "3.2768 ms",
      "1.6384 ms"
    ],
    "key": 2,
    "why": "Principle: A counter-type ADC can need a full-scale count search, unlike a SAR converter that needs approximately N decisions. The question specifies the clock-budget convention.\n\nStep 1: The worst-case budget is 2^10=1024 clocks.\n\nStep 2: Multiply by 3.2 µs per clock to get 3276.8 µs.\n\nStep 3: Convert microseconds to milliseconds by dividing by 1000: 3.2768 ms.\n\nAnswer: 3.2768 ms.\n\nCheck and interpretation: Using N clocks would describe the approximate decision count of a SAR ADC, not the stated counter ramp architecture.",
    "family": "counter-adc-time",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-routh-cubic-bound-6",
    "topic": "control",
    "prompt": "For positive K, a feedback system has characteristic polynomial s³+7s²+15s+K. What is the upper boundary value of K for strict stability?",
    "choices": [
      "22",
      "2.1429",
      "735",
      "105"
    ],
    "key": 3,
    "why": "Principle: For a real cubic, the Routh first-column entries must all have the same positive sign. A zero boundary entry marks loss of strict asymptotic stability.\n\nStep 1: The first two Routh rows begin [1, 15] and [7, K].\n\nStep 2: The s¹ first-column entry is (7×15−K)/7.\n\nStep 3: Along with K>0, positivity requires K<105.\n\nStep 4: Therefore strict stability holds for 0<K<105, and the requested upper boundary is 105.\n\nAnswer: 105.\n\nCheck and interpretation: The boundary itself is excluded from strict stability. Positive polynomial coefficients alone are necessary but not sufficient for a cubic.",
    "family": "routh-cubic-bound",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-second-order-overshoot-6",
    "topic": "control",
    "prompt": "A standard unity-DC-gain second-order system has ω_n=8 rad/s and damping ratio ζ=0.44. Find percentage overshoot to a unit step, rounded to four decimal places.",
    "choices": [
      "21.4528 %",
      "0.2145 %",
      "25.1 %",
      "42.9056 %"
    ],
    "key": 0,
    "why": "Principle: For an underdamped standard second-order response, percentage overshoot is 100 exp[−πζ/√(1−ζ²)]. It depends on damping ratio rather than natural frequency.\n\nStep 1: The supplied ζ=0.44 lies strictly between zero and one.\n\nStep 2: Compute √(1−ζ²)=0.898.\n\nStep 3: Insert in the overshoot formula: 100exp[−π×0.44/0.898]=21.4528%.\n\nAnswer: 21.4528 %.\n\nCheck and interpretation: Changing ωn=8 rad/s would change how quickly the peak occurs, but would not change this percentage overshoot with ζ fixed.",
    "family": "second-order-overshoot",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-ramp-error-6",
    "topic": "control",
    "prompt": "A stable unity-negative-feedback system has open loop G(s)=8/[s(s+7)]. What is its unit-ramp steady-state error? Round to four decimal places.",
    "choices": [
      "0.875",
      "1.1429",
      "0",
      "0.4667"
    ],
    "key": 0,
    "why": "Principle: For a type-1 unity-feedback system, unit-ramp steady-state error is 1/Kv, where Kv=lim(s→0)sG(s). Closed-loop stability is required.\n\nStep 1: There is one open-loop pole at the origin, so the system is type 1.\n\nStep 2: Kv=lim(s→0)8/(s+7)=8/7.\n\nStep 3: Hence ess=1/Kv=7/8=0.875.\n\nAnswer: 0.875.\n\nCheck and interpretation: The characteristic polynomial s²+as+gain has positive coefficients here and is stable. A step input would have zero error, whereas a ramp has a finite nonzero error.",
    "family": "ramp-error",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-first-order-settling-6",
    "topic": "control",
    "prompt": "A plant G(s)=8/(s+7) is placed in unity negative feedback. Using the approximation t_s≈4/|closed-loop pole|, find its 2% settling time in s.",
    "choices": [
      "0.5714 s",
      "0.5 s",
      "0.2667 s",
      "0.0667 s"
    ],
    "key": 2,
    "why": "Principle: Unity negative feedback gives T=G/(1+G). For a real negative pole −α, the response error decays exponentially with time constant 1/α.\n\nStep 1: T(s)=8/(s+7+8)=8/(s+15).\n\nStep 2: The pole is −15, so τ=1/15 s.\n\nStep 3: The specified 2% approximation is ts≈4τ=4/15=0.2667 s.\n\nAnswer: 0.2667 s.\n\nCheck and interpretation: Use the closed-loop pole, not the original plant pole. The exact normalized 2% exponential settling time would be ln(50)/α, close to 4/α.",
    "family": "first-order-settling",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-pole-damping-6",
    "topic": "control",
    "prompt": "A second-order denominator is (s+7)(s+9). What is its damping ratio ζ, rounded to four decimal places?",
    "choices": [
      "7.9373",
      "8",
      "1.0079",
      "2.0158"
    ],
    "key": 2,
    "why": "Principle: Compare the expanded polynomial with s²+2ζωns+ωn². Both the linear and constant coefficients are needed to extract the damping ratio.\n\nStep 1: Expand to s²+16s+63.\n\nStep 2: Thus ωn=√63 rad/s and 2ζωn=16.\n\nStep 3: Rearrange: ζ=16/(2√63)=1.0079.\n\nAnswer: 1.0079.\n\nCheck and interpretation: The two distinct real negative poles imply an overdamped system, so ζ must exceed one. This is a useful check on coefficient matching.",
    "family": "pole-damping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-single-pole-phase-6",
    "topic": "control",
    "prompt": "For G(s)=1/(1+0.22s), find phase at ω=8 rad/s in degrees, rounded to four decimal places.",
    "choices": [
      "60.3955 degrees",
      "-90 degrees",
      "-30.1978 degrees",
      "-60.3955 degrees"
    ],
    "key": 3,
    "why": "Principle: The phase of a first-order low-pass is the negative angle of its denominator 1+jωτ. The numerator contributes zero phase.\n\nStep 1: At the given frequency, ωτ=8×0.22=1.76.\n\nStep 2: The denominator angle is arctan(1.76).\n\nStep 3: Therefore ∠G=−arctan(1.76)×180/π=-60.3955 degrees.\n\nAnswer: -60.3955 degrees.\n\nCheck and interpretation: The phase must lie between 0 and −90 degrees for positive frequency. The arctangent result in radians must be converted before reporting degrees.",
    "family": "single-pole-phase",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-step-final-value-6",
    "topic": "control",
    "prompt": "A plant G(s)=8/(s+7) has unity negative feedback and is driven by a unit step reference. Find its final output value, rounded to four decimal places.",
    "choices": [
      "1",
      "0.0667",
      "0.5333",
      "1.1429"
    ],
    "key": 2,
    "why": "Principle: For a stable closed-loop system, the final value of a unit-step response equals its closed-loop DC gain. Unity feedback does not automatically make that gain one.\n\nStep 1: The closed-loop transfer function is T(s)=G/(1+G)=8/(s+15).\n\nStep 2: For a unit step, Y(s)=T(s)/s.\n\nStep 3: By the final-value theorem, y∞=lim(s→0)sY(s)=8/15=0.5333.\n\nAnswer: 0.5333.\n\nCheck and interpretation: The remaining step error is 0.4667. The pole −15 is in the left half-plane, validating the final-value theorem.",
    "family": "step-final-value",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-state-determinant-6",
    "topic": "control",
    "prompt": "A continuous-time state matrix is A=[0 1; −70 −17]. What is the product of its two pole magnitudes?",
    "choices": [
      "17",
      "8.3666",
      "149",
      "70"
    ],
    "key": 3,
    "why": "Principle: The poles are eigenvalues of A. Their product equals det(A), and their individual values can be obtained from the characteristic polynomial.\n\nStep 1: Compute det(sI−A)=s²+17s+70.\n\nStep 2: It factors as (s+7)(s+10), so the poles are −7 and −10.\n\nStep 3: Their magnitudes multiply to 7×10=70.\n\nAnswer: 70.\n\nCheck and interpretation: The trace is the pole sum, −(a+b), rather than their product. Both poles are negative here, so magnitude product agrees with the positive determinant.",
    "family": "state-determinant",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-phase-margin-6",
    "topic": "control",
    "prompt": "A unity-feedback loop has G(s)=K/[s(s+8)]. K is selected so gain crossover is ω_gc=8 rad/s. Find phase margin in degrees.",
    "choices": [
      "90 degrees",
      "135 degrees",
      "45 degrees",
      "180 degrees"
    ],
    "key": 2,
    "why": "Principle: Phase margin is 180 degrees plus open-loop phase at unity-gain crossover. The integrator contributes −90 degrees, and the real pole contributes an additional lag.\n\nStep 1: At ωgc=8, the integrator phase is −90 degrees.\n\nStep 2: The (s+8) denominator term contributes −arctan(ωgc/8)=−45 degrees.\n\nStep 3: Total phase is −135 degrees, so PM=180−135=45 degrees.\n\nAnswer: 45 degrees.\n\nCheck and interpretation: A positive K can achieve the stated crossover: K=ωgc√(ωgc²+8²). K sets magnitude here but contributes no extra phase.",
    "family": "phase-margin",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-capacity-bandwidth-6",
    "topic": "comm",
    "prompt": "An AWGN channel has bandwidth 2.2 MHz and linear SNR=31. Using the stated SNR rounded to four decimals, find Shannon capacity in Mbit/s, rounded to three decimal places.",
    "choices": [
      "11 Mbit/s",
      "5.5 Mbit/s",
      "22 Mbit/s",
      "10.8992 Mbit/s"
    ],
    "key": 0,
    "why": "Principle: Shannon capacity for a bandlimited AWGN channel is C=B log₂(1+SNR). With B in MHz, the resulting capacity is in Mbit/s.\n\nStep 1: Use linear SNR=31, so the logarithm argument is 32.\n\nStep 2: Compute log₂(1+SNR)≈5 bit/s/Hz.\n\nStep 3: Multiply by 2.2 MHz to obtain approximately 11.000 Mbit/s.\n\nAnswer: 11 Mbit/s.\n\nCheck and interpretation: Omitting the +1 is a high-SNR approximation and is not the exact Shannon expression. Capacity is a theoretical upper bound, not an assured payload rate.",
    "family": "capacity-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-qam-raised-cosine-6",
    "topic": "comm",
    "prompt": "An M-QAM link with M=8 carries 10 Mbit/s before overhead and uses raised-cosine pulse shaping with roll-off α=0.32. What is its ideal RF null-to-null bandwidth in MHz?",
    "choices": [
      "3.3333 MHz",
      "13.2 MHz",
      "2.2 MHz",
      "4.4 MHz"
    ],
    "key": 3,
    "why": "Principle: An M-ary symbol carries log₂M bits. For raised-cosine shaping, the real passband null-to-null bandwidth is (1+α) times symbol rate.\n\nStep 1: Each symbol carries log₂(8)=3 bits.\n\nStep 2: The symbol rate is Rs=10/3=3.3333 Mbaud.\n\nStep 3: RF bandwidth is (1+0.32)Rs=4.4 MHz.\n\nAnswer: 4.4 MHz.\n\nCheck and interpretation: The one-sided baseband bandwidth is half this passband bandwidth. Reporting that baseband value would introduce a factor-of-two error.",
    "family": "qam-raised-cosine",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-am-efficiency-6",
    "topic": "comm",
    "prompt": "A conventional single-tone AM transmitter has carrier power 22 W and modulation index 0.5. Find useful-sideband power as a percentage of total transmitted power.",
    "choices": [
      "12.5 %",
      "33.3333 %",
      "5.5556 %",
      "11.1111 %"
    ],
    "key": 3,
    "why": "Principle: In conventional AM, the two sidebands together carry Pc m²/2 while the carrier still consumes Pc. Efficiency is sideband power divided by total power.\n\nStep 1: Sideband power is 22×0.5²/2=2.75 W.\n\nStep 2: Total power is Pc(1+m²/2)=24.75 W.\n\nStep 3: Efficiency is 100×m²/(2+m²)=11.1111%.\n\nAnswer: 11.1111 %.\n\nCheck and interpretation: Carrier power cancels from the efficiency ratio. Dividing sideband power by carrier power alone would overestimate useful-power efficiency.",
    "family": "am-efficiency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-fm-carson-6",
    "topic": "comm",
    "prompt": "A message has maximum frequency 8 kHz. An FM modulator produces peak deviation 15 kHz. Using Carson’s rule, what approximate transmission bandwidth in kHz is required?",
    "choices": [
      "30 kHz",
      "16 kHz",
      "23 kHz",
      "46 kHz"
    ],
    "key": 3,
    "why": "Principle: Carson’s rule estimates practical FM bandwidth as B≈2(Δf+fm), incorporating both frequency deviation and message bandwidth.\n\nStep 1: Identify peak deviation Δf=15 kHz, rather than peak-to-peak deviation.\n\nStep 2: Add the highest message frequency: Δf+fm=15+8=23 kHz.\n\nStep 3: Double the sum for the full passband width: B≈46 kHz.\n\nAnswer: 46 kHz.\n\nCheck and interpretation: This is an occupied-bandwidth estimate. Exact FM spectra have infinitely many sidebands, so the result is not a strict mathematical bandlimit.",
    "family": "fm-carson",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-pcm-sqnr-6",
    "topic": "comm",
    "prompt": "A full-scale sinusoid is quantized by an ideal uniform 10-bit quantizer. Under the uniform quantization-noise model, estimate SQNR in dB to four decimal places.",
    "choices": [
      "60.206 dB",
      "55.9463 dB",
      "61.9669 dB",
      "67.9875 dB"
    ],
    "key": 2,
    "why": "Principle: For a full-scale sinusoid and uniform quantization error with variance Δ²/12, SQNR≈6.0206N+1.7609 dB.\n\nStep 1: The sinusoid signal power is A²/2. For a span of 2A, quantization step is Δ=2A/2ᴺ.\n\nStep 2: Dividing A²/2 by Δ²/12 gives SQNR=(3/2)2^(2N).\n\nStep 3: Taking 10log₁₀ gives 10log₁₀(3/2)+20Nlog₁₀2.\n\nStep 4: For N=10, this is 61.9669 dB.\n\nAnswer: 61.9669 dB.\n\nCheck and interpretation: The 1.76 dB offset comes from the full-scale sinusoidal input assumption. A smaller input amplitude reduces actual SQNR.",
    "family": "pcm-sqnr",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-binary-entropy-6",
    "topic": "comm",
    "prompt": "An independent binary source emits 1 with probability 0.3 and 0 with probability 0.7. Find its entropy in bits/symbol, rounded to four decimal places.",
    "choices": [
      "0.8813 bits/symbol",
      "1 bits/symbol",
      "1.737 bits/symbol",
      "0.4406 bits/symbol"
    ],
    "key": 0,
    "why": "Principle: Entropy is the probability-weighted average information content, H=−Σp log₂p. Both symbols contribute even when their probabilities differ.\n\nStep 1: The information contribution of 1 is −0.3log₂(0.3).\n\nStep 2: The information contribution of 0 is −0.7log₂(0.7).\n\nStep 3: Adding them gives H=0.8813 bits per source symbol.\n\nAnswer: 0.8813 bits/symbol.\n\nCheck and interpretation: Binary entropy cannot exceed 1 bit/symbol and is maximal for equal probabilities. It decreases when one outcome becomes easier to predict.",
    "family": "binary-entropy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-coded-throughput-6",
    "topic": "comm",
    "prompt": "A 16-ary modulation runs at 2.2 Mbaud using a code of rate 0.65. Ignore all other overhead. What is the information-bit rate in Mbit/s?",
    "choices": [
      "8.8 Mbit/s",
      "13.5385 Mbit/s",
      "5.72 Mbit/s",
      "1.43 Mbit/s"
    ],
    "key": 2,
    "why": "Principle: A code rate r means r information bits per transmitted coded bit. Modulation carries log₂M coded bits per symbol.\n\nStep 1: The modulation carries 4 coded bits per symbol.\n\nStep 2: At 2.2 Mbaud the coded rate is 8.8 Mbit/s.\n\nStep 3: Multiplying by code rate 0.65 yields information rate 5.72 Mbit/s.\n\nAnswer: 5.72 Mbit/s.\n\nCheck and interpretation: Coding adds redundancy, so the information rate must be below the raw coded-bit rate. Dividing by code rate would predict the opposite.",
    "family": "coded-throughput",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-receiver-noise-6",
    "topic": "comm",
    "prompt": "A matched receiver has noise figure 5 dB and bandwidth 7 MHz. At T₀=290 K, with k_B=1.38×10⁻²³ J/K, find its equivalent total input-referred noise power Fk_BT₀B in pW.",
    "choices": [
      "0.0886 pW",
      "0.028 pW",
      "0.8859 pW",
      "0.0089 pW"
    ],
    "key": 0,
    "why": "Principle: Noise factor F is a linear power ratio and equals 10^(NF/10). The specified total input-referred noise is F times the thermal input-noise reference.\n\nStep 1: Convert NF=5 dB to F=10^(5/10)=3.1623.\n\nStep 2: The thermal reference is kT₀B=1.38×10⁻²³×290×7×10⁶ W.\n\nStep 3: Multiply by F and convert W to pW by multiplying by 10¹², giving 0.0886 pW.\n\nAnswer: 0.0886 pW.\n\nCheck and interpretation: The receiver-added equivalent noise alone would use (F−1)kT₀B. The question explicitly requests total FkT₀B, including source thermal noise.",
    "family": "receiver-noise",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-ebn0-conversion-6",
    "topic": "comm",
    "prompt": "A digital link has received signal-to-noise ratio 16 dB measured over bandwidth B. Its bit rate satisfies R_b/B=4 bit/s/Hz. Find E_b/N₀ in dB.",
    "choices": [
      "22.0206 dB",
      "9.9794 dB",
      "4 dB",
      "9.9527 dB"
    ],
    "key": 1,
    "why": "Principle: Since SNR=P/(N₀B) and Eb=P/Rb, the linear relation is Eb/N₀=SNR×B/Rb. Decibels convert multiplication to addition.\n\nStep 1: The bandwidth-to-bit-rate ratio is B/Rb=1/4.\n\nStep 2: Thus (Eb/N₀)dB=SNRdB−10log₁₀(Rb/B).\n\nStep 3: Substitute 16−10log₁₀(4)=9.9794 dB.\n\nAnswer: 9.9794 dB.\n\nCheck and interpretation: For spectral efficiency above one bit/s/Hz, Eb/N₀ in dB is smaller than the measured SNR in dB. A linear ratio must not be reported as a decibel value.",
    "family": "ebn0-conversion",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-complex-load-power-6",
    "topic": "em",
    "prompt": "A lossless 50 Ω transmission line is terminated by (50−j34) Ω. If incident average power is 16 mW, find average load power in mW, rounded to four decimal places.",
    "choices": [
      "14.3421 mW",
      "1.6579 mW",
      "10.8496 mW",
      "16 mW"
    ],
    "key": 0,
    "why": "Principle: At a lossless line termination, the reflected power fraction is |Γ|², where Γ=(ZL−Z0)/(ZL+Z0). Delivered power is the remaining fraction of incident power.\n\nStep 1: Compute |Γ|²=[(50−50)²+34²]/[(50+50)²+34²].\n\nStep 2: This gives reflected fraction 0.1036.\n\nStep 3: Load power is 16(1−0.1036)=14.3421 mW.\n\nAnswer: 14.3421 mW.\n\nCheck and interpretation: Using 1−|Γ| rather than 1−|Γ|² confuses voltage amplitude with power. A passive real part of the load ensures delivered power is nonnegative.",
    "family": "complex-load-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-quarter-wave-transform-6",
    "topic": "em",
    "prompt": "A lossless quarter-wave transmission line has characteristic impedance 70 Ω and load resistance 160 Ω. What is input resistance in Ω?",
    "choices": [
      "30.625 Ω",
      "160 Ω",
      "70 Ω",
      "365.7143 Ω"
    ],
    "key": 0,
    "why": "Principle: At an electrical length of π/2, a lossless line inverts the load impedance: Zin=Z0²/ZL. This is a frequency-specific impedance transformation.\n\nStep 1: Use Z0=70 Ω and ZL=160 Ω.\n\nStep 2: Square the line impedance: Z0²=4900 Ω².\n\nStep 3: Divide by the load: Zin=4900/160=30.625 Ω.\n\nAnswer: 30.625 Ω.\n\nCheck and interpretation: A line one-half wavelength long would reproduce the load instead. The quarter-wave condition is essential to the inversion formula.",
    "family": "quarter-wave-transform",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-vswr-reflected-power-6",
    "topic": "em",
    "prompt": "A lossless line has VSWR=2.1. What percentage of incident power is reflected? Round to four decimal places.",
    "choices": [
      "35.4839 %",
      "87.4089 %",
      "12.5911 %",
      "6.2955 %"
    ],
    "key": 2,
    "why": "Principle: First convert VSWR to voltage-reflection magnitude, then square that magnitude to obtain the reflected power fraction.\n\nStep 1: From S=(1+|Γ|)/(1−|Γ|), rearrange |Γ|=(S−1)/(S+1).\n\nStep 2: For S=2.1, |Γ|=0.3548.\n\nStep 3: The reflected percentage is 100|Γ|²=12.5911%.\n\nAnswer: 12.5911 %.\n\nCheck and interpretation: VSWR itself is an amplitude ratio along the standing wave, not a power-reflection ratio. A matched line has S=1 and zero reflected power.",
    "family": "vswr-reflected-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-waveguide-velocity-6",
    "topic": "em",
    "prompt": "An air-filled rectangular guide has broad wall a=3.2 cm and carries TE₁₀ at 16 GHz. Taking c=3×10⁸ m/s, find group velocity divided by c, rounded to four decimal places.",
    "choices": [
      "0.9561",
      "1.0459",
      "0.293",
      "0.9142"
    ],
    "key": 0,
    "why": "Principle: For a lossless air-filled waveguide, TE group velocity is vg=c√[1−(fc/f)²]. It is lower than c for a propagating mode above cutoff.\n\nStep 1: TE₁₀ cutoff is fc=c/(2a)=4.6875 GHz after converting centimetres to metres.\n\nStep 2: The operating frequency 16 GHz exceeds cutoff, so propagation is possible.\n\nStep 3: Compute vg/c=√[1−(4.6875/16)²]=0.9561.\n\nAnswer: 0.9561.\n\nCheck and interpretation: The reciprocal factor would give phase velocity divided by c. Phase velocity can exceed c in a waveguide while group velocity remains below c.",
    "family": "waveguide-velocity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-dielectric-impedance-6",
    "topic": "em",
    "prompt": "A uniform plane wave propagates in a lossless nonmagnetic dielectric with relative permittivity 8. Taking free-space impedance as 377 Ω, find intrinsic impedance in Ω.",
    "choices": [
      "1066.317 Ω",
      "47.125 Ω",
      "133.2896 Ω",
      "3016 Ω"
    ],
    "key": 2,
    "why": "Principle: Intrinsic impedance of a lossless medium is η=√(μ/ε). For μr=1, it reduces to η0/√εr.\n\nStep 1: Set μ=μ0 and ε=8ε0.\n\nStep 2: Then η=√(μ0/ε0)/√8=377/√8.\n\nStep 3: The resulting impedance is 133.2896 Ω, which relates electric-field amplitude to magnetic-field amplitude.\n\nAnswer: 133.2896 Ω.\n\nCheck and interpretation: The refractive index is √εr, while intrinsic impedance varies inversely with it for a nonmagnetic medium. Relative permittivity is dimensionless.",
    "family": "dielectric-impedance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-faraday-loop-current-6",
    "topic": "em",
    "prompt": "A 7-turn coil has area 0.05 m² per turn and resistance 11 Ω. Uniform normal flux density is B(t)=0.22cos(220t) T. Neglect inductance. Find peak induced current in A.",
    "choices": [
      "0.22 A",
      "0.007 A",
      "1.54 A",
      "3.08 A"
    ],
    "key": 2,
    "why": "Principle: Faraday’s law uses the time derivative of total flux linkage NΦ. For a sinusoidal normal field, peak induced emf is NABpeakω.\n\nStep 1: Flux linkage is λ(t)=NAB(t)=7×0.05×0.22cos(220t).\n\nStep 2: Differentiation gives peak emf N A Bpeak ω=16.94 V.\n\nStep 3: With inductance neglected, peak current is emfpeak/R=16.94/11=1.54 A.\n\nAnswer: 1.54 A.\n\nCheck and interpretation: The angular frequency is already in rad/s, so no extra 2π is needed. Lenz’s law specifies the current direction; only the peak magnitude is requested.",
    "family": "faraday-loop-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-skin-depth-6",
    "topic": "em",
    "prompt": "A good nonmagnetic conductor has σ=10⁷ S/m and μ=4π×10⁻⁷ H/m. At 7 MHz, find skin depth in µm using δ=√[2/(ωμσ)].",
    "choices": [
      "60.1549 µm",
      "85.0719 µm",
      "42.5359 µm",
      "601.5491 µm"
    ],
    "key": 0,
    "why": "Principle: In a good conductor, fields decay exponentially into the material. Skin depth is the distance over which field amplitude falls by a factor e.\n\nStep 1: Convert angular frequency: ω=2π×7×10⁶ rad/s.\n\nStep 2: Insert ω, μ=4π×10⁻⁷ and σ=10⁷ into δ=√[2/(ωμσ)].\n\nStep 3: The result in metres is 6.0155e-5 m. Multiplying by 10⁶ gives 60.1549 µm.\n\nAnswer: 60.1549 µm.\n\nCheck and interpretation: Skin depth scales as 1/√f and becomes smaller at higher frequency. Confusing hertz with angular frequency changes the numerical result.",
    "family": "skin-depth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-friis-link-6",
    "topic": "em",
    "prompt": "In a free-space far-field link, transmit power is 7 W, linear antenna gains are G_t=2 and G_r=3, separation is 160 m, and frequency is 1.6 GHz. With c=3×10⁸ m/s and perfect alignment/matching, find received power in nW.",
    "choices": [
      "365.2516 nW",
      "60.8753 nW",
      "1461.0064 nW",
      "91.3129 nW"
    ],
    "key": 0,
    "why": "Principle: The Friis formula is Pr=PtGtGr[λ/(4πR)]² for a matched free-space far-field link. Gains here are linear rather than decibels.\n\nStep 1: The wavelength is λ=c/f=0.3/1.6=0.1875 m.\n\nStep 2: The propagation factor is [0.1875/(4π×160)]².\n\nStep 3: Multiply by PtGtGr=7×2×3 and convert W to nW to obtain 365.2516 nW.\n\nAnswer: 365.2516 nW.\n\nCheck and interpretation: Power falls with separation squared. Omitting either antenna gain or using dB-valued gains directly would change the result.",
    "family": "friis-link",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-poynting-average-6",
    "topic": "em",
    "prompt": "A uniform plane wave in free space has peak electric field 22 V/m. Taking η₀=377 Ω, find time-average power density in W/m².",
    "choices": [
      "1.2838 W/m²",
      "91234 W/m²",
      "0.6419 W/m²",
      "0.0584 W/m²"
    ],
    "key": 2,
    "why": "Principle: For a sinusoidal plane wave, the average Poynting magnitude is Epeak Hpeak/2=Epeak²/(2η). Peak and RMS field conventions must be distinguished.\n\nStep 1: The peak magnetic field is Hpeak=Epeak/η₀=22/377 A/m.\n\nStep 2: Average power density is one-half the product of the peak field amplitudes.\n\nStep 3: Thus Sav=22²/(2×377)=0.6419 W/m².\n\nAnswer: 0.6419 W/m².\n\nCheck and interpretation: Using E²/η without the one-half factor is correct only when E denotes RMS field. The problem explicitly supplies peak field.",
    "family": "poynting-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-combined-work-6",
    "topic": "apt",
    "prompt": "A completes a job in 10 days and B in 14 days at constant rates. They start together and work without interference. In how many days is the job complete?",
    "choices": [
      "24 days",
      "12 days",
      "35 days",
      "5.8333 days"
    ],
    "key": 3,
    "why": "Principle: Independent work rates add. A completion time must be converted into a fraction of the job completed per unit time before combining workers.\n\nStep 1: A completes 1/10 of the job per day and B completes 1/14.\n\nStep 2: Their combined rate is (10+14)/(10×14) jobs/day.\n\nStep 3: Time is the reciprocal, 10×14/(10+14)=5.8333 days.\n\nAnswer: 5.8333 days.\n\nCheck and interpretation: The combined time is less than 10 days, the faster individual time. Averaging the completion times would fail this basic check.",
    "family": "combined-work",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-equal-distance-speed-6",
    "topic": "apt",
    "prompt": "A traveller covers 50 km at 42 km/h and the next 50 km at 62 km/h. Ignoring stops, what is the overall average speed in km/h?",
    "choices": [
      "52 km/h",
      "51.0294 km/h",
      "50.0769 km/h",
      "25.0385 km/h"
    ],
    "key": 2,
    "why": "Principle: Average speed is total distance divided by total time. Equal distances at different speeds lead to a harmonic mean, not an arithmetic mean.\n\nStep 1: Total distance is 100 km.\n\nStep 2: Travel time is 50/42+50/62 h.\n\nStep 3: Divide distance by time: vavg=2v₁v₂/(v₁+v₂)=50.0769 km/h.\n\nAnswer: 50.0769 km/h.\n\nCheck and interpretation: More time is spent on the slower segment, so the average is below the arithmetic mean of the two speeds. The common segment distance cancels.",
    "family": "equal-distance-speed",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-markup-discount-6",
    "topic": "apt",
    "prompt": "An item is marked 32% above its cost price and then sold at a 11% discount on marked price. What is the net profit percentage relative to cost?",
    "choices": [
      "21 %",
      "17.48 %",
      "43 %",
      "8.74 %"
    ],
    "key": 1,
    "why": "Principle: Markup is based on cost while discount is based on marked price. Successive percentage operations multiply their scale factors.\n\nStep 1: Take cost as 100 units. Marked price is 100×(1+32/100)=132.\n\nStep 2: Selling price is 132×(1−11/100)=117.48.\n\nStep 3: Profit percentage on cost is selling price minus 100, namely 17.48%.\n\nAnswer: 17.48 %.\n\nCheck and interpretation: Simply subtracting discount percentage from markup percentage ignores their different bases. The multiplicative calculation also works when the net result is a loss.",
    "family": "markup-discount",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-committee-selection-6",
    "topic": "apt",
    "prompt": "A committee of 2 people is selected uniformly from 14 candidates, including two named candidates A and B. What is the probability both A and B are selected?",
    "choices": [
      "0.1429",
      "0.011",
      "0.0204",
      "0.0769"
    ],
    "key": 1,
    "why": "Principle: Committee selection is without replacement. Count committees that contain both named people and divide by the count of all equally likely committees.\n\nStep 1: All committees number C(14,2).\n\nStep 2: With A and B already included, choose the remaining 0 members from 12, giving C(12,0).\n\nStep 3: Their ratio simplifies to r(r−1)/[n(n−1)]=2×1/(14×13)=0.011.\n\nAnswer: 0.011.\n\nCheck and interpretation: Multiplying r/n by itself incorrectly treats the two inclusion events as independent. The second inclusion probability changes after the first is fixed.",
    "family": "committee-selection",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-pipes-drain-6",
    "topic": "apt",
    "prompt": "An inlet fills an empty tank in 8 hours. A drain empties a full tank in 17 hours. Both are opened together when the tank is empty, with constant flow rates. How long until it fills?",
    "choices": [
      "5.44 hours",
      "15.1111 hours",
      "17 hours",
      "9 hours"
    ],
    "key": 1,
    "why": "Principle: The inlet contributes a positive fill rate and the drain a negative fill rate. Net filling time is the reciprocal of their rate difference.\n\nStep 1: The inlet rate is 1/8 tank/h and drain rate is 1/17 tank/h.\n\nStep 2: Net rate is 1/8−1/17=9/[8×17] tank/h.\n\nStep 3: Thus filling time is 8×17/9=15.1111 hours.\n\nAnswer: 15.1111 hours.\n\nCheck and interpretation: The drain makes filling slower than the inlet alone, so the answer must exceed the inlet’s filling time. Adding rates would describe two inlets.",
    "family": "pipes-drain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-updated-average-6",
    "topic": "apt",
    "prompt": "The average of 10 observations is 26. One observation equal to 16 is removed. What is the mean of the remaining observations?",
    "choices": [
      "21",
      "27.1111",
      "24.4",
      "13.5556"
    ],
    "key": 1,
    "why": "Principle: Recover the original total from mean times count, subtract the removed observation, then divide by the new count.\n\nStep 1: The original sum is 10×26=260.\n\nStep 2: After removing 16, the sum becomes 244 and the count becomes 9.\n\nStep 3: The new mean is 244/9=27.1111.\n\nAnswer: 27.1111.\n\nCheck and interpretation: The removed value lies below the original mean, so removing it raises the mean. Dividing by the original count would miss the count change.",
    "family": "updated-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-compound-growth-6",
    "topic": "apt",
    "prompt": "A population grows at 5% per year compounded annually for two years. What is the total percentage increase over its initial value?",
    "choices": [
      "10 %",
      "10.25 %",
      "25 %",
      "5.125 %"
    ],
    "key": 1,
    "why": "Principle: Annual compounding applies each year’s growth to the previous year’s enlarged population. The two-year growth factor is (1+r)².\n\nStep 1: Convert the annual percentage to rate r=5/100.\n\nStep 2: After two years, final/initial=(1+5/100)².\n\nStep 3: Subtract one and multiply by 100 to obtain total growth 10.25%.\n\nAnswer: 10.25 %.\n\nCheck and interpretation: The result exceeds the simple two-year increase 10% because the first year’s increase also grows in the second year.",
    "family": "compound-growth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-arithmetic-sum-6",
    "topic": "apt",
    "prompt": "A production schedule makes 8 units on day 1 and increases output by 7 units each successive day. How many units are made over the first 16 days?",
    "choices": [
      "968 units",
      "1808 units",
      "240 units",
      "1080 units"
    ],
    "key": 0,
    "why": "Principle: Daily outputs form an arithmetic progression. Its total is the number of terms times the average of the first and last terms.\n\nStep 1: First output a=8; common difference d=7.\n\nStep 2: Day-16 output is a+(n−1)d=8+15×7=113.\n\nStep 3: Total is n[2a+(n−1)d]/2=16×[8+113]/2=968 units.\n\nAnswer: 968 units.\n\nCheck and interpretation: There are n−1 increases between the first and nth days. Using n increases would shift every endpoint calculation by one day.",
    "family": "arithmetic-sum",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-without-replacement-6",
    "topic": "apt",
    "prompt": "A box contains 11 working and 9 defective components. Two are drawn randomly without replacement. What is the probability that both work?",
    "choices": [
      "0.3025",
      "0.2895",
      "0.55",
      "0.7105"
    ],
    "key": 1,
    "why": "Principle: Without replacement, the second draw’s probabilities depend on the first draw. Use the multiplication rule with a conditional probability.\n\nStep 1: The first component works with probability 11/20.\n\nStep 2: If it works, 10 working components remain among 19 total.\n\nStep 3: Multiply: P(both work)=(11/20)×(10/19)=0.2895.\n\nAnswer: 0.2895.\n\nCheck and interpretation: Squaring the first-draw probability would apply to replacement or independent draws. Here taking out a working component slightly lowers the next success probability.",
    "family": "without-replacement",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-bayes-detector-1",
    "topic": "math",
    "prompt": "A fault occurs with probability 0.01. A detector reports positive with probability 0.9 when faulty and 0.05 when healthy. Given a positive report, find the probability of a fault.",
    "choices": [
      "0.9",
      "0.01",
      "0.009",
      "0.1538"
    ],
    "key": 3,
    "why": "Principle: Bayes’ theorem combines likelihood with the prior fault probability. A positive detector report can come from a real fault or a false alarm.\n\nStep 1: True-positive probability is 0.9×0.01=0.009.\n\nStep 2: Total positive probability is 0.9×0.01+0.05×0.99=0.0585.\n\nStep 3: Normalize the true-positive term by the total to obtain 0.1538.\n\nAnswer: 0.1538.\n\nCheck and interpretation: Sensitivity alone is not the posterior fault probability. When faults are rare, healthy components can contribute many false positives.",
    "family": "bayes-detector",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-inverse-trace-1",
    "topic": "math",
    "prompt": "An invertible 2×2 matrix A has trace 7 and determinant 10. Find trace(A⁻¹), rounded to four decimal places.",
    "choices": [
      "1.4286",
      "7",
      "0.7",
      "0.1"
    ],
    "key": 2,
    "why": "Principle: The eigenvalues of an inverse matrix are reciprocals of the original eigenvalues. Their sum is the original eigenvalue sum divided by the original product.\n\nStep 1: Let the eigenvalues be λ₁ and λ₂ with λ₁+λ₂=7 and λ₁λ₂=10.\n\nStep 2: Then trace(A⁻¹)=1/λ₁+1/λ₂=(λ₁+λ₂)/(λ₁λ₂).\n\nStep 3: Substitute the given invariants: 7/10=0.7.\n\nAnswer: 0.7.\n\nCheck and interpretation: The determinant is nonzero, so the inverse exists. Taking the reciprocal of the trace would not in general equal the trace of the inverse.",
    "family": "inverse-trace",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-residue-contour-1",
    "topic": "math",
    "prompt": "C is the counterclockwise circle |z|=3. For f(z)=1/[(z−2)(z−5)], what real coefficient c satisfies ∮_C f(z)dz=2πj c?",
    "choices": [
      "-0.3333",
      "0.3333",
      "-0.6667",
      "0"
    ],
    "key": 0,
    "why": "Principle: The residue theorem gives a contour integral as 2πj times the sum of residues of poles strictly inside a positively oriented contour.\n\nStep 1: The poles are z=2 and z=5. Only 2 lies inside |z|=3.\n\nStep 2: The simple-pole residue at z=2 is lim(z→2)(z−2)f(z)=1/(2−5).\n\nStep 3: Thus the integral is 2πj×(-0.3333), and c=-0.3333.\n\nAnswer: -0.3333.\n\nCheck and interpretation: The outside pole contributes no residue to this contour. Reversing the contour orientation would reverse the sign, but the stated orientation is counterclockwise.",
    "family": "residue-contour",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-ode-initial-value-1",
    "topic": "math",
    "prompt": "For t≥0, y′+2y=5, with y(0)=2. Find y(1/2), rounded to four decimal places.",
    "choices": [
      "2.5",
      "0.7358",
      "2.3161",
      "4.5"
    ],
    "key": 2,
    "why": "Principle: A first-order linear differential equation has a constant particular solution plus an exponentially decaying homogeneous solution. The initial condition fixes the decay coefficient.\n\nStep 1: At equilibrium, y∞=5/2. The homogeneous term is Ce^(−2t).\n\nStep 2: Apply y(0)=2 to get C=2−5/2.\n\nStep 3: At t=1/2, the exponential is e⁻¹, giving y=5/2+(2−5/2)e⁻¹=2.3161.\n\nAnswer: 2.3161.\n\nCheck and interpretation: Discarding the initial condition would leave only the final value. The result lies between the initial value and the equilibrium because the decay factor is between zero and one.",
    "family": "ode-initial-value",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-correlated-variance-1",
    "topic": "math",
    "prompt": "Random variables X and Y have variances 2 and 4, and covariance 0.5. Find Var(2X−Y).",
    "choices": [
      "10",
      "12",
      "4",
      "14"
    ],
    "key": 0,
    "why": "Principle: For correlated variables, Var(aX+bY)=a²Var(X)+b²Var(Y)+2abCov(X,Y). The cross term changes sign when the coefficients have opposite signs.\n\nStep 1: Here a=2 and b=−1, so the individual variance contribution is 4×2+4=12.\n\nStep 2: The covariance contribution is 2×2×(−1)×0.5=−2.\n\nStep 3: Adding them gives Var(2X−Y)=10.\n\nAnswer: 10.\n\nCheck and interpretation: Independence was not stated and would contradict the nonzero covariance. The negative coefficient on Y does not make its own variance term negative.",
    "family": "correlated-variance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-newton-step-1",
    "topic": "math",
    "prompt": "Newton–Raphson is used to solve x²−3=0 starting at x₀=2. What is x₁, rounded to four decimal places?",
    "choices": [
      "1.75",
      "1.5",
      "1",
      "1.7321"
    ],
    "key": 0,
    "why": "Principle: Newton–Raphson updates x through xnew=x−f(x)/f′(x). A single update is generally an approximation, not the exact root.\n\nStep 1: For f(x)=x²−3, f′(x)=2x.\n\nStep 2: At x₀=2, f(x₀)=1 and f′(x₀)=4.\n\nStep 3: Thus x₁=2−(1)/4=(2+3/2)/2=1.75.\n\nAnswer: 1.75.\n\nCheck and interpretation: Using the exact square root would answer a different question: this asks for one algorithmic iteration from the specified starting point.",
    "family": "newton-step",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-dependent-input-resistance-1",
    "topic": "networks",
    "prompt": "A one-port has resistor R=3 kΩ to ground in parallel with an upward controlled current source g v/R, where v is port voltage and g=0.12. Find the input resistance in kΩ.",
    "choices": [
      "2.64 kΩ",
      "2.6786 kΩ",
      "25 kΩ",
      "3.4091 kΩ"
    ],
    "key": 3,
    "why": "Principle: Input resistance with dependent sources must be obtained from a test voltage or current while retaining the dependent source. The upward source opposes current drawn through the resistor.\n\nStep 1: Apply test voltage v. Resistor current entering the network is v/R.\n\nStep 2: The controlled source supplies g v/R toward the port, so net entering current is i=(1−g)v/R.\n\nStep 3: Therefore Rin=v/i=R/(1−g)=3/(1−0.12)=3.4091 kΩ.\n\nAnswer: 3.4091 kΩ.\n\nCheck and interpretation: Turning off a dependent source would incorrectly leave only R. Since 0<g<1, the input resistance is positive and exceeds R.",
    "family": "dependent-input-resistance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-nodal-two-sources-1",
    "topic": "networks",
    "prompt": "A node is connected through 2 kΩ to a fixed 11 V node, through 4 kΩ to a fixed 5 V node, and through 5 kΩ to ground. Find its voltage in V.",
    "choices": [
      "8 V",
      "7.8571 V",
      "7.1053 V",
      "2.7778 V"
    ],
    "key": 2,
    "why": "Principle: Nodal analysis applies KCL using each branch’s voltage difference divided by resistance. The unknown node is not an unloaded two-resistor divider.\n\nStep 1: Write (v−11)/2+(v−5)/4+v/5=0, using kΩ and mA.\n\nStep 2: Collect v terms: v(1/2+1/4+1/5)=11/2+5/4.\n\nStep 3: Divide the source-current sum by total conductance to get v=7.1053 V.\n\nAnswer: 7.1053 V.\n\nCheck and interpretation: The ground branch loads both source paths. Ignoring either fixed-voltage source changes the node equation and gives a different voltage.",
    "family": "nodal-two-sources",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-series-capacitor-energy-1",
    "topic": "networks",
    "prompt": "Initially uncharged capacitors 3 µF and 5 µF are connected in series across 12 V DC and allowed to settle. Find total stored electrostatic energy in µJ.",
    "choices": [
      "135 µJ",
      "576 µJ",
      "270 µJ",
      "216 µJ"
    ],
    "key": 0,
    "why": "Principle: Series capacitors carry equal charge and have equivalent capacitance Ceq=C₁C₂/(C₁+C₂). Their total stored energy is CeqV²/2.\n\nStep 1: Compute Ceq=3×5/(3+5)=1.875 µF.\n\nStep 2: The total terminal voltage is 12 V.\n\nStep 3: Energy is (1/2)×1.875×12²=135 µJ, since µF·V² gives µJ.\n\nAnswer: 135 µJ.\n\nCheck and interpretation: Using C₁+C₂ would treat the connection as parallel. The smaller capacitor has the larger voltage, but the equivalent capacitance already accounts for voltage division.",
    "family": "series-capacitor-energy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rlc-critical-damping-1",
    "topic": "networks",
    "prompt": "A source-free series RLC circuit has L=3 mH and C=5 µF. Find the total series resistance needed for critical damping in Ω.",
    "choices": [
      "24.4949 Ω",
      "48.9898 Ω",
      "97.9796 Ω",
      "0.7746 Ω"
    ],
    "key": 1,
    "why": "Principle: The series RLC natural polynomial is s²+(R/L)s+1/(LC). Critical damping occurs when the repeated-root condition α=ω₀ holds.\n\nStep 1: Identify α=R/(2L) and ω₀=1/√(LC).\n\nStep 2: Equating them gives Rcrit=2√(L/C).\n\nStep 3: Convert the given values to H and F, then calculate 2√[3×10⁻³/(5×10⁻⁶)]=48.9898 Ω.\n\nAnswer: 48.9898 Ω.\n\nCheck and interpretation: The factor two is essential. The parallel-RLC critical-resistance relation has a different form because its damping coefficient depends inversely on resistance.",
    "family": "rlc-critical-damping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-nonsinusoidal-rms-1",
    "topic": "networks",
    "prompt": "A current is i(t)=2+3cos(100t)+4sin(200t) A. Find RMS current over a common period, rounded to four decimal places.",
    "choices": [
      "3.8079 A",
      "6.9497 A",
      "4.062 A",
      "5.3852 A"
    ],
    "key": 2,
    "why": "Principle: RMS is the square root of the mean square. Orthogonal harmonics have zero average cross products over a common period, while the DC contribution is not halved.\n\nStep 1: The DC mean-square contribution is 2²=4.\n\nStep 2: Each sinusoid contributes half its squared peak amplitude: (3²+4²)/2=12.5.\n\nStep 3: Add contributions and take the square root: Irms=√16.5=4.062 A.\n\nAnswer: 4.062 A.\n\nCheck and interpretation: Adding the individual RMS values is invalid for orthogonal harmonics. The DC term must retain its full squared value.",
    "family": "nonsinusoidal-rms",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-thevenin-divider-1",
    "topic": "networks",
    "prompt": "An ideal 6 V source drives series resistors 3 kΩ and 5 kΩ. The output terminals are across the lower 5 kΩ resistor. What Norton short-circuit current, in mA, corresponds to the output Thévenin equivalent?",
    "choices": [
      "0.75 mA",
      "2 mA",
      "1.25 mA",
      "1 mA"
    ],
    "key": 1,
    "why": "Principle: Norton current equals the terminal short-circuit current or Vth/Rth. When the output is shorted, the lower resistor is bypassed.\n\nStep 1: The open-circuit voltage is Vth=6×5/(3+5)=3.75 V.\n\nStep 2: With the ideal source deactivated to a short, Rth=3∥5=1.875 kΩ.\n\nStep 3: Therefore IN=Vth/Rth=6/3=2 mA.\n\nAnswer: 2 mA.\n\nCheck and interpretation: The same result follows directly under an output short: all source current flows through the upper resistor and bypasses the lower resistor.",
    "family": "thevenin-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-anticausal-z-1",
    "topic": "signals",
    "prompt": "X(z)=1/(1−0.25z⁻¹) has ROC |z|<0.25. Find x[−2], rounded to four decimal places.",
    "choices": [
      "-0.0625",
      "-16",
      "16",
      "0"
    ],
    "key": 1,
    "why": "Principle: A rational z-transform needs its ROC to determine sidedness. ROC inside the pole corresponds to an anti-causal rather than a causal exponential.\n\nStep 1: For ROC |z|<a, the inverse is x[n]=−aⁿu[−n−1].\n\nStep 2: At n=−2 the unit step equals one.\n\nStep 3: Thus x[−2]=−(0.25)⁻²=−1/0.0625=-16.\n\nAnswer: -16.\n\nCheck and interpretation: Using the right-sided inverse aⁿu[n] would require ROC outside the pole and would give the wrong negative-time samples.",
    "family": "anticausal-z",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-fourier-time-scaling-1",
    "topic": "signals",
    "prompt": "For x(t)=e^(−3|t|), let y(t)=x(2t). Using X(ω)=∫x(t)e^(−jωt)dt, find Y(2), rounded to four decimal places.",
    "choices": [
      "0.4615",
      "0.3",
      "0.6",
      "0.2308"
    ],
    "key": 1,
    "why": "Principle: Time compression y(t)=x(bt) gives Y(ω)=X(ω/b)/|b|. For e^(−a|t|), the transform is 2a/(a²+ω²).\n\nStep 1: Here b=2, so Y(ω)=(1/2)X(ω/2).\n\nStep 2: Substitute the known transform: Y(ω)=a/[a²+(ω/2)²].\n\nStep 3: At ω=2, Y=3/[9+4/4]=0.3.\n\nAnswer: 0.3.\n\nCheck and interpretation: Compressing the signal halves its total area, so Y(0) must be half of X(0). Forgetting the 1/2 scale factor fails that check.",
    "family": "fourier-time-scaling",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-rectangle-convolution-1",
    "topic": "signals",
    "prompt": "Let x(t)=1 for 0≤t≤3 and zero otherwise. If y=x*x, find y(3.5).",
    "choices": [
      "3",
      "3.5",
      "2.5",
      "0.5"
    ],
    "key": 2,
    "why": "Principle: Convolution of two unit-height rectangular pulses equals the length of their overlap as one is shifted. The result is triangular.\n\nStep 1: The integrand is one when τ lies in both [0,3] and [t−3,t].\n\nStep 2: At t=3.5, these intervals overlap from 0.5 to 3.\n\nStep 3: The overlap length and hence the convolution value is 3−0.5=2.5.\n\nAnswer: 2.5.\n\nCheck and interpretation: The peak occurs at t equal to one pulse width and equals that width. The requested point is on the descending side, so its value is slightly below the peak.",
    "family": "rectangle-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-periodic-average-power-1",
    "topic": "signals",
    "prompt": "Find time-average power of x(t)=0.5+2cos(3t)+3sin(6t), assuming a 1 Ω normalization.",
    "choices": [
      "13.25",
      "6.625",
      "3",
      "6.75"
    ],
    "key": 3,
    "why": "Principle: Average signal power is the mean of |x(t)|² over a period. Distinct harmonics and DC are mutually orthogonal over a common period.\n\nStep 1: The DC term contributes 0.5²=0.25.\n\nStep 2: The two sinusoidal terms contribute 2²/2 and 3²/2. Cross terms average to zero.\n\nStep 3: Thus P=0.25+4/2+9/2=6.75.\n\nAnswer: 6.75.\n\nCheck and interpretation: A nonzero periodic signal has finite average power but infinite total energy. The 1 Ω normalization avoids an additional resistance factor.",
    "family": "periodic-average-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-circular-convolution-dc-1",
    "topic": "signals",
    "prompt": "Two length-5 sequences have every sample equal to 2 and 3, respectively. Find any sample of their length-5 circular convolution.",
    "choices": [
      "30",
      "6",
      "24",
      "150"
    ],
    "key": 0,
    "why": "Principle: An N-point circular convolution sums N products with indices wrapped modulo N. Constant sequences make every product identical.\n\nStep 1: Write y[r]=Σₘ₌₀ᴺ⁻¹x[m]h[(r−m) mod N].\n\nStep 2: Each term equals 2×3=6, independent of r and m.\n\nStep 3: There are 5 terms, so every output sample equals 5×6=30.\n\nAnswer: 30.\n\nCheck and interpretation: A DFT-domain derivation gives the same result: only the DC bins are nonzero, and the inverse transform contributes its 1/N factor.",
    "family": "circular-convolution-dc",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-white-noise-filter-1",
    "topic": "signals",
    "prompt": "Zero-mean discrete white noise with variance 2 enters a stable filter h[n]=(0.15)ⁿu[n]. Find the output variance, rounded to four decimal places.",
    "choices": [
      "2.3529",
      "1.955",
      "2",
      "2.046"
    ],
    "key": 3,
    "why": "Principle: For white input noise, distinct input samples are uncorrelated. Output variance is input variance multiplied by the sum of squared impulse-response coefficients.\n\nStep 1: Write σy²=σx²Σₙ|h[n]|².\n\nStep 2: Here Σₙ₌₀∞a²ⁿ=1/(1−a²), because |a|<1.\n\nStep 3: Therefore σy²=2/(1−0.15²)=2.046.\n\nAnswer: 2.046.\n\nCheck and interpretation: Using DC gain squared would incorrectly assume all noise samples add coherently. Whiteness eliminates the cross-covariance terms.",
    "family": "white-noise-filter",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-depletion-doping-1",
    "topic": "devices",
    "prompt": "For a one-sided abrupt p⁺n junction at fixed total junction potential, the lightly doped n-side concentration is multiplied by 1.5. By what factor does total depletion width change?",
    "choices": [
      "1.2247",
      "0.8165",
      "0.6667",
      "1.5"
    ],
    "key": 1,
    "why": "Principle: For a one-sided abrupt junction, depletion extends mainly into the lightly doped side, with W≈√[2ε(Vbi+VR)/(qND)]. Hold the total potential fixed as stated.\n\nStep 1: All quantities except ND are fixed, so W is proportional to ND⁻¹ᐟ².\n\nStep 2: With ND,new=1.5ND,old, form Wnew/Wold=√(ND,old/ND,new).\n\nStep 3: The width factor is 1/√1.5=0.8165.\n\nAnswer: 0.8165.\n\nCheck and interpretation: More doping requires less depleted distance to supply the compensating space charge. Fixing total junction potential avoids an extra built-in-potential change.",
    "family": "depletion-doping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-saturation-check-1",
    "topic": "devices",
    "prompt": "An nMOS source is grounded, gate held at 1.7 V, drain connected through 2.5 kΩ to 11 V. V_TH=0.5 V and I_D=(0.4/2)(V_GS−V_TH)² mA in saturation. Neglect channel-length modulation. Find V_DS in V.",
    "choices": [
      "11 V",
      "10.28 V",
      "9.56 V",
      "0.72 V"
    ],
    "key": 1,
    "why": "Principle: First compute the square-law saturation current, then the drain resistor drop. The result must satisfy VDS≥VGS−VTH to validate the assumed region.\n\nStep 1: Overdrive is VOV=1.7−0.5=1.2 V.\n\nStep 2: Saturation current is ID=0.2×(1.2)²=0.288 mA.\n\nStep 3: Drain voltage is VDS=11−0.288×2.5=10.28 V.\n\nStep 4: This exceeds the overdrive 1.2 V, so saturation is consistent.\n\nAnswer: 10.28 V.\n\nCheck and interpretation: Applying a saturation formula without checking the resulting VDS can produce an invalid bias solution. The supplied parameters keep the MOSFET in saturation.",
    "family": "mos-saturation-check",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-piecewise-diode-circuit-1",
    "topic": "devices",
    "prompt": "A 6 V source feeds a forward-oriented diode through 2 kΩ. The diode model is open when off and a constant 0.6 V drop when on. Find the circuit current in mA.",
    "choices": [
      "2.7 mA",
      "3 mA",
      "3.3 mA",
      "1.35 mA"
    ],
    "key": 0,
    "why": "Principle: A piecewise diode circuit is solved by assuming a state and checking it. The positive source can forward bias this series diode, so the on-state model applies.\n\nStep 1: Assume the diode is on, fixing its forward voltage at 0.6 V.\n\nStep 2: KVL gives resistor voltage VR=6−0.6=5.4 V.\n\nStep 3: The current is VR/R=5.4/2=2.7 mA, which is positive and validates the on state.\n\nAnswer: 2.7 mA.\n\nCheck and interpretation: The given constant-drop model differs from an ideal zero-drop diode and from the exponential Shockley model. Use the specified approximation consistently.",
    "family": "piecewise-diode-circuit",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-junction-capacitance-1",
    "topic": "devices",
    "prompt": "An abrupt junction has built-in potential 0.7 V and zero-bias depletion capacitance C₀. At reverse bias 2 V, find C_j/C₀ using the depletion approximation.",
    "choices": [
      "0.2593",
      "0.5092",
      "1.964",
      "0.3333"
    ],
    "key": 1,
    "why": "Principle: For an abrupt junction, depletion width grows as √(Vbi+VR), and capacitance varies inversely with depletion width. Hence Cj=C₀(1+VR/Vbi)⁻¹ᐟ².\n\nStep 1: At zero reverse bias the reference total potential is Vbi=0.7 V.\n\nStep 2: At the specified reverse bias it is 0.7+2=2.7 V.\n\nStep 3: Thus Cj/C₀=√[0.7/(0.7+2)]=0.5092.\n\nAnswer: 0.5092.\n\nCheck and interpretation: Reverse bias widens depletion and lowers capacitance, so the ratio must be below one. A linearly graded junction has a different exponent.",
    "family": "junction-capacitance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-drift-transit-1",
    "topic": "devices",
    "prompt": "An electron crosses 11 µm of uniform silicon under field magnitude 110 V/cm. Take mobility 1000 cm²/(V·s), ignore velocity saturation and diffusion. Find drift transit time in ns.",
    "choices": [
      "1000 ns",
      "0.1 ns",
      "10 ns",
      "100 ns"
    ],
    "key": 2,
    "why": "Principle: In the low-field mobility model, drift-speed magnitude is μE. Transit time is distance divided by speed, with consistent length units.\n\nStep 1: The speed magnitude is μE=1000×110=110000 cm/s.\n\nStep 2: Convert distance 11 µm to 0.0011 cm.\n\nStep 3: Time is L/v=1.0000e-8 s=10 ns.\n\nAnswer: 10 ns.\n\nCheck and interpretation: Electron drift direction is opposite the electric field, but the transit-time magnitude is positive. High-field velocity saturation is explicitly excluded.",
    "family": "drift-transit",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-emitter-current-1",
    "topic": "devices",
    "prompt": "An NPN transistor operates in forward-active mode with I_C=1.5 mA and β=90. Find emitter current in mA, rounded to four decimal places.",
    "choices": [
      "1.5167 mA",
      "1.5 mA",
      "1.4833 mA",
      "0.0167 mA"
    ],
    "key": 0,
    "why": "Principle: The emitter current is the sum of collector and base currents. Finite current gain β must be retained when an exact emitter-current value is requested.\n\nStep 1: Using β=IC/IB, the base current is IB=1.5/90=0.0167 mA.\n\nStep 2: By terminal-current conservation, IE=IC+IB.\n\nStep 3: Thus IE=1.5(1+1/90)=1.5167 mA.\n\nAnswer: 1.5167 mA.\n\nCheck and interpretation: Approximating IE≈IC is useful for large β but misses the base-current contribution asked for in this calculation.",
    "family": "bjt-emitter-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-miller-input-capacitance-1",
    "topic": "analog",
    "prompt": "A voltage amplifier has small-signal gain v_o/v_i=−12. A 1.5 pF capacitor connects its input and output. Under Miller’s theorem, find its equivalent input capacitance in pF.",
    "choices": [
      "1.5 pF",
      "19.5 pF",
      "16.5 pF",
      "1.625 pF"
    ],
    "key": 1,
    "why": "Principle: Miller’s theorem replaces an impedance bridging two nodes by separate grounded impedances when their voltage ratio is known. For a capacitor, Cin=C(1−Av).\n\nStep 1: The capacitor input current is C d(vi−vo)/dt.\n\nStep 2: With vo=−12vi, the voltage across it is (1+12)vi.\n\nStep 3: Thus Cin=1.5×13=19.5 pF.\n\nAnswer: 19.5 pF.\n\nCheck and interpretation: The inverting gain multiplies the input capacitance substantially. The smaller C(1−1/Av) term belongs to the output equivalent.",
    "family": "miller-input-capacitance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-cmrr-gain-1",
    "topic": "analog",
    "prompt": "A differential amplifier has differential voltage gain 120 and CMRR=62 dB. Find the magnitude of common-mode voltage gain, rounded to four decimal places.",
    "choices": [
      "0.0001",
      "10.491",
      "0.0953",
      "6"
    ],
    "key": 2,
    "why": "Principle: CMRR is the ratio of differential gain to common-mode gain. Since these are voltage gains, its decibel definition uses 20log₁₀.\n\nStep 1: CMRRlinear=10^(62/20).\n\nStep 2: Using CMRRlinear=|Ad/Ac|, rearrange |Ac|=|Ad|/CMRRlinear.\n\nStep 3: Therefore |Ac|=120/10^(62/20)=0.0953.\n\nAnswer: 0.0953.\n\nCheck and interpretation: Using 10log rather than 20log treats an amplitude ratio as a power ratio and gives a very different answer.",
    "family": "cmrr-gain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-cascaded-pole-bandwidth-1",
    "topic": "analog",
    "prompt": "Two identical, isolated, unity-DC-gain low-pass stages each have a single pole at 12 kHz. What is the overall −3 dB frequency in kHz?",
    "choices": [
      "7.7231 kHz",
      "12 kHz",
      "6 kHz",
      "8.4853 kHz"
    ],
    "key": 0,
    "why": "Principle: Cascaded magnitudes multiply. Two identical first-order responses produce total magnitude 1/[1+(f/fc)²], rather than a single-pole response.\n\nStep 1: For each stage, |H|=1/√[1+(f/12)²].\n\nStep 2: For the cascade, set 1/[1+(f/12)²]=1/√2 at −3 dB.\n\nStep 3: Then (f/12)²=√2−1, so f=12√(√2−1)=7.7231 kHz.\n\nAnswer: 7.7231 kHz.\n\nCheck and interpretation: At each individual pole frequency the cascade is already at −6 dB. Therefore its overall −3 dB frequency must be lower than the individual pole frequency.",
    "family": "cascaded-pole-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-input-loading-1",
    "topic": "analog",
    "prompt": "A common-emitter stage has gain v_o/v_b=-21, rπ=5 kΩ and bias resistance 12 kΩ to AC ground. An input source has series resistance 3 kΩ. Neglect other input effects. Find v_o/v_s.",
    "choices": [
      "-21",
      "-13.125",
      "-11.3514",
      "11.3514"
    ],
    "key": 2,
    "why": "Principle: Source resistance and amplifier input resistance form a voltage divider before the stage gain. The bias resistance loads rπ in parallel.\n\nStep 1: Input resistance is Rin=12∥5=3.5294 kΩ.\n\nStep 2: The base/source ratio is vb/vs=Rin/(Rs+Rin)=0.5405.\n\nStep 3: Multiply by the stage gain -21: vo/vs=-11.3514.\n\nAnswer: -11.3514.\n\nCheck and interpretation: The loaded gain magnitude is smaller than the specified base-to-output gain. Omitting the bias network overestimates input resistance and overall gain.",
    "family": "input-loading",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-series-feedback-input-1",
    "topic": "analog",
    "prompt": "A voltage-series negative-feedback amplifier has open-loop input resistance 3 kΩ and loop gain Aβ=12. Under the ideal feedback model, find closed-loop input resistance in kΩ.",
    "choices": [
      "0.2308 kΩ",
      "36 kΩ",
      "39 kΩ",
      "15 kΩ"
    ],
    "key": 2,
    "why": "Principle: Series mixing at the input reduces the error voltage for a given applied input, increasing input resistance by the feedback factor 1+Aβ.\n\nStep 1: The series-feedback resistance transformation is Rif=Ri(1+Aβ).\n\nStep 2: The feedback factor here is 1+12=13.\n\nStep 3: Therefore Rif=3×13=39 kΩ.\n\nAnswer: 39 kΩ.\n\nCheck and interpretation: Shunt mixing would instead reduce input resistance. The specified voltage-series topology is what determines the direction of the transformation.",
    "family": "series-feedback-input",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-schmitt-hysteresis-1",
    "topic": "analog",
    "prompt": "An ideal inverting Schmitt trigger has symmetric output saturation ±6 V. Its non-inverting input is a divider taking fraction β=2/(2+4) of the output, referenced to ground. Find hysteresis width in V.",
    "choices": [
      "2 V",
      "18 V",
      "8 V",
      "4 V"
    ],
    "key": 3,
    "why": "Principle: The positive-feedback divider sets two switching thresholds according to the present output state. Hysteresis width is the upper threshold minus the lower threshold.\n\nStep 1: When output is +6 V, threshold is +βVsat=+2 V.\n\nStep 2: When output is −6 V, threshold is −2 V.\n\nStep 3: Their difference is 2βVsat=2×(2/6)×6=4 V.\n\nAnswer: 4 V.\n\nCheck and interpretation: The single positive threshold is only half the hysteresis width because the saturation levels and divider reference are symmetric about zero.",
    "family": "schmitt-hysteresis",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-parity-function-count-1",
    "topic": "digital",
    "prompt": "An N-input XOR gate has N=4. Across all 2^N equally likely binary input words, how many make its output one?",
    "choices": [
      "15",
      "4",
      "8",
      "12"
    ],
    "key": 2,
    "why": "Principle: An XOR outputs one for odd input parity. The even- and odd-parity sets have the same size because flipping any fixed input bit pairs one with the other.\n\nStep 1: There are 2^4=16 possible words.\n\nStep 2: Flipping the first bit maps each even-parity word to one unique odd-parity word and vice versa.\n\nStep 3: Exactly half therefore have odd parity: 2^(4−1)=8.\n\nAnswer: 8.\n\nCheck and interpretation: XOR is not an OR gate: inputs with two ones have output zero. Counting all nonzero words would incorrectly include even-parity words.",
    "family": "parity-function-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-ripple-adder-delay-1",
    "topic": "digital",
    "prompt": "An 5-bit ripple-carry adder has carry propagation delay 1.1 ns per stage and final sum generation delay 2.1 ns after carry arrives. Ignore operand-to-carry startup delay. Find delay from carry-in to most-significant sum in ns.",
    "choices": [
      "7.6 ns",
      "10.5 ns",
      "4.4 ns",
      "6.5 ns"
    ],
    "key": 3,
    "why": "Principle: The most-significant sum depends on carry propagation through all lower stages, then the sum logic of the last stage. The stated model separates these delays.\n\nStep 1: A carry reaches the most-significant stage after 4 lower-stage carry delays.\n\nStep 2: This propagation takes 4×1.1=4.4 ns.\n\nStep 3: Add the final sum delay 2.1 ns to obtain 6.5 ns.\n\nAnswer: 6.5 ns.\n\nCheck and interpretation: The final carry-out path has a different endpoint. Counting n carry stages before generating the most-significant sum adds one stage too many.",
    "family": "ripple-adder-delay",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-hamming-parity-1",
    "topic": "digital",
    "prompt": "A binary single-error-correcting Hamming code protects 12 data bits. What is the minimum number of Hamming parity bits r satisfying 2^r≥m+r+1? Do not add an overall double-error-detection parity bit.",
    "choices": [
      "4",
      "6",
      "7",
      "5"
    ],
    "key": 3,
    "why": "Principle: The syndrome must identify every possible single-bit error among data and parity positions, plus the no-error case. Hence 2ʳ≥m+r+1.\n\nStep 1: For r=4, 2ʳ=16 is below m+r+1=17.\n\nStep 2: For r=5, 2ʳ=32 is at least m+r+1=18.\n\nStep 3: The minimum valid count is therefore 5 parity bits.\n\nAnswer: 5.\n\nCheck and interpretation: An extended SECDED code adds one overall parity bit, but that extra protection was explicitly excluded.",
    "family": "hamming-parity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-pipeline-latency-1",
    "topic": "digital",
    "prompt": "An ideal 5-stage pipeline has clock period 2.2 ns. Starting empty, it processes 25 instructions with no stalls and one completion per clock after filling. What is total time until all instructions finish?",
    "choices": [
      "275 ns",
      "63.8 ns",
      "55 ns",
      "66 ns"
    ],
    "key": 1,
    "why": "Principle: An initially empty ideal pipeline needs one full pipeline latency for the first instruction, then one cycle for each subsequent completion.\n\nStep 1: The first instruction finishes after 5 cycles.\n\nStep 2: The remaining 24 instructions each require one additional cycle, totaling 29 cycles.\n\nStep 3: Multiply by 2.2 ns/cycle to get 63.8 ns.\n\nAnswer: 63.8 ns.\n\nCheck and interpretation: Ignoring fill latency gives too small a result. Multiplying instruction count by stage count would describe fully serial execution without overlap.",
    "family": "pipeline-latency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-johnson-counter-1",
    "topic": "digital",
    "prompt": "An 5-flip-flop Johnson counter is initialized to all zero and operates in its intended cycle. How many distinct states occur before repetition?",
    "choices": [
      "10",
      "5",
      "32",
      "31"
    ],
    "key": 0,
    "why": "Principle: A Johnson counter feeds the complemented last-stage output into the first stage. Its intended cycle contains 2N states for N flip-flops.\n\nStep 1: Starting with all zeros, ones shift in for N=5 clocks until all stages are one.\n\nStep 2: Zeros then shift in for another 5 clocks, returning to all zero.\n\nStep 3: The cycle therefore contains 2×5=10 distinct states.\n\nAnswer: 10.\n\nCheck and interpretation: An ordinary ring counter has N intended states, while an unrestricted binary counter has 2ᴺ. Initialization matters because a Johnson counter can have other cycles.",
    "family": "johnson-counter",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-xor-probability-1",
    "topic": "digital",
    "prompt": "Independent binary signals A and B are each one with probability 0.15. What is the probability that A XOR B equals one?",
    "choices": [
      "0.255",
      "0.0225",
      "0.2775",
      "0.9775"
    ],
    "key": 0,
    "why": "Principle: XOR is one for exactly one asserted input: events (A=1,B=0) and (A=0,B=1). Independence permits multiplying probabilities in each case.\n\nStep 1: P(A=1,B=0)=0.15×0.85.\n\nStep 2: P(A=0,B=1)=0.85×0.15.\n\nStep 3: Add the disjoint cases: P(XOR=1)=2p(1−p)=0.255.\n\nAnswer: 0.255.\n\nCheck and interpretation: The union probability 2p−p² belongs to OR, which also accepts the both-one case. XOR excludes that case.",
    "family": "xor-probability",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-root-locus-breakaway-1",
    "topic": "control",
    "prompt": "For unity negative feedback with G(s)=K/[(s+2)(s+8)], K≥0, find the gain at the real-axis breakaway point.",
    "choices": [
      "25",
      "9",
      "3",
      "16"
    ],
    "key": 1,
    "why": "Principle: On the root locus, K=−(s+a)(s+b). A real-axis breakaway occurs where dK/ds=0, equivalently where the two real closed-loop roots merge.\n\nStep 1: Differentiate K(s) to get dK/ds=−[2s+10].\n\nStep 2: The stationary point is s=−10/2, between the two real open-loop poles.\n\nStep 3: Substituting gives Kbreak=(b−a)²/4=(8−2)²/4=9.\n\nAnswer: 9.\n\nCheck and interpretation: The same boundary follows by setting the characteristic quadratic discriminant to zero. Positive gain beyond it produces a complex-conjugate root pair.",
    "family": "root-locus-breakaway",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-lead-phase-1",
    "topic": "control",
    "prompt": "A lead compensator is G_c(s)=(1+sT)/(1+αsT), with α=0.15 and T>0. Find its maximum phase lead in degrees.",
    "choices": [
      "81.4692 degrees",
      "42.3426 degrees",
      "23.8287 degrees",
      "47.6574 degrees"
    ],
    "key": 3,
    "why": "Principle: For 0<α<1, a lead network has maximum phase φmax satisfying sinφmax=(1−α)/(1+α). The time constant sets the frequency of that maximum, not its angle.\n\nStep 1: Compute (1−α)/(1+α)=(1−0.15)/(1+0.15)=0.7391.\n\nStep 2: Apply inverse sine to obtain the angle in radians.\n\nStep 3: Convert to degrees: φmax=47.6574 degrees.\n\nAnswer: 47.6574 degrees.\n\nCheck and interpretation: The compensator pole is at a higher frequency than its zero, giving positive phase lead. Reversing the pole and zero would produce phase lag.",
    "family": "lead-phase",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-delay-margin-1",
    "topic": "control",
    "prompt": "A nominal loop has phase margin 35 degrees at its unique gain crossover 3 rad/s. A pure time delay is added, without changing loop magnitude. What delay in s exhausts that phase margin?",
    "choices": [
      "11.6667 s",
      "0.2036 s",
      "0.0324 s",
      "0.4072 s"
    ],
    "key": 1,
    "why": "Principle: A pure delay e^(−sτ) has unit magnitude and contributes phase −ωτ radians. At the unchanged gain crossover it consumes the available phase margin.\n\nStep 1: Convert phase margin to radians: PM=35π/180.\n\nStep 2: Set the added lag ωgcτ equal to that margin at the limiting boundary.\n\nStep 3: Then τmax=(35π/180)/3=0.2036 s.\n\nAnswer: 0.2036 s.\n\nCheck and interpretation: This is the zero-margin boundary, so a positive remaining margin requires a smaller delay. Mixing degrees with ωτ in radians is a common error.",
    "family": "delay-margin",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-controllability-determinant-1",
    "topic": "control",
    "prompt": "For A=[0 1; −2 −4] and B=[0; 1], find the determinant of the 2×2 controllability matrix [B AB].",
    "choices": [
      "-1",
      "0",
      "1",
      "2"
    ],
    "key": 0,
    "why": "Principle: A two-state system is controllable if [B AB] has full rank. For a square 2×2 controllability matrix, a nonzero determinant establishes full rank.\n\nStep 1: Multiply AB=[1; −4].\n\nStep 2: Thus [B AB]=[0 1; 1 −4].\n\nStep 3: Its determinant is 0×(−4)−1×1=−1, independent of 2 and 4.\n\nAnswer: -1.\n\nCheck and interpretation: The nonzero determinant proves controllability for these parameters. Stability of A is a separate property and is not the controllability criterion.",
    "family": "controllability-determinant",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-pi-ramp-error-1",
    "topic": "control",
    "prompt": "A plant 1/(s+2) is controlled by C(s)=3+5/s in unity negative feedback. Assuming stable closed loop, find unit-ramp steady-state error.",
    "choices": [
      "0.3333",
      "0.2",
      "0.4",
      "0.6"
    ],
    "key": 2,
    "why": "Principle: A PI controller adds an integrator to the loop. Ramp error is set by the velocity constant of the complete controller–plant product.\n\nStep 1: Loop transfer is L(s)=(3s+5)/[s(s+2)].\n\nStep 2: Kv=lim(s→0)sL(s)=5/2.\n\nStep 3: Thus unit-ramp error is 1/Kv=2/5=0.4.\n\nAnswer: 0.4.\n\nCheck and interpretation: The characteristic polynomial is s²+5s+5, with positive coefficients, confirming stability here. Proportional gain changes dynamics but not this ramp-error constant.",
    "family": "pi-ramp-error",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-second-order-peak-time-1",
    "topic": "control",
    "prompt": "A standard underdamped second-order system has ω_n=4 rad/s and ζ=0.25. Find first peak time after a unit step, in s.",
    "choices": [
      "0.7854 s",
      "1 s",
      "1.6223 s",
      "0.8112 s"
    ],
    "key": 3,
    "why": "Principle: The oscillatory part of a second-order step response uses damped natural frequency ωd=ωn√(1−ζ²). Its first peak occurs at π/ωd.\n\nStep 1: Compute ωd=4√(1−0.25²)=3.873 rad/s.\n\nStep 2: The first peak occurs when ωdt=π.\n\nStep 3: Therefore tp=π/3.873=0.8112 s.\n\nAnswer: 0.8112 s.\n\nCheck and interpretation: Using ωn directly neglects damping’s effect on oscillation frequency. Peak time differs from rise time and settling time.",
    "family": "second-order-peak-time",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-cascade-noise-figure-1",
    "topic": "comm",
    "prompt": "Two receiver stages have noise figures 2.5 dB and 6 dB. The first stage power gain is 12 dB. Find cascade noise figure in dB using Friis’ noise formula.",
    "choices": [
      "8.5 dB",
      "2.9367 dB",
      "2.5 dB",
      "3.0738 dB"
    ],
    "key": 1,
    "why": "Principle: Friis’ cascade-noise formula uses linear noise factors and linear power gain: Ftotal=F₁+(F₂−1)/G₁. Convert to dB only after combining.\n\nStep 1: Convert F₁=10^(2.5/10), F₂=10^(6/10) and G₁=10^(12/10).\n\nStep 2: Compute Ftotal=1.7783+(3.9811−1)/15.8489=1.9664.\n\nStep 3: Then NFtotal=10log₁₀(Ftotal)=2.9367 dB.\n\nAnswer: 2.9367 dB.\n\nCheck and interpretation: The first-stage gain suppresses the input-referred impact of later-stage noise. Noise figures in dB cannot simply be added.",
    "family": "cascade-noise-figure",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-bpsk-target-ebn0-1",
    "topic": "comm",
    "prompt": "For coherent BPSK in AWGN, P_b=Q(√(2E_b/N₀)). A target error probability has Q⁻¹(P_b)=2.25. What minimum linear E_b/N₀ meets this target?",
    "choices": [
      "5.0625",
      "2.5313",
      "10.125",
      "1.125"
    ],
    "key": 1,
    "why": "Principle: The Q function decreases with its argument, so meeting an upper limit on bit error probability requires a sufficiently large Eb/N0.\n\nStep 1: Set the Q-function argument to its target inverse: √(2Eb/N₀)=2.25.\n\nStep 2: Square both sides to get 2Eb/N₀=5.0625.\n\nStep 3: Thus the minimum linear ratio is Eb/N₀=5.0625/2=2.5313.\n\nAnswer: 2.5313.\n\nCheck and interpretation: This is a linear energy-to-noise-density ratio, not a dB value. A dB answer would require an additional 10log₁₀ operation.",
    "family": "bpsk-target-ebn0",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-selection-diversity-1",
    "topic": "comm",
    "prompt": "A receiver chooses the best of 3 independent diversity branches. Each branch is below the required SNR threshold with probability 0.07. Find total outage probability.",
    "choices": [
      "0.0003",
      "0.07",
      "0.21",
      "0.1956"
    ],
    "key": 0,
    "why": "Principle: Selection combining is in outage only when every candidate branch is below threshold. Independence makes the joint outage probability the product of branch probabilities.\n\nStep 1: Each branch has outage probability p=0.07.\n\nStep 2: The best branch fails only if all 3 branches fail simultaneously.\n\nStep 3: Therefore Pout=p^3=(0.07)^3=0.0003.\n\nAnswer: 0.0003.\n\nCheck and interpretation: The expression 1−(1−p)ᴸ instead means at least one branch fails, which is not an outage when another usable branch remains.",
    "family": "selection-diversity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-nyquist-pcm-rate-1",
    "topic": "comm",
    "prompt": "A real low-pass message is ideally bandlimited to 4 kHz. It is sampled at the ideal Nyquist rate and quantized to 6 bits/sample. Ignoring overhead, find raw PCM bit rate in kbit/s.",
    "choices": [
      "24 kbit/s",
      "48 kbit/s",
      "512 kbit/s",
      "8 kbit/s"
    ],
    "key": 1,
    "why": "Principle: The ideal Nyquist sampling rate is twice the highest baseband frequency. PCM bit rate is sample rate multiplied by bits per sample.\n\nStep 1: Minimum ideal sampling rate is fs=2×4=8 ksample/s.\n\nStep 2: Each sample contributes 6 binary digits.\n\nStep 3: Raw bit rate is 8×6=48 kbit/s.\n\nAnswer: 48 kbit/s.\n\nCheck and interpretation: The number of quantization levels is 2ᴺ, but each sample carries N bits, not 2ᴺ bits. Practical anti-alias filtering may require a higher sample rate.",
    "family": "nyquist-pcm-rate",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-filtered-awgn-variance-1",
    "topic": "comm",
    "prompt": "Continuous-time white Gaussian noise has two-sided PSD N₀/2 with N₀=0.25. It enters a filter h(t)=e^(−2t)u(t). Find output noise variance.",
    "choices": [
      "0.0625",
      "0.125",
      "0.0156",
      "0.0313"
    ],
    "key": 3,
    "why": "Principle: For white noise with two-sided PSD N₀/2, filter output variance is (N₀/2)∫|h(t)|²dt. The impulse-response energy supplies the noise gain.\n\nStep 1: The impulse-response energy is ∫₀∞e^(−4t)dt=1/4.\n\nStep 2: Multiply by N₀/2=0.125.\n\nStep 3: Thus σout²=N₀/(4a)=0.25/(4×2)=0.0313.\n\nAnswer: 0.0313.\n\nCheck and interpretation: The two-sided PSD convention is specified to avoid a factor-of-two ambiguity. Replacing impulse-response energy by DC gain squared is not valid for white input noise.",
    "family": "filtered-awgn-variance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-binary-map-threshold-1",
    "topic": "comm",
    "prompt": "A receiver observes r=s+n, where s=+1.5 with prior 0.19 or −1.5 otherwise. Noise is zero-mean Gaussian with variance 0.6. With equal error costs, decide +1.5 if r exceeds what MAP threshold?",
    "choices": [
      "0",
      "0.29",
      "-0.29",
      "0.58"
    ],
    "key": 1,
    "why": "Principle: The MAP detector compares posterior probabilities. Equal-variance Gaussian likelihoods lead to a linear observation threshold adjusted by the prior odds.\n\nStep 1: Log likelihood ratio is ln[p(r|+A)/p(r|−A)]=2Ar/σ².\n\nStep 2: MAP selects +A when this exceeds ln[P(−A)/P(+A)]=ln(0.81/0.19).\n\nStep 3: Thus threshold γ=σ²/(2A) ln[(1−p)/p]=0.29.\n\nAnswer: 0.29.\n\nCheck and interpretation: The positive symbol is less probable here, so the threshold is positive and favors the negative symbol unless the observation provides sufficient evidence.",
    "family": "binary-map-threshold",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-dielectric-boundary-reflection-1",
    "topic": "em",
    "prompt": "A plane wave in free space is normally incident on a lossless nonmagnetic dielectric with ε_r=3. What percentage of incident power is reflected?",
    "choices": [
      "26.7949 %",
      "92.8203 %",
      "3.5898 %",
      "7.1797 %"
    ],
    "key": 3,
    "why": "Principle: At normal incidence, electric-field reflection is Γ=(η₂−η₁)/(η₂+η₁). Reflected power in the incident medium is |Γ|² times incident power.\n\nStep 1: For μr=1, η₂=η₀/√3 and η₁=η₀.\n\nStep 2: Cancel η₀ to obtain Γ=(1−√3)/(1+√3).\n\nStep 3: The reflected percentage is 100Γ²=7.1797%.\n\nAnswer: 7.1797 %.\n\nCheck and interpretation: The electric reflection coefficient is negative because the second medium has lower impedance. Power reflection is nevertheless nonnegative after squaring.",
    "family": "dielectric-boundary-reflection",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-shorted-line-reactance-1",
    "topic": "em",
    "prompt": "A lossless 45 Ω line is short-circuited at its load and has electrical length 15 degrees. Find input reactance X in Ω, where Z_in=jX.",
    "choices": [
      "-12.0577 Ω",
      "167.9423 Ω",
      "11.6469 Ω",
      "12.0577 Ω"
    ],
    "key": 3,
    "why": "Principle: The input impedance of a short-circuited lossless line is Zin=jZ₀tan(βl). Electrical length supplies βl directly.\n\nStep 1: Use βl=15 degrees=15π/180 radians.\n\nStep 2: Evaluate tan(βl)=0.2679.\n\nStep 3: Multiply by Z₀: X=45×0.2679=12.0577 Ω.\n\nAnswer: 12.0577 Ω.\n\nCheck and interpretation: For an electrical length between zero and 90 degrees, the shorted stub appears inductive, so X is positive. An open-circuit stub uses a negative cotangent relation.",
    "family": "shorted-line-reactance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-quarter-wave-matching-1",
    "topic": "em",
    "prompt": "A real 30 Ω source resistance is to be matched to a real 110 Ω load using a lossless quarter-wave transformer. What characteristic impedance is required, in Ω?",
    "choices": [
      "70 Ω",
      "3300 Ω",
      "57.4456 Ω",
      "80 Ω"
    ],
    "key": 2,
    "why": "Principle: A quarter-wave transformer presents Zin=Zt²/RL. A match requires this input resistance to equal the source resistance.\n\nStep 1: Set Rs=Zt²/RL.\n\nStep 2: Rearrange to Zt²=RsRL=30×110=3300.\n\nStep 3: Take the positive root: Zt=√3300=57.4456 Ω.\n\nAnswer: 57.4456 Ω.\n\nCheck and interpretation: The transformer impedance is the geometric mean of the two real resistances. The match holds at the design electrical length rather than over all frequencies.",
    "family": "quarter-wave-matching",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-displacement-current-1",
    "topic": "em",
    "prompt": "An ideal parallel-plate capacitor has C=3 nF and applied voltage v(t)=11cos(1200t) V. What is peak displacement current in mA? Ignore fringing and leakage.",
    "choices": [
      "0.0198 mA",
      "0.0396 mA",
      "0.0792 mA",
      "0 mA"
    ],
    "key": 1,
    "why": "Principle: The displacement current through an ideal capacitor equals its terminal current i=C dv/dt. For a sinusoid its peak magnitude is CωVpeak.\n\nStep 1: Differentiate v(t): dv/dt=−13200sin(1200t) V/s.\n\nStep 2: Multiply peak slope by C=3×10⁻⁹ F.\n\nStep 3: Convert A to mA to obtain Ipeak=0.0396 mA.\n\nAnswer: 0.0396 mA.\n\nCheck and interpretation: The given angular frequency needs no additional 2π. Average current is zero over a cycle, while peak displacement current is nonzero.",
    "family": "displacement-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-antenna-aperture-1",
    "topic": "em",
    "prompt": "An antenna has linear gain 3 at wavelength 0.12 m. For perfect polarization matching, find maximum effective aperture in cm² using A_e=Gλ²/(4π).",
    "choices": [
      "0.0034 cm²",
      "34.3775 cm²",
      "432 cm²",
      "17.1887 cm²"
    ],
    "key": 1,
    "why": "Principle: Antenna gain and maximum receiving effective area are related by Ae=Gλ²/(4π). The gain must be a linear value.\n\nStep 1: Compute Gλ²=3×(0.12)²=0.0432 m².\n\nStep 2: Divide by 4π to get aperture in square metres.\n\nStep 3: Since 1 m²=10000 cm², the result is 34.3775 cm².\n\nAnswer: 34.3775 cm².\n\nCheck and interpretation: Effective aperture is a receiving-area measure and need not equal the antenna’s physical geometric area. The square-unit conversion requires 10000 rather than 100.",
    "family": "antenna-aperture",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-conductor-field-decay-1",
    "topic": "em",
    "prompt": "Inside a good conductor, field magnitude follows |E(z)|=|E(0)|e^(−z/δ) with skin depth δ=12 µm. At what depth in µm does field magnitude fall to 0.12 of its surface value?",
    "choices": [
      "100 µm",
      "12.7216 µm",
      "25.4432 µm",
      "50.8863 µm"
    ],
    "key": 2,
    "why": "Principle: Skin depth governs exponential field-amplitude attenuation. Solve the stated ratio by taking a natural logarithm.\n\nStep 1: Set e^(−z/12)=0.12.\n\nStep 2: Taking ln gives −z/12=ln(0.12).\n\nStep 3: Hence z=−12ln(0.12)=25.4432 µm.\n\nAnswer: 25.4432 µm.\n\nCheck and interpretation: This uses a field-amplitude ratio. Power falls with the square of field, so reaching the same numerical power fraction would require half this depth.",
    "family": "conductor-field-decay",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-repeated-mixture-1",
    "topic": "apt",
    "prompt": "A tank contains 22 L of pure concentrate. 3 L is removed and replaced by water, the mixture is stirred, and the same removal/replacement is repeated once. What percentage of the final mixture is concentrate?",
    "choices": [
      "72.7273 %",
      "74.5868 %",
      "86.3636 %",
      "25.4132 %"
    ],
    "key": 1,
    "why": "Principle: Every replacement retains the same fraction of whatever concentrate was present before that operation. Stirring makes the removed mixture representative of the tank.\n\nStep 1: One operation retains fraction 1−3/22 of the concentrate.\n\nStep 2: Two operations retain fraction (1−3/22)².\n\nStep 3: The tank returns to its original total volume each time, so final concentrate percentage is 74.5868%.\n\nAnswer: 74.5868 %.\n\nCheck and interpretation: The second removal contains some water, so it removes less concentrate than the first. Subtracting twice the first removed concentration overstates the loss.",
    "family": "repeated-mixture",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-adjacent-arrangement-1",
    "topic": "apt",
    "prompt": "5 distinct people stand in a uniformly random row. What is the probability that two specified people are adjacent?",
    "choices": [
      "0.2",
      "0.4",
      "0.5",
      "0.8"
    ],
    "key": 1,
    "why": "Principle: For adjacency counting, treat the two specified people as a block, then allow both orders inside the block. Divide favorable permutations by all permutations.\n\nStep 1: All arrangements number 5!.\n\nStep 2: Combine the specified pair into one block, leaving 4 objects with (4)! orders. The pair has two internal orders.\n\nStep 3: Thus probability=2(4)!/5!=2/5=0.4.\n\nAnswer: 0.4.\n\nCheck and interpretation: The pair can occupy any neighboring positions, not just an endpoint pair. The two internal orders must both be counted.",
    "family": "adjacent-arrangement",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-boat-round-trip-1",
    "topic": "apt",
    "prompt": "A boat moves at 11 km/h in still water and the current is 2.5 km/h. It travels 22 km downstream and returns the same distance upstream. What is total travel time in hours?",
    "choices": [
      "4.2179 hours",
      "4 hours",
      "3.2593 hours",
      "5.1765 hours"
    ],
    "key": 0,
    "why": "Principle: Current adds to speed downstream and subtracts upstream. Compute each travel time separately before adding.\n\nStep 1: Downstream speed is 11+2.5=13.5 km/h.\n\nStep 2: Upstream speed is 11−2.5=8.5 km/h, positive for these data.\n\nStep 3: Total time is 22/13.5+22/8.5=4.2179 hours.\n\nAnswer: 4.2179 hours.\n\nCheck and interpretation: The current slows the overall equal-distance round trip relative to travel in still water. The faster leg does not cancel the extra time spent on the slower leg.",
    "family": "boat-round-trip",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-opposite-trains-1",
    "topic": "apt",
    "prompt": "Trains of lengths 110 m and 160 m travel toward each other at 39.6 km/h and 57.6 km/h. How many seconds pass from their fronts meeting until they completely cross?",
    "choices": [
      "10 s",
      "54 s",
      "4.0741 s",
      "2.7778 s"
    ],
    "key": 0,
    "why": "Principle: For opposite directions, relative speed is the sum of speeds. Complete crossing requires relative motion through the sum of both lengths.\n\nStep 1: Combined length is 110+160=270 m.\n\nStep 2: Relative speed is (39.6+57.6)/3.6=27 m/s.\n\nStep 3: Crossing time is 270/27=10 s.\n\nAnswer: 10 s.\n\nCheck and interpretation: Subtracting speeds would apply to overtaking in the same direction. Counting just one train’s length would stop before both trains fully clear each other.",
    "family": "opposite-trains",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-weighted-group-average-1",
    "topic": "apt",
    "prompt": "A class of 22 students has mean score 61; another of 31 has mean score 71. What is the mean score when the classes are combined?",
    "choices": [
      "66",
      "65.1509",
      "132",
      "66.8491"
    ],
    "key": 3,
    "why": "Principle: A combined mean is weighted by group size. Recover each group’s total score before pooling.\n\nStep 1: First total score is 22×61=1342.\n\nStep 2: Second total score is 31×71=2201.\n\nStep 3: Divide the total 3543 by 53 students to obtain 66.8491.\n\nAnswer: 66.8491.\n\nCheck and interpretation: The result lies between the two class means and is closer to the mean of the larger class. A simple average of class means requires equal class sizes.",
    "family": "weighted-group-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-logarithm-equation-1",
    "topic": "apt",
    "prompt": "For real x>2, solve log₂(x−2)+log₂(x+2)=log₂(21).",
    "choices": [
      "2",
      "7",
      "4.5826",
      "5"
    ],
    "key": 3,
    "why": "Principle: For positive arguments, the sum of logarithms equals the logarithm of the product. The domain restriction must be checked after solving the resulting quadratic.\n\nStep 1: Combine the left side as log₂[(x−2)(x+2)].\n\nStep 2: Equate arguments: x²−4=21, giving x²=25.\n\nStep 3: The algebraic roots are ±5, but only +5 satisfies x>2.\n\nAnswer: 5.\n\nCheck and interpretation: The negative root is extraneous to the logarithm domain even though it satisfies the squared equation. Ignoring domain conditions can produce an invalid second answer.",
    "family": "logarithm-equation",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-bayes-detector-2",
    "topic": "math",
    "prompt": "A fault occurs with probability 0.02. A detector reports positive with probability 0.9 when faulty and 0.05 when healthy. Given a positive report, find the probability of a fault.",
    "choices": [
      "0.2687",
      "0.9",
      "0.02",
      "0.018"
    ],
    "key": 0,
    "why": "Principle: Bayes’ theorem combines likelihood with the prior fault probability. A positive detector report can come from a real fault or a false alarm.\n\nStep 1: True-positive probability is 0.9×0.02=0.018.\n\nStep 2: Total positive probability is 0.9×0.02+0.05×0.98=0.067.\n\nStep 3: Normalize the true-positive term by the total to obtain 0.2687.\n\nAnswer: 0.2687.\n\nCheck and interpretation: Sensitivity alone is not the posterior fault probability. When faults are rare, healthy components can contribute many false positives.",
    "family": "bayes-detector",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-inverse-trace-2",
    "topic": "math",
    "prompt": "An invertible 2×2 matrix A has trace 9 and determinant 18. Find trace(A⁻¹), rounded to four decimal places.",
    "choices": [
      "2",
      "9",
      "0.0556",
      "0.5"
    ],
    "key": 3,
    "why": "Principle: The eigenvalues of an inverse matrix are reciprocals of the original eigenvalues. Their sum is the original eigenvalue sum divided by the original product.\n\nStep 1: Let the eigenvalues be λ₁ and λ₂ with λ₁+λ₂=9 and λ₁λ₂=18.\n\nStep 2: Then trace(A⁻¹)=1/λ₁+1/λ₂=(λ₁+λ₂)/(λ₁λ₂).\n\nStep 3: Substitute the given invariants: 9/18=0.5.\n\nAnswer: 0.5.\n\nCheck and interpretation: The determinant is nonzero, so the inverse exists. Taking the reciprocal of the trace would not in general equal the trace of the inverse.",
    "family": "inverse-trace",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-residue-contour-2",
    "topic": "math",
    "prompt": "C is the counterclockwise circle |z|=4. For f(z)=1/[(z−3)(z−6)], what real coefficient c satisfies ∮_C f(z)dz=2πj c?",
    "choices": [
      "0.3333",
      "-0.3333",
      "-0.6667",
      "0"
    ],
    "key": 1,
    "why": "Principle: The residue theorem gives a contour integral as 2πj times the sum of residues of poles strictly inside a positively oriented contour.\n\nStep 1: The poles are z=3 and z=6. Only 3 lies inside |z|=4.\n\nStep 2: The simple-pole residue at z=3 is lim(z→3)(z−3)f(z)=1/(3−6).\n\nStep 3: Thus the integral is 2πj×(-0.3333), and c=-0.3333.\n\nAnswer: -0.3333.\n\nCheck and interpretation: The outside pole contributes no residue to this contour. Reversing the contour orientation would reverse the sign, but the stated orientation is counterclockwise.",
    "family": "residue-contour",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-ode-initial-value-2",
    "topic": "math",
    "prompt": "For t≥0, y′+3y=7, with y(0)=3. Find y(1/3), rounded to four decimal places.",
    "choices": [
      "2.3333",
      "1.1036",
      "5.3333",
      "2.5786"
    ],
    "key": 3,
    "why": "Principle: A first-order linear differential equation has a constant particular solution plus an exponentially decaying homogeneous solution. The initial condition fixes the decay coefficient.\n\nStep 1: At equilibrium, y∞=7/3. The homogeneous term is Ce^(−3t).\n\nStep 2: Apply y(0)=3 to get C=3−7/3.\n\nStep 3: At t=1/3, the exponential is e⁻¹, giving y=7/3+(3−7/3)e⁻¹=2.5786.\n\nAnswer: 2.5786.\n\nCheck and interpretation: Discarding the initial condition would leave only the final value. The result lies between the initial value and the equilibrium because the decay factor is between zero and one.",
    "family": "ode-initial-value",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-correlated-variance-2",
    "topic": "math",
    "prompt": "Random variables X and Y have variances 3 and 5, and covariance 0.5. Find Var(2X−Y).",
    "choices": [
      "17",
      "15",
      "7",
      "19"
    ],
    "key": 1,
    "why": "Principle: For correlated variables, Var(aX+bY)=a²Var(X)+b²Var(Y)+2abCov(X,Y). The cross term changes sign when the coefficients have opposite signs.\n\nStep 1: Here a=2 and b=−1, so the individual variance contribution is 4×3+5=17.\n\nStep 2: The covariance contribution is 2×2×(−1)×0.5=−2.\n\nStep 3: Adding them gives Var(2X−Y)=15.\n\nAnswer: 15.\n\nCheck and interpretation: Independence was not stated and would contradict the nonzero covariance. The negative coefficient on Y does not make its own variance term negative.",
    "family": "correlated-variance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-newton-step-2",
    "topic": "math",
    "prompt": "Newton–Raphson is used to solve x²−4=0 starting at x₀=3. What is x₁, rounded to four decimal places?",
    "choices": [
      "1.3333",
      "2.1667",
      "-2",
      "2"
    ],
    "key": 1,
    "why": "Principle: Newton–Raphson updates x through xnew=x−f(x)/f′(x). A single update is generally an approximation, not the exact root.\n\nStep 1: For f(x)=x²−4, f′(x)=2x.\n\nStep 2: At x₀=3, f(x₀)=5 and f′(x₀)=6.\n\nStep 3: Thus x₁=3−(5)/6=(3+4/3)/2=2.1667.\n\nAnswer: 2.1667.\n\nCheck and interpretation: Using the exact square root would answer a different question: this asks for one algorithmic iteration from the specified starting point.",
    "family": "newton-step",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-dependent-input-resistance-2",
    "topic": "networks",
    "prompt": "A one-port has resistor R=4 kΩ to ground in parallel with an upward controlled current source g v/R, where v is port voltage and g=0.14. Find the input resistance in kΩ.",
    "choices": [
      "4.6512 kΩ",
      "3.44 kΩ",
      "3.5088 kΩ",
      "28.5714 kΩ"
    ],
    "key": 0,
    "why": "Principle: Input resistance with dependent sources must be obtained from a test voltage or current while retaining the dependent source. The upward source opposes current drawn through the resistor.\n\nStep 1: Apply test voltage v. Resistor current entering the network is v/R.\n\nStep 2: The controlled source supplies g v/R toward the port, so net entering current is i=(1−g)v/R.\n\nStep 3: Therefore Rin=v/i=R/(1−g)=4/(1−0.14)=4.6512 kΩ.\n\nAnswer: 4.6512 kΩ.\n\nCheck and interpretation: Turning off a dependent source would incorrectly leave only R. Since 0<g<1, the input resistance is positive and exceeds R.",
    "family": "dependent-input-resistance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-nodal-two-sources-2",
    "topic": "networks",
    "prompt": "A node is connected through 3 kΩ to a fixed 12 V node, through 5 kΩ to a fixed 6 V node, and through 6 kΩ to ground. Find its voltage in V.",
    "choices": [
      "9 V",
      "8 V",
      "3.2727 V",
      "7.4286 V"
    ],
    "key": 3,
    "why": "Principle: Nodal analysis applies KCL using each branch’s voltage difference divided by resistance. The unknown node is not an unloaded two-resistor divider.\n\nStep 1: Write (v−12)/3+(v−6)/5+v/6=0, using kΩ and mA.\n\nStep 2: Collect v terms: v(1/3+1/5+1/6)=12/3+6/5.\n\nStep 3: Divide the source-current sum by total conductance to get v=7.4286 V.\n\nAnswer: 7.4286 V.\n\nCheck and interpretation: The ground branch loads both source paths. Ignoring either fixed-voltage source changes the node equation and gives a different voltage.",
    "family": "nodal-two-sources",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-series-capacitor-energy-2",
    "topic": "networks",
    "prompt": "Initially uncharged capacitors 4 µF and 6 µF are connected in series across 14 V DC and allowed to settle. Find total stored electrostatic energy in µJ.",
    "choices": [
      "980 µJ",
      "235.2 µJ",
      "470.4 µJ",
      "392 µJ"
    ],
    "key": 1,
    "why": "Principle: Series capacitors carry equal charge and have equivalent capacitance Ceq=C₁C₂/(C₁+C₂). Their total stored energy is CeqV²/2.\n\nStep 1: Compute Ceq=4×6/(4+6)=2.4 µF.\n\nStep 2: The total terminal voltage is 14 V.\n\nStep 3: Energy is (1/2)×2.4×14²=235.2 µJ, since µF·V² gives µJ.\n\nAnswer: 235.2 µJ.\n\nCheck and interpretation: Using C₁+C₂ would treat the connection as parallel. The smaller capacitor has the larger voltage, but the equivalent capacitance already accounts for voltage division.",
    "family": "series-capacitor-energy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rlc-critical-damping-2",
    "topic": "networks",
    "prompt": "A source-free series RLC circuit has L=4 mH and C=6 µF. Find the total series resistance needed for critical damping in Ω.",
    "choices": [
      "25.8199 Ω",
      "103.2796 Ω",
      "51.6398 Ω",
      "0.8165 Ω"
    ],
    "key": 2,
    "why": "Principle: The series RLC natural polynomial is s²+(R/L)s+1/(LC). Critical damping occurs when the repeated-root condition α=ω₀ holds.\n\nStep 1: Identify α=R/(2L) and ω₀=1/√(LC).\n\nStep 2: Equating them gives Rcrit=2√(L/C).\n\nStep 3: Convert the given values to H and F, then calculate 2√[4×10⁻³/(6×10⁻⁶)]=51.6398 Ω.\n\nAnswer: 51.6398 Ω.\n\nCheck and interpretation: The factor two is essential. The parallel-RLC critical-resistance relation has a different form because its damping coefficient depends inversely on resistance.",
    "family": "rlc-critical-damping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-nonsinusoidal-rms-2",
    "topic": "networks",
    "prompt": "A current is i(t)=3+5cos(100t)+5sin(200t) A. Find RMS current over a common period, rounded to four decimal places.",
    "choices": [
      "5.4314 A",
      "10.0711 A",
      "7.6811 A",
      "5.831 A"
    ],
    "key": 3,
    "why": "Principle: RMS is the square root of the mean square. Orthogonal harmonics have zero average cross products over a common period, while the DC contribution is not halved.\n\nStep 1: The DC mean-square contribution is 3²=9.\n\nStep 2: Each sinusoid contributes half its squared peak amplitude: (5²+5²)/2=25.\n\nStep 3: Add contributions and take the square root: Irms=√34=5.831 A.\n\nAnswer: 5.831 A.\n\nCheck and interpretation: Adding the individual RMS values is invalid for orthogonal harmonics. The DC term must retain its full squared value.",
    "family": "nonsinusoidal-rms",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-thevenin-divider-2",
    "topic": "networks",
    "prompt": "An ideal 7 V source drives series resistors 4 kΩ and 6 kΩ. The output terminals are across the lower 6 kΩ resistor. What Norton short-circuit current, in mA, corresponds to the output Thévenin equivalent?",
    "choices": [
      "0.7 mA",
      "1.05 mA",
      "1.75 mA",
      "0.875 mA"
    ],
    "key": 2,
    "why": "Principle: Norton current equals the terminal short-circuit current or Vth/Rth. When the output is shorted, the lower resistor is bypassed.\n\nStep 1: The open-circuit voltage is Vth=7×6/(4+6)=4.2 V.\n\nStep 2: With the ideal source deactivated to a short, Rth=4∥6=2.4 kΩ.\n\nStep 3: Therefore IN=Vth/Rth=7/4=1.75 mA.\n\nAnswer: 1.75 mA.\n\nCheck and interpretation: The same result follows directly under an output short: all source current flows through the upper resistor and bypasses the lower resistor.",
    "family": "thevenin-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-anticausal-z-2",
    "topic": "signals",
    "prompt": "X(z)=1/(1−0.3z⁻¹) has ROC |z|<0.3. Find x[−2], rounded to four decimal places.",
    "choices": [
      "-0.09",
      "11.1111",
      "-11.1111",
      "0"
    ],
    "key": 2,
    "why": "Principle: A rational z-transform needs its ROC to determine sidedness. ROC inside the pole corresponds to an anti-causal rather than a causal exponential.\n\nStep 1: For ROC |z|<a, the inverse is x[n]=−aⁿu[−n−1].\n\nStep 2: At n=−2 the unit step equals one.\n\nStep 3: Thus x[−2]=−(0.3)⁻²=−1/0.09=-11.1111.\n\nAnswer: -11.1111.\n\nCheck and interpretation: Using the right-sided inverse aⁿu[n] would require ROC outside the pole and would give the wrong negative-time samples.",
    "family": "anticausal-z",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-fourier-time-scaling-2",
    "topic": "signals",
    "prompt": "For x(t)=e^(−4|t|), let y(t)=x(2t). Using X(ω)=∫x(t)e^(−jωt)dt, find Y(3), rounded to four decimal places.",
    "choices": [
      "0.32",
      "0.4384",
      "0.2192",
      "0.16"
    ],
    "key": 2,
    "why": "Principle: Time compression y(t)=x(bt) gives Y(ω)=X(ω/b)/|b|. For e^(−a|t|), the transform is 2a/(a²+ω²).\n\nStep 1: Here b=2, so Y(ω)=(1/2)X(ω/2).\n\nStep 2: Substitute the known transform: Y(ω)=a/[a²+(ω/2)²].\n\nStep 3: At ω=3, Y=4/[16+9/4]=0.2192.\n\nAnswer: 0.2192.\n\nCheck and interpretation: Compressing the signal halves its total area, so Y(0) must be half of X(0). Forgetting the 1/2 scale factor fails that check.",
    "family": "fourier-time-scaling",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-rectangle-convolution-2",
    "topic": "signals",
    "prompt": "Let x(t)=1 for 0≤t≤4 and zero otherwise. If y=x*x, find y(4.5).",
    "choices": [
      "4",
      "4.5",
      "0.5",
      "3.5"
    ],
    "key": 3,
    "why": "Principle: Convolution of two unit-height rectangular pulses equals the length of their overlap as one is shifted. The result is triangular.\n\nStep 1: The integrand is one when τ lies in both [0,4] and [t−4,t].\n\nStep 2: At t=4.5, these intervals overlap from 0.5 to 4.\n\nStep 3: The overlap length and hence the convolution value is 4−0.5=3.5.\n\nAnswer: 3.5.\n\nCheck and interpretation: The peak occurs at t equal to one pulse width and equals that width. The requested point is on the descending side, so its value is slightly below the peak.",
    "family": "rectangle-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-periodic-average-power-2",
    "topic": "signals",
    "prompt": "Find time-average power of x(t)=1+3cos(3t)+4sin(6t), assuming a 1 Ω normalization.",
    "choices": [
      "13.5",
      "26",
      "13",
      "4.5"
    ],
    "key": 0,
    "why": "Principle: Average signal power is the mean of |x(t)|² over a period. Distinct harmonics and DC are mutually orthogonal over a common period.\n\nStep 1: The DC term contributes 1²=1.\n\nStep 2: The two sinusoidal terms contribute 3²/2 and 4²/2. Cross terms average to zero.\n\nStep 3: Thus P=1+9/2+16/2=13.5.\n\nAnswer: 13.5.\n\nCheck and interpretation: A nonzero periodic signal has finite average power but infinite total energy. The 1 Ω normalization avoids an additional resistance factor.",
    "family": "periodic-average-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-circular-convolution-dc-2",
    "topic": "signals",
    "prompt": "Two length-6 sequences have every sample equal to 3 and 4, respectively. Find any sample of their length-6 circular convolution.",
    "choices": [
      "12",
      "72",
      "60",
      "432"
    ],
    "key": 1,
    "why": "Principle: An N-point circular convolution sums N products with indices wrapped modulo N. Constant sequences make every product identical.\n\nStep 1: Write y[r]=Σₘ₌₀ᴺ⁻¹x[m]h[(r−m) mod N].\n\nStep 2: Each term equals 3×4=12, independent of r and m.\n\nStep 3: There are 6 terms, so every output sample equals 6×12=72.\n\nAnswer: 72.\n\nCheck and interpretation: A DFT-domain derivation gives the same result: only the DC bins are nonzero, and the inverse transform contributes its 1/N factor.",
    "family": "circular-convolution-dc",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-white-noise-filter-2",
    "topic": "signals",
    "prompt": "Zero-mean discrete white noise with variance 3 enters a stable filter h[n]=(0.2)ⁿu[n]. Find the output variance, rounded to four decimal places.",
    "choices": [
      "3.125",
      "3.75",
      "2.88",
      "3"
    ],
    "key": 0,
    "why": "Principle: For white input noise, distinct input samples are uncorrelated. Output variance is input variance multiplied by the sum of squared impulse-response coefficients.\n\nStep 1: Write σy²=σx²Σₙ|h[n]|².\n\nStep 2: Here Σₙ₌₀∞a²ⁿ=1/(1−a²), because |a|<1.\n\nStep 3: Therefore σy²=3/(1−0.2²)=3.125.\n\nAnswer: 3.125.\n\nCheck and interpretation: Using DC gain squared would incorrectly assume all noise samples add coherently. Whiteness eliminates the cross-covariance terms.",
    "family": "white-noise-filter",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-depletion-doping-2",
    "topic": "devices",
    "prompt": "For a one-sided abrupt p⁺n junction at fixed total junction potential, the lightly doped n-side concentration is multiplied by 2. By what factor does total depletion width change?",
    "choices": [
      "1.4142",
      "0.5",
      "0.7071",
      "2"
    ],
    "key": 2,
    "why": "Principle: For a one-sided abrupt junction, depletion extends mainly into the lightly doped side, with W≈√[2ε(Vbi+VR)/(qND)]. Hold the total potential fixed as stated.\n\nStep 1: All quantities except ND are fixed, so W is proportional to ND⁻¹ᐟ².\n\nStep 2: With ND,new=2ND,old, form Wnew/Wold=√(ND,old/ND,new).\n\nStep 3: The width factor is 1/√2=0.7071.\n\nAnswer: 0.7071.\n\nCheck and interpretation: More doping requires less depleted distance to supply the compensating space charge. Fixing total junction potential avoids an extra built-in-potential change.",
    "family": "depletion-doping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-saturation-check-2",
    "topic": "devices",
    "prompt": "An nMOS source is grounded, gate held at 1.9 V, drain connected through 3 kΩ to 12 V. V_TH=0.5 V and I_D=(0.4/2)(V_GS−V_TH)² mA in saturation. Neglect channel-length modulation. Find V_DS in V.",
    "choices": [
      "12 V",
      "9.648 V",
      "10.824 V",
      "1.176 V"
    ],
    "key": 2,
    "why": "Principle: First compute the square-law saturation current, then the drain resistor drop. The result must satisfy VDS≥VGS−VTH to validate the assumed region.\n\nStep 1: Overdrive is VOV=1.9−0.5=1.4 V.\n\nStep 2: Saturation current is ID=0.2×(1.4)²=0.392 mA.\n\nStep 3: Drain voltage is VDS=12−0.392×3=10.824 V.\n\nStep 4: This exceeds the overdrive 1.4 V, so saturation is consistent.\n\nAnswer: 10.824 V.\n\nCheck and interpretation: Applying a saturation formula without checking the resulting VDS can produce an invalid bias solution. The supplied parameters keep the MOSFET in saturation.",
    "family": "mos-saturation-check",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-piecewise-diode-circuit-2",
    "topic": "devices",
    "prompt": "A 7 V source feeds a forward-oriented diode through 3 kΩ. The diode model is open when off and a constant 0.6 V drop when on. Find the circuit current in mA.",
    "choices": [
      "2.3333 mA",
      "2.1333 mA",
      "2.5333 mA",
      "1.0667 mA"
    ],
    "key": 1,
    "why": "Principle: A piecewise diode circuit is solved by assuming a state and checking it. The positive source can forward bias this series diode, so the on-state model applies.\n\nStep 1: Assume the diode is on, fixing its forward voltage at 0.6 V.\n\nStep 2: KVL gives resistor voltage VR=7−0.6=6.4 V.\n\nStep 3: The current is VR/R=6.4/3=2.1333 mA, which is positive and validates the on state.\n\nAnswer: 2.1333 mA.\n\nCheck and interpretation: The given constant-drop model differs from an ideal zero-drop diode and from the exponential Shockley model. Use the specified approximation consistently.",
    "family": "piecewise-diode-circuit",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-junction-capacitance-2",
    "topic": "devices",
    "prompt": "An abrupt junction has built-in potential 0.7 V and zero-bias depletion capacitance C₀. At reverse bias 3 V, find C_j/C₀ using the depletion approximation.",
    "choices": [
      "0.1892",
      "2.2991",
      "0.435",
      "0.25"
    ],
    "key": 2,
    "why": "Principle: For an abrupt junction, depletion width grows as √(Vbi+VR), and capacitance varies inversely with depletion width. Hence Cj=C₀(1+VR/Vbi)⁻¹ᐟ².\n\nStep 1: At zero reverse bias the reference total potential is Vbi=0.7 V.\n\nStep 2: At the specified reverse bias it is 0.7+3=3.7 V.\n\nStep 3: Thus Cj/C₀=√[0.7/(0.7+3)]=0.435.\n\nAnswer: 0.435.\n\nCheck and interpretation: Reverse bias widens depletion and lowers capacitance, so the ratio must be below one. A linearly graded junction has a different exponent.",
    "family": "junction-capacitance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-drift-transit-2",
    "topic": "devices",
    "prompt": "An electron crosses 12 µm of uniform silicon under field magnitude 120 V/cm. Take mobility 1000 cm²/(V·s), ignore velocity saturation and diffusion. Find drift transit time in ns.",
    "choices": [
      "1000 ns",
      "0.1 ns",
      "100 ns",
      "10 ns"
    ],
    "key": 3,
    "why": "Principle: In the low-field mobility model, drift-speed magnitude is μE. Transit time is distance divided by speed, with consistent length units.\n\nStep 1: The speed magnitude is μE=1000×120=120000 cm/s.\n\nStep 2: Convert distance 12 µm to 0.0012 cm.\n\nStep 3: Time is L/v=1.0000e-8 s=10 ns.\n\nAnswer: 10 ns.\n\nCheck and interpretation: Electron drift direction is opposite the electric field, but the transit-time magnitude is positive. High-field velocity saturation is explicitly excluded.",
    "family": "drift-transit",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-emitter-current-2",
    "topic": "devices",
    "prompt": "An NPN transistor operates in forward-active mode with I_C=2 mA and β=100. Find emitter current in mA, rounded to four decimal places.",
    "choices": [
      "2 mA",
      "2.02 mA",
      "1.98 mA",
      "0.02 mA"
    ],
    "key": 1,
    "why": "Principle: The emitter current is the sum of collector and base currents. Finite current gain β must be retained when an exact emitter-current value is requested.\n\nStep 1: Using β=IC/IB, the base current is IB=2/100=0.02 mA.\n\nStep 2: By terminal-current conservation, IE=IC+IB.\n\nStep 3: Thus IE=2(1+1/100)=2.02 mA.\n\nAnswer: 2.02 mA.\n\nCheck and interpretation: Approximating IE≈IC is useful for large β but misses the base-current contribution asked for in this calculation.",
    "family": "bjt-emitter-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-miller-input-capacitance-2",
    "topic": "analog",
    "prompt": "A voltage amplifier has small-signal gain v_o/v_i=−14. A 2 pF capacitor connects its input and output. Under Miller’s theorem, find its equivalent input capacitance in pF.",
    "choices": [
      "2 pF",
      "26 pF",
      "30 pF",
      "2.1429 pF"
    ],
    "key": 2,
    "why": "Principle: Miller’s theorem replaces an impedance bridging two nodes by separate grounded impedances when their voltage ratio is known. For a capacitor, Cin=C(1−Av).\n\nStep 1: The capacitor input current is C d(vi−vo)/dt.\n\nStep 2: With vo=−14vi, the voltage across it is (1+14)vi.\n\nStep 3: Thus Cin=2×15=30 pF.\n\nAnswer: 30 pF.\n\nCheck and interpretation: The inverting gain multiplies the input capacitance substantially. The smaller C(1−1/Av) term belongs to the output equivalent.",
    "family": "miller-input-capacitance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-cmrr-gain-2",
    "topic": "analog",
    "prompt": "A differential amplifier has differential voltage gain 140 and CMRR=64 dB. Find the magnitude of common-mode voltage gain, rounded to four decimal places.",
    "choices": [
      "0.0001",
      "11.3207",
      "7",
      "0.0883"
    ],
    "key": 3,
    "why": "Principle: CMRR is the ratio of differential gain to common-mode gain. Since these are voltage gains, its decibel definition uses 20log₁₀.\n\nStep 1: CMRRlinear=10^(64/20).\n\nStep 2: Using CMRRlinear=|Ad/Ac|, rearrange |Ac|=|Ad|/CMRRlinear.\n\nStep 3: Therefore |Ac|=140/10^(64/20)=0.0883.\n\nAnswer: 0.0883.\n\nCheck and interpretation: Using 10log rather than 20log treats an amplitude ratio as a power ratio and gives a very different answer.",
    "family": "cmrr-gain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-cascaded-pole-bandwidth-2",
    "topic": "analog",
    "prompt": "Two identical, isolated, unity-DC-gain low-pass stages each have a single pole at 14 kHz. What is the overall −3 dB frequency in kHz?",
    "choices": [
      "14 kHz",
      "9.0103 kHz",
      "7 kHz",
      "9.8995 kHz"
    ],
    "key": 1,
    "why": "Principle: Cascaded magnitudes multiply. Two identical first-order responses produce total magnitude 1/[1+(f/fc)²], rather than a single-pole response.\n\nStep 1: For each stage, |H|=1/√[1+(f/14)²].\n\nStep 2: For the cascade, set 1/[1+(f/14)²]=1/√2 at −3 dB.\n\nStep 3: Then (f/14)²=√2−1, so f=14√(√2−1)=9.0103 kHz.\n\nAnswer: 9.0103 kHz.\n\nCheck and interpretation: At each individual pole frequency the cascade is already at −6 dB. Therefore its overall −3 dB frequency must be lower than the individual pole frequency.",
    "family": "cascaded-pole-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-input-loading-2",
    "topic": "analog",
    "prompt": "A common-emitter stage has gain v_o/v_b=-22, rπ=6 kΩ and bias resistance 14 kΩ to AC ground. An input source has series resistance 4 kΩ. Neglect other input effects. Find v_o/v_s.",
    "choices": [
      "-22",
      "-13.2",
      "11.2683",
      "-11.2683"
    ],
    "key": 3,
    "why": "Principle: Source resistance and amplifier input resistance form a voltage divider before the stage gain. The bias resistance loads rπ in parallel.\n\nStep 1: Input resistance is Rin=14∥6=4.2 kΩ.\n\nStep 2: The base/source ratio is vb/vs=Rin/(Rs+Rin)=0.5122.\n\nStep 3: Multiply by the stage gain -22: vo/vs=-11.2683.\n\nAnswer: -11.2683.\n\nCheck and interpretation: The loaded gain magnitude is smaller than the specified base-to-output gain. Omitting the bias network overestimates input resistance and overall gain.",
    "family": "input-loading",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-series-feedback-input-2",
    "topic": "analog",
    "prompt": "A voltage-series negative-feedback amplifier has open-loop input resistance 4 kΩ and loop gain Aβ=14. Under the ideal feedback model, find closed-loop input resistance in kΩ.",
    "choices": [
      "0.2667 kΩ",
      "56 kΩ",
      "18 kΩ",
      "60 kΩ"
    ],
    "key": 3,
    "why": "Principle: Series mixing at the input reduces the error voltage for a given applied input, increasing input resistance by the feedback factor 1+Aβ.\n\nStep 1: The series-feedback resistance transformation is Rif=Ri(1+Aβ).\n\nStep 2: The feedback factor here is 1+14=15.\n\nStep 3: Therefore Rif=4×15=60 kΩ.\n\nAnswer: 60 kΩ.\n\nCheck and interpretation: Shunt mixing would instead reduce input resistance. The specified voltage-series topology is what determines the direction of the transformation.",
    "family": "series-feedback-input",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-schmitt-hysteresis-2",
    "topic": "analog",
    "prompt": "An ideal inverting Schmitt trigger has symmetric output saturation ±7 V. Its non-inverting input is a divider taking fraction β=3/(3+5) of the output, referenced to ground. Find hysteresis width in V.",
    "choices": [
      "5.25 V",
      "2.625 V",
      "18.6667 V",
      "8.75 V"
    ],
    "key": 0,
    "why": "Principle: The positive-feedback divider sets two switching thresholds according to the present output state. Hysteresis width is the upper threshold minus the lower threshold.\n\nStep 1: When output is +7 V, threshold is +βVsat=+2.625 V.\n\nStep 2: When output is −7 V, threshold is −2.625 V.\n\nStep 3: Their difference is 2βVsat=2×(3/8)×7=5.25 V.\n\nAnswer: 5.25 V.\n\nCheck and interpretation: The single positive threshold is only half the hysteresis width because the saturation levels and divider reference are symmetric about zero.",
    "family": "schmitt-hysteresis",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-parity-function-count-2",
    "topic": "digital",
    "prompt": "An N-input XOR gate has N=5. Across all 2^N equally likely binary input words, how many make its output one?",
    "choices": [
      "31",
      "5",
      "8",
      "16"
    ],
    "key": 3,
    "why": "Principle: An XOR outputs one for odd input parity. The even- and odd-parity sets have the same size because flipping any fixed input bit pairs one with the other.\n\nStep 1: There are 2^5=32 possible words.\n\nStep 2: Flipping the first bit maps each even-parity word to one unique odd-parity word and vice versa.\n\nStep 3: Exactly half therefore have odd parity: 2^(5−1)=16.\n\nAnswer: 16.\n\nCheck and interpretation: XOR is not an OR gate: inputs with two ones have output zero. Counting all nonzero words would incorrectly include even-parity words.",
    "family": "parity-function-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-ripple-adder-delay-2",
    "topic": "digital",
    "prompt": "An 6-bit ripple-carry adder has carry propagation delay 1.2 ns per stage and final sum generation delay 2.2 ns after carry arrives. Ignore operand-to-carry startup delay. Find delay from carry-in to most-significant sum in ns.",
    "choices": [
      "8.2 ns",
      "9.4 ns",
      "13.2 ns",
      "6 ns"
    ],
    "key": 0,
    "why": "Principle: The most-significant sum depends on carry propagation through all lower stages, then the sum logic of the last stage. The stated model separates these delays.\n\nStep 1: A carry reaches the most-significant stage after 5 lower-stage carry delays.\n\nStep 2: This propagation takes 5×1.2=6 ns.\n\nStep 3: Add the final sum delay 2.2 ns to obtain 8.2 ns.\n\nAnswer: 8.2 ns.\n\nCheck and interpretation: The final carry-out path has a different endpoint. Counting n carry stages before generating the most-significant sum adds one stage too many.",
    "family": "ripple-adder-delay",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-hamming-parity-2",
    "topic": "digital",
    "prompt": "A binary single-error-correcting Hamming code protects 16 data bits. What is the minimum number of Hamming parity bits r satisfying 2^r≥m+r+1? Do not add an overall double-error-detection parity bit.",
    "choices": [
      "5",
      "4",
      "6",
      "7"
    ],
    "key": 0,
    "why": "Principle: The syndrome must identify every possible single-bit error among data and parity positions, plus the no-error case. Hence 2ʳ≥m+r+1.\n\nStep 1: For r=4, 2ʳ=16 is below m+r+1=21.\n\nStep 2: For r=5, 2ʳ=32 is at least m+r+1=22.\n\nStep 3: The minimum valid count is therefore 5 parity bits.\n\nAnswer: 5.\n\nCheck and interpretation: An extended SECDED code adds one overall parity bit, but that extra protection was explicitly excluded.",
    "family": "hamming-parity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-pipeline-latency-2",
    "topic": "digital",
    "prompt": "An ideal 6-stage pipeline has clock period 2.4 ns. Starting empty, it processes 30 instructions with no stalls and one completion per clock after filling. What is total time until all instructions finish?",
    "choices": [
      "432 ns",
      "72 ns",
      "84 ns",
      "86.4 ns"
    ],
    "key": 2,
    "why": "Principle: An initially empty ideal pipeline needs one full pipeline latency for the first instruction, then one cycle for each subsequent completion.\n\nStep 1: The first instruction finishes after 6 cycles.\n\nStep 2: The remaining 29 instructions each require one additional cycle, totaling 35 cycles.\n\nStep 3: Multiply by 2.4 ns/cycle to get 84 ns.\n\nAnswer: 84 ns.\n\nCheck and interpretation: Ignoring fill latency gives too small a result. Multiplying instruction count by stage count would describe fully serial execution without overlap.",
    "family": "pipeline-latency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-johnson-counter-2",
    "topic": "digital",
    "prompt": "An 6-flip-flop Johnson counter is initialized to all zero and operates in its intended cycle. How many distinct states occur before repetition?",
    "choices": [
      "6",
      "12",
      "64",
      "63"
    ],
    "key": 1,
    "why": "Principle: A Johnson counter feeds the complemented last-stage output into the first stage. Its intended cycle contains 2N states for N flip-flops.\n\nStep 1: Starting with all zeros, ones shift in for N=6 clocks until all stages are one.\n\nStep 2: Zeros then shift in for another 6 clocks, returning to all zero.\n\nStep 3: The cycle therefore contains 2×6=12 distinct states.\n\nAnswer: 12.\n\nCheck and interpretation: An ordinary ring counter has N intended states, while an unrestricted binary counter has 2ᴺ. Initialization matters because a Johnson counter can have other cycles.",
    "family": "johnson-counter",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-xor-probability-2",
    "topic": "digital",
    "prompt": "Independent binary signals A and B are each one with probability 0.2. What is the probability that A XOR B equals one?",
    "choices": [
      "0.04",
      "0.32",
      "0.36",
      "0.96"
    ],
    "key": 1,
    "why": "Principle: XOR is one for exactly one asserted input: events (A=1,B=0) and (A=0,B=1). Independence permits multiplying probabilities in each case.\n\nStep 1: P(A=1,B=0)=0.2×0.8.\n\nStep 2: P(A=0,B=1)=0.8×0.2.\n\nStep 3: Add the disjoint cases: P(XOR=1)=2p(1−p)=0.32.\n\nAnswer: 0.32.\n\nCheck and interpretation: The union probability 2p−p² belongs to OR, which also accepts the both-one case. XOR excludes that case.",
    "family": "xor-probability",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-root-locus-breakaway-2",
    "topic": "control",
    "prompt": "For unity negative feedback with G(s)=K/[(s+3)(s+11)], K≥0, find the gain at the real-axis breakaway point.",
    "choices": [
      "49",
      "4",
      "16",
      "33"
    ],
    "key": 2,
    "why": "Principle: On the root locus, K=−(s+a)(s+b). A real-axis breakaway occurs where dK/ds=0, equivalently where the two real closed-loop roots merge.\n\nStep 1: Differentiate K(s) to get dK/ds=−[2s+14].\n\nStep 2: The stationary point is s=−14/2, between the two real open-loop poles.\n\nStep 3: Substituting gives Kbreak=(b−a)²/4=(11−3)²/4=16.\n\nAnswer: 16.\n\nCheck and interpretation: The same boundary follows by setting the characteristic quadratic discriminant to zero. Positive gain beyond it produces a complex-conjugate root pair.",
    "family": "root-locus-breakaway",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-lead-phase-2",
    "topic": "control",
    "prompt": "A lead compensator is G_c(s)=(1+sT)/(1+αsT), with α=0.2 and T>0. Find its maximum phase lead in degrees.",
    "choices": [
      "41.8103 degrees",
      "78.6901 degrees",
      "48.1897 degrees",
      "20.9052 degrees"
    ],
    "key": 0,
    "why": "Principle: For 0<α<1, a lead network has maximum phase φmax satisfying sinφmax=(1−α)/(1+α). The time constant sets the frequency of that maximum, not its angle.\n\nStep 1: Compute (1−α)/(1+α)=(1−0.2)/(1+0.2)=0.6667.\n\nStep 2: Apply inverse sine to obtain the angle in radians.\n\nStep 3: Convert to degrees: φmax=41.8103 degrees.\n\nAnswer: 41.8103 degrees.\n\nCheck and interpretation: The compensator pole is at a higher frequency than its zero, giving positive phase lead. Reversing the pole and zero would produce phase lag.",
    "family": "lead-phase",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-delay-margin-2",
    "topic": "control",
    "prompt": "A nominal loop has phase margin 40 degrees at its unique gain crossover 4 rad/s. A pure time delay is added, without changing loop magnitude. What delay in s exhausts that phase margin?",
    "choices": [
      "10 s",
      "0.0278 s",
      "0.1745 s",
      "0.3491 s"
    ],
    "key": 2,
    "why": "Principle: A pure delay e^(−sτ) has unit magnitude and contributes phase −ωτ radians. At the unchanged gain crossover it consumes the available phase margin.\n\nStep 1: Convert phase margin to radians: PM=40π/180.\n\nStep 2: Set the added lag ωgcτ equal to that margin at the limiting boundary.\n\nStep 3: Then τmax=(40π/180)/4=0.1745 s.\n\nAnswer: 0.1745 s.\n\nCheck and interpretation: This is the zero-margin boundary, so a positive remaining margin requires a smaller delay. Mixing degrees with ωτ in radians is a common error.",
    "family": "delay-margin",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-controllability-determinant-2",
    "topic": "control",
    "prompt": "For A=[0 1; −3 −5] and B=[0; 1], find the determinant of the 2×2 controllability matrix [B AB].",
    "choices": [
      "0",
      "-1",
      "1",
      "3"
    ],
    "key": 1,
    "why": "Principle: A two-state system is controllable if [B AB] has full rank. For a square 2×2 controllability matrix, a nonzero determinant establishes full rank.\n\nStep 1: Multiply AB=[1; −5].\n\nStep 2: Thus [B AB]=[0 1; 1 −5].\n\nStep 3: Its determinant is 0×(−5)−1×1=−1, independent of 3 and 5.\n\nAnswer: -1.\n\nCheck and interpretation: The nonzero determinant proves controllability for these parameters. Stability of A is a separate property and is not the controllability criterion.",
    "family": "controllability-determinant",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-pi-ramp-error-2",
    "topic": "control",
    "prompt": "A plant 1/(s+3) is controlled by C(s)=4+7/s in unity negative feedback. Assuming stable closed loop, find unit-ramp steady-state error.",
    "choices": [
      "0.25",
      "0.1429",
      "0.5714",
      "0.4286"
    ],
    "key": 3,
    "why": "Principle: A PI controller adds an integrator to the loop. Ramp error is set by the velocity constant of the complete controller–plant product.\n\nStep 1: Loop transfer is L(s)=(4s+7)/[s(s+3)].\n\nStep 2: Kv=lim(s→0)sL(s)=7/3.\n\nStep 3: Thus unit-ramp error is 1/Kv=3/7=0.4286.\n\nAnswer: 0.4286.\n\nCheck and interpretation: The characteristic polynomial is s²+7s+7, with positive coefficients, confirming stability here. Proportional gain changes dynamics but not this ramp-error constant.",
    "family": "pi-ramp-error",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-second-order-peak-time-2",
    "topic": "control",
    "prompt": "A standard underdamped second-order system has ω_n=5 rad/s and ζ=0.3. Find first peak time after a unit step, in s.",
    "choices": [
      "0.6587 s",
      "0.6283 s",
      "0.6667 s",
      "1.3173 s"
    ],
    "key": 0,
    "why": "Principle: The oscillatory part of a second-order step response uses damped natural frequency ωd=ωn√(1−ζ²). Its first peak occurs at π/ωd.\n\nStep 1: Compute ωd=5√(1−0.3²)=4.7697 rad/s.\n\nStep 2: The first peak occurs when ωdt=π.\n\nStep 3: Therefore tp=π/4.7697=0.6587 s.\n\nAnswer: 0.6587 s.\n\nCheck and interpretation: Using ωn directly neglects damping’s effect on oscillation frequency. Peak time differs from rise time and settling time.",
    "family": "second-order-peak-time",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-cascade-noise-figure-2",
    "topic": "comm",
    "prompt": "Two receiver stages have noise figures 3 dB and 7 dB. The first stage power gain is 14 dB. Find cascade noise figure in dB using Friis’ noise formula.",
    "choices": [
      "10 dB",
      "3 dB",
      "3.3344 dB",
      "3.4139 dB"
    ],
    "key": 2,
    "why": "Principle: Friis’ cascade-noise formula uses linear noise factors and linear power gain: Ftotal=F₁+(F₂−1)/G₁. Convert to dB only after combining.\n\nStep 1: Convert F₁=10^(3/10), F₂=10^(7/10) and G₁=10^(14/10).\n\nStep 2: Compute Ftotal=1.9953+(5.0119−1)/25.1189=2.155.\n\nStep 3: Then NFtotal=10log₁₀(Ftotal)=3.3344 dB.\n\nAnswer: 3.3344 dB.\n\nCheck and interpretation: The first-stage gain suppresses the input-referred impact of later-stage noise. Noise figures in dB cannot simply be added.",
    "family": "cascade-noise-figure",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-bpsk-target-ebn0-2",
    "topic": "comm",
    "prompt": "For coherent BPSK in AWGN, P_b=Q(√(2E_b/N₀)). A target error probability has Q⁻¹(P_b)=2.5. What minimum linear E_b/N₀ meets this target?",
    "choices": [
      "6.25",
      "12.5",
      "3.125",
      "1.25"
    ],
    "key": 2,
    "why": "Principle: The Q function decreases with its argument, so meeting an upper limit on bit error probability requires a sufficiently large Eb/N0.\n\nStep 1: Set the Q-function argument to its target inverse: √(2Eb/N₀)=2.5.\n\nStep 2: Square both sides to get 2Eb/N₀=6.25.\n\nStep 3: Thus the minimum linear ratio is Eb/N₀=6.25/2=3.125.\n\nAnswer: 3.125.\n\nCheck and interpretation: This is a linear energy-to-noise-density ratio, not a dB value. A dB answer would require an additional 10log₁₀ operation.",
    "family": "bpsk-target-ebn0",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-selection-diversity-2",
    "topic": "comm",
    "prompt": "A receiver chooses the best of 4 independent diversity branches. Each branch is below the required SNR threshold with probability 0.09. Find total outage probability.",
    "choices": [
      "0.09",
      "0.0001",
      "0.36",
      "0.3143"
    ],
    "key": 1,
    "why": "Principle: Selection combining is in outage only when every candidate branch is below threshold. Independence makes the joint outage probability the product of branch probabilities.\n\nStep 1: Each branch has outage probability p=0.09.\n\nStep 2: The best branch fails only if all 4 branches fail simultaneously.\n\nStep 3: Therefore Pout=p^4=(0.09)^4=0.0001.\n\nAnswer: 0.0001.\n\nCheck and interpretation: The expression 1−(1−p)ᴸ instead means at least one branch fails, which is not an outage when another usable branch remains.",
    "family": "selection-diversity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-nyquist-pcm-rate-2",
    "topic": "comm",
    "prompt": "A real low-pass message is ideally bandlimited to 5 kHz. It is sampled at the ideal Nyquist rate and quantized to 7 bits/sample. Ignoring overhead, find raw PCM bit rate in kbit/s.",
    "choices": [
      "35 kbit/s",
      "1280 kbit/s",
      "70 kbit/s",
      "10 kbit/s"
    ],
    "key": 2,
    "why": "Principle: The ideal Nyquist sampling rate is twice the highest baseband frequency. PCM bit rate is sample rate multiplied by bits per sample.\n\nStep 1: Minimum ideal sampling rate is fs=2×5=10 ksample/s.\n\nStep 2: Each sample contributes 7 binary digits.\n\nStep 3: Raw bit rate is 10×7=70 kbit/s.\n\nAnswer: 70 kbit/s.\n\nCheck and interpretation: The number of quantization levels is 2ᴺ, but each sample carries N bits, not 2ᴺ bits. Practical anti-alias filtering may require a higher sample rate.",
    "family": "nyquist-pcm-rate",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-filtered-awgn-variance-2",
    "topic": "comm",
    "prompt": "Continuous-time white Gaussian noise has two-sided PSD N₀/2 with N₀=0.3. It enters a filter h(t)=e^(−3t)u(t). Find output noise variance.",
    "choices": [
      "0.025",
      "0.05",
      "0.1",
      "0.0083"
    ],
    "key": 0,
    "why": "Principle: For white noise with two-sided PSD N₀/2, filter output variance is (N₀/2)∫|h(t)|²dt. The impulse-response energy supplies the noise gain.\n\nStep 1: The impulse-response energy is ∫₀∞e^(−6t)dt=1/6.\n\nStep 2: Multiply by N₀/2=0.15.\n\nStep 3: Thus σout²=N₀/(4a)=0.3/(4×3)=0.025.\n\nAnswer: 0.025.\n\nCheck and interpretation: The two-sided PSD convention is specified to avoid a factor-of-two ambiguity. Replacing impulse-response energy by DC gain squared is not valid for white input noise.",
    "family": "filtered-awgn-variance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-binary-map-threshold-2",
    "topic": "comm",
    "prompt": "A receiver observes r=s+n, where s=+2 with prior 0.23 or −2 otherwise. Noise is zero-mean Gaussian with variance 0.7. With equal error costs, decide +2 if r exceeds what MAP threshold?",
    "choices": [
      "0",
      "-0.2115",
      "0.2115",
      "0.4229"
    ],
    "key": 2,
    "why": "Principle: The MAP detector compares posterior probabilities. Equal-variance Gaussian likelihoods lead to a linear observation threshold adjusted by the prior odds.\n\nStep 1: Log likelihood ratio is ln[p(r|+A)/p(r|−A)]=2Ar/σ².\n\nStep 2: MAP selects +A when this exceeds ln[P(−A)/P(+A)]=ln(0.77/0.23).\n\nStep 3: Thus threshold γ=σ²/(2A) ln[(1−p)/p]=0.2115.\n\nAnswer: 0.2115.\n\nCheck and interpretation: The positive symbol is less probable here, so the threshold is positive and favors the negative symbol unless the observation provides sufficient evidence.",
    "family": "binary-map-threshold",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-dielectric-boundary-reflection-2",
    "topic": "em",
    "prompt": "A plane wave in free space is normally incident on a lossless nonmagnetic dielectric with ε_r=4. What percentage of incident power is reflected?",
    "choices": [
      "11.1111 %",
      "33.3333 %",
      "88.8889 %",
      "5.5556 %"
    ],
    "key": 0,
    "why": "Principle: At normal incidence, electric-field reflection is Γ=(η₂−η₁)/(η₂+η₁). Reflected power in the incident medium is |Γ|² times incident power.\n\nStep 1: For μr=1, η₂=η₀/√4 and η₁=η₀.\n\nStep 2: Cancel η₀ to obtain Γ=(1−√4)/(1+√4).\n\nStep 3: The reflected percentage is 100Γ²=11.1111%.\n\nAnswer: 11.1111 %.\n\nCheck and interpretation: The electric reflection coefficient is negative because the second medium has lower impedance. Power reflection is nevertheless nonnegative after squaring.",
    "family": "dielectric-boundary-reflection",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-shorted-line-reactance-2",
    "topic": "em",
    "prompt": "A lossless 50 Ω line is short-circuited at its load and has electrical length 20 degrees. Find input reactance X in Ω, where Z_in=jX.",
    "choices": [
      "18.1985 Ω",
      "-18.1985 Ω",
      "137.3739 Ω",
      "17.101 Ω"
    ],
    "key": 0,
    "why": "Principle: The input impedance of a short-circuited lossless line is Zin=jZ₀tan(βl). Electrical length supplies βl directly.\n\nStep 1: Use βl=20 degrees=20π/180 radians.\n\nStep 2: Evaluate tan(βl)=0.364.\n\nStep 3: Multiply by Z₀: X=50×0.364=18.1985 Ω.\n\nAnswer: 18.1985 Ω.\n\nCheck and interpretation: For an electrical length between zero and 90 degrees, the shorted stub appears inductive, so X is positive. An open-circuit stub uses a negative cotangent relation.",
    "family": "shorted-line-reactance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-quarter-wave-matching-2",
    "topic": "em",
    "prompt": "A real 35 Ω source resistance is to be matched to a real 120 Ω load using a lossless quarter-wave transformer. What characteristic impedance is required, in Ω?",
    "choices": [
      "77.5 Ω",
      "4200 Ω",
      "85 Ω",
      "64.8074 Ω"
    ],
    "key": 3,
    "why": "Principle: A quarter-wave transformer presents Zin=Zt²/RL. A match requires this input resistance to equal the source resistance.\n\nStep 1: Set Rs=Zt²/RL.\n\nStep 2: Rearrange to Zt²=RsRL=35×120=4200.\n\nStep 3: Take the positive root: Zt=√4200=64.8074 Ω.\n\nAnswer: 64.8074 Ω.\n\nCheck and interpretation: The transformer impedance is the geometric mean of the two real resistances. The match holds at the design electrical length rather than over all frequencies.",
    "family": "quarter-wave-matching",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-displacement-current-2",
    "topic": "em",
    "prompt": "An ideal parallel-plate capacitor has C=4 nF and applied voltage v(t)=12cos(1400t) V. What is peak displacement current in mA? Ignore fringing and leakage.",
    "choices": [
      "0.0336 mA",
      "0.1344 mA",
      "0.0672 mA",
      "0 mA"
    ],
    "key": 2,
    "why": "Principle: The displacement current through an ideal capacitor equals its terminal current i=C dv/dt. For a sinusoid its peak magnitude is CωVpeak.\n\nStep 1: Differentiate v(t): dv/dt=−16800sin(1400t) V/s.\n\nStep 2: Multiply peak slope by C=4×10⁻⁹ F.\n\nStep 3: Convert A to mA to obtain Ipeak=0.0672 mA.\n\nAnswer: 0.0672 mA.\n\nCheck and interpretation: The given angular frequency needs no additional 2π. Average current is zero over a cycle, while peak displacement current is nonzero.",
    "family": "displacement-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-antenna-aperture-2",
    "topic": "em",
    "prompt": "An antenna has linear gain 4 at wavelength 0.14 m. For perfect polarization matching, find maximum effective aperture in cm² using A_e=Gλ²/(4π).",
    "choices": [
      "0.0062 cm²",
      "784 cm²",
      "62.3887 cm²",
      "31.1944 cm²"
    ],
    "key": 2,
    "why": "Principle: Antenna gain and maximum receiving effective area are related by Ae=Gλ²/(4π). The gain must be a linear value.\n\nStep 1: Compute Gλ²=4×(0.14)²=0.0784 m².\n\nStep 2: Divide by 4π to get aperture in square metres.\n\nStep 3: Since 1 m²=10000 cm², the result is 62.3887 cm².\n\nAnswer: 62.3887 cm².\n\nCheck and interpretation: Effective aperture is a receiving-area measure and need not equal the antenna’s physical geometric area. The square-unit conversion requires 10000 rather than 100.",
    "family": "antenna-aperture",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-conductor-field-decay-2",
    "topic": "em",
    "prompt": "Inside a good conductor, field magnitude follows |E(z)|=|E(0)|e^(−z/δ) with skin depth δ=14 µm. At what depth in µm does field magnitude fall to 0.14 of its surface value?",
    "choices": [
      "100 µm",
      "13.7628 µm",
      "55.0512 µm",
      "27.5256 µm"
    ],
    "key": 3,
    "why": "Principle: Skin depth governs exponential field-amplitude attenuation. Solve the stated ratio by taking a natural logarithm.\n\nStep 1: Set e^(−z/14)=0.14.\n\nStep 2: Taking ln gives −z/14=ln(0.14).\n\nStep 3: Hence z=−14ln(0.14)=27.5256 µm.\n\nAnswer: 27.5256 µm.\n\nCheck and interpretation: This uses a field-amplitude ratio. Power falls with the square of field, so reaching the same numerical power fraction would require half this depth.",
    "family": "conductor-field-decay",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-repeated-mixture-2",
    "topic": "apt",
    "prompt": "A tank contains 24 L of pure concentrate. 4 L is removed and replaced by water, the mixture is stirred, and the same removal/replacement is repeated once. What percentage of the final mixture is concentrate?",
    "choices": [
      "66.6667 %",
      "83.3333 %",
      "69.4444 %",
      "30.5556 %"
    ],
    "key": 2,
    "why": "Principle: Every replacement retains the same fraction of whatever concentrate was present before that operation. Stirring makes the removed mixture representative of the tank.\n\nStep 1: One operation retains fraction 1−4/24 of the concentrate.\n\nStep 2: Two operations retain fraction (1−4/24)².\n\nStep 3: The tank returns to its original total volume each time, so final concentrate percentage is 69.4444%.\n\nAnswer: 69.4444 %.\n\nCheck and interpretation: The second removal contains some water, so it removes less concentrate than the first. Subtracting twice the first removed concentration overstates the loss.",
    "family": "repeated-mixture",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-adjacent-arrangement-2",
    "topic": "apt",
    "prompt": "6 distinct people stand in a uniformly random row. What is the probability that two specified people are adjacent?",
    "choices": [
      "0.1667",
      "0.4",
      "0.3333",
      "0.8333"
    ],
    "key": 2,
    "why": "Principle: For adjacency counting, treat the two specified people as a block, then allow both orders inside the block. Divide favorable permutations by all permutations.\n\nStep 1: All arrangements number 6!.\n\nStep 2: Combine the specified pair into one block, leaving 5 objects with (5)! orders. The pair has two internal orders.\n\nStep 3: Thus probability=2(5)!/6!=2/6=0.3333.\n\nAnswer: 0.3333.\n\nCheck and interpretation: The pair can occupy any neighboring positions, not just an endpoint pair. The two internal orders must both be counted.",
    "family": "adjacent-arrangement",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-boat-round-trip-2",
    "topic": "apt",
    "prompt": "A boat moves at 12 km/h in still water and the current is 3 km/h. It travels 24 km downstream and returns the same distance upstream. What is total travel time in hours?",
    "choices": [
      "4 hours",
      "4.2667 hours",
      "3.2 hours",
      "5.3333 hours"
    ],
    "key": 1,
    "why": "Principle: Current adds to speed downstream and subtracts upstream. Compute each travel time separately before adding.\n\nStep 1: Downstream speed is 12+3=15 km/h.\n\nStep 2: Upstream speed is 12−3=9 km/h, positive for these data.\n\nStep 3: Total time is 24/15+24/9=4.2667 hours.\n\nAnswer: 4.2667 hours.\n\nCheck and interpretation: The current slows the overall equal-distance round trip relative to travel in still water. The faster leg does not cancel the extra time spent on the slower leg.",
    "family": "boat-round-trip",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-opposite-trains-2",
    "topic": "apt",
    "prompt": "Trains of lengths 120 m and 170 m travel toward each other at 43.2 km/h and 61.2 km/h. How many seconds pass from their fronts meeting until they completely cross?",
    "choices": [
      "58 s",
      "10 s",
      "4.1379 s",
      "2.7778 s"
    ],
    "key": 1,
    "why": "Principle: For opposite directions, relative speed is the sum of speeds. Complete crossing requires relative motion through the sum of both lengths.\n\nStep 1: Combined length is 120+170=290 m.\n\nStep 2: Relative speed is (43.2+61.2)/3.6=29 m/s.\n\nStep 3: Crossing time is 290/29=10 s.\n\nAnswer: 10 s.\n\nCheck and interpretation: Subtracting speeds would apply to overtaking in the same direction. Counting just one train’s length would stop before both trains fully clear each other.",
    "family": "opposite-trains",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-weighted-group-average-2",
    "topic": "apt",
    "prompt": "A class of 24 students has mean score 62; another of 32 has mean score 72. What is the mean score when the classes are combined?",
    "choices": [
      "67.7143",
      "67",
      "66.2857",
      "134"
    ],
    "key": 0,
    "why": "Principle: A combined mean is weighted by group size. Recover each group’s total score before pooling.\n\nStep 1: First total score is 24×62=1488.\n\nStep 2: Second total score is 32×72=2304.\n\nStep 3: Divide the total 3792 by 56 students to obtain 67.7143.\n\nAnswer: 67.7143.\n\nCheck and interpretation: The result lies between the two class means and is closer to the mean of the larger class. A simple average of class means requires equal class sizes.",
    "family": "weighted-group-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-logarithm-equation-2",
    "topic": "apt",
    "prompt": "For real x>3, solve log₂(x−3)+log₂(x+3)=log₂(40).",
    "choices": [
      "7",
      "3",
      "10",
      "6.3246"
    ],
    "key": 0,
    "why": "Principle: For positive arguments, the sum of logarithms equals the logarithm of the product. The domain restriction must be checked after solving the resulting quadratic.\n\nStep 1: Combine the left side as log₂[(x−3)(x+3)].\n\nStep 2: Equate arguments: x²−9=40, giving x²=49.\n\nStep 3: The algebraic roots are ±7, but only +7 satisfies x>3.\n\nAnswer: 7.\n\nCheck and interpretation: The negative root is extraneous to the logarithm domain even though it satisfies the squared equation. Ignoring domain conditions can produce an invalid second answer.",
    "family": "logarithm-equation",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-bayes-detector-3",
    "topic": "math",
    "prompt": "A fault occurs with probability 0.03. A detector reports positive with probability 0.9 when faulty and 0.05 when healthy. Given a positive report, find the probability of a fault.",
    "choices": [
      "0.9",
      "0.3576",
      "0.03",
      "0.027"
    ],
    "key": 1,
    "why": "Principle: Bayes’ theorem combines likelihood with the prior fault probability. A positive detector report can come from a real fault or a false alarm.\n\nStep 1: True-positive probability is 0.9×0.03=0.027.\n\nStep 2: Total positive probability is 0.9×0.03+0.05×0.97=0.0755.\n\nStep 3: Normalize the true-positive term by the total to obtain 0.3576.\n\nAnswer: 0.3576.\n\nCheck and interpretation: Sensitivity alone is not the posterior fault probability. When faults are rare, healthy components can contribute many false positives.",
    "family": "bayes-detector",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-inverse-trace-3",
    "topic": "math",
    "prompt": "An invertible 2×2 matrix A has trace 11 and determinant 28. Find trace(A⁻¹), rounded to four decimal places.",
    "choices": [
      "0.3929",
      "2.5455",
      "11",
      "0.0357"
    ],
    "key": 0,
    "why": "Principle: The eigenvalues of an inverse matrix are reciprocals of the original eigenvalues. Their sum is the original eigenvalue sum divided by the original product.\n\nStep 1: Let the eigenvalues be λ₁ and λ₂ with λ₁+λ₂=11 and λ₁λ₂=28.\n\nStep 2: Then trace(A⁻¹)=1/λ₁+1/λ₂=(λ₁+λ₂)/(λ₁λ₂).\n\nStep 3: Substitute the given invariants: 11/28=0.3929.\n\nAnswer: 0.3929.\n\nCheck and interpretation: The determinant is nonzero, so the inverse exists. Taking the reciprocal of the trace would not in general equal the trace of the inverse.",
    "family": "inverse-trace",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-residue-contour-3",
    "topic": "math",
    "prompt": "C is the counterclockwise circle |z|=5. For f(z)=1/[(z−4)(z−7)], what real coefficient c satisfies ∮_C f(z)dz=2πj c?",
    "choices": [
      "0.3333",
      "-0.6667",
      "-0.3333",
      "0"
    ],
    "key": 2,
    "why": "Principle: The residue theorem gives a contour integral as 2πj times the sum of residues of poles strictly inside a positively oriented contour.\n\nStep 1: The poles are z=4 and z=7. Only 4 lies inside |z|=5.\n\nStep 2: The simple-pole residue at z=4 is lim(z→4)(z−4)f(z)=1/(4−7).\n\nStep 3: Thus the integral is 2πj×(-0.3333), and c=-0.3333.\n\nAnswer: -0.3333.\n\nCheck and interpretation: The outside pole contributes no residue to this contour. Reversing the contour orientation would reverse the sign, but the stated orientation is counterclockwise.",
    "family": "residue-contour",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-ode-initial-value-3",
    "topic": "math",
    "prompt": "For t≥0, y′+4y=9, with y(0)=4. Find y(1/4), rounded to four decimal places.",
    "choices": [
      "2.8938",
      "2.25",
      "1.4715",
      "6.25"
    ],
    "key": 0,
    "why": "Principle: A first-order linear differential equation has a constant particular solution plus an exponentially decaying homogeneous solution. The initial condition fixes the decay coefficient.\n\nStep 1: At equilibrium, y∞=9/4. The homogeneous term is Ce^(−4t).\n\nStep 2: Apply y(0)=4 to get C=4−9/4.\n\nStep 3: At t=1/4, the exponential is e⁻¹, giving y=9/4+(4−9/4)e⁻¹=2.8938.\n\nAnswer: 2.8938.\n\nCheck and interpretation: Discarding the initial condition would leave only the final value. The result lies between the initial value and the equilibrium because the decay factor is between zero and one.",
    "family": "ode-initial-value",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-correlated-variance-3",
    "topic": "math",
    "prompt": "Random variables X and Y have variances 4 and 6, and covariance 0.5. Find Var(2X−Y).",
    "choices": [
      "22",
      "10",
      "20",
      "24"
    ],
    "key": 2,
    "why": "Principle: For correlated variables, Var(aX+bY)=a²Var(X)+b²Var(Y)+2abCov(X,Y). The cross term changes sign when the coefficients have opposite signs.\n\nStep 1: Here a=2 and b=−1, so the individual variance contribution is 4×4+6=22.\n\nStep 2: The covariance contribution is 2×2×(−1)×0.5=−2.\n\nStep 3: Adding them gives Var(2X−Y)=20.\n\nAnswer: 20.\n\nCheck and interpretation: Independence was not stated and would contradict the nonzero covariance. The negative coefficient on Y does not make its own variance term negative.",
    "family": "correlated-variance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-newton-step-3",
    "topic": "math",
    "prompt": "Newton–Raphson is used to solve x²−5=0 starting at x₀=4. What is x₁, rounded to four decimal places?",
    "choices": [
      "1.25",
      "-7",
      "2.625",
      "2.2361"
    ],
    "key": 2,
    "why": "Principle: Newton–Raphson updates x through xnew=x−f(x)/f′(x). A single update is generally an approximation, not the exact root.\n\nStep 1: For f(x)=x²−5, f′(x)=2x.\n\nStep 2: At x₀=4, f(x₀)=11 and f′(x₀)=8.\n\nStep 3: Thus x₁=4−(11)/8=(4+5/4)/2=2.625.\n\nAnswer: 2.625.\n\nCheck and interpretation: Using the exact square root would answer a different question: this asks for one algorithmic iteration from the specified starting point.",
    "family": "newton-step",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-dependent-input-resistance-3",
    "topic": "networks",
    "prompt": "A one-port has resistor R=5 kΩ to ground in parallel with an upward controlled current source g v/R, where v is port voltage and g=0.16. Find the input resistance in kΩ.",
    "choices": [
      "4.2 kΩ",
      "5.9524 kΩ",
      "4.3103 kΩ",
      "31.25 kΩ"
    ],
    "key": 1,
    "why": "Principle: Input resistance with dependent sources must be obtained from a test voltage or current while retaining the dependent source. The upward source opposes current drawn through the resistor.\n\nStep 1: Apply test voltage v. Resistor current entering the network is v/R.\n\nStep 2: The controlled source supplies g v/R toward the port, so net entering current is i=(1−g)v/R.\n\nStep 3: Therefore Rin=v/i=R/(1−g)=5/(1−0.16)=5.9524 kΩ.\n\nAnswer: 5.9524 kΩ.\n\nCheck and interpretation: Turning off a dependent source would incorrectly leave only R. Since 0<g<1, the input resistance is positive and exceeds R.",
    "family": "dependent-input-resistance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-nodal-two-sources-3",
    "topic": "networks",
    "prompt": "A node is connected through 4 kΩ to a fixed 13 V node, through 6 kΩ to a fixed 7 V node, and through 7 kΩ to ground. Find its voltage in V.",
    "choices": [
      "7.8936 V",
      "10 V",
      "8.2727 V",
      "3.7692 V"
    ],
    "key": 0,
    "why": "Principle: Nodal analysis applies KCL using each branch’s voltage difference divided by resistance. The unknown node is not an unloaded two-resistor divider.\n\nStep 1: Write (v−13)/4+(v−7)/6+v/7=0, using kΩ and mA.\n\nStep 2: Collect v terms: v(1/4+1/6+1/7)=13/4+7/6.\n\nStep 3: Divide the source-current sum by total conductance to get v=7.8936 V.\n\nAnswer: 7.8936 V.\n\nCheck and interpretation: The ground branch loads both source paths. Ignoring either fixed-voltage source changes the node equation and gives a different voltage.",
    "family": "nodal-two-sources",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-series-capacitor-energy-3",
    "topic": "networks",
    "prompt": "Initially uncharged capacitors 5 µF and 7 µF are connected in series across 16 V DC and allowed to settle. Find total stored electrostatic energy in µJ.",
    "choices": [
      "1536 µJ",
      "746.6667 µJ",
      "373.3333 µJ",
      "640 µJ"
    ],
    "key": 2,
    "why": "Principle: Series capacitors carry equal charge and have equivalent capacitance Ceq=C₁C₂/(C₁+C₂). Their total stored energy is CeqV²/2.\n\nStep 1: Compute Ceq=5×7/(5+7)=2.9167 µF.\n\nStep 2: The total terminal voltage is 16 V.\n\nStep 3: Energy is (1/2)×2.9167×16²=373.3333 µJ, since µF·V² gives µJ.\n\nAnswer: 373.3333 µJ.\n\nCheck and interpretation: Using C₁+C₂ would treat the connection as parallel. The smaller capacitor has the larger voltage, but the equivalent capacitance already accounts for voltage division.",
    "family": "series-capacitor-energy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rlc-critical-damping-3",
    "topic": "networks",
    "prompt": "A source-free series RLC circuit has L=5 mH and C=7 µF. Find the total series resistance needed for critical damping in Ω.",
    "choices": [
      "26.7261 Ω",
      "106.9045 Ω",
      "0.8452 Ω",
      "53.4522 Ω"
    ],
    "key": 3,
    "why": "Principle: The series RLC natural polynomial is s²+(R/L)s+1/(LC). Critical damping occurs when the repeated-root condition α=ω₀ holds.\n\nStep 1: Identify α=R/(2L) and ω₀=1/√(LC).\n\nStep 2: Equating them gives Rcrit=2√(L/C).\n\nStep 3: Convert the given values to H and F, then calculate 2√[5×10⁻³/(7×10⁻⁶)]=53.4522 Ω.\n\nAnswer: 53.4522 Ω.\n\nCheck and interpretation: The factor two is essential. The parallel-RLC critical-resistance relation has a different form because its damping coefficient depends inversely on resistance.",
    "family": "rlc-critical-damping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-nonsinusoidal-rms-3",
    "topic": "networks",
    "prompt": "A current is i(t)=4+7cos(100t)+6sin(200t) A. Find RMS current over a common period, rounded to four decimal places.",
    "choices": [
      "7.6485 A",
      "7.1063 A",
      "13.1924 A",
      "10.0499 A"
    ],
    "key": 0,
    "why": "Principle: RMS is the square root of the mean square. Orthogonal harmonics have zero average cross products over a common period, while the DC contribution is not halved.\n\nStep 1: The DC mean-square contribution is 4²=16.\n\nStep 2: Each sinusoid contributes half its squared peak amplitude: (7²+6²)/2=42.5.\n\nStep 3: Add contributions and take the square root: Irms=√58.5=7.6485 A.\n\nAnswer: 7.6485 A.\n\nCheck and interpretation: Adding the individual RMS values is invalid for orthogonal harmonics. The DC term must retain its full squared value.",
    "family": "nonsinusoidal-rms",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-thevenin-divider-3",
    "topic": "networks",
    "prompt": "An ideal 8 V source drives series resistors 5 kΩ and 7 kΩ. The output terminals are across the lower 7 kΩ resistor. What Norton short-circuit current, in mA, corresponds to the output Thévenin equivalent?",
    "choices": [
      "0.6667 mA",
      "0.9333 mA",
      "0.8 mA",
      "1.6 mA"
    ],
    "key": 3,
    "why": "Principle: Norton current equals the terminal short-circuit current or Vth/Rth. When the output is shorted, the lower resistor is bypassed.\n\nStep 1: The open-circuit voltage is Vth=8×7/(5+7)=4.6667 V.\n\nStep 2: With the ideal source deactivated to a short, Rth=5∥7=2.9167 kΩ.\n\nStep 3: Therefore IN=Vth/Rth=8/5=1.6 mA.\n\nAnswer: 1.6 mA.\n\nCheck and interpretation: The same result follows directly under an output short: all source current flows through the upper resistor and bypasses the lower resistor.",
    "family": "thevenin-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-anticausal-z-3",
    "topic": "signals",
    "prompt": "X(z)=1/(1−0.35z⁻¹) has ROC |z|<0.35. Find x[−2], rounded to four decimal places.",
    "choices": [
      "-0.1225",
      "8.1633",
      "0",
      "-8.1633"
    ],
    "key": 3,
    "why": "Principle: A rational z-transform needs its ROC to determine sidedness. ROC inside the pole corresponds to an anti-causal rather than a causal exponential.\n\nStep 1: For ROC |z|<a, the inverse is x[n]=−aⁿu[−n−1].\n\nStep 2: At n=−2 the unit step equals one.\n\nStep 3: Thus x[−2]=−(0.35)⁻²=−1/0.1225=-8.1633.\n\nAnswer: -8.1633.\n\nCheck and interpretation: Using the right-sided inverse aⁿu[n] would require ROC outside the pole and would give the wrong negative-time samples.",
    "family": "anticausal-z",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-fourier-time-scaling-3",
    "topic": "signals",
    "prompt": "For x(t)=e^(−5|t|), let y(t)=x(2t). Using X(ω)=∫x(t)e^(−jωt)dt, find Y(4), rounded to four decimal places.",
    "choices": [
      "0.2439",
      "0.3448",
      "0.122",
      "0.1724"
    ],
    "key": 3,
    "why": "Principle: Time compression y(t)=x(bt) gives Y(ω)=X(ω/b)/|b|. For e^(−a|t|), the transform is 2a/(a²+ω²).\n\nStep 1: Here b=2, so Y(ω)=(1/2)X(ω/2).\n\nStep 2: Substitute the known transform: Y(ω)=a/[a²+(ω/2)²].\n\nStep 3: At ω=4, Y=5/[25+16/4]=0.1724.\n\nAnswer: 0.1724.\n\nCheck and interpretation: Compressing the signal halves its total area, so Y(0) must be half of X(0). Forgetting the 1/2 scale factor fails that check.",
    "family": "fourier-time-scaling",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-rectangle-convolution-3",
    "topic": "signals",
    "prompt": "Let x(t)=1 for 0≤t≤5 and zero otherwise. If y=x*x, find y(5.5).",
    "choices": [
      "4.5",
      "5",
      "5.5",
      "0.5"
    ],
    "key": 0,
    "why": "Principle: Convolution of two unit-height rectangular pulses equals the length of their overlap as one is shifted. The result is triangular.\n\nStep 1: The integrand is one when τ lies in both [0,5] and [t−5,t].\n\nStep 2: At t=5.5, these intervals overlap from 0.5 to 5.\n\nStep 3: The overlap length and hence the convolution value is 5−0.5=4.5.\n\nAnswer: 4.5.\n\nCheck and interpretation: The peak occurs at t equal to one pulse width and equals that width. The requested point is on the descending side, so its value is slightly below the peak.",
    "family": "rectangle-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-periodic-average-power-3",
    "topic": "signals",
    "prompt": "Find time-average power of x(t)=1.5+4cos(3t)+5sin(6t), assuming a 1 Ω normalization.",
    "choices": [
      "43.25",
      "22.75",
      "21.625",
      "6"
    ],
    "key": 1,
    "why": "Principle: Average signal power is the mean of |x(t)|² over a period. Distinct harmonics and DC are mutually orthogonal over a common period.\n\nStep 1: The DC term contributes 1.5²=2.25.\n\nStep 2: The two sinusoidal terms contribute 4²/2 and 5²/2. Cross terms average to zero.\n\nStep 3: Thus P=2.25+16/2+25/2=22.75.\n\nAnswer: 22.75.\n\nCheck and interpretation: A nonzero periodic signal has finite average power but infinite total energy. The 1 Ω normalization avoids an additional resistance factor.",
    "family": "periodic-average-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-circular-convolution-dc-3",
    "topic": "signals",
    "prompt": "Two length-7 sequences have every sample equal to 4 and 5, respectively. Find any sample of their length-7 circular convolution.",
    "choices": [
      "20",
      "120",
      "140",
      "980"
    ],
    "key": 2,
    "why": "Principle: An N-point circular convolution sums N products with indices wrapped modulo N. Constant sequences make every product identical.\n\nStep 1: Write y[r]=Σₘ₌₀ᴺ⁻¹x[m]h[(r−m) mod N].\n\nStep 2: Each term equals 4×5=20, independent of r and m.\n\nStep 3: There are 7 terms, so every output sample equals 7×20=140.\n\nAnswer: 140.\n\nCheck and interpretation: A DFT-domain derivation gives the same result: only the DC bins are nonzero, and the inverse transform contributes its 1/N factor.",
    "family": "circular-convolution-dc",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-white-noise-filter-3",
    "topic": "signals",
    "prompt": "Zero-mean discrete white noise with variance 4 enters a stable filter h[n]=(0.25)ⁿu[n]. Find the output variance, rounded to four decimal places.",
    "choices": [
      "5.3333",
      "4.2667",
      "3.75",
      "4"
    ],
    "key": 1,
    "why": "Principle: For white input noise, distinct input samples are uncorrelated. Output variance is input variance multiplied by the sum of squared impulse-response coefficients.\n\nStep 1: Write σy²=σx²Σₙ|h[n]|².\n\nStep 2: Here Σₙ₌₀∞a²ⁿ=1/(1−a²), because |a|<1.\n\nStep 3: Therefore σy²=4/(1−0.25²)=4.2667.\n\nAnswer: 4.2667.\n\nCheck and interpretation: Using DC gain squared would incorrectly assume all noise samples add coherently. Whiteness eliminates the cross-covariance terms.",
    "family": "white-noise-filter",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-depletion-doping-3",
    "topic": "devices",
    "prompt": "For a one-sided abrupt p⁺n junction at fixed total junction potential, the lightly doped n-side concentration is multiplied by 2.5. By what factor does total depletion width change?",
    "choices": [
      "1.5811",
      "0.4",
      "2.5",
      "0.6325"
    ],
    "key": 3,
    "why": "Principle: For a one-sided abrupt junction, depletion extends mainly into the lightly doped side, with W≈√[2ε(Vbi+VR)/(qND)]. Hold the total potential fixed as stated.\n\nStep 1: All quantities except ND are fixed, so W is proportional to ND⁻¹ᐟ².\n\nStep 2: With ND,new=2.5ND,old, form Wnew/Wold=√(ND,old/ND,new).\n\nStep 3: The width factor is 1/√2.5=0.6325.\n\nAnswer: 0.6325.\n\nCheck and interpretation: More doping requires less depleted distance to supply the compensating space charge. Fixing total junction potential avoids an extra built-in-potential change.",
    "family": "depletion-doping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-saturation-check-3",
    "topic": "devices",
    "prompt": "An nMOS source is grounded, gate held at 2.1 V, drain connected through 3.5 kΩ to 13 V. V_TH=0.5 V and I_D=(0.4/2)(V_GS−V_TH)² mA in saturation. Neglect channel-length modulation. Find V_DS in V.",
    "choices": [
      "13 V",
      "9.416 V",
      "1.792 V",
      "11.208 V"
    ],
    "key": 3,
    "why": "Principle: First compute the square-law saturation current, then the drain resistor drop. The result must satisfy VDS≥VGS−VTH to validate the assumed region.\n\nStep 1: Overdrive is VOV=2.1−0.5=1.6 V.\n\nStep 2: Saturation current is ID=0.2×(1.6)²=0.512 mA.\n\nStep 3: Drain voltage is VDS=13−0.512×3.5=11.208 V.\n\nStep 4: This exceeds the overdrive 1.6 V, so saturation is consistent.\n\nAnswer: 11.208 V.\n\nCheck and interpretation: Applying a saturation formula without checking the resulting VDS can produce an invalid bias solution. The supplied parameters keep the MOSFET in saturation.",
    "family": "mos-saturation-check",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-piecewise-diode-circuit-3",
    "topic": "devices",
    "prompt": "A 8 V source feeds a forward-oriented diode through 4 kΩ. The diode model is open when off and a constant 0.6 V drop when on. Find the circuit current in mA.",
    "choices": [
      "2 mA",
      "2.15 mA",
      "1.85 mA",
      "0.925 mA"
    ],
    "key": 2,
    "why": "Principle: A piecewise diode circuit is solved by assuming a state and checking it. The positive source can forward bias this series diode, so the on-state model applies.\n\nStep 1: Assume the diode is on, fixing its forward voltage at 0.6 V.\n\nStep 2: KVL gives resistor voltage VR=8−0.6=7.4 V.\n\nStep 3: The current is VR/R=7.4/4=1.85 mA, which is positive and validates the on state.\n\nAnswer: 1.85 mA.\n\nCheck and interpretation: The given constant-drop model differs from an ideal zero-drop diode and from the exponential Shockley model. Use the specified approximation consistently.",
    "family": "piecewise-diode-circuit",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-junction-capacitance-3",
    "topic": "devices",
    "prompt": "An abrupt junction has built-in potential 0.7 V and zero-bias depletion capacitance C₀. At reverse bias 4 V, find C_j/C₀ using the depletion approximation.",
    "choices": [
      "0.1489",
      "2.5912",
      "0.2",
      "0.3859"
    ],
    "key": 3,
    "why": "Principle: For an abrupt junction, depletion width grows as √(Vbi+VR), and capacitance varies inversely with depletion width. Hence Cj=C₀(1+VR/Vbi)⁻¹ᐟ².\n\nStep 1: At zero reverse bias the reference total potential is Vbi=0.7 V.\n\nStep 2: At the specified reverse bias it is 0.7+4=4.7 V.\n\nStep 3: Thus Cj/C₀=√[0.7/(0.7+4)]=0.3859.\n\nAnswer: 0.3859.\n\nCheck and interpretation: Reverse bias widens depletion and lowers capacitance, so the ratio must be below one. A linearly graded junction has a different exponent.",
    "family": "junction-capacitance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-drift-transit-3",
    "topic": "devices",
    "prompt": "An electron crosses 13 µm of uniform silicon under field magnitude 130 V/cm. Take mobility 1000 cm²/(V·s), ignore velocity saturation and diffusion. Find drift transit time in ns.",
    "choices": [
      "10 ns",
      "1000 ns",
      "0.1 ns",
      "100 ns"
    ],
    "key": 0,
    "why": "Principle: In the low-field mobility model, drift-speed magnitude is μE. Transit time is distance divided by speed, with consistent length units.\n\nStep 1: The speed magnitude is μE=1000×130=130000 cm/s.\n\nStep 2: Convert distance 13 µm to 0.0013 cm.\n\nStep 3: Time is L/v=1.0000e-8 s=10 ns.\n\nAnswer: 10 ns.\n\nCheck and interpretation: Electron drift direction is opposite the electric field, but the transit-time magnitude is positive. High-field velocity saturation is explicitly excluded.",
    "family": "drift-transit",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-emitter-current-3",
    "topic": "devices",
    "prompt": "An NPN transistor operates in forward-active mode with I_C=2.5 mA and β=110. Find emitter current in mA, rounded to four decimal places.",
    "choices": [
      "2.5 mA",
      "2.4773 mA",
      "2.5227 mA",
      "0.0227 mA"
    ],
    "key": 2,
    "why": "Principle: The emitter current is the sum of collector and base currents. Finite current gain β must be retained when an exact emitter-current value is requested.\n\nStep 1: Using β=IC/IB, the base current is IB=2.5/110=0.0227 mA.\n\nStep 2: By terminal-current conservation, IE=IC+IB.\n\nStep 3: Thus IE=2.5(1+1/110)=2.5227 mA.\n\nAnswer: 2.5227 mA.\n\nCheck and interpretation: Approximating IE≈IC is useful for large β but misses the base-current contribution asked for in this calculation.",
    "family": "bjt-emitter-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-miller-input-capacitance-3",
    "topic": "analog",
    "prompt": "A voltage amplifier has small-signal gain v_o/v_i=−16. A 2.5 pF capacitor connects its input and output. Under Miller’s theorem, find its equivalent input capacitance in pF.",
    "choices": [
      "2.5 pF",
      "37.5 pF",
      "2.6563 pF",
      "42.5 pF"
    ],
    "key": 3,
    "why": "Principle: Miller’s theorem replaces an impedance bridging two nodes by separate grounded impedances when their voltage ratio is known. For a capacitor, Cin=C(1−Av).\n\nStep 1: The capacitor input current is C d(vi−vo)/dt.\n\nStep 2: With vo=−16vi, the voltage across it is (1+16)vi.\n\nStep 3: Thus Cin=2.5×17=42.5 pF.\n\nAnswer: 42.5 pF.\n\nCheck and interpretation: The inverting gain multiplies the input capacitance substantially. The smaller C(1−1/Av) term belongs to the output equivalent.",
    "family": "miller-input-capacitance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-cmrr-gain-3",
    "topic": "analog",
    "prompt": "A differential amplifier has differential voltage gain 160 and CMRR=66 dB. Find the magnitude of common-mode voltage gain, rounded to four decimal places.",
    "choices": [
      "0.0802",
      "0",
      "12.4704",
      "8"
    ],
    "key": 0,
    "why": "Principle: CMRR is the ratio of differential gain to common-mode gain. Since these are voltage gains, its decibel definition uses 20log₁₀.\n\nStep 1: CMRRlinear=10^(66/20).\n\nStep 2: Using CMRRlinear=|Ad/Ac|, rearrange |Ac|=|Ad|/CMRRlinear.\n\nStep 3: Therefore |Ac|=160/10^(66/20)=0.0802.\n\nAnswer: 0.0802.\n\nCheck and interpretation: Using 10log rather than 20log treats an amplitude ratio as a power ratio and gives a very different answer.",
    "family": "cmrr-gain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-cascaded-pole-bandwidth-3",
    "topic": "analog",
    "prompt": "Two identical, isolated, unity-DC-gain low-pass stages each have a single pole at 16 kHz. What is the overall −3 dB frequency in kHz?",
    "choices": [
      "16 kHz",
      "8 kHz",
      "10.2975 kHz",
      "11.3137 kHz"
    ],
    "key": 2,
    "why": "Principle: Cascaded magnitudes multiply. Two identical first-order responses produce total magnitude 1/[1+(f/fc)²], rather than a single-pole response.\n\nStep 1: For each stage, |H|=1/√[1+(f/16)²].\n\nStep 2: For the cascade, set 1/[1+(f/16)²]=1/√2 at −3 dB.\n\nStep 3: Then (f/16)²=√2−1, so f=16√(√2−1)=10.2975 kHz.\n\nAnswer: 10.2975 kHz.\n\nCheck and interpretation: At each individual pole frequency the cascade is already at −6 dB. Therefore its overall −3 dB frequency must be lower than the individual pole frequency.",
    "family": "cascaded-pole-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-input-loading-3",
    "topic": "analog",
    "prompt": "A common-emitter stage has gain v_o/v_b=-23, rπ=7 kΩ and bias resistance 16 kΩ to AC ground. An input source has series resistance 5 kΩ. Neglect other input effects. Find v_o/v_s.",
    "choices": [
      "-11.348",
      "-23",
      "-13.4167",
      "11.348"
    ],
    "key": 0,
    "why": "Principle: Source resistance and amplifier input resistance form a voltage divider before the stage gain. The bias resistance loads rπ in parallel.\n\nStep 1: Input resistance is Rin=16∥7=4.8696 kΩ.\n\nStep 2: The base/source ratio is vb/vs=Rin/(Rs+Rin)=0.4934.\n\nStep 3: Multiply by the stage gain -23: vo/vs=-11.348.\n\nAnswer: -11.348.\n\nCheck and interpretation: The loaded gain magnitude is smaller than the specified base-to-output gain. Omitting the bias network overestimates input resistance and overall gain.",
    "family": "input-loading",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-series-feedback-input-3",
    "topic": "analog",
    "prompt": "A voltage-series negative-feedback amplifier has open-loop input resistance 5 kΩ and loop gain Aβ=16. Under the ideal feedback model, find closed-loop input resistance in kΩ.",
    "choices": [
      "85 kΩ",
      "0.2941 kΩ",
      "80 kΩ",
      "21 kΩ"
    ],
    "key": 0,
    "why": "Principle: Series mixing at the input reduces the error voltage for a given applied input, increasing input resistance by the feedback factor 1+Aβ.\n\nStep 1: The series-feedback resistance transformation is Rif=Ri(1+Aβ).\n\nStep 2: The feedback factor here is 1+16=17.\n\nStep 3: Therefore Rif=5×17=85 kΩ.\n\nAnswer: 85 kΩ.\n\nCheck and interpretation: Shunt mixing would instead reduce input resistance. The specified voltage-series topology is what determines the direction of the transformation.",
    "family": "series-feedback-input",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-schmitt-hysteresis-3",
    "topic": "analog",
    "prompt": "An ideal inverting Schmitt trigger has symmetric output saturation ±8 V. Its non-inverting input is a divider taking fraction β=4/(4+6) of the output, referenced to ground. Find hysteresis width in V.",
    "choices": [
      "3.2 V",
      "6.4 V",
      "20 V",
      "9.6 V"
    ],
    "key": 1,
    "why": "Principle: The positive-feedback divider sets two switching thresholds according to the present output state. Hysteresis width is the upper threshold minus the lower threshold.\n\nStep 1: When output is +8 V, threshold is +βVsat=+3.2 V.\n\nStep 2: When output is −8 V, threshold is −3.2 V.\n\nStep 3: Their difference is 2βVsat=2×(4/10)×8=6.4 V.\n\nAnswer: 6.4 V.\n\nCheck and interpretation: The single positive threshold is only half the hysteresis width because the saturation levels and divider reference are symmetric about zero.",
    "family": "schmitt-hysteresis",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-parity-function-count-3",
    "topic": "digital",
    "prompt": "An N-input XOR gate has N=6. Across all 2^N equally likely binary input words, how many make its output one?",
    "choices": [
      "32",
      "63",
      "6",
      "16"
    ],
    "key": 0,
    "why": "Principle: An XOR outputs one for odd input parity. The even- and odd-parity sets have the same size because flipping any fixed input bit pairs one with the other.\n\nStep 1: There are 2^6=64 possible words.\n\nStep 2: Flipping the first bit maps each even-parity word to one unique odd-parity word and vice versa.\n\nStep 3: Exactly half therefore have odd parity: 2^(6−1)=32.\n\nAnswer: 32.\n\nCheck and interpretation: XOR is not an OR gate: inputs with two ones have output zero. Counting all nonzero words would incorrectly include even-parity words.",
    "family": "parity-function-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-ripple-adder-delay-3",
    "topic": "digital",
    "prompt": "An 7-bit ripple-carry adder has carry propagation delay 1.3 ns per stage and final sum generation delay 2.3 ns after carry arrives. Ignore operand-to-carry startup delay. Find delay from carry-in to most-significant sum in ns.",
    "choices": [
      "11.4 ns",
      "10.1 ns",
      "16.1 ns",
      "7.8 ns"
    ],
    "key": 1,
    "why": "Principle: The most-significant sum depends on carry propagation through all lower stages, then the sum logic of the last stage. The stated model separates these delays.\n\nStep 1: A carry reaches the most-significant stage after 6 lower-stage carry delays.\n\nStep 2: This propagation takes 6×1.3=7.8 ns.\n\nStep 3: Add the final sum delay 2.3 ns to obtain 10.1 ns.\n\nAnswer: 10.1 ns.\n\nCheck and interpretation: The final carry-out path has a different endpoint. Counting n carry stages before generating the most-significant sum adds one stage too many.",
    "family": "ripple-adder-delay",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-hamming-parity-3",
    "topic": "digital",
    "prompt": "A binary single-error-correcting Hamming code protects 20 data bits. What is the minimum number of Hamming parity bits r satisfying 2^r≥m+r+1? Do not add an overall double-error-detection parity bit.",
    "choices": [
      "4",
      "5",
      "6",
      "7"
    ],
    "key": 1,
    "why": "Principle: The syndrome must identify every possible single-bit error among data and parity positions, plus the no-error case. Hence 2ʳ≥m+r+1.\n\nStep 1: For r=4, 2ʳ=16 is below m+r+1=25.\n\nStep 2: For r=5, 2ʳ=32 is at least m+r+1=26.\n\nStep 3: The minimum valid count is therefore 5 parity bits.\n\nAnswer: 5.\n\nCheck and interpretation: An extended SECDED code adds one overall parity bit, but that extra protection was explicitly excluded.",
    "family": "hamming-parity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-pipeline-latency-3",
    "topic": "digital",
    "prompt": "An ideal 7-stage pipeline has clock period 2.6 ns. Starting empty, it processes 35 instructions with no stalls and one completion per clock after filling. What is total time until all instructions finish?",
    "choices": [
      "637 ns",
      "91 ns",
      "109.2 ns",
      "106.6 ns"
    ],
    "key": 3,
    "why": "Principle: An initially empty ideal pipeline needs one full pipeline latency for the first instruction, then one cycle for each subsequent completion.\n\nStep 1: The first instruction finishes after 7 cycles.\n\nStep 2: The remaining 34 instructions each require one additional cycle, totaling 41 cycles.\n\nStep 3: Multiply by 2.6 ns/cycle to get 106.6 ns.\n\nAnswer: 106.6 ns.\n\nCheck and interpretation: Ignoring fill latency gives too small a result. Multiplying instruction count by stage count would describe fully serial execution without overlap.",
    "family": "pipeline-latency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-johnson-counter-3",
    "topic": "digital",
    "prompt": "An 7-flip-flop Johnson counter is initialized to all zero and operates in its intended cycle. How many distinct states occur before repetition?",
    "choices": [
      "7",
      "128",
      "14",
      "127"
    ],
    "key": 2,
    "why": "Principle: A Johnson counter feeds the complemented last-stage output into the first stage. Its intended cycle contains 2N states for N flip-flops.\n\nStep 1: Starting with all zeros, ones shift in for N=7 clocks until all stages are one.\n\nStep 2: Zeros then shift in for another 7 clocks, returning to all zero.\n\nStep 3: The cycle therefore contains 2×7=14 distinct states.\n\nAnswer: 14.\n\nCheck and interpretation: An ordinary ring counter has N intended states, while an unrestricted binary counter has 2ᴺ. Initialization matters because a Johnson counter can have other cycles.",
    "family": "johnson-counter",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-xor-probability-3",
    "topic": "digital",
    "prompt": "Independent binary signals A and B are each one with probability 0.25. What is the probability that A XOR B equals one?",
    "choices": [
      "0.0625",
      "0.4375",
      "0.375",
      "0.9375"
    ],
    "key": 2,
    "why": "Principle: XOR is one for exactly one asserted input: events (A=1,B=0) and (A=0,B=1). Independence permits multiplying probabilities in each case.\n\nStep 1: P(A=1,B=0)=0.25×0.75.\n\nStep 2: P(A=0,B=1)=0.75×0.25.\n\nStep 3: Add the disjoint cases: P(XOR=1)=2p(1−p)=0.375.\n\nAnswer: 0.375.\n\nCheck and interpretation: The union probability 2p−p² belongs to OR, which also accepts the both-one case. XOR excludes that case.",
    "family": "xor-probability",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-root-locus-breakaway-3",
    "topic": "control",
    "prompt": "For unity negative feedback with G(s)=K/[(s+4)(s+14)], K≥0, find the gain at the real-axis breakaway point.",
    "choices": [
      "81",
      "5",
      "56",
      "25"
    ],
    "key": 3,
    "why": "Principle: On the root locus, K=−(s+a)(s+b). A real-axis breakaway occurs where dK/ds=0, equivalently where the two real closed-loop roots merge.\n\nStep 1: Differentiate K(s) to get dK/ds=−[2s+18].\n\nStep 2: The stationary point is s=−18/2, between the two real open-loop poles.\n\nStep 3: Substituting gives Kbreak=(b−a)²/4=(14−4)²/4=25.\n\nAnswer: 25.\n\nCheck and interpretation: The same boundary follows by setting the characteristic quadratic discriminant to zero. Positive gain beyond it produces a complex-conjugate root pair.",
    "family": "root-locus-breakaway",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-lead-phase-3",
    "topic": "control",
    "prompt": "A lead compensator is G_c(s)=(1+sT)/(1+αsT), with α=0.25 and T>0. Find its maximum phase lead in degrees.",
    "choices": [
      "75.9638 degrees",
      "36.8699 degrees",
      "53.1301 degrees",
      "18.4349 degrees"
    ],
    "key": 1,
    "why": "Principle: For 0<α<1, a lead network has maximum phase φmax satisfying sinφmax=(1−α)/(1+α). The time constant sets the frequency of that maximum, not its angle.\n\nStep 1: Compute (1−α)/(1+α)=(1−0.25)/(1+0.25)=0.6.\n\nStep 2: Apply inverse sine to obtain the angle in radians.\n\nStep 3: Convert to degrees: φmax=36.8699 degrees.\n\nAnswer: 36.8699 degrees.\n\nCheck and interpretation: The compensator pole is at a higher frequency than its zero, giving positive phase lead. Reversing the pole and zero would produce phase lag.",
    "family": "lead-phase",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-delay-margin-3",
    "topic": "control",
    "prompt": "A nominal loop has phase margin 45 degrees at its unique gain crossover 5 rad/s. A pure time delay is added, without changing loop magnitude. What delay in s exhausts that phase margin?",
    "choices": [
      "9 s",
      "0.025 s",
      "0.3142 s",
      "0.1571 s"
    ],
    "key": 3,
    "why": "Principle: A pure delay e^(−sτ) has unit magnitude and contributes phase −ωτ radians. At the unchanged gain crossover it consumes the available phase margin.\n\nStep 1: Convert phase margin to radians: PM=45π/180.\n\nStep 2: Set the added lag ωgcτ equal to that margin at the limiting boundary.\n\nStep 3: Then τmax=(45π/180)/5=0.1571 s.\n\nAnswer: 0.1571 s.\n\nCheck and interpretation: This is the zero-margin boundary, so a positive remaining margin requires a smaller delay. Mixing degrees with ωτ in radians is a common error.",
    "family": "delay-margin",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-controllability-determinant-3",
    "topic": "control",
    "prompt": "For A=[0 1; −4 −6] and B=[0; 1], find the determinant of the 2×2 controllability matrix [B AB].",
    "choices": [
      "0",
      "1",
      "-1",
      "4"
    ],
    "key": 2,
    "why": "Principle: A two-state system is controllable if [B AB] has full rank. For a square 2×2 controllability matrix, a nonzero determinant establishes full rank.\n\nStep 1: Multiply AB=[1; −6].\n\nStep 2: Thus [B AB]=[0 1; 1 −6].\n\nStep 3: Its determinant is 0×(−6)−1×1=−1, independent of 4 and 6.\n\nAnswer: -1.\n\nCheck and interpretation: The nonzero determinant proves controllability for these parameters. Stability of A is a separate property and is not the controllability criterion.",
    "family": "controllability-determinant",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-pi-ramp-error-3",
    "topic": "control",
    "prompt": "A plant 1/(s+4) is controlled by C(s)=5+9/s in unity negative feedback. Assuming stable closed loop, find unit-ramp steady-state error.",
    "choices": [
      "0.4444",
      "0.2",
      "0.1111",
      "0.5556"
    ],
    "key": 0,
    "why": "Principle: A PI controller adds an integrator to the loop. Ramp error is set by the velocity constant of the complete controller–plant product.\n\nStep 1: Loop transfer is L(s)=(5s+9)/[s(s+4)].\n\nStep 2: Kv=lim(s→0)sL(s)=9/4.\n\nStep 3: Thus unit-ramp error is 1/Kv=4/9=0.4444.\n\nAnswer: 0.4444.\n\nCheck and interpretation: The characteristic polynomial is s²+9s+9, with positive coefficients, confirming stability here. Proportional gain changes dynamics but not this ramp-error constant.",
    "family": "pi-ramp-error",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-second-order-peak-time-3",
    "topic": "control",
    "prompt": "A standard underdamped second-order system has ω_n=6 rad/s and ζ=0.35. Find first peak time after a unit step, in s.",
    "choices": [
      "0.5236 s",
      "0.559 s",
      "0.4762 s",
      "1.1179 s"
    ],
    "key": 1,
    "why": "Principle: The oscillatory part of a second-order step response uses damped natural frequency ωd=ωn√(1−ζ²). Its first peak occurs at π/ωd.\n\nStep 1: Compute ωd=6√(1−0.35²)=5.6205 rad/s.\n\nStep 2: The first peak occurs when ωdt=π.\n\nStep 3: Therefore tp=π/5.6205=0.559 s.\n\nAnswer: 0.559 s.\n\nCheck and interpretation: Using ωn directly neglects damping’s effect on oscillation frequency. Peak time differs from rise time and settling time.",
    "family": "second-order-peak-time",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-cascade-noise-figure-3",
    "topic": "comm",
    "prompt": "Two receiver stages have noise figures 3.5 dB and 8 dB. The first stage power gain is 16 dB. Find cascade noise figure in dB using Friis’ noise formula.",
    "choices": [
      "11.5 dB",
      "3.5 dB",
      "3.7971 dB",
      "3.7513 dB"
    ],
    "key": 3,
    "why": "Principle: Friis’ cascade-noise formula uses linear noise factors and linear power gain: Ftotal=F₁+(F₂−1)/G₁. Convert to dB only after combining.\n\nStep 1: Convert F₁=10^(3.5/10), F₂=10^(8/10) and G₁=10^(16/10).\n\nStep 2: Compute Ftotal=2.2387+(6.3096−1)/39.8107=2.3721.\n\nStep 3: Then NFtotal=10log₁₀(Ftotal)=3.7513 dB.\n\nAnswer: 3.7513 dB.\n\nCheck and interpretation: The first-stage gain suppresses the input-referred impact of later-stage noise. Noise figures in dB cannot simply be added.",
    "family": "cascade-noise-figure",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-bpsk-target-ebn0-3",
    "topic": "comm",
    "prompt": "For coherent BPSK in AWGN, P_b=Q(√(2E_b/N₀)). A target error probability has Q⁻¹(P_b)=2.75. What minimum linear E_b/N₀ meets this target?",
    "choices": [
      "7.5625",
      "15.125",
      "1.375",
      "3.7813"
    ],
    "key": 3,
    "why": "Principle: The Q function decreases with its argument, so meeting an upper limit on bit error probability requires a sufficiently large Eb/N0.\n\nStep 1: Set the Q-function argument to its target inverse: √(2Eb/N₀)=2.75.\n\nStep 2: Square both sides to get 2Eb/N₀=7.5625.\n\nStep 3: Thus the minimum linear ratio is Eb/N₀=7.5625/2=3.7813.\n\nAnswer: 3.7813.\n\nCheck and interpretation: This is a linear energy-to-noise-density ratio, not a dB value. A dB answer would require an additional 10log₁₀ operation.",
    "family": "bpsk-target-ebn0",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-selection-diversity-3",
    "topic": "comm",
    "prompt": "A receiver chooses the best of 2 independent diversity branches. Each branch is below the required SNR threshold with probability 0.11. Find total outage probability.",
    "choices": [
      "0.11",
      "0.22",
      "0.0121",
      "0.2079"
    ],
    "key": 2,
    "why": "Principle: Selection combining is in outage only when every candidate branch is below threshold. Independence makes the joint outage probability the product of branch probabilities.\n\nStep 1: Each branch has outage probability p=0.11.\n\nStep 2: The best branch fails only if all 2 branches fail simultaneously.\n\nStep 3: Therefore Pout=p^2=(0.11)^2=0.0121.\n\nAnswer: 0.0121.\n\nCheck and interpretation: The expression 1−(1−p)ᴸ instead means at least one branch fails, which is not an outage when another usable branch remains.",
    "family": "selection-diversity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-nyquist-pcm-rate-3",
    "topic": "comm",
    "prompt": "A real low-pass message is ideally bandlimited to 6 kHz. It is sampled at the ideal Nyquist rate and quantized to 8 bits/sample. Ignoring overhead, find raw PCM bit rate in kbit/s.",
    "choices": [
      "48 kbit/s",
      "3072 kbit/s",
      "12 kbit/s",
      "96 kbit/s"
    ],
    "key": 3,
    "why": "Principle: The ideal Nyquist sampling rate is twice the highest baseband frequency. PCM bit rate is sample rate multiplied by bits per sample.\n\nStep 1: Minimum ideal sampling rate is fs=2×6=12 ksample/s.\n\nStep 2: Each sample contributes 8 binary digits.\n\nStep 3: Raw bit rate is 12×8=96 kbit/s.\n\nAnswer: 96 kbit/s.\n\nCheck and interpretation: The number of quantization levels is 2ᴺ, but each sample carries N bits, not 2ᴺ bits. Practical anti-alias filtering may require a higher sample rate.",
    "family": "nyquist-pcm-rate",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-filtered-awgn-variance-3",
    "topic": "comm",
    "prompt": "Continuous-time white Gaussian noise has two-sided PSD N₀/2 with N₀=0.35. It enters a filter h(t)=e^(−4t)u(t). Find output noise variance.",
    "choices": [
      "0.0438",
      "0.0219",
      "0.0875",
      "0.0055"
    ],
    "key": 1,
    "why": "Principle: For white noise with two-sided PSD N₀/2, filter output variance is (N₀/2)∫|h(t)|²dt. The impulse-response energy supplies the noise gain.\n\nStep 1: The impulse-response energy is ∫₀∞e^(−8t)dt=1/8.\n\nStep 2: Multiply by N₀/2=0.175.\n\nStep 3: Thus σout²=N₀/(4a)=0.35/(4×4)=0.0219.\n\nAnswer: 0.0219.\n\nCheck and interpretation: The two-sided PSD convention is specified to avoid a factor-of-two ambiguity. Replacing impulse-response energy by DC gain squared is not valid for white input noise.",
    "family": "filtered-awgn-variance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-binary-map-threshold-3",
    "topic": "comm",
    "prompt": "A receiver observes r=s+n, where s=+2.5 with prior 0.27 or −2.5 otherwise. Noise is zero-mean Gaussian with variance 0.8. With equal error costs, decide +2.5 if r exceeds what MAP threshold?",
    "choices": [
      "0",
      "-0.1591",
      "0.3183",
      "0.1591"
    ],
    "key": 3,
    "why": "Principle: The MAP detector compares posterior probabilities. Equal-variance Gaussian likelihoods lead to a linear observation threshold adjusted by the prior odds.\n\nStep 1: Log likelihood ratio is ln[p(r|+A)/p(r|−A)]=2Ar/σ².\n\nStep 2: MAP selects +A when this exceeds ln[P(−A)/P(+A)]=ln(0.73/0.27).\n\nStep 3: Thus threshold γ=σ²/(2A) ln[(1−p)/p]=0.1591.\n\nAnswer: 0.1591.\n\nCheck and interpretation: The positive symbol is less probable here, so the threshold is positive and favors the negative symbol unless the observation provides sufficient evidence.",
    "family": "binary-map-threshold",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-dielectric-boundary-reflection-3",
    "topic": "em",
    "prompt": "A plane wave in free space is normally incident on a lossless nonmagnetic dielectric with ε_r=5. What percentage of incident power is reflected?",
    "choices": [
      "38.1966 %",
      "14.5898 %",
      "85.4102 %",
      "7.2949 %"
    ],
    "key": 1,
    "why": "Principle: At normal incidence, electric-field reflection is Γ=(η₂−η₁)/(η₂+η₁). Reflected power in the incident medium is |Γ|² times incident power.\n\nStep 1: For μr=1, η₂=η₀/√5 and η₁=η₀.\n\nStep 2: Cancel η₀ to obtain Γ=(1−√5)/(1+√5).\n\nStep 3: The reflected percentage is 100Γ²=14.5898%.\n\nAnswer: 14.5898 %.\n\nCheck and interpretation: The electric reflection coefficient is negative because the second medium has lower impedance. Power reflection is nevertheless nonnegative after squaring.",
    "family": "dielectric-boundary-reflection",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-shorted-line-reactance-3",
    "topic": "em",
    "prompt": "A lossless 55 Ω line is short-circuited at its load and has electrical length 25 degrees. Find input reactance X in Ω, where Z_in=jX.",
    "choices": [
      "-25.6469 Ω",
      "25.6469 Ω",
      "117.9479 Ω",
      "23.244 Ω"
    ],
    "key": 1,
    "why": "Principle: The input impedance of a short-circuited lossless line is Zin=jZ₀tan(βl). Electrical length supplies βl directly.\n\nStep 1: Use βl=25 degrees=25π/180 radians.\n\nStep 2: Evaluate tan(βl)=0.4663.\n\nStep 3: Multiply by Z₀: X=55×0.4663=25.6469 Ω.\n\nAnswer: 25.6469 Ω.\n\nCheck and interpretation: For an electrical length between zero and 90 degrees, the shorted stub appears inductive, so X is positive. An open-circuit stub uses a negative cotangent relation.",
    "family": "shorted-line-reactance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-quarter-wave-matching-3",
    "topic": "em",
    "prompt": "A real 40 Ω source resistance is to be matched to a real 130 Ω load using a lossless quarter-wave transformer. What characteristic impedance is required, in Ω?",
    "choices": [
      "72.111 Ω",
      "85 Ω",
      "5200 Ω",
      "90 Ω"
    ],
    "key": 0,
    "why": "Principle: A quarter-wave transformer presents Zin=Zt²/RL. A match requires this input resistance to equal the source resistance.\n\nStep 1: Set Rs=Zt²/RL.\n\nStep 2: Rearrange to Zt²=RsRL=40×130=5200.\n\nStep 3: Take the positive root: Zt=√5200=72.111 Ω.\n\nAnswer: 72.111 Ω.\n\nCheck and interpretation: The transformer impedance is the geometric mean of the two real resistances. The match holds at the design electrical length rather than over all frequencies.",
    "family": "quarter-wave-matching",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-displacement-current-3",
    "topic": "em",
    "prompt": "An ideal parallel-plate capacitor has C=5 nF and applied voltage v(t)=13cos(1600t) V. What is peak displacement current in mA? Ignore fringing and leakage.",
    "choices": [
      "0.052 mA",
      "0.208 mA",
      "0.0001 mA",
      "0.104 mA"
    ],
    "key": 3,
    "why": "Principle: The displacement current through an ideal capacitor equals its terminal current i=C dv/dt. For a sinusoid its peak magnitude is CωVpeak.\n\nStep 1: Differentiate v(t): dv/dt=−20800sin(1600t) V/s.\n\nStep 2: Multiply peak slope by C=5×10⁻⁹ F.\n\nStep 3: Convert A to mA to obtain Ipeak=0.104 mA.\n\nAnswer: 0.104 mA.\n\nCheck and interpretation: The given angular frequency needs no additional 2π. Average current is zero over a cycle, while peak displacement current is nonzero.",
    "family": "displacement-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-antenna-aperture-3",
    "topic": "em",
    "prompt": "An antenna has linear gain 5 at wavelength 0.16 m. For perfect polarization matching, find maximum effective aperture in cm² using A_e=Gλ²/(4π).",
    "choices": [
      "0.0102 cm²",
      "1280 cm²",
      "50.9296 cm²",
      "101.8592 cm²"
    ],
    "key": 3,
    "why": "Principle: Antenna gain and maximum receiving effective area are related by Ae=Gλ²/(4π). The gain must be a linear value.\n\nStep 1: Compute Gλ²=5×(0.16)²=0.128 m².\n\nStep 2: Divide by 4π to get aperture in square metres.\n\nStep 3: Since 1 m²=10000 cm², the result is 101.8592 cm².\n\nAnswer: 101.8592 cm².\n\nCheck and interpretation: Effective aperture is a receiving-area measure and need not equal the antenna’s physical geometric area. The square-unit conversion requires 10000 rather than 100.",
    "family": "antenna-aperture",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-conductor-field-decay-3",
    "topic": "em",
    "prompt": "Inside a good conductor, field magnitude follows |E(z)|=|E(0)|e^(−z/δ) with skin depth δ=16 µm. At what depth in µm does field magnitude fall to 0.16 of its surface value?",
    "choices": [
      "29.3213 µm",
      "100 µm",
      "14.6607 µm",
      "58.6426 µm"
    ],
    "key": 0,
    "why": "Principle: Skin depth governs exponential field-amplitude attenuation. Solve the stated ratio by taking a natural logarithm.\n\nStep 1: Set e^(−z/16)=0.16.\n\nStep 2: Taking ln gives −z/16=ln(0.16).\n\nStep 3: Hence z=−16ln(0.16)=29.3213 µm.\n\nAnswer: 29.3213 µm.\n\nCheck and interpretation: This uses a field-amplitude ratio. Power falls with the square of field, so reaching the same numerical power fraction would require half this depth.",
    "family": "conductor-field-decay",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-repeated-mixture-3",
    "topic": "apt",
    "prompt": "A tank contains 26 L of pure concentrate. 5 L is removed and replaced by water, the mixture is stirred, and the same removal/replacement is repeated once. What percentage of the final mixture is concentrate?",
    "choices": [
      "61.5385 %",
      "80.7692 %",
      "34.7633 %",
      "65.2367 %"
    ],
    "key": 3,
    "why": "Principle: Every replacement retains the same fraction of whatever concentrate was present before that operation. Stirring makes the removed mixture representative of the tank.\n\nStep 1: One operation retains fraction 1−5/26 of the concentrate.\n\nStep 2: Two operations retain fraction (1−5/26)².\n\nStep 3: The tank returns to its original total volume each time, so final concentrate percentage is 65.2367%.\n\nAnswer: 65.2367 %.\n\nCheck and interpretation: The second removal contains some water, so it removes less concentrate than the first. Subtracting twice the first removed concentration overstates the loss.",
    "family": "repeated-mixture",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-adjacent-arrangement-3",
    "topic": "apt",
    "prompt": "7 distinct people stand in a uniformly random row. What is the probability that two specified people are adjacent?",
    "choices": [
      "0.1429",
      "0.3333",
      "0.8571",
      "0.2857"
    ],
    "key": 3,
    "why": "Principle: For adjacency counting, treat the two specified people as a block, then allow both orders inside the block. Divide favorable permutations by all permutations.\n\nStep 1: All arrangements number 7!.\n\nStep 2: Combine the specified pair into one block, leaving 6 objects with (6)! orders. The pair has two internal orders.\n\nStep 3: Thus probability=2(6)!/7!=2/7=0.2857.\n\nAnswer: 0.2857.\n\nCheck and interpretation: The pair can occupy any neighboring positions, not just an endpoint pair. The two internal orders must both be counted.",
    "family": "adjacent-arrangement",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-boat-round-trip-3",
    "topic": "apt",
    "prompt": "A boat moves at 13 km/h in still water and the current is 3.5 km/h. It travels 26 km downstream and returns the same distance upstream. What is total travel time in hours?",
    "choices": [
      "4 hours",
      "3.1515 hours",
      "4.3126 hours",
      "5.4737 hours"
    ],
    "key": 2,
    "why": "Principle: Current adds to speed downstream and subtracts upstream. Compute each travel time separately before adding.\n\nStep 1: Downstream speed is 13+3.5=16.5 km/h.\n\nStep 2: Upstream speed is 13−3.5=9.5 km/h, positive for these data.\n\nStep 3: Total time is 26/16.5+26/9.5=4.3126 hours.\n\nAnswer: 4.3126 hours.\n\nCheck and interpretation: The current slows the overall equal-distance round trip relative to travel in still water. The faster leg does not cancel the extra time spent on the slower leg.",
    "family": "boat-round-trip",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-opposite-trains-3",
    "topic": "apt",
    "prompt": "Trains of lengths 130 m and 180 m travel toward each other at 46.8 km/h and 64.8 km/h. How many seconds pass from their fronts meeting until they completely cross?",
    "choices": [
      "62 s",
      "4.1935 s",
      "10 s",
      "2.7778 s"
    ],
    "key": 2,
    "why": "Principle: For opposite directions, relative speed is the sum of speeds. Complete crossing requires relative motion through the sum of both lengths.\n\nStep 1: Combined length is 130+180=310 m.\n\nStep 2: Relative speed is (46.8+64.8)/3.6=31 m/s.\n\nStep 3: Crossing time is 310/31=10 s.\n\nAnswer: 10 s.\n\nCheck and interpretation: Subtracting speeds would apply to overtaking in the same direction. Counting just one train’s length would stop before both trains fully clear each other.",
    "family": "opposite-trains",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-weighted-group-average-3",
    "topic": "apt",
    "prompt": "A class of 26 students has mean score 63; another of 33 has mean score 73. What is the mean score when the classes are combined?",
    "choices": [
      "68",
      "68.5932",
      "67.4068",
      "136"
    ],
    "key": 1,
    "why": "Principle: A combined mean is weighted by group size. Recover each group’s total score before pooling.\n\nStep 1: First total score is 26×63=1638.\n\nStep 2: Second total score is 33×73=2409.\n\nStep 3: Divide the total 4047 by 59 students to obtain 68.5932.\n\nAnswer: 68.5932.\n\nCheck and interpretation: The result lies between the two class means and is closer to the mean of the larger class. A simple average of class means requires equal class sizes.",
    "family": "weighted-group-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-logarithm-equation-3",
    "topic": "apt",
    "prompt": "For real x>4, solve log₂(x−4)+log₂(x+4)=log₂(65).",
    "choices": [
      "4",
      "9",
      "13",
      "8.0623"
    ],
    "key": 1,
    "why": "Principle: For positive arguments, the sum of logarithms equals the logarithm of the product. The domain restriction must be checked after solving the resulting quadratic.\n\nStep 1: Combine the left side as log₂[(x−4)(x+4)].\n\nStep 2: Equate arguments: x²−16=65, giving x²=81.\n\nStep 3: The algebraic roots are ±9, but only +9 satisfies x>4.\n\nAnswer: 9.\n\nCheck and interpretation: The negative root is extraneous to the logarithm domain even though it satisfies the squared equation. Ignoring domain conditions can produce an invalid second answer.",
    "family": "logarithm-equation",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-bayes-detector-4",
    "topic": "math",
    "prompt": "A fault occurs with probability 0.04. A detector reports positive with probability 0.9 when faulty and 0.05 when healthy. Given a positive report, find the probability of a fault.",
    "choices": [
      "0.9",
      "0.04",
      "0.4286",
      "0.036"
    ],
    "key": 2,
    "why": "Principle: Bayes’ theorem combines likelihood with the prior fault probability. A positive detector report can come from a real fault or a false alarm.\n\nStep 1: True-positive probability is 0.9×0.04=0.036.\n\nStep 2: Total positive probability is 0.9×0.04+0.05×0.96=0.084.\n\nStep 3: Normalize the true-positive term by the total to obtain 0.4286.\n\nAnswer: 0.4286.\n\nCheck and interpretation: Sensitivity alone is not the posterior fault probability. When faults are rare, healthy components can contribute many false positives.",
    "family": "bayes-detector",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-inverse-trace-4",
    "topic": "math",
    "prompt": "An invertible 2×2 matrix A has trace 13 and determinant 40. Find trace(A⁻¹), rounded to four decimal places.",
    "choices": [
      "3.0769",
      "0.325",
      "13",
      "0.025"
    ],
    "key": 1,
    "why": "Principle: The eigenvalues of an inverse matrix are reciprocals of the original eigenvalues. Their sum is the original eigenvalue sum divided by the original product.\n\nStep 1: Let the eigenvalues be λ₁ and λ₂ with λ₁+λ₂=13 and λ₁λ₂=40.\n\nStep 2: Then trace(A⁻¹)=1/λ₁+1/λ₂=(λ₁+λ₂)/(λ₁λ₂).\n\nStep 3: Substitute the given invariants: 13/40=0.325.\n\nAnswer: 0.325.\n\nCheck and interpretation: The determinant is nonzero, so the inverse exists. Taking the reciprocal of the trace would not in general equal the trace of the inverse.",
    "family": "inverse-trace",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-residue-contour-4",
    "topic": "math",
    "prompt": "C is the counterclockwise circle |z|=6. For f(z)=1/[(z−5)(z−8)], what real coefficient c satisfies ∮_C f(z)dz=2πj c?",
    "choices": [
      "0.3333",
      "-0.6667",
      "0",
      "-0.3333"
    ],
    "key": 3,
    "why": "Principle: The residue theorem gives a contour integral as 2πj times the sum of residues of poles strictly inside a positively oriented contour.\n\nStep 1: The poles are z=5 and z=8. Only 5 lies inside |z|=6.\n\nStep 2: The simple-pole residue at z=5 is lim(z→5)(z−5)f(z)=1/(5−8).\n\nStep 3: Thus the integral is 2πj×(-0.3333), and c=-0.3333.\n\nAnswer: -0.3333.\n\nCheck and interpretation: The outside pole contributes no residue to this contour. Reversing the contour orientation would reverse the sign, but the stated orientation is counterclockwise.",
    "family": "residue-contour",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-ode-initial-value-4",
    "topic": "math",
    "prompt": "For t≥0, y′+5y=11, with y(0)=5. Find y(1/5), rounded to four decimal places.",
    "choices": [
      "2.2",
      "3.2301",
      "1.8394",
      "7.2"
    ],
    "key": 1,
    "why": "Principle: A first-order linear differential equation has a constant particular solution plus an exponentially decaying homogeneous solution. The initial condition fixes the decay coefficient.\n\nStep 1: At equilibrium, y∞=11/5. The homogeneous term is Ce^(−5t).\n\nStep 2: Apply y(0)=5 to get C=5−11/5.\n\nStep 3: At t=1/5, the exponential is e⁻¹, giving y=11/5+(5−11/5)e⁻¹=3.2301.\n\nAnswer: 3.2301.\n\nCheck and interpretation: Discarding the initial condition would leave only the final value. The result lies between the initial value and the equilibrium because the decay factor is between zero and one.",
    "family": "ode-initial-value",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-correlated-variance-4",
    "topic": "math",
    "prompt": "Random variables X and Y have variances 5 and 7, and covariance 0.5. Find Var(2X−Y).",
    "choices": [
      "27",
      "13",
      "29",
      "25"
    ],
    "key": 3,
    "why": "Principle: For correlated variables, Var(aX+bY)=a²Var(X)+b²Var(Y)+2abCov(X,Y). The cross term changes sign when the coefficients have opposite signs.\n\nStep 1: Here a=2 and b=−1, so the individual variance contribution is 4×5+7=27.\n\nStep 2: The covariance contribution is 2×2×(−1)×0.5=−2.\n\nStep 3: Adding them gives Var(2X−Y)=25.\n\nAnswer: 25.\n\nCheck and interpretation: Independence was not stated and would contradict the nonzero covariance. The negative coefficient on Y does not make its own variance term negative.",
    "family": "correlated-variance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-newton-step-4",
    "topic": "math",
    "prompt": "Newton–Raphson is used to solve x²−6=0 starting at x₀=5. What is x₁, rounded to four decimal places?",
    "choices": [
      "1.2",
      "-14",
      "2.4495",
      "3.1"
    ],
    "key": 3,
    "why": "Principle: Newton–Raphson updates x through xnew=x−f(x)/f′(x). A single update is generally an approximation, not the exact root.\n\nStep 1: For f(x)=x²−6, f′(x)=2x.\n\nStep 2: At x₀=5, f(x₀)=19 and f′(x₀)=10.\n\nStep 3: Thus x₁=5−(19)/10=(5+6/5)/2=3.1.\n\nAnswer: 3.1.\n\nCheck and interpretation: Using the exact square root would answer a different question: this asks for one algorithmic iteration from the specified starting point.",
    "family": "newton-step",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-dependent-input-resistance-4",
    "topic": "networks",
    "prompt": "A one-port has resistor R=6 kΩ to ground in parallel with an upward controlled current source g v/R, where v is port voltage and g=0.18. Find the input resistance in kΩ.",
    "choices": [
      "4.92 kΩ",
      "5.0847 kΩ",
      "7.3171 kΩ",
      "33.3333 kΩ"
    ],
    "key": 2,
    "why": "Principle: Input resistance with dependent sources must be obtained from a test voltage or current while retaining the dependent source. The upward source opposes current drawn through the resistor.\n\nStep 1: Apply test voltage v. Resistor current entering the network is v/R.\n\nStep 2: The controlled source supplies g v/R toward the port, so net entering current is i=(1−g)v/R.\n\nStep 3: Therefore Rin=v/i=R/(1−g)=6/(1−0.18)=7.3171 kΩ.\n\nAnswer: 7.3171 kΩ.\n\nCheck and interpretation: Turning off a dependent source would incorrectly leave only R. Since 0<g<1, the input resistance is positive and exceeds R.",
    "family": "dependent-input-resistance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-nodal-two-sources-4",
    "topic": "networks",
    "prompt": "A node is connected through 5 kΩ to a fixed 14 V node, through 7 kΩ to a fixed 8 V node, and through 8 kΩ to ground. Find its voltage in V.",
    "choices": [
      "11 V",
      "8.4275 V",
      "8.6154 V",
      "4.2667 V"
    ],
    "key": 1,
    "why": "Principle: Nodal analysis applies KCL using each branch’s voltage difference divided by resistance. The unknown node is not an unloaded two-resistor divider.\n\nStep 1: Write (v−14)/5+(v−8)/7+v/8=0, using kΩ and mA.\n\nStep 2: Collect v terms: v(1/5+1/7+1/8)=14/5+8/7.\n\nStep 3: Divide the source-current sum by total conductance to get v=8.4275 V.\n\nAnswer: 8.4275 V.\n\nCheck and interpretation: The ground branch loads both source paths. Ignoring either fixed-voltage source changes the node equation and gives a different voltage.",
    "family": "nodal-two-sources",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-series-capacitor-energy-4",
    "topic": "networks",
    "prompt": "Initially uncharged capacitors 6 µF and 8 µF are connected in series across 18 V DC and allowed to settle. Find total stored electrostatic energy in µJ.",
    "choices": [
      "2268 µJ",
      "1110.8571 µJ",
      "972 µJ",
      "555.4286 µJ"
    ],
    "key": 3,
    "why": "Principle: Series capacitors carry equal charge and have equivalent capacitance Ceq=C₁C₂/(C₁+C₂). Their total stored energy is CeqV²/2.\n\nStep 1: Compute Ceq=6×8/(6+8)=3.4286 µF.\n\nStep 2: The total terminal voltage is 18 V.\n\nStep 3: Energy is (1/2)×3.4286×18²=555.4286 µJ, since µF·V² gives µJ.\n\nAnswer: 555.4286 µJ.\n\nCheck and interpretation: Using C₁+C₂ would treat the connection as parallel. The smaller capacitor has the larger voltage, but the equivalent capacitance already accounts for voltage division.",
    "family": "series-capacitor-energy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rlc-critical-damping-4",
    "topic": "networks",
    "prompt": "A source-free series RLC circuit has L=6 mH and C=8 µF. Find the total series resistance needed for critical damping in Ω.",
    "choices": [
      "54.7723 Ω",
      "27.3861 Ω",
      "109.5445 Ω",
      "0.866 Ω"
    ],
    "key": 0,
    "why": "Principle: The series RLC natural polynomial is s²+(R/L)s+1/(LC). Critical damping occurs when the repeated-root condition α=ω₀ holds.\n\nStep 1: Identify α=R/(2L) and ω₀=1/√(LC).\n\nStep 2: Equating them gives Rcrit=2√(L/C).\n\nStep 3: Convert the given values to H and F, then calculate 2√[6×10⁻³/(8×10⁻⁶)]=54.7723 Ω.\n\nAnswer: 54.7723 Ω.\n\nCheck and interpretation: The factor two is essential. The parallel-RLC critical-resistance relation has a different form because its damping coefficient depends inversely on resistance.",
    "family": "rlc-critical-damping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-nonsinusoidal-rms-4",
    "topic": "networks",
    "prompt": "A current is i(t)=5+9cos(100t)+7sin(200t) A. Find RMS current over a common period, rounded to four decimal places.",
    "choices": [
      "8.8034 A",
      "9.4868 A",
      "16.3137 A",
      "12.4499 A"
    ],
    "key": 1,
    "why": "Principle: RMS is the square root of the mean square. Orthogonal harmonics have zero average cross products over a common period, while the DC contribution is not halved.\n\nStep 1: The DC mean-square contribution is 5²=25.\n\nStep 2: Each sinusoid contributes half its squared peak amplitude: (9²+7²)/2=65.\n\nStep 3: Add contributions and take the square root: Irms=√90=9.4868 A.\n\nAnswer: 9.4868 A.\n\nCheck and interpretation: Adding the individual RMS values is invalid for orthogonal harmonics. The DC term must retain its full squared value.",
    "family": "nonsinusoidal-rms",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-thevenin-divider-4",
    "topic": "networks",
    "prompt": "An ideal 9 V source drives series resistors 6 kΩ and 8 kΩ. The output terminals are across the lower 8 kΩ resistor. What Norton short-circuit current, in mA, corresponds to the output Thévenin equivalent?",
    "choices": [
      "1.5 mA",
      "0.6429 mA",
      "0.8571 mA",
      "0.75 mA"
    ],
    "key": 0,
    "why": "Principle: Norton current equals the terminal short-circuit current or Vth/Rth. When the output is shorted, the lower resistor is bypassed.\n\nStep 1: The open-circuit voltage is Vth=9×8/(6+8)=5.1429 V.\n\nStep 2: With the ideal source deactivated to a short, Rth=6∥8=3.4286 kΩ.\n\nStep 3: Therefore IN=Vth/Rth=9/6=1.5 mA.\n\nAnswer: 1.5 mA.\n\nCheck and interpretation: The same result follows directly under an output short: all source current flows through the upper resistor and bypasses the lower resistor.",
    "family": "thevenin-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-anticausal-z-4",
    "topic": "signals",
    "prompt": "X(z)=1/(1−0.4z⁻¹) has ROC |z|<0.4. Find x[−2], rounded to four decimal places.",
    "choices": [
      "-6.25",
      "-0.16",
      "6.25",
      "0"
    ],
    "key": 0,
    "why": "Principle: A rational z-transform needs its ROC to determine sidedness. ROC inside the pole corresponds to an anti-causal rather than a causal exponential.\n\nStep 1: For ROC |z|<a, the inverse is x[n]=−aⁿu[−n−1].\n\nStep 2: At n=−2 the unit step equals one.\n\nStep 3: Thus x[−2]=−(0.4)⁻²=−1/0.16=-6.25.\n\nAnswer: -6.25.\n\nCheck and interpretation: Using the right-sided inverse aⁿu[n] would require ROC outside the pole and would give the wrong negative-time samples.",
    "family": "anticausal-z",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-fourier-time-scaling-4",
    "topic": "signals",
    "prompt": "For x(t)=e^(−6|t|), let y(t)=x(2t). Using X(ω)=∫x(t)e^(−jωt)dt, find Y(5), rounded to four decimal places.",
    "choices": [
      "0.142",
      "0.1967",
      "0.284",
      "0.0984"
    ],
    "key": 0,
    "why": "Principle: Time compression y(t)=x(bt) gives Y(ω)=X(ω/b)/|b|. For e^(−a|t|), the transform is 2a/(a²+ω²).\n\nStep 1: Here b=2, so Y(ω)=(1/2)X(ω/2).\n\nStep 2: Substitute the known transform: Y(ω)=a/[a²+(ω/2)²].\n\nStep 3: At ω=5, Y=6/[36+25/4]=0.142.\n\nAnswer: 0.142.\n\nCheck and interpretation: Compressing the signal halves its total area, so Y(0) must be half of X(0). Forgetting the 1/2 scale factor fails that check.",
    "family": "fourier-time-scaling",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-rectangle-convolution-4",
    "topic": "signals",
    "prompt": "Let x(t)=1 for 0≤t≤6 and zero otherwise. If y=x*x, find y(6.5).",
    "choices": [
      "6",
      "5.5",
      "6.5",
      "0.5"
    ],
    "key": 1,
    "why": "Principle: Convolution of two unit-height rectangular pulses equals the length of their overlap as one is shifted. The result is triangular.\n\nStep 1: The integrand is one when τ lies in both [0,6] and [t−6,t].\n\nStep 2: At t=6.5, these intervals overlap from 0.5 to 6.\n\nStep 3: The overlap length and hence the convolution value is 6−0.5=5.5.\n\nAnswer: 5.5.\n\nCheck and interpretation: The peak occurs at t equal to one pulse width and equals that width. The requested point is on the descending side, so its value is slightly below the peak.",
    "family": "rectangle-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-periodic-average-power-4",
    "topic": "signals",
    "prompt": "Find time-average power of x(t)=2+5cos(3t)+6sin(6t), assuming a 1 Ω normalization.",
    "choices": [
      "65",
      "32.5",
      "34.5",
      "7.5"
    ],
    "key": 2,
    "why": "Principle: Average signal power is the mean of |x(t)|² over a period. Distinct harmonics and DC are mutually orthogonal over a common period.\n\nStep 1: The DC term contributes 2²=4.\n\nStep 2: The two sinusoidal terms contribute 5²/2 and 6²/2. Cross terms average to zero.\n\nStep 3: Thus P=4+25/2+36/2=34.5.\n\nAnswer: 34.5.\n\nCheck and interpretation: A nonzero periodic signal has finite average power but infinite total energy. The 1 Ω normalization avoids an additional resistance factor.",
    "family": "periodic-average-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-circular-convolution-dc-4",
    "topic": "signals",
    "prompt": "Two length-8 sequences have every sample equal to 5 and 6, respectively. Find any sample of their length-8 circular convolution.",
    "choices": [
      "30",
      "210",
      "1920",
      "240"
    ],
    "key": 3,
    "why": "Principle: An N-point circular convolution sums N products with indices wrapped modulo N. Constant sequences make every product identical.\n\nStep 1: Write y[r]=Σₘ₌₀ᴺ⁻¹x[m]h[(r−m) mod N].\n\nStep 2: Each term equals 5×6=30, independent of r and m.\n\nStep 3: There are 8 terms, so every output sample equals 8×30=240.\n\nAnswer: 240.\n\nCheck and interpretation: A DFT-domain derivation gives the same result: only the DC bins are nonzero, and the inverse transform contributes its 1/N factor.",
    "family": "circular-convolution-dc",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-white-noise-filter-4",
    "topic": "signals",
    "prompt": "Zero-mean discrete white noise with variance 5 enters a stable filter h[n]=(0.3)ⁿu[n]. Find the output variance, rounded to four decimal places.",
    "choices": [
      "7.1429",
      "4.55",
      "5.4945",
      "5"
    ],
    "key": 2,
    "why": "Principle: For white input noise, distinct input samples are uncorrelated. Output variance is input variance multiplied by the sum of squared impulse-response coefficients.\n\nStep 1: Write σy²=σx²Σₙ|h[n]|².\n\nStep 2: Here Σₙ₌₀∞a²ⁿ=1/(1−a²), because |a|<1.\n\nStep 3: Therefore σy²=5/(1−0.3²)=5.4945.\n\nAnswer: 5.4945.\n\nCheck and interpretation: Using DC gain squared would incorrectly assume all noise samples add coherently. Whiteness eliminates the cross-covariance terms.",
    "family": "white-noise-filter",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-depletion-doping-4",
    "topic": "devices",
    "prompt": "For a one-sided abrupt p⁺n junction at fixed total junction potential, the lightly doped n-side concentration is multiplied by 3. By what factor does total depletion width change?",
    "choices": [
      "0.5774",
      "1.7321",
      "0.3333",
      "3"
    ],
    "key": 0,
    "why": "Principle: For a one-sided abrupt junction, depletion extends mainly into the lightly doped side, with W≈√[2ε(Vbi+VR)/(qND)]. Hold the total potential fixed as stated.\n\nStep 1: All quantities except ND are fixed, so W is proportional to ND⁻¹ᐟ².\n\nStep 2: With ND,new=3ND,old, form Wnew/Wold=√(ND,old/ND,new).\n\nStep 3: The width factor is 1/√3=0.5774.\n\nAnswer: 0.5774.\n\nCheck and interpretation: More doping requires less depleted distance to supply the compensating space charge. Fixing total junction potential avoids an extra built-in-potential change.",
    "family": "depletion-doping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-saturation-check-4",
    "topic": "devices",
    "prompt": "An nMOS source is grounded, gate held at 2.3 V, drain connected through 4 kΩ to 14 V. V_TH=0.5 V and I_D=(0.4/2)(V_GS−V_TH)² mA in saturation. Neglect channel-length modulation. Find V_DS in V.",
    "choices": [
      "11.408 V",
      "14 V",
      "8.816 V",
      "2.592 V"
    ],
    "key": 0,
    "why": "Principle: First compute the square-law saturation current, then the drain resistor drop. The result must satisfy VDS≥VGS−VTH to validate the assumed region.\n\nStep 1: Overdrive is VOV=2.3−0.5=1.8 V.\n\nStep 2: Saturation current is ID=0.2×(1.8)²=0.648 mA.\n\nStep 3: Drain voltage is VDS=14−0.648×4=11.408 V.\n\nStep 4: This exceeds the overdrive 1.8 V, so saturation is consistent.\n\nAnswer: 11.408 V.\n\nCheck and interpretation: Applying a saturation formula without checking the resulting VDS can produce an invalid bias solution. The supplied parameters keep the MOSFET in saturation.",
    "family": "mos-saturation-check",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-piecewise-diode-circuit-4",
    "topic": "devices",
    "prompt": "A 9 V source feeds a forward-oriented diode through 5 kΩ. The diode model is open when off and a constant 0.6 V drop when on. Find the circuit current in mA.",
    "choices": [
      "1.8 mA",
      "1.92 mA",
      "0.84 mA",
      "1.68 mA"
    ],
    "key": 3,
    "why": "Principle: A piecewise diode circuit is solved by assuming a state and checking it. The positive source can forward bias this series diode, so the on-state model applies.\n\nStep 1: Assume the diode is on, fixing its forward voltage at 0.6 V.\n\nStep 2: KVL gives resistor voltage VR=9−0.6=8.4 V.\n\nStep 3: The current is VR/R=8.4/5=1.68 mA, which is positive and validates the on state.\n\nAnswer: 1.68 mA.\n\nCheck and interpretation: The given constant-drop model differs from an ideal zero-drop diode and from the exponential Shockley model. Use the specified approximation consistently.",
    "family": "piecewise-diode-circuit",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-junction-capacitance-4",
    "topic": "devices",
    "prompt": "An abrupt junction has built-in potential 0.7 V and zero-bias depletion capacitance C₀. At reverse bias 5 V, find C_j/C₀ using the depletion approximation.",
    "choices": [
      "0.3504",
      "0.1228",
      "2.8536",
      "0.1667"
    ],
    "key": 0,
    "why": "Principle: For an abrupt junction, depletion width grows as √(Vbi+VR), and capacitance varies inversely with depletion width. Hence Cj=C₀(1+VR/Vbi)⁻¹ᐟ².\n\nStep 1: At zero reverse bias the reference total potential is Vbi=0.7 V.\n\nStep 2: At the specified reverse bias it is 0.7+5=5.7 V.\n\nStep 3: Thus Cj/C₀=√[0.7/(0.7+5)]=0.3504.\n\nAnswer: 0.3504.\n\nCheck and interpretation: Reverse bias widens depletion and lowers capacitance, so the ratio must be below one. A linearly graded junction has a different exponent.",
    "family": "junction-capacitance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-drift-transit-4",
    "topic": "devices",
    "prompt": "An electron crosses 14 µm of uniform silicon under field magnitude 140 V/cm. Take mobility 1000 cm²/(V·s), ignore velocity saturation and diffusion. Find drift transit time in ns.",
    "choices": [
      "1000 ns",
      "10 ns",
      "0.1 ns",
      "100 ns"
    ],
    "key": 1,
    "why": "Principle: In the low-field mobility model, drift-speed magnitude is μE. Transit time is distance divided by speed, with consistent length units.\n\nStep 1: The speed magnitude is μE=1000×140=140000 cm/s.\n\nStep 2: Convert distance 14 µm to 0.0014 cm.\n\nStep 3: Time is L/v=1.0000e-8 s=10 ns.\n\nAnswer: 10 ns.\n\nCheck and interpretation: Electron drift direction is opposite the electric field, but the transit-time magnitude is positive. High-field velocity saturation is explicitly excluded.",
    "family": "drift-transit",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-emitter-current-4",
    "topic": "devices",
    "prompt": "An NPN transistor operates in forward-active mode with I_C=3 mA and β=120. Find emitter current in mA, rounded to four decimal places.",
    "choices": [
      "3 mA",
      "2.975 mA",
      "0.025 mA",
      "3.025 mA"
    ],
    "key": 3,
    "why": "Principle: The emitter current is the sum of collector and base currents. Finite current gain β must be retained when an exact emitter-current value is requested.\n\nStep 1: Using β=IC/IB, the base current is IB=3/120=0.025 mA.\n\nStep 2: By terminal-current conservation, IE=IC+IB.\n\nStep 3: Thus IE=3(1+1/120)=3.025 mA.\n\nAnswer: 3.025 mA.\n\nCheck and interpretation: Approximating IE≈IC is useful for large β but misses the base-current contribution asked for in this calculation.",
    "family": "bjt-emitter-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-miller-input-capacitance-4",
    "topic": "analog",
    "prompt": "A voltage amplifier has small-signal gain v_o/v_i=−18. A 3 pF capacitor connects its input and output. Under Miller’s theorem, find its equivalent input capacitance in pF.",
    "choices": [
      "57 pF",
      "3 pF",
      "51 pF",
      "3.1667 pF"
    ],
    "key": 0,
    "why": "Principle: Miller’s theorem replaces an impedance bridging two nodes by separate grounded impedances when their voltage ratio is known. For a capacitor, Cin=C(1−Av).\n\nStep 1: The capacitor input current is C d(vi−vo)/dt.\n\nStep 2: With vo=−18vi, the voltage across it is (1+18)vi.\n\nStep 3: Thus Cin=3×19=57 pF.\n\nAnswer: 57 pF.\n\nCheck and interpretation: The inverting gain multiplies the input capacitance substantially. The smaller C(1−1/Av) term belongs to the output equivalent.",
    "family": "miller-input-capacitance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-cmrr-gain-4",
    "topic": "analog",
    "prompt": "A differential amplifier has differential voltage gain 180 and CMRR=68 dB. Find the magnitude of common-mode voltage gain, rounded to four decimal places.",
    "choices": [
      "0",
      "0.0717",
      "13.9549",
      "9"
    ],
    "key": 1,
    "why": "Principle: CMRR is the ratio of differential gain to common-mode gain. Since these are voltage gains, its decibel definition uses 20log₁₀.\n\nStep 1: CMRRlinear=10^(68/20).\n\nStep 2: Using CMRRlinear=|Ad/Ac|, rearrange |Ac|=|Ad|/CMRRlinear.\n\nStep 3: Therefore |Ac|=180/10^(68/20)=0.0717.\n\nAnswer: 0.0717.\n\nCheck and interpretation: Using 10log rather than 20log treats an amplitude ratio as a power ratio and gives a very different answer.",
    "family": "cmrr-gain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-cascaded-pole-bandwidth-4",
    "topic": "analog",
    "prompt": "Two identical, isolated, unity-DC-gain low-pass stages each have a single pole at 18 kHz. What is the overall −3 dB frequency in kHz?",
    "choices": [
      "18 kHz",
      "9 kHz",
      "12.7279 kHz",
      "11.5847 kHz"
    ],
    "key": 3,
    "why": "Principle: Cascaded magnitudes multiply. Two identical first-order responses produce total magnitude 1/[1+(f/fc)²], rather than a single-pole response.\n\nStep 1: For each stage, |H|=1/√[1+(f/18)²].\n\nStep 2: For the cascade, set 1/[1+(f/18)²]=1/√2 at −3 dB.\n\nStep 3: Then (f/18)²=√2−1, so f=18√(√2−1)=11.5847 kHz.\n\nAnswer: 11.5847 kHz.\n\nCheck and interpretation: At each individual pole frequency the cascade is already at −6 dB. Therefore its overall −3 dB frequency must be lower than the individual pole frequency.",
    "family": "cascaded-pole-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-input-loading-4",
    "topic": "analog",
    "prompt": "A common-emitter stage has gain v_o/v_b=-24, rπ=8 kΩ and bias resistance 18 kΩ to AC ground. An input source has series resistance 6 kΩ. Neglect other input effects. Find v_o/v_s.",
    "choices": [
      "-24",
      "-11.52",
      "-13.7143",
      "11.52"
    ],
    "key": 1,
    "why": "Principle: Source resistance and amplifier input resistance form a voltage divider before the stage gain. The bias resistance loads rπ in parallel.\n\nStep 1: Input resistance is Rin=18∥8=5.5385 kΩ.\n\nStep 2: The base/source ratio is vb/vs=Rin/(Rs+Rin)=0.48.\n\nStep 3: Multiply by the stage gain -24: vo/vs=-11.52.\n\nAnswer: -11.52.\n\nCheck and interpretation: The loaded gain magnitude is smaller than the specified base-to-output gain. Omitting the bias network overestimates input resistance and overall gain.",
    "family": "input-loading",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-series-feedback-input-4",
    "topic": "analog",
    "prompt": "A voltage-series negative-feedback amplifier has open-loop input resistance 6 kΩ and loop gain Aβ=18. Under the ideal feedback model, find closed-loop input resistance in kΩ.",
    "choices": [
      "0.3158 kΩ",
      "114 kΩ",
      "108 kΩ",
      "24 kΩ"
    ],
    "key": 1,
    "why": "Principle: Series mixing at the input reduces the error voltage for a given applied input, increasing input resistance by the feedback factor 1+Aβ.\n\nStep 1: The series-feedback resistance transformation is Rif=Ri(1+Aβ).\n\nStep 2: The feedback factor here is 1+18=19.\n\nStep 3: Therefore Rif=6×19=114 kΩ.\n\nAnswer: 114 kΩ.\n\nCheck and interpretation: Shunt mixing would instead reduce input resistance. The specified voltage-series topology is what determines the direction of the transformation.",
    "family": "series-feedback-input",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-schmitt-hysteresis-4",
    "topic": "analog",
    "prompt": "An ideal inverting Schmitt trigger has symmetric output saturation ±9 V. Its non-inverting input is a divider taking fraction β=5/(5+7) of the output, referenced to ground. Find hysteresis width in V.",
    "choices": [
      "3.75 V",
      "21.6 V",
      "7.5 V",
      "10.5 V"
    ],
    "key": 2,
    "why": "Principle: The positive-feedback divider sets two switching thresholds according to the present output state. Hysteresis width is the upper threshold minus the lower threshold.\n\nStep 1: When output is +9 V, threshold is +βVsat=+3.75 V.\n\nStep 2: When output is −9 V, threshold is −3.75 V.\n\nStep 3: Their difference is 2βVsat=2×(5/12)×9=7.5 V.\n\nAnswer: 7.5 V.\n\nCheck and interpretation: The single positive threshold is only half the hysteresis width because the saturation levels and divider reference are symmetric about zero.",
    "family": "schmitt-hysteresis",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-parity-function-count-4",
    "topic": "digital",
    "prompt": "An N-input XOR gate has N=7. Across all 2^N equally likely binary input words, how many make its output one?",
    "choices": [
      "127",
      "64",
      "7",
      "32"
    ],
    "key": 1,
    "why": "Principle: An XOR outputs one for odd input parity. The even- and odd-parity sets have the same size because flipping any fixed input bit pairs one with the other.\n\nStep 1: There are 2^7=128 possible words.\n\nStep 2: Flipping the first bit maps each even-parity word to one unique odd-parity word and vice versa.\n\nStep 3: Exactly half therefore have odd parity: 2^(7−1)=64.\n\nAnswer: 64.\n\nCheck and interpretation: XOR is not an OR gate: inputs with two ones have output zero. Counting all nonzero words would incorrectly include even-parity words.",
    "family": "parity-function-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-ripple-adder-delay-4",
    "topic": "digital",
    "prompt": "An 8-bit ripple-carry adder has carry propagation delay 1.4 ns per stage and final sum generation delay 2.4 ns after carry arrives. Ignore operand-to-carry startup delay. Find delay from carry-in to most-significant sum in ns.",
    "choices": [
      "13.6 ns",
      "19.2 ns",
      "12.2 ns",
      "9.8 ns"
    ],
    "key": 2,
    "why": "Principle: The most-significant sum depends on carry propagation through all lower stages, then the sum logic of the last stage. The stated model separates these delays.\n\nStep 1: A carry reaches the most-significant stage after 7 lower-stage carry delays.\n\nStep 2: This propagation takes 7×1.4=9.8 ns.\n\nStep 3: Add the final sum delay 2.4 ns to obtain 12.2 ns.\n\nAnswer: 12.2 ns.\n\nCheck and interpretation: The final carry-out path has a different endpoint. Counting n carry stages before generating the most-significant sum adds one stage too many.",
    "family": "ripple-adder-delay",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-hamming-parity-4",
    "topic": "digital",
    "prompt": "A binary single-error-correcting Hamming code protects 24 data bits. What is the minimum number of Hamming parity bits r satisfying 2^r≥m+r+1? Do not add an overall double-error-detection parity bit.",
    "choices": [
      "4",
      "6",
      "5",
      "7"
    ],
    "key": 2,
    "why": "Principle: The syndrome must identify every possible single-bit error among data and parity positions, plus the no-error case. Hence 2ʳ≥m+r+1.\n\nStep 1: For r=4, 2ʳ=16 is below m+r+1=29.\n\nStep 2: For r=5, 2ʳ=32 is at least m+r+1=30.\n\nStep 3: The minimum valid count is therefore 5 parity bits.\n\nAnswer: 5.\n\nCheck and interpretation: An extended SECDED code adds one overall parity bit, but that extra protection was explicitly excluded.",
    "family": "hamming-parity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-pipeline-latency-4",
    "topic": "digital",
    "prompt": "An ideal 8-stage pipeline has clock period 2.8 ns. Starting empty, it processes 40 instructions with no stalls and one completion per clock after filling. What is total time until all instructions finish?",
    "choices": [
      "131.6 ns",
      "896 ns",
      "112 ns",
      "134.4 ns"
    ],
    "key": 0,
    "why": "Principle: An initially empty ideal pipeline needs one full pipeline latency for the first instruction, then one cycle for each subsequent completion.\n\nStep 1: The first instruction finishes after 8 cycles.\n\nStep 2: The remaining 39 instructions each require one additional cycle, totaling 47 cycles.\n\nStep 3: Multiply by 2.8 ns/cycle to get 131.6 ns.\n\nAnswer: 131.6 ns.\n\nCheck and interpretation: Ignoring fill latency gives too small a result. Multiplying instruction count by stage count would describe fully serial execution without overlap.",
    "family": "pipeline-latency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-johnson-counter-4",
    "topic": "digital",
    "prompt": "An 8-flip-flop Johnson counter is initialized to all zero and operates in its intended cycle. How many distinct states occur before repetition?",
    "choices": [
      "8",
      "256",
      "255",
      "16"
    ],
    "key": 3,
    "why": "Principle: A Johnson counter feeds the complemented last-stage output into the first stage. Its intended cycle contains 2N states for N flip-flops.\n\nStep 1: Starting with all zeros, ones shift in for N=8 clocks until all stages are one.\n\nStep 2: Zeros then shift in for another 8 clocks, returning to all zero.\n\nStep 3: The cycle therefore contains 2×8=16 distinct states.\n\nAnswer: 16.\n\nCheck and interpretation: An ordinary ring counter has N intended states, while an unrestricted binary counter has 2ᴺ. Initialization matters because a Johnson counter can have other cycles.",
    "family": "johnson-counter",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-xor-probability-4",
    "topic": "digital",
    "prompt": "Independent binary signals A and B are each one with probability 0.3. What is the probability that A XOR B equals one?",
    "choices": [
      "0.09",
      "0.51",
      "0.91",
      "0.42"
    ],
    "key": 3,
    "why": "Principle: XOR is one for exactly one asserted input: events (A=1,B=0) and (A=0,B=1). Independence permits multiplying probabilities in each case.\n\nStep 1: P(A=1,B=0)=0.3×0.7.\n\nStep 2: P(A=0,B=1)=0.7×0.3.\n\nStep 3: Add the disjoint cases: P(XOR=1)=2p(1−p)=0.42.\n\nAnswer: 0.42.\n\nCheck and interpretation: The union probability 2p−p² belongs to OR, which also accepts the both-one case. XOR excludes that case.",
    "family": "xor-probability",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-root-locus-breakaway-4",
    "topic": "control",
    "prompt": "For unity negative feedback with G(s)=K/[(s+5)(s+17)], K≥0, find the gain at the real-axis breakaway point.",
    "choices": [
      "36",
      "121",
      "6",
      "85"
    ],
    "key": 0,
    "why": "Principle: On the root locus, K=−(s+a)(s+b). A real-axis breakaway occurs where dK/ds=0, equivalently where the two real closed-loop roots merge.\n\nStep 1: Differentiate K(s) to get dK/ds=−[2s+22].\n\nStep 2: The stationary point is s=−22/2, between the two real open-loop poles.\n\nStep 3: Substituting gives Kbreak=(b−a)²/4=(17−5)²/4=36.\n\nAnswer: 36.\n\nCheck and interpretation: The same boundary follows by setting the characteristic quadratic discriminant to zero. Positive gain beyond it produces a complex-conjugate root pair.",
    "family": "root-locus-breakaway",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-lead-phase-4",
    "topic": "control",
    "prompt": "A lead compensator is G_c(s)=(1+sT)/(1+αsT), with α=0.3 and T>0. Find its maximum phase lead in degrees.",
    "choices": [
      "73.3008 degrees",
      "57.421 degrees",
      "32.579 degrees",
      "16.2895 degrees"
    ],
    "key": 2,
    "why": "Principle: For 0<α<1, a lead network has maximum phase φmax satisfying sinφmax=(1−α)/(1+α). The time constant sets the frequency of that maximum, not its angle.\n\nStep 1: Compute (1−α)/(1+α)=(1−0.3)/(1+0.3)=0.5385.\n\nStep 2: Apply inverse sine to obtain the angle in radians.\n\nStep 3: Convert to degrees: φmax=32.579 degrees.\n\nAnswer: 32.579 degrees.\n\nCheck and interpretation: The compensator pole is at a higher frequency than its zero, giving positive phase lead. Reversing the pole and zero would produce phase lag.",
    "family": "lead-phase",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-delay-margin-4",
    "topic": "control",
    "prompt": "A nominal loop has phase margin 50 degrees at its unique gain crossover 6 rad/s. A pure time delay is added, without changing loop magnitude. What delay in s exhausts that phase margin?",
    "choices": [
      "0.1454 s",
      "8.3333 s",
      "0.0231 s",
      "0.2909 s"
    ],
    "key": 0,
    "why": "Principle: A pure delay e^(−sτ) has unit magnitude and contributes phase −ωτ radians. At the unchanged gain crossover it consumes the available phase margin.\n\nStep 1: Convert phase margin to radians: PM=50π/180.\n\nStep 2: Set the added lag ωgcτ equal to that margin at the limiting boundary.\n\nStep 3: Then τmax=(50π/180)/6=0.1454 s.\n\nAnswer: 0.1454 s.\n\nCheck and interpretation: This is the zero-margin boundary, so a positive remaining margin requires a smaller delay. Mixing degrees with ωτ in radians is a common error.",
    "family": "delay-margin",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-controllability-determinant-4",
    "topic": "control",
    "prompt": "For A=[0 1; −5 −7] and B=[0; 1], find the determinant of the 2×2 controllability matrix [B AB].",
    "choices": [
      "0",
      "1",
      "5",
      "-1"
    ],
    "key": 3,
    "why": "Principle: A two-state system is controllable if [B AB] has full rank. For a square 2×2 controllability matrix, a nonzero determinant establishes full rank.\n\nStep 1: Multiply AB=[1; −7].\n\nStep 2: Thus [B AB]=[0 1; 1 −7].\n\nStep 3: Its determinant is 0×(−7)−1×1=−1, independent of 5 and 7.\n\nAnswer: -1.\n\nCheck and interpretation: The nonzero determinant proves controllability for these parameters. Stability of A is a separate property and is not the controllability criterion.",
    "family": "controllability-determinant",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-pi-ramp-error-4",
    "topic": "control",
    "prompt": "A plant 1/(s+5) is controlled by C(s)=6+11/s in unity negative feedback. Assuming stable closed loop, find unit-ramp steady-state error.",
    "choices": [
      "0.1667",
      "0.4545",
      "0.0909",
      "0.5455"
    ],
    "key": 1,
    "why": "Principle: A PI controller adds an integrator to the loop. Ramp error is set by the velocity constant of the complete controller–plant product.\n\nStep 1: Loop transfer is L(s)=(6s+11)/[s(s+5)].\n\nStep 2: Kv=lim(s→0)sL(s)=11/5.\n\nStep 3: Thus unit-ramp error is 1/Kv=5/11=0.4545.\n\nAnswer: 0.4545.\n\nCheck and interpretation: The characteristic polynomial is s²+11s+11, with positive coefficients, confirming stability here. Proportional gain changes dynamics but not this ramp-error constant.",
    "family": "pi-ramp-error",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-second-order-peak-time-4",
    "topic": "control",
    "prompt": "A standard underdamped second-order system has ω_n=7 rad/s and ζ=0.4. Find first peak time after a unit step, in s.",
    "choices": [
      "0.4488 s",
      "0.3571 s",
      "0.4897 s",
      "0.9794 s"
    ],
    "key": 2,
    "why": "Principle: The oscillatory part of a second-order step response uses damped natural frequency ωd=ωn√(1−ζ²). Its first peak occurs at π/ωd.\n\nStep 1: Compute ωd=7√(1−0.4²)=6.4156 rad/s.\n\nStep 2: The first peak occurs when ωdt=π.\n\nStep 3: Therefore tp=π/6.4156=0.4897 s.\n\nAnswer: 0.4897 s.\n\nCheck and interpretation: Using ωn directly neglects damping’s effect on oscillation frequency. Peak time differs from rise time and settling time.",
    "family": "second-order-peak-time",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-cascade-noise-figure-4",
    "topic": "comm",
    "prompt": "Two receiver stages have noise figures 4 dB and 9 dB. The first stage power gain is 18 dB. Find cascade noise figure in dB using Friis’ noise formula.",
    "choices": [
      "4.1862 dB",
      "13 dB",
      "4 dB",
      "4.2124 dB"
    ],
    "key": 0,
    "why": "Principle: Friis’ cascade-noise formula uses linear noise factors and linear power gain: Ftotal=F₁+(F₂−1)/G₁. Convert to dB only after combining.\n\nStep 1: Convert F₁=10^(4/10), F₂=10^(9/10) and G₁=10^(18/10).\n\nStep 2: Compute Ftotal=2.5119+(7.9433−1)/63.0957=2.6219.\n\nStep 3: Then NFtotal=10log₁₀(Ftotal)=4.1862 dB.\n\nAnswer: 4.1862 dB.\n\nCheck and interpretation: The first-stage gain suppresses the input-referred impact of later-stage noise. Noise figures in dB cannot simply be added.",
    "family": "cascade-noise-figure",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-bpsk-target-ebn0-4",
    "topic": "comm",
    "prompt": "For coherent BPSK in AWGN, P_b=Q(√(2E_b/N₀)). A target error probability has Q⁻¹(P_b)=3. What minimum linear E_b/N₀ meets this target?",
    "choices": [
      "4.5",
      "9",
      "18",
      "1.5"
    ],
    "key": 0,
    "why": "Principle: The Q function decreases with its argument, so meeting an upper limit on bit error probability requires a sufficiently large Eb/N0.\n\nStep 1: Set the Q-function argument to its target inverse: √(2Eb/N₀)=3.\n\nStep 2: Square both sides to get 2Eb/N₀=9.\n\nStep 3: Thus the minimum linear ratio is Eb/N₀=9/2=4.5.\n\nAnswer: 4.5.\n\nCheck and interpretation: This is a linear energy-to-noise-density ratio, not a dB value. A dB answer would require an additional 10log₁₀ operation.",
    "family": "bpsk-target-ebn0",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-selection-diversity-4",
    "topic": "comm",
    "prompt": "A receiver chooses the best of 3 independent diversity branches. Each branch is below the required SNR threshold with probability 0.13. Find total outage probability.",
    "choices": [
      "0.13",
      "0.39",
      "0.3415",
      "0.0022"
    ],
    "key": 3,
    "why": "Principle: Selection combining is in outage only when every candidate branch is below threshold. Independence makes the joint outage probability the product of branch probabilities.\n\nStep 1: Each branch has outage probability p=0.13.\n\nStep 2: The best branch fails only if all 3 branches fail simultaneously.\n\nStep 3: Therefore Pout=p^3=(0.13)^3=0.0022.\n\nAnswer: 0.0022.\n\nCheck and interpretation: The expression 1−(1−p)ᴸ instead means at least one branch fails, which is not an outage when another usable branch remains.",
    "family": "selection-diversity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-nyquist-pcm-rate-4",
    "topic": "comm",
    "prompt": "A real low-pass message is ideally bandlimited to 7 kHz. It is sampled at the ideal Nyquist rate and quantized to 9 bits/sample. Ignoring overhead, find raw PCM bit rate in kbit/s.",
    "choices": [
      "126 kbit/s",
      "63 kbit/s",
      "7168 kbit/s",
      "14 kbit/s"
    ],
    "key": 0,
    "why": "Principle: The ideal Nyquist sampling rate is twice the highest baseband frequency. PCM bit rate is sample rate multiplied by bits per sample.\n\nStep 1: Minimum ideal sampling rate is fs=2×7=14 ksample/s.\n\nStep 2: Each sample contributes 9 binary digits.\n\nStep 3: Raw bit rate is 14×9=126 kbit/s.\n\nAnswer: 126 kbit/s.\n\nCheck and interpretation: The number of quantization levels is 2ᴺ, but each sample carries N bits, not 2ᴺ bits. Practical anti-alias filtering may require a higher sample rate.",
    "family": "nyquist-pcm-rate",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-filtered-awgn-variance-4",
    "topic": "comm",
    "prompt": "Continuous-time white Gaussian noise has two-sided PSD N₀/2 with N₀=0.4. It enters a filter h(t)=e^(−5t)u(t). Find output noise variance.",
    "choices": [
      "0.04",
      "0.08",
      "0.02",
      "0.004"
    ],
    "key": 2,
    "why": "Principle: For white noise with two-sided PSD N₀/2, filter output variance is (N₀/2)∫|h(t)|²dt. The impulse-response energy supplies the noise gain.\n\nStep 1: The impulse-response energy is ∫₀∞e^(−10t)dt=1/10.\n\nStep 2: Multiply by N₀/2=0.2.\n\nStep 3: Thus σout²=N₀/(4a)=0.4/(4×5)=0.02.\n\nAnswer: 0.02.\n\nCheck and interpretation: The two-sided PSD convention is specified to avoid a factor-of-two ambiguity. Replacing impulse-response energy by DC gain squared is not valid for white input noise.",
    "family": "filtered-awgn-variance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-binary-map-threshold-4",
    "topic": "comm",
    "prompt": "A receiver observes r=s+n, where s=+3 with prior 0.31 or −3 otherwise. Noise is zero-mean Gaussian with variance 0.9. With equal error costs, decide +3 if r exceeds what MAP threshold?",
    "choices": [
      "0.12",
      "0",
      "-0.12",
      "0.24"
    ],
    "key": 0,
    "why": "Principle: The MAP detector compares posterior probabilities. Equal-variance Gaussian likelihoods lead to a linear observation threshold adjusted by the prior odds.\n\nStep 1: Log likelihood ratio is ln[p(r|+A)/p(r|−A)]=2Ar/σ².\n\nStep 2: MAP selects +A when this exceeds ln[P(−A)/P(+A)]=ln(0.69/0.31).\n\nStep 3: Thus threshold γ=σ²/(2A) ln[(1−p)/p]=0.12.\n\nAnswer: 0.12.\n\nCheck and interpretation: The positive symbol is less probable here, so the threshold is positive and favors the negative symbol unless the observation provides sufficient evidence.",
    "family": "binary-map-threshold",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-dielectric-boundary-reflection-4",
    "topic": "em",
    "prompt": "A plane wave in free space is normally incident on a lossless nonmagnetic dielectric with ε_r=6. What percentage of incident power is reflected?",
    "choices": [
      "42.0204 %",
      "82.3429 %",
      "17.6571 %",
      "8.8286 %"
    ],
    "key": 2,
    "why": "Principle: At normal incidence, electric-field reflection is Γ=(η₂−η₁)/(η₂+η₁). Reflected power in the incident medium is |Γ|² times incident power.\n\nStep 1: For μr=1, η₂=η₀/√6 and η₁=η₀.\n\nStep 2: Cancel η₀ to obtain Γ=(1−√6)/(1+√6).\n\nStep 3: The reflected percentage is 100Γ²=17.6571%.\n\nAnswer: 17.6571 %.\n\nCheck and interpretation: The electric reflection coefficient is negative because the second medium has lower impedance. Power reflection is nevertheless nonnegative after squaring.",
    "family": "dielectric-boundary-reflection",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-shorted-line-reactance-4",
    "topic": "em",
    "prompt": "A lossless 60 Ω line is short-circuited at its load and has electrical length 30 degrees. Find input reactance X in Ω, where Z_in=jX.",
    "choices": [
      "-34.641 Ω",
      "103.923 Ω",
      "34.641 Ω",
      "30 Ω"
    ],
    "key": 2,
    "why": "Principle: The input impedance of a short-circuited lossless line is Zin=jZ₀tan(βl). Electrical length supplies βl directly.\n\nStep 1: Use βl=30 degrees=30π/180 radians.\n\nStep 2: Evaluate tan(βl)=0.5774.\n\nStep 3: Multiply by Z₀: X=60×0.5774=34.641 Ω.\n\nAnswer: 34.641 Ω.\n\nCheck and interpretation: For an electrical length between zero and 90 degrees, the shorted stub appears inductive, so X is positive. An open-circuit stub uses a negative cotangent relation.",
    "family": "shorted-line-reactance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-quarter-wave-matching-4",
    "topic": "em",
    "prompt": "A real 45 Ω source resistance is to be matched to a real 140 Ω load using a lossless quarter-wave transformer. What characteristic impedance is required, in Ω?",
    "choices": [
      "92.5 Ω",
      "79.3725 Ω",
      "6300 Ω",
      "95 Ω"
    ],
    "key": 1,
    "why": "Principle: A quarter-wave transformer presents Zin=Zt²/RL. A match requires this input resistance to equal the source resistance.\n\nStep 1: Set Rs=Zt²/RL.\n\nStep 2: Rearrange to Zt²=RsRL=45×140=6300.\n\nStep 3: Take the positive root: Zt=√6300=79.3725 Ω.\n\nAnswer: 79.3725 Ω.\n\nCheck and interpretation: The transformer impedance is the geometric mean of the two real resistances. The match holds at the design electrical length rather than over all frequencies.",
    "family": "quarter-wave-matching",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-displacement-current-4",
    "topic": "em",
    "prompt": "An ideal parallel-plate capacitor has C=6 nF and applied voltage v(t)=14cos(1800t) V. What is peak displacement current in mA? Ignore fringing and leakage.",
    "choices": [
      "0.1512 mA",
      "0.0756 mA",
      "0.3024 mA",
      "0.0001 mA"
    ],
    "key": 0,
    "why": "Principle: The displacement current through an ideal capacitor equals its terminal current i=C dv/dt. For a sinusoid its peak magnitude is CωVpeak.\n\nStep 1: Differentiate v(t): dv/dt=−25200sin(1800t) V/s.\n\nStep 2: Multiply peak slope by C=6×10⁻⁹ F.\n\nStep 3: Convert A to mA to obtain Ipeak=0.1512 mA.\n\nAnswer: 0.1512 mA.\n\nCheck and interpretation: The given angular frequency needs no additional 2π. Average current is zero over a cycle, while peak displacement current is nonzero.",
    "family": "displacement-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-antenna-aperture-4",
    "topic": "em",
    "prompt": "An antenna has linear gain 6 at wavelength 0.18 m. For perfect polarization matching, find maximum effective aperture in cm² using A_e=Gλ²/(4π).",
    "choices": [
      "154.6986 cm²",
      "0.0155 cm²",
      "1944 cm²",
      "77.3493 cm²"
    ],
    "key": 0,
    "why": "Principle: Antenna gain and maximum receiving effective area are related by Ae=Gλ²/(4π). The gain must be a linear value.\n\nStep 1: Compute Gλ²=6×(0.18)²=0.1944 m².\n\nStep 2: Divide by 4π to get aperture in square metres.\n\nStep 3: Since 1 m²=10000 cm², the result is 154.6986 cm².\n\nAnswer: 154.6986 cm².\n\nCheck and interpretation: Effective aperture is a receiving-area measure and need not equal the antenna’s physical geometric area. The square-unit conversion requires 10000 rather than 100.",
    "family": "antenna-aperture",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-conductor-field-decay-4",
    "topic": "em",
    "prompt": "Inside a good conductor, field magnitude follows |E(z)|=|E(0)|e^(−z/δ) with skin depth δ=18 µm. At what depth in µm does field magnitude fall to 0.18 of its surface value?",
    "choices": [
      "100 µm",
      "30.8664 µm",
      "15.4332 µm",
      "61.7327 µm"
    ],
    "key": 1,
    "why": "Principle: Skin depth governs exponential field-amplitude attenuation. Solve the stated ratio by taking a natural logarithm.\n\nStep 1: Set e^(−z/18)=0.18.\n\nStep 2: Taking ln gives −z/18=ln(0.18).\n\nStep 3: Hence z=−18ln(0.18)=30.8664 µm.\n\nAnswer: 30.8664 µm.\n\nCheck and interpretation: This uses a field-amplitude ratio. Power falls with the square of field, so reaching the same numerical power fraction would require half this depth.",
    "family": "conductor-field-decay",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-repeated-mixture-4",
    "topic": "apt",
    "prompt": "A tank contains 28 L of pure concentrate. 6 L is removed and replaced by water, the mixture is stirred, and the same removal/replacement is repeated once. What percentage of the final mixture is concentrate?",
    "choices": [
      "61.7347 %",
      "57.1429 %",
      "78.5714 %",
      "38.2653 %"
    ],
    "key": 0,
    "why": "Principle: Every replacement retains the same fraction of whatever concentrate was present before that operation. Stirring makes the removed mixture representative of the tank.\n\nStep 1: One operation retains fraction 1−6/28 of the concentrate.\n\nStep 2: Two operations retain fraction (1−6/28)².\n\nStep 3: The tank returns to its original total volume each time, so final concentrate percentage is 61.7347%.\n\nAnswer: 61.7347 %.\n\nCheck and interpretation: The second removal contains some water, so it removes less concentrate than the first. Subtracting twice the first removed concentration overstates the loss.",
    "family": "repeated-mixture",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-adjacent-arrangement-4",
    "topic": "apt",
    "prompt": "8 distinct people stand in a uniformly random row. What is the probability that two specified people are adjacent?",
    "choices": [
      "0.25",
      "0.125",
      "0.2857",
      "0.875"
    ],
    "key": 0,
    "why": "Principle: For adjacency counting, treat the two specified people as a block, then allow both orders inside the block. Divide favorable permutations by all permutations.\n\nStep 1: All arrangements number 8!.\n\nStep 2: Combine the specified pair into one block, leaving 7 objects with (7)! orders. The pair has two internal orders.\n\nStep 3: Thus probability=2(7)!/8!=2/8=0.25.\n\nAnswer: 0.25.\n\nCheck and interpretation: The pair can occupy any neighboring positions, not just an endpoint pair. The two internal orders must both be counted.",
    "family": "adjacent-arrangement",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-boat-round-trip-4",
    "topic": "apt",
    "prompt": "A boat moves at 14 km/h in still water and the current is 4 km/h. It travels 28 km downstream and returns the same distance upstream. What is total travel time in hours?",
    "choices": [
      "4 hours",
      "3.1111 hours",
      "5.6 hours",
      "4.3556 hours"
    ],
    "key": 3,
    "why": "Principle: Current adds to speed downstream and subtracts upstream. Compute each travel time separately before adding.\n\nStep 1: Downstream speed is 14+4=18 km/h.\n\nStep 2: Upstream speed is 14−4=10 km/h, positive for these data.\n\nStep 3: Total time is 28/18+28/10=4.3556 hours.\n\nAnswer: 4.3556 hours.\n\nCheck and interpretation: The current slows the overall equal-distance round trip relative to travel in still water. The faster leg does not cancel the extra time spent on the slower leg.",
    "family": "boat-round-trip",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-opposite-trains-4",
    "topic": "apt",
    "prompt": "Trains of lengths 140 m and 190 m travel toward each other at 50.4 km/h and 68.4 km/h. How many seconds pass from their fronts meeting until they completely cross?",
    "choices": [
      "66 s",
      "4.2424 s",
      "2.7778 s",
      "10 s"
    ],
    "key": 3,
    "why": "Principle: For opposite directions, relative speed is the sum of speeds. Complete crossing requires relative motion through the sum of both lengths.\n\nStep 1: Combined length is 140+190=330 m.\n\nStep 2: Relative speed is (50.4+68.4)/3.6=33 m/s.\n\nStep 3: Crossing time is 330/33=10 s.\n\nAnswer: 10 s.\n\nCheck and interpretation: Subtracting speeds would apply to overtaking in the same direction. Counting just one train’s length would stop before both trains fully clear each other.",
    "family": "opposite-trains",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-weighted-group-average-4",
    "topic": "apt",
    "prompt": "A class of 28 students has mean score 64; another of 34 has mean score 74. What is the mean score when the classes are combined?",
    "choices": [
      "69",
      "68.5161",
      "69.4839",
      "138"
    ],
    "key": 2,
    "why": "Principle: A combined mean is weighted by group size. Recover each group’s total score before pooling.\n\nStep 1: First total score is 28×64=1792.\n\nStep 2: Second total score is 34×74=2516.\n\nStep 3: Divide the total 4308 by 62 students to obtain 69.4839.\n\nAnswer: 69.4839.\n\nCheck and interpretation: The result lies between the two class means and is closer to the mean of the larger class. A simple average of class means requires equal class sizes.",
    "family": "weighted-group-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-logarithm-equation-4",
    "topic": "apt",
    "prompt": "For real x>5, solve log₂(x−5)+log₂(x+5)=log₂(96).",
    "choices": [
      "5",
      "16",
      "11",
      "9.798"
    ],
    "key": 2,
    "why": "Principle: For positive arguments, the sum of logarithms equals the logarithm of the product. The domain restriction must be checked after solving the resulting quadratic.\n\nStep 1: Combine the left side as log₂[(x−5)(x+5)].\n\nStep 2: Equate arguments: x²−25=96, giving x²=121.\n\nStep 3: The algebraic roots are ±11, but only +11 satisfies x>5.\n\nAnswer: 11.\n\nCheck and interpretation: The negative root is extraneous to the logarithm domain even though it satisfies the squared equation. Ignoring domain conditions can produce an invalid second answer.",
    "family": "logarithm-equation",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-bayes-detector-5",
    "topic": "math",
    "prompt": "A fault occurs with probability 0.05. A detector reports positive with probability 0.9 when faulty and 0.05 when healthy. Given a positive report, find the probability of a fault.",
    "choices": [
      "0.9",
      "0.05",
      "0.045",
      "0.4865"
    ],
    "key": 3,
    "why": "Principle: Bayes’ theorem combines likelihood with the prior fault probability. A positive detector report can come from a real fault or a false alarm.\n\nStep 1: True-positive probability is 0.9×0.05=0.045.\n\nStep 2: Total positive probability is 0.9×0.05+0.05×0.95=0.0925.\n\nStep 3: Normalize the true-positive term by the total to obtain 0.4865.\n\nAnswer: 0.4865.\n\nCheck and interpretation: Sensitivity alone is not the posterior fault probability. When faults are rare, healthy components can contribute many false positives.",
    "family": "bayes-detector",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-inverse-trace-5",
    "topic": "math",
    "prompt": "An invertible 2×2 matrix A has trace 15 and determinant 54. Find trace(A⁻¹), rounded to four decimal places.",
    "choices": [
      "3.6",
      "15",
      "0.2778",
      "0.0185"
    ],
    "key": 2,
    "why": "Principle: The eigenvalues of an inverse matrix are reciprocals of the original eigenvalues. Their sum is the original eigenvalue sum divided by the original product.\n\nStep 1: Let the eigenvalues be λ₁ and λ₂ with λ₁+λ₂=15 and λ₁λ₂=54.\n\nStep 2: Then trace(A⁻¹)=1/λ₁+1/λ₂=(λ₁+λ₂)/(λ₁λ₂).\n\nStep 3: Substitute the given invariants: 15/54=0.2778.\n\nAnswer: 0.2778.\n\nCheck and interpretation: The determinant is nonzero, so the inverse exists. Taking the reciprocal of the trace would not in general equal the trace of the inverse.",
    "family": "inverse-trace",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-residue-contour-5",
    "topic": "math",
    "prompt": "C is the counterclockwise circle |z|=7. For f(z)=1/[(z−6)(z−9)], what real coefficient c satisfies ∮_C f(z)dz=2πj c?",
    "choices": [
      "-0.3333",
      "0.3333",
      "-0.6667",
      "0"
    ],
    "key": 0,
    "why": "Principle: The residue theorem gives a contour integral as 2πj times the sum of residues of poles strictly inside a positively oriented contour.\n\nStep 1: The poles are z=6 and z=9. Only 6 lies inside |z|=7.\n\nStep 2: The simple-pole residue at z=6 is lim(z→6)(z−6)f(z)=1/(6−9).\n\nStep 3: Thus the integral is 2πj×(-0.3333), and c=-0.3333.\n\nAnswer: -0.3333.\n\nCheck and interpretation: The outside pole contributes no residue to this contour. Reversing the contour orientation would reverse the sign, but the stated orientation is counterclockwise.",
    "family": "residue-contour",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-ode-initial-value-5",
    "topic": "math",
    "prompt": "For t≥0, y′+6y=13, with y(0)=6. Find y(1/6), rounded to four decimal places.",
    "choices": [
      "2.1667",
      "2.2073",
      "3.5769",
      "8.1667"
    ],
    "key": 2,
    "why": "Principle: A first-order linear differential equation has a constant particular solution plus an exponentially decaying homogeneous solution. The initial condition fixes the decay coefficient.\n\nStep 1: At equilibrium, y∞=13/6. The homogeneous term is Ce^(−6t).\n\nStep 2: Apply y(0)=6 to get C=6−13/6.\n\nStep 3: At t=1/6, the exponential is e⁻¹, giving y=13/6+(6−13/6)e⁻¹=3.5769.\n\nAnswer: 3.5769.\n\nCheck and interpretation: Discarding the initial condition would leave only the final value. The result lies between the initial value and the equilibrium because the decay factor is between zero and one.",
    "family": "ode-initial-value",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-correlated-variance-5",
    "topic": "math",
    "prompt": "Random variables X and Y have variances 6 and 8, and covariance 0.5. Find Var(2X−Y).",
    "choices": [
      "30",
      "32",
      "16",
      "34"
    ],
    "key": 0,
    "why": "Principle: For correlated variables, Var(aX+bY)=a²Var(X)+b²Var(Y)+2abCov(X,Y). The cross term changes sign when the coefficients have opposite signs.\n\nStep 1: Here a=2 and b=−1, so the individual variance contribution is 4×6+8=32.\n\nStep 2: The covariance contribution is 2×2×(−1)×0.5=−2.\n\nStep 3: Adding them gives Var(2X−Y)=30.\n\nAnswer: 30.\n\nCheck and interpretation: Independence was not stated and would contradict the nonzero covariance. The negative coefficient on Y does not make its own variance term negative.",
    "family": "correlated-variance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-newton-step-5",
    "topic": "math",
    "prompt": "Newton–Raphson is used to solve x²−7=0 starting at x₀=6. What is x₁, rounded to four decimal places?",
    "choices": [
      "3.5833",
      "1.1667",
      "-23",
      "2.6458"
    ],
    "key": 0,
    "why": "Principle: Newton–Raphson updates x through xnew=x−f(x)/f′(x). A single update is generally an approximation, not the exact root.\n\nStep 1: For f(x)=x²−7, f′(x)=2x.\n\nStep 2: At x₀=6, f(x₀)=29 and f′(x₀)=12.\n\nStep 3: Thus x₁=6−(29)/12=(6+7/6)/2=3.5833.\n\nAnswer: 3.5833.\n\nCheck and interpretation: Using the exact square root would answer a different question: this asks for one algorithmic iteration from the specified starting point.",
    "family": "newton-step",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-dependent-input-resistance-5",
    "topic": "networks",
    "prompt": "A one-port has resistor R=7 kΩ to ground in parallel with an upward controlled current source g v/R, where v is port voltage and g=0.2. Find the input resistance in kΩ.",
    "choices": [
      "5.6 kΩ",
      "5.8333 kΩ",
      "35 kΩ",
      "8.75 kΩ"
    ],
    "key": 3,
    "why": "Principle: Input resistance with dependent sources must be obtained from a test voltage or current while retaining the dependent source. The upward source opposes current drawn through the resistor.\n\nStep 1: Apply test voltage v. Resistor current entering the network is v/R.\n\nStep 2: The controlled source supplies g v/R toward the port, so net entering current is i=(1−g)v/R.\n\nStep 3: Therefore Rin=v/i=R/(1−g)=7/(1−0.2)=8.75 kΩ.\n\nAnswer: 8.75 kΩ.\n\nCheck and interpretation: Turning off a dependent source would incorrectly leave only R. Since 0<g<1, the input resistance is positive and exceeds R.",
    "family": "dependent-input-resistance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-nodal-two-sources-5",
    "topic": "networks",
    "prompt": "A node is connected through 6 kΩ to a fixed 15 V node, through 8 kΩ to a fixed 9 V node, and through 9 kΩ to ground. Find its voltage in V.",
    "choices": [
      "12 V",
      "4.7647 V",
      "9 V",
      "4.5 V"
    ],
    "key": 2,
    "why": "Principle: Nodal analysis applies KCL using each branch’s voltage difference divided by resistance. The unknown node is not an unloaded two-resistor divider.\n\nStep 1: Write (v−15)/6+(v−9)/8+v/9=0, using kΩ and mA.\n\nStep 2: Collect v terms: v(1/6+1/8+1/9)=15/6+9/8.\n\nStep 3: Divide the source-current sum by total conductance to get v=9 V.\n\nAnswer: 9 V.\n\nCheck and interpretation: The ground branch loads both source paths. Ignoring either fixed-voltage source changes the node equation and gives a different voltage.",
    "family": "nodal-two-sources",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-series-capacitor-energy-5",
    "topic": "networks",
    "prompt": "Initially uncharged capacitors 7 µF and 9 µF are connected in series across 20 V DC and allowed to settle. Find total stored electrostatic energy in µJ.",
    "choices": [
      "787.5 µJ",
      "3200 µJ",
      "1575 µJ",
      "1400 µJ"
    ],
    "key": 0,
    "why": "Principle: Series capacitors carry equal charge and have equivalent capacitance Ceq=C₁C₂/(C₁+C₂). Their total stored energy is CeqV²/2.\n\nStep 1: Compute Ceq=7×9/(7+9)=3.9375 µF.\n\nStep 2: The total terminal voltage is 20 V.\n\nStep 3: Energy is (1/2)×3.9375×20²=787.5 µJ, since µF·V² gives µJ.\n\nAnswer: 787.5 µJ.\n\nCheck and interpretation: Using C₁+C₂ would treat the connection as parallel. The smaller capacitor has the larger voltage, but the equivalent capacitance already accounts for voltage division.",
    "family": "series-capacitor-energy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rlc-critical-damping-5",
    "topic": "networks",
    "prompt": "A source-free series RLC circuit has L=7 mH and C=9 µF. Find the total series resistance needed for critical damping in Ω.",
    "choices": [
      "27.8887 Ω",
      "55.7773 Ω",
      "111.5547 Ω",
      "0.8819 Ω"
    ],
    "key": 1,
    "why": "Principle: The series RLC natural polynomial is s²+(R/L)s+1/(LC). Critical damping occurs when the repeated-root condition α=ω₀ holds.\n\nStep 1: Identify α=R/(2L) and ω₀=1/√(LC).\n\nStep 2: Equating them gives Rcrit=2√(L/C).\n\nStep 3: Convert the given values to H and F, then calculate 2√[7×10⁻³/(9×10⁻⁶)]=55.7773 Ω.\n\nAnswer: 55.7773 Ω.\n\nCheck and interpretation: The factor two is essential. The parallel-RLC critical-resistance relation has a different form because its damping coefficient depends inversely on resistance.",
    "family": "rlc-critical-damping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-nonsinusoidal-rms-5",
    "topic": "networks",
    "prompt": "A current is i(t)=6+11cos(100t)+8sin(200t) A. Find RMS current over a common period, rounded to four decimal places.",
    "choices": [
      "10.5119 A",
      "19.435 A",
      "11.3358 A",
      "14.8661 A"
    ],
    "key": 2,
    "why": "Principle: RMS is the square root of the mean square. Orthogonal harmonics have zero average cross products over a common period, while the DC contribution is not halved.\n\nStep 1: The DC mean-square contribution is 6²=36.\n\nStep 2: Each sinusoid contributes half its squared peak amplitude: (11²+8²)/2=92.5.\n\nStep 3: Add contributions and take the square root: Irms=√128.5=11.3358 A.\n\nAnswer: 11.3358 A.\n\nCheck and interpretation: Adding the individual RMS values is invalid for orthogonal harmonics. The DC term must retain its full squared value.",
    "family": "nonsinusoidal-rms",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-thevenin-divider-5",
    "topic": "networks",
    "prompt": "An ideal 10 V source drives series resistors 7 kΩ and 9 kΩ. The output terminals are across the lower 9 kΩ resistor. What Norton short-circuit current, in mA, corresponds to the output Thévenin equivalent?",
    "choices": [
      "0.625 mA",
      "1.4286 mA",
      "0.8036 mA",
      "0.7143 mA"
    ],
    "key": 1,
    "why": "Principle: Norton current equals the terminal short-circuit current or Vth/Rth. When the output is shorted, the lower resistor is bypassed.\n\nStep 1: The open-circuit voltage is Vth=10×9/(7+9)=5.625 V.\n\nStep 2: With the ideal source deactivated to a short, Rth=7∥9=3.9375 kΩ.\n\nStep 3: Therefore IN=Vth/Rth=10/7=1.4286 mA.\n\nAnswer: 1.4286 mA.\n\nCheck and interpretation: The same result follows directly under an output short: all source current flows through the upper resistor and bypasses the lower resistor.",
    "family": "thevenin-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-anticausal-z-5",
    "topic": "signals",
    "prompt": "X(z)=1/(1−0.45z⁻¹) has ROC |z|<0.45. Find x[−2], rounded to four decimal places.",
    "choices": [
      "-0.2025",
      "-4.9383",
      "4.9383",
      "0"
    ],
    "key": 1,
    "why": "Principle: A rational z-transform needs its ROC to determine sidedness. ROC inside the pole corresponds to an anti-causal rather than a causal exponential.\n\nStep 1: For ROC |z|<a, the inverse is x[n]=−aⁿu[−n−1].\n\nStep 2: At n=−2 the unit step equals one.\n\nStep 3: Thus x[−2]=−(0.45)⁻²=−1/0.2025=-4.9383.\n\nAnswer: -4.9383.\n\nCheck and interpretation: Using the right-sided inverse aⁿu[n] would require ROC outside the pole and would give the wrong negative-time samples.",
    "family": "anticausal-z",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-fourier-time-scaling-5",
    "topic": "signals",
    "prompt": "For x(t)=e^(−7|t|), let y(t)=x(2t). Using X(ω)=∫x(t)e^(−jωt)dt, find Y(6), rounded to four decimal places.",
    "choices": [
      "0.1647",
      "0.1207",
      "0.2414",
      "0.0824"
    ],
    "key": 1,
    "why": "Principle: Time compression y(t)=x(bt) gives Y(ω)=X(ω/b)/|b|. For e^(−a|t|), the transform is 2a/(a²+ω²).\n\nStep 1: Here b=2, so Y(ω)=(1/2)X(ω/2).\n\nStep 2: Substitute the known transform: Y(ω)=a/[a²+(ω/2)²].\n\nStep 3: At ω=6, Y=7/[49+36/4]=0.1207.\n\nAnswer: 0.1207.\n\nCheck and interpretation: Compressing the signal halves its total area, so Y(0) must be half of X(0). Forgetting the 1/2 scale factor fails that check.",
    "family": "fourier-time-scaling",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-rectangle-convolution-5",
    "topic": "signals",
    "prompt": "Let x(t)=1 for 0≤t≤7 and zero otherwise. If y=x*x, find y(7.5).",
    "choices": [
      "7",
      "7.5",
      "6.5",
      "0.5"
    ],
    "key": 2,
    "why": "Principle: Convolution of two unit-height rectangular pulses equals the length of their overlap as one is shifted. The result is triangular.\n\nStep 1: The integrand is one when τ lies in both [0,7] and [t−7,t].\n\nStep 2: At t=7.5, these intervals overlap from 0.5 to 7.\n\nStep 3: The overlap length and hence the convolution value is 7−0.5=6.5.\n\nAnswer: 6.5.\n\nCheck and interpretation: The peak occurs at t equal to one pulse width and equals that width. The requested point is on the descending side, so its value is slightly below the peak.",
    "family": "rectangle-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-periodic-average-power-5",
    "topic": "signals",
    "prompt": "Find time-average power of x(t)=2.5+6cos(3t)+7sin(6t), assuming a 1 Ω normalization.",
    "choices": [
      "91.25",
      "45.625",
      "9",
      "48.75"
    ],
    "key": 3,
    "why": "Principle: Average signal power is the mean of |x(t)|² over a period. Distinct harmonics and DC are mutually orthogonal over a common period.\n\nStep 1: The DC term contributes 2.5²=6.25.\n\nStep 2: The two sinusoidal terms contribute 6²/2 and 7²/2. Cross terms average to zero.\n\nStep 3: Thus P=6.25+36/2+49/2=48.75.\n\nAnswer: 48.75.\n\nCheck and interpretation: A nonzero periodic signal has finite average power but infinite total energy. The 1 Ω normalization avoids an additional resistance factor.",
    "family": "periodic-average-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-circular-convolution-dc-5",
    "topic": "signals",
    "prompt": "Two length-9 sequences have every sample equal to 6 and 7, respectively. Find any sample of their length-9 circular convolution.",
    "choices": [
      "378",
      "42",
      "336",
      "3402"
    ],
    "key": 0,
    "why": "Principle: An N-point circular convolution sums N products with indices wrapped modulo N. Constant sequences make every product identical.\n\nStep 1: Write y[r]=Σₘ₌₀ᴺ⁻¹x[m]h[(r−m) mod N].\n\nStep 2: Each term equals 6×7=42, independent of r and m.\n\nStep 3: There are 9 terms, so every output sample equals 9×42=378.\n\nAnswer: 378.\n\nCheck and interpretation: A DFT-domain derivation gives the same result: only the DC bins are nonzero, and the inverse transform contributes its 1/N factor.",
    "family": "circular-convolution-dc",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-white-noise-filter-5",
    "topic": "signals",
    "prompt": "Zero-mean discrete white noise with variance 6 enters a stable filter h[n]=(0.35)ⁿu[n]. Find the output variance, rounded to four decimal places.",
    "choices": [
      "9.2308",
      "5.265",
      "6",
      "6.8376"
    ],
    "key": 3,
    "why": "Principle: For white input noise, distinct input samples are uncorrelated. Output variance is input variance multiplied by the sum of squared impulse-response coefficients.\n\nStep 1: Write σy²=σx²Σₙ|h[n]|².\n\nStep 2: Here Σₙ₌₀∞a²ⁿ=1/(1−a²), because |a|<1.\n\nStep 3: Therefore σy²=6/(1−0.35²)=6.8376.\n\nAnswer: 6.8376.\n\nCheck and interpretation: Using DC gain squared would incorrectly assume all noise samples add coherently. Whiteness eliminates the cross-covariance terms.",
    "family": "white-noise-filter",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-depletion-doping-5",
    "topic": "devices",
    "prompt": "For a one-sided abrupt p⁺n junction at fixed total junction potential, the lightly doped n-side concentration is multiplied by 3.5. By what factor does total depletion width change?",
    "choices": [
      "1.8708",
      "0.5345",
      "0.2857",
      "3.5"
    ],
    "key": 1,
    "why": "Principle: For a one-sided abrupt junction, depletion extends mainly into the lightly doped side, with W≈√[2ε(Vbi+VR)/(qND)]. Hold the total potential fixed as stated.\n\nStep 1: All quantities except ND are fixed, so W is proportional to ND⁻¹ᐟ².\n\nStep 2: With ND,new=3.5ND,old, form Wnew/Wold=√(ND,old/ND,new).\n\nStep 3: The width factor is 1/√3.5=0.5345.\n\nAnswer: 0.5345.\n\nCheck and interpretation: More doping requires less depleted distance to supply the compensating space charge. Fixing total junction potential avoids an extra built-in-potential change.",
    "family": "depletion-doping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-saturation-check-5",
    "topic": "devices",
    "prompt": "An nMOS source is grounded, gate held at 2.5 V, drain connected through 4.5 kΩ to 15 V. V_TH=0.5 V and I_D=(0.4/2)(V_GS−V_TH)² mA in saturation. Neglect channel-length modulation. Find V_DS in V.",
    "choices": [
      "15 V",
      "11.4 V",
      "7.8 V",
      "3.6 V"
    ],
    "key": 1,
    "why": "Principle: First compute the square-law saturation current, then the drain resistor drop. The result must satisfy VDS≥VGS−VTH to validate the assumed region.\n\nStep 1: Overdrive is VOV=2.5−0.5=2 V.\n\nStep 2: Saturation current is ID=0.2×(2)²=0.8 mA.\n\nStep 3: Drain voltage is VDS=15−0.8×4.5=11.4 V.\n\nStep 4: This exceeds the overdrive 2 V, so saturation is consistent.\n\nAnswer: 11.4 V.\n\nCheck and interpretation: Applying a saturation formula without checking the resulting VDS can produce an invalid bias solution. The supplied parameters keep the MOSFET in saturation.",
    "family": "mos-saturation-check",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-piecewise-diode-circuit-5",
    "topic": "devices",
    "prompt": "A 10 V source feeds a forward-oriented diode through 6 kΩ. The diode model is open when off and a constant 0.6 V drop when on. Find the circuit current in mA.",
    "choices": [
      "1.5667 mA",
      "1.6667 mA",
      "1.7667 mA",
      "0.7833 mA"
    ],
    "key": 0,
    "why": "Principle: A piecewise diode circuit is solved by assuming a state and checking it. The positive source can forward bias this series diode, so the on-state model applies.\n\nStep 1: Assume the diode is on, fixing its forward voltage at 0.6 V.\n\nStep 2: KVL gives resistor voltage VR=10−0.6=9.4 V.\n\nStep 3: The current is VR/R=9.4/6=1.5667 mA, which is positive and validates the on state.\n\nAnswer: 1.5667 mA.\n\nCheck and interpretation: The given constant-drop model differs from an ideal zero-drop diode and from the exponential Shockley model. Use the specified approximation consistently.",
    "family": "piecewise-diode-circuit",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-junction-capacitance-5",
    "topic": "devices",
    "prompt": "An abrupt junction has built-in potential 0.7 V and zero-bias depletion capacitance C₀. At reverse bias 6 V, find C_j/C₀ using the depletion approximation.",
    "choices": [
      "0.1045",
      "0.3232",
      "3.0938",
      "0.1429"
    ],
    "key": 1,
    "why": "Principle: For an abrupt junction, depletion width grows as √(Vbi+VR), and capacitance varies inversely with depletion width. Hence Cj=C₀(1+VR/Vbi)⁻¹ᐟ².\n\nStep 1: At zero reverse bias the reference total potential is Vbi=0.7 V.\n\nStep 2: At the specified reverse bias it is 0.7+6=6.7 V.\n\nStep 3: Thus Cj/C₀=√[0.7/(0.7+6)]=0.3232.\n\nAnswer: 0.3232.\n\nCheck and interpretation: Reverse bias widens depletion and lowers capacitance, so the ratio must be below one. A linearly graded junction has a different exponent.",
    "family": "junction-capacitance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-drift-transit-5",
    "topic": "devices",
    "prompt": "An electron crosses 15 µm of uniform silicon under field magnitude 150 V/cm. Take mobility 1000 cm²/(V·s), ignore velocity saturation and diffusion. Find drift transit time in ns.",
    "choices": [
      "1000 ns",
      "0.1 ns",
      "10 ns",
      "100 ns"
    ],
    "key": 2,
    "why": "Principle: In the low-field mobility model, drift-speed magnitude is μE. Transit time is distance divided by speed, with consistent length units.\n\nStep 1: The speed magnitude is μE=1000×150=150000 cm/s.\n\nStep 2: Convert distance 15 µm to 0.0015 cm.\n\nStep 3: Time is L/v=1.0000e-8 s=10 ns.\n\nAnswer: 10 ns.\n\nCheck and interpretation: Electron drift direction is opposite the electric field, but the transit-time magnitude is positive. High-field velocity saturation is explicitly excluded.",
    "family": "drift-transit",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-emitter-current-5",
    "topic": "devices",
    "prompt": "An NPN transistor operates in forward-active mode with I_C=3.5 mA and β=130. Find emitter current in mA, rounded to four decimal places.",
    "choices": [
      "3.5269 mA",
      "3.5 mA",
      "3.4731 mA",
      "0.0269 mA"
    ],
    "key": 0,
    "why": "Principle: The emitter current is the sum of collector and base currents. Finite current gain β must be retained when an exact emitter-current value is requested.\n\nStep 1: Using β=IC/IB, the base current is IB=3.5/130=0.0269 mA.\n\nStep 2: By terminal-current conservation, IE=IC+IB.\n\nStep 3: Thus IE=3.5(1+1/130)=3.5269 mA.\n\nAnswer: 3.5269 mA.\n\nCheck and interpretation: Approximating IE≈IC is useful for large β but misses the base-current contribution asked for in this calculation.",
    "family": "bjt-emitter-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-miller-input-capacitance-5",
    "topic": "analog",
    "prompt": "A voltage amplifier has small-signal gain v_o/v_i=−20. A 3.5 pF capacitor connects its input and output. Under Miller’s theorem, find its equivalent input capacitance in pF.",
    "choices": [
      "3.5 pF",
      "73.5 pF",
      "66.5 pF",
      "3.675 pF"
    ],
    "key": 1,
    "why": "Principle: Miller’s theorem replaces an impedance bridging two nodes by separate grounded impedances when their voltage ratio is known. For a capacitor, Cin=C(1−Av).\n\nStep 1: The capacitor input current is C d(vi−vo)/dt.\n\nStep 2: With vo=−20vi, the voltage across it is (1+20)vi.\n\nStep 3: Thus Cin=3.5×21=73.5 pF.\n\nAnswer: 73.5 pF.\n\nCheck and interpretation: The inverting gain multiplies the input capacitance substantially. The smaller C(1−1/Av) term belongs to the output equivalent.",
    "family": "miller-input-capacitance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-cmrr-gain-5",
    "topic": "analog",
    "prompt": "A differential amplifier has differential voltage gain 200 and CMRR=70 dB. Find the magnitude of common-mode voltage gain, rounded to four decimal places.",
    "choices": [
      "0",
      "15.8114",
      "0.0632",
      "10"
    ],
    "key": 2,
    "why": "Principle: CMRR is the ratio of differential gain to common-mode gain. Since these are voltage gains, its decibel definition uses 20log₁₀.\n\nStep 1: CMRRlinear=10^(70/20).\n\nStep 2: Using CMRRlinear=|Ad/Ac|, rearrange |Ac|=|Ad|/CMRRlinear.\n\nStep 3: Therefore |Ac|=200/10^(70/20)=0.0632.\n\nAnswer: 0.0632.\n\nCheck and interpretation: Using 10log rather than 20log treats an amplitude ratio as a power ratio and gives a very different answer.",
    "family": "cmrr-gain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-cascaded-pole-bandwidth-5",
    "topic": "analog",
    "prompt": "Two identical, isolated, unity-DC-gain low-pass stages each have a single pole at 20 kHz. What is the overall −3 dB frequency in kHz?",
    "choices": [
      "12.8719 kHz",
      "20 kHz",
      "10 kHz",
      "14.1421 kHz"
    ],
    "key": 0,
    "why": "Principle: Cascaded magnitudes multiply. Two identical first-order responses produce total magnitude 1/[1+(f/fc)²], rather than a single-pole response.\n\nStep 1: For each stage, |H|=1/√[1+(f/20)²].\n\nStep 2: For the cascade, set 1/[1+(f/20)²]=1/√2 at −3 dB.\n\nStep 3: Then (f/20)²=√2−1, so f=20√(√2−1)=12.8719 kHz.\n\nAnswer: 12.8719 kHz.\n\nCheck and interpretation: At each individual pole frequency the cascade is already at −6 dB. Therefore its overall −3 dB frequency must be lower than the individual pole frequency.",
    "family": "cascaded-pole-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-input-loading-5",
    "topic": "analog",
    "prompt": "A common-emitter stage has gain v_o/v_b=-25, rπ=9 kΩ and bias resistance 20 kΩ to AC ground. An input source has series resistance 7 kΩ. Neglect other input effects. Find v_o/v_s.",
    "choices": [
      "-25",
      "-14.0625",
      "-11.7493",
      "11.7493"
    ],
    "key": 2,
    "why": "Principle: Source resistance and amplifier input resistance form a voltage divider before the stage gain. The bias resistance loads rπ in parallel.\n\nStep 1: Input resistance is Rin=20∥9=6.2069 kΩ.\n\nStep 2: The base/source ratio is vb/vs=Rin/(Rs+Rin)=0.47.\n\nStep 3: Multiply by the stage gain -25: vo/vs=-11.7493.\n\nAnswer: -11.7493.\n\nCheck and interpretation: The loaded gain magnitude is smaller than the specified base-to-output gain. Omitting the bias network overestimates input resistance and overall gain.",
    "family": "input-loading",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-series-feedback-input-5",
    "topic": "analog",
    "prompt": "A voltage-series negative-feedback amplifier has open-loop input resistance 7 kΩ and loop gain Aβ=20. Under the ideal feedback model, find closed-loop input resistance in kΩ.",
    "choices": [
      "0.3333 kΩ",
      "140 kΩ",
      "147 kΩ",
      "27 kΩ"
    ],
    "key": 2,
    "why": "Principle: Series mixing at the input reduces the error voltage for a given applied input, increasing input resistance by the feedback factor 1+Aβ.\n\nStep 1: The series-feedback resistance transformation is Rif=Ri(1+Aβ).\n\nStep 2: The feedback factor here is 1+20=21.\n\nStep 3: Therefore Rif=7×21=147 kΩ.\n\nAnswer: 147 kΩ.\n\nCheck and interpretation: Shunt mixing would instead reduce input resistance. The specified voltage-series topology is what determines the direction of the transformation.",
    "family": "series-feedback-input",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-schmitt-hysteresis-5",
    "topic": "analog",
    "prompt": "An ideal inverting Schmitt trigger has symmetric output saturation ±10 V. Its non-inverting input is a divider taking fraction β=6/(6+8) of the output, referenced to ground. Find hysteresis width in V.",
    "choices": [
      "4.2857 V",
      "23.3333 V",
      "11.4286 V",
      "8.5714 V"
    ],
    "key": 3,
    "why": "Principle: The positive-feedback divider sets two switching thresholds according to the present output state. Hysteresis width is the upper threshold minus the lower threshold.\n\nStep 1: When output is +10 V, threshold is +βVsat=+4.2857 V.\n\nStep 2: When output is −10 V, threshold is −4.2857 V.\n\nStep 3: Their difference is 2βVsat=2×(6/14)×10=8.5714 V.\n\nAnswer: 8.5714 V.\n\nCheck and interpretation: The single positive threshold is only half the hysteresis width because the saturation levels and divider reference are symmetric about zero.",
    "family": "schmitt-hysteresis",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-parity-function-count-5",
    "topic": "digital",
    "prompt": "An N-input XOR gate has N=8. Across all 2^N equally likely binary input words, how many make its output one?",
    "choices": [
      "255",
      "8",
      "128",
      "64"
    ],
    "key": 2,
    "why": "Principle: An XOR outputs one for odd input parity. The even- and odd-parity sets have the same size because flipping any fixed input bit pairs one with the other.\n\nStep 1: There are 2^8=256 possible words.\n\nStep 2: Flipping the first bit maps each even-parity word to one unique odd-parity word and vice versa.\n\nStep 3: Exactly half therefore have odd parity: 2^(8−1)=128.\n\nAnswer: 128.\n\nCheck and interpretation: XOR is not an OR gate: inputs with two ones have output zero. Counting all nonzero words would incorrectly include even-parity words.",
    "family": "parity-function-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-ripple-adder-delay-5",
    "topic": "digital",
    "prompt": "An 9-bit ripple-carry adder has carry propagation delay 1.5 ns per stage and final sum generation delay 2.5 ns after carry arrives. Ignore operand-to-carry startup delay. Find delay from carry-in to most-significant sum in ns.",
    "choices": [
      "16 ns",
      "22.5 ns",
      "12 ns",
      "14.5 ns"
    ],
    "key": 3,
    "why": "Principle: The most-significant sum depends on carry propagation through all lower stages, then the sum logic of the last stage. The stated model separates these delays.\n\nStep 1: A carry reaches the most-significant stage after 8 lower-stage carry delays.\n\nStep 2: This propagation takes 8×1.5=12 ns.\n\nStep 3: Add the final sum delay 2.5 ns to obtain 14.5 ns.\n\nAnswer: 14.5 ns.\n\nCheck and interpretation: The final carry-out path has a different endpoint. Counting n carry stages before generating the most-significant sum adds one stage too many.",
    "family": "ripple-adder-delay",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-hamming-parity-5",
    "topic": "digital",
    "prompt": "A binary single-error-correcting Hamming code protects 28 data bits. What is the minimum number of Hamming parity bits r satisfying 2^r≥m+r+1? Do not add an overall double-error-detection parity bit.",
    "choices": [
      "5",
      "7",
      "8",
      "6"
    ],
    "key": 3,
    "why": "Principle: The syndrome must identify every possible single-bit error among data and parity positions, plus the no-error case. Hence 2ʳ≥m+r+1.\n\nStep 1: For r=5, 2ʳ=32 is below m+r+1=34.\n\nStep 2: For r=6, 2ʳ=64 is at least m+r+1=35.\n\nStep 3: The minimum valid count is therefore 6 parity bits.\n\nAnswer: 6.\n\nCheck and interpretation: An extended SECDED code adds one overall parity bit, but that extra protection was explicitly excluded.",
    "family": "hamming-parity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-pipeline-latency-5",
    "topic": "digital",
    "prompt": "An ideal 9-stage pipeline has clock period 3 ns. Starting empty, it processes 45 instructions with no stalls and one completion per clock after filling. What is total time until all instructions finish?",
    "choices": [
      "1215 ns",
      "159 ns",
      "135 ns",
      "162 ns"
    ],
    "key": 1,
    "why": "Principle: An initially empty ideal pipeline needs one full pipeline latency for the first instruction, then one cycle for each subsequent completion.\n\nStep 1: The first instruction finishes after 9 cycles.\n\nStep 2: The remaining 44 instructions each require one additional cycle, totaling 53 cycles.\n\nStep 3: Multiply by 3 ns/cycle to get 159 ns.\n\nAnswer: 159 ns.\n\nCheck and interpretation: Ignoring fill latency gives too small a result. Multiplying instruction count by stage count would describe fully serial execution without overlap.",
    "family": "pipeline-latency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-johnson-counter-5",
    "topic": "digital",
    "prompt": "An 9-flip-flop Johnson counter is initialized to all zero and operates in its intended cycle. How many distinct states occur before repetition?",
    "choices": [
      "18",
      "9",
      "512",
      "511"
    ],
    "key": 0,
    "why": "Principle: A Johnson counter feeds the complemented last-stage output into the first stage. Its intended cycle contains 2N states for N flip-flops.\n\nStep 1: Starting with all zeros, ones shift in for N=9 clocks until all stages are one.\n\nStep 2: Zeros then shift in for another 9 clocks, returning to all zero.\n\nStep 3: The cycle therefore contains 2×9=18 distinct states.\n\nAnswer: 18.\n\nCheck and interpretation: An ordinary ring counter has N intended states, while an unrestricted binary counter has 2ᴺ. Initialization matters because a Johnson counter can have other cycles.",
    "family": "johnson-counter",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-xor-probability-5",
    "topic": "digital",
    "prompt": "Independent binary signals A and B are each one with probability 0.35. What is the probability that A XOR B equals one?",
    "choices": [
      "0.455",
      "0.1225",
      "0.5775",
      "0.8775"
    ],
    "key": 0,
    "why": "Principle: XOR is one for exactly one asserted input: events (A=1,B=0) and (A=0,B=1). Independence permits multiplying probabilities in each case.\n\nStep 1: P(A=1,B=0)=0.35×0.65.\n\nStep 2: P(A=0,B=1)=0.65×0.35.\n\nStep 3: Add the disjoint cases: P(XOR=1)=2p(1−p)=0.455.\n\nAnswer: 0.455.\n\nCheck and interpretation: The union probability 2p−p² belongs to OR, which also accepts the both-one case. XOR excludes that case.",
    "family": "xor-probability",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-root-locus-breakaway-5",
    "topic": "control",
    "prompt": "For unity negative feedback with G(s)=K/[(s+6)(s+20)], K≥0, find the gain at the real-axis breakaway point.",
    "choices": [
      "169",
      "49",
      "7",
      "120"
    ],
    "key": 1,
    "why": "Principle: On the root locus, K=−(s+a)(s+b). A real-axis breakaway occurs where dK/ds=0, equivalently where the two real closed-loop roots merge.\n\nStep 1: Differentiate K(s) to get dK/ds=−[2s+26].\n\nStep 2: The stationary point is s=−26/2, between the two real open-loop poles.\n\nStep 3: Substituting gives Kbreak=(b−a)²/4=(20−6)²/4=49.\n\nAnswer: 49.\n\nCheck and interpretation: The same boundary follows by setting the characteristic quadratic discriminant to zero. Positive gain beyond it produces a complex-conjugate root pair.",
    "family": "root-locus-breakaway",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-lead-phase-5",
    "topic": "control",
    "prompt": "A lead compensator is G_c(s)=(1+sT)/(1+αsT), with α=0.35 and T>0. Find its maximum phase lead in degrees.",
    "choices": [
      "70.71 degrees",
      "61.2178 degrees",
      "14.3911 degrees",
      "28.7822 degrees"
    ],
    "key": 3,
    "why": "Principle: For 0<α<1, a lead network has maximum phase φmax satisfying sinφmax=(1−α)/(1+α). The time constant sets the frequency of that maximum, not its angle.\n\nStep 1: Compute (1−α)/(1+α)=(1−0.35)/(1+0.35)=0.4815.\n\nStep 2: Apply inverse sine to obtain the angle in radians.\n\nStep 3: Convert to degrees: φmax=28.7822 degrees.\n\nAnswer: 28.7822 degrees.\n\nCheck and interpretation: The compensator pole is at a higher frequency than its zero, giving positive phase lead. Reversing the pole and zero would produce phase lag.",
    "family": "lead-phase",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-delay-margin-5",
    "topic": "control",
    "prompt": "A nominal loop has phase margin 55 degrees at its unique gain crossover 7 rad/s. A pure time delay is added, without changing loop magnitude. What delay in s exhausts that phase margin?",
    "choices": [
      "7.8571 s",
      "0.1371 s",
      "0.0218 s",
      "0.2743 s"
    ],
    "key": 1,
    "why": "Principle: A pure delay e^(−sτ) has unit magnitude and contributes phase −ωτ radians. At the unchanged gain crossover it consumes the available phase margin.\n\nStep 1: Convert phase margin to radians: PM=55π/180.\n\nStep 2: Set the added lag ωgcτ equal to that margin at the limiting boundary.\n\nStep 3: Then τmax=(55π/180)/7=0.1371 s.\n\nAnswer: 0.1371 s.\n\nCheck and interpretation: This is the zero-margin boundary, so a positive remaining margin requires a smaller delay. Mixing degrees with ωτ in radians is a common error.",
    "family": "delay-margin",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-controllability-determinant-5",
    "topic": "control",
    "prompt": "For A=[0 1; −6 −8] and B=[0; 1], find the determinant of the 2×2 controllability matrix [B AB].",
    "choices": [
      "-1",
      "0",
      "1",
      "6"
    ],
    "key": 0,
    "why": "Principle: A two-state system is controllable if [B AB] has full rank. For a square 2×2 controllability matrix, a nonzero determinant establishes full rank.\n\nStep 1: Multiply AB=[1; −8].\n\nStep 2: Thus [B AB]=[0 1; 1 −8].\n\nStep 3: Its determinant is 0×(−8)−1×1=−1, independent of 6 and 8.\n\nAnswer: -1.\n\nCheck and interpretation: The nonzero determinant proves controllability for these parameters. Stability of A is a separate property and is not the controllability criterion.",
    "family": "controllability-determinant",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-pi-ramp-error-5",
    "topic": "control",
    "prompt": "A plant 1/(s+6) is controlled by C(s)=7+13/s in unity negative feedback. Assuming stable closed loop, find unit-ramp steady-state error.",
    "choices": [
      "0.1429",
      "0.0769",
      "0.4615",
      "0.5385"
    ],
    "key": 2,
    "why": "Principle: A PI controller adds an integrator to the loop. Ramp error is set by the velocity constant of the complete controller–plant product.\n\nStep 1: Loop transfer is L(s)=(7s+13)/[s(s+6)].\n\nStep 2: Kv=lim(s→0)sL(s)=13/6.\n\nStep 3: Thus unit-ramp error is 1/Kv=6/13=0.4615.\n\nAnswer: 0.4615.\n\nCheck and interpretation: The characteristic polynomial is s²+13s+13, with positive coefficients, confirming stability here. Proportional gain changes dynamics but not this ramp-error constant.",
    "family": "pi-ramp-error",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-second-order-peak-time-5",
    "topic": "control",
    "prompt": "A standard underdamped second-order system has ω_n=8 rad/s and ζ=0.45. Find first peak time after a unit step, in s.",
    "choices": [
      "0.3927 s",
      "0.2778 s",
      "0.8795 s",
      "0.4397 s"
    ],
    "key": 3,
    "why": "Principle: The oscillatory part of a second-order step response uses damped natural frequency ωd=ωn√(1−ζ²). Its first peak occurs at π/ωd.\n\nStep 1: Compute ωd=8√(1−0.45²)=7.1442 rad/s.\n\nStep 2: The first peak occurs when ωdt=π.\n\nStep 3: Therefore tp=π/7.1442=0.4397 s.\n\nAnswer: 0.4397 s.\n\nCheck and interpretation: Using ωn directly neglects damping’s effect on oscillation frequency. Peak time differs from rise time and settling time.",
    "family": "second-order-peak-time",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-cascade-noise-figure-5",
    "topic": "comm",
    "prompt": "Two receiver stages have noise figures 4.5 dB and 10 dB. The first stage power gain is 20 dB. Find cascade noise figure in dB using Friis’ noise formula.",
    "choices": [
      "14.5 dB",
      "4.6365 dB",
      "4.5 dB",
      "4.6514 dB"
    ],
    "key": 1,
    "why": "Principle: Friis’ cascade-noise formula uses linear noise factors and linear power gain: Ftotal=F₁+(F₂−1)/G₁. Convert to dB only after combining.\n\nStep 1: Convert F₁=10^(4.5/10), F₂=10^(10/10) and G₁=10^(20/10).\n\nStep 2: Compute Ftotal=2.8184+(10−1)/100=2.9084.\n\nStep 3: Then NFtotal=10log₁₀(Ftotal)=4.6365 dB.\n\nAnswer: 4.6365 dB.\n\nCheck and interpretation: The first-stage gain suppresses the input-referred impact of later-stage noise. Noise figures in dB cannot simply be added.",
    "family": "cascade-noise-figure",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-bpsk-target-ebn0-5",
    "topic": "comm",
    "prompt": "For coherent BPSK in AWGN, P_b=Q(√(2E_b/N₀)). A target error probability has Q⁻¹(P_b)=3.25. What minimum linear E_b/N₀ meets this target?",
    "choices": [
      "10.5625",
      "5.2813",
      "21.125",
      "1.625"
    ],
    "key": 1,
    "why": "Principle: The Q function decreases with its argument, so meeting an upper limit on bit error probability requires a sufficiently large Eb/N0.\n\nStep 1: Set the Q-function argument to its target inverse: √(2Eb/N₀)=3.25.\n\nStep 2: Square both sides to get 2Eb/N₀=10.5625.\n\nStep 3: Thus the minimum linear ratio is Eb/N₀=10.5625/2=5.2813.\n\nAnswer: 5.2813.\n\nCheck and interpretation: This is a linear energy-to-noise-density ratio, not a dB value. A dB answer would require an additional 10log₁₀ operation.",
    "family": "bpsk-target-ebn0",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-selection-diversity-5",
    "topic": "comm",
    "prompt": "A receiver chooses the best of 4 independent diversity branches. Each branch is below the required SNR threshold with probability 0.15. Find total outage probability.",
    "choices": [
      "0.0005",
      "0.15",
      "0.6",
      "0.478"
    ],
    "key": 0,
    "why": "Principle: Selection combining is in outage only when every candidate branch is below threshold. Independence makes the joint outage probability the product of branch probabilities.\n\nStep 1: Each branch has outage probability p=0.15.\n\nStep 2: The best branch fails only if all 4 branches fail simultaneously.\n\nStep 3: Therefore Pout=p^4=(0.15)^4=0.0005.\n\nAnswer: 0.0005.\n\nCheck and interpretation: The expression 1−(1−p)ᴸ instead means at least one branch fails, which is not an outage when another usable branch remains.",
    "family": "selection-diversity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-nyquist-pcm-rate-5",
    "topic": "comm",
    "prompt": "A real low-pass message is ideally bandlimited to 8 kHz. It is sampled at the ideal Nyquist rate and quantized to 10 bits/sample. Ignoring overhead, find raw PCM bit rate in kbit/s.",
    "choices": [
      "80 kbit/s",
      "160 kbit/s",
      "16384 kbit/s",
      "16 kbit/s"
    ],
    "key": 1,
    "why": "Principle: The ideal Nyquist sampling rate is twice the highest baseband frequency. PCM bit rate is sample rate multiplied by bits per sample.\n\nStep 1: Minimum ideal sampling rate is fs=2×8=16 ksample/s.\n\nStep 2: Each sample contributes 10 binary digits.\n\nStep 3: Raw bit rate is 16×10=160 kbit/s.\n\nAnswer: 160 kbit/s.\n\nCheck and interpretation: The number of quantization levels is 2ᴺ, but each sample carries N bits, not 2ᴺ bits. Practical anti-alias filtering may require a higher sample rate.",
    "family": "nyquist-pcm-rate",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-filtered-awgn-variance-5",
    "topic": "comm",
    "prompt": "Continuous-time white Gaussian noise has two-sided PSD N₀/2 with N₀=0.45. It enters a filter h(t)=e^(−6t)u(t). Find output noise variance.",
    "choices": [
      "0.0375",
      "0.075",
      "0.0031",
      "0.0187"
    ],
    "key": 3,
    "why": "Principle: For white noise with two-sided PSD N₀/2, filter output variance is (N₀/2)∫|h(t)|²dt. The impulse-response energy supplies the noise gain.\n\nStep 1: The impulse-response energy is ∫₀∞e^(−12t)dt=1/12.\n\nStep 2: Multiply by N₀/2=0.225.\n\nStep 3: Thus σout²=N₀/(4a)=0.45/(4×6)=0.0187.\n\nAnswer: 0.0187.\n\nCheck and interpretation: The two-sided PSD convention is specified to avoid a factor-of-two ambiguity. Replacing impulse-response energy by DC gain squared is not valid for white input noise.",
    "family": "filtered-awgn-variance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-binary-map-threshold-5",
    "topic": "comm",
    "prompt": "A receiver observes r=s+n, where s=+3.5 with prior 0.35 or −3.5 otherwise. Noise is zero-mean Gaussian with variance 1. With equal error costs, decide +3.5 if r exceeds what MAP threshold?",
    "choices": [
      "0",
      "0.0884",
      "-0.0884",
      "0.1769"
    ],
    "key": 1,
    "why": "Principle: The MAP detector compares posterior probabilities. Equal-variance Gaussian likelihoods lead to a linear observation threshold adjusted by the prior odds.\n\nStep 1: Log likelihood ratio is ln[p(r|+A)/p(r|−A)]=2Ar/σ².\n\nStep 2: MAP selects +A when this exceeds ln[P(−A)/P(+A)]=ln(0.65/0.35).\n\nStep 3: Thus threshold γ=σ²/(2A) ln[(1−p)/p]=0.0884.\n\nAnswer: 0.0884.\n\nCheck and interpretation: The positive symbol is less probable here, so the threshold is positive and favors the negative symbol unless the observation provides sufficient evidence.",
    "family": "binary-map-threshold",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-dielectric-boundary-reflection-5",
    "topic": "em",
    "prompt": "A plane wave in free space is normally incident on a lossless nonmagnetic dielectric with ε_r=7. What percentage of incident power is reflected?",
    "choices": [
      "45.1416 %",
      "79.6223 %",
      "10.1888 %",
      "20.3777 %"
    ],
    "key": 3,
    "why": "Principle: At normal incidence, electric-field reflection is Γ=(η₂−η₁)/(η₂+η₁). Reflected power in the incident medium is |Γ|² times incident power.\n\nStep 1: For μr=1, η₂=η₀/√7 and η₁=η₀.\n\nStep 2: Cancel η₀ to obtain Γ=(1−√7)/(1+√7).\n\nStep 3: The reflected percentage is 100Γ²=20.3777%.\n\nAnswer: 20.3777 %.\n\nCheck and interpretation: The electric reflection coefficient is negative because the second medium has lower impedance. Power reflection is nevertheless nonnegative after squaring.",
    "family": "dielectric-boundary-reflection",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-shorted-line-reactance-5",
    "topic": "em",
    "prompt": "A lossless 65 Ω line is short-circuited at its load and has electrical length 35 degrees. Find input reactance X in Ω, where Z_in=jX.",
    "choices": [
      "-45.5135 Ω",
      "92.8296 Ω",
      "37.2825 Ω",
      "45.5135 Ω"
    ],
    "key": 3,
    "why": "Principle: The input impedance of a short-circuited lossless line is Zin=jZ₀tan(βl). Electrical length supplies βl directly.\n\nStep 1: Use βl=35 degrees=35π/180 radians.\n\nStep 2: Evaluate tan(βl)=0.7002.\n\nStep 3: Multiply by Z₀: X=65×0.7002=45.5135 Ω.\n\nAnswer: 45.5135 Ω.\n\nCheck and interpretation: For an electrical length between zero and 90 degrees, the shorted stub appears inductive, so X is positive. An open-circuit stub uses a negative cotangent relation.",
    "family": "shorted-line-reactance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-quarter-wave-matching-5",
    "topic": "em",
    "prompt": "A real 50 Ω source resistance is to be matched to a real 150 Ω load using a lossless quarter-wave transformer. What characteristic impedance is required, in Ω?",
    "choices": [
      "100 Ω",
      "7500 Ω",
      "86.6025 Ω",
      "43.3013 Ω"
    ],
    "key": 2,
    "why": "Principle: A quarter-wave transformer presents Zin=Zt²/RL. A match requires this input resistance to equal the source resistance.\n\nStep 1: Set Rs=Zt²/RL.\n\nStep 2: Rearrange to Zt²=RsRL=50×150=7500.\n\nStep 3: Take the positive root: Zt=√7500=86.6025 Ω.\n\nAnswer: 86.6025 Ω.\n\nCheck and interpretation: The transformer impedance is the geometric mean of the two real resistances. The match holds at the design electrical length rather than over all frequencies.",
    "family": "quarter-wave-matching",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-displacement-current-5",
    "topic": "em",
    "prompt": "An ideal parallel-plate capacitor has C=7 nF and applied voltage v(t)=15cos(2000t) V. What is peak displacement current in mA? Ignore fringing and leakage.",
    "choices": [
      "0.105 mA",
      "0.21 mA",
      "0.42 mA",
      "0.0001 mA"
    ],
    "key": 1,
    "why": "Principle: The displacement current through an ideal capacitor equals its terminal current i=C dv/dt. For a sinusoid its peak magnitude is CωVpeak.\n\nStep 1: Differentiate v(t): dv/dt=−30000sin(2000t) V/s.\n\nStep 2: Multiply peak slope by C=7×10⁻⁹ F.\n\nStep 3: Convert A to mA to obtain Ipeak=0.21 mA.\n\nAnswer: 0.21 mA.\n\nCheck and interpretation: The given angular frequency needs no additional 2π. Average current is zero over a cycle, while peak displacement current is nonzero.",
    "family": "displacement-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-antenna-aperture-5",
    "topic": "em",
    "prompt": "An antenna has linear gain 7 at wavelength 0.2 m. For perfect polarization matching, find maximum effective aperture in cm² using A_e=Gλ²/(4π).",
    "choices": [
      "0.0223 cm²",
      "222.8169 cm²",
      "2800 cm²",
      "111.4085 cm²"
    ],
    "key": 1,
    "why": "Principle: Antenna gain and maximum receiving effective area are related by Ae=Gλ²/(4π). The gain must be a linear value.\n\nStep 1: Compute Gλ²=7×(0.2)²=0.28 m².\n\nStep 2: Divide by 4π to get aperture in square metres.\n\nStep 3: Since 1 m²=10000 cm², the result is 222.8169 cm².\n\nAnswer: 222.8169 cm².\n\nCheck and interpretation: Effective aperture is a receiving-area measure and need not equal the antenna’s physical geometric area. The square-unit conversion requires 10000 rather than 100.",
    "family": "antenna-aperture",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-conductor-field-decay-5",
    "topic": "em",
    "prompt": "Inside a good conductor, field magnitude follows |E(z)|=|E(0)|e^(−z/δ) with skin depth δ=20 µm. At what depth in µm does field magnitude fall to 0.2 of its surface value?",
    "choices": [
      "100 µm",
      "16.0944 µm",
      "32.1888 µm",
      "64.3775 µm"
    ],
    "key": 2,
    "why": "Principle: Skin depth governs exponential field-amplitude attenuation. Solve the stated ratio by taking a natural logarithm.\n\nStep 1: Set e^(−z/20)=0.2.\n\nStep 2: Taking ln gives −z/20=ln(0.2).\n\nStep 3: Hence z=−20ln(0.2)=32.1888 µm.\n\nAnswer: 32.1888 µm.\n\nCheck and interpretation: This uses a field-amplitude ratio. Power falls with the square of field, so reaching the same numerical power fraction would require half this depth.",
    "family": "conductor-field-decay",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-repeated-mixture-5",
    "topic": "apt",
    "prompt": "A tank contains 30 L of pure concentrate. 7 L is removed and replaced by water, the mixture is stirred, and the same removal/replacement is repeated once. What percentage of the final mixture is concentrate?",
    "choices": [
      "53.3333 %",
      "58.7778 %",
      "76.6667 %",
      "41.2222 %"
    ],
    "key": 1,
    "why": "Principle: Every replacement retains the same fraction of whatever concentrate was present before that operation. Stirring makes the removed mixture representative of the tank.\n\nStep 1: One operation retains fraction 1−7/30 of the concentrate.\n\nStep 2: Two operations retain fraction (1−7/30)².\n\nStep 3: The tank returns to its original total volume each time, so final concentrate percentage is 58.7778%.\n\nAnswer: 58.7778 %.\n\nCheck and interpretation: The second removal contains some water, so it removes less concentrate than the first. Subtracting twice the first removed concentration overstates the loss.",
    "family": "repeated-mixture",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-adjacent-arrangement-5",
    "topic": "apt",
    "prompt": "9 distinct people stand in a uniformly random row. What is the probability that two specified people are adjacent?",
    "choices": [
      "0.1111",
      "0.2222",
      "0.25",
      "0.8889"
    ],
    "key": 1,
    "why": "Principle: For adjacency counting, treat the two specified people as a block, then allow both orders inside the block. Divide favorable permutations by all permutations.\n\nStep 1: All arrangements number 9!.\n\nStep 2: Combine the specified pair into one block, leaving 8 objects with (8)! orders. The pair has two internal orders.\n\nStep 3: Thus probability=2(8)!/9!=2/9=0.2222.\n\nAnswer: 0.2222.\n\nCheck and interpretation: The pair can occupy any neighboring positions, not just an endpoint pair. The two internal orders must both be counted.",
    "family": "adjacent-arrangement",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-boat-round-trip-5",
    "topic": "apt",
    "prompt": "A boat moves at 15 km/h in still water and the current is 4.5 km/h. It travels 30 km downstream and returns the same distance upstream. What is total travel time in hours?",
    "choices": [
      "4.3956 hours",
      "4 hours",
      "3.0769 hours",
      "5.7143 hours"
    ],
    "key": 0,
    "why": "Principle: Current adds to speed downstream and subtracts upstream. Compute each travel time separately before adding.\n\nStep 1: Downstream speed is 15+4.5=19.5 km/h.\n\nStep 2: Upstream speed is 15−4.5=10.5 km/h, positive for these data.\n\nStep 3: Total time is 30/19.5+30/10.5=4.3956 hours.\n\nAnswer: 4.3956 hours.\n\nCheck and interpretation: The current slows the overall equal-distance round trip relative to travel in still water. The faster leg does not cancel the extra time spent on the slower leg.",
    "family": "boat-round-trip",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-opposite-trains-5",
    "topic": "apt",
    "prompt": "Trains of lengths 150 m and 200 m travel toward each other at 54 km/h and 72 km/h. How many seconds pass from their fronts meeting until they completely cross?",
    "choices": [
      "10 s",
      "70 s",
      "4.2857 s",
      "2.7778 s"
    ],
    "key": 0,
    "why": "Principle: For opposite directions, relative speed is the sum of speeds. Complete crossing requires relative motion through the sum of both lengths.\n\nStep 1: Combined length is 150+200=350 m.\n\nStep 2: Relative speed is (54+72)/3.6=35 m/s.\n\nStep 3: Crossing time is 350/35=10 s.\n\nAnswer: 10 s.\n\nCheck and interpretation: Subtracting speeds would apply to overtaking in the same direction. Counting just one train’s length would stop before both trains fully clear each other.",
    "family": "opposite-trains",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-weighted-group-average-5",
    "topic": "apt",
    "prompt": "A class of 30 students has mean score 65; another of 35 has mean score 75. What is the mean score when the classes are combined?",
    "choices": [
      "70",
      "69.6154",
      "140",
      "70.3846"
    ],
    "key": 3,
    "why": "Principle: A combined mean is weighted by group size. Recover each group’s total score before pooling.\n\nStep 1: First total score is 30×65=1950.\n\nStep 2: Second total score is 35×75=2625.\n\nStep 3: Divide the total 4575 by 65 students to obtain 70.3846.\n\nAnswer: 70.3846.\n\nCheck and interpretation: The result lies between the two class means and is closer to the mean of the larger class. A simple average of class means requires equal class sizes.",
    "family": "weighted-group-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-logarithm-equation-5",
    "topic": "apt",
    "prompt": "For real x>6, solve log₂(x−6)+log₂(x+6)=log₂(133).",
    "choices": [
      "6",
      "19",
      "11.5326",
      "13"
    ],
    "key": 3,
    "why": "Principle: For positive arguments, the sum of logarithms equals the logarithm of the product. The domain restriction must be checked after solving the resulting quadratic.\n\nStep 1: Combine the left side as log₂[(x−6)(x+6)].\n\nStep 2: Equate arguments: x²−36=133, giving x²=169.\n\nStep 3: The algebraic roots are ±13, but only +13 satisfies x>6.\n\nAnswer: 13.\n\nCheck and interpretation: The negative root is extraneous to the logarithm domain even though it satisfies the squared equation. Ignoring domain conditions can produce an invalid second answer.",
    "family": "logarithm-equation",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-bayes-detector-6",
    "topic": "math",
    "prompt": "A fault occurs with probability 0.06. A detector reports positive with probability 0.9 when faulty and 0.05 when healthy. Given a positive report, find the probability of a fault.",
    "choices": [
      "0.5347",
      "0.9",
      "0.06",
      "0.054"
    ],
    "key": 0,
    "why": "Principle: Bayes’ theorem combines likelihood with the prior fault probability. A positive detector report can come from a real fault or a false alarm.\n\nStep 1: True-positive probability is 0.9×0.06=0.054.\n\nStep 2: Total positive probability is 0.9×0.06+0.05×0.94=0.101.\n\nStep 3: Normalize the true-positive term by the total to obtain 0.5347.\n\nAnswer: 0.5347.\n\nCheck and interpretation: Sensitivity alone is not the posterior fault probability. When faults are rare, healthy components can contribute many false positives.",
    "family": "bayes-detector",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-inverse-trace-6",
    "topic": "math",
    "prompt": "An invertible 2×2 matrix A has trace 17 and determinant 70. Find trace(A⁻¹), rounded to four decimal places.",
    "choices": [
      "4.1176",
      "17",
      "0.0143",
      "0.2429"
    ],
    "key": 3,
    "why": "Principle: The eigenvalues of an inverse matrix are reciprocals of the original eigenvalues. Their sum is the original eigenvalue sum divided by the original product.\n\nStep 1: Let the eigenvalues be λ₁ and λ₂ with λ₁+λ₂=17 and λ₁λ₂=70.\n\nStep 2: Then trace(A⁻¹)=1/λ₁+1/λ₂=(λ₁+λ₂)/(λ₁λ₂).\n\nStep 3: Substitute the given invariants: 17/70=0.2429.\n\nAnswer: 0.2429.\n\nCheck and interpretation: The determinant is nonzero, so the inverse exists. Taking the reciprocal of the trace would not in general equal the trace of the inverse.",
    "family": "inverse-trace",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-residue-contour-6",
    "topic": "math",
    "prompt": "C is the counterclockwise circle |z|=8. For f(z)=1/[(z−7)(z−10)], what real coefficient c satisfies ∮_C f(z)dz=2πj c?",
    "choices": [
      "0.3333",
      "-0.3333",
      "-0.6667",
      "0"
    ],
    "key": 1,
    "why": "Principle: The residue theorem gives a contour integral as 2πj times the sum of residues of poles strictly inside a positively oriented contour.\n\nStep 1: The poles are z=7 and z=10. Only 7 lies inside |z|=8.\n\nStep 2: The simple-pole residue at z=7 is lim(z→7)(z−7)f(z)=1/(7−10).\n\nStep 3: Thus the integral is 2πj×(-0.3333), and c=-0.3333.\n\nAnswer: -0.3333.\n\nCheck and interpretation: The outside pole contributes no residue to this contour. Reversing the contour orientation would reverse the sign, but the stated orientation is counterclockwise.",
    "family": "residue-contour",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-ode-initial-value-6",
    "topic": "math",
    "prompt": "For t≥0, y′+7y=15, with y(0)=7. Find y(1/7), rounded to four decimal places.",
    "choices": [
      "2.1429",
      "2.5752",
      "9.1429",
      "3.9297"
    ],
    "key": 3,
    "why": "Principle: A first-order linear differential equation has a constant particular solution plus an exponentially decaying homogeneous solution. The initial condition fixes the decay coefficient.\n\nStep 1: At equilibrium, y∞=15/7. The homogeneous term is Ce^(−7t).\n\nStep 2: Apply y(0)=7 to get C=7−15/7.\n\nStep 3: At t=1/7, the exponential is e⁻¹, giving y=15/7+(7−15/7)e⁻¹=3.9297.\n\nAnswer: 3.9297.\n\nCheck and interpretation: Discarding the initial condition would leave only the final value. The result lies between the initial value and the equilibrium because the decay factor is between zero and one.",
    "family": "ode-initial-value",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-correlated-variance-6",
    "topic": "math",
    "prompt": "Random variables X and Y have variances 7 and 9, and covariance 0.5. Find Var(2X−Y).",
    "choices": [
      "37",
      "35",
      "19",
      "39"
    ],
    "key": 1,
    "why": "Principle: For correlated variables, Var(aX+bY)=a²Var(X)+b²Var(Y)+2abCov(X,Y). The cross term changes sign when the coefficients have opposite signs.\n\nStep 1: Here a=2 and b=−1, so the individual variance contribution is 4×7+9=37.\n\nStep 2: The covariance contribution is 2×2×(−1)×0.5=−2.\n\nStep 3: Adding them gives Var(2X−Y)=35.\n\nAnswer: 35.\n\nCheck and interpretation: Independence was not stated and would contradict the nonzero covariance. The negative coefficient on Y does not make its own variance term negative.",
    "family": "correlated-variance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-math-newton-step-6",
    "topic": "math",
    "prompt": "Newton–Raphson is used to solve x²−8=0 starting at x₀=7. What is x₁, rounded to four decimal places?",
    "choices": [
      "1.1429",
      "4.0714",
      "-34",
      "2.8284"
    ],
    "key": 1,
    "why": "Principle: Newton–Raphson updates x through xnew=x−f(x)/f′(x). A single update is generally an approximation, not the exact root.\n\nStep 1: For f(x)=x²−8, f′(x)=2x.\n\nStep 2: At x₀=7, f(x₀)=41 and f′(x₀)=14.\n\nStep 3: Thus x₁=7−(41)/14=(7+8/7)/2=4.0714.\n\nAnswer: 4.0714.\n\nCheck and interpretation: Using the exact square root would answer a different question: this asks for one algorithmic iteration from the specified starting point.",
    "family": "newton-step",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-dependent-input-resistance-6",
    "topic": "networks",
    "prompt": "A one-port has resistor R=8 kΩ to ground in parallel with an upward controlled current source g v/R, where v is port voltage and g=0.22. Find the input resistance in kΩ.",
    "choices": [
      "10.2564 kΩ",
      "6.24 kΩ",
      "6.5574 kΩ",
      "36.3636 kΩ"
    ],
    "key": 0,
    "why": "Principle: Input resistance with dependent sources must be obtained from a test voltage or current while retaining the dependent source. The upward source opposes current drawn through the resistor.\n\nStep 1: Apply test voltage v. Resistor current entering the network is v/R.\n\nStep 2: The controlled source supplies g v/R toward the port, so net entering current is i=(1−g)v/R.\n\nStep 3: Therefore Rin=v/i=R/(1−g)=8/(1−0.22)=10.2564 kΩ.\n\nAnswer: 10.2564 kΩ.\n\nCheck and interpretation: Turning off a dependent source would incorrectly leave only R. Since 0<g<1, the input resistance is positive and exceeds R.",
    "family": "dependent-input-resistance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-nodal-two-sources-6",
    "topic": "networks",
    "prompt": "A node is connected through 7 kΩ to a fixed 16 V node, through 9 kΩ to a fixed 10 V node, and through 10 kΩ to ground. Find its voltage in V.",
    "choices": [
      "13 V",
      "9.4118 V",
      "5.2632 V",
      "9.5964 V"
    ],
    "key": 3,
    "why": "Principle: Nodal analysis applies KCL using each branch’s voltage difference divided by resistance. The unknown node is not an unloaded two-resistor divider.\n\nStep 1: Write (v−16)/7+(v−10)/9+v/10=0, using kΩ and mA.\n\nStep 2: Collect v terms: v(1/7+1/9+1/10)=16/7+10/9.\n\nStep 3: Divide the source-current sum by total conductance to get v=9.5964 V.\n\nAnswer: 9.5964 V.\n\nCheck and interpretation: The ground branch loads both source paths. Ignoring either fixed-voltage source changes the node equation and gives a different voltage.",
    "family": "nodal-two-sources",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-series-capacitor-energy-6",
    "topic": "networks",
    "prompt": "Initially uncharged capacitors 8 µF and 10 µF are connected in series across 22 V DC and allowed to settle. Find total stored electrostatic energy in µJ.",
    "choices": [
      "4356 µJ",
      "1075.5556 µJ",
      "2151.1111 µJ",
      "1936 µJ"
    ],
    "key": 1,
    "why": "Principle: Series capacitors carry equal charge and have equivalent capacitance Ceq=C₁C₂/(C₁+C₂). Their total stored energy is CeqV²/2.\n\nStep 1: Compute Ceq=8×10/(8+10)=4.4444 µF.\n\nStep 2: The total terminal voltage is 22 V.\n\nStep 3: Energy is (1/2)×4.4444×22²=1075.5556 µJ, since µF·V² gives µJ.\n\nAnswer: 1075.5556 µJ.\n\nCheck and interpretation: Using C₁+C₂ would treat the connection as parallel. The smaller capacitor has the larger voltage, but the equivalent capacitance already accounts for voltage division.",
    "family": "series-capacitor-energy",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-rlc-critical-damping-6",
    "topic": "networks",
    "prompt": "A source-free series RLC circuit has L=8 mH and C=10 µF. Find the total series resistance needed for critical damping in Ω.",
    "choices": [
      "28.2843 Ω",
      "113.1371 Ω",
      "56.5685 Ω",
      "0.8944 Ω"
    ],
    "key": 2,
    "why": "Principle: The series RLC natural polynomial is s²+(R/L)s+1/(LC). Critical damping occurs when the repeated-root condition α=ω₀ holds.\n\nStep 1: Identify α=R/(2L) and ω₀=1/√(LC).\n\nStep 2: Equating them gives Rcrit=2√(L/C).\n\nStep 3: Convert the given values to H and F, then calculate 2√[8×10⁻³/(10×10⁻⁶)]=56.5685 Ω.\n\nAnswer: 56.5685 Ω.\n\nCheck and interpretation: The factor two is essential. The parallel-RLC critical-resistance relation has a different form because its damping coefficient depends inversely on resistance.",
    "family": "rlc-critical-damping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-nonsinusoidal-rms-6",
    "topic": "networks",
    "prompt": "A current is i(t)=7+13cos(100t)+9sin(200t) A. Find RMS current over a common period, rounded to four decimal places.",
    "choices": [
      "12.227 A",
      "22.5563 A",
      "17.2916 A",
      "13.1909 A"
    ],
    "key": 3,
    "why": "Principle: RMS is the square root of the mean square. Orthogonal harmonics have zero average cross products over a common period, while the DC contribution is not halved.\n\nStep 1: The DC mean-square contribution is 7²=49.\n\nStep 2: Each sinusoid contributes half its squared peak amplitude: (13²+9²)/2=125.\n\nStep 3: Add contributions and take the square root: Irms=√174=13.1909 A.\n\nAnswer: 13.1909 A.\n\nCheck and interpretation: Adding the individual RMS values is invalid for orthogonal harmonics. The DC term must retain its full squared value.",
    "family": "nonsinusoidal-rms",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-networks-thevenin-divider-6",
    "topic": "networks",
    "prompt": "An ideal 11 V source drives series resistors 8 kΩ and 10 kΩ. The output terminals are across the lower 10 kΩ resistor. What Norton short-circuit current, in mA, corresponds to the output Thévenin equivalent?",
    "choices": [
      "0.6111 mA",
      "0.7639 mA",
      "1.375 mA",
      "0.6875 mA"
    ],
    "key": 2,
    "why": "Principle: Norton current equals the terminal short-circuit current or Vth/Rth. When the output is shorted, the lower resistor is bypassed.\n\nStep 1: The open-circuit voltage is Vth=11×10/(8+10)=6.1111 V.\n\nStep 2: With the ideal source deactivated to a short, Rth=8∥10=4.4444 kΩ.\n\nStep 3: Therefore IN=Vth/Rth=11/8=1.375 mA.\n\nAnswer: 1.375 mA.\n\nCheck and interpretation: The same result follows directly under an output short: all source current flows through the upper resistor and bypasses the lower resistor.",
    "family": "thevenin-divider",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-anticausal-z-6",
    "topic": "signals",
    "prompt": "X(z)=1/(1−0.5z⁻¹) has ROC |z|<0.5. Find x[−2], rounded to four decimal places.",
    "choices": [
      "-0.25",
      "4",
      "-4",
      "0"
    ],
    "key": 2,
    "why": "Principle: A rational z-transform needs its ROC to determine sidedness. ROC inside the pole corresponds to an anti-causal rather than a causal exponential.\n\nStep 1: For ROC |z|<a, the inverse is x[n]=−aⁿu[−n−1].\n\nStep 2: At n=−2 the unit step equals one.\n\nStep 3: Thus x[−2]=−(0.5)⁻²=−1/0.25=-4.\n\nAnswer: -4.\n\nCheck and interpretation: Using the right-sided inverse aⁿu[n] would require ROC outside the pole and would give the wrong negative-time samples.",
    "family": "anticausal-z",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-fourier-time-scaling-6",
    "topic": "signals",
    "prompt": "For x(t)=e^(−8|t|), let y(t)=x(2t). Using X(ω)=∫x(t)e^(−jωt)dt, find Y(7), rounded to four decimal places.",
    "choices": [
      "0.1416",
      "0.2098",
      "0.1049",
      "0.0708"
    ],
    "key": 2,
    "why": "Principle: Time compression y(t)=x(bt) gives Y(ω)=X(ω/b)/|b|. For e^(−a|t|), the transform is 2a/(a²+ω²).\n\nStep 1: Here b=2, so Y(ω)=(1/2)X(ω/2).\n\nStep 2: Substitute the known transform: Y(ω)=a/[a²+(ω/2)²].\n\nStep 3: At ω=7, Y=8/[64+49/4]=0.1049.\n\nAnswer: 0.1049.\n\nCheck and interpretation: Compressing the signal halves its total area, so Y(0) must be half of X(0). Forgetting the 1/2 scale factor fails that check.",
    "family": "fourier-time-scaling",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-rectangle-convolution-6",
    "topic": "signals",
    "prompt": "Let x(t)=1 for 0≤t≤8 and zero otherwise. If y=x*x, find y(8.5).",
    "choices": [
      "8",
      "8.5",
      "0.5",
      "7.5"
    ],
    "key": 3,
    "why": "Principle: Convolution of two unit-height rectangular pulses equals the length of their overlap as one is shifted. The result is triangular.\n\nStep 1: The integrand is one when τ lies in both [0,8] and [t−8,t].\n\nStep 2: At t=8.5, these intervals overlap from 0.5 to 8.\n\nStep 3: The overlap length and hence the convolution value is 8−0.5=7.5.\n\nAnswer: 7.5.\n\nCheck and interpretation: The peak occurs at t equal to one pulse width and equals that width. The requested point is on the descending side, so its value is slightly below the peak.",
    "family": "rectangle-convolution",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-periodic-average-power-6",
    "topic": "signals",
    "prompt": "Find time-average power of x(t)=3+7cos(3t)+8sin(6t), assuming a 1 Ω normalization.",
    "choices": [
      "65.5",
      "122",
      "61",
      "10.5"
    ],
    "key": 0,
    "why": "Principle: Average signal power is the mean of |x(t)|² over a period. Distinct harmonics and DC are mutually orthogonal over a common period.\n\nStep 1: The DC term contributes 3²=9.\n\nStep 2: The two sinusoidal terms contribute 7²/2 and 8²/2. Cross terms average to zero.\n\nStep 3: Thus P=9+49/2+64/2=65.5.\n\nAnswer: 65.5.\n\nCheck and interpretation: A nonzero periodic signal has finite average power but infinite total energy. The 1 Ω normalization avoids an additional resistance factor.",
    "family": "periodic-average-power",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-circular-convolution-dc-6",
    "topic": "signals",
    "prompt": "Two length-10 sequences have every sample equal to 7 and 8, respectively. Find any sample of their length-10 circular convolution.",
    "choices": [
      "56",
      "560",
      "504",
      "5600"
    ],
    "key": 1,
    "why": "Principle: An N-point circular convolution sums N products with indices wrapped modulo N. Constant sequences make every product identical.\n\nStep 1: Write y[r]=Σₘ₌₀ᴺ⁻¹x[m]h[(r−m) mod N].\n\nStep 2: Each term equals 7×8=56, independent of r and m.\n\nStep 3: There are 10 terms, so every output sample equals 10×56=560.\n\nAnswer: 560.\n\nCheck and interpretation: A DFT-domain derivation gives the same result: only the DC bins are nonzero, and the inverse transform contributes its 1/N factor.",
    "family": "circular-convolution-dc",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-signals-white-noise-filter-6",
    "topic": "signals",
    "prompt": "Zero-mean discrete white noise with variance 7 enters a stable filter h[n]=(0.4)ⁿu[n]. Find the output variance, rounded to four decimal places.",
    "choices": [
      "8.3333",
      "11.6667",
      "5.88",
      "7"
    ],
    "key": 0,
    "why": "Principle: For white input noise, distinct input samples are uncorrelated. Output variance is input variance multiplied by the sum of squared impulse-response coefficients.\n\nStep 1: Write σy²=σx²Σₙ|h[n]|².\n\nStep 2: Here Σₙ₌₀∞a²ⁿ=1/(1−a²), because |a|<1.\n\nStep 3: Therefore σy²=7/(1−0.4²)=8.3333.\n\nAnswer: 8.3333.\n\nCheck and interpretation: Using DC gain squared would incorrectly assume all noise samples add coherently. Whiteness eliminates the cross-covariance terms.",
    "family": "white-noise-filter",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-depletion-doping-6",
    "topic": "devices",
    "prompt": "For a one-sided abrupt p⁺n junction at fixed total junction potential, the lightly doped n-side concentration is multiplied by 4. By what factor does total depletion width change?",
    "choices": [
      "2",
      "0.25",
      "0.5",
      "4"
    ],
    "key": 2,
    "why": "Principle: For a one-sided abrupt junction, depletion extends mainly into the lightly doped side, with W≈√[2ε(Vbi+VR)/(qND)]. Hold the total potential fixed as stated.\n\nStep 1: All quantities except ND are fixed, so W is proportional to ND⁻¹ᐟ².\n\nStep 2: With ND,new=4ND,old, form Wnew/Wold=√(ND,old/ND,new).\n\nStep 3: The width factor is 1/√4=0.5.\n\nAnswer: 0.5.\n\nCheck and interpretation: More doping requires less depleted distance to supply the compensating space charge. Fixing total junction potential avoids an extra built-in-potential change.",
    "family": "depletion-doping",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-mos-saturation-check-6",
    "topic": "devices",
    "prompt": "An nMOS source is grounded, gate held at 2.7 V, drain connected through 5 kΩ to 16 V. V_TH=0.5 V and I_D=(0.4/2)(V_GS−V_TH)² mA in saturation. Neglect channel-length modulation. Find V_DS in V.",
    "choices": [
      "16 V",
      "6.32 V",
      "11.16 V",
      "4.84 V"
    ],
    "key": 2,
    "why": "Principle: First compute the square-law saturation current, then the drain resistor drop. The result must satisfy VDS≥VGS−VTH to validate the assumed region.\n\nStep 1: Overdrive is VOV=2.7−0.5=2.2 V.\n\nStep 2: Saturation current is ID=0.2×(2.2)²=0.968 mA.\n\nStep 3: Drain voltage is VDS=16−0.968×5=11.16 V.\n\nStep 4: This exceeds the overdrive 2.2 V, so saturation is consistent.\n\nAnswer: 11.16 V.\n\nCheck and interpretation: Applying a saturation formula without checking the resulting VDS can produce an invalid bias solution. The supplied parameters keep the MOSFET in saturation.",
    "family": "mos-saturation-check",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-piecewise-diode-circuit-6",
    "topic": "devices",
    "prompt": "A 11 V source feeds a forward-oriented diode through 7 kΩ. The diode model is open when off and a constant 0.6 V drop when on. Find the circuit current in mA.",
    "choices": [
      "1.5714 mA",
      "1.4857 mA",
      "1.6571 mA",
      "0.7429 mA"
    ],
    "key": 1,
    "why": "Principle: A piecewise diode circuit is solved by assuming a state and checking it. The positive source can forward bias this series diode, so the on-state model applies.\n\nStep 1: Assume the diode is on, fixing its forward voltage at 0.6 V.\n\nStep 2: KVL gives resistor voltage VR=11−0.6=10.4 V.\n\nStep 3: The current is VR/R=10.4/7=1.4857 mA, which is positive and validates the on state.\n\nAnswer: 1.4857 mA.\n\nCheck and interpretation: The given constant-drop model differs from an ideal zero-drop diode and from the exponential Shockley model. Use the specified approximation consistently.",
    "family": "piecewise-diode-circuit",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-junction-capacitance-6",
    "topic": "devices",
    "prompt": "An abrupt junction has built-in potential 0.7 V and zero-bias depletion capacitance C₀. At reverse bias 7 V, find C_j/C₀ using the depletion approximation.",
    "choices": [
      "0.0909",
      "3.3166",
      "0.3015",
      "0.125"
    ],
    "key": 2,
    "why": "Principle: For an abrupt junction, depletion width grows as √(Vbi+VR), and capacitance varies inversely with depletion width. Hence Cj=C₀(1+VR/Vbi)⁻¹ᐟ².\n\nStep 1: At zero reverse bias the reference total potential is Vbi=0.7 V.\n\nStep 2: At the specified reverse bias it is 0.7+7=7.7 V.\n\nStep 3: Thus Cj/C₀=√[0.7/(0.7+7)]=0.3015.\n\nAnswer: 0.3015.\n\nCheck and interpretation: Reverse bias widens depletion and lowers capacitance, so the ratio must be below one. A linearly graded junction has a different exponent.",
    "family": "junction-capacitance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-drift-transit-6",
    "topic": "devices",
    "prompt": "An electron crosses 16 µm of uniform silicon under field magnitude 160 V/cm. Take mobility 1000 cm²/(V·s), ignore velocity saturation and diffusion. Find drift transit time in ns.",
    "choices": [
      "1000 ns",
      "0.1 ns",
      "100 ns",
      "10 ns"
    ],
    "key": 3,
    "why": "Principle: In the low-field mobility model, drift-speed magnitude is μE. Transit time is distance divided by speed, with consistent length units.\n\nStep 1: The speed magnitude is μE=1000×160=160000 cm/s.\n\nStep 2: Convert distance 16 µm to 0.0016 cm.\n\nStep 3: Time is L/v=1.0000e-8 s=10 ns.\n\nAnswer: 10 ns.\n\nCheck and interpretation: Electron drift direction is opposite the electric field, but the transit-time magnitude is positive. High-field velocity saturation is explicitly excluded.",
    "family": "drift-transit",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-devices-bjt-emitter-current-6",
    "topic": "devices",
    "prompt": "An NPN transistor operates in forward-active mode with I_C=4 mA and β=140. Find emitter current in mA, rounded to four decimal places.",
    "choices": [
      "4 mA",
      "4.0286 mA",
      "3.9714 mA",
      "0.0286 mA"
    ],
    "key": 1,
    "why": "Principle: The emitter current is the sum of collector and base currents. Finite current gain β must be retained when an exact emitter-current value is requested.\n\nStep 1: Using β=IC/IB, the base current is IB=4/140=0.0286 mA.\n\nStep 2: By terminal-current conservation, IE=IC+IB.\n\nStep 3: Thus IE=4(1+1/140)=4.0286 mA.\n\nAnswer: 4.0286 mA.\n\nCheck and interpretation: Approximating IE≈IC is useful for large β but misses the base-current contribution asked for in this calculation.",
    "family": "bjt-emitter-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-miller-input-capacitance-6",
    "topic": "analog",
    "prompt": "A voltage amplifier has small-signal gain v_o/v_i=−22. A 4 pF capacitor connects its input and output. Under Miller’s theorem, find its equivalent input capacitance in pF.",
    "choices": [
      "4 pF",
      "84 pF",
      "92 pF",
      "4.1818 pF"
    ],
    "key": 2,
    "why": "Principle: Miller’s theorem replaces an impedance bridging two nodes by separate grounded impedances when their voltage ratio is known. For a capacitor, Cin=C(1−Av).\n\nStep 1: The capacitor input current is C d(vi−vo)/dt.\n\nStep 2: With vo=−22vi, the voltage across it is (1+22)vi.\n\nStep 3: Thus Cin=4×23=92 pF.\n\nAnswer: 92 pF.\n\nCheck and interpretation: The inverting gain multiplies the input capacitance substantially. The smaller C(1−1/Av) term belongs to the output equivalent.",
    "family": "miller-input-capacitance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-cmrr-gain-6",
    "topic": "analog",
    "prompt": "A differential amplifier has differential voltage gain 220 and CMRR=72 dB. Find the magnitude of common-mode voltage gain, rounded to four decimal places.",
    "choices": [
      "0",
      "18.0958",
      "11",
      "0.0553"
    ],
    "key": 3,
    "why": "Principle: CMRR is the ratio of differential gain to common-mode gain. Since these are voltage gains, its decibel definition uses 20log₁₀.\n\nStep 1: CMRRlinear=10^(72/20).\n\nStep 2: Using CMRRlinear=|Ad/Ac|, rearrange |Ac|=|Ad|/CMRRlinear.\n\nStep 3: Therefore |Ac|=220/10^(72/20)=0.0553.\n\nAnswer: 0.0553.\n\nCheck and interpretation: Using 10log rather than 20log treats an amplitude ratio as a power ratio and gives a very different answer.",
    "family": "cmrr-gain",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-cascaded-pole-bandwidth-6",
    "topic": "analog",
    "prompt": "Two identical, isolated, unity-DC-gain low-pass stages each have a single pole at 22 kHz. What is the overall −3 dB frequency in kHz?",
    "choices": [
      "22 kHz",
      "14.1591 kHz",
      "11 kHz",
      "15.5563 kHz"
    ],
    "key": 1,
    "why": "Principle: Cascaded magnitudes multiply. Two identical first-order responses produce total magnitude 1/[1+(f/fc)²], rather than a single-pole response.\n\nStep 1: For each stage, |H|=1/√[1+(f/22)²].\n\nStep 2: For the cascade, set 1/[1+(f/22)²]=1/√2 at −3 dB.\n\nStep 3: Then (f/22)²=√2−1, so f=22√(√2−1)=14.1591 kHz.\n\nAnswer: 14.1591 kHz.\n\nCheck and interpretation: At each individual pole frequency the cascade is already at −6 dB. Therefore its overall −3 dB frequency must be lower than the individual pole frequency.",
    "family": "cascaded-pole-bandwidth",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-input-loading-6",
    "topic": "analog",
    "prompt": "A common-emitter stage has gain v_o/v_b=-26, rπ=10 kΩ and bias resistance 22 kΩ to AC ground. An input source has series resistance 8 kΩ. Neglect other input effects. Find v_o/v_s.",
    "choices": [
      "-26",
      "-14.4444",
      "12.0168",
      "-12.0168"
    ],
    "key": 3,
    "why": "Principle: Source resistance and amplifier input resistance form a voltage divider before the stage gain. The bias resistance loads rπ in parallel.\n\nStep 1: Input resistance is Rin=22∥10=6.875 kΩ.\n\nStep 2: The base/source ratio is vb/vs=Rin/(Rs+Rin)=0.4622.\n\nStep 3: Multiply by the stage gain -26: vo/vs=-12.0168.\n\nAnswer: -12.0168.\n\nCheck and interpretation: The loaded gain magnitude is smaller than the specified base-to-output gain. Omitting the bias network overestimates input resistance and overall gain.",
    "family": "input-loading",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-series-feedback-input-6",
    "topic": "analog",
    "prompt": "A voltage-series negative-feedback amplifier has open-loop input resistance 8 kΩ and loop gain Aβ=22. Under the ideal feedback model, find closed-loop input resistance in kΩ.",
    "choices": [
      "0.3478 kΩ",
      "176 kΩ",
      "30 kΩ",
      "184 kΩ"
    ],
    "key": 3,
    "why": "Principle: Series mixing at the input reduces the error voltage for a given applied input, increasing input resistance by the feedback factor 1+Aβ.\n\nStep 1: The series-feedback resistance transformation is Rif=Ri(1+Aβ).\n\nStep 2: The feedback factor here is 1+22=23.\n\nStep 3: Therefore Rif=8×23=184 kΩ.\n\nAnswer: 184 kΩ.\n\nCheck and interpretation: Shunt mixing would instead reduce input resistance. The specified voltage-series topology is what determines the direction of the transformation.",
    "family": "series-feedback-input",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-analog-schmitt-hysteresis-6",
    "topic": "analog",
    "prompt": "An ideal inverting Schmitt trigger has symmetric output saturation ±11 V. Its non-inverting input is a divider taking fraction β=7/(7+9) of the output, referenced to ground. Find hysteresis width in V.",
    "choices": [
      "9.625 V",
      "4.8125 V",
      "25.1429 V",
      "12.375 V"
    ],
    "key": 0,
    "why": "Principle: The positive-feedback divider sets two switching thresholds according to the present output state. Hysteresis width is the upper threshold minus the lower threshold.\n\nStep 1: When output is +11 V, threshold is +βVsat=+4.8125 V.\n\nStep 2: When output is −11 V, threshold is −4.8125 V.\n\nStep 3: Their difference is 2βVsat=2×(7/16)×11=9.625 V.\n\nAnswer: 9.625 V.\n\nCheck and interpretation: The single positive threshold is only half the hysteresis width because the saturation levels and divider reference are symmetric about zero.",
    "family": "schmitt-hysteresis",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-parity-function-count-6",
    "topic": "digital",
    "prompt": "An N-input XOR gate has N=9. Across all 2^N equally likely binary input words, how many make its output one?",
    "choices": [
      "511",
      "9",
      "128",
      "256"
    ],
    "key": 3,
    "why": "Principle: An XOR outputs one for odd input parity. The even- and odd-parity sets have the same size because flipping any fixed input bit pairs one with the other.\n\nStep 1: There are 2^9=512 possible words.\n\nStep 2: Flipping the first bit maps each even-parity word to one unique odd-parity word and vice versa.\n\nStep 3: Exactly half therefore have odd parity: 2^(9−1)=256.\n\nAnswer: 256.\n\nCheck and interpretation: XOR is not an OR gate: inputs with two ones have output zero. Counting all nonzero words would incorrectly include even-parity words.",
    "family": "parity-function-count",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-ripple-adder-delay-6",
    "topic": "digital",
    "prompt": "An 10-bit ripple-carry adder has carry propagation delay 1.6 ns per stage and final sum generation delay 2.6 ns after carry arrives. Ignore operand-to-carry startup delay. Find delay from carry-in to most-significant sum in ns.",
    "choices": [
      "17 ns",
      "18.6 ns",
      "26 ns",
      "14.4 ns"
    ],
    "key": 0,
    "why": "Principle: The most-significant sum depends on carry propagation through all lower stages, then the sum logic of the last stage. The stated model separates these delays.\n\nStep 1: A carry reaches the most-significant stage after 9 lower-stage carry delays.\n\nStep 2: This propagation takes 9×1.6=14.4 ns.\n\nStep 3: Add the final sum delay 2.6 ns to obtain 17 ns.\n\nAnswer: 17 ns.\n\nCheck and interpretation: The final carry-out path has a different endpoint. Counting n carry stages before generating the most-significant sum adds one stage too many.",
    "family": "ripple-adder-delay",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-hamming-parity-6",
    "topic": "digital",
    "prompt": "A binary single-error-correcting Hamming code protects 32 data bits. What is the minimum number of Hamming parity bits r satisfying 2^r≥m+r+1? Do not add an overall double-error-detection parity bit.",
    "choices": [
      "6",
      "5",
      "7",
      "8"
    ],
    "key": 0,
    "why": "Principle: The syndrome must identify every possible single-bit error among data and parity positions, plus the no-error case. Hence 2ʳ≥m+r+1.\n\nStep 1: For r=5, 2ʳ=32 is below m+r+1=38.\n\nStep 2: For r=6, 2ʳ=64 is at least m+r+1=39.\n\nStep 3: The minimum valid count is therefore 6 parity bits.\n\nAnswer: 6.\n\nCheck and interpretation: An extended SECDED code adds one overall parity bit, but that extra protection was explicitly excluded.",
    "family": "hamming-parity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-pipeline-latency-6",
    "topic": "digital",
    "prompt": "An ideal 10-stage pipeline has clock period 3.2 ns. Starting empty, it processes 50 instructions with no stalls and one completion per clock after filling. What is total time until all instructions finish?",
    "choices": [
      "1600 ns",
      "160 ns",
      "188.8 ns",
      "192 ns"
    ],
    "key": 2,
    "why": "Principle: An initially empty ideal pipeline needs one full pipeline latency for the first instruction, then one cycle for each subsequent completion.\n\nStep 1: The first instruction finishes after 10 cycles.\n\nStep 2: The remaining 49 instructions each require one additional cycle, totaling 59 cycles.\n\nStep 3: Multiply by 3.2 ns/cycle to get 188.8 ns.\n\nAnswer: 188.8 ns.\n\nCheck and interpretation: Ignoring fill latency gives too small a result. Multiplying instruction count by stage count would describe fully serial execution without overlap.",
    "family": "pipeline-latency",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-johnson-counter-6",
    "topic": "digital",
    "prompt": "An 10-flip-flop Johnson counter is initialized to all zero and operates in its intended cycle. How many distinct states occur before repetition?",
    "choices": [
      "10",
      "20",
      "1024",
      "1023"
    ],
    "key": 1,
    "why": "Principle: A Johnson counter feeds the complemented last-stage output into the first stage. Its intended cycle contains 2N states for N flip-flops.\n\nStep 1: Starting with all zeros, ones shift in for N=10 clocks until all stages are one.\n\nStep 2: Zeros then shift in for another 10 clocks, returning to all zero.\n\nStep 3: The cycle therefore contains 2×10=20 distinct states.\n\nAnswer: 20.\n\nCheck and interpretation: An ordinary ring counter has N intended states, while an unrestricted binary counter has 2ᴺ. Initialization matters because a Johnson counter can have other cycles.",
    "family": "johnson-counter",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-digital-xor-probability-6",
    "topic": "digital",
    "prompt": "Independent binary signals A and B are each one with probability 0.4. What is the probability that A XOR B equals one?",
    "choices": [
      "0.16",
      "0.48",
      "0.64",
      "0.84"
    ],
    "key": 1,
    "why": "Principle: XOR is one for exactly one asserted input: events (A=1,B=0) and (A=0,B=1). Independence permits multiplying probabilities in each case.\n\nStep 1: P(A=1,B=0)=0.4×0.6.\n\nStep 2: P(A=0,B=1)=0.6×0.4.\n\nStep 3: Add the disjoint cases: P(XOR=1)=2p(1−p)=0.48.\n\nAnswer: 0.48.\n\nCheck and interpretation: The union probability 2p−p² belongs to OR, which also accepts the both-one case. XOR excludes that case.",
    "family": "xor-probability",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-root-locus-breakaway-6",
    "topic": "control",
    "prompt": "For unity negative feedback with G(s)=K/[(s+7)(s+23)], K≥0, find the gain at the real-axis breakaway point.",
    "choices": [
      "225",
      "8",
      "64",
      "161"
    ],
    "key": 2,
    "why": "Principle: On the root locus, K=−(s+a)(s+b). A real-axis breakaway occurs where dK/ds=0, equivalently where the two real closed-loop roots merge.\n\nStep 1: Differentiate K(s) to get dK/ds=−[2s+30].\n\nStep 2: The stationary point is s=−30/2, between the two real open-loop poles.\n\nStep 3: Substituting gives Kbreak=(b−a)²/4=(23−7)²/4=64.\n\nAnswer: 64.\n\nCheck and interpretation: The same boundary follows by setting the characteristic quadratic discriminant to zero. Positive gain beyond it produces a complex-conjugate root pair.",
    "family": "root-locus-breakaway",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-lead-phase-6",
    "topic": "control",
    "prompt": "A lead compensator is G_c(s)=(1+sT)/(1+αsT), with α=0.4 and T>0. Find its maximum phase lead in degrees.",
    "choices": [
      "25.3769 degrees",
      "68.1986 degrees",
      "64.6231 degrees",
      "12.6885 degrees"
    ],
    "key": 0,
    "why": "Principle: For 0<α<1, a lead network has maximum phase φmax satisfying sinφmax=(1−α)/(1+α). The time constant sets the frequency of that maximum, not its angle.\n\nStep 1: Compute (1−α)/(1+α)=(1−0.4)/(1+0.4)=0.4286.\n\nStep 2: Apply inverse sine to obtain the angle in radians.\n\nStep 3: Convert to degrees: φmax=25.3769 degrees.\n\nAnswer: 25.3769 degrees.\n\nCheck and interpretation: The compensator pole is at a higher frequency than its zero, giving positive phase lead. Reversing the pole and zero would produce phase lag.",
    "family": "lead-phase",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-delay-margin-6",
    "topic": "control",
    "prompt": "A nominal loop has phase margin 60 degrees at its unique gain crossover 8 rad/s. A pure time delay is added, without changing loop magnitude. What delay in s exhausts that phase margin?",
    "choices": [
      "7.5 s",
      "0.0208 s",
      "0.1309 s",
      "0.2618 s"
    ],
    "key": 2,
    "why": "Principle: A pure delay e^(−sτ) has unit magnitude and contributes phase −ωτ radians. At the unchanged gain crossover it consumes the available phase margin.\n\nStep 1: Convert phase margin to radians: PM=60π/180.\n\nStep 2: Set the added lag ωgcτ equal to that margin at the limiting boundary.\n\nStep 3: Then τmax=(60π/180)/8=0.1309 s.\n\nAnswer: 0.1309 s.\n\nCheck and interpretation: This is the zero-margin boundary, so a positive remaining margin requires a smaller delay. Mixing degrees with ωτ in radians is a common error.",
    "family": "delay-margin",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-controllability-determinant-6",
    "topic": "control",
    "prompt": "For A=[0 1; −7 −9] and B=[0; 1], find the determinant of the 2×2 controllability matrix [B AB].",
    "choices": [
      "0",
      "-1",
      "1",
      "7"
    ],
    "key": 1,
    "why": "Principle: A two-state system is controllable if [B AB] has full rank. For a square 2×2 controllability matrix, a nonzero determinant establishes full rank.\n\nStep 1: Multiply AB=[1; −9].\n\nStep 2: Thus [B AB]=[0 1; 1 −9].\n\nStep 3: Its determinant is 0×(−9)−1×1=−1, independent of 7 and 9.\n\nAnswer: -1.\n\nCheck and interpretation: The nonzero determinant proves controllability for these parameters. Stability of A is a separate property and is not the controllability criterion.",
    "family": "controllability-determinant",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-pi-ramp-error-6",
    "topic": "control",
    "prompt": "A plant 1/(s+7) is controlled by C(s)=8+15/s in unity negative feedback. Assuming stable closed loop, find unit-ramp steady-state error.",
    "choices": [
      "0.125",
      "0.0667",
      "0.5333",
      "0.4667"
    ],
    "key": 3,
    "why": "Principle: A PI controller adds an integrator to the loop. Ramp error is set by the velocity constant of the complete controller–plant product.\n\nStep 1: Loop transfer is L(s)=(8s+15)/[s(s+7)].\n\nStep 2: Kv=lim(s→0)sL(s)=15/7.\n\nStep 3: Thus unit-ramp error is 1/Kv=7/15=0.4667.\n\nAnswer: 0.4667.\n\nCheck and interpretation: The characteristic polynomial is s²+15s+15, with positive coefficients, confirming stability here. Proportional gain changes dynamics but not this ramp-error constant.",
    "family": "pi-ramp-error",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-control-second-order-peak-time-6",
    "topic": "control",
    "prompt": "A standard underdamped second-order system has ω_n=9 rad/s and ζ=0.5. Find first peak time after a unit step, in s.",
    "choices": [
      "0.4031 s",
      "0.3491 s",
      "0.2222 s",
      "0.8061 s"
    ],
    "key": 0,
    "why": "Principle: The oscillatory part of a second-order step response uses damped natural frequency ωd=ωn√(1−ζ²). Its first peak occurs at π/ωd.\n\nStep 1: Compute ωd=9√(1−0.5²)=7.7942 rad/s.\n\nStep 2: The first peak occurs when ωdt=π.\n\nStep 3: Therefore tp=π/7.7942=0.4031 s.\n\nAnswer: 0.4031 s.\n\nCheck and interpretation: Using ωn directly neglects damping’s effect on oscillation frequency. Peak time differs from rise time and settling time.",
    "family": "second-order-peak-time",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-cascade-noise-figure-6",
    "topic": "comm",
    "prompt": "Two receiver stages have noise figures 5 dB and 11 dB. The first stage power gain is 22 dB. Find cascade noise figure in dB using Friis’ noise formula.",
    "choices": [
      "16 dB",
      "5 dB",
      "5.0993 dB",
      "5.1077 dB"
    ],
    "key": 2,
    "why": "Principle: Friis’ cascade-noise formula uses linear noise factors and linear power gain: Ftotal=F₁+(F₂−1)/G₁. Convert to dB only after combining.\n\nStep 1: Convert F₁=10^(5/10), F₂=10^(11/10) and G₁=10^(22/10).\n\nStep 2: Compute Ftotal=3.1623+(12.5893−1)/158.4893=3.2354.\n\nStep 3: Then NFtotal=10log₁₀(Ftotal)=5.0993 dB.\n\nAnswer: 5.0993 dB.\n\nCheck and interpretation: The first-stage gain suppresses the input-referred impact of later-stage noise. Noise figures in dB cannot simply be added.",
    "family": "cascade-noise-figure",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-bpsk-target-ebn0-6",
    "topic": "comm",
    "prompt": "For coherent BPSK in AWGN, P_b=Q(√(2E_b/N₀)). A target error probability has Q⁻¹(P_b)=3.5. What minimum linear E_b/N₀ meets this target?",
    "choices": [
      "12.25",
      "24.5",
      "6.125",
      "1.75"
    ],
    "key": 2,
    "why": "Principle: The Q function decreases with its argument, so meeting an upper limit on bit error probability requires a sufficiently large Eb/N0.\n\nStep 1: Set the Q-function argument to its target inverse: √(2Eb/N₀)=3.5.\n\nStep 2: Square both sides to get 2Eb/N₀=12.25.\n\nStep 3: Thus the minimum linear ratio is Eb/N₀=12.25/2=6.125.\n\nAnswer: 6.125.\n\nCheck and interpretation: This is a linear energy-to-noise-density ratio, not a dB value. A dB answer would require an additional 10log₁₀ operation.",
    "family": "bpsk-target-ebn0",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-selection-diversity-6",
    "topic": "comm",
    "prompt": "A receiver chooses the best of 2 independent diversity branches. Each branch is below the required SNR threshold with probability 0.17. Find total outage probability.",
    "choices": [
      "0.17",
      "0.0289",
      "0.34",
      "0.3111"
    ],
    "key": 1,
    "why": "Principle: Selection combining is in outage only when every candidate branch is below threshold. Independence makes the joint outage probability the product of branch probabilities.\n\nStep 1: Each branch has outage probability p=0.17.\n\nStep 2: The best branch fails only if all 2 branches fail simultaneously.\n\nStep 3: Therefore Pout=p^2=(0.17)^2=0.0289.\n\nAnswer: 0.0289.\n\nCheck and interpretation: The expression 1−(1−p)ᴸ instead means at least one branch fails, which is not an outage when another usable branch remains.",
    "family": "selection-diversity",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-nyquist-pcm-rate-6",
    "topic": "comm",
    "prompt": "A real low-pass message is ideally bandlimited to 9 kHz. It is sampled at the ideal Nyquist rate and quantized to 11 bits/sample. Ignoring overhead, find raw PCM bit rate in kbit/s.",
    "choices": [
      "99 kbit/s",
      "36864 kbit/s",
      "198 kbit/s",
      "18 kbit/s"
    ],
    "key": 2,
    "why": "Principle: The ideal Nyquist sampling rate is twice the highest baseband frequency. PCM bit rate is sample rate multiplied by bits per sample.\n\nStep 1: Minimum ideal sampling rate is fs=2×9=18 ksample/s.\n\nStep 2: Each sample contributes 11 binary digits.\n\nStep 3: Raw bit rate is 18×11=198 kbit/s.\n\nAnswer: 198 kbit/s.\n\nCheck and interpretation: The number of quantization levels is 2ᴺ, but each sample carries N bits, not 2ᴺ bits. Practical anti-alias filtering may require a higher sample rate.",
    "family": "nyquist-pcm-rate",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-filtered-awgn-variance-6",
    "topic": "comm",
    "prompt": "Continuous-time white Gaussian noise has two-sided PSD N₀/2 with N₀=0.5. It enters a filter h(t)=e^(−7t)u(t). Find output noise variance.",
    "choices": [
      "0.0179",
      "0.0357",
      "0.0714",
      "0.0026"
    ],
    "key": 0,
    "why": "Principle: For white noise with two-sided PSD N₀/2, filter output variance is (N₀/2)∫|h(t)|²dt. The impulse-response energy supplies the noise gain.\n\nStep 1: The impulse-response energy is ∫₀∞e^(−14t)dt=1/14.\n\nStep 2: Multiply by N₀/2=0.25.\n\nStep 3: Thus σout²=N₀/(4a)=0.5/(4×7)=0.0179.\n\nAnswer: 0.0179.\n\nCheck and interpretation: The two-sided PSD convention is specified to avoid a factor-of-two ambiguity. Replacing impulse-response energy by DC gain squared is not valid for white input noise.",
    "family": "filtered-awgn-variance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-comm-binary-map-threshold-6",
    "topic": "comm",
    "prompt": "A receiver observes r=s+n, where s=+4 with prior 0.39 or −4 otherwise. Noise is zero-mean Gaussian with variance 1.1. With equal error costs, decide +4 if r exceeds what MAP threshold?",
    "choices": [
      "0",
      "-0.0615",
      "0.0615",
      "0.123"
    ],
    "key": 2,
    "why": "Principle: The MAP detector compares posterior probabilities. Equal-variance Gaussian likelihoods lead to a linear observation threshold adjusted by the prior odds.\n\nStep 1: Log likelihood ratio is ln[p(r|+A)/p(r|−A)]=2Ar/σ².\n\nStep 2: MAP selects +A when this exceeds ln[P(−A)/P(+A)]=ln(0.61/0.39).\n\nStep 3: Thus threshold γ=σ²/(2A) ln[(1−p)/p]=0.0615.\n\nAnswer: 0.0615.\n\nCheck and interpretation: The positive symbol is less probable here, so the threshold is positive and favors the negative symbol unless the observation provides sufficient evidence.",
    "family": "binary-map-threshold",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-dielectric-boundary-reflection-6",
    "topic": "em",
    "prompt": "A plane wave in free space is normally incident on a lossless nonmagnetic dielectric with ε_r=8. What percentage of incident power is reflected?",
    "choices": [
      "22.8094 %",
      "47.7592 %",
      "77.1906 %",
      "11.4047 %"
    ],
    "key": 0,
    "why": "Principle: At normal incidence, electric-field reflection is Γ=(η₂−η₁)/(η₂+η₁). Reflected power in the incident medium is |Γ|² times incident power.\n\nStep 1: For μr=1, η₂=η₀/√8 and η₁=η₀.\n\nStep 2: Cancel η₀ to obtain Γ=(1−√8)/(1+√8).\n\nStep 3: The reflected percentage is 100Γ²=22.8094%.\n\nAnswer: 22.8094 %.\n\nCheck and interpretation: The electric reflection coefficient is negative because the second medium has lower impedance. Power reflection is nevertheless nonnegative after squaring.",
    "family": "dielectric-boundary-reflection",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-shorted-line-reactance-6",
    "topic": "em",
    "prompt": "A lossless 70 Ω line is short-circuited at its load and has electrical length 40 degrees. Find input reactance X in Ω, where Z_in=jX.",
    "choices": [
      "58.737 Ω",
      "-58.737 Ω",
      "83.4228 Ω",
      "44.9951 Ω"
    ],
    "key": 0,
    "why": "Principle: The input impedance of a short-circuited lossless line is Zin=jZ₀tan(βl). Electrical length supplies βl directly.\n\nStep 1: Use βl=40 degrees=40π/180 radians.\n\nStep 2: Evaluate tan(βl)=0.8391.\n\nStep 3: Multiply by Z₀: X=70×0.8391=58.737 Ω.\n\nAnswer: 58.737 Ω.\n\nCheck and interpretation: For an electrical length between zero and 90 degrees, the shorted stub appears inductive, so X is positive. An open-circuit stub uses a negative cotangent relation.",
    "family": "shorted-line-reactance",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-quarter-wave-matching-6",
    "topic": "em",
    "prompt": "A real 55 Ω source resistance is to be matched to a real 160 Ω load using a lossless quarter-wave transformer. What characteristic impedance is required, in Ω?",
    "choices": [
      "107.5 Ω",
      "8800 Ω",
      "105 Ω",
      "93.8083 Ω"
    ],
    "key": 3,
    "why": "Principle: A quarter-wave transformer presents Zin=Zt²/RL. A match requires this input resistance to equal the source resistance.\n\nStep 1: Set Rs=Zt²/RL.\n\nStep 2: Rearrange to Zt²=RsRL=55×160=8800.\n\nStep 3: Take the positive root: Zt=√8800=93.8083 Ω.\n\nAnswer: 93.8083 Ω.\n\nCheck and interpretation: The transformer impedance is the geometric mean of the two real resistances. The match holds at the design electrical length rather than over all frequencies.",
    "family": "quarter-wave-matching",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-displacement-current-6",
    "topic": "em",
    "prompt": "An ideal parallel-plate capacitor has C=8 nF and applied voltage v(t)=16cos(2200t) V. What is peak displacement current in mA? Ignore fringing and leakage.",
    "choices": [
      "0.1408 mA",
      "0.5632 mA",
      "0.2816 mA",
      "0.0001 mA"
    ],
    "key": 2,
    "why": "Principle: The displacement current through an ideal capacitor equals its terminal current i=C dv/dt. For a sinusoid its peak magnitude is CωVpeak.\n\nStep 1: Differentiate v(t): dv/dt=−35200sin(2200t) V/s.\n\nStep 2: Multiply peak slope by C=8×10⁻⁹ F.\n\nStep 3: Convert A to mA to obtain Ipeak=0.2816 mA.\n\nAnswer: 0.2816 mA.\n\nCheck and interpretation: The given angular frequency needs no additional 2π. Average current is zero over a cycle, while peak displacement current is nonzero.",
    "family": "displacement-current",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-antenna-aperture-6",
    "topic": "em",
    "prompt": "An antenna has linear gain 8 at wavelength 0.22 m. For perfect polarization matching, find maximum effective aperture in cm² using A_e=Gλ²/(4π).",
    "choices": [
      "0.0308 cm²",
      "3872 cm²",
      "308.124 cm²",
      "154.062 cm²"
    ],
    "key": 2,
    "why": "Principle: Antenna gain and maximum receiving effective area are related by Ae=Gλ²/(4π). The gain must be a linear value.\n\nStep 1: Compute Gλ²=8×(0.22)²=0.3872 m².\n\nStep 2: Divide by 4π to get aperture in square metres.\n\nStep 3: Since 1 m²=10000 cm², the result is 308.124 cm².\n\nAnswer: 308.124 cm².\n\nCheck and interpretation: Effective aperture is a receiving-area measure and need not equal the antenna’s physical geometric area. The square-unit conversion requires 10000 rather than 100.",
    "family": "antenna-aperture",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-em-conductor-field-decay-6",
    "topic": "em",
    "prompt": "Inside a good conductor, field magnitude follows |E(z)|=|E(0)|e^(−z/δ) with skin depth δ=22 µm. At what depth in µm does field magnitude fall to 0.22 of its surface value?",
    "choices": [
      "100 µm",
      "16.6554 µm",
      "66.6216 µm",
      "33.3108 µm"
    ],
    "key": 3,
    "why": "Principle: Skin depth governs exponential field-amplitude attenuation. Solve the stated ratio by taking a natural logarithm.\n\nStep 1: Set e^(−z/22)=0.22.\n\nStep 2: Taking ln gives −z/22=ln(0.22).\n\nStep 3: Hence z=−22ln(0.22)=33.3108 µm.\n\nAnswer: 33.3108 µm.\n\nCheck and interpretation: This uses a field-amplitude ratio. Power falls with the square of field, so reaching the same numerical power fraction would require half this depth.",
    "family": "conductor-field-decay",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-repeated-mixture-6",
    "topic": "apt",
    "prompt": "A tank contains 32 L of pure concentrate. 8 L is removed and replaced by water, the mixture is stirred, and the same removal/replacement is repeated once. What percentage of the final mixture is concentrate?",
    "choices": [
      "50 %",
      "75 %",
      "56.25 %",
      "43.75 %"
    ],
    "key": 2,
    "why": "Principle: Every replacement retains the same fraction of whatever concentrate was present before that operation. Stirring makes the removed mixture representative of the tank.\n\nStep 1: One operation retains fraction 1−8/32 of the concentrate.\n\nStep 2: Two operations retain fraction (1−8/32)².\n\nStep 3: The tank returns to its original total volume each time, so final concentrate percentage is 56.25%.\n\nAnswer: 56.25 %.\n\nCheck and interpretation: The second removal contains some water, so it removes less concentrate than the first. Subtracting twice the first removed concentration overstates the loss.",
    "family": "repeated-mixture",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-adjacent-arrangement-6",
    "topic": "apt",
    "prompt": "10 distinct people stand in a uniformly random row. What is the probability that two specified people are adjacent?",
    "choices": [
      "0.1",
      "0.2222",
      "0.2",
      "0.9"
    ],
    "key": 2,
    "why": "Principle: For adjacency counting, treat the two specified people as a block, then allow both orders inside the block. Divide favorable permutations by all permutations.\n\nStep 1: All arrangements number 10!.\n\nStep 2: Combine the specified pair into one block, leaving 9 objects with (9)! orders. The pair has two internal orders.\n\nStep 3: Thus probability=2(9)!/10!=2/10=0.2.\n\nAnswer: 0.2.\n\nCheck and interpretation: The pair can occupy any neighboring positions, not just an endpoint pair. The two internal orders must both be counted.",
    "family": "adjacent-arrangement",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-boat-round-trip-6",
    "topic": "apt",
    "prompt": "A boat moves at 16 km/h in still water and the current is 5 km/h. It travels 32 km downstream and returns the same distance upstream. What is total travel time in hours?",
    "choices": [
      "4 hours",
      "4.4329 hours",
      "3.0476 hours",
      "5.8182 hours"
    ],
    "key": 1,
    "why": "Principle: Current adds to speed downstream and subtracts upstream. Compute each travel time separately before adding.\n\nStep 1: Downstream speed is 16+5=21 km/h.\n\nStep 2: Upstream speed is 16−5=11 km/h, positive for these data.\n\nStep 3: Total time is 32/21+32/11=4.4329 hours.\n\nAnswer: 4.4329 hours.\n\nCheck and interpretation: The current slows the overall equal-distance round trip relative to travel in still water. The faster leg does not cancel the extra time spent on the slower leg.",
    "family": "boat-round-trip",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-opposite-trains-6",
    "topic": "apt",
    "prompt": "Trains of lengths 160 m and 210 m travel toward each other at 57.6 km/h and 75.6 km/h. How many seconds pass from their fronts meeting until they completely cross?",
    "choices": [
      "74 s",
      "10 s",
      "4.3243 s",
      "2.7778 s"
    ],
    "key": 1,
    "why": "Principle: For opposite directions, relative speed is the sum of speeds. Complete crossing requires relative motion through the sum of both lengths.\n\nStep 1: Combined length is 160+210=370 m.\n\nStep 2: Relative speed is (57.6+75.6)/3.6=37 m/s.\n\nStep 3: Crossing time is 370/37=10 s.\n\nAnswer: 10 s.\n\nCheck and interpretation: Subtracting speeds would apply to overtaking in the same direction. Counting just one train’s length would stop before both trains fully clear each other.",
    "family": "opposite-trains",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-weighted-group-average-6",
    "topic": "apt",
    "prompt": "A class of 32 students has mean score 66; another of 36 has mean score 76. What is the mean score when the classes are combined?",
    "choices": [
      "71.2941",
      "71",
      "70.7059",
      "142"
    ],
    "key": 0,
    "why": "Principle: A combined mean is weighted by group size. Recover each group’s total score before pooling.\n\nStep 1: First total score is 32×66=2112.\n\nStep 2: Second total score is 36×76=2736.\n\nStep 3: Divide the total 4848 by 68 students to obtain 71.2941.\n\nAnswer: 71.2941.\n\nCheck and interpretation: The result lies between the two class means and is closer to the mean of the larger class. A simple average of class means requires equal class sizes.",
    "family": "weighted-group-average",
    "level": "GATE-style",
    "format": "Original MCQ"
  },
  {
    "id": "gate-apt-logarithm-equation-6",
    "topic": "apt",
    "prompt": "For real x>7, solve log₂(x−7)+log₂(x+7)=log₂(176).",
    "choices": [
      "15",
      "7",
      "22",
      "13.2665"
    ],
    "key": 0,
    "why": "Principle: For positive arguments, the sum of logarithms equals the logarithm of the product. The domain restriction must be checked after solving the resulting quadratic.\n\nStep 1: Combine the left side as log₂[(x−7)(x+7)].\n\nStep 2: Equate arguments: x²−49=176, giving x²=225.\n\nStep 3: The algebraic roots are ±15, but only +15 satisfies x>7.\n\nAnswer: 15.\n\nCheck and interpretation: The negative root is extraneous to the logarithm domain even though it satisfies the squared equation. Ignoring domain conditions can produce an invalid second answer.",
    "family": "logarithm-equation",
    "level": "GATE-style",
    "format": "Original MCQ"
  }
];
