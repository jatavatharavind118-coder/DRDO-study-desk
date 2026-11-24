export const gate2010Complete = [
  {
    "id": "g10-1",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "math",
    "number": 1,
    "ref": "GATE 2010 · Q1",
    "file": "EC2010.pdf",
    "page": 2,
    "prompt": "What eigenvalues can a real skew-symmetric matrix have?",
    "answer": "(C) Zero or purely imaginary",
    "steps": [
      "For a real skew-symmetric matrix A, A*=Aᵀ=−A.",
      "If Av=λv, then v*Av=λv*v, while its complex conjugate equals v*A*v=−v*Av. Thus λ̅=−λ.",
      "The real part of λ is zero, allowing either zero or a nonzero purely imaginary value."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Always zero",
        "Always nonzero purely imaginary",
        "Zero or purely imaginary",
        "Always real"
      ]
    }
  },
  {
    "id": "g10-2",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "signals",
    "number": 2,
    "ref": "GATE 2010 · Q2",
    "file": "EC2010.pdf",
    "page": 2,
    "prompt": "The shown even periodic rectangular waveform equals +A for half a period and −2A for the other half. Describe its Fourier series.",
    "answer": "(C) Cosine terms and a negative DC component",
    "steps": [
      "Even symmetry makes every sine coefficient zero.",
      "The period average is [A(T/2)−2A(T/2)]/T=−A/2.",
      "Thus the series contains cosine terms together with a negative DC term."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Cosines, zero DC",
        "Cosines, positive DC",
        "Cosines, negative DC",
        "Sines, negative DC"
      ]
    },
    "figure": "pyq-figures/g10-2.png",
    "figureAlt": "Original GATE 2010 Q2 diagram and choices"
  },
  {
    "id": "g10-3",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "math",
    "number": 3,
    "ref": "GATE 2010 · Q3",
    "file": "EC2010.pdf",
    "page": 2,
    "prompt": "Solve n″−n/L²=0 with n(0)=K,n(∞)=0, assuming L>0.",
    "answer": "(D) n(x)=K exp(−x/L)",
    "steps": [
      "The characteristic roots are ±1/L.",
      "The growing exponential must have zero coefficient to satisfy the boundary at infinity.",
      "The remaining coefficient is K from n(0)=K, giving K exp(−x/L)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "K exp(x/L)",
        "K exp(−x/√L)",
        "K² exp(−x/L)",
        "K exp(−x/L)"
      ]
    }
  },
  {
    "id": "g10-4",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "networks",
    "number": 4,
    "ref": "GATE 2010 · Q4",
    "file": "EC2010.pdf",
    "page": 2,
    "prompt": "Find the short-circuit admittance matrix for the shown π network, whose three resistors are each 0.5 Ω.",
    "answer": "(A) [[4,−2],[−2,4]] S",
    "steps": [
      "Every resistor has conductance 2 S.",
      "Port 1 current is 2V₁+2(V₁−V₂)=4V₁−2V₂.",
      "Similarly I₂=−2V₁+4V₂, giving the symmetric matrix with diagonal 4 and off-diagonal −2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "[[4,−2],[−2,4]] S",
        "[[1,−0.5],[−0.5,1]] S",
        "[[1,0.5],[0.5,1]] S",
        "[[4,2],[2,4]] S"
      ]
    },
    "figure": "pyq-figures/g10-4.png",
    "figureAlt": "Original GATE 2010 Q4 diagram and choices"
  },
  {
    "id": "g10-5",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "networks",
    "number": 5,
    "ref": "GATE 2010 · Q5",
    "file": "EC2010.pdf",
    "page": 2,
    "prompt": "Which statement is false for an ideal parallel RLC circuit?",
    "answer": "(D) The input-impedance magnitude is minimum at resonance",
    "steps": [
      "At resonance, the inductive and capacitive susceptances cancel. Input impedance is real and equals R.",
      "Its magnitude is maximal, not minimal, because any nonzero net susceptance increases admittance magnitude.",
      "The bandwidth is 1/(RC) rad/s, so it decreases as R increases and is independent of L when R,C remain fixed."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Bandwidth decreases as R increases",
        "Bandwidth is unchanged as L increases",
        "Resonant impedance is real",
        "Resonant impedance magnitude is minimum"
      ]
    }
  },
  {
    "id": "g10-6",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "devices",
    "number": 6,
    "ref": "GATE 2010 · Q6",
    "file": "EC2010.pdf",
    "page": 3,
    "prompt": "Which listed room-temperature electron mobility is plausible in a silicon MOS inversion layer?",
    "answer": "(A) 450 cm²/(V·s)",
    "steps": [
      "Carriers in an inversion layer experience additional surface/interface scattering.",
      "Their effective mobility is typically below the roughly 1350 cm²/(V·s) bulk-silicon electron value used in elementary models.",
      "Among 450,1350,1800,3600, the reduced value 450 cm²/(V·s) is the appropriate listed choice."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "450",
        "1350",
        "1800",
        "3600"
      ]
    }
  },
  {
    "id": "g10-7",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "devices",
    "number": 7,
    "ref": "GATE 2010 · Q7",
    "file": "EC2010.pdf",
    "page": 3,
    "prompt": "Which process is preferred for growing a thin high-quality CMOS gate oxide?",
    "answer": "(B) Dry oxidation",
    "steps": [
      "A gate oxide needs precise thickness control and a high-quality silicon interface.",
      "Dry thermal oxidation grows oxide more slowly than wet oxidation, enabling thinner controlled films.",
      "Epitaxial deposition and ion implantation are not the listed thermal oxide-growth processes."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Wet oxidation",
        "Dry oxidation",
        "Epitaxial deposition",
        "Ion implantation"
      ]
    }
  },
  {
    "id": "g10-8",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "analog",
    "number": 8,
    "ref": "GATE 2010 · Q8",
    "file": "EC2010.pdf",
    "page": 3,
    "prompt": "In the shown current mirror, Q₂ has twice Q₁’s emitter area, β₁=700,β₂=715, R=9.3 kΩ and supply difference 10 V. Estimate Io.",
    "answer": "(B) 2 mA",
    "steps": [
      "The diode-connected transistor sets VBE≈0.7 V, so reference-resistor current is (10−0.7)/9.3 kΩ≈1 mA.",
      "Both transistors share VBE, so collector current scales approximately with emitter area: IC₂≈2IC₁.",
      "The large β values make base-current corrections small. Hence Io≈2 mA."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.5 mA",
        "2 mA",
        "9.3 mA",
        "15 mA"
      ]
    },
    "figure": "pyq-figures/g10-8.png",
    "figureAlt": "Original GATE 2010 Q8 diagram and choices"
  },
  {
    "id": "g10-9",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "analog",
    "number": 9,
    "ref": "GATE 2010 · Q9",
    "file": "EC2010.pdf",
    "page": 3,
    "prompt": "In the shown common-emitter amplifier, disconnect the emitter bypass capacitor CE while retaining the input/output coupling capacitors as AC shorts. What happens to input resistance and gain magnitude?",
    "answer": "(A) Input resistance rises; gain magnitude falls",
    "steps": [
      "Removing CE introduces emitter degeneration through RE at signal frequencies.",
      "The base input resistance changes from approximately rπ to rπ+(β+1)RE, increasing the total input resistance.",
      "Emitter feedback reduces the effective transconductance, so the voltage-gain magnitude decreases."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Resistance rises, gain falls",
        "Resistance falls, gain rises",
        "Both fall",
        "Both rise"
      ]
    },
    "figure": "pyq-figures/g10-9.png",
    "figureAlt": "Original GATE 2010 Q9 diagram and choices"
  },
  {
    "id": "g10-10",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "analog",
    "number": 10,
    "ref": "GATE 2010 · Q10",
    "file": "EC2010.pdf",
    "page": 4,
    "prompt": "Find ideal op-amp gain for the shown inverting circuit, with R₁ from input to virtual ground, R₂ as feedback, and R₃ loading the output.",
    "answer": "(B) −R₂/R₁",
    "steps": [
      "The noninverting input is grounded, so ideal negative feedback gives V−=0.",
      "No current enters the op-amp input. KCL gives Vi/R₁=−Vo/R₂.",
      "Thus Vo/Vi=−R₂/R₁. R₃ is an output load and does not alter ideal gain."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−R₁/R₃",
        "−R₂/R₁",
        "−(R₁∥R₃)/R₁",
        "−(R₂+R₃)/R₁"
      ]
    },
    "figure": "pyq-figures/g10-10.png",
    "figureAlt": "Original GATE 2010 Q10 diagram and choices"
  },
  {
    "id": "g10-11",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "digital",
    "number": 11,
    "ref": "GATE 2010 · Q11",
    "file": "EC2010.pdf",
    "page": 4,
    "prompt": "Match NOR,NAND,XOR,XNOR gates P,Q,R,S to the input-bubble equivalents numbered in the source.",
    "answer": "(B) P–4,Q–2,R–1,S–3",
    "steps": [
      "By De Morgan, NOR equals an AND with both inputs inverted (4), and NAND equals an OR with both inputs inverted (2).",
      "Inverting both XOR inputs leaves XOR unchanged, giving R–1.",
      "Inverting both XNOR inputs also preserves its function, giving S–3."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "P2,Q4,R1,S3",
        "P4,Q2,R1,S3",
        "P2,Q4,R3,S1",
        "P4,Q2,R3,S1"
      ]
    },
    "figure": "pyq-figures/g10-11.png",
    "figureAlt": "Original GATE 2010 Q11 diagram and choices"
  },
  {
    "id": "g10-12",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "digital",
    "number": 12,
    "ref": "GATE 2010 · Q12",
    "file": "EC2010.pdf",
    "page": 4,
    "prompt": "For the shown circuit, a three-input XNOR receives A XOR B, A XNOR B and C. Which listed input makes F=1?",
    "answer": "(D) A=0,B=0,C=1",
    "steps": [
      "Let X=A XOR B; the other intermediate output is X̅.",
      "The final output is NOT(X XOR X̅ XOR C)=NOT(1 XOR C)=C.",
      "Only the listed combination with C=1 makes F=1, independently of A and B."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "A1,B1,C0",
        "A1,B0,C0",
        "A0,B1,C0",
        "A0,B0,C1"
      ]
    },
    "figure": "pyq-figures/g10-12.png",
    "figureAlt": "Original GATE 2010 Q12 diagram and choices"
  },
  {
    "id": "g10-13",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "digital",
    "number": 13,
    "ref": "GATE 2010 · Q13",
    "file": "EC2010.pdf",
    "page": 5,
    "prompt": "Determine the device address range selected by output Y₅ of the shown 74LS138 decoder.",
    "answer": "(B) 2D00–2DFF",
    "steps": [
      "The enable gate requires A15…A11=00101, and memory operation enables G1 through the IO/M inversion.",
      "Y₅ is selected by CBA=101, so A10A9A8=101.",
      "Together A15…A8=00101101₂=2D₁₆. The eight low address bits are unconstrained, giving 2D00–2DFF."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2000–20FF",
        "2D00–2DFF",
        "2E00–2EFF",
        "FD00–FDFF"
      ]
    },
    "figure": "pyq-figures/g10-13.png",
    "figureAlt": "Original GATE 2010 Q13 diagram and choices"
  },
  {
    "id": "g10-14",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "signals",
    "number": 14,
    "ref": "GATE 2010 · Q14",
    "file": "EC2010.pdf",
    "page": 5,
    "prompt": "Find x[n] for X(z)=5z²+4z⁻¹+3, with ROC 0<|z|<∞.",
    "answer": "(A) 5δ[n+2]+3δ[n]+4δ[n−1]",
    "steps": [
      "The bilateral transform of δ[n−k] is z⁻ᵏ.",
      "Thus z² corresponds to δ[n+2], z⁻¹ to δ[n−1], and 1 to δ[n].",
      "Applying the coefficients gives the stated three impulses."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "5δ[n+2]+3δ[n]+4δ[n−1]",
        "5δ[n−2]+3δ[n]+4δ[n+1]",
        "5u[n+2]+3u[n]+4u[n−1]",
        "5u[n−2]+3u[n]+4u[n+1]"
      ]
    }
  },
  {
    "id": "g10-15",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "signals",
    "number": 15,
    "ref": "GATE 2010 · Q15",
    "file": "EC2010.pdf",
    "page": 5,
    "prompt": "Cascade LTI systems with h₁[n]=δ[n−1] and h₂[n]=δ[n−2]. Find overall impulse response.",
    "answer": "(C) δ[n−3]",
    "steps": [
      "Cascaded impulse responses convolve.",
      "Convolution with δ[n−k] delays a sequence by k.",
      "The two delays add: δ[n−1]*δ[n−2]=δ[n−3]."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "δ[n−1]+δ[n−2]",
        "δ[n−4]",
        "δ[n−3]",
        "δ[n−1]δ[n−2]"
      ]
    }
  },
  {
    "id": "g10-16",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "signals",
    "number": 16,
    "ref": "GATE 2010 · Q16",
    "file": "EC2010.pdf",
    "page": 5,
    "prompt": "Which listed statement is true for a radix-2 N-point FFT?",
    "answer": "(D) A butterfly requires one complex multiplication",
    "steps": [
      "A radix-2 butterfly produces a±Wb.",
      "Compute Wb once, then form the sum and difference, requiring one complex multiplication and two complex additions.",
      "A standard stage has N/2 butterflies; in-place storage reuses N complex data locations. Input/output reordering can be handled by algorithm organization or permutations."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Both input/output can never be normal order",
        "Stage m has N/m butterflies",
        "In-place computation requires 2N complex-node storage locations",
        "One butterfly requires one complex multiplication"
      ]
    }
  },
  {
    "id": "g10-17",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "control",
    "number": 17,
    "ref": "GATE 2010 · Q17",
    "file": "EC2010.pdf",
    "page": 5,
    "prompt": "In the shown block diagram, both parallel branches are 1/(s+1); their difference is fed back, and the upper branch is the output. Find Y/R.",
    "answer": "(B) 1/(s+1)",
    "steps": [
      "Both branches receive the same error signal and have identical zero-state transfer functions.",
      "Their outputs cancel at the difference junction, so the feedback signal is zero.",
      "The error equals R and the upper output is Y=R/(s+1)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1/(s+1)",
        "2/(s+1)",
        "2/(s+3)"
      ]
    },
    "figure": "pyq-figures/g10-17.png",
    "figureAlt": "Original GATE 2010 Q17 diagram and choices"
  },
  {
    "id": "g10-18",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "control",
    "number": 18,
    "ref": "GATE 2010 · Q18",
    "file": "EC2010.pdf",
    "page": 6,
    "prompt": "H(s)=s/(s+p) converts x(t)=p cos(2t−π/2) to y(t)=cos(2t−π/3). Find positive p.",
    "answer": "(B) 2/√3",
    "steps": [
      "At ω=2, the filter phase is π/2−atan(2/p)=atan(p/2).",
      "The required phase lead is −π/3−(−π/2)=π/6. Thus atan(p/2)=π/6 and p=2/√3.",
      "The amplitude check gives p×2/√(p²+4)=1, consistent with the stated unit output."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "√3",
        "2/√3",
        "1",
        "√3/2"
      ]
    }
  },
  {
    "id": "g10-19",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "control",
    "number": 19,
    "ref": "GATE 2010 · Q19",
    "file": "EC2010.pdf",
    "page": 6,
    "prompt": "A Bode magnitude asymptote is 0 dB below 0.1 rad/s, rises at 20 dB/decade to 40 dB at 10 rad/s, then flattens. Identify G(s).",
    "answer": "(A) (10s+1)/(0.1s+1)",
    "steps": [
      "The low-frequency plateau is unity gain.",
      "A zero at 0.1 rad/s adds +20 dB/decade; a pole at 10 rad/s removes that slope.",
      "The normalized transfer is (1+s/0.1)/(1+s/10)=(10s+1)/(0.1s+1), with high-frequency gain 100."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(10s+1)/(0.1s+1)",
        "(100s+1)/(0.1s+1)",
        "100s/(10s+1)",
        "(0.1s+1)/(10s+1)"
      ]
    },
    "figure": "pyq-figures/g10-19.png",
    "figureAlt": "Original GATE 2010 Q19 diagram and choices"
  },
  {
    "id": "g10-20",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "communication",
    "number": 20,
    "ref": "GATE 2010 · Q20",
    "file": "EC2010.pdf",
    "page": 6,
    "prompt": "For m(t)=2cos(2πfₘt), which listed signal is conventional AM without overmodulation?",
    "answer": "(C) Ac cos(2πf꜀t)+(Ac/4)m(t)cos(2πf꜀t)",
    "steps": [
      "Conventional AM has a carrier multiplied by an envelope 1+μcos(2πfₘt), with |μ|≤1.",
      "Choice C has envelope 1+m/4=1+0.5cos(2πfₘt), giving modulation index 0.5.",
      "The direct 1+m form has index 2 and overmodulates; a pure message/carrier product suppresses the carrier."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Ac m(t) cos(2πf꜀t)",
        "Ac[1+m(t)]cos(2πf꜀t)",
        "Ac cos(2πf꜀t)+(Ac/4)m(t)cos(2πf꜀t)",
        "Ac[cos(2πfₘt)cos(2πf꜀t)+sin(2πfₘt)sin(2πf꜀t)]"
      ]
    }
  },
  {
    "id": "g10-21",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "communication",
    "number": 21,
    "ref": "GATE 2010 · Q21",
    "file": "EC2010.pdf",
    "page": 6,
    "prompt": "Find average power in 1 Ω of x(t)=6cos[2π×10⁶t+2sin(8000πt)+4cos(8000πt)] V.",
    "answer": "(B) 18 W",
    "steps": [
      "Angle modulation changes instantaneous phase while keeping amplitude constant.",
      "The carrier amplitude is 6 V, so its mean-square voltage is 6²/2.",
      "For a 1 Ω reference load, average power is 36/2=18 W."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10 W",
        "18 W",
        "20 W",
        "28 W"
      ]
    }
  },
  {
    "id": "g10-22",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "em",
    "number": 22,
    "ref": "GATE 2010 · Q22",
    "file": "EC2010.pdf",
    "page": 6,
    "prompt": "A two-port has S=[[0.2∠0°,0.9∠90°],[0.9∠90°,0.1∠90°]]. Is it reciprocal and lossless?",
    "answer": "(C) Reciprocal but not lossless",
    "steps": [
      "Reciprocity requires S12=S21, which holds.",
      "A lossless S matrix must be unitary; in particular each column’s squared magnitudes must sum to one.",
      "The first column gives 0.2²+0.9²=0.85≠1, so the network is not lossless."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Lossless and reciprocal",
        "Lossless, not reciprocal",
        "Not lossless, reciprocal",
        "Neither"
      ]
    }
  },
  {
    "id": "g10-23",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "em",
    "number": 23,
    "ref": "GATE 2010 · Q23",
    "file": "EC2010.pdf",
    "page": 6,
    "prompt": "A distortionless transmission line has Z₀=50 Ω and series resistance R=0.1 Ω/m. Find attenuation α.",
    "answer": "(D) 0.002 Np/m",
    "steps": [
      "For a distortionless line, R/L=G/C and Z₀=√(L/C) is real.",
      "The attenuation is α=√(RG)=R/Z₀.",
      "Thus α=0.1/50=0.002 Np/m."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "500",
        "5",
        "0.014",
        "0.002"
      ]
    }
  },
  {
    "id": "g10-24",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "communication",
    "number": 24,
    "ref": "GATE 2010 · Q24",
    "file": "EC2010.pdf",
    "page": 7,
    "prompt": "A pulse s(t) rises linearly from 0 at t=0 to 1 at T, and is zero elsewhere. Find its causal matched-filter impulse response for sampling at T.",
    "answer": "(C) A ramp descending from 1 at 0 to 0 at T",
    "steps": [
      "A matched filter uses h(t)=k s*(T−t).",
      "The pulse is real, so only reversal and shift are needed.",
      "For 0≤t≤T, h(t)=k(1−t/T); outside that interval it is zero. This is the falling ramp in C."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Rising ramp on [−T,0]",
        "Rising ramp on [0,T]",
        "Falling ramp on [0,T]",
        "Triangle on [0,2T]"
      ]
    },
    "figure": "pyq-figures/g10-24.png",
    "figureAlt": "Original GATE 2010 Q24 diagram and choices"
  },
  {
    "id": "g10-25",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "em",
    "number": 25,
    "ref": "GATE 2010 · Q25",
    "file": "EC2010.pdf",
    "page": 7,
    "prompt": "A lossless nonmagnetic dielectric has εr=4 and plane-wave peak electric field 1 V/m. Find mean power density.",
    "answer": "(C) 1/(120π) W/m²",
    "steps": [
      "The wave impedance is η=η₀/√εr=120π/2=60π Ω.",
      "For peak field amplitude, average power density is Epeak²/(2η).",
      "Thus Savg=1/(2×60π)=1/(120π) W/m²."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1/(30π)",
        "1/(60π)",
        "1/(120π)",
        "1/(240π)"
      ]
    }
  },
  {
    "id": "g10-26",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "math",
    "number": 26,
    "ref": "GATE 2010 · Q26",
    "file": "EC2010.pdf",
    "page": 7,
    "prompt": "For eʸ=x^(1/x), x>0, where does y have an extremum?",
    "answer": "(A) Maximum at x=e",
    "steps": [
      "Taking logs gives y=(ln x)/x.",
      "Differentiate: y′=(1−ln x)/x², which vanishes at x=e.",
      "The derivative is positive before e and negative after e, so this point is a maximum."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Maximum at e",
        "Minimum at e",
        "Maximum at e⁻¹",
        "Minimum at e⁻¹"
      ]
    }
  },
  {
    "id": "g10-27",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "math",
    "number": 27,
    "ref": "GATE 2010 · Q27",
    "file": "EC2010.pdf",
    "page": 7,
    "prompt": "A fair coin is tossed four times. Find the probability of more heads than tails.",
    "answer": "(D) 5/16",
    "steps": [
      "More heads than tails requires three or four heads.",
      "The number of such outcomes is C(4,3)+C(4,4)=4+1=5.",
      "There are 2⁴=16 equally likely outcomes, giving probability 5/16."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1/16",
        "1/8",
        "1/4",
        "5/16"
      ]
    }
  },
  {
    "id": "g10-28",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "math",
    "number": 28,
    "ref": "GATE 2010 · Q28",
    "file": "EC2010.pdf",
    "page": 8,
    "prompt": "For A=xy x̂+x²ŷ, evaluate ∮A·dl counterclockwise around 1/√3≤x≤2/√3,1≤y≤3.",
    "answer": "(C) 1",
    "steps": [
      "Green’s theorem gives circulation ∬(∂Ay/∂x−∂Ax/∂y)dxdy.",
      "The integrand is 2x−x=x.",
      "The integral is (3−1)[x²/2]₁/√₃²/√₃=2×(1/2)(4/3−1/3)=1."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "2/√3",
        "1",
        "2√3"
      ]
    },
    "figure": "pyq-figures/g10-28.png",
    "figureAlt": "Original GATE 2010 Q28 diagram and choices"
  },
  {
    "id": "g10-29",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "math",
    "number": 29,
    "ref": "GATE 2010 · Q29",
    "file": "EC2010.pdf",
    "page": 8,
    "prompt": "Find residues of X(z)=(1−2z)/[z(z−1)(z−2)] at z=0,1,2.",
    "answer": "(C) 1/2,1,−3/2",
    "steps": [
      "At a simple pole a, residue is lim(z−a)X(z).",
      "At 0 this is 1/[(-1)(−2)]=1/2; at 1 it is (−1)/[1(−1)]=1.",
      "At 2 it is (1−4)/[2(2−1)]=−3/2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1/2,−1/2,1",
        "1/2,1/2,−1",
        "1/2,1,−3/2",
        "1/2,−1,3/2"
      ]
    }
  },
  {
    "id": "g10-30",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "math",
    "number": 30,
    "ref": "GATE 2010 · Q30",
    "file": "EC2010.pdf",
    "page": 8,
    "prompt": "Use forward Euler with h=0.1 for y′−y=x,y(0)=0. Estimate y(0.3).",
    "answer": "(B) 0.031",
    "steps": [
      "The recurrence is yk+1=yk+0.1(yk+xk).",
      "The first two steps give y(0.1)=0 and y(0.2)=0+0.1(0+0.1)=0.01.",
      "The third gives y(0.3)=0.01+0.1(0.01+0.2)=0.031."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.01",
        "0.031",
        "0.0631",
        "0.1"
      ]
    }
  },
  {
    "id": "g10-31",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "signals",
    "number": 31,
    "ref": "GATE 2010 · Q31",
    "file": "EC2010.pdf",
    "page": 8,
    "prompt": "F(s)=(3s+1)/[s³+4s²+(K−3)s]. If its inverse transform tends to 1 as t→∞, determine K.",
    "answer": "(D) 4",
    "steps": [
      "Factor the denominator as s[s²+4s+(K−3)].",
      "The final-value theorem gives f∞=lim sF(s)=1/(K−3).",
      "Set this equal to 1 to obtain K=4. The remaining polynomial s²+4s+1 has left-half-plane roots, validating the limit."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1",
        "2",
        "3",
        "4"
      ]
    }
  },
  {
    "id": "g10-32",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "networks",
    "number": 32,
    "ref": "GATE 2010 · Q32",
    "file": "EC2010.pdf",
    "page": 8,
    "prompt": "In the shown network, a switch connects the middle 10 Ω branch at t=0 after a long open interval. Find its downward current i(t).",
    "answer": "(A) 0.5−0.125e^(−1000t) A",
    "steps": [
      "Initially the inductor is a short and its series 10 Ω branch shares 1.5 A equally with the left 10 Ω branch, so iL(0⁻)=0.75 A.",
      "After switching, the remaining source current initially splits between the two parallel 10 Ω resistors: i(0⁺)=(1.5−0.75)/2=0.375 A. At DC all three 10 Ω branches share equally, giving i∞=0.5 A.",
      "The resistance seen by the inductor is 10+(10∥10)=15 Ω, so τ=15 mH/15 Ω=1 ms. Therefore i(t)=0.5+(0.375−0.5)e^(−1000t)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.5−0.125e^(−1000t) A",
        "1.5−0.125e^(−1000t) A",
        "0.5−0.5e^(−1000t) A",
        "0.375e^(−1000t) A"
      ]
    },
    "figure": "pyq-figures/g10-32.png",
    "figureAlt": "Original GATE 2010 Q32 diagram and choices"
  },
  {
    "id": "g10-33",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "networks",
    "number": 33,
    "ref": "GATE 2010 · Q33",
    "file": "EC2010.pdf",
    "page": 9,
    "prompt": "At ω=1000 rad/s, a 20∠0° V source feeds 20 mH in series with parallel 1 Ω and 50 μF. Find downward current through 1 Ω.",
    "answer": "(A) −j1 A",
    "steps": [
      "The inductor impedance is j20 Ω and the parallel-load admittance is 1+jωC=1+j0.05 S.",
      "The load voltage is Vs/[1+j20(1+j0.05)]=20/(j20)=−j1 V.",
      "The 1 Ω resistor current equals that voltage divided by 1 Ω, giving −j1 A."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−j1 A",
        "j1 A",
        "0 A",
        "20 A"
      ]
    },
    "figure": "pyq-figures/g10-33.png",
    "figureAlt": "Original GATE 2010 Q33 diagram and choices"
  },
  {
    "id": "g10-34",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "networks",
    "number": 34,
    "ref": "GATE 2010 · Q34",
    "file": "EC2010.pdf",
    "page": 9,
    "prompt": "Find power supplied by the 10 V source in the shown network of 1 Ω resistors and 1 A,2 A sources.",
    "answer": "(A) 0 W",
    "steps": [
      "Take the bottom source terminal as 0 V and top as 10 V. The middle-right node receives 1+2=3 A, so it is at 13 V and sends 3 A upward through its 1 Ω resistor.",
      "The middle-left node is connected to top and bottom through two 2 Ω paths and sends 1 A to the right. KCL gives (v−10)/2+v/2+1=0, so v=4 V.",
      "The top node sends (10−4)/2=3 A leftward and receives 3 A from the right. The voltage-source current is zero, hence its power is zero."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0 W",
        "5 W",
        "10 W",
        "100 W"
      ]
    },
    "figure": "pyq-figures/g10-34.png",
    "figureAlt": "Original GATE 2010 Q34 diagram and choices"
  },
  {
    "id": "g10-35",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "devices",
    "number": 35,
    "ref": "GATE 2010 · Q35",
    "file": "EC2010.pdf",
    "page": 9,
    "prompt": "Which doping relation is consistent with a uniformly doped BJT having emitter injection efficiency near unity?",
    "answer": "(B) NE≫NB and NB>NC",
    "steps": [
      "High emitter efficiency requires electron injection from emitter into base to dominate hole injection into the emitter.",
      "Heavy emitter doping relative to base suppresses the unwanted hole injection, so NE≫NB.",
      "The conventional transistor also uses a more lightly doped collector than base to support reverse voltage, giving NB>NC among the listed relations."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "NE=NB=NC",
        "NE≫NB and NB>NC",
        "NE=NB and NB<NC",
        "NE<NB<NC"
      ]
    }
  },
  {
    "id": "g10-36",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "devices",
    "number": 36,
    "ref": "GATE 2010 · Q36",
    "file": "EC2010.pdf",
    "page": 9,
    "prompt": "Compared with a symmetric p–n junction doped at 10¹⁴ cm⁻³ on both sides, how does one doped at 10²⁰ cm⁻³ on both sides behave?",
    "answer": "(C) Lower reverse breakdown voltage; higher depletion capacitance",
    "steps": [
      "Higher doping narrows the depletion region.",
      "Since depletion capacitance per area is εs/W, a narrower region has greater capacitance.",
      "The stronger field and increased tunneling tendency reduce the reverse breakdown voltage."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Lower breakdown, lower capacitance",
        "Higher breakdown, lower capacitance",
        "Lower breakdown, higher capacitance",
        "Higher breakdown, higher capacitance"
      ]
    }
  },
  {
    "id": "g10-37",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "digital",
    "number": 37,
    "ref": "GATE 2010 · Q37",
    "file": "EC2010.pdf",
    "page": 9,
    "prompt": "The three D flip-flops start at 000 and shift A→B→C, with DA=NOT(QB XOR QC). Find the sequence at QA.",
    "answer": "(D) 0110100…",
    "steps": [
      "The state update is (A,B,C)⁺=(NOT(B XOR C),A,B).",
      "Starting at 000 gives 100,110,011,101,010,001,000.",
      "Reading QA from the initial state gives 0,1,1,0,1,0,0,…, matching D."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0010111…",
        "0001011…",
        "0101111…",
        "0110100…"
      ]
    },
    "figure": "pyq-figures/g10-37.png",
    "figureAlt": "Original GATE 2010 Q37 diagram and choices"
  },
  {
    "id": "g10-38",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "analog",
    "number": 38,
    "ref": "GATE 2010 · Q38",
    "file": "EC2010.pdf",
    "page": 10,
    "prompt": "For the shown ideal-op-amp precision rectifier with practical diodes, find Vo(Vi). The summing node receives Vi through R and +20 V through 4R, with feedback R.",
    "answer": "(B) Vo=max(−Vi−5,0)",
    "steps": [
      "When the output diode conducts, the inverting input is at virtual ground.",
      "KCL gives Vi/R+20/(4R)=−Vo/R, so Vo=−Vi−5. This mode requires a positive output, hence Vi<−5 V.",
      "For Vi≥−5 V, the other diode maintains local feedback and the external output is zero. At Vi=−10 V, Vo=5 V, selecting B."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Slope −2, cutoff at −5 V",
        "Slope −1, cutoff at −5 V",
        "Slope −1, cutoff at +5 V",
        "Slope −2, cutoff at +5 V"
      ]
    },
    "figure": "pyq-figures/g10-38.png",
    "figureAlt": "Original GATE 2010 Q38 diagram and choices"
  },
  {
    "id": "g10-39",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "digital",
    "number": 39,
    "ref": "GATE 2010 · Q39",
    "file": "EC2010.pdf",
    "page": 10,
    "prompt": "A 4:1 MUX has selects S1=A,S0=B and data inputs C,D,C̅,C̅D̅. Find its minterms in order A,B,C,D.",
    "answer": "(D) Σm(2,3,5,7,8,9,12)",
    "steps": [
      "For AB=00, output C gives minterms 2,3. For AB=01, output D gives 5,7.",
      "For AB=10, output C̅ gives 8,9.",
      "For AB=11, output C̅D̅ gives 12. Their union is 2,3,5,7,8,9,12."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Σm(0,1,3,5,9,10,14)",
        "Σm(2,3,5,7,8,12,13)",
        "Σm(1,2,4,5,11,14)",
        "Σm(2,3,5,7,8,9,12)"
      ]
    },
    "figure": "pyq-figures/g10-39.png",
    "figureAlt": "Original GATE 2010 Q39 diagram and choices"
  },
  {
    "id": "g10-40",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "digital",
    "number": 40,
    "ref": "GATE 2010 · Q40",
    "file": "EC2010.pdf",
    "page": 11,
    "prompt": "An 8085 executes MVI A,45H; MOV B,A; STC; CMC; RAR; XRA B. Find final accumulator.",
    "answer": "(C) 67H",
    "steps": [
      "After the first two instructions A=B=45H. STC then CMC leaves carry zero.",
      "RAR rotates A right through carry: 45H=01000101₂ becomes 00100010₂=22H, with the old bit 0 moved to carry.",
      "XRA B gives 22H XOR 45H=67H."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "00H",
        "45H",
        "67H",
        "E7H"
      ]
    }
  },
  {
    "id": "g10-41",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "signals",
    "number": 41,
    "ref": "GATE 2010 · Q41",
    "file": "EC2010.pdf",
    "page": 11,
    "prompt": "A zero-state LTI system satisfies y″+4y′+3y=2x′+4x. Find response to x=e^(−2t)u(t).",
    "answer": "(B) (e^(−t)−e^(−3t))u(t)",
    "steps": [
      "The zero-state transfer is H(s)=(2s+4)/[(s+1)(s+3)].",
      "Multiply by X(s)=1/(s+2); the factor s+2 cancels, giving Y(s)=2/[(s+1)(s+3)].",
      "Partial fractions give 1/(s+1)−1/(s+3), whose inverse is the stated difference of exponentials."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(eᵗ−e³ᵗ)u(t)",
        "(e^(−t)−e^(−3t))u(t)",
        "(e^(−t)+e^(−3t))u(t)",
        "(eᵗ+e³ᵗ)u(t)"
      ]
    }
  },
  {
    "id": "g10-42",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "signals",
    "number": 42,
    "ref": "GATE 2010 · Q42",
    "file": "EC2010.pdf",
    "page": 11,
    "prompt": "H(z)=(2−0.75z⁻¹)/(1−0.75z⁻¹+0.125z⁻²). Assess S1 stable/causal for |z|>1/2; S2 stable/noncausal for |z|<1/4; S3 neither for 1/4<|z|<1/2.",
    "answer": "(C) S1 and S3",
    "steps": [
      "The denominator factors as (1−0.5z⁻¹)(1−0.25z⁻¹). Neither pole is canceled.",
      "The exterior ROC |z|>0.5 gives a right-sided causal response and includes the unit circle, so S1 is true.",
      "The interior and annular ROCs exclude the unit circle, so both are unstable. The annulus is two-sided and noncausal: S3 true, S2 false."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "S1,S2",
        "S2,S3",
        "S1,S3",
        "All three"
      ]
    }
  },
  {
    "id": "g10-43",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "signals",
    "number": 43,
    "ref": "GATE 2010 · Q43",
    "file": "EC2010.pdf",
    "page": 11,
    "prompt": "Find the Nyquist sampling rate of x(t)=[sin(500πt)/(πt)][sin(700πt)/(πt)].",
    "answer": "(C) 1200 Hz",
    "steps": [
      "The first sinc factor is bandlimited to |f|≤250 Hz; the second to |f|≤350 Hz.",
      "Multiplication in time convolves their spectra, so the highest resulting frequency is 250+350=600 Hz.",
      "The Nyquist rate is twice that bandwidth: 1200 samples/s."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "400 Hz",
        "600 Hz",
        "1200 Hz",
        "1400 Hz"
      ]
    }
  },
  {
    "id": "g10-44",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "control",
    "number": 44,
    "ref": "GATE 2010 · Q44",
    "file": "EC2010.pdf",
    "page": 11,
    "prompt": "A unity negative-feedback loop has plant 1/(s²+2s+2). Which listed controller minimizes unit-step steady-state error?",
    "answer": "(D) 1+2/s+3s",
    "steps": [
      "A controller with integral action makes the loop type 1 and its DC loop gain infinite.",
      "Only D contains the integrator 2/s, giving zero step error if the closed loop is stable.",
      "Its characteristic polynomial is s³+5s²+3s+2. The cubic Routh condition 5×3>2 holds with positive coefficients, confirming stability."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(s+1)/(s+2)",
        "(s+2)/(s+1)",
        "(s+1)(s+4)/[(s+2)(s+3)]",
        "1+2/s+3s"
      ]
    }
  },
  {
    "id": "g10-45",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "signals",
    "number": 45,
    "ref": "GATE 2010 · Q45",
    "file": "EC2010.pdf",
    "page": 12,
    "prompt": "A stationary process with positive PSD at every frequency passes through an adder of direct and 0.5 ms delayed copies, followed by a differentiator. At which listed frequencies is output PSD zero?",
    "answer": "(D) Odd multiples of 1 kHz",
    "steps": [
      "The frequency response is H(f)=j2πf[1+e^(−j2πfτ)] with τ=0.0005 s.",
      "The bracket vanishes when 2πfτ=(2n+1)π, giving f=(2n+1)/(2τ)=(2n+1) kHz.",
      "These are spectral nulls regardless of positive input PSD. Differentiation also introduces a DC null."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "PSD positive everywhere",
        "Zero above 1 kHz",
        "Zero at every multiple of 2 kHz",
        "Zero at odd multiples of 1 kHz"
      ]
    }
  },
  {
    "id": "g10-46",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "em",
    "number": 46,
    "ref": "GATE 2010 · Q46",
    "file": "EC2010.pdf",
    "page": 12,
    "prompt": "A free-space wave Ei=24cos(3×10⁸t−βy)ẑ V/m is normally incident on a lossless medium with μ=μ₀,ε=9ε₀ occupying y≥0. Find reflected H.",
    "answer": "(A) [1/(10π)]cos(3×10⁸t+y)x̂ A/m",
    "steps": [
      "The impedances are η1=120π Ω and η2=40π Ω, so electric reflection coefficient is (40−120)/(40+120)=−1/2.",
      "The reflected electric field is −12ẑ cos(ωt+βy), traveling in −y. Its magnetic field is k̂r×Er/η1=(−ŷ)×(−ẑ)12/(120π), along +x.",
      "In free space β=ω/c=1 rad/m. Thus Hr=(1/(10π))cos(3×10⁸t+y)x̂ A/m."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "+(1/10π)cos(3×10⁸t+y)x̂",
        "+(1/20π)cos(3×10⁸t+y)x̂",
        "−(1/20π)cos(3×10⁸t+y)x̂",
        "−(1/10π)cos(3×10⁸t+y)x̂"
      ]
    }
  },
  {
    "id": "g10-47",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "em",
    "number": 47,
    "ref": "GATE 2010 · Q47",
    "file": "EC2010.pdf",
    "page": 12,
    "prompt": "A 60 Ω line sees the shown series shorted λ/8 stub of Z₀=30 Ω, followed by a λ/4 section of Z₀=30√2 Ω terminated in 30 Ω. Find VSWR on the 60 Ω line.",
    "answer": "(B) Approximately 1.64",
    "steps": [
      "The quarter-wave section transforms the load to (30√2)²/30=60 Ω.",
      "The series shorted λ/8 stub contributes jZ₀tan(π/4)=j30 Ω, so the total load is 60+j30 Ω.",
      "Reflection magnitude on the 60 Ω line is |j30/(120+j30)|=1/√17≈0.2425. VSWR=(1+|Γ|)/(1−|Γ|)≈1.64."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1.00",
        "1.64",
        "2.50",
        "3.00"
      ]
    },
    "figure": "pyq-figures/g10-47.png",
    "figureAlt": "Original GATE 2010 Q47 diagram and choices"
  },
  {
    "id": "g10-48",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "analog",
    "number": 48,
    "ref": "GATE 2010 · Q48",
    "file": "EC2010.pdf",
    "page": 13,
    "prompt": "The common-emitter stage has β=100, gm=0.3861 S, ro=∞, rπ=259 Ω, Rs=1 kΩ,RB=93 kΩ,RC=250 Ω,RL=1 kΩ, input coupling C₁=∞ and output coupling C₂=4.7 μF. Find total resistance seen by the ideal source Vs, including Rs.",
    "answer": "(B) Approximately 1258 Ω",
    "steps": [
      "With the input coupling capacitor shorted, the base sees rπ in parallel with RB.",
      "This is 259∥93000≈258.3 Ω.",
      "The source also sees its series Rs=1000 Ω, so total resistance is about 1258 Ω."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "258 Ω",
        "1258 Ω",
        "93 kΩ",
        "∞"
      ]
    },
    "figure": "pyq-figures/g10-48.png",
    "figureAlt": "Original GATE 2010 Q48 diagram and choices"
  },
  {
    "id": "g10-49",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "analog",
    "number": 49,
    "ref": "GATE 2010 · Q49",
    "file": "EC2010.pdf",
    "page": 13,
    "prompt": "The common-emitter stage has β=100, gm=0.3861 S, ro=∞, rπ=259 Ω, Rs=1 kΩ,RB=93 kΩ,RC=250 Ω,RL=1 kΩ, input coupling C₁=∞ and output coupling C₂=4.7 μF. Find the lower cutoff frequency due to C₂.",
    "answer": "(B) Approximately 27.1 Hz",
    "steps": [
      "To find the resistance seen by C₂, suppress the independent input. With ro infinite there is no output-to-input feedback, and the controlled collector current is zero for this resistance test.",
      "The capacitor sees RC+RL=250+1000=1250 Ω between its terminals through AC ground.",
      "The corner is 1/(2πC₂(RC+RL))=1/(2π×4.7 μF×1250)≈27.1 Hz."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "33.9 Hz",
        "27.1 Hz",
        "13.6 Hz",
        "16.9 Hz"
      ]
    },
    "figure": "pyq-figures/g10-49.png",
    "figureAlt": "Original GATE 2010 Q49 diagram and choices"
  },
  {
    "id": "g10-50",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "control",
    "number": 50,
    "ref": "GATE 2010 · Q50",
    "file": "EC2010.pdf",
    "page": 13,
    "prompt": "For the shown signal-flow graph, choose a valid two-state model.",
    "answer": "(B) A=[[-1,1],[-1,0]], B=[0,2]ᵀ, C=[0,0.5]",
    "steps": [
      "Let x₁ be the output of the second integrator and x₂ the raw output of the first integrator, before the inner negative summation.",
      "The second integrator receives x₂−x₁, giving ẋ₁=−x₁+x₂. The first receives 2u−x₁, giving ẋ₂=−x₁+2u.",
      "The feedforward sum cancels the inner subtraction: y=0.5[(x₂−x₁)+x₁]=0.5x₂. This produces model B."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "A=[[1,1],[-1,0]], B=[0,2]ᵀ,C=[0,0.5]",
        "A=[[-1,1],[-1,0]], B=[0,2]ᵀ,C=[0,0.5]",
        "A=[[1,1],[-1,0]], B=[0,2]ᵀ,C=[0.5,0.5]",
        "A=[[-1,1],[-1,0]], B=[0,2]ᵀ,C=[0.5,0.5]"
      ]
    },
    "figure": "pyq-figures/g10-50.png",
    "figureAlt": "Original GATE 2010 Q50 diagram and choices"
  },
  {
    "id": "g10-51",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "control",
    "number": 51,
    "ref": "GATE 2010 · Q51",
    "file": "EC2010.pdf",
    "page": 13,
    "prompt": "Find Y(s)/U(s) for the same signal-flow graph.",
    "answer": "(C) (s+1)/(s²+s+1)",
    "steps": [
      "Using ẋ₁=−x₁+x₂ and ẋ₂=−x₁+2u, the first equation gives X₂=(s+1)X₁.",
      "The second gives sX₂=−X₁+2U, so (s²+s+1)X₁=2U.",
      "Since Y=0.5X₂, the transfer is (s+1)/(s²+s+1)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(s+1)/(s²+1)",
        "(s−1)/(s²+1)",
        "(s+1)/(s²+s+1)",
        "(s−1)/(s²+s+1)"
      ]
    },
    "figure": "pyq-figures/g10-51.png",
    "figureAlt": "Original GATE 2010 Q51 diagram and choices"
  },
  {
    "id": "g10-52",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "devices",
    "number": 52,
    "ref": "GATE 2010 · Q52",
    "file": "EC2010.pdf",
    "page": 14,
    "prompt": "A uniformly doped n-type silicon bar has ND=10¹⁶ cm⁻³, length 1 μm and 1 V applied across its ends, with μn=1350 cm²/(V·s),q=1.6×10⁻¹⁹ C and T=300 K. Find electric-field magnitude at its midpoint.",
    "answer": "(C) 10 kV/cm",
    "steps": [
      "Uniform doping and the ideal uniform-bar approximation give a uniform field.",
      "Convert length 1 μm=10⁻⁴ cm.",
      "The field magnitude is V/L=1/10⁻⁴=10⁴ V/cm=10 kV/cm."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1 kV/cm",
        "5 kV/cm",
        "10 kV/cm",
        "26 kV/cm"
      ]
    },
    "figure": "pyq-figures/g10-52.png",
    "figureAlt": "Original GATE 2010 Q52 diagram and choices"
  },
  {
    "id": "g10-53",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "devices",
    "number": 53,
    "ref": "GATE 2010 · Q53",
    "file": "EC2010.pdf",
    "page": 14,
    "prompt": "A uniformly doped n-type silicon bar has ND=10¹⁶ cm⁻³, length 1 μm and 1 V applied across its ends, with μn=1350 cm²/(V·s),q=1.6×10⁻¹⁹ C and T=300 K. Find electron drift-current density at its midpoint.",
    "answer": "(A) 2.16×10⁴ A/cm²",
    "steps": [
      "The electron concentration is approximately ND=10¹⁶ cm⁻³.",
      "From the preceding field calculation, |E|=10⁴ V/cm.",
      "Drift-current density magnitude is qnμnE=(1.6×10⁻¹⁹)(10¹⁶)(1350)(10⁴)=2.16×10⁴ A/cm²."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2.16×10⁴",
        "1.08×10⁴",
        "4.32×10³",
        "6.48×10²"
      ]
    },
    "figure": "pyq-figures/g10-53.png",
    "figureAlt": "Original GATE 2010 Q53 diagram and choices"
  },
  {
    "id": "g10-54",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "communication",
    "number": 54,
    "ref": "GATE 2010 · Q54",
    "file": "EC2010.pdf",
    "page": 14,
    "prompt": "A binary PAM receiver has an ideal unit-gain low-pass filter with cutoff 1 MHz. White input noise has two-sided PSD 10⁻²⁰ W/Hz. Its output noise sample has Laplace density p(n)=(α/2)e^(−α|n|), variance 2/α². Equally likely signal levels are 0,a and threshold a/2=10⁻⁶ V. Find α.",
    "answer": "(B) 10⁷ V⁻¹",
    "steps": [
      "The filter passes noise over −10⁶≤f≤10⁶ Hz.",
      "Output noise variance is 10⁻²⁰×2×10⁶=2×10⁻¹⁴ V².",
      "Equating 2/α²=2×10⁻¹⁴ gives α²=10¹⁴, so α=10⁷ V⁻¹."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10¹⁰",
        "10⁷",
        "1.414×10⁻¹⁰",
        "2×10⁻²⁰"
      ]
    }
  },
  {
    "id": "g10-55",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "communication",
    "number": 55,
    "ref": "GATE 2010 · Q55",
    "file": "EC2010.pdf",
    "page": 14,
    "prompt": "A binary PAM receiver has an ideal unit-gain low-pass filter with cutoff 1 MHz. White input noise has two-sided PSD 10⁻²⁰ W/Hz. Its output noise sample has Laplace density p(n)=(α/2)e^(−α|n|), variance 2/α². Equally likely signal levels are 0,a and threshold a/2=10⁻⁶ V. Find bit-error probability under the specified Laplace noise model.",
    "answer": "(D) 0.5e^(−10)",
    "steps": [
      "With bit 0, error occurs when N≥a/2. Its Laplace upper-tail probability is 0.5e^(−αa/2).",
      "With bit 1, error occurs when N<−a/2 and has the same probability by symmetry. Averaging equal priors does not introduce another factor of two.",
      "Since α=10⁷ and a/2=10⁻⁶, the exponent is −10. Thus Pe=0.5e^(−10)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.5e^(−1.5)",
        "0.5e^(−1)",
        "0.5e^(−0.1)",
        "0.5e^(−10)"
      ]
    }
  },
  {
    "id": "g10-56",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "aptitude",
    "number": 56,
    "ref": "GATE 2010 · Q56",
    "file": "EC2010.pdf",
    "page": 15,
    "prompt": "Choose the closest meaning of “circuitous”.",
    "answer": "(B) Indirect",
    "steps": [
      "Circuitous describes a route or expression that takes a roundabout way.",
      "It implies an indirect path rather than a straightforward one.",
      "Among cyclic,indirect,confusing,crooked, the closest meaning is indirect."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Cyclic",
        "Indirect",
        "Confusing",
        "Crooked"
      ]
    }
  },
  {
    "id": "g10-57",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "aptitude",
    "number": 57,
    "ref": "GATE 2010 · Q57",
    "file": "EC2010.pdf",
    "page": 15,
    "prompt": "Choose the analogy matching “unemployed : worker”.",
    "answer": "(A) Fallow : land",
    "steps": [
      "An unemployed worker is a worker currently not being put to work.",
      "Fallow land is land deliberately left uncultivated rather than actively farmed.",
      "Both pair a productive entity with its inactive condition."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Fallow : land",
        "Unaware : sleeper",
        "Wit : jester",
        "Renovated : house"
      ]
    }
  },
  {
    "id": "g10-58",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "aptitude",
    "number": 58,
    "ref": "GATE 2010 · Q58",
    "file": "EC2010.pdf",
    "page": 15,
    "prompt": "Choose the verb meaning to protect and use natural resources carefully for future generations.",
    "answer": "(D) Conserve",
    "steps": [
      "The context requires preserving resources and preventing waste.",
      "“Conserve” directly expresses that action.",
      "“Uphold”,“restrain” and“cherish” do not describe resource preservation as precisely."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Uphold",
        "Restrain",
        "Cherish",
        "Conserve"
      ]
    }
  },
  {
    "id": "g10-59",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "aptitude",
    "number": 59,
    "ref": "GATE 2010 · Q59",
    "file": "EC2010.pdf",
    "page": 15,
    "prompt": "Choose the word meaning “revealed” in the statement that casual political remarks ___ a speaker’s lack of seriousness.",
    "answer": "(C) Betrayed",
    "steps": [
      "The remarks expose the speaker’s attitude.",
      "“Betrayed” can mean inadvertently revealed or made evident.",
      "“Masked”,“belied” and“suppressed” would suggest hiding or contradicting rather than revealing the lack of seriousness."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Masked",
        "Belied",
        "Betrayed",
        "Suppressed"
      ]
    }
  },
  {
    "id": "g10-60",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "aptitude",
    "number": 60,
    "ref": "GATE 2010 · Q60",
    "file": "EC2010.pdf",
    "page": 15,
    "prompt": "Of 25 people,15 play hockey,17 football,and10 both. How many play neither?",
    "answer": "(D) 3",
    "steps": [
      "By inclusion–exclusion, the number playing at least one sport is 15+17−10=22.",
      "The overlap is subtracted once because it was counted in both groups.",
      "Those playing neither number 25−22=3."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2",
        "17",
        "13",
        "3"
      ]
    }
  },
  {
    "id": "g10-61",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "aptitude",
    "number": 61,
    "ref": "GATE 2010 · Q61",
    "file": "EC2010.pdf",
    "page": 15,
    "prompt": "A passage regrets the shift toward suppressing civilians and the military view that silent chemical agents are useful. Which conclusion best captures its critical stance?",
    "answer": "(C) Such use in warfare would be unjustifiable",
    "steps": [
      "The passage describes the supposed usefulness as a belief held by some military personnel.",
      "Its use of regret signals criticism rather than endorsement.",
      "The best summary is the moral objection to that use, rather than an assertion that the agents are beneficial."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Modern warfare has caused civil strife",
        "Chemical agents are useful in warfare",
        "Their use in warfare would be unjustifiable",
        "Military personnel like using them"
      ]
    }
  },
  {
    "id": "g10-62",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "aptitude",
    "number": 62,
    "ref": "GATE 2010 · Q62",
    "file": "EC2010.pdf",
    "page": 16,
    "prompt": "In a consistent positional number base,137+276=435. Compute 731+672 in that base.",
    "answer": "(C) 1623",
    "steps": [
      "In base b, the first equality gives (b²+3b+7)+(2b²+7b+6)=4b²+3b+5, so b²−7b−8=0 and the valid base is 8.",
      "Add in octal: units 1+2=3; eights 3+7=12₈, write 2 and carry 1.",
      "Next 7+6+1=16₈, write 6 and carry 1. The result is 1623₈."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "534",
        "1403",
        "1623",
        "1513"
      ]
    }
  },
  {
    "id": "g10-63",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "aptitude",
    "number": 63,
    "ref": "GATE 2010 · Q63",
    "file": "EC2010.pdf",
    "page": 16,
    "prompt": "Five skilled workers finish a wall in20 days; eight semi-skilled in25 days; ten unskilled in30 days. How long do2 skilled,6 semi-skilled and5 unskilled workers need?",
    "answer": "(D) 15 days",
    "steps": [
      "One worker’s daily rates are 1/100,1/200 and1/300 wall for the three groups.",
      "The combined daily rate is 2/100+6/200+5/300=1/15 wall.",
      "The required time is the reciprocal,15 days."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "20 days",
        "18 days",
        "16 days",
        "15 days"
      ]
    }
  },
  {
    "id": "g10-64",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "aptitude",
    "number": 64,
    "ref": "GATE 2010 · Q64",
    "file": "EC2010.pdf",
    "page": 16,
    "prompt": "Using the multiset {2,2,3,3,3,4,4,4,4}, how many distinct four-digit integers greater than3000 can be formed without exceeding available copies?",
    "answer": "(B) 51",
    "steps": [
      "The first digit must be3 or4.",
      "With leading3, the last three positions have3³=27 candidate strings over2,3,4. Exclude222 (three2s unavailable) and333 (four3s overall), leaving25.",
      "With leading4, only222 is forbidden among27, leaving26. Total25+26=51."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "50",
        "51",
        "52",
        "54"
      ]
    }
  },
  {
    "id": "g10-65",
    "paperId": "gate-2010",
    "exam": "gate",
    "topic": "aptitude",
    "number": 65,
    "ref": "GATE 2010 · Q65",
    "file": "EC2010.pdf",
    "page": 16,
    "prompt": "Siblings H,G,I,S have distinct integer-year ages, consecutive birth gaps below3 years,H+G>I+S,|G−S|=1,G not oldest,and S not youngest. Choose oldest-to-youngest order.",
    "answer": "(B) SGHI",
    "steps": [
      "Since G and S differ by one year, they must be adjacent in age order; another distinct integer age cannot lie between them.",
      "The proposed order HSIG violates that adjacency. In IGSH, H+G>I+S would require the one-year G−S gap to exceed the full I−H span, which is impossible. IHSG similarly contradicts the sum inequality.",
      "SGHI is feasible: ages S=4,G=3,H=2,I=0 have adjacent gaps1,1,2 and H+G=5>I+S=4. Thus it is the valid listed order."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "HSIG",
        "SGHI",
        "IGSH",
        "IHSG"
      ]
    }
  }
];
