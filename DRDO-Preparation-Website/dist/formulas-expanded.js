export const expandedFormulaBank = {
  "math": [
    {
      "id": "full-inverse",
      "category": "Linear algebra",
      "title": "Inverse, adjugate and determinant",
      "equation": "A^{−1}=frac{adj(A)}{det(A)};det(AB)=det(A)det(B)",
      "symbols": "A,B: square matrices of the same order; adj: adjugate.",
      "when": "The inverse exists only if det(A)≠0.",
      "example": "A diagonal matrix diag(2,4) has inverse diag(1/2,1/4)."
    },
    {
      "id": "full-rank",
      "category": "Linear algebra",
      "title": "Rank, nullity and linear equations",
      "equation": "rank(A)+nullity(A)=n;rank(A)=rank([A|b])",
      "symbols": "A: m×n coefficient matrix; [A|b]: augmented matrix.",
      "when": "Equality of the two ranks gives consistency; a consistent system is unique when rank(A)=n.",
      "example": "For 3 unknowns and rank 2, a consistent system has one free parameter."
    },
    {
      "id": "full-trace",
      "category": "Linear algebra",
      "title": "Eigenvalue sums and products",
      "equation": "tr(A)=Σ_i λ_i;det(A)=Π_i λ_i",
      "symbols": "λi: eigenvalues with algebraic multiplicity.",
      "when": "Works over the complex field even if A is not diagonalizable.",
      "example": "Eigenvalues 2,3,5 give trace 10 and determinant 30."
    },
    {
      "id": "full-diagonalization",
      "category": "Linear algebra",
      "title": "Diagonalization and matrix powers",
      "equation": "A=PΛP^{−1};A^k=PΛ^kP^{−1};e^{At}=Pe^{Λt}P^{−1}",
      "symbols": "Columns of P: independent eigenvectors; Λ: diagonal eigenvalue matrix.",
      "when": "Requires a full eigenvector basis. Repeated eigenvalues alone do not guarantee diagonalizability.",
      "example": "A diagonal entry −2 produces the exponential e^(−2t)."
    },
    {
      "id": "full-orthogonality",
      "category": "Linear algebra",
      "title": "Projection and least squares",
      "equation": "proj_u(v)=frac{u^Tv}{u^Tu}u;A^TAx=A^Tb",
      "symbols": "u,v: real vectors; A: real design matrix.",
      "when": "Projection needs u≠0. The normal equations give least squares; uniqueness needs full column rank.",
      "example": "Project (2,0) onto (1,1) to obtain (1,1)."
    },
    {
      "id": "full-derivatives",
      "category": "Calculus and series",
      "title": "Standard derivatives",
      "equation": "frac{d}{dx}e^{ax}=ae^{ax};frac{d}{dx}ln x=frac{1}{x};frac{d}{dx}sin x=cos x;frac{d}{dx}cos x=−sin x",
      "symbols": "a: constant; angles: radians.",
      "when": "For real ln x use x>0; derivative of ln|x| is 1/x for x≠0.",
      "example": "d(e^(3x))/dx=3e^(3x)."
    },
    {
      "id": "full-rules",
      "category": "Calculus and series",
      "title": "Product, quotient and chain rules",
      "equation": "(uv)′=u′v+uv′;(frac{u}{v})′=frac{u′v−uv′}{v^2};frac{d}{dx}f(g(x))=f′(g(x))g′(x)",
      "symbols": "Primes denote derivatives with respect to x.",
      "when": "The quotient rule requires v≠0.",
      "example": "For x e^x, the derivative is e^x(1+x)."
    },
    {
      "id": "full-integrals",
      "category": "Calculus and series",
      "title": "Standard integrals",
      "equation": "∫x^n dx=frac{x^{n+1}}{n+1}+C;∫frac{1}{x}dx=ln|x|+C;∫e^{ax}dx=frac{e^{ax}}{a}+C",
      "symbols": "C: integration constant.",
      "when": "Power rule needs n≠−1; exponential expression needs a≠0.",
      "example": "∫₀² x² dx=8/3."
    },
    {
      "id": "full-parts",
      "category": "Calculus and series",
      "title": "Integration by parts and substitution",
      "equation": "∫u dv=uv−∫v du;∫f(g(x))g′(x)dx=∫f(u)du",
      "symbols": "u=g(x) in the substitution formula.",
      "when": "Change definite-integral limits consistently under substitution.",
      "example": "∫x e^x dx=e^x(x−1)+C."
    },
    {
      "id": "full-mvt",
      "category": "Calculus and series",
      "title": "Mean value theorems",
      "equation": "f′(c)=frac{f(b)−f(a)}{b−a};∫_a^b f(x)dx=f(c)(b−a)",
      "symbols": "c lies between a and b.",
      "when": "Derivative version: continuous on [a,b], differentiable inside. Integral version: continuous f.",
      "example": "For f=x² on [0,2], the derivative MVT gives c=1."
    },
    {
      "id": "full-extrema",
      "category": "Calculus and series",
      "title": "Stationary points and Hessian test",
      "equation": "f_x=f_y=0;D=f_{xx}f_{yy}−f_{xy}^2",
      "symbols": "D: determinant of the 2D Hessian.",
      "when": "At a stationary point: D>0 and fxx>0 gives a minimum; D>0 and fxx<0 a maximum; D<0 a saddle; D=0 is inconclusive.",
      "example": "For f=x²+y², D=4 and the origin is a minimum."
    },
    {
      "id": "full-jacobian",
      "category": "Calculus and series",
      "title": "Jacobian and polar area element",
      "equation": "dxdy=|frac{∂(x,y)}{∂(u,v)}|dudv;dxdy=r dr dθ",
      "symbols": "The fraction denotes the Jacobian determinant.",
      "when": "Use the absolute determinant when changing variables in an area integral.",
      "example": "A radius-a disk has area ∫₀²π∫₀ᵃ r dr dθ=πa²."
    },
    {
      "id": "full-series",
      "category": "Calculus and series",
      "title": "Exponential, sine and cosine series",
      "equation": "e^x=Σ_{n=0}^{∞}frac{x^n}{n!};sin x=x−frac{x^3}{3!}+⋯;cos x=1−frac{x^2}{2!}+⋯",
      "symbols": "x in radians for trigonometric series.",
      "when": "These series converge for every finite real or complex x.",
      "example": "For small x, cos x≈1−x²/2."
    },
    {
      "id": "full-geometric",
      "category": "Calculus and series",
      "title": "Geometric, arithmetic and power sums",
      "equation": "Σ_{k=0}^{∞}r^k=frac{1}{1−r};Σ_{k=1}^n k=frac{n(n+1)}{2};Σ_{k=1}^n k^2=frac{n(n+1)(2n+1)}{6}",
      "symbols": "n: positive integer; r: common ratio.",
      "when": "The infinite geometric sum requires |r|<1.",
      "example": "Σk/2^k for k≥1 is 2, by differentiating the geometric series."
    },
    {
      "id": "full-convergence",
      "category": "Calculus and series",
      "title": "Ratio and root tests",
      "equation": "L=lim_{n→∞}|frac{a_{n+1}}{a_n}|;R=limsup_{n→∞}|a_n|^{1/n}",
      "symbols": "an: terms of a series.",
      "when": "Absolute convergence if the applicable limit is below 1; divergence if above 1; equality is inconclusive.",
      "example": "For an=1/n!, the ratio tends to 0, so the series converges."
    },
    {
      "id": "full-linearode",
      "category": "Differential equations",
      "title": "First-order linear differential equation",
      "equation": "y′+P(x)y=Q(x);μ(x)=e^{∫P(x)dx};y=frac{∫μ(x)Q(x)dx+C}{μ(x)}",
      "symbols": "μ: integrating factor.",
      "when": "Use on an interval where the coefficients and integrals are defined.",
      "example": "For y′+2y=4, y=2+Ce^(−2x)."
    },
    {
      "id": "full-secondode",
      "category": "Differential equations",
      "title": "Constant-coefficient second-order ODE",
      "equation": "ay″+by′+cy=0;ar^2+br+c=0",
      "symbols": "r1,r2: characteristic roots.",
      "when": "Distinct roots give C1e^(r1x)+C2e^(r2x); repeated r gives (C1+C2x)e^(rx).",
      "example": "For y″+2y′+y=0, y=(C1+C2x)e^(−x)."
    },
    {
      "id": "full-eulerode",
      "category": "Differential equations",
      "title": "Euler–Cauchy equation",
      "equation": "x^2y″+axy′+by=0;m(m−1)+am+b=0",
      "symbols": "Trial solution y=x^m.",
      "when": "Use x>0 for real powers and logarithms; handle x<0 separately with |x| where appropriate.",
      "example": "x²y″−2xy′+2y=0 has y=C1x+C2x²."
    },
    {
      "id": "full-variation",
      "category": "Differential equations",
      "title": "Variation of parameters",
      "equation": "W=y_1y_2′−y_1′y_2;y_p=−y_1∫frac{y_2r}{W}dx+y_2∫frac{y_1r}{W}dx",
      "symbols": "y1,y2: independent homogeneous solutions of y″+py′+qy=r.",
      "when": "Normalize the coefficient of y″ to 1 and work where W≠0.",
      "example": "For y″+y=r(x), use y1=cos x and y2=sin x, giving W=1."
    },
    {
      "id": "full-pde",
      "category": "Differential equations",
      "title": "Separation for heat and wave equations",
      "equation": "u_t=αu_{xx};u(x,t)=X(x)T(t);frac{T′}{αT}=frac{X″}{X}=−λ",
      "symbols": "α: diffusivity; λ: separation constant.",
      "when": "Choose eigenvalues and sine/cosine modes from the specified boundary conditions.",
      "example": "For zero ends on length L, Xn=sin(nπx/L) and Tn=e^(−αn²π²t/L²)."
    },
    {
      "id": "full-operators",
      "category": "Vector and complex analysis",
      "title": "Gradient, divergence and curl",
      "equation": "∇f=f_x x̂+f_y ŷ+f_z ẑ;∇·A=∂_xA_x+∂_yA_y+∂_zA_z;∇×A=(∂_yA_z−∂_zA_y)x̂+(∂_zA_x−∂_xA_z)ŷ+(∂_xA_y−∂_yA_x)ẑ",
      "symbols": "Cartesian components and partial derivatives.",
      "when": "Other coordinate systems require their scale factors.",
      "example": "For A=(x,y,z), divergence is 3 and curl is zero."
    },
    {
      "id": "full-theorems",
      "category": "Vector and complex analysis",
      "title": "Gauss, Stokes and Green theorems",
      "equation": "∯_S A·n̂ dS=∭_V ∇·A dV;∮_C A·dl=∬_S(∇×A)·n̂ dS;∮_C(Pdx+Qdy)=∬(Q_x−P_y)dxdy",
      "symbols": "S: oriented surface; C: its positively oriented boundary.",
      "when": "Gauss uses a closed surface and outward normal. Stokes uses a spanning surface with right-hand orientation.",
      "example": "A constant curl of 2 through a unit-area surface gives circulation 2."
    },
    {
      "id": "full-cauchy",
      "category": "Vector and complex analysis",
      "title": "Cauchy integral formula and residues",
      "equation": "∮_C frac{f(z)}{z−a}dz=2πj f(a);∮_C F(z)dz=2πjΣ Res(F,a_k)",
      "symbols": "C: positively oriented closed contour; ak: enclosed poles.",
      "when": "Cauchy formula requires analytic f inside/on C. Residue theorem excludes singularities on the contour.",
      "example": "∮ dz/(z−a)=2πj if a is enclosed once counterclockwise."
    },
    {
      "id": "full-residue",
      "category": "Vector and complex analysis",
      "title": "Residue at simple and higher-order poles",
      "equation": "Res(F,a)=lim_{z→a}(z−a)F(z);Res(F,a)=frac{1}{(m−1)!}lim_{z→a}frac{d^{m−1}}{dz^{m−1}}[(z−a)^mF(z)]",
      "symbols": "m: pole order.",
      "when": "For a simple pole F=g/h with h′(a)≠0, residue is g(a)/h′(a).",
      "example": "For F=1/[(z−1)(z−2)], residue at 1 is −1."
    },
    {
      "id": "full-conditional",
      "category": "Probability and statistics",
      "title": "Conditional probability and independence",
      "equation": "P(A|B)=frac{P(A∩B)}{P(B)};P(A∪B)=P(A)+P(B)−P(A∩B)",
      "symbols": "P(B)>0.",
      "when": "Independence means P(A∩B)=P(A)P(B); disjoint nonzero-probability events are not independent.",
      "example": "Independent events with probabilities 0.2 and 0.3 have joint probability 0.06."
    },
    {
      "id": "full-poisson",
      "category": "Probability and statistics",
      "title": "Poisson and exponential distributions",
      "equation": "P(N=k)=e^{−λ}frac{λ^k}{k!};f_T(t)=re^{−rt};E[T]=frac{1}{r}",
      "symbols": "λ: mean count; r: arrival rate; t≥0.",
      "when": "For a homogeneous Poisson process over duration t0, λ=rt0 and interarrival times are exponential.",
      "example": "At rate 2/s, mean waiting time is 0.5 s."
    },
    {
      "id": "full-gaussian",
      "category": "Probability and statistics",
      "title": "Normal distribution and Q function",
      "equation": "f_X(x)=frac{1}{σsqrt{2π}}e^{−(x−μ)^2/(2σ^2)};Q(a)=frac{1}{sqrt{2π}}∫_a^{∞}e^{−u^2/2}du",
      "symbols": "μ: mean; σ>0: standard deviation.",
      "when": "For Gaussian X, P(X>x)=Q((x−μ)/σ).",
      "example": "P(X>μ)=Q(0)=1/2."
    },
    {
      "id": "full-joint",
      "category": "Probability and statistics",
      "title": "Covariance, correlation and sums",
      "equation": "Cov(X,Y)=E[XY]−E[X]E[Y];ρ=frac{Cov(X,Y)}{σ_Xσ_Y};Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y)",
      "symbols": "σX,σY: nonzero standard deviations for ρ.",
      "when": "Independence implies zero covariance when moments exist; the converse is not general.",
      "example": "Independent variances 4 and 9 add to variance 13."
    },
    {
      "id": "full-regression",
      "category": "Probability and statistics",
      "title": "Linear regression coefficients",
      "equation": "b=frac{Cov(X,Y)}{Var(X)};a=E[Y]−bE[X];Ŷ=a+bX",
      "symbols": "Ŷ: minimum mean-square affine predictor of Y from X.",
      "when": "Needs finite second moments and Var(X)>0.",
      "example": "Cov=6 and Var(X)=3 give slope b=2."
    },
    {
      "id": "full-distributions",
      "category": "Probability and statistics",
      "title": "Uniform and geometric distributions",
      "equation": "E[U]=frac{a+b}{2};Var(U)=frac{(b−a)^2}{12};P(L=l)=p(1−p)^{l−1};E[L]=frac{1}{p}",
      "symbols": "U uniform on [a,b]; L: trial count until first success, l≥1.",
      "when": "Geometric formula needs independent identical Bernoulli trials; waiting failures instead of trials shifts the support.",
      "example": "A fair coin’s first-head trial count has mean 2."
    },
    {
      "id": "full-multitaylor",
      "category": "Calculus and series",
      "title": "Multivariable second-order Taylor expansion",
      "equation": "f(a+h)≈f(a)+∇f(a)^Th+frac{1}{2}h^TH_f(a)h",
      "symbols": "h: column displacement vector; Hf: Hessian matrix.",
      "when": "Twice differentiable near a with a controlled higher-order remainder.",
      "example": "For f=x²+y², this expansion is exact."
    },
    {
      "id": "full-lhopital",
      "category": "Calculus and series",
      "title": "L’Hôpital’s rule",
      "equation": "lim frac{f(x)}{g(x)}=lim frac{f′(x)}{g′(x)}",
      "symbols": "Limits are taken at the same point or infinity.",
      "when": "Only for suitable 0/0 or ∞/∞ indeterminate forms, with differentiability and a valid derivative-ratio limit; not for arbitrary quotients.",
      "example": "lim sin x/x as x→0 equals lim cos x/1=1."
    },
    {
      "id": "full-wavepde",
      "category": "Differential equations",
      "title": "Separated wave-equation modes",
      "equation": "u_{tt}=c^2u_{xx};X″+λX=0;T″+c^2λT=0",
      "symbols": "u=X(x)T(t); c: wave speed.",
      "when": "Boundary conditions determine λ and eigenfunctions; initial displacement and velocity determine mode amplitudes.",
      "example": "Fixed ends at 0,L give mode frequencies ωn=cnπ/L."
    },
    {
      "id": "full-laurent",
      "category": "Vector and complex analysis",
      "title": "Taylor and Laurent coefficients",
      "equation": "f(z)=Σ_{n=−∞}^{∞}a_n(z−a)^n;a_n=frac{1}{2πj}∮frac{f(ζ)}{(ζ−a)^{n+1}}dζ",
      "symbols": "Contour lies within the annulus of analyticity around a.",
      "when": "For a Taylor series the negative-power coefficients vanish; the residue is the Laurent coefficient a−1.",
      "example": "e^z/z has residue 1 at z=0."
    }
  ],
  "networks": [
    {
      "id": "full-ohm",
      "category": "Circuit laws and equivalents",
      "title": "Ohm’s law and voltage/current division",
      "equation": "V=IR;V_k=Vfrac{R_k}{ΣR_i};I_k=Ifrac{1/R_k}{Σ_i1/R_i}",
      "symbols": "R: resistance; conductances sum in parallel.",
      "when": "Voltage division uses series elements; current division uses parallel branches. For AC use impedances/admittances.",
      "example": "Two equal parallel resistors each carry half the total current."
    },
    {
      "id": "full-seriesparallel",
      "category": "Circuit laws and equivalents",
      "title": "Series and parallel equivalents",
      "equation": "Z_{series}=ΣZ_i;Y_{parallel}=ΣY_i;Z_{parallel}=frac{1}{Σ_i1/Z_i}",
      "symbols": "Y=1/Z: admittance.",
      "when": "Use common frequency phasors for impedances; preserve signs of reactances.",
      "example": "10 Ω in parallel with 10 Ω gives 5 Ω."
    },
    {
      "id": "full-thevenin",
      "category": "Circuit laws and equivalents",
      "title": "Thévenin and Norton equivalents",
      "equation": "V_{th}=V_{oc};I_N=I_{sc};R_{th}=frac{V_{test}}{I_{test}};V_{th}=I_NR_{th}",
      "symbols": "oc: open circuit; sc: short circuit.",
      "when": "When measuring equivalent resistance, zero independent sources and retain dependent sources.",
      "example": "A 10 V Thévenin source with 5 Ω corresponds to a 2 A Norton source."
    },
    {
      "id": "full-superposition",
      "category": "Circuit laws and equivalents",
      "title": "Linear superposition",
      "equation": "v=Σ_i v_i;i=Σ_i i_i",
      "symbols": "vi or ii: contribution from one independent source.",
      "when": "Zero other independent voltage sources by shorts and current sources by opens. Power does not superpose.",
      "example": "If two source contributions are 3 V and −1 V, total voltage is 2 V."
    },
    {
      "id": "full-wye",
      "category": "Circuit laws and equivalents",
      "title": "Delta-to-star conversion",
      "equation": "R_A=frac{R_{AB}R_{CA}}{S};R_B=frac{R_{AB}R_{BC}}{S};R_C=frac{R_{BC}R_{CA}}{S};S=R_{AB}+R_{BC}+R_{CA}",
      "symbols": "A,B,C: terminal labels.",
      "when": "A star arm uses the product of delta arms meeting at that terminal. Works for nonsingular complex impedances too.",
      "example": "A delta of three 9 Ω resistors becomes a star of three 3 Ω arms."
    },
    {
      "id": "full-delta",
      "category": "Circuit laws and equivalents",
      "title": "Star-to-delta conversion",
      "equation": "R_{AB}=R_A+R_B+frac{R_AR_B}{R_C}",
      "symbols": "RA,RB,RC: star arms to the common node.",
      "when": "Obtain other arms by cyclically permuting A,B,C; avoid zero denominator.",
      "example": "Three equal star arms R become three delta arms 3R."
    },
    {
      "id": "full-complexpower",
      "category": "Sinusoidal steady state",
      "title": "Complex, reactive and apparent power",
      "equation": "S=VI^*=P+jQ;P=|V||I|cosφ;Q=|V||I|sinφ;|S|=sqrt{P^2+Q^2}",
      "symbols": "V,I: RMS phasors using passive sign convention; φ=angle V−angle I.",
      "when": "Positive Q denotes inductive absorption; leading-current loads have negative Q.",
      "example": "P=3 kW and Q=4 kvar give |S|=5 kVA."
    },
    {
      "id": "full-rms",
      "category": "Sinusoidal steady state",
      "title": "RMS and average values",
      "equation": "x_{rms}=sqrt{frac{1}{T}∫_0^T x^2(t)dt};x_{avg}=frac{1}{T}∫_0^T x(t)dt",
      "symbols": "T: period of real waveform x(t).",
      "when": "For a sine, RMS=peak/√2. Do not equate average value with RMS.",
      "example": "A 10 V peak sinusoid has RMS 7.071 V and zero full-cycle average."
    },
    {
      "id": "full-powerfactor",
      "category": "Sinusoidal steady state",
      "title": "Power factor correction",
      "equation": "PF=frac{P}{|S|};Q_C=P(tanφ_1−tanφ_2);C=frac{Q_C}{ωV_{rms}^2}",
      "symbols": "QC: required magnitude of shunt capacitive reactive power.",
      "when": "Single-phase sinusoidal source, fixed RMS voltage, inductive load corrected toward smaller lag angle.",
      "example": "A 1 kW load at PF 0.8 needs 0.75 kvar to reach unity PF."
    },
    {
      "id": "full-resistivematch",
      "category": "Sinusoidal steady state",
      "title": "Maximum power with a real-only load",
      "equation": "R_L=|Z_{th}|=sqrt{R_{th}^2+X_{th}^2};P_{max,conjugate}=frac{|V_{th,rms}|^2}{4R_{th}}",
      "symbols": "The power expression is for a freely adjustable complex load, not the real-only optimum.",
      "when": "Use RL=|Zth| when the load must be purely resistive and Rth>0.",
      "example": "For Zth=4+j3 Ω, the optimum real load is 5 Ω."
    },
    {
      "id": "full-elementlaws",
      "category": "Transients and resonance",
      "title": "Capacitor and inductor laws",
      "equation": "i_C=Cfrac{dv_C}{dt};v_L=Lfrac{di_L}{dt};v_C(0^+)=v_C(0^-);i_L(0^+)=i_L(0^-)",
      "symbols": "Passive sign convention.",
      "when": "Continuity applies without impulsive current through C or impulsive voltage across L.",
      "example": "A 1 μF capacitor with dv/dt=2 V/ms carries 2 mA."
    },
    {
      "id": "full-rlc",
      "category": "Transients and resonance",
      "title": "Series RLC natural roots",
      "equation": "α=frac{R}{2L};ω_0=frac{1}{sqrt{LC}};s_{1,2}=−α±sqrt{α^2−ω_0^2}",
      "symbols": "α: damping factor; ω0: undamped natural frequency.",
      "when": "Overdamped if α>ω0, critical if equal, underdamped if α<ω0.",
      "example": "For R=40 Ω,L=4 H,C=10 mF, α=ω0=5 rad/s."
    },
    {
      "id": "full-parallelrlc",
      "category": "Transients and resonance",
      "title": "Parallel RLC damping",
      "equation": "α=frac{1}{2RC};ω_0=frac{1}{sqrt{LC}};ζ=frac{α}{ω_0}",
      "symbols": "R,L,C: directly parallel ideal elements.",
      "when": "Use the parallel formula for voltage natural response; the series formula has R in the numerator instead.",
      "example": "L=C=1 and R=1/2 give α=ω0=1, critical damping."
    },
    {
      "id": "full-bandwidth",
      "category": "Transients and resonance",
      "title": "Series resonance bandwidth and Q",
      "equation": "Q=frac{1}{ω_0CR}=frac{ω_0}{Δω};Δω=frac{R}{L};ω_1ω_2=ω_0^2",
      "symbols": "ω1,ω2: half-power frequencies of series-current response.",
      "when": "Ideal series RLC with frequency-independent R,L,C.",
      "example": "R=10 Ω,L=10 mH gives Δω=1000 rad/s."
    },
    {
      "id": "full-laplaceelements",
      "category": "Transients and resonance",
      "title": "Storage elements in the unilateral Laplace domain",
      "equation": "I_C(s)=sCV_C(s)−Cv_C(0^-);V_L(s)=sLI_L(s)−Li_L(0^-)",
      "symbols": "Initial voltage/current values use the passive reference directions.",
      "when": "Include the initial-condition source terms; zero-state impedance alone omits stored energy.",
      "example": "A capacitor initially at 2 V contributes the term −2C in its current equation."
    },
    {
      "id": "full-mutual",
      "category": "Coupled circuits",
      "title": "Mutual inductance and coupled voltages",
      "equation": "M=k sqrt{L_1L_2};v_1=L_1frac{di_1}{dt}±Mfrac{di_2}{dt}",
      "symbols": "0≤k≤1: coupling magnitude; signs follow the dot convention.",
      "when": "Mutual term is positive when reference currents enter both dotted terminals.",
      "example": "L1=4 mH,L2=9 mH,k=0.5 give M=3 mH."
    },
    {
      "id": "full-transformer",
      "category": "Coupled circuits",
      "title": "Ideal transformer ratios",
      "equation": "frac{V_1}{V_2}=frac{N_1}{N_2}=a;frac{|I_1|}{|I_2|}=frac{1}{a};Z_{in}=a^2Z_L",
      "symbols": "Voltages referenced dot to undotted terminal; current magnitudes shown.",
      "when": "Ideal lossless transformer. Signed currents entering both dotted terminals have opposite signs in the ampere-turn equation.",
      "example": "A 2:1 turns ratio reflects 10 Ω as 40 Ω."
    },
    {
      "id": "full-zparams",
      "category": "Two-port networks",
      "title": "Z and Y parameter definitions",
      "equation": "V_1=z_{11}I_1+z_{12}I_2;V_2=z_{21}I_1+z_{22}I_2;Y=Z^{−1}",
      "symbols": "Both port currents enter the two-port.",
      "when": "Z parameters use open-circuit tests; Y parameters use short-circuit tests. Matrix inverse requires nonsingular Z.",
      "example": "With I2=0, z11=V1/I1 and z21=V2/I1."
    },
    {
      "id": "full-hparams",
      "category": "Two-port networks",
      "title": "Hybrid parameter definition",
      "equation": "V_1=h_{11}I_1+h_{12}V_2;I_2=h_{21}I_1+h_{22}V_2",
      "symbols": "h11: ohms; h22: siemens; h12,h21: dimensionless.",
      "when": "Port currents enter both ports. Keep the convention consistent with any transistor model.",
      "example": "Setting V2=0 gives h11=V1/I1 and h21=I2/I1."
    },
    {
      "id": "full-transmission",
      "category": "Two-port networks",
      "title": "ABCD cascade and reciprocity",
      "equation": "V_1=AV_2−BI_2;I_1=CV_2−DI_2;M_{cascade}=M_1M_2;AD−BC=1",
      "symbols": "I1,I2 enter ports; transmission uses −I2 on the output side.",
      "when": "The determinant condition is reciprocity. Symmetry additionally gives A=D.",
      "example": "A series impedance has A=D=1,B=Z,C=0."
    },
    {
      "id": "full-convertab",
      "category": "Two-port networks",
      "title": "ABCD from Z parameters",
      "equation": "A=frac{z_{11}}{z_{21}};B=frac{z_{11}z_{22}−z_{12}z_{21}}{z_{21}};C=frac{1}{z_{21}};D=frac{z_{22}}{z_{21}}",
      "symbols": "Both Z-parameter currents enter the ports.",
      "when": "Valid when z21≠0 and the ABCD output-current sign convention matches the definition.",
      "example": "A reciprocal network has z12=z21 and AD−BC=1."
    }
  ],
  "signals": [
    {
      "id": "full-energy",
      "category": "Signals and LTI properties",
      "title": "Signal energy and average power",
      "equation": "E=∫_{−∞}^{∞}|x(t)|^2dt;P=lim_{T→∞}frac{1}{2T}∫_{−T}^T|x(t)|^2dt",
      "symbols": "Discrete-time versions replace integrals with sums and 2T with 2N+1.",
      "when": "A nonzero finite-energy signal has zero average power; a periodic nonzero signal usually has infinite energy.",
      "example": "A unit-amplitude sinusoid has average power 1/2."
    },
    {
      "id": "full-periodicity",
      "category": "Signals and LTI properties",
      "title": "CT and DT sinusoid periodicity",
      "equation": "T_0=frac{2π}{|ω_0|};ω_0N=2πk",
      "symbols": "N: positive integer; k: integer.",
      "when": "The DT sinusoid is periodic only if ω0/(2π) is rational; the zero-frequency constant is a special case.",
      "example": "sin(πn/5) has fundamental period 10 samples."
    },
    {
      "id": "full-impulse",
      "category": "Signals and LTI properties",
      "title": "Impulse sifting and scaling",
      "equation": "∫x(t)δ(t−t_0)dt=x(t_0);δ(at)=frac{1}{|a|}δ(t)",
      "symbols": "a≠0; integration contains t0.",
      "when": "Use distribution identities and ensure x is suitably continuous at the impulse.",
      "example": "δ(2t)=δ(t)/2."
    },
    {
      "id": "full-ctconv",
      "category": "Signals and LTI properties",
      "title": "Continuous and discrete convolution",
      "equation": "y(t)=∫_{−∞}^{∞}x(τ)h(t−τ)dτ;y[n]=Σ_{k=−∞}^{∞}x[k]h[n−k]",
      "symbols": "x: input; h: impulse response.",
      "when": "Zero-state LTI relation. Causal ordinary signals reduce the CT integral to 0≤τ≤t.",
      "example": "[1,1] convolved with [1,1] gives [1,2,1]."
    },
    {
      "id": "full-tests",
      "category": "Signals and LTI properties",
      "title": "Causality and DT BIBO stability",
      "equation": "h(t)=0 for t<0;h[n]=0 for n<0;Σ_{n=−∞}^{∞}|h[n]|<∞",
      "symbols": "CT/DT impulse responses.",
      "when": "A zero-state LTI system is causal exactly when its impulse response is right-sided from time zero; the summability condition gives DT BIBO stability.",
      "example": "h[n]=(1/2)^n u[n] is causal and stable, with absolute sum 2."
    },
    {
      "id": "full-ctfs",
      "category": "Fourier series and transforms",
      "title": "Continuous-time Fourier series",
      "equation": "x(t)=Σ_{k=−∞}^{∞}c_ke^{jkω_0t};c_k=frac{1}{T_0}∫_{T_0}x(t)e^{−jkω_0t}dt",
      "symbols": "ω0=2π/T0; integral spans any one period.",
      "when": "Requires the usual convergence interpretation at discontinuities; there the series converges to the midpoint of one-sided limits under Dirichlet conditions.",
      "example": "cos(ω0t) has c1=c−1=1/2."
    },
    {
      "id": "full-dtfs",
      "category": "Fourier series and transforms",
      "title": "Discrete-time Fourier series",
      "equation": "x[n]=Σ_{k=0}^{N−1}a_ke^{j2πkn/N};a_k=frac{1}{N}Σ_{n=0}^{N−1}x[n]e^{−j2πkn/N}",
      "symbols": "N: period in samples.",
      "when": "Both the sequence and its DTFS coefficients repeat modulo N.",
      "example": "For x[n]=1, a0=1 and the remaining N−1 coefficients are zero."
    },
    {
      "id": "full-ctft",
      "category": "Fourier series and transforms",
      "title": "CT Fourier transform convention",
      "equation": "X(f)=∫_{−∞}^{∞}x(t)e^{−j2πft}dt;x(t)=∫_{−∞}^{∞}X(f)e^{j2πft}df",
      "symbols": "f in Hz.",
      "when": "Angular-frequency convention uses e^(−jωt) and inverse factor 1/(2π); do not mix conventions.",
      "example": "δ(t) transforms to 1."
    },
    {
      "id": "full-ftpairs",
      "category": "Fourier series and transforms",
      "title": "Common Fourier transform pairs",
      "equation": "e^{−at}u(t)↔frac{1}{a+j2πf};rect(frac{t}{T})↔T sinc(fT);e^{−πt^2}↔e^{−πf^2}",
      "symbols": "a>0,T>0; sinc(x)=sin(πx)/(πx); rect is centered with width 1.",
      "when": "Use the Hz convention; isolated boundary values do not change ordinary integrals.",
      "example": "A unit rectangle of width 2 has transform 2sinc(2f)."
    },
    {
      "id": "full-ftproperties",
      "category": "Fourier series and transforms",
      "title": "Fourier scaling, modulation and differentiation",
      "equation": "x(at)↔frac{1}{|a|}X(frac{f}{a});x(t)e^{j2πf_ct}↔X(f−f_c);frac{dx}{dt}↔j2πfX(f)",
      "symbols": "a≠0; fc: modulation frequency.",
      "when": "Distribution forms cover impulses; ordinary derivative transforms require suitable decay.",
      "example": "Doubling time speed x(2t) halves spectral amplitude and doubles bandwidth."
    },
    {
      "id": "full-ftdual",
      "category": "Fourier series and transforms",
      "title": "Fourier convolution, product and duality",
      "equation": "x∗h↔XH;xh↔X∗H;X(t)↔x(−f)",
      "symbols": "CTFT with Hz convention.",
      "when": "Convolution/product identities need the appropriate integrability or generalized-function assumptions.",
      "example": "Multiplying two band-limited signals adds their maximum frequency bounds."
    },
    {
      "id": "full-dtft",
      "category": "Fourier series and transforms",
      "title": "DTFT and inverse",
      "equation": "X(e^{jω})=Σ_{n=−∞}^{∞}x[n]e^{−jωn};x[n]=frac{1}{2π}∫_{−π}^{π}X(e^{jω})e^{jωn}dω",
      "symbols": "ω: radians/sample.",
      "when": "DTFT is periodic in ω with period 2π.",
      "example": "δ[n−2] has DTFT e^(−j2ω)."
    },
    {
      "id": "full-dft",
      "category": "Fourier series and transforms",
      "title": "DFT, inverse and Parseval",
      "equation": "X[k]=Σ_{n=0}^{N−1}x[n]e^{−j2πkn/N};x[n]=frac{1}{N}Σ_{k=0}^{N−1}X[k]e^{j2πkn/N};Σ_n|x[n]|^2=frac{1}{N}Σ_k|X[k]|^2",
      "symbols": "Standard unnormalized forward DFT.",
      "when": "Other normalization conventions change factors.",
      "example": "For a length-N impulse at n=0, all N DFT bins equal 1."
    },
    {
      "id": "full-circular",
      "category": "Fourier series and transforms",
      "title": "Circular convolution and FFT complexity",
      "equation": "y[n]=Σ_{m=0}^{N−1}x[m]h[(n−m) mod N];Y[k]=X[k]H[k]",
      "symbols": "N: common circular-convolution/DFT length.",
      "when": "For linear convolution of lengths L and M, zero-pad to N≥L+M−1. Radix-2 FFT needs Nlog2N/2 complex butterflies.",
      "example": "Lengths 3 and 4 require at least 6 DFT points for linear convolution."
    },
    {
      "id": "full-lapdef",
      "category": "Laplace and Z transforms",
      "title": "Bilateral and unilateral Laplace transforms",
      "equation": "X(s)=∫_{−∞}^{∞}x(t)e^{−st}dt;X_+(s)=∫_{0^-}^{∞}x(t)e^{−st}dt",
      "symbols": "s=σ+jω; ROC: region of convergence.",
      "when": "A rational expression without its ROC does not uniquely identify a bilateral time signal.",
      "example": "1/(s+a), Re(s)>−a represents e^(−at)u(t)."
    },
    {
      "id": "full-laprules",
      "category": "Laplace and Z transforms",
      "title": "Laplace derivative and initial/final values",
      "equation": "ℒ_+(x′)=sX_+(s)−x(0^-);x(0^+)=lim_{s→∞}sX_+(s);x(∞)=lim_{s→0}sX_+(s)",
      "symbols": "Finite ordinary limits assumed.",
      "when": "Final-value theorem requires all poles of sX in the open left half-plane; initial-value theorem excludes an impulse at t=0.",
      "example": "For X=1/[s(s+2)], the final value is 1/2."
    },
    {
      "id": "full-zdef",
      "category": "Laplace and Z transforms",
      "title": "Z transform, basic pair and ROC",
      "equation": "X(z)=Σ_{n=−∞}^{∞}x[n]z^{−n};a^nu[n]↔frac{1}{1−az^{−1}};|z|>|a|",
      "symbols": "a: exponential factor.",
      "when": "The anti-causal sequence −a^n u[−n−1] has the same rational expression with ROC |z|<|a|.",
      "example": "a=1/2 gives a stable causal sequence because the ROC contains the unit circle."
    },
    {
      "id": "full-zproperties",
      "category": "Laplace and Z transforms",
      "title": "Z-transform modulation and differentiation",
      "equation": "a^nx[n]↔X(frac{z}{a});nx[n]↔−zfrac{dX}{dz};x[−n]↔X(z^{−1})",
      "symbols": "a≠0.",
      "when": "Transform the ROC as well; algebraic form alone is incomplete.",
      "example": "Multiplying (1/2)^n u[n] by 2^n moves the pole from 1/2 to 1."
    },
    {
      "id": "full-zvalues",
      "category": "Laplace and Z transforms",
      "title": "DT initial and final values",
      "equation": "x[0]=lim_{z→∞}X(z);lim_{n→∞}x[n]=lim_{z→1}(1−z^{−1})X(z)",
      "symbols": "Initial-value expression assumes a causal sequence.",
      "when": "Final value needs all poles of (1−z⁻¹)X(z) strictly within the unit circle, with any pole at z=1 canceled appropriately.",
      "example": "For x[n]=u[n], the final value is 1."
    },
    {
      "id": "full-reconstruct",
      "category": "Sampling and filters",
      "title": "Ideal band-limited reconstruction",
      "equation": "x(t)=Σ_{n=−∞}^{∞}x(nT_s)sinc(frac{t−nT_s}{T_s})",
      "symbols": "sinc(x)=sin(πx)/(πx); fs=1/Ts.",
      "when": "Ideal low-pass band-limited signal with fs>2B; equality needs endpoint conditions.",
      "example": "At t=mTs, only the mth sinc contributes."
    },
    {
      "id": "full-delay",
      "category": "Sampling and filters",
      "title": "Group delay and phase delay",
      "equation": "τ_g(ω)=−frac{dφ}{dω};τ_p(ω)=−frac{φ(ω)}{ω}",
      "symbols": "φ: unwrapped phase in radians; ω: rad/s.",
      "when": "Phase delay needs a chosen phase branch and ω≠0. Group delay describes a narrowband envelope.",
      "example": "H(jω)=e^(−jωT) has both delays equal to T."
    },
    {
      "id": "full-difference",
      "category": "Sampling and filters",
      "title": "Difference equation and transfer function",
      "equation": "Σ_{k=0}^N a_ky[n−k]=Σ_{k=0}^M b_kx[n−k];H(z)=frac{Σ_k b_kz^{−k}}{Σ_k a_kz^{−k}}",
      "symbols": "ak,bk: constant coefficients.",
      "when": "Zero initial state. A causal rational IIR is BIBO stable when all uncanceled transfer-function poles lie inside the unit circle.",
      "example": "y[n]−0.5y[n−1]=x[n] gives H=1/(1−0.5z⁻¹)."
    },
    {
      "id": "full-fir",
      "category": "Sampling and filters",
      "title": "FIR linear phase and window design",
      "equation": "h[n]=h[N−1−n];τ_g=frac{N−1}{2};h[n]=h_d[n]w[n]",
      "symbols": "N: number of taps; delay in samples.",
      "when": "Real symmetric FIR has linear phase away from response sign changes; antisymmetric FIR also gives a linear-phase class. Windowing trades transition width against sidelobes.",
      "example": "A 21-tap symmetric FIR has group delay 10 samples."
    },
    {
      "id": "full-butterworth",
      "category": "Sampling and filters",
      "title": "Butterworth order and bilinear transform",
      "equation": "|H(jΩ)|^2=frac{1}{1+(Ω/Ω_c)^{2N}};s=frac{2}{T}frac{1−z^{−1}}{1+z^{−1}};Ω=frac{2}{T}tan(frac{ω}{2})",
      "symbols": "N: analog low-pass order; T: sample period; ω: digital rad/sample.",
      "when": "Butterworth expression is normalized to unit DC gain. Prewarp frequency specifications before bilinear conversion.",
      "example": "At Ω=Ωc, power gain is 1/2 for every order N."
    },
    {
      "id": "full-lappairs",
      "category": "Laplace and Z transforms",
      "title": "Common unilateral Laplace pairs",
      "equation": "e^{−at}u(t)↔frac{1}{s+a};sin(ωt)u(t)↔frac{ω}{s^2+ω^2};cos(ωt)u(t)↔frac{s}{s^2+ω^2}",
      "symbols": "ω>0; zero prehistory.",
      "when": "The causal bilateral versions also need their right-half-plane ROCs.",
      "example": "sin(2t)u(t) transforms to 2/(s²+4)."
    },
    {
      "id": "full-symmetry",
      "category": "Fourier series and transforms",
      "title": "Fourier symmetry and periodic power",
      "equation": "X(−f)=X^*(f);P=Σ_{k=−∞}^{∞}|c_k|^2",
      "symbols": "First relation: real-valued x(t); ck: CTFS coefficients.",
      "when": "A real even signal has a real even spectrum; a real odd signal has an imaginary odd spectrum. The power identity uses the CTFS normalization shown.",
      "example": "cosω0t has power (1/2)²+(1/2)²=1/2."
    },
    {
      "id": "full-windows",
      "category": "Sampling and filters",
      "title": "Hann and Hamming FIR windows",
      "equation": "w_{Hann}[n]=0.5−0.5cos(frac{2πn}{N−1});w_{Hamming}[n]=0.54−0.46cos(frac{2πn}{N−1})",
      "symbols": "0≤n≤N−1; N>1.",
      "when": "Symmetric windows for linear-phase FIR design; periodic spectral-analysis variants use denominator N instead.",
      "example": "The symmetric Hann window is zero at both ends."
    },
    {
      "id": "full-butterorder",
      "category": "Sampling and filters",
      "title": "Butterworth low-pass order",
      "equation": "N≥frac{log[(10^{A_s/10}−1)/(10^{A_p/10}−1)]}{2log(Ω_s/Ω_p)}",
      "symbols": "Ap,As: passband/stopband attenuation in dB; Ωs>Ωp>0.",
      "when": "Choose the smallest integer meeting the bound; prewarp digital edges if using a bilinear transform.",
      "example": "Tightening stopband attenuation or narrowing the transition band increases required order."
    }
  ],
  "devices": [
    {
      "id": "full-carriers",
      "category": "Carrier concentrations and transport",
      "title": "Carrier concentrations and Fermi level",
      "equation": "n=N_Ce^{−(E_C−E_F)/(kT)};p=N_Ve^{−(E_F−E_V)/(kT)};n_i=sqrt{N_CN_V}e^{−E_g/(2kT)}",
      "symbols": "NC,NV: effective density of states; energies in units consistent with kT.",
      "when": "Nondegenerate thermal-equilibrium semiconductor. Degenerate doping requires Fermi–Dirac statistics.",
      "example": "If EF moves closer to EC, electron concentration increases exponentially."
    },
    {
      "id": "full-neutrality",
      "category": "Carrier concentrations and transport",
      "title": "Charge neutrality and compensation",
      "equation": "n+N_A^−=p+N_D^+;n−p=N_D−N_A",
      "symbols": "ND,NA: donor/acceptor concentrations.",
      "when": "Second form assumes full ionization; combine with np=ni² only in thermal equilibrium.",
      "example": "ND=10¹⁶ and NA=10¹⁵ cm⁻³ give n≈9×10¹⁵ cm⁻³ when ni is negligible."
    },
    {
      "id": "full-drift",
      "category": "Carrier concentrations and transport",
      "title": "Drift velocity, current and resistivity",
      "equation": "v_n=−μ_nE;v_p=μ_pE;J_{drift}=q(nμ_n+pμ_p)E;ρ=frac{1}{σ}",
      "symbols": "vn: electron particle velocity; J: conventional current density.",
      "when": "Low-field mobility model; high fields can cause velocity saturation.",
      "example": "σ=2 S/m gives resistivity 0.5 Ω·m."
    },
    {
      "id": "full-diffusion",
      "category": "Carrier concentrations and transport",
      "title": "Electron and hole diffusion currents",
      "equation": "J_n=qμ_nnE+qD_n∇n;J_p=qμ_ppE−qD_p∇p",
      "symbols": "q>0; n,p: spatial carrier concentrations.",
      "when": "These are conventional current densities. The opposite diffusion signs come from opposite carrier charges.",
      "example": "With E=0 and dn/dx>0, electron diffusion current points along +x."
    },
    {
      "id": "full-continuity",
      "category": "Carrier concentrations and transport",
      "title": "Continuity and Poisson equations",
      "equation": "frac{∂n}{∂t}=frac{1}{q}∇·J_n+G_n−R_n;frac{∂p}{∂t}=−frac{1}{q}∇·J_p+G_p−R_p;∇^2ψ=−frac{ρ}{ε}",
      "symbols": "G,R: generation and recombination rates; ψ: electrostatic potential.",
      "when": "Use the same sign conventions for conventional current and electrostatic E=−∇ψ.",
      "example": "In a neutral uniform region with no current divergence, excess carriers decay by recombination."
    },
    {
      "id": "full-lifetime",
      "category": "Carrier concentrations and transport",
      "title": "Excess-carrier lifetime and diffusion length",
      "equation": "Δn(t)=Δn(0)e^{−t/τ_n};L_n=sqrt{D_nτ_n};L_p=sqrt{D_pτ_p}",
      "symbols": "τ: minority-carrier lifetime.",
      "when": "Low-level injection and first-order recombination; spatial diffusion length assumes uniform parameters.",
      "example": "D=25 cm²/s and τ=1 μs give L=50 μm."
    },
    {
      "id": "full-builtin",
      "category": "PN junctions and diodes",
      "title": "PN-junction built-in potential",
      "equation": "V_{bi}=V_T ln(frac{N_AN_D}{n_i^2})",
      "symbols": "NA,ND,ni in the same concentration units.",
      "when": "Abrupt nondegenerate junction, thermal equilibrium and full ionization.",
      "example": "At VT=26 mV and NAND/ni²=10¹², Vbi≈0.718 V."
    },
    {
      "id": "full-depletion",
      "category": "PN junctions and diodes",
      "title": "Depletion width and charge balance",
      "equation": "W=sqrt{frac{2ε_s}{q}(frac{1}{N_A}+frac{1}{N_D})(V_{bi}−V_A)};N_Ax_p=N_Dx_n;W=x_p+x_n",
      "symbols": "VA: applied forward voltage; reverse bias makes VA negative.",
      "when": "Abrupt-junction depletion approximation, before significant forward injection or breakdown.",
      "example": "If ND≫NA, most depletion lies on the p side."
    },
    {
      "id": "full-junctioncap",
      "category": "PN junctions and diodes",
      "title": "Junction capacitance and field",
      "equation": "C_j=frac{ε_sA}{W};C_j=frac{C_{j0}}{(1−V_A/V_{bi})^m};|E_{max}|=frac{2(V_{bi}−V_A)}{W}",
      "symbols": "m=1/2 for an abrupt junction, 1/3 for a linearly graded model.",
      "when": "Capacitance is small-signal depletion capacitance; reverse bias increases W and lowers Cj.",
      "example": "Doubling W halves depletion capacitance."
    },
    {
      "id": "full-diffcap",
      "category": "PN junctions and diodes",
      "title": "Diode incremental resistance and diffusion capacitance",
      "equation": "r_d=frac{nV_T}{I_D+I_S};C_d≈τ_Tfrac{I_D}{nV_T}",
      "symbols": "n: ideality factor; τT: effective transit/storage time.",
      "when": "Forward-bias approximation for Cd and ID≫IS; evaluate at the bias point.",
      "example": "At ID=1 mA,n=1,VT=25 mV, rd≈25 Ω."
    },
    {
      "id": "full-minority",
      "category": "PN junctions and diodes",
      "title": "Forward-bias minority-carrier boundary values",
      "equation": "n_p(0)=frac{n_i^2}{N_A}e^{V_A/V_T};p_n(0)=frac{n_i^2}{N_D}e^{V_A/V_T}",
      "symbols": "np,pn: minority densities at depletion edges.",
      "when": "Ideal low-level injection, nondegenerate abrupt junction.",
      "example": "A forward increase of VT ln10 multiplies each edge density by 10."
    },
    {
      "id": "full-bjtalpha",
      "category": "BJT models",
      "title": "BJT current gains and Early effect",
      "equation": "α=frac{β}{β+1};β=frac{α}{1−α};I_C≈I_Se^{V_{BE}/V_T}(1+frac{V_{CE}}{V_A});r_o≈frac{V_A}{I_C}",
      "symbols": "VA: Early voltage magnitude; forward-active npn model.",
      "when": "ro≈VA/IC assumes VCE≪VA. Check forward-active bias before using the model.",
      "example": "β=99 gives α=0.99."
    },
    {
      "id": "full-hybridpi",
      "category": "BJT models",
      "title": "BJT hybrid-π parameters",
      "equation": "g_m=frac{I_C}{V_T};r_π=frac{β}{g_m};r_e≈frac{V_T}{I_E};f_T≈frac{g_m}{2π(C_π+C_μ)}",
      "symbols": "Cπ: base-emitter capacitance; Cμ: base-collector capacitance.",
      "when": "Low-frequency r parameters use the bias current; fT approximation neglects secondary resistances.",
      "example": "IC=1 mA,VT=25 mV,β=100 give gm=40 mS and rπ=2.5 kΩ."
    },
    {
      "id": "full-cox",
      "category": "MOS capacitor and MOSFET",
      "title": "MOS oxide and depletion capacitances",
      "equation": "C_{ox}=frac{ε_{ox}}{t_{ox}};C_{ox,total}=C_{ox}WL;C_{min}=frac{C_{ox}C_{dep,max}}{C_{ox}+C_{dep,max}}",
      "symbols": "Cox and Cdep,max in the last expression are per unit area.",
      "when": "Ideal MOS capacitor; high-frequency strong-inversion capacitance is near Cmin for an ordinary substrate contact.",
      "example": "Halving oxide thickness doubles oxide capacitance per area."
    },
    {
      "id": "full-threshold",
      "category": "MOS capacitor and MOSFET",
      "title": "NMOS threshold and body effect",
      "equation": "V_{TH}=V_{FB}+2φ_F+frac{sqrt{4qε_sN_Aφ_F}}{C_{ox}};V_{TH}(V_{SB})=V_{TH0}+γ(sqrt{2φ_F+V_{SB}}−sqrt{2φ_F})",
      "symbols": "φF>0: p-substrate Fermi-potential magnitude; γ: body-effect coefficient.",
      "when": "Long-channel depletion approximation. VSB≥0 is reverse source-body bias for NMOS.",
      "example": "Increasing reverse body bias raises the NMOS threshold."
    },
    {
      "id": "full-triode",
      "category": "MOS capacitor and MOSFET",
      "title": "MOSFET triode-region current",
      "equation": "I_D=μ_nC_{ox}frac{W}{L}[(V_{GS}−V_{TH})V_{DS}−frac{V_{DS}^2}{2}];R_{on}≈frac{1}{μ_nC_{ox}(W/L)(V_{GS}−V_{TH})}",
      "symbols": "VOV=VGS−VTH.",
      "when": "NMOS with VOV>0 and 0≤VDS<VOV. Ron uses VDS≪VOV; it is invalid at arbitrary drain bias.",
      "example": "A channel conductance of 2 mS corresponds to Ron≈500 Ω."
    },
    {
      "id": "full-moslambda",
      "category": "MOS capacitor and MOSFET",
      "title": "MOS saturation with channel-length modulation",
      "equation": "I_D≈frac{1}{2}k_nV_{OV}^2(1+λV_{DS});r_o≈frac{1}{λI_D};g_m≈k_nV_{OV}",
      "symbols": "kn=μnCoxW/L; λ: modulation parameter.",
      "when": "Long-channel square-law model; gm expression drops the small 1+λVDS correction.",
      "example": "ID=1 mA and λ=0.02 V⁻¹ give ro≈50 kΩ."
    },
    {
      "id": "full-moscap",
      "category": "MOS capacitor and MOSFET",
      "title": "MOS intrinsic capacitance approximations",
      "equation": "C_{gs,sat}≈frac{2}{3}WLC_{ox};C_{gd,sat}≈0;C_{gs,triode}≈C_{gd,triode}≈frac{1}{2}WLC_{ox}",
      "symbols": "Intrinsic channel capacitances only.",
      "when": "Long-channel quasistatic strong inversion; add overlap and junction capacitances separately.",
      "example": "An intrinsic saturation Cgd near zero does not remove physical gate-drain overlap capacitance."
    },
    {
      "id": "full-scaling",
      "category": "MOS capacitor and MOSFET",
      "title": "Constant-field MOS scaling",
      "equation": "L′=frac{L}{κ};V′=frac{V}{κ};t_d′≈frac{t_d}{κ};E_{switch}′≈frac{E_{switch}}{κ^3}",
      "symbols": "κ>1: ideal constant-field scaling factor.",
      "when": "Ideal Dennard scaling also scales oxide thickness and increases doping; modern short-channel limits can invalidate the model.",
      "example": "κ=2 ideally halves delay and reduces switching energy by 8."
    },
    {
      "id": "full-responsivity",
      "category": "Optoelectronic devices",
      "title": "Photodiode quantum efficiency and responsivity",
      "equation": "R=frac{I_{ph}}{P_{opt}}=ηfrac{q}{hν}=ηfrac{qλ}{hc}",
      "symbols": "η: external quantum efficiency; R: A/W.",
      "when": "Assumes one collected electron per absorbed photon times efficiency, without avalanche gain.",
      "example": "R=0.8 A/W and P=10 μW give Iph=8 μA."
    },
    {
      "id": "full-solar",
      "category": "Optoelectronic devices",
      "title": "Illuminated diode and solar-cell power",
      "equation": "I=I_{ph}−I_S(e^{V/(nV_T)}−1);V_{oc}=nV_Tln(1+frac{I_{ph}}{I_S});FF=frac{V_{mp}I_{mp}}{V_{oc}I_{sc}}",
      "symbols": "Current I is delivered to the external load; mp: maximum-power point.",
      "when": "Ideal solar-cell model neglecting shunt leakage and series resistance.",
      "example": "If Voc=0.6 V,Isc=1 A,FF=0.75, maximum output power is 0.45 W."
    },
    {
      "id": "full-isat",
      "category": "PN junctions and diodes",
      "title": "Ideal diode saturation current",
      "equation": "I_S=qAn_i^2(frac{D_n}{L_nN_A}+frac{D_p}{L_pN_D})",
      "symbols": "A: junction area; D: diffusion coefficient; L: diffusion length.",
      "when": "Long quasi-neutral regions, low-level injection, ideal diffusion-dominated abrupt junction.",
      "example": "Doubling junction area doubles IS under otherwise identical conditions."
    },
    {
      "id": "full-jfet",
      "category": "MOS capacitor and MOSFET",
      "title": "JFET Shockley transfer relation",
      "equation": "I_D=I_{DSS}(1−frac{V_{GS}}{V_P})^2;g_m=frac{2I_{DSS}}{|V_P|}(1−frac{V_{GS}}{V_P})",
      "symbols": "n-channel JFET: VP<0; VP≤VGS≤0.",
      "when": "Saturation-region transfer model, neglecting channel-length modulation. This VP convention is negative pinch-off/cutoff voltage.",
      "example": "At VGS=VP/2, ID=IDSS/4 and gm=gm0/2."
    }
  ],
  "analog": [
    {
      "id": "full-biasdivider",
      "category": "Bias and small-signal amplifiers",
      "title": "BJT divider-bias operating point",
      "equation": "V_{th}=V_{CC}frac{R_2}{R_1+R_2};R_{th}=R_1∥R_2;I_B=frac{V_{th}−V_{BE}}{R_{th}+(β+1)R_E}",
      "symbols": "R1: supply-to-base resistor; R2: base-to-ground resistor.",
      "when": "Forward-active approximation; calculate VCE afterward to verify it.",
      "example": "Vth=2 V,VBE=0.7 V,Rth=10 kΩ,β=99,RE=1 kΩ give IB≈11.8 μA."
    },
    {
      "id": "full-ce",
      "category": "Bias and small-signal amplifiers",
      "title": "Common-emitter gain and emitter degeneration",
      "equation": "A_v≈−frac{g_mR_C′}{1+g_mR_E(1+1/β)};R_{in,base}≈r_π+(β+1)R_E",
      "symbols": "RC′: effective collector load; RE: unbypassed emitter resistance.",
      "when": "Midband model neglecting ro and bias-network loading of the signal unless included explicitly.",
      "example": "For gm=40 mS,RC′=2 kΩ,RE=25 Ω,β≫1, gain≈−40."
    },
    {
      "id": "full-cb",
      "category": "Bias and small-signal amplifiers",
      "title": "Common-base amplifier",
      "equation": "R_{in}≈frac{1}{g_m};A_v≈g_mR_C′;A_i≈α",
      "symbols": "Base is AC-grounded; collector output relative to emitter input.",
      "when": "Neglect ro and use a low-impedance base bias. Current gain sign depends on port-current references.",
      "example": "gm=20 mS gives input resistance about 50 Ω."
    },
    {
      "id": "full-ccgain",
      "category": "Bias and small-signal amplifiers",
      "title": "Emitter follower",
      "equation": "A_v≈frac{(β+1)R_E′}{r_π+(β+1)R_E′};R_{in,base}=r_π+(β+1)R_E′",
      "symbols": "RE′: emitter load to AC ground.",
      "when": "Neglect ro; source resistance and bias divider affect the overall gain.",
      "example": "If (β+1)RE′=9rπ, base-to-emitter gain is 0.9."
    },
    {
      "id": "full-mosdegen",
      "category": "Bias and small-signal amplifiers",
      "title": "Degenerated common-source and common-gate stages",
      "equation": "A_{v,CS}≈−frac{g_mR_D′}{1+g_mR_S};R_{in,CG}≈frac{1}{g_m};A_{v,CG}≈g_mR_D′",
      "symbols": "RD′: effective drain load; RS: unbypassed source resistance.",
      "when": "Neglect body effect and ro. Common-gate gain is noninverting.",
      "example": "gmRS=1 reduces common-source gain magnitude by a factor of 2."
    },
    {
      "id": "full-mirror",
      "category": "Mirrors and differential pairs",
      "title": "Ideal MOS current mirror and compliance",
      "equation": "frac{I_{out}}{I_{ref}}≈frac{(W/L)_{out}}{(W/L)_{ref}};V_{out,min}≈V_{OV,out}",
      "symbols": "Matched threshold and process parameters.",
      "when": "Both devices must remain in saturation; mismatch and finite ro cause errors.",
      "example": "A 3:1 W/L ratio ideally mirrors 100 μA as 300 μA."
    },
    {
      "id": "full-bipolarmirror",
      "category": "Mirrors and differential pairs",
      "title": "Simple BJT current mirror base-current error",
      "equation": "I_{out}≈frac{I_{ref}}{1+2/β}",
      "symbols": "Equal devices, equal β, matched VBE.",
      "when": "Both devices forward active; neglect Early effect. Iref supplies both base currents.",
      "example": "β=100 gives Iout≈0.9804 Iref."
    },
    {
      "id": "full-diffpair",
      "category": "Mirrors and differential pairs",
      "title": "Differential-pair gain",
      "equation": "A_{vd,single}=−frac{g_mR_L′}{2};A_{vd,diff}=−g_mR_L′",
      "symbols": "vd=v1−v2; differential output is drain/collector 1 minus 2.",
      "when": "Matched balanced pair with ideal tail source, small differential signal and resistive loads.",
      "example": "gm=2 mS,RL′=10 kΩ give single-ended gain −10."
    },
    {
      "id": "full-cmrr",
      "category": "Mirrors and differential pairs",
      "title": "Common-mode rejection ratio",
      "equation": "CMRR=|frac{A_d}{A_{cm}}|;CMRR_{dB}=20log_{10}(CMRR)",
      "symbols": "Ad: differential gain; Acm: common-mode gain for the same output definition.",
      "when": "Use amplitude ratios with 20log, not 10log.",
      "example": "Ad=100,Acm=0.01 give CMRR=80 dB."
    },
    {
      "id": "full-summer",
      "category": "Op-amp applications",
      "title": "Inverting summer and difference amplifier",
      "equation": "v_o=−R_fΣ_i frac{v_i}{R_i};v_o=frac{R_2}{R_1}(v_2−v_1)",
      "symbols": "Difference amplifier requires matched resistor ratios R2/R1=R4/R3.",
      "when": "Ideal op-amp, negative feedback and unsaturated output.",
      "example": "With equal summer resistors and Rf=R, inputs 1 V and 2 V produce −3 V."
    },
    {
      "id": "full-integrator",
      "category": "Op-amp applications",
      "title": "Ideal op-amp integrator",
      "equation": "H(s)=−frac{1}{sRC};v_o(t)=v_o(0)−frac{1}{RC}∫_0^t v_i(τ)dτ",
      "symbols": "R: input resistor; C: feedback capacitor.",
      "when": "Ideal model; a practical DC feedback path prevents drift and saturation.",
      "example": "A constant 1 V input with RC=1 s produces a −1 V/s output ramp."
    },
    {
      "id": "full-differentiator",
      "category": "Op-amp applications",
      "title": "Ideal op-amp differentiator",
      "equation": "H(s)=−sRC;v_o=−RCfrac{dv_i}{dt}",
      "symbols": "C: input capacitor; R: feedback resistor.",
      "when": "Ideal relation over a limited band in practical noise-limited circuits.",
      "example": "For vi=sinωt, vo=−ωRC cosωt."
    },
    {
      "id": "full-finitegain",
      "category": "Op-amp applications",
      "title": "Finite open-loop gain correction",
      "equation": "A_{cl}=frac{A}{1+Aβ};frac{A_{cl}}{1/β}=frac{Aβ}{1+Aβ}",
      "symbols": "A: forward gain; β: negative-feedback factor.",
      "when": "Use compatible signs and a stable linear loop. Large Aβ gives the ideal feedback approximation.",
      "example": "Aβ=99 gives 99% of the ideal gain."
    },
    {
      "id": "full-offset",
      "category": "Op-amp applications",
      "title": "Input offsets and bias-current compensation",
      "equation": "V_{o,offset}≈G_{noise}V_{OS};R_{comp}=R_{in}∥R_f",
      "symbols": "VOS: equivalent input-offset voltage.",
      "when": "Rcomp on the noninverting input balances equal bias-current drops in an inverting stage; input offset current still causes residual error.",
      "example": "Noise gain 11 and VOS=1 mV produce about 11 mV output offset."
    },
    {
      "id": "full-schmitt",
      "category": "Op-amp applications",
      "title": "Symmetric inverting Schmitt trigger",
      "equation": "V_{UT}=βV_{sat};V_{LT}=−βV_{sat};V_H=2βV_{sat}",
      "symbols": "β: fraction of output fed to the noninverting reference node.",
      "when": "Symmetric output saturation and a zero-centered reference; other topologies need their own divider equations.",
      "example": "β=0.2,Vsat=10 V give thresholds ±2 V and hysteresis width 4 V."
    },
    {
      "id": "full-miller",
      "category": "Frequency response and oscillators",
      "title": "Miller equivalent capacitances",
      "equation": "C_{in}=C(1−A_v);C_{out}=C(1−frac{1}{A_v})",
      "symbols": "C bridges input and output of a stage with gain Av.",
      "when": "Treat Av as approximately constant over the frequency range of interest.",
      "example": "Av=−9 and C=2 pF give input Miller capacitance 20 pF."
    },
    {
      "id": "full-poles",
      "category": "Frequency response and oscillators",
      "title": "Open-circuit time-constant estimate",
      "equation": "ω_H≈frac{1}{Σ_i R_iC_i};f_H≈frac{1}{2πΣ_iR_iC_i}",
      "symbols": "Ri: resistance seen by Ci with the other small capacitors open.",
      "when": "Approximate upper cutoff when pole interactions are modest; dependent sources remain active.",
      "example": "A total open-circuit time constant of 10 ns gives fH≈15.9 MHz."
    },
    {
      "id": "full-oscillator",
      "category": "Frequency response and oscillators",
      "title": "Barkhausen condition and Wien bridge",
      "equation": "|A(jω_0)β(jω_0)|=1;∠Aβ=2πk;f_{Wien}=frac{1}{2πRC}",
      "symbols": "Equal R and C arms in the standard Wien network.",
      "when": "Steady sinusoidal oscillation condition; startup normally needs loop magnitude above 1. The ideal Wien amplifier gain is 3.",
      "example": "R=10 kΩ,C=10 nF give f≈1.59 kHz."
    },
    {
      "id": "full-lcosc",
      "category": "Frequency response and oscillators",
      "title": "LC and RC phase-shift oscillators",
      "equation": "f_{LC}=frac{1}{2πsqrt{LC_{eq}}};C_{eq,Colpitts}=frac{C_1C_2}{C_1+C_2};f_{RC}≈frac{1}{2πRCsqrt{6}}",
      "symbols": "RC formula: three identical sections in the standard unbuffered phase-shift network.",
      "when": "RC frequency and required gain 29 use the standard ideal topology; loading changes them.",
      "example": "Equal Colpitts capacitors C give Ceq=C/2."
    },
    {
      "id": "full-activefilter",
      "category": "Frequency response and oscillators",
      "title": "Second-order low-pass and quality factor",
      "equation": "H(s)=frac{H_0ω_0^2}{s^2+(ω_0/Q)s+ω_0^2};Q=frac{1}{2ζ}",
      "symbols": "H0: DC gain; ω0: natural angular frequency.",
      "when": "Butterworth second-order response has Q=1/√2; topology component ratios determine Q.",
      "example": "Q=0.707 gives ζ≈0.707."
    },
    {
      "id": "full-feedbackimp",
      "category": "Feedback and power stages",
      "title": "Feedback effects on impedances",
      "equation": "D=1+Aβ;R_{in,series}=DR_{in};R_{in,shunt}=frac{R_{in}}{D};R_{out,voltage}=frac{R_{out}}{D};R_{out,current}=DR_{out}",
      "symbols": "D: desensitivity factor.",
      "when": "Ideal unilateral-feedback approximations; series/shunt label refers to input mixing and output label to sampling.",
      "example": "Voltage-series feedback raises input resistance and lowers output resistance."
    },
    {
      "id": "full-rectifier",
      "category": "Diodes, rectifiers and power stages",
      "title": "Ideal half-wave and full-wave rectifiers",
      "equation": "V_{DC,HW}=frac{V_m}{π};V_{rms,HW}=frac{V_m}{2};V_{DC,FW}=frac{2V_m}{π};V_{rms,FW}=frac{V_m}{sqrt{2}}",
      "symbols": "Vm: peak of the rectified sine before ideal clipping.",
      "when": "Ideal diodes, resistive load, no smoothing capacitor.",
      "example": "For Vm=10 V, ideal full-wave average is 6.37 V."
    },
    {
      "id": "full-ripple",
      "category": "Diodes, rectifiers and power stages",
      "title": "Capacitor-input rectifier ripple",
      "equation": "ΔV_{pp}≈frac{I_L}{f_rC};r≈frac{1}{4sqrt{3}f_{line}R_LC}",
      "symbols": "fr: recharge frequency, twice line frequency for full wave.",
      "when": "Small ripple, approximately constant load current; r formula is for full-wave ripple factor Vripple,rms/VDC.",
      "example": "IL=0.1 A,fr=100 Hz,C=1000 μF give about 1 V peak-to-peak ripple."
    },
    {
      "id": "full-zener",
      "category": "Diodes, rectifiers and power stages",
      "title": "Zener shunt-regulator design",
      "equation": "I_S=frac{V_{in}−V_Z}{R_S};I_Z=I_S−I_L;P_Z=V_ZI_Z",
      "symbols": "RS: series resistance; IZ: Zener current.",
      "when": "Maintain IZ above its knee and below its power-limited maximum at all input/load extremes.",
      "example": "A 10 V input,5 V Zener and100 Ω resistor supply 50 mA total."
    },
    {
      "id": "full-classb",
      "category": "Diodes, rectifiers and power stages",
      "title": "Ideal class-B push-pull efficiency",
      "equation": "P_o=frac{V_m^2}{2R_L};P_{DC}=frac{2V_{CC}I_m}{π};η_{max}=frac{π}{4}",
      "symbols": "Vm,Im: sinusoidal load peaks; ±VCC supplies.",
      "when": "Ideal complementary push-pull output with full undistorted swing; crossover and device drops reduce efficiency.",
      "example": "Maximum theoretical efficiency is about 78.5%."
    },
    {
      "id": "full-piv",
      "category": "Diodes, rectifiers and power stages",
      "title": "Rectifier peak inverse voltage",
      "equation": "PIV_{HW}=V_m;PIV_{bridge}=V_m;PIV_{center-tap}=2V_m",
      "symbols": "Vm: peak active secondary winding for the indicated topology.",
      "when": "Ideal resistive-load rectifiers without a smoothing capacitor. In the center-tap case Vm is one half-secondary’s peak; a capacitor-input half-wave circuit can approach 2Vm.",
      "example": "A center-tapped secondary of 10 V peak per half needs PIV at least 20 V before margin."
    },
    {
      "id": "full-bipolardiff",
      "category": "Mirrors and differential pairs",
      "title": "Large-signal BJT differential pair",
      "equation": "I_{C1}−I_{C2}=I_Ttanh(frac{v_d}{2V_T});I_{C1}+I_{C2}≈I_T",
      "symbols": "IT: tail current; vd=vB1−vB2.",
      "when": "Matched forward-active BJTs, β≫1 and ideal tail source. Small-signal differential current slope is IT/(2VT).",
      "example": "At vd=0 both collector currents are about IT/2."
    },
    {
      "id": "full-cascode",
      "category": "Mirrors and differential pairs",
      "title": "Cascode output resistance",
      "equation": "R_{out}≈r_{o1}+r_{o2}+g_{m2}r_{o1}r_{o2}",
      "symbols": "Lower common-source and upper common-gate devices.",
      "when": "Low-frequency small-signal model with body effect neglected and both devices in saturation. For gmro≫1, Rout≈gmro² for equal devices.",
      "example": "gm=1 mS,ro=100 kΩ give dominant Rout≈10 MΩ."
    },
    {
      "id": "full-compensation",
      "category": "Frequency response and oscillators",
      "title": "Dominant-pole compensation and unity frequency",
      "equation": "A(s)≈frac{A_0}{1+s/ω_p};ω_T≈A_0ω_p;PM=180°+∠Aβ|_{|Aβ|=1}",
      "symbols": "A0≫1; ωp: dominant pole; ωT: unity-gain frequency.",
      "when": "Single-dominant-pole approximation. Additional nondominant poles reduce phase margin and may require compensation.",
      "example": "A0=10⁵ and fp=10 Hz give fT≈1 MHz."
    },
    {
      "id": "full-relaxation",
      "category": "Frequency response and oscillators",
      "title": "Op-amp RC relaxation oscillator",
      "equation": "T=2RC ln(frac{1+β}{1−β});f=frac{1}{T}",
      "symbols": "0<β<1: symmetric Schmitt threshold fraction.",
      "when": "Ideal symmetric saturation ±Vsat; capacitor charges through R toward the opposite saturation and switches at ±βVsat.",
      "example": "β=1/2 gives T=2RC ln3."
    }
  ],
  "digital": [
    {
      "id": "full-ranges",
      "category": "Number systems and codes",
      "title": "Unsigned and two’s-complement ranges",
      "equation": "0≤x_{unsigned}≤2^n−1;−2^{n−1}≤x_{signed}≤2^{n−1}−1",
      "symbols": "n: fixed word width.",
      "when": "The signed range is for two’s complement; sign-magnitude and one’s complement differ.",
      "example": "An 8-bit two’s-complement word spans −128 to 127."
    },
    {
      "id": "full-basevalue",
      "category": "Number systems and codes",
      "title": "Positional and fixed-point values",
      "equation": "x=Σ_k d_kr^k;Δ_{fixed}=2^{−F}",
      "symbols": "r: radix; dk: digit; F: binary fractional bits.",
      "when": "Digits right of the radix point use negative powers.",
      "example": "Binary 101.01 equals 5.25; F=4 gives a step of 1/16."
    },
    {
      "id": "full-floating",
      "category": "Number systems and codes",
      "title": "IEEE-style normalized binary value",
      "equation": "x=(−1)^s(1.f)2^{E−bias};x_{subnormal}=(−1)^s(0.f)2^{1−bias}",
      "symbols": "s: sign; E: stored exponent; f: fraction bits.",
      "when": "Normalized form excludes all-zero/all-one exponent fields. Binary32 has 8 exponent bits,23 fraction bits,bias127; binary64 has11,52,bias1023.",
      "example": "Binary32 exponent E=127 and zero fraction represent magnitude 1."
    },
    {
      "id": "full-gray",
      "category": "Number systems and codes",
      "title": "Binary-to-Gray and Gray-to-binary",
      "equation": "g_{n−1}=b_{n−1};g_i=b_{i+1}⊕b_i;b_i=⊕_{k=i}^{n−1}g_k",
      "symbols": "Bits indexed from least significant i=0.",
      "when": "Reflected binary Gray code changes one bit between consecutive codewords.",
      "example": "Binary 1011 converts to Gray 1110."
    },
    {
      "id": "full-identities",
      "category": "Boolean algebra and combinational logic",
      "title": "Absorption and consensus",
      "equation": "A+AB=A;A(A+B)=A;AB+ĀC+BC=AB+ĀC",
      "symbols": "+:OR; juxtaposition:AND; bar:NOT.",
      "when": "Consensus removes a logically redundant implicant; a physical redundant term may still be useful to suppress hazards.",
      "example": "X+XY simplifies to X."
    },
    {
      "id": "full-shannon",
      "category": "Boolean algebra and combinational logic",
      "title": "Shannon expansion and 2:1 MUX",
      "equation": "F=S̄F|_{S=0}+SF|_{S=1};Y=S̄D_0+SD_1",
      "symbols": "S: select; D0,D1: data inputs.",
      "when": "Use cofactors to implement a Boolean function with multiplexers.",
      "example": "An XOR uses D0=A,D1=Ā with select B."
    },
    {
      "id": "full-fulladder",
      "category": "Boolean algebra and combinational logic",
      "title": "Full-adder sum and carry",
      "equation": "S=A⊕B⊕C_{in};C_{out}=AB+(A⊕B)C_{in}",
      "symbols": "A,B,Cin: input bits.",
      "when": "Carry is also the majority function AB+ACin+BCin.",
      "example": "A=B=Cin=1 gives S=1,Cout=1, representing decimal 3."
    },
    {
      "id": "full-carrylook",
      "category": "Boolean algebra and combinational logic",
      "title": "Carry generate and propagate",
      "equation": "G_i=A_iB_i;P_i=A_i⊕B_i;C_{i+1}=G_i+P_iC_i",
      "symbols": "Gi: carry generate; Pi: XOR propagate.",
      "when": "Some texts use OR propagate; keep definitions consistent in expanded carry equations.",
      "example": "C2=G1+P1G0+P1P0C0."
    },
    {
      "id": "full-subtractor",
      "category": "Boolean algebra and combinational logic",
      "title": "Two’s-complement subtraction and overflow",
      "equation": "A−B=A+B̄+1;V=C_{in,MSB}⊕C_{out,MSB}",
      "symbols": "n-bit arithmetic wraps modulo 2^n.",
      "when": "Overflow flag applies to signed two’s-complement addition; carry-out alone does not indicate signed overflow.",
      "example": "In 4 bits, 7+1 wraps to 1000 and sets signed overflow."
    },
    {
      "id": "full-decode",
      "category": "Boolean algebra and combinational logic",
      "title": "Decoder and MUX sizing",
      "equation": "N_{decoder,out}=2^n;N_{MUX,select}=⌈log_2 M⌉",
      "symbols": "n: decoder input bits; M: number of MUX data inputs.",
      "when": "Unused select codes must be specified when M is not a power of two.",
      "example": "A 16:1 multiplexer needs 4 select bits."
    },
    {
      "id": "full-ff",
      "category": "Sequential circuits and timing",
      "title": "Flip-flop characteristic equations",
      "equation": "Q_D^+=D;Q_T^+=T⊕Q;Q_{JK}^+=JQ̄+K̄Q",
      "symbols": "Q+: next state; Q: present state.",
      "when": "Valid at the active clock edge for edge-triggered devices. SR has a forbidden input combination depending on polarity.",
      "example": "J=K=1 gives Q+=Q̄, so the JK flip-flop toggles."
    },
    {
      "id": "full-srlatch",
      "category": "Sequential circuits and timing",
      "title": "Active-high SR characteristic equation",
      "equation": "Q^+=S+R̄Q;SR=0",
      "symbols": "S: set; R: reset.",
      "when": "For an ideal active-high NOR SR latch; S=R=1 is forbidden. NAND latches use active-low inputs.",
      "example": "S=1,R=0 sets Q to 1."
    },
    {
      "id": "full-counter",
      "category": "Sequential circuits and timing",
      "title": "Modulo counters and ripple delay",
      "equation": "f_{Q_k}=frac{f_{clk}}{2^{k+1}};t_{ripple}≈nt_{pd}",
      "symbols": "Q0: first divide-by-two stage; n: ripple stages.",
      "when": "Untruncated binary ripple counter with all stages toggling. Synchronous counters require a different critical-path analysis.",
      "example": "Q3 of a 1 MHz binary counter is 62.5 kHz."
    },
    {
      "id": "full-skew",
      "category": "Sequential circuits and timing",
      "title": "Setup and hold with clock skew",
      "equation": "T≥t_{cq,max}+t_{comb,max}+t_{setup}−t_{skew};t_{cq,min}+t_{comb,min}≥t_{hold}+t_{skew}",
      "symbols": "tskew=capture clock arrival−launch clock arrival.",
      "when": "Positive capture skew helps setup but hurts hold; add jitter/uncertainty margins separately.",
      "example": "A +0.2 ns capture skew relaxes setup by 0.2 ns and tightens hold by 0.2 ns."
    },
    {
      "id": "full-rippleadder",
      "category": "Sequential circuits and timing",
      "title": "Ripple-carry adder worst-case delay",
      "equation": "t_{sum,last}≈(n−1)t_{carry}+t_{sum};t_{carry,out}≈nt_{carry}",
      "symbols": "n: number of full adders.",
      "when": "Assumes first carry-generation delay is included in tcarry; use actual path delays if the gate-level implementation distinguishes them.",
      "example": "n=16,tcarry=12 ns,tsum=15 ns give final-sum delay 195 ns."
    },
    {
      "id": "full-cmos",
      "category": "CMOS and memory",
      "title": "CMOS switching threshold and dynamic power",
      "equation": "P_{dyn}=αC_LV_{DD}^2f;E_{supply,0→1}=C_LV_{DD}^2;V_M≈frac{V_{TN}+r(V_{DD}−|V_{TP}|)}{1+r}",
      "symbols": "r=√(βp/βn); α: average number of 0→1 events per clock.",
      "when": "Threshold formula assumes both long-channel transistors in saturation, no channel-length modulation. Dynamic power excludes leakage/short-circuit current.",
      "example": "Matched NMOS/PMOS strengths and equal |VT| give VM≈VDD/2."
    },
    {
      "id": "full-mem",
      "category": "CMOS and memory",
      "title": "Memory organization and address space",
      "equation": "N_{words}=2^a;N_{bits}=2^a w;N_{chips}=frac{N_{target,words}}{N_{chip,words}}frac{w_{target}}{w_{chip}}",
      "symbols": "a: address bits; w: bits per word.",
      "when": "Both ratios must be feasible integers for simple rectangular banking; distinguish byte-addressed from word-addressed memory.",
      "example": "A 1K×8 memory stores 8192 bits and needs 10 address lines."
    },
    {
      "id": "full-dac",
      "category": "Data conversion",
      "title": "Ideal unipolar DAC",
      "equation": "V_o=V_{ref}frac{D}{2^N};LSB=frac{V_{ref}}{2^N}",
      "symbols": "D: unsigned code 0…2^N−1.",
      "when": "Ideal binary-weighted unipolar DAC. An inverting op-amp DAC may add a minus sign or a topology-dependent scale.",
      "example": "An 8-bit DAC at Vref=2.56 V has a 10 mV LSB."
    },
    {
      "id": "full-quantization",
      "category": "Data conversion",
      "title": "Quantization error and noise",
      "equation": "|e_q|≤frac{Δ}{2};σ_q^2=frac{Δ^2}{12}",
      "symbols": "Δ: quantizer step.",
      "when": "Rounding quantizer without overload; uniform-error noise model needs sufficiently varied input and can fail for coherent special tones.",
      "example": "Halving Δ reduces modeled noise power by a factor of four."
    },
    {
      "id": "full-adcarchitecture",
      "category": "Data conversion",
      "title": "Flash and successive-approximation ADCs",
      "equation": "N_{flash,comparators}=2^N−1;t_{SAR}≈NT_{clk}",
      "symbols": "N: resolution in bits.",
      "when": "Ideal flash needs all decision thresholds; SAR estimate excludes acquisition and controller overhead.",
      "example": "A 6-bit flash ADC needs 63 comparators."
    },
    {
      "id": "full-samplehold",
      "category": "Data conversion",
      "title": "Sample-and-hold droop and settling",
      "equation": "|frac{dV_H}{dt}|≈frac{|I_{leak}|}{C_H};t_{acq}≈R_{on}C_Hln(frac{V_{step}}{ε})",
      "symbols": "CH: hold capacitor; ε: allowed absolute settling error.",
      "when": "Single-pole acquisition and approximately constant leakage. Larger CH reduces droop but slows acquisition.",
      "example": "1 nA leakage and 1 nF give 1 V/s droop."
    },
    {
      "id": "full-cpu",
      "category": "Computer organization",
      "title": "CPU execution time and CPI",
      "equation": "t_{CPU}=N_{instr}CPI T_{clk};MIPS=frac{f_{clk}}{10^6 CPI}",
      "symbols": "CPI: average cycles/instruction including stalls.",
      "when": "Compare workloads and instruction sets carefully; MIPS alone is not a universal performance measure.",
      "example": "10⁶ instructions at CPI=2 and 1 GHz take 2 ms."
    },
    {
      "id": "full-pipeline",
      "category": "Computer organization",
      "title": "Ideal pipeline speedup",
      "equation": "t_{pipe}=(k+n−1)T;Speedup=frac{nk}{k+n−1}",
      "symbols": "k: equal pipeline stages; n: instructions; T: stage time.",
      "when": "Ideal balanced stages, no hazards, stalls or latch overhead; real pipelines have additional delays.",
      "example": "For large n, ideal speedup approaches k."
    },
    {
      "id": "full-address",
      "category": "Computer organization",
      "title": "Effective addressing and memory mapping",
      "equation": "EA_{indexed}=base+index+displacement;N_{locations}=2^{addressbits}",
      "symbols": "EA: effective address.",
      "when": "Address units depend on the architecture. Truncate only when the architecture specifies fixed-width wrapping.",
      "example": "A 16-bit byte address spans 65536 byte locations."
    },
    {
      "id": "full-ringjohnson",
      "category": "Sequential circuits and timing",
      "title": "Ring and Johnson counter states",
      "equation": "N_{ring}=n;N_{Johnson}=2n;N_{binary,max}=2^n",
      "symbols": "n: flip-flop count.",
      "when": "Valid intended cycles with proper initialization; unused/lockout states must be handled.",
      "example": "A 4-stage Johnson counter has an intended 8-state cycle."
    },
    {
      "id": "full-bcd",
      "category": "Number systems and codes",
      "title": "BCD addition correction",
      "equation": "if S>9 or C_4=1: add 0110_2",
      "symbols": "S: low four-bit binary sum of two BCD digits; C4: carry-out.",
      "when": "Decimal digits 0–9 encoded in four bits. Correction produces the decimal carry and valid BCD low digit.",
      "example": "BCD 7+5 gives binary 1100; adding 0110 yields decimal carry 1 and digit 0010."
    },
    {
      "id": "full-drambandwidth",
      "category": "CMOS and memory",
      "title": "DRAM refresh overhead",
      "equation": "N_{refresh}=2^{r};Overhead=frac{N_{refresh}t_{refresh}}{T_{retention}}",
      "symbols": "r: refreshed row-address bits; trefresh: blocked time per refresh.",
      "when": "Simple nonoverlapped refresh model; actual controllers can overlap banks and use different refresh policies.",
      "example": "8192 refreshes of 100 ns over 64 ms consume about 1.28% time."
    }
  ],
  "control": [
    {
      "id": "full-mason",
      "category": "Block diagrams and stability",
      "title": "Mason’s signal-flow gain formula",
      "equation": "T=frac{Σ_k P_kΔ_k}{Δ};Δ=1−ΣL_i+ΣL_iL_j−⋯",
      "symbols": "Pk: forward path gain; Li: individual loop gain; products use mutually nontouching loops.",
      "when": "Δk excludes loops touching path k. Include the actual signed loop gains.",
      "example": "One forward gain G and feedback loop −GH give T=G/(1+GH)."
    },
    {
      "id": "full-routh",
      "category": "Block diagrams and stability",
      "title": "Routh array recursion",
      "equation": "r_{ij}=frac{r_{i−1,0}r_{i−2,j+1}−r_{i−2,0}r_{i−1,j+1}}{r_{i−1,0}}",
      "symbols": "First two rows: alternating coefficients of a real characteristic polynomial in descending powers.",
      "when": "First-column sign changes count right-half-plane roots. Zero leading entries and all-zero rows need special treatment.",
      "example": "For s³+as²+bs+c, stability requires a,b,c>0 and ab>c."
    },
    {
      "id": "full-hurwitz",
      "category": "Block diagrams and stability",
      "title": "Low-order stability conditions",
      "equation": "s^2+a_1s+a_0: a_1>0,a_0>0;s^3+as^2+bs+c: a>0,b>0,c>0,ab>c",
      "symbols": "Leading coefficient normalized to 1.",
      "when": "Strict Hurwitz stability; equality can place roots on the imaginary axis and needs separate analysis.",
      "example": "s³+2s²+3s+4 is stable since 2×3>4."
    },
    {
      "id": "full-nyquist",
      "category": "Block diagrams and stability",
      "title": "Nyquist encirclement count",
      "equation": "N_{cw}=Z−P;Z=N_{cw}+P",
      "symbols": "P: right-half-plane poles of loop transfer L; Z: right-half-plane zeros of 1+L.",
      "when": "Ncw counts clockwise encirclements of −1 using the usual contour enclosing the RHP clockwise. Account for imaginary-axis poles by contour indentation.",
      "example": "For P=0, closed-loop stability needs zero net encirclement and no axis zeros."
    },
    {
      "id": "full-firstorder",
      "category": "Time response",
      "title": "First-order response timings",
      "equation": "y(t)=K(1−e^{−t/τ});t_{r,10−90}=τln9;t_{s,2%}=−τln0.02",
      "symbols": "K: final value for a unit-step, τ>0.",
      "when": "Zero-state stable first-order system without a zero.",
      "example": "A 1 s time constant gives 10–90% rise time about 2.197 s."
    },
    {
      "id": "full-poles",
      "category": "Time response",
      "title": "Second-order poles and damping",
      "equation": "s_{1,2}=−ζω_n±jω_nsqrt{1−ζ^2};σ=ζω_n;ω_d=ω_nsqrt{1−ζ^2}",
      "symbols": "0<ζ<1 for the displayed complex pair.",
      "when": "The real part sets envelope decay; ωn is not the damped frequency.",
      "example": "Poles −3±j4 give ωn=5 rad/s and ζ=0.6."
    },
    {
      "id": "full-rise",
      "category": "Time response",
      "title": "Underdamped step rise and peak time",
      "equation": "t_p=frac{π}{ω_d};t_{r,0−100}=frac{π−cos^{−1}ζ}{ω_d}",
      "symbols": "Standard second-order system with unity DC gain and no zeros.",
      "when": "Rise time is first crossing from 0 to final value, not the 10–90% definition.",
      "example": "For ζ=0.5,ωn=2 rad/s, tp≈1.814 s."
    },
    {
      "id": "full-resonantpeak",
      "category": "Time response",
      "title": "Second-order resonance",
      "equation": "M_r=frac{1}{2ζsqrt{1−ζ^2}};ω_r=ω_nsqrt{1−2ζ^2}",
      "symbols": "Mr: peak frequency-response magnitude for unit DC gain.",
      "when": "A nonzero resonance exists only for 0<ζ<1/√2.",
      "example": "At ζ=0.5, Mr≈1.155."
    },
    {
      "id": "full-errorconstants",
      "category": "Steady-state error",
      "title": "Position, velocity and acceleration error constants",
      "equation": "K_p=lim_{s→0}L(s);K_v=lim_{s→0}sL(s);K_a=lim_{s→0}s^2L(s);e_{ramp}=frac{1}{K_v};e_{parabola}=frac{1}{K_a}",
      "symbols": "Unity feedback; unit ramp t and unit parabolic input t²/2.",
      "when": "Requires a stable closed loop and final-value conditions. System type is the number of open-loop poles at the origin after relevant cancellations.",
      "example": "A type-1 loop with Kv=5 has unit-ramp error 0.2."
    },
    {
      "id": "full-rootlocus",
      "category": "Root locus and compensation",
      "title": "Root-locus magnitude and angle",
      "equation": "|KL(s)|=1;∠L(s)=(2m+1)π;K=frac{1}{|L(s)|}",
      "symbols": "K≥0; L excludes the variable gain K.",
      "when": "For standard negative feedback. Real-axis locus lies left of an odd number of real poles and zeros to its right.",
      "example": "The angle condition must hold before a magnitude-derived gain is accepted."
    },
    {
      "id": "full-asymptotes",
      "category": "Root locus and compensation",
      "title": "Root-locus asymptotes and break points",
      "equation": "σ_a=frac{Σp_i−Σz_i}{n−m};θ_q=frac{(2q+1)π}{n−m};frac{dK(s)}{ds}=0",
      "symbols": "n poles, m finite zeros; n>m; q=0,…,n−m−1.",
      "when": "Derivative candidates must also lie on the actual positive-gain root locus.",
      "example": "For poles 0,−1,−2 and no zeros, asymptote centroid is −1."
    },
    {
      "id": "full-lead",
      "category": "Root locus and compensation",
      "title": "Lead compensator peak phase",
      "equation": "C(s)=Kfrac{1+sT}{1+sαT};sinφ_{max}=frac{1−α}{1+α};ω_m=frac{1}{Tsqrt{α}}",
      "symbols": "0<α<1 for lead.",
      "when": "The zero is at lower frequency than the pole. The lag case has α>1 and a negative peak phase.",
      "example": "α=1/3 gives maximum phase lead 30°."
    },
    {
      "id": "full-bodeslopes",
      "category": "Root locus and compensation",
      "title": "Bode slopes and decibel gains",
      "equation": "|L|_{dB}=20log_{10}|L|;Δslope_{pole}=−20 dB/decade;Δslope_{zero}=+20 dB/decade",
      "symbols": "Each first-order pole or zero contributes after its break frequency.",
      "when": "A complex conjugate pair contributes twice the first-order slope; a pole at the origin contributes from the start.",
      "example": "Two excess poles give a high-frequency slope of −40 dB/decade."
    },
    {
      "id": "full-statesolution",
      "category": "State-space methods",
      "title": "State response and transition matrix",
      "equation": "x(t)=e^{At}x(0)+∫_0^t e^{A(t−τ)}Bu(τ)dτ;Φ(t)=e^{At}",
      "symbols": "A,B: constant state matrices.",
      "when": "LTI state model xdot=Ax+Bu. Matrix exponential is defined even if A is not diagonalizable.",
      "example": "For A=0, Φ(t)=I and the state integrates Bu."
    },
    {
      "id": "full-statetransfer",
      "category": "State-space methods",
      "title": "Transfer function from state space",
      "equation": "G(s)=C(sI−A)^{−1}B+D",
      "symbols": "xdot=Ax+Bu; y=Cx+Du.",
      "when": "Zero initial state. A state realization can contain uncontrollable or unobservable modes canceled from G(s).",
      "example": "A=−2,B=C=1,D=0 gives G=1/(s+2)."
    },
    {
      "id": "full-controllability",
      "category": "State-space methods",
      "title": "Controllability and observability tests",
      "equation": "C_c=[B,AB,⋯,A^{n−1}B];O=[C^T,(CA)^T,⋯,(CA^{n−1})^T]^T",
      "symbols": "n: state dimension; Cc: controllability matrix; O: observability matrix.",
      "when": "Complete controllability requires rank(Cc)=n; complete observability requires rank(O)=n.",
      "example": "For A diagonal and an input disconnected from one independent state, that state is uncontrollable."
    },
    {
      "id": "full-pbh",
      "category": "State-space methods",
      "title": "PBH tests and state feedback",
      "equation": "rank([λI−A,B])=n;rank(O_λ)=n;u=−Kx+r;A_{cl}=A−BK",
      "symbols": "Oλ is the vertical stack of λI−A and C; first rank tests controllability, second observability, for every eigenvalue λ.",
      "when": "Semicolon in the observability bracket means vertical stacking. Arbitrary state-feedback pole placement requires controllability.",
      "example": "A scalar plant xdot=ax+bu has closed-loop pole a−bK."
    },
    {
      "id": "full-fullpid",
      "category": "Controllers",
      "title": "Full PID controller",
      "equation": "C(s)=K_P+frac{K_I}{s}+K_Ds",
      "symbols": "KP: proportional; KI: integral; KD: derivative gains.",
      "when": "Ideal derivative amplifies high-frequency noise; practical controllers use a derivative rolloff filter.",
      "example": "Integral action adds a pole at the origin and can remove stable-loop step error."
    }
  ],
  "comm": [
    {
      "id": "full-wiener",
      "category": "Random processes and noise",
      "title": "Wiener–Khinchin relation",
      "equation": "S_X(f)=∫_{−∞}^{∞}R_X(τ)e^{−j2πfτ}dτ;P_X=R_X(0)=∫_{−∞}^{∞}S_X(f)df",
      "symbols": "WSS process; R uses conjugation for complex processes.",
      "when": "PSD integrates to mean-square value, including any DC spectral impulse from a nonzero mean.",
      "example": "White noise with two-sided PSD N0/2 over bandwidth −B…B has power N0B."
    },
    {
      "id": "full-randomfilter",
      "category": "Random processes and noise",
      "title": "WSS process through an LTI filter",
      "equation": "S_Y(f)=|H(f)|^2S_X(f);μ_Y=μ_XH(0)",
      "symbols": "H: stable filter frequency response.",
      "when": "Mean formula requires finite DC gain; output PSD formula assumes the WSS filtering conditions hold.",
      "example": "A filter doubling amplitude multiplies output PSD by 4."
    },
    {
      "id": "full-noisevolt",
      "category": "Random processes and noise",
      "title": "Resistor thermal-noise variance",
      "equation": "v_{n,rms}^2=4kTRB;i_{n,rms}^2=frac{4kTB}{R}",
      "symbols": "B: positive-frequency equivalent noise bandwidth in Hz.",
      "when": "Classical thermal-noise limit with kT≫hf; open-circuit voltage or short-circuit current model.",
      "example": "Doubling noise bandwidth doubles noise power and raises RMS noise by √2."
    },
    {
      "id": "full-noisefigure",
      "category": "Random processes and noise",
      "title": "Noise factor and cascaded noise",
      "equation": "F=frac{SNR_{in}}{SNR_{out}};F_{total}=F_1+frac{F_2−1}{G_1}+frac{F_3−1}{G_1G_2}+⋯",
      "symbols": "Fi,Gi: linear noise factors and available power gains.",
      "when": "Friis cascade formula uses consistent reference impedance and reference noise temperature. Convert dB to linear first.",
      "example": "A high-gain low-noise first stage suppresses later stages’ noise contributions."
    },
    {
      "id": "full-am",
      "category": "Analog modulation",
      "title": "AM modulation index, spectrum and efficiency",
      "equation": "s(t)=A_c(1+μcosω_mt)cosω_ct;P_{AM}=P_c(1+frac{μ^2}{2});η=frac{μ^2}{2+μ^2}",
      "symbols": "Single-tone sinusoidal AM into a resistive load.",
      "when": "Envelope detection without overmodulation requires |μmnormalized(t)|≤1; peak μ≤1 for the single-tone case.",
      "example": "At μ=1, efficiency is 1/3 and total power is 1.5Pc."
    },
    {
      "id": "full-dsbssb",
      "category": "Analog modulation",
      "title": "DSB-SC and SSB",
      "equation": "s_{DSB}=A_cm(t)cosω_ct;B_{DSB}=2W;B_{SSB}=W",
      "symbols": "m: message with highest frequency W.",
      "when": "Coherent detection is normally required for suppressed-carrier signals. SSB suppresses one sideband.",
      "example": "A 3 kHz message occupies 6 kHz DSB bandwidth or 3 kHz SSB bandwidth."
    },
    {
      "id": "full-angles",
      "category": "Analog modulation",
      "title": "Instantaneous phase, FM and PM",
      "equation": "f_i(t)=frac{1}{2π}frac{dθ(t)}{dt};θ_{FM}=2πf_ct+2πk_f∫m(t)dt;θ_{PM}=2πf_ct+k_pm(t)",
      "symbols": "kf in Hz per message unit; kp in radians per message unit.",
      "when": "Angle modulation has constant ideal envelope; bandwidth is generally not limited to twice the message bandwidth.",
      "example": "For PM with m=Am cos2πfmt, peak frequency deviation is kpAmfm."
    },
    {
      "id": "full-fmindex",
      "category": "Analog modulation",
      "title": "Single-tone FM index and Carson bandwidth",
      "equation": "β=frac{Δf}{f_m};B_C≈2(Δf+f_{m,max});s(t)=A_ccos(2πf_ct+βsin2πf_mt)",
      "symbols": "β: modulation index; Δf: peak frequency deviation.",
      "when": "Carson’s rule is an approximate occupied bandwidth, not an exact spectral cutoff.",
      "example": "Δf=75 kHz and fm,max=15 kHz give BC≈180 kHz."
    },
    {
      "id": "full-fmcarrier",
      "category": "Analog modulation",
      "title": "FM carrier and sideband powers",
      "equation": "A_{carrier}=A_cJ_0(β);A_{sideband,n}=A_cJ_n(β);Σ_{n=−∞}^{∞}J_n^2(β)=1",
      "symbols": "Jn: Bessel function of first kind.",
      "when": "Single-tone ideal FM; total transmitted power remains constant while carrier/sideband powers redistribute.",
      "example": "At a zero of J0, the spectral carrier component vanishes without eliminating total RF power."
    },
    {
      "id": "full-superhet",
      "category": "Analog modulation",
      "title": "Superheterodyne IF and image frequency",
      "equation": "f_{IF}=|f_{LO}−f_{RF}|;f_{image}=f_{RF}+2f_{IF}",
      "symbols": "Image expression assumes high-side LO: fLO=fRF+fIF.",
      "when": "For low-side injection, image is fRF−2fIF when positive. Image and desired signal both mix to the same IF.",
      "example": "RF=1 MHz,IF=455 kHz,high-side LO give image=1.91 MHz."
    },
    {
      "id": "full-jointentropy",
      "category": "Source and channel coding",
      "title": "Joint, conditional entropy and mutual information",
      "equation": "H(X,Y)=H(X)+H(Y|X);I(X;Y)=H(X)−H(X|Y);I(X;Y)=H(Y)−H(Y|X)",
      "symbols": "Logarithms base 2 for bits.",
      "when": "Mutual information is nonnegative and vanishes for independent variables.",
      "example": "A noiseless copy Y=X gives I(X;Y)=H(X)."
    },
    {
      "id": "full-bscbec",
      "category": "Source and channel coding",
      "title": "Binary symmetric and erasure capacities",
      "equation": "C_{BSC}=1−H_2(p);H_2(p)=−plog_2p−(1−p)log_2(1−p);C_{BEC}=1−ε",
      "symbols": "p: crossover probability; ε: erasure probability.",
      "when": "Bits per channel use; BSC/BEC are memoryless models with unconstrained binary input distribution.",
      "example": "BSC p=1/2 has capacity zero; BEC ε=0.2 has capacity 0.8 bits/use."
    },
    {
      "id": "full-codingbound",
      "category": "Source and channel coding",
      "title": "Source-code length and Kraft inequality",
      "equation": "H(X)≤L<H(X)+1;Σ_i2^{−l_i}≤1",
      "symbols": "L: mean binary codeword length; li: integer code lengths.",
      "when": "Length bound is achievable by a suitable binary prefix code; Kraft inequality is necessary and sufficient for existence of binary prefix lengths.",
      "example": "Four equally likely symbols can use fixed two-bit codewords, with L=H=2."
    },
    {
      "id": "full-distance",
      "category": "Source and channel coding",
      "title": "Hamming distance and error capability",
      "equation": "d_H(x,y)=weight(x⊕y);t=⌊frac{d_{min}−1}{2}⌋;s_{detect}=d_{min}−1",
      "symbols": "dmin: minimum distance of a block code.",
      "when": "These are guaranteed correction/detection limits; simultaneous correction and detection has a combined distance budget.",
      "example": "dmin=3 corrects any one bit error and detects any two bit errors in detection-only use."
    },
    {
      "id": "full-linearcode",
      "category": "Source and channel coding",
      "title": "Linear block code, syndrome and Hamming parity",
      "equation": "c=uG;s=rH^T;GH^T=0;2^r≥k+r+1",
      "symbols": "Binary arithmetic over GF(2); n=k+r.",
      "when": "Last inequality is the single-error-correcting Hamming parity bound. For full Hamming codes n=2^r−1.",
      "example": "Four information bits require at least three parity bits for a (7,4) Hamming code."
    },
    {
      "id": "full-crc",
      "category": "Source and channel coding",
      "title": "CRC polynomial remainder",
      "equation": "R(x)=remainder(frac{x^rm(x)}{g(x)});c(x)=x^rm(x)+R(x)",
      "symbols": "g: degree-r generator polynomial; operations over GF(2).",
      "when": "The transmitted polynomial is divisible by g. Detection guarantees depend on the generator; nonzero constant term is standard.",
      "example": "A degree-r CRC adds r check bits and detects every burst of length at most r under the usual burst model."
    },
    {
      "id": "full-pcm",
      "category": "Sampling, PCM and pulse shaping",
      "title": "PCM rate, quantization and companding",
      "equation": "R_b=Nf_s;L=2^N;Δ=frac{V_{span}}{L};y_μ=sgn(x)frac{ln(1+μ|x|)}{ln(1+μ)}",
      "symbols": "Normalized compander input |x|≤1; μ>0.",
      "when": "Raw PCM rate excludes framing overhead. μ-law compresses a wide input dynamic range before uniform quantization.",
      "example": "8-bit samples at 8 kHz produce 64 kbit/s per channel."
    },
    {
      "id": "full-deltamod",
      "category": "Sampling, PCM and pulse shaping",
      "title": "Delta-modulator slope overload",
      "equation": "frac{Δ}{T_s}≥max|frac{dm}{dt}|;frac{Δ}{T_s}≥2πf_mA_m",
      "symbols": "Δ: staircase step size.",
      "when": "Second condition is for a sinusoidal message of peak Am; too large a step increases granular noise.",
      "example": "A 1 V peak,1 kHz sinusoid requires trackable slope at least 6283 V/s."
    },
    {
      "id": "full-nyquistpulse",
      "category": "Sampling, PCM and pulse shaping",
      "title": "Zero-ISI pulse criterion",
      "equation": "p(kT)=0 for k≠0;p(0)=1;Σ_{m=−∞}^{∞}P(f−frac{m}{T})=T",
      "symbols": "T: symbol interval; P is the pulse transform in Hz.",
      "when": "Frequency form uses the displayed unit-amplitude normalization. Raised-cosine pulses meet the criterion with excess bandwidth α.",
      "example": "A sinc(t/T) pulse has zeros at every nonzero integer symbol interval."
    },
    {
      "id": "full-passbandbw",
      "category": "Sampling, PCM and pulse shaping",
      "title": "Raised-cosine passband bandwidth",
      "equation": "R_s=frac{R_b}{log_2M};B_{RF}=(1+α)R_s;B_{baseband}=frac{1+α}{2}R_s",
      "symbols": "M: constellation size; 0≤α≤1.",
      "when": "RF expression is total two-sided-around-carrier occupied bandwidth, distinct from one-sided baseband bandwidth.",
      "example": "QPSK at 100 kbit/s with α=0.2 occupies about 60 kHz RF bandwidth."
    },
    {
      "id": "full-matched",
      "category": "Detection and digital modulation",
      "title": "Matched filter and output SNR",
      "equation": "h(t)=ks^*(T−t);SNR_{max}=frac{2E_s}{N_0}",
      "symbols": "White noise has two-sided PSD N0/2; Es=∫|s|²dt.",
      "when": "Output sampled at T. Complex-baseband noise conventions may redistribute factors of two.",
      "example": "Doubling signal energy doubles matched-filter peak SNR."
    },
    {
      "id": "full-map",
      "category": "Detection and digital modulation",
      "title": "MAP versus ML decision",
      "equation": "P(x_i|y)∝p(y|x_i)P(x_i);choose max_i p(y|x_i)P(x_i)",
      "symbols": "MAP: maximum a posteriori; ML maximizes p(y|xi).",
      "when": "Equal priors and equal error costs make MAP coincide with ML.",
      "example": "For equally likely signals in AWGN with equal variance, choose the nearest signal point."
    },
    {
      "id": "full-threshold",
      "category": "Detection and digital modulation",
      "title": "Binary Gaussian MAP threshold",
      "equation": "τ=frac{m_1+m_0}{2}+frac{σ^2}{m_1−m_0}ln(frac{P_0}{P_1})",
      "symbols": "m1>m0; equal conditional noise variance σ²; decide 1 above τ.",
      "when": "Equal decision costs. More probable symbol 1 shifts the threshold downward.",
      "example": "Means −1,+1 and P1=0.75 give τ=(σ²/2)ln(1/3)<0."
    },
    {
      "id": "full-bpskqpsk",
      "category": "Detection and digital modulation",
      "title": "Coherent BPSK and Gray QPSK BER",
      "equation": "P_b=Q(sqrt{frac{2E_b}{N_0}})",
      "symbols": "Eb: energy per information bit under uncoded binary transmission.",
      "when": "Ideal coherent phase recovery and AWGN. Gray QPSK has the same bit error probability as BPSK at equal Eb/N0.",
      "example": "At Eb/N0=0 dB (linear ratio 1), Pb=Q(√2)≈0.07865, not Q(0)."
    },
    {
      "id": "full-fsk",
      "category": "Detection and digital modulation",
      "title": "Binary orthogonal FSK errors",
      "equation": "P_{b,coherent}=Q(sqrt{frac{E_b}{N_0}});P_{b,noncoherent}=frac{1}{2}e^{−E_b/(2N_0)}",
      "symbols": "Binary orthogonal equal-energy tones and AWGN.",
      "when": "Frequency spacing must ensure the applicable coherent/noncoherent orthogonality condition over a symbol.",
      "example": "Coherent orthogonal BFSK needs more Eb/N0 than coherent BPSK for the same BER."
    },
    {
      "id": "full-mpsk",
      "category": "Detection and digital modulation",
      "title": "M-PSK symbol error approximation",
      "equation": "P_s≈2Q(sqrt{frac{2E_s}{N_0}}sin(frac{π}{M}));E_s=E_blog_2M",
      "symbols": "M≥4; nearest-neighbor approximation.",
      "when": "Accurate at sufficiently high SNR; Gray BER is approximately Ps/log2M, not an exact identity for arbitrary SNR.",
      "example": "For QPSK, the argument becomes √(Es/N0)."
    },
    {
      "id": "full-qam",
      "category": "Detection and digital modulation",
      "title": "Square M-QAM Gray BER approximation",
      "equation": "P_b≈frac{4}{log_2M}(1−frac{1}{sqrt{M}})Q(sqrt{frac{3log_2M}{M−1}frac{E_b}{N_0}})",
      "symbols": "Square QAM, M=4,16,64,…; Gray labeling.",
      "when": "Nearest-neighbor/high-SNR approximation for ideal coherent AWGN reception.",
      "example": "For 16-QAM the prefactor is 3/4 and the Q argument is √(0.8Eb/N0)."
    },
    {
      "id": "full-ebsnr",
      "category": "Detection and digital modulation",
      "title": "SNR, bit energy and decibel units",
      "equation": "frac{E_b}{N_0}=SNRfrac{B}{R_b};P_{dBm}=10log_{10}(frac{P}{1mW});P_{dBW}=P_{dBm}−30",
      "symbols": "N=N0B for the chosen noise-bandwidth convention.",
      "when": "Use linear SNR in the energy relation and consistent bandwidth definitions.",
      "example": "1 W is 30 dBm and 0 dBW."
    },
    {
      "id": "full-cdma",
      "category": "Multiple access",
      "title": "CDMA orthogonality and processing gain",
      "equation": "Σ_{n=0}^{N−1}c_i[n]c_j[n]=0 for i≠j;G_p≈frac{R_{chip}}{R_{bit}}",
      "symbols": "Length-N signatures; real chips for the displayed inner product.",
      "when": "At most N nonzero mutually orthogonal signatures in N dimensions; asynchronous channels can destroy orthogonality.",
      "example": "Length-eight Walsh codes support eight orthogonal synchronous signatures."
    },
    {
      "id": "full-pam",
      "category": "Detection and digital modulation",
      "title": "M-PAM error probability",
      "equation": "P_s=2(1−frac{1}{M})Q(sqrt{frac{6E_s}{(M^2−1)N_0}})",
      "symbols": "Equally likely equally spaced real PAM levels; AWGN PSD N0/2.",
      "when": "Ideal coherent nearest-neighbor symbol detector. For M=2 this reduces to BPSK.",
      "example": "For M=2, Ps=Q(√(2Es/N0))."
    },
    {
      "id": "full-qerfc",
      "category": "Detection and digital modulation",
      "title": "Q function and Euclidean-distance detection",
      "equation": "Q(x)=frac{1}{2}erfc(frac{x}{sqrt{2}});P_{binary}=Q(sqrt{frac{d^2}{2N_0}})",
      "symbols": "d: Euclidean distance between two deterministic signal vectors.",
      "when": "Binary equal-prior AWGN detection with real orthonormal noise components of variance N0/2; not a generic exact M-ary union bound.",
      "example": "Antipodal signals have d²=4Eb, giving coherent BPSK BER."
    },
    {
      "id": "full-energylimit",
      "category": "Source and channel coding",
      "title": "AWGN spectral efficiency and minimum bit energy",
      "equation": "η=frac{C}{B}=log_2(1+SNR);frac{E_b}{N_0}=frac{2^η−1}{η};lim_{η→0}frac{E_b}{N_0}=ln2",
      "symbols": "Eb uses the rate C at the Shannon boundary.",
      "when": "Ideal AWGN capacity limit with unlimited coding complexity and vanishing error probability. Practical uncoded links need more energy.",
      "example": "The wideband limit ln2≈0.693 corresponds to about −1.59 dB."
    },
    {
      "id": "full-coherent",
      "category": "Analog modulation",
      "title": "Coherent DSB demodulation phase error",
      "equation": "2m(t)cosω_ct·cos(ω_ct+φ)→m(t)cosφ",
      "symbols": "Arrow denotes ideal low-pass removal of the term near 2fc.",
      "when": "Assumes message bandwidth is well below carrier frequency and the local oscillator has the correct frequency.",
      "example": "A 90° phase error makes the ideal recovered message zero."
    }
  ],
  "em": [
    {
      "id": "full-coulomb",
      "category": "Electrostatics and magnetostatics",
      "title": "Coulomb’s law, electric field and potential",
      "equation": "F=frac{q_1q_2}{4πεr^2}r̂;E=−∇V;V=frac{q}{4πεr}",
      "symbols": "rhat points from charge 1 toward charge 2 for force on charge 2.",
      "when": "Point charges in an infinite homogeneous isotropic medium; potential referenced to infinity.",
      "example": "Doubling distance reduces point-charge field by 4 and potential by 2."
    },
    {
      "id": "full-gaussfields",
      "category": "Electrostatics and magnetostatics",
      "title": "Gauss-law fields of symmetric charge distributions",
      "equation": "E_{line}=frac{λ_l}{2πεr};E_{sheet}=frac{ρ_s}{2ε};E_{conductor,out}=frac{ρ_s}{ε}",
      "symbols": "λl: infinite line charge density; ρs: infinite sheet surface charge.",
      "when": "Field magnitudes. The nonconducting sheet radiates to both sides; conductor field just outside follows a different boundary condition.",
      "example": "A positive infinite line has outward radial electric field."
    },
    {
      "id": "full-capacitance",
      "category": "Electrostatics and magnetostatics",
      "title": "Parallel-plate and coaxial capacitance",
      "equation": "C_{plates}=frac{εA}{d};C_{coax}′=frac{2πε}{ln(b/a)};W_e=frac{1}{2}∫E·D dV",
      "symbols": "a,b: coax radii with b>a; prime: per unit length.",
      "when": "Neglect fringing for the plates; homogeneous dielectric for coax.",
      "example": "Doubling plate area doubles capacitance."
    },
    {
      "id": "full-biot",
      "category": "Electrostatics and magnetostatics",
      "title": "Biot–Savart and Ampère laws",
      "equation": "dB=frac{μI}{4π}frac{dl×r̂}{r^2};∮H·dl=I_{enclosed};B_{wire}=frac{μI}{2πr}",
      "symbols": "Steady currents; B=μH in a linear medium.",
      "when": "The simple Ampère expression is magnetostatic; displacement current is needed in time-varying problems.",
      "example": "An infinite wire carrying 1 A has H=1/(2πr) A/m."
    },
    {
      "id": "full-lorentz",
      "category": "Electrostatics and magnetostatics",
      "title": "Lorentz force and Faraday induction",
      "equation": "F=q(E+v×B);emf=−frac{dΦ_B}{dt};Φ_B=∫B·dS",
      "symbols": "v: particle velocity; ΦB: linked magnetic flux.",
      "when": "For N identical turns, emf=−N dΦ/dt. Moving circuits require consistent total flux and motional-emf treatment.",
      "example": "A 2 T/s flux-density change through 0.5 m² induces a 1 V magnitude in one turn."
    },
    {
      "id": "full-maxwell",
      "category": "Maxwell equations and boundaries",
      "title": "Maxwell equations in differential form",
      "equation": "∇·D=ρ_v;∇·B=0;∇×E=−frac{∂B}{∂t};∇×H=J+frac{∂D}{∂t}",
      "symbols": "D=εE; B=μH for simple linear isotropic media.",
      "when": "Conduction current J and displacement current ∂D/∂t are separate terms.",
      "example": "In a source-free homogeneous dielectric, ∇·D=0 and ∇×H=∂D/∂t."
    },
    {
      "id": "full-maxwellintegral",
      "category": "Maxwell equations and boundaries",
      "title": "Maxwell equations in integral form",
      "equation": "∯D·dS=Q_{free};∯B·dS=0;∮E·dl=−frac{d}{dt}∫B·dS;∮H·dl=I_{free}+frac{d}{dt}∫D·dS",
      "symbols": "Closed surfaces for the first two expressions; oriented loop/surface pairs for the last two.",
      "when": "Fixed integration surfaces shown; use consistent outward normals and right-hand loop orientation.",
      "example": "Displacement current through a charging capacitor closes the Ampère–Maxwell current balance."
    },
    {
      "id": "full-boundary",
      "category": "Maxwell equations and boundaries",
      "title": "Field boundary conditions",
      "equation": "n̂·(D_2−D_1)=ρ_s;n̂×(E_2−E_1)=0;n̂·(B_2−B_1)=0;n̂×(H_2−H_1)=K_s",
      "symbols": "nhat points from medium 1 to 2; Ks: free surface current density.",
      "when": "Ordinary interfaces without singular magnetic sources or impulsive flux sheets. At a perfect conductor, tangential E vanishes.",
      "example": "With no free surface charge, normal D is continuous even if ε changes."
    },
    {
      "id": "full-poynting",
      "category": "Maxwell equations and boundaries",
      "title": "Poynting vector and power balance",
      "equation": "S=E×H;S_{avg}=frac{1}{2}Re(E×H^*);∇·S+frac{∂u}{∂t}+J·E=0",
      "symbols": "Phasor average uses peak-amplitude phasors; u=(E·D+B·H)/2 in a nondispersive linear medium.",
      "when": "RMS phasors omit the factor 1/2 in average power.",
      "example": "A peak 10 V/m plane wave in free space has average density 100/(2×377) W/m²."
    },
    {
      "id": "full-waveeq",
      "category": "Plane waves",
      "title": "Homogeneous lossless wave equation",
      "equation": "∇^2E=μεfrac{∂^2E}{∂t^2};v_p=frac{1}{sqrt{με}};η=sqrt{frac{μ}{ε}}",
      "symbols": "ε,μ: real positive material constants.",
      "when": "Source-free homogeneous isotropic lossless medium; electric and magnetic fields are transverse for a uniform plane wave.",
      "example": "For μr=1,εr=4, speed is c/2 and impedance is η0/2."
    },
    {
      "id": "full-lossy",
      "category": "Plane waves",
      "title": "Lossy-medium propagation constant",
      "equation": "γ=α+jβ=sqrt{jωμ(σ+jωε)};η=sqrt{frac{jωμ}{σ+jωε}}",
      "symbols": "Time convention e^(jωt); wave factor e^(−γz).",
      "when": "Choose the passive branch with α≥0. σ is conductivity in S/m.",
      "example": "For σ=0, α=0 and β=ω√(με)."
    },
    {
      "id": "full-goodconductor",
      "category": "Plane waves",
      "title": "Good-conductor attenuation and surface resistance",
      "equation": "α≈β≈sqrt{frac{ωμσ}{2}};δ=frac{1}{α};R_s=sqrt{frac{πfμ}{σ}}",
      "symbols": "δ: skin depth; Rs: surface resistance in Ω/square.",
      "when": "Good-conductor approximation requires σ≫ωε and sufficiently thick conductor compared with δ.",
      "example": "Increasing frequency by 4 reduces skin depth by 2."
    },
    {
      "id": "full-fresnel",
      "category": "Plane waves",
      "title": "Normal-incidence reflection and transmission",
      "equation": "Γ_E=frac{η_2−η_1}{η_2+η_1};τ_E=frac{2η_2}{η_1+η_2};T_P=frac{η_1}{η_2}|τ_E|^2",
      "symbols": "Power formula assumes real positive wave impedances.",
      "when": "Plane wave incident from medium 1 to 2 at normal incidence; R=|ΓE|² and R+TP=1 for lossless media.",
      "example": "η2=η1 gives Γ=0 and τ=1."
    },
    {
      "id": "full-snell",
      "category": "Plane waves",
      "title": "Snell’s law, critical and Brewster angles",
      "equation": "n_1sinθ_i=n_2sinθ_t;θ_c=sin^{−1}(frac{n_2}{n_1});tanθ_B=frac{n_2}{n_1}",
      "symbols": "n: refractive index; angles measured from the normal.",
      "when": "Critical angle exists only n1>n2. Brewster expression is for TM incidence between nonmagnetic lossless dielectrics.",
      "example": "Air to index 1.5 glass has TM Brewster angle about 56.3°."
    },
    {
      "id": "full-oblique",
      "category": "Plane waves",
      "title": "Oblique Fresnel coefficients in tangential-E convention",
      "equation": "Z_{TE}=frac{η}{cosθ};Z_{TM}=ηcosθ;Γ_t=frac{Z_2−Z_1}{Z_2+Z_1}",
      "symbols": "Z1,Z2: polarization-specific wave impedances at the two ray angles.",
      "when": "Γt is the ratio of reflected to incident tangential Cartesian electric components. A reflected polarization-basis amplitude can have a different sign.",
      "example": "At normal incidence both TE and TM reduce to the usual impedance reflection formula."
    },
    {
      "id": "full-polarization",
      "category": "Plane waves",
      "title": "Polarization ellipse and circular condition",
      "equation": "E_x=A_xcosψ;E_y=A_ycos(ψ+δ);A_x=A_y,δ=±frac{π}{2}",
      "symbols": "ψ: common time/space phase; δ: relative component phase.",
      "when": "Equal nonzero amplitudes and quadrature give circular polarization; δ=0 or π gives linear. Handedness requires a stated viewing/time convention.",
      "example": "Equal amplitudes with a 90° offset produce a circular tip trajectory."
    },
    {
      "id": "full-velocities",
      "category": "Plane waves",
      "title": "Phase and group velocity",
      "equation": "v_p=frac{ω}{β};v_g=frac{dω}{dβ}",
      "symbols": "β: propagation phase constant.",
      "when": "In dispersive media group velocity can differ from phase velocity; pulse distortion can limit its energy-velocity interpretation.",
      "example": "In a nondispersive lossless dielectric, vp=vg=1/√(με)."
    },
    {
      "id": "full-telegrapher",
      "category": "Transmission lines and matching",
      "title": "General transmission-line parameters",
      "equation": "γ=sqrt{(R′+jωL′)(G′+jωC′)};Z_0=sqrt{frac{R′+jωL′}{G′+jωC′}}",
      "symbols": "R′,L′,G′,C′: per-unit-length parameters.",
      "when": "Uniform linear line with e^(jωt) convention; choose passive square-root branches.",
      "example": "For R′=G′=0, Z0=√(L′/C′) and β=ω√(L′C′)."
    },
    {
      "id": "full-standing",
      "category": "Transmission lines and matching",
      "title": "Reflection along a lossless line",
      "equation": "Γ_{in}=Γ_Le^{−j2βl};RL=−20log_{10}|Γ_L|;|Γ_L|=frac{VSWR−1}{VSWR+1}",
      "symbols": "l: distance from load toward generator; RL: return loss.",
      "when": "Lossless line with real Z0; line loss changes reflection magnitude along the line.",
      "example": "Return loss 20 dB gives |Γ|=0.1 and VSWR≈1.222."
    },
    {
      "id": "full-quarterwave",
      "category": "Transmission lines and matching",
      "title": "Special line lengths and matching",
      "equation": "Z_{in,λ/4}=frac{Z_0^2}{Z_L};Z_{in,λ/2}=Z_L;Z_{transformer}=sqrt{R_SR_L}",
      "symbols": "RS,RL: real positive resistances.",
      "when": "Quarter-wave transformer is matched at its design frequency; its impedance is not generally √(complex source×complex load).",
      "example": "Matching 50 Ω to 200 Ω requires a 100 Ω quarter-wave section."
    },
    {
      "id": "full-stubs",
      "category": "Transmission lines and matching",
      "title": "Open and short lossless stubs",
      "equation": "Z_{short}=jZ_0tanβl;Z_{open}=−jZ_0cotβl",
      "symbols": "βl: electrical length.",
      "when": "Use to supply a needed reactive impedance/admittance. Loss and dispersion change exact cancellation.",
      "example": "A λ/8 shorted stub has input impedance jZ0."
    },
    {
      "id": "full-sparams",
      "category": "Transmission lines and matching",
      "title": "Scattering matrix and terminated input",
      "equation": "b=Sa;Γ_{in}=S_{11}+frac{S_{12}S_{21}Γ_L}{1−S_{22}Γ_L}",
      "symbols": "a,b: incident/reflected power-normalized waves for real reference impedances.",
      "when": "Reciprocal network has S12=S21 with consistent normalization; lossless S is unitary.",
      "example": "A matched output ΓL=0 leaves Γin=S11."
    },
    {
      "id": "full-smith",
      "category": "Transmission lines and matching",
      "title": "Normalized impedance and Smith-chart reflection",
      "equation": "z=frac{Z}{Z_0};Γ=frac{z−1}{z+1};z=frac{1+Γ}{1−Γ};y=frac{1}{z}",
      "symbols": "z,y: normalized impedance and admittance.",
      "when": "A half-turn around the chart maps an impedance point to its admittance point. Rotate toward generator by 2βl in reflection phase.",
      "example": "z=1 maps to chart center Γ=0."
    },
    {
      "id": "full-rectguide",
      "category": "Waveguides and optical fibers",
      "title": "Rectangular-waveguide cutoff and propagation",
      "equation": "k_c^2=(frac{mπ}{a})^2+(frac{nπ}{b})^2;f_c=frac{v}{2}sqrt{(frac{m}{a})^2+(frac{n}{b})^2};β=sqrt{ω^2με−k_c^2}",
      "symbols": "a,b: guide dimensions; v=1/√(με).",
      "when": "TE: m,n not both zero; TM: both positive. Propagation requires f>fc. For a>b, dominant mode is TE10.",
      "example": "TE10 cutoff is v/(2a)."
    },
    {
      "id": "full-guideimpedance",
      "category": "Waveguides and optical fibers",
      "title": "TE/TM impedances and guide velocities",
      "equation": "Z_{TE}=frac{η}{sqrt{1−(f_c/f)^2}};Z_{TM}=ηsqrt{1−(f_c/f)^2};v_pv_g=v^2",
      "symbols": "v: wave speed in the filling material.",
      "when": "Uniform lossless guide, propagating mode above cutoff; vp exceeds v while vg is below v.",
      "example": "Near cutoff TE impedance grows without bound and group velocity tends to zero."
    },
    {
      "id": "full-circularguide",
      "category": "Waveguides and optical fibers",
      "title": "Circular-waveguide cutoff",
      "equation": "f_{c,TE_{mn}}=frac{v x′_{mn}}{2πa};f_{c,TM_{mn}}=frac{v x_{mn}}{2πa}",
      "symbols": "a: radius; xmn: zeros of Jm; x′mn: positive nontrivial zeros of Jm′.",
      "when": "Dominant TE11 uses x′11≈1.841; TM01 uses x01≈2.405. Exclude the spurious zero-argument root.",
      "example": "Air-filled TE11 guide has fc≈1.841c/(2πa)."
    },
    {
      "id": "full-fiber",
      "category": "Waveguides and optical fibers",
      "title": "Step-index fiber acceptance and modes",
      "equation": "NA=sqrt{n_1^2−n_2^2};n_0sinθ_{max}=NA;V=frac{2πa}{λ_0}NA;M≈frac{V^2}{2}",
      "symbols": "n1>n2: core/cladding indices; a: core radius; n0: outside index.",
      "when": "M approximation is for many guided modes in a weakly guiding step-index fiber. Single-mode cutoff is V<2.405 for the usual ideal model.",
      "example": "For NA=0.2 in air, acceptance half-angle is about 11.54°."
    },
    {
      "id": "full-directivity",
      "category": "Antennas and arrays",
      "title": "Radiation intensity, directivity and gain",
      "equation": "U=r^2S_{avg};D=frac{4πU_{max}}{P_{rad}};G=η_{rad}D;A_e=frac{Gλ^2}{4π}",
      "symbols": "ηrad: radiation efficiency; Ae: effective aperture.",
      "when": "Reciprocal antenna, matched and polarization-aligned for the aperture relation.",
      "example": "An isotropic lossless antenna has D=G=1."
    },
    {
      "id": "full-dipole",
      "category": "Antennas and arrays",
      "title": "Short and half-wave dipole radiation resistance",
      "equation": "R_{rad,Hertz}=80π^2(frac{l}{λ})^2;R_{rad,short}=20π^2(frac{l}{λ})^2;R_{rad,half}≈73 Ω",
      "symbols": "l: total dipole length.",
      "when": "Hertzian formula assumes uniform current; practical thin short dipole uses triangular current. Half-wave value is an ideal thin resonant approximation.",
      "example": "A half-wave dipole has directivity about 1.64 (2.15 dBi)."
    },
    {
      "id": "full-monopole",
      "category": "Antennas and arrays",
      "title": "Quarter-wave monopole over perfect ground",
      "equation": "R_{rad}≈36.5 Ω;D≈3.28;G_{dBi}=10log_{10}G",
      "symbols": "Quarter-wave thin monopole above an infinite perfect conductor.",
      "when": "Ground loss, finite ground plane and matching change practical impedance and gain.",
      "example": "Ideal directivity is about 5.16 dBi."
    },
    {
      "id": "full-array",
      "category": "Antennas and arrays",
      "title": "Uniform linear-array factor",
      "equation": "AF=Σ_{n=0}^{N−1}e^{jnψ};|AF|=|frac{sin(Nψ/2)}{sin(ψ/2)}|;ψ=kdcosθ+α",
      "symbols": "θ measured from array axis; d: element spacing; α: progressive phase.",
      "when": "Equal amplitudes and isotropic element factor; take the removable-singularity limit N when ψ→2πm. Total pattern includes element pattern.",
      "example": "Broadside steering uses α=0 and maximum at θ=90°."
    },
    {
      "id": "full-linkbudget",
      "category": "Antennas and arrays",
      "title": "Free-space path loss and polarization mismatch",
      "equation": "FSPL=(frac{4πR}{λ})^2;L_{pol}=|ê_r^*·ê_t|^2;P_r=P_tG_tG_rfrac{L_{pol}}{FSPL}",
      "symbols": "R: range; ehat: normalized polarization vectors in a common transverse basis.",
      "when": "Far-field free-space matched link. Obstruction, multipath and mismatch introduce additional losses.",
      "example": "Doubling range adds about 6.02 dB path loss."
    },
    {
      "id": "full-coordinates",
      "category": "Electrostatics and magnetostatics",
      "title": "Cylindrical and spherical integration elements",
      "equation": "dV_{cyl}=ρ dρ dφ dz;dV_{sph}=r^2sinθ dr dθ dφ;dS_{sphere}=r^2sinθ dθ dφ",
      "symbols": "ρ: cylindrical radial coordinate; θ: spherical polar angle from +z.",
      "when": "Do not confuse cylindrical radius ρ with charge density; write bounds for the actual geometry.",
      "example": "Integrating dS over a full radius-r sphere gives 4πr²."
    },
    {
      "id": "full-ehrelation",
      "category": "Plane waves",
      "title": "Uniform plane-wave electric/magnetic relation",
      "equation": "H=frac{1}{η}k̂×E;E=−ηk̂×H",
      "symbols": "khat: unit propagation direction.",
      "when": "Homogeneous isotropic medium and consistent phasors; η can be complex in a lossy medium.",
      "example": "A wave along +z with E along +x has H along +y."
    }
  ],
  "apt": [
    {
      "id": "full-successive",
      "category": "Arithmetic and commercial mathematics",
      "title": "Successive percentage changes",
      "equation": "Net%=a+b+frac{ab}{100}",
      "symbols": "a,b: signed percentage changes, with decreases negative.",
      "when": "Each change uses the current value as its base.",
      "example": "A 10% increase followed by 10% decrease gives a net −1%."
    },
    {
      "id": "full-profit",
      "category": "Arithmetic and commercial mathematics",
      "title": "Profit, loss and discount",
      "equation": "Profit%=100frac{SP−CP}{CP};Discount%=100frac{MP−SP}{MP}",
      "symbols": "SP: selling price; CP: cost price; MP: marked price.",
      "when": "Profit percentage uses cost as base; discount uses marked price.",
      "example": "CP=100,SP=120 give 20% profit."
    },
    {
      "id": "full-simpleinterest",
      "category": "Arithmetic and commercial mathematics",
      "title": "Simple interest and compound amount",
      "equation": "SI=frac{Prt}{100};A=P(1+frac{r}{100m})^{mt}",
      "symbols": "r: annual percentage rate; t: years; m: compounding periods/year.",
      "when": "Use SI for simple interest and A−P for compound interest; match rate and time units.",
      "example": "₹1000 at 10% simple interest for 2 years earns ₹200."
    },
    {
      "id": "full-weighted",
      "category": "Arithmetic and commercial mathematics",
      "title": "Weighted mean and mixture",
      "equation": "x̄=frac{Σw_ix_i}{Σw_i};frac{q_{low}}{q_{high}}=frac{c_{high}−c_{mix}}{c_{mix}−c_{low}}",
      "symbols": "w: weights; q: mixture quantities; c: concentration or price per unit.",
      "when": "Alligation ratio requires cmix between the two end values and linear mixing without volume/concentration complications.",
      "example": "Mixing 10% and 30% solutions equally gives 20%."
    },
    {
      "id": "full-growth",
      "category": "Arithmetic and commercial mathematics",
      "title": "Population growth and depreciation",
      "equation": "P_t=P_0(1+r)^t;V_t=V_0(1−d)^t",
      "symbols": "r,d: fractional periodic growth/depreciation rates.",
      "when": "Rates must be expressed per the same period as t.",
      "example": "A 20% annual depreciation leaves 64% after two years."
    },
    {
      "id": "full-relative",
      "category": "Rates, time and distance",
      "title": "Relative speed and trains",
      "equation": "v_{opp}=v_1+v_2;v_{same}=|v_1−v_2|;t_{cross}=frac{L_1+L_2}{v_{relative}}",
      "symbols": "Lengths and speeds in compatible units.",
      "when": "Train-platform crossing uses train length plus platform length; passing a point uses only train length.",
      "example": "Two 100 m trains approaching at 10 m/s each cross in 10 s."
    },
    {
      "id": "full-equallegs",
      "category": "Rates, time and distance",
      "title": "Equal-distance average speed",
      "equation": "v_{avg}=frac{2v_1v_2}{v_1+v_2}",
      "symbols": "Two legs of equal nonzero distance.",
      "when": "For equal travel times instead, average speed is the arithmetic mean.",
      "example": "Equal distances at 30 and 60 km/h average 40 km/h."
    },
    {
      "id": "full-boats",
      "category": "Rates, time and distance",
      "title": "Boats and streams",
      "equation": "v_{down}=u+v;v_{up}=u−v",
      "symbols": "u: boat speed in still water; v: current speed.",
      "when": "Upstream travel requires u>v; assume steady current along the travel direction.",
      "example": "Downstream 12 and upstream 8 km/h give u=10,v=2 km/h."
    },
    {
      "id": "full-pipes",
      "category": "Rates, time and distance",
      "title": "Work and filling/emptying rates",
      "equation": "frac{1}{T_{net}}=Σ_i frac{1}{T_{fill,i}}−Σ_jfrac{1}{T_{empty,j}}",
      "symbols": "Times correspond to completing one full job/tank.",
      "when": "Assumes constant independent rates; a nonpositive net rate cannot finish filling from empty.",
      "example": "A 3 h inlet and 6 h outlet fill together in 6 h."
    },
    {
      "id": "full-permutation",
      "category": "Counting and probability",
      "title": "Permutations and combinations",
      "equation": "{}^nP_r=frac{n!}{(n−r)!};{}^nC_r=frac{n!}{r!(n−r)!}",
      "symbols": "n distinct objects; select r without replacement.",
      "when": "Permutations count ordered choices; combinations count unordered selections.",
      "example": "Choosing 2 from 5 gives 10 pairs; ordering them gives 20 arrangements."
    },
    {
      "id": "full-repeatcount",
      "category": "Counting and probability",
      "title": "Repetition and circular arrangements",
      "equation": "N_{strings}=m^r;N_{multiset}=frac{n!}{Π_i n_i!};N_{circle}=(n−1)!",
      "symbols": "ni: counts of identical objects.",
      "when": "Circular formula identifies rotations but treats reflections as different; all n people/objects are distinct.",
      "example": "The word LEVEL has 5!/(2!2!)=30 distinct letter arrangements."
    },
    {
      "id": "full-probcomplement",
      "category": "Counting and probability",
      "title": "Complement and at-least-one probability",
      "equation": "P(A^c)=1−P(A);P(atleastone)=1−(1−p)^n",
      "symbols": "n independent trials, each with success probability p.",
      "when": "Independence is needed for the product power; without it compute the no-success event from the actual model.",
      "example": "Three fair coin tosses have at least one head with probability 7/8."
    },
    {
      "id": "full-quadratic",
      "category": "Algebra and logarithms",
      "title": "Quadratic roots and Vieta’s relations",
      "equation": "x=frac{−b±sqrt{b^2−4ac}}{2a};r_1+r_2=−frac{b}{a};r_1r_2=frac{c}{a}",
      "symbols": "a≠0 in ax²+bx+c=0.",
      "when": "Real roots need nonnegative discriminant. A negative root product guarantees opposite real signs.",
      "example": "x²−5x+6 has roots 2 and 3."
    },
    {
      "id": "full-logs",
      "category": "Algebra and logarithms",
      "title": "Logarithm and exponent laws",
      "equation": "log_a(xy)=log_ax+log_ay;log_a(x^r)=rlog_ax;log_ax=frac{ln x}{ln a}",
      "symbols": "Real logs: a>0,a≠1,x>0,y>0.",
      "when": "Logarithms turn multiplicative ratios into additive differences; keep the base clear.",
      "example": "log₂8=3."
    },
    {
      "id": "full-progressions",
      "category": "Algebra and logarithms",
      "title": "Arithmetic and finite geometric progressions",
      "equation": "S_{AP}=frac{n}{2}[2a+(n−1)d];S_{GP}=afrac{1−r^n}{1−r}",
      "symbols": "a: first term; d: AP difference; r: GP ratio.",
      "when": "GP formula needs r≠1; when r=1 the sum is na.",
      "example": "1+3+5+7=16; 1+2+4+8=15."
    },
    {
      "id": "full-planegeo",
      "category": "Geometry and mensuration",
      "title": "Triangle, circle and rectangle areas",
      "equation": "A_{triangle}=frac{bh}{2}=sqrt{s(s−a)(s−b)(s−c)};s=frac{a+b+c}{2};A_{circle}=πr^2;C_{circle}=2πr",
      "symbols": "a,b,c: triangle sides; b,h: matching base and altitude.",
      "when": "Heron’s formula requires valid triangle side lengths.",
      "example": "A 3–4–5 right triangle has area 6."
    },
    {
      "id": "full-solids",
      "category": "Geometry and mensuration",
      "title": "Cylinder, cone and sphere volumes",
      "equation": "V_{cylinder}=πr^2h;V_{cone}=frac{πr^2h}{3};V_{sphere}=frac{4πr^3}{3};A_{sphere}=4πr^2",
      "symbols": "r: radius; h: perpendicular height.",
      "when": "Use consistent length units; volume units are cubed and area units squared.",
      "example": "A cone has one-third the volume of a cylinder with the same base and height."
    },
    {
      "id": "full-coordinate",
      "category": "Geometry and mensuration",
      "title": "Distance, slope and line equation",
      "equation": "d=sqrt{(x_2−x_1)^2+(y_2−y_1)^2};m=frac{y_2−y_1}{x_2−x_1};y−y_1=m(x−x_1)",
      "symbols": "Cartesian plane.",
      "when": "Slope expression excludes a vertical line; its equation is x=x1.",
      "example": "The distance from (0,0) to (3,4) is 5."
    },
    {
      "id": "full-trig",
      "category": "Geometry and mensuration",
      "title": "Trigonometric identities",
      "equation": "sin^2θ+cos^2θ=1;sin(2θ)=2sinθcosθ;cos(2θ)=cos^2θ−sin^2θ;tanθ=frac{sinθ}{cosθ}",
      "symbols": "θ: angle with consistent degree/radian use.",
      "when": "Tangent needs cosθ≠0. Use radians in calculus formulas.",
      "example": "sin30°=1/2 and cos60°=1/2."
    },
    {
      "id": "full-sets",
      "category": "Counting and probability",
      "title": "Three-set inclusion–exclusion",
      "equation": "|A∪B∪C|=|A|+|B|+|C|−|A∩B|−|B∩C|−|C∩A|+|A∩B∩C|",
      "symbols": "Vertical bars denote finite set cardinality.",
      "when": "Pairwise intersections include the triple intersection; avoid subtracting it repeatedly without adding it back.",
      "example": "For disjoint sets all intersections vanish and counts add directly."
    },
    {
      "id": "full-clocks",
      "category": "Rates, time and distance",
      "title": "Clock-hand angles",
      "equation": "θ_h=30h+frac{m}{2};θ_m=6m;θ_{small}=min(d,360°−d)",
      "symbols": "h reduced modulo 12; m: minutes; d=|θh−θm| reduced to [0,360).",
      "when": "Ideal continuously moving clock hands.",
      "example": "At 3:00, the smaller hand angle is 90°."
    },
    {
      "id": "full-polygons",
      "category": "Geometry and mensuration",
      "title": "Polygon angle sum and diagonals",
      "equation": "Σθ=(n−2)180°;D=frac{n(n−3)}{2}",
      "symbols": "n≥3: number of vertices in a simple polygon.",
      "when": "Interior-angle sum applies to a simple planar polygon; a regular polygon has equal angles.",
      "example": "A hexagon has angle sum 720° and 9 diagonals."
    }
  ]
};
