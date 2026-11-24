export const gate2012Complete = [
  {
    "id": "g12-1",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "devices",
    "number": 1,
    "ref": "GATE 2012 · Booklet A · Q1",
    "file": "EC2012.pdf",
    "page": 2,
    "prompt": "At300 K,a transistor base current is1+0.1cos(10000πt) mA. Find its small-signal base-emitter resistance rπ.",
    "answer": "(C) 25 Ω",
    "steps": [
      "Use the DC operating current to evaluate small-signal parameters;the sinusoidal component is the perturbation.",
      "For a BJT,rπ=β/gm=VT/IB. Here IB=1 mA and the exam uses VT≈25 mV.",
      "Thus rπ=25 mV/1 mA=25 Ω."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Use the DC operating current to evaluate small-signal parameters;the sinusoidal component is the perturbation."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "For a BJT,rπ=β/gm=VT/IB. Here IB=1 mA and the exam uses VT≈25 mV."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Thus rπ=25 mV/1 mA=25 Ω."
            },
            {
              "equation": "r_π=frac{V_T}{I_B}=frac{25 mV}{1 mA}=25 Ω"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "250 Ω",
        "27.5 Ω",
        "25 Ω",
        "22.5 Ω"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-2",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "signals",
    "number": 2,
    "ref": "GATE 2012 · Booklet A · Q2",
    "file": "EC2012.pdf",
    "page": 2,
    "prompt": "For positive angular frequencies,a real stationary process has a triangular PSD of height6 from9000 to11000 rad/s,plus400δ(ω−10000). Find E[X²] and|E[X]|.",
    "answer": "(B) 6400/π and0",
    "steps": [
      "A real process has an even PSD,so the negative-frequency half is the mirror image.",
      "The positive triangle has area(1/2)×2000×6=6000;the impulse adds400. Total two-sided area is12800. Divide by2π for angular-frequency PSD.",
      "There is no impulse at zero frequency,so the mean is zero. The second moment is12800/(2π)=6400/π."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "A real process has an even PSD,so the negative-frequency half is the mirror image."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The positive triangle has area(1/2)×2000×6=6000;the impulse adds400. Total two-sided area is12800. Divide by2π for angular-frequency PSD."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "There is no impulse at zero frequency,so the mean is zero. The second moment is12800/(2π)=6400/π."
            },
            {
              "equation": "E[X^2]=frac{2(6000+400)}{2π}=frac{6400}{π};|E[X]|=0"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "6000/π,0",
        "6400/π,0",
        "6400/π,20/(π√2)",
        "6000/π,20/(π√2)"
      ]
    },
    "archivedKey": "B",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "figure": "pyq-figures/g12-2.svg",
    "figureAlt": "GATE 2012 Q2 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-3",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "comm",
    "number": 3,
    "ref": "GATE 2012 · Booklet A · Q3",
    "file": "EC2012.pdf",
    "page": 2,
    "prompt": "A real baseband link uses frequencies up to3500 Hz and raised-cosine pulses with75% excess bandwidth. Find maximum zero-ISI symbol rate.",
    "answer": "(C) 4000 symbols/s",
    "steps": [
      "Raised-cosine bandwidth is B=(1+α)Rs/2.",
      "Here B=3500 Hz and α=0.75.",
      "Rearrange:Rs=2×3500/1.75=4000 symbols/s."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Raised-cosine bandwidth is B=(1+α)Rs/2."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Here B=3500 Hz and α=0.75."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Rearrange:Rs=2×3500/1.75=4000 symbols/s."
            },
            {
              "equation": "R_s=frac{2B}{1+α}=frac{7000}{1.75}=4000"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1750",
        "2625",
        "4000",
        "5250"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-4",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "em",
    "number": 4,
    "ref": "GATE 2012 · Booklet A · Q4",
    "file": "EC2012.pdf",
    "page": 2,
    "prompt": "An incident wave in air is Ei=(8x̂+6ŷ+5ẑ)e^{j(ωt+3x−4y)} V/m and strikes a perfect conductor occupying x≤0. Determine its reflected electric field.",
    "answer": "Marks to All in the archived final key",
    "steps": [
      "The incident wavevector is−3x̂+4ŷ. Reflection reverses its normal component,so the reflected wavevector is+3x̂+4ŷ and its phase isωt−3x−4y.",
      "The tangential electric field must cancel at x=0,so the reflected y and z amplitudes are−6 and−5.",
      "Transversality requires3Erx+4(−6)=0,giving Erx=8. The physically consistent reflected field is the expression below;the archived key awards marks to all for this booklet item."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The incident wavevector is−3x̂+4ŷ. Reflection reverses its normal component,so the reflected wavevector is+3x̂+4ŷ and its phase isωt−3x−4y."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The tangential electric field must cancel at x=0,so the reflected y and z amplitudes are−6 and−5."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Transversality requires3Erx+4(−6)=0,giving Erx=8. The physically consistent reflected field is the expression below;the archived key awards marks to all for this booklet item."
            },
            {
              "equation": "E_r=(8x̂−6ŷ−5ẑ)e^{j(ωt−3x−4y)}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Source expression A",
        "Source expression B",
        "Source expression C",
        "Source expression D"
      ]
    },
    "archivedKey": "Marks to All",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "reviewNote": "The supplied booklet options do not provide a consistently matching field expression. Retain the archived Marks to All status rather than scoring a unique letter.",
    "marksToAll": true
  },
  {
    "id": "g12-5",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "em",
    "number": 5,
    "ref": "GATE 2012 · Booklet A · Q5",
    "file": "EC2012.pdf",
    "page": 2,
    "prompt": "A wave propagating in+x has phasor E=10(ŷ+jẑ)e^(−j25x) in free space. Find frequency and polarization using the exam convention.",
    "answer": "(A) Approximately1.2 GHz,left circular",
    "steps": [
      "The propagation constant isβ=25 rad/m,so f=βc/(2π)=25×3×10⁸/(2π)≈1.194 GHz.",
      "The transverse components have equal magnitudes and90° phase difference,so the polarization is circular.",
      "With time dependence e^{jωt},the field at fixed x rotates from+y toward−z;the handedness convention used in the archived key labels this left circular."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The propagation constant isβ=25 rad/m,so f=βc/(2π)=25×3×10⁸/(2π)≈1.194 GHz."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The transverse components have equal magnitudes and90° phase difference,so the polarization is circular."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "With time dependence e^{jωt},the field at fixed x rotates from+y toward−z;the handedness convention used in the archived key labels this left circular."
            },
            {
              "equation": "f=frac{25×3×10^8}{2π}≈1.2 GHz"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1.2 GHz,left circular",
        "4 Hz,left circular",
        "1.2 GHz,right circular",
        "4 Hz,right circular"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "reviewNote": "Circular-polarization handedness must be paired with a viewing/time convention. The letter here follows the archived answer key."
  },
  {
    "id": "g12-6",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "digital",
    "number": 6,
    "ref": "GATE 2012 · Booklet A · Q6",
    "file": "EC2012.pdf",
    "page": 3,
    "prompt": "The shown circuit is a clock-gated cross-coupled NAND latch. Does it exhibit JK-style race-around?",
    "answer": "(A) No",
    "steps": [
      "The inputs A and B are gated by CLK before driving the SR storage latch.",
      "There is no output feedback into the input gating of the kind that creates repeated toggling in a level-triggered JK configuration.",
      "Thus JK race-around does not occur. Applying the forbidden SR combination is a different issue and should not be called race-around."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The inputs A and B are gated by CLK before driving the SR storage latch."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "There is no output feedback into the input gating of the kind that creates repeated toggling in a level-triggered JK configuration."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Thus JK race-around does not occur. Applying the forbidden SR combination is a different issue and should not be called race-around."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Does not occur",
        "Occurs at CLK0",
        "Occurs at CLK1,A=B1",
        "Occurs at CLK1,A=B0"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "figure": "pyq-figures/g12-6.svg",
    "figureAlt": "GATE 2012 Q6 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-7",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "digital",
    "number": 7,
    "ref": "GATE 2012 · Booklet A · Q7",
    "file": "EC2012.pdf",
    "page": 3,
    "prompt": "A two-bit comparator asserts Y=1 when unsigned A>B. How many input combinations make Y=1?",
    "answer": "(B) 6",
    "steps": [
      "Each input can take0,1,2,3,so there are16 ordered pairs.",
      "Four pairs are equal. The remaining12 split symmetrically between A>B and A<B.",
      "Thus six pairs make Y=1."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Each input can take0,1,2,3,so there are16 ordered pairs."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Four pairs are equal. The remaining12 split symmetrically between A>B and A<B."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Thus six pairs make Y=1."
            },
            {
              "equation": "N=frac{4^2−4}{2}=6"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "4",
        "6",
        "8",
        "10"
      ]
    },
    "archivedKey": "B",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-8",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "devices",
    "number": 8,
    "ref": "GATE 2012 · Booklet A · Q8",
    "file": "EC2012.pdf",
    "page": 3,
    "prompt": "A10 V source drives a1 kΩ resistor and a diode modeled by v=0.7+500i while conducting. Find the current.",
    "answer": "(D) 6.2 mA",
    "steps": [
      "The diode model has a0.7 V threshold and500 Ω forward slope resistance.",
      "KVL gives10=1000i+0.7+500i.",
      "Therefore i=9.3/1500=0.0062 A. This is positive and consistent with forward conduction."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The diode model has a0.7 V threshold and500 Ω forward slope resistance."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "KVL gives10=1000i+0.7+500i."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Therefore i=9.3/1500=0.0062 A. This is positive and consistent with forward conduction."
            },
            {
              "equation": "i=frac{10−0.7}{1000+500}=6.2 mA"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "10 mA",
        "9.3 mA",
        "6.67 mA",
        "6.2 mA"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-9",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "networks",
    "number": 9,
    "ref": "GATE 2012 · Booklet A · Q9",
    "file": "EC2012.pdf",
    "page": 3,
    "prompt": "Two ideal capacitors with unequal initial voltages are suddenly connected directly in parallel by an ideal zero-resistance switch. What is the ideal redistribution current?",
    "answer": "(D) An impulse",
    "steps": [
      "After connection,both capacitors must share one common voltage.",
      "A finite amount of charge must transfer in zero time in this idealized zero-resistance model.",
      "A finite-area,zero-duration current is represented by an impulse. Any actual series resistance or inductance gives a finite transient instead."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "After connection,both capacitors must share one common voltage."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "A finite amount of charge must transfer in zero time in this idealized zero-resistance model."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "A finite-area,zero-duration current is represented by an impulse. Any actual series resistance or inductance gives a finite transient instead."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Zero",
        "Step",
        "Exponentially decaying",
        "Impulse"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "figure": "pyq-figures/g12-9.svg",
    "figureAlt": "GATE 2012 Q9 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-10",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "networks",
    "number": 10,
    "ref": "GATE 2012 · Booklet A · Q10",
    "file": "EC2012.pdf",
    "page": 3,
    "prompt": "Find average power delivered to Z=4+j3 Ω by i(t)=5cos(100πt+100°) A.",
    "answer": "(B) 50 W",
    "steps": [
      "Only the resistive part absorbs average real power.",
      "The current amplitude is5 A peak,so its RMS value is5/√2 A.",
      "Power is Irms²Re(Z)=(25/2)×4=50 W. The current’s absolute phase does not affect that value."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Only the resistive part absorbs average real power."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The current amplitude is5 A peak,so its RMS value is5/√2 A."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Power is Irms²Re(Z)=(25/2)×4=50 W. The current’s absolute phase does not affect that value."
            },
            {
              "equation": "P=frac{5^2}{2}×4=50 W"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "4.4 W",
        "50 W",
        "62.5 W",
        "125 W"
      ]
    },
    "archivedKey": "B",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-11",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "signals",
    "number": 11,
    "ref": "GATE 2012 · Booklet A · Q11",
    "file": "EC2012.pdf",
    "page": 3,
    "prompt": "The unilateral Laplace transform of f(t) is F(s)=1/(s²+s+1). Find the transform of tf(t).",
    "answer": "(D) (2s+1)/(s²+s+1)²",
    "steps": [
      "Multiplication by time corresponds to minus differentiation of the transform.",
      "Thus L{tf(t)}=−dF/ds.",
      "Differentiate the reciprocal denominator to get the positive numerator2s+1 over the squared denominator."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Multiplication by time corresponds to minus differentiation of the transform."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Thus L{tf(t)}=−dF/ds."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Differentiate the reciprocal denominator to get the positive numerator2s+1 over the squared denominator."
            },
            {
              "equation": "L(tf(t))=−frac{dF}{ds}=frac{2s+1}{(s^2+s+1)^2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "−s/(s²+1)²",
        "−(2s+1)/(s²+s+1)²",
        "s/(s²+s+1)²",
        "(2s+1)/(s²+s+1)²"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-12",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "math",
    "number": 12,
    "ref": "GATE 2012 · Booklet A · Q12",
    "file": "EC2012.pdf",
    "page": 4,
    "prompt": "Solve tx′+x=t for t>0 with x(1)=0.5.",
    "answer": "(D) x=t/2",
    "steps": [
      "The left side is the derivative of tx.",
      "Integrate:(tx)′=t gives tx=t²/2+C,or x=t/2+C/t.",
      "At t=1,the condition0.5=0.5+C gives C=0. Hence x=t/2."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The left side is the derivative of tx."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Integrate:(tx)′=t gives tx=t²/2+C,or x=t/2+C/t."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "At t=1,the condition0.5=0.5+C gives C=0. Hence x=t/2."
            },
            {
              "equation": "x(t)=frac{t}{2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "t−1/2",
        "t²−1/2",
        "t²/2",
        "t/2"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-13",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "analog",
    "number": 13,
    "ref": "GATE 2012 · Booklet A · Q13",
    "file": "EC2012.pdf",
    "page": 4,
    "prompt": "In the shown ideal-diode steady-state clamper driven by cos(ωt),find the node voltage v(t) across D₁.",
    "answer": "(A) cos(ωt)−1",
    "steps": [
      "D₁ clamps positive peaks of the node to zero.",
      "At the positive input peak1 V,the series capacitor charges so that input minus node equals1 V.",
      "With ideal peak holding,the node waveform is the input shifted down by1 V,ranging from−2 to0 V."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "D₁ clamps positive peaks of the node to zero."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "At the positive input peak1 V,the series capacitor charges so that input minus node equals1 V."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "With ideal peak holding,the node waveform is the input shifted down by1 V,ranging from−2 to0 V."
            },
            {
              "equation": "v(t)=cos(ωt)−1"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "cos(ωt)−1",
        "sin(ωt)",
        "1−cos(ωt)",
        "1−sin(ωt)"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "figure": "pyq-figures/g12-13.svg",
    "figureAlt": "GATE 2012 Q13 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-14",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "digital",
    "number": 14,
    "ref": "GATE 2012 · Booklet A · Q14",
    "file": "EC2012.pdf",
    "page": 4,
    "prompt": "Determine the Boolean output of the shown complementary CMOS network.",
    "answer": "(A) Y=[(A+B)C]′=A̅B̅+C̅",
    "steps": [
      "The nMOS pull-down path consists of C in series with parallel A and B devices.",
      "It conducts when C(A+B)=1.",
      "The complementary output is the inverse:Y=[C(A+B)]′. By De Morgan this equals C̅+A̅B̅."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The nMOS pull-down path consists of C in series with parallel A and B devices."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "It conducts when C(A+B)=1."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The complementary output is the inverse:Y=[C(A+B)]′. By De Morgan this equals C̅+A̅B̅."
            },
            {
              "equation": "Y=[C(A+B)]′=C̅+A̅B̅"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "A̅B̅+C̅",
        "(A+B)C",
        "(A̅+B̅)C̅",
        "ABC"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "figure": "pyq-figures/g12-14.svg",
    "figureAlt": "GATE 2012 Q14 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-15",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "comm",
    "number": 15,
    "ref": "GATE 2012 · Booklet A · Q15",
    "file": "EC2012.pdf",
    "page": 4,
    "prompt": "Two source symbols initially have equal probability p. Transfer a small positive amountη from one to the other,keeping all other probabilities fixed. How does entropy change?",
    "answer": "(D) Decreases",
    "steps": [
      "The contribution of the pair is−(p+η)log₂(p+η)−(p−η)log₂(p−η).",
      "Entropy is strictly concave in the probabilities and the pair contribution is maximal at equal probabilitiesη=0.",
      "Any nonzero admissible transfer makes the pair less balanced and reduces total entropy."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The contribution of the pair is−(p+η)log₂(p+η)−(p−η)log₂(p−η)."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Entropy is strictly concave in the probabilities and the pair contribution is maximal at equal probabilitiesη=0."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Any nonzero admissible transfer makes the pair less balanced and reduces total entropy."
            },
            {
              "equation": "H(p+η,p−η)<H(p,p)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Increases",
        "Unchanged",
        "Increases only for two symbols",
        "Decreases"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-16",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "em",
    "number": 16,
    "ref": "GATE 2012 · Booklet A · Q16",
    "file": "EC2012.pdf",
    "page": 4,
    "prompt": "A coaxial line has inner diameter1 mm,outer diameter2.4 mm and dielectric εr=10.89. Find characteristic impedance,assuming a nonmagnetic dielectric.",
    "answer": "Marks to All;calculated Z₀≈15.9 Ω",
    "steps": [
      "For a coax,Z₀=(60/√εr)ln(b/a),where b/a is the outer-to-inner radius ratio. The ratio of the quoted diameters is also2.4.",
      "Using√10.89=3.3 gives Z₀=(60/3.3)ln2.4≈15.92 Ω.",
      "None of330,100,143.3,43.4 Ω matches. The archived final key awards Marks to All."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "For a coax,Z₀=(60/√εr)ln(b/a),where b/a is the outer-to-inner radius ratio. The ratio of the quoted diameters is also2.4."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Using√10.89=3.3 gives Z₀=(60/3.3)ln2.4≈15.92 Ω."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "None of330,100,143.3,43.4 Ω matches. The archived final key awards Marks to All."
            },
            {
              "equation": "Z_0=frac{60}{3.3}ln(2.4)≈15.9 Ω"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "330 Ω",
        "100 Ω",
        "143.3 Ω",
        "43.4 Ω"
      ]
    },
    "archivedKey": "Marks to All",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "marksToAll": true
  },
  {
    "id": "g12-17",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "em",
    "number": 17,
    "ref": "GATE 2012 · Booklet A · Q17",
    "file": "EC2012.pdf",
    "page": 4,
    "prompt": "An antenna’s normalized field pattern is F(θ)=cos⁴θ for0≤θ≤π/2 and zero elsewhere,with azimuthal symmetry. Find directivity in dB.",
    "answer": "(B) Approximately12.6 dB",
    "steps": [
      "Radiation intensity is proportional to field magnitude squared,so its normalized power pattern is cos⁸θ.",
      "The beam solid angle is2π∫₀^{π/2}cos⁸θ sinθ dθ=2π/9.",
      "Directivity is4π/(2π/9)=18,or10log₁₀18≈12.55 dB."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Radiation intensity is proportional to field magnitude squared,so its normalized power pattern is cos⁸θ."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The beam solid angle is2π∫₀^{π/2}cos⁸θ sinθ dθ=2π/9."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Directivity is4π/(2π/9)=18,or10log₁₀18≈12.55 dB."
            },
            {
              "equation": "D=frac{4π}{2π/9}=18;D_{dB}=10log_{10}(18)≈12.6 dB"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "10 dB",
        "12.6 dB",
        "11.5 dB",
        "18 dB"
      ]
    },
    "archivedKey": "B",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "reviewNote": "The archived answer interprets F as a field pattern. If cos⁴θ were instead specified as the normalized power pattern,the directivity would be10,or10 dB."
  },
  {
    "id": "g12-18",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "signals",
    "number": 18,
    "ref": "GATE 2012 · Booklet A · Q18",
    "file": "EC2012.pdf",
    "page": 5,
    "prompt": "Find the ROC of x[n]=(1/3)^|n|−(1/2)ⁿu[n].",
    "answer": "(C) 1/2<|z|<3",
    "steps": [
      "The bilateral sequence(1/3)^|n| has ROC1/3<|z|<3.",
      "The right-sided sequence(1/2)ⁿu[n] has ROC|z|>1/2.",
      "Their sum converges on the intersection1/2<|z|<3;the distinct poles do not cancel."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The bilateral sequence(1/3)^|n| has ROC1/3<|z|<3."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The right-sided sequence(1/2)ⁿu[n] has ROC|z|>1/2."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Their sum converges on the intersection1/2<|z|<3;the distinct poles do not cancel."
            },
            {
              "equation": "frac{1}{2}<|z|<3"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1/3<|z|<3",
        "1/3<|z|<1/2",
        "1/2<|z|<3",
        "|z|>1/3"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-19",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "digital",
    "number": 19,
    "ref": "GATE 2012 · Booklet A · Q19",
    "file": "EC2012.pdf",
    "page": 5,
    "prompt": "Find prime implicants of f(X,Y,Z)=Σm(2,3,4,5).",
    "answer": "(A) X̅Y and XY̅",
    "steps": [
      "Minterms2=010 and3=011 differ only in Z,so combine to X̅Y.",
      "Minterms4=100 and5=101 similarly combine to XY̅.",
      "No larger group exists:all remaining adjacent combinations would include a zero minterm. These two groups are the prime implicants."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Minterms2=010 and3=011 differ only in Z,so combine to X̅Y."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Minterms4=100 and5=101 similarly combine to XY̅."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "No larger group exists:all remaining adjacent combinations would include a zero minterm. These two groups are the prime implicants."
            },
            {
              "equation": "f=X̅Y+XY̅"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "X̅Y,XY̅",
        "Uncombined terms in B",
        "Uncombined terms in C",
        "All four individual minterms"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-20",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "control",
    "number": 20,
    "ref": "GATE 2012 · Booklet A · Q20",
    "file": "EC2012.pdf",
    "page": 5,
    "prompt": "G(s)=(s²+9)(s+2)/[(s+1)(s+3)(s+4)]. At which listed input frequency does a sinusoidal steady-state output vanish?",
    "answer": "(C) 3 rad/s",
    "steps": [
      "A sinusoidal output vanishes when G(jω)=0.",
      "The quadratic numerator is−ω²+9,which is zero atω=3 rad/s.",
      "No denominator factor vanishes there,so the frequency response is exactly zero."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "A sinusoidal output vanishes when G(jω)=0."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The quadratic numerator is−ω²+9,which is zero atω=3 rad/s."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "No denominator factor vanishes there,so the frequency response is exactly zero."
            },
            {
              "equation": "(jω)^2+9=0;ω=3"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1 rad/s",
        "2 rad/s",
        "3 rad/s",
        "4 rad/s"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-21",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "networks",
    "number": 21,
    "ref": "GATE 2012 · Booklet A · Q21",
    "file": "EC2012.pdf",
    "page": 5,
    "prompt": "Find the input resistance at nodes1–2 in the shown network containing9 kΩ,1 kΩ,100 Ω and dependent source99ib.",
    "answer": "(A) 50 Ω",
    "steps": [
      "Apply test voltage V at node1 relative to node2. The passive1 kΩ+9 kΩ path carries V/10 kΩ out of node1,so the labeled opposite base current is ib=−V/10 kΩ.",
      "The dependent source then draws99V/10 kΩ out of node1. The passive series path plus dependent contribution total100V/10 kΩ=V/100 Ω.",
      "The actual100 Ω resistor draws another V/100 Ω. Total test current is V/50 Ω,so input resistance is50 Ω."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Apply test voltage V at node1 relative to node2. The passive1 kΩ+9 kΩ path carries V/10 kΩ out of node1,so the labeled opposite base current is ib=−V/10 kΩ."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The dependent source then draws99V/10 kΩ out of node1. The passive series path plus dependent contribution total100V/10 kΩ=V/100 Ω."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The actual100 Ω resistor draws another V/100 Ω. Total test current is V/50 Ω,so input resistance is50 Ω."
            },
            {
              "equation": "I=frac{V}{100}+frac{V}{100}=frac{V}{50};R_{in}=50 Ω"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "50 Ω",
        "100 Ω",
        "5 kΩ",
        "10.1 kΩ"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "figure": "pyq-figures/g12-21.svg",
    "figureAlt": "GATE 2012 Q21 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-22",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "networks",
    "number": 22,
    "ref": "GATE 2012 · Booklet A · Q22",
    "file": "EC2012.pdf",
    "page": 5,
    "prompt": "Find the top-to-right inductor current in the shown symmetric AC network. Both1∠0° V sources have their positive terminals at the center;the upper current source injects1∠0° A into the top node.",
    "answer": "(C) 1/(1+j) A",
    "steps": [
      "Take the center as zero. Both left and right nodes are−1 V.",
      "At the top node v,the two outgoing branch currents are(v+1)/1 and(v+1)/j,with total1 A by KCL.",
      "Thus(v+1)(1−j)=1. Inductor current is(v+1)/j=1/(1+j) A."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Take the center as zero. Both left and right nodes are−1 V."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "At the top node v,the two outgoing branch currents are(v+1)/1 and(v+1)/j,with total1 A by KCL."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Thus(v+1)(1−j)=1. Inductor current is(v+1)/j=1/(1+j) A."
            },
            {
              "equation": "I_L=frac{1}{j(1−j)}=frac{1}{1+j}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2/(1+j) A",
        "−1/(1+j) A",
        "1/(1+j) A",
        "0 A"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "figure": "pyq-figures/g12-22.svg",
    "figureAlt": "GATE 2012 Q22 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-23",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "math",
    "number": 23,
    "ref": "GATE 2012 · Booklet A · Q23",
    "file": "EC2012.pdf",
    "page": 5,
    "prompt": "For f(z)=1/(z+1)−2/(z+3),evaluate(1/(2πj))∮Cf(z)dz around counterclockwise|z+1|=1.",
    "answer": "(C) 1",
    "steps": [
      "The contour is centered at−1 with radius1.",
      "It encloses the simple pole at−1,whose residue is1. The pole at−3 lies outside.",
      "The normalized contour integral is the sum of enclosed residues,therefore1."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The contour is centered at−1 with radius1."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "It encloses the simple pole at−1,whose residue is1. The pole at−3 lies outside."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The normalized contour integral is the sum of enclosed residues,therefore1."
            },
            {
              "equation": "frac{1}{2πj}∮f(z)dz=1"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "−2",
        "−1",
        "1",
        "2"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-24",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "math",
    "number": 24,
    "ref": "GATE 2012 · Booklet A · Q24",
    "file": "EC2012.pdf",
    "page": 6,
    "prompt": "Independent X,Y are uniform on[−1,1]. Find P(max(X,Y)<1/2).",
    "answer": "(B) 9/16",
    "steps": [
      "The maximum is below1/2 precisely when both variables are below1/2.",
      "For either variable,the favorable interval length is1.5 out of a total2,so the probability is3/4.",
      "Independence makes the joint probability(3/4)²=9/16."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The maximum is below1/2 precisely when both variables are below1/2."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "For either variable,the favorable interval length is1.5 out of a total2,so the probability is3/4."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Independence makes the joint probability(3/4)²=9/16."
            },
            {
              "equation": "P=frac{3}{4}×frac{3}{4}=frac{9}{16}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "3/4",
        "9/16",
        "1/4",
        "2/3"
      ]
    },
    "archivedKey": "B",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-25",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "math",
    "number": 25,
    "ref": "GATE 2012 · Booklet A · Q25",
    "file": "EC2012.pdf",
    "page": 6,
    "prompt": "Using the principal complex logarithm,find xˣ when x=√(−1)=j.",
    "answer": "(A) e^(−π/2)",
    "steps": [
      "Complex exponentiation is defined through xˣ=exp(x Log x),with a logarithm branch specified.",
      "For the principal branch,Log j=jπ/2.",
      "Hence jʲ=exp(j×jπ/2)=exp(−π/2)."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Complex exponentiation is defined through xˣ=exp(x Log x),with a logarithm branch specified."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "For the principal branch,Log j=jπ/2."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Hence jʲ=exp(j×jπ/2)=exp(−π/2)."
            },
            {
              "equation": "j^j=e^{j(jπ/2)}=e^{−π/2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "e^(−π/2)",
        "e^(π/2)",
        "x",
        "1"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "reviewNote": "Other logarithm branches produce other positive real values. The archived key uses the principal value."
  },
  {
    "id": "g12-26",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "devices",
    "number": 26,
    "ref": "GATE 2012 · Booklet A · Q26",
    "file": "EC2012.pdf",
    "page": 6,
    "prompt": "An nMOS source region has volume1 μm³,donor density10¹⁹ cm⁻³ and ni=10¹⁰ cm⁻³. Approximately how many holes does it contain at equilibrium?",
    "answer": "(D) Approximately0",
    "steps": [
      "The majority electron concentration is n≈10¹⁹ cm⁻³. Mass action gives p=ni²/n=10 cm⁻³.",
      "Convert1 μm³=10⁻¹² cm³.",
      "Expected hole count is pV=10⁻¹¹,much less than one,so the approximate listed count is zero."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The majority electron concentration is n≈10¹⁹ cm⁻³. Mass action gives p=ni²/n=10 cm⁻³."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Convert1 μm³=10⁻¹² cm³."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Expected hole count is pV=10⁻¹¹,much less than one,so the approximate listed count is zero."
            },
            {
              "equation": "N_p=frac{10^{20}}{10^{19}}×10^{−12}=10^{−11}≈0"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "10⁷",
        "100",
        "10",
        "0"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-27",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "comm",
    "number": 27,
    "ref": "GATE 2012 · Booklet A · Q27",
    "file": "EC2012.pdf",
    "page": 6,
    "prompt": "Coherent BPSK has symbol energy E and AWGN two-sided PSD N₀/2. With receiver phase error45°,find error probability.",
    "answer": "(B) Q(√(E/N₀))",
    "steps": [
      "The coherent correlator projects signal amplitude onto the local-oscillator phase,multiplying it by cosφ.",
      "The normal BPSK error argument√(2E/N₀) therefore becomes√(2E/N₀)cos45°.",
      "Since cos45°=1/√2,the argument reduces to√(E/N₀)."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The coherent correlator projects signal amplitude onto the local-oscillator phase,multiplying it by cosφ."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The normal BPSK error argument√(2E/N₀) therefore becomes√(2E/N₀)cos45°."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Since cos45°=1/√2,the argument reduces to√(E/N₀)."
            },
            {
              "equation": "P_e=Q(sqrt{frac{2E}{N_0}}cos45°)=Q(sqrt{frac{E}{N_0}})"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Q(√(2E/N₀))",
        "Q(√(E/N₀))",
        "Q(√(E/(2N₀)))",
        "Q(√(E/(4N₀)))"
      ]
    },
    "archivedKey": "B",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-28",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "em",
    "number": 28,
    "ref": "GATE 2012 · Booklet A · Q28",
    "file": "EC2012.pdf",
    "page": 6,
    "prompt": "A100 Ω line matches50 Ω to200 Ω at approximately429 MHz and1 GHz. Assuming phase speed3×10⁸ m/s,which listed length works?",
    "answer": "(C) Approximately1.58 m",
    "steps": [
      "The impedance is the geometric mean√(50×200)=100 Ω,so an odd-quarter-wave section matches the two resistances.",
      "At1 GHz,λ/4=0.075 m. A length1.575 m is21 quarter wavelengths.",
      "At429 MHz,the same length is about9 quarter wavelengths. Both are odd,so the listed1.58 m works approximately at both frequencies."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The impedance is the geometric mean√(50×200)=100 Ω,so an odd-quarter-wave section matches the two resistances."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "At1 GHz,λ/4=0.075 m. A length1.575 m is21 quarter wavelengths."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "At429 MHz,the same length is about9 quarter wavelengths. Both are odd,so the listed1.58 m works approximately at both frequencies."
            },
            {
              "equation": "l≈21frac{0.3}{4}=1.575 m≈9frac{3×10^8}{4×429×10^6}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "82.5 cm",
        "1.05 m",
        "1.58 m",
        "1.75 m"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-29",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "signals",
    "number": 29,
    "ref": "GATE 2012 · Booklet A · Q29",
    "file": "EC2012.pdf",
    "page": 6,
    "prompt": "Classify y(t)=∫₋∞ᵗx(τ)cos(3τ)dτ for time invariance and BIBO stability.",
    "answer": "(D) Time variant and unstable",
    "steps": [
      "Shifting only x changes it to x(τ−t₀),but the multiplier remains cos3τ. Shifting the entire output also shifts that multiplier relative to the input,so the system is time variant.",
      "For stability,take the bounded input x(τ)=cos3τ forτ≥0 and zero before0.",
      "Then y(t)=∫₀ᵗcos²3τ dτ=t/2+sin6t/12,which grows without bound."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Time-invariance test",
          "blocks": [
            {
              "text": "Shifting only x changes it to x(τ−t₀),but the multiplier remains cos3τ. Shifting the entire output also shifts that multiplier relative to the input,so the system is time variant."
            }
          ]
        },
        {
          "title": "Choose a bounded test input",
          "blocks": [
            {
              "text": "For stability,take the bounded input x(τ)=cos3τ forτ≥0 and zero before0."
            }
          ]
        },
        {
          "title": "Stability test",
          "blocks": [
            {
              "text": "Then y(t)=∫₀ᵗcos²3τ dτ=t/2+sin6t/12,which grows without bound."
            },
            {
              "equation": "x(t)=cos(3t)u(t);y(t)=frac{t}{2}+frac{sin(6t)}{12}→∞"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Time invariant,stable",
        "Time variant,stable",
        "Time invariant,unstable",
        "Time variant,unstable"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-30",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "control",
    "number": 30,
    "ref": "GATE 2012 · Booklet A · Q30",
    "file": "EC2012.pdf",
    "page": 6,
    "prompt": "A unity-feedback loop has G(s)=K(s+1)/(s³+as²+2s+1). Find K,a for marginal oscillation at2 rad/s.",
    "answer": "(A) K=2,a=0.75",
    "steps": [
      "The closed-loop characteristic is s³+as²+(K+2)s+(K+1).",
      "Substitute s=j2. The imaginary part gives−8+2(K+2)=0,so K=2.",
      "The real part gives−4a+K+1=0,so a=3/4. The polynomial factors as(s+0.75)(s²+4)."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The closed-loop characteristic is s³+as²+(K+2)s+(K+1)."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Substitute s=j2. The imaginary part gives−8+2(K+2)=0,so K=2."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The real part gives−4a+K+1=0,so a=3/4. The polynomial factors as(s+0.75)(s²+4)."
            },
            {
              "equation": "s^3+0.75s^2+4s+3=(s+0.75)(s^2+4)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "K2,a0.75",
        "K3,a0.75",
        "K4,a0.5",
        "K2,a0.5"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-31",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "signals",
    "number": 31,
    "ref": "GATE 2012 · Booklet A · Q31",
    "file": "EC2012.pdf",
    "page": 6,
    "prompt": "H(jω)=2cosω·sin(2ω)/ω. Find h(0).",
    "answer": "(C) 1",
    "steps": [
      "The transform2sin(2ω)/ω corresponds to a unit rectangular pulse p(t) on−2<t<2.",
      "Multiplication by cosω produces half-amplitude copies shifted by+1 and−1: h(t)=[p(t−1)+p(t+1)]/2.",
      "At t=0,both pulse arguments lie inside the rectangle,so h(0)=(1+1)/2=1."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The transform2sin(2ω)/ω corresponds to a unit rectangular pulse p(t) on−2<t<2."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Multiplication by cosω produces half-amplitude copies shifted by+1 and−1: h(t)=[p(t−1)+p(t+1)]/2."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "At t=0,both pulse arguments lie inside the rectangle,so h(0)=(1+1)/2=1."
            },
            {
              "equation": "h(0)=frac{p(−1)+p(1)}{2}=1"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1/4",
        "1/2",
        "1",
        "2"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-32",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "control",
    "number": 32,
    "ref": "GATE 2012 · Booklet A · Q32",
    "file": "EC2012.pdf",
    "page": 7,
    "prompt": "For A=[[0,a₁,0],[0,0,a₂],[a₃,0,0]] and B=[0,0,1]ᵀ,which listed parameter choice gives controllability?",
    "answer": "(D) a₁≠0,a₂≠0,a₃=0",
    "steps": [
      "Compute B=[0,0,1]ᵀ,AB=[0,a₂,0]ᵀ and A²B=[a₁a₂,0,0]ᵀ.",
      "The controllability determinant is−a₁a₂². It is nonzero exactly when a₁ and a₂ are nonzero; a₃ does not affect this test.",
      "Among the listed choices,D meets those requirements. The zero value of a₃ is allowed but not generally required."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Compute B=[0,0,1]ᵀ,AB=[0,a₂,0]ᵀ and A²B=[a₁a₂,0,0]ᵀ."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The controllability determinant is−a₁a₂². It is nonzero exactly when a₁ and a₂ are nonzero; a₃ does not affect this test."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Among the listed choices,D meets those requirements. The zero value of a₃ is allowed but not generally required."
            },
            {
              "equation": "det[B,AB,A^2B]=−a_1a_2^2≠0"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "a₁≠0,a₂0,a₃≠0",
        "a₁0,a₂≠0,a₃≠0",
        "a₁0,a₂≠0,a₃0",
        "a₁≠0,a₂≠0,a₃0"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-33",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "networks",
    "number": 33,
    "ref": "GATE 2012 · Booklet A · Q33",
    "file": "EC2012.pdf",
    "page": 7,
    "prompt": "Circuit A is an in-phase10 V source with series2 Ω. Circuit B contains series variable R followed by an ideal3 V source shunted by−j1 Ω. Find R maximizing average power transferred from A into B.",
    "answer": "(A) 0.8 Ω",
    "steps": [
      "The ideal3 V source fixes the far end of R,so the shunt capacitor does not change the real loop current I=(10−3)/(R+2)=7/(R+2).",
      "The terminal voltage entering B is3+RI. Thus total power entering B is PB=3I+RI²=21/(R+2)+49R/(R+2)².",
      "Differentiate: dPB/dR=(56−70R)/(R+2)³. It changes from positive to negative at R=0.8 Ω,so this maximizes transferred power."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The ideal3 V source fixes the far end of R,so the shunt capacitor does not change the real loop current I=(10−3)/(R+2)=7/(R+2)."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The terminal voltage entering B is3+RI. Thus total power entering B is PB=3I+RI²=21/(R+2)+49R/(R+2)²."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Differentiate: dPB/dR=(56−70R)/(R+2)³. It changes from positive to negative at R=0.8 Ω,so this maximizes transferred power."
            },
            {
              "equation": "frac{dP_B}{dR}=frac{56−70R}{(R+2)^3}=0;R=0.8 Ω"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0.8 Ω",
        "1.4 Ω",
        "2 Ω",
        "2.8 Ω"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "reviewNote": "This maximizes total real power entering circuit B,including its voltage source. Maximizing power in R alone is a different objective.",
    "figure": "pyq-figures/g12-33.svg",
    "figureAlt": "GATE 2012 Q33 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-34",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "signals",
    "number": 34,
    "ref": "GATE 2012 · Booklet A · Q34",
    "file": "EC2012.pdf",
    "page": 7,
    "prompt": "For y″+2y′+y=δ(t),with y(0⁻)=−2 and y′(0⁻)=0,find y′(0⁺).",
    "answer": "(D) 1",
    "steps": [
      "The impulse in the equation can produce a finite jump in y′. A jump in y would create an unwanted δ′ term,so y remains continuous.",
      "Integrate the differential equation over an interval shrinking around zero. The finite ordinary terms vanish in the limit.",
      "This gives y′(0⁺)−y′(0⁻)=1,hence y′(0⁺)=1."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The impulse in the equation can produce a finite jump in y′. A jump in y would create an unwanted δ′ term,so y remains continuous."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Integrate the differential equation over an interval shrinking around zero. The finite ordinary terms vanish in the limit."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "This gives y′(0⁺)−y′(0⁻)=1,hence y′(0⁺)=1."
            },
            {
              "equation": "y′(0^+)−y′(0^−)=1;y′(0^+)=1"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "−2",
        "−1",
        "0",
        "1"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-35",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "math",
    "number": 35,
    "ref": "GATE 2012 · Booklet A · Q35",
    "file": "EC2012.pdf",
    "page": 7,
    "prompt": "A radially outward vector field has magnitude krⁿ. For r>0,which n makes its divergence zero?",
    "answer": "(A) −2",
    "steps": [
      "Write A=krⁿr̂. For a radial field,∇·A=(1/r²)d(r²Ar)/dr.",
      "Substitute Ar=krⁿ to get∇·A=k(n+2)r^(n−1).",
      "For a nonzero field and r>0,this vanishes when n+2=0,so n=−2."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Write A=krⁿr̂. For a radial field,∇·A=(1/r²)d(r²Ar)/dr."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Substitute Ar=krⁿ to get∇·A=k(n+2)r^(n−1)."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "For a nonzero field and r>0,this vanishes when n+2=0,so n=−2."
            },
            {
              "equation": "∇⋅A=frac{1}{r^2}frac{d}{dr}(kr^{n+2})=k(n+2)r^{n−1};n=−2"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "−2",
        "2",
        "1",
        "0"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-36",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "math",
    "number": 36,
    "ref": "GATE 2012 · Booklet A · Q36",
    "file": "EC2012.pdf",
    "page": 7,
    "prompt": "A fair coin is tossed until its first head. Find the probability that the stopping toss number is odd.",
    "answer": "(C) 2/3",
    "steps": [
      "The first head on toss n has probability(1/2)ⁿ.",
      "For odd n=1,3,5,…,sum1/2+1/8+1/32+….",
      "This geometric series has ratio1/4 and sum(1/2)/(1−1/4)=2/3."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The first head on toss n has probability(1/2)ⁿ."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "For odd n=1,3,5,…,sum1/2+1/8+1/32+…."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "This geometric series has ratio1/4 and sum(1/2)/(1−1/4)=2/3."
            },
            {
              "equation": "P=frac{1/2}{1−1/4}=frac{2}{3}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1/3",
        "1/2",
        "2/3",
        "3/4"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-37",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "devices",
    "number": 37,
    "ref": "GATE 2012 · Booklet A · Q37",
    "file": "EC2012.pdf",
    "page": 8,
    "prompt": "In the symmetric5 V CMOS inverter shown,both threshold magnitudes are1 V and electron/hole mobilities and device sizes are equal. Which listed input range guarantees upper pMOS M₁ is linear?",
    "answer": "(A) Vin<1.875 V",
    "steps": [
      "In the ideal symmetric inverter model,the transition center is Vin=2.5 V. For lower input voltages,the output is high,the pMOS is in its linear region and the nMOS is off or saturated.",
      "The precise pMOS saturation boundary approaches the symmetric transition at2.5 V.",
      "Of the proposed ranges,only Vin<1.875 V lies wholly in the low-input region. The mixed range1.875–3.125 V crosses operating regimes,so it does not guarantee linear M₁."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "In the ideal symmetric inverter model,the transition center is Vin=2.5 V. For lower input voltages,the output is high,the pMOS is in its linear region and the nMOS is off or saturated."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The precise pMOS saturation boundary approaches the symmetric transition at2.5 V."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Of the proposed ranges,only Vin<1.875 V lies wholly in the low-input region. The mixed range1.875–3.125 V crosses operating regimes,so it does not guarantee linear M₁."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Vin<1.875 V",
        "1.875<Vin<3.125 V",
        "Vin>3.125 V",
        "0<Vin<5 V"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "reviewNote": "The listed1.875 V bound is a sufficient range,not the exact transition voltage of the stated equal-strength ideal inverter.",
    "figure": "pyq-figures/g12-37.svg",
    "figureAlt": "GATE 2012 Q37 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-38",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "comm",
    "number": 38,
    "ref": "GATE 2012 · Booklet A · Q38",
    "file": "EC2012.pdf",
    "page": 8,
    "prompt": "A binary symmetric channel has crossover probability1/8 and prior P(X=0)=0.9. Find minimum error probability for optimal MAP decoding.",
    "answer": "(D) 0.1",
    "steps": [
      "For received0,the joint likelihoods are0.9×7/8 for X=0 and0.1×1/8 for X=1,so choose0.",
      "For received1,they are0.9×1/8=9/80 for X=0 and0.1×7/8=7/80 for X=1. Choose0 again.",
      "The optimum receiver always decides0 because of the strong prior. It errs exactly when X=1,with probability0.1."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "For received0,the joint likelihoods are0.9×7/8 for X=0 and0.1×1/8 for X=1,so choose0."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "For received1,they are0.9×1/8=9/80 for X=0 and0.1×7/8=7/80 for X=1. Choose0 again."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The optimum receiver always decides0 because of the strong prior. It errs exactly when X=1,with probability0.1."
            },
            {
              "equation": "P_e=P(X=1)=frac{1}{10}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "7/80",
        "63/80",
        "0.9",
        "0.1"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-39",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "comm",
    "number": 39,
    "ref": "GATE 2012 · Booklet A · Q39",
    "file": "EC2012.pdf",
    "page": 8,
    "prompt": "The plotted message alternates between+2 and−2,each lasting2 s. PM uses phase constant kp rad/unit;FM uses kf Hz/unit. Find kp/kf for equal maximum phase deviation,with the FM integral referenced at t=0.",
    "answer": "(B) 4π rad/Hz",
    "steps": [
      "The PM peak phase deviation is kp max|m|=2kp.",
      "During a positive2-second interval,the FM phase accumulates2πkf∫m dt=2πkf×4=8πkf. The negative interval returns it to zero.",
      "Equating2kp=8πkf gives kp/kf=4π."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The PM peak phase deviation is kp max|m|=2kp."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "During a positive2-second interval,the FM phase accumulates2πkf∫m dt=2πkf×4=8πkf. The negative interval returns it to zero."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Equating2kp=8πkf gives kp/kf=4π."
            },
            {
              "equation": "2k_p=8πk_f;frac{k_p}{k_f}=4π"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "8π",
        "4π",
        "2π",
        "π"
      ]
    },
    "archivedKey": "B",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "figure": "pyq-figures/g12-39.svg",
    "figureAlt": "GATE 2012 Q39 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-40",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "em",
    "number": 40,
    "ref": "GATE 2012 · Booklet A · Q40",
    "file": "EC2012.pdf",
    "page": 8,
    "prompt": "A rectangular air-filled guide has longitudinal field with transverse factors cos(209.4x)cos(261.8y) and angular frequency6.283×10¹⁰ rad/s. Assess the proposed propagating-wave phase velocity.",
    "answer": "Marks to All in the archived final key",
    "steps": [
      "The transverse cutoff wavenumber is kc=√(209.4²+261.8²)≈335.2 rad/m.",
      "The free-space wavenumber is k₀=ω/c≈209.4 rad/m,which is below kc. Thus β²=k₀²−kc²<0.",
      "The stated field is below cutoff and does not describe a propagating mode with real phase constant. The listed real propagating-phase-velocity choices therefore do not consistently apply."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The transverse cutoff wavenumber is kc=√(209.4²+261.8²)≈335.2 rad/m."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The free-space wavenumber is k₀=ω/c≈209.4 rad/m,which is below kc. Thus β²=k₀²−kc²<0."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The stated field is below cutoff and does not describe a propagating mode with real phase constant. The listed real propagating-phase-velocity choices therefore do not consistently apply."
            },
            {
              "equation": "β^2=(frac{ω}{c})^2−k_c^2<0"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "vp>c",
        "vp=c",
        "0<vp<c",
        "vp=0"
      ]
    },
    "archivedKey": "Marks to All",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "reviewNote": "For an actually propagating lossless hollow-guide mode,vp>c. The supplied numerical transverse variation places this item below cutoff;the archived key awards Marks to All.",
    "marksToAll": true
  },
  {
    "id": "g12-41",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "analog",
    "number": 41,
    "ref": "GATE 2012 · Booklet A · Q41",
    "file": "EC2012.pdf",
    "page": 9,
    "prompt": "An ideal inverting op-amp has input series C,R₁ and feedback R₂. Classify the filter and give angular−3 dB corner.",
    "answer": "(B) High-pass;ωc=1/(R₁C)",
    "steps": [
      "The input impedance is R₁+1/(sC),so H(s)=−R₂/(R₁+1/(sC)).",
      "Rewrite H=−R₂sC/(1+sR₁C). Its gain is zero at DC and tends to−R₂/R₁ at high frequency.",
      "It is high-pass,with pole angular frequency1/(R₁C)."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The input impedance is R₁+1/(sC),so H(s)=−R₂/(R₁+1/(sC))."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Rewrite H=−R₂sC/(1+sR₁C). Its gain is zero at DC and tends to−R₂/R₁ at high frequency."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "It is high-pass,with pole angular frequency1/(R₁C)."
            },
            {
              "equation": "H(s)=−frac{R_2sC}{1+sR_1C};ω_c=frac{1}{R_1C}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Low-pass;1/[(R₁+R₂)C]",
        "High-pass;1/(R₁C)",
        "Low-pass;1/(R₁C)",
        "High-pass;1/[(R₁+R₂)C]"
      ]
    },
    "archivedKey": "B",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-42",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "signals",
    "number": 42,
    "ref": "GATE 2012 · Booklet A · Q42",
    "file": "EC2012.pdf",
    "page": 9,
    "prompt": "Let y=h*g,with h[n]=(1/2)ⁿu[n] and causal g[n]. If y[0]=1,y[1]=1/2,find g[1].",
    "answer": "(A) 0",
    "steps": [
      "Causality gives y[0]=h[0]g[0]=g[0],so g[0]=1.",
      "At n=1,the convolution sum has only two terms:y[1]=h[0]g[1]+h[1]g[0].",
      "Thus1/2=g[1]+(1/2)×1,so g[1]=0."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Causality gives y[0]=h[0]g[0]=g[0],so g[0]=1."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "At n=1,the convolution sum has only two terms:y[1]=h[0]g[1]+h[1]g[0]."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Thus1/2=g[1]+(1/2)×1,so g[1]=0."
            },
            {
              "equation": "frac{1}{2}=g[1]+frac{1}{2};g[1]=0"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1/2",
        "1",
        "3/2"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-43",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "digital",
    "number": 43,
    "ref": "GATE 2012 · Booklet A · Q43",
    "file": "EC2012.pdf",
    "page": 9,
    "prompt": "A D flip-flop feeds a2:1 MUX with X₁=Q,X₀=Q̅ and select A;MUX output drives D. Describe state transitions.",
    "answer": "(D) Hold for A=1,toggle for A=0",
    "steps": [
      "The selected MUX output is D=AQ+A̅Q̅.",
      "For A=1,the next state is Q,so each state has a hold self-loop.",
      "For A=0,the next state is Q̅,so the state toggles in both directions. This is graph D."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The selected MUX output is D=AQ+A̅Q̅."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "For A=1,the next state is Q,so each state has a hold self-loop."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "For A=0,the next state is Q̅,so the state toggles in both directions. This is graph D."
            },
            {
              "equation": "Q^+=AQ+A̅Q̅"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Graph A",
        "Graph B",
        "Graph C",
        "Hold at1,toggle at0"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-44",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "analog",
    "number": 44,
    "ref": "GATE 2012 · Booklet A · Q44",
    "file": "EC2012.pdf",
    "page": 10,
    "prompt": "The shown common-emitter circuit has13.7 V supply,RC=12 kΩ,collector-to-base feedback100 kΩ,input resistance10 kΩ andβ=100. Which listed bound applies to AC voltage-gain magnitude?",
    "answer": "(D) |Av|<10;approximately8.9",
    "steps": [
      "Collector-to-base feedback sets the DC current:IB≈(13.7−0.7)/[100k+101×12k]≈9.91 μA,so IC≈0.991 mA and gm≈0.0396 S.",
      "At AC,the feedback lowers the input resistance and limits closed-loop gain. Solving the base and collector KCL equations,including rπ=β/gm,gives Av≈−8.94.",
      "The strong-feedback limiting magnitude is Rfeedback/Rinput=100k/10k=10. Finite transistor gain makes the actual magnitude smaller,selecting D."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Collector-to-base feedback sets the DC current:IB≈(13.7−0.7)/[100k+101×12k]≈9.91 μA,so IC≈0.991 mA and gm≈0.0396 S."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "At AC,the feedback lowers the input resistance and limits closed-loop gain. Solving the base and collector KCL equations,including rπ=β/gm,gives Av≈−8.94."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The strong-feedback limiting magnitude is Rfeedback/Rinput=100k/10k=10. Finite transistor gain makes the actual magnitude smaller,selecting D."
            },
            {
              "equation": "A_v≈−8.94;|A_v|<frac{100 kΩ}{10 kΩ}=10"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "|Av|>200",
        "|Av|>100",
        "|Av|>20",
        "|Av|<10"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "figure": "pyq-figures/g12-44.svg",
    "figureAlt": "GATE 2012 Q44 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-45",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "networks",
    "number": 45,
    "ref": "GATE 2012 · Booklet A · Q45",
    "file": "EC2012.pdf",
    "page": 10,
    "prompt": "In the shown network,VA−VB=6 V across the upper2 Ω resistor. Find VC−VD across the central1 Ω branch parallel to a2 A source directed C→D.",
    "answer": "(A) −5 V",
    "steps": [
      "The upper branch carries(6 V)/(2 Ω)=3 A from the left half to the right half.",
      "The only other connections between the halves are the central1 Ω resistor and2 A source. KCL for either half requires total central current C→D to be−3 A.",
      "Therefore(VC−VD)/1+2=−3,giving VC−VD=−5 V. The surrounding R values cancel from this cut-set argument."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The upper branch carries(6 V)/(2 Ω)=3 A from the left half to the right half."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The only other connections between the halves are the central1 Ω resistor and2 A source. KCL for either half requires total central current C→D to be−3 A."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Therefore(VC−VD)/1+2=−3,giving VC−VD=−5 V. The surrounding R values cancel from this cut-set argument."
            },
            {
              "equation": "frac{V_C−V_D}{1}+2=−3;V_C−V_D=−5 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "−5 V",
        "2 V",
        "3 V",
        "6 V"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "figure": "pyq-figures/g12-45.svg",
    "figureAlt": "GATE 2012 Q45 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-46",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "math",
    "number": 46,
    "ref": "GATE 2012 · Booklet A · Q46",
    "file": "EC2012.pdf",
    "page": 10,
    "prompt": "Find the maximum of f(x)=x³−9x²+24x+5 on[1,6].",
    "answer": "(C) 41",
    "steps": [
      "Differentiate:f′=3x²−18x+24=3(x−2)(x−4). Interior stationary points are2 and4.",
      "Evaluate f at both endpoints and stationary points:f(1)=21,f(2)=25,f(4)=21,f(6)=41.",
      "The largest of these values is41 at x=6."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Differentiate:f′=3x²−18x+24=3(x−2)(x−4). Interior stationary points are2 and4."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Evaluate f at both endpoints and stationary points:f(1)=21,f(2)=25,f(4)=21,f(6)=41."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The largest of these values is41 at x=6."
            },
            {
              "equation": "max_{1≤x≤6}f(x)=f(6)=41"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "21",
        "25",
        "41",
        "46"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-47",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "math",
    "number": 47,
    "ref": "GATE 2012 · Booklet A · Q47",
    "file": "EC2012.pdf",
    "page": 10,
    "prompt": "For A=[[5,−3],[2,0]],express A³ as a linear combination of A and I.",
    "answer": "(B) 19A−30I",
    "steps": [
      "The trace is5 and determinant6,so the characteristic polynomial isλ²−5λ+6.",
      "Cayley–Hamilton gives A²=5A−6I. Multiply by A to get A³=5A²−6A.",
      "Substitute again:A³=5(5A−6I)−6A=19A−30I."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The trace is5 and determinant6,so the characteristic polynomial isλ²−5λ+6."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Cayley–Hamilton gives A²=5A−6I. Multiply by A to get A³=5A²−6A."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Substitute again:A³=5(5A−6I)−6A=19A−30I."
            },
            {
              "equation": "A^3=5(5A−6I)−6A=19A−30I"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "15A+12I",
        "19A−30I",
        "17A+15I",
        "17A+21I"
      ]
    },
    "archivedKey": "B",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-48",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "networks",
    "number": 48,
    "ref": "GATE 2012 · Booklet A · Q48",
    "file": "EC2012.pdf",
    "page": 11,
    "prompt": "With10 V applied at port A,a linear two-port supplies3 A to1 Ω at port B and2 A to2.5 Ω. Find current into7 Ω at B.",
    "answer": "(C) 1 A",
    "steps": [
      "Represent port B by its Thévenin equivalent at the fixed10 V input. The data give Vth=3(Rth+1)=2(Rth+2.5).",
      "Solving gives Rth=2 Ω and Vth=9 V.",
      "For7 Ω,the current is9/(2+7)=1 A. Reciprocity is not required for this fixed-input port equivalent."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Represent port B by its Thévenin equivalent at the fixed10 V input. The data give Vth=3(Rth+1)=2(Rth+2.5)."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Solving gives Rth=2 Ω and Vth=9 V."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "For7 Ω,the current is9/(2+7)=1 A. Reciprocity is not required for this fixed-input port equivalent."
            },
            {
              "equation": "R_{th}=2 Ω;V_{th}=9 V;I=frac{9}{2+7}=1 A"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "3/7 A",
        "5/7 A",
        "1 A",
        "9/7 A"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-49",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "networks",
    "number": 49,
    "ref": "GATE 2012 · Booklet A · Q49",
    "file": "EC2012.pdf",
    "page": 11,
    "prompt": "For the same two-port,10 V at A gives Vth=9 V,Rth=2 Ω at B. At6 V input,a1 Ω load draws7/3 A. Find open-circuit B voltage for8 V input.",
    "answer": "(C) 8 V",
    "steps": [
      "At6 V input,the open-circuit Thévenin voltage is(7/3)(2+1)=7 V.",
      "The output open-circuit voltage is affine in the applied input for a linear network allowing fixed internal sources. The two observations are(6,7) and(10,9).",
      "At the midpoint input8 V,the output is the midpoint(7+9)/2=8 V."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "At6 V input,the open-circuit Thévenin voltage is(7/3)(2+1)=7 V."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The output open-circuit voltage is affine in the applied input for a linear network allowing fixed internal sources. The two observations are(6,7) and(10,9)."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "At the midpoint input8 V,the output is the midpoint(7+9)/2=8 V."
            },
            {
              "equation": "V_{oc}(8)=frac{V_{oc}(6)+V_{oc}(10)}{2}=8 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "6 V",
        "7 V",
        "8 V",
        "9 V"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-50",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "devices",
    "number": 50,
    "ref": "GATE 2012 · Booklet A · Q50",
    "file": "EC2012.pdf",
    "page": 11,
    "prompt": "For the source geometry shown,the transistor width is1 μm,gate overlap is20 nm,oxide thickness1 nm,source length and depth are each0.2 μm,and junction depletion width is10 nm. Use ε₀=8.9×10⁻¹² F/m,εr,ox=3.9 and εr,Si=11.7. Find gate-source overlap capacitance.",
    "answer": "(A) Approximately0.7 fF",
    "steps": [
      "The overlap area is width×overlap length=(10⁻⁶)(20×10⁻⁹)=2×10⁻¹⁴ m².",
      "Use the parallel-plate oxide capacitance C=εoxA/tox.",
      "The result is3.9×8.9×10⁻¹²×2×10⁻¹⁴/10⁻⁹≈6.94×10⁻¹⁶ F=0.694 fF."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The overlap area is width×overlap length=(10⁻⁶)(20×10⁻⁹)=2×10⁻¹⁴ m²."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Use the parallel-plate oxide capacitance C=εoxA/tox."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The result is3.9×8.9×10⁻¹²×2×10⁻¹⁴/10⁻⁹≈6.94×10⁻¹⁶ F=0.694 fF."
            },
            {
              "equation": "C_{ov}=frac{3.9×8.9×10^{−12}×2×10^{−14}}{10^{−9}}≈0.7 fF"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0.7 fF",
        "0.7 pF",
        "0.35 fF",
        "0.4 pF"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "figure": "pyq-figures/g12-50.svg",
    "figureAlt": "GATE 2012 Q50 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-51",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "devices",
    "number": 51,
    "ref": "GATE 2012 · Booklet A · Q51",
    "file": "EC2012.pdf",
    "page": 11,
    "prompt": "For the source geometry shown,the transistor width is1 μm,gate overlap is20 nm,oxide thickness1 nm,source length and depth are each0.2 μm,and junction depletion width is10 nm. Use ε₀=8.9×10⁻¹² F/m,εr,ox=3.9 and εr,Si=11.7. Find approximate source-body junction capacitance including bottom and sidewalls.",
    "answer": "(B) Approximately7 fF",
    "steps": [
      "The bottom junction area is1×0.2=0.2 μm². The four sidewalls contribute2(1+0.2)×0.2=0.48 μm².",
      "Total junction area is0.68 μm²=0.68×10⁻¹² m².",
      "Using Cj=εSiA/Wd gives11.7×8.9×10⁻¹²×0.68×10⁻¹²/(10×10⁻⁹)≈7.08 fF."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The bottom junction area is1×0.2=0.2 μm². The four sidewalls contribute2(1+0.2)×0.2=0.48 μm²."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Total junction area is0.68 μm²=0.68×10⁻¹² m²."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Using Cj=εSiA/Wd gives11.7×8.9×10⁻¹²×0.68×10⁻¹²/(10×10⁻⁹)≈7.08 fF."
            },
            {
              "equation": "C_j=frac{11.7×8.9×10^{−12}×0.68×10^{−12}}{10×10^{−9}}≈7 fF"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2 fF",
        "7 fF",
        "2 pF",
        "7 pF"
      ]
    },
    "archivedKey": "B",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "figure": "pyq-figures/g12-51.svg",
    "figureAlt": "GATE 2012 Q51 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-52",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "em",
    "number": 52,
    "ref": "GATE 2012 · Booklet A · Q52",
    "file": "EC2012.pdf",
    "page": 12,
    "prompt": "A very long solid wire of radius a carries uniform DC current density J. How does magnetic-field magnitude scale with radius r inside and outside?",
    "answer": "(C) Proportional to r inside and1/r outside",
    "steps": [
      "Apply Ampère’s law around a concentric circular path: H2πr=Ienclosed.",
      "For r<a,the enclosed current is Jπr²,so H=Jr/2.",
      "For r>a,the enclosed current is fixed at Jπa²,so H=Ja²/(2r)."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Apply Ampère’s law around a concentric circular path: H2πr=Ienclosed."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "For r<a,the enclosed current is Jπr²,so H=Jr/2."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "For r>a,the enclosed current is fixed at Jπa²,so H=Ja²/(2r)."
            },
            {
              "equation": "H(r)=frac{Jr}{2},r<a;H(r)=frac{Ja^2}{2r},r>a"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "r inside,1/r² outside",
        "Zero inside,1/r outside",
        "r inside,1/r outside",
        "Zero inside,1/r² outside"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-53",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "em",
    "number": 53,
    "ref": "GATE 2012 · Booklet A · Q53",
    "file": "EC2012.pdf",
    "page": 12,
    "prompt": "An off-center cylindrical hole of radius b is drilled parallel to a long uniformly current-carrying wire,with hole center displaced by vector d. Describe the field inside the hole.",
    "answer": "(A) Uniform;depends on displacement d,not hole radius b",
    "steps": [
      "Superpose a complete solid wire carrying J with a fictitious cylinder at the hole carrying−J.",
      "At a point whose vectors from the two centers are r and r−d,the internal fields are(J×r)/2 and−[J×(r−d)]/2.",
      "Their sum is(J×d)/2,independent of position in the hole and of its radius. Thus the field is uniform and depends on d."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Superpose a complete solid wire carrying J with a fictitious cylinder at the hole carrying−J."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "At a point whose vectors from the two centers are r and r−d,the internal fields are(J×r)/2 and−[J×(r−d)]/2."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Their sum is(J×d)/2,independent of position in the hole and of its radius. Thus the field is uniform and depends on d."
            },
            {
              "equation": "H=frac{J×r−J×(r−d)}{2}=frac{J×d}{2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Uniform,depends only on d",
        "Uniform,depends only on b",
        "Uniform,depends on b and d",
        "Nonuniform"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "figure": "pyq-figures/g12-53.svg",
    "figureAlt": "GATE 2012 Q53 source diagram",
    "figureCaption": "Source vector diagram · corrected missing Symbol-font labels · click to enlarge"
  },
  {
    "id": "g12-54",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "control",
    "number": 54,
    "ref": "GATE 2012 · Booklet A · Q54",
    "file": "EC2012.pdf",
    "page": 12,
    "prompt": "For Gc(s)=(s+a)/(s+b),which listed a,b give a stable minimum-phase lead compensator?",
    "answer": "(A) a=1,b=2",
    "steps": [
      "A lead section places its zero nearer the origin than its pole.",
      "For this form,the stable minimum-phase condition is0<a<b.",
      "Only a=1,b=2 satisfies it. The positive phase lead is atanω−atan(ω/2)."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "A lead section places its zero nearer the origin than its pole."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "For this form,the stable minimum-phase condition is0<a<b."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Only a=1,b=2 satisfies it. The positive phase lead is atanω−atan(ω/2)."
            },
            {
              "equation": "0<a<b;G_c(s)=frac{s+1}{s+2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "a1,b2",
        "a3,b2",
        "a−3,b−1",
        "a3,b1"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-55",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "control",
    "number": 55,
    "ref": "GATE 2012 · Booklet A · Q55",
    "file": "EC2012.pdf",
    "page": 12,
    "prompt": "At which angular frequency is the lead phase of(s+1)/(s+2) maximum?",
    "answer": "(A) √2 rad/s",
    "steps": [
      "The phase isφ(ω)=atan(ω/1)−atan(ω/2).",
      "Setting its derivative to zero givesω²=ab for a first-order lead section.",
      "Here a=1,b=2,so the peak is at√2 rad/s."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The phase isφ(ω)=atan(ω/1)−atan(ω/2)."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Setting its derivative to zero givesω²=ab for a first-order lead section."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Here a=1,b=2,so the peak is at√2 rad/s."
            },
            {
              "equation": "ω_m=sqrt{ab}=sqrt{2} rad/s"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "√2",
        "√3",
        "√6",
        "1/√3"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-56",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "apt",
    "number": 56,
    "ref": "GATE 2012 · Booklet A · Q56",
    "file": "EC2012.pdf",
    "page": 13,
    "prompt": "Given1.001¹²⁵⁹≈3.52 and1.001²⁰⁶²≈7.85,estimate1.001³³²¹.",
    "answer": "(D) 27.64",
    "steps": [
      "The exponent3321 equals1259+2062.",
      "For a common base,adding exponents multiplies the powers.",
      "Thus the requested value is approximately3.52×7.85=27.632,nearest27.64."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The exponent3321 equals1259+2062."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "For a common base,adding exponents multiplies the powers."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Thus the requested value is approximately3.52×7.85=27.632,nearest27.64."
            },
            {
              "equation": "1.001^{3321}=1.001^{1259}×1.001^{2062}≈27.64"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2.23",
        "4.33",
        "11.37",
        "27.64"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-57",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "apt",
    "number": 57,
    "ref": "GATE 2012 · Booklet A · Q57",
    "file": "EC2012.pdf",
    "page": 13,
    "prompt": "Complete:If the tired soldier wanted to lie down,he ___ the mattress out on the balcony.",
    "answer": "(A) Should take",
    "steps": [
      "The sentence describes a present recommendation arising from the condition.",
      "“Should take” expresses that recommendation naturally.",
      "“Should have taken” refers to an earlier missed action,while the other choices do not fit the intended modal meaning."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The sentence describes a present recommendation arising from the condition."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "“Should take” expresses that recommendation naturally."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "“Should have taken” refers to an earlier missed action,while the other choices do not fit the intended modal meaning."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Should take",
        "Shall take",
        "Should have taken",
        "Will have taken"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-58",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "apt",
    "number": 58,
    "ref": "GATE 2012 · Booklet A · Q58",
    "file": "EC2012.pdf",
    "page": 13,
    "prompt": "Choose the word for impressive calmness despite a serious situation.",
    "answer": "(D) Nonchalance",
    "steps": [
      "The contrast is between a grave situation and an unusually unconcerned manner.",
      "“Nonchalance” means a calm,apparently unconcerned attitude.",
      "The other choices refer to poverty,naming systems or envy and do not express this contrast."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The contrast is between a grave situation and an unusually unconcerned manner."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "“Nonchalance” means a calm,apparently unconcerned attitude."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The other choices refer to poverty,naming systems or envy and do not express this contrast."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Beggary",
        "Nomenclature",
        "Jealousy",
        "Nonchalance"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-59",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "apt",
    "number": 59,
    "ref": "GATE 2012 · Booklet A · Q59",
    "file": "EC2012.pdf",
    "page": 13,
    "prompt": "Which word is closest to “latitude” in the sense of scope to act?",
    "answer": "(B) Freedom",
    "steps": [
      "Besides its geographic meaning,latitude means room or freedom to choose how to act.",
      "The context asks for that ordinary figurative sense.",
      "“Freedom” is the matching choice."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Besides its geographic meaning,latitude means room or freedom to choose how to act."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The context asks for that ordinary figurative sense."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "“Freedom” is the matching choice."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Eligibility",
        "Freedom",
        "Coercion",
        "Meticulousness"
      ]
    },
    "archivedKey": "B",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-60",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "apt",
    "number": 60,
    "ref": "GATE 2012 · Booklet A · Q60",
    "file": "EC2012.pdf",
    "page": 13,
    "prompt": "The archived grammar item asks which part to replace in“I requested that he should be given the driving test today instead of tomorrow.” What does its key select?",
    "answer": "(B) “Should be given”",
    "steps": [
      "The archived key selects the verbal phrase“should be given”.",
      "The intended mandative-subjunctive revision is“I requested that he be given the driving test today instead of tomorrow.”",
      "This expresses the request with the base-form subjunctive“be”,without“should”."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The archived key selects the verbal phrase“should be given”."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The intended mandative-subjunctive revision is“I requested that he be given the driving test today instead of tomorrow.”"
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "This expresses the request with the base-form subjunctive“be”,without“should”."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Requested that",
        "Should be given",
        "The driving test",
        "Instead of tomorrow"
      ]
    },
    "archivedKey": "B",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ],
    "reviewNote": "British English also permits mandative should after requested that,so the original construction is not universally ungrammatical. B records the archived examination key and its intended revision."
  },
  {
    "id": "g12-61",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "apt",
    "number": 61,
    "ref": "GATE 2012 · Booklet A · Q61",
    "file": "EC2012.pdf",
    "page": 13,
    "prompt": "A passage credits strict discipline with keeping Roman legions cohesive and effective even under unfavorable conditions. Which summary fits?",
    "answer": "(A) Regimentation sustained effectiveness in adversity",
    "steps": [
      "The central claim links discipline to obedience,cohesion and continued fighting.",
      "The adverse circumstances reinforce that discipline supported performance despite difficulty.",
      "The best summary is that thorough regimentation was a main reason for their effectiveness,not that discipline caused the adverse conditions."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "The central claim links discipline to obedience,cohesion and continued fighting."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The adverse circumstances reinforce that discipline supported performance despite difficulty."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The best summary is that thorough regimentation was a main reason for their effectiveness,not that discipline caused the adverse conditions."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Regimentation sustained effectiveness despite adversity",
        "Soldiers were treated as animals",
        "Discipline was inherited from seniors",
        "Discipline caused adverse odds"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-62",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "apt",
    "number": 62,
    "ref": "GATE 2012 · Booklet A · Q62",
    "file": "EC2012.pdf",
    "page": 14,
    "prompt": "A person has14 notes,all₹10 or₹20,totaling₹230. How many₹10 notes are there?",
    "answer": "(A) 5",
    "steps": [
      "Let x be the number of₹10 notes;then14−x notes are₹20.",
      "The total-value equation is10x+20(14−x)=230.",
      "Simplifying gives280−10x=230,hence x=5."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Let x be the number of₹10 notes;then14−x notes are₹20."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The total-value equation is10x+20(14−x)=230."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "Simplifying gives280−10x=230,hence x=5."
            },
            {
              "equation": "10x+20(14−x)=230;x=5"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "5",
        "6",
        "9",
        "10"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-63",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "apt",
    "number": 63,
    "ref": "GATE 2012 · Booklet A · Q63",
    "file": "EC2012.pdf",
    "page": 14,
    "prompt": "Eight similar rice bags contain one heavier bag. What is the minimum worst-case number of balance weighings needed to locate it?",
    "answer": "(A) 2",
    "steps": [
      "One weighing has at most three outcomes,so it cannot distinguish eight candidates. Two weighings have up to3²=9 outcome paths.",
      "Weigh three bags against three. If balanced,the heavy bag is among the remaining two;weigh those against each other.",
      "If the first weighing is unbalanced,the heavy bag is among the three on the heavier side. Weigh two of those;the result identifies one of them or the unweighed third. Thus two always suffice."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "One weighing has at most three outcomes,so it cannot distinguish eight candidates. Two weighings have up to3²=9 outcome paths."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "Weigh three bags against three. If balanced,the heavy bag is among the remaining two;weigh those against each other."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "If the first weighing is unbalanced,the heavy bag is among the three on the heavier side. Weigh two of those;the result identifies one of them or the unweighed third. Thus two always suffice."
            },
            {
              "equation": "3^1<8≤3^2"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2",
        "3",
        "4",
        "8"
      ]
    },
    "archivedKey": "A",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-64",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "apt",
    "number": 64,
    "ref": "GATE 2012 · Booklet A · Q64",
    "file": "EC2012.pdf",
    "page": 14,
    "prompt": "A monthly budget lists food₹4000,clothing₹1200,rent₹2000,savings₹1500 and other expenses₹1800. Approximately what percentage is not saved?",
    "answer": "(D) 86%",
    "steps": [
      "Total budget is4000+1200+2000+1500+1800=10500.",
      "The nonsavings amount is10500−1500=9000.",
      "The percentage is100×9000/10500≈85.71%,nearest86%."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Total budget is4000+1200+2000+1500+1800=10500."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "The nonsavings amount is10500−1500=9000."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The percentage is100×9000/10500≈85.71%,nearest86%."
            },
            {
              "equation": "100frac{9000}{10500}≈85.71%≈86%"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "10%",
        "14%",
        "81%",
        "86%"
      ]
    },
    "archivedKey": "D",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  },
  {
    "id": "g12-65",
    "paperId": "gate-2012",
    "exam": "gate",
    "topic": "apt",
    "number": 65,
    "ref": "GATE 2012 · Booklet A · Q65",
    "file": "EC2012.pdf",
    "page": 14,
    "prompt": "Two friends arrive independently and uniformly between1 PM and2 PM. The first waits at most15 minutes. Find meeting probability.",
    "answer": "(C) 7/16",
    "steps": [
      "Represent the two arrival times in minutes by a point in the60×60 square.",
      "They meet when|t₁−t₂|≤15. Failure occupies two corner triangles,each with legs45 minutes.",
      "The failure fraction is2×(45²/2)/60²=9/16. Meeting probability is1−9/16=7/16."
    ],
    "solutionGuide": {
      "sections": [
        {
          "title": "Identify the method",
          "blocks": [
            {
              "text": "Represent the two arrival times in minutes by a point in the60×60 square."
            }
          ]
        },
        {
          "title": "Apply the method",
          "blocks": [
            {
              "text": "They meet when|t₁−t₂|≤15. Failure occupies two corner triangles,each with legs45 minutes."
            }
          ]
        },
        {
          "title": "State the result",
          "blocks": [
            {
              "text": "The failure fraction is2×(45²/2)/60²=9/16. Meeting probability is1−9/16=7/16."
            },
            {
              "equation": "P=1−frac{45^2}{60^2}=frac{7}{16}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1/4",
        "1/16",
        "7/16",
        "9/16"
      ]
    },
    "archivedKey": "C",
    "sources": [
      "./papers/EC2012.pdf#page=15"
    ]
  }
];
