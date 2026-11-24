export const gate2013Complete = [
  {
    "id": "g13a-1",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "digital",
    "number": 1,
    "ref": "GATE 2013 · Booklet A · Q1",
    "file": "EC2013.pdf",
    "page": 3,
    "prompt": "A staircase bulb can be toggled by either of two switches, regardless of the other switch’s state. Which logic gate describes this behavior?",
    "answer": "(C) XOR",
    "steps": [
      "Flipping either switch must invert the bulb state. AND and OR fail this requirement for some states of the other input.",
      "XOR is 1 for unequal inputs and 0 for equal inputs. Changing either input always swaps these cases."
    ],
    "solutionGuide": {
      "meaning": "Find the two-input logic operation whose output changes whenever either input changes.",
      "sections": [
        {
          "title": "Test the switching rule",
          "blocks": [
            {
              "text": "Flipping either switch must invert the bulb state. AND and OR fail this requirement for some states of the other input."
            }
          ]
        },
        {
          "title": "Write the truth table",
          "blocks": [
            {
              "text": "XOR is 1 for unequal inputs and 0 for equal inputs. Changing either input always swaps these cases."
            },
            {
              "equation": "Y=A⊕B"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "AND",
        "OR",
        "XOR",
        "NAND"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 1,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-2",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "math",
    "number": 2,
    "ref": "GATE 2013 · Booklet A · Q2",
    "file": "EC2013.pdf",
    "page": 3,
    "prompt": "Express the closed-loop line integral ∮A·dl as a surface or volume integral.",
    "answer": "(D) Integral of curl over an open surface bounded by the loop",
    "steps": [
      "Stokes’ theorem relates circulation to the surface integral of curl, not divergence.",
      "The loop is the boundary of an open surface. The surface normal and loop direction must follow the right-hand rule."
    ],
    "solutionGuide": {
      "meaning": "Choose the theorem that converts circulation around a loop to flux through a spanning surface.",
      "sections": [
        {
          "title": "Identify the theorem",
          "blocks": [
            {
              "text": "Stokes’ theorem relates circulation to the surface integral of curl, not divergence."
            }
          ]
        },
        {
          "title": "Choose the surface",
          "blocks": [
            {
              "text": "The loop is the boundary of an open surface. The surface normal and loop direction must follow the right-hand rule."
            },
            {
              "equation": "∮A·dl=∬(∇×A)·dS"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Integral of curl over a closed surface",
        "Integral of divergence over a closed volume",
        "Integral of divergence over an open volume",
        "Integral of curl over an open surface bounded by the loop"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 2,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-3",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "signals",
    "number": 3,
    "ref": "GATE 2013 · Booklet A · Q3",
    "file": "EC2013.pdf",
    "page": 3,
    "prompt": "Two LTI systems with impulse responses h₁(t) and h₂(t) are cascaded. What is the overall impulse response?",
    "answer": "(C) Convolution",
    "steps": [
      "The first system produces h₁(t). Treat this as the input to the second LTI system.",
      "An LTI system’s output is its input convolved with its impulse response."
    ],
    "solutionGuide": {
      "meaning": "Find the equivalent impulse response when one LTI system feeds the next.",
      "sections": [
        {
          "title": "Pass an impulse through the cascade",
          "blocks": [
            {
              "text": "The first system produces h₁(t). Treat this as the input to the second LTI system."
            }
          ]
        },
        {
          "title": "Apply the convolution rule",
          "blocks": [
            {
              "text": "An LTI system’s output is its input convolved with its impulse response."
            },
            {
              "equation": "h(t)=h_1(t)∗h_2(t)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Product",
        "Sum",
        "Convolution",
        "Difference"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 3,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-4",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "devices",
    "number": 4,
    "ref": "GATE 2013 · Booklet A · Q4",
    "file": "EC2013.pdf",
    "page": 3,
    "prompt": "Which sequence best describes current flow in a forward-biased pn junction?",
    "answer": "(A) Minority-carrier injection, diffusion and recombination",
    "steps": [
      "Forward bias lowers the junction barrier. Electrons enter the p region and holes enter the n region, becoming excess minority carriers there.",
      "These injected carriers diffuse down their concentration gradients and recombine in the quasi-neutral regions."
    ],
    "solutionGuide": {
      "meaning": "Identify how forward bias produces the dominant junction current.",
      "sections": [
        {
          "title": "Explain injection",
          "blocks": [
            {
              "text": "Forward bias lowers the junction barrier. Electrons enter the p region and holes enter the n region, becoming excess minority carriers there."
            }
          ]
        },
        {
          "title": "Explain transport",
          "blocks": [
            {
              "text": "These injected carriers diffuse down their concentration gradients and recombine in the quasi-neutral regions."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Minority-carrier injection, diffusion and recombination",
        "Minority-carrier injection, drift and generation",
        "Minority-carrier extraction, diffusion and generation",
        "Minority-carrier extraction, drift and recombination"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 4,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-5",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "devices",
    "number": 5,
    "ref": "GATE 2013 · Booklet A · Q5",
    "file": "EC2013.pdf",
    "page": 3,
    "prompt": "Compared with wet oxidation, what does dry oxidation produce in IC fabrication?",
    "answer": "(D) Better oxide, slower growth",
    "steps": [
      "Steam grows silicon dioxide faster than dry oxygen under comparable processing conditions.",
      "Dry oxidation gives a denser, higher-quality oxide with better interface and electrical properties, but grows more slowly."
    ],
    "solutionGuide": {
      "meaning": "Compare oxide quality and growth rate for oxygen and steam processes.",
      "sections": [
        {
          "title": "Compare the processes",
          "blocks": [
            {
              "text": "Steam grows silicon dioxide faster than dry oxygen under comparable processing conditions."
            }
          ]
        },
        {
          "title": "Select the tradeoff",
          "blocks": [
            {
              "text": "Dry oxidation gives a denser, higher-quality oxide with better interface and electrical properties, but grows more slowly."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Better oxide, faster growth",
        "Poorer oxide, faster growth",
        "Poorer oxide, slower growth",
        "Better oxide, slower growth"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 5,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-6",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "math",
    "number": 6,
    "ref": "GATE 2013 · Booklet A · Q6",
    "file": "EC2013.pdf",
    "page": 3,
    "prompt": "What is the largest listed angle for which sinθ≈θ has error within 10%, with θ in radians?",
    "answer": "Archived key: (C) 50°. Under ordinary relative error, the largest valid listed choice is (B) 18°.",
    "steps": [
      "At 50°, θ≈0.8727 and sinθ≈0.7660. The relative error is about 12.2% using θ as reference, or 13.9% using sinθ. Thus 50° actually exceeds 10%.",
      "18° is within 10%, while the archived key selects 50°. The selected key appears to use a coarse approximation or a different unstated error interpretation. Do not treat 50° as a rigorous 10% relative-error bound."
    ],
    "solutionGuide": {
      "meaning": "Check the small-angle approximation at the candidate angles.",
      "sections": [
        {
          "title": "Compute the candidate error",
          "blocks": [
            {
              "text": "At 50°, θ≈0.8727 and sinθ≈0.7660. The relative error is about 12.2% using θ as reference, or 13.9% using sinθ. Thus 50° actually exceeds 10%."
            }
          ]
        },
        {
          "title": "Interpret the archived choice",
          "blocks": [
            {
              "text": "18° is within 10%, while the archived key selects 50°. The selected key appears to use a coarse approximation or a different unstated error interpretation. Do not treat 50° as a rigorous 10% relative-error bound."
            },
            {
              "equation": "frac{0.8727−0.7660}{0.8727}≈0.122"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "10°",
        "18°",
        "50°",
        "90°"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 6,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "Archived key: C (50°). Under ordinary relative-error definitions, B (18°) is the largest listed valid angle. The key and the stated tolerance disagree."
  },
  {
    "id": "g13a-7",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "math",
    "number": 7,
    "ref": "GATE 2013 · Booklet A · Q7",
    "file": "EC2013.pdf",
    "page": 4,
    "prompt": "Find ∇·A for A=x x̂+y ŷ+z ẑ.",
    "answer": "(D) 3",
    "steps": [
      "In Cartesian coordinates, divergence is ∂Ax/∂x+∂Ay/∂y+∂Az/∂z.",
      "Each derivative equals 1, so their sum is 3."
    ],
    "solutionGuide": {
      "meaning": "Differentiate each Cartesian component with respect to its corresponding coordinate.",
      "sections": [
        {
          "title": "Apply divergence",
          "blocks": [
            {
              "text": "In Cartesian coordinates, divergence is ∂Ax/∂x+∂Ay/∂y+∂Az/∂z."
            }
          ]
        },
        {
          "title": "Evaluate the derivatives",
          "blocks": [
            {
              "text": "Each derivative equals 1, so their sum is 3."
            },
            {
              "equation": "∇·A=1+1+1=3"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1/3",
        "1",
        "3"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 7,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-8",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "signals",
    "number": 8,
    "ref": "GATE 2013 · Booklet A · Q8",
    "file": "EC2013.pdf",
    "page": 4,
    "prompt": "An LTI system has h(t)=t u(t). Find its response to x(t)=u(t−1).",
    "answer": "(C) (t−1)²u(t−1)/2",
    "steps": [
      "For t<1 there is no overlap. For t≥1, the convolution integrates h(τ)=τ from 0 to t−1.",
      "Integrating the ramp gives half the squared interval length. The delayed unit step enforces zero output before t=1."
    ],
    "solutionGuide": {
      "meaning": "Convolve a causal ramp impulse response with a delayed step.",
      "sections": [
        {
          "title": "Find the integration interval",
          "blocks": [
            {
              "text": "For t<1 there is no overlap. For t≥1, the convolution integrates h(τ)=τ from 0 to t−1."
            },
            {
              "equation": "y(t)=∫_0^{t−1}τ dτ"
            }
          ]
        },
        {
          "title": "Evaluate",
          "blocks": [
            {
              "text": "Integrating the ramp gives half the squared interval length. The delayed unit step enforces zero output before t=1."
            },
            {
              "equation": "y(t)=frac{(t−1)^2}{2}u(t−1)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "t²u(t)/2",
        "t(t−1)u(t−1)/2",
        "(t−1)²u(t−1)/2",
        "(t²−1)u(t−1)/2"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 8,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-9",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "control",
    "number": 9,
    "ref": "GATE 2013 · Booklet A · Q9",
    "file": "EC2013.pdf",
    "page": 4,
    "prompt": "The Bode magnitude is 32 dB at 1 rad/s and −8 dB at 10 rad/s, with negative phase. Find G(s).",
    "answer": "(B) 39.8/s²",
    "steps": [
      "The magnitude falls by 40 dB over one decade. Two poles at the origin give this slope and negative phase.",
      "At ω=1, the magnitude equals K. Convert 32 dB to a linear amplitude ratio."
    ],
    "solutionGuide": {
      "meaning": "Use the magnitude slope to find the number of integrators and the 1-rad/s value to find gain.",
      "sections": [
        {
          "title": "Find the slope",
          "blocks": [
            {
              "text": "The magnitude falls by 40 dB over one decade. Two poles at the origin give this slope and negative phase."
            },
            {
              "equation": "G(s)=frac{K}{s^2}"
            }
          ]
        },
        {
          "title": "Compute the gain",
          "blocks": [
            {
              "text": "At ω=1, the magnitude equals K. Convert 32 dB to a linear amplitude ratio."
            },
            {
              "equation": "K=10^{32/20}≈39.8"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "39.8/s",
        "39.8/s²",
        "32/s",
        "32/s²"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 9,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-9.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q9",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-10",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "analog",
    "number": 10,
    "ref": "GATE 2013 · Booklet A · Q10",
    "file": "EC2013.pdf",
    "page": 4,
    "prompt": "For the shown ideal op-amp and silicon npn transistor circuit, find Vout. The noninverting input and transistor base are grounded.",
    "answer": "(B) −0.7 V",
    "steps": [
      "Negative feedback holds the inverting node near 0 V. The 5 V source therefore supplies 5 mA through the 1 kΩ resistor, which the collector takes.",
      "The grounded base must be approximately 0.7 V above the emitter. The emitter is the op-amp output."
    ],
    "solutionGuide": {
      "meaning": "Determine the emitter voltage required for the transistor to provide feedback current.",
      "sections": [
        {
          "title": "Find the feedback current",
          "blocks": [
            {
              "text": "Negative feedback holds the inverting node near 0 V. The 5 V source therefore supplies 5 mA through the 1 kΩ resistor, which the collector takes."
            },
            {
              "equation": "I_C≈frac{5}{1000}=5 mA"
            }
          ]
        },
        {
          "title": "Use the base-emitter drop",
          "blocks": [
            {
              "text": "The grounded base must be approximately 0.7 V above the emitter. The emitter is the op-amp output."
            },
            {
              "equation": "V_{out}=V_B−0.7=−0.7 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "−15 V",
        "−0.7 V",
        "+0.7 V",
        "+15 V"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 10,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-10.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q10",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-11",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "networks",
    "number": 11,
    "ref": "GATE 2013 · Booklet A · Q11",
    "file": "EC2013.pdf",
    "page": 5,
    "prompt": "Every resistor in a delta network is multiplied by k>0. By what factor do the equivalent star resistors change?",
    "answer": "(B) k",
    "steps": [
      "A star arm equals the product of its adjacent delta resistances divided by the sum of all three delta resistances.",
      "The numerator gains k² and the denominator gains k, leaving one factor of k. The same applies to all three arms."
    ],
    "solutionGuide": {
      "meaning": "Apply the delta-to-star conversion and track the scale factor.",
      "sections": [
        {
          "title": "Write one star resistor",
          "blocks": [
            {
              "text": "A star arm equals the product of its adjacent delta resistances divided by the sum of all three delta resistances."
            },
            {
              "equation": "R_A=frac{R_bR_c}{R_a+R_b+R_c}"
            }
          ]
        },
        {
          "title": "Scale all resistances",
          "blocks": [
            {
              "text": "The numerator gains k² and the denominator gains k, leaving one factor of k. The same applies to all three arms."
            },
            {
              "equation": "R_A′=kR_A"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "k²",
        "k",
        "1/k",
        "√k"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 11,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-12",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "digital",
    "number": 12,
    "ref": "GATE 2013 · Booklet A · Q12",
    "file": "EC2013.pdf",
    "page": 5,
    "prompt": "An 8085 executes MVI A,05H; MVI B,05H; PTR: ADD B; DCR B; JNZ PTR; ADI 03H; HLT. Find the final accumulator.",
    "answer": "(A) 17H",
    "steps": [
      "The ADD instruction uses B=5,4,3,2,1. DCR sets the zero flag when B reaches zero, ending the loop.",
      "A starts at 5, then receives 15 and finally 3. Decimal 23 is hexadecimal 17H."
    ],
    "solutionGuide": {
      "meaning": "Trace the values added before the loop counter reaches zero.",
      "sections": [
        {
          "title": "Evaluate the loop",
          "blocks": [
            {
              "text": "The ADD instruction uses B=5,4,3,2,1. DCR sets the zero flag when B reaches zero, ending the loop."
            },
            {
              "equation": "5+4+3+2+1=15"
            }
          ]
        },
        {
          "title": "Include initialization and final addition",
          "blocks": [
            {
              "text": "A starts at 5, then receives 15 and finally 3. Decimal 23 is hexadecimal 17H."
            },
            {
              "equation": "A=5+15+3=23=17H"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "17H",
        "20H",
        "23H",
        "05H"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 12,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-13",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "comm",
    "number": 13,
    "ref": "GATE 2013 · Booklet A · Q13",
    "file": "EC2013.pdf",
    "page": 5,
    "prompt": "A 32-QAM link sends R kbits/s. Find the minimum bandwidth for zero-ISI transmission.",
    "answer": "(B) R/10 kHz",
    "steps": [
      "32-QAM carries log₂32=5 bits per symbol, giving a symbol rate of R/5 ksymbols/s.",
      "With ideal zero-rolloff shaping, the minimum positive-frequency bandwidth is half the symbol rate."
    ],
    "solutionGuide": {
      "meaning": "Convert bit rate to symbol rate and apply the ideal Nyquist bandwidth.",
      "sections": [
        {
          "title": "Find bits per symbol",
          "blocks": [
            {
              "text": "32-QAM carries log₂32=5 bits per symbol, giving a symbol rate of R/5 ksymbols/s."
            },
            {
              "equation": "R_s=frac{R}{5}"
            }
          ]
        },
        {
          "title": "Apply Nyquist shaping",
          "blocks": [
            {
              "text": "With ideal zero-rolloff shaping, the minimum positive-frequency bandwidth is half the symbol rate."
            },
            {
              "equation": "B_{min}=frac{R_s}{2}=frac{R}{10} kHz"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "R/10 Hz",
        "R/10 kHz",
        "R/5 Hz",
        "R/5 kHz"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 13,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-14",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "signals",
    "number": 14,
    "ref": "GATE 2013 · Booklet A · Q14",
    "file": "EC2013.pdf",
    "page": 5,
    "prompt": "Find the fundamental angular frequency of v(t)=30sin(100t)+10cos(300t)+6sin(500t+π/4).",
    "answer": "(A) 100 rad/s",
    "steps": [
      "The three angular frequencies are 100, 300 and 500 rad/s. They are the first, third and fifth harmonics of 100 rad/s.",
      "The phase offset does not change periodicity. The smallest common period is 2π/100."
    ],
    "solutionGuide": {
      "meaning": "Find the greatest common divisor of the angular frequencies.",
      "sections": [
        {
          "title": "Compare the harmonics",
          "blocks": [
            {
              "text": "The three angular frequencies are 100, 300 and 500 rad/s. They are the first, third and fifth harmonics of 100 rad/s."
            }
          ]
        },
        {
          "title": "Find the common period",
          "blocks": [
            {
              "text": "The phase offset does not change periodicity. The smallest common period is 2π/100."
            },
            {
              "equation": "ω_0=100 rad/s"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "100 rad/s",
        "300 rad/s",
        "500 rad/s",
        "1500 rad/s"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 14,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-15",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "analog",
    "number": 15,
    "ref": "GATE 2013 · Booklet A · Q15",
    "file": "EC2013.pdf",
    "page": 6,
    "prompt": "In the shown negative voltage-voltage feedback amplifier, what happens when the feedback gain k increases?",
    "answer": "(A) Input impedance rises; output impedance falls",
    "steps": [
      "Voltage-series feedback opposes the applied input voltage, increasing the input resistance by the desensitivity factor.",
      "Voltage sampling reduces output resistance by the same factor. Increasing feedback strengthens these effects while the loop remains negative and stable."
    ],
    "solutionGuide": {
      "meaning": "Identify the impedance effects of series input mixing and voltage output sampling.",
      "sections": [
        {
          "title": "Examine the input",
          "blocks": [
            {
              "text": "Voltage-series feedback opposes the applied input voltage, increasing the input resistance by the desensitivity factor."
            },
            {
              "equation": "R_{if}=R_i(1+Aβ)"
            }
          ]
        },
        {
          "title": "Examine the output",
          "blocks": [
            {
              "text": "Voltage sampling reduces output resistance by the same factor. Increasing feedback strengthens these effects while the loop remains negative and stable."
            },
            {
              "equation": "R_{of}=frac{R_o}{1+Aβ}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Input impedance rises; output impedance falls",
        "Both impedances rise",
        "Both impedances fall",
        "Input impedance falls; output impedance rises"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 15,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-16",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "signals",
    "number": 16,
    "ref": "GATE 2013 · Booklet A · Q16",
    "file": "EC2013.pdf",
    "page": 6,
    "prompt": "A signal is band-limited to 5 kHz. Which listed sampling rate is invalid?",
    "answer": "(A) 5 kHz",
    "steps": [
      "The Nyquist rate is 2×5=10 kHz. Rates above this permit ideal reconstruction of the stated band-limited signal.",
      "5 kHz is below 10 kHz and causes aliasing. The other listed rates exceed the Nyquist rate."
    ],
    "solutionGuide": {
      "meaning": "Compare each sample rate with twice the highest signal frequency.",
      "sections": [
        {
          "title": "Apply the sampling theorem",
          "blocks": [
            {
              "text": "The Nyquist rate is 2×5=10 kHz. Rates above this permit ideal reconstruction of the stated band-limited signal."
            },
            {
              "equation": "f_s>2f_{max}=10 kHz"
            }
          ]
        },
        {
          "title": "Choose the invalid rate",
          "blocks": [
            {
              "text": "5 kHz is below 10 kHz and causes aliasing. The other listed rates exceed the Nyquist rate."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "5 kHz",
        "12 kHz",
        "15 kHz",
        "20 kHz"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 16,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-17",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "devices",
    "number": 17,
    "ref": "GATE 2013 · Booklet A · Q17",
    "file": "EC2013.pdf",
    "page": 6,
    "prompt": "For a MOSFET in saturation, what does channel-length modulation cause?",
    "answer": "(D) Lower output resistance",
    "steps": [
      "The saturation current rises with drain-source voltage through the factor 1+λVDS.",
      "A nonzero output conductance means a finite output resistance, lower than the ideal infinite value without modulation."
    ],
    "solutionGuide": {
      "meaning": "Relate drain-current dependence on drain voltage to small-signal output resistance.",
      "sections": [
        {
          "title": "Include channel-length modulation",
          "blocks": [
            {
              "text": "The saturation current rises with drain-source voltage through the factor 1+λVDS."
            },
            {
              "equation": "I_D≈I_{D0}(1+λV_{DS})"
            }
          ]
        },
        {
          "title": "Differentiate",
          "blocks": [
            {
              "text": "A nonzero output conductance means a finite output resistance, lower than the ideal infinite value without modulation."
            },
            {
              "equation": "r_o≈frac{1}{λI_D}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Higher gate-source capacitance",
        "Lower transconductance",
        "Lower unity-gain cutoff frequency",
        "Lower output resistance"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 17,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-18",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "control",
    "number": 18,
    "ref": "GATE 2013 · Booklet A · Q18",
    "file": "EC2013.pdf",
    "page": 6,
    "prompt": "Which statement is NOT generally true for a causal stable continuous-time rational LTI system?",
    "answer": "(C) All poles satisfy |s|<1",
    "steps": [
      "For a causal BIBO-stable rational system, the poles must lie strictly in the left half-plane. Zeros do not determine BIBO stability.",
      "There is no requirement that continuous-time pole magnitudes be below 1. A pole at −10 is stable despite having magnitude 10."
    ],
    "solutionGuide": {
      "meaning": "Separate continuous-time stability from the discrete-time unit-circle criterion.",
      "sections": [
        {
          "title": "Use the continuous-time criterion",
          "blocks": [
            {
              "text": "For a causal BIBO-stable rational system, the poles must lie strictly in the left half-plane. Zeros do not determine BIBO stability."
            },
            {
              "equation": "Re(p_k)<0"
            }
          ]
        },
        {
          "title": "Reject the unit-circle rule",
          "blocks": [
            {
              "text": "There is no requirement that continuous-time pole magnitudes be below 1. A pole at −10 is stable despite having magnitude 10."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "All poles lie left of the jω axis",
        "Zeros may lie anywhere in the s-plane",
        "All poles satisfy |s|<1",
        "Characteristic roots lie left of the jω axis"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 18,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-19",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "math",
    "number": 19,
    "ref": "GATE 2013 · Booklet A · Q19",
    "file": "EC2013.pdf",
    "page": 6,
    "prompt": "Find the minimum eigenvalue of the symmetric matrix with rows (3,5,2), (5,12,7), (2,7,5).",
    "answer": "(A) 0",
    "steps": [
      "The second row equals the first plus the third. In fact A(1,−1,1)ᵀ=0, so zero is an eigenvalue.",
      "The trace is 20 and the sum of principal 2×2 minors is 33. The remaining roots are 10±√67, both positive. Thus zero is the minimum."
    ],
    "solutionGuide": {
      "meaning": "Find a zero eigenvalue and verify that no eigenvalue is negative.",
      "sections": [
        {
          "title": "Identify a null vector",
          "blocks": [
            {
              "text": "The second row equals the first plus the third. In fact A(1,−1,1)ᵀ=0, so zero is an eigenvalue."
            },
            {
              "equation": "A(1,−1,1)^T=0"
            }
          ]
        },
        {
          "title": "Check the other eigenvalues",
          "blocks": [
            {
              "text": "The trace is 20 and the sum of principal 2×2 minors is 33. The remaining roots are 10±√67, both positive. Thus zero is the minimum."
            },
            {
              "equation": "λ=0,10−sqrt{67},10+sqrt{67}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 19,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-20",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "math",
    "number": 20,
    "ref": "GATE 2013 · Booklet A · Q20",
    "file": "EC2013.pdf",
    "page": 7,
    "prompt": "All a₀,…,a₄ are positive. What must hold for f(x)=a₄x⁴+a₃x³+a₂x²+a₁x−a₀?",
    "answer": "(D) At least one positive and one negative real root",
    "steps": [
      "The constant term is negative: f(0)=−a₀<0.",
      "The positive leading quartic term dominates at both infinities, so f(x) tends to +∞ in both directions. Continuity gives at least one crossing on each side of zero."
    ],
    "solutionGuide": {
      "meaning": "Use continuity and the signs at zero and at large positive and negative x.",
      "sections": [
        {
          "title": "Evaluate at zero",
          "blocks": [
            {
              "text": "The constant term is negative: f(0)=−a₀<0."
            },
            {
              "equation": "f(0)<0"
            }
          ]
        },
        {
          "title": "Examine both ends",
          "blocks": [
            {
              "text": "The positive leading quartic term dominates at both infinities, so f(x) tends to +∞ in both directions. Continuity gives at least one crossing on each side of zero."
            },
            {
              "equation": "f(x)→+∞ as x→±∞"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "No real roots",
        "No negative real root",
        "An odd number of real roots",
        "At least one positive and one negative real root"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 20,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-21",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "signals",
    "number": 21,
    "ref": "GATE 2013 · Booklet A · Q21",
    "file": "EC2013.pdf",
    "page": 7,
    "prompt": "An ideal integrator G(s)=1/s starts from rest. Find its response to u(t).",
    "answer": "(B) t u(t)",
    "steps": [
      "The unit step has Laplace transform 1/s. With zero initial state, Y=GX.",
      "The inverse transform of 1/s² is the causal ramp."
    ],
    "solutionGuide": {
      "meaning": "Multiply the step transform by the integrator transfer function.",
      "sections": [
        {
          "title": "Transform the input",
          "blocks": [
            {
              "text": "The unit step has Laplace transform 1/s. With zero initial state, Y=GX."
            },
            {
              "equation": "Y(s)=frac{1}{s}frac{1}{s}=frac{1}{s^2}"
            }
          ]
        },
        {
          "title": "Invert the transform",
          "blocks": [
            {
              "text": "The inverse transform of 1/s² is the causal ramp."
            },
            {
              "equation": "y(t)=t u(t)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "u(t)",
        "t u(t)",
        "t²u(t)/2",
        "e^(−t)u(t)"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 21,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-22",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "networks",
    "number": 22,
    "ref": "GATE 2013 · Booklet A · Q22",
    "file": "EC2013.pdf",
    "page": 7,
    "prompt": "Find V₂(s)/V₁(s) for a series 100 μF input capacitor feeding a series 10 kΩ resistor and 100 μF capacitor to ground; V₂ is across the resistor-capacitor branch.",
    "answer": "(D) (s+1)/(s+2)",
    "steps": [
      "Each capacitor has impedance 1/(sC). The output branch has impedance R+1/(sC), while the total series impedance is R+2/(sC).",
      "Here RC=10000×100 μF=1 second. Multiply numerator and denominator by sC."
    ],
    "solutionGuide": {
      "meaning": "Treat the circuit as a frequency-dependent voltage divider.",
      "sections": [
        {
          "title": "Write the impedances",
          "blocks": [
            {
              "text": "Each capacitor has impedance 1/(sC). The output branch has impedance R+1/(sC), while the total series impedance is R+2/(sC)."
            },
            {
              "equation": "frac{V_2}{V_1}=frac{R+1/(sC)}{R+2/(sC)}"
            }
          ]
        },
        {
          "title": "Substitute RC",
          "blocks": [
            {
              "text": "Here RC=10000×100 μF=1 second. Multiply numerator and denominator by sC."
            },
            {
              "equation": "frac{V_2}{V_1}=frac{sRC+1}{sRC+2}=frac{s+1}{s+2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(0.5s+1)/(s+1)",
        "(3s+6)/(s+2)",
        "(s+2)/(s+1)",
        "(s+1)/(s+2)"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 22,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-22.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q22",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-23",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "networks",
    "number": 23,
    "ref": "GATE 2013 · Booklet A · Q23",
    "file": "EC2013.pdf",
    "page": 7,
    "prompt": "A sinusoidal source has internal impedance 4+j3 Ω. Which purely resistive load extracts maximum average power?",
    "answer": "(C) 5 Ω",
    "steps": [
      "With source amplitude fixed, load power is proportional to R/[(R+4)²+3²].",
      "Setting the derivative to zero gives R²=4²+3². Choose the positive resistance."
    ],
    "solutionGuide": {
      "meaning": "Optimize power over a real load resistance; complex-conjugate matching is unavailable.",
      "sections": [
        {
          "title": "Express load power",
          "blocks": [
            {
              "text": "With source amplitude fixed, load power is proportional to R/[(R+4)²+3²]."
            },
            {
              "equation": "P∝frac{R}{(R+4)^2+9}"
            }
          ]
        },
        {
          "title": "Differentiate",
          "blocks": [
            {
              "text": "Setting the derivative to zero gives R²=4²+3². Choose the positive resistance."
            },
            {
              "equation": "R=sqrt{4^2+3^2}=5 Ω"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "3 Ω",
        "4 Ω",
        "5 Ω",
        "7 Ω"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 23,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-24",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "em",
    "number": 24,
    "ref": "GATE 2013 · Booklet A · Q24",
    "file": "EC2013.pdf",
    "page": 7,
    "prompt": "A device has return loss 20 dB. Find VSWR and |Γ|.",
    "answer": "(A) 1.22 and 0.1",
    "steps": [
      "Return loss is −20log₁₀|Γ|. A 20 dB return loss therefore means |Γ|=0.1.",
      "Use the ratio of maximum to minimum standing-wave amplitudes."
    ],
    "solutionGuide": {
      "meaning": "Convert return loss to reflection magnitude, then compute standing-wave ratio.",
      "sections": [
        {
          "title": "Find reflection magnitude",
          "blocks": [
            {
              "text": "Return loss is −20log₁₀|Γ|. A 20 dB return loss therefore means |Γ|=0.1."
            },
            {
              "equation": "|Γ|=10^{−20/20}=0.1"
            }
          ]
        },
        {
          "title": "Calculate VSWR",
          "blocks": [
            {
              "text": "Use the ratio of maximum to minimum standing-wave amplitudes."
            },
            {
              "equation": "VSWR=frac{1+|Γ|}{1−|Γ|}=frac{1.1}{0.9}≈1.22"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1.22 and 0.1",
        "0.81 and 0.1",
        "−1.22 and 0.1",
        "2.44 and 0.2"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 24,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-25",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "comm",
    "number": 25,
    "ref": "GATE 2013 · Booklet A · Q25",
    "file": "EC2013.pdf",
    "page": 7,
    "prompt": "Let g(t)=e^(−πt²). It is applied to its zero-delay matched filter h(t)=g*(−t). Find the output Fourier transform, using f in Hz.",
    "answer": "(D) e^(−2πf²)",
    "steps": [
      "With the e^(−j2πft) convention, e^(−πt²) transforms to e^(−πf²).",
      "The zero-delay matched filter has H(f)=G*(f), so the output spectrum is |G(f)|²."
    ],
    "solutionGuide": {
      "meaning": "Use the Gaussian transform pair and the matched-filter frequency response.",
      "sections": [
        {
          "title": "Transform the Gaussian",
          "blocks": [
            {
              "text": "With the e^(−j2πft) convention, e^(−πt²) transforms to e^(−πf²)."
            },
            {
              "equation": "G(f)=e^{−πf^2}"
            }
          ]
        },
        {
          "title": "Multiply the spectra",
          "blocks": [
            {
              "text": "The zero-delay matched filter has H(f)=G*(f), so the output spectrum is |G(f)|²."
            },
            {
              "equation": "Y(f)=|G(f)|^2=e^{−2πf^2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "e^(−πf²)",
        "e^(−πf²/2)",
        "e^(−π|f|)",
        "e^(−2πf²)"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 25,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "A matched filter with an additional sampling delay T adds the phase factor e^(−j2πfT). The answer choices use the zero-delay convention."
  },
  {
    "id": "g13a-26",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "math",
    "number": 26,
    "ref": "GATE 2013 · Booklet A · Q26",
    "file": "EC2013.pdf",
    "page": 8,
    "prompt": "Independent zero-mean Gaussian variables U and V have variances 1/4 and 1/9. Find P(3V≥2U).",
    "answer": "(B) 1/2",
    "steps": [
      "Z=3V−2U is Gaussian. Independence gives variance 9(1/9)+4(1/4)=2 and mean zero.",
      "A continuous zero-mean Gaussian has half its probability on either side of zero; equality has zero probability."
    ],
    "solutionGuide": {
      "meaning": "Reduce the event to the sign of a zero-mean Gaussian variable.",
      "sections": [
        {
          "title": "Form a new Gaussian",
          "blocks": [
            {
              "text": "Z=3V−2U is Gaussian. Independence gives variance 9(1/9)+4(1/4)=2 and mean zero."
            },
            {
              "equation": "Z∼N(0,2)"
            }
          ]
        },
        {
          "title": "Use symmetry",
          "blocks": [
            {
              "text": "A continuous zero-mean Gaussian has half its probability on either side of zero; equality has zero probability."
            },
            {
              "equation": "P(3V≥2U)=P(Z≥0)=frac{1}{2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "4/9",
        "1/2",
        "2/3",
        "5/9"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 26,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-27",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "math",
    "number": 27,
    "ref": "GATE 2013 · Booklet A · Q27",
    "file": "EC2013.pdf",
    "page": 8,
    "prompt": "Find the determinant of the 4×4 matrix with 2 on its diagonal and 1 everywhere else. Use det(I+AB)=det(I+BA).",
    "answer": "(B) 5",
    "steps": [
      "Let u=(1,1,1,1)ᵀ. The matrix is I₄+uuᵀ.",
      "The rank-one determinant reduces to a scalar: 1+uᵀu=1+4."
    ],
    "solutionGuide": {
      "meaning": "Recognize the matrix as an identity plus a rank-one all-ones matrix.",
      "sections": [
        {
          "title": "Factor the update",
          "blocks": [
            {
              "text": "Let u=(1,1,1,1)ᵀ. The matrix is I₄+uuᵀ."
            },
            {
              "equation": "M=I_4+uu^T"
            }
          ]
        },
        {
          "title": "Apply the determinant identity",
          "blocks": [
            {
              "text": "The rank-one determinant reduces to a scalar: 1+uᵀu=1+4."
            },
            {
              "equation": "det(M)=1+u^Tu=5"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2",
        "5",
        "8",
        "16"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 27,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-28",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "networks",
    "number": 28,
    "ref": "GATE 2013 · Booklet A · Q28",
    "file": "EC2013.pdf",
    "page": 8,
    "prompt": "In the shown coupled dependent-source circuit, Vs=100∠53.13° V. Find the open-circuit Thevenin voltage seen by RL.",
    "answer": "(C) 800∠90° V",
    "steps": [
      "With RL removed, the right-loop current I₂ is zero. The left dependent voltage j40I₂ is therefore zero, leaving I₁=Vs/(3+j4).",
      "The marked inductor voltage is VL1=j4I₁=j80 V. There is no drop across the unloaded right-hand series impedance, so Vth=10VL1."
    ],
    "solutionGuide": {
      "meaning": "Remove RL before solving; the dependent sources remain active.",
      "sections": [
        {
          "title": "Open the load",
          "blocks": [
            {
              "text": "With RL removed, the right-loop current I₂ is zero. The left dependent voltage j40I₂ is therefore zero, leaving I₁=Vs/(3+j4)."
            },
            {
              "equation": "I_1=frac{100∠53.13°}{3+j4}=20 A"
            }
          ]
        },
        {
          "title": "Find the controlled source voltage",
          "blocks": [
            {
              "text": "The marked inductor voltage is VL1=j4I₁=j80 V. There is no drop across the unloaded right-hand series impedance, so Vth=10VL1."
            },
            {
              "equation": "V_{th}=10(j4)(20)=j800=800∠90° V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "100∠90° V",
        "800∠0° V",
        "800∠90° V",
        "100∠60° V"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 28,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-28.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q28",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-29",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "control",
    "number": 29,
    "ref": "GATE 2013 · Booklet A · Q29",
    "file": "EC2013.pdf",
    "page": 8,
    "prompt": "A motor has G(s)=10/(1+10s). In unity negative feedback with proportional gain Ka, what approximate Ka reduces its time constant by a factor of 100?",
    "answer": "(C) 10",
    "steps": [
      "The closed-loop denominator is 10s+1+10Ka, giving τcl=10/(1+10Ka).",
      "The desired time constant is 10/100=0.1 s. Thus 1+10Ka=100, giving Ka=9.9≈10."
    ],
    "solutionGuide": {
      "meaning": "Find the closed-loop pole and compare its time constant with 10 seconds.",
      "sections": [
        {
          "title": "Close the loop",
          "blocks": [
            {
              "text": "The closed-loop denominator is 10s+1+10Ka, giving τcl=10/(1+10Ka)."
            },
            {
              "equation": "τ_{cl}=frac{10}{1+10K_a}"
            }
          ]
        },
        {
          "title": "Set the required ratio",
          "blocks": [
            {
              "text": "The desired time constant is 10/100=0.1 s. Thus 1+10Ka=100, giving Ka=9.9≈10."
            },
            {
              "equation": "K_a=frac{99}{10}=9.9≈10"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1",
        "5",
        "10",
        "100"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 29,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-30",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "devices",
    "number": 30,
    "ref": "GATE 2013 · Booklet A · Q30",
    "file": "EC2013.pdf",
    "page": 9,
    "prompt": "A 10 V supply feeds a 100 Ω series resistor and an ideal 5 V Zener shunt regulator. The Zener knee current is 10 mA. Find minimum RL and minimum Zener power rating.",
    "answer": "(B) 125 Ω, 250 mW",
    "steps": [
      "The series current is (10−5)/100=50 mA. Reserving 10 mA for the Zener leaves 40 mA for the load.",
      "With no load, all 50 mA flows through the Zener. Its rating must cover 5×0.05=0.25 W."
    ],
    "solutionGuide": {
      "meaning": "Use the minimum Zener current at maximum load and the maximum Zener current at no load.",
      "sections": [
        {
          "title": "Find the maximum load current",
          "blocks": [
            {
              "text": "The series current is (10−5)/100=50 mA. Reserving 10 mA for the Zener leaves 40 mA for the load."
            },
            {
              "equation": "R_{L,min}=frac{5}{0.04}=125 Ω"
            }
          ]
        },
        {
          "title": "Check no-load dissipation",
          "blocks": [
            {
              "text": "With no load, all 50 mA flows through the Zener. Its rating must cover 5×0.05=0.25 W."
            },
            {
              "equation": "P_{Z,max}=5×0.05=250 mW"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "125 Ω, 125 mW",
        "125 Ω, 250 mW",
        "250 Ω, 125 mW",
        "250 Ω, 250 mW"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 30,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-30.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q30",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-31",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "networks",
    "number": 31,
    "ref": "GATE 2013 · Booklet A · Q31",
    "file": "EC2013.pdf",
    "page": 9,
    "prompt": "The shown ideal transformer has turns ratio 1:1.25 and a tapped attenuator of factor 0.8. Find forward VYZ/VWX and reverse VWX/VYZ under open-circuit output conditions.",
    "answer": "(B) 1 and 0.8",
    "steps": [
      "From WX to the full secondary, the transformer multiplies voltage by 1.25. The tap then multiplies by 0.8, giving a net ratio 1.",
      "With the primary open, no ideal-transformer current flows. The untapped segment has no voltage drop, so the full secondary equals the applied tap voltage. The reverse transformer ratio is 1/1.25=0.8."
    ],
    "solutionGuide": {
      "meaning": "Distinguish forward tap attenuation from reverse open-circuit excitation of the tap.",
      "sections": [
        {
          "title": "Forward excitation",
          "blocks": [
            {
              "text": "From WX to the full secondary, the transformer multiplies voltage by 1.25. The tap then multiplies by 0.8, giving a net ratio 1."
            },
            {
              "equation": "frac{V_{YZ}}{V_{WX}}=1.25×0.8=1"
            }
          ]
        },
        {
          "title": "Reverse excitation",
          "blocks": [
            {
              "text": "With the primary open, no ideal-transformer current flows. The untapped segment has no voltage drop, so the full secondary equals the applied tap voltage. The reverse transformer ratio is 1/1.25=0.8."
            },
            {
              "equation": "frac{V_{WX}}{V_{YZ}}=frac{1}{1.25}=0.8"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1.25 and 0.8",
        "1 and 0.8",
        "1 and 1",
        "0.8 and 0.8"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 31,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-31.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q31",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-32",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "networks",
    "number": 32,
    "ref": "GATE 2013 · Booklet A · Q32",
    "file": "EC2013.pdf",
    "page": 9,
    "prompt": "Two magnetically uncoupled coils have quality factors q₁,q₂ and series resistances R₁,R₂ at the same frequency. Find their series-combination Q.",
    "answer": "(C) (q₁R₁+q₂R₂)/(R₁+R₂)",
    "steps": [
      "For a series coil model, qᵢ=ωLᵢ/Rᵢ. Hence its inductive reactance is qᵢRᵢ.",
      "No mutual inductance is present. Divide the sum of reactances by the sum of resistances."
    ],
    "solutionGuide": {
      "meaning": "Add inductive reactances and resistances before forming Q.",
      "sections": [
        {
          "title": "Express each reactance",
          "blocks": [
            {
              "text": "For a series coil model, qᵢ=ωLᵢ/Rᵢ. Hence its inductive reactance is qᵢRᵢ."
            },
            {
              "equation": "ωL_i=q_iR_i"
            }
          ]
        },
        {
          "title": "Combine the coils",
          "blocks": [
            {
              "text": "No mutual inductance is present. Divide the sum of reactances by the sum of resistances."
            },
            {
              "equation": "Q=frac{q_1R_1+q_2R_2}{R_1+R_2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "q₁+q₂",
        "1/q₁+1/q₂",
        "(q₁R₁+q₂R₂)/(R₁+R₂)",
        "(q₁R₂+q₂R₁)/(R₁+R₂)"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 32,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-33",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "signals",
    "number": 33,
    "ref": "GATE 2013 · Booklet A · Q33",
    "file": "EC2013.pdf",
    "page": 9,
    "prompt": "A system has h(t)=δ(t−1)+δ(t−3). Find its unit-step response at t=2.",
    "answer": "(B) 1",
    "steps": [
      "Convolution with each delayed impulse produces a delayed step.",
      "The first step is on and the second is off."
    ],
    "solutionGuide": {
      "meaning": "Convolve the impulse response with a unit step.",
      "sections": [
        {
          "title": "Shift the step",
          "blocks": [
            {
              "text": "Convolution with each delayed impulse produces a delayed step."
            },
            {
              "equation": "y(t)=u(t−1)+u(t−3)"
            }
          ]
        },
        {
          "title": "Evaluate at t=2",
          "blocks": [
            {
              "text": "The first step is on and the second is off."
            },
            {
              "equation": "y(2)=1+0=1"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 33,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-34",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "devices",
    "number": 34,
    "ref": "GATE 2013 · Booklet A · Q34",
    "file": "EC2013.pdf",
    "page": 10,
    "prompt": "A diode-connected NMOS has gate and drain at VB=2 V, source grounded, kN=40 μA/V² and VTN=1 V. Neglect body effect and channel-length modulation. Find dVB/dID.",
    "answer": "(B) 25 kΩ",
    "steps": [
      "Gate equals drain, so the conducting device is in saturation. Its overdrive is 1 V and gm=kN(VB−VT)=40 μS.",
      "With λ=0, the drain and gate voltage change together and the small-signal resistance is 1/gm."
    ],
    "solutionGuide": {
      "meaning": "Differentiate the square-law current of a diode-connected MOSFET.",
      "sections": [
        {
          "title": "Find transconductance",
          "blocks": [
            {
              "text": "Gate equals drain, so the conducting device is in saturation. Its overdrive is 1 V and gm=kN(VB−VT)=40 μS."
            },
            {
              "equation": "g_m=40 μA/V^2×1 V=40 μS"
            }
          ]
        },
        {
          "title": "Invert the incremental conductance",
          "blocks": [
            {
              "text": "With λ=0, the drain and gate voltage change together and the small-signal resistance is 1/gm."
            },
            {
              "equation": "r=frac{1}{40 μS}=25 kΩ"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "12.5 kΩ",
        "25 kΩ",
        "50 kΩ",
        "100 kΩ"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 34,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-34.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q34",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-35",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "analog",
    "number": 35,
    "ref": "GATE 2013 · Booklet A · Q35",
    "file": "EC2013.pdf",
    "page": 10,
    "prompt": "A common-source NMOS stage has RD=10 kΩ, RL=10 kΩ and an output coupling capacitor C=1 μF. Ignore body effect and channel-length modulation. Find its lower cutoff frequency.",
    "answer": "(A) 8 Hz",
    "steps": [
      "Zero input makes vgs=0, so the controlled current source is zero. Each capacitor terminal sees a resistor to AC ground: RD on one side and RL on the other.",
      "The capacitor forms a first-order high-pass pole with the sum of those resistances."
    ],
    "solutionGuide": {
      "meaning": "Find the resistance seen across the coupling capacitor with the input set to zero.",
      "sections": [
        {
          "title": "Deactivate the input",
          "blocks": [
            {
              "text": "Zero input makes vgs=0, so the controlled current source is zero. Each capacitor terminal sees a resistor to AC ground: RD on one side and RL on the other."
            },
            {
              "equation": "R_{seen}=R_D+R_L=20 kΩ"
            }
          ]
        },
        {
          "title": "Compute the high-pass corner",
          "blocks": [
            {
              "text": "The capacitor forms a first-order high-pass pole with the sum of those resistances."
            },
            {
              "equation": "f_L=frac{1}{2πC(R_D+R_L)}≈7.96 Hz"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "8 Hz",
        "32 Hz",
        "50 Hz",
        "200 Hz"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 35,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-35.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q35",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-36",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "signals",
    "number": 36,
    "ref": "GATE 2013 · Booklet A · Q36",
    "file": "EC2013.pdf",
    "page": 11,
    "prompt": "A system satisfies y″+5y′+6y=x(t), with y(0)=y′(0)=0. The input is 1 for 0<t<2 and zero otherwise. Find Y(s).",
    "answer": "(B) (1−e^(−2s))/[s(s+2)(s+3)]",
    "steps": [
      "The input is u(t)−u(t−2), giving a transform (1−e^(−2s))/s.",
      "Zero initial conditions give G(s)=1/(s²+5s+6)=1/[(s+2)(s+3)]. Multiply G and X."
    ],
    "solutionGuide": {
      "meaning": "Represent the finite rectangular pulse as two steps and use the zero-state transfer function.",
      "sections": [
        {
          "title": "Transform the pulse",
          "blocks": [
            {
              "text": "The input is u(t)−u(t−2), giving a transform (1−e^(−2s))/s."
            },
            {
              "equation": "X(s)=frac{1−e^{−2s}}{s}"
            }
          ]
        },
        {
          "title": "Transform the differential equation",
          "blocks": [
            {
              "text": "Zero initial conditions give G(s)=1/(s²+5s+6)=1/[(s+2)(s+3)]. Multiply G and X."
            },
            {
              "equation": "Y(s)=frac{1−e^{−2s}}{s(s+2)(s+3)}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "e^(−2s)/[s(s+2)(s+3)]",
        "(1−e^(−2s))/[s(s+2)(s+3)]",
        "e^(−2s)/[(s+2)(s+3)]",
        "(1−e^(−2s))/[(s+2)(s+3)]"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 36,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-37",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "signals",
    "number": 37,
    "ref": "GATE 2013 · Booklet A · Q37",
    "file": "EC2013.pdf",
    "page": 11,
    "prompt": "A first-order linear constant-coefficient differential system gives y(t) from x(t) and initial value y(0). How can its response be changed to −2y(t)?",
    "answer": "(D) Initial value −2y(0), input −2x(t)",
    "steps": [
      "The response is the sum of a part linear in the initial value and a part linear in the forcing input.",
      "To obtain −2y for arbitrary input and initial value, multiply both the initial condition and the forcing function by −2. The system coefficients stay unchanged."
    ],
    "solutionGuide": {
      "meaning": "Scale both the zero-input response and the zero-state response by the same factor.",
      "sections": [
        {
          "title": "Separate the response",
          "blocks": [
            {
              "text": "The response is the sum of a part linear in the initial value and a part linear in the forcing input."
            },
            {
              "equation": "y=y_{initial}+y_{forced}"
            }
          ]
        },
        {
          "title": "Scale both contributions",
          "blocks": [
            {
              "text": "To obtain −2y for arbitrary input and initial value, multiply both the initial condition and the forcing function by −2. The system coefficients stay unchanged."
            },
            {
              "equation": "y_{new}(0)=−2y(0);x_{new}(t)=−2x(t)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Initial value −y(0), input 2x(t)",
        "Initial value 2y(0), input −x(t)",
        "Initial value 2jy(0), input 2jx(t)",
        "Initial value −2y(0), input −2x(t)"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 37,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-38",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "math",
    "number": 38,
    "ref": "GATE 2013 · Booklet A · Q38",
    "file": "EC2013.pdf",
    "page": 11,
    "prompt": "U and V are identically distributed zero-mean variables. Their CDFs for U and 2V are F(x) and G(x). Which relation holds for every x?",
    "answer": "(D) x[F(x)−G(x)]≥0",
    "steps": [
      "Since U and V share a distribution, G(x)=P(V≤x/2)=F(x/2).",
      "For x>0, F(x)≥F(x/2); for x<0, F(x)≤F(x/2). Multiplying the difference by x makes it nonnegative in both cases. Zero mean is not needed for this result."
    ],
    "solutionGuide": {
      "meaning": "Use monotonicity of a CDF when its argument is scaled by one half.",
      "sections": [
        {
          "title": "Relate the CDFs",
          "blocks": [
            {
              "text": "Since U and V share a distribution, G(x)=P(V≤x/2)=F(x/2)."
            },
            {
              "equation": "G(x)=F(x/2)"
            }
          ]
        },
        {
          "title": "Check the sign of x",
          "blocks": [
            {
              "text": "For x>0, F(x)≥F(x/2); for x<0, F(x)≤F(x/2). Multiplying the difference by x makes it nonnegative in both cases. Zero mean is not needed for this result."
            },
            {
              "equation": "x[F(x)−G(x)]≥0"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "F(x)−G(x)≤0",
        "F(x)−G(x)≥0",
        "x[F(x)−G(x)]≤0",
        "x[F(x)−G(x)]≥0"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 38,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-39",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "signals",
    "number": 39,
    "ref": "GATE 2013 · Booklet A · Q39",
    "file": "EC2013.pdf",
    "page": 11,
    "prompt": "The DFT of (a,b,c,d) is (α,β,γ,δ). Multiply the row vector (a,b,c,d) by the circulant matrix with rows (a,b,c,d), (d,a,b,c), (c,d,a,b), (b,c,d,a). The DFT of the resulting vector is a scaled version of which vector?",
    "answer": "(A) (α²,β²,γ²,δ²)",
    "steps": [
      "The first component is a²+2bd+c², matching the zero-index term of a length-four circular self-convolution. The other components follow the same cyclic pattern.",
      "A circular convolution transforms to pointwise multiplication. Thus self-convolution squares each DFT component; any normalization convention only changes a common scale."
    ],
    "solutionGuide": {
      "meaning": "Recognize the matrix product as a circular self-convolution.",
      "sections": [
        {
          "title": "Write one output component",
          "blocks": [
            {
              "text": "The first component is a²+2bd+c², matching the zero-index term of a length-four circular self-convolution. The other components follow the same cyclic pattern."
            },
            {
              "equation": "p[n]=x[n]⊛x[n]"
            }
          ]
        },
        {
          "title": "Apply the DFT convolution theorem",
          "blocks": [
            {
              "text": "A circular convolution transforms to pointwise multiplication. Thus self-convolution squares each DFT component; any normalization convention only changes a common scale."
            },
            {
              "equation": "P[k]=X[k]^2"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(α²,β²,γ²,δ²)",
        "(√α,√β,√γ,√δ)",
        "(α+β,β+δ,δ+γ,γ+α)",
        "(α,β,γ,δ)"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 39,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-40",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "control",
    "number": 40,
    "ref": "GATE 2013 · Booklet A · Q40",
    "file": "EC2013.pdf",
    "page": 12,
    "prompt": "Find Y(s)/U(s) for the shown signal-flow graph.",
    "answer": "(A) (s+1)/(5s²+6s+2)",
    "steps": [
      "Let a be the first internal node, b the second and c the output node. The graph gives a=u−2c, b=a/s−4c, and c=(1+1/s)b.",
      "Substituting b and a into the last equation gives (5s²+6s+2)c=(s+1)u."
    ],
    "solutionGuide": {
      "meaning": "Account for the parallel forward branch and both feedback loops.",
      "sections": [
        {
          "title": "Write node equations",
          "blocks": [
            {
              "text": "Let a be the first internal node, b the second and c the output node. The graph gives a=u−2c, b=a/s−4c, and c=(1+1/s)b."
            },
            {
              "equation": "a=u−2c;b=frac{a}{s}−4c;c=(1+frac{1}{s})b"
            }
          ]
        },
        {
          "title": "Eliminate the internal nodes",
          "blocks": [
            {
              "text": "Substituting b and a into the last equation gives (5s²+6s+2)c=(s+1)u."
            },
            {
              "equation": "frac{Y(s)}{U(s)}=frac{s+1}{5s^2+6s+2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(s+1)/(5s²+6s+2)",
        "(s+1)/(s²+6s+2)",
        "(s+1)/(s²+4s+2)",
        "1/(5s²+6s+2)"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 40,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-40.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q40",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-41",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "analog",
    "number": 41,
    "ref": "GATE 2013 · Booklet A · Q41",
    "file": "EC2013.pdf",
    "page": 12,
    "prompt": "Find Vout in the shown cascade of ideal op-amps with all resistors 1 kΩ. The first noninverting input is +1 V and its resistor input is −2 V.",
    "answer": "(C) 8 V",
    "steps": [
      "The first inverting node is at +1 V. KCL through its equal input and feedback resistors gives (1−(−2))+(1−V₁)=0, so V₁=4 V.",
      "The second stage is a noninverting amplifier with equal feedback and ground resistors. Its gain is 2. Both outputs remain within the ±15 V supplies."
    ],
    "solutionGuide": {
      "meaning": "Solve the biased inverting stage first, then the noninverting amplifier.",
      "sections": [
        {
          "title": "Solve the first stage",
          "blocks": [
            {
              "text": "The first inverting node is at +1 V. KCL through its equal input and feedback resistors gives (1−(−2))+(1−V₁)=0, so V₁=4 V."
            },
            {
              "equation": "V_1=2(1)−(−2)=4 V"
            }
          ]
        },
        {
          "title": "Apply the second-stage gain",
          "blocks": [
            {
              "text": "The second stage is a noninverting amplifier with equal feedback and ground resistors. Its gain is 2. Both outputs remain within the ±15 V supplies."
            },
            {
              "equation": "V_{out}=2V_1=8 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "4 V",
        "6 V",
        "8 V",
        "10 V"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 41,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-41.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q41",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-42",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "digital",
    "number": 42,
    "ref": "GATE 2013 · Booklet A · Q42",
    "file": "EC2013.pdf",
    "page": 12,
    "prompt": "For the shown resistor-transistor-diode logic circuit, X and Y are 0 or 5 V. Neglect transistor saturation voltage and diode forward drop. Find Z.",
    "answer": "(B) X̄Y",
    "steps": [
      "If X=1, the npn transistor turns on and clamps Z to zero. Thus a high output requires X=0.",
      "When Y=0, the diode clamps the output low. When X=0 and Y=1, both clamps release and the pull-up makes Z high."
    ],
    "solutionGuide": {
      "meaning": "Identify when either device clamps the pull-up output to zero.",
      "sections": [
        {
          "title": "Test X",
          "blocks": [
            {
              "text": "If X=1, the npn transistor turns on and clamps Z to zero. Thus a high output requires X=0."
            }
          ]
        },
        {
          "title": "Test Y",
          "blocks": [
            {
              "text": "When Y=0, the diode clamps the output low. When X=0 and Y=1, both clamps release and the pull-up makes Z high."
            },
            {
              "equation": "Z=X̄Y"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "XY",
        "X̄Y",
        "XȲ",
        "X̄Ȳ"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 42,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-42.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q42",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-43",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "networks",
    "number": 43,
    "ref": "GATE 2013 · Booklet A · Q43",
    "file": "EC2013.pdf",
    "page": 13,
    "prompt": "A voltage 1000sin(ωt) is applied across YZ of the shown symmetric diode bridge. With ideal diodes, find the voltage across WX.",
    "answer": "(D) 0 for all t",
    "steps": [
      "For each polarity, the corresponding pair of ideal diodes conducts symmetrically to the left and right nodes. The two halves have identical connections and resistances.",
      "The bridge forces W and X to the same potential in either half-cycle. The voltage between them is therefore zero even though internal currents may flow."
    ],
    "solutionGuide": {
      "meaning": "Use the left-right symmetry of the bridge rather than mistaking it for a standard rectifier output.",
      "sections": [
        {
          "title": "Consider either input polarity",
          "blocks": [
            {
              "text": "For each polarity, the corresponding pair of ideal diodes conducts symmetrically to the left and right nodes. The two halves have identical connections and resistances."
            }
          ]
        },
        {
          "title": "Compare W and X",
          "blocks": [
            {
              "text": "The bridge forces W and X to the same potential in either half-cycle. The voltage between them is therefore zero even though internal currents may flow."
            },
            {
              "equation": "V_{WX}=V_W−V_X=0"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "sin(ωt)",
        "[sin(ωt)+|sin(ωt)|]/2",
        "[sin(ωt)−|sin(ωt)|]/2",
        "0 for all t"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 43,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-43.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q43",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-44",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "networks",
    "number": 44,
    "ref": "GATE 2013 · Booklet A · Q44",
    "file": "EC2013.pdf",
    "page": 13,
    "prompt": "C₁=10 μF is in parallel with series capacitors C₂=5 μF and C₃=2 μF. Their breakdown ratings are 10 V, 5 V and 2 V. Find maximum safe terminal voltage and total terminal charge.",
    "answer": "(C) 2.8 V, 32 μC",
    "steps": [
      "The limits are C₂V₂max=25 μC and C₃V₃max=4 μC. Thus C₃ limits the series branch to 4 μC, giving V₂=0.8 V and V₃=2 V.",
      "The series equivalent is 10/7 μF. Adding parallel C₁ gives 80/7 μF, whose charge at 2.8 V is 32 μC. C₁ remains below its own 10 V rating."
    ],
    "solutionGuide": {
      "meaning": "The series capacitors share charge, not voltage; find which one reaches breakdown first.",
      "sections": [
        {
          "title": "Find the limiting series charge",
          "blocks": [
            {
              "text": "The limits are C₂V₂max=25 μC and C₃V₃max=4 μC. Thus C₃ limits the series branch to 4 μC, giving V₂=0.8 V and V₃=2 V."
            },
            {
              "equation": "V_{max}=0.8+2=2.8 V"
            }
          ]
        },
        {
          "title": "Find total terminal charge",
          "blocks": [
            {
              "text": "The series equivalent is 10/7 μF. Adding parallel C₁ gives 80/7 μF, whose charge at 2.8 V is 32 μC. C₁ remains below its own 10 V rating."
            },
            {
              "equation": "Q=(10+frac{10}{7})×2.8=32 μC"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2.8 V, 36 μC",
        "7 V, 119 μC",
        "2.8 V, 32 μC",
        "7 V, 80 μC"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 44,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-44.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q44",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-45",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "digital",
    "number": 45,
    "ref": "GATE 2013 · Booklet A · Q45",
    "file": "EC2013.pdf",
    "page": 14,
    "prompt": "Four 1024-byte RAM chips are connected to the shown 16-bit address decoder. Find the address ranges of RAM1 through RAM4.",
    "answer": "(D) 0800–0BFF, 1800–1BFF, 2800–2BFF, 3800–3BFF",
    "steps": [
      "The common enable requires A₁₅=A₁₄=A₁₀=0 and A₁₁=1. A₁₃ and A₁₂ select chips 1 through 4 in binary order.",
      "Each chip spans 2¹⁰=1024 addresses, or 400H. The fixed A₁₁ bit contributes 0800H; chip selection adds 0000H,1000H,2000H,3000H."
    ],
    "solutionGuide": {
      "meaning": "Use A₀–A₉ for locations within a chip and decode the upper six address bits.",
      "sections": [
        {
          "title": "Read the enable condition",
          "blocks": [
            {
              "text": "The common enable requires A₁₅=A₁₄=A₁₀=0 and A₁₁=1. A₁₃ and A₁₂ select chips 1 through 4 in binary order."
            }
          ]
        },
        {
          "title": "Form each address block",
          "blocks": [
            {
              "text": "Each chip spans 2¹⁰=1024 addresses, or 400H. The fixed A₁₁ bit contributes 0800H; chip selection adds 0000H,1000H,2000H,3000H."
            },
            {
              "equation": "0800H–0BFFH;1800H–1BFFH;2800H–2BFFH;3800H–3BFFH"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0C00–0FFF, 1C00–1FFF, 2C00–2FFF, 3C00–3FFF",
        "1800–1FFF, 2800–2FFF, 3800–3FFF, 4800–4FFF",
        "0500–08FF, 1500–18FF, 3500–38FF, 5500–58FF",
        "0800–0BFF, 1800–1BFF, 2800–2BFF, 3800–3BFF"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 45,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-45.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q45",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-46",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "analog",
    "number": 46,
    "ref": "GATE 2013 · Booklet A · Q46",
    "file": "EC2013.pdf",
    "page": 15,
    "prompt": "An npn bias circuit has VCC=3 V, R₁=60 kΩ, RE=500 Ω and very high β. Find R₂ for IC=1 mA, using VBE≈0.7 V.",
    "answer": "(C) 40 kΩ",
    "steps": [
      "With very high β, IE≈IC=1 mA and base current is negligible. VE=0.5 V, so VB≈1.2 V.",
      "The divider gives VB=3R₂/(60 kΩ+R₂). Rearranging gives R₂=40 kΩ."
    ],
    "solutionGuide": {
      "meaning": "Find the required base voltage and use the unloaded divider approximation.",
      "sections": [
        {
          "title": "Find emitter and base voltages",
          "blocks": [
            {
              "text": "With very high β, IE≈IC=1 mA and base current is negligible. VE=0.5 V, so VB≈1.2 V."
            },
            {
              "equation": "V_B=(1 mA)(500 Ω)+0.7=1.2 V"
            }
          ]
        },
        {
          "title": "Solve the divider",
          "blocks": [
            {
              "text": "The divider gives VB=3R₂/(60 kΩ+R₂). Rearranging gives R₂=40 kΩ."
            },
            {
              "equation": "R_2=frac{1.2×60}{3−1.2}=40 kΩ"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "20 kΩ",
        "30 kΩ",
        "40 kΩ",
        "50 kΩ"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 46,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-46.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q46",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-47",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "comm",
    "number": 47,
    "ref": "GATE 2013 · Booklet A · Q47",
    "file": "EC2013.pdf",
    "page": 15,
    "prompt": "Independent U and V each take +1 and −1 with probability 1/2. Find H(U+V).",
    "answer": "(C) 3/2 bits",
    "steps": [
      "The sums −2,0,+2 have probabilities 1/4,1/2,1/4 because the zero sum occurs in two of the four equiprobable pairs.",
      "Use H=−Σp log₂p. The contributions are 1/2,1/2,1/2 bit."
    ],
    "solutionGuide": {
      "meaning": "Determine the probability of each sum before computing entropy.",
      "sections": [
        {
          "title": "List the sums",
          "blocks": [
            {
              "text": "The sums −2,0,+2 have probabilities 1/4,1/2,1/4 because the zero sum occurs in two of the four equiprobable pairs."
            }
          ]
        },
        {
          "title": "Compute entropy",
          "blocks": [
            {
              "text": "Use H=−Σp log₂p. The contributions are 1/2,1/2,1/2 bit."
            },
            {
              "equation": "H=−2(frac{1}{4}log_2 frac{1}{4})−frac{1}{2}log_2 frac{1}{2}=frac{3}{2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "3/4 bit",
        "1 bit",
        "3/2 bits",
        "log₂3 bits"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 47,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-48",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "comm",
    "number": 48,
    "ref": "GATE 2013 · Booklet A · Q48",
    "file": "EC2013.pdf",
    "page": 15,
    "prompt": "Equiprobable bits have the shown triangular received-value densities: bit 0 on [−1,1] with peak 1 at 0, and bit 1 on [0,4] with peak 0.5 at 2. For threshold 1, find BER.",
    "answer": "(D) 1/16",
    "steps": [
      "Decide bit 1 above threshold 1. Bit 0 never exceeds 1, so its error probability is zero. Bit 1 is mistaken only on [0,1], where its density is x/4.",
      "Only half the transmitted bits are bit 1. Multiply the conditional error by 1/2."
    ],
    "solutionGuide": {
      "meaning": "Integrate the conditional error region and include the prior probability.",
      "sections": [
        {
          "title": "Locate the errors",
          "blocks": [
            {
              "text": "Decide bit 1 above threshold 1. Bit 0 never exceeds 1, so its error probability is zero. Bit 1 is mistaken only on [0,1], where its density is x/4."
            },
            {
              "equation": "P(error|1)=∫_0^1 frac{x}{4}dx=frac{1}{8}"
            }
          ]
        },
        {
          "title": "Weight by the bit priors",
          "blocks": [
            {
              "text": "Only half the transmitted bits are bit 1. Multiply the conditional error by 1/2."
            },
            {
              "equation": "BER=frac{1}{2}×frac{1}{8}=frac{1}{16}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1/2",
        "1/4",
        "1/8",
        "1/16"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 48,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-48.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q48",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-49",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "comm",
    "number": 49,
    "ref": "GATE 2013 · Booklet A · Q49",
    "file": "EC2013.pdf",
    "page": 15,
    "prompt": "For the same equiprobable triangular densities—bit 0 on [−1,1] with peak 1, bit 1 on [0,4] with peak 0.5 at 2—find the optimum decision threshold.",
    "answer": "(B) 4/5",
    "steps": [
      "On 0≤x≤1, f₀(x)=1−x and f₁(x)=x/4. Outside the overlap, the nonzero density determines the decision.",
      "Set 1−x=x/4. Below the crossing choose bit 0; above it choose bit 1."
    ],
    "solutionGuide": {
      "meaning": "For equal priors and error costs, place the threshold where the overlapping likelihoods cross.",
      "sections": [
        {
          "title": "Write the overlap densities",
          "blocks": [
            {
              "text": "On 0≤x≤1, f₀(x)=1−x and f₁(x)=x/4. Outside the overlap, the nonzero density determines the decision."
            },
            {
              "equation": "f_0(x)=1−x;f_1(x)=frac{x}{4}"
            }
          ]
        },
        {
          "title": "Equate the likelihoods",
          "blocks": [
            {
              "text": "Set 1−x=x/4. Below the crossing choose bit 0; above it choose bit 1."
            },
            {
              "equation": "x_{th}=frac{4}{5}=0.8"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1/2",
        "4/5",
        "1",
        "3/2"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 49,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-49.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q49",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-50",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "networks",
    "number": 50,
    "ref": "GATE 2013 · Booklet A · Q50",
    "file": "EC2013.pdf",
    "page": 16,
    "prompt": "For the shown circuit with a 10 V voltage source, 2 A current source, and 5 Ω, 2 Ω and 1 Ω resistors, find downward voltage-source current IS and current-source voltage VS (positive at its top).",
    "answer": "(D) −13 A, 20 V",
    "steps": [
      "The top rail is 10 V above the bottom rail. The 1 Ω and 2 Ω branches draw 10 A and 5 A. The current source supplies 2 A upward, so downward IS=2−15=−13 A.",
      "Its 2 A flows upward through 5 Ω, requiring its top terminal to be 10 V above the 10 V rail. Thus VS=20 V."
    ],
    "solutionGuide": {
      "meaning": "The ideal voltage source fixes the rail voltage; then use KCL and the series-resistor drop.",
      "sections": [
        {
          "title": "Find the voltage-source current",
          "blocks": [
            {
              "text": "The top rail is 10 V above the bottom rail. The 1 Ω and 2 Ω branches draw 10 A and 5 A. The current source supplies 2 A upward, so downward IS=2−15=−13 A."
            },
            {
              "equation": "I_S=2−frac{10}{1}−frac{10}{2}=−13 A"
            }
          ]
        },
        {
          "title": "Find the current-source voltage",
          "blocks": [
            {
              "text": "Its 2 A flows upward through 5 Ω, requiring its top terminal to be 10 V above the 10 V rail. Thus VS=20 V."
            },
            {
              "equation": "V_S=10+(2)(5)=20 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "13 A, −20 V",
        "8 A, −10 V",
        "−8 A, 20 V",
        "−13 A, 20 V"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 50,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-50.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q50",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-51",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "networks",
    "number": 51,
    "ref": "GATE 2013 · Booklet A · Q51",
    "file": "EC2013.pdf",
    "page": 16,
    "prompt": "In the same circuit, a 1 Ω resistor is connected directly in parallel with an ideal 10 V voltage source. Find its current in the indicated downward direction.",
    "answer": "(C) 10 A",
    "steps": [
      "Parallel branches share the same terminal voltage. The ideal source maintains 10 V across the 1 Ω resistor regardless of the other branches.",
      "The upper terminal is positive, so the current is downward as indicated."
    ],
    "solutionGuide": {
      "meaning": "Use the voltage fixed across the resistor by the parallel ideal source.",
      "sections": [
        {
          "title": "Identify the voltage",
          "blocks": [
            {
              "text": "Parallel branches share the same terminal voltage. The ideal source maintains 10 V across the 1 Ω resistor regardless of the other branches."
            },
            {
              "equation": "V_R=10 V"
            }
          ]
        },
        {
          "title": "Apply Ohm’s law",
          "blocks": [
            {
              "text": "The upper terminal is positive, so the current is downward as indicated."
            },
            {
              "equation": "I_R=frac{10 V}{1 Ω}=10 A"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2 A",
        "3.33 A",
        "10 A",
        "12 A"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 51,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-51.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q51",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-52",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "em",
    "number": 52,
    "ref": "GATE 2013 · Booklet A · Q52",
    "file": "EC2013.pdf",
    "page": 16,
    "prompt": "A plane wave of wavelength 600 μm travels from εr=1 to εr=4.5. Its transmitted ray makes 19.2° with the normal. Find incidence angle and incident phasor Ei, with x and z directions as shown.",
    "answer": "(C) 45°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴(x+z)/(3√2)]",
    "steps": [
      "For nonmagnetic media, sinθi=√4.5 sin19.2°≈0.698, close to sin45°. The supplied 19.2° is rounded rather coarsely; the intended listed angle is 45°.",
      "The incident propagation direction is (x̂+ẑ)/√2, so the transverse electric field is along (x̂−ẑ)/√2. The wavenumber 2π/λ=π10⁴/3 gives the stated phase."
    ],
    "solutionGuide": {
      "meaning": "Use Snell’s law for the ray and transversality for electric-field orientation.",
      "sections": [
        {
          "title": "Find the incidence angle",
          "blocks": [
            {
              "text": "For nonmagnetic media, sinθi=√4.5 sin19.2°≈0.698, close to sin45°. The supplied 19.2° is rounded rather coarsely; the intended listed angle is 45°."
            },
            {
              "equation": "θ_i≈45°"
            }
          ]
        },
        {
          "title": "Build the phasor",
          "blocks": [
            {
              "text": "The incident propagation direction is (x̂+ẑ)/√2, so the transverse electric field is along (x̂−ẑ)/√2. The wavenumber 2π/λ=π10⁴/3 gives the stated phase."
            },
            {
              "equation": "E_i=frac{E_0}{sqrt{2}}(x̂−ẑ)e^{−jπ10^4(x+z)/(3sqrt{2})}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "60°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴(x+z)/(3√2)]",
        "45°, (E₀/√2)(x̂+ẑ)e^[−jπ10⁴z/3]",
        "45°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴(x+z)/(3√2)]",
        "60°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴z/3]"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 52,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "Using θt=19.2° literally gives θi≈44.23°. The exact transmitted angle for 45° is about 19.47°. The answer follows the intended 45° option.",
    "figure": "pyq-figures/g13-52.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q52",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-53",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "em",
    "number": 53,
    "ref": "GATE 2013 · Booklet A · Q53",
    "file": "EC2013.pdf",
    "page": 17,
    "prompt": "For the same 600 μm TM-polarized wave incident from εr=1 onto εr=4.5 at the intended angle 45°, find the reflected electric-field phasor.",
    "answer": "Archived key: (A), magnitude 0.23. With the stated incident field, the reflected Cartesian coefficient is −0.23; see the sign calculation.",
    "steps": [
      "η₂/η₁=1/√4.5. Using the exact Snell angle for 45°, the tangential electric-field ratio is (η₂cosθt−η₁cosθi)/(η₂cosθt+η₁cosθi)≈−0.229.",
      "The diagram’s x̂−ẑ incident reference can represent the signed incident amplitude. The reflected phase uses x−z. With Ei fixed exactly as in Q52, the coefficient multiplying x̂+ẑ is −0.23. The archived key chooses A, whose magnitude is correct but whose sign is positive."
    ],
    "solutionGuide": {
      "meaning": "Apply the TM Fresnel coefficient and reverse the normal component of the propagation vector.",
      "sections": [
        {
          "title": "Compute the TM reflection coefficient",
          "blocks": [
            {
              "text": "η₂/η₁=1/√4.5. Using the exact Snell angle for 45°, the tangential electric-field ratio is (η₂cosθt−η₁cosθi)/(η₂cosθt+η₁cosθi)≈−0.229."
            },
            {
              "equation": "Γ_{tangential}≈−0.229"
            }
          ]
        },
        {
          "title": "Respect the diagram’s field reference",
          "blocks": [
            {
              "text": "The diagram’s x̂−ẑ incident reference can represent the signed incident amplitude. The reflected phase uses x−z. With Ei fixed exactly as in Q52, the coefficient multiplying x̂+ẑ is −0.23. The archived key chooses A, whose magnitude is correct but whose sign is positive."
            },
            {
              "equation": "E_r=−0.23frac{E_0}{sqrt{2}}(x̂+ẑ)e^{−jπ10^4(x−z)/(3sqrt{2})}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0.23(E₀/√2)(x̂+ẑ)e^[−jπ10⁴(x−z)/(3√2)]",
        "−(E₀/√2)(x̂+ẑ)e^[jπ10⁴z/3]",
        "0.44(E₀/√2)(x̂+ẑ)e^[−jπ10⁴(x−z)/(3√2)]",
        "(E₀/√2)(x̂+ẑ)e^[−jπ10⁴(x+z)/3]"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 53,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "The archived key selects A, but its reflected-field sign is inconsistent with the incident field written in Q52 under the same Cartesian basis. The worked calculation retains the physically consistent negative sign.",
    "figure": "pyq-figures/g13-53.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q53",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-54",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "control",
    "number": 54,
    "ref": "GATE 2013 · Booklet A · Q54",
    "file": "EC2013.pdf",
    "page": 17,
    "prompt": "Find the state equations for the shown two-integrator signal-flow realization, taking each integrator output as its state.",
    "answer": "(A) A=[−1,0;1,−1], B=[−1;1], C=[1,−1], D=1",
    "steps": [
      "Let x₁ be the output of the left integrator and x₂ of the right. The first integrator input is −u−x₁. The second input is u+x₁−x₂.",
      "The final summing node gives y=u+x₁−x₂. These coefficients match option A."
    ],
    "solutionGuide": {
      "meaning": "Read the inputs of the two integrators as state derivatives.",
      "sections": [
        {
          "title": "Read the first and second states",
          "blocks": [
            {
              "text": "Let x₁ be the output of the left integrator and x₂ of the right. The first integrator input is −u−x₁. The second input is u+x₁−x₂."
            },
            {
              "equation": "ẋ_1=−x_1−u;ẋ_2=x_1−x_2+u"
            }
          ]
        },
        {
          "title": "Read the output",
          "blocks": [
            {
              "text": "The final summing node gives y=u+x₁−x₂. These coefficients match option A."
            },
            {
              "equation": "y=x_1−x_2+u"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "A=[−1,0;1,−1], B=[−1;1], C=[1,−1], D=1",
        "A=[−1,0;−1,−1], B=[−1;1], C=[−1,−1], D=1",
        "A=[−1,0;−1,−1], B=[−1;1], C=[−1,−1], D=−1",
        "A=[−1,−1;0,−1], B=[−1;1], C=[1,−1], D=−1"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 54,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-54.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q54",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13a-55",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "control",
    "number": 55,
    "ref": "GATE 2013 · Booklet A · Q55",
    "file": "EC2013.pdf",
    "page": 17,
    "prompt": "For A=[−1,0;1,−1], find the state transition matrix e^(At).",
    "answer": "(A) [e^(−t),0;te^(−t),e^(−t)]",
    "steps": [
      "Write A=−I+N with N=[0,0;1,0]. Since N²=0, its exponential truncates to I+tN.",
      "The identity commutes with N, so e^(At)=e^(−t)(I+tN). It equals I at t=0 as required."
    ],
    "solutionGuide": {
      "meaning": "Separate the matrix into a scalar identity part and a nilpotent part.",
      "sections": [
        {
          "title": "Find the nilpotent part",
          "blocks": [
            {
              "text": "Write A=−I+N with N=[0,0;1,0]. Since N²=0, its exponential truncates to I+tN."
            },
            {
              "equation": "N^2=0;e^{Nt}=I+tN"
            }
          ]
        },
        {
          "title": "Multiply the commuting exponentials",
          "blocks": [
            {
              "text": "The identity commutes with N, so e^(At)=e^(−t)(I+tN). It equals I at t=0 as required."
            },
            {
              "equation": "e^{At}=e^{−t}(I+tN)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "[e^(−t),0;te^(−t),e^(−t)]",
        "[e^(−t),0;−te^(−t),e^(−t)]",
        "[e^(−t),0;e^(−t),e^(−t)]",
        "[e^(−t),−te^(−t);0,e^(−t)]"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 55,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-56",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "apt",
    "number": 56,
    "ref": "GATE 2013 · Booklet A · Q56",
    "file": "EC2013.pdf",
    "page": 18,
    "prompt": "Choose the grammatically correct sentence.",
    "answer": "(D) Two and two make four.",
    "steps": [
      "In this construction, “make” means “amount to” or “give a total of.”",
      "“Two and two make four” is the standard phrasing selected by the archived key."
    ],
    "solutionGuide": {
      "meaning": "Choose the standard expression for the result of an arithmetic sum.",
      "sections": [
        {
          "title": "Use the conventional expression",
          "blocks": [
            {
              "text": "In this construction, “make” means “amount to” or “give a total of.”"
            }
          ]
        },
        {
          "title": "Select the sentence",
          "blocks": [
            {
              "text": "“Two and two make four” is the standard phrasing selected by the archived key."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Two and two add four.",
        "Two and two become four.",
        "Two and two are four.",
        "Two and two make four."
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 56,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-57",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "apt",
    "number": 57,
    "ref": "GATE 2013 · Booklet A · Q57",
    "file": "EC2013.pdf",
    "page": 18,
    "prompt": "“You can always give me a ring whenever you need.” Choose the best intended inference.",
    "answer": "(C) A friend in need is a friend indeed.",
    "steps": [
      "“Give me a ring” means “telephone me.” “Whenever you need” expresses willingness to help.",
      "The statement supports dependable friendship, not any claim about caller tunes, telephone quality or free calls."
    ],
    "solutionGuide": {
      "meaning": "Interpret “give me a ring” as an offer of availability and support.",
      "sections": [
        {
          "title": "Interpret the idiom",
          "blocks": [
            {
              "text": "“Give me a ring” means “telephone me.” “Whenever you need” expresses willingness to help."
            }
          ]
        },
        {
          "title": "Compare the options",
          "blocks": [
            {
              "text": "The statement supports dependable friendship, not any claim about caller tunes, telephone quality or free calls."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "The speaker has a nice caller tune.",
        "The speaker has a better telephone facility.",
        "A friend in need is a friend indeed.",
        "The listener need not pay telephone bills."
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 57,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-58",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "apt",
    "number": 58,
    "ref": "GATE 2013 · Booklet A · Q58",
    "file": "EC2013.pdf",
    "page": 18,
    "prompt": "The Monday–Wednesday mean temperature was 41°C; Tuesday–Thursday mean was 43°C. Thursday was 15% hotter than Monday. Find Thursday’s temperature.",
    "answer": "(C) 46°C",
    "steps": [
      "The two totals are 123°C and 129°C, so Thursday minus Monday is 6°C.",
      "T=1.15M gives 0.15M=6, hence M=40°C and T=46°C."
    ],
    "solutionGuide": {
      "meaning": "Subtract the overlapping three-day totals to eliminate Tuesday and Wednesday.",
      "sections": [
        {
          "title": "Subtract the totals",
          "blocks": [
            {
              "text": "The two totals are 123°C and 129°C, so Thursday minus Monday is 6°C."
            },
            {
              "equation": "T−M=3(43−41)=6"
            }
          ]
        },
        {
          "title": "Use the percentage relation",
          "blocks": [
            {
              "text": "T=1.15M gives 0.15M=6, hence M=40°C and T=46°C."
            },
            {
              "equation": "T=1.15×40=46°C"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "40°C",
        "43°C",
        "46°C",
        "49°C"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 58,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-59",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "apt",
    "number": 59,
    "ref": "GATE 2013 · Booklet A · Q59",
    "file": "EC2013.pdf",
    "page": 18,
    "prompt": "Complete the sentence as intended by the archived key: “Dare ___ mistakes.”",
    "answer": "(A) commit",
    "steps": [
      "The archived key treats dare as a modal-like verb followed by a bare infinitive, selecting “commit.”",
      "In ordinary affirmative imperatives, “Dare to commit mistakes” is also natural and more conventional for many speakers. The key’s choice is an exam convention, not a universal rejection of “to commit.”"
    ],
    "solutionGuide": {
      "meaning": "Distinguish the exam’s modal use of dare from ordinary modern infinitive usage.",
      "sections": [
        {
          "title": "Read the intended construction",
          "blocks": [
            {
              "text": "The archived key treats dare as a modal-like verb followed by a bare infinitive, selecting “commit.”"
            }
          ]
        },
        {
          "title": "Keep the usage limitation clear",
          "blocks": [
            {
              "text": "In ordinary affirmative imperatives, “Dare to commit mistakes” is also natural and more conventional for many speakers. The key’s choice is an exam convention, not a universal rejection of “to commit.”"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "commit",
        "to commit",
        "committed",
        "committing"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 59,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "Archived key: A. Both modal and lexical constructions of dare exist; the bare positive imperative here is stylistically unusual."
  },
  {
    "id": "g13a-60",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "apt",
    "number": 60,
    "ref": "GATE 2013 · Booklet A · Q60",
    "file": "EC2013.pdf",
    "page": 18,
    "prompt": "Choose the closest meaning of “quarrel” in “They were requested not to quarrel with others.”",
    "answer": "(D) fall out",
    "steps": [
      "To quarrel is to have an argument or disagreement.",
      "To “fall out with” someone means to quarrel or stop being friendly. The other choices have different meanings."
    ],
    "solutionGuide": {
      "meaning": "Choose the phrasal verb meaning to argue or become unfriendly.",
      "sections": [
        {
          "title": "Identify the meaning",
          "blocks": [
            {
              "text": "To quarrel is to have an argument or disagreement."
            }
          ]
        },
        {
          "title": "Match the phrasal verb",
          "blocks": [
            {
              "text": "To “fall out with” someone means to quarrel or stop being friendly. The other choices have different meanings."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "make out",
        "call out",
        "dig out",
        "fall out"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 60,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-61",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "apt",
    "number": 61,
    "ref": "GATE 2013 · Booklet A · Q61",
    "file": "EC2013.pdf",
    "page": 18,
    "prompt": "A car travels 8 km, 6 km and 16 km in three successive quarters of an hour. Find its average speed.",
    "answer": "(C) 40 km/h",
    "steps": [
      "The total distance is 30 km. Three quarter-hours equal 0.75 hour.",
      "Average speed is total distance divided by total time, not a distance-weighted average of segment speeds."
    ],
    "solutionGuide": {
      "meaning": "Divide total distance by total elapsed time.",
      "sections": [
        {
          "title": "Add distance and time",
          "blocks": [
            {
              "text": "The total distance is 30 km. Three quarter-hours equal 0.75 hour."
            },
            {
              "equation": "d=8+6+16=30 km;t=frac{3}{4} h"
            }
          ]
        },
        {
          "title": "Compute the average",
          "blocks": [
            {
              "text": "Average speed is total distance divided by total time, not a distance-weighted average of segment speeds."
            },
            {
              "equation": "v_{avg}=frac{30}{3/4}=40 km/h"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "30 km/h",
        "36 km/h",
        "40 km/h",
        "24 km/h"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 61,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-62",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "math",
    "number": 62,
    "ref": "GATE 2013 · Booklet A · Q62",
    "file": "EC2013.pdf",
    "page": 18,
    "prompt": "Find the sum of n terms of 10+84+734+… .",
    "answer": "(D) (9/8)(9ⁿ−1)+n²",
    "steps": [
      "The terms are 9+1, 81+3, 729+5, so the kth term is 9ᵏ+(2k−1).",
      "The geometric sum is 9(9ⁿ−1)/8, while the first n odd numbers sum to n²."
    ],
    "solutionGuide": {
      "meaning": "Identify the geometric component and the consecutive odd-number correction.",
      "sections": [
        {
          "title": "Recognize each term",
          "blocks": [
            {
              "text": "The terms are 9+1, 81+3, 729+5, so the kth term is 9ᵏ+(2k−1)."
            },
            {
              "equation": "a_k=9^k+2k−1"
            }
          ]
        },
        {
          "title": "Sum the two parts",
          "blocks": [
            {
              "text": "The geometric sum is 9(9ⁿ−1)/8, while the first n odd numbers sum to n²."
            },
            {
              "equation": "S_n=frac{9(9^n−1)}{8}+n^2"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(9/10)(9ⁿ+1)",
        "(9/8)(9ⁿ−1)",
        "(9/8)(9ⁿ+n)",
        "(9/8)(9ⁿ−1)+n²"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 62,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-63",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "apt",
    "number": 63,
    "ref": "GATE 2013 · Booklet A · Q63",
    "file": "EC2013.pdf",
    "page": 19,
    "prompt": "Different streams of the freedom movement in colonial India included moderates, liberals, radicals and socialists. What is the best inference?",
    "answer": "(D) Nationalism was heterogeneous.",
    "steps": [
      "The statement explicitly describes several different political approaches and ideological groups.",
      "“Heterogeneous” means composed of different kinds. It directly captures the diversity stated, without adding a new historical cause or outcome."
    ],
    "solutionGuide": {
      "meaning": "Infer diversity directly from the listed ideological streams.",
      "sections": [
        {
          "title": "Identify the evidence",
          "blocks": [
            {
              "text": "The statement explicitly describes several different political approaches and ideological groups."
            }
          ]
        },
        {
          "title": "Draw the supported inference",
          "blocks": [
            {
              "text": "“Heterogeneous” means composed of different kinds. It directly captures the diversity stated, without adding a new historical cause or outcome."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Nationalism led to independence.",
        "Nationalism emerged in colonialism.",
        "Nationalism was homogeneous.",
        "Nationalism was heterogeneous."
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 63,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-64",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "math",
    "number": 64,
    "ref": "GATE 2013 · Booklet A · Q64",
    "file": "EC2013.pdf",
    "page": 19,
    "prompt": "For what p do the roots of 3x²+2x+p(p−1)=0 have opposite signs?",
    "answer": "(B) 0<p<1",
    "steps": [
      "The root product is p(p−1)/3. Opposite signs require this product to be negative.",
      "The upward-opening product p(p−1) is negative between 0 and 1. Endpoints give a zero root and are excluded."
    ],
    "solutionGuide": {
      "meaning": "Use the product of roots; a negative product also guarantees two real roots here.",
      "sections": [
        {
          "title": "Apply Vieta’s formula",
          "blocks": [
            {
              "text": "The root product is p(p−1)/3. Opposite signs require this product to be negative."
            },
            {
              "equation": "frac{p(p−1)}{3}<0"
            }
          ]
        },
        {
          "title": "Solve the inequality",
          "blocks": [
            {
              "text": "The upward-opening product p(p−1) is negative between 0 and 1. Endpoints give a zero root and are excluded."
            },
            {
              "equation": "0<p<1"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "p<0",
        "0<p<1",
        "p>1",
        "p>0"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 64,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13a-65",
    "paperId": "gate-2013-1",
    "exam": "gate",
    "topic": "apt",
    "number": 65,
    "ref": "GATE 2013 · Booklet A · Q65",
    "file": "EC2013.pdf",
    "page": 19,
    "prompt": "Under the exam’s equally likely starting-weekday model, what is the probability that a leap year contains 53 Saturdays?",
    "answer": "(A) 2/7",
    "steps": [
      "366=52×7+2. Every weekday occurs 52 times; the year’s first two weekdays occur once more.",
      "Saturday occurs 53 times when January 1 is Friday or Saturday. These are two of seven assumed equally likely starting weekdays."
    ],
    "solutionGuide": {
      "meaning": "A leap year contains 52 complete weeks and two extra consecutive weekdays.",
      "sections": [
        {
          "title": "Count the extra days",
          "blocks": [
            {
              "text": "366=52×7+2. Every weekday occurs 52 times; the year’s first two weekdays occur once more."
            },
            {
              "equation": "366=52×7+2"
            }
          ]
        },
        {
          "title": "Count favorable starts",
          "blocks": [
            {
              "text": "Saturday occurs 53 times when January 1 is Friday or Saturday. These are two of seven assumed equally likely starting weekdays."
            },
            {
              "equation": "P=frac{2}{7}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2/7",
        "3/7",
        "1/7",
        "5/7"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 65,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "The standard exam model assumes uniformly distributed starting weekdays. Gregorian leap years over a full 400-year calendar cycle do not have exactly uniform starting weekdays."
  },
  {
    "id": "g13b-1",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "signals",
    "number": 1,
    "ref": "GATE 2013 · Booklet B · Q1",
    "file": "EC2013.pdf",
    "page": 22,
    "prompt": "Find the fundamental angular frequency of v(t)=30sin(100t)+10cos(300t)+6sin(500t+π/4).",
    "answer": "(A) 100 rad/s",
    "steps": [
      "The three angular frequencies are 100, 300 and 500 rad/s. They are the first, third and fifth harmonics of 100 rad/s.",
      "The phase offset does not change periodicity. The smallest common period is 2π/100."
    ],
    "solutionGuide": {
      "meaning": "Find the greatest common divisor of the angular frequencies.",
      "sections": [
        {
          "title": "Compare the harmonics",
          "blocks": [
            {
              "text": "The three angular frequencies are 100, 300 and 500 rad/s. They are the first, third and fifth harmonics of 100 rad/s."
            }
          ]
        },
        {
          "title": "Find the common period",
          "blocks": [
            {
              "text": "The phase offset does not change periodicity. The smallest common period is 2π/100."
            },
            {
              "equation": "ω_0=100 rad/s"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "100 rad/s",
        "300 rad/s",
        "500 rad/s",
        "1500 rad/s"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 14,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-2",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "analog",
    "number": 2,
    "ref": "GATE 2013 · Booklet B · Q2",
    "file": "EC2013.pdf",
    "page": 22,
    "prompt": "In the shown negative voltage-voltage feedback amplifier, what happens when the feedback gain k increases?",
    "answer": "(A) Input impedance rises; output impedance falls",
    "steps": [
      "Voltage-series feedback opposes the applied input voltage, increasing the input resistance by the desensitivity factor.",
      "Voltage sampling reduces output resistance by the same factor. Increasing feedback strengthens these effects while the loop remains negative and stable."
    ],
    "solutionGuide": {
      "meaning": "Identify the impedance effects of series input mixing and voltage output sampling.",
      "sections": [
        {
          "title": "Examine the input",
          "blocks": [
            {
              "text": "Voltage-series feedback opposes the applied input voltage, increasing the input resistance by the desensitivity factor."
            },
            {
              "equation": "R_{if}=R_i(1+Aβ)"
            }
          ]
        },
        {
          "title": "Examine the output",
          "blocks": [
            {
              "text": "Voltage sampling reduces output resistance by the same factor. Increasing feedback strengthens these effects while the loop remains negative and stable."
            },
            {
              "equation": "R_{of}=frac{R_o}{1+Aβ}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Input impedance rises; output impedance falls",
        "Both impedances rise",
        "Both impedances fall",
        "Input impedance falls; output impedance rises"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 15,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-3",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "signals",
    "number": 3,
    "ref": "GATE 2013 · Booklet B · Q3",
    "file": "EC2013.pdf",
    "page": 22,
    "prompt": "A signal is band-limited to 5 kHz. Which listed sampling rate is invalid?",
    "answer": "(A) 5 kHz",
    "steps": [
      "The Nyquist rate is 2×5=10 kHz. Rates above this permit ideal reconstruction of the stated band-limited signal.",
      "5 kHz is below 10 kHz and causes aliasing. The other listed rates exceed the Nyquist rate."
    ],
    "solutionGuide": {
      "meaning": "Compare each sample rate with twice the highest signal frequency.",
      "sections": [
        {
          "title": "Apply the sampling theorem",
          "blocks": [
            {
              "text": "The Nyquist rate is 2×5=10 kHz. Rates above this permit ideal reconstruction of the stated band-limited signal."
            },
            {
              "equation": "f_s>2f_{max}=10 kHz"
            }
          ]
        },
        {
          "title": "Choose the invalid rate",
          "blocks": [
            {
              "text": "5 kHz is below 10 kHz and causes aliasing. The other listed rates exceed the Nyquist rate."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "5 kHz",
        "12 kHz",
        "15 kHz",
        "20 kHz"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 16,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-4",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "devices",
    "number": 4,
    "ref": "GATE 2013 · Booklet B · Q4",
    "file": "EC2013.pdf",
    "page": 22,
    "prompt": "For a MOSFET in saturation, what does channel-length modulation cause?",
    "answer": "(D) Lower output resistance",
    "steps": [
      "The saturation current rises with drain-source voltage through the factor 1+λVDS.",
      "A nonzero output conductance means a finite output resistance, lower than the ideal infinite value without modulation."
    ],
    "solutionGuide": {
      "meaning": "Relate drain-current dependence on drain voltage to small-signal output resistance.",
      "sections": [
        {
          "title": "Include channel-length modulation",
          "blocks": [
            {
              "text": "The saturation current rises with drain-source voltage through the factor 1+λVDS."
            },
            {
              "equation": "I_D≈I_{D0}(1+λV_{DS})"
            }
          ]
        },
        {
          "title": "Differentiate",
          "blocks": [
            {
              "text": "A nonzero output conductance means a finite output resistance, lower than the ideal infinite value without modulation."
            },
            {
              "equation": "r_o≈frac{1}{λI_D}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Higher gate-source capacitance",
        "Lower transconductance",
        "Lower unity-gain cutoff frequency",
        "Lower output resistance"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 17,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-5",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "control",
    "number": 5,
    "ref": "GATE 2013 · Booklet B · Q5",
    "file": "EC2013.pdf",
    "page": 22,
    "prompt": "Which statement is NOT generally true for a causal stable continuous-time rational LTI system?",
    "answer": "(C) All poles satisfy |s|<1",
    "steps": [
      "For a causal BIBO-stable rational system, the poles must lie strictly in the left half-plane. Zeros do not determine BIBO stability.",
      "There is no requirement that continuous-time pole magnitudes be below 1. A pole at −10 is stable despite having magnitude 10."
    ],
    "solutionGuide": {
      "meaning": "Separate continuous-time stability from the discrete-time unit-circle criterion.",
      "sections": [
        {
          "title": "Use the continuous-time criterion",
          "blocks": [
            {
              "text": "For a causal BIBO-stable rational system, the poles must lie strictly in the left half-plane. Zeros do not determine BIBO stability."
            },
            {
              "equation": "Re(p_k)<0"
            }
          ]
        },
        {
          "title": "Reject the unit-circle rule",
          "blocks": [
            {
              "text": "There is no requirement that continuous-time pole magnitudes be below 1. A pole at −10 is stable despite having magnitude 10."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "All poles lie left of the jω axis",
        "Zeros may lie anywhere in the s-plane",
        "All poles satisfy |s|<1",
        "Characteristic roots lie left of the jω axis"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 18,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-6",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "math",
    "number": 6,
    "ref": "GATE 2013 · Booklet B · Q6",
    "file": "EC2013.pdf",
    "page": 23,
    "prompt": "Find the minimum eigenvalue of the symmetric matrix with rows (3,5,2), (5,12,7), (2,7,5).",
    "answer": "(A) 0",
    "steps": [
      "The second row equals the first plus the third. In fact A(1,−1,1)ᵀ=0, so zero is an eigenvalue.",
      "The trace is 20 and the sum of principal 2×2 minors is 33. The remaining roots are 10±√67, both positive. Thus zero is the minimum."
    ],
    "solutionGuide": {
      "meaning": "Find a zero eigenvalue and verify that no eigenvalue is negative.",
      "sections": [
        {
          "title": "Identify a null vector",
          "blocks": [
            {
              "text": "The second row equals the first plus the third. In fact A(1,−1,1)ᵀ=0, so zero is an eigenvalue."
            },
            {
              "equation": "A(1,−1,1)^T=0"
            }
          ]
        },
        {
          "title": "Check the other eigenvalues",
          "blocks": [
            {
              "text": "The trace is 20 and the sum of principal 2×2 minors is 33. The remaining roots are 10±√67, both positive. Thus zero is the minimum."
            },
            {
              "equation": "λ=0,10−sqrt{67},10+sqrt{67}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 19,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-7",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "math",
    "number": 7,
    "ref": "GATE 2013 · Booklet B · Q7",
    "file": "EC2013.pdf",
    "page": 23,
    "prompt": "All a₀,…,a₄ are positive. What must hold for f(x)=a₄x⁴+a₃x³+a₂x²+a₁x−a₀?",
    "answer": "(D) At least one positive and one negative real root",
    "steps": [
      "The constant term is negative: f(0)=−a₀<0.",
      "The positive leading quartic term dominates at both infinities, so f(x) tends to +∞ in both directions. Continuity gives at least one crossing on each side of zero."
    ],
    "solutionGuide": {
      "meaning": "Use continuity and the signs at zero and at large positive and negative x.",
      "sections": [
        {
          "title": "Evaluate at zero",
          "blocks": [
            {
              "text": "The constant term is negative: f(0)=−a₀<0."
            },
            {
              "equation": "f(0)<0"
            }
          ]
        },
        {
          "title": "Examine both ends",
          "blocks": [
            {
              "text": "The positive leading quartic term dominates at both infinities, so f(x) tends to +∞ in both directions. Continuity gives at least one crossing on each side of zero."
            },
            {
              "equation": "f(x)→+∞ as x→±∞"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "No real roots",
        "No negative real root",
        "An odd number of real roots",
        "At least one positive and one negative real root"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 20,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-8",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "signals",
    "number": 8,
    "ref": "GATE 2013 · Booklet B · Q8",
    "file": "EC2013.pdf",
    "page": 23,
    "prompt": "An ideal integrator G(s)=1/s starts from rest. Find its response to u(t).",
    "answer": "(B) t u(t)",
    "steps": [
      "The unit step has Laplace transform 1/s. With zero initial state, Y=GX.",
      "The inverse transform of 1/s² is the causal ramp."
    ],
    "solutionGuide": {
      "meaning": "Multiply the step transform by the integrator transfer function.",
      "sections": [
        {
          "title": "Transform the input",
          "blocks": [
            {
              "text": "The unit step has Laplace transform 1/s. With zero initial state, Y=GX."
            },
            {
              "equation": "Y(s)=frac{1}{s}frac{1}{s}=frac{1}{s^2}"
            }
          ]
        },
        {
          "title": "Invert the transform",
          "blocks": [
            {
              "text": "The inverse transform of 1/s² is the causal ramp."
            },
            {
              "equation": "y(t)=t u(t)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "u(t)",
        "t u(t)",
        "t²u(t)/2",
        "e^(−t)u(t)"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 21,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-9",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "networks",
    "number": 9,
    "ref": "GATE 2013 · Booklet B · Q9",
    "file": "EC2013.pdf",
    "page": 23,
    "prompt": "Find V₂(s)/V₁(s) for a series 100 μF input capacitor feeding a series 10 kΩ resistor and 100 μF capacitor to ground; V₂ is across the resistor-capacitor branch.",
    "answer": "(D) (s+1)/(s+2)",
    "steps": [
      "Each capacitor has impedance 1/(sC). The output branch has impedance R+1/(sC), while the total series impedance is R+2/(sC).",
      "Here RC=10000×100 μF=1 second. Multiply numerator and denominator by sC."
    ],
    "solutionGuide": {
      "meaning": "Treat the circuit as a frequency-dependent voltage divider.",
      "sections": [
        {
          "title": "Write the impedances",
          "blocks": [
            {
              "text": "Each capacitor has impedance 1/(sC). The output branch has impedance R+1/(sC), while the total series impedance is R+2/(sC)."
            },
            {
              "equation": "frac{V_2}{V_1}=frac{R+1/(sC)}{R+2/(sC)}"
            }
          ]
        },
        {
          "title": "Substitute RC",
          "blocks": [
            {
              "text": "Here RC=10000×100 μF=1 second. Multiply numerator and denominator by sC."
            },
            {
              "equation": "frac{V_2}{V_1}=frac{sRC+1}{sRC+2}=frac{s+1}{s+2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(0.5s+1)/(s+1)",
        "(3s+6)/(s+2)",
        "(s+2)/(s+1)",
        "(s+1)/(s+2)"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 22,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-22.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q22",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-10",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "networks",
    "number": 10,
    "ref": "GATE 2013 · Booklet B · Q10",
    "file": "EC2013.pdf",
    "page": 23,
    "prompt": "A sinusoidal source has internal impedance 4+j3 Ω. Which purely resistive load extracts maximum average power?",
    "answer": "(C) 5 Ω",
    "steps": [
      "With source amplitude fixed, load power is proportional to R/[(R+4)²+3²].",
      "Setting the derivative to zero gives R²=4²+3². Choose the positive resistance."
    ],
    "solutionGuide": {
      "meaning": "Optimize power over a real load resistance; complex-conjugate matching is unavailable.",
      "sections": [
        {
          "title": "Express load power",
          "blocks": [
            {
              "text": "With source amplitude fixed, load power is proportional to R/[(R+4)²+3²]."
            },
            {
              "equation": "P∝frac{R}{(R+4)^2+9}"
            }
          ]
        },
        {
          "title": "Differentiate",
          "blocks": [
            {
              "text": "Setting the derivative to zero gives R²=4²+3². Choose the positive resistance."
            },
            {
              "equation": "R=sqrt{4^2+3^2}=5 Ω"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "3 Ω",
        "4 Ω",
        "5 Ω",
        "7 Ω"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 23,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-11",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "em",
    "number": 11,
    "ref": "GATE 2013 · Booklet B · Q11",
    "file": "EC2013.pdf",
    "page": 23,
    "prompt": "A device has return loss 20 dB. Find VSWR and |Γ|.",
    "answer": "(A) 1.22 and 0.1",
    "steps": [
      "Return loss is −20log₁₀|Γ|. A 20 dB return loss therefore means |Γ|=0.1.",
      "Use the ratio of maximum to minimum standing-wave amplitudes."
    ],
    "solutionGuide": {
      "meaning": "Convert return loss to reflection magnitude, then compute standing-wave ratio.",
      "sections": [
        {
          "title": "Find reflection magnitude",
          "blocks": [
            {
              "text": "Return loss is −20log₁₀|Γ|. A 20 dB return loss therefore means |Γ|=0.1."
            },
            {
              "equation": "|Γ|=10^{−20/20}=0.1"
            }
          ]
        },
        {
          "title": "Calculate VSWR",
          "blocks": [
            {
              "text": "Use the ratio of maximum to minimum standing-wave amplitudes."
            },
            {
              "equation": "VSWR=frac{1+|Γ|}{1−|Γ|}=frac{1.1}{0.9}≈1.22"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1.22 and 0.1",
        "0.81 and 0.1",
        "−1.22 and 0.1",
        "2.44 and 0.2"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 24,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-12",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "comm",
    "number": 12,
    "ref": "GATE 2013 · Booklet B · Q12",
    "file": "EC2013.pdf",
    "page": 24,
    "prompt": "Let g(t)=e^(−πt²). It is applied to its zero-delay matched filter h(t)=g*(−t). Find the output Fourier transform, using f in Hz.",
    "answer": "(D) e^(−2πf²)",
    "steps": [
      "With the e^(−j2πft) convention, e^(−πt²) transforms to e^(−πf²).",
      "The zero-delay matched filter has H(f)=G*(f), so the output spectrum is |G(f)|²."
    ],
    "solutionGuide": {
      "meaning": "Use the Gaussian transform pair and the matched-filter frequency response.",
      "sections": [
        {
          "title": "Transform the Gaussian",
          "blocks": [
            {
              "text": "With the e^(−j2πft) convention, e^(−πt²) transforms to e^(−πf²)."
            },
            {
              "equation": "G(f)=e^{−πf^2}"
            }
          ]
        },
        {
          "title": "Multiply the spectra",
          "blocks": [
            {
              "text": "The zero-delay matched filter has H(f)=G*(f), so the output spectrum is |G(f)|²."
            },
            {
              "equation": "Y(f)=|G(f)|^2=e^{−2πf^2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "e^(−πf²)",
        "e^(−πf²/2)",
        "e^(−π|f|)",
        "e^(−2πf²)"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 25,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "A matched filter with an additional sampling delay T adds the phase factor e^(−j2πfT). The answer choices use the zero-delay convention."
  },
  {
    "id": "g13b-13",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "math",
    "number": 13,
    "ref": "GATE 2013 · Booklet B · Q13",
    "file": "EC2013.pdf",
    "page": 24,
    "prompt": "Express the closed-loop line integral ∮A·dl as a surface or volume integral.",
    "answer": "(D) Integral of curl over an open surface bounded by the loop",
    "steps": [
      "Stokes’ theorem relates circulation to the surface integral of curl, not divergence.",
      "The loop is the boundary of an open surface. The surface normal and loop direction must follow the right-hand rule."
    ],
    "solutionGuide": {
      "meaning": "Choose the theorem that converts circulation around a loop to flux through a spanning surface.",
      "sections": [
        {
          "title": "Identify the theorem",
          "blocks": [
            {
              "text": "Stokes’ theorem relates circulation to the surface integral of curl, not divergence."
            }
          ]
        },
        {
          "title": "Choose the surface",
          "blocks": [
            {
              "text": "The loop is the boundary of an open surface. The surface normal and loop direction must follow the right-hand rule."
            },
            {
              "equation": "∮A·dl=∬(∇×A)·dS"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Integral of curl over a closed surface",
        "Integral of divergence over a closed volume",
        "Integral of divergence over an open volume",
        "Integral of curl over an open surface bounded by the loop"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 2,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-14",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "digital",
    "number": 14,
    "ref": "GATE 2013 · Booklet B · Q14",
    "file": "EC2013.pdf",
    "page": 24,
    "prompt": "A staircase bulb can be toggled by either of two switches, regardless of the other switch’s state. Which logic gate describes this behavior?",
    "answer": "(C) XOR",
    "steps": [
      "Flipping either switch must invert the bulb state. AND and OR fail this requirement for some states of the other input.",
      "XOR is 1 for unequal inputs and 0 for equal inputs. Changing either input always swaps these cases."
    ],
    "solutionGuide": {
      "meaning": "Find the two-input logic operation whose output changes whenever either input changes.",
      "sections": [
        {
          "title": "Test the switching rule",
          "blocks": [
            {
              "text": "Flipping either switch must invert the bulb state. AND and OR fail this requirement for some states of the other input."
            }
          ]
        },
        {
          "title": "Write the truth table",
          "blocks": [
            {
              "text": "XOR is 1 for unequal inputs and 0 for equal inputs. Changing either input always swaps these cases."
            },
            {
              "equation": "Y=A⊕B"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "AND",
        "OR",
        "XOR",
        "NAND"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 1,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-15",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "signals",
    "number": 15,
    "ref": "GATE 2013 · Booklet B · Q15",
    "file": "EC2013.pdf",
    "page": 24,
    "prompt": "Two LTI systems with impulse responses h₁(t) and h₂(t) are cascaded. What is the overall impulse response?",
    "answer": "(C) Convolution",
    "steps": [
      "The first system produces h₁(t). Treat this as the input to the second LTI system.",
      "An LTI system’s output is its input convolved with its impulse response."
    ],
    "solutionGuide": {
      "meaning": "Find the equivalent impulse response when one LTI system feeds the next.",
      "sections": [
        {
          "title": "Pass an impulse through the cascade",
          "blocks": [
            {
              "text": "The first system produces h₁(t). Treat this as the input to the second LTI system."
            }
          ]
        },
        {
          "title": "Apply the convolution rule",
          "blocks": [
            {
              "text": "An LTI system’s output is its input convolved with its impulse response."
            },
            {
              "equation": "h(t)=h_1(t)∗h_2(t)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Product",
        "Sum",
        "Convolution",
        "Difference"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 3,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-16",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "devices",
    "number": 16,
    "ref": "GATE 2013 · Booklet B · Q16",
    "file": "EC2013.pdf",
    "page": 24,
    "prompt": "Which sequence best describes current flow in a forward-biased pn junction?",
    "answer": "(A) Minority-carrier injection, diffusion and recombination",
    "steps": [
      "Forward bias lowers the junction barrier. Electrons enter the p region and holes enter the n region, becoming excess minority carriers there.",
      "These injected carriers diffuse down their concentration gradients and recombine in the quasi-neutral regions."
    ],
    "solutionGuide": {
      "meaning": "Identify how forward bias produces the dominant junction current.",
      "sections": [
        {
          "title": "Explain injection",
          "blocks": [
            {
              "text": "Forward bias lowers the junction barrier. Electrons enter the p region and holes enter the n region, becoming excess minority carriers there."
            }
          ]
        },
        {
          "title": "Explain transport",
          "blocks": [
            {
              "text": "These injected carriers diffuse down their concentration gradients and recombine in the quasi-neutral regions."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Minority-carrier injection, diffusion and recombination",
        "Minority-carrier injection, drift and generation",
        "Minority-carrier extraction, diffusion and generation",
        "Minority-carrier extraction, drift and recombination"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 4,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-17",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "devices",
    "number": 17,
    "ref": "GATE 2013 · Booklet B · Q17",
    "file": "EC2013.pdf",
    "page": 24,
    "prompt": "Compared with wet oxidation, what does dry oxidation produce in IC fabrication?",
    "answer": "(D) Better oxide, slower growth",
    "steps": [
      "Steam grows silicon dioxide faster than dry oxygen under comparable processing conditions.",
      "Dry oxidation gives a denser, higher-quality oxide with better interface and electrical properties, but grows more slowly."
    ],
    "solutionGuide": {
      "meaning": "Compare oxide quality and growth rate for oxygen and steam processes.",
      "sections": [
        {
          "title": "Compare the processes",
          "blocks": [
            {
              "text": "Steam grows silicon dioxide faster than dry oxygen under comparable processing conditions."
            }
          ]
        },
        {
          "title": "Select the tradeoff",
          "blocks": [
            {
              "text": "Dry oxidation gives a denser, higher-quality oxide with better interface and electrical properties, but grows more slowly."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Better oxide, faster growth",
        "Poorer oxide, faster growth",
        "Poorer oxide, slower growth",
        "Better oxide, slower growth"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 5,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-18",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "math",
    "number": 18,
    "ref": "GATE 2013 · Booklet B · Q18",
    "file": "EC2013.pdf",
    "page": 24,
    "prompt": "What is the largest listed angle for which sinθ≈θ has error within 10%, with θ in radians?",
    "answer": "Archived key: (C) 50°. Under ordinary relative error, the largest valid listed choice is (B) 18°.",
    "steps": [
      "At 50°, θ≈0.8727 and sinθ≈0.7660. The relative error is about 12.2% using θ as reference, or 13.9% using sinθ. Thus 50° actually exceeds 10%.",
      "18° is within 10%, while the archived key selects 50°. The selected key appears to use a coarse approximation or a different unstated error interpretation. Do not treat 50° as a rigorous 10% relative-error bound."
    ],
    "solutionGuide": {
      "meaning": "Check the small-angle approximation at the candidate angles.",
      "sections": [
        {
          "title": "Compute the candidate error",
          "blocks": [
            {
              "text": "At 50°, θ≈0.8727 and sinθ≈0.7660. The relative error is about 12.2% using θ as reference, or 13.9% using sinθ. Thus 50° actually exceeds 10%."
            }
          ]
        },
        {
          "title": "Interpret the archived choice",
          "blocks": [
            {
              "text": "18° is within 10%, while the archived key selects 50°. The selected key appears to use a coarse approximation or a different unstated error interpretation. Do not treat 50° as a rigorous 10% relative-error bound."
            },
            {
              "equation": "frac{0.8727−0.7660}{0.8727}≈0.122"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "10°",
        "18°",
        "50°",
        "90°"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 6,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "Archived key: C (50°). Under ordinary relative-error definitions, B (18°) is the largest listed valid angle. The key and the stated tolerance disagree."
  },
  {
    "id": "g13b-19",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "math",
    "number": 19,
    "ref": "GATE 2013 · Booklet B · Q19",
    "file": "EC2013.pdf",
    "page": 25,
    "prompt": "Find ∇·A for A=x x̂+y ŷ+z ẑ.",
    "answer": "(D) 3",
    "steps": [
      "In Cartesian coordinates, divergence is ∂Ax/∂x+∂Ay/∂y+∂Az/∂z.",
      "Each derivative equals 1, so their sum is 3."
    ],
    "solutionGuide": {
      "meaning": "Differentiate each Cartesian component with respect to its corresponding coordinate.",
      "sections": [
        {
          "title": "Apply divergence",
          "blocks": [
            {
              "text": "In Cartesian coordinates, divergence is ∂Ax/∂x+∂Ay/∂y+∂Az/∂z."
            }
          ]
        },
        {
          "title": "Evaluate the derivatives",
          "blocks": [
            {
              "text": "Each derivative equals 1, so their sum is 3."
            },
            {
              "equation": "∇·A=1+1+1=3"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1/3",
        "1",
        "3"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 7,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-20",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "signals",
    "number": 20,
    "ref": "GATE 2013 · Booklet B · Q20",
    "file": "EC2013.pdf",
    "page": 25,
    "prompt": "An LTI system has h(t)=t u(t). Find its response to x(t)=u(t−1).",
    "answer": "(C) (t−1)²u(t−1)/2",
    "steps": [
      "For t<1 there is no overlap. For t≥1, the convolution integrates h(τ)=τ from 0 to t−1.",
      "Integrating the ramp gives half the squared interval length. The delayed unit step enforces zero output before t=1."
    ],
    "solutionGuide": {
      "meaning": "Convolve a causal ramp impulse response with a delayed step.",
      "sections": [
        {
          "title": "Find the integration interval",
          "blocks": [
            {
              "text": "For t<1 there is no overlap. For t≥1, the convolution integrates h(τ)=τ from 0 to t−1."
            },
            {
              "equation": "y(t)=∫_0^{t−1}τ dτ"
            }
          ]
        },
        {
          "title": "Evaluate",
          "blocks": [
            {
              "text": "Integrating the ramp gives half the squared interval length. The delayed unit step enforces zero output before t=1."
            },
            {
              "equation": "y(t)=frac{(t−1)^2}{2}u(t−1)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "t²u(t)/2",
        "t(t−1)u(t−1)/2",
        "(t−1)²u(t−1)/2",
        "(t²−1)u(t−1)/2"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 8,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-21",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "control",
    "number": 21,
    "ref": "GATE 2013 · Booklet B · Q21",
    "file": "EC2013.pdf",
    "page": 25,
    "prompt": "The Bode magnitude is 32 dB at 1 rad/s and −8 dB at 10 rad/s, with negative phase. Find G(s).",
    "answer": "(B) 39.8/s²",
    "steps": [
      "The magnitude falls by 40 dB over one decade. Two poles at the origin give this slope and negative phase.",
      "At ω=1, the magnitude equals K. Convert 32 dB to a linear amplitude ratio."
    ],
    "solutionGuide": {
      "meaning": "Use the magnitude slope to find the number of integrators and the 1-rad/s value to find gain.",
      "sections": [
        {
          "title": "Find the slope",
          "blocks": [
            {
              "text": "The magnitude falls by 40 dB over one decade. Two poles at the origin give this slope and negative phase."
            },
            {
              "equation": "G(s)=frac{K}{s^2}"
            }
          ]
        },
        {
          "title": "Compute the gain",
          "blocks": [
            {
              "text": "At ω=1, the magnitude equals K. Convert 32 dB to a linear amplitude ratio."
            },
            {
              "equation": "K=10^{32/20}≈39.8"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "39.8/s",
        "39.8/s²",
        "32/s",
        "32/s²"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 9,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-9.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q9",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-22",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "analog",
    "number": 22,
    "ref": "GATE 2013 · Booklet B · Q22",
    "file": "EC2013.pdf",
    "page": 25,
    "prompt": "For the shown ideal op-amp and silicon npn transistor circuit, find Vout. The noninverting input and transistor base are grounded.",
    "answer": "(B) −0.7 V",
    "steps": [
      "Negative feedback holds the inverting node near 0 V. The 5 V source therefore supplies 5 mA through the 1 kΩ resistor, which the collector takes.",
      "The grounded base must be approximately 0.7 V above the emitter. The emitter is the op-amp output."
    ],
    "solutionGuide": {
      "meaning": "Determine the emitter voltage required for the transistor to provide feedback current.",
      "sections": [
        {
          "title": "Find the feedback current",
          "blocks": [
            {
              "text": "Negative feedback holds the inverting node near 0 V. The 5 V source therefore supplies 5 mA through the 1 kΩ resistor, which the collector takes."
            },
            {
              "equation": "I_C≈frac{5}{1000}=5 mA"
            }
          ]
        },
        {
          "title": "Use the base-emitter drop",
          "blocks": [
            {
              "text": "The grounded base must be approximately 0.7 V above the emitter. The emitter is the op-amp output."
            },
            {
              "equation": "V_{out}=V_B−0.7=−0.7 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "−15 V",
        "−0.7 V",
        "+0.7 V",
        "+15 V"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 10,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-10.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q10",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-23",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "networks",
    "number": 23,
    "ref": "GATE 2013 · Booklet B · Q23",
    "file": "EC2013.pdf",
    "page": 26,
    "prompt": "Every resistor in a delta network is multiplied by k>0. By what factor do the equivalent star resistors change?",
    "answer": "(B) k",
    "steps": [
      "A star arm equals the product of its adjacent delta resistances divided by the sum of all three delta resistances.",
      "The numerator gains k² and the denominator gains k, leaving one factor of k. The same applies to all three arms."
    ],
    "solutionGuide": {
      "meaning": "Apply the delta-to-star conversion and track the scale factor.",
      "sections": [
        {
          "title": "Write one star resistor",
          "blocks": [
            {
              "text": "A star arm equals the product of its adjacent delta resistances divided by the sum of all three delta resistances."
            },
            {
              "equation": "R_A=frac{R_bR_c}{R_a+R_b+R_c}"
            }
          ]
        },
        {
          "title": "Scale all resistances",
          "blocks": [
            {
              "text": "The numerator gains k² and the denominator gains k, leaving one factor of k. The same applies to all three arms."
            },
            {
              "equation": "R_A′=kR_A"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "k²",
        "k",
        "1/k",
        "√k"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 11,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-24",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "comm",
    "number": 24,
    "ref": "GATE 2013 · Booklet B · Q24",
    "file": "EC2013.pdf",
    "page": 26,
    "prompt": "A 32-QAM link sends R kbits/s. Find the minimum bandwidth for zero-ISI transmission.",
    "answer": "(B) R/10 kHz",
    "steps": [
      "32-QAM carries log₂32=5 bits per symbol, giving a symbol rate of R/5 ksymbols/s.",
      "With ideal zero-rolloff shaping, the minimum positive-frequency bandwidth is half the symbol rate."
    ],
    "solutionGuide": {
      "meaning": "Convert bit rate to symbol rate and apply the ideal Nyquist bandwidth.",
      "sections": [
        {
          "title": "Find bits per symbol",
          "blocks": [
            {
              "text": "32-QAM carries log₂32=5 bits per symbol, giving a symbol rate of R/5 ksymbols/s."
            },
            {
              "equation": "R_s=frac{R}{5}"
            }
          ]
        },
        {
          "title": "Apply Nyquist shaping",
          "blocks": [
            {
              "text": "With ideal zero-rolloff shaping, the minimum positive-frequency bandwidth is half the symbol rate."
            },
            {
              "equation": "B_{min}=frac{R_s}{2}=frac{R}{10} kHz"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "R/10 Hz",
        "R/10 kHz",
        "R/5 Hz",
        "R/5 kHz"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 13,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-25",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "digital",
    "number": 25,
    "ref": "GATE 2013 · Booklet B · Q25",
    "file": "EC2013.pdf",
    "page": 26,
    "prompt": "An 8085 executes MVI A,05H; MVI B,05H; PTR: ADD B; DCR B; JNZ PTR; ADI 03H; HLT. Find the final accumulator.",
    "answer": "(A) 17H",
    "steps": [
      "The ADD instruction uses B=5,4,3,2,1. DCR sets the zero flag when B reaches zero, ending the loop.",
      "A starts at 5, then receives 15 and finally 3. Decimal 23 is hexadecimal 17H."
    ],
    "solutionGuide": {
      "meaning": "Trace the values added before the loop counter reaches zero.",
      "sections": [
        {
          "title": "Evaluate the loop",
          "blocks": [
            {
              "text": "The ADD instruction uses B=5,4,3,2,1. DCR sets the zero flag when B reaches zero, ending the loop."
            },
            {
              "equation": "5+4+3+2+1=15"
            }
          ]
        },
        {
          "title": "Include initialization and final addition",
          "blocks": [
            {
              "text": "A starts at 5, then receives 15 and finally 3. Decimal 23 is hexadecimal 17H."
            },
            {
              "equation": "A=5+15+3=23=17H"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "17H",
        "20H",
        "23H",
        "05H"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 12,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-26",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "math",
    "number": 26,
    "ref": "GATE 2013 · Booklet B · Q26",
    "file": "EC2013.pdf",
    "page": 27,
    "prompt": "U and V are identically distributed zero-mean variables. Their CDFs for U and 2V are F(x) and G(x). Which relation holds for every x?",
    "answer": "(D) x[F(x)−G(x)]≥0",
    "steps": [
      "Since U and V share a distribution, G(x)=P(V≤x/2)=F(x/2).",
      "For x>0, F(x)≥F(x/2); for x<0, F(x)≤F(x/2). Multiplying the difference by x makes it nonnegative in both cases. Zero mean is not needed for this result."
    ],
    "solutionGuide": {
      "meaning": "Use monotonicity of a CDF when its argument is scaled by one half.",
      "sections": [
        {
          "title": "Relate the CDFs",
          "blocks": [
            {
              "text": "Since U and V share a distribution, G(x)=P(V≤x/2)=F(x/2)."
            },
            {
              "equation": "G(x)=F(x/2)"
            }
          ]
        },
        {
          "title": "Check the sign of x",
          "blocks": [
            {
              "text": "For x>0, F(x)≥F(x/2); for x<0, F(x)≤F(x/2). Multiplying the difference by x makes it nonnegative in both cases. Zero mean is not needed for this result."
            },
            {
              "equation": "x[F(x)−G(x)]≥0"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "F(x)−G(x)≤0",
        "F(x)−G(x)≥0",
        "x[F(x)−G(x)]≤0",
        "x[F(x)−G(x)]≥0"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 38,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-27",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "signals",
    "number": 27,
    "ref": "GATE 2013 · Booklet B · Q27",
    "file": "EC2013.pdf",
    "page": 27,
    "prompt": "A first-order linear constant-coefficient differential system gives y(t) from x(t) and initial value y(0). How can its response be changed to −2y(t)?",
    "answer": "(D) Initial value −2y(0), input −2x(t)",
    "steps": [
      "The response is the sum of a part linear in the initial value and a part linear in the forcing input.",
      "To obtain −2y for arbitrary input and initial value, multiply both the initial condition and the forcing function by −2. The system coefficients stay unchanged."
    ],
    "solutionGuide": {
      "meaning": "Scale both the zero-input response and the zero-state response by the same factor.",
      "sections": [
        {
          "title": "Separate the response",
          "blocks": [
            {
              "text": "The response is the sum of a part linear in the initial value and a part linear in the forcing input."
            },
            {
              "equation": "y=y_{initial}+y_{forced}"
            }
          ]
        },
        {
          "title": "Scale both contributions",
          "blocks": [
            {
              "text": "To obtain −2y for arbitrary input and initial value, multiply both the initial condition and the forcing function by −2. The system coefficients stay unchanged."
            },
            {
              "equation": "y_{new}(0)=−2y(0);x_{new}(t)=−2x(t)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Initial value −y(0), input 2x(t)",
        "Initial value 2y(0), input −x(t)",
        "Initial value 2jy(0), input 2jx(t)",
        "Initial value −2y(0), input −2x(t)"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 37,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-28",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "signals",
    "number": 28,
    "ref": "GATE 2013 · Booklet B · Q28",
    "file": "EC2013.pdf",
    "page": 27,
    "prompt": "The DFT of (a,b,c,d) is (α,β,γ,δ). Multiply the row vector (a,b,c,d) by the circulant matrix with rows (a,b,c,d), (d,a,b,c), (c,d,a,b), (b,c,d,a). The DFT of the resulting vector is a scaled version of which vector?",
    "answer": "(A) (α²,β²,γ²,δ²)",
    "steps": [
      "The first component is a²+2bd+c², matching the zero-index term of a length-four circular self-convolution. The other components follow the same cyclic pattern.",
      "A circular convolution transforms to pointwise multiplication. Thus self-convolution squares each DFT component; any normalization convention only changes a common scale."
    ],
    "solutionGuide": {
      "meaning": "Recognize the matrix product as a circular self-convolution.",
      "sections": [
        {
          "title": "Write one output component",
          "blocks": [
            {
              "text": "The first component is a²+2bd+c², matching the zero-index term of a length-four circular self-convolution. The other components follow the same cyclic pattern."
            },
            {
              "equation": "p[n]=x[n]⊛x[n]"
            }
          ]
        },
        {
          "title": "Apply the DFT convolution theorem",
          "blocks": [
            {
              "text": "A circular convolution transforms to pointwise multiplication. Thus self-convolution squares each DFT component; any normalization convention only changes a common scale."
            },
            {
              "equation": "P[k]=X[k]^2"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(α²,β²,γ²,δ²)",
        "(√α,√β,√γ,√δ)",
        "(α+β,β+δ,δ+γ,γ+α)",
        "(α,β,γ,δ)"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 39,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-29",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "control",
    "number": 29,
    "ref": "GATE 2013 · Booklet B · Q29",
    "file": "EC2013.pdf",
    "page": 27,
    "prompt": "Find Y(s)/U(s) for the shown signal-flow graph.",
    "answer": "(A) (s+1)/(5s²+6s+2)",
    "steps": [
      "Let a be the first internal node, b the second and c the output node. The graph gives a=u−2c, b=a/s−4c, and c=(1+1/s)b.",
      "Substituting b and a into the last equation gives (5s²+6s+2)c=(s+1)u."
    ],
    "solutionGuide": {
      "meaning": "Account for the parallel forward branch and both feedback loops.",
      "sections": [
        {
          "title": "Write node equations",
          "blocks": [
            {
              "text": "Let a be the first internal node, b the second and c the output node. The graph gives a=u−2c, b=a/s−4c, and c=(1+1/s)b."
            },
            {
              "equation": "a=u−2c;b=frac{a}{s}−4c;c=(1+frac{1}{s})b"
            }
          ]
        },
        {
          "title": "Eliminate the internal nodes",
          "blocks": [
            {
              "text": "Substituting b and a into the last equation gives (5s²+6s+2)c=(s+1)u."
            },
            {
              "equation": "frac{Y(s)}{U(s)}=frac{s+1}{5s^2+6s+2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(s+1)/(5s²+6s+2)",
        "(s+1)/(s²+6s+2)",
        "(s+1)/(s²+4s+2)",
        "1/(5s²+6s+2)"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 40,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-40.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q40",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-30",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "analog",
    "number": 30,
    "ref": "GATE 2013 · Booklet B · Q30",
    "file": "EC2013.pdf",
    "page": 28,
    "prompt": "Find Vout in the shown cascade of ideal op-amps with all resistors 1 kΩ. The first noninverting input is +1 V and its resistor input is −2 V.",
    "answer": "(C) 8 V",
    "steps": [
      "The first inverting node is at +1 V. KCL through its equal input and feedback resistors gives (1−(−2))+(1−V₁)=0, so V₁=4 V.",
      "The second stage is a noninverting amplifier with equal feedback and ground resistors. Its gain is 2. Both outputs remain within the ±15 V supplies."
    ],
    "solutionGuide": {
      "meaning": "Solve the biased inverting stage first, then the noninverting amplifier.",
      "sections": [
        {
          "title": "Solve the first stage",
          "blocks": [
            {
              "text": "The first inverting node is at +1 V. KCL through its equal input and feedback resistors gives (1−(−2))+(1−V₁)=0, so V₁=4 V."
            },
            {
              "equation": "V_1=2(1)−(−2)=4 V"
            }
          ]
        },
        {
          "title": "Apply the second-stage gain",
          "blocks": [
            {
              "text": "The second stage is a noninverting amplifier with equal feedback and ground resistors. Its gain is 2. Both outputs remain within the ±15 V supplies."
            },
            {
              "equation": "V_{out}=2V_1=8 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "4 V",
        "6 V",
        "8 V",
        "10 V"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 41,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-41.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q41",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-31",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "digital",
    "number": 31,
    "ref": "GATE 2013 · Booklet B · Q31",
    "file": "EC2013.pdf",
    "page": 28,
    "prompt": "For the shown resistor-transistor-diode logic circuit, X and Y are 0 or 5 V. Neglect transistor saturation voltage and diode forward drop. Find Z.",
    "answer": "(B) X̄Y",
    "steps": [
      "If X=1, the npn transistor turns on and clamps Z to zero. Thus a high output requires X=0.",
      "When Y=0, the diode clamps the output low. When X=0 and Y=1, both clamps release and the pull-up makes Z high."
    ],
    "solutionGuide": {
      "meaning": "Identify when either device clamps the pull-up output to zero.",
      "sections": [
        {
          "title": "Test X",
          "blocks": [
            {
              "text": "If X=1, the npn transistor turns on and clamps Z to zero. Thus a high output requires X=0."
            }
          ]
        },
        {
          "title": "Test Y",
          "blocks": [
            {
              "text": "When Y=0, the diode clamps the output low. When X=0 and Y=1, both clamps release and the pull-up makes Z high."
            },
            {
              "equation": "Z=X̄Y"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "XY",
        "X̄Y",
        "XȲ",
        "X̄Ȳ"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 42,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-42.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q42",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-32",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "networks",
    "number": 32,
    "ref": "GATE 2013 · Booklet B · Q32",
    "file": "EC2013.pdf",
    "page": 28,
    "prompt": "A voltage 1000sin(ωt) is applied across YZ of the shown symmetric diode bridge. With ideal diodes, find the voltage across WX.",
    "answer": "(D) 0 for all t",
    "steps": [
      "For each polarity, the corresponding pair of ideal diodes conducts symmetrically to the left and right nodes. The two halves have identical connections and resistances.",
      "The bridge forces W and X to the same potential in either half-cycle. The voltage between them is therefore zero even though internal currents may flow."
    ],
    "solutionGuide": {
      "meaning": "Use the left-right symmetry of the bridge rather than mistaking it for a standard rectifier output.",
      "sections": [
        {
          "title": "Consider either input polarity",
          "blocks": [
            {
              "text": "For each polarity, the corresponding pair of ideal diodes conducts symmetrically to the left and right nodes. The two halves have identical connections and resistances."
            }
          ]
        },
        {
          "title": "Compare W and X",
          "blocks": [
            {
              "text": "The bridge forces W and X to the same potential in either half-cycle. The voltage between them is therefore zero even though internal currents may flow."
            },
            {
              "equation": "V_{WX}=V_W−V_X=0"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "sin(ωt)",
        "[sin(ωt)+|sin(ωt)|]/2",
        "[sin(ωt)−|sin(ωt)|]/2",
        "0 for all t"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 43,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-43.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q43",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-33",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "networks",
    "number": 33,
    "ref": "GATE 2013 · Booklet B · Q33",
    "file": "EC2013.pdf",
    "page": 29,
    "prompt": "C₁=10 μF is in parallel with series capacitors C₂=5 μF and C₃=2 μF. Their breakdown ratings are 10 V, 5 V and 2 V. Find maximum safe terminal voltage and total terminal charge.",
    "answer": "(C) 2.8 V, 32 μC",
    "steps": [
      "The limits are C₂V₂max=25 μC and C₃V₃max=4 μC. Thus C₃ limits the series branch to 4 μC, giving V₂=0.8 V and V₃=2 V.",
      "The series equivalent is 10/7 μF. Adding parallel C₁ gives 80/7 μF, whose charge at 2.8 V is 32 μC. C₁ remains below its own 10 V rating."
    ],
    "solutionGuide": {
      "meaning": "The series capacitors share charge, not voltage; find which one reaches breakdown first.",
      "sections": [
        {
          "title": "Find the limiting series charge",
          "blocks": [
            {
              "text": "The limits are C₂V₂max=25 μC and C₃V₃max=4 μC. Thus C₃ limits the series branch to 4 μC, giving V₂=0.8 V and V₃=2 V."
            },
            {
              "equation": "V_{max}=0.8+2=2.8 V"
            }
          ]
        },
        {
          "title": "Find total terminal charge",
          "blocks": [
            {
              "text": "The series equivalent is 10/7 μF. Adding parallel C₁ gives 80/7 μF, whose charge at 2.8 V is 32 μC. C₁ remains below its own 10 V rating."
            },
            {
              "equation": "Q=(10+frac{10}{7})×2.8=32 μC"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2.8 V, 36 μC",
        "7 V, 119 μC",
        "2.8 V, 32 μC",
        "7 V, 80 μC"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 44,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-44.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q44",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-34",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "digital",
    "number": 34,
    "ref": "GATE 2013 · Booklet B · Q34",
    "file": "EC2013.pdf",
    "page": 29,
    "prompt": "Four 1024-byte RAM chips are connected to the shown 16-bit address decoder. Find the address ranges of RAM1 through RAM4.",
    "answer": "(D) 0800–0BFF, 1800–1BFF, 2800–2BFF, 3800–3BFF",
    "steps": [
      "The common enable requires A₁₅=A₁₄=A₁₀=0 and A₁₁=1. A₁₃ and A₁₂ select chips 1 through 4 in binary order.",
      "Each chip spans 2¹⁰=1024 addresses, or 400H. The fixed A₁₁ bit contributes 0800H; chip selection adds 0000H,1000H,2000H,3000H."
    ],
    "solutionGuide": {
      "meaning": "Use A₀–A₉ for locations within a chip and decode the upper six address bits.",
      "sections": [
        {
          "title": "Read the enable condition",
          "blocks": [
            {
              "text": "The common enable requires A₁₅=A₁₄=A₁₀=0 and A₁₁=1. A₁₃ and A₁₂ select chips 1 through 4 in binary order."
            }
          ]
        },
        {
          "title": "Form each address block",
          "blocks": [
            {
              "text": "Each chip spans 2¹⁰=1024 addresses, or 400H. The fixed A₁₁ bit contributes 0800H; chip selection adds 0000H,1000H,2000H,3000H."
            },
            {
              "equation": "0800H–0BFFH;1800H–1BFFH;2800H–2BFFH;3800H–3BFFH"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0C00–0FFF, 1C00–1FFF, 2C00–2FFF, 3C00–3FFF",
        "1800–1FFF, 2800–2FFF, 3800–3FFF, 4800–4FFF",
        "0500–08FF, 1500–18FF, 3500–38FF, 5500–58FF",
        "0800–0BFF, 1800–1BFF, 2800–2BFF, 3800–3BFF"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 45,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-45.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q45",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-35",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "analog",
    "number": 35,
    "ref": "GATE 2013 · Booklet B · Q35",
    "file": "EC2013.pdf",
    "page": 30,
    "prompt": "An npn bias circuit has VCC=3 V, R₁=60 kΩ, RE=500 Ω and very high β. Find R₂ for IC=1 mA, using VBE≈0.7 V.",
    "answer": "(C) 40 kΩ",
    "steps": [
      "With very high β, IE≈IC=1 mA and base current is negligible. VE=0.5 V, so VB≈1.2 V.",
      "The divider gives VB=3R₂/(60 kΩ+R₂). Rearranging gives R₂=40 kΩ."
    ],
    "solutionGuide": {
      "meaning": "Find the required base voltage and use the unloaded divider approximation.",
      "sections": [
        {
          "title": "Find emitter and base voltages",
          "blocks": [
            {
              "text": "With very high β, IE≈IC=1 mA and base current is negligible. VE=0.5 V, so VB≈1.2 V."
            },
            {
              "equation": "V_B=(1 mA)(500 Ω)+0.7=1.2 V"
            }
          ]
        },
        {
          "title": "Solve the divider",
          "blocks": [
            {
              "text": "The divider gives VB=3R₂/(60 kΩ+R₂). Rearranging gives R₂=40 kΩ."
            },
            {
              "equation": "R_2=frac{1.2×60}{3−1.2}=40 kΩ"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "20 kΩ",
        "30 kΩ",
        "40 kΩ",
        "50 kΩ"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 46,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-46.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q46",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-36",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "comm",
    "number": 36,
    "ref": "GATE 2013 · Booklet B · Q36",
    "file": "EC2013.pdf",
    "page": 30,
    "prompt": "Independent U and V each take +1 and −1 with probability 1/2. Find H(U+V).",
    "answer": "(C) 3/2 bits",
    "steps": [
      "The sums −2,0,+2 have probabilities 1/4,1/2,1/4 because the zero sum occurs in two of the four equiprobable pairs.",
      "Use H=−Σp log₂p. The contributions are 1/2,1/2,1/2 bit."
    ],
    "solutionGuide": {
      "meaning": "Determine the probability of each sum before computing entropy.",
      "sections": [
        {
          "title": "List the sums",
          "blocks": [
            {
              "text": "The sums −2,0,+2 have probabilities 1/4,1/2,1/4 because the zero sum occurs in two of the four equiprobable pairs."
            }
          ]
        },
        {
          "title": "Compute entropy",
          "blocks": [
            {
              "text": "Use H=−Σp log₂p. The contributions are 1/2,1/2,1/2 bit."
            },
            {
              "equation": "H=−2(frac{1}{4}log_2 frac{1}{4})−frac{1}{2}log_2 frac{1}{2}=frac{3}{2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "3/4 bit",
        "1 bit",
        "3/2 bits",
        "log₂3 bits"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 47,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-37",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "math",
    "number": 37,
    "ref": "GATE 2013 · Booklet B · Q37",
    "file": "EC2013.pdf",
    "page": 30,
    "prompt": "Independent zero-mean Gaussian variables U and V have variances 1/4 and 1/9. Find P(3V≥2U).",
    "answer": "(B) 1/2",
    "steps": [
      "Z=3V−2U is Gaussian. Independence gives variance 9(1/9)+4(1/4)=2 and mean zero.",
      "A continuous zero-mean Gaussian has half its probability on either side of zero; equality has zero probability."
    ],
    "solutionGuide": {
      "meaning": "Reduce the event to the sign of a zero-mean Gaussian variable.",
      "sections": [
        {
          "title": "Form a new Gaussian",
          "blocks": [
            {
              "text": "Z=3V−2U is Gaussian. Independence gives variance 9(1/9)+4(1/4)=2 and mean zero."
            },
            {
              "equation": "Z∼N(0,2)"
            }
          ]
        },
        {
          "title": "Use symmetry",
          "blocks": [
            {
              "text": "A continuous zero-mean Gaussian has half its probability on either side of zero; equality has zero probability."
            },
            {
              "equation": "P(3V≥2U)=P(Z≥0)=frac{1}{2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "4/9",
        "1/2",
        "2/3",
        "5/9"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 26,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-38",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "math",
    "number": 38,
    "ref": "GATE 2013 · Booklet B · Q38",
    "file": "EC2013.pdf",
    "page": 30,
    "prompt": "Find the determinant of the 4×4 matrix with 2 on its diagonal and 1 everywhere else. Use det(I+AB)=det(I+BA).",
    "answer": "(B) 5",
    "steps": [
      "Let u=(1,1,1,1)ᵀ. The matrix is I₄+uuᵀ.",
      "The rank-one determinant reduces to a scalar: 1+uᵀu=1+4."
    ],
    "solutionGuide": {
      "meaning": "Recognize the matrix as an identity plus a rank-one all-ones matrix.",
      "sections": [
        {
          "title": "Factor the update",
          "blocks": [
            {
              "text": "Let u=(1,1,1,1)ᵀ. The matrix is I₄+uuᵀ."
            },
            {
              "equation": "M=I_4+uu^T"
            }
          ]
        },
        {
          "title": "Apply the determinant identity",
          "blocks": [
            {
              "text": "The rank-one determinant reduces to a scalar: 1+uᵀu=1+4."
            },
            {
              "equation": "det(M)=1+u^Tu=5"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2",
        "5",
        "8",
        "16"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 27,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-39",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "networks",
    "number": 39,
    "ref": "GATE 2013 · Booklet B · Q39",
    "file": "EC2013.pdf",
    "page": 31,
    "prompt": "In the shown coupled dependent-source circuit, Vs=100∠53.13° V. Find the open-circuit Thevenin voltage seen by RL.",
    "answer": "(C) 800∠90° V",
    "steps": [
      "With RL removed, the right-loop current I₂ is zero. The left dependent voltage j40I₂ is therefore zero, leaving I₁=Vs/(3+j4).",
      "The marked inductor voltage is VL1=j4I₁=j80 V. There is no drop across the unloaded right-hand series impedance, so Vth=10VL1."
    ],
    "solutionGuide": {
      "meaning": "Remove RL before solving; the dependent sources remain active.",
      "sections": [
        {
          "title": "Open the load",
          "blocks": [
            {
              "text": "With RL removed, the right-loop current I₂ is zero. The left dependent voltage j40I₂ is therefore zero, leaving I₁=Vs/(3+j4)."
            },
            {
              "equation": "I_1=frac{100∠53.13°}{3+j4}=20 A"
            }
          ]
        },
        {
          "title": "Find the controlled source voltage",
          "blocks": [
            {
              "text": "The marked inductor voltage is VL1=j4I₁=j80 V. There is no drop across the unloaded right-hand series impedance, so Vth=10VL1."
            },
            {
              "equation": "V_{th}=10(j4)(20)=j800=800∠90° V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "100∠90° V",
        "800∠0° V",
        "800∠90° V",
        "100∠60° V"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 28,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-28.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q28",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-40",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "control",
    "number": 40,
    "ref": "GATE 2013 · Booklet B · Q40",
    "file": "EC2013.pdf",
    "page": 31,
    "prompt": "A motor has G(s)=10/(1+10s). In unity negative feedback with proportional gain Ka, what approximate Ka reduces its time constant by a factor of 100?",
    "answer": "(C) 10",
    "steps": [
      "The closed-loop denominator is 10s+1+10Ka, giving τcl=10/(1+10Ka).",
      "The desired time constant is 10/100=0.1 s. Thus 1+10Ka=100, giving Ka=9.9≈10."
    ],
    "solutionGuide": {
      "meaning": "Find the closed-loop pole and compare its time constant with 10 seconds.",
      "sections": [
        {
          "title": "Close the loop",
          "blocks": [
            {
              "text": "The closed-loop denominator is 10s+1+10Ka, giving τcl=10/(1+10Ka)."
            },
            {
              "equation": "τ_{cl}=frac{10}{1+10K_a}"
            }
          ]
        },
        {
          "title": "Set the required ratio",
          "blocks": [
            {
              "text": "The desired time constant is 10/100=0.1 s. Thus 1+10Ka=100, giving Ka=9.9≈10."
            },
            {
              "equation": "K_a=frac{99}{10}=9.9≈10"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1",
        "5",
        "10",
        "100"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 29,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-41",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "devices",
    "number": 41,
    "ref": "GATE 2013 · Booklet B · Q41",
    "file": "EC2013.pdf",
    "page": 31,
    "prompt": "A 10 V supply feeds a 100 Ω series resistor and an ideal 5 V Zener shunt regulator. The Zener knee current is 10 mA. Find minimum RL and minimum Zener power rating.",
    "answer": "(B) 125 Ω, 250 mW",
    "steps": [
      "The series current is (10−5)/100=50 mA. Reserving 10 mA for the Zener leaves 40 mA for the load.",
      "With no load, all 50 mA flows through the Zener. Its rating must cover 5×0.05=0.25 W."
    ],
    "solutionGuide": {
      "meaning": "Use the minimum Zener current at maximum load and the maximum Zener current at no load.",
      "sections": [
        {
          "title": "Find the maximum load current",
          "blocks": [
            {
              "text": "The series current is (10−5)/100=50 mA. Reserving 10 mA for the Zener leaves 40 mA for the load."
            },
            {
              "equation": "R_{L,min}=frac{5}{0.04}=125 Ω"
            }
          ]
        },
        {
          "title": "Check no-load dissipation",
          "blocks": [
            {
              "text": "With no load, all 50 mA flows through the Zener. Its rating must cover 5×0.05=0.25 W."
            },
            {
              "equation": "P_{Z,max}=5×0.05=250 mW"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "125 Ω, 125 mW",
        "125 Ω, 250 mW",
        "250 Ω, 125 mW",
        "250 Ω, 250 mW"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 30,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-30.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q30",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-42",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "networks",
    "number": 42,
    "ref": "GATE 2013 · Booklet B · Q42",
    "file": "EC2013.pdf",
    "page": 32,
    "prompt": "The shown ideal transformer has turns ratio 1:1.25 and a tapped attenuator of factor 0.8. Find forward VYZ/VWX and reverse VWX/VYZ under open-circuit output conditions.",
    "answer": "(B) 1 and 0.8",
    "steps": [
      "From WX to the full secondary, the transformer multiplies voltage by 1.25. The tap then multiplies by 0.8, giving a net ratio 1.",
      "With the primary open, no ideal-transformer current flows. The untapped segment has no voltage drop, so the full secondary equals the applied tap voltage. The reverse transformer ratio is 1/1.25=0.8."
    ],
    "solutionGuide": {
      "meaning": "Distinguish forward tap attenuation from reverse open-circuit excitation of the tap.",
      "sections": [
        {
          "title": "Forward excitation",
          "blocks": [
            {
              "text": "From WX to the full secondary, the transformer multiplies voltage by 1.25. The tap then multiplies by 0.8, giving a net ratio 1."
            },
            {
              "equation": "frac{V_{YZ}}{V_{WX}}=1.25×0.8=1"
            }
          ]
        },
        {
          "title": "Reverse excitation",
          "blocks": [
            {
              "text": "With the primary open, no ideal-transformer current flows. The untapped segment has no voltage drop, so the full secondary equals the applied tap voltage. The reverse transformer ratio is 1/1.25=0.8."
            },
            {
              "equation": "frac{V_{WX}}{V_{YZ}}=frac{1}{1.25}=0.8"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1.25 and 0.8",
        "1 and 0.8",
        "1 and 1",
        "0.8 and 0.8"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 31,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-31.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q31",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-43",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "networks",
    "number": 43,
    "ref": "GATE 2013 · Booklet B · Q43",
    "file": "EC2013.pdf",
    "page": 32,
    "prompt": "Two magnetically uncoupled coils have quality factors q₁,q₂ and series resistances R₁,R₂ at the same frequency. Find their series-combination Q.",
    "answer": "(C) (q₁R₁+q₂R₂)/(R₁+R₂)",
    "steps": [
      "For a series coil model, qᵢ=ωLᵢ/Rᵢ. Hence its inductive reactance is qᵢRᵢ.",
      "No mutual inductance is present. Divide the sum of reactances by the sum of resistances."
    ],
    "solutionGuide": {
      "meaning": "Add inductive reactances and resistances before forming Q.",
      "sections": [
        {
          "title": "Express each reactance",
          "blocks": [
            {
              "text": "For a series coil model, qᵢ=ωLᵢ/Rᵢ. Hence its inductive reactance is qᵢRᵢ."
            },
            {
              "equation": "ωL_i=q_iR_i"
            }
          ]
        },
        {
          "title": "Combine the coils",
          "blocks": [
            {
              "text": "No mutual inductance is present. Divide the sum of reactances by the sum of resistances."
            },
            {
              "equation": "Q=frac{q_1R_1+q_2R_2}{R_1+R_2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "q₁+q₂",
        "1/q₁+1/q₂",
        "(q₁R₁+q₂R₂)/(R₁+R₂)",
        "(q₁R₂+q₂R₁)/(R₁+R₂)"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 32,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-44",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "signals",
    "number": 44,
    "ref": "GATE 2013 · Booklet B · Q44",
    "file": "EC2013.pdf",
    "page": 32,
    "prompt": "A system has h(t)=δ(t−1)+δ(t−3). Find its unit-step response at t=2.",
    "answer": "(B) 1",
    "steps": [
      "Convolution with each delayed impulse produces a delayed step.",
      "The first step is on and the second is off."
    ],
    "solutionGuide": {
      "meaning": "Convolve the impulse response with a unit step.",
      "sections": [
        {
          "title": "Shift the step",
          "blocks": [
            {
              "text": "Convolution with each delayed impulse produces a delayed step."
            },
            {
              "equation": "y(t)=u(t−1)+u(t−3)"
            }
          ]
        },
        {
          "title": "Evaluate at t=2",
          "blocks": [
            {
              "text": "The first step is on and the second is off."
            },
            {
              "equation": "y(2)=1+0=1"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 33,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-45",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "devices",
    "number": 45,
    "ref": "GATE 2013 · Booklet B · Q45",
    "file": "EC2013.pdf",
    "page": 32,
    "prompt": "A diode-connected NMOS has gate and drain at VB=2 V, source grounded, kN=40 μA/V² and VTN=1 V. Neglect body effect and channel-length modulation. Find dVB/dID.",
    "answer": "(B) 25 kΩ",
    "steps": [
      "Gate equals drain, so the conducting device is in saturation. Its overdrive is 1 V and gm=kN(VB−VT)=40 μS.",
      "With λ=0, the drain and gate voltage change together and the small-signal resistance is 1/gm."
    ],
    "solutionGuide": {
      "meaning": "Differentiate the square-law current of a diode-connected MOSFET.",
      "sections": [
        {
          "title": "Find transconductance",
          "blocks": [
            {
              "text": "Gate equals drain, so the conducting device is in saturation. Its overdrive is 1 V and gm=kN(VB−VT)=40 μS."
            },
            {
              "equation": "g_m=40 μA/V^2×1 V=40 μS"
            }
          ]
        },
        {
          "title": "Invert the incremental conductance",
          "blocks": [
            {
              "text": "With λ=0, the drain and gate voltage change together and the small-signal resistance is 1/gm."
            },
            {
              "equation": "r=frac{1}{40 μS}=25 kΩ"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "12.5 kΩ",
        "25 kΩ",
        "50 kΩ",
        "100 kΩ"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 34,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-34.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q34",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-46",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "signals",
    "number": 46,
    "ref": "GATE 2013 · Booklet B · Q46",
    "file": "EC2013.pdf",
    "page": 33,
    "prompt": "A system satisfies y″+5y′+6y=x(t), with y(0)=y′(0)=0. The input is 1 for 0<t<2 and zero otherwise. Find Y(s).",
    "answer": "(B) (1−e^(−2s))/[s(s+2)(s+3)]",
    "steps": [
      "The input is u(t)−u(t−2), giving a transform (1−e^(−2s))/s.",
      "Zero initial conditions give G(s)=1/(s²+5s+6)=1/[(s+2)(s+3)]. Multiply G and X."
    ],
    "solutionGuide": {
      "meaning": "Represent the finite rectangular pulse as two steps and use the zero-state transfer function.",
      "sections": [
        {
          "title": "Transform the pulse",
          "blocks": [
            {
              "text": "The input is u(t)−u(t−2), giving a transform (1−e^(−2s))/s."
            },
            {
              "equation": "X(s)=frac{1−e^{−2s}}{s}"
            }
          ]
        },
        {
          "title": "Transform the differential equation",
          "blocks": [
            {
              "text": "Zero initial conditions give G(s)=1/(s²+5s+6)=1/[(s+2)(s+3)]. Multiply G and X."
            },
            {
              "equation": "Y(s)=frac{1−e^{−2s}}{s(s+2)(s+3)}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "e^(−2s)/[s(s+2)(s+3)]",
        "(1−e^(−2s))/[s(s+2)(s+3)]",
        "e^(−2s)/[(s+2)(s+3)]",
        "(1−e^(−2s))/[(s+2)(s+3)]"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 36,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-47",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "analog",
    "number": 47,
    "ref": "GATE 2013 · Booklet B · Q47",
    "file": "EC2013.pdf",
    "page": 33,
    "prompt": "A common-source NMOS stage has RD=10 kΩ, RL=10 kΩ and an output coupling capacitor C=1 μF. Ignore body effect and channel-length modulation. Find its lower cutoff frequency.",
    "answer": "(A) 8 Hz",
    "steps": [
      "Zero input makes vgs=0, so the controlled current source is zero. Each capacitor terminal sees a resistor to AC ground: RD on one side and RL on the other.",
      "The capacitor forms a first-order high-pass pole with the sum of those resistances."
    ],
    "solutionGuide": {
      "meaning": "Find the resistance seen across the coupling capacitor with the input set to zero.",
      "sections": [
        {
          "title": "Deactivate the input",
          "blocks": [
            {
              "text": "Zero input makes vgs=0, so the controlled current source is zero. Each capacitor terminal sees a resistor to AC ground: RD on one side and RL on the other."
            },
            {
              "equation": "R_{seen}=R_D+R_L=20 kΩ"
            }
          ]
        },
        {
          "title": "Compute the high-pass corner",
          "blocks": [
            {
              "text": "The capacitor forms a first-order high-pass pole with the sum of those resistances."
            },
            {
              "equation": "f_L=frac{1}{2πC(R_D+R_L)}≈7.96 Hz"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "8 Hz",
        "32 Hz",
        "50 Hz",
        "200 Hz"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 35,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-35.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q35",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-48",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "networks",
    "number": 48,
    "ref": "GATE 2013 · Booklet B · Q48",
    "file": "EC2013.pdf",
    "page": 34,
    "prompt": "For the shown circuit with a 10 V voltage source, 2 A current source, and 5 Ω, 2 Ω and 1 Ω resistors, find downward voltage-source current IS and current-source voltage VS (positive at its top).",
    "answer": "(D) −13 A, 20 V",
    "steps": [
      "The top rail is 10 V above the bottom rail. The 1 Ω and 2 Ω branches draw 10 A and 5 A. The current source supplies 2 A upward, so downward IS=2−15=−13 A.",
      "Its 2 A flows upward through 5 Ω, requiring its top terminal to be 10 V above the 10 V rail. Thus VS=20 V."
    ],
    "solutionGuide": {
      "meaning": "The ideal voltage source fixes the rail voltage; then use KCL and the series-resistor drop.",
      "sections": [
        {
          "title": "Find the voltage-source current",
          "blocks": [
            {
              "text": "The top rail is 10 V above the bottom rail. The 1 Ω and 2 Ω branches draw 10 A and 5 A. The current source supplies 2 A upward, so downward IS=2−15=−13 A."
            },
            {
              "equation": "I_S=2−frac{10}{1}−frac{10}{2}=−13 A"
            }
          ]
        },
        {
          "title": "Find the current-source voltage",
          "blocks": [
            {
              "text": "Its 2 A flows upward through 5 Ω, requiring its top terminal to be 10 V above the 10 V rail. Thus VS=20 V."
            },
            {
              "equation": "V_S=10+(2)(5)=20 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "13 A, −20 V",
        "8 A, −10 V",
        "−8 A, 20 V",
        "−13 A, 20 V"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 50,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-50.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q50",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-49",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "networks",
    "number": 49,
    "ref": "GATE 2013 · Booklet B · Q49",
    "file": "EC2013.pdf",
    "page": 34,
    "prompt": "In the same circuit, a 1 Ω resistor is connected directly in parallel with an ideal 10 V voltage source. Find its current in the indicated downward direction.",
    "answer": "(C) 10 A",
    "steps": [
      "Parallel branches share the same terminal voltage. The ideal source maintains 10 V across the 1 Ω resistor regardless of the other branches.",
      "The upper terminal is positive, so the current is downward as indicated."
    ],
    "solutionGuide": {
      "meaning": "Use the voltage fixed across the resistor by the parallel ideal source.",
      "sections": [
        {
          "title": "Identify the voltage",
          "blocks": [
            {
              "text": "Parallel branches share the same terminal voltage. The ideal source maintains 10 V across the 1 Ω resistor regardless of the other branches."
            },
            {
              "equation": "V_R=10 V"
            }
          ]
        },
        {
          "title": "Apply Ohm’s law",
          "blocks": [
            {
              "text": "The upper terminal is positive, so the current is downward as indicated."
            },
            {
              "equation": "I_R=frac{10 V}{1 Ω}=10 A"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2 A",
        "3.33 A",
        "10 A",
        "12 A"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 51,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-51.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q51",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-50",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "comm",
    "number": 50,
    "ref": "GATE 2013 · Booklet B · Q50",
    "file": "EC2013.pdf",
    "page": 34,
    "prompt": "Equiprobable bits have the shown triangular received-value densities: bit 0 on [−1,1] with peak 1 at 0, and bit 1 on [0,4] with peak 0.5 at 2. For threshold 1, find BER.",
    "answer": "(D) 1/16",
    "steps": [
      "Decide bit 1 above threshold 1. Bit 0 never exceeds 1, so its error probability is zero. Bit 1 is mistaken only on [0,1], where its density is x/4.",
      "Only half the transmitted bits are bit 1. Multiply the conditional error by 1/2."
    ],
    "solutionGuide": {
      "meaning": "Integrate the conditional error region and include the prior probability.",
      "sections": [
        {
          "title": "Locate the errors",
          "blocks": [
            {
              "text": "Decide bit 1 above threshold 1. Bit 0 never exceeds 1, so its error probability is zero. Bit 1 is mistaken only on [0,1], where its density is x/4."
            },
            {
              "equation": "P(error|1)=∫_0^1 frac{x}{4}dx=frac{1}{8}"
            }
          ]
        },
        {
          "title": "Weight by the bit priors",
          "blocks": [
            {
              "text": "Only half the transmitted bits are bit 1. Multiply the conditional error by 1/2."
            },
            {
              "equation": "BER=frac{1}{2}×frac{1}{8}=frac{1}{16}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1/2",
        "1/4",
        "1/8",
        "1/16"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 48,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-48.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q48",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-51",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "comm",
    "number": 51,
    "ref": "GATE 2013 · Booklet B · Q51",
    "file": "EC2013.pdf",
    "page": 34,
    "prompt": "For the same equiprobable triangular densities—bit 0 on [−1,1] with peak 1, bit 1 on [0,4] with peak 0.5 at 2—find the optimum decision threshold.",
    "answer": "(B) 4/5",
    "steps": [
      "On 0≤x≤1, f₀(x)=1−x and f₁(x)=x/4. Outside the overlap, the nonzero density determines the decision.",
      "Set 1−x=x/4. Below the crossing choose bit 0; above it choose bit 1."
    ],
    "solutionGuide": {
      "meaning": "For equal priors and error costs, place the threshold where the overlapping likelihoods cross.",
      "sections": [
        {
          "title": "Write the overlap densities",
          "blocks": [
            {
              "text": "On 0≤x≤1, f₀(x)=1−x and f₁(x)=x/4. Outside the overlap, the nonzero density determines the decision."
            },
            {
              "equation": "f_0(x)=1−x;f_1(x)=frac{x}{4}"
            }
          ]
        },
        {
          "title": "Equate the likelihoods",
          "blocks": [
            {
              "text": "Set 1−x=x/4. Below the crossing choose bit 0; above it choose bit 1."
            },
            {
              "equation": "x_{th}=frac{4}{5}=0.8"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1/2",
        "4/5",
        "1",
        "3/2"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 49,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-49.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q49",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-52",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "control",
    "number": 52,
    "ref": "GATE 2013 · Booklet B · Q52",
    "file": "EC2013.pdf",
    "page": 35,
    "prompt": "Find the state equations for the shown two-integrator signal-flow realization, taking each integrator output as its state.",
    "answer": "(A) A=[−1,0;1,−1], B=[−1;1], C=[1,−1], D=1",
    "steps": [
      "Let x₁ be the output of the left integrator and x₂ of the right. The first integrator input is −u−x₁. The second input is u+x₁−x₂.",
      "The final summing node gives y=u+x₁−x₂. These coefficients match option A."
    ],
    "solutionGuide": {
      "meaning": "Read the inputs of the two integrators as state derivatives.",
      "sections": [
        {
          "title": "Read the first and second states",
          "blocks": [
            {
              "text": "Let x₁ be the output of the left integrator and x₂ of the right. The first integrator input is −u−x₁. The second input is u+x₁−x₂."
            },
            {
              "equation": "ẋ_1=−x_1−u;ẋ_2=x_1−x_2+u"
            }
          ]
        },
        {
          "title": "Read the output",
          "blocks": [
            {
              "text": "The final summing node gives y=u+x₁−x₂. These coefficients match option A."
            },
            {
              "equation": "y=x_1−x_2+u"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "A=[−1,0;1,−1], B=[−1;1], C=[1,−1], D=1",
        "A=[−1,0;−1,−1], B=[−1;1], C=[−1,−1], D=1",
        "A=[−1,0;−1,−1], B=[−1;1], C=[−1,−1], D=−1",
        "A=[−1,−1;0,−1], B=[−1;1], C=[1,−1], D=−1"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 54,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-54.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q54",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-53",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "control",
    "number": 53,
    "ref": "GATE 2013 · Booklet B · Q53",
    "file": "EC2013.pdf",
    "page": 35,
    "prompt": "For A=[−1,0;1,−1], find the state transition matrix e^(At).",
    "answer": "(A) [e^(−t),0;te^(−t),e^(−t)]",
    "steps": [
      "Write A=−I+N with N=[0,0;1,0]. Since N²=0, its exponential truncates to I+tN.",
      "The identity commutes with N, so e^(At)=e^(−t)(I+tN). It equals I at t=0 as required."
    ],
    "solutionGuide": {
      "meaning": "Separate the matrix into a scalar identity part and a nilpotent part.",
      "sections": [
        {
          "title": "Find the nilpotent part",
          "blocks": [
            {
              "text": "Write A=−I+N with N=[0,0;1,0]. Since N²=0, its exponential truncates to I+tN."
            },
            {
              "equation": "N^2=0;e^{Nt}=I+tN"
            }
          ]
        },
        {
          "title": "Multiply the commuting exponentials",
          "blocks": [
            {
              "text": "The identity commutes with N, so e^(At)=e^(−t)(I+tN). It equals I at t=0 as required."
            },
            {
              "equation": "e^{At}=e^{−t}(I+tN)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "[e^(−t),0;te^(−t),e^(−t)]",
        "[e^(−t),0;−te^(−t),e^(−t)]",
        "[e^(−t),0;e^(−t),e^(−t)]",
        "[e^(−t),−te^(−t);0,e^(−t)]"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 55,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-54",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "em",
    "number": 54,
    "ref": "GATE 2013 · Booklet B · Q54",
    "file": "EC2013.pdf",
    "page": 36,
    "prompt": "A plane wave of wavelength 600 μm travels from εr=1 to εr=4.5. Its transmitted ray makes 19.2° with the normal. Find incidence angle and incident phasor Ei, with x and z directions as shown.",
    "answer": "(C) 45°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴(x+z)/(3√2)]",
    "steps": [
      "For nonmagnetic media, sinθi=√4.5 sin19.2°≈0.698, close to sin45°. The supplied 19.2° is rounded rather coarsely; the intended listed angle is 45°.",
      "The incident propagation direction is (x̂+ẑ)/√2, so the transverse electric field is along (x̂−ẑ)/√2. The wavenumber 2π/λ=π10⁴/3 gives the stated phase."
    ],
    "solutionGuide": {
      "meaning": "Use Snell’s law for the ray and transversality for electric-field orientation.",
      "sections": [
        {
          "title": "Find the incidence angle",
          "blocks": [
            {
              "text": "For nonmagnetic media, sinθi=√4.5 sin19.2°≈0.698, close to sin45°. The supplied 19.2° is rounded rather coarsely; the intended listed angle is 45°."
            },
            {
              "equation": "θ_i≈45°"
            }
          ]
        },
        {
          "title": "Build the phasor",
          "blocks": [
            {
              "text": "The incident propagation direction is (x̂+ẑ)/√2, so the transverse electric field is along (x̂−ẑ)/√2. The wavenumber 2π/λ=π10⁴/3 gives the stated phase."
            },
            {
              "equation": "E_i=frac{E_0}{sqrt{2}}(x̂−ẑ)e^{−jπ10^4(x+z)/(3sqrt{2})}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "60°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴(x+z)/(3√2)]",
        "45°, (E₀/√2)(x̂+ẑ)e^[−jπ10⁴z/3]",
        "45°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴(x+z)/(3√2)]",
        "60°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴z/3]"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 52,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "Using θt=19.2° literally gives θi≈44.23°. The exact transmitted angle for 45° is about 19.47°. The answer follows the intended 45° option.",
    "figure": "pyq-figures/g13-52.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q52",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-55",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "em",
    "number": 55,
    "ref": "GATE 2013 · Booklet B · Q55",
    "file": "EC2013.pdf",
    "page": 36,
    "prompt": "For the same 600 μm TM-polarized wave incident from εr=1 onto εr=4.5 at the intended angle 45°, find the reflected electric-field phasor.",
    "answer": "Archived key: (A), magnitude 0.23. With the stated incident field, the reflected Cartesian coefficient is −0.23; see the sign calculation.",
    "steps": [
      "η₂/η₁=1/√4.5. Using the exact Snell angle for 45°, the tangential electric-field ratio is (η₂cosθt−η₁cosθi)/(η₂cosθt+η₁cosθi)≈−0.229.",
      "The diagram’s x̂−ẑ incident reference can represent the signed incident amplitude. The reflected phase uses x−z. With Ei fixed exactly as in Q52, the coefficient multiplying x̂+ẑ is −0.23. The archived key chooses A, whose magnitude is correct but whose sign is positive."
    ],
    "solutionGuide": {
      "meaning": "Apply the TM Fresnel coefficient and reverse the normal component of the propagation vector.",
      "sections": [
        {
          "title": "Compute the TM reflection coefficient",
          "blocks": [
            {
              "text": "η₂/η₁=1/√4.5. Using the exact Snell angle for 45°, the tangential electric-field ratio is (η₂cosθt−η₁cosθi)/(η₂cosθt+η₁cosθi)≈−0.229."
            },
            {
              "equation": "Γ_{tangential}≈−0.229"
            }
          ]
        },
        {
          "title": "Respect the diagram’s field reference",
          "blocks": [
            {
              "text": "The diagram’s x̂−ẑ incident reference can represent the signed incident amplitude. The reflected phase uses x−z. With Ei fixed exactly as in Q52, the coefficient multiplying x̂+ẑ is −0.23. The archived key chooses A, whose magnitude is correct but whose sign is positive."
            },
            {
              "equation": "E_r=−0.23frac{E_0}{sqrt{2}}(x̂+ẑ)e^{−jπ10^4(x−z)/(3sqrt{2})}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0.23(E₀/√2)(x̂+ẑ)e^[−jπ10⁴(x−z)/(3√2)]",
        "−(E₀/√2)(x̂+ẑ)e^[jπ10⁴z/3]",
        "0.44(E₀/√2)(x̂+ẑ)e^[−jπ10⁴(x−z)/(3√2)]",
        "(E₀/√2)(x̂+ẑ)e^[−jπ10⁴(x+z)/3]"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 53,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "The archived key selects A, but its reflected-field sign is inconsistent with the incident field written in Q52 under the same Cartesian basis. The worked calculation retains the physically consistent negative sign.",
    "figure": "pyq-figures/g13-53.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q53",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13b-56",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "apt",
    "number": 56,
    "ref": "GATE 2013 · Booklet B · Q56",
    "file": "EC2013.pdf",
    "page": 37,
    "prompt": "“You can always give me a ring whenever you need.” Choose the best intended inference.",
    "answer": "(C) A friend in need is a friend indeed.",
    "steps": [
      "“Give me a ring” means “telephone me.” “Whenever you need” expresses willingness to help.",
      "The statement supports dependable friendship, not any claim about caller tunes, telephone quality or free calls."
    ],
    "solutionGuide": {
      "meaning": "Interpret “give me a ring” as an offer of availability and support.",
      "sections": [
        {
          "title": "Interpret the idiom",
          "blocks": [
            {
              "text": "“Give me a ring” means “telephone me.” “Whenever you need” expresses willingness to help."
            }
          ]
        },
        {
          "title": "Compare the options",
          "blocks": [
            {
              "text": "The statement supports dependable friendship, not any claim about caller tunes, telephone quality or free calls."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "The speaker has a nice caller tune.",
        "The speaker has a better telephone facility.",
        "A friend in need is a friend indeed.",
        "The listener need not pay telephone bills."
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 57,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-57",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "apt",
    "number": 57,
    "ref": "GATE 2013 · Booklet B · Q57",
    "file": "EC2013.pdf",
    "page": 37,
    "prompt": "Complete the sentence as intended by the archived key: “Dare ___ mistakes.”",
    "answer": "(A) commit",
    "steps": [
      "The archived key treats dare as a modal-like verb followed by a bare infinitive, selecting “commit.”",
      "In ordinary affirmative imperatives, “Dare to commit mistakes” is also natural and more conventional for many speakers. The key’s choice is an exam convention, not a universal rejection of “to commit.”"
    ],
    "solutionGuide": {
      "meaning": "Distinguish the exam’s modal use of dare from ordinary modern infinitive usage.",
      "sections": [
        {
          "title": "Read the intended construction",
          "blocks": [
            {
              "text": "The archived key treats dare as a modal-like verb followed by a bare infinitive, selecting “commit.”"
            }
          ]
        },
        {
          "title": "Keep the usage limitation clear",
          "blocks": [
            {
              "text": "In ordinary affirmative imperatives, “Dare to commit mistakes” is also natural and more conventional for many speakers. The key’s choice is an exam convention, not a universal rejection of “to commit.”"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "commit",
        "to commit",
        "committed",
        "committing"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 59,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "Archived key: A. Both modal and lexical constructions of dare exist; the bare positive imperative here is stylistically unusual."
  },
  {
    "id": "g13b-58",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "apt",
    "number": 58,
    "ref": "GATE 2013 · Booklet B · Q58",
    "file": "EC2013.pdf",
    "page": 37,
    "prompt": "Choose the grammatically correct sentence.",
    "answer": "(D) Two and two make four.",
    "steps": [
      "In this construction, “make” means “amount to” or “give a total of.”",
      "“Two and two make four” is the standard phrasing selected by the archived key."
    ],
    "solutionGuide": {
      "meaning": "Choose the standard expression for the result of an arithmetic sum.",
      "sections": [
        {
          "title": "Use the conventional expression",
          "blocks": [
            {
              "text": "In this construction, “make” means “amount to” or “give a total of.”"
            }
          ]
        },
        {
          "title": "Select the sentence",
          "blocks": [
            {
              "text": "“Two and two make four” is the standard phrasing selected by the archived key."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Two and two add four.",
        "Two and two become four.",
        "Two and two are four.",
        "Two and two make four."
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 56,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-59",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "apt",
    "number": 59,
    "ref": "GATE 2013 · Booklet B · Q59",
    "file": "EC2013.pdf",
    "page": 37,
    "prompt": "Choose the closest meaning of “quarrel” in “They were requested not to quarrel with others.”",
    "answer": "(D) fall out",
    "steps": [
      "To quarrel is to have an argument or disagreement.",
      "To “fall out with” someone means to quarrel or stop being friendly. The other choices have different meanings."
    ],
    "solutionGuide": {
      "meaning": "Choose the phrasal verb meaning to argue or become unfriendly.",
      "sections": [
        {
          "title": "Identify the meaning",
          "blocks": [
            {
              "text": "To quarrel is to have an argument or disagreement."
            }
          ]
        },
        {
          "title": "Match the phrasal verb",
          "blocks": [
            {
              "text": "To “fall out with” someone means to quarrel or stop being friendly. The other choices have different meanings."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "make out",
        "call out",
        "dig out",
        "fall out"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 60,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-60",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "apt",
    "number": 60,
    "ref": "GATE 2013 · Booklet B · Q60",
    "file": "EC2013.pdf",
    "page": 37,
    "prompt": "The Monday–Wednesday mean temperature was 41°C; Tuesday–Thursday mean was 43°C. Thursday was 15% hotter than Monday. Find Thursday’s temperature.",
    "answer": "(C) 46°C",
    "steps": [
      "The two totals are 123°C and 129°C, so Thursday minus Monday is 6°C.",
      "T=1.15M gives 0.15M=6, hence M=40°C and T=46°C."
    ],
    "solutionGuide": {
      "meaning": "Subtract the overlapping three-day totals to eliminate Tuesday and Wednesday.",
      "sections": [
        {
          "title": "Subtract the totals",
          "blocks": [
            {
              "text": "The two totals are 123°C and 129°C, so Thursday minus Monday is 6°C."
            },
            {
              "equation": "T−M=3(43−41)=6"
            }
          ]
        },
        {
          "title": "Use the percentage relation",
          "blocks": [
            {
              "text": "T=1.15M gives 0.15M=6, hence M=40°C and T=46°C."
            },
            {
              "equation": "T=1.15×40=46°C"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "40°C",
        "43°C",
        "46°C",
        "49°C"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 58,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-61",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "math",
    "number": 61,
    "ref": "GATE 2013 · Booklet B · Q61",
    "file": "EC2013.pdf",
    "page": 37,
    "prompt": "Find the sum of n terms of 10+84+734+… .",
    "answer": "(D) (9/8)(9ⁿ−1)+n²",
    "steps": [
      "The terms are 9+1, 81+3, 729+5, so the kth term is 9ᵏ+(2k−1).",
      "The geometric sum is 9(9ⁿ−1)/8, while the first n odd numbers sum to n²."
    ],
    "solutionGuide": {
      "meaning": "Identify the geometric component and the consecutive odd-number correction.",
      "sections": [
        {
          "title": "Recognize each term",
          "blocks": [
            {
              "text": "The terms are 9+1, 81+3, 729+5, so the kth term is 9ᵏ+(2k−1)."
            },
            {
              "equation": "a_k=9^k+2k−1"
            }
          ]
        },
        {
          "title": "Sum the two parts",
          "blocks": [
            {
              "text": "The geometric sum is 9(9ⁿ−1)/8, while the first n odd numbers sum to n²."
            },
            {
              "equation": "S_n=frac{9(9^n−1)}{8}+n^2"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(9/10)(9ⁿ+1)",
        "(9/8)(9ⁿ−1)",
        "(9/8)(9ⁿ+n)",
        "(9/8)(9ⁿ−1)+n²"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 62,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-62",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "math",
    "number": 62,
    "ref": "GATE 2013 · Booklet B · Q62",
    "file": "EC2013.pdf",
    "page": 37,
    "prompt": "For what p do the roots of 3x²+2x+p(p−1)=0 have opposite signs?",
    "answer": "(B) 0<p<1",
    "steps": [
      "The root product is p(p−1)/3. Opposite signs require this product to be negative.",
      "The upward-opening product p(p−1) is negative between 0 and 1. Endpoints give a zero root and are excluded."
    ],
    "solutionGuide": {
      "meaning": "Use the product of roots; a negative product also guarantees two real roots here.",
      "sections": [
        {
          "title": "Apply Vieta’s formula",
          "blocks": [
            {
              "text": "The root product is p(p−1)/3. Opposite signs require this product to be negative."
            },
            {
              "equation": "frac{p(p−1)}{3}<0"
            }
          ]
        },
        {
          "title": "Solve the inequality",
          "blocks": [
            {
              "text": "The upward-opening product p(p−1) is negative between 0 and 1. Endpoints give a zero root and are excluded."
            },
            {
              "equation": "0<p<1"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "p<0",
        "0<p<1",
        "p>1",
        "p>0"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 64,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-63",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "apt",
    "number": 63,
    "ref": "GATE 2013 · Booklet B · Q63",
    "file": "EC2013.pdf",
    "page": 37,
    "prompt": "A car travels 8 km, 6 km and 16 km in three successive quarters of an hour. Find its average speed.",
    "answer": "(C) 40 km/h",
    "steps": [
      "The total distance is 30 km. Three quarter-hours equal 0.75 hour.",
      "Average speed is total distance divided by total time, not a distance-weighted average of segment speeds."
    ],
    "solutionGuide": {
      "meaning": "Divide total distance by total elapsed time.",
      "sections": [
        {
          "title": "Add distance and time",
          "blocks": [
            {
              "text": "The total distance is 30 km. Three quarter-hours equal 0.75 hour."
            },
            {
              "equation": "d=8+6+16=30 km;t=frac{3}{4} h"
            }
          ]
        },
        {
          "title": "Compute the average",
          "blocks": [
            {
              "text": "Average speed is total distance divided by total time, not a distance-weighted average of segment speeds."
            },
            {
              "equation": "v_{avg}=frac{30}{3/4}=40 km/h"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "30 km/h",
        "36 km/h",
        "40 km/h",
        "24 km/h"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 61,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13b-64",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "apt",
    "number": 64,
    "ref": "GATE 2013 · Booklet B · Q64",
    "file": "EC2013.pdf",
    "page": 38,
    "prompt": "Under the exam’s equally likely starting-weekday model, what is the probability that a leap year contains 53 Saturdays?",
    "answer": "(A) 2/7",
    "steps": [
      "366=52×7+2. Every weekday occurs 52 times; the year’s first two weekdays occur once more.",
      "Saturday occurs 53 times when January 1 is Friday or Saturday. These are two of seven assumed equally likely starting weekdays."
    ],
    "solutionGuide": {
      "meaning": "A leap year contains 52 complete weeks and two extra consecutive weekdays.",
      "sections": [
        {
          "title": "Count the extra days",
          "blocks": [
            {
              "text": "366=52×7+2. Every weekday occurs 52 times; the year’s first two weekdays occur once more."
            },
            {
              "equation": "366=52×7+2"
            }
          ]
        },
        {
          "title": "Count favorable starts",
          "blocks": [
            {
              "text": "Saturday occurs 53 times when January 1 is Friday or Saturday. These are two of seven assumed equally likely starting weekdays."
            },
            {
              "equation": "P=frac{2}{7}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2/7",
        "3/7",
        "1/7",
        "5/7"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 65,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "The standard exam model assumes uniformly distributed starting weekdays. Gregorian leap years over a full 400-year calendar cycle do not have exactly uniform starting weekdays."
  },
  {
    "id": "g13b-65",
    "paperId": "gate-2013-2",
    "exam": "gate",
    "topic": "apt",
    "number": 65,
    "ref": "GATE 2013 · Booklet B · Q65",
    "file": "EC2013.pdf",
    "page": 38,
    "prompt": "Different streams of the freedom movement in colonial India included moderates, liberals, radicals and socialists. What is the best inference?",
    "answer": "(D) Nationalism was heterogeneous.",
    "steps": [
      "The statement explicitly describes several different political approaches and ideological groups.",
      "“Heterogeneous” means composed of different kinds. It directly captures the diversity stated, without adding a new historical cause or outcome."
    ],
    "solutionGuide": {
      "meaning": "Infer diversity directly from the listed ideological streams.",
      "sections": [
        {
          "title": "Identify the evidence",
          "blocks": [
            {
              "text": "The statement explicitly describes several different political approaches and ideological groups."
            }
          ]
        },
        {
          "title": "Draw the supported inference",
          "blocks": [
            {
              "text": "“Heterogeneous” means composed of different kinds. It directly captures the diversity stated, without adding a new historical cause or outcome."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Nationalism led to independence.",
        "Nationalism emerged in colonialism.",
        "Nationalism was homogeneous.",
        "Nationalism was heterogeneous."
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 63,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-1",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "comm",
    "number": 1,
    "ref": "GATE 2013 · Booklet C · Q1",
    "file": "EC2013.pdf",
    "page": 41,
    "prompt": "A 32-QAM link sends R kbits/s. Find the minimum bandwidth for zero-ISI transmission.",
    "answer": "(B) R/10 kHz",
    "steps": [
      "32-QAM carries log₂32=5 bits per symbol, giving a symbol rate of R/5 ksymbols/s.",
      "With ideal zero-rolloff shaping, the minimum positive-frequency bandwidth is half the symbol rate."
    ],
    "solutionGuide": {
      "meaning": "Convert bit rate to symbol rate and apply the ideal Nyquist bandwidth.",
      "sections": [
        {
          "title": "Find bits per symbol",
          "blocks": [
            {
              "text": "32-QAM carries log₂32=5 bits per symbol, giving a symbol rate of R/5 ksymbols/s."
            },
            {
              "equation": "R_s=frac{R}{5}"
            }
          ]
        },
        {
          "title": "Apply Nyquist shaping",
          "blocks": [
            {
              "text": "With ideal zero-rolloff shaping, the minimum positive-frequency bandwidth is half the symbol rate."
            },
            {
              "equation": "B_{min}=frac{R_s}{2}=frac{R}{10} kHz"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "R/10 Hz",
        "R/10 kHz",
        "R/5 Hz",
        "R/5 kHz"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 13,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-2",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "digital",
    "number": 2,
    "ref": "GATE 2013 · Booklet C · Q2",
    "file": "EC2013.pdf",
    "page": 41,
    "prompt": "An 8085 executes MVI A,05H; MVI B,05H; PTR: ADD B; DCR B; JNZ PTR; ADI 03H; HLT. Find the final accumulator.",
    "answer": "(A) 17H",
    "steps": [
      "The ADD instruction uses B=5,4,3,2,1. DCR sets the zero flag when B reaches zero, ending the loop.",
      "A starts at 5, then receives 15 and finally 3. Decimal 23 is hexadecimal 17H."
    ],
    "solutionGuide": {
      "meaning": "Trace the values added before the loop counter reaches zero.",
      "sections": [
        {
          "title": "Evaluate the loop",
          "blocks": [
            {
              "text": "The ADD instruction uses B=5,4,3,2,1. DCR sets the zero flag when B reaches zero, ending the loop."
            },
            {
              "equation": "5+4+3+2+1=15"
            }
          ]
        },
        {
          "title": "Include initialization and final addition",
          "blocks": [
            {
              "text": "A starts at 5, then receives 15 and finally 3. Decimal 23 is hexadecimal 17H."
            },
            {
              "equation": "A=5+15+3=23=17H"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "17H",
        "20H",
        "23H",
        "05H"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 12,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-3",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "networks",
    "number": 3,
    "ref": "GATE 2013 · Booklet C · Q3",
    "file": "EC2013.pdf",
    "page": 41,
    "prompt": "Every resistor in a delta network is multiplied by k>0. By what factor do the equivalent star resistors change?",
    "answer": "(B) k",
    "steps": [
      "A star arm equals the product of its adjacent delta resistances divided by the sum of all three delta resistances.",
      "The numerator gains k² and the denominator gains k, leaving one factor of k. The same applies to all three arms."
    ],
    "solutionGuide": {
      "meaning": "Apply the delta-to-star conversion and track the scale factor.",
      "sections": [
        {
          "title": "Write one star resistor",
          "blocks": [
            {
              "text": "A star arm equals the product of its adjacent delta resistances divided by the sum of all three delta resistances."
            },
            {
              "equation": "R_A=frac{R_bR_c}{R_a+R_b+R_c}"
            }
          ]
        },
        {
          "title": "Scale all resistances",
          "blocks": [
            {
              "text": "The numerator gains k² and the denominator gains k, leaving one factor of k. The same applies to all three arms."
            },
            {
              "equation": "R_A′=kR_A"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "k²",
        "k",
        "1/k",
        "√k"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 11,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-4",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "analog",
    "number": 4,
    "ref": "GATE 2013 · Booklet C · Q4",
    "file": "EC2013.pdf",
    "page": 41,
    "prompt": "For the shown ideal op-amp and silicon npn transistor circuit, find Vout. The noninverting input and transistor base are grounded.",
    "answer": "(B) −0.7 V",
    "steps": [
      "Negative feedback holds the inverting node near 0 V. The 5 V source therefore supplies 5 mA through the 1 kΩ resistor, which the collector takes.",
      "The grounded base must be approximately 0.7 V above the emitter. The emitter is the op-amp output."
    ],
    "solutionGuide": {
      "meaning": "Determine the emitter voltage required for the transistor to provide feedback current.",
      "sections": [
        {
          "title": "Find the feedback current",
          "blocks": [
            {
              "text": "Negative feedback holds the inverting node near 0 V. The 5 V source therefore supplies 5 mA through the 1 kΩ resistor, which the collector takes."
            },
            {
              "equation": "I_C≈frac{5}{1000}=5 mA"
            }
          ]
        },
        {
          "title": "Use the base-emitter drop",
          "blocks": [
            {
              "text": "The grounded base must be approximately 0.7 V above the emitter. The emitter is the op-amp output."
            },
            {
              "equation": "V_{out}=V_B−0.7=−0.7 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "−15 V",
        "−0.7 V",
        "+0.7 V",
        "+15 V"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 10,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-10.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q10",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-5",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "control",
    "number": 5,
    "ref": "GATE 2013 · Booklet C · Q5",
    "file": "EC2013.pdf",
    "page": 42,
    "prompt": "The Bode magnitude is 32 dB at 1 rad/s and −8 dB at 10 rad/s, with negative phase. Find G(s).",
    "answer": "(B) 39.8/s²",
    "steps": [
      "The magnitude falls by 40 dB over one decade. Two poles at the origin give this slope and negative phase.",
      "At ω=1, the magnitude equals K. Convert 32 dB to a linear amplitude ratio."
    ],
    "solutionGuide": {
      "meaning": "Use the magnitude slope to find the number of integrators and the 1-rad/s value to find gain.",
      "sections": [
        {
          "title": "Find the slope",
          "blocks": [
            {
              "text": "The magnitude falls by 40 dB over one decade. Two poles at the origin give this slope and negative phase."
            },
            {
              "equation": "G(s)=frac{K}{s^2}"
            }
          ]
        },
        {
          "title": "Compute the gain",
          "blocks": [
            {
              "text": "At ω=1, the magnitude equals K. Convert 32 dB to a linear amplitude ratio."
            },
            {
              "equation": "K=10^{32/20}≈39.8"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "39.8/s",
        "39.8/s²",
        "32/s",
        "32/s²"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 9,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-9.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q9",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-6",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "signals",
    "number": 6,
    "ref": "GATE 2013 · Booklet C · Q6",
    "file": "EC2013.pdf",
    "page": 42,
    "prompt": "An LTI system has h(t)=t u(t). Find its response to x(t)=u(t−1).",
    "answer": "(C) (t−1)²u(t−1)/2",
    "steps": [
      "For t<1 there is no overlap. For t≥1, the convolution integrates h(τ)=τ from 0 to t−1.",
      "Integrating the ramp gives half the squared interval length. The delayed unit step enforces zero output before t=1."
    ],
    "solutionGuide": {
      "meaning": "Convolve a causal ramp impulse response with a delayed step.",
      "sections": [
        {
          "title": "Find the integration interval",
          "blocks": [
            {
              "text": "For t<1 there is no overlap. For t≥1, the convolution integrates h(τ)=τ from 0 to t−1."
            },
            {
              "equation": "y(t)=∫_0^{t−1}τ dτ"
            }
          ]
        },
        {
          "title": "Evaluate",
          "blocks": [
            {
              "text": "Integrating the ramp gives half the squared interval length. The delayed unit step enforces zero output before t=1."
            },
            {
              "equation": "y(t)=frac{(t−1)^2}{2}u(t−1)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "t²u(t)/2",
        "t(t−1)u(t−1)/2",
        "(t−1)²u(t−1)/2",
        "(t²−1)u(t−1)/2"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 8,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-7",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "math",
    "number": 7,
    "ref": "GATE 2013 · Booklet C · Q7",
    "file": "EC2013.pdf",
    "page": 42,
    "prompt": "Find ∇·A for A=x x̂+y ŷ+z ẑ.",
    "answer": "(D) 3",
    "steps": [
      "In Cartesian coordinates, divergence is ∂Ax/∂x+∂Ay/∂y+∂Az/∂z.",
      "Each derivative equals 1, so their sum is 3."
    ],
    "solutionGuide": {
      "meaning": "Differentiate each Cartesian component with respect to its corresponding coordinate.",
      "sections": [
        {
          "title": "Apply divergence",
          "blocks": [
            {
              "text": "In Cartesian coordinates, divergence is ∂Ax/∂x+∂Ay/∂y+∂Az/∂z."
            }
          ]
        },
        {
          "title": "Evaluate the derivatives",
          "blocks": [
            {
              "text": "Each derivative equals 1, so their sum is 3."
            },
            {
              "equation": "∇·A=1+1+1=3"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1/3",
        "1",
        "3"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 7,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-8",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "math",
    "number": 8,
    "ref": "GATE 2013 · Booklet C · Q8",
    "file": "EC2013.pdf",
    "page": 42,
    "prompt": "What is the largest listed angle for which sinθ≈θ has error within 10%, with θ in radians?",
    "answer": "Archived key: (C) 50°. Under ordinary relative error, the largest valid listed choice is (B) 18°.",
    "steps": [
      "At 50°, θ≈0.8727 and sinθ≈0.7660. The relative error is about 12.2% using θ as reference, or 13.9% using sinθ. Thus 50° actually exceeds 10%.",
      "18° is within 10%, while the archived key selects 50°. The selected key appears to use a coarse approximation or a different unstated error interpretation. Do not treat 50° as a rigorous 10% relative-error bound."
    ],
    "solutionGuide": {
      "meaning": "Check the small-angle approximation at the candidate angles.",
      "sections": [
        {
          "title": "Compute the candidate error",
          "blocks": [
            {
              "text": "At 50°, θ≈0.8727 and sinθ≈0.7660. The relative error is about 12.2% using θ as reference, or 13.9% using sinθ. Thus 50° actually exceeds 10%."
            }
          ]
        },
        {
          "title": "Interpret the archived choice",
          "blocks": [
            {
              "text": "18° is within 10%, while the archived key selects 50°. The selected key appears to use a coarse approximation or a different unstated error interpretation. Do not treat 50° as a rigorous 10% relative-error bound."
            },
            {
              "equation": "frac{0.8727−0.7660}{0.8727}≈0.122"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "10°",
        "18°",
        "50°",
        "90°"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 6,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "Archived key: C (50°). Under ordinary relative-error definitions, B (18°) is the largest listed valid angle. The key and the stated tolerance disagree."
  },
  {
    "id": "g13c-9",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "devices",
    "number": 9,
    "ref": "GATE 2013 · Booklet C · Q9",
    "file": "EC2013.pdf",
    "page": 42,
    "prompt": "Compared with wet oxidation, what does dry oxidation produce in IC fabrication?",
    "answer": "(D) Better oxide, slower growth",
    "steps": [
      "Steam grows silicon dioxide faster than dry oxygen under comparable processing conditions.",
      "Dry oxidation gives a denser, higher-quality oxide with better interface and electrical properties, but grows more slowly."
    ],
    "solutionGuide": {
      "meaning": "Compare oxide quality and growth rate for oxygen and steam processes.",
      "sections": [
        {
          "title": "Compare the processes",
          "blocks": [
            {
              "text": "Steam grows silicon dioxide faster than dry oxygen under comparable processing conditions."
            }
          ]
        },
        {
          "title": "Select the tradeoff",
          "blocks": [
            {
              "text": "Dry oxidation gives a denser, higher-quality oxide with better interface and electrical properties, but grows more slowly."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Better oxide, faster growth",
        "Poorer oxide, faster growth",
        "Poorer oxide, slower growth",
        "Better oxide, slower growth"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 5,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-10",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "devices",
    "number": 10,
    "ref": "GATE 2013 · Booklet C · Q10",
    "file": "EC2013.pdf",
    "page": 42,
    "prompt": "Which sequence best describes current flow in a forward-biased pn junction?",
    "answer": "(A) Minority-carrier injection, diffusion and recombination",
    "steps": [
      "Forward bias lowers the junction barrier. Electrons enter the p region and holes enter the n region, becoming excess minority carriers there.",
      "These injected carriers diffuse down their concentration gradients and recombine in the quasi-neutral regions."
    ],
    "solutionGuide": {
      "meaning": "Identify how forward bias produces the dominant junction current.",
      "sections": [
        {
          "title": "Explain injection",
          "blocks": [
            {
              "text": "Forward bias lowers the junction barrier. Electrons enter the p region and holes enter the n region, becoming excess minority carriers there."
            }
          ]
        },
        {
          "title": "Explain transport",
          "blocks": [
            {
              "text": "These injected carriers diffuse down their concentration gradients and recombine in the quasi-neutral regions."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Minority-carrier injection, diffusion and recombination",
        "Minority-carrier injection, drift and generation",
        "Minority-carrier extraction, diffusion and generation",
        "Minority-carrier extraction, drift and recombination"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 4,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-11",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "signals",
    "number": 11,
    "ref": "GATE 2013 · Booklet C · Q11",
    "file": "EC2013.pdf",
    "page": 43,
    "prompt": "Two LTI systems with impulse responses h₁(t) and h₂(t) are cascaded. What is the overall impulse response?",
    "answer": "(C) Convolution",
    "steps": [
      "The first system produces h₁(t). Treat this as the input to the second LTI system.",
      "An LTI system’s output is its input convolved with its impulse response."
    ],
    "solutionGuide": {
      "meaning": "Find the equivalent impulse response when one LTI system feeds the next.",
      "sections": [
        {
          "title": "Pass an impulse through the cascade",
          "blocks": [
            {
              "text": "The first system produces h₁(t). Treat this as the input to the second LTI system."
            }
          ]
        },
        {
          "title": "Apply the convolution rule",
          "blocks": [
            {
              "text": "An LTI system’s output is its input convolved with its impulse response."
            },
            {
              "equation": "h(t)=h_1(t)∗h_2(t)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Product",
        "Sum",
        "Convolution",
        "Difference"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 3,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-12",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "math",
    "number": 12,
    "ref": "GATE 2013 · Booklet C · Q12",
    "file": "EC2013.pdf",
    "page": 43,
    "prompt": "Express the closed-loop line integral ∮A·dl as a surface or volume integral.",
    "answer": "(D) Integral of curl over an open surface bounded by the loop",
    "steps": [
      "Stokes’ theorem relates circulation to the surface integral of curl, not divergence.",
      "The loop is the boundary of an open surface. The surface normal and loop direction must follow the right-hand rule."
    ],
    "solutionGuide": {
      "meaning": "Choose the theorem that converts circulation around a loop to flux through a spanning surface.",
      "sections": [
        {
          "title": "Identify the theorem",
          "blocks": [
            {
              "text": "Stokes’ theorem relates circulation to the surface integral of curl, not divergence."
            }
          ]
        },
        {
          "title": "Choose the surface",
          "blocks": [
            {
              "text": "The loop is the boundary of an open surface. The surface normal and loop direction must follow the right-hand rule."
            },
            {
              "equation": "∮A·dl=∬(∇×A)·dS"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Integral of curl over a closed surface",
        "Integral of divergence over a closed volume",
        "Integral of divergence over an open volume",
        "Integral of curl over an open surface bounded by the loop"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 2,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-13",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "digital",
    "number": 13,
    "ref": "GATE 2013 · Booklet C · Q13",
    "file": "EC2013.pdf",
    "page": 43,
    "prompt": "A staircase bulb can be toggled by either of two switches, regardless of the other switch’s state. Which logic gate describes this behavior?",
    "answer": "(C) XOR",
    "steps": [
      "Flipping either switch must invert the bulb state. AND and OR fail this requirement for some states of the other input.",
      "XOR is 1 for unequal inputs and 0 for equal inputs. Changing either input always swaps these cases."
    ],
    "solutionGuide": {
      "meaning": "Find the two-input logic operation whose output changes whenever either input changes.",
      "sections": [
        {
          "title": "Test the switching rule",
          "blocks": [
            {
              "text": "Flipping either switch must invert the bulb state. AND and OR fail this requirement for some states of the other input."
            }
          ]
        },
        {
          "title": "Write the truth table",
          "blocks": [
            {
              "text": "XOR is 1 for unequal inputs and 0 for equal inputs. Changing either input always swaps these cases."
            },
            {
              "equation": "Y=A⊕B"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "AND",
        "OR",
        "XOR",
        "NAND"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 1,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-14",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "comm",
    "number": 14,
    "ref": "GATE 2013 · Booklet C · Q14",
    "file": "EC2013.pdf",
    "page": 43,
    "prompt": "Let g(t)=e^(−πt²). It is applied to its zero-delay matched filter h(t)=g*(−t). Find the output Fourier transform, using f in Hz.",
    "answer": "(D) e^(−2πf²)",
    "steps": [
      "With the e^(−j2πft) convention, e^(−πt²) transforms to e^(−πf²).",
      "The zero-delay matched filter has H(f)=G*(f), so the output spectrum is |G(f)|²."
    ],
    "solutionGuide": {
      "meaning": "Use the Gaussian transform pair and the matched-filter frequency response.",
      "sections": [
        {
          "title": "Transform the Gaussian",
          "blocks": [
            {
              "text": "With the e^(−j2πft) convention, e^(−πt²) transforms to e^(−πf²)."
            },
            {
              "equation": "G(f)=e^{−πf^2}"
            }
          ]
        },
        {
          "title": "Multiply the spectra",
          "blocks": [
            {
              "text": "The zero-delay matched filter has H(f)=G*(f), so the output spectrum is |G(f)|²."
            },
            {
              "equation": "Y(f)=|G(f)|^2=e^{−2πf^2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "e^(−πf²)",
        "e^(−πf²/2)",
        "e^(−π|f|)",
        "e^(−2πf²)"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 25,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "A matched filter with an additional sampling delay T adds the phase factor e^(−j2πfT). The answer choices use the zero-delay convention."
  },
  {
    "id": "g13c-15",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "em",
    "number": 15,
    "ref": "GATE 2013 · Booklet C · Q15",
    "file": "EC2013.pdf",
    "page": 43,
    "prompt": "A device has return loss 20 dB. Find VSWR and |Γ|.",
    "answer": "(A) 1.22 and 0.1",
    "steps": [
      "Return loss is −20log₁₀|Γ|. A 20 dB return loss therefore means |Γ|=0.1.",
      "Use the ratio of maximum to minimum standing-wave amplitudes."
    ],
    "solutionGuide": {
      "meaning": "Convert return loss to reflection magnitude, then compute standing-wave ratio.",
      "sections": [
        {
          "title": "Find reflection magnitude",
          "blocks": [
            {
              "text": "Return loss is −20log₁₀|Γ|. A 20 dB return loss therefore means |Γ|=0.1."
            },
            {
              "equation": "|Γ|=10^{−20/20}=0.1"
            }
          ]
        },
        {
          "title": "Calculate VSWR",
          "blocks": [
            {
              "text": "Use the ratio of maximum to minimum standing-wave amplitudes."
            },
            {
              "equation": "VSWR=frac{1+|Γ|}{1−|Γ|}=frac{1.1}{0.9}≈1.22"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1.22 and 0.1",
        "0.81 and 0.1",
        "−1.22 and 0.1",
        "2.44 and 0.2"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 24,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-16",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "networks",
    "number": 16,
    "ref": "GATE 2013 · Booklet C · Q16",
    "file": "EC2013.pdf",
    "page": 43,
    "prompt": "A sinusoidal source has internal impedance 4+j3 Ω. Which purely resistive load extracts maximum average power?",
    "answer": "(C) 5 Ω",
    "steps": [
      "With source amplitude fixed, load power is proportional to R/[(R+4)²+3²].",
      "Setting the derivative to zero gives R²=4²+3². Choose the positive resistance."
    ],
    "solutionGuide": {
      "meaning": "Optimize power over a real load resistance; complex-conjugate matching is unavailable.",
      "sections": [
        {
          "title": "Express load power",
          "blocks": [
            {
              "text": "With source amplitude fixed, load power is proportional to R/[(R+4)²+3²]."
            },
            {
              "equation": "P∝frac{R}{(R+4)^2+9}"
            }
          ]
        },
        {
          "title": "Differentiate",
          "blocks": [
            {
              "text": "Setting the derivative to zero gives R²=4²+3². Choose the positive resistance."
            },
            {
              "equation": "R=sqrt{4^2+3^2}=5 Ω"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "3 Ω",
        "4 Ω",
        "5 Ω",
        "7 Ω"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 23,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-17",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "networks",
    "number": 17,
    "ref": "GATE 2013 · Booklet C · Q17",
    "file": "EC2013.pdf",
    "page": 44,
    "prompt": "Find V₂(s)/V₁(s) for a series 100 μF input capacitor feeding a series 10 kΩ resistor and 100 μF capacitor to ground; V₂ is across the resistor-capacitor branch.",
    "answer": "(D) (s+1)/(s+2)",
    "steps": [
      "Each capacitor has impedance 1/(sC). The output branch has impedance R+1/(sC), while the total series impedance is R+2/(sC).",
      "Here RC=10000×100 μF=1 second. Multiply numerator and denominator by sC."
    ],
    "solutionGuide": {
      "meaning": "Treat the circuit as a frequency-dependent voltage divider.",
      "sections": [
        {
          "title": "Write the impedances",
          "blocks": [
            {
              "text": "Each capacitor has impedance 1/(sC). The output branch has impedance R+1/(sC), while the total series impedance is R+2/(sC)."
            },
            {
              "equation": "frac{V_2}{V_1}=frac{R+1/(sC)}{R+2/(sC)}"
            }
          ]
        },
        {
          "title": "Substitute RC",
          "blocks": [
            {
              "text": "Here RC=10000×100 μF=1 second. Multiply numerator and denominator by sC."
            },
            {
              "equation": "frac{V_2}{V_1}=frac{sRC+1}{sRC+2}=frac{s+1}{s+2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(0.5s+1)/(s+1)",
        "(3s+6)/(s+2)",
        "(s+2)/(s+1)",
        "(s+1)/(s+2)"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 22,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-22.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q22",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-18",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "signals",
    "number": 18,
    "ref": "GATE 2013 · Booklet C · Q18",
    "file": "EC2013.pdf",
    "page": 44,
    "prompt": "An ideal integrator G(s)=1/s starts from rest. Find its response to u(t).",
    "answer": "(B) t u(t)",
    "steps": [
      "The unit step has Laplace transform 1/s. With zero initial state, Y=GX.",
      "The inverse transform of 1/s² is the causal ramp."
    ],
    "solutionGuide": {
      "meaning": "Multiply the step transform by the integrator transfer function.",
      "sections": [
        {
          "title": "Transform the input",
          "blocks": [
            {
              "text": "The unit step has Laplace transform 1/s. With zero initial state, Y=GX."
            },
            {
              "equation": "Y(s)=frac{1}{s}frac{1}{s}=frac{1}{s^2}"
            }
          ]
        },
        {
          "title": "Invert the transform",
          "blocks": [
            {
              "text": "The inverse transform of 1/s² is the causal ramp."
            },
            {
              "equation": "y(t)=t u(t)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "u(t)",
        "t u(t)",
        "t²u(t)/2",
        "e^(−t)u(t)"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 21,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-19",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "math",
    "number": 19,
    "ref": "GATE 2013 · Booklet C · Q19",
    "file": "EC2013.pdf",
    "page": 44,
    "prompt": "All a₀,…,a₄ are positive. What must hold for f(x)=a₄x⁴+a₃x³+a₂x²+a₁x−a₀?",
    "answer": "(D) At least one positive and one negative real root",
    "steps": [
      "The constant term is negative: f(0)=−a₀<0.",
      "The positive leading quartic term dominates at both infinities, so f(x) tends to +∞ in both directions. Continuity gives at least one crossing on each side of zero."
    ],
    "solutionGuide": {
      "meaning": "Use continuity and the signs at zero and at large positive and negative x.",
      "sections": [
        {
          "title": "Evaluate at zero",
          "blocks": [
            {
              "text": "The constant term is negative: f(0)=−a₀<0."
            },
            {
              "equation": "f(0)<0"
            }
          ]
        },
        {
          "title": "Examine both ends",
          "blocks": [
            {
              "text": "The positive leading quartic term dominates at both infinities, so f(x) tends to +∞ in both directions. Continuity gives at least one crossing on each side of zero."
            },
            {
              "equation": "f(x)→+∞ as x→±∞"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "No real roots",
        "No negative real root",
        "An odd number of real roots",
        "At least one positive and one negative real root"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 20,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-20",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "math",
    "number": 20,
    "ref": "GATE 2013 · Booklet C · Q20",
    "file": "EC2013.pdf",
    "page": 44,
    "prompt": "Find the minimum eigenvalue of the symmetric matrix with rows (3,5,2), (5,12,7), (2,7,5).",
    "answer": "(A) 0",
    "steps": [
      "The second row equals the first plus the third. In fact A(1,−1,1)ᵀ=0, so zero is an eigenvalue.",
      "The trace is 20 and the sum of principal 2×2 minors is 33. The remaining roots are 10±√67, both positive. Thus zero is the minimum."
    ],
    "solutionGuide": {
      "meaning": "Find a zero eigenvalue and verify that no eigenvalue is negative.",
      "sections": [
        {
          "title": "Identify a null vector",
          "blocks": [
            {
              "text": "The second row equals the first plus the third. In fact A(1,−1,1)ᵀ=0, so zero is an eigenvalue."
            },
            {
              "equation": "A(1,−1,1)^T=0"
            }
          ]
        },
        {
          "title": "Check the other eigenvalues",
          "blocks": [
            {
              "text": "The trace is 20 and the sum of principal 2×2 minors is 33. The remaining roots are 10±√67, both positive. Thus zero is the minimum."
            },
            {
              "equation": "λ=0,10−sqrt{67},10+sqrt{67}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 19,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-21",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "control",
    "number": 21,
    "ref": "GATE 2013 · Booklet C · Q21",
    "file": "EC2013.pdf",
    "page": 44,
    "prompt": "Which statement is NOT generally true for a causal stable continuous-time rational LTI system?",
    "answer": "(C) All poles satisfy |s|<1",
    "steps": [
      "For a causal BIBO-stable rational system, the poles must lie strictly in the left half-plane. Zeros do not determine BIBO stability.",
      "There is no requirement that continuous-time pole magnitudes be below 1. A pole at −10 is stable despite having magnitude 10."
    ],
    "solutionGuide": {
      "meaning": "Separate continuous-time stability from the discrete-time unit-circle criterion.",
      "sections": [
        {
          "title": "Use the continuous-time criterion",
          "blocks": [
            {
              "text": "For a causal BIBO-stable rational system, the poles must lie strictly in the left half-plane. Zeros do not determine BIBO stability."
            },
            {
              "equation": "Re(p_k)<0"
            }
          ]
        },
        {
          "title": "Reject the unit-circle rule",
          "blocks": [
            {
              "text": "There is no requirement that continuous-time pole magnitudes be below 1. A pole at −10 is stable despite having magnitude 10."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "All poles lie left of the jω axis",
        "Zeros may lie anywhere in the s-plane",
        "All poles satisfy |s|<1",
        "Characteristic roots lie left of the jω axis"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 18,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-22",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "devices",
    "number": 22,
    "ref": "GATE 2013 · Booklet C · Q22",
    "file": "EC2013.pdf",
    "page": 45,
    "prompt": "For a MOSFET in saturation, what does channel-length modulation cause?",
    "answer": "(D) Lower output resistance",
    "steps": [
      "The saturation current rises with drain-source voltage through the factor 1+λVDS.",
      "A nonzero output conductance means a finite output resistance, lower than the ideal infinite value without modulation."
    ],
    "solutionGuide": {
      "meaning": "Relate drain-current dependence on drain voltage to small-signal output resistance.",
      "sections": [
        {
          "title": "Include channel-length modulation",
          "blocks": [
            {
              "text": "The saturation current rises with drain-source voltage through the factor 1+λVDS."
            },
            {
              "equation": "I_D≈I_{D0}(1+λV_{DS})"
            }
          ]
        },
        {
          "title": "Differentiate",
          "blocks": [
            {
              "text": "A nonzero output conductance means a finite output resistance, lower than the ideal infinite value without modulation."
            },
            {
              "equation": "r_o≈frac{1}{λI_D}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Higher gate-source capacitance",
        "Lower transconductance",
        "Lower unity-gain cutoff frequency",
        "Lower output resistance"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 17,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-23",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "signals",
    "number": 23,
    "ref": "GATE 2013 · Booklet C · Q23",
    "file": "EC2013.pdf",
    "page": 45,
    "prompt": "A signal is band-limited to 5 kHz. Which listed sampling rate is invalid?",
    "answer": "(A) 5 kHz",
    "steps": [
      "The Nyquist rate is 2×5=10 kHz. Rates above this permit ideal reconstruction of the stated band-limited signal.",
      "5 kHz is below 10 kHz and causes aliasing. The other listed rates exceed the Nyquist rate."
    ],
    "solutionGuide": {
      "meaning": "Compare each sample rate with twice the highest signal frequency.",
      "sections": [
        {
          "title": "Apply the sampling theorem",
          "blocks": [
            {
              "text": "The Nyquist rate is 2×5=10 kHz. Rates above this permit ideal reconstruction of the stated band-limited signal."
            },
            {
              "equation": "f_s>2f_{max}=10 kHz"
            }
          ]
        },
        {
          "title": "Choose the invalid rate",
          "blocks": [
            {
              "text": "5 kHz is below 10 kHz and causes aliasing. The other listed rates exceed the Nyquist rate."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "5 kHz",
        "12 kHz",
        "15 kHz",
        "20 kHz"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 16,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-24",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "analog",
    "number": 24,
    "ref": "GATE 2013 · Booklet C · Q24",
    "file": "EC2013.pdf",
    "page": 45,
    "prompt": "In the shown negative voltage-voltage feedback amplifier, what happens when the feedback gain k increases?",
    "answer": "(A) Input impedance rises; output impedance falls",
    "steps": [
      "Voltage-series feedback opposes the applied input voltage, increasing the input resistance by the desensitivity factor.",
      "Voltage sampling reduces output resistance by the same factor. Increasing feedback strengthens these effects while the loop remains negative and stable."
    ],
    "solutionGuide": {
      "meaning": "Identify the impedance effects of series input mixing and voltage output sampling.",
      "sections": [
        {
          "title": "Examine the input",
          "blocks": [
            {
              "text": "Voltage-series feedback opposes the applied input voltage, increasing the input resistance by the desensitivity factor."
            },
            {
              "equation": "R_{if}=R_i(1+Aβ)"
            }
          ]
        },
        {
          "title": "Examine the output",
          "blocks": [
            {
              "text": "Voltage sampling reduces output resistance by the same factor. Increasing feedback strengthens these effects while the loop remains negative and stable."
            },
            {
              "equation": "R_{of}=frac{R_o}{1+Aβ}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Input impedance rises; output impedance falls",
        "Both impedances rise",
        "Both impedances fall",
        "Input impedance falls; output impedance rises"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 15,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-25",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "signals",
    "number": 25,
    "ref": "GATE 2013 · Booklet C · Q25",
    "file": "EC2013.pdf",
    "page": 45,
    "prompt": "Find the fundamental angular frequency of v(t)=30sin(100t)+10cos(300t)+6sin(500t+π/4).",
    "answer": "(A) 100 rad/s",
    "steps": [
      "The three angular frequencies are 100, 300 and 500 rad/s. They are the first, third and fifth harmonics of 100 rad/s.",
      "The phase offset does not change periodicity. The smallest common period is 2π/100."
    ],
    "solutionGuide": {
      "meaning": "Find the greatest common divisor of the angular frequencies.",
      "sections": [
        {
          "title": "Compare the harmonics",
          "blocks": [
            {
              "text": "The three angular frequencies are 100, 300 and 500 rad/s. They are the first, third and fifth harmonics of 100 rad/s."
            }
          ]
        },
        {
          "title": "Find the common period",
          "blocks": [
            {
              "text": "The phase offset does not change periodicity. The smallest common period is 2π/100."
            },
            {
              "equation": "ω_0=100 rad/s"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "100 rad/s",
        "300 rad/s",
        "500 rad/s",
        "1500 rad/s"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 14,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-26",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "signals",
    "number": 26,
    "ref": "GATE 2013 · Booklet C · Q26",
    "file": "EC2013.pdf",
    "page": 46,
    "prompt": "A system satisfies y″+5y′+6y=x(t), with y(0)=y′(0)=0. The input is 1 for 0<t<2 and zero otherwise. Find Y(s).",
    "answer": "(B) (1−e^(−2s))/[s(s+2)(s+3)]",
    "steps": [
      "The input is u(t)−u(t−2), giving a transform (1−e^(−2s))/s.",
      "Zero initial conditions give G(s)=1/(s²+5s+6)=1/[(s+2)(s+3)]. Multiply G and X."
    ],
    "solutionGuide": {
      "meaning": "Represent the finite rectangular pulse as two steps and use the zero-state transfer function.",
      "sections": [
        {
          "title": "Transform the pulse",
          "blocks": [
            {
              "text": "The input is u(t)−u(t−2), giving a transform (1−e^(−2s))/s."
            },
            {
              "equation": "X(s)=frac{1−e^{−2s}}{s}"
            }
          ]
        },
        {
          "title": "Transform the differential equation",
          "blocks": [
            {
              "text": "Zero initial conditions give G(s)=1/(s²+5s+6)=1/[(s+2)(s+3)]. Multiply G and X."
            },
            {
              "equation": "Y(s)=frac{1−e^{−2s}}{s(s+2)(s+3)}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "e^(−2s)/[s(s+2)(s+3)]",
        "(1−e^(−2s))/[s(s+2)(s+3)]",
        "e^(−2s)/[(s+2)(s+3)]",
        "(1−e^(−2s))/[(s+2)(s+3)]"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 36,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-27",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "analog",
    "number": 27,
    "ref": "GATE 2013 · Booklet C · Q27",
    "file": "EC2013.pdf",
    "page": 46,
    "prompt": "A common-source NMOS stage has RD=10 kΩ, RL=10 kΩ and an output coupling capacitor C=1 μF. Ignore body effect and channel-length modulation. Find its lower cutoff frequency.",
    "answer": "(A) 8 Hz",
    "steps": [
      "Zero input makes vgs=0, so the controlled current source is zero. Each capacitor terminal sees a resistor to AC ground: RD on one side and RL on the other.",
      "The capacitor forms a first-order high-pass pole with the sum of those resistances."
    ],
    "solutionGuide": {
      "meaning": "Find the resistance seen across the coupling capacitor with the input set to zero.",
      "sections": [
        {
          "title": "Deactivate the input",
          "blocks": [
            {
              "text": "Zero input makes vgs=0, so the controlled current source is zero. Each capacitor terminal sees a resistor to AC ground: RD on one side and RL on the other."
            },
            {
              "equation": "R_{seen}=R_D+R_L=20 kΩ"
            }
          ]
        },
        {
          "title": "Compute the high-pass corner",
          "blocks": [
            {
              "text": "The capacitor forms a first-order high-pass pole with the sum of those resistances."
            },
            {
              "equation": "f_L=frac{1}{2πC(R_D+R_L)}≈7.96 Hz"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "8 Hz",
        "32 Hz",
        "50 Hz",
        "200 Hz"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 35,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-35.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q35",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-28",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "devices",
    "number": 28,
    "ref": "GATE 2013 · Booklet C · Q28",
    "file": "EC2013.pdf",
    "page": 47,
    "prompt": "A diode-connected NMOS has gate and drain at VB=2 V, source grounded, kN=40 μA/V² and VTN=1 V. Neglect body effect and channel-length modulation. Find dVB/dID.",
    "answer": "(B) 25 kΩ",
    "steps": [
      "Gate equals drain, so the conducting device is in saturation. Its overdrive is 1 V and gm=kN(VB−VT)=40 μS.",
      "With λ=0, the drain and gate voltage change together and the small-signal resistance is 1/gm."
    ],
    "solutionGuide": {
      "meaning": "Differentiate the square-law current of a diode-connected MOSFET.",
      "sections": [
        {
          "title": "Find transconductance",
          "blocks": [
            {
              "text": "Gate equals drain, so the conducting device is in saturation. Its overdrive is 1 V and gm=kN(VB−VT)=40 μS."
            },
            {
              "equation": "g_m=40 μA/V^2×1 V=40 μS"
            }
          ]
        },
        {
          "title": "Invert the incremental conductance",
          "blocks": [
            {
              "text": "With λ=0, the drain and gate voltage change together and the small-signal resistance is 1/gm."
            },
            {
              "equation": "r=frac{1}{40 μS}=25 kΩ"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "12.5 kΩ",
        "25 kΩ",
        "50 kΩ",
        "100 kΩ"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 34,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-34.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q34",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-29",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "signals",
    "number": 29,
    "ref": "GATE 2013 · Booklet C · Q29",
    "file": "EC2013.pdf",
    "page": 47,
    "prompt": "A system has h(t)=δ(t−1)+δ(t−3). Find its unit-step response at t=2.",
    "answer": "(B) 1",
    "steps": [
      "Convolution with each delayed impulse produces a delayed step.",
      "The first step is on and the second is off."
    ],
    "solutionGuide": {
      "meaning": "Convolve the impulse response with a unit step.",
      "sections": [
        {
          "title": "Shift the step",
          "blocks": [
            {
              "text": "Convolution with each delayed impulse produces a delayed step."
            },
            {
              "equation": "y(t)=u(t−1)+u(t−3)"
            }
          ]
        },
        {
          "title": "Evaluate at t=2",
          "blocks": [
            {
              "text": "The first step is on and the second is off."
            },
            {
              "equation": "y(2)=1+0=1"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 33,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-30",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "networks",
    "number": 30,
    "ref": "GATE 2013 · Booklet C · Q30",
    "file": "EC2013.pdf",
    "page": 47,
    "prompt": "Two magnetically uncoupled coils have quality factors q₁,q₂ and series resistances R₁,R₂ at the same frequency. Find their series-combination Q.",
    "answer": "(C) (q₁R₁+q₂R₂)/(R₁+R₂)",
    "steps": [
      "For a series coil model, qᵢ=ωLᵢ/Rᵢ. Hence its inductive reactance is qᵢRᵢ.",
      "No mutual inductance is present. Divide the sum of reactances by the sum of resistances."
    ],
    "solutionGuide": {
      "meaning": "Add inductive reactances and resistances before forming Q.",
      "sections": [
        {
          "title": "Express each reactance",
          "blocks": [
            {
              "text": "For a series coil model, qᵢ=ωLᵢ/Rᵢ. Hence its inductive reactance is qᵢRᵢ."
            },
            {
              "equation": "ωL_i=q_iR_i"
            }
          ]
        },
        {
          "title": "Combine the coils",
          "blocks": [
            {
              "text": "No mutual inductance is present. Divide the sum of reactances by the sum of resistances."
            },
            {
              "equation": "Q=frac{q_1R_1+q_2R_2}{R_1+R_2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "q₁+q₂",
        "1/q₁+1/q₂",
        "(q₁R₁+q₂R₂)/(R₁+R₂)",
        "(q₁R₂+q₂R₁)/(R₁+R₂)"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 32,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-31",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "networks",
    "number": 31,
    "ref": "GATE 2013 · Booklet C · Q31",
    "file": "EC2013.pdf",
    "page": 47,
    "prompt": "The shown ideal transformer has turns ratio 1:1.25 and a tapped attenuator of factor 0.8. Find forward VYZ/VWX and reverse VWX/VYZ under open-circuit output conditions.",
    "answer": "(B) 1 and 0.8",
    "steps": [
      "From WX to the full secondary, the transformer multiplies voltage by 1.25. The tap then multiplies by 0.8, giving a net ratio 1.",
      "With the primary open, no ideal-transformer current flows. The untapped segment has no voltage drop, so the full secondary equals the applied tap voltage. The reverse transformer ratio is 1/1.25=0.8."
    ],
    "solutionGuide": {
      "meaning": "Distinguish forward tap attenuation from reverse open-circuit excitation of the tap.",
      "sections": [
        {
          "title": "Forward excitation",
          "blocks": [
            {
              "text": "From WX to the full secondary, the transformer multiplies voltage by 1.25. The tap then multiplies by 0.8, giving a net ratio 1."
            },
            {
              "equation": "frac{V_{YZ}}{V_{WX}}=1.25×0.8=1"
            }
          ]
        },
        {
          "title": "Reverse excitation",
          "blocks": [
            {
              "text": "With the primary open, no ideal-transformer current flows. The untapped segment has no voltage drop, so the full secondary equals the applied tap voltage. The reverse transformer ratio is 1/1.25=0.8."
            },
            {
              "equation": "frac{V_{WX}}{V_{YZ}}=frac{1}{1.25}=0.8"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1.25 and 0.8",
        "1 and 0.8",
        "1 and 1",
        "0.8 and 0.8"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 31,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-31.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q31",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-32",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "devices",
    "number": 32,
    "ref": "GATE 2013 · Booklet C · Q32",
    "file": "EC2013.pdf",
    "page": 48,
    "prompt": "A 10 V supply feeds a 100 Ω series resistor and an ideal 5 V Zener shunt regulator. The Zener knee current is 10 mA. Find minimum RL and minimum Zener power rating.",
    "answer": "(B) 125 Ω, 250 mW",
    "steps": [
      "The series current is (10−5)/100=50 mA. Reserving 10 mA for the Zener leaves 40 mA for the load.",
      "With no load, all 50 mA flows through the Zener. Its rating must cover 5×0.05=0.25 W."
    ],
    "solutionGuide": {
      "meaning": "Use the minimum Zener current at maximum load and the maximum Zener current at no load.",
      "sections": [
        {
          "title": "Find the maximum load current",
          "blocks": [
            {
              "text": "The series current is (10−5)/100=50 mA. Reserving 10 mA for the Zener leaves 40 mA for the load."
            },
            {
              "equation": "R_{L,min}=frac{5}{0.04}=125 Ω"
            }
          ]
        },
        {
          "title": "Check no-load dissipation",
          "blocks": [
            {
              "text": "With no load, all 50 mA flows through the Zener. Its rating must cover 5×0.05=0.25 W."
            },
            {
              "equation": "P_{Z,max}=5×0.05=250 mW"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "125 Ω, 125 mW",
        "125 Ω, 250 mW",
        "250 Ω, 125 mW",
        "250 Ω, 250 mW"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 30,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-30.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q30",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-33",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "control",
    "number": 33,
    "ref": "GATE 2013 · Booklet C · Q33",
    "file": "EC2013.pdf",
    "page": 48,
    "prompt": "A motor has G(s)=10/(1+10s). In unity negative feedback with proportional gain Ka, what approximate Ka reduces its time constant by a factor of 100?",
    "answer": "(C) 10",
    "steps": [
      "The closed-loop denominator is 10s+1+10Ka, giving τcl=10/(1+10Ka).",
      "The desired time constant is 10/100=0.1 s. Thus 1+10Ka=100, giving Ka=9.9≈10."
    ],
    "solutionGuide": {
      "meaning": "Find the closed-loop pole and compare its time constant with 10 seconds.",
      "sections": [
        {
          "title": "Close the loop",
          "blocks": [
            {
              "text": "The closed-loop denominator is 10s+1+10Ka, giving τcl=10/(1+10Ka)."
            },
            {
              "equation": "τ_{cl}=frac{10}{1+10K_a}"
            }
          ]
        },
        {
          "title": "Set the required ratio",
          "blocks": [
            {
              "text": "The desired time constant is 10/100=0.1 s. Thus 1+10Ka=100, giving Ka=9.9≈10."
            },
            {
              "equation": "K_a=frac{99}{10}=9.9≈10"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1",
        "5",
        "10",
        "100"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 29,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-34",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "networks",
    "number": 34,
    "ref": "GATE 2013 · Booklet C · Q34",
    "file": "EC2013.pdf",
    "page": 48,
    "prompt": "In the shown coupled dependent-source circuit, Vs=100∠53.13° V. Find the open-circuit Thevenin voltage seen by RL.",
    "answer": "(C) 800∠90° V",
    "steps": [
      "With RL removed, the right-loop current I₂ is zero. The left dependent voltage j40I₂ is therefore zero, leaving I₁=Vs/(3+j4).",
      "The marked inductor voltage is VL1=j4I₁=j80 V. There is no drop across the unloaded right-hand series impedance, so Vth=10VL1."
    ],
    "solutionGuide": {
      "meaning": "Remove RL before solving; the dependent sources remain active.",
      "sections": [
        {
          "title": "Open the load",
          "blocks": [
            {
              "text": "With RL removed, the right-loop current I₂ is zero. The left dependent voltage j40I₂ is therefore zero, leaving I₁=Vs/(3+j4)."
            },
            {
              "equation": "I_1=frac{100∠53.13°}{3+j4}=20 A"
            }
          ]
        },
        {
          "title": "Find the controlled source voltage",
          "blocks": [
            {
              "text": "The marked inductor voltage is VL1=j4I₁=j80 V. There is no drop across the unloaded right-hand series impedance, so Vth=10VL1."
            },
            {
              "equation": "V_{th}=10(j4)(20)=j800=800∠90° V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "100∠90° V",
        "800∠0° V",
        "800∠90° V",
        "100∠60° V"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 28,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-28.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q28",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-35",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "math",
    "number": 35,
    "ref": "GATE 2013 · Booklet C · Q35",
    "file": "EC2013.pdf",
    "page": 49,
    "prompt": "Find the determinant of the 4×4 matrix with 2 on its diagonal and 1 everywhere else. Use det(I+AB)=det(I+BA).",
    "answer": "(B) 5",
    "steps": [
      "Let u=(1,1,1,1)ᵀ. The matrix is I₄+uuᵀ.",
      "The rank-one determinant reduces to a scalar: 1+uᵀu=1+4."
    ],
    "solutionGuide": {
      "meaning": "Recognize the matrix as an identity plus a rank-one all-ones matrix.",
      "sections": [
        {
          "title": "Factor the update",
          "blocks": [
            {
              "text": "Let u=(1,1,1,1)ᵀ. The matrix is I₄+uuᵀ."
            },
            {
              "equation": "M=I_4+uu^T"
            }
          ]
        },
        {
          "title": "Apply the determinant identity",
          "blocks": [
            {
              "text": "The rank-one determinant reduces to a scalar: 1+uᵀu=1+4."
            },
            {
              "equation": "det(M)=1+u^Tu=5"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2",
        "5",
        "8",
        "16"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 27,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-36",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "math",
    "number": 36,
    "ref": "GATE 2013 · Booklet C · Q36",
    "file": "EC2013.pdf",
    "page": 49,
    "prompt": "Independent zero-mean Gaussian variables U and V have variances 1/4 and 1/9. Find P(3V≥2U).",
    "answer": "(B) 1/2",
    "steps": [
      "Z=3V−2U is Gaussian. Independence gives variance 9(1/9)+4(1/4)=2 and mean zero.",
      "A continuous zero-mean Gaussian has half its probability on either side of zero; equality has zero probability."
    ],
    "solutionGuide": {
      "meaning": "Reduce the event to the sign of a zero-mean Gaussian variable.",
      "sections": [
        {
          "title": "Form a new Gaussian",
          "blocks": [
            {
              "text": "Z=3V−2U is Gaussian. Independence gives variance 9(1/9)+4(1/4)=2 and mean zero."
            },
            {
              "equation": "Z∼N(0,2)"
            }
          ]
        },
        {
          "title": "Use symmetry",
          "blocks": [
            {
              "text": "A continuous zero-mean Gaussian has half its probability on either side of zero; equality has zero probability."
            },
            {
              "equation": "P(3V≥2U)=P(Z≥0)=frac{1}{2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "4/9",
        "1/2",
        "2/3",
        "5/9"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 26,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-37",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "comm",
    "number": 37,
    "ref": "GATE 2013 · Booklet C · Q37",
    "file": "EC2013.pdf",
    "page": 49,
    "prompt": "Independent U and V each take +1 and −1 with probability 1/2. Find H(U+V).",
    "answer": "(C) 3/2 bits",
    "steps": [
      "The sums −2,0,+2 have probabilities 1/4,1/2,1/4 because the zero sum occurs in two of the four equiprobable pairs.",
      "Use H=−Σp log₂p. The contributions are 1/2,1/2,1/2 bit."
    ],
    "solutionGuide": {
      "meaning": "Determine the probability of each sum before computing entropy.",
      "sections": [
        {
          "title": "List the sums",
          "blocks": [
            {
              "text": "The sums −2,0,+2 have probabilities 1/4,1/2,1/4 because the zero sum occurs in two of the four equiprobable pairs."
            }
          ]
        },
        {
          "title": "Compute entropy",
          "blocks": [
            {
              "text": "Use H=−Σp log₂p. The contributions are 1/2,1/2,1/2 bit."
            },
            {
              "equation": "H=−2(frac{1}{4}log_2 frac{1}{4})−frac{1}{2}log_2 frac{1}{2}=frac{3}{2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "3/4 bit",
        "1 bit",
        "3/2 bits",
        "log₂3 bits"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 47,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-38",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "analog",
    "number": 38,
    "ref": "GATE 2013 · Booklet C · Q38",
    "file": "EC2013.pdf",
    "page": 49,
    "prompt": "An npn bias circuit has VCC=3 V, R₁=60 kΩ, RE=500 Ω and very high β. Find R₂ for IC=1 mA, using VBE≈0.7 V.",
    "answer": "(C) 40 kΩ",
    "steps": [
      "With very high β, IE≈IC=1 mA and base current is negligible. VE=0.5 V, so VB≈1.2 V.",
      "The divider gives VB=3R₂/(60 kΩ+R₂). Rearranging gives R₂=40 kΩ."
    ],
    "solutionGuide": {
      "meaning": "Find the required base voltage and use the unloaded divider approximation.",
      "sections": [
        {
          "title": "Find emitter and base voltages",
          "blocks": [
            {
              "text": "With very high β, IE≈IC=1 mA and base current is negligible. VE=0.5 V, so VB≈1.2 V."
            },
            {
              "equation": "V_B=(1 mA)(500 Ω)+0.7=1.2 V"
            }
          ]
        },
        {
          "title": "Solve the divider",
          "blocks": [
            {
              "text": "The divider gives VB=3R₂/(60 kΩ+R₂). Rearranging gives R₂=40 kΩ."
            },
            {
              "equation": "R_2=frac{1.2×60}{3−1.2}=40 kΩ"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "20 kΩ",
        "30 kΩ",
        "40 kΩ",
        "50 kΩ"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 46,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-46.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q46",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-39",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "digital",
    "number": 39,
    "ref": "GATE 2013 · Booklet C · Q39",
    "file": "EC2013.pdf",
    "page": 50,
    "prompt": "Four 1024-byte RAM chips are connected to the shown 16-bit address decoder. Find the address ranges of RAM1 through RAM4.",
    "answer": "(D) 0800–0BFF, 1800–1BFF, 2800–2BFF, 3800–3BFF",
    "steps": [
      "The common enable requires A₁₅=A₁₄=A₁₀=0 and A₁₁=1. A₁₃ and A₁₂ select chips 1 through 4 in binary order.",
      "Each chip spans 2¹⁰=1024 addresses, or 400H. The fixed A₁₁ bit contributes 0800H; chip selection adds 0000H,1000H,2000H,3000H."
    ],
    "solutionGuide": {
      "meaning": "Use A₀–A₉ for locations within a chip and decode the upper six address bits.",
      "sections": [
        {
          "title": "Read the enable condition",
          "blocks": [
            {
              "text": "The common enable requires A₁₅=A₁₄=A₁₀=0 and A₁₁=1. A₁₃ and A₁₂ select chips 1 through 4 in binary order."
            }
          ]
        },
        {
          "title": "Form each address block",
          "blocks": [
            {
              "text": "Each chip spans 2¹⁰=1024 addresses, or 400H. The fixed A₁₁ bit contributes 0800H; chip selection adds 0000H,1000H,2000H,3000H."
            },
            {
              "equation": "0800H–0BFFH;1800H–1BFFH;2800H–2BFFH;3800H–3BFFH"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0C00–0FFF, 1C00–1FFF, 2C00–2FFF, 3C00–3FFF",
        "1800–1FFF, 2800–2FFF, 3800–3FFF, 4800–4FFF",
        "0500–08FF, 1500–18FF, 3500–38FF, 5500–58FF",
        "0800–0BFF, 1800–1BFF, 2800–2BFF, 3800–3BFF"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 45,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-45.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q45",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-40",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "networks",
    "number": 40,
    "ref": "GATE 2013 · Booklet C · Q40",
    "file": "EC2013.pdf",
    "page": 50,
    "prompt": "C₁=10 μF is in parallel with series capacitors C₂=5 μF and C₃=2 μF. Their breakdown ratings are 10 V, 5 V and 2 V. Find maximum safe terminal voltage and total terminal charge.",
    "answer": "(C) 2.8 V, 32 μC",
    "steps": [
      "The limits are C₂V₂max=25 μC and C₃V₃max=4 μC. Thus C₃ limits the series branch to 4 μC, giving V₂=0.8 V and V₃=2 V.",
      "The series equivalent is 10/7 μF. Adding parallel C₁ gives 80/7 μF, whose charge at 2.8 V is 32 μC. C₁ remains below its own 10 V rating."
    ],
    "solutionGuide": {
      "meaning": "The series capacitors share charge, not voltage; find which one reaches breakdown first.",
      "sections": [
        {
          "title": "Find the limiting series charge",
          "blocks": [
            {
              "text": "The limits are C₂V₂max=25 μC and C₃V₃max=4 μC. Thus C₃ limits the series branch to 4 μC, giving V₂=0.8 V and V₃=2 V."
            },
            {
              "equation": "V_{max}=0.8+2=2.8 V"
            }
          ]
        },
        {
          "title": "Find total terminal charge",
          "blocks": [
            {
              "text": "The series equivalent is 10/7 μF. Adding parallel C₁ gives 80/7 μF, whose charge at 2.8 V is 32 μC. C₁ remains below its own 10 V rating."
            },
            {
              "equation": "Q=(10+frac{10}{7})×2.8=32 μC"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2.8 V, 36 μC",
        "7 V, 119 μC",
        "2.8 V, 32 μC",
        "7 V, 80 μC"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 44,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-44.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q44",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-41",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "networks",
    "number": 41,
    "ref": "GATE 2013 · Booklet C · Q41",
    "file": "EC2013.pdf",
    "page": 51,
    "prompt": "A voltage 1000sin(ωt) is applied across YZ of the shown symmetric diode bridge. With ideal diodes, find the voltage across WX.",
    "answer": "(D) 0 for all t",
    "steps": [
      "For each polarity, the corresponding pair of ideal diodes conducts symmetrically to the left and right nodes. The two halves have identical connections and resistances.",
      "The bridge forces W and X to the same potential in either half-cycle. The voltage between them is therefore zero even though internal currents may flow."
    ],
    "solutionGuide": {
      "meaning": "Use the left-right symmetry of the bridge rather than mistaking it for a standard rectifier output.",
      "sections": [
        {
          "title": "Consider either input polarity",
          "blocks": [
            {
              "text": "For each polarity, the corresponding pair of ideal diodes conducts symmetrically to the left and right nodes. The two halves have identical connections and resistances."
            }
          ]
        },
        {
          "title": "Compare W and X",
          "blocks": [
            {
              "text": "The bridge forces W and X to the same potential in either half-cycle. The voltage between them is therefore zero even though internal currents may flow."
            },
            {
              "equation": "V_{WX}=V_W−V_X=0"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "sin(ωt)",
        "[sin(ωt)+|sin(ωt)|]/2",
        "[sin(ωt)−|sin(ωt)|]/2",
        "0 for all t"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 43,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-43.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q43",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-42",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "digital",
    "number": 42,
    "ref": "GATE 2013 · Booklet C · Q42",
    "file": "EC2013.pdf",
    "page": 51,
    "prompt": "For the shown resistor-transistor-diode logic circuit, X and Y are 0 or 5 V. Neglect transistor saturation voltage and diode forward drop. Find Z.",
    "answer": "(B) X̄Y",
    "steps": [
      "If X=1, the npn transistor turns on and clamps Z to zero. Thus a high output requires X=0.",
      "When Y=0, the diode clamps the output low. When X=0 and Y=1, both clamps release and the pull-up makes Z high."
    ],
    "solutionGuide": {
      "meaning": "Identify when either device clamps the pull-up output to zero.",
      "sections": [
        {
          "title": "Test X",
          "blocks": [
            {
              "text": "If X=1, the npn transistor turns on and clamps Z to zero. Thus a high output requires X=0."
            }
          ]
        },
        {
          "title": "Test Y",
          "blocks": [
            {
              "text": "When Y=0, the diode clamps the output low. When X=0 and Y=1, both clamps release and the pull-up makes Z high."
            },
            {
              "equation": "Z=X̄Y"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "XY",
        "X̄Y",
        "XȲ",
        "X̄Ȳ"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 42,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-42.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q42",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-43",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "analog",
    "number": 43,
    "ref": "GATE 2013 · Booklet C · Q43",
    "file": "EC2013.pdf",
    "page": 51,
    "prompt": "Find Vout in the shown cascade of ideal op-amps with all resistors 1 kΩ. The first noninverting input is +1 V and its resistor input is −2 V.",
    "answer": "(C) 8 V",
    "steps": [
      "The first inverting node is at +1 V. KCL through its equal input and feedback resistors gives (1−(−2))+(1−V₁)=0, so V₁=4 V.",
      "The second stage is a noninverting amplifier with equal feedback and ground resistors. Its gain is 2. Both outputs remain within the ±15 V supplies."
    ],
    "solutionGuide": {
      "meaning": "Solve the biased inverting stage first, then the noninverting amplifier.",
      "sections": [
        {
          "title": "Solve the first stage",
          "blocks": [
            {
              "text": "The first inverting node is at +1 V. KCL through its equal input and feedback resistors gives (1−(−2))+(1−V₁)=0, so V₁=4 V."
            },
            {
              "equation": "V_1=2(1)−(−2)=4 V"
            }
          ]
        },
        {
          "title": "Apply the second-stage gain",
          "blocks": [
            {
              "text": "The second stage is a noninverting amplifier with equal feedback and ground resistors. Its gain is 2. Both outputs remain within the ±15 V supplies."
            },
            {
              "equation": "V_{out}=2V_1=8 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "4 V",
        "6 V",
        "8 V",
        "10 V"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 41,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-41.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q41",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-44",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "control",
    "number": 44,
    "ref": "GATE 2013 · Booklet C · Q44",
    "file": "EC2013.pdf",
    "page": 52,
    "prompt": "Find Y(s)/U(s) for the shown signal-flow graph.",
    "answer": "(A) (s+1)/(5s²+6s+2)",
    "steps": [
      "Let a be the first internal node, b the second and c the output node. The graph gives a=u−2c, b=a/s−4c, and c=(1+1/s)b.",
      "Substituting b and a into the last equation gives (5s²+6s+2)c=(s+1)u."
    ],
    "solutionGuide": {
      "meaning": "Account for the parallel forward branch and both feedback loops.",
      "sections": [
        {
          "title": "Write node equations",
          "blocks": [
            {
              "text": "Let a be the first internal node, b the second and c the output node. The graph gives a=u−2c, b=a/s−4c, and c=(1+1/s)b."
            },
            {
              "equation": "a=u−2c;b=frac{a}{s}−4c;c=(1+frac{1}{s})b"
            }
          ]
        },
        {
          "title": "Eliminate the internal nodes",
          "blocks": [
            {
              "text": "Substituting b and a into the last equation gives (5s²+6s+2)c=(s+1)u."
            },
            {
              "equation": "frac{Y(s)}{U(s)}=frac{s+1}{5s^2+6s+2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(s+1)/(5s²+6s+2)",
        "(s+1)/(s²+6s+2)",
        "(s+1)/(s²+4s+2)",
        "1/(5s²+6s+2)"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 40,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-40.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q40",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-45",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "signals",
    "number": 45,
    "ref": "GATE 2013 · Booklet C · Q45",
    "file": "EC2013.pdf",
    "page": 52,
    "prompt": "The DFT of (a,b,c,d) is (α,β,γ,δ). Multiply the row vector (a,b,c,d) by the circulant matrix with rows (a,b,c,d), (d,a,b,c), (c,d,a,b), (b,c,d,a). The DFT of the resulting vector is a scaled version of which vector?",
    "answer": "(A) (α²,β²,γ²,δ²)",
    "steps": [
      "The first component is a²+2bd+c², matching the zero-index term of a length-four circular self-convolution. The other components follow the same cyclic pattern.",
      "A circular convolution transforms to pointwise multiplication. Thus self-convolution squares each DFT component; any normalization convention only changes a common scale."
    ],
    "solutionGuide": {
      "meaning": "Recognize the matrix product as a circular self-convolution.",
      "sections": [
        {
          "title": "Write one output component",
          "blocks": [
            {
              "text": "The first component is a²+2bd+c², matching the zero-index term of a length-four circular self-convolution. The other components follow the same cyclic pattern."
            },
            {
              "equation": "p[n]=x[n]⊛x[n]"
            }
          ]
        },
        {
          "title": "Apply the DFT convolution theorem",
          "blocks": [
            {
              "text": "A circular convolution transforms to pointwise multiplication. Thus self-convolution squares each DFT component; any normalization convention only changes a common scale."
            },
            {
              "equation": "P[k]=X[k]^2"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(α²,β²,γ²,δ²)",
        "(√α,√β,√γ,√δ)",
        "(α+β,β+δ,δ+γ,γ+α)",
        "(α,β,γ,δ)"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 39,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-46",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "math",
    "number": 46,
    "ref": "GATE 2013 · Booklet C · Q46",
    "file": "EC2013.pdf",
    "page": 52,
    "prompt": "U and V are identically distributed zero-mean variables. Their CDFs for U and 2V are F(x) and G(x). Which relation holds for every x?",
    "answer": "(D) x[F(x)−G(x)]≥0",
    "steps": [
      "Since U and V share a distribution, G(x)=P(V≤x/2)=F(x/2).",
      "For x>0, F(x)≥F(x/2); for x<0, F(x)≤F(x/2). Multiplying the difference by x makes it nonnegative in both cases. Zero mean is not needed for this result."
    ],
    "solutionGuide": {
      "meaning": "Use monotonicity of a CDF when its argument is scaled by one half.",
      "sections": [
        {
          "title": "Relate the CDFs",
          "blocks": [
            {
              "text": "Since U and V share a distribution, G(x)=P(V≤x/2)=F(x/2)."
            },
            {
              "equation": "G(x)=F(x/2)"
            }
          ]
        },
        {
          "title": "Check the sign of x",
          "blocks": [
            {
              "text": "For x>0, F(x)≥F(x/2); for x<0, F(x)≤F(x/2). Multiplying the difference by x makes it nonnegative in both cases. Zero mean is not needed for this result."
            },
            {
              "equation": "x[F(x)−G(x)]≥0"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "F(x)−G(x)≤0",
        "F(x)−G(x)≥0",
        "x[F(x)−G(x)]≤0",
        "x[F(x)−G(x)]≥0"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 38,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-47",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "signals",
    "number": 47,
    "ref": "GATE 2013 · Booklet C · Q47",
    "file": "EC2013.pdf",
    "page": 52,
    "prompt": "A first-order linear constant-coefficient differential system gives y(t) from x(t) and initial value y(0). How can its response be changed to −2y(t)?",
    "answer": "(D) Initial value −2y(0), input −2x(t)",
    "steps": [
      "The response is the sum of a part linear in the initial value and a part linear in the forcing input.",
      "To obtain −2y for arbitrary input and initial value, multiply both the initial condition and the forcing function by −2. The system coefficients stay unchanged."
    ],
    "solutionGuide": {
      "meaning": "Scale both the zero-input response and the zero-state response by the same factor.",
      "sections": [
        {
          "title": "Separate the response",
          "blocks": [
            {
              "text": "The response is the sum of a part linear in the initial value and a part linear in the forcing input."
            },
            {
              "equation": "y=y_{initial}+y_{forced}"
            }
          ]
        },
        {
          "title": "Scale both contributions",
          "blocks": [
            {
              "text": "To obtain −2y for arbitrary input and initial value, multiply both the initial condition and the forcing function by −2. The system coefficients stay unchanged."
            },
            {
              "equation": "y_{new}(0)=−2y(0);x_{new}(t)=−2x(t)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Initial value −y(0), input 2x(t)",
        "Initial value 2y(0), input −x(t)",
        "Initial value 2jy(0), input 2jx(t)",
        "Initial value −2y(0), input −2x(t)"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 37,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-48",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "comm",
    "number": 48,
    "ref": "GATE 2013 · Booklet C · Q48",
    "file": "EC2013.pdf",
    "page": 53,
    "prompt": "For the same equiprobable triangular densities—bit 0 on [−1,1] with peak 1, bit 1 on [0,4] with peak 0.5 at 2—find the optimum decision threshold.",
    "answer": "(B) 4/5",
    "steps": [
      "On 0≤x≤1, f₀(x)=1−x and f₁(x)=x/4. Outside the overlap, the nonzero density determines the decision.",
      "Set 1−x=x/4. Below the crossing choose bit 0; above it choose bit 1."
    ],
    "solutionGuide": {
      "meaning": "For equal priors and error costs, place the threshold where the overlapping likelihoods cross.",
      "sections": [
        {
          "title": "Write the overlap densities",
          "blocks": [
            {
              "text": "On 0≤x≤1, f₀(x)=1−x and f₁(x)=x/4. Outside the overlap, the nonzero density determines the decision."
            },
            {
              "equation": "f_0(x)=1−x;f_1(x)=frac{x}{4}"
            }
          ]
        },
        {
          "title": "Equate the likelihoods",
          "blocks": [
            {
              "text": "Set 1−x=x/4. Below the crossing choose bit 0; above it choose bit 1."
            },
            {
              "equation": "x_{th}=frac{4}{5}=0.8"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1/2",
        "4/5",
        "1",
        "3/2"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 49,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-49.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q49",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-49",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "comm",
    "number": 49,
    "ref": "GATE 2013 · Booklet C · Q49",
    "file": "EC2013.pdf",
    "page": 53,
    "prompt": "Equiprobable bits have the shown triangular received-value densities: bit 0 on [−1,1] with peak 1 at 0, and bit 1 on [0,4] with peak 0.5 at 2. For threshold 1, find BER.",
    "answer": "(D) 1/16",
    "steps": [
      "Decide bit 1 above threshold 1. Bit 0 never exceeds 1, so its error probability is zero. Bit 1 is mistaken only on [0,1], where its density is x/4.",
      "Only half the transmitted bits are bit 1. Multiply the conditional error by 1/2."
    ],
    "solutionGuide": {
      "meaning": "Integrate the conditional error region and include the prior probability.",
      "sections": [
        {
          "title": "Locate the errors",
          "blocks": [
            {
              "text": "Decide bit 1 above threshold 1. Bit 0 never exceeds 1, so its error probability is zero. Bit 1 is mistaken only on [0,1], where its density is x/4."
            },
            {
              "equation": "P(error|1)=∫_0^1 frac{x}{4}dx=frac{1}{8}"
            }
          ]
        },
        {
          "title": "Weight by the bit priors",
          "blocks": [
            {
              "text": "Only half the transmitted bits are bit 1. Multiply the conditional error by 1/2."
            },
            {
              "equation": "BER=frac{1}{2}×frac{1}{8}=frac{1}{16}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1/2",
        "1/4",
        "1/8",
        "1/16"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 48,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-48.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q48",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-50",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "networks",
    "number": 50,
    "ref": "GATE 2013 · Booklet C · Q50",
    "file": "EC2013.pdf",
    "page": 53,
    "prompt": "In the same circuit, a 1 Ω resistor is connected directly in parallel with an ideal 10 V voltage source. Find its current in the indicated downward direction.",
    "answer": "(C) 10 A",
    "steps": [
      "Parallel branches share the same terminal voltage. The ideal source maintains 10 V across the 1 Ω resistor regardless of the other branches.",
      "The upper terminal is positive, so the current is downward as indicated."
    ],
    "solutionGuide": {
      "meaning": "Use the voltage fixed across the resistor by the parallel ideal source.",
      "sections": [
        {
          "title": "Identify the voltage",
          "blocks": [
            {
              "text": "Parallel branches share the same terminal voltage. The ideal source maintains 10 V across the 1 Ω resistor regardless of the other branches."
            },
            {
              "equation": "V_R=10 V"
            }
          ]
        },
        {
          "title": "Apply Ohm’s law",
          "blocks": [
            {
              "text": "The upper terminal is positive, so the current is downward as indicated."
            },
            {
              "equation": "I_R=frac{10 V}{1 Ω}=10 A"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2 A",
        "3.33 A",
        "10 A",
        "12 A"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 51,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-51.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q51",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-51",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "networks",
    "number": 51,
    "ref": "GATE 2013 · Booklet C · Q51",
    "file": "EC2013.pdf",
    "page": 53,
    "prompt": "For the shown circuit with a 10 V voltage source, 2 A current source, and 5 Ω, 2 Ω and 1 Ω resistors, find downward voltage-source current IS and current-source voltage VS (positive at its top).",
    "answer": "(D) −13 A, 20 V",
    "steps": [
      "The top rail is 10 V above the bottom rail. The 1 Ω and 2 Ω branches draw 10 A and 5 A. The current source supplies 2 A upward, so downward IS=2−15=−13 A.",
      "Its 2 A flows upward through 5 Ω, requiring its top terminal to be 10 V above the 10 V rail. Thus VS=20 V."
    ],
    "solutionGuide": {
      "meaning": "The ideal voltage source fixes the rail voltage; then use KCL and the series-resistor drop.",
      "sections": [
        {
          "title": "Find the voltage-source current",
          "blocks": [
            {
              "text": "The top rail is 10 V above the bottom rail. The 1 Ω and 2 Ω branches draw 10 A and 5 A. The current source supplies 2 A upward, so downward IS=2−15=−13 A."
            },
            {
              "equation": "I_S=2−frac{10}{1}−frac{10}{2}=−13 A"
            }
          ]
        },
        {
          "title": "Find the current-source voltage",
          "blocks": [
            {
              "text": "Its 2 A flows upward through 5 Ω, requiring its top terminal to be 10 V above the 10 V rail. Thus VS=20 V."
            },
            {
              "equation": "V_S=10+(2)(5)=20 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "13 A, −20 V",
        "8 A, −10 V",
        "−8 A, 20 V",
        "−13 A, 20 V"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 50,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-50.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q50",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-52",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "control",
    "number": 52,
    "ref": "GATE 2013 · Booklet C · Q52",
    "file": "EC2013.pdf",
    "page": 54,
    "prompt": "Find the state equations for the shown two-integrator signal-flow realization, taking each integrator output as its state.",
    "answer": "(A) A=[−1,0;1,−1], B=[−1;1], C=[1,−1], D=1",
    "steps": [
      "Let x₁ be the output of the left integrator and x₂ of the right. The first integrator input is −u−x₁. The second input is u+x₁−x₂.",
      "The final summing node gives y=u+x₁−x₂. These coefficients match option A."
    ],
    "solutionGuide": {
      "meaning": "Read the inputs of the two integrators as state derivatives.",
      "sections": [
        {
          "title": "Read the first and second states",
          "blocks": [
            {
              "text": "Let x₁ be the output of the left integrator and x₂ of the right. The first integrator input is −u−x₁. The second input is u+x₁−x₂."
            },
            {
              "equation": "ẋ_1=−x_1−u;ẋ_2=x_1−x_2+u"
            }
          ]
        },
        {
          "title": "Read the output",
          "blocks": [
            {
              "text": "The final summing node gives y=u+x₁−x₂. These coefficients match option A."
            },
            {
              "equation": "y=x_1−x_2+u"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "A=[−1,0;1,−1], B=[−1;1], C=[1,−1], D=1",
        "A=[−1,0;−1,−1], B=[−1;1], C=[−1,−1], D=1",
        "A=[−1,0;−1,−1], B=[−1;1], C=[−1,−1], D=−1",
        "A=[−1,−1;0,−1], B=[−1;1], C=[1,−1], D=−1"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 54,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-54.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q54",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-53",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "control",
    "number": 53,
    "ref": "GATE 2013 · Booklet C · Q53",
    "file": "EC2013.pdf",
    "page": 54,
    "prompt": "For A=[−1,0;1,−1], find the state transition matrix e^(At).",
    "answer": "(A) [e^(−t),0;te^(−t),e^(−t)]",
    "steps": [
      "Write A=−I+N with N=[0,0;1,0]. Since N²=0, its exponential truncates to I+tN.",
      "The identity commutes with N, so e^(At)=e^(−t)(I+tN). It equals I at t=0 as required."
    ],
    "solutionGuide": {
      "meaning": "Separate the matrix into a scalar identity part and a nilpotent part.",
      "sections": [
        {
          "title": "Find the nilpotent part",
          "blocks": [
            {
              "text": "Write A=−I+N with N=[0,0;1,0]. Since N²=0, its exponential truncates to I+tN."
            },
            {
              "equation": "N^2=0;e^{Nt}=I+tN"
            }
          ]
        },
        {
          "title": "Multiply the commuting exponentials",
          "blocks": [
            {
              "text": "The identity commutes with N, so e^(At)=e^(−t)(I+tN). It equals I at t=0 as required."
            },
            {
              "equation": "e^{At}=e^{−t}(I+tN)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "[e^(−t),0;te^(−t),e^(−t)]",
        "[e^(−t),0;−te^(−t),e^(−t)]",
        "[e^(−t),0;e^(−t),e^(−t)]",
        "[e^(−t),−te^(−t);0,e^(−t)]"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 55,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-54",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "em",
    "number": 54,
    "ref": "GATE 2013 · Booklet C · Q54",
    "file": "EC2013.pdf",
    "page": 55,
    "prompt": "A plane wave of wavelength 600 μm travels from εr=1 to εr=4.5. Its transmitted ray makes 19.2° with the normal. Find incidence angle and incident phasor Ei, with x and z directions as shown.",
    "answer": "(C) 45°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴(x+z)/(3√2)]",
    "steps": [
      "For nonmagnetic media, sinθi=√4.5 sin19.2°≈0.698, close to sin45°. The supplied 19.2° is rounded rather coarsely; the intended listed angle is 45°.",
      "The incident propagation direction is (x̂+ẑ)/√2, so the transverse electric field is along (x̂−ẑ)/√2. The wavenumber 2π/λ=π10⁴/3 gives the stated phase."
    ],
    "solutionGuide": {
      "meaning": "Use Snell’s law for the ray and transversality for electric-field orientation.",
      "sections": [
        {
          "title": "Find the incidence angle",
          "blocks": [
            {
              "text": "For nonmagnetic media, sinθi=√4.5 sin19.2°≈0.698, close to sin45°. The supplied 19.2° is rounded rather coarsely; the intended listed angle is 45°."
            },
            {
              "equation": "θ_i≈45°"
            }
          ]
        },
        {
          "title": "Build the phasor",
          "blocks": [
            {
              "text": "The incident propagation direction is (x̂+ẑ)/√2, so the transverse electric field is along (x̂−ẑ)/√2. The wavenumber 2π/λ=π10⁴/3 gives the stated phase."
            },
            {
              "equation": "E_i=frac{E_0}{sqrt{2}}(x̂−ẑ)e^{−jπ10^4(x+z)/(3sqrt{2})}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "60°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴(x+z)/(3√2)]",
        "45°, (E₀/√2)(x̂+ẑ)e^[−jπ10⁴z/3]",
        "45°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴(x+z)/(3√2)]",
        "60°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴z/3]"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 52,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "Using θt=19.2° literally gives θi≈44.23°. The exact transmitted angle for 45° is about 19.47°. The answer follows the intended 45° option.",
    "figure": "pyq-figures/g13-52.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q52",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-55",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "em",
    "number": 55,
    "ref": "GATE 2013 · Booklet C · Q55",
    "file": "EC2013.pdf",
    "page": 55,
    "prompt": "For the same 600 μm TM-polarized wave incident from εr=1 onto εr=4.5 at the intended angle 45°, find the reflected electric-field phasor.",
    "answer": "Archived key: (A), magnitude 0.23. With the stated incident field, the reflected Cartesian coefficient is −0.23; see the sign calculation.",
    "steps": [
      "η₂/η₁=1/√4.5. Using the exact Snell angle for 45°, the tangential electric-field ratio is (η₂cosθt−η₁cosθi)/(η₂cosθt+η₁cosθi)≈−0.229.",
      "The diagram’s x̂−ẑ incident reference can represent the signed incident amplitude. The reflected phase uses x−z. With Ei fixed exactly as in Q52, the coefficient multiplying x̂+ẑ is −0.23. The archived key chooses A, whose magnitude is correct but whose sign is positive."
    ],
    "solutionGuide": {
      "meaning": "Apply the TM Fresnel coefficient and reverse the normal component of the propagation vector.",
      "sections": [
        {
          "title": "Compute the TM reflection coefficient",
          "blocks": [
            {
              "text": "η₂/η₁=1/√4.5. Using the exact Snell angle for 45°, the tangential electric-field ratio is (η₂cosθt−η₁cosθi)/(η₂cosθt+η₁cosθi)≈−0.229."
            },
            {
              "equation": "Γ_{tangential}≈−0.229"
            }
          ]
        },
        {
          "title": "Respect the diagram’s field reference",
          "blocks": [
            {
              "text": "The diagram’s x̂−ẑ incident reference can represent the signed incident amplitude. The reflected phase uses x−z. With Ei fixed exactly as in Q52, the coefficient multiplying x̂+ẑ is −0.23. The archived key chooses A, whose magnitude is correct but whose sign is positive."
            },
            {
              "equation": "E_r=−0.23frac{E_0}{sqrt{2}}(x̂+ẑ)e^{−jπ10^4(x−z)/(3sqrt{2})}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0.23(E₀/√2)(x̂+ẑ)e^[−jπ10⁴(x−z)/(3√2)]",
        "−(E₀/√2)(x̂+ẑ)e^[jπ10⁴z/3]",
        "0.44(E₀/√2)(x̂+ẑ)e^[−jπ10⁴(x−z)/(3√2)]",
        "(E₀/√2)(x̂+ẑ)e^[−jπ10⁴(x+z)/3]"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 53,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "The archived key selects A, but its reflected-field sign is inconsistent with the incident field written in Q52 under the same Cartesian basis. The worked calculation retains the physically consistent negative sign.",
    "figure": "pyq-figures/g13-53.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q53",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13c-56",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "apt",
    "number": 56,
    "ref": "GATE 2013 · Booklet C · Q56",
    "file": "EC2013.pdf",
    "page": 56,
    "prompt": "Complete the sentence as intended by the archived key: “Dare ___ mistakes.”",
    "answer": "(A) commit",
    "steps": [
      "The archived key treats dare as a modal-like verb followed by a bare infinitive, selecting “commit.”",
      "In ordinary affirmative imperatives, “Dare to commit mistakes” is also natural and more conventional for many speakers. The key’s choice is an exam convention, not a universal rejection of “to commit.”"
    ],
    "solutionGuide": {
      "meaning": "Distinguish the exam’s modal use of dare from ordinary modern infinitive usage.",
      "sections": [
        {
          "title": "Read the intended construction",
          "blocks": [
            {
              "text": "The archived key treats dare as a modal-like verb followed by a bare infinitive, selecting “commit.”"
            }
          ]
        },
        {
          "title": "Keep the usage limitation clear",
          "blocks": [
            {
              "text": "In ordinary affirmative imperatives, “Dare to commit mistakes” is also natural and more conventional for many speakers. The key’s choice is an exam convention, not a universal rejection of “to commit.”"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "commit",
        "to commit",
        "committed",
        "committing"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 59,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "Archived key: A. Both modal and lexical constructions of dare exist; the bare positive imperative here is stylistically unusual."
  },
  {
    "id": "g13c-57",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "apt",
    "number": 57,
    "ref": "GATE 2013 · Booklet C · Q57",
    "file": "EC2013.pdf",
    "page": 56,
    "prompt": "Choose the closest meaning of “quarrel” in “They were requested not to quarrel with others.”",
    "answer": "(D) fall out",
    "steps": [
      "To quarrel is to have an argument or disagreement.",
      "To “fall out with” someone means to quarrel or stop being friendly. The other choices have different meanings."
    ],
    "solutionGuide": {
      "meaning": "Choose the phrasal verb meaning to argue or become unfriendly.",
      "sections": [
        {
          "title": "Identify the meaning",
          "blocks": [
            {
              "text": "To quarrel is to have an argument or disagreement."
            }
          ]
        },
        {
          "title": "Match the phrasal verb",
          "blocks": [
            {
              "text": "To “fall out with” someone means to quarrel or stop being friendly. The other choices have different meanings."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "make out",
        "call out",
        "dig out",
        "fall out"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 60,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-58",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "apt",
    "number": 58,
    "ref": "GATE 2013 · Booklet C · Q58",
    "file": "EC2013.pdf",
    "page": 56,
    "prompt": "“You can always give me a ring whenever you need.” Choose the best intended inference.",
    "answer": "(C) A friend in need is a friend indeed.",
    "steps": [
      "“Give me a ring” means “telephone me.” “Whenever you need” expresses willingness to help.",
      "The statement supports dependable friendship, not any claim about caller tunes, telephone quality or free calls."
    ],
    "solutionGuide": {
      "meaning": "Interpret “give me a ring” as an offer of availability and support.",
      "sections": [
        {
          "title": "Interpret the idiom",
          "blocks": [
            {
              "text": "“Give me a ring” means “telephone me.” “Whenever you need” expresses willingness to help."
            }
          ]
        },
        {
          "title": "Compare the options",
          "blocks": [
            {
              "text": "The statement supports dependable friendship, not any claim about caller tunes, telephone quality or free calls."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "The speaker has a nice caller tune.",
        "The speaker has a better telephone facility.",
        "A friend in need is a friend indeed.",
        "The listener need not pay telephone bills."
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 57,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-59",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "apt",
    "number": 59,
    "ref": "GATE 2013 · Booklet C · Q59",
    "file": "EC2013.pdf",
    "page": 56,
    "prompt": "The Monday–Wednesday mean temperature was 41°C; Tuesday–Thursday mean was 43°C. Thursday was 15% hotter than Monday. Find Thursday’s temperature.",
    "answer": "(C) 46°C",
    "steps": [
      "The two totals are 123°C and 129°C, so Thursday minus Monday is 6°C.",
      "T=1.15M gives 0.15M=6, hence M=40°C and T=46°C."
    ],
    "solutionGuide": {
      "meaning": "Subtract the overlapping three-day totals to eliminate Tuesday and Wednesday.",
      "sections": [
        {
          "title": "Subtract the totals",
          "blocks": [
            {
              "text": "The two totals are 123°C and 129°C, so Thursday minus Monday is 6°C."
            },
            {
              "equation": "T−M=3(43−41)=6"
            }
          ]
        },
        {
          "title": "Use the percentage relation",
          "blocks": [
            {
              "text": "T=1.15M gives 0.15M=6, hence M=40°C and T=46°C."
            },
            {
              "equation": "T=1.15×40=46°C"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "40°C",
        "43°C",
        "46°C",
        "49°C"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 58,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-60",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "apt",
    "number": 60,
    "ref": "GATE 2013 · Booklet C · Q60",
    "file": "EC2013.pdf",
    "page": 56,
    "prompt": "Choose the grammatically correct sentence.",
    "answer": "(D) Two and two make four.",
    "steps": [
      "In this construction, “make” means “amount to” or “give a total of.”",
      "“Two and two make four” is the standard phrasing selected by the archived key."
    ],
    "solutionGuide": {
      "meaning": "Choose the standard expression for the result of an arithmetic sum.",
      "sections": [
        {
          "title": "Use the conventional expression",
          "blocks": [
            {
              "text": "In this construction, “make” means “amount to” or “give a total of.”"
            }
          ]
        },
        {
          "title": "Select the sentence",
          "blocks": [
            {
              "text": "“Two and two make four” is the standard phrasing selected by the archived key."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Two and two add four.",
        "Two and two become four.",
        "Two and two are four.",
        "Two and two make four."
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 56,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-61",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "math",
    "number": 61,
    "ref": "GATE 2013 · Booklet C · Q61",
    "file": "EC2013.pdf",
    "page": 56,
    "prompt": "For what p do the roots of 3x²+2x+p(p−1)=0 have opposite signs?",
    "answer": "(B) 0<p<1",
    "steps": [
      "The root product is p(p−1)/3. Opposite signs require this product to be negative.",
      "The upward-opening product p(p−1) is negative between 0 and 1. Endpoints give a zero root and are excluded."
    ],
    "solutionGuide": {
      "meaning": "Use the product of roots; a negative product also guarantees two real roots here.",
      "sections": [
        {
          "title": "Apply Vieta’s formula",
          "blocks": [
            {
              "text": "The root product is p(p−1)/3. Opposite signs require this product to be negative."
            },
            {
              "equation": "frac{p(p−1)}{3}<0"
            }
          ]
        },
        {
          "title": "Solve the inequality",
          "blocks": [
            {
              "text": "The upward-opening product p(p−1) is negative between 0 and 1. Endpoints give a zero root and are excluded."
            },
            {
              "equation": "0<p<1"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "p<0",
        "0<p<1",
        "p>1",
        "p>0"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 64,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-62",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "apt",
    "number": 62,
    "ref": "GATE 2013 · Booklet C · Q62",
    "file": "EC2013.pdf",
    "page": 56,
    "prompt": "Under the exam’s equally likely starting-weekday model, what is the probability that a leap year contains 53 Saturdays?",
    "answer": "(A) 2/7",
    "steps": [
      "366=52×7+2. Every weekday occurs 52 times; the year’s first two weekdays occur once more.",
      "Saturday occurs 53 times when January 1 is Friday or Saturday. These are two of seven assumed equally likely starting weekdays."
    ],
    "solutionGuide": {
      "meaning": "A leap year contains 52 complete weeks and two extra consecutive weekdays.",
      "sections": [
        {
          "title": "Count the extra days",
          "blocks": [
            {
              "text": "366=52×7+2. Every weekday occurs 52 times; the year’s first two weekdays occur once more."
            },
            {
              "equation": "366=52×7+2"
            }
          ]
        },
        {
          "title": "Count favorable starts",
          "blocks": [
            {
              "text": "Saturday occurs 53 times when January 1 is Friday or Saturday. These are two of seven assumed equally likely starting weekdays."
            },
            {
              "equation": "P=frac{2}{7}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2/7",
        "3/7",
        "1/7",
        "5/7"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 65,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "The standard exam model assumes uniformly distributed starting weekdays. Gregorian leap years over a full 400-year calendar cycle do not have exactly uniform starting weekdays."
  },
  {
    "id": "g13c-63",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "math",
    "number": 63,
    "ref": "GATE 2013 · Booklet C · Q63",
    "file": "EC2013.pdf",
    "page": 56,
    "prompt": "Find the sum of n terms of 10+84+734+… .",
    "answer": "(D) (9/8)(9ⁿ−1)+n²",
    "steps": [
      "The terms are 9+1, 81+3, 729+5, so the kth term is 9ᵏ+(2k−1).",
      "The geometric sum is 9(9ⁿ−1)/8, while the first n odd numbers sum to n²."
    ],
    "solutionGuide": {
      "meaning": "Identify the geometric component and the consecutive odd-number correction.",
      "sections": [
        {
          "title": "Recognize each term",
          "blocks": [
            {
              "text": "The terms are 9+1, 81+3, 729+5, so the kth term is 9ᵏ+(2k−1)."
            },
            {
              "equation": "a_k=9^k+2k−1"
            }
          ]
        },
        {
          "title": "Sum the two parts",
          "blocks": [
            {
              "text": "The geometric sum is 9(9ⁿ−1)/8, while the first n odd numbers sum to n²."
            },
            {
              "equation": "S_n=frac{9(9^n−1)}{8}+n^2"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(9/10)(9ⁿ+1)",
        "(9/8)(9ⁿ−1)",
        "(9/8)(9ⁿ+n)",
        "(9/8)(9ⁿ−1)+n²"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 62,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-64",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "apt",
    "number": 64,
    "ref": "GATE 2013 · Booklet C · Q64",
    "file": "EC2013.pdf",
    "page": 57,
    "prompt": "Different streams of the freedom movement in colonial India included moderates, liberals, radicals and socialists. What is the best inference?",
    "answer": "(D) Nationalism was heterogeneous.",
    "steps": [
      "The statement explicitly describes several different political approaches and ideological groups.",
      "“Heterogeneous” means composed of different kinds. It directly captures the diversity stated, without adding a new historical cause or outcome."
    ],
    "solutionGuide": {
      "meaning": "Infer diversity directly from the listed ideological streams.",
      "sections": [
        {
          "title": "Identify the evidence",
          "blocks": [
            {
              "text": "The statement explicitly describes several different political approaches and ideological groups."
            }
          ]
        },
        {
          "title": "Draw the supported inference",
          "blocks": [
            {
              "text": "“Heterogeneous” means composed of different kinds. It directly captures the diversity stated, without adding a new historical cause or outcome."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Nationalism led to independence.",
        "Nationalism emerged in colonialism.",
        "Nationalism was homogeneous.",
        "Nationalism was heterogeneous."
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 63,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13c-65",
    "paperId": "gate-2013-3",
    "exam": "gate",
    "topic": "apt",
    "number": 65,
    "ref": "GATE 2013 · Booklet C · Q65",
    "file": "EC2013.pdf",
    "page": 57,
    "prompt": "A car travels 8 km, 6 km and 16 km in three successive quarters of an hour. Find its average speed.",
    "answer": "(C) 40 km/h",
    "steps": [
      "The total distance is 30 km. Three quarter-hours equal 0.75 hour.",
      "Average speed is total distance divided by total time, not a distance-weighted average of segment speeds."
    ],
    "solutionGuide": {
      "meaning": "Divide total distance by total elapsed time.",
      "sections": [
        {
          "title": "Add distance and time",
          "blocks": [
            {
              "text": "The total distance is 30 km. Three quarter-hours equal 0.75 hour."
            },
            {
              "equation": "d=8+6+16=30 km;t=frac{3}{4} h"
            }
          ]
        },
        {
          "title": "Compute the average",
          "blocks": [
            {
              "text": "Average speed is total distance divided by total time, not a distance-weighted average of segment speeds."
            },
            {
              "equation": "v_{avg}=frac{30}{3/4}=40 km/h"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "30 km/h",
        "36 km/h",
        "40 km/h",
        "24 km/h"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 61,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-1",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "comm",
    "number": 1,
    "ref": "GATE 2013 · Booklet D · Q1",
    "file": "EC2013.pdf",
    "page": 60,
    "prompt": "Let g(t)=e^(−πt²). It is applied to its zero-delay matched filter h(t)=g*(−t). Find the output Fourier transform, using f in Hz.",
    "answer": "(D) e^(−2πf²)",
    "steps": [
      "With the e^(−j2πft) convention, e^(−πt²) transforms to e^(−πf²).",
      "The zero-delay matched filter has H(f)=G*(f), so the output spectrum is |G(f)|²."
    ],
    "solutionGuide": {
      "meaning": "Use the Gaussian transform pair and the matched-filter frequency response.",
      "sections": [
        {
          "title": "Transform the Gaussian",
          "blocks": [
            {
              "text": "With the e^(−j2πft) convention, e^(−πt²) transforms to e^(−πf²)."
            },
            {
              "equation": "G(f)=e^{−πf^2}"
            }
          ]
        },
        {
          "title": "Multiply the spectra",
          "blocks": [
            {
              "text": "The zero-delay matched filter has H(f)=G*(f), so the output spectrum is |G(f)|²."
            },
            {
              "equation": "Y(f)=|G(f)|^2=e^{−2πf^2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "e^(−πf²)",
        "e^(−πf²/2)",
        "e^(−π|f|)",
        "e^(−2πf²)"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 25,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "A matched filter with an additional sampling delay T adds the phase factor e^(−j2πfT). The answer choices use the zero-delay convention."
  },
  {
    "id": "g13d-2",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "em",
    "number": 2,
    "ref": "GATE 2013 · Booklet D · Q2",
    "file": "EC2013.pdf",
    "page": 60,
    "prompt": "A device has return loss 20 dB. Find VSWR and |Γ|.",
    "answer": "(A) 1.22 and 0.1",
    "steps": [
      "Return loss is −20log₁₀|Γ|. A 20 dB return loss therefore means |Γ|=0.1.",
      "Use the ratio of maximum to minimum standing-wave amplitudes."
    ],
    "solutionGuide": {
      "meaning": "Convert return loss to reflection magnitude, then compute standing-wave ratio.",
      "sections": [
        {
          "title": "Find reflection magnitude",
          "blocks": [
            {
              "text": "Return loss is −20log₁₀|Γ|. A 20 dB return loss therefore means |Γ|=0.1."
            },
            {
              "equation": "|Γ|=10^{−20/20}=0.1"
            }
          ]
        },
        {
          "title": "Calculate VSWR",
          "blocks": [
            {
              "text": "Use the ratio of maximum to minimum standing-wave amplitudes."
            },
            {
              "equation": "VSWR=frac{1+|Γ|}{1−|Γ|}=frac{1.1}{0.9}≈1.22"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1.22 and 0.1",
        "0.81 and 0.1",
        "−1.22 and 0.1",
        "2.44 and 0.2"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 24,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-3",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "networks",
    "number": 3,
    "ref": "GATE 2013 · Booklet D · Q3",
    "file": "EC2013.pdf",
    "page": 60,
    "prompt": "A sinusoidal source has internal impedance 4+j3 Ω. Which purely resistive load extracts maximum average power?",
    "answer": "(C) 5 Ω",
    "steps": [
      "With source amplitude fixed, load power is proportional to R/[(R+4)²+3²].",
      "Setting the derivative to zero gives R²=4²+3². Choose the positive resistance."
    ],
    "solutionGuide": {
      "meaning": "Optimize power over a real load resistance; complex-conjugate matching is unavailable.",
      "sections": [
        {
          "title": "Express load power",
          "blocks": [
            {
              "text": "With source amplitude fixed, load power is proportional to R/[(R+4)²+3²]."
            },
            {
              "equation": "P∝frac{R}{(R+4)^2+9}"
            }
          ]
        },
        {
          "title": "Differentiate",
          "blocks": [
            {
              "text": "Setting the derivative to zero gives R²=4²+3². Choose the positive resistance."
            },
            {
              "equation": "R=sqrt{4^2+3^2}=5 Ω"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "3 Ω",
        "4 Ω",
        "5 Ω",
        "7 Ω"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 23,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-4",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "networks",
    "number": 4,
    "ref": "GATE 2013 · Booklet D · Q4",
    "file": "EC2013.pdf",
    "page": 60,
    "prompt": "Find V₂(s)/V₁(s) for a series 100 μF input capacitor feeding a series 10 kΩ resistor and 100 μF capacitor to ground; V₂ is across the resistor-capacitor branch.",
    "answer": "(D) (s+1)/(s+2)",
    "steps": [
      "Each capacitor has impedance 1/(sC). The output branch has impedance R+1/(sC), while the total series impedance is R+2/(sC).",
      "Here RC=10000×100 μF=1 second. Multiply numerator and denominator by sC."
    ],
    "solutionGuide": {
      "meaning": "Treat the circuit as a frequency-dependent voltage divider.",
      "sections": [
        {
          "title": "Write the impedances",
          "blocks": [
            {
              "text": "Each capacitor has impedance 1/(sC). The output branch has impedance R+1/(sC), while the total series impedance is R+2/(sC)."
            },
            {
              "equation": "frac{V_2}{V_1}=frac{R+1/(sC)}{R+2/(sC)}"
            }
          ]
        },
        {
          "title": "Substitute RC",
          "blocks": [
            {
              "text": "Here RC=10000×100 μF=1 second. Multiply numerator and denominator by sC."
            },
            {
              "equation": "frac{V_2}{V_1}=frac{sRC+1}{sRC+2}=frac{s+1}{s+2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(0.5s+1)/(s+1)",
        "(3s+6)/(s+2)",
        "(s+2)/(s+1)",
        "(s+1)/(s+2)"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 22,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-22.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q22",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-5",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "signals",
    "number": 5,
    "ref": "GATE 2013 · Booklet D · Q5",
    "file": "EC2013.pdf",
    "page": 60,
    "prompt": "An ideal integrator G(s)=1/s starts from rest. Find its response to u(t).",
    "answer": "(B) t u(t)",
    "steps": [
      "The unit step has Laplace transform 1/s. With zero initial state, Y=GX.",
      "The inverse transform of 1/s² is the causal ramp."
    ],
    "solutionGuide": {
      "meaning": "Multiply the step transform by the integrator transfer function.",
      "sections": [
        {
          "title": "Transform the input",
          "blocks": [
            {
              "text": "The unit step has Laplace transform 1/s. With zero initial state, Y=GX."
            },
            {
              "equation": "Y(s)=frac{1}{s}frac{1}{s}=frac{1}{s^2}"
            }
          ]
        },
        {
          "title": "Invert the transform",
          "blocks": [
            {
              "text": "The inverse transform of 1/s² is the causal ramp."
            },
            {
              "equation": "y(t)=t u(t)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "u(t)",
        "t u(t)",
        "t²u(t)/2",
        "e^(−t)u(t)"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 21,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-6",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "math",
    "number": 6,
    "ref": "GATE 2013 · Booklet D · Q6",
    "file": "EC2013.pdf",
    "page": 60,
    "prompt": "All a₀,…,a₄ are positive. What must hold for f(x)=a₄x⁴+a₃x³+a₂x²+a₁x−a₀?",
    "answer": "(D) At least one positive and one negative real root",
    "steps": [
      "The constant term is negative: f(0)=−a₀<0.",
      "The positive leading quartic term dominates at both infinities, so f(x) tends to +∞ in both directions. Continuity gives at least one crossing on each side of zero."
    ],
    "solutionGuide": {
      "meaning": "Use continuity and the signs at zero and at large positive and negative x.",
      "sections": [
        {
          "title": "Evaluate at zero",
          "blocks": [
            {
              "text": "The constant term is negative: f(0)=−a₀<0."
            },
            {
              "equation": "f(0)<0"
            }
          ]
        },
        {
          "title": "Examine both ends",
          "blocks": [
            {
              "text": "The positive leading quartic term dominates at both infinities, so f(x) tends to +∞ in both directions. Continuity gives at least one crossing on each side of zero."
            },
            {
              "equation": "f(x)→+∞ as x→±∞"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "No real roots",
        "No negative real root",
        "An odd number of real roots",
        "At least one positive and one negative real root"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 20,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-7",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "math",
    "number": 7,
    "ref": "GATE 2013 · Booklet D · Q7",
    "file": "EC2013.pdf",
    "page": 61,
    "prompt": "Find the minimum eigenvalue of the symmetric matrix with rows (3,5,2), (5,12,7), (2,7,5).",
    "answer": "(A) 0",
    "steps": [
      "The second row equals the first plus the third. In fact A(1,−1,1)ᵀ=0, so zero is an eigenvalue.",
      "The trace is 20 and the sum of principal 2×2 minors is 33. The remaining roots are 10±√67, both positive. Thus zero is the minimum."
    ],
    "solutionGuide": {
      "meaning": "Find a zero eigenvalue and verify that no eigenvalue is negative.",
      "sections": [
        {
          "title": "Identify a null vector",
          "blocks": [
            {
              "text": "The second row equals the first plus the third. In fact A(1,−1,1)ᵀ=0, so zero is an eigenvalue."
            },
            {
              "equation": "A(1,−1,1)^T=0"
            }
          ]
        },
        {
          "title": "Check the other eigenvalues",
          "blocks": [
            {
              "text": "The trace is 20 and the sum of principal 2×2 minors is 33. The remaining roots are 10±√67, both positive. Thus zero is the minimum."
            },
            {
              "equation": "λ=0,10−sqrt{67},10+sqrt{67}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 19,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-8",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "control",
    "number": 8,
    "ref": "GATE 2013 · Booklet D · Q8",
    "file": "EC2013.pdf",
    "page": 61,
    "prompt": "Which statement is NOT generally true for a causal stable continuous-time rational LTI system?",
    "answer": "(C) All poles satisfy |s|<1",
    "steps": [
      "For a causal BIBO-stable rational system, the poles must lie strictly in the left half-plane. Zeros do not determine BIBO stability.",
      "There is no requirement that continuous-time pole magnitudes be below 1. A pole at −10 is stable despite having magnitude 10."
    ],
    "solutionGuide": {
      "meaning": "Separate continuous-time stability from the discrete-time unit-circle criterion.",
      "sections": [
        {
          "title": "Use the continuous-time criterion",
          "blocks": [
            {
              "text": "For a causal BIBO-stable rational system, the poles must lie strictly in the left half-plane. Zeros do not determine BIBO stability."
            },
            {
              "equation": "Re(p_k)<0"
            }
          ]
        },
        {
          "title": "Reject the unit-circle rule",
          "blocks": [
            {
              "text": "There is no requirement that continuous-time pole magnitudes be below 1. A pole at −10 is stable despite having magnitude 10."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "All poles lie left of the jω axis",
        "Zeros may lie anywhere in the s-plane",
        "All poles satisfy |s|<1",
        "Characteristic roots lie left of the jω axis"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 18,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-9",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "devices",
    "number": 9,
    "ref": "GATE 2013 · Booklet D · Q9",
    "file": "EC2013.pdf",
    "page": 61,
    "prompt": "For a MOSFET in saturation, what does channel-length modulation cause?",
    "answer": "(D) Lower output resistance",
    "steps": [
      "The saturation current rises with drain-source voltage through the factor 1+λVDS.",
      "A nonzero output conductance means a finite output resistance, lower than the ideal infinite value without modulation."
    ],
    "solutionGuide": {
      "meaning": "Relate drain-current dependence on drain voltage to small-signal output resistance.",
      "sections": [
        {
          "title": "Include channel-length modulation",
          "blocks": [
            {
              "text": "The saturation current rises with drain-source voltage through the factor 1+λVDS."
            },
            {
              "equation": "I_D≈I_{D0}(1+λV_{DS})"
            }
          ]
        },
        {
          "title": "Differentiate",
          "blocks": [
            {
              "text": "A nonzero output conductance means a finite output resistance, lower than the ideal infinite value without modulation."
            },
            {
              "equation": "r_o≈frac{1}{λI_D}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Higher gate-source capacitance",
        "Lower transconductance",
        "Lower unity-gain cutoff frequency",
        "Lower output resistance"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 17,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-10",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "signals",
    "number": 10,
    "ref": "GATE 2013 · Booklet D · Q10",
    "file": "EC2013.pdf",
    "page": 61,
    "prompt": "A signal is band-limited to 5 kHz. Which listed sampling rate is invalid?",
    "answer": "(A) 5 kHz",
    "steps": [
      "The Nyquist rate is 2×5=10 kHz. Rates above this permit ideal reconstruction of the stated band-limited signal.",
      "5 kHz is below 10 kHz and causes aliasing. The other listed rates exceed the Nyquist rate."
    ],
    "solutionGuide": {
      "meaning": "Compare each sample rate with twice the highest signal frequency.",
      "sections": [
        {
          "title": "Apply the sampling theorem",
          "blocks": [
            {
              "text": "The Nyquist rate is 2×5=10 kHz. Rates above this permit ideal reconstruction of the stated band-limited signal."
            },
            {
              "equation": "f_s>2f_{max}=10 kHz"
            }
          ]
        },
        {
          "title": "Choose the invalid rate",
          "blocks": [
            {
              "text": "5 kHz is below 10 kHz and causes aliasing. The other listed rates exceed the Nyquist rate."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "5 kHz",
        "12 kHz",
        "15 kHz",
        "20 kHz"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 16,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-11",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "analog",
    "number": 11,
    "ref": "GATE 2013 · Booklet D · Q11",
    "file": "EC2013.pdf",
    "page": 61,
    "prompt": "In the shown negative voltage-voltage feedback amplifier, what happens when the feedback gain k increases?",
    "answer": "(A) Input impedance rises; output impedance falls",
    "steps": [
      "Voltage-series feedback opposes the applied input voltage, increasing the input resistance by the desensitivity factor.",
      "Voltage sampling reduces output resistance by the same factor. Increasing feedback strengthens these effects while the loop remains negative and stable."
    ],
    "solutionGuide": {
      "meaning": "Identify the impedance effects of series input mixing and voltage output sampling.",
      "sections": [
        {
          "title": "Examine the input",
          "blocks": [
            {
              "text": "Voltage-series feedback opposes the applied input voltage, increasing the input resistance by the desensitivity factor."
            },
            {
              "equation": "R_{if}=R_i(1+Aβ)"
            }
          ]
        },
        {
          "title": "Examine the output",
          "blocks": [
            {
              "text": "Voltage sampling reduces output resistance by the same factor. Increasing feedback strengthens these effects while the loop remains negative and stable."
            },
            {
              "equation": "R_{of}=frac{R_o}{1+Aβ}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Input impedance rises; output impedance falls",
        "Both impedances rise",
        "Both impedances fall",
        "Input impedance falls; output impedance rises"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 15,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-12",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "signals",
    "number": 12,
    "ref": "GATE 2013 · Booklet D · Q12",
    "file": "EC2013.pdf",
    "page": 62,
    "prompt": "Find the fundamental angular frequency of v(t)=30sin(100t)+10cos(300t)+6sin(500t+π/4).",
    "answer": "(A) 100 rad/s",
    "steps": [
      "The three angular frequencies are 100, 300 and 500 rad/s. They are the first, third and fifth harmonics of 100 rad/s.",
      "The phase offset does not change periodicity. The smallest common period is 2π/100."
    ],
    "solutionGuide": {
      "meaning": "Find the greatest common divisor of the angular frequencies.",
      "sections": [
        {
          "title": "Compare the harmonics",
          "blocks": [
            {
              "text": "The three angular frequencies are 100, 300 and 500 rad/s. They are the first, third and fifth harmonics of 100 rad/s."
            }
          ]
        },
        {
          "title": "Find the common period",
          "blocks": [
            {
              "text": "The phase offset does not change periodicity. The smallest common period is 2π/100."
            },
            {
              "equation": "ω_0=100 rad/s"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "100 rad/s",
        "300 rad/s",
        "500 rad/s",
        "1500 rad/s"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 14,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-13",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "digital",
    "number": 13,
    "ref": "GATE 2013 · Booklet D · Q13",
    "file": "EC2013.pdf",
    "page": 62,
    "prompt": "An 8085 executes MVI A,05H; MVI B,05H; PTR: ADD B; DCR B; JNZ PTR; ADI 03H; HLT. Find the final accumulator.",
    "answer": "(A) 17H",
    "steps": [
      "The ADD instruction uses B=5,4,3,2,1. DCR sets the zero flag when B reaches zero, ending the loop.",
      "A starts at 5, then receives 15 and finally 3. Decimal 23 is hexadecimal 17H."
    ],
    "solutionGuide": {
      "meaning": "Trace the values added before the loop counter reaches zero.",
      "sections": [
        {
          "title": "Evaluate the loop",
          "blocks": [
            {
              "text": "The ADD instruction uses B=5,4,3,2,1. DCR sets the zero flag when B reaches zero, ending the loop."
            },
            {
              "equation": "5+4+3+2+1=15"
            }
          ]
        },
        {
          "title": "Include initialization and final addition",
          "blocks": [
            {
              "text": "A starts at 5, then receives 15 and finally 3. Decimal 23 is hexadecimal 17H."
            },
            {
              "equation": "A=5+15+3=23=17H"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "17H",
        "20H",
        "23H",
        "05H"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 12,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-14",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "comm",
    "number": 14,
    "ref": "GATE 2013 · Booklet D · Q14",
    "file": "EC2013.pdf",
    "page": 62,
    "prompt": "A 32-QAM link sends R kbits/s. Find the minimum bandwidth for zero-ISI transmission.",
    "answer": "(B) R/10 kHz",
    "steps": [
      "32-QAM carries log₂32=5 bits per symbol, giving a symbol rate of R/5 ksymbols/s.",
      "With ideal zero-rolloff shaping, the minimum positive-frequency bandwidth is half the symbol rate."
    ],
    "solutionGuide": {
      "meaning": "Convert bit rate to symbol rate and apply the ideal Nyquist bandwidth.",
      "sections": [
        {
          "title": "Find bits per symbol",
          "blocks": [
            {
              "text": "32-QAM carries log₂32=5 bits per symbol, giving a symbol rate of R/5 ksymbols/s."
            },
            {
              "equation": "R_s=frac{R}{5}"
            }
          ]
        },
        {
          "title": "Apply Nyquist shaping",
          "blocks": [
            {
              "text": "With ideal zero-rolloff shaping, the minimum positive-frequency bandwidth is half the symbol rate."
            },
            {
              "equation": "B_{min}=frac{R_s}{2}=frac{R}{10} kHz"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "R/10 Hz",
        "R/10 kHz",
        "R/5 Hz",
        "R/5 kHz"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 13,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-15",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "networks",
    "number": 15,
    "ref": "GATE 2013 · Booklet D · Q15",
    "file": "EC2013.pdf",
    "page": 62,
    "prompt": "Every resistor in a delta network is multiplied by k>0. By what factor do the equivalent star resistors change?",
    "answer": "(B) k",
    "steps": [
      "A star arm equals the product of its adjacent delta resistances divided by the sum of all three delta resistances.",
      "The numerator gains k² and the denominator gains k, leaving one factor of k. The same applies to all three arms."
    ],
    "solutionGuide": {
      "meaning": "Apply the delta-to-star conversion and track the scale factor.",
      "sections": [
        {
          "title": "Write one star resistor",
          "blocks": [
            {
              "text": "A star arm equals the product of its adjacent delta resistances divided by the sum of all three delta resistances."
            },
            {
              "equation": "R_A=frac{R_bR_c}{R_a+R_b+R_c}"
            }
          ]
        },
        {
          "title": "Scale all resistances",
          "blocks": [
            {
              "text": "The numerator gains k² and the denominator gains k, leaving one factor of k. The same applies to all three arms."
            },
            {
              "equation": "R_A′=kR_A"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "k²",
        "k",
        "1/k",
        "√k"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 11,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-16",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "analog",
    "number": 16,
    "ref": "GATE 2013 · Booklet D · Q16",
    "file": "EC2013.pdf",
    "page": 62,
    "prompt": "For the shown ideal op-amp and silicon npn transistor circuit, find Vout. The noninverting input and transistor base are grounded.",
    "answer": "(B) −0.7 V",
    "steps": [
      "Negative feedback holds the inverting node near 0 V. The 5 V source therefore supplies 5 mA through the 1 kΩ resistor, which the collector takes.",
      "The grounded base must be approximately 0.7 V above the emitter. The emitter is the op-amp output."
    ],
    "solutionGuide": {
      "meaning": "Determine the emitter voltage required for the transistor to provide feedback current.",
      "sections": [
        {
          "title": "Find the feedback current",
          "blocks": [
            {
              "text": "Negative feedback holds the inverting node near 0 V. The 5 V source therefore supplies 5 mA through the 1 kΩ resistor, which the collector takes."
            },
            {
              "equation": "I_C≈frac{5}{1000}=5 mA"
            }
          ]
        },
        {
          "title": "Use the base-emitter drop",
          "blocks": [
            {
              "text": "The grounded base must be approximately 0.7 V above the emitter. The emitter is the op-amp output."
            },
            {
              "equation": "V_{out}=V_B−0.7=−0.7 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "−15 V",
        "−0.7 V",
        "+0.7 V",
        "+15 V"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 10,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-10.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q10",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-17",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "control",
    "number": 17,
    "ref": "GATE 2013 · Booklet D · Q17",
    "file": "EC2013.pdf",
    "page": 63,
    "prompt": "The Bode magnitude is 32 dB at 1 rad/s and −8 dB at 10 rad/s, with negative phase. Find G(s).",
    "answer": "(B) 39.8/s²",
    "steps": [
      "The magnitude falls by 40 dB over one decade. Two poles at the origin give this slope and negative phase.",
      "At ω=1, the magnitude equals K. Convert 32 dB to a linear amplitude ratio."
    ],
    "solutionGuide": {
      "meaning": "Use the magnitude slope to find the number of integrators and the 1-rad/s value to find gain.",
      "sections": [
        {
          "title": "Find the slope",
          "blocks": [
            {
              "text": "The magnitude falls by 40 dB over one decade. Two poles at the origin give this slope and negative phase."
            },
            {
              "equation": "G(s)=frac{K}{s^2}"
            }
          ]
        },
        {
          "title": "Compute the gain",
          "blocks": [
            {
              "text": "At ω=1, the magnitude equals K. Convert 32 dB to a linear amplitude ratio."
            },
            {
              "equation": "K=10^{32/20}≈39.8"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "39.8/s",
        "39.8/s²",
        "32/s",
        "32/s²"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 9,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-9.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q9",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-18",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "signals",
    "number": 18,
    "ref": "GATE 2013 · Booklet D · Q18",
    "file": "EC2013.pdf",
    "page": 63,
    "prompt": "An LTI system has h(t)=t u(t). Find its response to x(t)=u(t−1).",
    "answer": "(C) (t−1)²u(t−1)/2",
    "steps": [
      "For t<1 there is no overlap. For t≥1, the convolution integrates h(τ)=τ from 0 to t−1.",
      "Integrating the ramp gives half the squared interval length. The delayed unit step enforces zero output before t=1."
    ],
    "solutionGuide": {
      "meaning": "Convolve a causal ramp impulse response with a delayed step.",
      "sections": [
        {
          "title": "Find the integration interval",
          "blocks": [
            {
              "text": "For t<1 there is no overlap. For t≥1, the convolution integrates h(τ)=τ from 0 to t−1."
            },
            {
              "equation": "y(t)=∫_0^{t−1}τ dτ"
            }
          ]
        },
        {
          "title": "Evaluate",
          "blocks": [
            {
              "text": "Integrating the ramp gives half the squared interval length. The delayed unit step enforces zero output before t=1."
            },
            {
              "equation": "y(t)=frac{(t−1)^2}{2}u(t−1)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "t²u(t)/2",
        "t(t−1)u(t−1)/2",
        "(t−1)²u(t−1)/2",
        "(t²−1)u(t−1)/2"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 8,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-19",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "math",
    "number": 19,
    "ref": "GATE 2013 · Booklet D · Q19",
    "file": "EC2013.pdf",
    "page": 63,
    "prompt": "Find ∇·A for A=x x̂+y ŷ+z ẑ.",
    "answer": "(D) 3",
    "steps": [
      "In Cartesian coordinates, divergence is ∂Ax/∂x+∂Ay/∂y+∂Az/∂z.",
      "Each derivative equals 1, so their sum is 3."
    ],
    "solutionGuide": {
      "meaning": "Differentiate each Cartesian component with respect to its corresponding coordinate.",
      "sections": [
        {
          "title": "Apply divergence",
          "blocks": [
            {
              "text": "In Cartesian coordinates, divergence is ∂Ax/∂x+∂Ay/∂y+∂Az/∂z."
            }
          ]
        },
        {
          "title": "Evaluate the derivatives",
          "blocks": [
            {
              "text": "Each derivative equals 1, so their sum is 3."
            },
            {
              "equation": "∇·A=1+1+1=3"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1/3",
        "1",
        "3"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 7,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-20",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "math",
    "number": 20,
    "ref": "GATE 2013 · Booklet D · Q20",
    "file": "EC2013.pdf",
    "page": 63,
    "prompt": "What is the largest listed angle for which sinθ≈θ has error within 10%, with θ in radians?",
    "answer": "Archived key: (C) 50°. Under ordinary relative error, the largest valid listed choice is (B) 18°.",
    "steps": [
      "At 50°, θ≈0.8727 and sinθ≈0.7660. The relative error is about 12.2% using θ as reference, or 13.9% using sinθ. Thus 50° actually exceeds 10%.",
      "18° is within 10%, while the archived key selects 50°. The selected key appears to use a coarse approximation or a different unstated error interpretation. Do not treat 50° as a rigorous 10% relative-error bound."
    ],
    "solutionGuide": {
      "meaning": "Check the small-angle approximation at the candidate angles.",
      "sections": [
        {
          "title": "Compute the candidate error",
          "blocks": [
            {
              "text": "At 50°, θ≈0.8727 and sinθ≈0.7660. The relative error is about 12.2% using θ as reference, or 13.9% using sinθ. Thus 50° actually exceeds 10%."
            }
          ]
        },
        {
          "title": "Interpret the archived choice",
          "blocks": [
            {
              "text": "18° is within 10%, while the archived key selects 50°. The selected key appears to use a coarse approximation or a different unstated error interpretation. Do not treat 50° as a rigorous 10% relative-error bound."
            },
            {
              "equation": "frac{0.8727−0.7660}{0.8727}≈0.122"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "10°",
        "18°",
        "50°",
        "90°"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 6,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "Archived key: C (50°). Under ordinary relative-error definitions, B (18°) is the largest listed valid angle. The key and the stated tolerance disagree."
  },
  {
    "id": "g13d-21",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "devices",
    "number": 21,
    "ref": "GATE 2013 · Booklet D · Q21",
    "file": "EC2013.pdf",
    "page": 63,
    "prompt": "Compared with wet oxidation, what does dry oxidation produce in IC fabrication?",
    "answer": "(D) Better oxide, slower growth",
    "steps": [
      "Steam grows silicon dioxide faster than dry oxygen under comparable processing conditions.",
      "Dry oxidation gives a denser, higher-quality oxide with better interface and electrical properties, but grows more slowly."
    ],
    "solutionGuide": {
      "meaning": "Compare oxide quality and growth rate for oxygen and steam processes.",
      "sections": [
        {
          "title": "Compare the processes",
          "blocks": [
            {
              "text": "Steam grows silicon dioxide faster than dry oxygen under comparable processing conditions."
            }
          ]
        },
        {
          "title": "Select the tradeoff",
          "blocks": [
            {
              "text": "Dry oxidation gives a denser, higher-quality oxide with better interface and electrical properties, but grows more slowly."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Better oxide, faster growth",
        "Poorer oxide, faster growth",
        "Poorer oxide, slower growth",
        "Better oxide, slower growth"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 5,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-22",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "devices",
    "number": 22,
    "ref": "GATE 2013 · Booklet D · Q22",
    "file": "EC2013.pdf",
    "page": 64,
    "prompt": "Which sequence best describes current flow in a forward-biased pn junction?",
    "answer": "(A) Minority-carrier injection, diffusion and recombination",
    "steps": [
      "Forward bias lowers the junction barrier. Electrons enter the p region and holes enter the n region, becoming excess minority carriers there.",
      "These injected carriers diffuse down their concentration gradients and recombine in the quasi-neutral regions."
    ],
    "solutionGuide": {
      "meaning": "Identify how forward bias produces the dominant junction current.",
      "sections": [
        {
          "title": "Explain injection",
          "blocks": [
            {
              "text": "Forward bias lowers the junction barrier. Electrons enter the p region and holes enter the n region, becoming excess minority carriers there."
            }
          ]
        },
        {
          "title": "Explain transport",
          "blocks": [
            {
              "text": "These injected carriers diffuse down their concentration gradients and recombine in the quasi-neutral regions."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Minority-carrier injection, diffusion and recombination",
        "Minority-carrier injection, drift and generation",
        "Minority-carrier extraction, diffusion and generation",
        "Minority-carrier extraction, drift and recombination"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 4,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-23",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "signals",
    "number": 23,
    "ref": "GATE 2013 · Booklet D · Q23",
    "file": "EC2013.pdf",
    "page": 64,
    "prompt": "Two LTI systems with impulse responses h₁(t) and h₂(t) are cascaded. What is the overall impulse response?",
    "answer": "(C) Convolution",
    "steps": [
      "The first system produces h₁(t). Treat this as the input to the second LTI system.",
      "An LTI system’s output is its input convolved with its impulse response."
    ],
    "solutionGuide": {
      "meaning": "Find the equivalent impulse response when one LTI system feeds the next.",
      "sections": [
        {
          "title": "Pass an impulse through the cascade",
          "blocks": [
            {
              "text": "The first system produces h₁(t). Treat this as the input to the second LTI system."
            }
          ]
        },
        {
          "title": "Apply the convolution rule",
          "blocks": [
            {
              "text": "An LTI system’s output is its input convolved with its impulse response."
            },
            {
              "equation": "h(t)=h_1(t)∗h_2(t)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Product",
        "Sum",
        "Convolution",
        "Difference"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 3,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-24",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "digital",
    "number": 24,
    "ref": "GATE 2013 · Booklet D · Q24",
    "file": "EC2013.pdf",
    "page": 64,
    "prompt": "A staircase bulb can be toggled by either of two switches, regardless of the other switch’s state. Which logic gate describes this behavior?",
    "answer": "(C) XOR",
    "steps": [
      "Flipping either switch must invert the bulb state. AND and OR fail this requirement for some states of the other input.",
      "XOR is 1 for unequal inputs and 0 for equal inputs. Changing either input always swaps these cases."
    ],
    "solutionGuide": {
      "meaning": "Find the two-input logic operation whose output changes whenever either input changes.",
      "sections": [
        {
          "title": "Test the switching rule",
          "blocks": [
            {
              "text": "Flipping either switch must invert the bulb state. AND and OR fail this requirement for some states of the other input."
            }
          ]
        },
        {
          "title": "Write the truth table",
          "blocks": [
            {
              "text": "XOR is 1 for unequal inputs and 0 for equal inputs. Changing either input always swaps these cases."
            },
            {
              "equation": "Y=A⊕B"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "AND",
        "OR",
        "XOR",
        "NAND"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 1,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-25",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "math",
    "number": 25,
    "ref": "GATE 2013 · Booklet D · Q25",
    "file": "EC2013.pdf",
    "page": 64,
    "prompt": "Express the closed-loop line integral ∮A·dl as a surface or volume integral.",
    "answer": "(D) Integral of curl over an open surface bounded by the loop",
    "steps": [
      "Stokes’ theorem relates circulation to the surface integral of curl, not divergence.",
      "The loop is the boundary of an open surface. The surface normal and loop direction must follow the right-hand rule."
    ],
    "solutionGuide": {
      "meaning": "Choose the theorem that converts circulation around a loop to flux through a spanning surface.",
      "sections": [
        {
          "title": "Identify the theorem",
          "blocks": [
            {
              "text": "Stokes’ theorem relates circulation to the surface integral of curl, not divergence."
            }
          ]
        },
        {
          "title": "Choose the surface",
          "blocks": [
            {
              "text": "The loop is the boundary of an open surface. The surface normal and loop direction must follow the right-hand rule."
            },
            {
              "equation": "∮A·dl=∬(∇×A)·dS"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Integral of curl over a closed surface",
        "Integral of divergence over a closed volume",
        "Integral of divergence over an open volume",
        "Integral of curl over an open surface bounded by the loop"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 2,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-26",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "comm",
    "number": 26,
    "ref": "GATE 2013 · Booklet D · Q26",
    "file": "EC2013.pdf",
    "page": 65,
    "prompt": "Independent U and V each take +1 and −1 with probability 1/2. Find H(U+V).",
    "answer": "(C) 3/2 bits",
    "steps": [
      "The sums −2,0,+2 have probabilities 1/4,1/2,1/4 because the zero sum occurs in two of the four equiprobable pairs.",
      "Use H=−Σp log₂p. The contributions are 1/2,1/2,1/2 bit."
    ],
    "solutionGuide": {
      "meaning": "Determine the probability of each sum before computing entropy.",
      "sections": [
        {
          "title": "List the sums",
          "blocks": [
            {
              "text": "The sums −2,0,+2 have probabilities 1/4,1/2,1/4 because the zero sum occurs in two of the four equiprobable pairs."
            }
          ]
        },
        {
          "title": "Compute entropy",
          "blocks": [
            {
              "text": "Use H=−Σp log₂p. The contributions are 1/2,1/2,1/2 bit."
            },
            {
              "equation": "H=−2(frac{1}{4}log_2 frac{1}{4})−frac{1}{2}log_2 frac{1}{2}=frac{3}{2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "3/4 bit",
        "1 bit",
        "3/2 bits",
        "log₂3 bits"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 47,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-27",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "analog",
    "number": 27,
    "ref": "GATE 2013 · Booklet D · Q27",
    "file": "EC2013.pdf",
    "page": 65,
    "prompt": "An npn bias circuit has VCC=3 V, R₁=60 kΩ, RE=500 Ω and very high β. Find R₂ for IC=1 mA, using VBE≈0.7 V.",
    "answer": "(C) 40 kΩ",
    "steps": [
      "With very high β, IE≈IC=1 mA and base current is negligible. VE=0.5 V, so VB≈1.2 V.",
      "The divider gives VB=3R₂/(60 kΩ+R₂). Rearranging gives R₂=40 kΩ."
    ],
    "solutionGuide": {
      "meaning": "Find the required base voltage and use the unloaded divider approximation.",
      "sections": [
        {
          "title": "Find emitter and base voltages",
          "blocks": [
            {
              "text": "With very high β, IE≈IC=1 mA and base current is negligible. VE=0.5 V, so VB≈1.2 V."
            },
            {
              "equation": "V_B=(1 mA)(500 Ω)+0.7=1.2 V"
            }
          ]
        },
        {
          "title": "Solve the divider",
          "blocks": [
            {
              "text": "The divider gives VB=3R₂/(60 kΩ+R₂). Rearranging gives R₂=40 kΩ."
            },
            {
              "equation": "R_2=frac{1.2×60}{3−1.2}=40 kΩ"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "20 kΩ",
        "30 kΩ",
        "40 kΩ",
        "50 kΩ"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 46,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-46.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q46",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-28",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "digital",
    "number": 28,
    "ref": "GATE 2013 · Booklet D · Q28",
    "file": "EC2013.pdf",
    "page": 66,
    "prompt": "Four 1024-byte RAM chips are connected to the shown 16-bit address decoder. Find the address ranges of RAM1 through RAM4.",
    "answer": "(D) 0800–0BFF, 1800–1BFF, 2800–2BFF, 3800–3BFF",
    "steps": [
      "The common enable requires A₁₅=A₁₄=A₁₀=0 and A₁₁=1. A₁₃ and A₁₂ select chips 1 through 4 in binary order.",
      "Each chip spans 2¹⁰=1024 addresses, or 400H. The fixed A₁₁ bit contributes 0800H; chip selection adds 0000H,1000H,2000H,3000H."
    ],
    "solutionGuide": {
      "meaning": "Use A₀–A₉ for locations within a chip and decode the upper six address bits.",
      "sections": [
        {
          "title": "Read the enable condition",
          "blocks": [
            {
              "text": "The common enable requires A₁₅=A₁₄=A₁₀=0 and A₁₁=1. A₁₃ and A₁₂ select chips 1 through 4 in binary order."
            }
          ]
        },
        {
          "title": "Form each address block",
          "blocks": [
            {
              "text": "Each chip spans 2¹⁰=1024 addresses, or 400H. The fixed A₁₁ bit contributes 0800H; chip selection adds 0000H,1000H,2000H,3000H."
            },
            {
              "equation": "0800H–0BFFH;1800H–1BFFH;2800H–2BFFH;3800H–3BFFH"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0C00–0FFF, 1C00–1FFF, 2C00–2FFF, 3C00–3FFF",
        "1800–1FFF, 2800–2FFF, 3800–3FFF, 4800–4FFF",
        "0500–08FF, 1500–18FF, 3500–38FF, 5500–58FF",
        "0800–0BFF, 1800–1BFF, 2800–2BFF, 3800–3BFF"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 45,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-45.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q45",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-29",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "networks",
    "number": 29,
    "ref": "GATE 2013 · Booklet D · Q29",
    "file": "EC2013.pdf",
    "page": 66,
    "prompt": "C₁=10 μF is in parallel with series capacitors C₂=5 μF and C₃=2 μF. Their breakdown ratings are 10 V, 5 V and 2 V. Find maximum safe terminal voltage and total terminal charge.",
    "answer": "(C) 2.8 V, 32 μC",
    "steps": [
      "The limits are C₂V₂max=25 μC and C₃V₃max=4 μC. Thus C₃ limits the series branch to 4 μC, giving V₂=0.8 V and V₃=2 V.",
      "The series equivalent is 10/7 μF. Adding parallel C₁ gives 80/7 μF, whose charge at 2.8 V is 32 μC. C₁ remains below its own 10 V rating."
    ],
    "solutionGuide": {
      "meaning": "The series capacitors share charge, not voltage; find which one reaches breakdown first.",
      "sections": [
        {
          "title": "Find the limiting series charge",
          "blocks": [
            {
              "text": "The limits are C₂V₂max=25 μC and C₃V₃max=4 μC. Thus C₃ limits the series branch to 4 μC, giving V₂=0.8 V and V₃=2 V."
            },
            {
              "equation": "V_{max}=0.8+2=2.8 V"
            }
          ]
        },
        {
          "title": "Find total terminal charge",
          "blocks": [
            {
              "text": "The series equivalent is 10/7 μF. Adding parallel C₁ gives 80/7 μF, whose charge at 2.8 V is 32 μC. C₁ remains below its own 10 V rating."
            },
            {
              "equation": "Q=(10+frac{10}{7})×2.8=32 μC"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2.8 V, 36 μC",
        "7 V, 119 μC",
        "2.8 V, 32 μC",
        "7 V, 80 μC"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 44,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-44.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q44",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-30",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "networks",
    "number": 30,
    "ref": "GATE 2013 · Booklet D · Q30",
    "file": "EC2013.pdf",
    "page": 67,
    "prompt": "A voltage 1000sin(ωt) is applied across YZ of the shown symmetric diode bridge. With ideal diodes, find the voltage across WX.",
    "answer": "(D) 0 for all t",
    "steps": [
      "For each polarity, the corresponding pair of ideal diodes conducts symmetrically to the left and right nodes. The two halves have identical connections and resistances.",
      "The bridge forces W and X to the same potential in either half-cycle. The voltage between them is therefore zero even though internal currents may flow."
    ],
    "solutionGuide": {
      "meaning": "Use the left-right symmetry of the bridge rather than mistaking it for a standard rectifier output.",
      "sections": [
        {
          "title": "Consider either input polarity",
          "blocks": [
            {
              "text": "For each polarity, the corresponding pair of ideal diodes conducts symmetrically to the left and right nodes. The two halves have identical connections and resistances."
            }
          ]
        },
        {
          "title": "Compare W and X",
          "blocks": [
            {
              "text": "The bridge forces W and X to the same potential in either half-cycle. The voltage between them is therefore zero even though internal currents may flow."
            },
            {
              "equation": "V_{WX}=V_W−V_X=0"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "sin(ωt)",
        "[sin(ωt)+|sin(ωt)|]/2",
        "[sin(ωt)−|sin(ωt)|]/2",
        "0 for all t"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 43,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-43.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q43",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-31",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "digital",
    "number": 31,
    "ref": "GATE 2013 · Booklet D · Q31",
    "file": "EC2013.pdf",
    "page": 67,
    "prompt": "For the shown resistor-transistor-diode logic circuit, X and Y are 0 or 5 V. Neglect transistor saturation voltage and diode forward drop. Find Z.",
    "answer": "(B) X̄Y",
    "steps": [
      "If X=1, the npn transistor turns on and clamps Z to zero. Thus a high output requires X=0.",
      "When Y=0, the diode clamps the output low. When X=0 and Y=1, both clamps release and the pull-up makes Z high."
    ],
    "solutionGuide": {
      "meaning": "Identify when either device clamps the pull-up output to zero.",
      "sections": [
        {
          "title": "Test X",
          "blocks": [
            {
              "text": "If X=1, the npn transistor turns on and clamps Z to zero. Thus a high output requires X=0."
            }
          ]
        },
        {
          "title": "Test Y",
          "blocks": [
            {
              "text": "When Y=0, the diode clamps the output low. When X=0 and Y=1, both clamps release and the pull-up makes Z high."
            },
            {
              "equation": "Z=X̄Y"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "XY",
        "X̄Y",
        "XȲ",
        "X̄Ȳ"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 42,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-42.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q42",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-32",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "analog",
    "number": 32,
    "ref": "GATE 2013 · Booklet D · Q32",
    "file": "EC2013.pdf",
    "page": 67,
    "prompt": "Find Vout in the shown cascade of ideal op-amps with all resistors 1 kΩ. The first noninverting input is +1 V and its resistor input is −2 V.",
    "answer": "(C) 8 V",
    "steps": [
      "The first inverting node is at +1 V. KCL through its equal input and feedback resistors gives (1−(−2))+(1−V₁)=0, so V₁=4 V.",
      "The second stage is a noninverting amplifier with equal feedback and ground resistors. Its gain is 2. Both outputs remain within the ±15 V supplies."
    ],
    "solutionGuide": {
      "meaning": "Solve the biased inverting stage first, then the noninverting amplifier.",
      "sections": [
        {
          "title": "Solve the first stage",
          "blocks": [
            {
              "text": "The first inverting node is at +1 V. KCL through its equal input and feedback resistors gives (1−(−2))+(1−V₁)=0, so V₁=4 V."
            },
            {
              "equation": "V_1=2(1)−(−2)=4 V"
            }
          ]
        },
        {
          "title": "Apply the second-stage gain",
          "blocks": [
            {
              "text": "The second stage is a noninverting amplifier with equal feedback and ground resistors. Its gain is 2. Both outputs remain within the ±15 V supplies."
            },
            {
              "equation": "V_{out}=2V_1=8 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "4 V",
        "6 V",
        "8 V",
        "10 V"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 41,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-41.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q41",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-33",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "control",
    "number": 33,
    "ref": "GATE 2013 · Booklet D · Q33",
    "file": "EC2013.pdf",
    "page": 68,
    "prompt": "Find Y(s)/U(s) for the shown signal-flow graph.",
    "answer": "(A) (s+1)/(5s²+6s+2)",
    "steps": [
      "Let a be the first internal node, b the second and c the output node. The graph gives a=u−2c, b=a/s−4c, and c=(1+1/s)b.",
      "Substituting b and a into the last equation gives (5s²+6s+2)c=(s+1)u."
    ],
    "solutionGuide": {
      "meaning": "Account for the parallel forward branch and both feedback loops.",
      "sections": [
        {
          "title": "Write node equations",
          "blocks": [
            {
              "text": "Let a be the first internal node, b the second and c the output node. The graph gives a=u−2c, b=a/s−4c, and c=(1+1/s)b."
            },
            {
              "equation": "a=u−2c;b=frac{a}{s}−4c;c=(1+frac{1}{s})b"
            }
          ]
        },
        {
          "title": "Eliminate the internal nodes",
          "blocks": [
            {
              "text": "Substituting b and a into the last equation gives (5s²+6s+2)c=(s+1)u."
            },
            {
              "equation": "frac{Y(s)}{U(s)}=frac{s+1}{5s^2+6s+2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(s+1)/(5s²+6s+2)",
        "(s+1)/(s²+6s+2)",
        "(s+1)/(s²+4s+2)",
        "1/(5s²+6s+2)"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 40,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-40.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q40",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-34",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "signals",
    "number": 34,
    "ref": "GATE 2013 · Booklet D · Q34",
    "file": "EC2013.pdf",
    "page": 68,
    "prompt": "The DFT of (a,b,c,d) is (α,β,γ,δ). Multiply the row vector (a,b,c,d) by the circulant matrix with rows (a,b,c,d), (d,a,b,c), (c,d,a,b), (b,c,d,a). The DFT of the resulting vector is a scaled version of which vector?",
    "answer": "(A) (α²,β²,γ²,δ²)",
    "steps": [
      "The first component is a²+2bd+c², matching the zero-index term of a length-four circular self-convolution. The other components follow the same cyclic pattern.",
      "A circular convolution transforms to pointwise multiplication. Thus self-convolution squares each DFT component; any normalization convention only changes a common scale."
    ],
    "solutionGuide": {
      "meaning": "Recognize the matrix product as a circular self-convolution.",
      "sections": [
        {
          "title": "Write one output component",
          "blocks": [
            {
              "text": "The first component is a²+2bd+c², matching the zero-index term of a length-four circular self-convolution. The other components follow the same cyclic pattern."
            },
            {
              "equation": "p[n]=x[n]⊛x[n]"
            }
          ]
        },
        {
          "title": "Apply the DFT convolution theorem",
          "blocks": [
            {
              "text": "A circular convolution transforms to pointwise multiplication. Thus self-convolution squares each DFT component; any normalization convention only changes a common scale."
            },
            {
              "equation": "P[k]=X[k]^2"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(α²,β²,γ²,δ²)",
        "(√α,√β,√γ,√δ)",
        "(α+β,β+δ,δ+γ,γ+α)",
        "(α,β,γ,δ)"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 39,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-35",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "math",
    "number": 35,
    "ref": "GATE 2013 · Booklet D · Q35",
    "file": "EC2013.pdf",
    "page": 68,
    "prompt": "U and V are identically distributed zero-mean variables. Their CDFs for U and 2V are F(x) and G(x). Which relation holds for every x?",
    "answer": "(D) x[F(x)−G(x)]≥0",
    "steps": [
      "Since U and V share a distribution, G(x)=P(V≤x/2)=F(x/2).",
      "For x>0, F(x)≥F(x/2); for x<0, F(x)≤F(x/2). Multiplying the difference by x makes it nonnegative in both cases. Zero mean is not needed for this result."
    ],
    "solutionGuide": {
      "meaning": "Use monotonicity of a CDF when its argument is scaled by one half.",
      "sections": [
        {
          "title": "Relate the CDFs",
          "blocks": [
            {
              "text": "Since U and V share a distribution, G(x)=P(V≤x/2)=F(x/2)."
            },
            {
              "equation": "G(x)=F(x/2)"
            }
          ]
        },
        {
          "title": "Check the sign of x",
          "blocks": [
            {
              "text": "For x>0, F(x)≥F(x/2); for x<0, F(x)≤F(x/2). Multiplying the difference by x makes it nonnegative in both cases. Zero mean is not needed for this result."
            },
            {
              "equation": "x[F(x)−G(x)]≥0"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "F(x)−G(x)≤0",
        "F(x)−G(x)≥0",
        "x[F(x)−G(x)]≤0",
        "x[F(x)−G(x)]≥0"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 38,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-36",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "signals",
    "number": 36,
    "ref": "GATE 2013 · Booklet D · Q36",
    "file": "EC2013.pdf",
    "page": 68,
    "prompt": "A first-order linear constant-coefficient differential system gives y(t) from x(t) and initial value y(0). How can its response be changed to −2y(t)?",
    "answer": "(D) Initial value −2y(0), input −2x(t)",
    "steps": [
      "The response is the sum of a part linear in the initial value and a part linear in the forcing input.",
      "To obtain −2y for arbitrary input and initial value, multiply both the initial condition and the forcing function by −2. The system coefficients stay unchanged."
    ],
    "solutionGuide": {
      "meaning": "Scale both the zero-input response and the zero-state response by the same factor.",
      "sections": [
        {
          "title": "Separate the response",
          "blocks": [
            {
              "text": "The response is the sum of a part linear in the initial value and a part linear in the forcing input."
            },
            {
              "equation": "y=y_{initial}+y_{forced}"
            }
          ]
        },
        {
          "title": "Scale both contributions",
          "blocks": [
            {
              "text": "To obtain −2y for arbitrary input and initial value, multiply both the initial condition and the forcing function by −2. The system coefficients stay unchanged."
            },
            {
              "equation": "y_{new}(0)=−2y(0);x_{new}(t)=−2x(t)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Initial value −y(0), input 2x(t)",
        "Initial value 2y(0), input −x(t)",
        "Initial value 2jy(0), input 2jx(t)",
        "Initial value −2y(0), input −2x(t)"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 37,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-37",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "signals",
    "number": 37,
    "ref": "GATE 2013 · Booklet D · Q37",
    "file": "EC2013.pdf",
    "page": 69,
    "prompt": "A system satisfies y″+5y′+6y=x(t), with y(0)=y′(0)=0. The input is 1 for 0<t<2 and zero otherwise. Find Y(s).",
    "answer": "(B) (1−e^(−2s))/[s(s+2)(s+3)]",
    "steps": [
      "The input is u(t)−u(t−2), giving a transform (1−e^(−2s))/s.",
      "Zero initial conditions give G(s)=1/(s²+5s+6)=1/[(s+2)(s+3)]. Multiply G and X."
    ],
    "solutionGuide": {
      "meaning": "Represent the finite rectangular pulse as two steps and use the zero-state transfer function.",
      "sections": [
        {
          "title": "Transform the pulse",
          "blocks": [
            {
              "text": "The input is u(t)−u(t−2), giving a transform (1−e^(−2s))/s."
            },
            {
              "equation": "X(s)=frac{1−e^{−2s}}{s}"
            }
          ]
        },
        {
          "title": "Transform the differential equation",
          "blocks": [
            {
              "text": "Zero initial conditions give G(s)=1/(s²+5s+6)=1/[(s+2)(s+3)]. Multiply G and X."
            },
            {
              "equation": "Y(s)=frac{1−e^{−2s}}{s(s+2)(s+3)}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "e^(−2s)/[s(s+2)(s+3)]",
        "(1−e^(−2s))/[s(s+2)(s+3)]",
        "e^(−2s)/[(s+2)(s+3)]",
        "(1−e^(−2s))/[(s+2)(s+3)]"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 36,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-38",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "analog",
    "number": 38,
    "ref": "GATE 2013 · Booklet D · Q38",
    "file": "EC2013.pdf",
    "page": 69,
    "prompt": "A common-source NMOS stage has RD=10 kΩ, RL=10 kΩ and an output coupling capacitor C=1 μF. Ignore body effect and channel-length modulation. Find its lower cutoff frequency.",
    "answer": "(A) 8 Hz",
    "steps": [
      "Zero input makes vgs=0, so the controlled current source is zero. Each capacitor terminal sees a resistor to AC ground: RD on one side and RL on the other.",
      "The capacitor forms a first-order high-pass pole with the sum of those resistances."
    ],
    "solutionGuide": {
      "meaning": "Find the resistance seen across the coupling capacitor with the input set to zero.",
      "sections": [
        {
          "title": "Deactivate the input",
          "blocks": [
            {
              "text": "Zero input makes vgs=0, so the controlled current source is zero. Each capacitor terminal sees a resistor to AC ground: RD on one side and RL on the other."
            },
            {
              "equation": "R_{seen}=R_D+R_L=20 kΩ"
            }
          ]
        },
        {
          "title": "Compute the high-pass corner",
          "blocks": [
            {
              "text": "The capacitor forms a first-order high-pass pole with the sum of those resistances."
            },
            {
              "equation": "f_L=frac{1}{2πC(R_D+R_L)}≈7.96 Hz"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "8 Hz",
        "32 Hz",
        "50 Hz",
        "200 Hz"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 35,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-35.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q35",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-39",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "devices",
    "number": 39,
    "ref": "GATE 2013 · Booklet D · Q39",
    "file": "EC2013.pdf",
    "page": 70,
    "prompt": "A diode-connected NMOS has gate and drain at VB=2 V, source grounded, kN=40 μA/V² and VTN=1 V. Neglect body effect and channel-length modulation. Find dVB/dID.",
    "answer": "(B) 25 kΩ",
    "steps": [
      "Gate equals drain, so the conducting device is in saturation. Its overdrive is 1 V and gm=kN(VB−VT)=40 μS.",
      "With λ=0, the drain and gate voltage change together and the small-signal resistance is 1/gm."
    ],
    "solutionGuide": {
      "meaning": "Differentiate the square-law current of a diode-connected MOSFET.",
      "sections": [
        {
          "title": "Find transconductance",
          "blocks": [
            {
              "text": "Gate equals drain, so the conducting device is in saturation. Its overdrive is 1 V and gm=kN(VB−VT)=40 μS."
            },
            {
              "equation": "g_m=40 μA/V^2×1 V=40 μS"
            }
          ]
        },
        {
          "title": "Invert the incremental conductance",
          "blocks": [
            {
              "text": "With λ=0, the drain and gate voltage change together and the small-signal resistance is 1/gm."
            },
            {
              "equation": "r=frac{1}{40 μS}=25 kΩ"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "12.5 kΩ",
        "25 kΩ",
        "50 kΩ",
        "100 kΩ"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 34,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-34.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q34",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-40",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "signals",
    "number": 40,
    "ref": "GATE 2013 · Booklet D · Q40",
    "file": "EC2013.pdf",
    "page": 70,
    "prompt": "A system has h(t)=δ(t−1)+δ(t−3). Find its unit-step response at t=2.",
    "answer": "(B) 1",
    "steps": [
      "Convolution with each delayed impulse produces a delayed step.",
      "The first step is on and the second is off."
    ],
    "solutionGuide": {
      "meaning": "Convolve the impulse response with a unit step.",
      "sections": [
        {
          "title": "Shift the step",
          "blocks": [
            {
              "text": "Convolution with each delayed impulse produces a delayed step."
            },
            {
              "equation": "y(t)=u(t−1)+u(t−3)"
            }
          ]
        },
        {
          "title": "Evaluate at t=2",
          "blocks": [
            {
              "text": "The first step is on and the second is off."
            },
            {
              "equation": "y(2)=1+0=1"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0",
        "1",
        "2",
        "3"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 33,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-41",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "networks",
    "number": 41,
    "ref": "GATE 2013 · Booklet D · Q41",
    "file": "EC2013.pdf",
    "page": 70,
    "prompt": "Two magnetically uncoupled coils have quality factors q₁,q₂ and series resistances R₁,R₂ at the same frequency. Find their series-combination Q.",
    "answer": "(C) (q₁R₁+q₂R₂)/(R₁+R₂)",
    "steps": [
      "For a series coil model, qᵢ=ωLᵢ/Rᵢ. Hence its inductive reactance is qᵢRᵢ.",
      "No mutual inductance is present. Divide the sum of reactances by the sum of resistances."
    ],
    "solutionGuide": {
      "meaning": "Add inductive reactances and resistances before forming Q.",
      "sections": [
        {
          "title": "Express each reactance",
          "blocks": [
            {
              "text": "For a series coil model, qᵢ=ωLᵢ/Rᵢ. Hence its inductive reactance is qᵢRᵢ."
            },
            {
              "equation": "ωL_i=q_iR_i"
            }
          ]
        },
        {
          "title": "Combine the coils",
          "blocks": [
            {
              "text": "No mutual inductance is present. Divide the sum of reactances by the sum of resistances."
            },
            {
              "equation": "Q=frac{q_1R_1+q_2R_2}{R_1+R_2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "q₁+q₂",
        "1/q₁+1/q₂",
        "(q₁R₁+q₂R₂)/(R₁+R₂)",
        "(q₁R₂+q₂R₁)/(R₁+R₂)"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 32,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-42",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "networks",
    "number": 42,
    "ref": "GATE 2013 · Booklet D · Q42",
    "file": "EC2013.pdf",
    "page": 70,
    "prompt": "The shown ideal transformer has turns ratio 1:1.25 and a tapped attenuator of factor 0.8. Find forward VYZ/VWX and reverse VWX/VYZ under open-circuit output conditions.",
    "answer": "(B) 1 and 0.8",
    "steps": [
      "From WX to the full secondary, the transformer multiplies voltage by 1.25. The tap then multiplies by 0.8, giving a net ratio 1.",
      "With the primary open, no ideal-transformer current flows. The untapped segment has no voltage drop, so the full secondary equals the applied tap voltage. The reverse transformer ratio is 1/1.25=0.8."
    ],
    "solutionGuide": {
      "meaning": "Distinguish forward tap attenuation from reverse open-circuit excitation of the tap.",
      "sections": [
        {
          "title": "Forward excitation",
          "blocks": [
            {
              "text": "From WX to the full secondary, the transformer multiplies voltage by 1.25. The tap then multiplies by 0.8, giving a net ratio 1."
            },
            {
              "equation": "frac{V_{YZ}}{V_{WX}}=1.25×0.8=1"
            }
          ]
        },
        {
          "title": "Reverse excitation",
          "blocks": [
            {
              "text": "With the primary open, no ideal-transformer current flows. The untapped segment has no voltage drop, so the full secondary equals the applied tap voltage. The reverse transformer ratio is 1/1.25=0.8."
            },
            {
              "equation": "frac{V_{WX}}{V_{YZ}}=frac{1}{1.25}=0.8"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1.25 and 0.8",
        "1 and 0.8",
        "1 and 1",
        "0.8 and 0.8"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 31,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-31.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q31",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-43",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "devices",
    "number": 43,
    "ref": "GATE 2013 · Booklet D · Q43",
    "file": "EC2013.pdf",
    "page": 71,
    "prompt": "A 10 V supply feeds a 100 Ω series resistor and an ideal 5 V Zener shunt regulator. The Zener knee current is 10 mA. Find minimum RL and minimum Zener power rating.",
    "answer": "(B) 125 Ω, 250 mW",
    "steps": [
      "The series current is (10−5)/100=50 mA. Reserving 10 mA for the Zener leaves 40 mA for the load.",
      "With no load, all 50 mA flows through the Zener. Its rating must cover 5×0.05=0.25 W."
    ],
    "solutionGuide": {
      "meaning": "Use the minimum Zener current at maximum load and the maximum Zener current at no load.",
      "sections": [
        {
          "title": "Find the maximum load current",
          "blocks": [
            {
              "text": "The series current is (10−5)/100=50 mA. Reserving 10 mA for the Zener leaves 40 mA for the load."
            },
            {
              "equation": "R_{L,min}=frac{5}{0.04}=125 Ω"
            }
          ]
        },
        {
          "title": "Check no-load dissipation",
          "blocks": [
            {
              "text": "With no load, all 50 mA flows through the Zener. Its rating must cover 5×0.05=0.25 W."
            },
            {
              "equation": "P_{Z,max}=5×0.05=250 mW"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "125 Ω, 125 mW",
        "125 Ω, 250 mW",
        "250 Ω, 125 mW",
        "250 Ω, 250 mW"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 30,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-30.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q30",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-44",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "control",
    "number": 44,
    "ref": "GATE 2013 · Booklet D · Q44",
    "file": "EC2013.pdf",
    "page": 71,
    "prompt": "A motor has G(s)=10/(1+10s). In unity negative feedback with proportional gain Ka, what approximate Ka reduces its time constant by a factor of 100?",
    "answer": "(C) 10",
    "steps": [
      "The closed-loop denominator is 10s+1+10Ka, giving τcl=10/(1+10Ka).",
      "The desired time constant is 10/100=0.1 s. Thus 1+10Ka=100, giving Ka=9.9≈10."
    ],
    "solutionGuide": {
      "meaning": "Find the closed-loop pole and compare its time constant with 10 seconds.",
      "sections": [
        {
          "title": "Close the loop",
          "blocks": [
            {
              "text": "The closed-loop denominator is 10s+1+10Ka, giving τcl=10/(1+10Ka)."
            },
            {
              "equation": "τ_{cl}=frac{10}{1+10K_a}"
            }
          ]
        },
        {
          "title": "Set the required ratio",
          "blocks": [
            {
              "text": "The desired time constant is 10/100=0.1 s. Thus 1+10Ka=100, giving Ka=9.9≈10."
            },
            {
              "equation": "K_a=frac{99}{10}=9.9≈10"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1",
        "5",
        "10",
        "100"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 29,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-45",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "networks",
    "number": 45,
    "ref": "GATE 2013 · Booklet D · Q45",
    "file": "EC2013.pdf",
    "page": 71,
    "prompt": "In the shown coupled dependent-source circuit, Vs=100∠53.13° V. Find the open-circuit Thevenin voltage seen by RL.",
    "answer": "(C) 800∠90° V",
    "steps": [
      "With RL removed, the right-loop current I₂ is zero. The left dependent voltage j40I₂ is therefore zero, leaving I₁=Vs/(3+j4).",
      "The marked inductor voltage is VL1=j4I₁=j80 V. There is no drop across the unloaded right-hand series impedance, so Vth=10VL1."
    ],
    "solutionGuide": {
      "meaning": "Remove RL before solving; the dependent sources remain active.",
      "sections": [
        {
          "title": "Open the load",
          "blocks": [
            {
              "text": "With RL removed, the right-loop current I₂ is zero. The left dependent voltage j40I₂ is therefore zero, leaving I₁=Vs/(3+j4)."
            },
            {
              "equation": "I_1=frac{100∠53.13°}{3+j4}=20 A"
            }
          ]
        },
        {
          "title": "Find the controlled source voltage",
          "blocks": [
            {
              "text": "The marked inductor voltage is VL1=j4I₁=j80 V. There is no drop across the unloaded right-hand series impedance, so Vth=10VL1."
            },
            {
              "equation": "V_{th}=10(j4)(20)=j800=800∠90° V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "100∠90° V",
        "800∠0° V",
        "800∠90° V",
        "100∠60° V"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 28,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-28.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q28",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-46",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "math",
    "number": 46,
    "ref": "GATE 2013 · Booklet D · Q46",
    "file": "EC2013.pdf",
    "page": 72,
    "prompt": "Find the determinant of the 4×4 matrix with 2 on its diagonal and 1 everywhere else. Use det(I+AB)=det(I+BA).",
    "answer": "(B) 5",
    "steps": [
      "Let u=(1,1,1,1)ᵀ. The matrix is I₄+uuᵀ.",
      "The rank-one determinant reduces to a scalar: 1+uᵀu=1+4."
    ],
    "solutionGuide": {
      "meaning": "Recognize the matrix as an identity plus a rank-one all-ones matrix.",
      "sections": [
        {
          "title": "Factor the update",
          "blocks": [
            {
              "text": "Let u=(1,1,1,1)ᵀ. The matrix is I₄+uuᵀ."
            },
            {
              "equation": "M=I_4+uu^T"
            }
          ]
        },
        {
          "title": "Apply the determinant identity",
          "blocks": [
            {
              "text": "The rank-one determinant reduces to a scalar: 1+uᵀu=1+4."
            },
            {
              "equation": "det(M)=1+u^Tu=5"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2",
        "5",
        "8",
        "16"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 27,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-47",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "math",
    "number": 47,
    "ref": "GATE 2013 · Booklet D · Q47",
    "file": "EC2013.pdf",
    "page": 72,
    "prompt": "Independent zero-mean Gaussian variables U and V have variances 1/4 and 1/9. Find P(3V≥2U).",
    "answer": "(B) 1/2",
    "steps": [
      "Z=3V−2U is Gaussian. Independence gives variance 9(1/9)+4(1/4)=2 and mean zero.",
      "A continuous zero-mean Gaussian has half its probability on either side of zero; equality has zero probability."
    ],
    "solutionGuide": {
      "meaning": "Reduce the event to the sign of a zero-mean Gaussian variable.",
      "sections": [
        {
          "title": "Form a new Gaussian",
          "blocks": [
            {
              "text": "Z=3V−2U is Gaussian. Independence gives variance 9(1/9)+4(1/4)=2 and mean zero."
            },
            {
              "equation": "Z∼N(0,2)"
            }
          ]
        },
        {
          "title": "Use symmetry",
          "blocks": [
            {
              "text": "A continuous zero-mean Gaussian has half its probability on either side of zero; equality has zero probability."
            },
            {
              "equation": "P(3V≥2U)=P(Z≥0)=frac{1}{2}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "4/9",
        "1/2",
        "2/3",
        "5/9"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 26,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-48",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "networks",
    "number": 48,
    "ref": "GATE 2013 · Booklet D · Q48",
    "file": "EC2013.pdf",
    "page": 72,
    "prompt": "In the same circuit, a 1 Ω resistor is connected directly in parallel with an ideal 10 V voltage source. Find its current in the indicated downward direction.",
    "answer": "(C) 10 A",
    "steps": [
      "Parallel branches share the same terminal voltage. The ideal source maintains 10 V across the 1 Ω resistor regardless of the other branches.",
      "The upper terminal is positive, so the current is downward as indicated."
    ],
    "solutionGuide": {
      "meaning": "Use the voltage fixed across the resistor by the parallel ideal source.",
      "sections": [
        {
          "title": "Identify the voltage",
          "blocks": [
            {
              "text": "Parallel branches share the same terminal voltage. The ideal source maintains 10 V across the 1 Ω resistor regardless of the other branches."
            },
            {
              "equation": "V_R=10 V"
            }
          ]
        },
        {
          "title": "Apply Ohm’s law",
          "blocks": [
            {
              "text": "The upper terminal is positive, so the current is downward as indicated."
            },
            {
              "equation": "I_R=frac{10 V}{1 Ω}=10 A"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2 A",
        "3.33 A",
        "10 A",
        "12 A"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 51,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-51.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q51",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-49",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "networks",
    "number": 49,
    "ref": "GATE 2013 · Booklet D · Q49",
    "file": "EC2013.pdf",
    "page": 72,
    "prompt": "For the shown circuit with a 10 V voltage source, 2 A current source, and 5 Ω, 2 Ω and 1 Ω resistors, find downward voltage-source current IS and current-source voltage VS (positive at its top).",
    "answer": "(D) −13 A, 20 V",
    "steps": [
      "The top rail is 10 V above the bottom rail. The 1 Ω and 2 Ω branches draw 10 A and 5 A. The current source supplies 2 A upward, so downward IS=2−15=−13 A.",
      "Its 2 A flows upward through 5 Ω, requiring its top terminal to be 10 V above the 10 V rail. Thus VS=20 V."
    ],
    "solutionGuide": {
      "meaning": "The ideal voltage source fixes the rail voltage; then use KCL and the series-resistor drop.",
      "sections": [
        {
          "title": "Find the voltage-source current",
          "blocks": [
            {
              "text": "The top rail is 10 V above the bottom rail. The 1 Ω and 2 Ω branches draw 10 A and 5 A. The current source supplies 2 A upward, so downward IS=2−15=−13 A."
            },
            {
              "equation": "I_S=2−frac{10}{1}−frac{10}{2}=−13 A"
            }
          ]
        },
        {
          "title": "Find the current-source voltage",
          "blocks": [
            {
              "text": "Its 2 A flows upward through 5 Ω, requiring its top terminal to be 10 V above the 10 V rail. Thus VS=20 V."
            },
            {
              "equation": "V_S=10+(2)(5)=20 V"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "13 A, −20 V",
        "8 A, −10 V",
        "−8 A, 20 V",
        "−13 A, 20 V"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 50,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-50.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q50",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-50",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "comm",
    "number": 50,
    "ref": "GATE 2013 · Booklet D · Q50",
    "file": "EC2013.pdf",
    "page": 73,
    "prompt": "For the same equiprobable triangular densities—bit 0 on [−1,1] with peak 1, bit 1 on [0,4] with peak 0.5 at 2—find the optimum decision threshold.",
    "answer": "(B) 4/5",
    "steps": [
      "On 0≤x≤1, f₀(x)=1−x and f₁(x)=x/4. Outside the overlap, the nonzero density determines the decision.",
      "Set 1−x=x/4. Below the crossing choose bit 0; above it choose bit 1."
    ],
    "solutionGuide": {
      "meaning": "For equal priors and error costs, place the threshold where the overlapping likelihoods cross.",
      "sections": [
        {
          "title": "Write the overlap densities",
          "blocks": [
            {
              "text": "On 0≤x≤1, f₀(x)=1−x and f₁(x)=x/4. Outside the overlap, the nonzero density determines the decision."
            },
            {
              "equation": "f_0(x)=1−x;f_1(x)=frac{x}{4}"
            }
          ]
        },
        {
          "title": "Equate the likelihoods",
          "blocks": [
            {
              "text": "Set 1−x=x/4. Below the crossing choose bit 0; above it choose bit 1."
            },
            {
              "equation": "x_{th}=frac{4}{5}=0.8"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1/2",
        "4/5",
        "1",
        "3/2"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 49,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-49.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q49",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-51",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "comm",
    "number": 51,
    "ref": "GATE 2013 · Booklet D · Q51",
    "file": "EC2013.pdf",
    "page": 73,
    "prompt": "Equiprobable bits have the shown triangular received-value densities: bit 0 on [−1,1] with peak 1 at 0, and bit 1 on [0,4] with peak 0.5 at 2. For threshold 1, find BER.",
    "answer": "(D) 1/16",
    "steps": [
      "Decide bit 1 above threshold 1. Bit 0 never exceeds 1, so its error probability is zero. Bit 1 is mistaken only on [0,1], where its density is x/4.",
      "Only half the transmitted bits are bit 1. Multiply the conditional error by 1/2."
    ],
    "solutionGuide": {
      "meaning": "Integrate the conditional error region and include the prior probability.",
      "sections": [
        {
          "title": "Locate the errors",
          "blocks": [
            {
              "text": "Decide bit 1 above threshold 1. Bit 0 never exceeds 1, so its error probability is zero. Bit 1 is mistaken only on [0,1], where its density is x/4."
            },
            {
              "equation": "P(error|1)=∫_0^1 frac{x}{4}dx=frac{1}{8}"
            }
          ]
        },
        {
          "title": "Weight by the bit priors",
          "blocks": [
            {
              "text": "Only half the transmitted bits are bit 1. Multiply the conditional error by 1/2."
            },
            {
              "equation": "BER=frac{1}{2}×frac{1}{8}=frac{1}{16}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "1/2",
        "1/4",
        "1/8",
        "1/16"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 48,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-48.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q48",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-52",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "em",
    "number": 52,
    "ref": "GATE 2013 · Booklet D · Q52",
    "file": "EC2013.pdf",
    "page": 73,
    "prompt": "A plane wave of wavelength 600 μm travels from εr=1 to εr=4.5. Its transmitted ray makes 19.2° with the normal. Find incidence angle and incident phasor Ei, with x and z directions as shown.",
    "answer": "(C) 45°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴(x+z)/(3√2)]",
    "steps": [
      "For nonmagnetic media, sinθi=√4.5 sin19.2°≈0.698, close to sin45°. The supplied 19.2° is rounded rather coarsely; the intended listed angle is 45°.",
      "The incident propagation direction is (x̂+ẑ)/√2, so the transverse electric field is along (x̂−ẑ)/√2. The wavenumber 2π/λ=π10⁴/3 gives the stated phase."
    ],
    "solutionGuide": {
      "meaning": "Use Snell’s law for the ray and transversality for electric-field orientation.",
      "sections": [
        {
          "title": "Find the incidence angle",
          "blocks": [
            {
              "text": "For nonmagnetic media, sinθi=√4.5 sin19.2°≈0.698, close to sin45°. The supplied 19.2° is rounded rather coarsely; the intended listed angle is 45°."
            },
            {
              "equation": "θ_i≈45°"
            }
          ]
        },
        {
          "title": "Build the phasor",
          "blocks": [
            {
              "text": "The incident propagation direction is (x̂+ẑ)/√2, so the transverse electric field is along (x̂−ẑ)/√2. The wavenumber 2π/λ=π10⁴/3 gives the stated phase."
            },
            {
              "equation": "E_i=frac{E_0}{sqrt{2}}(x̂−ẑ)e^{−jπ10^4(x+z)/(3sqrt{2})}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "60°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴(x+z)/(3√2)]",
        "45°, (E₀/√2)(x̂+ẑ)e^[−jπ10⁴z/3]",
        "45°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴(x+z)/(3√2)]",
        "60°, (E₀/√2)(x̂−ẑ)e^[−jπ10⁴z/3]"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 52,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "Using θt=19.2° literally gives θi≈44.23°. The exact transmitted angle for 45° is about 19.47°. The answer follows the intended 45° option.",
    "figure": "pyq-figures/g13-52.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q52",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-53",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "em",
    "number": 53,
    "ref": "GATE 2013 · Booklet D · Q53",
    "file": "EC2013.pdf",
    "page": 74,
    "prompt": "For the same 600 μm TM-polarized wave incident from εr=1 onto εr=4.5 at the intended angle 45°, find the reflected electric-field phasor.",
    "answer": "Archived key: (A), magnitude 0.23. With the stated incident field, the reflected Cartesian coefficient is −0.23; see the sign calculation.",
    "steps": [
      "η₂/η₁=1/√4.5. Using the exact Snell angle for 45°, the tangential electric-field ratio is (η₂cosθt−η₁cosθi)/(η₂cosθt+η₁cosθi)≈−0.229.",
      "The diagram’s x̂−ẑ incident reference can represent the signed incident amplitude. The reflected phase uses x−z. With Ei fixed exactly as in Q52, the coefficient multiplying x̂+ẑ is −0.23. The archived key chooses A, whose magnitude is correct but whose sign is positive."
    ],
    "solutionGuide": {
      "meaning": "Apply the TM Fresnel coefficient and reverse the normal component of the propagation vector.",
      "sections": [
        {
          "title": "Compute the TM reflection coefficient",
          "blocks": [
            {
              "text": "η₂/η₁=1/√4.5. Using the exact Snell angle for 45°, the tangential electric-field ratio is (η₂cosθt−η₁cosθi)/(η₂cosθt+η₁cosθi)≈−0.229."
            },
            {
              "equation": "Γ_{tangential}≈−0.229"
            }
          ]
        },
        {
          "title": "Respect the diagram’s field reference",
          "blocks": [
            {
              "text": "The diagram’s x̂−ẑ incident reference can represent the signed incident amplitude. The reflected phase uses x−z. With Ei fixed exactly as in Q52, the coefficient multiplying x̂+ẑ is −0.23. The archived key chooses A, whose magnitude is correct but whose sign is positive."
            },
            {
              "equation": "E_r=−0.23frac{E_0}{sqrt{2}}(x̂+ẑ)e^{−jπ10^4(x−z)/(3sqrt{2})}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "0.23(E₀/√2)(x̂+ẑ)e^[−jπ10⁴(x−z)/(3√2)]",
        "−(E₀/√2)(x̂+ẑ)e^[jπ10⁴z/3]",
        "0.44(E₀/√2)(x̂+ẑ)e^[−jπ10⁴(x−z)/(3√2)]",
        "(E₀/√2)(x̂+ẑ)e^[−jπ10⁴(x+z)/3]"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 53,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "The archived key selects A, but its reflected-field sign is inconsistent with the incident field written in Q52 under the same Cartesian basis. The worked calculation retains the physically consistent negative sign.",
    "figure": "pyq-figures/g13-53.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q53",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-54",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "control",
    "number": 54,
    "ref": "GATE 2013 · Booklet D · Q54",
    "file": "EC2013.pdf",
    "page": 74,
    "prompt": "Find the state equations for the shown two-integrator signal-flow realization, taking each integrator output as its state.",
    "answer": "(A) A=[−1,0;1,−1], B=[−1;1], C=[1,−1], D=1",
    "steps": [
      "Let x₁ be the output of the left integrator and x₂ of the right. The first integrator input is −u−x₁. The second input is u+x₁−x₂.",
      "The final summing node gives y=u+x₁−x₂. These coefficients match option A."
    ],
    "solutionGuide": {
      "meaning": "Read the inputs of the two integrators as state derivatives.",
      "sections": [
        {
          "title": "Read the first and second states",
          "blocks": [
            {
              "text": "Let x₁ be the output of the left integrator and x₂ of the right. The first integrator input is −u−x₁. The second input is u+x₁−x₂."
            },
            {
              "equation": "ẋ_1=−x_1−u;ẋ_2=x_1−x_2+u"
            }
          ]
        },
        {
          "title": "Read the output",
          "blocks": [
            {
              "text": "The final summing node gives y=u+x₁−x₂. These coefficients match option A."
            },
            {
              "equation": "y=x_1−x_2+u"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "A=[−1,0;1,−1], B=[−1;1], C=[1,−1], D=1",
        "A=[−1,0;−1,−1], B=[−1;1], C=[−1,−1], D=1",
        "A=[−1,0;−1,−1], B=[−1;1], C=[−1,−1], D=−1",
        "A=[−1,−1;0,−1], B=[−1;1], C=[1,−1], D=−1"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 54,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "figure": "pyq-figures/g13-54.svg",
    "figureAlt": "GATE 2013 source diagram for Booklet A Q54",
    "figureCaption": "Original vector diagram · shared across reordered booklets · click to enlarge"
  },
  {
    "id": "g13d-55",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "control",
    "number": 55,
    "ref": "GATE 2013 · Booklet D · Q55",
    "file": "EC2013.pdf",
    "page": 74,
    "prompt": "For A=[−1,0;1,−1], find the state transition matrix e^(At).",
    "answer": "(A) [e^(−t),0;te^(−t),e^(−t)]",
    "steps": [
      "Write A=−I+N with N=[0,0;1,0]. Since N²=0, its exponential truncates to I+tN.",
      "The identity commutes with N, so e^(At)=e^(−t)(I+tN). It equals I at t=0 as required."
    ],
    "solutionGuide": {
      "meaning": "Separate the matrix into a scalar identity part and a nilpotent part.",
      "sections": [
        {
          "title": "Find the nilpotent part",
          "blocks": [
            {
              "text": "Write A=−I+N with N=[0,0;1,0]. Since N²=0, its exponential truncates to I+tN."
            },
            {
              "equation": "N^2=0;e^{Nt}=I+tN"
            }
          ]
        },
        {
          "title": "Multiply the commuting exponentials",
          "blocks": [
            {
              "text": "The identity commutes with N, so e^(At)=e^(−t)(I+tN). It equals I at t=0 as required."
            },
            {
              "equation": "e^{At}=e^{−t}(I+tN)"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "[e^(−t),0;te^(−t),e^(−t)]",
        "[e^(−t),0;−te^(−t),e^(−t)]",
        "[e^(−t),0;e^(−t),e^(−t)]",
        "[e^(−t),−te^(−t);0,e^(−t)]"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 55,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-56",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "apt",
    "number": 56,
    "ref": "GATE 2013 · Booklet D · Q56",
    "file": "EC2013.pdf",
    "page": 75,
    "prompt": "Choose the closest meaning of “quarrel” in “They were requested not to quarrel with others.”",
    "answer": "(D) fall out",
    "steps": [
      "To quarrel is to have an argument or disagreement.",
      "To “fall out with” someone means to quarrel or stop being friendly. The other choices have different meanings."
    ],
    "solutionGuide": {
      "meaning": "Choose the phrasal verb meaning to argue or become unfriendly.",
      "sections": [
        {
          "title": "Identify the meaning",
          "blocks": [
            {
              "text": "To quarrel is to have an argument or disagreement."
            }
          ]
        },
        {
          "title": "Match the phrasal verb",
          "blocks": [
            {
              "text": "To “fall out with” someone means to quarrel or stop being friendly. The other choices have different meanings."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "make out",
        "call out",
        "dig out",
        "fall out"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 60,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-57",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "apt",
    "number": 57,
    "ref": "GATE 2013 · Booklet D · Q57",
    "file": "EC2013.pdf",
    "page": 75,
    "prompt": "The Monday–Wednesday mean temperature was 41°C; Tuesday–Thursday mean was 43°C. Thursday was 15% hotter than Monday. Find Thursday’s temperature.",
    "answer": "(C) 46°C",
    "steps": [
      "The two totals are 123°C and 129°C, so Thursday minus Monday is 6°C.",
      "T=1.15M gives 0.15M=6, hence M=40°C and T=46°C."
    ],
    "solutionGuide": {
      "meaning": "Subtract the overlapping three-day totals to eliminate Tuesday and Wednesday.",
      "sections": [
        {
          "title": "Subtract the totals",
          "blocks": [
            {
              "text": "The two totals are 123°C and 129°C, so Thursday minus Monday is 6°C."
            },
            {
              "equation": "T−M=3(43−41)=6"
            }
          ]
        },
        {
          "title": "Use the percentage relation",
          "blocks": [
            {
              "text": "T=1.15M gives 0.15M=6, hence M=40°C and T=46°C."
            },
            {
              "equation": "T=1.15×40=46°C"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "40°C",
        "43°C",
        "46°C",
        "49°C"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 58,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-58",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "apt",
    "number": 58,
    "ref": "GATE 2013 · Booklet D · Q58",
    "file": "EC2013.pdf",
    "page": 75,
    "prompt": "Complete the sentence as intended by the archived key: “Dare ___ mistakes.”",
    "answer": "(A) commit",
    "steps": [
      "The archived key treats dare as a modal-like verb followed by a bare infinitive, selecting “commit.”",
      "In ordinary affirmative imperatives, “Dare to commit mistakes” is also natural and more conventional for many speakers. The key’s choice is an exam convention, not a universal rejection of “to commit.”"
    ],
    "solutionGuide": {
      "meaning": "Distinguish the exam’s modal use of dare from ordinary modern infinitive usage.",
      "sections": [
        {
          "title": "Read the intended construction",
          "blocks": [
            {
              "text": "The archived key treats dare as a modal-like verb followed by a bare infinitive, selecting “commit.”"
            }
          ]
        },
        {
          "title": "Keep the usage limitation clear",
          "blocks": [
            {
              "text": "In ordinary affirmative imperatives, “Dare to commit mistakes” is also natural and more conventional for many speakers. The key’s choice is an exam convention, not a universal rejection of “to commit.”"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "commit",
        "to commit",
        "committed",
        "committing"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 59,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "Archived key: A. Both modal and lexical constructions of dare exist; the bare positive imperative here is stylistically unusual."
  },
  {
    "id": "g13d-59",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "apt",
    "number": 59,
    "ref": "GATE 2013 · Booklet D · Q59",
    "file": "EC2013.pdf",
    "page": 75,
    "prompt": "Choose the grammatically correct sentence.",
    "answer": "(D) Two and two make four.",
    "steps": [
      "In this construction, “make” means “amount to” or “give a total of.”",
      "“Two and two make four” is the standard phrasing selected by the archived key."
    ],
    "solutionGuide": {
      "meaning": "Choose the standard expression for the result of an arithmetic sum.",
      "sections": [
        {
          "title": "Use the conventional expression",
          "blocks": [
            {
              "text": "In this construction, “make” means “amount to” or “give a total of.”"
            }
          ]
        },
        {
          "title": "Select the sentence",
          "blocks": [
            {
              "text": "“Two and two make four” is the standard phrasing selected by the archived key."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Two and two add four.",
        "Two and two become four.",
        "Two and two are four.",
        "Two and two make four."
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 56,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-60",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "apt",
    "number": 60,
    "ref": "GATE 2013 · Booklet D · Q60",
    "file": "EC2013.pdf",
    "page": 75,
    "prompt": "“You can always give me a ring whenever you need.” Choose the best intended inference.",
    "answer": "(C) A friend in need is a friend indeed.",
    "steps": [
      "“Give me a ring” means “telephone me.” “Whenever you need” expresses willingness to help.",
      "The statement supports dependable friendship, not any claim about caller tunes, telephone quality or free calls."
    ],
    "solutionGuide": {
      "meaning": "Interpret “give me a ring” as an offer of availability and support.",
      "sections": [
        {
          "title": "Interpret the idiom",
          "blocks": [
            {
              "text": "“Give me a ring” means “telephone me.” “Whenever you need” expresses willingness to help."
            }
          ]
        },
        {
          "title": "Compare the options",
          "blocks": [
            {
              "text": "The statement supports dependable friendship, not any claim about caller tunes, telephone quality or free calls."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "The speaker has a nice caller tune.",
        "The speaker has a better telephone facility.",
        "A friend in need is a friend indeed.",
        "The listener need not pay telephone bills."
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 57,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-61",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "apt",
    "number": 61,
    "ref": "GATE 2013 · Booklet D · Q61",
    "file": "EC2013.pdf",
    "page": 75,
    "prompt": "Under the exam’s equally likely starting-weekday model, what is the probability that a leap year contains 53 Saturdays?",
    "answer": "(A) 2/7",
    "steps": [
      "366=52×7+2. Every weekday occurs 52 times; the year’s first two weekdays occur once more.",
      "Saturday occurs 53 times when January 1 is Friday or Saturday. These are two of seven assumed equally likely starting weekdays."
    ],
    "solutionGuide": {
      "meaning": "A leap year contains 52 complete weeks and two extra consecutive weekdays.",
      "sections": [
        {
          "title": "Count the extra days",
          "blocks": [
            {
              "text": "366=52×7+2. Every weekday occurs 52 times; the year’s first two weekdays occur once more."
            },
            {
              "equation": "366=52×7+2"
            }
          ]
        },
        {
          "title": "Count favorable starts",
          "blocks": [
            {
              "text": "Saturday occurs 53 times when January 1 is Friday or Saturday. These are two of seven assumed equally likely starting weekdays."
            },
            {
              "equation": "P=frac{2}{7}"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "2/7",
        "3/7",
        "1/7",
        "5/7"
      ]
    },
    "archivedKey": "A",
    "canonicalQuestionNumber": 65,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ],
    "reviewNote": "The standard exam model assumes uniformly distributed starting weekdays. Gregorian leap years over a full 400-year calendar cycle do not have exactly uniform starting weekdays."
  },
  {
    "id": "g13d-62",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "apt",
    "number": 62,
    "ref": "GATE 2013 · Booklet D · Q62",
    "file": "EC2013.pdf",
    "page": 75,
    "prompt": "Different streams of the freedom movement in colonial India included moderates, liberals, radicals and socialists. What is the best inference?",
    "answer": "(D) Nationalism was heterogeneous.",
    "steps": [
      "The statement explicitly describes several different political approaches and ideological groups.",
      "“Heterogeneous” means composed of different kinds. It directly captures the diversity stated, without adding a new historical cause or outcome."
    ],
    "solutionGuide": {
      "meaning": "Infer diversity directly from the listed ideological streams.",
      "sections": [
        {
          "title": "Identify the evidence",
          "blocks": [
            {
              "text": "The statement explicitly describes several different political approaches and ideological groups."
            }
          ]
        },
        {
          "title": "Draw the supported inference",
          "blocks": [
            {
              "text": "“Heterogeneous” means composed of different kinds. It directly captures the diversity stated, without adding a new historical cause or outcome."
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "Nationalism led to independence.",
        "Nationalism emerged in colonialism.",
        "Nationalism was homogeneous.",
        "Nationalism was heterogeneous."
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 63,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-63",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "math",
    "number": 63,
    "ref": "GATE 2013 · Booklet D · Q63",
    "file": "EC2013.pdf",
    "page": 76,
    "prompt": "For what p do the roots of 3x²+2x+p(p−1)=0 have opposite signs?",
    "answer": "(B) 0<p<1",
    "steps": [
      "The root product is p(p−1)/3. Opposite signs require this product to be negative.",
      "The upward-opening product p(p−1) is negative between 0 and 1. Endpoints give a zero root and are excluded."
    ],
    "solutionGuide": {
      "meaning": "Use the product of roots; a negative product also guarantees two real roots here.",
      "sections": [
        {
          "title": "Apply Vieta’s formula",
          "blocks": [
            {
              "text": "The root product is p(p−1)/3. Opposite signs require this product to be negative."
            },
            {
              "equation": "frac{p(p−1)}{3}<0"
            }
          ]
        },
        {
          "title": "Solve the inequality",
          "blocks": [
            {
              "text": "The upward-opening product p(p−1) is negative between 0 and 1. Endpoints give a zero root and are excluded."
            },
            {
              "equation": "0<p<1"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "p<0",
        "0<p<1",
        "p>1",
        "p>0"
      ]
    },
    "archivedKey": "B",
    "canonicalQuestionNumber": 64,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-64",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "apt",
    "number": 64,
    "ref": "GATE 2013 · Booklet D · Q64",
    "file": "EC2013.pdf",
    "page": 76,
    "prompt": "A car travels 8 km, 6 km and 16 km in three successive quarters of an hour. Find its average speed.",
    "answer": "(C) 40 km/h",
    "steps": [
      "The total distance is 30 km. Three quarter-hours equal 0.75 hour.",
      "Average speed is total distance divided by total time, not a distance-weighted average of segment speeds."
    ],
    "solutionGuide": {
      "meaning": "Divide total distance by total elapsed time.",
      "sections": [
        {
          "title": "Add distance and time",
          "blocks": [
            {
              "text": "The total distance is 30 km. Three quarter-hours equal 0.75 hour."
            },
            {
              "equation": "d=8+6+16=30 km;t=frac{3}{4} h"
            }
          ]
        },
        {
          "title": "Compute the average",
          "blocks": [
            {
              "text": "Average speed is total distance divided by total time, not a distance-weighted average of segment speeds."
            },
            {
              "equation": "v_{avg}=frac{30}{3/4}=40 km/h"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "30 km/h",
        "36 km/h",
        "40 km/h",
        "24 km/h"
      ]
    },
    "archivedKey": "C",
    "canonicalQuestionNumber": 61,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  },
  {
    "id": "g13d-65",
    "paperId": "gate-2013-4",
    "exam": "gate",
    "topic": "math",
    "number": 65,
    "ref": "GATE 2013 · Booklet D · Q65",
    "file": "EC2013.pdf",
    "page": 76,
    "prompt": "Find the sum of n terms of 10+84+734+… .",
    "answer": "(D) (9/8)(9ⁿ−1)+n²",
    "steps": [
      "The terms are 9+1, 81+3, 729+5, so the kth term is 9ᵏ+(2k−1).",
      "The geometric sum is 9(9ⁿ−1)/8, while the first n odd numbers sum to n²."
    ],
    "solutionGuide": {
      "meaning": "Identify the geometric component and the consecutive odd-number correction.",
      "sections": [
        {
          "title": "Recognize each term",
          "blocks": [
            {
              "text": "The terms are 9+1, 81+3, 729+5, so the kth term is 9ᵏ+(2k−1)."
            },
            {
              "equation": "a_k=9^k+2k−1"
            }
          ]
        },
        {
          "title": "Sum the two parts",
          "blocks": [
            {
              "text": "The geometric sum is 9(9ⁿ−1)/8, while the first n odd numbers sum to n²."
            },
            {
              "equation": "S_n=frac{9(9^n−1)}{8}+n^2"
            }
          ]
        }
      ]
    },
    "response": {
      "type": "MCQ",
      "choices": [
        "(9/10)(9ⁿ+1)",
        "(9/8)(9ⁿ−1)",
        "(9/8)(9ⁿ+n)",
        "(9/8)(9ⁿ−1)+n²"
      ]
    },
    "archivedKey": "D",
    "canonicalQuestionNumber": 62,
    "sources": [
      "https://cdn-images.prepp.in/public/image/GATE_2013_Exam_Answer_Key_EC_Electronics_and_Communication_701f1b49a274307592c41177f630b7e8.pdf"
    ]
  }
];
