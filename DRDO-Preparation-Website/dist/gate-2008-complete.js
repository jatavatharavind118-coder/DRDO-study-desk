export const gate2008Complete = [
  {
    "id": "g08-1",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 1,
    "ref": "GATE 2008 · Q1",
    "file": "EC2008.pdf",
    "page": 2,
    "prompt": "A 2×2 matrix P has all nonzero entries and one zero eigenvalue. What must its determinant satisfy?",
    "answer": "(C) p11p22−p12p21=0",
    "steps": [
      "The determinant equals the product of eigenvalues.",
      "One eigenvalue is zero, so their product vanishes.",
      "For a 2×2 matrix, detP=p11p22−p12p21=0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "DetP=1",
        "DetP=−1",
        "DetP=0",
        "p11p22+p12p21=0"
      ]
    }
  },
  {
    "id": "g08-2",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 2,
    "ref": "GATE 2008 · Q2",
    "file": "EC2008.pdf",
    "page": 2,
    "prompt": "How many solutions satisfy 4x+2y=7 and 2x+y=6?",
    "answer": "(B) No solution",
    "steps": [
      "Double the second equation to obtain 4x+2y=12.",
      "The first equation requires that same expression to equal 7.",
      "The inconsistent right sides give no solution."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Unique",
        "None",
        "Infinitely many",
        "Exactly two"
      ]
    }
  },
  {
    "id": "g08-3",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 3,
    "ref": "GATE 2008 · Q3",
    "file": "EC2008.pdf",
    "page": 2,
    "prompt": "How many complex solutions does sinz=10 have?",
    "answer": "(D) Infinitely many",
    "steps": [
      "No real solution exists because real sine lies between −1 and 1.",
      "For z=π/2+jy, sinz=cosh y, and cosh y=10 has solutions y=±arcosh10.",
      "Adding 2πk for any integer k gives infinitely many complex solutions."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "No real or complex solutions",
        "Exactly two complex solutions",
        "Unique",
        "Infinitely many complex solutions"
      ]
    }
  },
  {
    "id": "g08-4",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 4,
    "ref": "GATE 2008 · Q4",
    "file": "EC2008.pdf",
    "page": 2,
    "prompt": "For real x, find min(eˣ+e⁻ˣ).",
    "answer": "(A) 2",
    "steps": [
      "Both terms are positive and their product is one.",
      "AM–GM gives eˣ+e⁻ˣ≥2√1=2.",
      "Equality holds at x=0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2",
        "1",
        "0.5",
        "0"
      ]
    }
  },
  {
    "id": "g08-5",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 5,
    "ref": "GATE 2008 · Q5",
    "file": "EC2008.pdf",
    "page": 2,
    "prompt": "Which function has only odd powers in its Taylor expansion at zero?",
    "answer": "(A) sin(x³)",
    "steps": [
      "Sine has powers u,u³,u⁵,… .",
      "With u=x³, these become x³,x⁹,x¹⁵,…, all odd powers.",
      "sin(x²) and both listed cosine compositions contain only even powers."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "sin(x³)",
        "sin(x²)",
        "cos(x³)",
        "cos(x²)"
      ]
    }
  },
  {
    "id": "g08-6",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 6,
    "ref": "GATE 2008 · Q6",
    "file": "EC2008.pdf",
    "page": 2,
    "prompt": "Which listed function solves dx/dt+3x=0?",
    "answer": "(B) x(t)=2e^(−3t)",
    "steps": [
      "Separate variables to obtain dx/x=−3dt.",
      "Integration gives x=Ce^(−3t).",
      "C=2 yields the listed valid solution; substituting gives −6e^(−3t)+6e^(−3t)=0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "3e^(−t)",
        "2e^(−3t)",
        "−3t²/2",
        "3t²"
      ]
    }
  },
  {
    "id": "g08-7",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "networks",
    "number": 7,
    "ref": "GATE 2008 · Q7",
    "file": "EC2008.pdf",
    "page": 2,
    "prompt": "For the four-node, four-edge graph shown, find the number of spanning trees P and minimal cut-sets Q.",
    "answer": "(C) P=4, Q=6",
    "steps": [
      "The crossing diagonals have no connecting node, so the graph is a cycle of four edges.",
      "A spanning tree is obtained by deleting any one edge: P=4.",
      "Every pair of edges is a minimal disconnection set, giving Q=4 choose 2=6."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2,2",
        "2,6",
        "4,6",
        "4,10"
      ]
    },
    "figure": "pyq-figures/g08-7.png",
    "figureAlt": "Original GATE 2008 Q7 diagram and choices"
  },
  {
    "id": "g08-8",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "networks",
    "number": 8,
    "ref": "GATE 2008 · Q8",
    "file": "EC2008.pdf",
    "page": 3,
    "prompt": "An initially unenergized series R–L branch is switched across a Norton source Is in parallel with Rs. Find di/dt at 0+.",
    "answer": "(B) Rs Is/L",
    "steps": [
      "Inductor current is continuous, so i(0+)=0.",
      "The series resistor initially drops zero voltage; the open-circuit Norton voltage IsRs appears across L.",
      "Using vL=L di/dt gives di/dt(0+)=IsRs/L."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "Rs Is/L",
        "(R+Rs)Is/L",
        "Infinite"
      ]
    },
    "figure": "pyq-figures/g08-8.png",
    "figureAlt": "Original GATE 2008 Q8 diagram and choices"
  },
  {
    "id": "g08-9",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "signals",
    "number": 9,
    "ref": "GATE 2008 · Q9",
    "file": "EC2008.pdf",
    "page": 3,
    "prompt": "Which given input–output relation is causal?",
    "answer": "(C) y(t)=(t+4)x(t−1)",
    "steps": [
      "Causality permits dependence only on present and past input.",
      "Option C uses x(t−1), a past sample, even though its coefficient depends on present time.",
      "The other options require x(t+1), x(t+4) or x(t+5), which are future values."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "x(t−2)+x(t+4)",
        "(t−4)x(t+1)",
        "(t+4)x(t−1)",
        "(t+5)x(t+5)"
      ]
    }
  },
  {
    "id": "g08-10",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "signals",
    "number": 10,
    "ref": "GATE 2008 · Q10",
    "file": "EC2008.pdf",
    "page": 3,
    "prompt": "When is h(t)=e^(αt)u(t)+e^(βt)u(−t) BIBO stable?",
    "answer": "(D) α<0 and β>0",
    "steps": [
      "BIBO stability requires ∫|h(t)|dt finite.",
      "The positive-time exponential decays only when α<0.",
      "For t→−∞, the second exponential decays only when β>0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "α>0,β>0",
        "α<0,β<0",
        "α>0,β<0",
        "α<0,β>0"
      ]
    }
  },
  {
    "id": "g08-11",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "signals",
    "number": 11,
    "ref": "GATE 2008 · Q11",
    "file": "EC2008.pdf",
    "page": 3,
    "prompt": "The shown pole–zero diagram has a conjugate zero pair on the imaginary axis and negative-real poles. What filter does it represent?",
    "answer": "(D) Notch filter",
    "steps": [
      "At the imaginary-axis zero frequencies, H(jω) becomes zero.",
      "DC and sufficiently high frequencies need not vanish because the numerator and denominator have equal degree.",
      "A rejection dip at the finite zero frequency is a notch response."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Low-pass",
        "High-pass",
        "Band-pass",
        "Notch"
      ]
    },
    "figure": "pyq-figures/g08-11.png",
    "figureAlt": "Original GATE 2008 Q11 diagram and choices"
  },
  {
    "id": "g08-12",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "control",
    "number": 12,
    "ref": "GATE 2008 · Q12",
    "file": "EC2008.pdf",
    "page": 4,
    "prompt": "Three underdamped second-order systems have equal percentage step overshoot. Which pole-locus pattern fits?",
    "answer": "(C) Constant-angle rays from the origin",
    "steps": [
      "Percentage overshoot is 100exp[−πζ/√(1−ζ²)].",
      "Equal overshoot therefore means equal damping ratio ζ.",
      "Poles −ζωn±jωn√(1−ζ²) keep a fixed angle as ωn changes; diagram C shows those rays."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Vertical lines",
        "Horizontal lines",
        "Fixed-angle rays",
        "Circular arc"
      ]
    },
    "figure": "pyq-figures/g08-12.png",
    "figureAlt": "Original GATE 2008 Q12 diagram and choices"
  },
  {
    "id": "g08-13",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "devices",
    "number": 13,
    "ref": "GATE 2008 · Q13",
    "file": "EC2008.pdf",
    "page": 4,
    "prompt": "Which is not a p–n junction effect?",
    "answer": "(D) Channel-length modulation",
    "steps": [
      "A junction has depletion capacitance from its space-charge region.",
      "Forward carrier storage adds diffusion or charge-storage capacitance.",
      "Channel-length modulation instead describes a transistor channel, not an isolated p–n junction."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Junction capacitance",
        "Charge-storage capacitance",
        "Depletion capacitance",
        "Channel-length modulation"
      ]
    }
  },
  {
    "id": "g08-14",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "devices",
    "number": 14,
    "ref": "GATE 2008 · Q14",
    "file": "EC2008.pdf",
    "page": 4,
    "prompt": "Which statement correctly describes a p⁺ silicon substrate?",
    "answer": "(A) Heavily boron-doped silicon",
    "steps": [
      "Boron is a trivalent acceptor in silicon, producing p-type material.",
      "A superscript + denotes heavy doping.",
      "Thus p⁺ silicon is heavily boron-doped; arsenic produces n type."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Heavy boron doping",
        "Light boron doping",
        "Heavy arsenic doping",
        "Light arsenic doping"
      ]
    }
  },
  {
    "id": "g08-15",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "em",
    "number": 15,
    "ref": "GATE 2008 · Q15",
    "file": "EC2008.pdf",
    "page": 4,
    "prompt": "Find the E-plane half-power beamwidth of a Hertzian dipole.",
    "answer": "(C) 90°",
    "steps": [
      "Its radiation intensity varies as sin²θ.",
      "Half maximum occurs at θ=45° and135° around the broadside maximum90°.",
      "Their angular separation is90°."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "360°",
        "180°",
        "90°",
        "45°"
      ]
    }
  },
  {
    "id": "g08-16",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "em",
    "number": 16,
    "ref": "GATE 2008 · Q16",
    "file": "EC2008.pdf",
    "page": 4,
    "prompt": "For static fields in an inhomogeneous source-free medium, which listed Maxwell equations always hold?",
    "answer": "(D) ∇×E=0 and ∇·B=0",
    "steps": [
      "Faraday’s law gives ∇×E=−∂B/∂t=0 for static fields.",
      "Absence of magnetic monopoles gives ∇·B=0.",
      "Spatially varying ε and μ mean ∇·E=0 or ∇×B=0 cannot generally be substituted for the corresponding D and H equations."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "∇·E=0,∇×B=0",
        "∇·E=0,∇·B=0",
        "∇×E=0,∇×B=0",
        "∇×E=0,∇·B=0"
      ]
    }
  },
  {
    "id": "g08-17",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "analog",
    "number": 17,
    "ref": "GATE 2008 · Q17",
    "file": "EC2008.pdf",
    "page": 5,
    "prompt": "For the diode limiter shown with ±10 V input peaks, diode drop0.7 V and Zener breakdown6.8 V, find output limits.",
    "answer": "(C) +7.5 V and −0.7 V",
    "steps": [
      "On positive excursions, the series forward diode and reverse-biased Zener conduct at0.7+6.8=7.5 V.",
      "On negative excursions, the opposite shunt diode forward-conducts at−0.7 V.",
      "Thus the output is limited to the interval−0.7 to+7.5 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "6.1,−0.7 V",
        "0.7,−7.5 V",
        "7.5,−0.7 V",
        "7.5,−7.5 V"
      ]
    },
    "figure": "pyq-figures/g08-17.png",
    "figureAlt": "Original GATE 2008 Q17 diagram and choices"
  },
  {
    "id": "g08-18",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "devices",
    "number": 18,
    "ref": "GATE 2008 · Q18",
    "file": "EC2008.pdf",
    "page": 5,
    "prompt": "A silicon wafer already has100 nm oxide and is further oxidized in hot dry oxygen. What happens to the growth rate as oxide thickens?",
    "answer": "(C) It slows down",
    "steps": [
      "Oxidant must diffuse through the existing oxide to the silicon interface.",
      "A thicker oxide increases that transport distance.",
      "Consequently growth slows as thickness increases; temperature also affects the rate."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Independent of thickness and temperature",
        "Independent of thickness only",
        "Slows as oxide grows",
        "Zero after initial oxide"
      ]
    }
  },
  {
    "id": "g08-19",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "devices",
    "number": 19,
    "ref": "GATE 2008 · Q19",
    "file": "EC2008.pdf",
    "page": 5,
    "prompt": "If ID=K(VGS−VT)² in saturation, find gm.",
    "answer": "(B) 2K(VGS−VT)",
    "steps": [
      "Small-signal transconductance is ∂ID/∂VGS at fixed VDS.",
      "Differentiate the quadratic current law.",
      "The result is gm=2K(VGS−VT)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "K(VGS−VT)²/VDS",
        "2K(VGS−VT)",
        "ID/(VGS−VDS)",
        "K(VGS−VT)²/VGS"
      ]
    }
  },
  {
    "id": "g08-20",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "comm",
    "number": 20,
    "ref": "GATE 2008 · Q20",
    "file": "EC2008.pdf",
    "page": 5,
    "prompt": "Find the minimum carrier amplitude Ac for envelope detection of [Ac+2cosωmt]cosωct.",
    "answer": "(A) 2",
    "steps": [
      "The modulation envelope is Ac+2cosωmt.",
      "It must not change sign for distortion-free ideal envelope detection.",
      "Its minimum is Ac−2, so require Ac≥2 and the limiting minimum is2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2",
        "1",
        "0.5",
        "0"
      ]
    }
  },
  {
    "id": "g08-21",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "networks",
    "number": 21,
    "ref": "GATE 2008 · Q21",
    "file": "EC2008.pdf",
    "page": 5,
    "prompt": "Find the Thévenin impedance at P–Q in the shown 1 H,1 F,1 Ω circuit.",
    "answer": "(A) 1 Ω",
    "steps": [
      "Short the independent10 V source and open the independent1 A source.",
      "The two resulting branches are Z1=s+1 and Z2=1+1/s.",
      "Their parallel combination is [(s+1)²/s]/[(s+1)²/s]=1 Ω."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1",
        "1+s+1/s",
        "2+s+1/s",
        "(s²+s+1)/(s²+2s+1)"
      ]
    },
    "figure": "pyq-figures/g08-21.png",
    "figureAlt": "Original GATE 2008 Q21 diagram and choices"
  },
  {
    "id": "g08-22",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "networks",
    "number": 22,
    "ref": "GATE 2008 · Q22",
    "file": "EC2008.pdf",
    "page": 6,
    "prompt": "A parallel RLC circuit has Z(s)=0.2s/(s²+0.1s+2). Find L,R,C.",
    "answer": "(D) L=0.1 H,R=2 Ω,C=5 F",
    "steps": [
      "For parallel RLC, Z=(s/C)/[s²+s/(RC)+1/(LC)].",
      "Compare1/C=0.2 to obtain C=5 F.",
      "Then1/(RC)=0.1 gives R=2 Ω, and1/(LC)=2 gives L=0.1 H."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "5 H,0.5 Ω,0.1 F",
        "0.1 H,0.5 Ω,5 F",
        "5 H,2 Ω,0.1 F",
        "0.1 H,2 Ω,5 F"
      ]
    },
    "figure": "pyq-figures/g08-22.png",
    "figureAlt": "Original GATE 2008 Q22 diagram and choices"
  },
  {
    "id": "g08-23",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "networks",
    "number": 23,
    "ref": "GATE 2008 · Q23",
    "file": "EC2008.pdf",
    "page": 6,
    "prompt": "The switched current-source circuit alternately charges a1 F capacitor with+1 A and−1 A for intervals T, starting uncharged. Find Vc(t).",
    "answer": "(C) t u(t)+2Σ[n=1..∞](−1)ⁿ(t−nT)u(t−nT)",
    "steps": [
      "With P contacts selected, the capacitor current is+1 A, so its voltage initially rises with slope1 V/s.",
      "Every switch at nT reverses the slope, requiring a slope change2(−1)ⁿ.",
      "A ramp beginning at nT is (t−nT)u(t−nT); summing the initial ramp and all slope corrections gives option C."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Expression A in source",
        "Expression B in source",
        "Alternating-ramp sum C",
        "Expression D in source"
      ]
    },
    "figure": "pyq-figures/g08-23.png",
    "figureAlt": "Original GATE 2008 Q23 diagram and choices"
  },
  {
    "id": "g08-24",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 24,
    "ref": "GATE 2008 · Q24",
    "file": "EC2008.pdf",
    "page": 7,
    "prompt": "The PDF is triangular: fX(x)=1−|x| for|x|≤1 and0 otherwise. Select its CDF.",
    "answer": "(A) Increasing S-shaped CDF",
    "steps": [
      "Integrate the PDF from−∞ to x.",
      "For−1≤x≤0, F=(x+1)²/2; for0≤x≤1, F=1−(1−x)²/2.",
      "It is convex before zero, concave after zero, and reaches0 and1 at the endpoints: graph A."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "S curve A",
        "Straight line B",
        "Reverse-curvature C",
        "Discontinuous D"
      ]
    },
    "figure": "pyq-figures/g08-24.png",
    "figureAlt": "Original GATE 2008 Q24 diagram and choices"
  },
  {
    "id": "g08-25",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 25,
    "ref": "GATE 2008 · Q25",
    "file": "EC2008.pdf",
    "page": 7,
    "prompt": "Derive the Newton–Raphson iteration for x=e^(−x).",
    "answer": "(C) x[n+1]=(1+x[n])e^(−x[n])/[1+e^(−x[n])]",
    "steps": [
      "Set f(x)=x−e^(−x), so f′(x)=1+e^(−x).",
      "Newton’s step is xnew=x−(x−e^(−x))/(1+e^(−x)).",
      "Combining terms leaves (1+x)e^(−x)/(1+e^(−x))."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "e^(−xn)",
        "xn−e^(−xn)",
        "(1+xn)e^(−xn)/(1+e^(−xn))",
        "Expression D in original"
      ]
    }
  },
  {
    "id": "g08-26",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 26,
    "ref": "GATE 2008 · Q26",
    "file": "EC2008.pdf",
    "page": 7,
    "prompt": "Find the residue of1/[(z+2)²(z−2)²] at z=2.",
    "answer": "(A) −1/32",
    "steps": [
      "There is a double pole at z=2.",
      "Its residue is the derivative of(z+2)⁻² evaluated at2.",
      "That derivative is−2(z+2)⁻³, giving−2/64=−1/32."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−1/32",
        "−1/16",
        "1/16",
        "1/32"
      ]
    }
  },
  {
    "id": "g08-27",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 27,
    "ref": "GATE 2008 · Q27",
    "file": "EC2008.pdf",
    "page": 8,
    "prompt": "For P=[[0,1],[−2,−3]], find eᴾ.",
    "answer": "(D) [[2e⁻¹−e⁻²,e⁻¹−e⁻²],[−2e⁻¹+2e⁻²,−e⁻¹+2e⁻²]]",
    "steps": [
      "The characteristic polynomial is(λ+1)(λ+2).",
      "Spectral interpolation gives eᴾ=e⁻¹(P+2I)−e⁻²(P+I).",
      "Insert the matrix entries to obtain the stated result, matching D."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Figure (A)",
        "Figure (B)",
        "Figure (C)",
        "Figure (D)"
      ]
    },
    "figure": "pyq-figures/g08-27.png",
    "figureAlt": "Original GATE 2008 Q27 diagram and choices"
  },
  {
    "id": "g08-28",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 28,
    "ref": "GATE 2008 · Q28",
    "file": "EC2008.pdf",
    "page": 8,
    "prompt": "Find the coefficient of(x−π)² in the Taylor expansion of eˣ+sinx about π.",
    "answer": "(B) e^π/2",
    "steps": [
      "The quadratic Taylor coefficient is f″(π)/2!.",
      "Here f″(x)=eˣ−sinx.",
      "Since sinπ=0, the coefficient is e^π/2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "e^π",
        "e^π/2",
        "e^π+1",
        "e^π−1"
      ]
    }
  },
  {
    "id": "g08-29",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 29,
    "ref": "GATE 2008 · Q29",
    "file": "EC2008.pdf",
    "page": 8,
    "prompt": "Normalize fX(x)=M e^(−2|x|)+N e^(−3|x|), with M,N>0.",
    "answer": "(A) M+(2/3)N=1",
    "steps": [
      "For a>0, ∫−∞∞e^(−a|x|)dx=2/a.",
      "Thus the first term contributes M and the second contributes2N/3.",
      "A probability density integrates toone, giving M+2N/3=1."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "M+2N/3=1",
        "2M+N/3=1",
        "M+N=1",
        "M+N=3"
      ]
    }
  },
  {
    "id": "g08-30",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 30,
    "ref": "GATE 2008 · Q30",
    "file": "EC2008.pdf",
    "page": 8,
    "prompt": "Evaluate the stated integral for g(x,y)=4x³+10y⁴ along y=2x from(0,0) to(1,2), using the x-parameter integral intended by the options.",
    "answer": "(A) 33 for ∫g(x,2x)dx",
    "steps": [
      "On the segment y=2x, g=4x³+160x⁴.",
      "Integrate with respect to x from0 to1.",
      "The result is[ x⁴+32x⁵ ]₀¹=33."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "33",
        "35",
        "40",
        "56"
      ]
    },
    "reviewNote": "The printed statement does not specify a differential. A scalar arc-length integral ∫g ds would instead equal33√5; the listed33 corresponds to integrating with respect to x."
  },
  {
    "id": "g08-31",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "signals",
    "number": 31,
    "ref": "GATE 2008 · Q31",
    "file": "EC2008.pdf",
    "page": 8,
    "prompt": "A causal transfer has simple poles−2,−4, a simple zero−1, and unit steady step output. Find h(t).",
    "answer": "(C) [−4e^(−2t)+12e^(−4t)]u(t)",
    "steps": [
      "Write H(s)=K(s+1)/[(s+2)(s+4)].",
      "Unit DC gain requires H(0)=K/8=1, so K=8.",
      "Partial fractions give H=−4/(s+2)+12/(s+4); inverse Laplace gives option C."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(e⁻²ᵗ+e⁻⁴ᵗ)u(t)",
        "(−4e⁻²ᵗ+12e⁻⁴ᵗ−e⁻ᵗ)u(t)",
        "(−4e⁻²ᵗ+12e⁻⁴ᵗ)u(t)",
        "(−0.5e⁻²ᵗ+1.5e⁻⁴ᵗ)u(t)"
      ]
    }
  },
  {
    "id": "g08-32",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "signals",
    "number": 32,
    "ref": "GATE 2008 · Q32",
    "file": "EC2008.pdf",
    "page": 8,
    "prompt": "For x(t)=1 on[−1,1] and0 otherwise, select two nonzero angular-frequency zeros of X(jω).",
    "answer": "(A) π and2π",
    "steps": [
      "Transform directly: X(jω)=∫−1¹e^(−jωt)dt=2sinω/ω.",
      "Zeros occur at nonzero integer multiples ofπ.",
      "Atω=0 the limit is2, notzero; π and2π are a valid pair."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "π,2π",
        "π/2,3π/2",
        "0,π",
        "2π,5π/2"
      ]
    }
  },
  {
    "id": "g08-33",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "signals",
    "number": 33,
    "ref": "GATE 2008 · Q33",
    "file": "EC2008.pdf",
    "page": 8,
    "prompt": "h=[1,−1,2] at n=0,1,2 and x[0]=x[2]=1, all other samples0. Find output nonzero count and y[2].",
    "answer": "(D) Five samples and y[2]=3",
    "steps": [
      "Input isδ[n]+δ[n−2], so y[n]=h[n]+h[n−2].",
      "For n=0…4, the output is1,−1,3,−1,2.",
      "All five samples are nonzero, and y[2]=3."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "5,2",
        "6,2",
        "6,1",
        "5,3"
      ]
    }
  },
  {
    "id": "g08-34",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "math",
    "number": 34,
    "ref": "GATE 2008 · Q34",
    "file": "EC2008.pdf",
    "page": 9,
    "prompt": "Evaluate2∫P→Q(x dx+y dy), where P=(1,0),Q=(0,1), along the semicircle with PQ as diameter.",
    "answer": "(B) 0",
    "steps": [
      "The integrand2x dx+2y dy is the exact differential d(x²+y²).",
      "Its integral is independent of the chosen path.",
      "Both endpoints have x²+y²=1, so the result is1−1=0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−1",
        "0",
        "1",
        "Depends on semicircle orientation"
      ]
    }
  },
  {
    "id": "g08-35",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "signals",
    "number": 35,
    "ref": "GATE 2008 · Q35",
    "file": "EC2008.pdf",
    "page": 9,
    "prompt": "Match linear but time-varying, time-invariant nonlinear, and LTI properties to R1:t²x(t), R2:t|x(t)|, R3:|x(t)|, R4:x(t−5).",
    "answer": "(A) P1–R1,P2–R3,P3–R4",
    "steps": [
      "Multiplication by t² preserves superposition but changes under time shifts: R1 is linear time-varying.",
      "Absolute value is nonlinear but commutes with shifts: R3 is time-invariant nonlinear.",
      "A fixed delayR4 is both linear and time-invariant."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "R1,R3,R4",
        "R2,R3,R4",
        "R3,R1,R2",
        "R1,R2,R3"
      ]
    }
  },
  {
    "id": "g08-36",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "comm",
    "number": 36,
    "ref": "GATE 2008 · Q36",
    "file": "EC2008.pdf",
    "page": 9,
    "prompt": "A memoryless source emits n equiprobable symbols. How does its entropy depend on n?",
    "answer": "(A) H=log₂n",
    "steps": [
      "Normalization gives each probability p=1/n.",
      "Entropy is−Σp log₂p=−n(1/n)log₂(1/n).",
      "Therefore H=log₂n bits per symbol."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "As logn",
        "Decreases as log(1/n)",
        "As n",
        "As nlogn"
      ]
    }
  },
  {
    "id": "g08-37",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "signals",
    "number": 37,
    "ref": "GATE 2008 · Q37",
    "file": "EC2008.pdf",
    "page": 9,
    "prompt": "For real N-periodic x[n], define y[n]=(1/N)Σ[r=0..N−1]x[r]x[n+r]. Find its DFT under the unnormalized forward-DFT convention.",
    "answer": "Y[k]=|X[k]|²/N; the printed A omits1/N",
    "steps": [
      "Take the DFT in n and set m=n+r moduloN.",
      "The inner transform is e^(j2πkr/N)X[k].",
      "The remaining sum equals X[−k]=X[k]* for real x, giving Y[k]=X[k]X[k]*/N."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "|X[k]|²",
        "Expression B in source",
        "Expression C in source",
        "0"
      ]
    },
    "reviewNote": "With the usual unnormalized forward DFT, the printed options lack the required1/N in A. The normalization convention must be specified before scoring this item."
  },
  {
    "id": "g08-38",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "control",
    "number": 38,
    "ref": "GATE 2008 · Q38",
    "file": "EC2008.pdf",
    "page": 10,
    "prompt": "Match the four second-order transfer functions to the step-response sketches in the source.",
    "answer": "(D) P–3,Q–4,R–1,S–2",
    "steps": [
      "P=25/(s²+25) is undamped, so its step response oscillates indefinitely:3.",
      "Q=36/(s²+20s+36) has poles−2,−18 and is overdamped: the slower monotonic response4. R=36/(s+6)² is critically damped:1.",
      "S=49/(s²+7s+49) has ζ=0.5 and decaying oscillations:2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "P3,Q1,R4,S2",
        "P3,Q2,R4,S1",
        "P2,Q1,R4,S3",
        "P3,Q4,R1,S2"
      ]
    },
    "figure": "pyq-figures/g08-38.png",
    "figureAlt": "Original GATE 2008 Q38 diagram and choices"
  },
  {
    "id": "g08-39",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "control",
    "number": 39,
    "ref": "GATE 2008 · Q39",
    "file": "EC2008.pdf",
    "page": 10,
    "prompt": "For G(s)=(s+8)/(s²+αs−4) in negative unity feedback, which stability statement holds?",
    "answer": "(C) Stable for every positive α",
    "steps": [
      "Closed-loop denominator is s²+αs−4+s+8=s²+(α+1)s+4.",
      "A real second-order polynomial with positive leading coefficient is strictly stable when its other coefficients are positive.",
      "Here stability requires α>−1, so in particular every positiveα works."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Never stable",
        "Only some positiveα",
        "Every positiveα",
        "All realα"
      ]
    }
  },
  {
    "id": "g08-40",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "control",
    "number": 40,
    "ref": "GATE 2008 · Q40",
    "file": "EC2008.pdf",
    "page": 11,
    "prompt": "Choose state equations for the three-integrator signal-flow graph shown.",
    "answer": "(C) A=[[-α,β,0],[−β,−γ,0],[α,γ,0]], B=[[1,0],[0,1],[0,0]]",
    "steps": [
      "Let x1,x2,x3 be the upper, lower and final integrator outputs.",
      "Read the two integrator inputs: ẋ1=u1−αx1+βx2 and ẋ2=u2−βx1−γx2.",
      "The final summer gives ẋ3=αx1+γx2. Arranging coefficients yields optionC."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Figure (A)",
        "Figure (B)",
        "Figure (C)",
        "Figure (D)"
      ]
    },
    "figure": "pyq-figures/g08-40.png",
    "figureAlt": "Original GATE 2008 Q40 diagram and choices"
  },
  {
    "id": "g08-41",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "control",
    "number": 41,
    "ref": "GATE 2008 · Q41",
    "file": "EC2008.pdf",
    "page": 11,
    "prompt": "How many open right-half-plane poles does10/(s⁵+2s⁴+3s³+6s²+5s+3) have?",
    "answer": "(C) 2",
    "steps": [
      "The first two Routh rows are[1,3,5] and[2,6,3].",
      "The next row starts with0 and has second entry3.5; replace its first entry byε>0. Subsequent first entries are6−7/ε, approximately3.5, and3.",
      "Asε→0+, the first-column signs are+,+,+,−,+,+. Two changes give two right-half-plane poles."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ]
    }
  },
  {
    "id": "g08-42",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "control",
    "number": 42,
    "ref": "GATE 2008 · Q42",
    "file": "EC2008.pdf",
    "page": 11,
    "prompt": "An underdamped second-order response has DC magnitude5 and resonant peak10/√3 at5√2 rad/s. Find G(s).",
    "answer": "(A) 500/(s²+10s+100)",
    "steps": [
      "The resonant amplification relative to DC is2/√3=1/[2ζ√(1−ζ²)], givingζ=0.5.",
      "The resonance is ωr=ωn√(1−2ζ²)=ωn/√2; henceωn=10.",
      "A DC gain5 gives numerator5ωn²=500 and denominator s²+2ζωn s+ωn²=s²+10s+100."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "500/(s²+10s+100)",
        "375/(s²+5s+75)",
        "720/(s²+12s+144)",
        "1125/(s²+25s+225)"
      ]
    }
  },
  {
    "id": "g08-43",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "control",
    "number": 43,
    "ref": "GATE 2008 · Q43",
    "file": "EC2008.pdf",
    "page": 12,
    "prompt": "For the op-amp controller shown, τ2=R2C2>τ1=R1C1. Match series and parallel R2–C2 feedback impedances Q,R to PID, lead or lag.",
    "answer": "(B) Q–PID,R–lag",
    "steps": [
      "Input impedance is R1/(1+sτ1). With series feedback Q, H=−(R2+1/(sC2))(1+sτ1)/R1.",
      "Expanding Q produces constant, s and1/s terms: proportional, derivative and integral action, hence PID.",
      "Parallel feedback R gives H=−(R2/R1)(1+sτ1)/(1+sτ2). Sinceτ2>τ1, the pole precedes the zero and this is lag compensation."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Q–PID,R–lead",
        "Q–PID,R–lag",
        "Q–lead,R–lag",
        "Q–lag,R–lead"
      ]
    },
    "figure": "pyq-figures/g08-43.png",
    "figureAlt": "Original GATE 2008 Q43 diagram and choices"
  },
  {
    "id": "g08-44",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "devices",
    "number": 44,
    "ref": "GATE 2008 · Q44",
    "file": "EC2008.pdf",
    "page": 12,
    "prompt": "Identical NMOS devices form the shown unloaded current mirror, with M2 in saturation. Relate Ix to Ibias in the ideal mirror model.",
    "answer": "(B) Ix=Ibias",
    "steps": [
      "Negligible MOS gate currents make the diode-connected M1 drain current equalIbias.",
      "The two sources are grounded and their gates are joined, so both devices have the sameVGS.",
      "Identical saturated devices therefore carry equal currents, givingIx=Ibias."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Ibias+Is",
        "Ibias",
        "Ibias−Is",
        "Expression D in original"
      ]
    },
    "figure": "pyq-figures/g08-44.png",
    "figureAlt": "Original GATE 2008 Q44 diagram and choices"
  },
  {
    "id": "g08-45",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "devices",
    "number": 45,
    "ref": "GATE 2008 · Q45",
    "file": "EC2008.pdf",
    "page": 13,
    "prompt": "Which measured gm-versus-gate-voltage curve is expected for an NMOS operated with fixed drain voltage, including high-field mobility degradation?",
    "answer": "(A) gm rises, peaks, then decreases",
    "steps": [
      "At low gate voltage, increasing carrier density increases transconductance.",
      "At large vertical field, effective carrier mobility decreases, reducing the incremental current response.",
      "The measured curve can therefore peak and fall, as inA. The ideal constant-mobility triode model instead gives gm=μCox(W/L)VDS, independent of gate voltage."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Rises then falls",
        "Exponential rise",
        "Linear rise",
        "Monotonic decrease"
      ]
    },
    "reviewNote": "The qualifier measured is essential: none of the plotted choices is the flat gm predicted by the ideal constant-mobility linear-region model.",
    "figure": "pyq-figures/g08-45.png",
    "figureAlt": "Original GATE 2008 Q45 diagram and choices"
  },
  {
    "id": "g08-46",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "analog",
    "number": 46,
    "ref": "GATE 2008 · Q46",
    "file": "EC2008.pdf",
    "page": 13,
    "prompt": "An ideal op-amp has Vi=−1 V through100 kΩ and diode-plus4 kΩ feedback. Diode I0=1 μA, VT=25 mV. Find Vo.",
    "answer": "(B) Approximately0.1 V",
    "steps": [
      "Virtual ground makes the input-current magnitude1/100k=10 μA.",
      "The feedback diode carries10 μA, so VD=VT ln(1+I/I0)=0.025ln11≈0.05995 V.",
      "The4 kΩ resistor drops0.04 V. Output is their sum, approximately+0.100 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0 V",
        "0.1 V",
        "0.7 V",
        "1.1 V"
      ]
    },
    "figure": "pyq-figures/g08-46.png",
    "figureAlt": "Original GATE 2008 Q46 diagram and choices"
  },
  {
    "id": "g08-47",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "analog",
    "number": 47,
    "ref": "GATE 2008 · Q47",
    "file": "EC2008.pdf",
    "page": 14,
    "prompt": "Classify the ideal inverting op-amp filter with series R1–L input and parallel R2–C feedback.",
    "answer": "(B) Low-pass",
    "steps": [
      "The input impedance is R1+sL and feedback impedance is R2/(1+sR2C).",
      "Thus H=−R2/[(R1+sL)(1+sR2C)].",
      "Its DC gain is finite, while magnitude decreases towardzero at high frequency, giving low-pass behavior."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "High-pass",
        "Low-pass",
        "Band-pass",
        "Band-reject"
      ]
    },
    "figure": "pyq-figures/g08-47.png",
    "figureAlt": "Original GATE 2008 Q47 diagram and choices"
  },
  {
    "id": "g08-48",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "analog",
    "number": 48,
    "ref": "GATE 2008 · Q48",
    "file": "EC2008.pdf",
    "page": 14,
    "prompt": "For the saturated NMOS cascode pair shown, find ∂Iout/∂Vi at fixed Vout approximately.",
    "answer": "(C) Approximately gm of M1",
    "steps": [
      "M1 is the input common-source transistor; its gate increment creates drain-current increment gm1·vi.",
      "The upper common-gate M2 conveys that current to the output while limiting variation at M1’s drain.",
      "Ignoring small output-conductance corrections, overall transconductance is approximatelygm1."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Sum of both gm values",
        "Product of both gm values",
        "gm1",
        "gm2/go2"
      ]
    },
    "figure": "pyq-figures/g08-48.png",
    "figureAlt": "Original GATE 2008 Q48 diagram and choices"
  },
  {
    "id": "g08-49",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "digital",
    "number": 49,
    "ref": "GATE 2008 · Q49",
    "file": "EC2008.pdf",
    "page": 14,
    "prompt": "8085 executes LXI H,30A0H; DAD H; PCHL. What are PC and HL after PCHL?",
    "answer": "(C) PC=HL=6140H",
    "steps": [
      "LXI loads HL=30A0H.",
      "DAD H adds HL to itself, giving HL=6140H.",
      "PCHL loads PC from HL without changing HL, so both registers contain6140H."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "PC2715,HL30A0",
        "PC30A0,HL2715",
        "PC6140,HL6140",
        "PC6140,HL2715"
      ]
    }
  },
  {
    "id": "g08-50",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "analog",
    "number": 50,
    "ref": "GATE 2008 · Q50",
    "file": "EC2008.pdf",
    "page": 15,
    "prompt": "For the nonstandard9 V 555 astable circuit shown, find the capacitor-voltage limits.",
    "answer": "(A) 3 V to5 V",
    "steps": [
      "The trigger pin2 is directly on the capacitor, so its lower threshold is VCC/3=3 V.",
      "Pin6 is connected to the30 kΩ/10 kΩ divider between9 V andVc: V6=(9+3Vc)/4.",
      "The upper comparator trips at6 V, so(9+3Vc)/4=6 givesVc=5 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "3–5 V",
        "3–6 V",
        "3.6–6 V",
        "3.6–5 V"
      ]
    },
    "figure": "pyq-figures/g08-50.png",
    "figureAlt": "Original GATE 2008 Q50 diagram and choices"
  },
  {
    "id": "g08-51",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "devices",
    "number": 51,
    "ref": "GATE 2008 · Q51",
    "file": "EC2008.pdf",
    "page": 15,
    "prompt": "Silicon is boron-doped at4×10¹⁷ cm⁻³. For ni=1.5×10¹⁰ cm⁻³ and VT=25 mV, find the Fermi-level shift from intrinsic.",
    "answer": "(C) Downward by0.427 eV",
    "steps": [
      "Boron produces p-type material with p≈NA.",
      "The nondegenerate relation is Ei−EF=kT ln(NA/ni).",
      "In electron-volts, the shift is0.025ln(4×10¹⁷/1.5×10¹⁰)=0.4275 eV downward."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Down0.13 eV",
        "Up0.13 eV",
        "Down0.427 eV",
        "Up0.427 eV"
      ]
    }
  },
  {
    "id": "g08-52",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "devices",
    "number": 52,
    "ref": "GATE 2008 · Q52",
    "file": "EC2008.pdf",
    "page": 15,
    "prompt": "A JFET channel width W is doubled at fixed doping and other geometry. For VG=−2 V and initial pinch-off magnitude VP, find initial/modified gm under the gradual-channel model used in the options.",
    "answer": "(B) ½[1−√(2/VP)]/[1−√(1/(2VP))]",
    "steps": [
      "Pinch-off magnitude scales as W², so the modified value is4VP.",
      "The gradual-channel saturation model gives gm proportional to W[1−√(|VG|/VP)].",
      "Take the old/new ratio: W/(2W) times[1−√(2/VP)]/[1−√(2/(4VP))], yielding optionB."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Figure (A)",
        "Figure (B)",
        "Figure (C)",
        "Figure (D)"
      ]
    },
    "reviewNote": "VP is used as a positive pinch-off magnitude here; the square-root dependence corresponds to the gradual-channel model implicit in the printed options.",
    "figure": "pyq-figures/g08-52.png",
    "figureAlt": "Original GATE 2008 Q52 diagram and choices"
  },
  {
    "id": "g08-53",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "analog",
    "number": 53,
    "ref": "GATE 2008 · Q53",
    "file": "EC2008.pdf",
    "page": 16,
    "prompt": "The shown Schmitt trigger has three equal10 kΩ resistors from its positive input to+15 V,−15 V andVo. Find positive-input voltage limits for Vo=±15 V.",
    "answer": "(C) −5 V and+5 V",
    "steps": [
      "No ideal op-amp input current flows.",
      "Equal-resistance node averaging gives V+=(15−15+Vo)/3=Vo/3.",
      "AsVo switches between±15 V, V+ switches between±5 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "±12 V",
        "±7.5 V",
        "±5 V",
        "0 and5 V"
      ]
    },
    "figure": "pyq-figures/g08-53.png",
    "figureAlt": "Original GATE 2008 Q53 diagram and choices"
  },
  {
    "id": "g08-54",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "digital",
    "number": 54,
    "ref": "GATE 2008 · Q54",
    "file": "EC2008.pdf",
    "page": 16,
    "prompt": "Identify the logic implemented by the shown CMOS network.",
    "answer": "(C) P OR Q",
    "steps": [
      "The left complementary network has series pMOS and parallel nMOS paths, so its intermediate node is NOT(P OR Q).",
      "That node drives the final complementary transistor inverter.",
      "A second inversion gives OUT=P OR Q."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "P NOR Q",
        "P NAND Q",
        "P OR Q",
        "P AND Q"
      ]
    },
    "figure": "pyq-figures/g08-54.png",
    "figureAlt": "Original GATE 2008 Q54 diagram and choices"
  },
  {
    "id": "g08-55",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "devices",
    "number": 55,
    "ref": "GATE 2008 · Q55",
    "file": "EC2008.pdf",
    "page": 16,
    "prompt": "S1: Zener breakdown needs a very abrupt junction. S2: quantum tunneling needs a narrow barrier. Which relation is correct?",
    "answer": "(C) Both true; S2 explains S1",
    "steps": [
      "Zener breakdown is band-to-band quantum tunneling in a strong reverse field.",
      "Tunneling becomes appreciable when the barrier is sufficiently narrow.",
      "An abrupt heavily doped junction provides the narrow depletion barrier, soS2 explains the intendedS1."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "OnlyS2 true",
        "Both true,unrelated",
        "Both true,S2 explainsS1",
        "Both false"
      ]
    }
  },
  {
    "id": "g08-56",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "digital",
    "number": 56,
    "ref": "GATE 2008 · Q56",
    "file": "EC2008.pdf",
    "page": 16,
    "prompt": "Compute P−Q for8-bit two’s-complement P=11101101 andQ=11100110.",
    "answer": "(B) 00000111",
    "steps": [
      "Their unsigned values are237 and230.",
      "Subtract256 for signed interpretation: P=−19,Q=−26.",
      "P−Q=−19−(−26)=7, represented as00000111."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "100000111",
        "00000111",
        "11111001",
        "111111001"
      ]
    }
  },
  {
    "id": "g08-57",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "digital",
    "number": 57,
    "ref": "GATE 2008 · Q57",
    "file": "EC2008.pdf",
    "page": 17,
    "prompt": "Simplify the NAND/OR/AND network feeding an XOR withR in the figure.",
    "answer": "(D) (P XOR Q) XOR R",
    "steps": [
      "The upper branch is X=NOT(PQ) and the lower branch isY=P+Q.",
      "Their AND is(P+Q)NOT(PQ)=P XOR Q.",
      "The final XOR withR gives(P XOR Q) XOR R."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(P OR Q) XOR R",
        "(P AND Q) XOR R",
        "(P NOR Q) XOR R",
        "(P XOR Q) XOR R"
      ]
    },
    "figure": "pyq-figures/g08-57.png",
    "figureAlt": "Original GATE 2008 Q57 diagram and choices"
  },
  {
    "id": "g08-58",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "digital",
    "number": 58,
    "ref": "GATE 2008 · Q58",
    "file": "EC2008.pdf",
    "page": 17,
    "prompt": "A4:1 MUX uses selectsR,S and inputsI0=P+Q̅,I1=P,I2=PQ,I3=P. Simplify its output.",
    "answer": "(A) PQ+PQ̅S+Q̅R̅S̅",
    "steps": [
      "Expand by selection: Z=R̅S̅(P+Q̅)+R̅SP+RS̅PQ+RSP.",
      "The P-containing part becomes P(R̅+S+Q).",
      "Absorb the redundant PR̅ cases into the other terms to obtain PQ+PQ̅S+Q̅R̅S̅, matchingA."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Figure (A)",
        "Figure (B)",
        "Figure (C)",
        "Figure (D)"
      ]
    },
    "figure": "pyq-figures/g08-58.png",
    "figureAlt": "Original GATE 2008 Q58 diagram and choices"
  },
  {
    "id": "g08-59",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "digital",
    "number": 59,
    "ref": "GATE 2008 · Q59",
    "file": "EC2008.pdf",
    "page": 18,
    "prompt": "Two positive-edge JK flip-flops have J=K=1; Q0 clocks the second stage. Each delay isΔT. Which Q1 waveform fits initially low outputs?",
    "answer": "(B) Period4T, first rise at t1+2ΔT",
    "steps": [
      "The first flip-flop toggles at each positive clock edge, soQ0 has period2T.",
      "The second toggles only at positive edges ofQ0, givingQ1 period4T.",
      "The first transition passes through both flip-flops, adding2ΔT; this selects waveformB."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2T,delayΔT",
        "4T,delay2ΔT",
        "2T,delay2ΔT",
        "4T,delayΔT"
      ]
    },
    "figure": "pyq-figures/g08-59.png",
    "figureAlt": "Original GATE 2008 Q59 diagram and choices"
  },
  {
    "id": "g08-60",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "digital",
    "number": 60,
    "ref": "GATE 2008 · Q60",
    "file": "EC2008.pdf",
    "page": 19,
    "prompt": "In the NOR-gated latch shown, CLK falls1→0 whileD=0; D then rises0→1. What doesQ do?",
    "answer": "(C) Goes to1 at clock fall, then0 whenD rises",
    "steps": [
      "AtCLK=1 both input NOR outputs are0 and the cross-coupled latch holds.",
      "AtCLK=0, the upper input becomesNOT D and the lower becomesD. WithD=0, this drivesQ=1.",
      "WhileCLK remainslow the latch stays transparent withQ=NOT D, soD rising makesQ fall to0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Goes1 andstays1",
        "Goes0 andstays0",
        "Goes1 then0 onD rise",
        "Goes0 then1 onD rise"
      ]
    },
    "figure": "pyq-figures/g08-60.png",
    "figureAlt": "Original GATE 2008 Q60 diagram and choices"
  },
  {
    "id": "g08-61",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "em",
    "number": 61,
    "ref": "GATE 2008 · Q61",
    "file": "EC2008.pdf",
    "page": 19,
    "prompt": "Find the TE11 cutoff of an air-filled rectangular waveguide with a=4 cm,b=3 cm.",
    "answer": "(A) 6.25 GHz",
    "steps": [
      "For TEmn, fc=(c/2)√[(m/a)²+(n/b)²].",
      "For m=n=1, the inverse-length root is√(25²+33.333²)=41.6667 m⁻¹.",
      "Multiplying by1.5×10⁸ gives6.25×10⁹ Hz."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "6.25 GHz",
        "6 GHz",
        "5 GHz",
        "3.75 GHz"
      ]
    }
  },
  {
    "id": "g08-62",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "em",
    "number": 62,
    "ref": "GATE 2008 · Q62",
    "file": "EC2008.pdf",
    "page": 19,
    "prompt": "A75 Ω lossless shorted line is1 cm long at3 GHz. Classify its input impedance.",
    "answer": "(D) Inductive",
    "steps": [
      "Assuming wave speed3×10⁸ m/s, wavelength is10 cm.",
      "Electrical lengthβl=2π(1/10)=π/5, less thanπ/2.",
      "Zin=jZ0tanβl has positive imaginary part, so it is inductive."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Zero",
        "Resistive",
        "Capacitive",
        "Inductive"
      ]
    },
    "reviewNote": "The numerical electrical length assumes the air/free-space phase velocity implicit in this question; a different dielectric velocity would need to be supplied."
  },
  {
    "id": "g08-63",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "em",
    "number": 63,
    "ref": "GATE 2008 · Q63",
    "file": "EC2008.pdf",
    "page": 19,
    "prompt": "A plane wave from free space is normally incident on an infinitely thick nonmagnetic dielectric with εr=9. Find|Γ|.",
    "answer": "(C) 0.5",
    "steps": [
      "The dielectric wave impedance isη2=η0/√9=η0/3.",
      "Electric-field reflection isΓ=(η2−η0)/(η2+η0).",
      "Substitution givesΓ=−1/2, hence magnitude0.5."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "0.3",
        "0.5",
        "0.8"
      ]
    }
  },
  {
    "id": "g08-64",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "em",
    "number": 64,
    "ref": "GATE 2008 · Q64",
    "file": "EC2008.pdf",
    "page": 19,
    "prompt": "A step-index fiber is initially just below single-mode cutoff. Which radius/wavelength change destroys single-mode operation?",
    "answer": "(D) Double radius and halve wavelength",
    "steps": [
      "Normalized frequency isV=(2πa/λ)NA.",
      "Single-mode operation requiresV below about2.405; simultaneous scaling ofa andλ leavesV unchanged.",
      "Doublinga and halvingλ multipliesV byfour, crossing cutoff. Halvinga and doublingλ instead reducesV."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Halve both",
        "Double both",
        "Halve radius,double wavelength",
        "Double radius,halve wavelength"
      ]
    }
  },
  {
    "id": "g08-65",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "em",
    "number": 65,
    "ref": "GATE 2008 · Q65",
    "file": "EC2008.pdf",
    "page": 19,
    "prompt": "Find the gain of a1 m diameter parabolic dish at20 GHz with70% efficiency.",
    "answer": "(D) Approximately45 dB",
    "steps": [
      "Wavelength isλ=c/f=0.015 m.",
      "Dish gain isG=η(πD/λ)²=0.7(π/0.015)²≈30705.",
      "Convert power gain:10log10G≈44.87 dB, nearest45 dB."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "15 dB",
        "25 dB",
        "35 dB",
        "45 dB"
      ]
    }
  },
  {
    "id": "g08-66",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "comm",
    "number": 66,
    "ref": "GATE 2008 · Q66",
    "file": "EC2008.pdf",
    "page": 19,
    "prompt": "White noise has two-sided PSD K and passes through a unity-gain RC low-pass with cutoff fc. Find output noise power.",
    "answer": "(C) Kπfc",
    "steps": [
      "The squared frequency-response magnitude is1/[1+(f/fc)²].",
      "Output noise power is∫−∞∞K/[1+(f/fc)²]df.",
      "Setu=f/fc; the arctangent integral isπ, givingKπfc."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "K",
        "Kfc",
        "Kπfc",
        "Infinite"
      ]
    }
  },
  {
    "id": "g08-67",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "comm",
    "number": 67,
    "ref": "GATE 2008 · Q67",
    "file": "EC2008.pdf",
    "page": 20,
    "prompt": "A bit is repeated three times through independent BSC uses with crossoverp. Majority decoding is used. Find error probability.",
    "answer": "(A) p³+3p²(1−p)",
    "steps": [
      "Majority decoding fails if at leasttwo of the three received bits flip.",
      "Exactlytwo flips have probability3p²(1−p).",
      "Three flips contributep³; add these disjoint cases."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "p³+3p²(1−p)",
        "p³",
        "(1−p)³",
        "p³+p²(1−p)"
      ]
    }
  },
  {
    "id": "g08-68",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "comm",
    "number": 68,
    "ref": "GATE 2008 · Q68",
    "file": "EC2008.pdf",
    "page": 20,
    "prompt": "Four messages of bandwidthsW,W,2W,3W are efficiently multiplexed by TDM. Find the theoretical minimum transmission bandwidth.",
    "answer": "(D) 7W",
    "steps": [
      "At their Nyquist rates, sample rates sum to2W+2W+4W+6W=14W samples/s.",
      "With efficient unequal-rate allocation, those samples form one14W-symbol/s stream.",
      "Ideal zero-ISI real baseband transmission needs half that symbol rate, giving7W."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "W",
        "3W",
        "6W",
        "7W"
      ]
    }
  },
  {
    "id": "g08-69",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "comm",
    "number": 69,
    "ref": "GATE 2008 · Q69",
    "file": "EC2008.pdf",
    "page": 20,
    "prompt": "For10cos[2π10⁵t+5sin(2π1500t)+7.5sin(2π1000t)], find the peak-deviation modulation index relative to the highest modulating frequency.",
    "answer": "(B) 10",
    "steps": [
      "Differentiate phase and divide by2π to get instantaneous deviation7500cos(2π1500t)+7500cos(2π1000t) Hz.",
      "Its maximum magnitude is15000 Hz; both cosines equalone att=0.",
      "The highest modulating frequency is1500 Hz, soβ=15000/1500=10."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "12.5",
        "10",
        "7.5",
        "5"
      ]
    }
  },
  {
    "id": "g08-70",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "comm",
    "number": 70,
    "ref": "GATE 2008 · Q70",
    "file": "EC2008.pdf",
    "page": 20,
    "prompt": "Classify cosωct+0.5cosωmt sinωct by its envelope and instantaneous phase.",
    "answer": "(C) Both AM and FM",
    "steps": [
      "Write the signal asA(t)cos[ωct−φ(t)].",
      "ThenA=√[1+0.25cos²ωmt] andφ=arctan(0.5cosωmt), both varying in time.",
      "The nonconstant envelope gives amplitude variation and the nonconstant phase derivative gives frequency variation."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "FM only",
        "AM only",
        "Both",
        "Neither"
      ]
    }
  },
  {
    "id": "g08-71",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "comm",
    "number": 71,
    "ref": "GATE 2008 · Q71",
    "file": "EC2008.pdf",
    "page": 20,
    "prompt": "A4 kHz-bandlimited speech signal is sampled at Nyquist and encoded with8 bits/sample. For binary bipolar pulses, find ideal minimum bandwidth.",
    "answer": "(B) 32 kHz",
    "steps": [
      "Nyquist sampling requires8000 samples/s.",
      "The PCM bit rate is8000×8=64000 bit/s.",
      "Binary ideal Nyquist bandwidth isRb/2=32000 Hz."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "64 kHz",
        "32 kHz",
        "8 kHz",
        "4 kHz"
      ]
    }
  },
  {
    "id": "g08-72",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "comm",
    "number": 72,
    "ref": "GATE 2008 · Q72",
    "file": "EC2008.pdf",
    "page": 20,
    "prompt": "For the same8-bit uniform PCM, the input is uniform over−5 to+5 V. Find quantizer output SNR.",
    "answer": "(C) Approximately48 dB",
    "steps": [
      "Uniform input power isA²/3 withA=5 V.",
      "There areL=256 levels and stepΔ=2A/L; quantization-noise power isΔ²/12=A²/(3L²).",
      "Their ratio isL²; SNR=20log10256≈48.16 dB."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "16 dB",
        "32 dB",
        "48 dB",
        "64 dB"
      ]
    }
  },
  {
    "id": "g08-73",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "comm",
    "number": 73,
    "ref": "GATE 2008 · Q73",
    "file": "EC2008.pdf",
    "page": 20,
    "prompt": "How many levels reduce the previous256-level quantization-noise power by a factor of four?",
    "answer": "(B) 512",
    "steps": [
      "At fixed input span, noise power is proportional to step².",
      "Step is inversely proportional to level countL, so noise is proportional to1/L².",
      "To reduce noise fourfold, doubleL from256 to512."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1024",
        "512",
        "256",
        "64"
      ]
    }
  },
  {
    "id": "g08-74",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "networks",
    "number": 74,
    "ref": "GATE 2008 · Q74",
    "file": "EC2008.pdf",
    "page": 21,
    "prompt": "A zero-state series RLC hasR=L=C=1 and unit impulse input voltage. Find capacitor voltage for t>0.",
    "answer": "(D) (2/√3)e^(−t/2)sin(√3t/2)",
    "steps": [
      "Voltage division gives Vc(s)=1/(s²+s+1).",
      "Complete the square: s²+s+1=(s+1/2)²+3/4.",
      "Use the damped-sine inverse transform withωd=√3/2 to obtain(2/√3)e^(−t/2)sin(√3t/2)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Figure (A)",
        "Figure (B)",
        "Figure (C)",
        "Figure (D)"
      ]
    },
    "figure": "pyq-figures/g08-74.png",
    "figureAlt": "Original GATE 2008 Q74 diagram and choices"
  },
  {
    "id": "g08-75",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "networks",
    "number": 75,
    "ref": "GATE 2008 · Q75",
    "file": "EC2008.pdf",
    "page": 21,
    "prompt": "For the same impulse-drivenR=L=C=1 circuit, find the resistor voltage for t>0.",
    "answer": "(B) e^(−t/2)[cos(√3t/2)−sin(√3t/2)/√3]",
    "steps": [
      "Series current is i=C dVc/dt andR=C=1.",
      "DifferentiateVc=(2/√3)e^(−t/2)sin(√3t/2).",
      "The product rule gives the stated damped cosine-minus-sine expression forVR=iR."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Figure (A)",
        "Figure (B)",
        "Figure (C)",
        "Figure (D)"
      ]
    },
    "figure": "pyq-figures/g08-75.png",
    "figureAlt": "Original GATE 2008 Q75 diagram and choices"
  },
  {
    "id": "g08-76",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "networks",
    "number": 76,
    "ref": "GATE 2008 · Q76",
    "file": "EC2008.pdf",
    "page": 22,
    "prompt": "For the two-port measurement data shown, find the z matrix using inward port-current references.",
    "answer": "(C) [[1.5,4.5],[1.5,1.5]] Ω",
    "steps": [
      "WithI1=0 andI2=1 A, the quoted voltages givez12=4.5/1=4.5 Ω andz22=1.5/1=1.5 Ω.",
      "WithI2=0 andI1=4 A, obtainz11=6/4=1.5 Ω andz21=6/4=1.5 Ω.",
      "ArrangeV1=z11I1+z12I2 andV2=z21I1+z22I2 to get matrixC."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Figure (A)",
        "Figure (B)",
        "Figure (C)",
        "Figure (D)"
      ]
    },
    "reviewNote": "Use currents entering the network, as required by z-parameter definitions; the source quotes ammeter magnitudes and its meter-polarity drawing should not be substituted for that convention.",
    "figure": "pyq-figures/g08-76.png",
    "figureAlt": "Original GATE 2008 Q76 diagram and choices"
  },
  {
    "id": "g08-77",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "networks",
    "number": 77,
    "ref": "GATE 2008 · Q77",
    "file": "EC2008.pdf",
    "page": 22,
    "prompt": "Convert z=[[1.5,4.5],[1.5,1.5]] Ω to hybrid parameters.",
    "answer": "(A) h=[[-3,3],[−1,2/3]]",
    "steps": [
      "FromV2=z21I1+z22I2, solveI2=−(z21/z22)I1+V2/z22.",
      "Substitute intoV1: h11=z11−z12z21/z22=−3 Ω andh12=z12/z22=3.",
      "The second equation givesh21=−1 andh22=2/3 S, matchingA."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Figure (A)",
        "Figure (B)",
        "Figure (C)",
        "Figure (D)"
      ]
    },
    "figure": "pyq-figures/g08-77.png",
    "figureAlt": "Original GATE 2008 Q77 diagram and choices"
  },
  {
    "id": "g08-78",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "signals",
    "number": 78,
    "ref": "GATE 2008 · Q78",
    "file": "EC2008.pdf",
    "page": 22,
    "prompt": "A5 V step drives the shown high-pass RC withC=10 μF,R=200 kΩ. Sample resistor voltage at10 Hz fromt=0. Findx[n].",
    "answer": "(B) 5e^(−0.05n), n≥0",
    "steps": [
      "Time constant isRC=200000×10⁻⁵=2 s.",
      "The high-pass step response acrossR is5e^(−t/2).",
      "Witht=n/10 seconds, samples are5e^(−n/20)=5e^(−0.05n)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "5(1−e^(−0.05n))",
        "5e^(−0.05n)",
        "5(1−e^(−5n))",
        "5e^(−5n)"
      ]
    },
    "figure": "pyq-figures/g08-78.png",
    "figureAlt": "Original GATE 2008 Q78 diagram and choices"
  },
  {
    "id": "g08-79",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "signals",
    "number": 79,
    "ref": "GATE 2008 · Q79",
    "file": "EC2008.pdf",
    "page": 22,
    "prompt": "Find the z-transform and ROC ofx[n]=5e^(−0.05n)u[n].",
    "answer": "(C) X(z)=5z/(z−e⁻⁰·⁰⁵), |z|>e⁻⁰·⁰⁵",
    "steps": [
      "Transform the right-sided geometric sequence: X=5Σ(e^(−0.05)z⁻¹)ⁿ.",
      "The sum is5/[1−e^(−0.05)z⁻¹]=5z/(z−e^(−0.05)).",
      "Convergence requires|e^(−0.05)z⁻¹|<1, hence|z|>e^(−0.05)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Figure (A)",
        "Figure (B)",
        "Figure (C)",
        "Figure (D)"
      ]
    },
    "figure": "pyq-figures/g08-79.png",
    "figureAlt": "Original GATE 2008 Q79 diagram and choices"
  },
  {
    "id": "g08-80",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "analog",
    "number": 80,
    "ref": "GATE 2008 · Q80",
    "file": "EC2008.pdf",
    "page": 23,
    "prompt": "For the bias circuit shown withVCC=9 V,20 kΩ/10 kΩ divider,RE=2.3 kΩ,VBE=0.7 V andβ=∞, findIE.",
    "answer": "(A) 1 mA",
    "steps": [
      "Infiniteβ makes divider loading negligible.",
      "Base voltage is9×10/(20+10)=3 V, so emitter voltage is3−0.7=2.3 V.",
      "Emitter current is2.3/2300=1 mA."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1 mA",
        "2 mA",
        "5 mA",
        "10 mA"
      ]
    },
    "figure": "pyq-figures/g08-80.png",
    "figureAlt": "Original GATE 2008 Q80 diagram and choices"
  },
  {
    "id": "g08-81",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "analog",
    "number": 81,
    "ref": "GATE 2008 · Q81",
    "file": "EC2008.pdf",
    "page": 23,
    "prompt": "For the same amplifier with very large bypass/coupling capacitors andRC=RL=3 kΩ, find midband voltage gain.",
    "answer": "(D) −60",
    "steps": [
      "FromIE=1 mA, intrinsic emitter resistance isre=25 mV/1 mA=25 Ω.",
      "The large emitter bypass capacitor removesRE from the AC gain calculation. Collector AC load is3k||3k=1.5 kΩ.",
      "The common-emitter gain is approximately−1500/25=−60."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−180",
        "−120",
        "−90",
        "−60"
      ]
    }
  },
  {
    "id": "g08-82",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "digital",
    "number": 82,
    "ref": "GATE 2008 · Q82",
    "file": "EC2008.pdf",
    "page": 23,
    "prompt": "A cleared4-bit counter drives a DAC withVDAC=N/2 V. Its clock runs while6.2 V>VDAC. What two-digit display reading is stable?",
    "answer": "(D) 13",
    "steps": [
      "DAC increments are0.5 V per count.",
      "Atcount12, VDAC=6 V, so the comparator still enables another count.",
      "Atcount13, VDAC=6.5 V≥6.2 V and the clock is blocked. The decimal display therefore reads13."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "06",
        "07",
        "12",
        "13"
      ]
    },
    "figure": "pyq-figures/g08-82.png",
    "figureAlt": "Original GATE 2008 Q82 diagram and choices"
  },
  {
    "id": "g08-83",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "digital",
    "number": 83,
    "ref": "GATE 2008 · Q83",
    "file": "EC2008.pdf",
    "page": 23,
    "prompt": "For that counter-type ADC, find the final magnitude|VDAC−Vin| withVin=6.2 V.",
    "answer": "(B) 0.3 V",
    "steps": [
      "The stable count from the comparator condition is13.",
      "DAC voltage is13/2=6.5 V.",
      "Absolute error is|6.5−6.2|=0.3 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.2",
        "0.3",
        "0.5",
        "1.0"
      ]
    }
  },
  {
    "id": "g08-84",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "signals",
    "number": 84,
    "ref": "GATE 2008 · Q84",
    "file": "EC2008.pdf",
    "page": 24,
    "prompt": "Forh(t)=e^(−2t)u(t), findH(jω).",
    "answer": "(C) 1/(2+jω)",
    "steps": [
      "Apply the Fourier-transform integral over t≥0.",
      "H=∫₀∞e^(−2t)e^(−jωt)dt.",
      "Integrating the decaying exponential yields1/(2+jω)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1/(1+j2ω)",
        "sinω/ω",
        "1/(2+jω)",
        "jω/(2+jω)"
      ]
    }
  },
  {
    "id": "g08-85",
    "paperId": "gate-2008",
    "exam": "gate",
    "topic": "signals",
    "number": 85,
    "ref": "GATE 2008 · Q85",
    "file": "EC2008.pdf",
    "page": 24,
    "prompt": "For the same LTI system, find the output tox(t)=2cos2t for all time.",
    "answer": "(D) 2^(−1/2)cos(2t−π/4)",
    "steps": [
      "Atω=2, H(j2)=1/(2+j2), whose magnitude is1/(2√2) andphase−π/4.",
      "The input cosine amplitude2 is multiplied by1/(2√2), producing1/√2.",
      "The steady sinusoid is therefore2^(−1/2)cos(2t−π/4)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "2^(−1/4)cos(2t−π/8)",
        "2^(−1/2)cos(2t−π/8)",
        "2^(−1/2)cos(2t−π/4)"
      ]
    }
  }
];
