export const isro2024Complete = [
  {
    "id": "i24-1",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "math",
    "number": 1,
    "ref": "ISRO January 2024 · Set A · Q1",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 1,
    "prompt": "The matrix[[4,2x,0],[4,0,2],[12,6,0]] is singular. Find x.",
    "answer": "(c) 1",
    "steps": [
      "Expand the determinant along the third column.",
      "It equals−2 det[[4,2x],[12,6]]=−2(24−24x)=48(x−1).",
      "Singularity requires determinant0, hence x=1."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2",
        "3",
        "1",
        "0"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-2",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "math",
    "number": 2,
    "ref": "ISRO January 2024 · Set A · Q2",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 1,
    "prompt": "A3×3 matrix A has eigenvalues1,3,5. Find eigenvalues of A³.",
    "answer": "(c) 1,27,125",
    "steps": [
      "If Av=λv, repeated application gives A³v=λ³v.",
      "The eigenvalues therefore map through the polynomialλ³.",
      "Cubing1,3,5 gives1,27,125."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1,3,5",
        "3,9,15",
        "1,27,125",
        "Insufficient information"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-3",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "math",
    "number": 3,
    "ref": "ISRO January 2024 · Set A · Q3",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 1,
    "prompt": "Differentiate x−x³/3!+x⁵/5!−x⁷/7!+….",
    "answer": "(c) cos x",
    "steps": [
      "The displayed series is the globally convergent Taylor expansion of sin x.",
      "It may be differentiated term by term.",
      "The result1−x²/2!+x⁴/4!−…is cos x."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "sin x",
        "exp x",
        "cos x",
        "tan x"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-4",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "signals",
    "number": 4,
    "ref": "ISRO January 2024 · Set A · Q4",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 2,
    "prompt": "Evaluate∫−∞∞δ(t)sin(t/√2)dt.",
    "answer": "(c) 0",
    "steps": [
      "The Dirac delta samples a continuous multiplier at t=0.",
      "Thus the integral equals sin(0/√2).",
      "Since sin0=0, the value is0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.707",
        "1.414",
        "0",
        "1"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-5",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "signals",
    "number": 5,
    "ref": "ISRO January 2024 · Set A · Q5",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 2,
    "prompt": "Which Fourier-series statement is true?",
    "answer": "(d) Even function: DC and cosine terms",
    "steps": [
      "An even function times an odd sine is odd, whose integral over a symmetric period vanishes.",
      "Thus all sine coefficients are zero for an even waveform.",
      "DC and cosine coefficients may remain, selecting d. An odd waveform has zero DC as well as zero cosine coefficients."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Even function contains only DC and sine terms",
        "Odd function contains only cosine terms",
        "Odd function contains only DC and sine terms",
        "Even function contains only DC and cosine terms"
      ]
    },
    "officialKey": "D"
  },
  {
    "id": "i24-6",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "math",
    "number": 6,
    "ref": "ISRO January 2024 · Set A · Q6",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 2,
    "prompt": "A PDF is pX(x)=2a exp(−b|x|),−∞<x<∞, with positive constants. Find relation between a,b.",
    "answer": "(b) b=4a",
    "steps": [
      "Normalization requires∫pX dx=1.",
      "By symmetry the integral is4a∫0∞exp(−bx)dx=4a/b.",
      "Therefore4a/b=1 and b=4a."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "b=2a",
        "b=4a",
        "b=a/2",
        "b=0"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-7",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "comm",
    "number": 7,
    "ref": "ISRO January 2024 · Set A · Q7",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 3,
    "prompt": "Order dominant noise phenomena as operating frequency increases.",
    "answer": "(b) Flicker→white→transit-time",
    "steps": [
      "Flicker noise has approximately1/f dependence and dominates low frequencies.",
      "At intermediate frequencies approximately flat white noise dominates.",
      "At frequencies approaching carrier transit-time limits, transit-time effects become significant, giving the stated order."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Transit-time,flicker,white",
        "Flicker,white,transit-time",
        "White,flicker,transit-time",
        "Transit-time,white,flicker"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-8",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "comm",
    "number": 8,
    "ref": "ISRO January 2024 · Set A · Q8",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 3,
    "prompt": "A carrier is AM-modulated by three distinct single tones with modulation indices0.5,0.5,0.2. Find effective modulation index.",
    "answer": "(a) √0.54",
    "steps": [
      "For distinct sinusoidal tones, individual sideband powers add.",
      "The equivalent squared index is meff²=Σmi².",
      "Thus meff=√(0.25+0.25+0.04)=√0.54."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "√0.54",
        "√1.2",
        "1.2",
        "√0.9"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-9",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "comm",
    "number": 9,
    "ref": "ISRO January 2024 · Set A · Q9",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 3,
    "prompt": "Eight2kHz-bandlimited signals are sampled at Nyquist rate and each quantized into256 levels, then binary-PCM time multiplexed. Find aggregate bit rate.",
    "answer": "(a) 256kbps",
    "steps": [
      "Each channel needs2×2kHz=4000samples/s.",
      "Each256-level sample requires log2256=8bits.",
      "Total rate is8channels×4000×8=256000bit/s, without framing overhead."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "256kbps",
        "32kbps",
        "128kbps",
        "512kbps"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-10",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "comm",
    "number": 10,
    "ref": "ISRO January 2024 · Set A · Q10",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 4,
    "prompt": "An8PSK waveform combines three parallel I,Q,C streams, each toggling at200Mbps, into3-bit symbols. Find occupied null-to-null bandwidth under rectangular pulse shaping.",
    "answer": "(c) 400MHz",
    "steps": [
      "The three streams produce one joint3-bit symbol per bit interval of a stream, so symbol rate is200Mbaud.",
      "A rectangular symbol has first spectral nulls one symbol rate either side of the carrier.",
      "The resulting null-to-null passband width is2Rs=400MHz."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "600MHz",
        "200MHz",
        "400MHz",
        "133.33MHz"
      ]
    },
    "officialKey": "C",
    "reviewNote": "Bandwidth requires a pulse-shape convention. The official answer uses rectangular-pulse null-to-null bandwidth; ideal Nyquist filtering would give a different occupied width."
  },
  {
    "id": "i24-11",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "comm",
    "number": 11,
    "ref": "ISRO January 2024 · Set A · Q11",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 4,
    "prompt": "A256QAM signal has symbol rate12.5Msymbol/s and carrier-to-noise-density ratio100dBHz. Find Eb/N0 in dB.",
    "answer": "(b) 20dB",
    "steps": [
      "Each256QAM symbol carries8bits, so Rb=12.5×8=100Mbps.",
      "Eb/N0=(C/N0)/Rb, or in dB Eb/N0=C/N0−10log10Rb.",
      "10log10(10^8)=80dBHz; subtracting gives20dB."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "40",
        "20",
        "10",
        "24"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-12",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "em",
    "number": 12,
    "ref": "ISRO January 2024 · Set A · Q12",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 4,
    "prompt": "An antenna alone has10dB return loss. Add a6dB attenuator at its input; attenuator return loss is40dB. Find approximate combined return loss.",
    "answer": "(b) 22dB",
    "steps": [
      "The antenna’s reflected wave traverses the attenuator on both outward and return paths.",
      "This adds twice the6dB attenuation to the observed reflection loss.",
      "Ignoring the much smaller attenuator mismatch, combined return loss is10+12=22dB."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "40dB",
        "22dB",
        "16dB",
        "10dB"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-13",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "devices",
    "number": 13,
    "ref": "ISRO January 2024 · Set A · Q13",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 5,
    "prompt": "Which diode parameter exhibits positive temperature coefficient?",
    "answer": "(a) Reverse leakage current",
    "steps": [
      "Rising temperature increases thermally generated minority carriers.",
      "Reverse saturation/leakage current consequently increases strongly with temperature.",
      "Forward voltage at fixed current usually falls; breakdown coefficient depends on Zener versus avalanche mechanism, so leakage is the generally intended answer."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Reverse leakage current",
        "Reverse breakdown voltage",
        "Forward voltage",
        "None"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-14",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "analog",
    "number": 14,
    "ref": "ISRO January 2024 · Set A · Q14",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 5,
    "prompt": "A transistor operates midway on its DC load line. If current gain increases, where does Q move, under a fixed-base-current bias assumption?",
    "answer": "(c) Up along load line",
    "steps": [
      "At fixed base drive, collector current is approximatelyβIB.",
      "An increase inβ raises collector current.",
      "The external DC circuit still imposes its load line, so VCE decreases as IC increases: movement is up along that line."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Off the load line",
        "Nowhere",
        "Up along the load line",
        "Down along the load line"
      ]
    },
    "officialKey": "C",
    "reviewNote": "The bias circuit is unspecified. The official answer assumes base current does not compensate the gain change; strong bias stabilization could alter the motion."
  },
  {
    "id": "i24-15",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "devices",
    "number": 15,
    "ref": "ISRO January 2024 · Set A · Q15",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 5,
    "prompt": "For a long-channel MOSFET in strong-inversion saturation, relation between ID and VGS is approximately:",
    "answer": "(b) Quadratic",
    "steps": [
      "The ideal saturation law is ID=(1/2)µCox(W/L)(VGS−VT)².",
      "With geometry and material constants fixed, current is proportional to squared overdrive.",
      "Thus the intended dependence is quadratic; weak inversion would use a different model."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Exponential",
        "Quadratic",
        "Logarithmic",
        "Hyperbolic"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-16",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "signals",
    "number": 16,
    "ref": "ISRO January 2024 · Set A · Q16",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 5,
    "prompt": "What is the identity element for discrete convolution?",
    "answer": "(c) Impulseδ[n]",
    "steps": [
      "The convolution(x*δ)[n]=Σkx[k]δ[n−k].",
      "Only k=n contributes, yielding x[n].",
      "Thus convolution withδ leaves every sequence unchanged."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1",
        "0",
        "Impulseδ[n]",
        "Unit stepu[n]"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-17",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "math",
    "number": 17,
    "ref": "ISRO January 2024 · Set A · Q17",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 6,
    "prompt": "X is uniform on[−4,1]. Find mean and variance.",
    "answer": "(a) −1.5,25/12",
    "steps": [
      "A uniform distribution’s mean is(a+b)/2.",
      "Here mean=(−4+1)/2=−1.5.",
      "Its variance is(b−a)²/12=5²/12=25/12."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−1.5,25/12",
        "−1.5,5/12",
        "−2.5,5/12",
        "−2.5,1/4"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-18",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "control",
    "number": 18,
    "ref": "ISRO January 2024 · Set A · Q18",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 6,
    "prompt": "Find the poles of H(s)=1/(s+3)².",
    "answer": "(c) −3,−3",
    "steps": [
      "Poles are denominator zeros not cancelled by the numerator.",
      "The denominator(s+3)² vanishes at s=−3.",
      "The squared factor means multiplicity2, so both poles are−3."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−3,+3",
        "−3",
        "−3,−3",
        "+3"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-19",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "signals",
    "number": 19,
    "ref": "ISRO January 2024 · Set A · Q19",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 6,
    "prompt": "A causal rational discrete-time LTI system is minimum phase when:",
    "answer": "(d) All poles and zeros inside",
    "steps": [
      "A minimum-phase system is stable and has a stable causal inverse.",
      "For a causal rational system, stability requires poles inside the unit circle.",
      "Its inverse swaps poles and zeros, so inverse stability additionally requires zeros inside."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "All poles inside unit circle",
        "All zeros inside unit circle",
        "All poles outside unit circle",
        "All poles and zeros inside unit circle"
      ]
    },
    "officialKey": "D"
  },
  {
    "id": "i24-20",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "signals",
    "number": 20,
    "ref": "ISRO January 2024 · Set A · Q20",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 6,
    "prompt": "An8-point DFT of a real sequence has X0=5,X1=1+j,X2=3+j,X3=2+3j. Find X6.",
    "answer": "(b) 3−j",
    "steps": [
      "Real sequences have conjugate-symmetric DFT:X[N−k]=X[k]*.",
      "For N=8,k=2, the paired index is6.",
      "Hence X6=conj(3+j)=3−j."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2−3j",
        "3−j",
        "1−j",
        "1+j"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-21",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "signals",
    "number": 21,
    "ref": "ISRO January 2024 · Set A · Q21",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 7,
    "prompt": "Given x[n]↔X(e^jω),y[n]↔Y(e^jω), choose the printed identities that are NOT TRUE. The original alternatives are shown.",
    "answer": "Official final key accepts (b) and (c)",
    "steps": [
      "A time delay requires exp(−jωnd)X(e^jω); printed b has wrong sign and omits X.",
      "Frequency shifting requires modulation exp(jω0n)x[n]. Printed c omits n in the exponent, leaving only a constant multiplier.",
      "Linearity and time-convolution/product duality in a,d are valid. Thus both b,c are defective as printed, matching the revised key."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "ax[n]+by[n]↔aX(e^jω)+bY(e^jω)",
        "x[n−nd]↔exp(jωnd)(e^jω)",
        "exp(jω0)x[n]↔X(e^j(ω−ω0))",
        "x[n]*y[n]↔X(e^jω)Y(e^jω)"
      ]
    },
    "officialKey": "B|C",
    "figure": "pyq-figures/i24-21.png",
    "figureAlt": "Original ISRO January 2024 Set A Q21 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-22",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "signals",
    "number": 22,
    "ref": "ISRO January 2024 · Set A · Q22",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 7,
    "prompt": "In a32-point radix-2 decimation-in-time FFT, stages are indexed m=1,…,5. Which stages can contain a butterfly with twiddle W32^6?",
    "answer": "(b) 4,5",
    "steps": [
      "At stage m the twiddle exponents are multiples of N/2^m.",
      "For N=32 the stage spacings are16,8,4,2,1.",
      "Exponent6 appears among stage4 multiples of2 and stage5 integers, but not stage3 multiples of4, so only4,5."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "3,4",
        "4,5",
        "3,4,5",
        "2,4,5"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-23",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "digital",
    "number": 23,
    "ref": "ISRO January 2024 · Set A · Q23",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 8,
    "prompt": "Two8-bit right-shift registers A,B form the shown serial feedback chain, initially A=B2hex and B=0Fhex. Find A after6clocks.",
    "answer": "Excluded from evaluation in final official key",
    "steps": [
      "The final key explicitly excludes this question; do not score any option as official.",
      "The diagram serially feeds A into the second register and loops its serial output to A’s serial input.",
      "The diagram labels both blocks “Shift Reg A” rather than distinctly labeling A and B, and shift/bit orientation must be interpreted before assigning a numeric state. Preserve the withdrawal status rather than inventing a unique official result."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "C8",
        "7D",
        "FB",
        "3E"
      ]
    },
    "officialKey": "Excluded from evaluation",
    "excluded": true,
    "reviewNote": "Official withdrawal is authoritative. The key does not state a specific technical reason beyond its exclusion note.",
    "figure": "pyq-figures/i24-23.png",
    "figureAlt": "Original ISRO January 2024 Set A Q23 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-24",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "comm",
    "number": 24,
    "ref": "ISRO January 2024 · Set A · Q24",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 8,
    "prompt": "Find quantization-noise power for an N-bit uniform quantizer with full-scale input span2B.",
    "answer": "(a) B²/[3·2^(2N)]",
    "steps": [
      "Quantizer step isΔ=2B/2^N.",
      "Under the uniform-error model, variance/noise power isΔ²/12.",
      "Substitute to get4B²/[12·2^(2N)]=B²/[3·2^(2N)]."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "B²/[3·2^(2N)]",
        "2B/[√3·2^N]",
        "B²/[12·2^(2N)]",
        "B/[√3·2^N]"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-25",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "digital",
    "number": 25,
    "ref": "ISRO January 2024 · Set A · Q25",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 8,
    "prompt": "Simplify f(A,B,C,D)=Σm(0,2,4,5,6,7,8,10,13,15) in POS form.",
    "answer": "(d) (B+D̅)(A̅+B̅+D)",
    "steps": [
      "The zeros are indices1,3,9,11,12,14.",
      "Zero group{1,3,9,11} fixes B=0,D=1, giving POS factor(B+D̅).",
      "Zero group{12,14} fixes A=1,B=1,D=0, giving(A̅+B̅+D). Their product is the required function."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(B̅+D)(A̅+B̅+D)",
        "(B+D̅)(A+B̅+D)",
        "(B+D)(B̅+D̅)(A̅+B)",
        "(B+D̅)(A̅+B̅+D)"
      ]
    },
    "officialKey": "D"
  },
  {
    "id": "i24-26",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "signals",
    "number": 26,
    "ref": "ISRO January 2024 · Set A · Q26",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 9,
    "prompt": "Cascade systems have h1[n]=A b1^n u[n],h2[n]=A b2^n u[n]. Effective H(z)=4/(4−z^−2). Select possible parameters.",
    "answer": "(c) A=1,b1=1/2,b2=−1/2",
    "steps": [
      "Each system has transfer A/(1−bi z^−1).",
      "The cascade is A²/[(1−b1z^−1)(1−b2z^−1)].",
      "Given H=1/(1−z^−2/4), choose A=1 and b1=−b2=1/2 to match both numerator and denominator."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "A=1/2,b1=1/2,b2=−1/2",
        "A=2,b1=2,b2=−2",
        "A=1,b1=1/2,b2=−1/2",
        "A=1,b1=1,b2=−1"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-27",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "digital",
    "number": 27,
    "ref": "ISRO January 2024 · Set A · Q27",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 9,
    "prompt": "Only A,B,C and logic constants0,1 are available, not their complements. What minimum number of2:1 MUXs implements F=BC̅+AC̅?",
    "answer": "(a) 2",
    "steps": [
      "Factor F=C̅(A+B).",
      "One MUX with select A and data B,1 implements A+B.",
      "A second with select C, data input0=A+B and input1=0, produces C̅(A+B). No single MUX can form the three-input function with only raw inputs and constants."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2",
        "3",
        "4",
        "5"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-28",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "digital",
    "number": 28,
    "ref": "ISRO January 2024 · Set A · Q28",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 9,
    "prompt": "Which VHDL statement is not true?",
    "answer": "(d) std_logic has at most3values",
    "steps": [
      "IEEE std_logic is a nine-valued logic type.",
      "Its values include U,X,0,1,Z,W,L,H and dash(don’t care).",
      "Therefore the asserted maximum of3 is false, selecting the official d."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Signal assignment can be used inside a FUNCTION",
        "ENTITY PORTS are SIGNALS by default",
        "CLK’EVENT and CLK=1 describes rising edge",
        "std_logic has at most3values"
      ]
    },
    "officialKey": "D",
    "reviewNote": "Statement a also depends on the exact VHDL function rules and signal target context; the official answer targets the unambiguously false three-valued claim. Avoid using a as a blanket coding recommendation."
  },
  {
    "id": "i24-29",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "digital",
    "number": 29,
    "ref": "ISRO January 2024 · Set A · Q29",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 10,
    "prompt": "A4-bit unipolar DAC has10V reference. A comparator threshold is7.5V. As the intended count rises from0, it crosses threshold wrongly on reaching8. One DAC input bit is stuck at1. Which?",
    "answer": "(c) B2",
    "steps": [
      "With the usual DAC step10/16V,7.5V corresponds to code12.",
      "At intended code8(1000), a stuck lower bit must raise the actual code to12(1100).",
      "This requires the4-weight bit B2 to be1. Other single stuck bits give9,10,or unchanged8."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "B0(LSB)",
        "B1",
        "B2",
        "B3(MSB)"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-30",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "networks",
    "number": 30,
    "ref": "ISRO January 2024 · Set A · Q30",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 10,
    "prompt": "Use each of3Ω,6Ω,10Ω,15Ω once as R1,R2,R3,R4. R1,R2 are series with R3||R4 across fixed V. Find maximum/minimum R1-current ratio achievable by permutation.",
    "answer": "(a) 1.8",
    "steps": [
      "R1 current is total current V/[R1+R2+(R3||R4)].",
      "Minimum total resistance is3+6+(10||15)=9+6=15Ω; maximum is10+15+(3||6)=25+2=27Ω.",
      "The current ratio is inverse resistance ratio27/15=1.8."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1.8",
        "3.6",
        "5.4",
        "2.7"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-31",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "signals",
    "number": 31,
    "ref": "ISRO January 2024 · Set A · Q31",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 11,
    "prompt": "A system obeys y[n]=1.8y[n−1]−0.72y[n−2]+x[n]+0.5x[n−1]. Classify its causal realization.",
    "answer": "(b) Unstable",
    "steps": [
      "The transfer denominator is1−1.8z^−1+0.72z^−2.",
      "Its polynomial z²−1.8z+0.72=(z−1.2)(z−0.6).",
      "The causal system has an uncancelled pole1.2 outside the unit circle, making it unstable."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Stable",
        "Unstable",
        "Marginally stable",
        "None"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-32",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "digital",
    "number": 32,
    "ref": "ISRO January 2024 · Set A · Q32",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 11,
    "prompt": "Choose the state diagram for the shown T-flip-flop whose T input is fed by a2:1 MUX selecting its Q and complementary output. The second flip-flop output is printed Q without a complement bar.",
    "answer": "Excluded from evaluation in final official key",
    "steps": [
      "The official final key excludes this question.",
      "If the lower output were Q̅, the MUX would set T=(1−S)Q+S Q̅, giving Qnext=Q XOR T.",
      "But the diagram prints both outputs Q and the choices do not uniquely resolve the intended connection. No official option should be invented."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Figure (a)",
        "Figure (b)",
        "Figure (c)",
        "Figure (d)"
      ]
    },
    "officialKey": "Excluded from evaluation",
    "excluded": true,
    "reviewNote": "The exclusion is explicit; the key supplies no detailed reason. Conditional equations are explanatory only.",
    "figure": "pyq-figures/i24-32.png",
    "figureAlt": "Original ISRO January 2024 Set A Q32 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-33",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "digital",
    "number": 33,
    "ref": "ISRO January 2024 · Set A · Q33",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 12,
    "prompt": "Using one3:8 active-high decoder, how many3-input OR gates are minimally required for a1-bit full adder?",
    "answer": "(c) 4",
    "steps": [
      "A full-adder sum is the OR of decoder outputs for minterms1,2,4,7. Carry is the OR of3,5,6,7.",
      "Each is a four-term OR, requiring two3-input OR gates, for example combine3terms then OR the fourth.",
      "The two sets share only minterm7, so no multi-term intermediate can be reused. Total minimum is4gates."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2",
        "5",
        "4",
        "3"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-34",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "digital",
    "number": 34,
    "ref": "ISRO January 2024 · Set A · Q34",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 12,
    "prompt": "Two4:1 MUXs have selects S1=A,S0=C; upper data X0..X3 and lower X4..X7 feed inputs0,1 of a2:1 MUX selected by B. Choose data constants to implement F=A+B̅.",
    "answer": "(b) 11110011",
    "steps": [
      "For B=0, F=A+1=1, so upper inputs X0..X3 must all be1.",
      "For B=1, F=A. Lower inputs selected by AC=00,01,10,11 must be0,0,1,1.",
      "Concatenate upper1111 and lower0011, yielding11110011."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "11001111",
        "11110011",
        "11010111",
        "00111111"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-35",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "em",
    "number": 35,
    "ref": "ISRO January 2024 · Set A · Q35",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 12,
    "prompt": "For a propagating TE/TM wave in an air-filled waveguide, how does guide wavelength compare with free-space wavelength?",
    "answer": "(a) Longer",
    "steps": [
      "Above cutoff, guide phase constant isβ=k0√(1−(fc/f)²).",
      "It is smaller than free-space k0.",
      "Thusλg=2π/β=λ0/√(1−(fc/f)²)>λ0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Longer",
        "Equal",
        "Shorter",
        "None"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-36",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "em",
    "number": 36,
    "ref": "ISRO January 2024 · Set A · Q36",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 13,
    "prompt": "For S parameters at a matched port, which statement holds?",
    "answer": "(b) S11=0",
    "steps": [
      "S11 is the input reflection coefficient with other ports reference-matched.",
      "A matched input produces no reflected wave.",
      "Therefore S11=0; matching alone does not prescribe transmission S21."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "S11≠0",
        "S11=0",
        "S21=1",
        "S21=0"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-37",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "em",
    "number": 37,
    "ref": "ISRO January 2024 · Set A · Q37",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 13,
    "prompt": "Which mode is supported by homogeneous stripline?",
    "answer": "(a) TEM",
    "steps": [
      "Stripline places a signal conductor between ground planes in a homogeneous dielectric.",
      "This multiconductor geometry supports transverse electric and magnetic fields with no longitudinal component.",
      "Its fundamental mode is true TEM; microstrip’s inhomogeneous dielectric instead gives quasi-TEM."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "TEM",
        "TE",
        "TM",
        "Quasi-TEM"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-38",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "em",
    "number": 38,
    "ref": "ISRO January 2024 · Set A · Q38",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 13,
    "prompt": "For directional coupler powers Pi incident,Po through output,Pf forward coupled,Pr reverse coupled, find linear directivity.",
    "answer": "(a) Pf/Pr",
    "steps": [
      "Directivity quantifies discrimination between desired forward coupling and undesired reverse coupling.",
      "Compare the two coupled-port powers for the same incident excitation.",
      "The linear ratio is Pf/Pr; in decibels it is10log10(Pf/Pr)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Pf/Pr",
        "Pr/Po",
        "Po/Pf",
        "Pi/Pf"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-39",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "em",
    "number": 39,
    "ref": "ISRO January 2024 · Set A · Q39",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 13,
    "prompt": "What can a magic tee produce?",
    "answer": "(a) Sum and difference",
    "steps": [
      "A magic tee combines E-plane and H-plane waveguide junction properties.",
      "Its sum port combines inputs in phase.",
      "Its difference port combines them oppositely, so both sum and difference are available."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Sum and difference of signals",
        "Oscillations",
        "Amplification",
        "Only difference"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-40",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "em",
    "number": 40,
    "ref": "ISRO January 2024 · Set A · Q40",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 14,
    "prompt": "What is TEM-mode cutoff frequency?",
    "answer": "(b) DC",
    "steps": [
      "TEM fields have no longitudinal components and need no nonzero transverse cutoff eigenvalue.",
      "The mode can propagate at arbitrarily low nonzero frequencies in an appropriate multiconductor guide.",
      "Thus its cutoff is0Hz, conventionally labelled DC."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Infinite",
        "DC",
        "2c/λ",
        "None"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-41",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "analog",
    "number": 41,
    "ref": "ISRO January 2024 · Set A · Q41",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 14,
    "prompt": "How is oscillation sustained in transistor oscillators?",
    "answer": "(b) Positive feedback",
    "steps": [
      "Feed a fraction of output back in phase with the input.",
      "At the oscillation frequency, the loop phase is an integer multiple of 360° and the startup loop gain exceeds one.",
      "Positive feedback builds the oscillation; nonlinear amplitude limiting eventually reduces effective loop gain to one."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Negative feedback",
        "Positive feedback",
        "Tank circuit alone",
        "None"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-42",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "comm",
    "number": 42,
    "ref": "ISRO January 2024 · Set A · Q42",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 14,
    "prompt": "Three cascaded amplifier stages each have power gain 10 dB and noise figure 10 dB. Find overall noise figure in dB.",
    "answer": "(a) 10.99 dB",
    "steps": [
      "Convert to linear values: each gain G=10 and each noise factor F=10.",
      "Friis gives Ftotal=10+(10−1)/10+(10−1)/100=10.99.",
      "The noise figure is 10 log10(10.99)=10.410 dB; the official answer a instead reports the linear noise factor 10.99."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10.99",
        "10",
        "1.09",
        "10.9"
      ]
    },
    "officialKey": "A",
    "reviewNote": "The printed dB wording and official numerical answer disagree. 10.99 is the linear noise factor; 10.410 dB is its correct decibel conversion."
  },
  {
    "id": "i24-43",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "devices",
    "number": 43,
    "ref": "ISRO January 2024 · Set A · Q43",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 14,
    "prompt": "What limits operating frequency in a bipolar semiconductor device?",
    "answer": "(c) Both",
    "steps": [
      "Junction capacitances require finite charging time.",
      "Carrier mobility and transit time limit how quickly carriers cross the device.",
      "Both effects constrain high-frequency operation."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Junction parasitics",
        "Electron mobility",
        "Both",
        "Neither"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-44",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "devices",
    "number": 44,
    "ref": "ISRO January 2024 · Set A · Q44",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 15,
    "prompt": "Which offers the highest operating speed?",
    "answer": "Excluded from evaluation",
    "steps": [
      "The final official key withdraws this question.",
      "Device speed depends on geometry, parasitics, bias and technology; device names alone do not specify a universal ranking.",
      "Retain the withdrawal instead of scoring a guessed choice."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "BJT",
        "FET",
        "Enhancement MOSFET",
        "Depletion MOSFET"
      ]
    },
    "officialKey": "Excluded from evaluation",
    "excluded": true
  },
  {
    "id": "i24-45",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "devices",
    "number": 45,
    "ref": "ISRO January 2024 · Set A · Q45",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 15,
    "prompt": "A Gunn diode at high frequency is which type of device?",
    "answer": "(a) Negative resistance",
    "steps": [
      "Transferred electrons enter a lower-mobility conduction-band valley as field rises.",
      "In its operating region, increasing voltage can reduce current.",
      "This negative differential resistance supports microwave oscillation."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Negative resistance",
        "Positive resistance",
        "High noise",
        "None"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-46",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "devices",
    "number": 46,
    "ref": "ISRO January 2024 · Set A · Q46",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 15,
    "prompt": "What advantages can GaAs offer over silicon?",
    "answer": "(d) All of these",
    "steps": [
      "GaAs has high electron mobility, supporting rapid carrier transport.",
      "Its mobility and direct-gap material properties support high-frequency devices.",
      "Its larger bandgap can reduce intrinsic-carrier-related leakage; the official answer groups these advantages as all of the above."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Higher electron mobility",
        "Higher frequency operation",
        "Lower leakage current",
        "All of these"
      ]
    },
    "officialKey": "D",
    "reviewNote": "Actual leakage and speed depend on the specific process, device and operating conditions."
  },
  {
    "id": "i24-47",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "analog",
    "number": 47,
    "ref": "ISRO January 2024 · Set A · Q47",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 15,
    "prompt": "Find approximate power-added efficiency for VDC=8 V, IDC=5 A, input 0 dBm and output 30 dBm.",
    "answer": "(b) 2.5%",
    "steps": [
      "DC power is 8×5=40 W.",
      "Input power is 0.001 W and output power is 1 W.",
      "PAE=100(1−0.001)/40=2.4975%, approximately 2.5%."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "25%",
        "2.5%",
        "40%",
        "75%"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-48",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "analog",
    "number": 48,
    "ref": "ISRO January 2024 · Set A · Q48",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 16,
    "prompt": "Which amplifier class offers the highest ideal efficiency among these?",
    "answer": "(d) Class F",
    "steps": [
      "Class A dissipates power throughout the cycle and class B has ideal maximum efficiency π/4.",
      "Class C uses a reduced conduction angle; class F additionally shapes voltage and current using harmonic terminations.",
      "Ideal class-F waveform shaping can approach 100%, making F the intended choice."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "A",
        "B",
        "C",
        "F"
      ]
    },
    "officialKey": "D"
  },
  {
    "id": "i24-49",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "analog",
    "number": 49,
    "ref": "ISRO January 2024 · Set A · Q49",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 16,
    "prompt": "What is a principal advantage of SMPS over linear supplies?",
    "answer": "(a) Higher efficiency",
    "steps": [
      "A linear regulator dissipates approximately (Vin−Vout)I as heat.",
      "An SMPS mainly switches between low-loss on and off states.",
      "This generally provides higher efficiency; ripple and regulation require a specific design comparison."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Higher efficiency",
        "Always better ripple",
        "Always better regulation",
        "None"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-50",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "networks",
    "number": 50,
    "ref": "ISRO January 2024 · Set A · Q50",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 16,
    "prompt": "Which are DC/DC converter topologies?",
    "answer": "(d) All",
    "steps": [
      "Buck converts to a lower DC voltage.",
      "Boost converts to a higher DC voltage.",
      "Flyback transfers stored magnetic energy, commonly with isolation; all are converter topologies."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Buck",
        "Boost",
        "Flyback",
        "All"
      ]
    },
    "officialKey": "D"
  },
  {
    "id": "i24-51",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "comm",
    "number": 51,
    "ref": "ISRO January 2024 · Set A · Q51",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 16,
    "prompt": "P(0)=0.2, P(1)=0.8. The shown binary channel has crossover probabilities P(1|0)=0.3 and P(0|1)=0.4. Find average error probability.",
    "answer": "(b) 0.38",
    "steps": [
      "An error occurs on either 0→1 or 1→0.",
      "Weight each crossover by its source probability.",
      "Pe=0.2×0.3+0.8×0.4=0.06+0.32=0.38."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.35",
        "0.38",
        "0.12",
        "0.62"
      ]
    },
    "officialKey": "B",
    "figure": "pyq-figures/i24-51.png",
    "figureAlt": "Original ISRO January 2024 Set A Q51 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-52",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "comm",
    "number": 52,
    "ref": "ISRO January 2024 · Set A · Q52",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 17,
    "prompt": "What minimum distance guarantees correction of up to five bit errors?",
    "answer": "(c) 11",
    "steps": [
      "Unique correction requires disjoint Hamming balls around codewords.",
      "For correction radius t, require dmin≥2t+1.",
      "With t=5, the minimum is 11."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "6",
        "5",
        "11",
        "10"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-53",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "analog",
    "number": 53,
    "ref": "ISRO January 2024 · Set A · Q53",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 17,
    "prompt": "An inverting Schmitt trigger saturates at ±5 V. Its positive-input feedback divider is 10 kΩ from output and 5 kΩ to ground. Find lower threshold.",
    "answer": "(d) −1.667 V",
    "steps": [
      "The positive-input voltage is Vout×5/(10+5)=Vout/3.",
      "At negative saturation, Vout=−5 V.",
      "The lower switching threshold is therefore −5/3=−1.667 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "5 V",
        "−5 V",
        "1.667 V",
        "−1.667 V"
      ]
    },
    "officialKey": "D",
    "figure": "pyq-figures/i24-53.png",
    "figureAlt": "Original ISRO January 2024 Set A Q53 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-54",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "analog",
    "number": 54,
    "ref": "ISRO January 2024 · Set A · Q54",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 17,
    "prompt": "A comparator has 4 V peak-to-peak zero-mean sine input at + and 1 V reference at −. Find high-output duty cycle.",
    "answer": "(a) 33.33%",
    "steps": [
      "Input peak amplitude is 2 V, so output is high when 2 sinθ>1.",
      "This holds between θ=π/6 and 5π/6.",
      "The high interval is 2π/3 out of 2π, giving 1/3=33.33%."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "33.33%",
        "66.66%",
        "25%",
        "50%"
      ]
    },
    "officialKey": "A",
    "figure": "pyq-figures/i24-54.png",
    "figureAlt": "Original ISRO January 2024 Set A Q54 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-55",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "analog",
    "number": 55,
    "ref": "ISRO January 2024 · Set A · Q55",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 18,
    "prompt": "For the shown inverting differentiator with RC=1 and unit-slope triangular input, select output waveform.",
    "answer": "(b) −1 then +1 square wave",
    "steps": [
      "An ideal differentiator gives Vo=−RC dVi/dt.",
      "On each rising ramp the slope is +1, hence Vo=−1.",
      "On falling ramps the slope is −1, hence Vo=+1; this is waveform b."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "+1 then −1 square wave",
        "−1 then +1 square wave",
        "±0.1 square wave",
        "Unchanged triangle"
      ]
    },
    "officialKey": "B",
    "figure": "pyq-figures/i24-55.png",
    "figureAlt": "Original ISRO January 2024 Set A Q55 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-56",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "digital",
    "number": 56,
    "ref": "ISRO January 2024 · Set A · Q56",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 19,
    "prompt": "Two identical 4-bit DACs feed an inverting summer. The low-nibble input resistor and feedback resistor are each 16 kΩ. Find high-nibble resistor R for 8-bit weighting.",
    "answer": "(c) 1 kΩ",
    "steps": [
      "Adjacent nibbles differ in binary significance by 2⁴=16.",
      "The low-nibble gain magnitude is 16/16=1; the high-nibble gain must therefore be 16.",
      "Since its gain is 16 kΩ/R, set R=1 kΩ."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "8 kΩ",
        "0.25 kΩ",
        "1 kΩ",
        "0.5 kΩ"
      ]
    },
    "officialKey": "C",
    "figure": "pyq-figures/i24-56.png",
    "figureAlt": "Original ISRO January 2024 Set A Q56 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-57",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "control",
    "number": 57,
    "ref": "ISRO January 2024 · Set A · Q57",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 19,
    "prompt": "What is E(s)/R(s) for a negative-feedback loop with forward path G and feedback H?",
    "answer": "(a) 1/(1+GH)",
    "steps": [
      "The error is E=R−HY.",
      "Substitute Y=GE to obtain E=R−HGE.",
      "Therefore E/R=1/(1+GH)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1/(1+GH)",
        "G/(1+GH)",
        "GH/(1+GH)",
        "−1/(1+GH)"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-58",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "control",
    "number": 58,
    "ref": "ISRO January 2024 · Set A · Q58",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 19,
    "prompt": "Classify G(s)=(4s+1)/(4s²+1).",
    "answer": "(c) Marginally stable",
    "steps": [
      "The denominator vanishes at s=±j/2.",
      "These are simple imaginary-axis poles, so the unforced modes neither grow nor decay.",
      "It is marginally stable internally, as intended by the key; resonant bounded inputs make it fail BIBO stability."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Unstable",
        "Stable",
        "Marginally stable",
        "Cannot determine"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-59",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "control",
    "number": 59,
    "ref": "ISRO January 2024 · Set A · Q59",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 20,
    "prompt": "Which listed shape is intended for the delay transfer e^(−3s)?",
    "answer": "Official (a), with a plotting qualification",
    "steps": [
      "At s=jω, e^(−j3ω) has magnitude one and phase −3ω radians.",
      "Phase plotted against linear ω is a straight line of negative slope.",
      "The magnitude Bode plot is flat at 0 dB; phase against logarithmic frequency is curved, so the printed term Bode plot is imprecise."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Straight line with negative slope",
        "Straight line with positive slope",
        "Resonant curve",
        "Two straight parts"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-60",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "control",
    "number": 60,
    "ref": "ISRO January 2024 · Set A · Q60",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 20,
    "prompt": "For a contour enclosing n zeros and m poles, what is the argument-principle integral used in Nyquist analysis?",
    "answer": "(c) 2πj(n−m)",
    "steps": [
      "For a meromorphic F with no contour zeros or poles, integrate its logarithmic derivative F′/F.",
      "Each enclosed zero contributes its multiplicity and each pole subtracts its order.",
      "A counterclockwise contour therefore gives ∮F′/F ds=2πj(n−m)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2πj",
        "2πj(m−n)",
        "2πj(n−m)",
        "2πjm"
      ]
    },
    "officialKey": "C",
    "reviewNote": "The source prints ∮G(s)ds without defining G as a logarithmic derivative. The zero-minus-pole formula applies to F′/F, not to an arbitrary transfer function G."
  },
  {
    "id": "i24-61",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "control",
    "number": 61,
    "ref": "ISRO January 2024 · Set A · Q61",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 20,
    "prompt": "For ẍ+3ẋ−9x=3 sinωt, use state [x,ẋ]ᵀ. Find A.",
    "answer": "(c) [[0,1],[9,−3]]",
    "steps": [
      "Set x1=x and x2=ẋ, hence ẋ1=x2.",
      "Rearrange the equation: ẋ2=9x1−3x2+3 sinωt.",
      "The state coefficients form A=[[0,1],[9,−3]]."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "[[0,1],[−9,−3]]",
        "[[0,−1],[9,−3]]",
        "[[0,1],[9,−3]]",
        "[[0,−1],[−9,3]]"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-62",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "control",
    "number": 62,
    "ref": "ISRO January 2024 · Set A · Q62",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 21,
    "prompt": "Which matrix tests controllability of ẋ=Ax+Bu?",
    "answer": "(a) [B,AB,A²B,…]",
    "steps": [
      "An input influences states first through B.",
      "Successive state propagation introduces AB,A²B and higher powers.",
      "The standard controllability matrix is [B,AB,…,A^(n−1)B]; full row rank n establishes controllability."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "[B,AB,A²B,…]",
        "[B,BA,BA²,…]",
        "[B,AB,2AB,…]",
        "[B,−AB,−A²B,…]"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-63",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "control",
    "number": 63,
    "ref": "ISRO January 2024 · Set A · Q63",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 21,
    "prompt": "Select the standard ideal PID transfer function.",
    "answer": "(c) Kp+Kd s+Ki/s",
    "steps": [
      "Proportional action multiplies error by Kp.",
      "Derivative action contributes Kd s in Laplace form.",
      "Integral action contributes Ki/s; add the three terms."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Kp+Kd s+Ki s²",
        "Kp+Kd/s+Ki/s²",
        "Kp+Kd s+Ki/s",
        "Kp s+Kd s²+Ki s"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-64",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "control",
    "number": 64,
    "ref": "ISRO January 2024 · Set A · Q64",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 21,
    "prompt": "For a₂s²+a₁s+a₀ with positive leading coefficient, what coefficient condition ensures strict stability?",
    "answer": "(a) All positive",
    "steps": [
      "The second-order Routh first column is a₂,a₁,a₀.",
      "Strict stability requires no sign change and no zero entries.",
      "With a₂ normalized positive, a₁ and a₀ must also be positive."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "All positive",
        "All negative",
        "a₂,a₁ positive; a₀ negative",
        "a₂ negative; a₁,a₀ positive"
      ]
    },
    "officialKey": "A",
    "reviewNote": "Multiplying a polynomial by −1 leaves its roots unchanged; all-negative coefficients are also stable before positive-leading-coefficient normalization."
  },
  {
    "id": "i24-65",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "em",
    "number": 65,
    "ref": "ISRO January 2024 · Set A · Q65",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 22,
    "prompt": "Two infinite wires 5 m apart carry opposite 10 A currents. P lies between them, 1 m from one wire. Find H at P.",
    "answer": "(a) 50/(8π) A/m",
    "steps": [
      "The distances are 1 m and 4 m.",
      "The right-hand rule shows that their fields reinforce at an intervening point.",
      "H=10/(2π)×(1+1/4)=50/(8π) A/m."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "50/(8π) A/m",
        "5/(8π) A/m",
        "10/(8π) A/m",
        "25/(8π) A/m"
      ]
    },
    "officialKey": "A",
    "figure": "pyq-figures/i24-65.png",
    "figureAlt": "Original ISRO January 2024 Set A Q65 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-66",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "em",
    "number": 66,
    "ref": "ISRO January 2024 · Set A · Q66",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 22,
    "prompt": "A line has Z0=50 Ω and open-circuit input impedance 100+j150 Ω. Find short-circuit input impedance.",
    "answer": "(a) 7.69−j11.54 Ω",
    "steps": [
      "For the same line length, Zoc=Z0 cothγl and Zsc=Z0 tanhγl.",
      "Their product is Z0².",
      "Thus Zsc=2500/(100+j150)=7.692−j11.538 Ω."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "7.69−j11.54 Ω",
        "2−j50 Ω",
        "50 Ω",
        "100+j150 Ω"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-67",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "control",
    "number": 67,
    "ref": "ISRO January 2024 · Set A · Q67",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 23,
    "prompt": "Classify the system with characteristic equation s²+2s+2=0.",
    "answer": "(c) Underdamped",
    "steps": [
      "Compare with s²+2ζωn s+ωn².",
      "Here ωn=√2 and ζ=1/√2, between zero and one.",
      "Equivalently the poles are −1±j; decaying oscillations indicate underdamping."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Overdamped",
        "Critically damped",
        "Underdamped",
        "Undamped"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-68",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "networks",
    "number": 68,
    "ref": "ISRO January 2024 · Set A · Q68",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 23,
    "prompt": "A battery supplies 2 A for 20 min while terminal voltage falls linearly from 12 V to 10 V. Find energy delivered.",
    "answer": "(a) 26.4 kJ",
    "steps": [
      "The average voltage under a linear fall is (12+10)/2=11 V.",
      "Time is 20×60=1200 s.",
      "Energy=I Vavg t=2×11×1200=26400 J=26.4 kJ."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "26.4 kJ",
        "12.2 kJ",
        "120.5 kJ",
        "24 kJ"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-69",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "networks",
    "number": 69,
    "ref": "ISRO January 2024 · Set A · Q69",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 23,
    "prompt": "In the shown isolated right loop, a downward dependent current source 2V1 and a downward resistor current I1=10 A meet at the top node. Find Vs=V1.",
    "answer": "(a) −5 V",
    "steps": [
      "No independent current enters the isolated top node.",
      "KCL therefore gives 2V1+I1=0 for the indicated downward current references.",
      "With I1=10 A, V1=−5 V; the parallel source on the left fixes Vs=V1."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−5 V",
        "10 V",
        "15 V",
        "20 V"
      ]
    },
    "officialKey": "A",
    "figure": "pyq-figures/i24-69.png",
    "figureAlt": "Original ISRO January 2024 Set A Q69 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-70",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "networks",
    "number": 70,
    "ref": "ISRO January 2024 · Set A · Q70",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 24,
    "prompt": "Find VA in the shown 8 A source, 8 Ω shunt, 2 Ω link, and parallel 10 Ω and (16 V source + 5 Ω) load network.",
    "answer": "(a) 24 V",
    "steps": [
      "Let the left top node be VL and the right node be VA. KCL gives VL/8+(VL−VA)/2=8.",
      "At VA, (VA−VL)/2+VA/10+(VA−16)/5=0.",
      "These reduce to 5VL−4VA=64 and −5VL+8VA=32; hence 4VA=96 and VA=24 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "24 V",
        "12 V",
        "10 V",
        "8 V"
      ]
    },
    "officialKey": "A",
    "figure": "pyq-figures/i24-70.png",
    "figureAlt": "Original ISRO January 2024 Set A Q70 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-71",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "devices",
    "number": 71,
    "ref": "ISRO January 2024 · Set A · Q71",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 24,
    "prompt": "Where on a solar cell V–I characteristic is maximum-power operation?",
    "answer": "(b) Knee",
    "steps": [
      "Output power is the product VI.",
      "Near short circuit voltage is small; near open circuit current is small.",
      "The maximum product occurs near the knee between the constant-current and steep falling regions."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Flat part",
        "Knee",
        "Falling part",
        "None"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-72",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "devices",
    "number": 72,
    "ref": "ISRO January 2024 · Set A · Q72",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 24,
    "prompt": "Common temperature-measuring thermistors usually have which coefficient?",
    "answer": "(b) Negative",
    "steps": [
      "Typical measurement thermistors are NTC semiconductor resistors.",
      "Heating increases thermally activated carrier density.",
      "Their resistance decreases with temperature, giving a negative coefficient."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Positive",
        "Negative",
        "Zero",
        "Infinite"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-73",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "em",
    "number": 73,
    "ref": "ISRO January 2024 · Set A · Q73",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 25,
    "prompt": "Flux changes at 0.1 Wb/s in a 30-turn coil. Find signed induced EMF.",
    "answer": "(b) −3 V",
    "steps": [
      "Faraday’s law is e=−N dΦ/dt.",
      "Substitute N=30 and dΦ/dt=0.1 Wb/s.",
      "The result is −3 V; its sign expresses Lenz’s law for the chosen reference."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "30 V",
        "−3 V",
        "300 V",
        "−300 V"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-74",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "networks",
    "number": 74,
    "ref": "ISRO January 2024 · Set A · Q74",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 25,
    "prompt": "An unsaturated DC series motor current rises from 10 A to 12 A. Find percentage torque increase.",
    "answer": "(a) 44%",
    "steps": [
      "Motor torque is proportional to flux times armature current.",
      "Before saturation, series-field flux is proportional to that same current, so T∝I².",
      "Increase=[(12/10)²−1]×100=44%."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "44%",
        "40%",
        "20%",
        "16%"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-75",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "networks",
    "number": 75,
    "ref": "ISRO January 2024 · Set A · Q75",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 25,
    "prompt": "A DC shunt generator supplies 450 A at 230 V, with Rsh=50 Ω and Ra=0.025 Ω. Find armature voltage drop.",
    "answer": "(a) 11.36 V",
    "steps": [
      "Shunt field current is 230/50=4.6 A.",
      "Armature current supplies load and field: Ia=450+4.6=454.6 A.",
      "The drop IaRa=454.6×0.025=11.365 V, matching a to the stated precision."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "11.36 V",
        "22.7 V",
        "31.6 V",
        "38.4 V"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-76",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "networks",
    "number": 76,
    "ref": "ISRO January 2024 · Set A · Q76",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 25,
    "prompt": "An induction motor has 50 Hz supply and 4% slip. Find rotor current frequency.",
    "answer": "(c) 2 Hz",
    "steps": [
      "Rotor electrical frequency equals slip times stator frequency.",
      "Convert 4% to s=0.04.",
      "fr=0.04×50=2 Hz."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "48 Hz",
        "4 Hz",
        "2 Hz",
        "16 Hz"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-77",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "networks",
    "number": 77,
    "ref": "ISRO January 2024 · Set A · Q77",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 26,
    "prompt": "How is a thyristor turned off periodically in a DC chopper?",
    "answer": "(b) Forced commutation",
    "steps": [
      "A conducting SCR turns off when current falls below holding current for sufficient time.",
      "A DC supply has no inherent periodic current zero.",
      "A commutation circuit must force the current to zero or apply reverse bias."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Natural commutation",
        "Forced commutation",
        "Either",
        "Combination"
      ]
    },
    "officialKey": "B"
  },
  {
    "id": "i24-78",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "networks",
    "number": 78,
    "ref": "ISRO January 2024 · Set A · Q78",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 26,
    "prompt": "A Wien bridge can measure which quantity?",
    "answer": "(c) Capacitance",
    "steps": [
      "Its bridge arms include resistance-capacitance combinations.",
      "At balance, their resistive and reactive ratios satisfy known equations.",
      "An unknown capacitance can therefore be determined from the balanced bridge."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Inductance",
        "Conductance",
        "Capacitance",
        "None"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-79",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "networks",
    "number": 79,
    "ref": "ISRO January 2024 · Set A · Q79",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 26,
    "prompt": "What is the Q factor of a series-loss coil?",
    "answer": "(a) XL/R",
    "steps": [
      "Q measures stored reactive energy relative to energy lost per cycle.",
      "For a coil with inductance L and series resistance R, reactive impedance is ωL.",
      "Thus Q=ωL/R=XL/R."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "XL/R",
        "R/XL",
        "XL/R²",
        "XC/XL"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-80",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "devices",
    "number": 80,
    "ref": "ISRO January 2024 · Set A · Q80",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 26,
    "prompt": "After an SCR latches, what happens to its current when the gate pulse is removed?",
    "answer": "(d) Remains set by the load",
    "steps": [
      "The gate initiates regenerative conduction.",
      "Once latched and above holding current, conduction no longer needs the gate pulse.",
      "Removing the gate alone does not change the load-determined anode current."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Zero",
        "Increases",
        "Decreases",
        "Remains set by the load"
      ]
    },
    "officialKey": "D"
  },
  {
    "id": "i24-81",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 81,
    "ref": "ISRO January 2024 · Set A · Q81",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 27,
    "prompt": "Complete the tool analogy: paint is used with a brush; thread is used with what?",
    "answer": "(d) Needle",
    "steps": [
      "The first pair links a consumable material to its application tool.",
      "A brush applies paint.",
      "A needle similarly carries thread in sewing, matching picture 4."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Dress",
        "Scissors",
        "Pen",
        "Needle"
      ]
    },
    "officialKey": "D",
    "figure": "pyq-figures/i24-81.png",
    "figureAlt": "Original ISRO January 2024 Set A Q81 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-82",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 82,
    "ref": "ISRO January 2024 · Set A · Q82",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 28,
    "prompt": "Complete the illustrated shape analogy.",
    "answer": "(b) B",
    "steps": [
      "In the first pair, the large upright triangle becomes right-facing while its vertical hatching is retained.",
      "The small outline marker moves from upper left to upper right and becomes filled.",
      "Apply those changes to the rectangle: a horizontal large rectangle with vertical hatching and a filled horizontal upper-right marker gives B."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "officialKey": "B",
    "figure": "pyq-figures/i24-82.png",
    "figureAlt": "Original ISRO January 2024 Set A Q82 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-83",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 83,
    "ref": "ISRO January 2024 · Set A · Q83",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 28,
    "prompt": "Apply the two indicated symbol operations to the square, circle and crescent.",
    "answer": "(b) B",
    "steps": [
      "The first operator shades the first item; the initial square is already shaded.",
      "The second operator halves the first item’s size.",
      "The circle and crescent remain unchanged, so the small solid square followed by the original other two items is B."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "officialKey": "B",
    "figure": "pyq-figures/i24-83.png",
    "figureAlt": "Original ISRO January 2024 Set A Q83 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-84",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 84,
    "ref": "ISRO January 2024 · Set A · Q84",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 29,
    "prompt": "You are assigned a Saturday retail shift during your son’s planned birthday party. What is the most appropriate response?",
    "answer": "(a) Discuss and arrange approved cover",
    "steps": [
      "Acknowledge the assigned shift rather than ignoring it.",
      "Explain the genuine scheduling conflict promptly to the manager.",
      "Request an approved swap or replacement so both the obligation and staffing need are addressed honestly."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Explain to manager and request an approved replacement",
        "Ask coworkers without discussing with manager",
        "Ignore the schedule",
        "Call in sick despite not being ill"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-85",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 85,
    "ref": "ISRO January 2024 · Set A · Q85",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 30,
    "prompt": "A survey finds two-fifths of applicants admit dishonesty. Why might it underestimate actual dishonesty?",
    "answer": "(a) Dishonest respondents may claim honesty",
    "steps": [
      "The measured fraction counts only admissions.",
      "A dishonest respondent can falsely report being honest.",
      "Such false negatives lower the reported proportion, explaining underestimation."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Some dishonest respondents falsely claim honesty",
        "Honest respondents claim dishonesty",
        "Some admitting dishonesty are very dishonest",
        "Some dishonest people answer honestly"
      ]
    },
    "officialKey": "A"
  },
  {
    "id": "i24-86",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 86,
    "ref": "ISRO January 2024 · Set A · Q86",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 31,
    "prompt": "For the eight-person square-table arrangement in the source, how many people sit between T and Q along the shorter arc?",
    "answer": "(a) 1",
    "steps": [
      "Fix P at a corner and number seats clockwise 0–7. For inward-facing corners, right is anticlockwise, so S is at 5.",
      "Applying the remaining constraints gives clockwise order P,T,Y,Q,R,S,V,W. This satisfies R at a corner, T third right of R, V two positions from P and the stated nonadjacencies.",
      "T is at 1 and Q at 3; Y alone lies between them."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1",
        "2",
        "3",
        "None"
      ]
    },
    "officialKey": "A",
    "figure": "pyq-figures/i24-86.png",
    "figureAlt": "Original ISRO January 2024 Set A Q86 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-87",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 87,
    "ref": "ISRO January 2024 · Set A · Q87",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 31,
    "prompt": "Complete the two missing dominoes in the sequence shown.",
    "answer": "(a) Option 1",
    "steps": [
      "Top counts descend 3,2,1,0, then rise 1,2,3 and descend 2,1.",
      "Bottom counts run 2,1,0,1,2,3,2,1,0.",
      "The two missing dominoes are therefore 3/2 and 2/1, which form option 1."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
      ]
    },
    "officialKey": "A",
    "figure": "pyq-figures/i24-87.png",
    "figureAlt": "Original ISRO January 2024 Set A Q87 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-88",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 88,
    "ref": "ISRO January 2024 · Set A · Q88",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 32,
    "prompt": "In the illustrated number crosses, the outer numbers are (0,6,2,4)→10, (6,2,8,10)→24 and (4,14,10,12)→?.",
    "answer": "(c) 38",
    "steps": [
      "The first centre equals the sum of four outer numbers minus two: 0+6+2+4−2=10.",
      "The same rule gives 6+2+8+10−2=24.",
      "Hence the third centre is 4+14+10+12−2=38."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "45",
        "8",
        "38",
        "48"
      ]
    },
    "officialKey": "C",
    "figure": "pyq-figures/i24-88.png",
    "figureAlt": "Original ISRO January 2024 Set A Q88 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-89",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 89,
    "ref": "ISRO January 2024 · Set A · Q89",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 32,
    "prompt": "Apply the illustrated symbol transformations to select the final pattern.",
    "answer": "Official (c) C",
    "steps": [
      "Read each demonstrated chain as a constraint on the combined symbol operations.",
      "The final-key pattern is C: a light square with one vertical line near the right and a diagonal from upper left to lower right.",
      "The source gives examples of combined operations, not explicit individual operator definitions. Consequently the key can be reported, but a unique rule for every individual symbol is not established by the supplied examples alone."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "A",
        "B",
        "C",
        "D"
      ]
    },
    "officialKey": "C",
    "reviewNote": "The official key is C. Avoid treating an invented interpretation of the operation symbols as a proven unique rule.",
    "figure": "pyq-figures/i24-89.png",
    "figureAlt": "Original ISRO January 2024 Set A Q89 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-90",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 90,
    "ref": "ISRO January 2024 · Set A · Q90",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 33,
    "prompt": "All storybooks have pictures and some have words. Must pictures tell stories better, stories be simple, or some books have both words and pictures?",
    "answer": "(c) III only",
    "steps": [
      "Choose one of the storybooks that has words; such books exist by the premise.",
      "Because every storybook has pictures, that book also has pictures.",
      "Thus some have both. Neither relative storytelling quality nor simplicity is stated."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "I only",
        "II only",
        "III only",
        "None"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-91",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 91,
    "ref": "ISRO January 2024 · Set A · Q91",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 33,
    "prompt": "Exporters allege banks violate an RBI directive. Do suspending officers immediately or stopping RBI directives logically follow?",
    "answer": "(d) Neither",
    "steps": [
      "An allegation needs investigation before responsibility and punishment are determined.",
      "Abandoning regulatory directives does not remedy a possible violation.",
      "Neither proposed action follows; an evidence-based inquiry would be appropriate."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "I only",
        "II only",
        "Either",
        "Neither"
      ]
    },
    "officialKey": "D"
  },
  {
    "id": "i24-92",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 92,
    "ref": "ISRO January 2024 · Set A · Q92",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 34,
    "prompt": "Find the wrong term: 7,8,18,57,228,1165,6996.",
    "answer": "(d) 228",
    "steps": [
      "The intended recurrence multiplies by successive integers and adds that same integer: 7×1+1=8, 8×2+2=18, 18×3+3=57.",
      "Next should be 57×4+4=232, not 228.",
      "Then 232×5+5=1165 and 1165×6+6=6996, confirming the correction."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "7",
        "8",
        "6996",
        "228"
      ]
    },
    "officialKey": "D"
  },
  {
    "id": "i24-93",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 93,
    "ref": "ISRO January 2024 · Set A · Q93",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 34,
    "prompt": "From the weekly earnings graph, which listed pair has the largest difference?",
    "answer": "(a) Sunday–Monday",
    "steps": [
      "Read approximate values: Sunday 100, Monday 500, Tuesday 300, Wednesday 600, Thursday 650 and Friday 300 rupees.",
      "The listed differences are 400,300 and350 rupees.",
      "The largest is Sunday–Monday, 400 rupees."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Sunday–Monday",
        "Tuesday–Wednesday",
        "Thursday–Friday",
        "None"
      ]
    },
    "officialKey": "A",
    "figure": "pyq-figures/i24-93.png",
    "figureAlt": "Original ISRO January 2024 Set A Q93 figure",
    "figureCaption": "Original question and diagram · click to enlarge"
  },
  {
    "id": "i24-94",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 94,
    "ref": "ISRO January 2024 · Set A · Q94",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 35,
    "prompt": "Type-D toy production rises from 105 in 1983 to 125 in 1985. Find approximate percentage increase.",
    "answer": "(c) 19%",
    "steps": [
      "Increase is 125−105=20.",
      "Use the original value 105 as the denominator.",
      "Percentage increase=100×20/105=19.05%, approximately19%."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10%",
        "20%",
        "19%",
        "76%"
      ]
    },
    "officialKey": "C"
  },
  {
    "id": "i24-95",
    "paperId": "isro-2024-a",
    "exam": "isro",
    "topic": "apt",
    "number": 95,
    "ref": "ISRO January 2024 · Set A · Q95",
    "file": "2024-01-07_Question_Paper.pdf",
    "page": 35,
    "prompt": "What is the maximum area of a rectangle with perimeter 620 mm?",
    "answer": "(a) 24025 mm²",
    "steps": [
      "The two side lengths satisfy L+W=310 mm.",
      "For fixed sum, their product is maximal when L=W=155 mm.",
      "Maximum area=155²=24025 mm²."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "24025 mm²",
        "22725 mm²",
        "24000 mm²",
        "24075 mm²"
      ]
    },
    "officialKey": "A"
  }
];
