export const isro2020Complete = [
  {
    "id": "i20-1",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "em",
    "number": 1,
    "ref": "ISRO January 2020 · Set E · Q1",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 4,
    "prompt": "A wave travels in +x with magnetic field parallel to +y. Determine its electric-field polarization direction.",
    "answer": "(B) −z",
    "steps": [
      "Power flow follows E×H in the propagation direction.",
      "For E along −z and H along +y, (−ẑ)×ŷ=+x̂.",
      "Thus the electric field is linearly polarized along −z."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "+x",
        "−z",
        "(x+y)/√2",
        "+y"
      ]
    }
  },
  {
    "id": "i20-2",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "em",
    "number": 2,
    "ref": "ISRO January 2020 · Set E · Q2",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 4,
    "prompt": "In free space, H=0.1 cos(ωt−βx)ẑ A/m. Estimate the mean power through a square of side 0.1 m lying in x+2y=1.",
    "answer": "(D) Approximately 8.43 mW",
    "steps": [
      "Mean power density is η₀Hpeak²/2=(120π)(0.1²)/2=0.6π W/m² along +x.",
      "The unit normal is (x̂+2ŷ)/√5, so the projected area is 0.01/√5 m².",
      "Their product is 0.6π×0.01/√5≈0.00843 W."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "42.12 mW",
        "16.85 mW",
        "18.84 mW",
        "8.425 mW"
      ]
    }
  },
  {
    "id": "i20-3",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "em",
    "number": 3,
    "ref": "ISRO January 2020 · Set E · Q3",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 5,
    "prompt": "A rectangular resonant cavity has dimensions a=c>b along x,z and y respectively. Which listed mode has the lowest resonance?",
    "answer": "(B) TE₁₀₁",
    "steps": [
      "Cavity resonance is proportional to √[(m/a)²+(n/b)²+(p/c)²].",
      "A nonzero index along the smallest dimension b raises the frequency.",
      "Among the listed allowed modes, TE₁₀₁ sets n=0 and uses the two larger dimensions, giving the lowest frequency."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "TE₀₁₁",
        "TE₁₀₁",
        "TM₁₁₀",
        "TM₀₁₁"
      ]
    }
  },
  {
    "id": "i20-4",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "communication",
    "number": 4,
    "ref": "ISRO January 2020 · Set E · Q4",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 5,
    "prompt": "A 5 Mb/s source is encoded at rate 1/3, then modulated using 8-PSK. Find coded bit rate and symbol rate.",
    "answer": "15 Mb/s coded bits; 5 Msymbol/s",
    "steps": [
      "Code rate is information bits divided by coded bits. Thus Rcoded=5/(1/3)=15 Mb/s.",
      "Each 8-PSK symbol carries log₂8=3 coded bits.",
      "The symbol rate is 15/3=5 Msymbol/s. The original information rate remains 5 Mb/s."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Coded 15 Mb/s; symbols 5 Msymbol/s",
        "Information 5 Mb/s; symbols 5 Msymbol/s",
        "Coded 15 Mb/s; symbols 15 Msymbol/s",
        "Information 5 Mb/s; symbols 5 Msymbol/s"
      ]
    },
    "reviewNote": "The archived options duplicate a 5 Mb/s information-rate choice and call the 15 Mb/s coded rate an information rate. The rates above distinguish the two meanings explicitly."
  },
  {
    "id": "i20-5",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "math",
    "number": 5,
    "ref": "ISRO January 2020 · Set E · Q5",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 6,
    "prompt": "For the standard-normal density f(x)=exp(−x²/2)/√(2π), evaluate ∫x⁴f(x)dx over the real line.",
    "answer": "(A) 3",
    "steps": [
      "For the standard normal, f′(x)=−xf(x).",
      "Integration by parts gives ∫x⁴f(x)dx=3∫x²f(x)dx because the Gaussian boundary terms vanish.",
      "The variance and second moment are one, so the fourth moment is 3."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "3",
        "3/π",
        "3/√π",
        "3π"
      ]
    }
  },
  {
    "id": "i20-6",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "math",
    "number": 6,
    "ref": "ISRO January 2020 · Set E · Q6",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 6,
    "prompt": "A linear map takes column vectors in R³ into R² via T(x)=Ax. Find A’s dimensions and maximum rank.",
    "answer": "(C) 2 rows, 3 columns, rank at most 2",
    "steps": [
      "The input column has three entries, so A needs three columns.",
      "The output column has two entries, so A needs two rows.",
      "Rank cannot exceed min(rows,columns)=2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "3×2; max rank 3",
        "3×2; max rank 2",
        "2×3; max rank 2",
        "2×3; max rank 3"
      ]
    }
  },
  {
    "id": "i20-7",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "em",
    "number": 7,
    "ref": "ISRO January 2020 · Set E · Q7",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 7,
    "prompt": "A three-element linear receiving array has spacing λ/2 and steers 30° from broadside as shown. With element 1 as reference, determine compensating phases.",
    "answer": "(C) [0,π/2,π]",
    "steps": [
      "The path difference between adjacent elements is d sin30°=λ/4.",
      "The received phase difference magnitude is (2π/λ)(λ/4)=π/2.",
      "Apply progressive compensating phases 0,π/2,π for the arrival direction drawn so all three signals add coherently."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "[−π/3,0,π/3]",
        "[−π/4,0,π/4]",
        "[0,π/2,π]",
        "[0,π/4,π/2]"
      ]
    },
    "figure": "pyq-figures/i20-7.svg",
    "figureAlt": "ISRO 2020 Q7 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-8",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "em",
    "number": 8,
    "ref": "ISRO January 2020 · Set E · Q8",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 9,
    "prompt": "A 50 Ω lossless line feeds a 200 Ω resistor and has a shorted shunt stub. Find VSWR between stub and load, and on the stub.",
    "answer": "(D) 4 and ∞",
    "steps": [
      "At the resistive load, |Γ|=|(200−50)/(200+50)|=0.6.",
      "The main-line VSWR is (1+0.6)/(1−0.6)=4.",
      "A lossless shorted stub has |Γ|=1 and therefore infinite VSWR. Its length does not change that ratio."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0,0",
        "1,1",
        "4,1",
        "4,∞"
      ]
    }
  },
  {
    "id": "i20-9",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "em",
    "number": 9,
    "ref": "ISRO January 2020 · Set E · Q9",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 9,
    "prompt": "An infinite sheet in y=0 carries surface current K=−20ẑ mA/m. Find H at (1,10,−2).",
    "answer": "(B) +10x̂ mA/m",
    "steps": [
      "The observation point lies on the y>0 side of the sheet.",
      "For a sheet in a symmetric medium, H=(K×n̂)/2 on that side, with n̂=ŷ.",
      "Since (−ẑ)×ŷ=+x̂, the field is +10x̂ mA/m."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−10x̂ mA/m",
        "+10x̂ mA/m",
        "−20x̂ mA/m",
        "+20x̂ mA/m"
      ]
    }
  },
  {
    "id": "i20-10",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "em",
    "number": 10,
    "ref": "ISRO January 2020 · Set E · Q10",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 10,
    "prompt": "A point charge of 2 C is 1 m from an infinite grounded conducting plane in vacuum. Find the attractive force magnitude.",
    "answer": "(A) 1/(4πε₀) N",
    "steps": [
      "Replace the plane by an image charge −2 C reflected 1 m behind it.",
      "The real-to-image separation is 2 m.",
      "Coulomb force magnitude is (1/(4πε₀))×(2×2)/2²=1/(4πε₀) N, directed toward the plane."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1/(4πε₀)",
        "1/(8πε₀)",
        "1/(16πε₀)",
        "4πε₀"
      ]
    }
  },
  {
    "id": "i20-11",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "signals",
    "number": 11,
    "ref": "ISRO January 2020 · Set E · Q11",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 11,
    "prompt": "Convolve x=[1,2,3,4,5] with h=[5,4,3,2,1].",
    "answer": "(C) [5,14,26,40,55,40,26,14,5]",
    "steps": [
      "Linear convolution has 5+5−1=9 samples.",
      "The first values are 1×5=5, 1×4+2×5=14, and 1×3+2×4+3×5=26.",
      "Continuing the overlap sums gives 40,55,40,26,14,5."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "[6,6,6,6,6]",
        "[5,8,9,8,5]",
        "[5,14,26,40,55,40,26,14,5]",
        "[1,4,10,20,35,44,46,40,25]"
      ]
    }
  },
  {
    "id": "i20-12",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "signals",
    "number": 12,
    "ref": "ISRO January 2020 · Set E · Q12",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 11,
    "prompt": "If v(t)↔V(f), how does replacing v(t) by v(2t) affect its spectrum?",
    "answer": "(B) Half magnitude; twice the bandwidth",
    "steps": [
      "The time-scaling identity is v(at)↔V(f/a)/|a|.",
      "At a=2, the new transform is V(f/2)/2.",
      "The magnitude scale is 1/2 and each spectral edge moves to twice its original frequency."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Half magnitude; compressed bandwidth",
        "Half magnitude; expanded bandwidth",
        "Double magnitude; compressed bandwidth",
        "Double magnitude; expanded bandwidth"
      ]
    }
  },
  {
    "id": "i20-13",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "communication",
    "number": 13,
    "ref": "ISRO January 2020 · Set E · Q13",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 12,
    "prompt": "A Hamming (7,4) code contains 0001011. Which candidate cannot belong to the same code: 0011101,0101100,0011010,1110100?",
    "answer": "(C) 0011010",
    "steps": [
      "A single-error-correcting Hamming code has minimum Hamming distance 3.",
      "XOR 0001011 with 0011010 to obtain 0010001.",
      "There are only two differing positions, violating minimum distance."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0011101",
        "0101100",
        "0011010",
        "1110100"
      ]
    }
  },
  {
    "id": "i20-14",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "communication",
    "number": 14,
    "ref": "ISRO January 2020 · Set E · Q14",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 12,
    "prompt": "Which listed modulation supports ordinary noncoherent detection: QAM, APSK, BPSK, or BFSK?",
    "answer": "(D) BFSK",
    "steps": [
      "Noncoherent detection avoids a phase-synchronized carrier reference.",
      "For BFSK, separate bandpass filters and energy detectors distinguish the two frequencies without carrier phase.",
      "Ordinary BPSK and the listed amplitude/phase constellations require phase information unless a separately specified differential scheme is used."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "QAM",
        "APSK",
        "BPSK",
        "BFSK"
      ]
    }
  },
  {
    "id": "i20-15",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "communication",
    "number": 15,
    "ref": "ISRO January 2020 · Set E · Q15",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 12,
    "prompt": "A reflected path has 20 dB less power than the direct path and delay 100 ns. Find the maximum/minimum received-power ratio and spacing of successive spectral maxima.",
    "answer": "(B) 121/81 and 10 MHz",
    "steps": [
      "A 20 dB power deficit means reflected/direct power=0.01 and amplitude ratio=0.1.",
      "Constructive and destructive amplitudes are 1+0.1 and 1−0.1, so the power ratio is 1.1²/0.9²=121/81.",
      "The relative phase repeats when Δfτ=1, giving Δf=1/(100 ns)=10 MHz."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "101/99; 10 MHz",
        "121/81; 10 MHz",
        "101/99; 5 MHz",
        "121/81; 5 MHz"
      ]
    },
    "reviewNote": "The archived coaching key marks A after treating the power ratio as an amplitude ratio. The independently calculated power ratio selects B; the amplitude ratio itself would be 11/9."
  },
  {
    "id": "i20-16",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "em",
    "number": 16,
    "ref": "ISRO January 2020 · Set E · Q16",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 14,
    "prompt": "An antenna radiates with 90% efficiency, accepts 0.4 W, and has maximum radiation intensity 0.5 W/sr. Find directivity.",
    "answer": "(B) About 17.4",
    "steps": [
      "Radiated power is ηPin=0.9×0.4=0.36 W.",
      "Directivity is D=4πUmax/Prad.",
      "D=4π×0.5/0.36≈17.45; using input power instead would give gain rather than directivity."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "18.23",
        "17.4",
        "11.2",
        "21.6"
      ]
    }
  },
  {
    "id": "i20-17",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 17,
    "ref": "ISRO January 2020 · Set E · Q17",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 14,
    "prompt": "If EF=EC, find the electron occupancy probability at energy EC+kT.",
    "answer": "(B) About 0.27",
    "steps": [
      "Fermi–Dirac occupation is f(E)=1/[1+exp((E−EF)/kT)].",
      "Here E−EF=kT, so the exponent equals 1.",
      "Therefore f=1/(1+e)≈0.269."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.18",
        "0.27",
        "0.38",
        "0.52"
      ]
    }
  },
  {
    "id": "i20-18",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 18,
    "ref": "ISRO January 2020 · Set E · Q18",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 15,
    "prompt": "In the shown silicon band diagram at x>L, Ei−EF=Eg/4. With Eg=1.12 eV, T=300 K, μn=600, μp=400 cm²/(V·s), ni=10¹⁰ cm⁻³, estimate resistivity.",
    "answer": "(D) Approximately 31.25 Ω·cm",
    "steps": [
      "The positive Ei−EF indicates p-type material; Ei−EF=0.28 eV.",
      "Using VT≈0.0259 V, p≈ni exp(0.28/0.0259)≈5×10¹⁴ cm⁻³, while n=ni²/p is negligible.",
      "Thus ρ≈1/(qμpp)≈1/(1.6×10⁻¹⁹×400×5×10¹⁴)=31.25 Ω·cm."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "11 Ω·cm",
        "15.75 Ω·cm",
        "23 Ω·cm",
        "31.25 Ω·cm"
      ]
    }
  },
  {
    "id": "i20-19",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "em",
    "number": 19,
    "ref": "ISRO January 2020 · Set E · Q19",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 15,
    "prompt": "Radiation intensity is U=2 sinθ sinφ for 0≤θ≤π,0≤φ≤π and zero elsewhere. Find maximum directivity in dB.",
    "answer": "(B) About 6 dB",
    "steps": [
      "The maximum intensity is Umax=2.",
      "Radiated power is ∫∫U sinθ dθdφ=2(∫₀πsin²θ dθ)(∫₀πsinφ dφ)=2×(π/2)×2=2π.",
      "D=4π×2/(2π)=4, or 10 log₁₀4≈6.02 dB."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "3 dB",
        "6 dB",
        "8 dB",
        "9 dB"
      ]
    }
  },
  {
    "id": "i20-20",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "digital",
    "number": 20,
    "ref": "ISRO January 2020 · Set E · Q20",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 16,
    "prompt": "Which ADC architecture characteristically uses oversampling and noise shaping?",
    "answer": "(A) Sigma–delta",
    "steps": [
      "Oversampling samples well above the signal’s Nyquist rate.",
      "A sigma–delta modulator combines feedback and quantization to shape quantization noise away from the signal band.",
      "Digital filtering and decimation then produce the output samples; this is the listed oversampling architecture."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Sigma–delta",
        "Successive approximation",
        "Integrator",
        "Flash"
      ]
    }
  },
  {
    "id": "i20-21",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "communication",
    "number": 21,
    "ref": "ISRO January 2020 · Set E · Q21",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 16,
    "prompt": "A monostatic radar needs 10 dB SNR over 4 MHz at 300 MHz. EIRP=40 dBW, receive G/T=10 dB/K, range=10 km. With 10log₁₀(4π)=11 and 10log₁₀k=−228.6, find threshold RCS in dB·m².",
    "answer": "(C) −9.6 dB·m²",
    "steps": [
      "The radar link equation gives SNR=EIRP+(G/T)−k−B+20log₁₀λ−30log₁₀(4π)−40log₁₀R+σ, all in decibel units.",
      "Here λ=1 m, bandwidth term=66 dBHz and the combined geometrical loss is 33+160=193 dB.",
      "Set 10=40+10+228.6−66−193+σ, giving σ=−9.6 dB·m². This is a minimum detectable RCS threshold."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−15.6",
        "−12.6",
        "−9.6",
        "−5.6"
      ]
    }
  },
  {
    "id": "i20-22",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "communication",
    "number": 22,
    "ref": "ISRO January 2020 · Set E · Q22",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 17,
    "prompt": "Four independent messages have probabilities 1/2,1/4,1/8,1/8. Which listed binary code is uniquely decodable with minimum average length?",
    "answer": "(D) [0,10,110,111]",
    "steps": [
      "The source entropy is 0.5×1+0.25×2+2×0.125×3=1.75 bits/message.",
      "The lengths 1,2,3,3 achieve that lower bound with average 1.75.",
      "The listed code [0,10,110,111] is prefix-free, hence uniquely decodable. The alternative [0,1,10,11] is ambiguous."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "[00,01,10,11]",
        "[0,1,10,11]",
        "[110,111,10,0]",
        "[0,10,110,111]"
      ]
    }
  },
  {
    "id": "i20-23",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "networks",
    "number": 23,
    "ref": "ISRO January 2020 · Set E · Q23",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 19,
    "prompt": "A 0.5 mH inductor initially carries 10 A and transfers its stored energy into an initially uncharged 20 μF capacitor through the ideal one-way device shown. Find the final captured voltage magnitude.",
    "answer": "(C) 50 V",
    "steps": [
      "The inductor initially stores Li²/2=(0.5 mH)(10²)/2=0.025 J.",
      "At complete energy transfer, CV²/2=Li²/2, so V=i√(L/C).",
      "V=10√(0.0005/0.00002)=50 V. The ideal one-way device prevents the capacitor from returning that energy after the transfer."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1 V",
        "25 V",
        "50 V",
        "100 V"
      ]
    },
    "reviewNote": "An isolated lossless LC pair alone would oscillate rather than settle. The captured final voltage relies on the one-way device drawn in the source.",
    "figure": "pyq-figures/i20-23.svg",
    "figureAlt": "ISRO 2020 Q23 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-24",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 24,
    "ref": "ISRO January 2020 · Set E · Q24",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 19,
    "prompt": "For the shown stacked nMOS pair, M₁ has W/L=40, ID=200 μA, VTH0=0.6 V, 2φF=0.81 V, γ=0.4 V½ and Vin=1.2 V. Using μnCox=59.5 μA/V², estimate the minimum M₂ aspect ratio for saturation.",
    "answer": "(C) Approximately 280",
    "steps": [
      "For M₁, the overdrive is √[2ID/(μnCox·40)]≈0.410 V. With body effect, its source voltage v satisfies 1.2=v+0.6+0.4(√(0.81+v)−0.9)+0.410.",
      "Solving gives v≈0.156 V. Saturation of M₂ requires its overdrive not to exceed v.",
      "Therefore (W/L)₂,min=2ID/(μnCox v²)≈275; the nearest listed value is 280."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "92",
        "195",
        "280",
        "560"
      ]
    },
    "reviewNote": "The archived copy prints μnCox in mA/V². The listed aspect ratios require μA/V²; with the printed mA units the ratio would instead be about 0.028, matching no option.",
    "figure": "pyq-figures/i20-24.svg",
    "figureAlt": "ISRO 2020 Q24 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-25",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "em",
    "number": 25,
    "ref": "ISRO January 2020 · Set E · Q25",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 21,
    "prompt": "Two equal coherent power inputs P feed ports 1 and 4 of the shown hybrid. S₂₁=j/√2 and S₂₄=−1/√2. Find relative phase and maximum power at port 2.",
    "answer": "(A) 90° and 2P",
    "steps": [
      "The output wave is b₂=(j a₁−a₄)/√2.",
      "Constructive addition requires j a₁ and −a₄ to have the same phase, so a₄ lags a₁ by 90° (equivalently a₁ leads by 90°).",
      "Each input has amplitude √P; the output amplitude is 2√P/√2=√(2P), giving output power 2P."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "90°; 2P",
        "90°; √2 P",
        "45°; 2P",
        "45°; √2 P"
      ]
    },
    "figure": "pyq-figures/i20-25.svg",
    "figureAlt": "ISRO 2020 Q25 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-26",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "digital",
    "number": 26,
    "ref": "ISRO January 2020 · Set E · Q26",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 22,
    "prompt": "Which conversion is false: (1000.64)₈=(1000000000.1101)₂; (512.512)₁₀=(4022.224)₅; (2202)₆=(426)₁₁; (0.23)₄=(0.1011)₂?",
    "answer": "(C) (2202)₆=(426)₁₁",
    "steps": [
      "Octal digits map to three bits: .64₈=.110100₂, so the first equality holds. The base-4 fraction .23 maps to .10 11₂.",
      "For base five, 4022.224 equals 4×125+2×5+2+2/5+2/25+4/125=512.512.",
      "But 2202₆=2×216+2×36+2=506, whereas 426₁₁=4×121+2×11+6=512. They differ."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Octal equality",
        "Base-five equality",
        "Base-six/base-eleven equality",
        "Base-four/binary equality"
      ]
    }
  },
  {
    "id": "i20-27",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "digital",
    "number": 27,
    "ref": "ISRO January 2020 · Set E · Q27",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 22,
    "prompt": "Are two-input NAND and NOR operations commutative and associative?",
    "answer": "(D) Commutative but not associative",
    "steps": [
      "Swapping the two inputs leaves AND and OR unchanged, and complementing the result preserves that symmetry.",
      "Associativity fails: NAND(NAND(0,0),1)=0, while NAND(0,NAND(0,1))=1.",
      "The analogous NOR counterexample also fails associativity. Therefore both operations are commutative but not associative."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Both commutative and associative",
        "Neither",
        "Associative but not commutative",
        "Commutative but not associative"
      ]
    }
  },
  {
    "id": "i20-28",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 28,
    "ref": "ISRO January 2020 · Set E · Q28",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 24,
    "prompt": "How does the leakage-current stability factor of emitter-biased BJT bias vary as RE/RB increases?",
    "answer": "(B) It decreases from 1+β toward 1",
    "steps": [
      "For the emitter-feedback circuit, S=(1+β)(RB+RE)/[RB+(1+β)RE].",
      "Writing r=RE/RB gives S=(1+β)(1+r)/[1+(1+β)r].",
      "At r=0, S=1+β; as r→∞, S→1. Its derivative is negative for β>0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Rises from 1 toward 1+β",
        "Falls from 1+β toward 1",
        "Rises linearly",
        "Constant 1+β"
      ]
    },
    "figure": "pyq-figures/i20-28.svg",
    "figureAlt": "ISRO 2020 Q28 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-29",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "analog",
    "number": 29,
    "ref": "ISRO January 2020 · Set E · Q29",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 25,
    "prompt": "For a common-source FET stage, gm=4 mS, rds=40 kΩ, RD=10 kΩ, Cgs=4 pF, Cgd=2 pF and source resistance 50 Ω. Estimate its input high-frequency corner.",
    "answer": "(B) Approximately 45.5 MHz",
    "steps": [
      "The unloaded gain is Av≈−gm(RD∥rds)=−0.004×8000=−32.",
      "Miller input capacitance is Cin=Cgs+Cgd(1−Av)=4+2×33=70 pF.",
      "The input corner is 1/(2πRsCin)=1/(2π×50×70 pF)≈45.5 MHz."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "35.5 MHz",
        "45.5 MHz",
        "90.5 MHz",
        "10.5 MHz"
      ]
    }
  },
  {
    "id": "i20-30",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "digital",
    "number": 30,
    "ref": "ISRO January 2020 · Set E · Q30",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 26,
    "prompt": "Which memory needs periodic refresh to retain its stored data?",
    "answer": "(D) DRAM",
    "steps": [
      "A DRAM bit is stored as charge on a small capacitor.",
      "Leakage gradually changes that charge even while power is present.",
      "Refresh restores the stored values periodically; ordinary SRAM, EEPROM and flash do not require this DRAM refresh process."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Flash",
        "EEPROM",
        "SRAM",
        "DRAM"
      ]
    }
  },
  {
    "id": "i20-31",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "digital",
    "number": 31,
    "ref": "ISRO January 2020 · Set E · Q31",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 26,
    "prompt": "A ripple mod-8 counter uses JK flip-flops with propagation delay 8 ns each. Estimate its maximum clock frequency by total ripple settling time.",
    "answer": "Approximately 41.7 MHz; no listed option matches",
    "steps": [
      "A mod-8 binary counter needs log₂8=3 flip-flops.",
      "Worst-case ripple delay is 3×8 ns=24 ns, before any additional setup or margin allowance.",
      "Thus the simple estimate is 1/(24 ns)=41.7 MHz. The listed 15.625 MHz corresponds to eight flip-flops, which would form a mod-256 binary counter."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "16.525 MHz",
        "15.625 MHz",
        "25.625 MHz",
        "18.525 MHz"
      ]
    },
    "reviewNote": "The archived key marks B despite its own three-flip-flop calculation yielding 41.7 MHz. The mod-8 statement has no matching listed answer under the ripple-delay model."
  },
  {
    "id": "i20-32",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "digital",
    "number": 32,
    "ref": "ISRO January 2020 · Set E · Q32",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 26,
    "prompt": "The shown D-flip-flop state graph has transitions 0→1 for xy=01,10,11 and 1→0 only for xy=10. Determine DA.",
    "answer": "(C) DA=(A XOR x)+y",
    "steps": [
      "For A=0, the next state is x OR y.",
      "For A=1, the next state is x̅ OR y.",
      "Combining the two cases gives DA=(A XOR x) OR y, matching the graph."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "A XOR x XOR y",
        "A OR (x XOR y)",
        "(A XOR x) OR y",
        "A OR x OR y"
      ]
    },
    "figure": "pyq-figures/i20-32.svg",
    "figureAlt": "ISRO 2020 Q32 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-33",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "digital",
    "number": 33,
    "ref": "ISRO January 2020 · Set E · Q33",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 27,
    "prompt": "Which listed storage element lacks a separate input-code condition that commands hold independently of its current state?",
    "answer": "(A) D flip-flop",
    "steps": [
      "A T flip-flop holds for T=0; JK holds for J=K=0.",
      "An SR latch has its corresponding hold input combination.",
      "A D flip-flop always samples D at its active edge. D can equal the old Q, but there is no dedicated hold input code independent of Q."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "D flip-flop",
        "T flip-flop",
        "JK flip-flop",
        "SR latch"
      ]
    }
  },
  {
    "id": "i20-34",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "digital",
    "number": 34,
    "ref": "ISRO January 2020 · Set E · Q34",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 27,
    "prompt": "A four-bit binary counter increments on each rising edge of a 24 MHz clock. Find the frequency of counter bit 2, with bit 0 the least significant.",
    "answer": "(D) 3 MHz",
    "steps": [
      "Bit 0 divides the clock by 2.",
      "Successive binary bits divide by another factor of 2 each.",
      "Bit 2 therefore divides by 2³=8, giving 24/8=3 MHz."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "12 MHz",
        "4 MHz",
        "6 MHz",
        "3 MHz"
      ]
    }
  },
  {
    "id": "i20-35",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 35,
    "ref": "ISRO January 2020 · Set E · Q35",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 29,
    "prompt": "In the shown MOS-capacitor circuit, the gate is fixed at 3 V and C initially holds 3 V. The source input falls from 3 V to 0 V; VT=0.5 V. Identify Vx(t).",
    "answer": "(B) 6 V before the edge, an immediate drop to 3 V, then decay toward 0",
    "steps": [
      "Before the falling edge, VGS=0 and the transistor is off. The source node is 3 V and the capacitor adds another 3 V, making Vx=6 V.",
      "Capacitor voltage cannot jump. A 3 V fall of its lower plate immediately moves its upper plate from 6 V to 3 V.",
      "Afterward VGS=3 V turns the MOSFET on, providing a path that discharges C toward zero. The 2.5 V threshold-drop limit of a source follower does not apply to this discharge connection."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Initial rise then decay",
        "Immediate 6→3 V step, then decay to zero",
        "Dip then recovery toward 6 V",
        "Immediate step to constant 2.5 V"
      ]
    },
    "figure": "pyq-figures/i20-35.svg",
    "figureAlt": "ISRO 2020 Q35 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-36",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "digital",
    "number": 36,
    "ref": "ISRO January 2020 · Set E · Q36",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 30,
    "prompt": "An SRAM has 20 address lines and a 16-bit data word. Find storage capacity.",
    "answer": "(No matching option) 2 MiB",
    "steps": [
      "Twenty address bits select 2²⁰ words.",
      "Each word contains 16 bits, or 2 bytes.",
      "The capacity is 2²⁰×2=2²¹ bytes=2 MiB (16 Mibit). None of the listed MB choices equals this."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "20 MB",
        "16 MB",
        "8 MB",
        "4 MB"
      ]
    },
    "reviewNote": "The archived source labels the choices in MB but appears to confuse bits and bytes. The given lines imply 16 Mibit, or 2 MiB."
  },
  {
    "id": "i20-37",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "digital",
    "number": 37,
    "ref": "ISRO January 2020 · Set E · Q37",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 30,
    "prompt": "Which output type cannot safely be connected directly to other outputs for ordinary wired logic?",
    "answer": "(A) Totem-pole TTL output",
    "steps": [
      "A totem-pole output actively drives both high and low.",
      "If connected outputs disagree, one sources current directly into another’s low-side transistor, causing contention.",
      "Open-collector and specified wired-compatible outputs avoid this problem; tristate buses additionally require only one active driver at a time."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Totem-pole TTL",
        "Open-collector TTL",
        "Tristate output",
        "Specified wired-compatible ECL"
      ]
    }
  },
  {
    "id": "i20-38",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "digital",
    "number": 38,
    "ref": "ISRO January 2020 · Set E · Q38",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 31,
    "prompt": "Find the Boolean function of the shown ratioed MOS pull-down network.",
    "answer": "(D) Y=[AB+(A+C)+AD]′ = (A+C)′",
    "steps": [
      "The left series branch conducts for AB. The middle parallel branch conducts for A+C.",
      "The right branch conducts for A(B+D)=AB+AD.",
      "OR the pull-down paths and complement: Y=[AB+(A+C)+AB+AD]′. Absorption reduces the pull-down condition to A+C, consistent with listed D."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "[AB+(B+C)+(B+D)]′",
        "[AB+(A+C)+(B+D)]′",
        "[(AB)′+(A+C)′+(AB+D)]′",
        "[AB+(A+C)+AD]′"
      ]
    },
    "figure": "pyq-figures/i20-38.svg",
    "figureAlt": "ISRO 2020 Q38 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-39",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "analog",
    "number": 39,
    "ref": "ISRO January 2020 · Set E · Q39",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 31,
    "prompt": "The shown Wien-bridge circuit has equal 1 kΩ bridge resistors and equal capacitors, with amplifier feedback resistors 1 kΩ and 1.9 kΩ. Can a C value produce sustained 2 kHz oscillation?",
    "answer": "(D) None of the listed capacitor values ensures oscillation",
    "steps": [
      "An equal-component Wien network has feedback magnitude 1/3 at its zero-phase frequency.",
      "The noninverting amplifier gain is 1+1.9/1=2.9, below the required 3.",
      "Its loop gain is below unity, so sustained oscillation is unavailable in the ideal linear model. The frequency-setting value alone would be C=1/(2π×1000×2000)=1/(4π) μF, but the gain condition fails."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1/(2π) μF",
        "1/(4π) μF",
        "1/π μF",
        "None"
      ]
    },
    "figure": "pyq-figures/i20-39.svg",
    "figureAlt": "ISRO 2020 Q39 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-40",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "analog",
    "number": 40,
    "ref": "ISRO January 2020 · Set E · Q40",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 32,
    "prompt": "For the shown regulated supply, VBE=0.7 V and VZ=5.3 V. The feedback divider is 40 kΩ above 60 kΩ. Find the regulated output.",
    "answer": "(B) 10 V",
    "steps": [
      "The reference seen by the buffer is VZ+VBE=5.3+0.7=6 V.",
      "At regulation, the divider midpoint is therefore 6 V. It is 60/(40+60)=0.6 of Vo.",
      "Solve 0.6Vo=6 to obtain Vo=10 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "5 V",
        "10 V",
        "15 V",
        "20 V"
      ]
    },
    "figure": "pyq-figures/i20-40.svg",
    "figureAlt": "ISRO 2020 Q40 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-41",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "networks",
    "number": 41,
    "ref": "ISRO January 2020 · Set E · Q41",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 32,
    "prompt": "A charged 18 μF capacitor is connected to the shown resistor bridge. Estimate the time for charge to fall to Q/2.72.",
    "answer": "(A) Approximately 68 ms",
    "steps": [
      "Transform the 2 kΩ,4 kΩ,6 kΩ delta into star arms 1 kΩ,2 kΩ,2/3 kΩ.",
      "The resistance seen by C is (2/3)+(1+3)∥(2+12)=2/3+4∥14=34/9 kΩ≈3.778 kΩ.",
      "The charge falls to approximately Q/e in one time constant: τ=3.778 kΩ×18 μF=68 ms."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "68 ms",
        "34 ms",
        "17 ms",
        "2.72 ms"
      ]
    },
    "figure": "pyq-figures/i20-41.svg",
    "figureAlt": "ISRO 2020 Q41 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-42",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "networks",
    "number": 42,
    "ref": "ISRO January 2020 · Set E · Q42",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 34,
    "prompt": "Determine V₁ across the 25 Ω resistor in the shown network of ideal wires, resistors and current sources.",
    "answer": "(A) 100 V",
    "steps": [
      "Trace all four curved ideal wires: they reduce the network to two nodes. The 25 Ω,10 Ω and100 Ω resistors are parallel between these nodes.",
      "Their total conductance is 1/25+1/10+1/100=0.15 S. The dependent source supplies 0.2V₁ into the positive-voltage node, while the 5 A source draws current out.",
      "KCL gives 0.15V₁+5=0.2V₁, hence V₁=5/0.05=100 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "100 V",
        "14.28 V",
        "50 V",
        "68.25 V"
      ]
    },
    "figure": "pyq-figures/i20-42.svg",
    "figureAlt": "ISRO 2020 Q42 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-43",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 43,
    "ref": "ISRO January 2020 · Set E · Q43",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 35,
    "prompt": "BJT output curves extrapolate to VCE=−50 V. Estimate IC for small-signal output resistance ro=50 kΩ.",
    "answer": "(A) 1 mA",
    "steps": [
      "The extrapolated intercept gives Early-voltage magnitude VA≈50 V.",
      "In the usual approximation ro≈VA/IC, neglecting VCE relative to VA.",
      "Thus IC≈50/50000=0.001 A=1 mA."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1 mA",
        "5 mA",
        "10 mA",
        "100 mA"
      ]
    }
  },
  {
    "id": "i20-44",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 44,
    "ref": "ISRO January 2020 · Set E · Q44",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 36,
    "prompt": "An nMOS has gate 3 V, upper terminal 2 V and lower terminal switched from 0 V to 4 V. VT=0.5 V, μnCox=100 μA/V², W/L=2. Find initial and final signed upper-terminal currents.",
    "answer": "600 μA initially; final depends on the MOS terminal/body model",
    "steps": [
      "Initially VGS=3 V and VDS=2 V<2.5 V overdrive. The triode formula gives ID=200[(2.5)(2)−2²/2]=600 μA.",
      "With the lower terminal at 4 V, a fixed designated-source model gives VGS=−1 V and predicts cutoff, the archived answer A.",
      "For an ideal symmetric four-terminal MOSFET with suitable body bias, the 2 V terminal becomes the electrical source: overdrive=3−2−0.5=0.5 V and |I|=(200/2)(0.5²)=25 μA in the reverse direction, corresponding to C."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "600 μA; 0",
        "600 μA; +25 μA",
        "600 μA; −25 μA",
        "0; 600 μA"
      ]
    },
    "reviewNote": "The source does not specify the body connection or whether source/drain interchange is allowed. A assumes a unidirectional fixed-source model; C follows an ideal symmetric MOS model. A physical body diode can introduce an additional path.",
    "figure": "pyq-figures/i20-44.svg",
    "figureAlt": "ISRO 2020 Q44 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-45",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "networks",
    "number": 45,
    "ref": "ISRO January 2020 · Set E · Q45",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 36,
    "prompt": "A 100 V source is connected at t=0 through 50 Ω and 100 Ω in series with a 0.3 H inductor initially carrying zero current. Find iL at 8 ms.",
    "answer": "Approximately 0.654 A (654 mA)",
    "steps": [
      "After switching, total series resistance is 150 Ω.",
      "The time constant is L/R=0.3/150=2 ms, and final current is 100/150=2/3 A.",
      "At 8 ms, i=(2/3)(1−e^(−4))≈0.654 A."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.65 mA",
        "0.32 mA",
        "0.26 mA",
        "0.18 mA"
      ]
    },
    "reviewNote": "The archived options print mA; the calculated current is 0.65 A, a factor of 1000 larger. The numerical value of A matches only if its unit is corrected.",
    "figure": "pyq-figures/i20-45.svg",
    "figureAlt": "ISRO 2020 Q45 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-46",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "networks",
    "number": 46,
    "ref": "ISRO January 2020 · Set E · Q46",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 37,
    "prompt": "An ABCD network consists of series impedance −j2 Ω followed by shunt resistance 4 Ω. Find parameter B.",
    "answer": "(B) −j2 Ω",
    "steps": [
      "A series impedance Z has chain matrix [[1,Z],[0,1]].",
      "The following shunt admittance Y has matrix [[1,0],[Y,1]].",
      "Their product is [[1+ZY,Z],[Y,1]], so B=Z=−j2 Ω."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "j2 Ω",
        "−j2 Ω",
        "4−j2 Ω",
        "4 Ω"
      ]
    }
  },
  {
    "id": "i20-47",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "analog",
    "number": 47,
    "ref": "ISRO January 2020 · Set E · Q47",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 39,
    "prompt": "The ideal op-amp Schmitt circuit shown saturates at +10 V and −5 V. Each diode-feedback branch has 2 kΩ and the noninverting node has 4 kΩ to ground. Determine its switching behavior.",
    "answer": "Clockwise inverting hysteresis; thresholds +6.67 V and −3.33 V",
    "steps": [
      "For either active ideal-diode branch, the noninverting node is (4/(2+4))Vo=(2/3)Vo.",
      "At high output, the upper threshold is (2/3)10=6.67 V. Increasing Vi through it drives the inverting comparator low.",
      "At low output, the lower threshold is (2/3)(−5)=−3.33 V. Decreasing Vi through it drives the output high. Thus A has the intended direction but its printed −2.5 V threshold is incorrect."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Clockwise loop: +10/−5 V, thresholds −2.5/6.67 V",
        "Counterclockwise loop: +10/−5 V",
        "Clockwise loop: +10/−10 V",
        "Counterclockwise loop: +10/−10 V"
      ]
    },
    "reviewNote": "No plotted option has both correct threshold values. The lower threshold calculated from the drawn resistors is −3.33 V, not −2.5 V.",
    "figure": "pyq-figures/i20-47.svg",
    "figureAlt": "ISRO 2020 Q47 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-48",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "networks",
    "number": 48,
    "ref": "ISRO January 2020 · Set E · Q48",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 40,
    "prompt": "An AC RLC network contains an ideal inductor of reactance j4 Ω. What average real power does that inductor absorb in steady state?",
    "answer": "(C) 0 W",
    "steps": [
      "For an ideal inductor, voltage leads current by 90°.",
      "Average power is VrmsIrms cos90°.",
      "It therefore absorbs zero average real power, regardless of the surrounding source phases and resistors."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "40 W",
        "15 W",
        "0 W",
        "5 W"
      ]
    }
  },
  {
    "id": "i20-49",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "networks",
    "number": 49,
    "ref": "ISRO January 2020 · Set E · Q49",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 40,
    "prompt": "Count spanning trees for the shown network, distinguishing the passive graph from the complete graph including ideal sources.",
    "answer": "8 for the deactivated passive graph; 20 for the complete graph",
    "steps": [
      "After opening the independent current source and shorting the voltage source, the graph has three nodes with branch multiplicities 1,2,2 between node pairs.",
      "A tree chooses two distinct node-pair connections, so the count is 1×2+1×2+2×2=8, option C under that convention.",
      "If the original ideal source branches are included, there are four nodes. A reduced Laplacian is [[4,−2,0],[−2,4,−1],[0,−1,2]], whose determinant is 20."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "9",
        "5",
        "8",
        "7"
      ]
    },
    "reviewNote": "The archived key counts only the passive network after independent-source deactivation. The literal complete graph drawn, including both source branches, has 20 spanning trees.",
    "figure": "pyq-figures/i20-49.svg",
    "figureAlt": "ISRO 2020 Q49 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-50",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 50,
    "ref": "ISRO January 2020 · Set E · Q50",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 41,
    "prompt": "A single-carrier n-type Ge specimen has effective thickness 4 mm normal to B, I=1 mA, B=0.1 T and Hall-voltage magnitude 5 mV. Estimate electron density.",
    "answer": "(B) Approximately 3×10¹⁹ m⁻³",
    "steps": [
      "For the Hall geometry, |VH|=IB/(qnt).",
      "Rearrange to n=IB/(q|VH|t).",
      "Substitution gives (10⁻³×0.1)/(1.6×10⁻¹⁹×0.005×0.004)=3.125×10¹⁹ m⁻³."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "3×10¹⁹ cm⁻³",
        "3×10¹⁹ m⁻³",
        "6×10¹⁹ cm⁻³",
        "6×10¹⁹ m⁻³"
      ]
    },
    "reviewNote": "The archived copy calls the 4 mm dimension width. The quoted answer requires it to be the Hall-formula thickness normal to the magnetic field; a different geometry would require its actual thickness."
  },
  {
    "id": "i20-51",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 51,
    "ref": "ISRO January 2020 · Set E · Q51",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 41,
    "prompt": "A diode carries 1 mA at 0.60 V and 5 mA at 0.65 V. Assuming ideality factor η=1, estimate junction temperature.",
    "answer": "(B) Approximately 360 K",
    "steps": [
      "In exponential forward conduction, ΔV=η(kT/q)ln(I₂/I₁).",
      "Thus T=0.05/[η(8.617×10⁻⁵)ln5].",
      "With η=1 and ln5≈1.609, T≈361 K, nearest 360 K."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "240 K",
        "360 K",
        "400 K",
        "470 K"
      ]
    },
    "reviewNote": "The temperature estimate assumes η=1. Without an ideality-factor assumption, these two measurements determine ηT rather than temperature alone."
  },
  {
    "id": "i20-52",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 52,
    "ref": "ISRO January 2020 · Set E · Q52",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 42,
    "prompt": "At strong inversion, estimate depletion charge density in silicon with acceptor concentration 10¹⁵ cm⁻³, ni=10¹⁰ cm⁻³ and T≈300 K.",
    "answer": "Approximately −1.41×10⁻⁸ C/cm²; no listed magnitude matches",
    "steps": [
      "The bulk potential magnitude is φF=VT ln(NA/ni)≈0.026 ln10⁵≈0.299 V.",
      "At strong inversion ψs≈2φF. The depletion charge is Qd=−√(2εsqNAψs)=−√(4εsqNAφF).",
      "Using εs=11.7×8.85×10⁻¹⁴ F/cm gives Qd≈−1.41×10⁻⁸ C/cm². The sign is negative because depleted acceptors are negatively charged."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−6.9×10⁻⁸",
        "+6.9×10⁻⁸",
        "−3.4×10⁻⁸",
        "+3.4×10⁻⁸"
      ]
    },
    "reviewNote": "The archived working also obtains −1.41×10⁻⁸ but selects C as nearest. Its magnitude differs by more than a factor of two; it is not a rounding match."
  },
  {
    "id": "i20-53",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 53,
    "ref": "ISRO January 2020 · Set E · Q53",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 42,
    "prompt": "For a p-channel silicon JFET, NA=3×10¹⁶ cm⁻³, ND=10¹⁸ cm⁻³, channel half-thickness a=0.33 μm, ni=10¹⁰ cm⁻³ and VT=0.026 V. Estimate pinch-off voltage magnitude.",
    "answer": "(B) About 1.7 V",
    "steps": [
      "The junction built-in potential is Vbi=0.026 ln[(3×10¹⁶×10¹⁸)/10²⁰]≈0.867 V.",
      "Using the one-sided depletion approximation, the total potential needed for depletion width a is qNAa²/(2εs)≈2.52 V.",
      "The additional reverse-bias magnitude is approximately 2.52−0.867=1.65 V, nearest 1.7 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2.5 V",
        "1.7 V",
        "4.2 V",
        "3.6 V"
      ]
    }
  },
  {
    "id": "i20-54",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "networks",
    "number": 54,
    "ref": "ISRO January 2020 · Set E · Q54",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 44,
    "prompt": "A 6 Ω resistor is in series with a parallel combination of 4 Ω and −j1 Ω. Find source power factor.",
    "answer": "(B) Approximately 0.988 leading",
    "steps": [
      "The parallel impedance is 4(−j)/(4−j)=(4−j16)/17 Ω.",
      "Total impedance is 6.235−j0.941 Ω. Its negative reactance means capacitive behavior and leading current.",
      "Power factor is Re(Z)/|Z|≈6.235/6.306≈0.989, matching 0.988 leading."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.988 lagging",
        "0.988 leading",
        "0.235 lagging",
        "0.235 leading"
      ]
    }
  },
  {
    "id": "i20-55",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "networks",
    "number": 55,
    "ref": "ISRO January 2020 · Set E · Q55",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 44,
    "prompt": "The three series inductors are 6 H,8 H,10 H, with mutual inductances M12=5 H,M23=4 H,M13=2 H and the shown dot orientations. Find equivalent inductance.",
    "answer": "(D) 10 H",
    "steps": [
      "For series coupled coils, Leq=ΣLi+2Σ(signij Mij).",
      "The dot orientations make the 1–2 and 2–3 mutual terms opposing, and 1–3 aiding.",
      "Therefore Leq=6+8+10−2×5−2×4+2×2=10 H."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "46 H",
        "38 H",
        "12 H",
        "10 H"
      ]
    },
    "reviewNote": "The archived statement calls the coils perfectly coupled, but its supplied mutual values are smaller than √(LiLj). The calculation uses the explicitly labeled mutual inductances.",
    "figure": "pyq-figures/i20-55.svg",
    "figureAlt": "ISRO 2020 Q55 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-56",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 56,
    "ref": "ISRO January 2020 · Set E · Q56",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 45,
    "prompt": "For an npn transistor, NE=2×10¹⁸,NB=10¹⁷ cm⁻³, DE=8,DB=20 cm²/s, xE=0.5 μm,xB=0.3 μm. Estimate emitter injection efficiency.",
    "answer": "(C) About 0.99",
    "steps": [
      "For narrow, uniformly doped emitter/base regions, the hole/electron injection-current ratio is (DE/DB)(xB/xE)(NB/NE).",
      "This equals (8/20)(0.3/0.5)(10¹⁷/(2×10¹⁸))=0.012.",
      "Thus γ=1/(1+0.012)≈0.988, nearest 0.99."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.95",
        "0.92",
        "0.99",
        "0.94"
      ]
    }
  },
  {
    "id": "i20-57",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 57,
    "ref": "ISRO January 2020 · Set E · Q57",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 45,
    "prompt": "A p-type Si bar is specified with area 0.5 cm², NA=2×10¹⁷ cm⁻³, injected excess holes 10¹⁶ cm⁻³, μp=500 cm²/(V·s), ni=10¹⁰ cm⁻³ and a parameter τp=10⁻¹⁰ s. Can its minority-electron lifetime be determined?",
    "answer": "Insufficient information; none of the listed lifetimes is established",
    "steps": [
      "In p-type material, minority carriers are electrons, so the requested lifetime is τn.",
      "Carrier concentration, area and hole mobility alone do not determine recombination kinetics. A measured decay, generation rate or a complete recombination/trap model is needed.",
      "The quoted τp concerns holes and supplies no specified relation to τn. Therefore none of 10,15,20,25 μs follows from the given data."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10 μs",
        "15 μs",
        "20 μs",
        "25 μs"
      ]
    },
    "reviewNote": "The archived source likewise marks the problem as having insufficient data. This entry explains why no numerical choice can be justified.",
    "unresolved": true
  },
  {
    "id": "i20-58",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 58,
    "ref": "ISRO January 2020 · Set E · Q58",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 45,
    "prompt": "For a p-type MOS surface, which concentration inequalities characterize weak inversion?",
    "answer": "(B) ps<ns<NA",
    "steps": [
      "Inversion starts when electrons become more numerous than holes at the surface: ns>ps.",
      "During weak inversion, the surface electron concentration has not yet reached the bulk acceptor concentration, so ns<NA.",
      "Together, ps<ns<NA. The broader statement that both are below NA is also true but does not uniquely identify inversion."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "ps>NA",
        "ns<NA and ns>ps",
        "ns<NA and ps<NA",
        "ns>NA"
      ]
    },
    "reviewNote": "Option C is also implied within weak inversion but is less specific; B states the distinguishing inversion condition ns>ps."
  },
  {
    "id": "i20-59",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "analog",
    "number": 59,
    "ref": "ISRO January 2020 · Set E · Q59",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 45,
    "prompt": "A practical op-amp has a nonzero output with both signal inputs grounded. What listed remedy compensates the input offset?",
    "answer": "(B) External offset-balancing adjustment",
    "steps": [
      "Device mismatches produce an input-referred offset voltage.",
      "Negative feedback alone does not remove that offset; it can amplify it by the circuit’s noise gain.",
      "An appropriate offset-null or external balancing circuit supplies a compensating adjustment to bring the output near zero."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Internal negative feedback",
        "External offset balancing",
        "Design only output-node currents",
        "Match output-transistor cut-in voltages exactly"
      ]
    }
  },
  {
    "id": "i20-60",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "networks",
    "number": 60,
    "ref": "ISRO January 2020 · Set E · Q60",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 46,
    "prompt": "Find Norton short-circuit current from A to B in the shown network with a 120 V source, 6 Ω,3 Ω,12 Ω, a 6 A source and 2 Ω.",
    "answer": "(C) 7 A",
    "steps": [
      "Short A to B, bypassing the 12 Ω resistor, and let their common voltage be v.",
      "KCL gives (v−120)/6+v/3+v/2−6=0, hence v=26 V.",
      "The right-hand 2 Ω branch draws 26/2=13 A while its source supplies 6 A, so 7 A must flow through the short from A to B."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−6 A",
        "2 A",
        "7 A",
        "−4.5 A"
      ]
    },
    "figure": "pyq-figures/i20-60.svg",
    "figureAlt": "ISRO 2020 Q60 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-61",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 61,
    "ref": "ISRO January 2020 · Set E · Q61",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 46,
    "prompt": "Match the MOS transfer curves numbered in the source to p-channel enhancement/depletion and n-channel enhancement/depletion devices.",
    "answer": "(C) P–1, Q–3, R–2, S–4",
    "steps": [
      "An enhancement device has no conducting channel at zero gate voltage: n-channel turns on at positive VGS, p-channel at negative VGS.",
      "A depletion device already conducts at VGS=0 and needs gate bias of the opposite sign to shut off.",
      "Thus the plotted negative-threshold enhancement curve is p-enhancement 1, p-depletion is 3, n-enhancement is 2, and n-depletion is 4."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "P4,Q2,R1,S3",
        "P3,Q2,R4,S1",
        "P1,Q3,R2,S4",
        "P2,Q4,R3,S1"
      ]
    },
    "figure": "pyq-figures/i20-61.svg",
    "figureAlt": "ISRO 2020 Q61 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-62",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 62,
    "ref": "ISRO January 2020 · Set E · Q62",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 47,
    "prompt": "Silicon initially has acceptor density 10¹⁹ cm⁻³. Using NC=2.7×10¹⁹ cm⁻³ and kT=26 meV, estimate donor density needed for EF to be 26 meV below EC.",
    "answer": "(D) Approximately 2×10¹⁹ cm⁻³",
    "steps": [
      "In the specified nondegenerate approximation, n=NC exp[−(EC−EF)/kT]=2.7×10¹⁹/e≈9.93×10¹⁸ cm⁻³.",
      "Charge neutrality after compensation gives ND−NA≈n.",
      "Thus ND≈10¹⁹+9.93×10¹⁸≈2×10¹⁹ cm⁻³."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1.5×10¹⁹",
        "3×10¹⁹",
        "10¹⁹",
        "2×10¹⁹"
      ]
    }
  },
  {
    "id": "i20-63",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "em",
    "number": 63,
    "ref": "ISRO January 2020 · Set E · Q63",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 47,
    "prompt": "At a vacuum–dielectric boundary with εr=√3, the incident electrostatic field makes 45° with the normal. Find the angular deflection inside the dielectric.",
    "answer": "(B) 15°",
    "steps": [
      "With no free interfacial charge, normal D is continuous: En,dielectric=En,vacuum/εr. Tangential E is continuous.",
      "Thus tanθdielectric=εr tan45°=√3, giving θdielectric=60° from the normal.",
      "The deflection relative to the original field direction is 60°−45°=15°."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "60°",
        "15°",
        "30°",
        "25°"
      ]
    }
  },
  {
    "id": "i20-64",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "em",
    "number": 64,
    "ref": "ISRO January 2020 · Set E · Q64",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 50,
    "prompt": "Parallel conducting planes separated by b have lowest TE cutoff 15 GHz. Adding sidewalls 10 mm apart forms a rectangular air-filled guide. Find TE₁₁ cutoff.",
    "answer": "(C) 15√2 GHz",
    "steps": [
      "The parallel-plate TE cutoff is c/(2b)=15 GHz, giving b=10 mm.",
      "The added sidewall separation is also a=10 mm.",
      "For TE₁₁, fc=(c/2)√(1/a²+1/b²)=15√2 GHz≈21.21 GHz."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "30 GHz",
        "15/√2 GHz",
        "15√2 GHz",
        "10√2 GHz"
      ]
    }
  },
  {
    "id": "i20-65",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "digital",
    "number": 65,
    "ref": "ISRO January 2020 · Set E · Q65",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 51,
    "prompt": "A diode-AND circuit is pulled up to 5 V, with inputs V₁∈[0,5] V and V₂=3 V. Each forward diode drop is 0.6 V. Determine Vₒ(V₁).",
    "answer": "(B) Vₒ=min(V₁+0.6,3.6) V",
    "steps": [
      "The lower input forward-biases its diode and clamps the common output to input plus 0.6 V.",
      "For V₁<3 V, the first diode controls and Vₒ=V₁+0.6 V.",
      "For V₁≥3 V, the fixed 3 V input controls and Vₒ=3.6 V. The breakpoint is V₁=3 V, not 3.6 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Breakpoint 3.6 V, plateau 3.6 V",
        "Breakpoint 3 V, plateau 3.6 V",
        "Unbounded rising line",
        "Falling characteristic"
      ]
    },
    "figure": "pyq-figures/i20-65.svg",
    "figureAlt": "ISRO 2020 Q65 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-66",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "analog",
    "number": 66,
    "ref": "ISRO January 2020 · Set E · Q66",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 52,
    "prompt": "Which listed application pair corresponds to a buck converter and a boost converter respectively?",
    "answer": "(A) Regulated DC supply; regenerative braking",
    "steps": [
      "A buck converter steps DC voltage down and is commonly used in regulated DC supplies.",
      "A boost converter steps voltage up, allowing a generating motor’s lower terminal voltage to return energy to a higher DC bus during regenerative braking.",
      "These correspond to application pair A,B in the question."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Regulated supply; regenerative braking",
        "Regenerative braking; motor speed control",
        "Regulated supply; motor speed control",
        "Regenerative braking; regulated supply"
      ]
    }
  },
  {
    "id": "i20-67",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 67,
    "ref": "ISRO January 2020 · Set E · Q67",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 52,
    "prompt": "SiO₂ breaks down near 5×10⁶ V/cm. For 1000 Å gate oxide, estimate the oxide-voltage limit and assess whether maximum VGS follows.",
    "answer": "(D) Oxide voltage ≈50 V; exact VGS needs additional information",
    "steps": [
      "Convert tox=1000 Å=10⁻⁵ cm.",
      "The oxide voltage at the quoted field is Vox=Ebdtox=5×10⁶×10⁻⁵=50 V.",
      "Gate-to-source voltage also includes surface potential and flat-band/work-function contributions. The channel thickness alone does not determine these, and 50 V is not among the listed numeric choices."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "5 V",
        "10 V",
        "100 V",
        "None"
      ]
    }
  },
  {
    "id": "i20-68",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "devices",
    "number": 68,
    "ref": "ISRO January 2020 · Set E · Q68",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 53,
    "prompt": "For a conventional SCR thyristor, identify false statements: A majority-carrier device; B two stable forward regions; C only one stable forward region; D negative gate current turns it off.",
    "answer": "(C) A,C,D",
    "steps": [
      "An SCR operates with both electron and hole injection, so it is not a majority-carrier-only device.",
      "Its forward characteristic has stable blocking and conducting regions, so B is true and C false.",
      "An ordinary SCR cannot generally be turned off by negative gate current; gate turn-off requires a specially designed GTO. Thus D is false for the conventional SCR."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "A,B",
        "B,C,D",
        "A,C,D",
        "B,C"
      ]
    }
  },
  {
    "id": "i20-69",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "analog",
    "number": 69,
    "ref": "ISRO January 2020 · Set E · Q69",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 53,
    "prompt": "A 20 V source feeds a 20 kΩ resistor and 20 kΩ load. Across the load is a series 10 V Zener and forward Ge diode with 0.2 V drop. Find output.",
    "answer": "(B) 10 V",
    "steps": [
      "First assume the diode branch is off. The equal resistors divide 20 V into a 10 V output.",
      "The series branch would need 10+0.2=10.2 V to conduct.",
      "Since 10 V is below that threshold, the off assumption is consistent and the output remains 10 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10.2 V",
        "10 V",
        "9.8 V",
        "0.2 V"
      ]
    },
    "figure": "pyq-figures/i20-69.svg",
    "figureAlt": "ISRO 2020 Q69 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-70",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "control",
    "number": 70,
    "ref": "ISRO January 2020 · Set E · Q70",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 54,
    "prompt": "For the shown minimum-phase loop Bode asymptote, magnitude is 40 dB at log₁₀ω=0 and initially falls at −20 dB/decade. Find unity-feedback unit-ramp steady error, assuming closed-loop stability.",
    "answer": "(D) 0.01",
    "steps": [
      "The low-frequency −20 dB/decade slope indicates one integrator, so |G(jω)|≈Kv/ω.",
      "At log₁₀ω=0, ω=1 rad/s and the asymptotic magnitude is 10^(40/20)=100. Thus Kv=100 s⁻¹.",
      "For a type-1 unity-feedback loop, ramp error is 1/Kv=0.01."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Infinite",
        "0.1",
        "0",
        "0.01"
      ]
    },
    "reviewNote": "The archived key selects 0.1 using the 20 dB plateau as Kv, but the axis is logω. The initial asymptote is 40 dB at ω=1 and 20 dB at ω=10, giving Kv=100 in both cases.",
    "figure": "pyq-figures/i20-70.svg",
    "figureAlt": "ISRO 2020 Q70 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-71",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "analog",
    "number": 71,
    "ref": "ISRO January 2020 · Set E · Q71",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 54,
    "prompt": "Identify the two isolated converter topologies shown, using the secondary energy-transfer and filtering paths.",
    "answer": "(A) (i) Flyback; (ii) forward",
    "steps": [
      "Circuit (i) has the flyback dot orientation: the output diode conducts when stored magnetizing energy is released after switch-off. It has no separate output smoothing inductor.",
      "Circuit (ii) transfers transformer power to the secondary while the switches are on and has a separate output inductor with a freewheeling path.",
      "These are the flyback and forward converter respectively."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Flyback; forward",
        "Forward; flyback",
        "Both forward",
        "Both flyback"
      ]
    },
    "figure": "pyq-figures/i20-71.svg",
    "figureAlt": "ISRO 2020 Q71 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-72",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "control",
    "number": 72,
    "ref": "ISRO January 2020 · Set E · Q72",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 55,
    "prompt": "Compare the −3 dB bandwidths of G₁(s)=1/(3s+1) and G₂(s)=1/(s+1).",
    "answer": "(B) System 2 has greater bandwidth",
    "steps": [
      "A first-order low-pass 1/(τs+1) has bandwidth ωB=1/τ.",
      "System 1 has τ=3 and bandwidth 1/3 rad/s.",
      "System 2 has τ=1 and bandwidth 1 rad/s, three times larger."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "System 1 greater",
        "System 2 greater",
        "Equal",
        "Both infinite"
      ]
    }
  },
  {
    "id": "i20-73",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "control",
    "number": 73,
    "ref": "ISRO January 2020 · Set E · Q73",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 55,
    "prompt": "Find the stable positive-gain range for unity negative feedback with G(s)=K/[s(s+2)(s+4)].",
    "answer": "(D) None listed; the range is 0<K<48",
    "steps": [
      "The closed-loop characteristic polynomial is s³+6s²+8s+K.",
      "The Routh first column is 1,6,(48−K)/6,K.",
      "All entries must be positive, giving K>0 and K<48. The listed range 0<K<24 is sufficient but is not the full stability condition."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "K>0",
        "0<K<24",
        "K<24",
        "None"
      ]
    },
    "reviewNote": "If the question asks merely for a sufficient condition, B is sufficient. For the complete necessary-and-sufficient stable range, 0<K<48, no listed numerical range is exact."
  },
  {
    "id": "i20-74",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "control",
    "number": 74,
    "ref": "ISRO January 2020 · Set E · Q74",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 56,
    "prompt": "For a normalized underdamped second-order step response with damping ζ, find the third positive overshoot and second undershoot magnitudes relative to final value.",
    "answer": "(D) exp[−5πζ/√(1−ζ²)] and exp[−4πζ/√(1−ζ²)]",
    "steps": [
      "Successive extrema occur at tn=nπ/ωd. The deviation envelope there is exp[−nπζ/√(1−ζ²)].",
      "Positive overshoots occur for n=1,3,5,…, so the third uses n=5.",
      "Undershoots occur for n=2,4,…, so the second uses n=4."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Exponents 3 and 2",
        "Exponents 4 and 5",
        "Exponents 6 and 4",
        "Exponents 5 and 4"
      ]
    }
  },
  {
    "id": "i20-75",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "control",
    "number": 75,
    "ref": "ISRO January 2020 · Set E · Q75",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 56,
    "prompt": "On the shown Nyquist curve, which marked frequency corresponds to resonance?",
    "answer": "(B) ω₂",
    "steps": [
      "Resonance is the frequency at which the frequency-response magnitude is largest.",
      "A point’s magnitude on a Nyquist plot is its distance from the origin.",
      "Among the four marked points, ω₂ is farthest from the origin and therefore is the resonant frequency."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "ω₁",
        "ω₂",
        "ω₃",
        "ω₄"
      ]
    },
    "figure": "pyq-figures/i20-75.svg",
    "figureAlt": "ISRO 2020 Q75 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-76",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "control",
    "number": 76,
    "ref": "ISRO January 2020 · Set E · Q76",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 56,
    "prompt": "Find the causal unit-step response of G(s)=(1−s)/(1+s).",
    "answer": "(A) (1−2e^(−t))u(t)",
    "steps": [
      "For unit-step input, Y(s)=(1−s)/[s(s+1)].",
      "Partial fractions give Y(s)=1/s−2/(s+1).",
      "Inverse Laplace transformation yields y(t)=(1−2e^(−t))u(t), with an initial negative jump from the direct feedthrough."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(1−2e^(−t))u(t)",
        "(1−e^(−t))u(t)",
        "e^(−t)u(t)",
        "2e^(−t)u(t)"
      ]
    }
  },
  {
    "id": "i20-77",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "control",
    "number": 77,
    "ref": "ISRO January 2020 · Set E · Q77",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 57,
    "prompt": "G(s)=1600/[s(s+1)(s+16)] is compensated so its gain crossover equals its original phase crossover. Can the compensated phase crossover be uniquely determined?",
    "answer": "(D) Not without specifying the compensator",
    "steps": [
      "For the original system, phase reaches −180° when atanω+atan(ω/16)=90°, giving ω²=16 and ωpc=4 rad/s.",
      "The requirement therefore sets only the compensated gain crossover to 4 rad/s.",
      "A general compensator can change phase independently of that magnitude constraint, so its phase crossover is not determined. For a positive gain-only compensator it would remain 4 rad/s, but that restriction was not given."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "4 rad/s",
        "8 rad/s",
        "16 rad/s",
        "None / cannot determine"
      ]
    }
  },
  {
    "id": "i20-78",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "signals",
    "number": 78,
    "ref": "ISRO January 2020 · Set E · Q78",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 57,
    "prompt": "Each of two identical cascaded LTI stages obeys y[n]=0.1x[n]+0.9y[n−1]. Find the overall difference equation.",
    "answer": "(A) y[n]−1.8y[n−1]+0.81y[n−2]=0.01x[n]",
    "steps": [
      "One stage has transfer function H(z)=0.1/(1−0.9z⁻¹).",
      "The cascade is H²(z)=0.01/(1−1.8z⁻¹+0.81z⁻²).",
      "Multiplying through and transforming back gives the stated second-order recurrence, assuming zero-state transfer behavior."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "y[n]−1.8y[n−1]+0.81y[n−2]=0.01x[n]",
        "y[n]+0.81y[n−1]=0.01x[n]",
        "y[n]−0.81y[n−1]+1.8y[n−2]=0.01x[n]",
        "y[n]−1.8y[n−1]=0.01x[n]"
      ]
    }
  },
  {
    "id": "i20-79",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "control",
    "number": 79,
    "ref": "ISRO January 2020 · Set E · Q79",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 58,
    "prompt": "Count the distinct simple directed feedback loops in the shown signal-flow graph, using its branch numbers.",
    "answer": "(C) 5",
    "steps": [
      "The two self-loops are branches 12 and 13.",
      "The upper two-node loop uses branches 9 and 10; the lower two-node loop uses 6 and 7.",
      "The remaining simple loop uses 4,5,7. No other directed path returns to its start without repeating a node. Total: five loops."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "3",
        "4",
        "5",
        "6"
      ]
    },
    "figure": "pyq-figures/i20-79.svg",
    "figureAlt": "ISRO 2020 Q79 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  },
  {
    "id": "i20-80",
    "paperId": "isro-2020",
    "exam": "isro",
    "topic": "control",
    "number": 80,
    "ref": "ISRO January 2020 · Set E · Q80",
    "file": "https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf",
    "page": 58,
    "prompt": "For the source Nyquist sketch interpreted as one net counterclockwise encirclement of −1, how many right-half-plane open-loop poles are required for closed-loop stability?",
    "answer": "(A) 1, under the stated encirclement interpretation",
    "steps": [
      "Use Nccw=P−Z for the clockwise right-half-plane Nyquist contour, where P and Z count open- and closed-loop right-half-plane poles.",
      "Closed-loop stability requires Z=0.",
      "One net counterclockwise encirclement therefore requires P=Nccw=1."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1",
        "2",
        "0",
        "−1"
      ]
    },
    "reviewNote": "The archived drawing does not label −1 or provide a horizontal scale. Its intended answer assumes one net encirclement of −1; a different placement relative to the finite inner lobes could change the count.",
    "figure": "pyq-figures/i20-80.svg",
    "figureAlt": "ISRO 2020 Q80 source diagram",
    "figureCaption": "Archived diagram · scalable vector artwork · click to enlarge"
  }
];
