export const isro2025Complete = [
  {
    "id": "i25-1",
    "exam": "isro",
    "topic": "signals",
    "ref": "ISRO 2025 · Set A · Q1",
    "file": "isro.pdf",
    "page": 3,
    "number": 1,
    "prompt": "Find poles and zeros of the Laplace transform of x(t)=δ(t)−(4/3)e^(−t)u(t)+(1/3)e^(2t)u(t).",
    "answer": "(b): poles −1 and 2; double zero at 1.",
    "steps": [
      "Transform each term: X(s)=1−4/[3(s+1)]+1/[3(s−2)].",
      "Use common denominator (s+1)(s−2).",
      "The numerator is (s+1)(s−2)−(4/3)(s−2)+(1/3)(s+1)=(s−1)².",
      "No factors cancel: poles are −1 and 2, and s=1 is a zero of multiplicity two."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Poles −1, 2; zero −1",
        "Poles −1, 2; zero 1",
        "Poles −1, −2; zero −1",
        "Poles 1, −2; zero −1"
      ]
    }
  },
  {
    "id": "i25-2",
    "exam": "isro",
    "topic": "networks",
    "ref": "ISRO 2025 · Set A · Q2",
    "file": "isro.pdf",
    "page": 3,
    "number": 2,
    "prompt": "Match a 50 Ω source to a 200 Ω load at 10 MHz with a lossless LC network providing high-pass filtering. Which topology, read source to load, works?",
    "answer": "(c): series capacitor followed by parallel inductor.",
    "steps": [
      "For resistance step-up, place the shunt reactance across the higher 200 Ω load.",
      "Matching Q=√(200/50−1)=√3. Thus |Xs|=50√3=86.60 Ω and |Xp|=200/√3=115.47 Ω.",
      "Choose negative series reactance (capacitor) and positive shunt reactance (inductor): 200 || j115.47=50+j86.60 Ω.",
      "The series capacitor cancels j86.60 Ω. At 10 MHz, C≈183.8 pF and L≈1.838 μH; the capacitor blocks low frequencies."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Series L followed by shunt C",
        "Shunt L followed by series C",
        "Series C followed by shunt L",
        "Shunt C followed by series L"
      ]
    }
  },
  {
    "id": "i25-3",
    "exam": "isro",
    "topic": "analog",
    "ref": "ISRO 2025 · Set A · Q3",
    "file": "isro.pdf",
    "page": 4,
    "number": 3,
    "prompt": "A capacitor C connects amplifier input and output; signed voltage gain is A. Find Miller equivalent input capacitance.",
    "answer": "(c): (1−A)C.",
    "steps": [
      "Let vo=Avi.",
      "Input capacitor current is i=C d(vi−vo)/dt=C(1−A)dvi/dt.",
      "Comparing with i=Cin dvi/dt gives Cin=C(1−A)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "C",
        "(1+A)C",
        "(1−A)C",
        "C/(1+A)"
      ]
    },
    "trap": "A is signed; an inverting gain A=−|A| yields C(1+|A|)."
  },
  {
    "id": "i25-4",
    "exam": "isro",
    "topic": "signals",
    "ref": "ISRO 2025 · Set A · Q4",
    "file": "isro.pdf",
    "page": 4,
    "number": 4,
    "prompt": "Which signal is periodic? x1(t) = 2 exp[j(t + π/4)]u(t); x2[n] = u[n] + u[−n]; and x3 is printed as x3(t) = Σ from k = −x to x of {δ[n−4k] − δ[n−1−4k]}. The summation bound x is not defined in the paper.",
    "answer": "Official key: (d), none of the above. The printed summation notation is ambiguous.",
    "steps": [
      "The factor u(t) switches x1 on at zero. A nonzero time shift cannot reproduce its one-sided support, so x1 is not periodic.",
      "With the usual discrete-time convention u[0] = 1, x2[n] equals 1 except for x2[0] = 2. That single exceptional sample prevents periodicity.",
      "Read literally with a fixed finite bound x, the third signal is a finite nonzero impulse train, which also cannot be periodic. This reading is consistent with official option (d).",
      "If the printed x bounds were intended to mean infinity, the two-sided train instead repeats every 4 samples and option (c) would be correct. The source does not resolve this notation defect."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "x1(t)",
        "x2[n]",
        "x3(t)",
        "None of the above"
      ]
    },
    "reviewNote": "The source prints x as its summation bounds and mixes t with n. The finite-bound and infinite-train interpretations give different results; do not silently substitute one for the other."
  },
  {
    "id": "i25-5",
    "exam": "isro",
    "topic": "em",
    "ref": "ISRO 2025 · Set A · Q5",
    "file": "isro.pdf",
    "page": 4,
    "number": 5,
    "prompt": "A λ/4 monopole radiates 20 W and has gain 3 dBi. Find EIRP.",
    "answer": "(c): approximately 40 W.",
    "steps": [
      "Convert gain from dBi: G=10^(3/10)=1.995.",
      "EIRP=Pradiated G.",
      "Thus EIRP=20×1.995=39.91 W≈40 W."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10 W",
        "20 W",
        "40 W",
        "60 W"
      ]
    }
  },
  {
    "id": "i25-6",
    "exam": "isro",
    "topic": "analog",
    "ref": "ISRO 2025 · Set A · Q6",
    "file": "isro.pdf",
    "page": 5,
    "number": 6,
    "prompt": "What is a key advantage of Class AB amplifiers over Class B?",
    "answer": "(d): reduced crossover distortion.",
    "steps": [
      "Class B output devices conduct on alternate half cycles and both can be off near the zero crossing.",
      "Class AB applies a small quiescent bias so conduction overlaps slightly around zero.",
      "This overlap reduces the dead zone and hence crossover distortion; it does require bias current."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Lower bias current",
        "Higher crossover distortion",
        "No heat sinks required",
        "Reduced crossover distortion"
      ]
    }
  },
  {
    "id": "i25-7",
    "exam": "isro",
    "topic": "signals",
    "ref": "ISRO 2025 · Set A · Q7",
    "file": "isro.pdf",
    "page": 5,
    "number": 7,
    "prompt": "Classify x(t)=sin(100πt)/(πt) by time and bandwidth support.",
    "answer": "(c): not time limited but band limited.",
    "steps": [
      "The transform pair sin(Ωc t)/(πt) ↔ 1 for |ω|<Ωc applies.",
      "Here Ωc=100π rad/s, so spectral support is |f|<50 Hz.",
      "The sinc tails extend to arbitrarily large positive and negative t; isolated zeros do not make it time limited."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Time limited and band limited",
        "Time limited but not band limited",
        "Not time limited but band limited",
        "Neither time limited nor band limited"
      ]
    }
  },
  {
    "id": "i25-8",
    "exam": "isro",
    "topic": "devices",
    "ref": "ISRO 2025 · Set A · Q8",
    "file": "isro.pdf",
    "page": 5,
    "number": 8,
    "prompt": "Which device is typically used for low-noise microwave receiver amplification?",
    "answer": "(d): HEMT.",
    "steps": [
      "A receiver front end must amplify weak microwave signals with a small added noise figure.",
      "A HEMT uses a high-mobility electron channel, enabling high transconductance and useful high-frequency gain.",
      "This makes HEMTs typical low-noise microwave front-end devices; klystrons and TWTs are primarily power-amplification choices."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Klystron",
        "Travelling Wave Tube Amplifier",
        "Tunnel diode",
        "HEMT"
      ]
    }
  },
  {
    "id": "i25-9",
    "exam": "isro",
    "topic": "analog",
    "ref": "ISRO 2025 · Set A · Q9",
    "file": "isro.pdf",
    "page": 6,
    "number": 9,
    "prompt": "Which condition makes the virtual-ground assumption valid in an op-amp circuit?",
    "answer": "(c): negative feedback with linear operation.",
    "steps": [
      "For an op-amp, vo=Aol(v+−v−).",
      "With large open-loop gain and a finite unsaturated output maintained by negative feedback, v+−v−=vo/Aol≈0.",
      "If v+ is grounded, v−≈0 is the virtual ground. Saturation or open-loop operation does not enforce this equality."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Infinite input impedance and zero output impedance",
        "Open-loop operation",
        "Negative feedback and operation in the linear region",
        "Very low gain"
      ]
    }
  },
  {
    "id": "i25-10",
    "exam": "isro",
    "topic": "comm",
    "ref": "ISRO 2025 · Set A · Q10",
    "file": "isro.pdf",
    "page": 6,
    "number": 10,
    "prompt": "Find the Huffman average codeword length for symbol probabilities A=0.4, B=0.3, C=0.2, D=0.1.",
    "answer": "(a): 1.9 bits/symbol.",
    "steps": [
      "Merge the two least probabilities 0.1 and 0.2 to obtain 0.3.",
      "Merge this 0.3 node with B=0.3, obtaining 0.6; merge 0.6 with A=0.4.",
      "The code lengths are lA=1, lB=2, lC=lD=3.",
      "Average length=0.4×1+0.3×2+0.2×3+0.1×3=1.9 bits/symbol."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1.9 bits",
        "2.0 bits",
        "2.2 bits",
        "1.8 bits"
      ]
    }
  },
  {
    "id": "i25-11",
    "exam": "isro",
    "topic": "em",
    "ref": "ISRO 2025 · Set A · Q11",
    "file": "isro.pdf",
    "page": 6,
    "number": 11,
    "prompt": "A lossless line is 80 cm long, operates at 600 MHz, and has L=0.25 μH/m and C=100 pF/m. Find phase velocity.",
    "answer": "(b): 2×10^8 m/s.",
    "steps": [
      "For a lossless line, β=ω√(LC), so vp=ω/β=1/√(LC).",
      "LC=(0.25×10^−6)(100×10^−12)=2.5×10^−17 s²/m².",
      "√(LC)=5×10^−9 s/m, yielding vp=2×10^8 m/s."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "3×10^8 m/s",
        "2×10^8 m/s",
        "4×10^8 m/s",
        "6×10^8 m/s"
      ]
    },
    "trap": "Length and frequency are unnecessary for phase velocity when L and C are supplied."
  },
  {
    "id": "i25-12",
    "exam": "isro",
    "topic": "digital",
    "ref": "ISRO 2025 · Set A · Q12",
    "file": "isro.pdf",
    "page": 7,
    "number": 12,
    "prompt": "VHDL signals A,B are std_logic initialized to 0. A process executes A <= 1; B <= A; wait; end process. What is B immediately after simulation starts?",
    "answer": "(b): 0.",
    "steps": [
      "Both signals initially equal 0.",
      "A <= 1 schedules a signal update for a delta cycle; it does not immediately change A during process execution.",
      "B <= A therefore reads the old A=0 and schedules B=0. The wait suspends the process; B remains 0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1",
        "0",
        "U (undefined)",
        "Z"
      ]
    }
  },
  {
    "id": "i25-13",
    "exam": "isro",
    "topic": "math",
    "ref": "ISRO 2025 · Set A · Q13",
    "file": "isro.pdf",
    "page": 7,
    "number": 13,
    "prompt": "Find the causal inverse Laplace transform of 10/(s²+5s+4).",
    "answer": "(d): (10/3)(e^(−t)−e^(−4t)) for t≥0.",
    "steps": [
      "Factor s²+5s+4=(s+1)(s+4).",
      "Write 10/[(s+1)(s+4)]=A/(s+1)+B/(s+4). Setting s=−1 and −4 gives A=10/3 and B=−10/3.",
      "Apply L^−1{1/(s+a)}=e^(−at)u(t) termwise."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10(e^(−t)+e^(−4t))",
        "10(e^(−t)−e^(−4t))",
        "(10/3)(e^(−t)+e^(−4t))",
        "(10/3)(e^(−t)−e^(−4t))"
      ]
    }
  },
  {
    "id": "i25-14",
    "exam": "isro",
    "topic": "comm",
    "ref": "ISRO 2025 · Set A · Q14",
    "file": "isro.pdf",
    "page": 7,
    "number": 14,
    "prompt": "Which performance metric does a minimum mean-square-error (MMSE) equalizer minimize?",
    "answer": "(b): mean squared estimation error.",
    "steps": [
      "Let d[k] be the desired transmitted symbol and y[k] the equalizer output.",
      "Define e[k]=d[k]−y[k]; the MMSE objective is J=E{|e[k]|²}.",
      "Minimizing J balances residual ISI and amplified noise; it does not separately force BER, ISI, or noise power to its minimum."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Bit error rate",
        "Mean squared error between transmitted and received signals",
        "Inter-symbol interference",
        "Noise power"
      ]
    }
  },
  {
    "id": "i25-15",
    "exam": "isro",
    "topic": "control",
    "ref": "ISRO 2025 · Set A · Q15",
    "file": "isro.pdf",
    "page": 8,
    "number": 15,
    "prompt": "Which statement best describes the practical utility of Middlebrook’s theorem?",
    "answer": "(c): predicts stability from impedance interactions.",
    "steps": [
      "Represent the upstream subsystem by output impedance Zout and downstream subsystem by input impedance Zin.",
      "Their interconnection introduces the minor-loop ratio Tm=Zout/Zin and factor 1+Tm in the characteristic relation.",
      "Study this ratio using the stability criterion; a common sufficient design condition keeps |Zout| well below |Zin|. This addresses cascade interaction stability."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Replaces all simulation",
        "Simplifies component count",
        "Predicts cascaded-system stability from impedance interactions",
        "Eliminates converter switching losses"
      ]
    }
  },
  {
    "id": "i25-16",
    "exam": "isro",
    "topic": "comm",
    "ref": "ISRO 2025 · Set A · Q16",
    "file": "isro.pdf",
    "page": 8,
    "number": 16,
    "prompt": "A 10 kW carrier is AM-modulated by two sinusoidal tones with modulation indices 0.30 and 0.40. Find total radiated power.",
    "answer": "(a): 11.25 kW.",
    "steps": [
      "For separate sinusoidal modulation tones, sideband powers add: PT=Pc[1+(m1²+m2²)/2].",
      "m1²+m2²=0.09+0.16=0.25.",
      "PT=10[1+0.25/2]=11.25 kW."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "11.25 kW",
        "10 kW",
        "20 kW",
        "5 kW"
      ]
    },
    "trap": "The source calls the modulating tones “carriers”; the power formula assumes distinct sinusoidal modulating frequencies."
  },
  {
    "id": "i25-17",
    "exam": "isro",
    "topic": "signals",
    "ref": "ISRO 2025 · Set A · Q17",
    "file": "isro.pdf",
    "page": 8,
    "number": 17,
    "prompt": "Find the Z-transform of x[n]=δ[n−k], where k is a positive integer.",
    "answer": "(b): z^(−k).",
    "steps": [
      "By definition X(z)=Σ from n=−∞ to ∞ x[n]z^(−n).",
      "δ[n−k] is nonzero only at n=k and has value 1 there.",
      "The sum reduces to z^(−k); its finite-plane ROC excludes z=0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "z^k",
        "z^(−k)",
        "1",
        "δ[z]"
      ]
    }
  },
  {
    "id": "i25-18",
    "exam": "isro",
    "topic": "math",
    "ref": "ISRO 2025 · Set A · Q18",
    "file": "isro.pdf",
    "page": 9,
    "number": 18,
    "prompt": "Which of these distributions is memoryless?",
    "answer": "(c): exponential.",
    "steps": [
      "For an exponential waiting time, P(T>t)=e^(−λt).",
      "P(T>s+t | T>s)=P(T>s+t)/P(T>s)=e^(−λ(s+t))/e^(−λs).",
      "This equals e^(−λt)=P(T>t), the memoryless property."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Normal",
        "Log-normal",
        "Exponential",
        "None of the above"
      ]
    }
  },
  {
    "id": "i25-19",
    "exam": "isro",
    "topic": "em",
    "ref": "ISRO 2025 · Set A · Q19",
    "file": "isro.pdf",
    "page": 9,
    "number": 19,
    "prompt": "A one-wavelength lossless 50 Ω line ends in ZL=30−j40 Ω. Its input loads a quarter-wavelength lossless 100 Ω line. Find impedance at the 100 Ω line input.",
    "answer": "(c): 120+j160 Ω.",
    "steps": [
      "A full-wavelength line repeats its termination, so the load seen by the 100 Ω section is 30−j40 Ω.",
      "A quarter-wave line transforms impedance as Zin=Z0²/Zload=10000/(30−j40).",
      "Rationalize: Zin=10000(30+j40)/(30²+40²)=4(30+j40)=120+j160 Ω."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "30+j40 Ω",
        "60+j40 Ω",
        "120+j160 Ω",
        "None of the above"
      ]
    }
  },
  {
    "id": "i25-20",
    "exam": "isro",
    "topic": "signals",
    "ref": "ISRO 2025 · Set A · Q20",
    "file": "isro.pdf",
    "page": 9,
    "number": 20,
    "prompt": "An LTI discrete-time system has h[n]=δ[n]+δ[n−1]. Find output for x[n]=u[n].",
    "answer": "(a): u[n]+u[n−1].",
    "steps": [
      "Convolution gives y[n]=x[n]*h[n].",
      "The identity x[n]*δ[n−k]=x[n−k] applies to each impulse.",
      "Thus y[n]=x[n]+x[n−1]=u[n]+u[n−1]; at n=0 it is 1, so it is not 2u[n]."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "u[n]+u[n−1]",
        "2u[n]",
        "δ[n]+δ[n−1]",
        "u[n]"
      ]
    }
  },
  {
    "id": "i25-21",
    "exam": "isro",
    "topic": "math",
    "ref": "ISRO 2025 · Set A · Q21",
    "file": "isro.pdf",
    "page": 10,
    "number": 21,
    "prompt": "Customer arrivals form a Poisson process of rate 10 per hour. Find probability that the interarrival time exceeds 10 minutes.",
    "answer": "(a): exp(−10/6)≈0.1889.",
    "steps": [
      "Poisson-process interarrival time T is exponential with rate λ=10 h^−1.",
      "Convert the interval: 10 min=1/6 h.",
      "P(T>1/6)=e^(−λ/6)=e^(−10/6)=0.1889."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "exp(−10/6)≈0.188",
        "exp(−1)≈0.368",
        "exp(−5/6)≈0.435",
        "1−exp(−5/6)≈0.565"
      ]
    }
  },
  {
    "id": "i25-22",
    "exam": "isro",
    "topic": "em",
    "ref": "ISRO 2025 · Set A · Q22",
    "file": "isro.pdf",
    "page": 10,
    "number": 22,
    "prompt": "A satellite 40000 km from an Earth observer radiates 2 W with antenna gain 17 dBi toward the observer. Find received power for effective receiving area 10 m².",
    "answer": "(c): approximately −133 dBW.",
    "steps": [
      "Convert Gt=10^(17/10)=50.119 and range r=4×10^7 m.",
      "Flux density S=PtGt/(4πr²); received power Pr=SAe.",
      "Pr=(2×50.119×10)/(4π×(4×10^7)²)=4.985×10^−14 W.",
      "10log10(Pr)=−133.02 dBW."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−110 dBW",
        "133 dBW",
        "−133 dBW",
        "110 dBW"
      ]
    }
  },
  {
    "id": "i25-23",
    "exam": "isro",
    "topic": "comm",
    "ref": "ISRO 2025 · Set A · Q23",
    "file": "isro.pdf",
    "page": 10,
    "number": 23,
    "prompt": "What is the primary distinction between Shannon source coding and channel coding theorems?",
    "answer": "(c): compression versus reliable communication.",
    "steps": [
      "Source entropy H sets the limiting lossless compression rate, so source coding removes statistical redundancy.",
      "Channel capacity C sets the rate below which arbitrarily reliable communication is theoretically achievable with long codes.",
      "Channel coding adds structured redundancy to protect against noise; option (c) matches these roles."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Source coding only lossless; channel coding only lossy",
        "Source coding only discrete; channel coding continuous",
        "Source coding compresses data; channel coding enables reliable transmission over noise",
        "Source coding increases redundancy; channel coding removes it"
      ]
    }
  },
  {
    "id": "i25-24",
    "exam": "isro",
    "topic": "digital",
    "ref": "ISRO 2025 · Set A · Q24",
    "file": "isro.pdf",
    "page": 11,
    "number": 24,
    "prompt": "For a half subtractor computing A−B, find difference D and borrow X. An overbar below is written using ¬.",
    "answer": "(b): D=A⊕B; X=(¬A)B.",
    "steps": [
      "For inputs AB=00,01,10,11, subtraction gives (D,X)=(0,0),(1,1),(1,0),(0,0).",
      "Difference is high exactly when A and B differ, giving D=(¬A)B+A(¬B).",
      "Borrow is high only for A=0,B=1, giving X=(¬A)B."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "D=AB+(¬A)(¬B), X=(¬A)B",
        "D=(¬A)B+A(¬B), X=(¬A)B",
        "D=(¬A)B+A(¬B), X=A(¬B)",
        "D=B+(¬A)(¬B), X=A(¬B)"
      ]
    }
  },
  {
    "id": "i25-25",
    "exam": "isro",
    "topic": "em",
    "ref": "ISRO 2025 · Set A · Q25",
    "file": "isro.pdf",
    "page": 11,
    "number": 25,
    "prompt": "Find the TE-mode wave impedance of a rectangular waveguide above cutoff. Here η is medium intrinsic impedance, fc cutoff, f operating frequency.",
    "answer": "(b): η/√[1−(fc/f)²].",
    "steps": [
      "For TE modes, transverse wave impedance is ZTE=ωμ/β.",
      "The guide propagation constant is β=ω√(με)√[1−(fc/f)²].",
      "Divide and use η=√(μ/ε) to obtain ZTE=η/√[1−(fc/f)²]."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "ηE/H",
        "η/√[1−(fc/f)²]",
        "η√[1−(fc/f)²]",
        "Constant"
      ]
    }
  },
  {
    "id": "i25-26",
    "exam": "isro",
    "topic": "digital",
    "ref": "ISRO 2025 · Set A · Q26",
    "file": "isro.pdf",
    "page": 11,
    "number": 26,
    "prompt": "A 10-bit ADC has quantization SNR 62 dB. If resolution increases by two bits under the same signal/range assumptions, find the new SNR.",
    "answer": "(b): about 74 dB.",
    "steps": [
      "Two extra bits divide quantization step Δ by 2²=4.",
      "Quantization noise variance Δ²/12 consequently falls by a factor of 16, with signal power unchanged.",
      "SNR improvement=10log10(16)=12.04 dB; new SNR≈62+12.04=74 dB."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "62 dB",
        "74 dB",
        "50 dB",
        "31 dB"
      ]
    }
  },
  {
    "id": "i25-27",
    "exam": "isro",
    "topic": "digital",
    "ref": "ISRO 2025 · Set A · Q27",
    "file": "isro.pdf",
    "page": 12,
    "number": 27,
    "prompt": "Which statement is not true about SRAM-based FPGAs?",
    "answer": "(d): the blanket lower-power claim is false.",
    "steps": [
      "SRAM configuration cells are writable, so the device can be reprogrammed.",
      "SRAM is volatile, so the configuration must be loaded at power-up, conventionally from external configuration storage.",
      "SRAM configuration incurs leakage and support overhead; it does not generally guarantee less power than Flash configuration. Thus (d) is the intended false statement."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Reprogrammable",
        "Require external configuration memory",
        "Configuration held in SRAM",
        "Lower power consumption than Flash FPGAs"
      ]
    },
    "reviewNote": "Option (b) is a conventional architecture assumption: some SRAM FPGAs have integrated nonvolatile configuration storage. Power comparisons are also device/workload dependent; interpret as the exam’s generic technology comparison."
  },
  {
    "id": "i25-28",
    "exam": "isro",
    "topic": "em",
    "ref": "ISRO 2025 · Set A · Q28",
    "file": "isro.pdf",
    "page": 12,
    "number": 28,
    "prompt": "According to Friis transmission equation, received power is directly proportional to which quantity, with gains and range held fixed?",
    "answer": "(b): wavelength squared.",
    "steps": [
      "Friis equation is Pr=PtGtGr[λ/(4πR)]².",
      "Hold Pt, Gt, Gr and R fixed.",
      "The remaining wavelength dependence is Pr∝λ²; equivalently Pr∝1/f²."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Distance squared",
        "Wavelength squared",
        "Frequency squared",
        "Transmitted power cubed"
      ]
    }
  },
  {
    "id": "i25-29",
    "exam": "isro",
    "topic": "devices",
    "ref": "ISRO 2025 · Set A · Q29",
    "file": "isro.pdf",
    "page": 12,
    "number": 29,
    "prompt": "Which statement describes temperature dependence of carrier mobility μ in a nondegenerate n-type semiconductor?",
    "answer": "Official (c): μ decreases as lattice scattering increases.",
    "steps": [
      "In a lattice-scattering-dominated regime, increasing temperature increases phonon populations.",
      "More phonon scattering reduces momentum-relaxation time τ; mobility μ=qτ/m* consequently falls.",
      "A common approximate dependence is μlattice∝T^(−3/2), consistent with (c).",
      "At low temperatures, ionized-impurity scattering may dominate and mobility can instead rise with T. Nondegeneracy alone does not select the regime."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "μ rises with T due to increased phonon scattering",
        "μ falls with T due to decreased lattice scattering",
        "μ falls with T due to increased lattice scattering",
        "μ is temperature independent"
      ]
    },
    "reviewNote": "The prompt omits the temperature/scattering regime. Official (c) assumes lattice-scattering dominance; the universal temperature claim is under-specified."
  },
  {
    "id": "i25-30",
    "exam": "isro",
    "topic": "devices",
    "ref": "ISRO 2025 · Set A · Q30",
    "file": "isro.pdf",
    "page": 13,
    "number": 30,
    "prompt": "Which power semiconductor is not a self-commutating device?",
    "answer": "(a): conventional thyristor (SCR).",
    "steps": [
      "Self-commutation means a device can be commanded off using its control terminal.",
      "MOSFETs and IGBTs turn off through gate-voltage control; a GTO can turn off with a negative gate-current pulse.",
      "A conventional SCR remains latched after triggering until main current falls below holding current, so it needs external or natural commutation."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Thyristor",
        "MOSFET",
        "IGBT",
        "GTO"
      ]
    }
  },
  {
    "id": "i25-31",
    "exam": "isro",
    "topic": "control",
    "ref": "ISRO 2025 · Set A · Q31",
    "file": "isro.pdf",
    "page": 13,
    "number": 31,
    "prompt": "Use Routh–Hurwitz to find the stable range of K for s⁴+2s³+3s²+4s+K=0.",
    "answer": "(d): 0<K<2.",
    "steps": [
      "Start Routh rows: s⁴: [1,3,K]; s³: [2,4,0].",
      "The s² row is [(2×3−1×4)/2, K]=[1,K].",
      "The s¹ first entry is (1×4−2K)/1=4−2K; s⁰ entry is K.",
      "All first-column entries 1,2,1,4−2K,K must be positive: K>0 and K<2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0<K<6",
        "0<K<8",
        "0<K<10",
        "0<K<2"
      ]
    }
  },
  {
    "id": "i25-32",
    "exam": "isro",
    "topic": "math",
    "ref": "ISRO 2025 · Set A · Q32",
    "file": "isro.pdf",
    "page": 13,
    "number": 32,
    "prompt": "Let real n×n matrices A and B be similar. Which assertion is true?",
    "answer": "(d): all of the above.",
    "steps": [
      "Similarity means B=P^−1AP for an invertible P.",
      "det(B)=det(P^−1)det(A)det(P)=det(A), and tr(B)=tr(APP^−1)=tr(A) by cyclicity.",
      "det(λI−B)=det[P^−1(λI−A)P]=det(λI−A); the characteristic polynomials and hence eigenvalues with multiplicities coincide."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "det(A)=det(B)",
        "tr(A)=tr(B)",
        "Same eigenvalues and characteristic polynomial",
        "All of the above"
      ]
    }
  },
  {
    "id": "i25-33",
    "exam": "isro",
    "topic": "devices",
    "ref": "ISRO 2025 · Set A · Q33",
    "file": "isro.pdf",
    "page": 14,
    "number": 33,
    "prompt": "A single-phase fully controlled bridge feeds a highly inductive load. What happens when firing angle increases from 30° to 120°?",
    "answer": "(c) Output voltage decreases; power factor worsens",
    "steps": [
      "For continuous current, average output is Vdc=(2Vm/π)cos α.",
      "cos30°=0.866, whereas cos120°=−0.5, so signed average voltage decreases and becomes negative.",
      "The fundamental input current displacement increases with α; its displacement factor changes from 0.866 to −0.5. The official qualitative answer is worsening power factor."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Output voltage increases; power factor improves",
        "Output voltage decreases; power factor improves",
        "Output voltage decreases; power factor worsens",
        "Output voltage increases; power factor worsens"
      ]
    },
    "reviewNote": "Sustained inversion with continuous positive current requires an active DC-side source; a purely passive highly inductive load does not by itself guarantee continuous current at 120°. Power-factor sign/magnitude convention should be stated."
  },
  {
    "id": "i25-34",
    "exam": "isro",
    "topic": "networks",
    "ref": "ISRO 2025 · Set A · Q34",
    "file": "isro.pdf",
    "page": 14,
    "number": 34,
    "prompt": "Find V across the 20 Ω resistor in the circuit. Bottom wire is reference; left node is +75 V. A 5 Ω resistor joins left node to V; 8 Ω joins V to right node; 12 Ω joins right node to reference. A 6 A source runs from right node to left node.",
    "answer": "(c) 38 V",
    "steps": [
      "Let the right-node voltage be Vr. KCL at V gives (V−75)/5+(V−Vr)/8+V/20=0.",
      "Multiplying by 40 gives 15V−5Vr=600, or 3V−Vr=120.",
      "Right-node KCL is (Vr−V)/8+Vr/12+6=0, giving 5Vr−3V=−144.",
      "Substitute Vr=3V−120: 12V=456, hence V=38 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "50 V",
        "36 V",
        "38 V",
        "12 V"
      ]
    }
  },
  {
    "id": "i25-35",
    "exam": "isro",
    "topic": "math",
    "ref": "ISRO 2025 · Set A · Q35",
    "file": "isro.pdf",
    "page": 14,
    "number": 35,
    "prompt": "Solve ∂u/∂t=4∂²u/∂x² for 0<x<π, with u(0,t)=u(π,t)=0 and u(x,0)=sin(3x).",
    "answer": "(a) e^(−36t)sin(3x)",
    "steps": [
      "The initial condition is a single spatial eigenmode sin(3x).",
      "Its second spatial derivative is −9sin(3x), so write u=A(t)sin(3x).",
      "The PDE gives A′=−36A and the initial condition gives A(0)=1.",
      "Thus u=e^(−36t)sin(3x); the sine vanishes at both boundaries."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "e^(−36t)sin(3x)",
        "−e^(−36t)sin(3x)",
        "−e^(9t)sin(3x)",
        "e^(−9t)sin(3x)"
      ]
    }
  },
  {
    "id": "i25-36",
    "exam": "isro",
    "topic": "control",
    "ref": "ISRO 2025 · Set A · Q36",
    "file": "isro.pdf",
    "page": 15,
    "number": 36,
    "prompt": "Which expression is the general Laplace-domain form of a lead or lag compensator?",
    "answer": "(c) K(1+sT1)/(1+sT2)",
    "steps": [
      "A first-order lead/lag compensator contains one finite zero and one finite pole.",
      "K(1+sT1)/(1+sT2) has zero −1/T1 and pole −1/T2.",
      "For positive time constants, T1>T2 yields phase lead and T1<T2 yields phase lag."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "K(1+sT1)(1+sT2)",
        "K(1+1/(sT1))(1+sT2)",
        "K(1+sT1)/(1+sT2)",
        "K(1+sT2)/(1+1/(sT1))"
      ]
    }
  },
  {
    "id": "i25-37",
    "exam": "isro",
    "topic": "networks",
    "ref": "ISRO 2025 · Set A · Q37",
    "file": "isro.pdf",
    "page": 15,
    "number": 37,
    "prompt": "The switch has occupied a for a long time and moves to b at t=0. Find initial capacitor voltage, final capacitor voltage and time constant; capacitor voltage is positive at its upper plate. Use the circuit shown.",
    "answer": "(d) −30 V,25 V,2.5 ms",
    "steps": [
      "Initially the capacitor is open at DC. The 75 V source has its positive terminal at the bottom, so the divider top is −75 V.",
      "The a-node voltage is −75×10/(15+10)=−30 V; capacitor voltage is continuous.",
      "Finally the capacitor branch draws no DC current, so the 20 kΩ resistor drops no voltage and Vfinal=5 mA×5 kΩ=25 V.",
      "Deactivate the independent current source (open it): the capacitor sees 20 kΩ+5 kΩ=25 kΩ. Thus τ=25 kΩ×100 nF=2.5 ms."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "30 V,125 V,25 ms",
        "30 V,25 V,25 ms",
        "−30 V,125 V,2.5 ms",
        "−30 V,25 V,2.5 ms"
      ]
    },
    "figure": "pyq-figures/i25-37.png",
    "figureAlt": "Original diagram for ISRO 2025 question 37"
  },
  {
    "id": "i25-38",
    "exam": "isro",
    "topic": "analog",
    "ref": "ISRO 2025 · Set A · Q38",
    "file": "isro.pdf",
    "page": 15,
    "number": 38,
    "prompt": "In an NMOS common-source amplifier, what is the effect of increasing channel-length modulation parameter λ?",
    "answer": "(c) Output resistance decreases",
    "steps": [
      "Channel-length modulation makes saturation drain current rise with drain voltage.",
      "At a fixed bias current, small-signal output resistance is approximately ro=1/(λID).",
      "Increasing λ therefore decreases ro and usually reduces common-source voltage-gain magnitude."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Output resistance increases",
        "Gain increases",
        "Output resistance decreases",
        "Output characteristics do not change"
      ]
    }
  },
  {
    "id": "i25-39",
    "exam": "isro",
    "topic": "devices",
    "ref": "ISRO 2025 · Set A · Q39",
    "file": "isro.pdf",
    "page": 16,
    "number": 39,
    "prompt": "A single-phase bipolar-PWM inverter has switching frequency much greater than fundamental frequency. How does fundamental voltage amplitude change when modulation index Ma rises from 0.8 to 1.2?",
    "answer": "(b) Increases beyond 1 and eventually saturates",
    "steps": [
      "For Ma≤1 the sinusoidal PWM fundamental is proportional to Ma.",
      "Above 1 the reference exceeds the carrier peaks, entering overmodulation and clipping the switching pattern.",
      "The fundamental still rises but no longer linearly; with deeper overmodulation it approaches the square-wave limit."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Increases linearly even beyond 1",
        "Increases beyond 1 and eventually saturates",
        "Remains constant beyond 1",
        "Decreases beyond 1"
      ]
    }
  },
  {
    "id": "i25-40",
    "exam": "isro",
    "topic": "digital",
    "ref": "ISRO 2025 · Set A · Q40",
    "file": "isro.pdf",
    "page": 16,
    "number": 40,
    "prompt": "A Mealy machine outputs 1 when at least two consecutive zeros are immediately followed by two or more consecutive ones. What is its minimum number of states?",
    "answer": "(c) 4",
    "steps": [
      "Track four distinguishable histories: no useful suffix, one zero, at least two zeros, and a qualified run of ones.",
      "After two zeros, the first one enters the last state with output 0.",
      "A further one produces output 1 and loops in that state, so longer qualifying runs need no extra state.",
      "A zero from a one-run starts the one-zero state; the four histories cannot be merged because future suffixes produce different outputs."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2",
        "3",
        "4",
        "5"
      ]
    }
  },
  {
    "id": "i25-41",
    "exam": "isro",
    "topic": "digital",
    "ref": "ISRO 2025 · Set A · Q41",
    "file": "isro.pdf",
    "page": 17,
    "number": 41,
    "prompt": "Which change reduces the mean time between metastability failures (MTBF)?",
    "answer": "(c) Increase clock frequency and data-arrival rate",
    "steps": [
      "A typical synchronizer model is MTBF≈exp(Tresolve/τ)/(C fclock fdata).",
      "Increasing resolution time improves MTBF exponentially.",
      "Increasing either clock frequency or asynchronous data activity increases opportunities for metastability, reducing MTBF."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Decrease flip-flop setup time",
        "Increase metastability resolution time",
        "Increase clock frequency and data-arrival rate",
        "All of these"
      ]
    }
  },
  {
    "id": "i25-42",
    "exam": "isro",
    "topic": "signals",
    "ref": "ISRO 2025 · Set A · Q42",
    "file": "isro.pdf",
    "page": 17,
    "number": 42,
    "prompt": "Let x(t)=rect(t/2), equal to 1 for |t|≤1 and zero otherwise. Find its Fourier transform X(ω), using sinc z=sin z/z.",
    "answer": "(a) 2sinc(ω)",
    "steps": [
      "Use X(ω)=∫x(t)e^(−jωt)dt.",
      "Integrate over −1≤t≤1: X=(e^(jω)−e^(−jω))/(jω)=2sinω/ω.",
      "Thus X=2sincω, with limiting value X(0)=2 equal to pulse area."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2sinc(ω)",
        "sinc(ω)",
        "2sinc(ω/2)",
        "sinc(ω/2)"
      ]
    }
  },
  {
    "id": "i25-43",
    "exam": "isro",
    "topic": "devices",
    "ref": "ISRO 2025 · Set A · Q43",
    "file": "isro.pdf",
    "page": 17,
    "number": 43,
    "prompt": "For the shown ideal-diode circuit determine the bias states of D1, D2 and D3 (FB=forward bias; RB=reverse bias).",
    "answer": "(b) D1 FB,D2 RB,D3 FB",
    "steps": [
      "D3 conducts from the 10 V supply and clamps its right node to 10 V. D1 conducts from 0 V and clamps the 7 kΩ/2.5 kΩ junction to 0 V.",
      "The middle node between 3 kΩ and 7 kΩ is then 10×7/(3+7)=7 V.",
      "D2 has anode +5 V and cathode 7 V, so it is reverse biased.",
      "D1 supplies 5/2.5k−7/7k=1 mA and D3 supplies (10−7)/3k=1 mA, confirming both forward assumptions."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "D1 FB,D2 FB,D3 FB",
        "D1 FB,D2 RB,D3 FB",
        "D1 FB,D2 FB,D3 RB",
        "D1 FB,D2 RB,D3 RB"
      ]
    },
    "figure": "pyq-figures/i25-43.png",
    "figureAlt": "Original diagram for ISRO 2025 question 43"
  },
  {
    "id": "i25-44",
    "exam": "isro",
    "topic": "control",
    "ref": "ISRO 2025 · Set A · Q44",
    "file": "isro.pdf",
    "page": 18,
    "number": 44,
    "prompt": "Frequency-response table: ω (rad/s)=[1,10,100,1000], gain labelled dB=[8,1,0.25,0.1], phase (degrees)=[−50,−155,−180,−235]. Find phase margin and gain margin.",
    "answer": "Excluded from evaluation in final official key",
    "steps": [
      "The official final key excludes this question; no option should be scored as uniquely correct.",
      "If the gain entries are linear magnitudes, unity gain occurs at 10 rad/s, giving PM=180−155=25°.",
      "Under that linear interpretation, phase crossover occurs at 100 rad/s and GM=1/0.25=4, suggesting option (b).",
      "But the table explicitly labels gain in dB. Then none of the listed frequencies is a 0 dB crossover, and gain margin at −180° is −0.25 dB. The printed data do not justify the intended pair."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "4,25",
        "25,4",
        "25,0.25",
        "0.25,25"
      ]
    },
    "reviewNote": "Withdrawn question. The linear-vs-dB conflict is a genuine defect; the official key does not state a withdrawal reason.",
    "excluded": true
  },
  {
    "id": "i25-45",
    "exam": "isro",
    "topic": "networks",
    "ref": "ISRO 2025 · Set A · Q45",
    "file": "isro.pdf",
    "page": 18,
    "number": 45,
    "prompt": "A network has driving-point impedance Z(s)=(s²+3s+2)/[s(s+2)]. Which synthesis statement is correct?",
    "answer": "(c) Can be realized using passive elements only",
    "steps": [
      "Factor the numerator: (s+1)(s+2).",
      "Cancel the common factor to obtain Z(s)=(s+1)/s=1+1/s.",
      "This is a 1 Ω resistor in series with a 1 F capacitor. Both elements are passive.",
      "The nonzero real part rules out a realization using ideal inductors and capacitors alone."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Cannot be realized with passive elements only",
        "Can be realized using L and C only",
        "Can be realized using passive elements only",
        "Not positive real and cannot be synthesized"
      ]
    }
  },
  {
    "id": "i25-46",
    "exam": "isro",
    "topic": "analog",
    "ref": "ISRO 2025 · Set A · Q46",
    "file": "isro.pdf",
    "page": 19,
    "number": 46,
    "prompt": "For the illustrated feedback circuit determine the signs of op-amp inputs A and B for negative feedback and the transistor gate potential. Vref=3 V, Vdd=5 V, bias current=0.5 mA, μnCox(W/L)=1 mA/V², VT=0.7 V.",
    "answer": "(a) A positive, B negative",
    "steps": [
      "The official key selects A as noninverting and B as inverting.",
      "With the intended source-follower feedback interpretation, a gate-voltage increase raises the sensed source voltage, so B must be the inverting input.",
      "The square-law bias equation is 0.5 mA=(1/2)(1 mA/V²)(VGS−0.7)², giving VGS=1.7 V.",
      "If the sensed source is regulated to 3 V, the required gate potential is 3+1.7=4.7 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "A positive, B negative",
        "A negative, B positive",
        "Both",
        "Neither"
      ]
    },
    "reviewNote": "Review diagram before publication: transistor terminal connections/3 V annotation are unusually drawn. The gate-voltage result assumes the intended NMOS source-follower interpretation; the choices test only input signs.",
    "figure": "pyq-figures/i25-46.png",
    "figureAlt": "Original diagram for ISRO 2025 question 46"
  },
  {
    "id": "i25-47",
    "exam": "isro",
    "topic": "networks",
    "ref": "ISRO 2025 · Set A · Q47",
    "file": "isro.pdf",
    "page": 20,
    "number": 47,
    "prompt": "Choose the signal-flow graph corresponding to the resistor ladder shown, with node voltages v1,v2,v3 and clockwise mesh currents i1,i2. The four graph choices are included in the figure.",
    "answer": "(b) The second signal-flow graph",
    "steps": [
      "The first branch obeys i1=(v1−v2)/R1: feedforward v1→i1 is 1/R1 and feedback v2→i1 is −1/R1.",
      "At the shunt R3, v2=R3(i1−i2): i1→v2 is R3 and i2→v2 is −R3.",
      "The second branch obeys i2=(v2−v3)/R2, giving 1/R2 forward and −1/R2 feedback.",
      "Finally v3=R4 i2 and vo=v3. These gains match graph (b)."
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
    "figure": "pyq-figures/i25-47.png",
    "figureAlt": "Original diagram for ISRO 2025 question 47"
  },
  {
    "id": "i25-48",
    "exam": "isro",
    "topic": "em",
    "ref": "ISRO 2025 · Set A · Q48",
    "file": "isro.pdf",
    "page": 20,
    "number": 48,
    "prompt": "An antenna has radiation resistance 63 Ω, loss resistance 7 Ω and linear power gain 16. Find its directivity.",
    "answer": "(b) 12.5 dB",
    "steps": [
      "Radiation efficiency is η=Rrad/(Rrad+Rloss)=63/70=0.9.",
      "Gain and directivity satisfy G=ηD, so D=16/0.9=17.7778 as a linear ratio.",
      "Convert to decibels: DdB=10log10(17.7778)=12.50 dB."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "48.26 dB",
        "12.5 dB",
        "17.77 dB",
        "24.7 dB"
      ]
    },
    "trap": "17.77 is the linear directivity, not its dB value."
  },
  {
    "id": "i25-49",
    "exam": "isro",
    "topic": "digital",
    "ref": "ISRO 2025 · Set A · Q49",
    "file": "isro.pdf",
    "page": 21,
    "number": 49,
    "prompt": "Determine the output function Y of the MOS network shown. Q1 is tied to VDD as a load; A,B form the left series path to ground, C,D the right series path, and E bridges their midpoints.",
    "answer": "Excluded from evaluation in final official key",
    "steps": [
      "The final official answer key excludes this question. Do not assign a unique official option.",
      "The conducting paths through an ideal active-high pull-down network are AB, CD, AED and CEB.",
      "Their OR, AB+CD+AED+CEB, describes pull-down conduction, which would suggest option (b) only if asked for the conduction condition.",
      "For an ordinary load-plus-NMOS pull-down logic output, Y is the complement of that expression. None of the printed choices includes the complement."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Y=AB+CD+CEB",
        "Y=AB+CD+AED+CEB",
        "Y=AB+AED+CEB",
        "Y=AB+CD"
      ]
    },
    "reviewNote": "Withdrawn. The inversion mismatch is a genuine circuit-versus-choice concern; the key does not give its reason for exclusion.",
    "figure": "pyq-figures/i25-49.png",
    "figureAlt": "Original diagram for ISRO 2025 question 49",
    "excluded": true
  },
  {
    "id": "i25-50",
    "exam": "isro",
    "topic": "control",
    "ref": "ISRO 2025 · Set A · Q50",
    "file": "isro.pdf",
    "page": 21,
    "number": 50,
    "prompt": "A proportional-plus-derivative controller: (i) has high sensitivity; (ii) improves steady-state accuracy; (iii) increases system stability. Which statements are correct?",
    "answer": "(d) (i) and (iii)",
    "steps": [
      "A PD controller is C(s)=Kp+Kds.",
      "The derivative term grows with frequency and is sensitive to rapid changes and high-frequency measurement noise, supporting (i).",
      "Derivative action can add damping and phase lead, improving relative stability when properly tuned, supporting (iii).",
      "At DC the derivative term vanishes, so it does not itself improve steady-state error at fixed Kp; statement (ii) is not the defining PD benefit."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(i),(ii),(iii)",
        "(i),(ii)",
        "(ii),(iii)",
        "(i),(iii)"
      ]
    }
  },
  {
    "id": "i25-51",
    "exam": "isro",
    "topic": "em",
    "ref": "ISRO 2025 · Set A · Q51",
    "file": "isro.pdf",
    "page": 22,
    "number": 51,
    "prompt": "Two magnetic media have permeabilities μ1 and μ2, and fields H1,H2 with normal components Hn1,Hn2 and tangential components Ht1,Ht2. Which boundary conditions apply?",
    "answer": "(b) Ht1=Ht2 and μ1Hn1=μ2Hn2",
    "steps": [
      "Gauss’s law for magnetism requires continuity of normal B: Bn1=Bn2.",
      "Using B=μH gives μ1Hn1=μ2Hn2.",
      "With no free surface current, the tangential H field is continuous: Ht1=Ht2. The complete H vectors need not be equal."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "H1=H2 and Ht1=Ht2",
        "Ht1=Ht2 and μ1Hn1=μ2Hn2",
        "H1=H2 and μ1Hn1=μ2Hn2",
        "H1=H2, Ht1=Ht2 and μ1Hn1=μ2Hn2"
      ]
    },
    "reviewNote": "The standard no-free-surface-current assumption is implicit in the official answer."
  },
  {
    "id": "i25-52",
    "exam": "isro",
    "topic": "devices",
    "ref": "ISRO 2025 · Set A · Q52",
    "file": "isro.pdf",
    "page": 22,
    "number": 52,
    "prompt": "In the common-base PNP circuit, base is grounded; emitter connects through 4 kΩ to +9 V; collector connects through 2.2 kΩ to −9 V. Given VEB=0.7 V and α=0.992, find VBC.",
    "answer": "(c) 4.47 V",
    "steps": [
      "The grounded base and VEB=0.7 V give VE=+0.7 V.",
      "IE=(9−0.7)/4 kΩ=2.075 mA; IC=αIE=0.992×2.075=2.0584 mA.",
      "VC=−9+IC×2.2 kΩ=−4.47152 V.",
      "VBC=VB−VC=0−(−4.47152)=4.47 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "7.47 V",
        "8.43 V",
        "4.47 V",
        "0.47 V"
      ]
    }
  },
  {
    "id": "i25-53",
    "exam": "isro",
    "topic": "control",
    "ref": "ISRO 2025 · Set A · Q53",
    "file": "isro.pdf",
    "page": 23,
    "number": 53,
    "prompt": "A negative-feedback system has forward transfer G(s)=K/[s(s+1)(s+4)] and feedback H(s)=s+u. The paper asks for the sensitivity of steady-state error for a step input “u”. Choose the listed expression.",
    "answer": "(d) 1/(u−1)",
    "steps": [
      "For a unit command step and nonzero u, G(0) tends to infinity, so closed-loop DC output is 1/H(0)=1/u.",
      "If tracking error is defined as command minus output, ess=1−1/u=(u−1)/u.",
      "Its derivative with respect to feedback parameter u is dess/du=1/u².",
      "Normalized sensitivity is (u/ess)(dess/du)=1/(u−1), matching (d), away from u=0 and u=1."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(u−1)/u",
        "(u−1)/u²",
        "u²/(u−1)",
        "1/(u−1)"
      ]
    },
    "reviewNote": "Wording reuses u as step-input label and feedback parameter and does not name the sensitivity parameter. Official option (d) follows normalized sensitivity of command-output tracking error to feedback parameter u, assuming a stable closed loop. Summing-junction error has a different interpretation."
  },
  {
    "id": "i25-54",
    "exam": "isro",
    "topic": "em",
    "ref": "ISRO 2025 · Set A · Q54",
    "file": "isro.pdf",
    "page": 23,
    "number": 54,
    "prompt": "For complex permittivity ε=ε′−jε″ and loss tangent tanδ=ε″/ε′, what does tanδ→∞ physically imply?",
    "answer": "(a) Medium behaves like a perfect conductor",
    "steps": [
      "Loss tangent measures dissipative response relative to stored electric energy.",
      "With conduction represented by ε″=σ/ω, tanδ=σ/(ωε′) is the conduction-to-displacement current ratio.",
      "A very large ratio is conductor-dominated; the ideal limiting interpretation in the choices is a perfect conductor."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Medium behaves like a perfect conductor",
        "Lossless dielectric",
        "Perfect insulator",
        "Displacement current dominates conduction current"
      ]
    },
    "reviewNote": "An infinite ratio alone can also arise by taking ε′→0; the answer uses the conventional conductor-limit interpretation."
  },
  {
    "id": "i25-55",
    "exam": "isro",
    "topic": "analog",
    "ref": "ISRO 2025 · Set A · Q55",
    "file": "isro.pdf",
    "page": 24,
    "number": 55,
    "prompt": "For the ideal op-amp circuit shown, find directed currents I1,I2,I3. Noninverting input is grounded; +1 V enters the inverting node through 10 kΩ. The feedback T network has 10 kΩ from inverting node to junction, 1 kΩ from junction to output, and 100 Ω from junction to ground. I1 points toward inverting node, I2 toward junction, I3 from ground up toward junction.",
    "answer": "(a) I1=100 μA,I2=100 μA,I3=10 mA",
    "steps": [
      "Ideal negative feedback gives a virtual ground at the inverting input.",
      "I1=(1−0)/10 kΩ=100 μA. With no op-amp input current, I2=I1.",
      "Across the feedback 10 kΩ resistor, 0−Vjunction=100 μA×10 kΩ=1 V, hence Vjunction=−1 V.",
      "I3=(0−(−1))/100 Ω=10 mA upward."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "100 μA,100 μA,10 mA",
        "10 mA,1 μA,100 μA",
        "50 μA,100 μA,100 μA",
        "100 mA,1 μA,100 μA"
      ]
    }
  },
  {
    "id": "i25-56",
    "exam": "isro",
    "topic": "control",
    "ref": "ISRO 2025 · Set A · Q56",
    "file": "isro.pdf",
    "page": 24,
    "number": 56,
    "prompt": "A Bode magnitude asymptote has slope −20 dB/decade below ω=1 rad/s, −40 between 1 and 20, and −60 above 20; it is 40 dB at ω=1 and crosses 0 dB near ω=10. Which transfer function is intended?",
    "answer": "(d) 2000/[s(s+1)(s+20)]",
    "steps": [
      "The initial −20 dB/decade slope indicates an integrator.",
      "The two further slope decreases indicate poles with break frequencies 1 and 20 rad/s.",
      "For the conventional stable-pole model, G=K/[s(s+1)(s+20)]. Below the first break, |G|≈K/(20ω).",
      "At the first asymptotic break, 40 dB means magnitude 100, giving K=2000 and option (d)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2000/[s(s−1)(s+20)]",
        "2000/[s(s−1)(s−20)]",
        "1000/[s(s+1)(s−20)]",
        "2000/[s(s+1)(s+20)]"
      ]
    },
    "reviewNote": "Magnitude alone cannot distinguish s−a from s+a on the imaginary axis. Options (a),(b),(d) have identical magnitudes; the official answer assumes stable poles. The plotted finite 60 dB ordinate at ω=0 is only schematic."
  },
  {
    "id": "i25-57",
    "exam": "isro",
    "topic": "comm",
    "ref": "ISRO 2025 · Set A · Q57",
    "file": "isro.pdf",
    "page": 25,
    "number": 57,
    "prompt": "A channel has bandwidth 3 kHz and SNR 30 dB. Find its capacity.",
    "answer": "(a) Approximately 30 kbps",
    "steps": [
      "Convert power SNR from dB: S/N=10^(30/10)=1000.",
      "Apply Shannon capacity C=B log2(1+S/N).",
      "C=3000 log2(1001)≈29902 bit/s≈30 kbps."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Approximately 30 kbps",
        "Approximately 20 kbps",
        "Approximately 2.1 kbps",
        "Approximately 3.3 kbps"
      ]
    }
  },
  {
    "id": "i25-58",
    "exam": "isro",
    "topic": "analog",
    "ref": "ISRO 2025 · Set A · Q58",
    "file": "isro.pdf",
    "page": 25,
    "number": 58,
    "prompt": "An ideal comparator has its inverting input connected to the midpoint of two equal 10 kΩ resistors from +12 V to ground. Vi drives the noninverting input. Output drives a resistor and an LED oriented to conduct to ground for positive output. When is the LED ON?",
    "answer": "(b) Vi>6 V",
    "steps": [
      "The equal-resistor divider sets V−=12×10/(10+10)=6 V.",
      "The comparator output is positive when V+=Vi exceeds V−.",
      "The LED is forward-driven by positive output, so it lights for Vi>6 V. At equality the ideal comparator state is unspecified."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Vi<6 V",
        "Vi>6 V",
        "Vi<12 V",
        "Vi>12 V"
      ]
    }
  },
  {
    "id": "i25-59",
    "exam": "isro",
    "topic": "analog",
    "ref": "ISRO 2025 · Set A · Q59",
    "file": "isro.pdf",
    "page": 26,
    "number": 59,
    "prompt": "Classify feedback topology of the shown amplifier: Vin enters the op-amp noninverting input through 1 kΩ; the op-amp drives an NPN emitter follower from +10 V. Output is the emitter, biased by a 0.2 mA sink. A divider of 10 kΩ from output to inverting input and 1 kΩ from inverting input to ground supplies feedback.",
    "answer": "(c) Series-Shunt",
    "steps": [
      "The feedback divider samples output voltage across the output port, which is shunt sampling.",
      "The op-amp compares Vin and the feedback voltage as a differential voltage, which is series mixing.",
      "Input-mixing first and output-sampling second gives series-shunt feedback, the voltage-amplifier topology."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Series-Series",
        "Shunt-Series",
        "Series-Shunt",
        "Shunt-Shunt"
      ]
    }
  },
  {
    "id": "i25-60",
    "exam": "isro",
    "topic": "signals",
    "ref": "ISRO 2025 · Set A · Q60",
    "file": "isro.pdf",
    "page": 26,
    "number": 60,
    "prompt": "Find the Nyquist rate of x(t)=5cos(100πt)+2sin(200πt).",
    "answer": "(b) 200 Hz",
    "steps": [
      "For cos(2πft), 100π corresponds to f=50 Hz.",
      "The sine term has frequency 200π/(2π)=100 Hz, the highest frequency present.",
      "Nyquist rate is twice the highest frequency: 2×100=200 samples/s (listed as Hz)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "100 Hz",
        "200 Hz",
        "400 Hz",
        "50 Hz"
      ]
    }
  },
  {
    "id": "i25-61",
    "exam": "isro",
    "topic": "devices",
    "ref": "ISRO 2025 · Set A · Q61",
    "file": "isro.pdf",
    "page": 27,
    "number": 61,
    "prompt": "A single-phase full-wave SCR controlled rectifier feeds a resistive load at firing angle α=60°. Vm is peak input voltage. Under ideal conditions, which average-voltage expression is true?",
    "answer": "(a) (Vm/π)(1+cos60°)",
    "steps": [
      "For a resistive load, SCR current stops at the end of each half-cycle.",
      "There are two identical positive output pulses per full cycle, each conducting from α to π.",
      "Vavg=(2/2π)∫α^π Vm sinθ dθ=(Vm/π)(1+cosα).",
      "At α=60°, this becomes 1.5Vm/π, corresponding to (a)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(Vm/π)(1+cos60°)",
        "(2Vm/π)(1−cos60°)",
        "(2Vm/π)(1+cos60°)",
        "Vm cos60°"
      ]
    }
  },
  {
    "id": "i25-62",
    "exam": "isro",
    "topic": "comm",
    "ref": "ISRO 2025 · Set A · Q62",
    "file": "isro.pdf",
    "page": 27,
    "number": 62,
    "prompt": "What causes a digital-communication eye diagram to close vertically and horizontally?",
    "answer": "(b) Timing jitter and ISI",
    "steps": [
      "The vertical eye opening represents decision-amplitude margin. ISI makes neighboring symbols shift the sampled amplitude.",
      "The horizontal opening represents the range of safe sampling instants; timing jitter spreads transition times.",
      "Together ISI and timing jitter account for the stated vertical and horizontal closure."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "ISI only",
        "Timing jitter and ISI",
        "AWGN only",
        "Synchronization drift only"
      ]
    }
  },
  {
    "id": "i25-63",
    "exam": "isro",
    "topic": "devices",
    "ref": "ISRO 2025 · Set A · Q63",
    "file": "isro.pdf",
    "page": 27,
    "number": 63,
    "prompt": "A Wheatstone-bridge strain gauge has gauge factor 2.0 and experiences 250 microstrain. Find relative resistance change ΔR/R.",
    "answer": "(c) 500 ppm",
    "steps": [
      "Gauge factor is GF=(ΔR/R)/ε.",
      "Convert strain: ε=250×10^−6.",
      "ΔR/R=2.0×250×10^−6=500×10^−6=500 ppm. The bridge does not change this gauge relation."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "250 ppm",
        "125 ppm",
        "500 ppm",
        "1000 ppm"
      ]
    }
  },
  {
    "id": "i25-64",
    "exam": "isro",
    "topic": "devices",
    "ref": "ISRO 2025 · Set A · Q64",
    "file": "isro.pdf",
    "page": 28,
    "number": 64,
    "prompt": "Which condition maximizes diffusion current in a semiconductor?",
    "answer": "(c) Steep concentration gradient",
    "steps": [
      "Diffusion current arises from spatial carrier-concentration variation.",
      "In one dimension, Jn,diff=qDn dn/dx and Jp,diff=−qDp dp/dx.",
      "For fixed diffusion coefficients, steeper concentration gradients increase diffusion-current magnitude. A high electric field primarily drives drift current."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Uniform doping profile",
        "High electric field",
        "Steep concentration gradient",
        "Zero temperature gradient"
      ]
    }
  },
  {
    "id": "i25-65",
    "exam": "isro",
    "topic": "networks",
    "ref": "ISRO 2025 · Set A · Q65",
    "file": "isro.pdf",
    "page": 28,
    "number": 65,
    "prompt": "A 10 Ω resistor is in series with an inductor having reactance 10 Ω. Find the AC power factor.",
    "answer": "(b) 0.707 lagging",
    "steps": [
      "The impedance is Z=10+j10 Ω.",
      "Its magnitude is √(10²+10²)=10√2 Ω.",
      "Power factor R/|Z|=1/√2≈0.707; inductance makes current lag voltage."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.5 lagging",
        "0.707 lagging",
        "1.0 (unity)",
        "0.866 leading"
      ]
    }
  },
  {
    "id": "i25-66",
    "exam": "isro",
    "topic": "digital",
    "ref": "ISRO 2025 · Set A · Q66",
    "file": "isro.pdf",
    "page": 28,
    "number": 66,
    "prompt": "In a CMOS inverter operating in its transition region, what best describes the NMOS and PMOS?",
    "answer": "(c) Both are conducting",
    "steps": [
      "As input rises above the NMOS threshold, NMOS conducts.",
      "During switching the PMOS gate-to-source magnitude can still exceed its threshold.",
      "Both devices therefore conduct in the transition region."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Both are in cutoff region",
        "Only PMOS conducts",
        "Both are conducting",
        "Only NMOS conducts"
      ]
    }
  },
  {
    "id": "i25-67",
    "exam": "isro",
    "topic": "analog",
    "ref": "ISRO 2025 · Set A · Q67",
    "file": "isro.pdf",
    "page": 29,
    "number": 67,
    "prompt": "An LVDT has sensitivity 2 mV/mm/V. With 5 V AC excitation its output is 30 mV. Find the core displacement.",
    "answer": "(c) 3 mm",
    "steps": [
      "Sensitivity at 5 V excitation is 2×5=10 mV/mm.",
      "Output equals sensitivity times displacement.",
      "Displacement=30/10=3 mm."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1 mm",
        "2 mm",
        "3 mm",
        "None of the above"
      ]
    }
  },
  {
    "id": "i25-68",
    "exam": "isro",
    "topic": "devices",
    "ref": "ISRO 2025 · Set A · Q68",
    "file": "isro.pdf",
    "page": 29,
    "number": 68,
    "prompt": "Which expression gives the Fermi level EF in an N-type semiconductor?",
    "answer": "(a) EC − kT ln(NC/ND)",
    "steps": [
      "For nondegenerate material, n=NC exp[−(EC−EF)/(kT)].",
      "For fully ionized donor-dominated material, n≈ND.",
      "Taking logarithms gives EC−EF=kT ln(NC/ND), hence the stated expression."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "EC − kT ln(NC/ND)",
        "EC − kT ln(ND/NC)",
        "EV + kT ln(NC/ND)",
        "EV − kT ln(NC/ND)"
      ]
    },
    "trap": "This usual formula assumes nondegenerate statistics and essentially complete donor ionization."
  },
  {
    "id": "i25-69",
    "exam": "isro",
    "topic": "signals",
    "ref": "ISRO 2025 · Set A · Q69",
    "file": "isro.pdf",
    "page": 29,
    "number": 69,
    "prompt": "A single-phase full-bridge inverter has a square-wave output whose fundamental amplitude is V. Find the third-harmonic amplitude.",
    "answer": "(a) V/3",
    "steps": [
      "A symmetric square wave contains odd harmonics.",
      "Its nth odd harmonic amplitude is the fundamental amplitude divided by n.",
      "For n=3 the amplitude is V/3."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "V/3",
        "V/5",
        "V/9",
        "V/7"
      ]
    }
  },
  {
    "id": "i25-70",
    "exam": "isro",
    "topic": "devices",
    "ref": "ISRO 2025 · Set A · Q70",
    "file": "isro.pdf",
    "page": 30,
    "number": 70,
    "prompt": "Choose the value nearest the forbidden energy gap of germanium at 0 K.",
    "answer": "(a) 0.78 eV",
    "steps": [
      "Germanium has a narrower band gap than silicon.",
      "Its band gap increases as temperature decreases and is about 0.74 eV at 0 K.",
      "Among the supplied values, 0.78 eV is closest."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.78 eV",
        "1.00 eV",
        "0.01 eV",
        "1.21 eV"
      ]
    },
    "trap": "Do not substitute the commonly quoted room-temperature Ge gap of approximately 0.66 eV."
  },
  {
    "id": "i25-71",
    "exam": "isro",
    "topic": "signals",
    "ref": "ISRO 2025 · Set A · Q71",
    "file": "isro.pdf",
    "page": 30,
    "number": 71,
    "prompt": "A discrete-time LTI system has H(e^{jω})=1/(1−0.5e^{−jω}). Find h[n].",
    "answer": "(a) (0.5)^n u[n]",
    "steps": [
      "Since |0.5e^{−jω}|<1, expand the denominator as a convergent geometric series.",
      "H(e^{jω})=Σ from n=0 to ∞ of (0.5)^n e^{−jωn}.",
      "Comparing with the DTFT definition gives h[n]=(0.5)^n u[n]."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(0.5)^n u[n]",
        "(0.5)^(n−1) u[n−1]",
        "u[n] − 0.5u[n−1]",
        "δ[n] − 0.5δ[n−1]"
      ]
    }
  },
  {
    "id": "i25-72",
    "exam": "isro",
    "topic": "devices",
    "ref": "ISRO 2025 · Set A · Q72",
    "file": "isro.pdf",
    "page": 30,
    "number": 72,
    "prompt": "Which description of pinch-off voltage in an FET is intended here?",
    "answer": "(a) The gate-to-source voltage that gives zero drain current",
    "steps": [
      "The question uses pinch-off voltage in the gate cutoff-voltage sense.",
      "In the JFET equation ID=IDSS(1−VGS/VP)², setting VGS=VP gives ID=0.",
      "Thus the intended voltage is gate-to-source cutoff voltage."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "The gate-to-source voltage that gives zero drain current",
        "The drain voltage that gives zero drain current",
        "The gate source voltage that gives unity drain current",
        "The drain voltage that gives infinite drain current"
      ]
    },
    "trap": "The phrase pinch-off can also refer to drain-end channel pinch-off at onset of current saturation; that is a different usage."
  },
  {
    "id": "i25-73",
    "exam": "isro",
    "topic": "control",
    "ref": "ISRO 2025 · Set A · Q73",
    "file": "isro.pdf",
    "page": 31,
    "number": 73,
    "prompt": "For H(s)=(s+1)/(s²+2s+2), describe the poles.",
    "answer": "(c) Complex conjugates with negative real parts",
    "steps": [
      "Poles are zeros of s²+2s+2.",
      "Write the denominator as (s+1)²+1.",
      "The roots are −1±j, a complex-conjugate pair with negative real parts."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Real and equal",
        "Real and distinct",
        "Complex conjugates with negative real parts",
        "Purely imaginary"
      ]
    }
  },
  {
    "id": "i25-74",
    "exam": "isro",
    "topic": "digital",
    "ref": "ISRO 2025 · Set A · Q74",
    "file": "isro.pdf",
    "page": 31,
    "number": 74,
    "prompt": "The output of a Schmitt trigger depends on which feature?",
    "answer": "(c) Hysteresis in threshold voltages",
    "steps": [
      "A Schmitt trigger has separate upper and lower switching thresholds.",
      "Between the thresholds the output retains its previous state.",
      "Its switching behavior therefore depends on hysteresis in threshold voltages."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Only input value",
        "Clock transitions",
        "Hysteresis in threshold voltages",
        "Fan-in of the gate"
      ]
    }
  },
  {
    "id": "i25-75",
    "exam": "isro",
    "topic": "signals",
    "ref": "ISRO 2025 · Set A · Q75",
    "file": "isro.pdf",
    "page": 31,
    "number": 75,
    "prompt": "Which impulse response describes a system that is not causal?",
    "answer": "(c) h[n]=δ[n]+δ[n+1]",
    "steps": [
      "A discrete-time LTI system is causal only if h[n]=0 for n<0.",
      "δ[n+1] is nonzero at n=−1.",
      "Only option (c) has a negative-time impulse."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "h[n]=δ[n]",
        "h[n]=u[n]",
        "h[n]=δ[n]+δ[n+1]",
        "h[n]=(0.5)^n u[n]"
      ]
    }
  },
  {
    "id": "i25-76",
    "exam": "isro",
    "topic": "digital",
    "ref": "ISRO 2025 · Set A · Q76",
    "file": "isro.pdf",
    "page": 32,
    "number": 76,
    "prompt": "Four memory chips, each of size 4×4, have their address buses connected together. What is the combined size?",
    "answer": "(c) 4×16",
    "steps": [
      "Each chip supplies four bits at each of four addresses.",
      "A common address selects the same word location on all four chips.",
      "Combining their data lines gives 4×4=16 bits per word and four words: 4×16."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "256×4",
        "16×4",
        "4×16",
        "8×4"
      ]
    }
  },
  {
    "id": "i25-77",
    "exam": "isro",
    "topic": "analog",
    "ref": "ISRO 2025 · Set A · Q77",
    "file": "isro.pdf",
    "page": 32,
    "number": 77,
    "prompt": "Which voltmeter has the least loading effect on a 100 kΩ source?",
    "answer": "(c) 1 MΩ digital voltmeter",
    "steps": [
      "An analog voltmeter input resistance is sensitivity times range.",
      "The four input resistances are 100 kΩ, 200 kΩ, 1 MΩ and 250 kΩ.",
      "The largest input resistance draws the least source current, so the 1 MΩ meter loads least."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10 kΩ/V, 10 V range",
        "20 kΩ/V, 10 V range",
        "1 MΩ digital voltmeter",
        "50 kΩ/V, 5 V range"
      ]
    }
  },
  {
    "id": "i25-78",
    "exam": "isro",
    "topic": "digital",
    "ref": "ISRO 2025 · Set A · Q78",
    "file": "isro.pdf",
    "page": 32,
    "number": 78,
    "prompt": "What limits the maximum input-clock frequency of a 4-bit ripple counter built with JK flip-flops?",
    "answer": "(a) Propagation delay",
    "steps": [
      "In a ripple counter each stage clocks the following stage.",
      "A change must propagate through successive flip-flops before the count settles.",
      "The accumulated propagation delay limits the safe input-clock frequency."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Propagation delay",
        "Setup time",
        "Hold time",
        "Fan-in"
      ]
    }
  },
  {
    "id": "i25-79",
    "exam": "isro",
    "topic": "networks",
    "ref": "ISRO 2025 · Set A · Q79",
    "file": "isro.pdf",
    "page": 33,
    "number": 79,
    "prompt": "A source drives a series 1.25 MΩ resistor followed by a shunt parallel combination of C=4 pF, L=10 mH, and R=5 MΩ. Find ω0, bandwidth β and quality factor Q respectively.",
    "answer": "(b) 5 Mrad/s, 250 krad/s, 20",
    "steps": [
      "For the natural response, short the ideal voltage source: the effective parallel resistance is 1.25 MΩ || 5 MΩ=1 MΩ.",
      "The resonant angular frequency is ω0=1/√(LC)=1/√(10⁻²×4×10⁻¹²)=5×10⁶ rad/s.",
      "The parallel-resonator bandwidth is β=1/(Req C)=1/(10⁶×4×10⁻¹²)=250×10³ rad/s.",
      "Q=ω0/β=20."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "25 Mrad/s, 250 krad/s, 100",
        "5 Mrad/s, 250 krad/s, 20",
        "5 Mrad/s, 25 krad/s, 200",
        "None of the above"
      ]
    },
    "figure": "pyq-figures/i25-79.png",
    "figureAlt": "Original diagram for ISRO 2025 question 79"
  },
  {
    "id": "i25-80",
    "exam": "isro",
    "topic": "networks",
    "ref": "ISRO 2025 · Set A · Q80",
    "file": "isro.pdf",
    "page": 33,
    "number": 80,
    "prompt": "A unit-step voltage is applied at t=0 to an initially unenergized series RL circuit with R=2 Ω and L=2 H. Find the inductor voltage at t=0+.",
    "answer": "(b) 1 V",
    "steps": [
      "Inductor current cannot jump instantaneously, so i(0+)=i(0−)=0.",
      "The initial resistor drop is Ri(0+)=0.",
      "Kirchhoff’s voltage law gives vL(0+)=1−0=1 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0 V",
        "1 V",
        "2 V",
        "Infinity"
      ]
    }
  },
  {
    "id": "i25-81",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q81",
    "file": "isro.pdf",
    "page": 34,
    "number": 81,
    "prompt": "What day of the week was 28 May 2006?",
    "answer": "(d) Sunday",
    "steps": [
      "Use the Gregorian weekday calculation with January and February counted in the previous year.",
      "For 28 May 2006, Zeller’s value is [28+floor(13×6/5)+6+floor(6/4)+floor(20/4)+5×20] mod 7=155 mod 7=1.",
      "In this convention 0 is Saturday and 1 is Sunday."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ]
    }
  },
  {
    "id": "i25-82",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q82",
    "file": "isro.pdf",
    "page": 34,
    "number": 82,
    "prompt": "Jessica has four children; two have blue eyes and two have brown eyes; half are girls. Which must be a fact? I: At least one girl has blue eyes. II: Two children are boys. III: The boys have brown eyes.",
    "answer": "Excluded from evaluation (official final key; no scored option)",
    "steps": [
      "The official final answer key excludes Question 82 for evaluation for administrative reasons.",
      "The eye-color facts do not assign either color to a particular gender, so I and III are not forced.",
      "Under the conventional binary-gender assumption, two girls would leave two boys and suggest II, but that assumption must not be promoted to a uniquely verified official answer."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "I only",
        "II only",
        "II and III only",
        "None of the statements is a known fact"
      ]
    },
    "reviewNote": "Withdrawn: display its official excluded status and do not score a unique answer.",
    "excluded": true
  },
  {
    "id": "i25-83",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q83",
    "file": "isro.pdf",
    "page": 35,
    "number": 83,
    "prompt": "Many offices occupy buildings with 2–8 floors. Every building with more than three floors has a lift. Which statement must be true?",
    "answer": "(b) 7th floors have lifts",
    "steps": [
      "A building with a seventh floor necessarily has more than three floors.",
      "The stated implication therefore guarantees a lift in such a building.",
      "The other alternatives assert restrictions or universal access not established by the premises."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2nd floors do not have lifts",
        "7th floors have lifts",
        "Only floors above the 3rd floors have lifts",
        "All floors may be reached by lifts"
      ]
    },
    "trap": "The official option uses “7th floors have lifts” as shorthand for a lift being present in a building with seven floors; exact lift-stop coverage is not specified."
  },
  {
    "id": "i25-84",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q84",
    "file": "isro.pdf",
    "page": 35,
    "number": 84,
    "prompt": "A cube has volume 8 m³. Each side is doubled. What is the new volume in m³?",
    "answer": "(c) 64",
    "steps": [
      "Cube volume is the cube of its side length.",
      "Doubling a side multiplies volume by 2³=8.",
      "The new volume is 8×8=64 m³."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "45",
        "35",
        "64",
        "87"
      ]
    }
  },
  {
    "id": "i25-85",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q85",
    "file": "isro.pdf",
    "page": 36,
    "number": 85,
    "prompt": "A 45-litre mixture has sugar solution to salt solution in ratio 1:2. How much sugar solution must be added to make the ratio 2:1?",
    "answer": "(b) 45 litres",
    "steps": [
      "Initially sugar solution is 45/3=15 L and salt solution is 30 L.",
      "After adding x L of sugar solution, (15+x)/30=2.",
      "Thus 15+x=60 and x=45 L."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "15 litres",
        "45 litres",
        "55 litres",
        "65 litres"
      ]
    }
  },
  {
    "id": "i25-86",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q86",
    "file": "isro.pdf",
    "page": 36,
    "number": 86,
    "prompt": "Which listed standard distribution applies to a discrete random variable?",
    "answer": "(b) Poisson Distribution",
    "steps": [
      "A discrete random variable has a countable set of outcomes.",
      "Poisson probabilities are defined for integer counts k=0,1,2,… .",
      "Gaussian, Rayleigh and exponential distributions are continuous, leaving Poisson."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Gaussian Distribution",
        "Poisson Distribution",
        "Rayleigh Distribution",
        "Exponential Distribution"
      ]
    },
    "trap": "For a discrete variable the correct term is probability mass function, although the question says probability density function."
  },
  {
    "id": "i25-87",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q87",
    "file": "isro.pdf",
    "page": 37,
    "number": 87,
    "prompt": "Andre and Betty together weigh 150 lb; Betty and Chris 180 lb; Andre, Chris and David 360 lb; all four together 450 lb. Find David’s weight.",
    "answer": "(d) 210 Pounds",
    "steps": [
      "Subtract A+C+D=360 from A+B+C+D=450 to obtain B=90.",
      "Then A=150−90=60 and C=180−90=90.",
      "David weighs 360−60−90=210 lb."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "60 Pounds",
        "90 Pounds",
        "160 Pounds",
        "210 Pounds"
      ]
    }
  },
  {
    "id": "i25-88",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q88",
    "file": "isro.pdf",
    "page": 37,
    "number": 88,
    "prompt": "Statements: Some books are tables; some tables are mirrors. Conclusions: I Some mirrors are books. II No book is a mirror. Which follows?",
    "answer": "(c) Either I or II follows",
    "steps": [
      "The two stated overlaps with tables need not involve the same objects.",
      "Thus neither a book–mirror overlap nor its absence is individually forced.",
      "I asserts such an overlap and II denies it; they are complementary, so exactly one is true."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Only conclusion II follows",
        "Only conclusion I follows",
        "Either I or II follows",
        "Both I and II follow"
      ]
    },
    "trap": "“Either” here expresses the exhaustive disjunction, not a claim that one particular conclusion has been proved."
  },
  {
    "id": "i25-89",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q89",
    "file": "isro.pdf",
    "page": 38,
    "number": 89,
    "prompt": "Statements: No women teacher can play; some women teachers are athletes. Conclusions: I Male athletes can play. II Some athletes can play (Tough). Which follows?",
    "answer": "(d) Neither I nor II follows",
    "steps": [
      "The overlap establishes some athletes who are women teachers and cannot play.",
      "Nothing states that male athletes can play.",
      "Nothing guarantees any athlete who can play, so neither conclusion follows."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Either I or II follows",
        "Neither I nor II follows"
      ]
    }
  },
  {
    "id": "i25-90",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q90",
    "file": "isro.pdf",
    "page": 38,
    "number": 90,
    "prompt": "A circle has six sectors containing, clockwise from the upper-right sector, 3, 5, 8, 13, 22 and ?. Find the missing number.",
    "answer": "(c) 39",
    "steps": [
      "Consecutive known differences are 2, 3, 5 and 9.",
      "These follow dnext=2d−1: 2→3→5→9.",
      "The next difference is 17, so the missing number is 22+17=39."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "45",
        "25",
        "39",
        "78"
      ]
    },
    "figure": "pyq-figures/i25-90.png",
    "figureAlt": "Original diagram for ISRO 2025 question 90"
  },
  {
    "id": "i25-91",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q91",
    "file": "isro.pdf",
    "page": 39,
    "number": 91,
    "prompt": "Choose the alternative that is the vertical-mirror image of ANS43Q12, using the pictured glyphs. ",
    "answer": "(b) Mirror image shown in option (b)",
    "steps": [
      "Reflection in a vertical mirror reverses the left-to-right order of the characters.",
      "The reflected sequence must start with mirrored 2 then mirrored 1, followed by mirrored Q, 3, 4, S, N and A.",
      "Inspecting both the reversed order and each glyph’s reflected shape selects (b)."
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
    "figure": "pyq-figures/i25-91.png",
    "figureAlt": "Original diagram for ISRO 2025 question 91"
  },
  {
    "id": "i25-92",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q92",
    "file": "isro.pdf",
    "page": 39,
    "number": 92,
    "prompt": "50 players play Football, 40 Cricket and 30 Basketball. The Venn diagram has Football∩Cricket only=14, Football∩Basketball only=7, Cricket∩Basketball only=9, and all three=5. How many play Football or Cricket but not Basketball?",
    "answer": "(d) 50",
    "steps": [
      "Football only=50−14−7−5=24.",
      "Cricket only=40−14−9−5=12.",
      "Include Football only, Cricket only and their overlap outside Basketball: 24+12+14=50."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "45",
        "85",
        "52",
        "50"
      ]
    },
    "figure": "pyq-figures/i25-92.png",
    "figureAlt": "Original diagram for ISRO 2025 question 92"
  },
  {
    "id": "i25-93",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q93",
    "file": "isro.pdf",
    "page": 40,
    "number": 93,
    "prompt": "Choose the box that completes the pictured 3×3 matrix of boxes, each itself a 3×3 grid containing a dot and star.",
    "answer": "(d) Star at upper-left and dot at middle-right",
    "steps": [
      "Across each matrix row, the dot advances through inner columns 1, 2, 3; its inner row is top, bottom and middle in successive matrix rows.",
      "Thus the missing dot is in the inner middle-right cell.",
      "Reading the matrix row by row, the star travels bottom-to-top down inner column 3, then column 2, then column 1.",
      "The final star position is upper-left, selecting (d)."
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
    "figure": "pyq-figures/i25-93.png",
    "figureAlt": "Original diagram for ISRO 2025 question 93"
  },
  {
    "id": "i25-94",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q94",
    "file": "isro.pdf",
    "page": 41,
    "number": 94,
    "prompt": "Choose the missing mini-grid in the pictured 3×3 pattern of 3-row, 4-column grids containing one black cell and one crossed cell.",
    "answer": "(c) Cross at middle-left and black cell immediately to its right",
    "steps": [
      "The black cell alternates between inner middle-row columns 2 and 3 across successive matrix cells.",
      "The missing cell therefore has black at middle-row column 2.",
      "Reading the pattern row by row, the cross moves two cells anticlockwise around the ten-cell outer perimeter on each step.",
      "After top-row column 2 in the sixth cell, the seventh requires middle-row column 1; option (c) has both marks correctly placed."
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
    "figure": "pyq-figures/i25-94.png",
    "figureAlt": "Original diagram for ISRO 2025 question 94"
  },
  {
    "id": "i25-95",
    "exam": "isro",
    "topic": "apt",
    "ref": "ISRO 2025 · Set A · Q95",
    "file": "isro.pdf",
    "page": 41,
    "number": 95,
    "prompt": "Which option continues the pictured sequence of partially filled 3×3 square grids?",
    "answer": "(a) Four black and three white perimeter squares, with the top-middle and center empty",
    "steps": [
      "Each successive figure swaps black and white on all already occupied cells.",
      "It also adds one black cell along the perimeter path from the bottom-left across the bottom row and then up the right side.",
      "After the fourth figure, invert its six occupied cells and add a black square at upper-right.",
      "The resulting left and right columns are black–white–black, with a white bottom-middle square: option (a)."
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
    "figure": "pyq-figures/i25-95.png",
    "figureAlt": "Original diagram for ISRO 2025 question 95"
  }
];
