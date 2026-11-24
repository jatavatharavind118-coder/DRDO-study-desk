export const gate2011Complete = [
  {
    "id": "g11-1",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "em",
    "number": 1,
    "ref": "GATE 2011 · Q1",
    "file": "EC2011.pdf",
    "page": 2,
    "prompt": "Which statement about rectangular-guide modes is correct?",
    "answer": "(A) TM₁₀ does not exist",
    "steps": [
      "A rectangular-guide TM mode needs both transverse indices nonzero to satisfy the longitudinal electric-field boundary conditions.",
      "TM₁₀ and TM₀₁ therefore do not exist.",
      "TE₁₀ is allowed and is the dominant mode of a conventional rectangular waveguide."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "TM₁₀ does not exist",
        "TE₁₀ does not exist",
        "TM₁₀ and TE₁₀ both exist with equal cutoff",
        "TM₁₀ and TM₀₁ both exist with equal cutoff"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "A rectangular-guide TM mode needs both transverse indices nonzero to satisfy the longitudinal electric-field boundary conditions."
            },
            {
              "equation": "E_z∝sin(frac{mπx}{a})sin(frac{nπy}{b})"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "TM₁₀ and TM₀₁ therefore do not exist."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "TE₁₀ is allowed and is the dominant mode of a conventional rectangular waveguide."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-2",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "comm",
    "number": 2,
    "ref": "GATE 2011 · Q2",
    "file": "EC2011.pdf",
    "page": 2,
    "prompt": "Match power-efficient transmission P, bandwidth-efficient voice Q, simplest receiver R, and efficient transmission with significant DC S to I conventional AM, II FM, III VSB, IV SSB-SC.",
    "answer": "(B) P–II, Q–IV, R–I, S–III",
    "steps": [
      "FM permits efficient nonlinear power amplification because its transmitted envelope is constant. SSB-SC occupies only one sideband and suits bandwidth-efficient voice transmission.",
      "Conventional AM supports a simple envelope detector, giving R–I.",
      "VSB reduces bandwidth while easing filtering near a substantial low-frequency/DC component, giving S–III."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "PIV,QII,RI,SIII",
        "PII,QIV,RI,SIII",
        "PIII,QII,RI,SIV",
        "PII,QIV,RIII,SI"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "FM permits efficient nonlinear power amplification because its transmitted envelope is constant. SSB-SC occupies only one sideband and suits bandwidth-efficient voice transmission."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Conventional AM supports a simple envelope detector, giving R–I."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "VSB reduces bandwidth while easing filtering near a substantial low-frequency/DC component, giving S–III."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-3",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "control",
    "number": 3,
    "ref": "GATE 2011 · Q3",
    "file": "EC2011.pdf",
    "page": 2,
    "prompt": "An initially relaxed system satisfies 100y″−20y′+y=x(t). Describe its unit-step response.",
    "answer": "(A) Unbounded growing response",
    "steps": [
      "The characteristic denominator is 100s²−20s+1=(10s−1)².",
      "Its repeated pole is at s=+0.1, so the system is unstable.",
      "For a step, y(t)=1+(0.1t−1)e^(0.1t), which starts with zero slope and grows without bound, matching A."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Unbounded growth",
        "Smooth approach to a finite value",
        "First-order monotone approach",
        "Damped oscillation"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Find the poles",
          "blocks": [
            {
              "text": "The characteristic denominator is 100s²−20s+1=(10s−1)²."
            },
            {
              "equation": "100s^2−20s+1=(10s−1)^2"
            }
          ]
        },
        {
          "title": "Test stability",
          "blocks": [
            {
              "text": "Its repeated pole is at s=+0.1, so the system is unstable."
            }
          ]
        },
        {
          "title": "Describe the response",
          "blocks": [
            {
              "text": "For a step, y(t)=1+(0.1t−1)e^(0.1t), which starts with zero slope and grows without bound, matching A."
            },
            {
              "equation": "y(t)=1+(0.1t−1)e^{0.1t}"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-3.png",
    "figureAlt": "Original GATE 2011 Q3 diagram and choices"
  },
  {
    "id": "g11-4",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "control",
    "number": 4,
    "ref": "GATE 2011 · Q4",
    "file": "EC2011.pdf",
    "page": 3,
    "prompt": "Find the positive-frequency Nyquist locus of G(jω)=5+jω.",
    "answer": "(A) Vertical ray upward from 5 on the real axis",
    "steps": [
      "The real part is fixed at 5.",
      "The imaginary part is ω, increasing from zero for positive frequency.",
      "Thus the locus is a vertical ray at Re G=5 in the upper half-plane."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Vertical ray at real part 5",
        "Horizontal ray at imaginary part 5",
        "Lower semicircle",
        "Loop about origin"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The real part is fixed at 5."
            },
            {
              "equation": "Re(G)=5"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The imaginary part is ω, increasing from zero for positive frequency."
            },
            {
              "equation": "Im(G)=ω≥0"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Thus the locus is a vertical ray at Re G=5 in the upper half-plane."
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-4.png",
    "figureAlt": "Original GATE 2011 Q4 diagram and choices"
  },
  {
    "id": "g11-5",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "signals",
    "number": 5,
    "ref": "GATE 2011 · Q5",
    "file": "EC2011.pdf",
    "page": 3,
    "prompt": "Which Fourier-series component vanishes for an even function?",
    "answer": "(C) Sine terms",
    "steps": [
      "An even function multiplied by sin(nω₀t) is odd.",
      "The integral over a symmetric period is therefore zero.",
      "All sine coefficients vanish; DC and cosine harmonics may remain."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "DC",
        "Cosine terms",
        "Sine terms",
        "All odd harmonics"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "An even function multiplied by sin(nω₀t) is odd."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The integral over a symmetric period is therefore zero."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "All sine coefficients vanish; DC and cosine harmonics may remain."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-6",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "digital",
    "number": 6,
    "ref": "GATE 2011 · Q6",
    "file": "EC2011.pdf",
    "page": 3,
    "prompt": "Two same-clock D flip-flops are connected as shown: the second samples the complement of the first output, and Y ANDs their noncomplemented outputs. What data event makes Y=1?",
    "answer": "(A) A sampled transition from 0 to 1",
    "steps": [
      "Immediately after an edge, Q₁ contains the current data sample.",
      "The second flip-flop contains the complement of the previous first-stage value.",
      "Thus Y=d[n]·NOT(d[n−1]), which is one only for a sampled 0→1 transition."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0→1 transition",
        "1→0 transition",
        "Either transition",
        "No change"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Read the current sample",
          "blocks": [
            {
              "text": "Immediately after an edge, Q₁ contains the current data sample."
            }
          ]
        },
        {
          "title": "Read the previous sample",
          "blocks": [
            {
              "text": "The second flip-flop contains the complement of the previous first-stage value."
            }
          ]
        },
        {
          "title": "Identify the transition",
          "blocks": [
            {
              "text": "Thus Y=d[n]·NOT(d[n−1]), which is one only for a sampled 0→1 transition."
            },
            {
              "equation": "Y=d[n](1−d[n−1])"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-6.png",
    "figureAlt": "Original GATE 2011 Q6 diagram and choices"
  },
  {
    "id": "g11-7",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "digital",
    "number": 7,
    "ref": "GATE 2011 · Q7",
    "file": "EC2011.pdf",
    "page": 3,
    "prompt": "A 4:1 MUX has select inputs P, Q and data inputs [0,1,1,0] generated from ground and inverters. Find F.",
    "answer": "(D) P XOR Q",
    "steps": [
      "For select codes 00,01,10,11, the outputs are 0,1,1,0.",
      "The function is high exactly when the select bits differ.",
      "That is the XOR truth table."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "P AND Q",
        "P OR Q",
        "P XNOR Q",
        "P XOR Q"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "For select codes 00,01,10,11, the outputs are 0,1,1,0."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The function is high exactly when the select bits differ."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "That is the XOR truth table."
            },
            {
              "equation": "F=P⊕Q"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-7.png",
    "figureAlt": "Original GATE 2011 Q7 diagram and choices"
  },
  {
    "id": "g11-8",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "analog",
    "number": 8,
    "ref": "GATE 2011 · Q8",
    "file": "EC2011.pdf",
    "page": 4,
    "prompt": "An ideal op-amp current-to-voltage stage has feedback R₁ in parallel with L₁. What filter type is its transimpedance?",
    "answer": "(D) High-pass",
    "steps": [
      "The feedback impedance is Zf=R₁sL₁/(R₁+sL₁).",
      "At DC, the inductor shorts the feedback impedance to zero, so the transimpedance magnitude vanishes.",
      "At high frequency, the inductor opens and Zf approaches R₁. The response is high-pass."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Low-pass",
        "Band-pass",
        "Band-stop",
        "High-pass"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Write the feedback impedance",
          "blocks": [
            {
              "text": "The feedback impedance is Zf=R₁sL₁/(R₁+sL₁)."
            },
            {
              "equation": "Z_f(s)=frac{R_1sL_1}{R_1+sL_1}"
            }
          ]
        },
        {
          "title": "Check zero frequency",
          "blocks": [
            {
              "text": "At DC, the inductor shorts the feedback impedance to zero, so the transimpedance magnitude vanishes."
            }
          ]
        },
        {
          "title": "Check high frequency",
          "blocks": [
            {
              "text": "At high frequency, the inductor opens and Zf approaches R₁. The response is high-pass."
            },
            {
              "equation": "Z_f(0)=0;lim_{ω→∞}|Z_f(jω)|=R_1"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-8.png",
    "figureAlt": "Original GATE 2011 Q8 diagram and choices"
  },
  {
    "id": "g11-9",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "devices",
    "number": 9,
    "ref": "GATE 2011 · Q9",
    "file": "EC2011.pdf",
    "page": 4,
    "prompt": "A silicon junction carries constant forward current. Using the usual −2.5 mV/°C coefficient, estimate the voltage change for a 10°C rise.",
    "answer": "(D) Decreases by 25 mV",
    "steps": [
      "At a fixed current, increasing temperature substantially increases saturation current.",
      "The forward voltage therefore falls; the elementary silicon-junction estimate is about −2.5 mV/°C.",
      "A 10°C rise gives ΔV≈−25 mV."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Increases 60 mV",
        "Decreases 60 mV",
        "Increases 25 mV",
        "Decreases 25 mV"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "At a fixed current, increasing temperature substantially increases saturation current."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The forward voltage therefore falls; the elementary silicon-junction estimate is about −2.5 mV/°C."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "A 10°C rise gives ΔV≈−25 mV."
            },
            {
              "equation": "ΔV≈(−2.5)(10)=−25 mV"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-10",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "networks",
    "number": 10,
    "ref": "GATE 2011 · Q10",
    "file": "EC2011.pdf",
    "page": 4,
    "prompt": "Find Norton short-circuit current from P to Q for the shown AC network with source16∠0° A,25 Ω shunt, j30 Ω upper branch,15 Ω lower branch, and −j50 Ω across the port.",
    "answer": "(A) 6.4−j4.8 A",
    "steps": [
      "Shorting P to Q bypasses the −j50 Ω capacitor.",
      "The source current divides between25 Ω and the series port path15+j30 Ω. The port-path current is 16×25/[25+15+j30].",
      "This is 400/(40+j30)=6.4−j4.8 A."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "6.4−j4.8",
        "6.56−j7.87",
        "10+j0",
        "16+j0"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Shorting P to Q bypasses the −j50 Ω capacitor."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The source current divides between25 Ω and the series port path15+j30 Ω. The port-path current is 16×25/[25+15+j30]."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "This is 400/(40+j30)=6.4−j4.8 A."
            },
            {
              "equation": "I_N=frac{16×25}{40+j30}=6.4−j4.8 A"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-10.png",
    "figureAlt": "Original GATE 2011 Q10 diagram and choices"
  },
  {
    "id": "g11-11",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "networks",
    "number": 11,
    "ref": "GATE 2011 · Q11",
    "file": "EC2011.pdf",
    "page": 4,
    "prompt": "For the shown resistive network, find RL for maximum power transfer.",
    "answer": "(C) 15 Ω",
    "steps": [
      "Suppress the independent voltage sources by shorting them and the current source by opening it.",
      "Looking into the load port gives a series10 Ω followed by two10 Ω resistors in parallel.",
      "Thus Rth=10+5=15 Ω, and the maximizing resistive load is RL=15 Ω."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "5 Ω",
        "10 Ω",
        "15 Ω",
        "20 Ω"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Suppress the independent voltage sources by shorting them and the current source by opening it."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Looking into the load port gives a series10 Ω followed by two10 Ω resistors in parallel."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Thus Rth=10+5=15 Ω, and the maximizing resistive load is RL=15 Ω."
            },
            {
              "equation": "R_L=R_{th}=10+frac{10×10}{10+10}=15 Ω"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-11.png",
    "figureAlt": "Original GATE 2011 Q11 diagram and choices"
  },
  {
    "id": "g11-12",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "math",
    "number": 12,
    "ref": "GATE 2011 · Q12",
    "file": "EC2011.pdf",
    "page": 5,
    "prompt": "Evaluate ∮(−3z+4)/(z²+4z+5) dz around |z|=1.",
    "answer": "(A) 0",
    "steps": [
      "The denominator roots are z=−2±j.",
      "Each pole has magnitude √5>1, so neither lies inside the unit circle.",
      "The integrand is analytic on and inside the contour; Cauchy’s theorem gives zero."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1/10",
        "4/5",
        "1"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The denominator roots are z=−2±j."
            },
            {
              "equation": "z=−2±j"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Each pole has magnitude √5>1, so neither lies inside the unit circle."
            },
            {
              "equation": "|z|=sqrt{5}>1"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The integrand is analytic on and inside the contour; Cauchy’s theorem gives zero."
            },
            {
              "equation": "∮frac{−3z+4}{z^2+4z+5}dz=0"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-13",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "em",
    "number": 13,
    "ref": "GATE 2011 · Q13",
    "file": "EC2011.pdf",
    "page": 5,
    "prompt": "On a matched50 Ω line at 10 GHz, points2 mm apart have phase separationπ/4. Find phase velocity.",
    "answer": "(C) 1.6×10⁸ m/s",
    "steps": [
      "For a traveling wave, Δφ=βΔz.",
      "Thus β=(π/4)/0.002=125π rad/m.",
      "Velocity is ω/β=(2π×10¹⁰)/(125π)=1.6×10⁸ m/s."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.8×10⁸",
        "1.2×10⁸",
        "1.6×10⁸",
        "3×10⁸"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "For a traveling wave, Δφ=βΔz."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Thus β=(π/4)/0.002=125π rad/m."
            },
            {
              "equation": "β=frac{π/4}{0.002}=125π"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Velocity is ω/β=(2π×10¹⁰)/(125π)=1.6×10⁸ m/s."
            },
            {
              "equation": "v_p=frac{2π×10^{10}}{125π}=1.6×10^8"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-14",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "em",
    "number": 14,
    "ref": "GATE 2011 · Q14",
    "file": "EC2011.pdf",
    "page": 5,
    "prompt": "A point source radiates in an infinite homogeneous lossless medium. Which quantity stays constant as the radius of an enclosing sphere changes?",
    "answer": "(C) Total outward real Poynting flux",
    "steps": [
      "Real Poynting flux represents average power flow.",
      "The medium has no dissipation and no other sources between concentric enclosing spheres.",
      "By power conservation, ∯Re(P)·n̂ dS is constant, although local flux density generally varies with radius."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Local real power density",
        "Local real power density increases",
        "Total outward real flux",
        "Total real flux decreases"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Real Poynting flux represents average power flow."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The medium has no dissipation and no other sources between concentric enclosing spheres."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "By power conservation, ∯Re(P)·n̂ dS is constant, although local flux density generally varies with radius."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-15",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "comm",
    "number": 15,
    "ref": "GATE 2011 · Q15",
    "file": "EC2011.pdf",
    "page": 5,
    "prompt": "A signal is quantized into four independent equiprobable levels. Only two quantized samples are transmitted per second. Find information rate.",
    "answer": "(D) 4 bit/s",
    "steps": [
      "Each sample carries log₂4=2 bits of entropy.",
      "The transmitted sample rate is explicitly2 samples/s.",
      "Information rate is 2×2=4 bit/s; the original analog bandwidth and acquisition Nyquist rate do not change this specified transmitted rate."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1 bit/s",
        "2 bit/s",
        "3 bit/s",
        "4 bit/s"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Each sample carries log₂4=2 bits of entropy."
            },
            {
              "equation": "H=log_2(4)=2"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The transmitted sample rate is explicitly2 samples/s."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Information rate is 2×2=4 bit/s; the original analog bandwidth and acquisition Nyquist rate do not change this specified transmitted rate."
            },
            {
              "equation": "R=2×2=4 bit/s"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-16",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "control",
    "number": 16,
    "ref": "GATE 2011 · Q16",
    "file": "EC2011.pdf",
    "page": 5,
    "prompt": "Identify the open-loop transfer function from the shown root locus with poles0,−2,−3 and zero−1.",
    "answer": "(D) k(s+1)/[s(s+2)(s+3)]",
    "steps": [
      "Root-locus branches start at open-loop poles marked by crosses, here0,−2,−3.",
      "One branch ends at the finite zero marked by a circle at−1; the other two go to infinity.",
      "The numerator therefore contains(s+1) and denominator s(s+2)(s+3), selecting D."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "ks(s+1)/[(s+2)(s+3)]",
        "k(s+1)/[s(s+2)(s+3)²]",
        "k/[s(s−1)(s+2)(s+3)]",
        "k(s+1)/[s(s+2)(s+3)]"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Root-locus branches start at open-loop poles marked by crosses, here0,−2,−3."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "One branch ends at the finite zero marked by a circle at−1; the other two go to infinity."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The numerator therefore contains(s+1) and denominator s(s+2)(s+3), selecting D."
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-16.png",
    "figureAlt": "Original GATE 2011 Q16 diagram and choices"
  },
  {
    "id": "g11-17",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "signals",
    "number": 17,
    "ref": "GATE 2011 · Q17",
    "file": "EC2011.pdf",
    "page": 6,
    "prompt": "Classify the LTI system with h[n]=2ⁿu[n−2].",
    "answer": "(B) Causal but unstable",
    "steps": [
      "The impulse response is zero for every negative n, so it is causal.",
      "BIBO stability requires Σ|h[n]| to converge.",
      "Here Σ[n=2..∞]2ⁿ diverges, so the system is not stable."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Stable,causal",
        "Causal,unstable",
        "Stable,noncausal",
        "Unstable,noncausal"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Causality test",
          "blocks": [
            {
              "text": "The impulse response is zero for every negative n, so it is causal."
            },
            {
              "equation": "h[n]=0,n<0"
            }
          ]
        },
        {
          "title": "Stability condition",
          "blocks": [
            {
              "text": "BIBO stability requires Σ|h[n]| to converge."
            },
            {
              "equation": "∑_{n=−∞}^{∞}|h[n]|<∞"
            }
          ]
        },
        {
          "title": "Apply the condition",
          "blocks": [
            {
              "text": "Here Σ[n=2..∞]2ⁿ diverges, so the system is not stable."
            },
            {
              "equation": "∑_{n=2}^{∞}2^n=∞"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-18",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "signals",
    "number": 18,
    "ref": "GATE 2011 · Q18",
    "file": "EC2011.pdf",
    "page": 6,
    "prompt": "An initially relaxed LTI network has unit-step response (1−e^(−αt))u(t). Find its impulse response.",
    "answer": "(A) αe^(−αt)u(t)",
    "steps": [
      "The impulse response is the derivative of the step response.",
      "Differentiate1−e^(−αt) to obtainαe^(−αt).",
      "The step multiplier adds no impulse because the multiplying expression is zero at t=0. Thus h=αe^(−αt)u(t)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "αe^(−αt)",
        "α⁻¹e^(−αt)",
        "(1−α⁻¹)e^(−αt)",
        "(1−α)e^(−αt)"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The impulse response is the derivative of the step response."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Differentiate1−e^(−αt) to obtainαe^(−αt)."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The step multiplier adds no impulse because the multiplying expression is zero at t=0. Thus h=αe^(−αt)u(t)."
            },
            {
              "equation": "h(t)=frac{d}{dt}[(1−e^{−αt})u(t)]=αe^{−αt}u(t)"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-19",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "digital",
    "number": 19,
    "ref": "GATE 2011 · Q19",
    "file": "EC2011.pdf",
    "page": 6,
    "prompt": "For the NAND network shown, which input condition guarantees Y=1?",
    "answer": "(B) At least two inputs are1",
    "steps": [
      "The first three NAND gates generate complements of PQ, QR and RP.",
      "Following the remaining NAND inversions gives Y=PQ+QR+RP.",
      "This is the three-input majority function: it is 1 whenever two or all three inputs are1."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "At least two inputs0",
        "At least two inputs1",
        "An odd number of zeros",
        "An odd number of ones"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Read the first-stage gates",
          "blocks": [
            {
              "text": "The first three NAND gates generate complements of PQ, QR and RP."
            }
          ]
        },
        {
          "title": "Simplify the output",
          "blocks": [
            {
              "text": "Following the remaining NAND inversions gives Y=PQ+QR+RP."
            },
            {
              "equation": "Y=PQ+QR+RP"
            }
          ]
        },
        {
          "title": "Interpret the truth table",
          "blocks": [
            {
              "text": "This is the three-input majority function: it is 1 whenever two or all three inputs are1."
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-19.png",
    "figureAlt": "Original GATE 2011 Q19 diagram and choices"
  },
  {
    "id": "g11-20",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "analog",
    "number": 20,
    "ref": "GATE 2011 · Q20",
    "file": "EC2011.pdf",
    "page": 6,
    "prompt": "The common-emitter stage shown has a parallel collector tank L=10 μH, C=1 nF and resistive loading. Atω=10 Mrad/s, is gain magnitude maximum, minimum, unity orzero?",
    "answer": "(A) Maximum",
    "steps": [
      "The tank resonance isω₀=1/√LC=1/√(10⁻⁵×10⁻⁹)=10⁷ rad/s.",
      "At resonance the inductor and capacitor susceptances cancel, leaving the maximum parallel impedance set by the resistors.",
      "The common-emitter gain magnitude is proportional to collector-load impedance, so it reaches its maximum there."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Maximum",
        "Minimum",
        "Unity",
        "Zero"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The tank resonance isω₀=1/√LC=1/√(10⁻⁵×10⁻⁹)=10⁷ rad/s."
            },
            {
              "equation": "ω_0=frac{1}{sqrt{LC}}=10^7 rad/s"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "At resonance the inductor and capacitor susceptances cancel, leaving the maximum parallel impedance set by the resistors."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The common-emitter gain magnitude is proportional to collector-load impedance, so it reaches its maximum there."
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-20.png",
    "figureAlt": "Original GATE 2011 Q20 diagram and choices"
  },
  {
    "id": "g11-21",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "devices",
    "number": 21,
    "ref": "GATE 2011 · Q21",
    "file": "EC2011.pdf",
    "page": 7,
    "prompt": "What quantities determine semiconductor drift-current density, for fixed mobility?",
    "answer": "(C) Electric field and carrier concentration",
    "steps": [
      "Electron drift current is Jn=q n μn E, with an analogous hole term.",
      "Both the number of mobile carriers and the electric field appear in this relation.",
      "A concentration gradient drives diffusion current instead."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Electric field only",
        "Concentration gradient only",
        "Electric field and carrier concentration",
        "Electric field and concentration gradient"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Electron drift current is Jn=q n μn E, with an analogous hole term."
            },
            {
              "equation": "J_n=qnμ_nE"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Both the number of mobile carriers and the electric field appear in this relation."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "A concentration gradient drives diffusion current instead."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-22",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "devices",
    "number": 22,
    "ref": "GATE 2011 · Q22",
    "file": "EC2011.pdf",
    "page": 7,
    "prompt": "In what region is a Zener diode operated for voltage stabilization?",
    "answer": "(B) Reverse breakdown",
    "steps": [
      "The diode is reverse biased until its breakdown knee is reached.",
      "In the designed breakdown-current range, large current changes cause relatively small voltage changes.",
      "This behavior supports voltage regulation, with a series element limiting current."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Reverse bias below breakdown",
        "Reverse breakdown",
        "Forward bias",
        "Forward constant current"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The diode is reverse biased until its breakdown knee is reached."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "In the designed breakdown-current range, large current changes cause relatively small voltage changes."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "This behavior supports voltage regulation, with a series element limiting current."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-23",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "networks",
    "number": 23,
    "ref": "GATE 2011 · Q23",
    "file": "EC2011.pdf",
    "page": 7,
    "prompt": "The shown equal-R, equal-C lead-lag network has series R–C feeding parallel R∥C. For vi=Vp cos(t/RC), find steady vo.",
    "answer": "(A) (Vp/3)cos(t/RC)",
    "steps": [
      "Atω=1/RC, the series branch impedance is R−jR and the parallel load is R/(1+j)=R(1−j)/2.",
      "The series branch is twice the load impedance, so voltage division gives H=1/(2+1)=1/3.",
      "The ratio is real and positive, so output has one-third amplitude with no phase shift."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(Vp/3)cos(t/RC)",
        "(Vp/3)sin(t/RC)",
        "(Vp/2)cos(t/RC)",
        "(Vp/2)sin(t/RC)"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Atω=1/RC, the series branch impedance is R−jR and the parallel load is R/(1+j)=R(1−j)/2."
            },
            {
              "equation": "Z_s=R(1−j);Z_p=frac{R(1−j)}{2}"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The series branch is twice the load impedance, so voltage division gives H=1/(2+1)=1/3."
            },
            {
              "equation": "H=frac{Z_p}{Z_s+Z_p}=frac{1}{3}"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The ratio is real and positive, so output has one-third amplitude with no phase shift."
            },
            {
              "equation": "v_o(t)=frac{V_p}{3}cos(frac{t}{RC})"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-23.png",
    "figureAlt": "Original GATE 2011 Q23 diagram and choices"
  },
  {
    "id": "g11-24",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "math",
    "number": 24,
    "ref": "GATE 2011 · Q24",
    "file": "EC2011.pdf",
    "page": 7,
    "prompt": "For a closed surface S enclosing volume V, compute ∯S5r·n̂ dS, where r is the position vector.",
    "answer": "(D) 15V",
    "steps": [
      "Use the divergence theorem to convert the surface flux to∭V∇·(5r)dV.",
      "Since r=x x̂+y ŷ+z ẑ, its divergence is 3. Thus∇·(5r)=15.",
      "Integrating the constant15 over the volume gives15V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "3V",
        "5V",
        "10V",
        "15V"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Use the divergence theorem to convert the surface flux to∭V∇·(5r)dV."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Since r=x x̂+y ŷ+z ẑ, its divergence is 3. Thus∇·(5r)=15."
            },
            {
              "equation": "∇⋅(5r)=15"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Integrating the constant15 over the volume gives15V."
            },
            {
              "equation": "∯5r⋅n dS=∭15 dV=15V"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-25",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "math",
    "number": 25,
    "ref": "GATE 2011 · Q25",
    "file": "EC2011.pdf",
    "page": 7,
    "prompt": "Solve dy/dx=ky with y(0)=c.",
    "answer": "(C) y=ce^(kx)",
    "steps": [
      "Separate variables: dy/y=k dx.",
      "Integrating gives ln|y|=kx+C, or y=Ae^(kx).",
      "The initial condition makes A=c. The formula also includes the zero solution when c=0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "x=ce^(−ky)",
        "x=ke^(cy)",
        "y=ce^(kx)",
        "y=ce^(−kx)"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Separate variables: dy/y=k dx."
            },
            {
              "equation": "frac{dy}{y}=k dx"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Integrating gives ln|y|=kx+C, or y=Ae^(kx)."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The initial condition makes A=c. The formula also includes the zero solution when c=0."
            },
            {
              "equation": "y(x)=ce^{kx}"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-26",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "em",
    "number": 26,
    "ref": "GATE 2011 · Q26",
    "file": "EC2011.pdf",
    "page": 8,
    "prompt": "A 14 GHz TEM wave in μr=1 has phase exp[j(ωt−280πy)], magnetic amplitude3 A/m and electric amplitude Ep. Find εr, Ep.",
    "answer": "(D) εr=9, Ep=120π V/m",
    "steps": [
      "The phase constant isβ=280π rad/m. Phase speed isω/β=(2π×14×10⁹)/(280π)=10⁸ m/s.",
      "Since v=c/√εr for μr=1,√εr=3 and εr=9.",
      "The impedance isη=120π/3=40π Ω. Thus Ep=ηHp=40π×3=120π V/m."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "εr3,Ep120π",
        "εr3,Ep360π",
        "εr9,Ep360π",
        "εr9,Ep120π"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The phase constant isβ=280π rad/m. Phase speed isω/β=(2π×14×10⁹)/(280π)=10⁸ m/s."
            },
            {
              "equation": "v=frac{2π×14×10^9}{280π}=10^8"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Since v=c/√εr for μr=1,√εr=3 and εr=9."
            },
            {
              "equation": "ε_r=(frac{3×10^8}{10^8})^2=9"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The impedance isη=120π/3=40π Ω. Thus Ep=ηHp=40π×3=120π V/m."
            },
            {
              "equation": "E_p=3×frac{120π}{3}=120π"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-27",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "comm",
    "number": 27,
    "ref": "GATE 2011 · Q27",
    "file": "EC2011.pdf",
    "page": 8,
    "prompt": "For an AM carrier at 1 MHz and message tones1 kHz and 2 kHz, which listed envelope-detector RC range is appropriate?",
    "answer": "(B) 1 μs≪RC<0.5 ms",
    "steps": [
      "The capacitor should smooth carrier cycles, so RC must greatly exceed1/fc=1 μs.",
      "It must also follow the highest message frequency,2 kHz, whose period is 0.5 ms.",
      "The listed range1 μs≪RC<0.5 ms expresses these competing requirements. More precise distortion limits can make the upper bound stricter."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.5 ms<RC<1 ms",
        "1 μs≪RC<0.5 ms",
        "RC≪1 μs",
        "RC≫0.5 ms"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The capacitor should smooth carrier cycles, so RC must greatly exceed1/fc=1 μs."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "It must also follow the highest message frequency,2 kHz, whose period is 0.5 ms."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The listed range1 μs≪RC<0.5 ms expresses these competing requirements. More precise distortion limits can make the upper bound stricter."
            },
            {
              "equation": "1 μs≪RC<0.5 ms"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-28",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "control",
    "number": 28,
    "ref": "GATE 2011 · Q28",
    "file": "EC2011.pdf",
    "page": 8,
    "prompt": "A single input drives parallel transfer functions1/(s+2) and 2/(s+2), giving outputs y₁, y₂. Choose a minimal state model.",
    "answer": "(B) ẋ=−2x+u;[y₁, y₂]ᵀ=[1,2]ᵀx",
    "steps": [
      "Both outputs share the same first-order dynamic factor.",
      "Choose the common filtered signal x with ẋ=−2x+u.",
      "Then y₁=x and y₂=2x, so only one state is needed; the output matrix must be a two-row column."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "ẋ=2x+u;row output matrix",
        "ẋ=−2x+u;column output matrix[1,2]ᵀ",
        "Two states with mismatched output dimensions",
        "Positive-pole two-state model"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Both outputs share the same first-order dynamic factor."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Choose the common filtered signal x with ẋ=−2x+u."
            },
            {
              "equation": "ẋ=−2x+u"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Then y₁=x and y₂=2x, so only one state is needed; the output matrix must be a two-row column."
            },
            {
              "equation": "y_1=x;y_2=2x"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-29",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "signals",
    "number": 29,
    "ref": "GATE 2011 · Q29",
    "file": "EC2011.pdf",
    "page": 8,
    "prompt": "H₁(z)=(1−0.4z⁻¹)/(1−0.6z⁻¹). Find H₂ so cascading gives y[n]=x[n−1].",
    "answer": "(B) z⁻¹(1−0.6z⁻¹)/(1−0.4z⁻¹)",
    "steps": [
      "A one-sample delay has transfer z⁻¹.",
      "The cascade transfer is H₁H₂, so set H₁H₂=z⁻¹.",
      "Divide by H₁ to get H₂=z⁻¹(1−0.6z⁻¹)/(1−0.4z⁻¹)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(1−0.6z⁻¹)/[z⁻¹(1−0.4z⁻¹)]",
        "z⁻¹(1−0.6z⁻¹)/(1−0.4z⁻¹)",
        "z⁻¹(1−0.4z⁻¹)/(1−0.6z⁻¹)",
        "(1−0.4z⁻¹)/[z⁻¹(1−0.6z⁻¹)]"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "A one-sample delay has transfer z⁻¹."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The cascade transfer is H₁H₂, so set H₁H₂=z⁻¹."
            },
            {
              "equation": "H_1(z)H_2(z)=z^{−1}"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Divide by H₁ to get H₂=z⁻¹(1−0.6z⁻¹)/(1−0.4z⁻¹)."
            },
            {
              "equation": "H_2(z)=frac{z^{−1}(1−0.6z^{−1})}{1−0.4z^{−1}}"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-30",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "digital",
    "number": 30,
    "ref": "GATE 2011 · Q30",
    "file": "EC2011.pdf",
    "page": 9,
    "prompt": "8085 executes MVI A,07H; RLC; MOV B, A; RLC; RLC; ADD B; RRC. Find final A.",
    "answer": "(C) 23H",
    "steps": [
      "The first RLC turns07H into 0EH, which is copied into B.",
      "Two further RLC operations give1CH then38H. ADD B produces38H+0EH=46H.",
      "RRC rotates46H right, placing its zero least-significant bit into bit7. The result is 23H."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "8CH",
        "64H",
        "23H",
        "15H"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The first RLC turns07H into 0EH, which is copied into B."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Two further RLC operations give1CH then38H. ADD B produces38H+0EH=46H."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "RRC rotates46H right, placing its zero least-significant bit into bit7. The result is 23H."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-31",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "signals",
    "number": 31,
    "ref": "GATE 2011 · Q31",
    "file": "EC2011.pdf",
    "page": 9,
    "prompt": "The first six bins of an8-point DFT of a real sequence are5,1−j3,0,3−j4,0,3+j4. Find bins6 and 7.",
    "answer": "(B) 0,1+j3",
    "steps": [
      "A real input gives conjugate symmetry X[N−k]=X[k]*.",
      "Thus X[6]=X[2]*=0.",
      "Also X[7]=X[1]*=1+j3."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0,1−j3",
        "0,1+j3",
        "1+j3,5",
        "1−j3,5"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "A real input gives conjugate symmetry X[N−k]=X[k]*."
            },
            {
              "equation": "X[8−k]=X[k]^∗"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Thus X[6]=X[2]*=0."
            },
            {
              "equation": "X[6]=0"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Also X[7]=X[1]*=1+j3."
            },
            {
              "equation": "X[7]=1+j3"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-32",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "analog",
    "number": 32,
    "ref": "GATE 2011 · Q32",
    "file": "EC2011.pdf",
    "page": 9,
    "prompt": "In the shown BJT circuit,β=∞, VBEon=0.7 V, VCEsat=0.7 V. The collector capacitor is 5 μF and its switch opens at 0. When does Q₁ leave active operation?",
    "answer": "(C) 50 ms",
    "steps": [
      "The base is−5 V, so the active-region emitter voltage is−5.7 V. Its4.3 kΩ resistor to−10 V sets IE=IC=(10−5.7)/4.3k=1 mA.",
      "The collector source provides only 0.5 mA, so the capacitor supplies0.5 mA and its voltage falls at 0.5 mA/5 μF=100 V/s from its initial0 V.",
      "At saturation boundary VC=VE+0.7=−5 V. A 5 V fall at 100 V/s takes0.05 s=50 ms."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10 ms",
        "25 ms",
        "50 ms",
        "100 ms"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Find the transistor current",
          "blocks": [
            {
              "text": "The base is−5 V, so the active-region emitter voltage is−5.7 V. Its4.3 kΩ resistor to−10 V sets IE=IC=(10−5.7)/4.3k=1 mA."
            },
            {
              "equation": "I_C=frac{−5.7−(−10)}{4300}=1 mA"
            }
          ]
        },
        {
          "title": "Find the capacitor slope",
          "blocks": [
            {
              "text": "The collector source provides only 0.5 mA, so the capacitor supplies0.5 mA and its voltage falls at 0.5 mA/5 μF=100 V/s from its initial0 V."
            },
            {
              "equation": "frac{dV_C}{dt}=frac{0.5−1}{5}×10^3=−100 V/s"
            }
          ]
        },
        {
          "title": "Calculate the switching time",
          "blocks": [
            {
              "text": "At saturation boundary VC=VE+0.7=−5 V. A 5 V fall at 100 V/s takes0.05 s=50 ms."
            },
            {
              "equation": "t=frac{5}{100}=0.05 s=50 ms"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-32.png",
    "figureAlt": "Original GATE 2011 Q32 diagram and choices"
  },
  {
    "id": "g11-33",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "networks",
    "number": 33,
    "ref": "GATE 2011 · Q33",
    "file": "EC2011.pdf",
    "page": 9,
    "prompt": "A two-port has Y=[[0.1,−0.01],[0.01,0.1]] S and a 100 Ω output load. Find V₂/V₁.",
    "answer": "(D) −1/11",
    "steps": [
      "The second port equation is I₂=0.01V₁+0.1V₂, with I₂ defined into the network.",
      "The load draws current out of the network, so I₂=−V₂/100=−0.01V₂.",
      "Therefore0.01V₁+0.11V₂=0 and V₂/V₁=−1/11. The input source resistance does not alter this port-voltage ratio."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1/90",
        "−1/90",
        "−1/99",
        "−1/11"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The second port equation is I₂=0.01V₁+0.1V₂, with I₂ defined into the network."
            },
            {
              "equation": "I_2=0.01V_1+0.1V_2"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The load draws current out of the network, so I₂=−V₂/100=−0.01V₂."
            },
            {
              "equation": "I_2=−frac{V_2}{100}"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Therefore0.01V₁+0.11V₂=0 and V₂/V₁=−1/11. The input source resistance does not alter this port-voltage ratio."
            },
            {
              "equation": "frac{V_2}{V_1}=−frac{1}{11}"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-34",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "networks",
    "number": 34,
    "ref": "GATE 2011 · Q34",
    "file": "EC2011.pdf",
    "page": 10,
    "prompt": "A 50 μF capacitor initially holds2.5 mC with its upper plate negative. It is switched through10 Ω to a 100 V source as shown. Find clockwise current.",
    "answer": "(A) 15e^(−2000t) A",
    "steps": [
      "Initial capacitor voltage measured upper-to-lower is−Q/C=−2.5 mC/50 μF=−50 V.",
      "At switching, the resistor sees100−(−50)=150 V, so i(0⁺)=15 A.",
      "The time constant is RC=10×50 μF=0.5 ms, and final current is zero. Therefore i(t)=15e^(−t/0.0005)=15e^(−2000t) A."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "15e^(−2000t)",
        "5e^(−2000t)",
        "10e^(−2000t)",
        "−5e^(−2000t)"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Find the initial voltage",
          "blocks": [
            {
              "text": "Initial capacitor voltage measured upper-to-lower is−Q/C=−2.5 mC/50 μF=−50 V."
            },
            {
              "equation": "V_C(0^+)=−frac{2.5 mC}{50 μF}=−50 V"
            }
          ]
        },
        {
          "title": "Find the initial current",
          "blocks": [
            {
              "text": "At switching, the resistor sees100−(−50)=150 V, so i(0⁺)=15 A."
            },
            {
              "equation": "i(0^+)=frac{100−(−50)}{10}=15 A"
            }
          ]
        },
        {
          "title": "Write the transient response",
          "blocks": [
            {
              "text": "The time constant is RC=10×50 μF=0.5 ms, and final current is zero. Therefore i(t)=15e^(−t/0.0005)=15e^(−2000t) A."
            },
            {
              "equation": "i(t)=15e^{−2000t} A"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-34.png",
    "figureAlt": "Original GATE 2011 Q34 diagram and choices"
  },
  {
    "id": "g11-35",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "math",
    "number": 35,
    "ref": "GATE 2011 · Q35",
    "file": "EC2011.pdf",
    "page": 10,
    "prompt": "For x+y+z=6, x+4y+6z=20, x+4y+λz=μ, when is there no solution?",
    "answer": "(B) λ=6,μ≠20",
    "steps": [
      "Subtract the second equation from the third to obtain(λ−6)z=μ−20.",
      "If λ≠6, this fixes z and the first two equations then uniquely fix x, y.",
      "If λ=6, the left side is zero; it is inconsistent precisely when μ−20≠0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "λ6,μ20",
        "λ6,μ≠20",
        "λ≠6,μ20",
        "λ≠6,μ≠20"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Eliminate repeated terms",
          "blocks": [
            {
              "text": "Subtract the second equation from the third to obtain(λ−6)z=μ−20."
            },
            {
              "equation": "(λ−6)z=μ−20"
            }
          ]
        },
        {
          "title": "Test the nonsingular case",
          "blocks": [
            {
              "text": "If λ≠6, this fixes z and the first two equations then uniquely fix x, y."
            }
          ]
        },
        {
          "title": "Identify inconsistency",
          "blocks": [
            {
              "text": "If λ=6, the left side is zero; it is inconsistent precisely when μ−20≠0."
            },
            {
              "equation": "λ=6;μ≠20"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-36",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "math",
    "number": 36,
    "ref": "GATE 2011 · Q36",
    "file": "EC2011.pdf",
    "page": 10,
    "prompt": "A fair six-sided die is rolled twice. Find P(second result>first result).",
    "answer": "(C) 5/12",
    "steps": [
      "There are36 equally likely ordered outcomes. Six are ties.",
      "By symmetry, the remaining30 outcomes split equally between second>first and second<first.",
      "The desired probability is 15/36=5/12."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2/36",
        "2/6",
        "5/12",
        "1/2"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "There are36 equally likely ordered outcomes. Six are ties."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "By symmetry, the remaining30 outcomes split equally between second>first and second<first."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The desired probability is 15/36=5/12."
            },
            {
              "equation": "P=frac{36−6}{2×36}=frac{5}{12}"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-37",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "em",
    "number": 37,
    "ref": "GATE 2011 · Q37",
    "file": "EC2011.pdf",
    "page": 10,
    "prompt": "At x=0, a sheet carries K=10ŷ A/m. Region1(x<0)has μr1=1 and H₁=3x̂+30ŷ A/m; Region2(x>0)has μr2=2. Find H₂ at the interface.",
    "answer": "(A) 1.5x̂+30ŷ−10ẑ A/m",
    "steps": [
      "Normal B is continuous:μ₁H₁x=μ₂H₂x, giving H₂x=3/2=1.5 A/m.",
      "With n̂=x̂ from region1 to 2, the tangential condition is n̂×(H₂−H₁)=K.",
      "Its components give ΔHy=0 and−ΔHz=10. Therefore H₂y=30, H₂z=−10 A/m."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1.5x̂+30ŷ−10ẑ",
        "3x̂+30ŷ−10ẑ",
        "1.5x̂+40ŷ",
        "3x̂+30ŷ+10ẑ"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Normal-field condition",
          "blocks": [
            {
              "text": "Normal B is continuous:μ₁H₁x=μ₂H₂x, giving H₂x=3/2=1.5 A/m."
            },
            {
              "equation": "μ_1H_{1x}=μ_2H_{2x}"
            }
          ]
        },
        {
          "title": "Tangential-field condition",
          "blocks": [
            {
              "text": "With n̂=x̂ from region1 to 2, the tangential condition is n̂×(H₂−H₁)=K."
            },
            {
              "equation": "n×(H_2−H_1)=K"
            }
          ]
        },
        {
          "title": "Combine the components",
          "blocks": [
            {
              "text": "Its components give ΔHy=0 and−ΔHz=10. Therefore H₂y=30, H₂z=−10 A/m."
            },
            {
              "equation": "H_2=1.5x̂+30ŷ−10ẑ"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-38",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "em",
    "number": 38,
    "ref": "GATE 2011 · Q38",
    "file": "EC2011.pdf",
    "page": 11,
    "prompt": "A lossless50 Ω line has VSWR5 and its first voltage maximum isλ/4 from the load. Find load impedance.",
    "answer": "(A) 10 Ω",
    "steps": [
      "A maximum one quarter wavelength from the load means the load itself is a voltage minimum.",
      "The load is therefore a purely resistive value below Z₀. At a resistive minimum, VSWR=Z₀/RL.",
      "Thus RL=50/5=10 Ω. Equivalently ΓL=−(5−1)/(5+1)=−2/3."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10 Ω",
        "250 Ω",
        "19.23+j46.15 Ω",
        "19.23−j46.15 Ω"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "A maximum one quarter wavelength from the load means the load itself is a voltage minimum."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The load is therefore a purely resistive value below Z₀. At a resistive minimum, VSWR=Z₀/RL."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Thus RL=50/5=10 Ω. Equivalently ΓL=−(5−1)/(5+1)=−2/3."
            },
            {
              "equation": "R_L=frac{Z_0}{S}=frac{50}{5}=10 Ω"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-39",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "signals",
    "number": 39,
    "ref": "GATE 2011 · Q39",
    "file": "EC2011.pdf",
    "page": 11,
    "prompt": "A stationary process has RX(τ)=e^(−πτ²). The output is its derivative minus the original signal. Find SY(f).",
    "answer": "(A) (4π²f²+1)e^(−πf²)",
    "steps": [
      "The Fourier transform pair for this normalized Gaussian is e^(−πτ²)↔e^(−πf²), so SX(f)=e^(−πf²).",
      "The combined filter is H(f)=j2πf−1.",
      "Its squared magnitude is 1+4π²f². Multiply by SX to obtain the stated output PSD."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(4π²f²+1)e^(−πf²)",
        "(4π²f²−1)e^(−πf²)",
        "(4π²f²+1)e^(−πf)",
        "(4π²f²−1)e^(−πf)"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The Fourier transform pair for this normalized Gaussian is e^(−πτ²)↔e^(−πf²), so SX(f)=e^(−πf²)."
            },
            {
              "equation": "S_X(f)=e^{−πf^2}"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The combined filter is H(f)=j2πf−1."
            },
            {
              "equation": "H(f)=j2πf−1"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Its squared magnitude is 1+4π²f². Multiply by SX to obtain the stated output PSD."
            },
            {
              "equation": "S_Y(f)=(1+4π^2f^2)e^{−πf^2}"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-40",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "digital",
    "number": 40,
    "ref": "GATE 2011 · Q40",
    "file": "EC2011.pdf",
    "page": 11,
    "prompt": "The shown three-stage Johnson counter starts at zero and drives a binary-weighted DAC. Select the waveform using the conventional shift toward Q₀ with inverted feedback to Q₂.",
    "answer": "(A) Repeating DAC codes0,4,6,7,3,1",
    "steps": [
      "A Johnson counter feeds the complement of the last stage into the first.",
      "Starting at 000, the states Q₂Q₁Q₀ are100,110,111,011,001,000.",
      "A binary-weighted DAC converts these into 0,4,6,7,3,1,0,…, which matches A."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Codes0,4,6,7,3,1",
        "Alternative waveform B",
        "Alternative waveform C",
        "Binary staircase0 through7"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "A Johnson counter feeds the complement of the last stage into the first."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Starting at 000, the states Q₂Q₁Q₀ are100,110,111,011,001,000."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "A binary-weighted DAC converts these into 0,4,6,7,3,1,0,…, which matches A."
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-40.png",
    "figureAlt": "Original GATE 2011 Q40 diagram and choices"
  },
  {
    "id": "g11-41",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "digital",
    "number": 41,
    "ref": "GATE 2011 · Q41",
    "file": "EC2011.pdf",
    "page": 12,
    "prompt": "Two D flip-flops must follow QBQA:00→11→01→10→00. Find DA, DB.",
    "answer": "(D) DA=QA XNOR QB; DB=Q̅B",
    "steps": [
      "A D input equals the required next value of that flip-flop.",
      "The next QA is 1 for present00 and 11, and 0 for 01 and 10: DA is XNOR.",
      "The next QB alternates to the complement of the present QB in every row, so DB=Q̅B."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "DA=QB,DB=QA",
        "DA=Q̅A,DB=Q̅B",
        "DA=QA XOR QB,DB=QA",
        "DA=QA XNOR QB,DB=Q̅B"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "A D input equals the required next value of that flip-flop."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The next QA is 1 for present00 and 11, and 0 for 01 and 10: DA is XNOR."
            },
            {
              "equation": "D_A=Q_AQ_B+Q̅_AQ̅_B"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The next QB alternates to the complement of the present QB in every row, so DB=Q̅B."
            },
            {
              "equation": "D_B=Q̅_B"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-42",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "devices",
    "number": 42,
    "ref": "GATE 2011 · Q42",
    "file": "EC2011.pdf",
    "page": 12,
    "prompt": "Two series nMOS devices have VT=1 V, common μnCox=100 μA/V², upper W/L=4, upper gate5 V, drain6 V, and lower diode-connected W/L=1. Find their intermediate voltage Vx.",
    "answer": "(C) 3 V",
    "steps": [
      "The lower diode-connected device is saturated with overdrive Vx−1. The upper has overdrive5−Vx−1=4−Vx, and also satisfies saturation.",
      "Equal series currents require4(4−Vx)²=(Vx−1)². Both overdrives must be nonnegative.",
      "Take positive roots:2(4−Vx)=Vx−1. Solving gives Vx=3 V, which satisfies both assumptions."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1 V",
        "2 V",
        "3 V",
        "3.67 V"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Check operating regions",
          "blocks": [
            {
              "text": "The lower diode-connected device is saturated with overdrive Vx−1. The upper has overdrive5−Vx−1=4−Vx, and also satisfies saturation."
            }
          ]
        },
        {
          "title": "Equate the currents",
          "blocks": [
            {
              "text": "Equal series currents require4(4−Vx)²=(Vx−1)². Both overdrives must be nonnegative."
            },
            {
              "equation": "4(4−V_x)^2=(V_x−1)^2"
            }
          ]
        },
        {
          "title": "Solve and verify",
          "blocks": [
            {
              "text": "Take positive roots:2(4−Vx)=Vx−1. Solving gives Vx=3 V, which satisfies both assumptions."
            },
            {
              "equation": "2(4−V_x)=V_x−1;V_x=3 V"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-42.png",
    "figureAlt": "Original GATE 2011 Q42 diagram and choices"
  },
  {
    "id": "g11-43",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "signals",
    "number": 43,
    "ref": "GATE 2011 · Q43",
    "file": "EC2011.pdf",
    "page": 12,
    "prompt": "Find the output of an LTI integrator h(t)=u(t) for x(t)=e^(−2t)u(t)+δ(t−6).",
    "answer": "(D) 0.5[1−e^(−2t)]u(t)+u(t−6)",
    "steps": [
      "Convolution with u(t) integrates the input from−∞ to t.",
      "The causal exponential contributes∫₀ᵗe^(−2τ)dτ=(1−e^(−2t))/2 for t≥0.",
      "The delayed impulse contributes a delayed unit step u(t−6). Add the two contributions."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "[1−e^(−2t)]u(t)+u(t+6)",
        "[1−e^(−2t)]u(t)+u(t−6)",
        "0.5[1−e^(−2t)]u(t)+u(t+6)",
        "0.5[1−e^(−2t)]u(t)+u(t−6)"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Convolution with u(t) integrates the input from−∞ to t."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The causal exponential contributes∫₀ᵗe^(−2τ)dτ=(1−e^(−2t))/2 for t≥0."
            },
            {
              "equation": "∫_0^te^{−2τ}dτ=frac{1−e^{−2t}}{2}"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The delayed impulse contributes a delayed unit step u(t−6). Add the two contributions."
            },
            {
              "equation": "y(t)=frac{1−e^{−2t}}{2}u(t)+u(t−6)"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-44",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "devices",
    "number": 44,
    "ref": "GATE 2011 · Q44",
    "file": "EC2011.pdf",
    "page": 12,
    "prompt": "A BJT has α=0.98, ICBO=0.6 μA and base current20 μA. Find active-region collector current including leakage.",
    "answer": "(D) 1.01 mA",
    "steps": [
      "The relation is IC=αIE+ICBO and IE=IC+IB.",
      "Thus IC=αIB/(1−α)+ICBO/(1−α). Here β=α/(1−α)=49.",
      "IC=49×20+50×0.6=1010 μA=1.01 mA."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.98 mA",
        "0.99 mA",
        "1.0 mA",
        "1.01 mA"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The relation is IC=αIE+ICBO and IE=IC+IB."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Thus IC=αIB/(1−α)+ICBO/(1−α). Here β=α/(1−α)=49."
            },
            {
              "equation": "I_C=frac{α}{1−α}I_B+frac{I_{CBO}}{1−α}"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "IC=49×20+50×0.6=1010 μA=1.01 mA."
            },
            {
              "equation": "I_C=49×20+50×0.6=1010 μA"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-45",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "signals",
    "number": 45,
    "ref": "GATE 2011 · Q45",
    "file": "EC2011.pdf",
    "page": 12,
    "prompt": "For F(s)=2(s+1)/(s²+4s+7), find initial and final values of its causal inverse.",
    "answer": "(B) 2 and 0",
    "steps": [
      "The initial-value theorem gives f(0⁺)=lim[s→∞]sF(s)=2.",
      "The poles are−2±j√3, so the response decays and the final-value theorem applies.",
      "The final value is lim[s→0]sF(s)=0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0,2",
        "2,0",
        "0,2/7",
        "2/7,0"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Initial-value test",
          "blocks": [
            {
              "text": "The initial-value theorem gives f(0⁺)=lim[s→∞]sF(s)=2."
            },
            {
              "equation": "f(0^+)=lim_{s→∞}sF(s)=2"
            }
          ]
        },
        {
          "title": "Check the poles",
          "blocks": [
            {
              "text": "The poles are−2±j√3, so the response decays and the final-value theorem applies."
            }
          ]
        },
        {
          "title": "Final-value test",
          "blocks": [
            {
              "text": "The final value is lim[s→0]sF(s)=0."
            },
            {
              "equation": "f(∞)=lim_{s→0}sF(s)=0"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-46",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "networks",
    "number": 46,
    "ref": "GATE 2011 · Q46",
    "file": "EC2011.pdf",
    "page": 13,
    "prompt": "Find source current in the shown14∠0° V bridge with upper impedances+j4,−j4 Ω and three6 Ω resistors.",
    "answer": "(B) 2∠0° A",
    "steps": [
      "Let the middle-left and middle-right node voltages be a, b. Their KCL equations are(a−14)/(j4)+a/6+(a−b)/6=0 and(b−14)/(−j4)+b/6+(b−a)/6=0.",
      "Solving gives a=6−j4 V, b=6+j4 V.",
      "The two source-branch currents are(14−a)/(j4)=1−j2 A and(14−b)/(−j4)=1+j2 A. Their sum is 2 A."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1.4∠0° A",
        "2∠0° A",
        "2.8∠0° A",
        "3.2∠0° A"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Let the middle-left and middle-right node voltages be a, b. Their KCL equations are(a−14)/(j4)+a/6+(a−b)/6=0 and(b−14)/(−j4)+b/6+(b−a)/6=0."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Solving gives a=6−j4 V, b=6+j4 V."
            },
            {
              "equation": "a=6−j4;b=6+j4"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The two source-branch currents are(14−a)/(j4)=1−j2 A and(14−b)/(−j4)=1+j2 A. Their sum is 2 A."
            },
            {
              "equation": "I=(1−j2)+(1+j2)=2 A"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-46.png",
    "figureAlt": "Original GATE 2011 Q46 diagram and choices"
  },
  {
    "id": "g11-47",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "math",
    "number": 47,
    "ref": "GATE 2011 · Q47",
    "file": "EC2011.pdf",
    "page": 13,
    "prompt": "Apply one Newton–Raphson step to f(x)=x+√x−3 from x₀=2.",
    "answer": "(C) Approximately1.694",
    "steps": [
      "Newton’s update is x₁=x₀−f(x₀)/f′(x₀).",
      "Here f(2)=√2−1 and f′(2)=1+1/(2√2).",
      "Substitution gives x₁=2−(√2−1)/[1+1/(2√2)]≈1.694."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.306",
        "0.739",
        "1.694",
        "2.306"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Newton’s update is x₁=x₀−f(x₀)/f′(x₀)."
            },
            {
              "equation": "x_1=x_0−frac{f(x_0)}{f′(x_0)}"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Here f(2)=√2−1 and f′(2)=1+1/(2√2)."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Substitution gives x₁=2−(√2−1)/[1+1/(2√2)]≈1.694."
            },
            {
              "equation": "x_1=2−frac{sqrt{2}−1}{1+frac{1}{2sqrt{2}}}≈1.694"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-48",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "devices",
    "number": 48,
    "ref": "GATE 2011 · Q48",
    "file": "EC2011.pdf",
    "page": 14,
    "prompt": "An n-channel JFET has full channel thickness10 μm and resistance600 Ω if that full thickness conducts. The built-in junction potential magnitude is 1 V, and at VGS=0 depletion extends1 μm from each side. Find channel resistance at VGS=0.",
    "answer": "(C) 750 Ω",
    "steps": [
      "With two1 μm depletion regions, the conducting thickness is 10−2=8 μm.",
      "For fixed channel length, width and resistivity, resistance is inversely proportional to conducting thickness.",
      "Thus R=600×10/8=750 Ω."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "480 Ω",
        "600 Ω",
        "750 Ω",
        "1000 Ω"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "With two1 μm depletion regions, the conducting thickness is 10−2=8 μm."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "For fixed channel length, width and resistivity, resistance is inversely proportional to conducting thickness."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Thus R=600×10/8=750 Ω."
            },
            {
              "equation": "R=600×frac{10}{8}=750 Ω"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-48.png",
    "figureAlt": "Original GATE 2011 Q48 diagram and choices"
  },
  {
    "id": "g11-49",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "devices",
    "number": 49,
    "ref": "GATE 2011 · Q49",
    "file": "EC2011.pdf",
    "page": 14,
    "prompt": "An n-channel JFET has full channel thickness10 μm and resistance600 Ω if that full thickness conducts. The built-in junction potential magnitude is 1 V, and at VGS=0 depletion extends1 μm from each side. Find channel resistance at VGS=−3 V under the same depletion approximation.",
    "answer": "(C) 1000 Ω",
    "steps": [
      "Depletion width scales with the square root of total junction reverse potential. The magnitude rises from 1 V to 1+3=4 V.",
      "Each depletion width doubles from 1 μm to 2 μm, leaving10−4=6 μm conducting.",
      "Therefore R=600×10/6=1000 Ω."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "360 Ω",
        "917 Ω",
        "1000 Ω",
        "3000 Ω"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Depletion width scales with the square root of total junction reverse potential. The magnitude rises from 1 V to 1+3=4 V."
            },
            {
              "equation": "frac{W_2}{W_1}=sqrt{frac{1+3}{1}}=2"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Each depletion width doubles from 1 μm to 2 μm, leaving10−4=6 μm conducting."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Therefore R=600×10/6=1000 Ω."
            },
            {
              "equation": "R=600×frac{10}{6}=1000 Ω"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-49.png",
    "figureAlt": "Original GATE 2011 Q49 diagram and choices"
  },
  {
    "id": "g11-50",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "control",
    "number": 50,
    "ref": "GATE 2011 · Q50",
    "file": "EC2011.pdf",
    "page": 14,
    "prompt": "For plant H(s)=100/[s(s+10)²], which source signal-flow graph does not represent the plant?",
    "answer": "(D) The graph missing the−20 feedback term",
    "steps": [
      "Expand the denominator: s(s+10)²=s³+20s²+100s.",
      "Equivalent integrator realizations must retain both the 20 and 100 denominator coefficients.",
      "Graph D retains only the−100 loop and represents100/[s(s²+100)], missing20s². Hence it does not model the given plant."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Graph A",
        "Graph B",
        "Graph C",
        "Graph D"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Expand the denominator: s(s+10)²=s³+20s²+100s."
            },
            {
              "equation": "s(s+10)^2=s^3+20s^2+100s"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Equivalent integrator realizations must retain both the 20 and 100 denominator coefficients."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Graph D retains only the−100 loop and represents100/[s(s²+100)], missing20s². Hence it does not model the given plant."
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-50.png",
    "figureAlt": "Original GATE 2011 Q50 diagram and choices"
  },
  {
    "id": "g11-51",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "control",
    "number": 51,
    "ref": "GATE 2011 · Q51",
    "file": "EC2011.pdf",
    "page": 14,
    "prompt": "For H(s)=100/[s(s+10)²] in unity negative feedback, find gain margin.",
    "answer": "(C) Approximately26 dB",
    "steps": [
      "The loop phase is−90°−2atan(ω/10). It reaches−180° atω=10 rad/s.",
      "There,|H(j10)|=100/[10(10²+10²)]=0.05.",
      "Gain margin is 1/0.05=20 as a ratio, or20log₁₀20≈26.02 dB."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0 dB",
        "20 dB",
        "26 dB",
        "46 dB"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Find phase crossover",
          "blocks": [
            {
              "text": "The loop phase is−90°−2atan(ω/10). It reaches−180° atω=10 rad/s."
            },
            {
              "equation": "−90°−2tan^{−1}(frac{ω}{10})=−180°;ω=10"
            }
          ]
        },
        {
          "title": "Find gain at crossover",
          "blocks": [
            {
              "text": "There,|H(j10)|=100/[10(10²+10²)]=0.05."
            },
            {
              "equation": "|H(j10)|=frac{100}{10(100+100)}=0.05"
            }
          ]
        },
        {
          "title": "Convert gain margin to dB",
          "blocks": [
            {
              "text": "Gain margin is 1/0.05=20 as a ratio, or20log₁₀20≈26.02 dB."
            },
            {
              "equation": "GM=20log_{10}(frac{1}{0.05})≈26.02 dB"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-52",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "comm",
    "number": 52,
    "ref": "GATE 2011 · Q52",
    "file": "EC2011.pdf",
    "page": 15,
    "prompt": "Four-PSK and eight-PSK constellations must have the same nearest-neighbor distance d. Find radii r₁, r₂.",
    "answer": "(D) r₁=0.707d, r₂=1.307d",
    "steps": [
      "For M equally spaced points on a circle, nearest distance is d=2r sin(π/M).",
      "For M=4, r₁=d/(2sinπ/4)=d/√2≈0.707d.",
      "For M=8, r₂=d/(2sinπ/8)≈1.307d."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.707d,2.782d",
        "0.707d,1.932d",
        "0.707d,1.545d",
        "0.707d,1.307d"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "For M equally spaced points on a circle, nearest distance is d=2r sin(π/M)."
            },
            {
              "equation": "d=2r sin(frac{π}{M})"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "For M=4, r₁=d/(2sinπ/4)=d/√2≈0.707d."
            },
            {
              "equation": "r_1=frac{d}{2sin(π/4)}≈0.707d"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "For M=8, r₂=d/(2sinπ/8)≈1.307d."
            },
            {
              "equation": "r_2=frac{d}{2sin(π/8)}≈1.307d"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-52.png",
    "figureAlt": "Original GATE 2011 Q52 diagram and choices"
  },
  {
    "id": "g11-53",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "comm",
    "number": 53,
    "ref": "GATE 2011 · Q53",
    "file": "EC2011.pdf",
    "page": 15,
    "prompt": "At high SNR, equiprobable8-PSK must match4-PSK symbol-error probability. Estimate additional average transmitted symbol energy.",
    "answer": "(D) 5.33 dB",
    "steps": [
      "At high SNR, the nearest-neighbor distances determine the leading error behavior. Match the minimum distance d.",
      "Symbol energy is proportional to radius squared, so E₈/E₄=(r₂/r₁)²=[sin(π/4)/sin(π/8)]²≈3.414.",
      "The additional energy is 10log₁₀3.414≈5.33 dB. This compares energy per symbol, not per information bit."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "11.90 dB",
        "8.73 dB",
        "6.79 dB",
        "5.33 dB"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "At high SNR, the nearest-neighbor distances determine the leading error behavior. Match the minimum distance d."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Symbol energy is proportional to radius squared, so E₈/E₄=(r₂/r₁)²=[sin(π/4)/sin(π/8)]²≈3.414."
            },
            {
              "equation": "frac{E_8}{E_4}=(frac{sin(π/4)}{sin(π/8)})^2≈3.414"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The additional energy is 10log₁₀3.414≈5.33 dB. This compares energy per symbol, not per information bit."
            },
            {
              "equation": "10log_{10}(3.414)≈5.33 dB"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-54",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "analog",
    "number": 54,
    "ref": "GATE 2011 · Q54",
    "file": "EC2011.pdf",
    "page": 15,
    "prompt": "A 12.7 V DC source with small input vi=100cos(ωt) mV drives a 9.9 kΩ resistor and four series forward diodes. Each diode drops0.7 V at DC and VT=25 mV. Find DC bias current.",
    "answer": "(A) 1 mA",
    "steps": [
      "The four DC diode drops sum to 4×0.7=2.8 V.",
      "The resistor therefore drops12.7−2.8=9.9 V.",
      "IDC=9.9 V/9.9 kΩ=1 mA."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1 mA",
        "1.28 mA",
        "1.5 mA",
        "2 mA"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The four DC diode drops sum to 4×0.7=2.8 V."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The resistor therefore drops12.7−2.8=9.9 V."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "IDC=9.9 V/9.9 kΩ=1 mA."
            },
            {
              "equation": "I_{DC}=frac{12.7−4×0.7}{9900}=1 mA"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-54.png",
    "figureAlt": "Original GATE 2011 Q54 diagram and choices"
  },
  {
    "id": "g11-55",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "analog",
    "number": 55,
    "ref": "GATE 2011 · Q55",
    "file": "EC2011.pdf",
    "page": 15,
    "prompt": "A 12.7 V DC source with small input vi=100cos(ωt) mV drives a 9.9 kΩ resistor and four series forward diodes. Each diode drops0.7 V at DC and VT=25 mV. Find the small-signal output across the diode string, assuming ideality factor1.",
    "answer": "(B) 1cos(ωt) mV",
    "steps": [
      "Each diode has incremental resistance rd=VT/IDC=25 mV/1 mA=25 Ω.",
      "Four series diodes give100 Ω. The input divider is 100/(9900+100)=0.01.",
      "Thus vac=0.01×100cos(ωt) mV=1cos(ωt) mV."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.25cos(ωt) mV",
        "1cos(ωt) mV",
        "2cos(ωt) mV",
        "22cos(ωt) mV"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Each diode has incremental resistance rd=VT/IDC=25 mV/1 mA=25 Ω."
            },
            {
              "equation": "r_d=frac{25 mV}{1 mA}=25 Ω"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Four series diodes give100 Ω. The input divider is 100/(9900+100)=0.01."
            },
            {
              "equation": "A=frac{4×25}{9900+4×25}=0.01"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Thus vac=0.01×100cos(ωt) mV=1cos(ωt) mV."
            },
            {
              "equation": "v_{ac}(t)=1cos(ωt) mV"
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-55.png",
    "figureAlt": "Original GATE 2011 Q55 diagram and choices"
  },
  {
    "id": "g11-56",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "apt",
    "number": 56,
    "ref": "GATE 2011 · Q56",
    "file": "EC2011.pdf",
    "page": 16,
    "prompt": "Choose the closest relational analogy to “gladiator : arena”.",
    "answer": "(D) Lawyer : courtroom",
    "steps": [
      "A gladiator engages in an adversarial contest in an arena.",
      "A lawyer argues an adversarial case in a courtroom.",
      "The contestant-and-contest-setting relationship is closer than a commuter’s vehicle or an ordinary teaching/performance venue."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Dancer : stage",
        "Commuter : train",
        "Teacher : classroom",
        "Lawyer : courtroom"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "A gladiator engages in an adversarial contest in an arena."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "A lawyer argues an adversarial case in a courtroom."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The contestant-and-contest-setting relationship is closer than a commuter’s vehicle or an ordinary teaching/performance venue."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-57",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "apt",
    "number": 57,
    "ref": "GATE 2011 · Q57",
    "file": "EC2011.pdf",
    "page": 16,
    "prompt": "Initially40% of voters promise P and 60% Q. Of P’s promised voters15% switch to Q; of Q’s25% switch to P. P loses by 2 votes. Find electorate size.",
    "answer": "(A) 100",
    "steps": [
      "P’s final fraction is 0.4×0.85+0.6×0.25=0.49.",
      "Q therefore gets0.51 and wins by 0.02 of the total electorate N.",
      "Set0.02N=2, so N=100."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "100",
        "110",
        "90",
        "95"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Count the votes for P",
          "blocks": [
            {
              "text": "P’s final fraction is 0.4×0.85+0.6×0.25=0.49."
            },
            {
              "equation": "P=0.4×0.85+0.6×0.25=0.49"
            }
          ]
        },
        {
          "title": "Find the vote difference",
          "blocks": [
            {
              "text": "Q therefore gets0.51 and wins by 0.02 of the total electorate N."
            }
          ]
        },
        {
          "title": "Solve for the electorate",
          "blocks": [
            {
              "text": "Set0.02N=2, so N=100."
            },
            {
              "equation": "(0.51−0.49)N=2;N=100"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-58",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "apt",
    "number": 58,
    "ref": "GATE 2011 · Q58",
    "file": "EC2011.pdf",
    "page": 16,
    "prompt": "Which word means “made worse” in the claim that foreign technocrats had ___ the country’s problems?",
    "answer": "(C) Exacerbated",
    "steps": [
      "The continuation says inviting them again would be counterproductive.",
      "This requires a verb indicating that their earlier involvement worsened the problems.",
      "“Exacerbated” has exactly that meaning."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Identified",
        "Ascertained",
        "Exacerbated",
        "Analysed"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The continuation says inviting them again would be counterproductive."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "This requires a verb indicating that their earlier involvement worsened the problems."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "“Exacerbated” has exactly that meaning."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-59",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "apt",
    "number": 59,
    "ref": "GATE 2011 · Q59",
    "file": "EC2011.pdf",
    "page": 16,
    "prompt": "Choose the closest opposite of “frequency” in the sense of frequent occurrence.",
    "answer": "(B) Rarity",
    "steps": [
      "Frequency describes how often something happens.",
      "Its opposite in this context is infrequent occurrence or rarity.",
      "Periodicity and persistence do not express that opposite meaning."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Periodicity",
        "Rarity",
        "Gradualness",
        "Persistency"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Frequency describes how often something happens."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Its opposite in this context is infrequent occurrence or rarity."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Periodicity and persistence do not express that opposite meaning."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-60",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "apt",
    "number": 60,
    "ref": "GATE 2011 · Q60",
    "file": "EC2011.pdf",
    "page": 16,
    "prompt": "Complete the phrase: correct diseases for which ___ treatments are unsatisfactory.",
    "answer": "(D) Available",
    "steps": [
      "The sentence compares a proposed intervention with treatments that already exist.",
      "“Available treatments” is the natural expression for existing treatment choices.",
      "The other words do not supply the intended comparison."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Similar",
        "Most",
        "Uncommon",
        "Available"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The sentence compares a proposed intervention with treatments that already exist."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "“Available treatments” is the natural expression for existing treatment choices."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The other words do not supply the intended comparison."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-61",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "apt",
    "number": 61,
    "ref": "GATE 2011 · Q61",
    "file": "EC2011.pdf",
    "page": 16,
    "prompt": "A passage says horses were exposed to disease toxins until immunity developed, and serum was then made from their blood. What does this imply?",
    "answer": "(A) They were made immune to the diseases",
    "steps": [
      "The passage describes immunity developing after a deliberate exposure process.",
      "It does not claim that horses were naturally immune or that they received the finished serum.",
      "Thus the supported inference is that immunity was induced in them."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Given immunity to diseases",
        "Naturally quite immune",
        "Given medicines against toxins",
        "Given finished diphtheria/tetanus serum"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The passage describes immunity developing after a deliberate exposure process."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "It does not claim that horses were naturally immune or that they received the finished serum."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Thus the supported inference is that immunity was induced in them."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-62",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "apt",
    "number": 62,
    "ref": "GATE 2011 · Q62",
    "file": "EC2011.pdf",
    "page": 17,
    "prompt": "The motorcycle graph gives fuel economy of 60,90, about75, and 30 km/L at speeds15,45,75, and 10 km/h. Which lap uses least fuel per kilometre if P, Q, R, S use those respective speeds?",
    "answer": "(B) Q",
    "steps": [
      "Fuel per kilometre is the reciprocal of kilometres per litre.",
      "To minimize L/km, choose the largest km/L value.",
      "The maximum shown is 90 km/L at 45 km/h, which corresponds to lap Q. Lap distance does not change consumption per kilometre."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "P",
        "Q",
        "R",
        "S"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Fuel per kilometre is the reciprocal of kilometres per litre."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "To minimize L/km, choose the largest km/L value."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The maximum shown is 90 km/L at 45 km/h, which corresponds to lap Q. Lap distance does not change consumption per kilometre."
            }
          ]
        }
      ]
    },
    "figure": "pyq-figures/g11-62.png",
    "figureAlt": "Original GATE 2011 Q62 diagram and choices"
  },
  {
    "id": "g11-63",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "apt",
    "number": 63,
    "ref": "GATE 2011 · Q63",
    "file": "EC2011.pdf",
    "page": 17,
    "prompt": "R takes one-third of a bowl’s toffees and returns4; S takes one-quarter of the remainder and returns3; T takes half of what remains and returns2. The final count is 17. Find the original count.",
    "answer": "(C) 48",
    "steps": [
      "Work backward through T: before T, the count was2(17−2)=30.",
      "Before S, the count was(30−3)×4/3=36.",
      "Before R, the count was(36−4)×3/2=48."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "38",
        "31",
        "48",
        "41"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Undo T’s operation",
          "blocks": [
            {
              "text": "Work backward through T: before T, the count was2(17−2)=30."
            },
            {
              "equation": "N_T=2(17−2)=30"
            }
          ]
        },
        {
          "title": "Undo S’s operation",
          "blocks": [
            {
              "text": "Before S, the count was(30−3)×4/3=36."
            },
            {
              "equation": "N_S=frac{4}{3}(30−3)=36"
            }
          ]
        },
        {
          "title": "Undo R’s operation",
          "blocks": [
            {
              "text": "Before R, the count was(36−4)×3/2=48."
            },
            {
              "equation": "N=frac{3}{2}(36−4)=48"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-64",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "apt",
    "number": 64,
    "ref": "GATE 2011 · Q64",
    "file": "EC2011.pdf",
    "page": 17,
    "prompt": "For f(y)=|y|/y and nonzero real q, evaluate|f(q)−f(−q)|.",
    "answer": "(D) 2",
    "steps": [
      "The function is the sign function:1 for positive input and−1 for negative input.",
      "Since q and−q have opposite signs, their function values are1 and−1 in some order.",
      "Their difference has magnitude2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "−1",
        "1",
        "2"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The function is the sign function:1 for positive input and−1 for negative input."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Since q and−q have opposite signs, their function values are1 and−1 in some order."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Their difference has magnitude2."
            },
            {
              "equation": "|f(q)−f(−q)|=|1−(−1)|=2"
            }
          ]
        }
      ]
    }
  },
  {
    "id": "g11-65",
    "paperId": "gate-2011",
    "exam": "gate",
    "topic": "apt",
    "number": 65,
    "ref": "GATE 2011 · Q65",
    "file": "EC2011.pdf",
    "page": 17,
    "prompt": "Find the sum of the first n terms4+44+444+….",
    "answer": "(C) (4/81)[10^(n+1)−9n−10]",
    "steps": [
      "The kth repeated-digit term is 4(10ᵏ−1)/9.",
      "Summing k=1 to n gives(4/9)[Σ10ᵏ−n], and the geometric sum is(10^(n+1)−10)/9.",
      "Combine the expressions to obtain(4/81)[10^(n+1)−9n−10]."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(4/81)[10^(n+1)−9n−1]",
        "(4/81)[10^(n−1)−9n−1]",
        "(4/81)[10^(n+1)−9n−10]",
        "(4/81)[10^(n−1)−9n−10]"
      ]
    },
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The kth repeated-digit term is 4(10ᵏ−1)/9."
            },
            {
              "equation": "a_k=frac{4}{9}(10^k−1)"
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Summing k=1 to n gives(4/9)[Σ10ᵏ−n], and the geometric sum is(10^(n+1)−10)/9."
            },
            {
              "equation": "S_n=frac{4}{9}(frac{10^{n+1}−10}{9}−n)"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Combine the expressions to obtain(4/81)[10^(n+1)−9n−10]."
            },
            {
              "equation": "S_n=frac{4}{81}(10^{n+1}−9n−10)"
            }
          ]
        }
      ]
    }
  }
];
