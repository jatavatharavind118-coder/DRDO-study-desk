export const gate2009Complete = [
  {
    "id": "g09-1",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "math",
    "number": 1,
    "ref": "GATE 2009 · Q1",
    "file": "EC2009.pdf",
    "page": 2,
    "prompt": "Find the order of y″+(y′)³+y⁴=e^(−t).",
    "answer": "(B) 2",
    "steps": [
      "The order is the highest derivative appearing in the equation.",
      "The derivatives are y′ and y″; y⁴ is a power of the dependent variable.",
      "The highest derivative is second order, irrespective of the cubic power on y′."
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
    "id": "g09-2",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "signals",
    "number": 2,
    "ref": "GATE 2009 · Q2",
    "file": "EC2009.pdf",
    "page": 2,
    "prompt": "Which Fourier-series statements hold for a real periodic function: P only cosine terms if even; Q only sine terms if even; R only cosine terms if odd; S only sine terms if odd?",
    "answer": "(A) P and S",
    "steps": [
      "Cosines are even and sines are odd.",
      "For an even function, the sine coefficients vanish by odd symmetry of the integrand. A DC term may remain.",
      "For an odd function, both the DC and cosine coefficients vanish, leaving sine terms."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "P and S",
        "P and R",
        "Q and S",
        "Q and R"
      ]
    }
  },
  {
    "id": "g09-3",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "signals",
    "number": 3,
    "ref": "GATE 2009 · Q3",
    "file": "EC2009.pdf",
    "page": 2,
    "prompt": "Find the frequency components of f(t)=sin²t+cos 2t.",
    "answer": "(B) 0 and 1/π Hz",
    "steps": [
      "Use sin²t=(1−cos 2t)/2.",
      "Thus f(t)=1/2+(1/2)cos 2t.",
      "The DC frequency is zero and the sinusoidal frequency is 2/(2π)=1/π Hz."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0 and 1/(2π) Hz",
        "0 and 1/π Hz",
        "1/(2π) and 1/π Hz",
        "0, 1/(2π), and 1/π Hz"
      ]
    }
  },
  {
    "id": "g09-4",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "networks",
    "number": 4,
    "ref": "GATE 2009 · Q4",
    "file": "EC2009.pdf",
    "page": 2,
    "prompt": "A battery supplies 2 A for 10 minutes while its voltage falls linearly from 12 V to 10 V. Find the delivered energy.",
    "answer": "(C) 13.2 kJ",
    "steps": [
      "Energy is ∫vi dt. The current is constant.",
      "The average voltage of a linear ramp is (12+10)/2=11 V.",
      "E=2×11×600=13200 J=13.2 kJ."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "220 J",
        "12 kJ",
        "13.2 kJ",
        "14.4 kJ"
      ]
    }
  },
  {
    "id": "g09-5",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "devices",
    "number": 5,
    "ref": "GATE 2009 · Q5",
    "file": "EC2009.pdf",
    "page": 2,
    "prompt": "In n-type silicon at room temperature, which species can have concentration 4×10¹⁹ cm⁻³?",
    "answer": "(C) Dopant atoms",
    "steps": [
      "The silicon atomic density is approximately 5×10²² cm⁻³; the valence-electron density is still larger.",
      "Holes are minority carriers in n-type silicon, so a hole concentration of this magnitude is inconsistent with n-type material.",
      "A donor concentration of 4×10¹⁹ cm⁻³ is possible in heavily doped silicon."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Silicon atoms",
        "Holes",
        "Dopant atoms",
        "Valence electrons"
      ]
    }
  },
  {
    "id": "g09-6",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "digital",
    "number": 6,
    "ref": "GATE 2009 · Q6",
    "file": "EC2009.pdf",
    "page": 2,
    "prompt": "Expand TTL and CMOS as used for digital logic families.",
    "answer": "(C) Transistor Transistor Logic; Complementary Metal Oxide Semiconductor",
    "steps": [
      "TTL uses bipolar transistors in its logic structure.",
      "CMOS combines complementary n-channel and p-channel MOS devices.",
      "These names expand to Transistor Transistor Logic and Complementary Metal Oxide Semiconductor."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Triple Transistor Logic; Chip Metal Oxide Semiconductor",
        "Tristate Transistor Logic; Chip Metal Oxide Semiconductor",
        "Transistor Transistor Logic; Complementary Metal Oxide Semiconductor",
        "Tristate Transistor Logic; Complementary Metal Oxide Silicon"
      ]
    }
  },
  {
    "id": "g09-7",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "signals",
    "number": 7,
    "ref": "GATE 2009 · Q7",
    "file": "EC2009.pdf",
    "page": 3,
    "prompt": "Find the ROC of x[n]=(1/3)ⁿu[n]−(1/2)ⁿu[−n−1].",
    "answer": "(A) 1/3<|z|<1/2",
    "steps": [
      "The right-sided sequence (1/3)ⁿu[n] converges for |z|>1/3.",
      "The left-sided sequence −(1/2)ⁿu[−n−1] converges for |z|<1/2.",
      "The sum converges on the intersection, the annulus 1/3<|z|<1/2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1/3<|z|<1/2",
        "|z|>1/2",
        "|z|<1/3",
        "2<|z|<3"
      ]
    }
  },
  {
    "id": "g09-8",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "control",
    "number": 8,
    "ref": "GATE 2009 · Q8",
    "file": "EC2009.pdf",
    "page": 3,
    "prompt": "The compensator magnitude starts at 20 dB, falls to a −40 dB plateau, then rises back to 20 dB. Identify the compensator.",
    "answer": "(D) Lead-lag compensator",
    "steps": [
      "A lag section produces a falling transition between two plateaus.",
      "A lead section produces a rising transition.",
      "The plotted fall followed by rise requires both sections: lead-lag compensation."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Lead",
        "Lag",
        "PID",
        "Lead-lag"
      ]
    },
    "figure": "pyq-figures/g09-8.png",
    "figureAlt": "Original GATE 2009 Q8 diagram and choices"
  },
  {
    "id": "g09-9",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "communication",
    "number": 9,
    "ref": "GATE 2009 · Q9",
    "file": "EC2009.pdf",
    "page": 3,
    "prompt": "White noise has two-sided PSD 10⁻¹⁰ W/Hz. The filter |H(f)|² is triangular, with peak 1 at zero and zeros at ±10 kHz. Find output power.",
    "answer": "(B) 10⁻⁶ W",
    "steps": [
      "The output PSD is Sᵧ(f)=Sₓ(f)|H(f)|².",
      "The triangle area is (1/2)×20000×1=10000 Hz.",
      "Output power is 10⁻¹⁰×10000=10⁻⁶ W."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "5×10⁻⁷ W",
        "10⁻⁶ W",
        "2×10⁻⁶ W",
        "10⁻⁵ W"
      ]
    }
  },
  {
    "id": "g09-10",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "em",
    "number": 10,
    "ref": "GATE 2009 · Q10",
    "file": "EC2009.pdf",
    "page": 3,
    "prompt": "Which guide has a fundamental mode without cutoff: P coaxial, Q hollow cylindrical, or R hollow rectangular?",
    "answer": "(A) Only P",
    "steps": [
      "A coaxial line has two conductors and supports a TEM mode.",
      "The TEM mode has no nonzero cutoff frequency in the ideal line.",
      "Hollow single-conductor cylindrical and rectangular guides support TE/TM modes with nonzero cutoff."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Only P has no cutoff",
        "Only Q has no cutoff",
        "Only R has no cutoff",
        "All three have cutoff"
      ]
    }
  },
  {
    "id": "g09-11",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "math",
    "number": 11,
    "ref": "GATE 2009 · Q11",
    "file": "EC2009.pdf",
    "page": 3,
    "prompt": "A fair coin is tossed ten times. Find the probability that only the first two tosses are heads.",
    "answer": "(C) (1/2)¹⁰",
    "steps": [
      "The required outcome is one specified sequence: HH followed by eight tails.",
      "Independent toss probabilities multiply.",
      "Its probability is (1/2)²(1/2)⁸=(1/2)¹⁰; no binomial factor is needed."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(1/2)²",
        "C(10,2)(1/2)²",
        "(1/2)¹⁰",
        "C(10,2)(1/2)¹⁰"
      ]
    }
  },
  {
    "id": "g09-12",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "signals",
    "number": 12,
    "ref": "GATE 2009 · Q12",
    "file": "EC2009.pdf",
    "page": 4,
    "prompt": "If a stationary random process has a sinc-squared PSD, what is the shape of its autocorrelation?",
    "answer": "(B) Triangular",
    "steps": [
      "The PSD and autocorrelation are Fourier-transform pairs by Wiener–Khinchin.",
      "A rectangular pulse transforms to a sinc; convolving two rectangles produces a triangle.",
      "The corresponding frequency-domain product is sinc squared, so the autocorrelation is triangular."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Rectangular",
        "Triangular",
        "Semicircular",
        "Sinc-like"
      ]
    },
    "figure": "pyq-figures/g09-12.png",
    "figureAlt": "Original GATE 2009 Q12 diagram and choices"
  },
  {
    "id": "g09-13",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "math",
    "number": 13,
    "ref": "GATE 2009 · Q13",
    "file": "EC2009.pdf",
    "page": 4,
    "prompt": "For f(z)=c₀+c₁z⁻¹, evaluate ∮(1+f(z))/z dz counterclockwise around the unit circle.",
    "answer": "(D) 2πj(1+c₀)",
    "steps": [
      "Expand the integrand as (1+c₀)/z+c₁/z².",
      "The residue at the origin is the coefficient of z⁻¹, namely 1+c₀.",
      "The residue theorem gives 2πj times this coefficient; the z⁻² term contributes zero."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2πc₁",
        "2π(1+c₀)",
        "2πjc₁",
        "2πj(1+c₀)"
      ]
    }
  },
  {
    "id": "g09-14",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "networks",
    "number": 14,
    "ref": "GATE 2009 · Q14",
    "file": "EC2009.pdf",
    "page": 4,
    "prompt": "In the shown source network, the 60 V source absorbs power. Which listed value can the downward current source I have?",
    "answer": "(A) 10 A",
    "steps": [
      "The 12 A source forces 12 A through the right-hand branch into the upper node.",
      "KCL gives downward current through the 60 V source as 12−I.",
      "Absorption requires current entering its positive terminal: 12−I>0. Only I=10 A satisfies this."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10 A",
        "13 A",
        "15 A",
        "18 A"
      ]
    },
    "figure": "pyq-figures/g09-14.png",
    "figureAlt": "Original GATE 2009 Q14 diagram and choices"
  },
  {
    "id": "g09-15",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "devices",
    "number": 15,
    "ref": "GATE 2009 · Q15",
    "file": "EC2009.pdf",
    "page": 4,
    "prompt": "Find the units of mobility divided by diffusion coefficient, μ/D.",
    "answer": "(A) V⁻¹",
    "steps": [
      "Mobility has units cm²/(V·s).",
      "Diffusion coefficient has units cm²/s.",
      "Their ratio has units V⁻¹, also consistent with D/μ=kT/q."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "V⁻¹",
        "cm·V⁻¹",
        "V·cm⁻¹",
        "V·s"
      ]
    }
  },
  {
    "id": "g09-16",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "digital",
    "number": 16,
    "ref": "GATE 2009 · Q16",
    "file": "EC2009.pdf",
    "page": 4,
    "prompt": "An interrupt has a fixed, internally specified service address, but it can be delayed or rejected. Classify it.",
    "answer": "(D) Maskable and vectored",
    "steps": [
      "A fixed service address identifies a vectored interrupt.",
      "An interrupt that software or interrupt controls can reject or postpone is maskable.",
      "Both descriptions apply, giving maskable and vectored."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Non-maskable, non-vectored",
        "Maskable, non-vectored",
        "Non-maskable, vectored",
        "Maskable, vectored"
      ]
    }
  },
  {
    "id": "g09-17",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "networks",
    "number": 17,
    "ref": "GATE 2009 · Q17",
    "file": "EC2009.pdf",
    "page": 5,
    "prompt": "A series R drives a parallel C and Rᴸ load. If Vₒ/Vᵢ=1/(2+sCR), find Rᴸ.",
    "answer": "(C) R",
    "steps": [
      "The parallel impedance is Z=Rᴸ/(1+sCRᴸ).",
      "Voltage division gives H=1/[1+R/Rᴸ+sCR].",
      "Comparison of the constant term with 2 gives R/Rᴸ=1, so Rᴸ=R."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "R/4",
        "R/2",
        "R",
        "2R"
      ]
    }
  },
  {
    "id": "g09-18",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "control",
    "number": 18,
    "ref": "GATE 2009 · Q18",
    "file": "EC2009.pdf",
    "page": 5,
    "prompt": "For ẋ=Ax+Bu with A=I₂ and B=[p,q]ᵀ, determine controllability for real p,q.",
    "answer": "(C) Uncontrollable for all p,q",
    "steps": [
      "The controllability matrix is [B,AB].",
      "Since A is the identity, AB=B; its columns are identical.",
      "Its rank is at most one, less than the two states, for every p,q."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Controllable whenever p,q are nonzero",
        "Controllable only at p=q=0",
        "Uncontrollable for all p,q",
        "Insufficient data"
      ]
    }
  },
  {
    "id": "g09-19",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "communication",
    "number": 19,
    "ref": "GATE 2009 · Q19",
    "file": "EC2009.pdf",
    "page": 5,
    "prompt": "For message cos(2πfₘt) and carrier frequency f꜀, which expression represents SSB?",
    "answer": "(C) cos[2π(f꜀+fₘ)t]",
    "steps": [
      "Multiplying message and carrier produces both sum and difference frequencies: DSB-SC.",
      "Adding a carrier produces conventional AM, still with two sidebands.",
      "Keeping only the sum-frequency sinusoid produces the upper single sideband."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "cos(2πfₘt)cos(2πf꜀t)",
        "cos(2πf꜀t)",
        "cos[2π(f꜀+fₘ)t]",
        "[1+cos(2πfₘt)]cos(2πf꜀t)"
      ]
    }
  },
  {
    "id": "g09-20",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "em",
    "number": 20,
    "ref": "GATE 2009 · Q20",
    "file": "EC2009.pdf",
    "page": 5,
    "prompt": "The shown infinite wires lie parallel to +y at positive z and parallel to +x at positive y. Which magnetic-field components are nonzero at the origin?",
    "answer": "(D) x and z",
    "steps": [
      "The magnetic field of a straight wire is perpendicular to its current direction and the radial displacement to the observation point.",
      "For the y-directed upper wire, ŷ×(−ẑ)=−x̂.",
      "For the x-directed lower wire, x̂×(−ŷ)=−ẑ. Thus only x and z components occur."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "x,y,z",
        "x,y",
        "y,z",
        "x,z"
      ]
    },
    "figure": "pyq-figures/g09-20.png",
    "figureAlt": "Original GATE 2009 Q20 diagram and choices"
  },
  {
    "id": "g09-21",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "math",
    "number": 21,
    "ref": "GATE 2009 · Q21",
    "file": "EC2009.pdf",
    "page": 6,
    "prompt": "Independent X,Y each take 0,1,2 with probabilities 1/2,1/4,1/4. Find P(X+Y=2 | X−Y=0).",
    "answer": "(C) 1/6",
    "steps": [
      "The condition X=Y has probability (1/2)²+(1/4)²+(1/4)²=3/8.",
      "Both X=Y and X+Y=2 require X=Y=1, with probability 1/16.",
      "Conditional probability is (1/16)/(3/8)=1/6."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1/16",
        "1/6",
        "1"
      ]
    }
  },
  {
    "id": "g09-22",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "math",
    "number": 22,
    "ref": "GATE 2009 · Q22",
    "file": "EC2009.pdf",
    "page": 6,
    "prompt": "Expand sin x/(x−π) around x=π.",
    "answer": "(D) −1+(x−π)²/3!−…",
    "steps": [
      "Set h=x−π. Then sin x=sin(π+h)=−sin h.",
      "Use sin h=h−h³/3!+h⁵/5!−….",
      "Dividing by h gives −1+h²/3!−h⁴/5!+…, with the removable value −1 at h=0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1+(x−π)²/3!+…",
        "−1−(x−π)²/3!+…",
        "1−(x−π)²/3!+…",
        "−1+(x−π)²/3!−…"
      ]
    }
  },
  {
    "id": "g09-23",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "math",
    "number": 23,
    "ref": "GATE 2009 · Q23",
    "file": "EC2009.pdf",
    "page": 6,
    "prompt": "If V=∇×A, which contour/surface integral identity follows for a closed contour C bounding S?",
    "answer": "(B) ∮C A·dl=∬S V·dS",
    "steps": [
      "Stokes’s theorem equates circulation of a vector field to flux of its curl.",
      "Apply it to A: ∮A·dl=∬(∇×A)·dS.",
      "Substitute V=∇×A to obtain the listed identity, with consistent orientations."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "∮V·dl=∬A·dS",
        "∮A·dl=∬V·dS",
        "∮(∇×V)·dl=∬(∇×A)·dS",
        "∮(∇×A)·dl=∬V·dS"
      ]
    }
  },
  {
    "id": "g09-24",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "signals",
    "number": 24,
    "ref": "GATE 2009 · Q24",
    "file": "EC2009.pdf",
    "page": 6,
    "prompt": "If F(s) is the one-sided Laplace transform of f(t), find the transform of ∫₀ᵗf(τ)dτ.",
    "answer": "(B) F(s)/s",
    "steps": [
      "Let g(t)=∫₀ᵗf(τ)dτ, so g(0)=0 and g′(t)=f(t).",
      "The derivative rule gives sG(s)−g(0)=F(s).",
      "Therefore G(s)=F(s)/s."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "sF(s)−f(0)",
        "F(s)/s",
        "∫₀ˢF(τ)dτ",
        "[F(s)−f(0)]/s"
      ]
    }
  },
  {
    "id": "g09-25",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "math",
    "number": 25,
    "ref": "GATE 2009 · Q25",
    "file": "EC2009.pdf",
    "page": 7,
    "prompt": "Match P:y′=y/x; Q:y′=−y/x; R:y′=x/y; S:y′=−x/y to 1 circles, 2 straight lines, 3 hyperbolas.",
    "answer": "(A) P–2, Q–3, R–3, S–1",
    "steps": [
      "P integrates to y=Cx, a family of straight lines; Q integrates to xy=C, rectangular hyperbolas.",
      "For R, y dy=x dx gives y²−x²=C, hyperbolas.",
      "For S, y dy=−x dx gives x²+y²=C, circles."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "P2,Q3,R3,S1",
        "P1,Q3,R2,S1",
        "P2,Q1,R3,S3",
        "P3,Q2,R1,S2"
      ]
    }
  },
  {
    "id": "g09-26",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "math",
    "number": 26,
    "ref": "GATE 2009 · Q26",
    "file": "EC2009.pdf",
    "page": 7,
    "prompt": "Find eigenvalues of [[−1,3,5],[−3,−1,6],[0,0,3]].",
    "answer": "(D) 3, −1+3j, −1−3j",
    "steps": [
      "The matrix is block upper triangular. Its eigenvalues are those of the top-left 2×2 block and the bottom-right scalar.",
      "The 2×2 characteristic polynomial is (λ+1)²+9.",
      "Its roots are −1±3j; the remaining eigenvalue is 3."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "3,3+5j,6−j",
        "−6+5j,3+j,3−j",
        "3+j,3−j,5+j",
        "3,−1+3j,−1−3j"
      ]
    }
  },
  {
    "id": "g09-27",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "networks",
    "number": 27,
    "ref": "GATE 2009 · Q27",
    "file": "EC2009.pdf",
    "page": 7,
    "prompt": "A 20 V RMS source with Zs=1+2j Ω drives Zᴸ=7+4j Ω. Find load reactive power.",
    "answer": "(B) 16 VAR",
    "steps": [
      "Total impedance is 8+6j Ω, whose magnitude is 10 Ω.",
      "The RMS current magnitude is 20/10=2 A.",
      "Reactive load power Q=|I|² Im Zᴸ=4×4=16 VAR."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "8 VAR",
        "16 VAR",
        "28 VAR",
        "32 VAR"
      ]
    }
  },
  {
    "id": "g09-28",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "networks",
    "number": 28,
    "ref": "GATE 2009 · Q28",
    "file": "EC2009.pdf",
    "page": 7,
    "prompt": "The capacitor network charges from 100 V for a long time, then discharges through 5 kΩ at t=0. Find the shown current i(t).",
    "answer": "(B) 20e^(−1250t)u(t) mA",
    "steps": [
      "The 0.5 μF and 0.3 μF capacitors are parallel, giving 0.8 μF. In series with 0.2 μF, Ceq=(0.2×0.8)/(0.2+0.8)=0.16 μF.",
      "The total capacitor-network voltage initially is 100 V, so i(0⁺)=100/5000=20 mA.",
      "The discharge time constant is 5000×0.16 μF=0.0008 s, giving i(t)=20e^(−1250t) mA for t>0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.2e^(−125t)u(t) mA",
        "20e^(−1250t)u(t) mA",
        "0.2e^(−1250t)u(t) mA",
        "20e^(−1000t)u(t) mA"
      ]
    },
    "figure": "pyq-figures/g09-28.png",
    "figureAlt": "Original GATE 2009 Q28 diagram and choices"
  },
  {
    "id": "g09-29",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "networks",
    "number": 29,
    "ref": "GATE 2009 · Q29",
    "file": "EC2009.pdf",
    "page": 8,
    "prompt": "Find Rᴸ that maximizes load power in the shown network with a dependent voltage source.",
    "answer": "(C) 4 Ω",
    "steps": [
      "Suppress the independent 100 V source and apply a test voltage v at the load port; keep the dependent source active.",
      "The middle branch is two series 4 Ω resistors, so its midpoint and controlling voltage Vx equal v/2. The upper source sets its right node to v/2.",
      "Each path from the test port carries v/8. Thus i=v/4 and Rth=4 Ω. Maximum power requires Rᴸ=Rth."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2.4 Ω",
        "8/3 Ω",
        "4 Ω",
        "6 Ω"
      ]
    },
    "figure": "pyq-figures/g09-29.png",
    "figureAlt": "Original GATE 2009 Q29 diagram and choices"
  },
  {
    "id": "g09-30",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "networks",
    "number": 30,
    "ref": "GATE 2009 · Q30",
    "file": "EC2009.pdf",
    "page": 8,
    "prompt": "For L di/dt+Ri=V₀[1+Be^(−Rt/L)sin t]u(t), with i(0)=V₀/R, find the steady current.",
    "answer": "(A) V₀/R",
    "steps": [
      "The exponentially decaying sinusoidal forcing tends to zero for positive R,L.",
      "The stable homogeneous transient also decays.",
      "At steady state di/dt=0 and the surviving forcing is V₀, so i∞=V₀/R."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "V₀/R",
        "2V₀/R",
        "(V₀/R)(1+B)",
        "(2V₀/R)(1+B)"
      ]
    }
  },
  {
    "id": "g09-31",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "analog",
    "number": 31,
    "ref": "GATE 2009 · Q31",
    "file": "EC2009.pdf",
    "page": 8,
    "prompt": "For the ideal-diode circuit shown, find voltage V across the left 1 Ω resistor.",
    "answer": "(A) min(Vᵢ,1)",
    "steps": [
      "With the diode off, the 1 A current source draws 1 A through both resistors, so V=1 V and the middle node is Vᵢ−1.",
      "The upward diode from ground can remain off when that node is nonnegative, requiring Vᵢ≥1 V.",
      "For Vᵢ<1 V the diode conducts and clamps the middle node to zero, giving V=Vᵢ. Together V=min(Vᵢ,1)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "min(Vᵢ,1)",
        "max(Vᵢ,1)",
        "min(−Vᵢ,1)",
        "max(−Vᵢ,1)"
      ]
    },
    "figure": "pyq-figures/g09-31.png",
    "figureAlt": "Original GATE 2009 Q31 diagram and choices"
  },
  {
    "id": "g09-32",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "devices",
    "number": 32,
    "ref": "GATE 2009 · Q32",
    "file": "EC2009.pdf",
    "page": 8,
    "prompt": "In an n-channel MOSFET active region: S1 inversion-charge magnitude decreases from source to drain; S2 channel potential increases from source to drain. Assess the statements and causality.",
    "answer": "(D) Both true; S2 explains S1",
    "steps": [
      "Local inversion-charge magnitude is approximately Cox[VGS−VT−V(x)].",
      "Channel potential V(x) rises toward the drain, reducing the local gate-to-channel overdrive.",
      "Thus the inversion charge decreases because the channel potential rises; S2 explains S1."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Only S2 true",
        "Both false",
        "Both true, S2 does not explain S1",
        "Both true, S2 explains S1"
      ]
    }
  },
  {
    "id": "g09-33",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "analog",
    "number": 33,
    "ref": "GATE 2009 · Q33",
    "file": "EC2009.pdf",
    "page": 9,
    "prompt": "In the shown op-amp astable multivibrator, which output properties depend on R₂?",
    "answer": "(A) Only frequency",
    "steps": [
      "The op-amp output switches between its saturation levels; those determine output amplitude.",
      "The capacitor charges and discharges through the network containing R₁ and R₂. Changing R₂ changes the timing trajectory.",
      "Therefore R₂ affects oscillation frequency while the ideal saturated output amplitude remains fixed."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Only frequency",
        "Only amplitude",
        "Both amplitude and frequency",
        "Neither"
      ]
    },
    "figure": "pyq-figures/g09-33.png",
    "figureAlt": "Original GATE 2009 Q33 diagram and choices"
  },
  {
    "id": "g09-34",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "analog",
    "number": 34,
    "ref": "GATE 2009 · Q34",
    "file": "EC2009.pdf",
    "page": 9,
    "prompt": "The ideal op-amp drives the BJT base as shown, with VBE=0.6 V and β=150. Identify the feedback and approximate output V.",
    "answer": "(D) Negative feedback; V≈2 V",
    "steps": [
      "An increase in base drive raises collector current and lowers the collector voltage fed to the noninverting input. This opposes the initial output increase, so feedback is negative.",
      "The collector voltage is regulated to the 5 V reference, giving IC=(10−5)/5 kΩ=1 mA.",
      "IE=IC(151/150), so VE≈1.409 V and VB≈2.009 V. Neglecting the small base current gives the listed 2 V answer."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Positive; 10 V",
        "Positive; 0 V",
        "Negative; 5 V",
        "Negative; 2 V"
      ]
    },
    "figure": "pyq-figures/g09-34.png",
    "figureAlt": "Original GATE 2009 Q34 diagram and choices"
  },
  {
    "id": "g09-35",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "analog",
    "number": 35,
    "ref": "GATE 2009 · Q35",
    "file": "EC2009.pdf",
    "page": 9,
    "prompt": "For the shown BJT amplifier, β=150, hᵢₑ=3 kΩ and input A cos 20t+B sin 10⁶t. Approximate its output.",
    "answer": "(D) −150B sin 10⁶t",
    "steps": [
      "At 20 rad/s, the 100 nF coupling capacitors have reactance 500 kΩ, strongly suppressing the low-frequency input.",
      "At 10⁶ rad/s, coupling reactance is 10 Ω and the emitter bypass capacitor has reactance 0.1 Ω, so the amplifier has approximately its bypassed midband gain.",
      "The gain is −βRC/hᵢₑ=−150×3 kΩ/3 kΩ=−150. Thus the high-frequency term dominates: −150B sin 10⁶t."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−1500(A cos 20t+B sin 10⁶t)",
        "−150(A cos 20t+B sin 10⁶t)",
        "−1500B sin 10⁶t",
        "−150B sin 10⁶t"
      ]
    },
    "figure": "pyq-figures/g09-35.png",
    "figureAlt": "Original GATE 2009 Q35 diagram and choices"
  },
  {
    "id": "g09-36",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "digital",
    "number": 36,
    "ref": "GATE 2009 · Q36",
    "file": "EC2009.pdf",
    "page": 10,
    "prompt": "Set X=1 in [X+Z{Y̅+(Z̅+XY̅)}]{X̅+Z̅(X+Y)}=1. What follows?",
    "answer": "(D) Z=0",
    "steps": [
      "The first bracket is 1 because it contains X=1 in an OR expression.",
      "In the second bracket, X̅=0 and X+Y=1. It reduces to Z̅.",
      "The product equals one only if Z̅=1, hence Z=0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Y=Z",
        "Y=Z̅",
        "Z=1",
        "Z=0"
      ]
    }
  },
  {
    "id": "g09-37",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "digital",
    "number": 37,
    "ref": "GATE 2009 · Q37",
    "file": "EC2009.pdf",
    "page": 10,
    "prompt": "Using only 2:1 multiplexers and constants, find the minimum numbers needed separately for a two-input AND and XOR gate.",
    "answer": "(A) 1 and 2",
    "steps": [
      "AND is a single MUX with select A and data inputs 0,B.",
      "XOR is a MUX with select A and data inputs B,B̅. Produce B̅ using one extra MUX with select B and inputs 1,0.",
      "One MUX cannot produce XOR from uncomplemented input variables and constants alone, so the minimum pair is 1,2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1 and 2",
        "1 and 3",
        "1 and 1",
        "2 and 2"
      ]
    }
  },
  {
    "id": "g09-38",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "digital",
    "number": 38,
    "ref": "GATE 2009 · Q38",
    "file": "EC2009.pdf",
    "page": 10,
    "prompt": "For the shown NAND and NOR latches, inputs (P₁,P₂) change from (0,1) to (1,1). Find successive stable outputs (Q₁,Q₂).",
    "answer": "(C) NAND: (1,0) then (1,0); NOR: (1,0) then (0,0)",
    "steps": [
      "For the NAND latch, P₁=0 forces Q₁=1, and P₂=1 then gives Q₂=0.",
      "Changing both NAND inputs to 1 holds that stored state.",
      "For the NOR latch, P₂=1 forces Q₂=0 and P₁=0 gives Q₁=1. With both NOR inputs 1, both outputs are forced to zero."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "NAND 01→01; NOR 10→00",
        "NAND 10→10; NOR 10→10",
        "NAND 10→10; NOR 10→00",
        "NAND 10→11; NOR 01→01"
      ]
    },
    "figure": "pyq-figures/g09-38.png",
    "figureAlt": "Original GATE 2009 Q38 diagram and choices"
  },
  {
    "id": "g09-39",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "digital",
    "number": 39,
    "ref": "GATE 2009 · Q39",
    "file": "EC2009.pdf",
    "page": 10,
    "prompt": "Determine the repeating states (Q₁,Q₂) of the shown synchronous JK counter.",
    "answer": "(A) 11→10→00→11→…",
    "steps": [
      "The wiring gives J₁=K₁=Q̅₂, J₂=Q̅₁, K₂=1. Both flip-flops share the clock.",
      "Using Q⁺=JQ̅+K̅Q, obtain Q₁⁺=Q₁ XOR Q̅₂ and Q₂⁺=Q̅₁Q̅₂.",
      "The transitions are 00→11, 11→10 and 10→00. State 01 enters 00, so the repeating cycle is the listed option A."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "11,10,00,11,…",
        "01,10,11,00,…",
        "00,11,01,10,…",
        "01,10,00,01,…"
      ]
    },
    "figure": "pyq-figures/g09-39.png",
    "figureAlt": "Original GATE 2009 Q39 diagram and choices"
  },
  {
    "id": "g09-40",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "signals",
    "number": 40,
    "ref": "GATE 2009 · Q40",
    "file": "EC2009.pdf",
    "page": 11,
    "prompt": "An impulse response has h[2]=1,h[3]=−1 and is zero elsewhere. S1: the filter is low-pass; S2: it is FIR. Which holds?",
    "answer": "(A) Only S2",
    "steps": [
      "Only two impulse-response samples are nonzero, so the filter is FIR.",
      "H(e^jω)=e^(−j2ω)(1−e^(−jω)).",
      "The magnitude is 2|sin(ω/2)|, zero at DC and largest at π. Therefore it is not low-pass."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Only S2",
        "Both false",
        "Both true, S2 explains S1",
        "Both true, S2 does not explain S1"
      ]
    }
  },
  {
    "id": "g09-41",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "signals",
    "number": 41,
    "ref": "GATE 2009 · Q41",
    "file": "EC2009.pdf",
    "page": 11,
    "prompt": "For y(t)=∫₋∞∞x(t−τ)h(2τ)dτ with the plotted finite-duration odd h(t), identify system properties.",
    "answer": "(B) BIBO stable and LTI",
    "steps": [
      "This is convolution with the fixed kernel g(τ)=h(2τ), so it is linear and time invariant.",
      "The bounded, finite-duration kernel is absolutely integrable, ensuring BIBO stability.",
      "The kernel is nonzero for negative time, so it is noncausal. Its odd symmetry gives zero DC gain, excluding the listed low-pass description."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Causal and low-pass",
        "BIBO stable and LTI",
        "BIBO stable, causal, LTI",
        "Low-pass and LTI"
      ]
    },
    "figure": "pyq-figures/g09-41.png",
    "figureAlt": "Original GATE 2009 Q41 diagram and choices"
  },
  {
    "id": "g09-42",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "signals",
    "number": 42,
    "ref": "GATE 2009 · Q42",
    "file": "EC2009.pdf",
    "page": 11,
    "prompt": "Find the four-point DFT of [1,0,2,3].",
    "answer": "(D) [6,−1+3j,0,−1−3j]",
    "steps": [
      "X[0]=1+0+2+3=6.",
      "X[1]=1+0(−j)+2(−1)+3j=−1+3j; X[2]=1−0+2−3=0.",
      "For real input, X[3]=X[1]*=−1−3j."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "[0,−2+2j,2,−2−2j]",
        "[2,2+2j,6,2−2j]",
        "[6,1−3j,2,1+3j]",
        "[6,−1+3j,0,−1−3j]"
      ]
    }
  },
  {
    "id": "g09-43",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "control",
    "number": 43,
    "ref": "GATE 2009 · Q43",
    "file": "EC2009.pdf",
    "page": 11,
    "prompt": "For negative gain k in the shown root locus, determine the real break points and departure angle at the marked lower-right pole P.",
    "answer": "(B) ±√2 and 45°, using the plotted poles",
    "steps": [
      "The plot marks poles at 1±j and zeros at −1±j. Using these plotted locations gives k(s)=−(s²−2s+2)/(s²+2s+2).",
      "Differentiating k(s) gives stationary real points s²=2, so the break points are ±√2.",
      "Near P=1−j, the characteristic equation gives ds/dk=−2−2j. For a negative gain increment, the displacement is in direction 2+2j, or 45°. The printed algebraic G(s) reverses the plotted poles and zeros; see the source inconsistency note."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "±√2 and 0°",
        "±√2 and 45°",
        "±√3 and 0°",
        "±√3 and 45°"
      ]
    },
    "reviewNote": "The printed G(s)=(s²−2s+2)/(s²+2s+2) has poles at −1±j, while the figure marks the poles at +1±j. The listed answer B follows the figure and marked P. For the printed formula, the lower-left pole departure for negative k is 135°; no listed angle matches.",
    "figure": "pyq-figures/g09-43.png",
    "figureAlt": "Original GATE 2009 Q43 diagram and choices"
  },
  {
    "id": "g09-44",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "signals",
    "number": 44,
    "ref": "GATE 2009 · Q44",
    "file": "EC2009.pdf",
    "page": 12,
    "prompt": "An LTI system H(s)=(s²+1)/(s²+2s+1) is in sinusoidal steady state for input sin(t+1). Its output is sampled at angular rate ωs. Which statement holds?",
    "answer": "(A) The sampled output is zero for every sampling rate",
    "steps": [
      "The input angular frequency is 1 rad/s.",
      "At s=j, the numerator s²+1 vanishes while the denominator is 2j, so H(j)=0.",
      "The steady-state continuous output is identically zero. Sampling that output gives zero regardless of sampling frequency."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Zero for all rates",
        "Nonzero for all rates",
        "Nonzero above 2, zero below 2",
        "Zero above 2, nonzero below 2"
      ]
    }
  },
  {
    "id": "g09-45",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "control",
    "number": 45,
    "ref": "GATE 2009 · Q45",
    "file": "EC2009.pdf",
    "page": 12,
    "prompt": "Which listed second-order transfer function has an underdamped unit-step response with final value −2?",
    "answer": "(B) −3.82/(s²+1.91s+1.91)",
    "steps": [
      "A stable second-order denominator requires positive coefficients. This excludes C and D.",
      "Both A and B have DC gain −2, but underdamping additionally requires a²<4b for denominator s²+as+b.",
      "For A, 2.59²>4×1.12, so it is overdamped. For B, 1.91²<4×1.91, so B is underdamped."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−2.24/(s²+2.59s+1.12)",
        "−3.82/(s²+1.91s+1.91)",
        "−2.24/(s²−2.59s+1.12)",
        "−3.82/(s²−1.91s+1.91)"
      ]
    }
  },
  {
    "id": "g09-46",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "math",
    "number": 46,
    "ref": "GATE 2009 · Q46",
    "file": "EC2009.pdf",
    "page": 12,
    "prompt": "X takes 1,2,3,4,5 with probabilities 0.1,0.2,0.4,0.2,0.1. A student reports mean 3.5; a teacher reports variance 1.5. Assess both.",
    "answer": "(B) Both are wrong",
    "steps": [
      "The distribution is symmetric around 3, so E[X]=3.",
      "Variance is Σp(x)(x−3)²=0.1×4+0.2×1+0.4×0+0.2×1+0.1×4=1.2.",
      "Neither reported value matches the calculation."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Both right",
        "Both wrong",
        "Student wrong, teacher right",
        "Student right, teacher wrong"
      ]
    }
  },
  {
    "id": "g09-47",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "communication",
    "number": 47,
    "ref": "GATE 2009 · Q47",
    "file": "EC2009.pdf",
    "page": 12,
    "prompt": "For distinct message tones m(t)=(1/2)cos ω₁t−(1/2)sin ω₂t, conventional AM produces [1+m(t)]cos ω꜀t. Find power efficiency.",
    "answer": "(C) 20%",
    "steps": [
      "The mean-square message is (1/2)²/2+(1/2)²/2=1/4.",
      "With unit resistance, carrier power is 1/2 and total sideband power is E[m²]/2=1/8.",
      "Efficiency is (1/8)/(1/2+1/8)=1/5=20%."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "8.33%",
        "11.11%",
        "20%",
        "25%"
      ]
    }
  },
  {
    "id": "g09-48",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "communication",
    "number": 48,
    "ref": "GATE 2009 · Q48",
    "file": "EC2009.pdf",
    "page": 13,
    "prompt": "An AWGN channel of bandwidth B has SNR≫1 and capacity C₁. If SNR doubles, find approximate capacity C₂.",
    "answer": "(B) C₂≈C₁+B",
    "steps": [
      "Shannon capacity is C=B log₂(1+SNR).",
      "At high SNR, replace 1+SNR by SNR.",
      "Doubling SNR adds B log₂2=B bits/s, giving C₂≈C₁+B."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2C₁",
        "C₁+B",
        "C₁+2B",
        "C₁+0.3B"
      ]
    }
  },
  {
    "id": "g09-49",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "em",
    "number": 49,
    "ref": "GATE 2009 · Q49",
    "file": "EC2009.pdf",
    "page": 13,
    "prompt": "In air, B=B₀[x ŷ/(x²+y²)−y x̂/(x²+y²)]. Find current density away from the z-axis.",
    "answer": "(C) J=0 for r≠0",
    "steps": [
      "In cylindrical coordinates, the field is B=(B₀/r)φ̂.",
      "For r>0, the axial curl is (1/r)∂(rBφ)/∂r=(1/r)∂B₀/∂r=0; the other curl components vanish.",
      "Hence J=(∇×B)/μ₀=0 away from the axis. A singular line current on the axis supplies the nonzero circulation."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−B₀ẑ/[μ₀(x²+y²)]",
        "−2B₀ẑ/[μ₀(x²+y²)]",
        "0, r≠0",
        "B₀ẑ/[μ₀(x²+y²)]"
      ]
    }
  },
  {
    "id": "g09-50",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "em",
    "number": 50,
    "ref": "GATE 2009 · Q50",
    "file": "EC2009.pdf",
    "page": 13,
    "prompt": "A λ/4 line of Z₀=50 Ω feeds two parallel λ/4 branches, each of Z₀=100 Ω terminated by 50 Ω. Find input impedance.",
    "answer": "(D) 25 Ω",
    "steps": [
      "Each branch transforms its 50 Ω load into 100²/50=200 Ω.",
      "The two branch inputs in parallel give 100 Ω.",
      "The 50 Ω quarter-wave feed transforms that junction impedance into 50²/100=25 Ω."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "200 Ω",
        "100 Ω",
        "50 Ω",
        "25 Ω"
      ]
    },
    "figure": "pyq-figures/g09-50.png",
    "figureAlt": "Original GATE 2009 Q50 diagram and choices"
  },
  {
    "id": "g09-51",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "devices",
    "number": 51,
    "ref": "GATE 2009 · Q51",
    "file": "EC2009.pdf",
    "page": 14,
    "prompt": "A silicon p–n junction at room temperature has ND=10¹⁷ cm⁻³, xn=0.1 μm, xp=1 μm, ni=1.4×10¹⁰ cm⁻³, VT=0.026 V and εs=12×8.85×10⁻¹⁴ F/cm. Find its built-in potential from the doping data.",
    "answer": "(B) Approximately 0.76 V",
    "steps": [
      "Charge neutrality requires NA xp=ND xn, giving NA=10¹⁶ cm⁻³.",
      "The equilibrium built-in potential is Vbi=VT ln(NA ND/ni²).",
      "Substituting gives 0.026 ln[10³³/(1.4×10¹⁰)²]≈0.761 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.70 V",
        "0.76 V",
        "0.82 V",
        "Cannot estimate"
      ]
    },
    "reviewNote": "The supplied depletion widths and doping do not form a self-consistent zero-bias abrupt-junction dataset: integrating their depletion field would give about 8.3 V. The listed built-in-potential answer uses the equilibrium doping formula."
  },
  {
    "id": "g09-52",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "devices",
    "number": 52,
    "ref": "GATE 2009 · Q52",
    "file": "EC2009.pdf",
    "page": 14,
    "prompt": "A silicon p–n junction at room temperature has ND=10¹⁷ cm⁻³, xn=0.1 μm, xp=1 μm, ni=1.4×10¹⁰ cm⁻³, VT=0.026 V and εs=12×8.85×10⁻¹⁴ F/cm. Find the peak electric field using the stated depletion width.",
    "answer": "(B) About 0.15 MV/cm, directed from n to p",
    "steps": [
      "In the depletion approximation, |Emax|=qNDxn/εs.",
      "Convert xn=0.1 μm=10⁻⁵ cm. Then |Emax|=(1.6×10⁻¹⁹×10¹⁷×10⁻⁵)/(12×8.85×10⁻¹⁴)≈1.51×10⁵ V/cm.",
      "The field points from positively charged donor ions on the n-side toward negatively charged acceptor ions on the p-side."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.15 MV/cm, p→n",
        "0.15 MV/cm, n→p",
        "1.80 MV/cm, p→n",
        "1.80 MV/cm, n→p"
      ]
    }
  },
  {
    "id": "g09-53",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "control",
    "number": 53,
    "ref": "GATE 2009 · Q53",
    "file": "EC2009.pdf",
    "page": 14,
    "prompt": "The shown Nyquist plot belongs to stable G(s). Which listed property follows?",
    "answer": "(B) G(s) has a right-half-plane zero",
    "steps": [
      "The full Nyquist locus encircles the origin; its radius from the origin is not constant, so it is not all-pass.",
      "The argument principle applied to G(s) relates net origin encirclements to the difference between right-half-plane zeros and poles.",
      "G has no right-half-plane poles because it is stable; its nonzero origin encirclement therefore requires a right-half-plane zero. Negative real parts on the locus also exclude a passive driving-point impedance."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "All-pass",
        "Has a right-half-plane zero",
        "Passive-network impedance",
        "Marginally stable"
      ]
    },
    "figure": "pyq-figures/g09-53.png",
    "figureAlt": "Original GATE 2009 Q53 diagram and choices"
  },
  {
    "id": "g09-54",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "control",
    "number": 54,
    "ref": "GATE 2009 · Q54",
    "file": "EC2009.pdf",
    "page": 15,
    "prompt": "For the same Nyquist plot, the negative-real crossing is −0.5 and the unit-magnitude crossing is −j. Find gain and phase margins.",
    "answer": "(C) 6 dB and 90°",
    "steps": [
      "At phase −180°, the loop magnitude is 0.5. Gain margin is 1/0.5=2.",
      "In decibels, GM=20 log₁₀2≈6.02 dB.",
      "At the gain crossover −j, phase is −90°, so phase margin is 180°−90°=90°."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "6 dB,180°",
        "3 dB,180°",
        "6 dB,90°",
        "3 dB,90°"
      ]
    },
    "figure": "pyq-figures/g09-54.png",
    "figureAlt": "Original GATE 2009 Q54 diagram and choices"
  },
  {
    "id": "g09-55",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "communication",
    "number": 55,
    "ref": "GATE 2009 · Q55",
    "file": "EC2009.pdf",
    "page": 15,
    "prompt": "A signal amplitude is uniform on [−5,5] V. For uniform quantization and SQNR=43.5 dB, estimate the step size.",
    "answer": "(C) 0.0667 V",
    "steps": [
      "Signal power is 5²/3=25/3 V². Uniform quantization noise power is Δ²/12.",
      "Thus SQNR=100/Δ², and 10 log₁₀(100/Δ²)=43.5.",
      "Solving gives Δ=10/10^(43.5/20)≈0.0668 V, nearest 0.0667 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.0333 V",
        "0.05 V",
        "0.0667 V",
        "0.10 V"
      ]
    }
  },
  {
    "id": "g09-56",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "communication",
    "number": 56,
    "ref": "GATE 2009 · Q56",
    "file": "EC2009.pdf",
    "page": 15,
    "prompt": "A signal uniform on [−5,5] V uses quantization step 0.05 V for positive values and 0.1 V for negative values. Find approximate SQNR.",
    "answer": "(C) 42 dB",
    "steps": [
      "The signal power remains 25/3 V². Each half-range has probability 1/2.",
      "Mean quantization noise power is [(0.05²)/12+(0.1²)/12]/2=0.0125/24 V².",
      "The power ratio is (25/3)/(0.0125/24)=16000, or 10 log₁₀16000≈42.04 dB."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "46 dB",
        "43.8 dB",
        "42 dB",
        "40 dB"
      ]
    }
  },
  {
    "id": "g09-57",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "devices",
    "number": 57,
    "ref": "GATE 2009 · Q57",
    "file": "EC2009.pdf",
    "page": 15,
    "prompt": "In the shown CMOS pair, the pMOS source is at 5 V and its gate at 3 V; the nMOS source is grounded and its gate is VG. Both have |VT|=1 V and μCox(W/L)=1 mA/V². For VG just above 1 V, identify the operating regions.",
    "answer": "(D) nMOS saturation; pMOS triode",
    "steps": [
      "The pMOS overdrive is VSG−|VT|=5−3−1=1 V.",
      "Just as the nMOS turns on, its current is small and the output stays near 5 V. Therefore pMOS VSD=5−Vo is small, below 1 V, placing it in triode.",
      "The nMOS has large VDS≈5 V but tiny overdrive VG−1, so it is in saturation."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Both saturation",
        "Both triode",
        "nMOS triode, pMOS saturation",
        "nMOS saturation, pMOS triode"
      ]
    },
    "figure": "pyq-figures/g09-57.png",
    "figureAlt": "Original GATE 2009 Q57 diagram and choices"
  },
  {
    "id": "g09-58",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "devices",
    "number": 58,
    "ref": "GATE 2009 · Q58",
    "file": "EC2009.pdf",
    "page": 16,
    "prompt": "In the shown CMOS pair, the pMOS source is at 5 V and its gate at 3 V; the nMOS source is grounded and its gate is VG. Both have |VT|=1 V and μCox(W/L)=1 mA/V². Estimate Vo at VG=1.5 V.",
    "answer": "(D) 4+√3/2 V",
    "steps": [
      "The saturated nMOS current is (1/2)×1×(1.5−1)²=0.125 mA.",
      "Set x=VSD,p=5−Vo. The pMOS triode current is 1×[1×x−x²/2] mA, so x−x²/2=0.125.",
      "The physical root in 0≤x<1 is x=1−√3/2. Hence Vo=4+√3/2≈4.866 V; both assumed operating regions remain valid."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "4−1/√2 V",
        "4+1/√2 V",
        "4−√3/2 V",
        "4+√3/2 V"
      ]
    },
    "figure": "pyq-figures/g09-58.png",
    "figureAlt": "Original GATE 2009 Q58 diagram and choices"
  },
  {
    "id": "g09-59",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "digital",
    "number": 59,
    "ref": "GATE 2009 · Q59",
    "file": "EC2009.pdf",
    "page": 16,
    "prompt": "Buttons P₁,P₂ drive a seven-segment display: 00→0, 10→2, 01→5, 11→E. Segment labels are a top, b upper-right, c lower-right, d bottom, e lower-left, f upper-left, g middle. Which listed relations hold?",
    "answer": "(B) g=P₁+P₂ and d=c+e",
    "steps": [
      "The middle segment g is off only for 0, the 00 input. Thus g=P₁ OR P₂.",
      "The bottom segment d is on for all four displayed symbols.",
      "The lower-right segment c is on for 0 and 5; the lower-left e is on for 0,2,E. At least one of c,e is always on, giving d=c OR e."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "g=P̅₁+P₂; d=c+e",
        "g=P₁+P₂; d=c+e",
        "g=P̅₁+P₂; e=b+c",
        "g=P₁+P₂; e=b+c"
      ]
    },
    "figure": "pyq-figures/g09-59.png",
    "figureAlt": "Original GATE 2009 Q59 diagram and choices"
  },
  {
    "id": "g09-60",
    "paperId": "gate-2009",
    "exam": "gate",
    "topic": "digital",
    "number": 60,
    "ref": "GATE 2009 · Q60",
    "file": "EC2009.pdf",
    "page": 16,
    "prompt": "Buttons P₁,P₂ drive a seven-segment display: 00→0, 10→2, 01→5, 11→E. Segment labels are a top, b upper-right, c lower-right, d bottom, e lower-left, f upper-left, g middle. Find the minimum numbers of NOT and two-input OR gates for the complete driver.",
    "answer": "(D) 2 NOT and 3 OR",
    "steps": [
      "The top and bottom segments a=d=1 can be tied high. The right-side outputs are b=P̅₂ and c=P̅₁, requiring two inverters.",
      "The remaining functions are e=P₁+P̅₂, f=P̅₁+P₂ and g=P₁+P₂, requiring three OR gates.",
      "These three OR functions are distinct and differ from constants and the two complemented inputs; together the two NOT and three OR gates implement all seven outputs."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "3 NOT,4 OR",
        "2 NOT,4 OR",
        "1 NOT,3 OR",
        "2 NOT,3 OR"
      ]
    },
    "figure": "pyq-figures/g09-60.png",
    "figureAlt": "Original GATE 2009 Q60 diagram and choices"
  }
];
