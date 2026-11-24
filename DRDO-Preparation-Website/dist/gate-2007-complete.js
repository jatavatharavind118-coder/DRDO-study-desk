export const gate2007Complete = [
  {
    "id": "g07-1",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "math",
    "number": 1,
    "ref": "GATE 2007 · Q1",
    "file": "EC2007.pdf",
    "page": 2,
    "prompt": "Express the variance of random variableX using expectation.",
    "answer": "(A) E[X²]−(E[X])²",
    "steps": [
      "Letμ=E[X]. By definition VarX=E[(X−μ)²].",
      "Expand toE[X²]−2μE[X]+μ².",
      "UsingE[X]=μ leavesE[X²]−μ²."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "E[X²]−E[X]²",
        "E[X²]+E[X]²",
        "E[X²]",
        "E[X]²"
      ]
    }
  },
  {
    "id": "g07-2",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "math",
    "number": 2,
    "ref": "GATE 2007 · Q2",
    "file": "EC2007.pdf",
    "page": 2,
    "prompt": "The plotted straight line isy=x+1. Find∫₁²y dx.",
    "answer": "(B) 2.5",
    "steps": [
      "The line has intercept1 andslope1, so y=x+1.",
      "An antiderivative isx²/2+x.",
      "The endpoint difference is(2+2)−(0.5+1)=2.5."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1",
        "2.5",
        "4",
        "5"
      ]
    },
    "figure": "pyq-figures/g07-2.png",
    "figureAlt": "Original GATE 2007 Q2 diagram and choices"
  },
  {
    "id": "g07-3",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "math",
    "number": 3,
    "ref": "GATE 2007 · Q3",
    "file": "EC2007.pdf",
    "page": 2,
    "prompt": "For0<|x|≪1, approximate cothx.",
    "answer": "(C) 1/x",
    "steps": [
      "Writecothx=coshx/sinhx.",
      "At smallx, coshx=1+O(x²) andsinhx=x+O(x³).",
      "Their leading ratio is1/x."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "x",
        "x²",
        "1/x",
        "1/x²"
      ]
    }
  },
  {
    "id": "g07-4",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "math",
    "number": 4,
    "ref": "GATE 2007 · Q4",
    "file": "EC2007.pdf",
    "page": 2,
    "prompt": "Evaluate lim[θ→0]sin(θ/2)/θ.",
    "answer": "(A) 0.5",
    "steps": [
      "Setu=θ/2.",
      "The ratio becomes(1/2)sinu/u.",
      "Since limsinu/u=1, the result is1/2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.5",
        "1",
        "2",
        "Undefined"
      ]
    }
  },
  {
    "id": "g07-5",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "math",
    "number": 5,
    "ref": "GATE 2007 · Q5",
    "file": "EC2007.pdf",
    "page": 2,
    "prompt": "Which listed function is bounded over its real domain?",
    "answer": "(D) e^(−x²)",
    "steps": [
      "For all realx, x²≥0.",
      "Therefore0<e^(−x²)≤1.",
      "In contrast,1/x² diverges nearzero, eˣ grows asx→∞ andx² is unbounded."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1/x²",
        "eˣ",
        "x²",
        "e^(−x²)"
      ]
    }
  },
  {
    "id": "g07-6",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "math",
    "number": 6,
    "ref": "GATE 2007 · Q6",
    "file": "EC2007.pdf",
    "page": 2,
    "prompt": "Find the linear Taylor approximation ofe^(−x) aroundx=2.",
    "answer": "(A) (3−x)e⁻²",
    "steps": [
      "For a differentiablef, linearization isf(2)+f′(2)(x−2).",
      "Heref(2)=e⁻² andf′(2)=−e⁻².",
      "Thus the result ise⁻²[1−(x−2)]=(3−x)e⁻²."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(3−x)e⁻²",
        "1−x",
        "ExpressionC in source",
        "e⁻²"
      ]
    }
  },
  {
    "id": "g07-7",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "networks",
    "number": 7,
    "ref": "GATE 2007 · Q7",
    "file": "EC2007.pdf",
    "page": 2,
    "prompt": "An independent voltage source has series impedanceRs+jXs. What load maximizes average power?",
    "answer": "(D) ZL=Rs−jXs",
    "steps": [
      "Load reactance must cancel the source reactance, soXL=−Xs.",
      "After cancellation, maximizeRL/(Rs+RL)² with respect toRL.",
      "The maximum occurs atRL=Rs; combine real andimaginary parts to obtain conjugate matching."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Rs+jXs",
        "Rs",
        "jXs",
        "Rs−jXs"
      ]
    }
  },
  {
    "id": "g07-8",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "networks",
    "number": 8,
    "ref": "GATE 2007 · Q8",
    "file": "EC2007.pdf",
    "page": 3,
    "prompt": "Classify the RC network with seriesR–C input and parallelR∥C output branch.",
    "answer": "(C) Band-pass",
    "steps": [
      "AtDC, the series capacitor blocks the signal, so output tends tozero.",
      "At very high frequency, the output shunt capacitor shorts the output, again givingzero.",
      "Finite frequencies between those extremes are transmitted, producing a band-pass response."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Low-pass",
        "High-pass",
        "Band-pass",
        "Band-reject"
      ]
    },
    "figure": "pyq-figures/g07-8.png",
    "figureAlt": "Original GATE 2007 Q8 diagram and choices"
  },
  {
    "id": "g07-9",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "devices",
    "number": 9,
    "ref": "GATE 2007 · Q9",
    "file": "EC2007.pdf",
    "page": 3,
    "prompt": "Acceptor dopingNA≫ni is added to intrinsic silicon. Find the equilibrium electron concentration.",
    "answer": "(D) ni²/NA",
    "steps": [
      "Strong acceptor doping makes the hole concentrationapproximatelyNA.",
      "At thermal equilibrium, mass action givesnp=ni².",
      "Hence the minority electron concentration isn≈ni²/NA."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "ni",
        "ni+NA",
        "NA−ni",
        "ni²/NA"
      ]
    }
  },
  {
    "id": "g07-10",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "devices",
    "number": 10,
    "ref": "GATE 2007 · Q10",
    "file": "EC2007.pdf",
    "page": 3,
    "prompt": "Where is electric-field magnitude largest in a reverse-biased abruptp⁺n junction?",
    "answer": "(C) At the metallurgical junction",
    "steps": [
      "Within each uniformly doped depletion segment, Poisson’s equation gives a linear electric-field profile.",
      "The field iszero at the depletion edges.",
      "Its magnitude grows toward thep–n interface and reaches its maximum there."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "p-side depletion edge",
        "n-side depletion edge",
        "p–n junction",
        "Middle ofn-side depletion region"
      ]
    }
  },
  {
    "id": "g07-11",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "analog",
    "number": 11,
    "ref": "GATE 2007 · Q11",
    "file": "EC2007.pdf",
    "page": 3,
    "prompt": "Which displayed diode-bridge circuit provides full-wave rectification?",
    "answer": "(C) CircuitC",
    "steps": [
      "A valid bridge routes both positive input half-cycles toward one DC output node through alternate diodes.",
      "The negative return node must connect to the common anodes of the other two diodes.",
      "CircuitC has two cathodes meeting at the right output and two anodes at the left return, so the load-current direction is unchanged when input polarity reverses."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "CircuitA",
        "CircuitB",
        "CircuitC",
        "CircuitD"
      ]
    },
    "figure": "pyq-figures/g07-11.png",
    "figureAlt": "Original GATE 2007 Q11 diagram and choices"
  },
  {
    "id": "g07-12",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "analog",
    "number": 12,
    "ref": "GATE 2007 · Q12",
    "file": "EC2007.pdf",
    "page": 4,
    "prompt": "What input/output resistances are desired for a transconductance amplifier?",
    "answer": "(A) Large input andlarge output resistance",
    "steps": [
      "A transconductance amplifier senses voltage and delivers current.",
      "Large input resistance avoids loading the input voltage source.",
      "Large output resistance makes output current insensitive to load voltage."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Large,large",
        "Large,small",
        "Small,large",
        "Small,small"
      ]
    }
  },
  {
    "id": "g07-13",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "digital",
    "number": 13,
    "ref": "GATE 2007 · Q13",
    "file": "EC2007.pdf",
    "page": 4,
    "prompt": "Add5-bit two’s-complementX=01110 andY=11001, giving the answer in6 bits.",
    "answer": "(C) 000111",
    "steps": [
      "X is+14. Y is25−32=−7.",
      "Their sum is+7.",
      "The6-bit two’s-complement representation of+7 is000111."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "100111",
        "001000",
        "000111",
        "101001"
      ]
    }
  },
  {
    "id": "g07-14",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "digital",
    "number": 14,
    "ref": "GATE 2007 · Q14",
    "file": "EC2007.pdf",
    "page": 4,
    "prompt": "What minimum number of2-input NAND gates implementsY=AB+CD?",
    "answer": "(B) 3",
    "steps": [
      "Use one NAND to produceNOT(AB).",
      "Use a second to produceNOT(CD).",
      "NAND these two outputs:NOT[NOT(AB)NOT(CD)]=AB+CD, requiringthree gates."
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
    "id": "g07-15",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "control",
    "number": 15,
    "ref": "GATE 2007 · Q15",
    "file": "EC2007.pdf",
    "page": 4,
    "prompt": "ClassifyT(s)=(s−5)/[(s+2)(s+3)].",
    "answer": "(D) Nonminimum phase",
    "steps": [
      "The poles−2 and−3 lie in the left half-plane, so this transfer is stable.",
      "Its finite zero iss=+5 in the right half-plane.",
      "A stable transfer with a right-half-plane zero is nonminimum phase; controllability cannot be inferred from this scalar transfer alone."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Unstable",
        "Uncontrollable",
        "Minimum phase",
        "Nonminimum phase"
      ]
    }
  },
  {
    "id": "g07-16",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "signals",
    "number": 16,
    "ref": "GATE 2007 · Q16",
    "file": "EC2007.pdf",
    "page": 4,
    "prompt": "For the causal signal withY(s)=1/[s(s−1)], find its final value.",
    "answer": "(D) Unbounded",
    "steps": [
      "Partial fractions giveY=−1/s+1/(s−1).",
      "Thus y(t)=(eᵗ−1)u(t), which grows without bound.",
      "Do not use the final-value theorem atzero: sY(s) has a right-half-plane pole at+1, violating its stability condition."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−1",
        "0",
        "1",
        "Unbounded"
      ]
    }
  },
  {
    "id": "g07-17",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "comm",
    "number": 17,
    "ref": "GATE 2007 · Q17",
    "file": "EC2007.pdf",
    "page": 4,
    "prompt": "Which listed autocorrelation property is not generally true for a real WSS process?",
    "answer": "(C) R(τ)=−R(−τ)",
    "steps": [
      "Real WSS autocorrelation is even:R(τ)=R(−τ).",
      "It also satisfies|R(τ)|≤R(0), andR(0) is mean-square value.",
      "Odd symmetry is not a general autocorrelation property, soC is the requested exception."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Even symmetry",
        "|R(τ)|≤R(0)",
        "Odd symmetry",
        "R(0)=mean square"
      ]
    }
  },
  {
    "id": "g07-18",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "comm",
    "number": 18,
    "ref": "GATE 2007 · Q18",
    "file": "EC2007.pdf",
    "page": 4,
    "prompt": "Which property always holds for a real WSS process power spectral densityS(f)?",
    "answer": "(B) S(f)≥0",
    "steps": [
      "PSD represents nonnegative power distributed byfrequency.",
      "For any frequency band, the corresponding mean-square contribution cannot be negative.",
      "Therefore the PSD is nonnegative; it need not peak atDC or integrate tozero."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "S(0)≥S(f)",
        "S(f)≥0",
        "S(−f)=−S(f)",
        "Integral equalszero"
      ]
    }
  },
  {
    "id": "g07-19",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "em",
    "number": 19,
    "ref": "GATE 2007 · Q19",
    "file": "EC2007.pdf",
    "page": 5,
    "prompt": "A plane wave of wavelength λ travels at 30° to the positive x-axis and 90° to the positive y-axis. Which listed electric-field expression is consistent with this direction?",
    "answer": "(A) E = ŷ E₀ exp[j(ωt − √3πx/λ − πz/λ)]",
    "steps": [
      "For exp[j(ωt − k·r)], the direction cosines give kx = (2π/λ) cos 30° = √3π/λ and ky = 0.",
      "The magnitude |k| = 2π/λ then gives |kz| = π/λ. Option A has the required positive kx and zero ky.",
      "Option C reverses both x and z components, so its direction makes 150° with +x. Options B and D have kx = π/λ, corresponding to 60° with +x. Thus A is the matching listed expression."
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
    "figure": "pyq-figures/g07-19.png",
    "figureAlt": "Original GATE 2007 Q19 diagram and choices"
  },
  {
    "id": "g07-20",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "em",
    "number": 20,
    "ref": "GATE 2007 · Q20",
    "file": "EC2007.pdf",
    "page": 5,
    "prompt": "State the Ampère–Maxwell integral relation for closed curveC bounding surfaceS.",
    "answer": "(D) ∮C H·dl=∬S(J+∂D/∂t)·dS",
    "steps": [
      "The curl law is∇×H=J+∂D/∂t.",
      "Integrate over an open surfaceS bounded byC.",
      "Stokes’s theorem turns the left side into circulation∮C H·dl; both conduction anddisplacement currents crossS."
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
    "figure": "pyq-figures/g07-20.png",
    "figureAlt": "Original GATE 2007 Q20 diagram and choices"
  },
  {
    "id": "g07-21",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "math",
    "number": 21,
    "ref": "GATE 2007 · Q21",
    "file": "EC2007.pdf",
    "page": 5,
    "prompt": "M nonzero mutually orthogonal vectors and their negatives form a collection of2M vectors. What is the dimension of their span?",
    "answer": "(C) M",
    "steps": [
      "Nonzero mutually orthogonal vectors are linearly independent.",
      "Their originalM vectors therefore span anM-dimensional space.",
      "Each negative is already a scalar multiple of an original vector, adding no new dimension."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2M",
        "M+1",
        "M",
        "Depends on vector choice"
      ]
    }
  },
  {
    "id": "g07-22",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "math",
    "number": 22,
    "ref": "GATE 2007 · Q22",
    "file": "EC2007.pdf",
    "page": 5,
    "prompt": "Find the maximum off(x)=x²−x−2 on[−4,4].",
    "answer": "(A) 18",
    "steps": [
      "The quadratic is convex, so its maximum on a closed interval occurs at an endpoint.",
      "f(−4)=16+4−2=18, whilef(4)=16−4−2=10.",
      "Choose the larger endpoint value,18."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "18",
        "10",
        "−2.25",
        "Indeterminate"
      ]
    }
  },
  {
    "id": "g07-23",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "math",
    "number": 23,
    "ref": "GATE 2007 · Q23",
    "file": "EC2007.pdf",
    "page": 5,
    "prompt": "P(fail paper1)=0.3,P(fail paper2)=0.2, andP(fail1|fail2)=0.6. FindP(fail both).",
    "answer": "(C) 0.12",
    "steps": [
      "Use the definition of conditional probability.",
      "P(fail1∩fail2)=P(fail1|fail2)P(fail2).",
      "The product is0.6×0.2=0.12."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.5",
        "0.18",
        "0.12",
        "0.06"
      ]
    }
  },
  {
    "id": "g07-24",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "math",
    "number": 24,
    "ref": "GATE 2007 · Q24",
    "file": "EC2007.pdf",
    "page": 6,
    "prompt": "Solvek²y″=y−y2 withy(0)=y1 andy(∞)=y2, takingk>0.",
    "answer": "(D) y=(y1−y2)e^(−x/k)+y2",
    "steps": [
      "Setu=y−y2 so thatk²u″=u.",
      "The general solution isu=Ae^(x/k)+Be^(−x/k). Finiteness anddecay atinfinity requireA=0.",
      "Atx=0, B=y1−y2; substitute back to obtainD."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(y1−y2)e^(−x/k²)+y2",
        "(y2−y1)e^(−x/k)+y1",
        "(y1−y2)sinh(x/k)+y1",
        "(y1−y2)e^(−x/k)+y2"
      ]
    }
  },
  {
    "id": "g07-25",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "math",
    "number": 25,
    "ref": "GATE 2007 · Q25",
    "file": "EC2007.pdf",
    "page": 6,
    "prompt": "Use one Newton–Raphson step fromx0=2 forf(x)=x³−x²+4x−4.",
    "answer": "(B) 4/3",
    "steps": [
      "Compute f(2)=8−4+8−4=8.",
      "The derivative is3x²−2x+4, givingf′(2)=12.",
      "Newton’s step isx1=2−8/12=4/3."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "2/3",
        "4/3",
        "1",
        "3/2"
      ]
    }
  },
  {
    "id": "g07-26",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "signals",
    "number": 26,
    "ref": "GATE 2007 · Q26",
    "file": "EC2007.pdf",
    "page": 6,
    "prompt": "Three equal-duration piecewise-constant waveforms have thirds(2,0,−2),(1,−1,2),(1,−3,1). Which pair is orthogonal?",
    "answer": "(B) f1 andf3",
    "steps": [
      "For equal thirds, the inner product isT/3 times the dot product ofthe three levels.",
      "f1·f3=2×1+0×(−3)+(−2)×1=0.",
      "The other pair dot products are−2 and6, so onlyf1,f3 are orthogonal."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "f1,f2 orthogonal",
        "f1,f3 orthogonal",
        "f2,f3 orthogonal",
        "f1,f2 orthonormal"
      ]
    },
    "figure": "pyq-figures/g07-26.png",
    "figureAlt": "Original GATE 2007 Q26 diagram and choices"
  },
  {
    "id": "g07-27",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "math",
    "number": 27,
    "ref": "GATE 2007 · Q27",
    "file": "EC2007.pdf",
    "page": 6,
    "prompt": "Evaluate∮D ds/(s²−1) for the positively oriented right semicircular contour ofradius2 shown.",
    "answer": "(A) jπ",
    "steps": [
      "Poles are at±1; only+1 lies within the right semicircle.",
      "The residue at+1 is lim[(s−1)/(s²−1)]=1/2.",
      "For the indicated counterclockwise contour, residue theorem gives2πj×1/2=jπ."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "jπ",
        "−jπ",
        "−π",
        "π"
      ]
    },
    "figure": "pyq-figures/g07-27.png",
    "figureAlt": "Original GATE 2007 Q27 diagram and choices"
  },
  {
    "id": "g07-28",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "networks",
    "number": 28,
    "ref": "GATE 2007 · Q28",
    "file": "EC2007.pdf",
    "page": 7,
    "prompt": "Two series-resonant RLC filters have equalR,C2=4C1 andL2=L1/4. Find3 dB bandwidth ratioB1/B2.",
    "answer": "(D) 1/4",
    "steps": [
      "A series-resonant filter’s angular3 dB bandwidth isR/L.",
      "ThusB1/B2=(R/L1)/(R/L2)=L2/L1.",
      "SinceL2=L1/4, the ratio is1/4."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "4",
        "1",
        "1/2",
        "1/4"
      ]
    },
    "figure": "pyq-figures/g07-28.png",
    "figureAlt": "Original GATE 2007 Q28 diagram and choices"
  },
  {
    "id": "g07-29",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "networks",
    "number": 29,
    "ref": "GATE 2007 · Q29",
    "file": "EC2007.pdf",
    "page": 7,
    "prompt": "Find the Thévenin voltage andresistance atX–Y for the dependent-source circuit shown.",
    "answer": "(D) 4 V,2 Ω",
    "steps": [
      "SetY=0 andX=V. The labelled1 Ω current isi=V, so the dependent source top is2V.",
      "KCL atX gives(V−2V)/1+V/1+V/2=2, henceVth=4 V.",
      "Deactivate only the independent2 A source. A test voltageV draws−V+V+V/2=V/2, givingRth=2 Ω."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "4/3 V,2 Ω",
        "4 V,2/3 Ω",
        "4/3 V,2/3 Ω",
        "4 V,2 Ω"
      ]
    },
    "figure": "pyq-figures/g07-29.png",
    "figureAlt": "Original GATE 2007 Q29 diagram and choices"
  },
  {
    "id": "g07-30",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "networks",
    "number": 30,
    "ref": "GATE 2007 · Q30",
    "file": "EC2007.pdf",
    "page": 7,
    "prompt": "A10 V source drives a20 kΩ/20 kΩ divider with4 μF capacitor across its lower resistor, initially at0 V. Find capacitor current fort>0.",
    "answer": "(A) 0.50e^(−25t) mA",
    "steps": [
      "The Thévenin voltage is5 V andresistance is20k||20k=10 kΩ.",
      "Time constant isRthC=10000×4×10⁻⁶=0.04 s.",
      "Charging current is(Vth/Rth)e^(−t/τ)=0.5e^(−25t) mA."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.50e^(−25t)",
        "0.25e^(−25t)",
        "0.50e^(−12.5t)",
        "0.25e^(−6.25t)"
      ]
    },
    "figure": "pyq-figures/g07-30.png",
    "figureAlt": "Original GATE 2007 Q30 diagram and choices"
  },
  {
    "id": "g07-31",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "networks",
    "number": 31,
    "ref": "GATE 2007 · Q31",
    "file": "EC2007.pdf",
    "page": 7,
    "prompt": "A5∠30° A current source drives parallel branches5−j3 Ω and5+j3 Ω. FindVAB.",
    "answer": "(D) 17∠30° V",
    "steps": [
      "The branch impedances are conjugates. Their parallel equivalent is[(5−j3)(5+j3)]/10=34/10=3.4 Ω.",
      "This equivalent is purely real, so voltage has the source-current phase.",
      "VAB=5∠30°×3.4=17∠30° V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "5∠30°",
        "12.5∠30°",
        "17∠30°"
      ]
    },
    "figure": "pyq-figures/g07-31.png",
    "figureAlt": "Original GATE 2007 Q31 diagram and choices"
  },
  {
    "id": "g07-32",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "devices",
    "number": 32,
    "ref": "GATE 2007 · Q32",
    "file": "EC2007.pdf",
    "page": 8,
    "prompt": "A junction hasVbi=0.8 V anddepletion width2 μm atreverse bias1.2 V. Find width atreverse bias7.2 V.",
    "answer": "(A) 4 μm",
    "steps": [
      "For an abrupt junction atfixed doping, W∝√(Vbi+VR).",
      "The squared-width ratio is(0.8+7.2)/(0.8+1.2)=8/2=4.",
      "Width therefore doubles from2 to4 μm."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "4 μm",
        "4.9 μm",
        "8 μm",
        "12 μm"
      ]
    }
  },
  {
    "id": "g07-33",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "devices",
    "number": 33,
    "ref": "GATE 2007 · Q33",
    "file": "EC2007.pdf",
    "page": 8,
    "prompt": "Match normal operating bias for Zener diode, solar cell, laser diode andavalanche photodiode.",
    "answer": "(B) Reverse,forward,forward,reverse",
    "steps": [
      "A regulating Zener operates in reverse breakdown; an avalanche photodiode is also reverse-biased.",
      "A laser diode requires forward injection.",
      "An illuminated solar cell supplying power has forward junction voltage, although its net output current reverses the passive sign convention. Hence the sequence isreverse,forward,forward,reverse."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "F,R,F,R",
        "R,F,F,R",
        "R,R,F,F",
        "R,F,R,R"
      ]
    }
  },
  {
    "id": "g07-34",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "devices",
    "number": 34,
    "ref": "GATE 2007 · Q34",
    "file": "EC2007.pdf",
    "page": 8,
    "prompt": "A BJT hasβ=50 andemitter injection efficiencyγ=0.995. Find base transport factor.",
    "answer": "(B) Approximately0.985",
    "steps": [
      "Common-base gain isα=β/(β+1)=50/51.",
      "The transport relation isα=γ αT.",
      "ThusαT=(50/51)/0.995≈0.9853."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.980",
        "0.985",
        "0.990",
        "0.995"
      ]
    }
  },
  {
    "id": "g07-35",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "devices",
    "number": 35,
    "ref": "GATE 2007 · Q35",
    "file": "EC2007.pdf",
    "page": 8,
    "prompt": "Match BJT,MOS capacitor,laser diode andJFET to Early effect,flat-band voltage,population inversion andpinch-off voltage.",
    "answer": "(C) P–3,Q–4,R–1,S–2",
    "steps": [
      "A BJT’s collector-width modulation is the Early effect:3. A MOS capacitor is characterized by flat-band voltage:4.",
      "Laser gain requires population inversion:1.",
      "A JFET channel is characterized by pinch-off voltage:2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "3,1,4,2",
        "1,4,3,2",
        "3,4,1,2",
        "3,2,1,4"
      ]
    }
  },
  {
    "id": "g07-36",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "analog",
    "number": 36,
    "ref": "GATE 2007 · Q36",
    "file": "EC2007.pdf",
    "page": 8,
    "prompt": "The shown ideal op-amp has1 V through1 kΩ to−,2 kΩ feedback, and a1 kΩ/1 kΩ divider from1 V to+. FindVo.",
    "answer": "(C) −0.5 V",
    "steps": [
      "The noninverting divider givesV+=0.5 V. Negative feedback makesV−=0.5 V.",
      "Input current at− is(1−0.5)/1k=0.5 mA, which must flow through the2 kΩ feedback resistor.",
      "Thus(0.5−Vo)/2k=0.5 mA, yieldingVo=−0.5 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−2 V",
        "−1 V",
        "−0.5 V",
        "0.5 V"
      ]
    },
    "figure": "pyq-figures/g07-36.png",
    "figureAlt": "Original GATE 2007 Q36 diagram and choices"
  },
  {
    "id": "g07-37",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "analog",
    "number": 37,
    "ref": "GATE 2007 · Q37",
    "file": "EC2007.pdf",
    "page": 9,
    "prompt": "For the shown NPN circuit,VB=2 V,VCC=10 V,RC=10 kΩ,RE=1 kΩ,VBE=0.7 V andβ is very large. Find operating mode.",
    "answer": "(B) Saturation",
    "steps": [
      "An active-region assumption givesVE=2−0.7=1.3 V andIE≈IC=1.3 mA.",
      "It would requireVC=10−1.3mA×10k=−3 V, below the emitter, contradicting forward-active operation.",
      "The base is strongly driven and the collector cannot support that current; the transistor is saturated."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Cutoff",
        "Saturation",
        "Normal active",
        "Reverse active"
      ]
    },
    "figure": "pyq-figures/g07-37.png",
    "figureAlt": "Original GATE 2007 Q37 diagram and choices"
  },
  {
    "id": "g07-38",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "analog",
    "number": 38,
    "ref": "GATE 2007 · Q38",
    "file": "EC2007.pdf",
    "page": 9,
    "prompt": "An ideal log amplifier uses diode lawI=Is exp(V/VT). OutputsVo1,Vo2 correspond to positive inputs2 V and4 V. Find their relation.",
    "answer": "(D) Vo1−Vo2=VT ln2",
    "steps": [
      "Virtual ground sets diode current toVi/R.",
      "The diode forward voltage is−Vo, soVo=−VT ln[Vi/(RIs)].",
      "DoublingVi lowersVo byVTln2, givingVo1−Vo2=VTln2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Vo2=√2Vo1",
        "Vo2=e²Vo1",
        "Vo2=Vo1ln2",
        "Vo1−Vo2=VTln2"
      ]
    },
    "figure": "pyq-figures/g07-38.png",
    "figureAlt": "Original GATE 2007 Q38 diagram and choices"
  },
  {
    "id": "g07-39",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "devices",
    "number": 39,
    "ref": "GATE 2007 · Q39",
    "file": "EC2007.pdf",
    "page": 9,
    "prompt": "A symmetric5 V CMOS inverter has input2.5 V,kn=kp=40 μA/V² and|VT|=1 V. Find its static current.",
    "answer": "(C) 45 μA",
    "steps": [
      "Symmetry places the output near2.5 V; both devices have overdrive2.5−1=1.5 V.",
      "Each meets saturation sinceVDS andVSD are2.5 V≥1.5 V.",
      "The current is(1/2)knVov²=0.5×40×1.5²=45 μA."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "25 μA",
        "45 μA",
        "90 μA"
      ]
    },
    "figure": "pyq-figures/g07-39.png",
    "figureAlt": "Original GATE 2007 Q39 diagram and choices"
  },
  {
    "id": "g07-40",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "analog",
    "number": 40,
    "ref": "GATE 2007 · Q40",
    "file": "EC2007.pdf",
    "page": 10,
    "prompt": "An unloaded Zener regulator has7 V knee voltage, negligible knee current, dynamic resistance10 Ω andseries resistance200 Ω. Find output range for input10–16 V.",
    "answer": "(C) Approximately7.14–7.43 V",
    "steps": [
      "Use the piecewise-linear modelVo=7+10Iz.",
      "The series equation givesIz=(Vi−7)/(200+10).",
      "AtVi=10 and16 V, Vo is7+30/210=7.1429 V and7+90/210=7.4286 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "7.00–7.29 V",
        "7.14–7.29 V",
        "7.14–7.43 V",
        "7.29–7.43 V"
      ]
    },
    "figure": "pyq-figures/g07-40.png",
    "figureAlt": "Original GATE 2007 Q40 diagram and choices"
  },
  {
    "id": "g07-41",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "digital",
    "number": 41,
    "ref": "GATE 2007 · Q41",
    "file": "EC2007.pdf",
    "page": 10,
    "prompt": "MinimizeY=Σm(1,6,9,12) for variable orderA,B,C,D.",
    "answer": "(D) A̅BCD̅+B̅C̅D+ABC̅D̅",
    "steps": [
      "Minterms1 and9 differ only inA andcombine toB̅C̅D.",
      "Minterm6 has no adjacent listed minterm, so it remainsA̅BCD̅.",
      "Minterm12 is also isolated andremainsABC̅D̅. Their sum is optionD."
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
    "figure": "pyq-figures/g07-41.png",
    "figureAlt": "Original GATE 2007 Q41 diagram and choices"
  },
  {
    "id": "g07-42",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "digital",
    "number": 42,
    "ref": "GATE 2007 · Q42",
    "file": "EC2007.pdf",
    "page": 10,
    "prompt": "For the standard TTL inverter shown with input2.5 V, identifyQ1,Q2,Q3,Q4 operating modes in the usual switched-transistor model.",
    "answer": "(B) Reverse active,saturated,saturated,cutoff",
    "steps": [
      "A high input reverse-biasesQ1’s emitter junction while its collector junction injects the next stage, soQ1 is reverse active.",
      "The resulting drive turns on the phase splitterQ2 andstrongly drives the pull-downQ3; both are saturated in the standard low-output state.",
      "The low phase-splitter collector voltage removes drive from the pull-upQ4, which is off."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Reverse active,active,saturated,off",
        "Reverse active,saturated,saturated,off",
        "Active,off,off,saturated",
        "Saturated,saturated,saturated,active"
      ]
    },
    "sources": [
      "https://ece.uprm.edu/~ducoudray/files/ss-ttl2.pdf"
    ],
    "figure": "pyq-figures/g07-42.png",
    "figureAlt": "Original GATE 2007 Q42 diagram and choices"
  },
  {
    "id": "g07-43",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "digital",
    "number": 43,
    "ref": "GATE 2007 · Q43",
    "file": "EC2007.pdf",
    "page": 11,
    "prompt": "Two cascaded4:1 MUXs each have data inputs[0,1,1,0]. The first selectsA,B; its output andC select the second. FindX.",
    "answer": "(A) A XOR B XOR C",
    "steps": [
      "The pattern[0,1,1,0] implements XOR ofits two select bits.",
      "First outputY=A XOR B.",
      "The second output isY XOR C=A XOR B XOR C, whose odd-parity minterms are1,2,4,7, matchingA."
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
    "figure": "pyq-figures/g07-43.png",
    "figureAlt": "Original GATE 2007 Q43 diagram and choices"
  },
  {
    "id": "g07-44",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "digital",
    "number": 44,
    "ref": "GATE 2007 · Q44",
    "file": "EC2007.pdf",
    "page": 11,
    "prompt": "Apply(X,Y)=(0,1),(0,0),(1,1) in sequence to the cross-coupled NAND latch. Find stable output behavior.",
    "answer": "(C) (P,Q)=(1,0), then(1,1), then either complementary state",
    "steps": [
      "WithX=0, P isforced1; whenY=1, Q=NOT P=0.",
      "With both inputs0, both NAND outputs areforced1, the forbidden latch condition.",
      "Releasing both inputs to1 from that condition does not specify which side wins; either(1,0) or(0,1) can settle, depending on delays."
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
    "figure": "pyq-figures/g07-44.png",
    "figureAlt": "Original GATE 2007 Q44 diagram and choices"
  },
  {
    "id": "g07-45",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "digital",
    "number": 45,
    "ref": "GATE 2007 · Q45",
    "file": "EC2007.pdf",
    "page": 11,
    "prompt": "The two-D-flip-flop counter hasD0=NOR(Q0,Q1),D1=Q0. StartingQ1Q0=00, find the sequence.",
    "answer": "(B) 00→01→10→00→…",
    "steps": [
      "At00, D0=1,D1=0, so the next state is01.",
      "At01, D0=0,D1=1, giving10.",
      "At10, both next-state inputs are0, returning to00."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "00,01,10,11,00",
        "00,01,10,00,01",
        "00,01,11,00,01",
        "00,10,11,00,10"
      ]
    },
    "figure": "pyq-figures/g07-45.png",
    "figureAlt": "Original GATE 2007 Q45 diagram and choices"
  },
  {
    "id": "g07-46",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "digital",
    "number": 46,
    "ref": "GATE 2007 · Q46",
    "file": "EC2007.pdf",
    "page": 12,
    "prompt": "An8255 I/O decoder asserts active-lowCS whenA7…A3 andIO/M areall1; A1,A0 select its registers andA2 isnot decoded. Find selected8-bit port range.",
    "answer": "(C) F8H–FFH",
    "steps": [
      "The decoded address bits areA7…A3=11111.",
      "The remainingA2,A1,A0 maytake any three-bit value000…111.",
      "Thus selected port addresses are11111000…11111111, orF8H–FFH."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "F8H–FBH",
        "F8H–FCH",
        "F8H–FFH",
        "F0H–F7H"
      ]
    },
    "figure": "pyq-figures/g07-46.png",
    "figureAlt": "Original GATE 2007 Q46 diagram and choices"
  },
  {
    "id": "g07-47",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "signals",
    "number": 47,
    "ref": "GATE 2007 · Q47",
    "file": "EC2007.pdf",
    "page": 12,
    "prompt": "Find the one-sided3 dB bandwidth ofx(t)=e^(−t)u(t).",
    "answer": "(A) 1/(2π) Hz",
    "steps": [
      "The Fourier transform isX(f)=1/(1+j2πf).",
      "Its squared magnitude relative toDC is1/[1+(2πf)²].",
      "Set it to1/2:2πf=1, givingf3dB=1/(2π) Hz."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1/(2π) Hz",
        "√(√2−1)/(2π) Hz",
        "Infinite",
        "1 Hz"
      ]
    }
  },
  {
    "id": "g07-48",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "signals",
    "number": 48,
    "ref": "GATE 2007 · Q48",
    "file": "EC2007.pdf",
    "page": 12,
    "prompt": "Which property describes an ideal Hilbert transformer?",
    "answer": "(B) Noncausal",
    "steps": [
      "Its ideal impulse response ish(t)=1/(πt), interpreted in the principal-value sense.",
      "That response extends over negative as well as positive time.",
      "Therefore it is noncausal; it is linear andtime-invariant, with an all-pass magnitude rather than low-pass response."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Nonlinear",
        "Noncausal",
        "Time-varying",
        "Low-pass"
      ]
    }
  },
  {
    "id": "g07-49",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "signals",
    "number": 49,
    "ref": "GATE 2007 · Q49",
    "file": "EC2007.pdf",
    "page": 12,
    "prompt": "Find the causal step response forH(f)=5/(1+j10πf).",
    "answer": "(B) 5(1−e^(−t/5))u(t)",
    "steps": [
      "Sincej10πf=5s, the transfer isH(s)=5/(1+5s).",
      "Multiply by1/s for unit-step input.",
      "Partial fractions giveY(s)=5/s−5/(s+1/5), leading to5(1−e^(−t/5))u(t)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "5(1−e^(−5t))u(t)",
        "5(1−e^(−t/5))u(t)",
        "(1/5)(1−e^(−5t))u(t)",
        "(1/5)(1−e^(−t/5))u(t)"
      ]
    }
  },
  {
    "id": "g07-50",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "signals",
    "number": 50,
    "ref": "GATE 2007 · Q50",
    "file": "EC2007.pdf",
    "page": 12,
    "prompt": "A five-sample sequence hasx[−3]=x[−2]=x[1]=1,x[−1]=0,x[0]=5. Find∫−ππX(eʲω)dω.",
    "answer": "(B) 10π",
    "steps": [
      "The inverse DTFT atn=0 isx[0]=(1/2π)∫−ππX(eʲω)dω.",
      "All nonzero-index exponential terms integrate tozero over a full2π interval.",
      "Hence the integral is2πx[0]=10π."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "5",
        "10π",
        "16π",
        "5+j10π"
      ]
    }
  },
  {
    "id": "g07-51",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "signals",
    "number": 51,
    "ref": "GATE 2007 · Q51",
    "file": "EC2007.pdf",
    "page": 13,
    "prompt": "X(z)=0.5/(1−2z⁻¹), andits ROC includes the unit circle. Findx[0].",
    "answer": "(B) 0",
    "steps": [
      "The pole is atz=2; an ROC containing|z|=1 must be|z|<2.",
      "That ROC selects the left-sided sequence−0.5·2ⁿu[−n−1].",
      "Its support ends atn=−1, sox[0]=0."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−0.5",
        "0",
        "0.25",
        "0.5"
      ]
    }
  },
  {
    "id": "g07-52",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "control",
    "number": 52,
    "ref": "GATE 2007 · Q52",
    "file": "EC2007.pdf",
    "page": 13,
    "prompt": "A unity-feedback loop hasPD controllerKp+KDs andplant100/[s(s+10)]. ForKv=1000 andζ=0.5, findKp,KD.",
    "answer": "(B) Kp=100,KD=0.9",
    "steps": [
      "Velocity constant islim[s→0]sG(s)=10Kp, soKp=100.",
      "The characteristic polynomial iss²+(10+100KD)s+100Kp. Thusωn=√10000=100.",
      "Require2ζωn=100=10+100KD, givingKD=0.9."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "100,0.09",
        "100,0.9",
        "10,0.09",
        "10,0.9"
      ]
    },
    "figure": "pyq-figures/g07-52.png",
    "figureAlt": "Original GATE 2007 Q52 diagram and choices"
  },
  {
    "id": "g07-53",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "control",
    "number": 53,
    "ref": "GATE 2007 · Q53",
    "file": "EC2007.pdf",
    "page": 13,
    "prompt": "Use dominant poles to approximate5/[(s+5)(s²+s+1)] by a second-order transfer.",
    "answer": "(D) 1/(s²+s+1)",
    "steps": [
      "The quadratic poles are−0.5±j√3/2, much closer to the imaginary axis than−5.",
      "Near those slow modes, replace the fast factor(s+5) by its low-frequency value5.",
      "The numerator5 cancels this factor, preservingDC gain andleaving1/(s²+s+1)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1/[(s+5)(s+1)]",
        "5/[(s+5)(s+1)]",
        "5/(s²+s+1)",
        "1/(s²+s+1)"
      ]
    }
  },
  {
    "id": "g07-54",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "control",
    "number": 54,
    "ref": "GATE 2007 · Q54",
    "file": "EC2007.pdf",
    "page": 13,
    "prompt": "Which listed lead compensator stabilizes unity negative feedback aroundG(s)=1/(s²−1)?",
    "answer": "(C) 10(s+2)/(s+10)",
    "steps": [
      "For candidateC, the characteristic polynomial is(s²−1)(s+10)+10(s+2)=s³+10s²+9s+10.",
      "The cubic Routh conditions arepositive coefficients and10×9>10, both satisfied.",
      "Its zero−2 precedes its pole−10 in frequency, confirminglead compensation without cancelling the unstable plant pole."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10(s−1)/(s+2)",
        "10(s+4)/(s+2)",
        "10(s+2)/(s+10)",
        "2(s+2)/(s+10)"
      ]
    }
  },
  {
    "id": "g07-55",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "control",
    "number": 55,
    "ref": "GATE 2007 · Q55",
    "file": "EC2007.pdf",
    "page": 13,
    "prompt": "For open-loopK/[s(s²+7s+12)], findK that places a closed-loop pole at−1+j.",
    "answer": "(D) 10",
    "steps": [
      "The pole condition isK=−s(s+3)(s+4).",
      "At s=−1+j,(s+3)(s+4)=(2+j)(3+j)=5+5j.",
      "Multiplying by−1+j gives−10; the leadingminus therefore givesK=10."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "4",
        "5.5",
        "6.5",
        "10"
      ]
    }
  },
  {
    "id": "g07-56",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "control",
    "number": 56,
    "ref": "GATE 2007 · Q56",
    "file": "EC2007.pdf",
    "page": 14,
    "prompt": "IdentifyG(s) from the asymptotic Bode plot: slope−20 dB/decade beforeω=1,−40 after1,−60 after20, with60 dB at0.1 rad/s.",
    "answer": "(D) 100/[s(s+1)(1+0.05s)]",
    "steps": [
      "Initial−20 dB/decade slope indicates an integrator. Additional slope changes indicate poles at1 and20 rad/s.",
      "In normalized form useK/[s(1+s)(1+s/20)].",
      "Atω=0.1, low-frequency asymptote isK/0.1=1000, soK=100, matchingD."
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
    "figure": "pyq-figures/g07-56.png",
    "figureAlt": "Original GATE 2007 Q56 diagram and choices"
  },
  {
    "id": "g07-57",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "control",
    "number": 57,
    "ref": "GATE 2007 · Q57",
    "file": "EC2007.pdf",
    "page": 14,
    "prompt": "A DC servo hasω̇=−ω+ia andi̇a=−ω−10ia+10u. FindΩ(s)/U(s) withzero initial state.",
    "answer": "(A) 10/(s²+11s+11)",
    "steps": [
      "First equation givesIa=(s+1)Ω.",
      "Substitute into the second:s(s+1)Ω=−Ω−10(s+1)Ω+10U.",
      "Collecting terms gives(s²+11s+11)Ω=10U."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "10/(s²+11s+11)",
        "1/(s²+11s+11)",
        "(10s+10)/(s²+11s+11)",
        "1/(s²+s+1)"
      ]
    }
  },
  {
    "id": "g07-58",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "comm",
    "number": 58,
    "ref": "GATE 2007 · Q58",
    "file": "EC2007.pdf",
    "page": 14,
    "prompt": "How can slope-overload distortion in delta modulation be reduced, other parameters fixed?",
    "answer": "(D) Increase step size",
    "steps": [
      "The staircase can follow a maximum slope ofapproximatelyΔfs.",
      "Slope overload occurs when the input changes faster than that limit.",
      "IncreasingΔ raises the tracking slope; it trades against increased granular noise."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Decrease step size",
        "Decrease granular noise",
        "Decrease sample rate",
        "Increase step size"
      ]
    }
  },
  {
    "id": "g07-59",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "comm",
    "number": 59,
    "ref": "GATE 2007 · Q59",
    "file": "EC2007.pdf",
    "page": 14,
    "prompt": "Forp(t)=sin(4πWt)/[4πWt(1−16W²t²)], find its limiting value att=1/(4W).",
    "answer": "(C) 0.5",
    "steps": [
      "Setx=4Wt, givingp=sinπx/[πx(1−x²)].",
      "Atx=1 both numerator anddenominator vanish. Apply l’Hôpital’s rule.",
      "The derivative ratio isπcosπ/[π(1−3)]=(−π)/(−2π)=1/2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−0.5",
        "0",
        "0.5",
        "Infinite"
      ]
    }
  },
  {
    "id": "g07-60",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "comm",
    "number": 60,
    "ref": "GATE 2007 · Q60",
    "file": "EC2007.pdf",
    "page": 15,
    "prompt": "A triangular basebandM(f) on[−B,B] entersy(t)=m(t)cos2πBt+Hilbert{m(t)}sin2πBt. SelectY(f).",
    "answer": "(A) Two inward-frequency ramps over[−B,0] and[0,B], zero atDC",
    "steps": [
      "The ideal Hilbert transform has frequency response−jsgnf.",
      "Adding the two mixer paths cancels the upper sideband andretains the lower sideband about carrierB.",
      "For positivef, Y(f)=M(f−B) only on0<f<B, rising fromzero toits edge maximum. Its real-signal mirror gives the negative-frequency ramp, matchingA."
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
    "figure": "pyq-figures/g07-60.png",
    "figureAlt": "Original GATE 2007 Q60 diagram and choices"
  },
  {
    "id": "g07-61",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "comm",
    "number": 61,
    "ref": "GATE 2007 · Q61",
    "file": "EC2007.pdf",
    "page": 15,
    "prompt": "Forindependent bit-error probabilityp, find the probability ofat mostone error in a blockofn bits.",
    "answer": "(C) (1−p)ⁿ+np(1−p)ⁿ⁻¹",
    "steps": [
      "Zero errors occur withprobability(1−p)ⁿ.",
      "Exactlyone error canoccur atany ofn positions, givingnp(1−p)ⁿ⁻¹.",
      "These cases aredisjoint, soadd them."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "pⁿ",
        "1−pⁿ",
        "np(1−p)ⁿ⁻¹+(1−p)ⁿ",
        "1−(1−p)ⁿ"
      ]
    }
  },
  {
    "id": "g07-62",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "comm",
    "number": 62,
    "ref": "GATE 2007 · Q62",
    "file": "EC2007.pdf",
    "page": 15,
    "prompt": "GSM provides8 time-slot channels per200 kHz carrier. An operator has5 MHz witha five-cell reuse pattern. Find maximum simultaneous channels percell.",
    "answer": "(B) 40",
    "steps": [
      "The allocation contains5MHz/200kHz=25 carriers.",
      "Withfive-cell reuse, eachcell receives25/5=5 carriers.",
      "At8 channels percarrier, a cell supports5×8=40 simultaneous channels."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "200",
        "40",
        "25",
        "5"
      ]
    }
  },
  {
    "id": "g07-63",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "comm",
    "number": 63,
    "ref": "GATE 2007 · Q63",
    "file": "EC2007.pdf",
    "page": 15,
    "prompt": "A DS-CDMA chip rate is1.2288×10⁶ chips/s. Forprocessing gainat least100, what data-rate condition holds?",
    "answer": "(A) Rb≤12.288×10³ bit/s",
    "steps": [
      "Processing gain ischip rate dividedbydata rate: Gp=Rc/Rb.",
      "RequireRc/Rb≥100.",
      "ThereforeRb≤Rc/100=12288 bit/s."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Atmost12.288 kbit/s",
        "Above12.288 kbit/s",
        "Exactly12.288 kbit/s",
        "Any ratebelow122.88 kbit/s"
      ]
    }
  },
  {
    "id": "g07-64",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "em",
    "number": 64,
    "ref": "GATE 2007 · Q64",
    "file": "EC2007.pdf",
    "page": 16,
    "prompt": "An air-filled3 cm×2 cm rectangular waveguide carriesTE20 at30 GHz. Find wave impedance forη0=377 Ω.",
    "answer": "(C) Approximately400 Ω",
    "steps": [
      "ForTE20, cutoff isfc=c/a=3×10⁸/0.03=10 GHz.",
      "TE wave impedance isη0/√[1−(fc/f)²].",
      "Thus ZTE=377/√(1−1/9)≈399.9 Ω."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "308 Ω",
        "355 Ω",
        "400 Ω",
        "461 Ω"
      ]
    }
  },
  {
    "id": "g07-65",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "em",
    "number": 65,
    "ref": "GATE 2007 · Q65",
    "file": "EC2007.pdf",
    "page": 16,
    "prompt": "In free space,Hx=(5√3/η0)cosψ andHy=(5/η0)sin(ψ+π/2). Find time-average power-flow density.",
    "answer": "(D) 50/η0 W/m²",
    "steps": [
      "Since sin(ψ+π/2)=cosψ, the two orthogonalH components are inphase.",
      "Their squared peak magnitude is(75+25)/η0²=100/η0².",
      "For a traveling plane wave,Savg=(η0/2)|Hpeak|²=50/η0 W/m²."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "η0/100",
        "100/η0",
        "50η0²",
        "50/η0"
      ]
    }
  },
  {
    "id": "g07-66",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "em",
    "number": 66,
    "ref": "GATE 2007 · Q66",
    "file": "EC2007.pdf",
    "page": 16,
    "prompt": "In an a×b rectangular guide,E is solely y-directed andproportional tosin(2πx/a)sin(ωt−βz). Identify the mode.",
    "answer": "(A) TE20",
    "steps": [
      "No longitudinal electric field isgiven, so the mode isTE.",
      "Two half-wave variations occur acrossx because the transverse factor issin(2πx/a), givingm=2.",
      "There is no y variation, givingn=0; the mode isTE20."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "TE20",
        "TM11",
        "TM20",
        "TE10"
      ]
    }
  },
  {
    "id": "g07-67",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "em",
    "number": 67,
    "ref": "GATE 2007 · Q67",
    "file": "EC2007.pdf",
    "page": 16,
    "prompt": "A50 Ω shunt resistor joins a50 Ω transmission line. Find the shunt element’s two-portS matrix withboth port references50 Ω.",
    "answer": "(C) [[−1/3,2/3],[2/3,−1/3]]",
    "steps": [
      "Normalized shunt admittance isy=Y Z0=(1/50)50=1.",
      "For a shunt admittance,S11=S22=−y/(2+y) andS21=S12=2/(2+y).",
      "Substitute y=1 to get reflections−1/3 andtransmissions2/3."
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
    "figure": "pyq-figures/g07-67.png",
    "figureAlt": "Original GATE 2007 Q67 diagram and choices"
  },
  {
    "id": "g07-68",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "em",
    "number": 68,
    "ref": "GATE 2007 · Q68",
    "file": "EC2007.pdf",
    "page": 17,
    "prompt": "A50 Ω quarter-wave feed splits into two50 Ω quarter-wave branches terminated in100 Ω and200 Ω. Find feed-input reflection coefficient.",
    "answer": "(D) 5/7",
    "steps": [
      "Quarter-wave transformation gives branch input resistances2500/100=25 Ω and2500/200=12.5 Ω.",
      "Their parallel combination is25/3 Ω. The feed quarter-wave section transforms it to2500/(25/3)=300 Ω.",
      "InputΓ=(300−50)/(300+50)=5/7."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−j7/5",
        "−5/7",
        "j5/7",
        "5/7"
      ]
    },
    "figure": "pyq-figures/g07-68.png",
    "figureAlt": "Original GATE 2007 Q68 diagram and choices"
  },
  {
    "id": "g07-69",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "em",
    "number": 69,
    "ref": "GATE 2007 · Q69",
    "file": "EC2007.pdf",
    "page": 17,
    "prompt": "A horizontal half-wave dipole isλ/2 above a perfectly conducting plane. Which approximate E-plane radiation pattern isshown?",
    "answer": "(B) Two oblique upper-half-plane lobes",
    "steps": [
      "Image theory replaces the ground by an oppositely directed image dipole.",
      "For elevation angle measured from the vertical, the array factor isproportional tosin(khcosθ)=sin(πcosθ).",
      "It vanishes vertically andalong theground, leaving two oblique lobes in the E-plane: sketchB."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Single vertical lobe",
        "Two oblique lobes",
        "Three lobes",
        "Two near-ground lobes"
      ]
    },
    "figure": "pyq-figures/g07-69.png",
    "figureAlt": "Original GATE 2007 Q69 diagram and choices"
  },
  {
    "id": "g07-70",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "em",
    "number": 70,
    "ref": "GATE 2007 · Q70",
    "file": "EC2007.pdf",
    "page": 17,
    "prompt": "Circularly polarized light isincident60° from the normal on a nonmagnetic air–dielectric interface. If the reflection islinearly polarized, findεr2.",
    "answer": "(D) 3",
    "steps": [
      "A circular wave contains equal orthogonal polarization components.",
      "A purely linear reflected wave arises at the Brewster angle, where the parallel reflection coefficient iszero.",
      "For air to a nonmagnetic dielectric,tanθB=√εr2. Henceεr2=tan²60°=3."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "√2",
        "√3",
        "2",
        "3"
      ]
    },
    "figure": "pyq-figures/g07-70.png",
    "figureAlt": "Original GATE 2007 Q70 diagram and choices"
  },
  {
    "id": "g07-71",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "devices",
    "number": 71,
    "ref": "GATE 2007 · Q71",
    "file": "EC2007.pdf",
    "page": 18,
    "prompt": "A MOS capacitor ofarea10⁻⁴ cm² has accumulation capacitance7 pF andεox=3.5×10⁻¹³ F/cm. Find oxide thickness.",
    "answer": "(A) 50 nm",
    "steps": [
      "In accumulation,the measured capacitance isapproximatelyCox.",
      "Use tox=εoxA/Cox=(3.5×10⁻¹³)(10⁻⁴)/(7×10⁻¹²)=5×10⁻⁶ cm.",
      "Convert1 cm=10⁷ nm, giving tox=50 nm."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "50 nm",
        "143 nm",
        "350 nm",
        "1 μm"
      ]
    },
    "figure": "pyq-figures/g07-71.png",
    "figureAlt": "Original GATE 2007 Q71 diagram and choices"
  },
  {
    "id": "g07-72",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "devices",
    "number": 72,
    "ref": "GATE 2007 · Q72",
    "file": "EC2007.pdf",
    "page": 18,
    "prompt": "For that MOS capacitor,Cox=7 pF,Cmin=1 pF,εSi=10⁻¹² F/cm andarea10⁻⁴ cm². Find maximum depletion width.",
    "answer": "(B) Approximately0.857 μm",
    "steps": [
      "The minimum high-frequency capacitance is the series combination ofCox andCdep,max.",
      "ThusCdep,max=CminCox/(Cox−Cmin)=7/6 pF.",
      "Wmax=εSiA/Cdep,max=8.571×10⁻⁵ cm=0.857 μm."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0.143 μm",
        "0.857 μm",
        "1 μm",
        "1.143 μm"
      ]
    }
  },
  {
    "id": "g07-73",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "devices",
    "number": 73,
    "ref": "GATE 2007 · Q73",
    "file": "EC2007.pdf",
    "page": 18,
    "prompt": "The high-frequency MOSC–V curve falls from highC atnegative gate voltage tolowC atpositive voltage. S1: substrate isn type. S2: positive oxidecharge shifts the curveleft. Which istrue?",
    "answer": "(C) S1 false,S2 true",
    "steps": [
      "Accumulation atnegative gate voltage means holes aremajority carriers, so the substrate isp type andS1 isfalse.",
      "Positive oxidecharge changes flat-band voltage byΔVFB=−Qox/Cox.",
      "That negative shift moves the curveleft, soS2 istrue."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Bothtrue",
        "OnlyS1",
        "OnlyS2",
        "Bothfalse"
      ]
    }
  },
  {
    "id": "g07-74",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "comm",
    "number": 74,
    "ref": "GATE 2007 · Q74",
    "file": "EC2007.pdf",
    "page": 19,
    "prompt": "Compare mean symbol energies ofthe two4-ary constellations shown, withorthonormal axes andequal symbol probabilities.",
    "answer": "(B) E1/E2=4",
    "steps": [
      "Constellation1 points have squared radii0,8a²,4a² and4a².",
      "Their mean energy is(0+8+4+4)a²/4=4a².",
      "Every constellation2 point has radiusa andenergy a², giving ratio4."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "4a²",
        "4",
        "2",
        "8"
      ]
    },
    "figure": "pyq-figures/g07-74.png",
    "figureAlt": "Original GATE 2007 Q74 diagram and choices"
  },
  {
    "id": "g07-75",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "comm",
    "number": 75,
    "ref": "GATE 2007 · Q75",
    "file": "EC2007.pdf",
    "page": 19,
    "prompt": "For the two constellations atthesame displayed scalea andsameAWGN density, which has lower symbolerror probability?",
    "answer": "(A) Constellation1",
    "steps": [
      "Translate constellation1 toits centre; such a common translation doesnotchange pairwise distances orML decision performance.",
      "Its nearest-neighbor distance is2a, compared with√2a for constellation2. It istherefore a√2-scaled version ofthe second square constellation.",
      "With equal noise butlarger distances,constellation1 has lower symbolerror probability. This comparison doesnotnormalize their unequal mean energies."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "Constellation1 lower",
        "Constellation1 higher",
        "Equal",
        "Depends onN0"
      ]
    }
  },
  {
    "id": "g07-76",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "analog",
    "number": 76,
    "ref": "GATE 2007 · Q76",
    "file": "EC2007.pdf",
    "page": 20,
    "prompt": "An ideal op-amp has equalR1 input/feedback resistors at−, andanR–C low-pass fromVi to+. FindVo/Vi.",
    "answer": "(A) (1−sRC)/(1+sRC)",
    "steps": [
      "The positive-input voltage isV+=Vi/(1+sRC).",
      "Equal inverting input/feedback resistors giveVo=2V+−Vi.",
      "Substitution yieldsVo/Vi=2/(1+sRC)−1=(1−sRC)/(1+sRC)."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "(1−sRC)/(1+sRC)",
        "(1+sRC)/(1−sRC)",
        "1/(1−sRC)",
        "1/(1+sRC)"
      ]
    },
    "figure": "pyq-figures/g07-76.png",
    "figureAlt": "Original GATE 2007 Q76 diagram and choices"
  },
  {
    "id": "g07-77",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "analog",
    "number": 77,
    "ref": "GATE 2007 · Q77",
    "file": "EC2007.pdf",
    "page": 20,
    "prompt": "ForH(s)=(1−sRC)/(1+sRC), find the limiting minimum andmaximum output phase relative tosinωt forω≥0.",
    "answer": "(C) −π and0",
    "steps": [
      "At s=jω,the numerator has phase−arctanωRC andthe denominator+arctanωRC.",
      "Thusφ=−2arctanωRC.",
      "Asω runsfrom0 toinfinity,the phase decreases from0 toward−π, so the limiting range is[−π,0]."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−π/2,+π/2",
        "0,+π/2",
        "−π,0",
        "−π/2,0"
      ]
    }
  },
  {
    "id": "g07-78",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "digital",
    "number": 78,
    "ref": "GATE 2007 · Q78",
    "file": "EC2007.pdf",
    "page": 20,
    "prompt": "8085 executesMVI A,B5H;MVI B,0EH;XRI69H;ADD B. FindA immediatelyafterADD.",
    "answer": "(B) EAH",
    "steps": [
      "XRI performsB5H XOR69H=DCH.",
      "RegisterB contains0EH.",
      "AddingDCH+0EH givesEAH, without8-bit overflow."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "C3H",
        "EAH",
        "DCH",
        "69H"
      ]
    }
  },
  {
    "id": "g07-79",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "digital",
    "number": 79,
    "ref": "GATE 2007 · Q79",
    "file": "EC2007.pdf",
    "page": 20,
    "prompt": "The program continuesANI9BH;CPI9FH;STA3010H. What areCY andZ afterSTA?",
    "answer": "(C) CY=1,Z=0",
    "steps": [
      "ANI computesEAH AND9BH=8AH.",
      "CPI compares bysubtracting9FH withoutalteringA. Since8AH<9FH,a borrow occurs,soCY=1; the result isnotzero,soZ=0.",
      "STA storesA anddoesnotchange these flags."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "0,0",
        "0,1",
        "1,0",
        "1,1"
      ]
    }
  },
  {
    "id": "g07-80",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "control",
    "number": 80,
    "ref": "GATE 2007 · Q80",
    "file": "EC2007.pdf",
    "page": 21,
    "prompt": "Forẋ=Ax,the initial states[1,−2]ᵀ and[1,−1]ᵀ producee^(−2t)[1,−2]ᵀ ande^(−t)[1,−1]ᵀ. Find eigenpairs.",
    "answer": "(A) (−1,[1,−1]ᵀ),(−2,[1,−2]ᵀ)",
    "steps": [
      "An eigenvector initial conditionv evolves asx(t)=e^(λt)v.",
      "The response along[1,−2] has exponential rate−2.",
      "The response along[1,−1] has rate−1, giving the two listed eigenpairs."
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
    "figure": "pyq-figures/g07-80.png",
    "figureAlt": "Original GATE 2007 Q80 diagram and choices"
  },
  {
    "id": "g07-81",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "control",
    "number": 81,
    "ref": "GATE 2007 · Q81",
    "file": "EC2007.pdf",
    "page": 21,
    "prompt": "FindA for those eigenpairs.",
    "answer": "(D) [[0,1],[−2,−3]]",
    "steps": [
      "LetA=[[a,b],[c,d]]. FromA[1,−1]ᵀ=−[1,−1]ᵀ, obtaina−b=−1 andc−d=1.",
      "FromA[1,−2]ᵀ=−2[1,−2]ᵀ, obtaina−2b=−2 andc−2d=4.",
      "Subtract to getb=1,d=−3,then a=0,c=−2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "[[0,1],[−1,1]]",
        "[[1,1],[−1,−2]]",
        "[[2,1],[−1,−1]]",
        "[[0,1],[−2,−3]]"
      ]
    }
  },
  {
    "id": "g07-82",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "comm",
    "number": 82,
    "ref": "GATE 2007 · Q82",
    "file": "EC2007.pdf",
    "page": 21,
    "prompt": "A6-level maximum-entropy quantizer has input densitya on[−1,1],b on[−5,−1]∪[1,5], andconsecutive decision boundaries−1,0,1. Finda,b.",
    "answer": "(A) a=1/6,b=1/12",
    "steps": [
      "Maximum output entropy for six possible levels requires equal bin probabilities1/6.",
      "The consecutive central bins[−1,0] and[0,1] each have width1,so a=1/6.",
      "Normalization gives2a+8b=1, henceb=1/12. The remaining side bins each have width2."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "1/6,1/12",
        "1/5,3/40",
        "1/4,1/16",
        "1/3,1/24"
      ]
    },
    "figure": "pyq-figures/g07-82.png",
    "figureAlt": "Original GATE 2007 Q82 diagram and choices"
  },
  {
    "id": "g07-83",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "comm",
    "number": 83,
    "ref": "GATE 2007 · Q83",
    "file": "EC2007.pdf",
    "page": 21,
    "prompt": "Use midpoint reconstruction in that6-bin quantizer. Findsignal-power/quantization-noise-power ratio.",
    "answer": "(D) 28",
    "steps": [
      "Signal power is2[(1/6)∫₀¹x²dx+(1/12)∫₁⁵x²dx]=7.",
      "The two central bins have width1 andthe fourouter bins width2. Eachhas probability1/6, so noise power is2(1/6)(1²/12)+4(1/6)(2²/12)=1/4.",
      "The ratio is7/(1/4)=28."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "152/9",
        "64/3",
        "76/3",
        "28"
      ]
    }
  },
  {
    "id": "g07-84",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "digital",
    "number": 84,
    "ref": "GATE 2007 · Q84",
    "file": "EC2007.pdf",
    "page": 22,
    "prompt": "For the shownR–2R DAC withVR=10 V,R=10 kΩ,find currenti in the far-right2R termination.",
    "answer": "(B) 62.5 μA",
    "steps": [
      "The op-amp inverting node isvirtualground,so every ladder2R end is atground potential.",
      "Working righttoleft,the ladder ismatched at eachsection andsuccessive nodevoltages halve:5 V,2.5 V,1.25 V.",
      "The far-right2R resistor carriesi=1.25/(20 kΩ)=62.5 μA."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "31.25 μA",
        "62.5 μA",
        "125 μA",
        "250 μA"
      ]
    },
    "figure": "pyq-figures/g07-84.png",
    "figureAlt": "Original GATE 2007 Q84 diagram and choices"
  },
  {
    "id": "g07-85",
    "paperId": "gate-2007",
    "exam": "gate",
    "topic": "digital",
    "number": 85,
    "ref": "GATE 2007 · Q85",
    "file": "EC2007.pdf",
    "page": 22,
    "prompt": "Find the sameDAC output voltage. The firstandthird ladder shuntbranches feed thevirtualground summing node; the feedbackresistor isR=10 kΩ.",
    "answer": "(C) −3.125 V",
    "steps": [
      "The selected branchvoltages are5 V and1.25 V. Their shuntresistances are2R=20 kΩ.",
      "They inject5/20k+1.25/20k=312.5 μA into the summingnode.",
      "The feedbackresistor producesVo=−RfIsum=−10000×312.5 μA=−3.125 V."
    ],
    "response": {
      "type": "MCQ",
      "choices": [
        "−0.781 V",
        "−1.562 V",
        "−3.125 V",
        "−6.250 V"
      ]
    }
  }
];
