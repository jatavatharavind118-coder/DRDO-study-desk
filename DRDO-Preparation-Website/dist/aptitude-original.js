// 200 original GATE-style aptitude MCQs; reproducible numerical variants and authored verbal questions.
export const aptitudeOriginal = [
  {
    "id": "apt-original-gate-apt-combined-work-7",
    "topic": "apt",
    "prompt": "A completes a job in 11 days and B in 15 days at constant rates. They start together and work without interference. In how many days is the job complete?",
    "choices": [
      "6.3462 days",
      "26 days",
      "13 days",
      "41.25 days"
    ],
    "key": 0,
    "why": "Principle: Independent work rates add. A completion time must be converted into a fraction of the job completed per unit time before combining workers.\n\nStep 1: A completes 1/11 of the job per day and B completes 1/15.\n\nStep 2: Their combined rate is (11+15)/(11×15) jobs/day.\n\nStep 3: Time is the reciprocal, 11×15/(11+15)=6.3462 days.\n\nAnswer: 6.3462 days.\n\nCheck and interpretation: The combined time is less than 11 days, the faster individual time. Averaging the completion times would fail this basic check.",
    "family": "combined-work",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-equal-distance-speed-7",
    "topic": "apt",
    "prompt": "A traveller covers 55 km at 44 km/h and the next 55 km at 64 km/h. Ignoring stops, what is the overall average speed in km/h?",
    "choices": [
      "54 km/h",
      "53.066 km/h",
      "26.0741 km/h",
      "52.1481 km/h"
    ],
    "key": 3,
    "why": "Principle: Average speed is total distance divided by total time. Equal distances at different speeds lead to a harmonic mean, not an arithmetic mean.\n\nStep 1: Total distance is 110 km.\n\nStep 2: Travel time is 55/44+55/64 h.\n\nStep 3: Divide distance by time: vavg=2v₁v₂/(v₁+v₂)=52.1481 km/h.\n\nAnswer: 52.1481 km/h.\n\nCheck and interpretation: More time is spent on the slower segment, so the average is below the arithmetic mean of the two speeds. The common segment distance cancels.",
    "family": "equal-distance-speed",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-markup-discount-7",
    "topic": "apt",
    "prompt": "An item is marked 34% above its cost price and then sold at a 12% discount on marked price. What is the net profit percentage relative to cost?",
    "choices": [
      "22 %",
      "46 %",
      "17.92 %",
      "8.96 %"
    ],
    "key": 2,
    "why": "Principle: Markup is based on cost while discount is based on marked price. Successive percentage operations multiply their scale factors.\n\nStep 1: Take cost as 100 units. Marked price is 100×(1+34/100)=134.\n\nStep 2: Selling price is 134×(1−12/100)=117.92.\n\nStep 3: Profit percentage on cost is selling price minus 100, namely 17.92%.\n\nAnswer: 17.92 %.\n\nCheck and interpretation: Simply subtracting discount percentage from markup percentage ignores their different bases. The multiplicative calculation also works when the net result is a loss.",
    "family": "markup-discount",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-committee-selection-7",
    "topic": "apt",
    "prompt": "A committee of 3 people is selected uniformly from 15 candidates, including two named candidates A and B. What is the probability both A and B are selected?",
    "choices": [
      "0.2",
      "0.04",
      "0.0286",
      "0.1429"
    ],
    "key": 2,
    "why": "Principle: Committee selection is without replacement. Count committees that contain both named people and divide by the count of all equally likely committees.\n\nStep 1: All committees number C(15,3).\n\nStep 2: With A and B already included, choose the remaining 1 members from 13, giving C(13,1).\n\nStep 3: Their ratio simplifies to r(r−1)/[n(n−1)]=3×2/(15×14)=0.0286.\n\nAnswer: 0.0286.\n\nCheck and interpretation: Multiplying r/n by itself incorrectly treats the two inclusion events as independent. The second inclusion probability changes after the first is fixed.",
    "family": "committee-selection",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-pipes-drain-7",
    "topic": "apt",
    "prompt": "An inlet fills an empty tank in 9 hours. A drain empties a full tank in 19 hours. Both are opened together when the tank is empty, with constant flow rates. How long until it fills?",
    "choices": [
      "6.1071 hours",
      "19 hours",
      "17.1 hours",
      "10 hours"
    ],
    "key": 2,
    "why": "Principle: The inlet contributes a positive fill rate and the drain a negative fill rate. Net filling time is the reciprocal of their rate difference.\n\nStep 1: The inlet rate is 1/9 tank/h and drain rate is 1/19 tank/h.\n\nStep 2: Net rate is 1/9−1/19=10/[9×19] tank/h.\n\nStep 3: Thus filling time is 9×19/10=17.1 hours.\n\nAnswer: 17.1 hours.\n\nCheck and interpretation: The drain makes filling slower than the inlet alone, so the answer must exceed the inlet’s filling time. Adding rates would describe two inlets.",
    "family": "pipes-drain",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-updated-average-7",
    "topic": "apt",
    "prompt": "The average of 11 observations is 27. One observation equal to 17 is removed. What is the mean of the remaining observations?",
    "choices": [
      "22",
      "25.4545",
      "28",
      "14"
    ],
    "key": 2,
    "why": "Principle: Recover the original total from mean times count, subtract the removed observation, then divide by the new count.\n\nStep 1: The original sum is 11×27=297.\n\nStep 2: After removing 17, the sum becomes 280 and the count becomes 10.\n\nStep 3: The new mean is 280/10=28.\n\nAnswer: 28.\n\nCheck and interpretation: The removed value lies below the original mean, so removing it raises the mean. Dividing by the original count would miss the count change.",
    "family": "updated-average",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-compound-growth-7",
    "topic": "apt",
    "prompt": "A population grows at 5.5% per year compounded annually for two years. What is the total percentage increase over its initial value?",
    "choices": [
      "11 %",
      "30.25 %",
      "11.3025 %",
      "5.6512 %"
    ],
    "key": 2,
    "why": "Principle: Annual compounding applies each year’s growth to the previous year’s enlarged population. The two-year growth factor is (1+r)².\n\nStep 1: Convert the annual percentage to rate r=5.5/100.\n\nStep 2: After two years, final/initial=(1+5.5/100)².\n\nStep 3: Subtract one and multiply by 100 to obtain total growth 11.3025%.\n\nAnswer: 11.3025 %.\n\nCheck and interpretation: The result exceeds the simple two-year increase 11% because the first year’s increase also grows in the second year.",
    "family": "compound-growth",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-arithmetic-sum-7",
    "topic": "apt",
    "prompt": "A production schedule makes 9 units on day 1 and increases output by 8 units each successive day. How many units are made over the first 17 days?",
    "choices": [
      "2329 units",
      "1241 units",
      "289 units",
      "1377 units"
    ],
    "key": 1,
    "why": "Principle: Daily outputs form an arithmetic progression. Its total is the number of terms times the average of the first and last terms.\n\nStep 1: First output a=9; common difference d=8.\n\nStep 2: Day-17 output is a+(n−1)d=9+16×8=137.\n\nStep 3: Total is n[2a+(n−1)d]/2=17×[9+137]/2=1241 units.\n\nAnswer: 1241 units.\n\nCheck and interpretation: There are n−1 increases between the first and nth days. Using n increases would shift every endpoint calculation by one day.",
    "family": "arithmetic-sum",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-without-replacement-7",
    "topic": "apt",
    "prompt": "A box contains 12 working and 10 defective components. Two are drawn randomly without replacement. What is the probability that both work?",
    "choices": [
      "0.2975",
      "0.5455",
      "0.2857",
      "0.7143"
    ],
    "key": 2,
    "why": "Principle: Without replacement, the second draw’s probabilities depend on the first draw. Use the multiplication rule with a conditional probability.\n\nStep 1: The first component works with probability 12/22.\n\nStep 2: If it works, 11 working components remain among 21 total.\n\nStep 3: Multiply: P(both work)=(12/22)×(11/21)=0.2857.\n\nAnswer: 0.2857.\n\nCheck and interpretation: Squaring the first-draw probability would apply to replacement or independent draws. Here taking out a working component slightly lowers the next success probability.",
    "family": "without-replacement",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-combined-work-8",
    "topic": "apt",
    "prompt": "A completes a job in 12 days and B in 16 days at constant rates. They start together and work without interference. In how many days is the job complete?",
    "choices": [
      "28 days",
      "6.8571 days",
      "14 days",
      "48 days"
    ],
    "key": 1,
    "why": "Principle: Independent work rates add. A completion time must be converted into a fraction of the job completed per unit time before combining workers.\n\nStep 1: A completes 1/12 of the job per day and B completes 1/16.\n\nStep 2: Their combined rate is (12+16)/(12×16) jobs/day.\n\nStep 3: Time is the reciprocal, 12×16/(12+16)=6.8571 days.\n\nAnswer: 6.8571 days.\n\nCheck and interpretation: The combined time is less than 12 days, the faster individual time. Averaging the completion times would fail this basic check.",
    "family": "combined-work",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-equal-distance-speed-8",
    "topic": "apt",
    "prompt": "A traveller covers 60 km at 46 km/h and the next 60 km at 66 km/h. Ignoring stops, what is the overall average speed in km/h?",
    "choices": [
      "54.2143 km/h",
      "56 km/h",
      "55.0999 km/h",
      "27.1071 km/h"
    ],
    "key": 0,
    "why": "Principle: Average speed is total distance divided by total time. Equal distances at different speeds lead to a harmonic mean, not an arithmetic mean.\n\nStep 1: Total distance is 120 km.\n\nStep 2: Travel time is 60/46+60/66 h.\n\nStep 3: Divide distance by time: vavg=2v₁v₂/(v₁+v₂)=54.2143 km/h.\n\nAnswer: 54.2143 km/h.\n\nCheck and interpretation: More time is spent on the slower segment, so the average is below the arithmetic mean of the two speeds. The common segment distance cancels.",
    "family": "equal-distance-speed",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-markup-discount-8",
    "topic": "apt",
    "prompt": "An item is marked 36% above its cost price and then sold at a 13% discount on marked price. What is the net profit percentage relative to cost?",
    "choices": [
      "23 %",
      "49 %",
      "9.16 %",
      "18.32 %"
    ],
    "key": 3,
    "why": "Principle: Markup is based on cost while discount is based on marked price. Successive percentage operations multiply their scale factors.\n\nStep 1: Take cost as 100 units. Marked price is 100×(1+36/100)=136.\n\nStep 2: Selling price is 136×(1−13/100)=118.32.\n\nStep 3: Profit percentage on cost is selling price minus 100, namely 18.32%.\n\nAnswer: 18.32 %.\n\nCheck and interpretation: Simply subtracting discount percentage from markup percentage ignores their different bases. The multiplicative calculation also works when the net result is a loss.",
    "family": "markup-discount",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-committee-selection-8",
    "topic": "apt",
    "prompt": "A committee of 4 people is selected uniformly from 16 candidates, including two named candidates A and B. What is the probability both A and B are selected?",
    "choices": [
      "0.25",
      "0.0625",
      "0.2",
      "0.05"
    ],
    "key": 3,
    "why": "Principle: Committee selection is without replacement. Count committees that contain both named people and divide by the count of all equally likely committees.\n\nStep 1: All committees number C(16,4).\n\nStep 2: With A and B already included, choose the remaining 2 members from 14, giving C(14,2).\n\nStep 3: Their ratio simplifies to r(r−1)/[n(n−1)]=4×3/(16×15)=0.05.\n\nAnswer: 0.05.\n\nCheck and interpretation: Multiplying r/n by itself incorrectly treats the two inclusion events as independent. The second inclusion probability changes after the first is fixed.",
    "family": "committee-selection",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-pipes-drain-8",
    "topic": "apt",
    "prompt": "An inlet fills an empty tank in 10 hours. A drain empties a full tank in 21 hours. Both are opened together when the tank is empty, with constant flow rates. How long until it fills?",
    "choices": [
      "6.7742 hours",
      "21 hours",
      "11 hours",
      "19.0909 hours"
    ],
    "key": 3,
    "why": "Principle: The inlet contributes a positive fill rate and the drain a negative fill rate. Net filling time is the reciprocal of their rate difference.\n\nStep 1: The inlet rate is 1/10 tank/h and drain rate is 1/21 tank/h.\n\nStep 2: Net rate is 1/10−1/21=11/[10×21] tank/h.\n\nStep 3: Thus filling time is 10×21/11=19.0909 hours.\n\nAnswer: 19.0909 hours.\n\nCheck and interpretation: The drain makes filling slower than the inlet alone, so the answer must exceed the inlet’s filling time. Adding rates would describe two inlets.",
    "family": "pipes-drain",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-updated-average-8",
    "topic": "apt",
    "prompt": "The average of 12 observations is 28. One observation equal to 18 is removed. What is the mean of the remaining observations?",
    "choices": [
      "23",
      "26.5",
      "14.4545",
      "28.9091"
    ],
    "key": 3,
    "why": "Principle: Recover the original total from mean times count, subtract the removed observation, then divide by the new count.\n\nStep 1: The original sum is 12×28=336.\n\nStep 2: After removing 18, the sum becomes 318 and the count becomes 11.\n\nStep 3: The new mean is 318/11=28.9091.\n\nAnswer: 28.9091.\n\nCheck and interpretation: The removed value lies below the original mean, so removing it raises the mean. Dividing by the original count would miss the count change.",
    "family": "updated-average",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-compound-growth-8",
    "topic": "apt",
    "prompt": "A population grows at 6% per year compounded annually for two years. What is the total percentage increase over its initial value?",
    "choices": [
      "12 %",
      "36 %",
      "6.18 %",
      "12.36 %"
    ],
    "key": 3,
    "why": "Principle: Annual compounding applies each year’s growth to the previous year’s enlarged population. The two-year growth factor is (1+r)².\n\nStep 1: Convert the annual percentage to rate r=6/100.\n\nStep 2: After two years, final/initial=(1+6/100)².\n\nStep 3: Subtract one and multiply by 100 to obtain total growth 12.36%.\n\nAnswer: 12.36 %.\n\nCheck and interpretation: The result exceeds the simple two-year increase 12% because the first year’s increase also grows in the second year.",
    "family": "compound-growth",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-arithmetic-sum-8",
    "topic": "apt",
    "prompt": "A production schedule makes 10 units on day 1 and increases output by 9 units each successive day. How many units are made over the first 18 days?",
    "choices": [
      "2934 units",
      "342 units",
      "1557 units",
      "1719 units"
    ],
    "key": 2,
    "why": "Principle: Daily outputs form an arithmetic progression. Its total is the number of terms times the average of the first and last terms.\n\nStep 1: First output a=10; common difference d=9.\n\nStep 2: Day-18 output is a+(n−1)d=10+17×9=163.\n\nStep 3: Total is n[2a+(n−1)d]/2=18×[10+163]/2=1557 units.\n\nAnswer: 1557 units.\n\nCheck and interpretation: There are n−1 increases between the first and nth days. Using n increases would shift every endpoint calculation by one day.",
    "family": "arithmetic-sum",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-without-replacement-8",
    "topic": "apt",
    "prompt": "A box contains 13 working and 11 defective components. Two are drawn randomly without replacement. What is the probability that both work?",
    "choices": [
      "0.2934",
      "0.5417",
      "0.7174",
      "0.2826"
    ],
    "key": 3,
    "why": "Principle: Without replacement, the second draw’s probabilities depend on the first draw. Use the multiplication rule with a conditional probability.\n\nStep 1: The first component works with probability 13/24.\n\nStep 2: If it works, 12 working components remain among 23 total.\n\nStep 3: Multiply: P(both work)=(13/24)×(12/23)=0.2826.\n\nAnswer: 0.2826.\n\nCheck and interpretation: Squaring the first-draw probability would apply to replacement or independent draws. Here taking out a working component slightly lowers the next success probability.",
    "family": "without-replacement",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-combined-work-9",
    "topic": "apt",
    "prompt": "A completes a job in 13 days and B in 17 days at constant rates. They start together and work without interference. In how many days is the job complete?",
    "choices": [
      "30 days",
      "15 days",
      "7.3667 days",
      "55.25 days"
    ],
    "key": 2,
    "why": "Principle: Independent work rates add. A completion time must be converted into a fraction of the job completed per unit time before combining workers.\n\nStep 1: A completes 1/13 of the job per day and B completes 1/17.\n\nStep 2: Their combined rate is (13+17)/(13×17) jobs/day.\n\nStep 3: Time is the reciprocal, 13×17/(13+17)=7.3667 days.\n\nAnswer: 7.3667 days.\n\nCheck and interpretation: The combined time is less than 13 days, the faster individual time. Averaging the completion times would fail this basic check.",
    "family": "combined-work",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-equal-distance-speed-9",
    "topic": "apt",
    "prompt": "A traveller covers 65 km at 48 km/h and the next 65 km at 68 km/h. Ignoring stops, what is the overall average speed in km/h?",
    "choices": [
      "58 km/h",
      "56.2759 km/h",
      "57.1314 km/h",
      "28.1379 km/h"
    ],
    "key": 1,
    "why": "Principle: Average speed is total distance divided by total time. Equal distances at different speeds lead to a harmonic mean, not an arithmetic mean.\n\nStep 1: Total distance is 130 km.\n\nStep 2: Travel time is 65/48+65/68 h.\n\nStep 3: Divide distance by time: vavg=2v₁v₂/(v₁+v₂)=56.2759 km/h.\n\nAnswer: 56.2759 km/h.\n\nCheck and interpretation: More time is spent on the slower segment, so the average is below the arithmetic mean of the two speeds. The common segment distance cancels.",
    "family": "equal-distance-speed",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-markup-discount-9",
    "topic": "apt",
    "prompt": "An item is marked 38% above its cost price and then sold at a 14% discount on marked price. What is the net profit percentage relative to cost?",
    "choices": [
      "18.68 %",
      "24 %",
      "52 %",
      "9.34 %"
    ],
    "key": 0,
    "why": "Principle: Markup is based on cost while discount is based on marked price. Successive percentage operations multiply their scale factors.\n\nStep 1: Take cost as 100 units. Marked price is 100×(1+38/100)=138.\n\nStep 2: Selling price is 138×(1−14/100)=118.68.\n\nStep 3: Profit percentage on cost is selling price minus 100, namely 18.68%.\n\nAnswer: 18.68 %.\n\nCheck and interpretation: Simply subtracting discount percentage from markup percentage ignores their different bases. The multiplicative calculation also works when the net result is a loss.",
    "family": "markup-discount",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-committee-selection-9",
    "topic": "apt",
    "prompt": "A committee of 2 people is selected uniformly from 17 candidates, including two named candidates A and B. What is the probability both A and B are selected?",
    "choices": [
      "0.0074",
      "0.1176",
      "0.0138",
      "0.0625"
    ],
    "key": 0,
    "why": "Principle: Committee selection is without replacement. Count committees that contain both named people and divide by the count of all equally likely committees.\n\nStep 1: All committees number C(17,2).\n\nStep 2: With A and B already included, choose the remaining 0 members from 15, giving C(15,0).\n\nStep 3: Their ratio simplifies to r(r−1)/[n(n−1)]=2×1/(17×16)=0.0074.\n\nAnswer: 0.0074.\n\nCheck and interpretation: Multiplying r/n by itself incorrectly treats the two inclusion events as independent. The second inclusion probability changes after the first is fixed.",
    "family": "committee-selection",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-pipes-drain-9",
    "topic": "apt",
    "prompt": "An inlet fills an empty tank in 11 hours. A drain empties a full tank in 23 hours. Both are opened together when the tank is empty, with constant flow rates. How long until it fills?",
    "choices": [
      "21.0833 hours",
      "7.4412 hours",
      "23 hours",
      "12 hours"
    ],
    "key": 0,
    "why": "Principle: The inlet contributes a positive fill rate and the drain a negative fill rate. Net filling time is the reciprocal of their rate difference.\n\nStep 1: The inlet rate is 1/11 tank/h and drain rate is 1/23 tank/h.\n\nStep 2: Net rate is 1/11−1/23=12/[11×23] tank/h.\n\nStep 3: Thus filling time is 11×23/12=21.0833 hours.\n\nAnswer: 21.0833 hours.\n\nCheck and interpretation: The drain makes filling slower than the inlet alone, so the answer must exceed the inlet’s filling time. Adding rates would describe two inlets.",
    "family": "pipes-drain",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-updated-average-9",
    "topic": "apt",
    "prompt": "The average of 13 observations is 29. One observation equal to 19 is removed. What is the mean of the remaining observations?",
    "choices": [
      "29.8333",
      "24",
      "27.5385",
      "14.9167"
    ],
    "key": 0,
    "why": "Principle: Recover the original total from mean times count, subtract the removed observation, then divide by the new count.\n\nStep 1: The original sum is 13×29=377.\n\nStep 2: After removing 19, the sum becomes 358 and the count becomes 12.\n\nStep 3: The new mean is 358/12=29.8333.\n\nAnswer: 29.8333.\n\nCheck and interpretation: The removed value lies below the original mean, so removing it raises the mean. Dividing by the original count would miss the count change.",
    "family": "updated-average",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-compound-growth-9",
    "topic": "apt",
    "prompt": "A population grows at 6.5% per year compounded annually for two years. What is the total percentage increase over its initial value?",
    "choices": [
      "13.4225 %",
      "13 %",
      "42.25 %",
      "6.7112 %"
    ],
    "key": 0,
    "why": "Principle: Annual compounding applies each year’s growth to the previous year’s enlarged population. The two-year growth factor is (1+r)².\n\nStep 1: Convert the annual percentage to rate r=6.5/100.\n\nStep 2: After two years, final/initial=(1+6.5/100)².\n\nStep 3: Subtract one and multiply by 100 to obtain total growth 13.4225%.\n\nAnswer: 13.4225 %.\n\nCheck and interpretation: The result exceeds the simple two-year increase 13% because the first year’s increase also grows in the second year.",
    "family": "compound-growth",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-arithmetic-sum-9",
    "topic": "apt",
    "prompt": "A production schedule makes 11 units on day 1 and increases output by 10 units each successive day. How many units are made over the first 19 days?",
    "choices": [
      "3629 units",
      "399 units",
      "2109 units",
      "1919 units"
    ],
    "key": 3,
    "why": "Principle: Daily outputs form an arithmetic progression. Its total is the number of terms times the average of the first and last terms.\n\nStep 1: First output a=11; common difference d=10.\n\nStep 2: Day-19 output is a+(n−1)d=11+18×10=191.\n\nStep 3: Total is n[2a+(n−1)d]/2=19×[11+191]/2=1919 units.\n\nAnswer: 1919 units.\n\nCheck and interpretation: There are n−1 increases between the first and nth days. Using n increases would shift every endpoint calculation by one day.",
    "family": "arithmetic-sum",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-without-replacement-9",
    "topic": "apt",
    "prompt": "A box contains 14 working and 12 defective components. Two are drawn randomly without replacement. What is the probability that both work?",
    "choices": [
      "0.28",
      "0.2899",
      "0.5385",
      "0.72"
    ],
    "key": 0,
    "why": "Principle: Without replacement, the second draw’s probabilities depend on the first draw. Use the multiplication rule with a conditional probability.\n\nStep 1: The first component works with probability 14/26.\n\nStep 2: If it works, 13 working components remain among 25 total.\n\nStep 3: Multiply: P(both work)=(14/26)×(13/25)=0.28.\n\nAnswer: 0.28.\n\nCheck and interpretation: Squaring the first-draw probability would apply to replacement or independent draws. Here taking out a working component slightly lowers the next success probability.",
    "family": "without-replacement",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-combined-work-10",
    "topic": "apt",
    "prompt": "A completes a job in 14 days and B in 18 days at constant rates. They start together and work without interference. In how many days is the job complete?",
    "choices": [
      "32 days",
      "16 days",
      "63 days",
      "7.875 days"
    ],
    "key": 3,
    "why": "Principle: Independent work rates add. A completion time must be converted into a fraction of the job completed per unit time before combining workers.\n\nStep 1: A completes 1/14 of the job per day and B completes 1/18.\n\nStep 2: Their combined rate is (14+18)/(14×18) jobs/day.\n\nStep 3: Time is the reciprocal, 14×18/(14+18)=7.875 days.\n\nAnswer: 7.875 days.\n\nCheck and interpretation: The combined time is less than 14 days, the faster individual time. Averaging the completion times would fail this basic check.",
    "family": "combined-work",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-equal-distance-speed-10",
    "topic": "apt",
    "prompt": "A traveller covers 70 km at 50 km/h and the next 70 km at 70 km/h. Ignoring stops, what is the overall average speed in km/h?",
    "choices": [
      "60 km/h",
      "59.1608 km/h",
      "58.3333 km/h",
      "29.1667 km/h"
    ],
    "key": 2,
    "why": "Principle: Average speed is total distance divided by total time. Equal distances at different speeds lead to a harmonic mean, not an arithmetic mean.\n\nStep 1: Total distance is 140 km.\n\nStep 2: Travel time is 70/50+70/70 h.\n\nStep 3: Divide distance by time: vavg=2v₁v₂/(v₁+v₂)=58.3333 km/h.\n\nAnswer: 58.3333 km/h.\n\nCheck and interpretation: More time is spent on the slower segment, so the average is below the arithmetic mean of the two speeds. The common segment distance cancels.",
    "family": "equal-distance-speed",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-markup-discount-10",
    "topic": "apt",
    "prompt": "An item is marked 40% above its cost price and then sold at a 15% discount on marked price. What is the net profit percentage relative to cost?",
    "choices": [
      "25 %",
      "19 %",
      "55 %",
      "9.5 %"
    ],
    "key": 1,
    "why": "Principle: Markup is based on cost while discount is based on marked price. Successive percentage operations multiply their scale factors.\n\nStep 1: Take cost as 100 units. Marked price is 100×(1+40/100)=140.\n\nStep 2: Selling price is 140×(1−15/100)=119.\n\nStep 3: Profit percentage on cost is selling price minus 100, namely 19%.\n\nAnswer: 19 %.\n\nCheck and interpretation: Simply subtracting discount percentage from markup percentage ignores their different bases. The multiplicative calculation also works when the net result is a loss.",
    "family": "markup-discount",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-committee-selection-10",
    "topic": "apt",
    "prompt": "A committee of 3 people is selected uniformly from 18 candidates, including two named candidates A and B. What is the probability both A and B are selected?",
    "choices": [
      "0.1667",
      "0.0196",
      "0.0278",
      "0.1176"
    ],
    "key": 1,
    "why": "Principle: Committee selection is without replacement. Count committees that contain both named people and divide by the count of all equally likely committees.\n\nStep 1: All committees number C(18,3).\n\nStep 2: With A and B already included, choose the remaining 1 members from 16, giving C(16,1).\n\nStep 3: Their ratio simplifies to r(r−1)/[n(n−1)]=3×2/(18×17)=0.0196.\n\nAnswer: 0.0196.\n\nCheck and interpretation: Multiplying r/n by itself incorrectly treats the two inclusion events as independent. The second inclusion probability changes after the first is fixed.",
    "family": "committee-selection",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-pipes-drain-10",
    "topic": "apt",
    "prompt": "An inlet fills an empty tank in 12 hours. A drain empties a full tank in 25 hours. Both are opened together when the tank is empty, with constant flow rates. How long until it fills?",
    "choices": [
      "8.1081 hours",
      "23.0769 hours",
      "25 hours",
      "13 hours"
    ],
    "key": 1,
    "why": "Principle: The inlet contributes a positive fill rate and the drain a negative fill rate. Net filling time is the reciprocal of their rate difference.\n\nStep 1: The inlet rate is 1/12 tank/h and drain rate is 1/25 tank/h.\n\nStep 2: Net rate is 1/12−1/25=13/[12×25] tank/h.\n\nStep 3: Thus filling time is 12×25/13=23.0769 hours.\n\nAnswer: 23.0769 hours.\n\nCheck and interpretation: The drain makes filling slower than the inlet alone, so the answer must exceed the inlet’s filling time. Adding rates would describe two inlets.",
    "family": "pipes-drain",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-updated-average-10",
    "topic": "apt",
    "prompt": "The average of 14 observations is 30. One observation equal to 20 is removed. What is the mean of the remaining observations?",
    "choices": [
      "25",
      "30.7692",
      "28.5714",
      "15.3846"
    ],
    "key": 1,
    "why": "Principle: Recover the original total from mean times count, subtract the removed observation, then divide by the new count.\n\nStep 1: The original sum is 14×30=420.\n\nStep 2: After removing 20, the sum becomes 400 and the count becomes 13.\n\nStep 3: The new mean is 400/13=30.7692.\n\nAnswer: 30.7692.\n\nCheck and interpretation: The removed value lies below the original mean, so removing it raises the mean. Dividing by the original count would miss the count change.",
    "family": "updated-average",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-compound-growth-10",
    "topic": "apt",
    "prompt": "A population grows at 7% per year compounded annually for two years. What is the total percentage increase over its initial value?",
    "choices": [
      "14 %",
      "14.49 %",
      "49 %",
      "7.245 %"
    ],
    "key": 1,
    "why": "Principle: Annual compounding applies each year’s growth to the previous year’s enlarged population. The two-year growth factor is (1+r)².\n\nStep 1: Convert the annual percentage to rate r=7/100.\n\nStep 2: After two years, final/initial=(1+7/100)².\n\nStep 3: Subtract one and multiply by 100 to obtain total growth 14.49%.\n\nAnswer: 14.49 %.\n\nCheck and interpretation: The result exceeds the simple two-year increase 14% because the first year’s increase also grows in the second year.",
    "family": "compound-growth",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-arithmetic-sum-10",
    "topic": "apt",
    "prompt": "A production schedule makes 12 units on day 1 and increases output by 11 units each successive day. How many units are made over the first 20 days?",
    "choices": [
      "2330 units",
      "4420 units",
      "460 units",
      "2550 units"
    ],
    "key": 0,
    "why": "Principle: Daily outputs form an arithmetic progression. Its total is the number of terms times the average of the first and last terms.\n\nStep 1: First output a=12; common difference d=11.\n\nStep 2: Day-20 output is a+(n−1)d=12+19×11=221.\n\nStep 3: Total is n[2a+(n−1)d]/2=20×[12+221]/2=2330 units.\n\nAnswer: 2330 units.\n\nCheck and interpretation: There are n−1 increases between the first and nth days. Using n increases would shift every endpoint calculation by one day.",
    "family": "arithmetic-sum",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-without-replacement-10",
    "topic": "apt",
    "prompt": "A box contains 15 working and 13 defective components. Two are drawn randomly without replacement. What is the probability that both work?",
    "choices": [
      "0.287",
      "0.2778",
      "0.5357",
      "0.7222"
    ],
    "key": 1,
    "why": "Principle: Without replacement, the second draw’s probabilities depend on the first draw. Use the multiplication rule with a conditional probability.\n\nStep 1: The first component works with probability 15/28.\n\nStep 2: If it works, 14 working components remain among 27 total.\n\nStep 3: Multiply: P(both work)=(15/28)×(14/27)=0.2778.\n\nAnswer: 0.2778.\n\nCheck and interpretation: Squaring the first-draw probability would apply to replacement or independent draws. Here taking out a working component slightly lowers the next success probability.",
    "family": "without-replacement",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-combined-work-11",
    "topic": "apt",
    "prompt": "A completes a job in 15 days and B in 19 days at constant rates. They start together and work without interference. In how many days is the job complete?",
    "choices": [
      "8.3824 days",
      "34 days",
      "17 days",
      "71.25 days"
    ],
    "key": 0,
    "why": "Principle: Independent work rates add. A completion time must be converted into a fraction of the job completed per unit time before combining workers.\n\nStep 1: A completes 1/15 of the job per day and B completes 1/19.\n\nStep 2: Their combined rate is (15+19)/(15×19) jobs/day.\n\nStep 3: Time is the reciprocal, 15×19/(15+19)=8.3824 days.\n\nAnswer: 8.3824 days.\n\nCheck and interpretation: The combined time is less than 15 days, the faster individual time. Averaging the completion times would fail this basic check.",
    "family": "combined-work",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-equal-distance-speed-11",
    "topic": "apt",
    "prompt": "A traveller covers 75 km at 52 km/h and the next 75 km at 72 km/h. Ignoring stops, what is the overall average speed in km/h?",
    "choices": [
      "62 km/h",
      "61.1882 km/h",
      "30.1935 km/h",
      "60.3871 km/h"
    ],
    "key": 3,
    "why": "Principle: Average speed is total distance divided by total time. Equal distances at different speeds lead to a harmonic mean, not an arithmetic mean.\n\nStep 1: Total distance is 150 km.\n\nStep 2: Travel time is 75/52+75/72 h.\n\nStep 3: Divide distance by time: vavg=2v₁v₂/(v₁+v₂)=60.3871 km/h.\n\nAnswer: 60.3871 km/h.\n\nCheck and interpretation: More time is spent on the slower segment, so the average is below the arithmetic mean of the two speeds. The common segment distance cancels.",
    "family": "equal-distance-speed",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-markup-discount-11",
    "topic": "apt",
    "prompt": "An item is marked 42% above its cost price and then sold at a 16% discount on marked price. What is the net profit percentage relative to cost?",
    "choices": [
      "26 %",
      "58 %",
      "19.28 %",
      "9.64 %"
    ],
    "key": 2,
    "why": "Principle: Markup is based on cost while discount is based on marked price. Successive percentage operations multiply their scale factors.\n\nStep 1: Take cost as 100 units. Marked price is 100×(1+42/100)=142.\n\nStep 2: Selling price is 142×(1−16/100)=119.28.\n\nStep 3: Profit percentage on cost is selling price minus 100, namely 19.28%.\n\nAnswer: 19.28 %.\n\nCheck and interpretation: Simply subtracting discount percentage from markup percentage ignores their different bases. The multiplicative calculation also works when the net result is a loss.",
    "family": "markup-discount",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-committee-selection-11",
    "topic": "apt",
    "prompt": "A committee of 4 people is selected uniformly from 19 candidates, including two named candidates A and B. What is the probability both A and B are selected?",
    "choices": [
      "0.2105",
      "0.0443",
      "0.0351",
      "0.1667"
    ],
    "key": 2,
    "why": "Principle: Committee selection is without replacement. Count committees that contain both named people and divide by the count of all equally likely committees.\n\nStep 1: All committees number C(19,4).\n\nStep 2: With A and B already included, choose the remaining 2 members from 17, giving C(17,2).\n\nStep 3: Their ratio simplifies to r(r−1)/[n(n−1)]=4×3/(19×18)=0.0351.\n\nAnswer: 0.0351.\n\nCheck and interpretation: Multiplying r/n by itself incorrectly treats the two inclusion events as independent. The second inclusion probability changes after the first is fixed.",
    "family": "committee-selection",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-pipes-drain-11",
    "topic": "apt",
    "prompt": "An inlet fills an empty tank in 13 hours. A drain empties a full tank in 27 hours. Both are opened together when the tank is empty, with constant flow rates. How long until it fills?",
    "choices": [
      "8.775 hours",
      "27 hours",
      "25.0714 hours",
      "14 hours"
    ],
    "key": 2,
    "why": "Principle: The inlet contributes a positive fill rate and the drain a negative fill rate. Net filling time is the reciprocal of their rate difference.\n\nStep 1: The inlet rate is 1/13 tank/h and drain rate is 1/27 tank/h.\n\nStep 2: Net rate is 1/13−1/27=14/[13×27] tank/h.\n\nStep 3: Thus filling time is 13×27/14=25.0714 hours.\n\nAnswer: 25.0714 hours.\n\nCheck and interpretation: The drain makes filling slower than the inlet alone, so the answer must exceed the inlet’s filling time. Adding rates would describe two inlets.",
    "family": "pipes-drain",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-updated-average-11",
    "topic": "apt",
    "prompt": "The average of 15 observations is 31. One observation equal to 21 is removed. What is the mean of the remaining observations?",
    "choices": [
      "26",
      "29.6",
      "31.7143",
      "15.8571"
    ],
    "key": 2,
    "why": "Principle: Recover the original total from mean times count, subtract the removed observation, then divide by the new count.\n\nStep 1: The original sum is 15×31=465.\n\nStep 2: After removing 21, the sum becomes 444 and the count becomes 14.\n\nStep 3: The new mean is 444/14=31.7143.\n\nAnswer: 31.7143.\n\nCheck and interpretation: The removed value lies below the original mean, so removing it raises the mean. Dividing by the original count would miss the count change.",
    "family": "updated-average",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-compound-growth-11",
    "topic": "apt",
    "prompt": "A population grows at 7.5% per year compounded annually for two years. What is the total percentage increase over its initial value?",
    "choices": [
      "15 %",
      "56.25 %",
      "15.5625 %",
      "7.7812 %"
    ],
    "key": 2,
    "why": "Principle: Annual compounding applies each year’s growth to the previous year’s enlarged population. The two-year growth factor is (1+r)².\n\nStep 1: Convert the annual percentage to rate r=7.5/100.\n\nStep 2: After two years, final/initial=(1+7.5/100)².\n\nStep 3: Subtract one and multiply by 100 to obtain total growth 15.5625%.\n\nAnswer: 15.5625 %.\n\nCheck and interpretation: The result exceeds the simple two-year increase 15% because the first year’s increase also grows in the second year.",
    "family": "compound-growth",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-arithmetic-sum-11",
    "topic": "apt",
    "prompt": "A production schedule makes 13 units on day 1 and increases output by 12 units each successive day. How many units are made over the first 21 days?",
    "choices": [
      "5313 units",
      "2793 units",
      "525 units",
      "3045 units"
    ],
    "key": 1,
    "why": "Principle: Daily outputs form an arithmetic progression. Its total is the number of terms times the average of the first and last terms.\n\nStep 1: First output a=13; common difference d=12.\n\nStep 2: Day-21 output is a+(n−1)d=13+20×12=253.\n\nStep 3: Total is n[2a+(n−1)d]/2=21×[13+253]/2=2793 units.\n\nAnswer: 2793 units.\n\nCheck and interpretation: There are n−1 increases between the first and nth days. Using n increases would shift every endpoint calculation by one day.",
    "family": "arithmetic-sum",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-without-replacement-11",
    "topic": "apt",
    "prompt": "A box contains 16 working and 14 defective components. Two are drawn randomly without replacement. What is the probability that both work?",
    "choices": [
      "0.2844",
      "0.5333",
      "0.2759",
      "0.7241"
    ],
    "key": 2,
    "why": "Principle: Without replacement, the second draw’s probabilities depend on the first draw. Use the multiplication rule with a conditional probability.\n\nStep 1: The first component works with probability 16/30.\n\nStep 2: If it works, 15 working components remain among 29 total.\n\nStep 3: Multiply: P(both work)=(16/30)×(15/29)=0.2759.\n\nAnswer: 0.2759.\n\nCheck and interpretation: Squaring the first-draw probability would apply to replacement or independent draws. Here taking out a working component slightly lowers the next success probability.",
    "family": "without-replacement",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-combined-work-12",
    "topic": "apt",
    "prompt": "A completes a job in 16 days and B in 20 days at constant rates. They start together and work without interference. In how many days is the job complete?",
    "choices": [
      "36 days",
      "8.8889 days",
      "18 days",
      "80 days"
    ],
    "key": 1,
    "why": "Principle: Independent work rates add. A completion time must be converted into a fraction of the job completed per unit time before combining workers.\n\nStep 1: A completes 1/16 of the job per day and B completes 1/20.\n\nStep 2: Their combined rate is (16+20)/(16×20) jobs/day.\n\nStep 3: Time is the reciprocal, 16×20/(16+20)=8.8889 days.\n\nAnswer: 8.8889 days.\n\nCheck and interpretation: The combined time is less than 16 days, the faster individual time. Averaging the completion times would fail this basic check.",
    "family": "combined-work",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-equal-distance-speed-12",
    "topic": "apt",
    "prompt": "A traveller covers 80 km at 54 km/h and the next 80 km at 74 km/h. Ignoring stops, what is the overall average speed in km/h?",
    "choices": [
      "62.4375 km/h",
      "64 km/h",
      "63.2139 km/h",
      "31.2188 km/h"
    ],
    "key": 0,
    "why": "Principle: Average speed is total distance divided by total time. Equal distances at different speeds lead to a harmonic mean, not an arithmetic mean.\n\nStep 1: Total distance is 160 km.\n\nStep 2: Travel time is 80/54+80/74 h.\n\nStep 3: Divide distance by time: vavg=2v₁v₂/(v₁+v₂)=62.4375 km/h.\n\nAnswer: 62.4375 km/h.\n\nCheck and interpretation: More time is spent on the slower segment, so the average is below the arithmetic mean of the two speeds. The common segment distance cancels.",
    "family": "equal-distance-speed",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-markup-discount-12",
    "topic": "apt",
    "prompt": "An item is marked 44% above its cost price and then sold at a 17% discount on marked price. What is the net profit percentage relative to cost?",
    "choices": [
      "27 %",
      "61 %",
      "9.76 %",
      "19.52 %"
    ],
    "key": 3,
    "why": "Principle: Markup is based on cost while discount is based on marked price. Successive percentage operations multiply their scale factors.\n\nStep 1: Take cost as 100 units. Marked price is 100×(1+44/100)=144.\n\nStep 2: Selling price is 144×(1−17/100)=119.52.\n\nStep 3: Profit percentage on cost is selling price minus 100, namely 19.52%.\n\nAnswer: 19.52 %.\n\nCheck and interpretation: Simply subtracting discount percentage from markup percentage ignores their different bases. The multiplicative calculation also works when the net result is a loss.",
    "family": "markup-discount",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-committee-selection-12",
    "topic": "apt",
    "prompt": "A committee of 2 people is selected uniformly from 20 candidates, including two named candidates A and B. What is the probability both A and B are selected?",
    "choices": [
      "0.1",
      "0.01",
      "0.0526",
      "0.0053"
    ],
    "key": 3,
    "why": "Principle: Committee selection is without replacement. Count committees that contain both named people and divide by the count of all equally likely committees.\n\nStep 1: All committees number C(20,2).\n\nStep 2: With A and B already included, choose the remaining 0 members from 18, giving C(18,0).\n\nStep 3: Their ratio simplifies to r(r−1)/[n(n−1)]=2×1/(20×19)=0.0053.\n\nAnswer: 0.0053.\n\nCheck and interpretation: Multiplying r/n by itself incorrectly treats the two inclusion events as independent. The second inclusion probability changes after the first is fixed.",
    "family": "committee-selection",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-pipes-drain-12",
    "topic": "apt",
    "prompt": "An inlet fills an empty tank in 14 hours. A drain empties a full tank in 29 hours. Both are opened together when the tank is empty, with constant flow rates. How long until it fills?",
    "choices": [
      "9.4419 hours",
      "29 hours",
      "15 hours",
      "27.0667 hours"
    ],
    "key": 3,
    "why": "Principle: The inlet contributes a positive fill rate and the drain a negative fill rate. Net filling time is the reciprocal of their rate difference.\n\nStep 1: The inlet rate is 1/14 tank/h and drain rate is 1/29 tank/h.\n\nStep 2: Net rate is 1/14−1/29=15/[14×29] tank/h.\n\nStep 3: Thus filling time is 14×29/15=27.0667 hours.\n\nAnswer: 27.0667 hours.\n\nCheck and interpretation: The drain makes filling slower than the inlet alone, so the answer must exceed the inlet’s filling time. Adding rates would describe two inlets.",
    "family": "pipes-drain",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-updated-average-12",
    "topic": "apt",
    "prompt": "The average of 16 observations is 32. One observation equal to 22 is removed. What is the mean of the remaining observations?",
    "choices": [
      "27",
      "30.625",
      "16.3333",
      "32.6667"
    ],
    "key": 3,
    "why": "Principle: Recover the original total from mean times count, subtract the removed observation, then divide by the new count.\n\nStep 1: The original sum is 16×32=512.\n\nStep 2: After removing 22, the sum becomes 490 and the count becomes 15.\n\nStep 3: The new mean is 490/15=32.6667.\n\nAnswer: 32.6667.\n\nCheck and interpretation: The removed value lies below the original mean, so removing it raises the mean. Dividing by the original count would miss the count change.",
    "family": "updated-average",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-compound-growth-12",
    "topic": "apt",
    "prompt": "A population grows at 8% per year compounded annually for two years. What is the total percentage increase over its initial value?",
    "choices": [
      "16 %",
      "64 %",
      "8.32 %",
      "16.64 %"
    ],
    "key": 3,
    "why": "Principle: Annual compounding applies each year’s growth to the previous year’s enlarged population. The two-year growth factor is (1+r)².\n\nStep 1: Convert the annual percentage to rate r=8/100.\n\nStep 2: After two years, final/initial=(1+8/100)².\n\nStep 3: Subtract one and multiply by 100 to obtain total growth 16.64%.\n\nAnswer: 16.64 %.\n\nCheck and interpretation: The result exceeds the simple two-year increase 16% because the first year’s increase also grows in the second year.",
    "family": "compound-growth",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-arithmetic-sum-12",
    "topic": "apt",
    "prompt": "A production schedule makes 14 units on day 1 and increases output by 13 units each successive day. How many units are made over the first 22 days?",
    "choices": [
      "6314 units",
      "594 units",
      "3311 units",
      "3597 units"
    ],
    "key": 2,
    "why": "Principle: Daily outputs form an arithmetic progression. Its total is the number of terms times the average of the first and last terms.\n\nStep 1: First output a=14; common difference d=13.\n\nStep 2: Day-22 output is a+(n−1)d=14+21×13=287.\n\nStep 3: Total is n[2a+(n−1)d]/2=22×[14+287]/2=3311 units.\n\nAnswer: 3311 units.\n\nCheck and interpretation: There are n−1 increases between the first and nth days. Using n increases would shift every endpoint calculation by one day.",
    "family": "arithmetic-sum",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-without-replacement-12",
    "topic": "apt",
    "prompt": "A box contains 17 working and 15 defective components. Two are drawn randomly without replacement. What is the probability that both work?",
    "choices": [
      "0.2822",
      "0.5313",
      "0.7258",
      "0.2742"
    ],
    "key": 3,
    "why": "Principle: Without replacement, the second draw’s probabilities depend on the first draw. Use the multiplication rule with a conditional probability.\n\nStep 1: The first component works with probability 17/32.\n\nStep 2: If it works, 16 working components remain among 31 total.\n\nStep 3: Multiply: P(both work)=(17/32)×(16/31)=0.2742.\n\nAnswer: 0.2742.\n\nCheck and interpretation: Squaring the first-draw probability would apply to replacement or independent draws. Here taking out a working component slightly lowers the next success probability.",
    "family": "without-replacement",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-repeated-mixture-7",
    "topic": "apt",
    "prompt": "A tank contains 34 L of pure concentrate. 9 L is removed and replaced by water, the mixture is stirred, and the same removal/replacement is repeated once. What percentage of the final mixture is concentrate?",
    "choices": [
      "47.0588 %",
      "73.5294 %",
      "45.9343 %",
      "54.0657 %"
    ],
    "key": 3,
    "why": "Principle: Every replacement retains the same fraction of whatever concentrate was present before that operation. Stirring makes the removed mixture representative of the tank.\n\nStep 1: One operation retains fraction 1−9/34 of the concentrate.\n\nStep 2: Two operations retain fraction (1−9/34)².\n\nStep 3: The tank returns to its original total volume each time, so final concentrate percentage is 54.0657%.\n\nAnswer: 54.0657 %.\n\nCheck and interpretation: The second removal contains some water, so it removes less concentrate than the first. Subtracting twice the first removed concentration overstates the loss.",
    "family": "repeated-mixture",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-adjacent-arrangement-7",
    "topic": "apt",
    "prompt": "11 distinct people stand in a uniformly random row. What is the probability that two specified people are adjacent?",
    "choices": [
      "0.0909",
      "0.2",
      "0.9091",
      "0.1818"
    ],
    "key": 3,
    "why": "Principle: For adjacency counting, treat the two specified people as a block, then allow both orders inside the block. Divide favorable permutations by all permutations.\n\nStep 1: All arrangements number 11!.\n\nStep 2: Combine the specified pair into one block, leaving 10 objects with (10)! orders. The pair has two internal orders.\n\nStep 3: Thus probability=2(10)!/11!=2/11=0.1818.\n\nAnswer: 0.1818.\n\nCheck and interpretation: The pair can occupy any neighboring positions, not just an endpoint pair. The two internal orders must both be counted.",
    "family": "adjacent-arrangement",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-boat-round-trip-7",
    "topic": "apt",
    "prompt": "A boat moves at 17 km/h in still water and the current is 5.5 km/h. It travels 34 km downstream and returns the same distance upstream. What is total travel time in hours?",
    "choices": [
      "4 hours",
      "3.0222 hours",
      "4.4676 hours",
      "5.913 hours"
    ],
    "key": 2,
    "why": "Principle: Current adds to speed downstream and subtracts upstream. Compute each travel time separately before adding.\n\nStep 1: Downstream speed is 17+5.5=22.5 km/h.\n\nStep 2: Upstream speed is 17−5.5=11.5 km/h, positive for these data.\n\nStep 3: Total time is 34/22.5+34/11.5=4.4676 hours.\n\nAnswer: 4.4676 hours.\n\nCheck and interpretation: The current slows the overall equal-distance round trip relative to travel in still water. The faster leg does not cancel the extra time spent on the slower leg.",
    "family": "boat-round-trip",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-opposite-trains-7",
    "topic": "apt",
    "prompt": "Trains of lengths 170 m and 220 m travel toward each other at 61.2 km/h and 79.2 km/h. How many seconds pass from their fronts meeting until they completely cross?",
    "choices": [
      "78 s",
      "4.359 s",
      "10 s",
      "2.7778 s"
    ],
    "key": 2,
    "why": "Principle: For opposite directions, relative speed is the sum of speeds. Complete crossing requires relative motion through the sum of both lengths.\n\nStep 1: Combined length is 170+220=390 m.\n\nStep 2: Relative speed is (61.2+79.2)/3.6=39 m/s.\n\nStep 3: Crossing time is 390/39=10 s.\n\nAnswer: 10 s.\n\nCheck and interpretation: Subtracting speeds would apply to overtaking in the same direction. Counting just one train’s length would stop before both trains fully clear each other.",
    "family": "opposite-trains",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-weighted-group-average-7",
    "topic": "apt",
    "prompt": "A class of 34 students has mean score 67; another of 37 has mean score 77. What is the mean score when the classes are combined?",
    "choices": [
      "72",
      "72.2113",
      "71.7887",
      "144"
    ],
    "key": 1,
    "why": "Principle: A combined mean is weighted by group size. Recover each group’s total score before pooling.\n\nStep 1: First total score is 34×67=2278.\n\nStep 2: Second total score is 37×77=2849.\n\nStep 3: Divide the total 5127 by 71 students to obtain 72.2113.\n\nAnswer: 72.2113.\n\nCheck and interpretation: The result lies between the two class means and is closer to the mean of the larger class. A simple average of class means requires equal class sizes.",
    "family": "weighted-group-average",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-logarithm-equation-7",
    "topic": "apt",
    "prompt": "For real x>8, solve log₂(x−8)+log₂(x+8)=log₂(225).",
    "choices": [
      "8",
      "17",
      "25",
      "15"
    ],
    "key": 1,
    "why": "Principle: For positive arguments, the sum of logarithms equals the logarithm of the product. The domain restriction must be checked after solving the resulting quadratic.\n\nStep 1: Combine the left side as log₂[(x−8)(x+8)].\n\nStep 2: Equate arguments: x²−64=225, giving x²=289.\n\nStep 3: The algebraic roots are ±17, but only +17 satisfies x>8.\n\nAnswer: 17.\n\nCheck and interpretation: The negative root is extraneous to the logarithm domain even though it satisfies the squared equation. Ignoring domain conditions can produce an invalid second answer.",
    "family": "logarithm-equation",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-repeated-mixture-8",
    "topic": "apt",
    "prompt": "A tank contains 36 L of pure concentrate. 10 L is removed and replaced by water, the mixture is stirred, and the same removal/replacement is repeated once. What percentage of the final mixture is concentrate?",
    "choices": [
      "52.1605 %",
      "44.4444 %",
      "72.2222 %",
      "47.8395 %"
    ],
    "key": 0,
    "why": "Principle: Every replacement retains the same fraction of whatever concentrate was present before that operation. Stirring makes the removed mixture representative of the tank.\n\nStep 1: One operation retains fraction 1−10/36 of the concentrate.\n\nStep 2: Two operations retain fraction (1−10/36)².\n\nStep 3: The tank returns to its original total volume each time, so final concentrate percentage is 52.1605%.\n\nAnswer: 52.1605 %.\n\nCheck and interpretation: The second removal contains some water, so it removes less concentrate than the first. Subtracting twice the first removed concentration overstates the loss.",
    "family": "repeated-mixture",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-adjacent-arrangement-8",
    "topic": "apt",
    "prompt": "12 distinct people stand in a uniformly random row. What is the probability that two specified people are adjacent?",
    "choices": [
      "0.1667",
      "0.0833",
      "0.1818",
      "0.9167"
    ],
    "key": 0,
    "why": "Principle: For adjacency counting, treat the two specified people as a block, then allow both orders inside the block. Divide favorable permutations by all permutations.\n\nStep 1: All arrangements number 12!.\n\nStep 2: Combine the specified pair into one block, leaving 11 objects with (11)! orders. The pair has two internal orders.\n\nStep 3: Thus probability=2(11)!/12!=2/12=0.1667.\n\nAnswer: 0.1667.\n\nCheck and interpretation: The pair can occupy any neighboring positions, not just an endpoint pair. The two internal orders must both be counted.",
    "family": "adjacent-arrangement",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-boat-round-trip-8",
    "topic": "apt",
    "prompt": "A boat moves at 18 km/h in still water and the current is 6 km/h. It travels 36 km downstream and returns the same distance upstream. What is total travel time in hours?",
    "choices": [
      "4 hours",
      "3 hours",
      "6 hours",
      "4.5 hours"
    ],
    "key": 3,
    "why": "Principle: Current adds to speed downstream and subtracts upstream. Compute each travel time separately before adding.\n\nStep 1: Downstream speed is 18+6=24 km/h.\n\nStep 2: Upstream speed is 18−6=12 km/h, positive for these data.\n\nStep 3: Total time is 36/24+36/12=4.5 hours.\n\nAnswer: 4.5 hours.\n\nCheck and interpretation: The current slows the overall equal-distance round trip relative to travel in still water. The faster leg does not cancel the extra time spent on the slower leg.",
    "family": "boat-round-trip",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-opposite-trains-8",
    "topic": "apt",
    "prompt": "Trains of lengths 180 m and 230 m travel toward each other at 64.8 km/h and 82.8 km/h. How many seconds pass from their fronts meeting until they completely cross?",
    "choices": [
      "82 s",
      "4.3902 s",
      "2.7778 s",
      "10 s"
    ],
    "key": 3,
    "why": "Principle: For opposite directions, relative speed is the sum of speeds. Complete crossing requires relative motion through the sum of both lengths.\n\nStep 1: Combined length is 180+230=410 m.\n\nStep 2: Relative speed is (64.8+82.8)/3.6=41 m/s.\n\nStep 3: Crossing time is 410/41=10 s.\n\nAnswer: 10 s.\n\nCheck and interpretation: Subtracting speeds would apply to overtaking in the same direction. Counting just one train’s length would stop before both trains fully clear each other.",
    "family": "opposite-trains",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-weighted-group-average-8",
    "topic": "apt",
    "prompt": "A class of 36 students has mean score 68; another of 38 has mean score 78. What is the mean score when the classes are combined?",
    "choices": [
      "73",
      "72.8649",
      "73.1351",
      "146"
    ],
    "key": 2,
    "why": "Principle: A combined mean is weighted by group size. Recover each group’s total score before pooling.\n\nStep 1: First total score is 36×68=2448.\n\nStep 2: Second total score is 38×78=2964.\n\nStep 3: Divide the total 5412 by 74 students to obtain 73.1351.\n\nAnswer: 73.1351.\n\nCheck and interpretation: The result lies between the two class means and is closer to the mean of the larger class. A simple average of class means requires equal class sizes.",
    "family": "weighted-group-average",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-logarithm-equation-8",
    "topic": "apt",
    "prompt": "For real x>9, solve log₂(x−9)+log₂(x+9)=log₂(280).",
    "choices": [
      "9",
      "28",
      "19",
      "16.7332"
    ],
    "key": 2,
    "why": "Principle: For positive arguments, the sum of logarithms equals the logarithm of the product. The domain restriction must be checked after solving the resulting quadratic.\n\nStep 1: Combine the left side as log₂[(x−9)(x+9)].\n\nStep 2: Equate arguments: x²−81=280, giving x²=361.\n\nStep 3: The algebraic roots are ±19, but only +19 satisfies x>9.\n\nAnswer: 19.\n\nCheck and interpretation: The negative root is extraneous to the logarithm domain even though it satisfies the squared equation. Ignoring domain conditions can produce an invalid second answer.",
    "family": "logarithm-equation",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-repeated-mixture-9",
    "topic": "apt",
    "prompt": "A tank contains 38 L of pure concentrate. 11 L is removed and replaced by water, the mixture is stirred, and the same removal/replacement is repeated once. What percentage of the final mixture is concentrate?",
    "choices": [
      "42.1053 %",
      "50.4848 %",
      "71.0526 %",
      "49.5152 %"
    ],
    "key": 1,
    "why": "Principle: Every replacement retains the same fraction of whatever concentrate was present before that operation. Stirring makes the removed mixture representative of the tank.\n\nStep 1: One operation retains fraction 1−11/38 of the concentrate.\n\nStep 2: Two operations retain fraction (1−11/38)².\n\nStep 3: The tank returns to its original total volume each time, so final concentrate percentage is 50.4848%.\n\nAnswer: 50.4848 %.\n\nCheck and interpretation: The second removal contains some water, so it removes less concentrate than the first. Subtracting twice the first removed concentration overstates the loss.",
    "family": "repeated-mixture",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-adjacent-arrangement-9",
    "topic": "apt",
    "prompt": "13 distinct people stand in a uniformly random row. What is the probability that two specified people are adjacent?",
    "choices": [
      "0.0769",
      "0.1538",
      "0.1667",
      "0.9231"
    ],
    "key": 1,
    "why": "Principle: For adjacency counting, treat the two specified people as a block, then allow both orders inside the block. Divide favorable permutations by all permutations.\n\nStep 1: All arrangements number 13!.\n\nStep 2: Combine the specified pair into one block, leaving 12 objects with (12)! orders. The pair has two internal orders.\n\nStep 3: Thus probability=2(12)!/13!=2/13=0.1538.\n\nAnswer: 0.1538.\n\nCheck and interpretation: The pair can occupy any neighboring positions, not just an endpoint pair. The two internal orders must both be counted.",
    "family": "adjacent-arrangement",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-boat-round-trip-9",
    "topic": "apt",
    "prompt": "A boat moves at 19 km/h in still water and the current is 6.5 km/h. It travels 38 km downstream and returns the same distance upstream. What is total travel time in hours?",
    "choices": [
      "4.5302 hours",
      "4 hours",
      "2.9804 hours",
      "6.08 hours"
    ],
    "key": 0,
    "why": "Principle: Current adds to speed downstream and subtracts upstream. Compute each travel time separately before adding.\n\nStep 1: Downstream speed is 19+6.5=25.5 km/h.\n\nStep 2: Upstream speed is 19−6.5=12.5 km/h, positive for these data.\n\nStep 3: Total time is 38/25.5+38/12.5=4.5302 hours.\n\nAnswer: 4.5302 hours.\n\nCheck and interpretation: The current slows the overall equal-distance round trip relative to travel in still water. The faster leg does not cancel the extra time spent on the slower leg.",
    "family": "boat-round-trip",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-opposite-trains-9",
    "topic": "apt",
    "prompt": "Trains of lengths 190 m and 240 m travel toward each other at 68.4 km/h and 86.4 km/h. How many seconds pass from their fronts meeting until they completely cross?",
    "choices": [
      "10 s",
      "86 s",
      "4.4186 s",
      "2.7778 s"
    ],
    "key": 0,
    "why": "Principle: For opposite directions, relative speed is the sum of speeds. Complete crossing requires relative motion through the sum of both lengths.\n\nStep 1: Combined length is 190+240=430 m.\n\nStep 2: Relative speed is (68.4+86.4)/3.6=43 m/s.\n\nStep 3: Crossing time is 430/43=10 s.\n\nAnswer: 10 s.\n\nCheck and interpretation: Subtracting speeds would apply to overtaking in the same direction. Counting just one train’s length would stop before both trains fully clear each other.",
    "family": "opposite-trains",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-weighted-group-average-9",
    "topic": "apt",
    "prompt": "A class of 38 students has mean score 69; another of 39 has mean score 79. What is the mean score when the classes are combined?",
    "choices": [
      "74",
      "73.9351",
      "148",
      "74.0649"
    ],
    "key": 3,
    "why": "Principle: A combined mean is weighted by group size. Recover each group’s total score before pooling.\n\nStep 1: First total score is 38×69=2622.\n\nStep 2: Second total score is 39×79=3081.\n\nStep 3: Divide the total 5703 by 77 students to obtain 74.0649.\n\nAnswer: 74.0649.\n\nCheck and interpretation: The result lies between the two class means and is closer to the mean of the larger class. A simple average of class means requires equal class sizes.",
    "family": "weighted-group-average",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-logarithm-equation-9",
    "topic": "apt",
    "prompt": "For real x>10, solve log₂(x−10)+log₂(x+10)=log₂(341).",
    "choices": [
      "10",
      "31",
      "18.4662",
      "21"
    ],
    "key": 3,
    "why": "Principle: For positive arguments, the sum of logarithms equals the logarithm of the product. The domain restriction must be checked after solving the resulting quadratic.\n\nStep 1: Combine the left side as log₂[(x−10)(x+10)].\n\nStep 2: Equate arguments: x²−100=341, giving x²=441.\n\nStep 3: The algebraic roots are ±21, but only +21 satisfies x>10.\n\nAnswer: 21.\n\nCheck and interpretation: The negative root is extraneous to the logarithm domain even though it satisfies the squared equation. Ignoring domain conditions can produce an invalid second answer.",
    "family": "logarithm-equation",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-repeated-mixture-10",
    "topic": "apt",
    "prompt": "A tank contains 40 L of pure concentrate. 12 L is removed and replaced by water, the mixture is stirred, and the same removal/replacement is repeated once. What percentage of the final mixture is concentrate?",
    "choices": [
      "40 %",
      "70 %",
      "49 %",
      "51 %"
    ],
    "key": 2,
    "why": "Principle: Every replacement retains the same fraction of whatever concentrate was present before that operation. Stirring makes the removed mixture representative of the tank.\n\nStep 1: One operation retains fraction 1−12/40 of the concentrate.\n\nStep 2: Two operations retain fraction (1−12/40)².\n\nStep 3: The tank returns to its original total volume each time, so final concentrate percentage is 49%.\n\nAnswer: 49 %.\n\nCheck and interpretation: The second removal contains some water, so it removes less concentrate than the first. Subtracting twice the first removed concentration overstates the loss.",
    "family": "repeated-mixture",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-adjacent-arrangement-10",
    "topic": "apt",
    "prompt": "14 distinct people stand in a uniformly random row. What is the probability that two specified people are adjacent?",
    "choices": [
      "0.0714",
      "0.1538",
      "0.1429",
      "0.9286"
    ],
    "key": 2,
    "why": "Principle: For adjacency counting, treat the two specified people as a block, then allow both orders inside the block. Divide favorable permutations by all permutations.\n\nStep 1: All arrangements number 14!.\n\nStep 2: Combine the specified pair into one block, leaving 13 objects with (13)! orders. The pair has two internal orders.\n\nStep 3: Thus probability=2(13)!/14!=2/14=0.1429.\n\nAnswer: 0.1429.\n\nCheck and interpretation: The pair can occupy any neighboring positions, not just an endpoint pair. The two internal orders must both be counted.",
    "family": "adjacent-arrangement",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-boat-round-trip-10",
    "topic": "apt",
    "prompt": "A boat moves at 20 km/h in still water and the current is 7 km/h. It travels 40 km downstream and returns the same distance upstream. What is total travel time in hours?",
    "choices": [
      "4 hours",
      "4.5584 hours",
      "2.963 hours",
      "6.1538 hours"
    ],
    "key": 1,
    "why": "Principle: Current adds to speed downstream and subtracts upstream. Compute each travel time separately before adding.\n\nStep 1: Downstream speed is 20+7=27 km/h.\n\nStep 2: Upstream speed is 20−7=13 km/h, positive for these data.\n\nStep 3: Total time is 40/27+40/13=4.5584 hours.\n\nAnswer: 4.5584 hours.\n\nCheck and interpretation: The current slows the overall equal-distance round trip relative to travel in still water. The faster leg does not cancel the extra time spent on the slower leg.",
    "family": "boat-round-trip",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-opposite-trains-10",
    "topic": "apt",
    "prompt": "Trains of lengths 200 m and 250 m travel toward each other at 72 km/h and 90 km/h. How many seconds pass from their fronts meeting until they completely cross?",
    "choices": [
      "90 s",
      "10 s",
      "4.4444 s",
      "2.7778 s"
    ],
    "key": 1,
    "why": "Principle: For opposite directions, relative speed is the sum of speeds. Complete crossing requires relative motion through the sum of both lengths.\n\nStep 1: Combined length is 200+250=450 m.\n\nStep 2: Relative speed is (72+90)/3.6=45 m/s.\n\nStep 3: Crossing time is 450/45=10 s.\n\nAnswer: 10 s.\n\nCheck and interpretation: Subtracting speeds would apply to overtaking in the same direction. Counting just one train’s length would stop before both trains fully clear each other.",
    "family": "opposite-trains",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-weighted-group-average-10",
    "topic": "apt",
    "prompt": "A class of 40 students has mean score 70; another of 40 has mean score 80. What is the mean score when the classes are combined?",
    "choices": [
      "75",
      "150",
      "37.5",
      "112.5"
    ],
    "key": 0,
    "why": "Principle: A combined mean is weighted by group size. Recover each group’s total score before pooling.\n\nStep 1: First total score is 40×70=2800.\n\nStep 2: Second total score is 40×80=3200.\n\nStep 3: Divide the total 6000 by 80 students to obtain 75.\n\nAnswer: 75.\n\nCheck and interpretation: The result lies between the two class means and is closer to the mean of the larger class. A simple average of class means requires equal class sizes.",
    "family": "weighted-group-average",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-logarithm-equation-10",
    "topic": "apt",
    "prompt": "For real x>11, solve log₂(x−11)+log₂(x+11)=log₂(408).",
    "choices": [
      "23",
      "11",
      "34",
      "20.199"
    ],
    "key": 0,
    "why": "Principle: For positive arguments, the sum of logarithms equals the logarithm of the product. The domain restriction must be checked after solving the resulting quadratic.\n\nStep 1: Combine the left side as log₂[(x−11)(x+11)].\n\nStep 2: Equate arguments: x²−121=408, giving x²=529.\n\nStep 3: The algebraic roots are ±23, but only +23 satisfies x>11.\n\nAnswer: 23.\n\nCheck and interpretation: The negative root is extraneous to the logarithm domain even though it satisfies the squared equation. Ignoring domain conditions can produce an invalid second answer.",
    "family": "logarithm-equation",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-repeated-mixture-11",
    "topic": "apt",
    "prompt": "A tank contains 42 L of pure concentrate. 13 L is removed and replaced by water, the mixture is stirred, and the same removal/replacement is repeated once. What percentage of the final mixture is concentrate?",
    "choices": [
      "38.0952 %",
      "69.0476 %",
      "52.3243 %",
      "47.6757 %"
    ],
    "key": 3,
    "why": "Principle: Every replacement retains the same fraction of whatever concentrate was present before that operation. Stirring makes the removed mixture representative of the tank.\n\nStep 1: One operation retains fraction 1−13/42 of the concentrate.\n\nStep 2: Two operations retain fraction (1−13/42)².\n\nStep 3: The tank returns to its original total volume each time, so final concentrate percentage is 47.6757%.\n\nAnswer: 47.6757 %.\n\nCheck and interpretation: The second removal contains some water, so it removes less concentrate than the first. Subtracting twice the first removed concentration overstates the loss.",
    "family": "repeated-mixture",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-adjacent-arrangement-11",
    "topic": "apt",
    "prompt": "15 distinct people stand in a uniformly random row. What is the probability that two specified people are adjacent?",
    "choices": [
      "0.0667",
      "0.1429",
      "0.9333",
      "0.1333"
    ],
    "key": 3,
    "why": "Principle: For adjacency counting, treat the two specified people as a block, then allow both orders inside the block. Divide favorable permutations by all permutations.\n\nStep 1: All arrangements number 15!.\n\nStep 2: Combine the specified pair into one block, leaving 14 objects with (14)! orders. The pair has two internal orders.\n\nStep 3: Thus probability=2(14)!/15!=2/15=0.1333.\n\nAnswer: 0.1333.\n\nCheck and interpretation: The pair can occupy any neighboring positions, not just an endpoint pair. The two internal orders must both be counted.",
    "family": "adjacent-arrangement",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-boat-round-trip-11",
    "topic": "apt",
    "prompt": "A boat moves at 21 km/h in still water and the current is 7.5 km/h. It travels 42 km downstream and returns the same distance upstream. What is total travel time in hours?",
    "choices": [
      "4 hours",
      "2.9474 hours",
      "4.5848 hours",
      "6.2222 hours"
    ],
    "key": 2,
    "why": "Principle: Current adds to speed downstream and subtracts upstream. Compute each travel time separately before adding.\n\nStep 1: Downstream speed is 21+7.5=28.5 km/h.\n\nStep 2: Upstream speed is 21−7.5=13.5 km/h, positive for these data.\n\nStep 3: Total time is 42/28.5+42/13.5=4.5848 hours.\n\nAnswer: 4.5848 hours.\n\nCheck and interpretation: The current slows the overall equal-distance round trip relative to travel in still water. The faster leg does not cancel the extra time spent on the slower leg.",
    "family": "boat-round-trip",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-opposite-trains-11",
    "topic": "apt",
    "prompt": "Trains of lengths 210 m and 260 m travel toward each other at 75.6 km/h and 93.6 km/h. How many seconds pass from their fronts meeting until they completely cross?",
    "choices": [
      "94 s",
      "4.4681 s",
      "10 s",
      "2.7778 s"
    ],
    "key": 2,
    "why": "Principle: For opposite directions, relative speed is the sum of speeds. Complete crossing requires relative motion through the sum of both lengths.\n\nStep 1: Combined length is 210+260=470 m.\n\nStep 2: Relative speed is (75.6+93.6)/3.6=47 m/s.\n\nStep 3: Crossing time is 470/47=10 s.\n\nAnswer: 10 s.\n\nCheck and interpretation: Subtracting speeds would apply to overtaking in the same direction. Counting just one train’s length would stop before both trains fully clear each other.",
    "family": "opposite-trains",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-weighted-group-average-11",
    "topic": "apt",
    "prompt": "A class of 42 students has mean score 71; another of 41 has mean score 81. What is the mean score when the classes are combined?",
    "choices": [
      "76",
      "75.9398",
      "76.0602",
      "152"
    ],
    "key": 1,
    "why": "Principle: A combined mean is weighted by group size. Recover each group’s total score before pooling.\n\nStep 1: First total score is 42×71=2982.\n\nStep 2: Second total score is 41×81=3321.\n\nStep 3: Divide the total 6303 by 83 students to obtain 75.9398.\n\nAnswer: 75.9398.\n\nCheck and interpretation: The result lies between the two class means and is closer to the mean of the larger class. A simple average of class means requires equal class sizes.",
    "family": "weighted-group-average",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-logarithm-equation-11",
    "topic": "apt",
    "prompt": "For real x>12, solve log₂(x−12)+log₂(x+12)=log₂(481).",
    "choices": [
      "12",
      "25",
      "37",
      "21.9317"
    ],
    "key": 1,
    "why": "Principle: For positive arguments, the sum of logarithms equals the logarithm of the product. The domain restriction must be checked after solving the resulting quadratic.\n\nStep 1: Combine the left side as log₂[(x−12)(x+12)].\n\nStep 2: Equate arguments: x²−144=481, giving x²=625.\n\nStep 3: The algebraic roots are ±25, but only +25 satisfies x>12.\n\nAnswer: 25.\n\nCheck and interpretation: The negative root is extraneous to the logarithm domain even though it satisfies the squared equation. Ignoring domain conditions can produce an invalid second answer.",
    "family": "logarithm-equation",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-repeated-mixture-12",
    "topic": "apt",
    "prompt": "A tank contains 44 L of pure concentrate. 14 L is removed and replaced by water, the mixture is stirred, and the same removal/replacement is repeated once. What percentage of the final mixture is concentrate?",
    "choices": [
      "46.4876 %",
      "36.3636 %",
      "68.1818 %",
      "53.5124 %"
    ],
    "key": 0,
    "why": "Principle: Every replacement retains the same fraction of whatever concentrate was present before that operation. Stirring makes the removed mixture representative of the tank.\n\nStep 1: One operation retains fraction 1−14/44 of the concentrate.\n\nStep 2: Two operations retain fraction (1−14/44)².\n\nStep 3: The tank returns to its original total volume each time, so final concentrate percentage is 46.4876%.\n\nAnswer: 46.4876 %.\n\nCheck and interpretation: The second removal contains some water, so it removes less concentrate than the first. Subtracting twice the first removed concentration overstates the loss.",
    "family": "repeated-mixture",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-adjacent-arrangement-12",
    "topic": "apt",
    "prompt": "16 distinct people stand in a uniformly random row. What is the probability that two specified people are adjacent?",
    "choices": [
      "0.125",
      "0.0625",
      "0.1333",
      "0.9375"
    ],
    "key": 0,
    "why": "Principle: For adjacency counting, treat the two specified people as a block, then allow both orders inside the block. Divide favorable permutations by all permutations.\n\nStep 1: All arrangements number 16!.\n\nStep 2: Combine the specified pair into one block, leaving 15 objects with (15)! orders. The pair has two internal orders.\n\nStep 3: Thus probability=2(15)!/16!=2/16=0.125.\n\nAnswer: 0.125.\n\nCheck and interpretation: The pair can occupy any neighboring positions, not just an endpoint pair. The two internal orders must both be counted.",
    "family": "adjacent-arrangement",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-boat-round-trip-12",
    "topic": "apt",
    "prompt": "A boat moves at 22 km/h in still water and the current is 8 km/h. It travels 44 km downstream and returns the same distance upstream. What is total travel time in hours?",
    "choices": [
      "4 hours",
      "2.9333 hours",
      "6.2857 hours",
      "4.6095 hours"
    ],
    "key": 3,
    "why": "Principle: Current adds to speed downstream and subtracts upstream. Compute each travel time separately before adding.\n\nStep 1: Downstream speed is 22+8=30 km/h.\n\nStep 2: Upstream speed is 22−8=14 km/h, positive for these data.\n\nStep 3: Total time is 44/30+44/14=4.6095 hours.\n\nAnswer: 4.6095 hours.\n\nCheck and interpretation: The current slows the overall equal-distance round trip relative to travel in still water. The faster leg does not cancel the extra time spent on the slower leg.",
    "family": "boat-round-trip",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-opposite-trains-12",
    "topic": "apt",
    "prompt": "Trains of lengths 220 m and 270 m travel toward each other at 79.2 km/h and 97.2 km/h. How many seconds pass from their fronts meeting until they completely cross?",
    "choices": [
      "98 s",
      "4.4898 s",
      "2.7778 s",
      "10 s"
    ],
    "key": 3,
    "why": "Principle: For opposite directions, relative speed is the sum of speeds. Complete crossing requires relative motion through the sum of both lengths.\n\nStep 1: Combined length is 220+270=490 m.\n\nStep 2: Relative speed is (79.2+97.2)/3.6=49 m/s.\n\nStep 3: Crossing time is 490/49=10 s.\n\nAnswer: 10 s.\n\nCheck and interpretation: Subtracting speeds would apply to overtaking in the same direction. Counting just one train’s length would stop before both trains fully clear each other.",
    "family": "opposite-trains",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-weighted-group-average-12",
    "topic": "apt",
    "prompt": "A class of 44 students has mean score 72; another of 42 has mean score 82. What is the mean score when the classes are combined?",
    "choices": [
      "77",
      "77.1163",
      "76.8837",
      "154"
    ],
    "key": 2,
    "why": "Principle: A combined mean is weighted by group size. Recover each group’s total score before pooling.\n\nStep 1: First total score is 44×72=3168.\n\nStep 2: Second total score is 42×82=3444.\n\nStep 3: Divide the total 6612 by 86 students to obtain 76.8837.\n\nAnswer: 76.8837.\n\nCheck and interpretation: The result lies between the two class means and is closer to the mean of the larger class. A simple average of class means requires equal class sizes.",
    "family": "weighted-group-average",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-gate-apt-logarithm-equation-12",
    "topic": "apt",
    "prompt": "For real x>13, solve log₂(x−13)+log₂(x+13)=log₂(560).",
    "choices": [
      "13",
      "40",
      "27",
      "23.6643"
    ],
    "key": 2,
    "why": "Principle: For positive arguments, the sum of logarithms equals the logarithm of the product. The domain restriction must be checked after solving the resulting quadratic.\n\nStep 1: Combine the left side as log₂[(x−13)(x+13)].\n\nStep 2: Equate arguments: x²−169=560, giving x²=729.\n\nStep 3: The algebraic roots are ±27, but only +27 satisfies x>13.\n\nAnswer: 27.\n\nCheck and interpretation: The negative root is extraneous to the logarithm domain even though it satisfies the squared equation. Ignoring domain conditions can produce an invalid second answer.",
    "family": "logarithm-equation",
    "level": "GATE-style",
    "format": "Original MCQ",
    "bank": "original",
    "category": "Quantitative"
  },
  {
    "id": "apt-original-verbal-1",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Each of the measurements ___ been checked twice.",
    "choices": [
      "have",
      "were",
      "has",
      "are"
    ],
    "key": 2,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Each is the singular grammatical subject; the plural noun in the of-phrase does not control agreement.\n\nStep 3: Among the options, “has” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: has."
  },
  {
    "id": "apt-original-verbal-2",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Neither the sensor nor the cables ___ damaged.",
    "choices": [
      "is",
      "has",
      "was",
      "are"
    ],
    "key": 3,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: With neither…nor, agreement here follows the nearer plural subject cables.\n\nStep 3: Among the options, “are” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: are."
  },
  {
    "id": "apt-original-verbal-3",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "The design is not only inexpensive ___ reliable.",
    "choices": [
      "but also",
      "rather than",
      "and nor",
      "or else"
    ],
    "key": 0,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: The correlative conjunction not only pairs with but also; the two adjectives are parallel.\n\nStep 3: Among the options, “but also” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: but also."
  },
  {
    "id": "apt-original-verbal-4",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "The new process uses ___ components but consumes ___ energy.",
    "choices": [
      "less; fewer",
      "fewer; less",
      "fewer; fewer",
      "less; less"
    ],
    "key": 1,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Components are countable and take fewer; energy is an uncountable quantity and takes less.\n\nStep 3: Among the options, “fewer; less” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: fewer; less."
  },
  {
    "id": "apt-original-verbal-5",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "The agreement remains between you and ___.",
    "choices": [
      "I",
      "myself alone",
      "me",
      "mine"
    ],
    "key": 2,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: A pronoun serving as the object of a preposition takes objective case, so between takes me.\n\nStep 3: Among the options, “me” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: me."
  },
  {
    "id": "apt-original-verbal-6",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Choose the correctly punctuated sentence.",
    "choices": [
      "The instrument has lost it’s calibration.",
      "The instrument have lost its calibration.",
      "The instrument has lose its calibration.",
      "The instrument has lost its calibration."
    ],
    "key": 3,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Its is possessive; it’s expands to it is or it has and cannot modify the noun calibration here.\n\nStep 3: Among the options, “The instrument has lost its calibration.” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: The instrument has lost its calibration.."
  },
  {
    "id": "apt-original-verbal-7",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Which sentence is logically equivalent to “The test fails unless the switch is closed”?",
    "choices": [
      "If the switch is not closed, the test fails.",
      "If the switch is closed, the test must fail.",
      "If the test fails, the switch is not closed.",
      "If the test passes, the switch is open."
    ],
    "key": 0,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Unless introduces the condition whose absence triggers the stated result; it does not establish a biconditional.\n\nStep 3: Among the options, “If the switch is not closed, the test fails.” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: If the switch is not closed, the test fails.."
  },
  {
    "id": "apt-original-verbal-8",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Choose the sentence with standard concessive grammar.",
    "choices": [
      "Although the model is simple, but it predicts the trend.",
      "Although the model is simple, it predicts the trend.",
      "Despite the model is simple, it predicts the trend.",
      "In spite the model is simple, it predicts the trend."
    ],
    "key": 1,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Although introduces a clause directly and does not need but to introduce the main clause.\n\nStep 3: Among the options, “Although the model is simple, it predicts the trend.” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: Although the model is simple, it predicts the trend.."
  },
  {
    "id": "apt-original-verbal-9",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "The team aims to design, ___, and verify the controller.",
    "choices": [
      "testing",
      "tested",
      "test",
      "to testing"
    ],
    "key": 2,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: The three coordinated verbs share the initial to and should all appear in base form.\n\nStep 3: Among the options, “test” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: test."
  },
  {
    "id": "apt-original-verbal-10",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "The latest news about the trials ___ encouraging.",
    "choices": [
      "are",
      "have",
      "were all",
      "is"
    ],
    "key": 3,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: News is a singular mass noun despite its final s; a singular present verb is required.\n\nStep 3: Among the options, “is” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: is."
  },
  {
    "id": "apt-original-verbal-11",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "To ___ should the package be addressed?",
    "choices": [
      "whom",
      "who",
      "whose",
      "whoever is"
    ],
    "key": 0,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Whom is the objective form used after the preposition to in formal written English.\n\nStep 3: Among the options, “whom” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: whom."
  },
  {
    "id": "apt-original-verbal-12",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Had I known the deadline, I ___ the form earlier.",
    "choices": [
      "will submit",
      "would have submitted",
      "would submit tomorrow",
      "am submitting"
    ],
    "key": 1,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: An unreal past condition in the past perfect pairs with would have plus a past participle.\n\nStep 3: Among the options, “would have submitted” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: would have submitted."
  },
  {
    "id": "apt-original-verbal-13",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "No sooner had the trial begun ___ the power failed.",
    "choices": [
      "when",
      "then",
      "than",
      "that"
    ],
    "key": 2,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: The standard correlative construction is no sooner…than; the inversion had the trial begun is already supplied.\n\nStep 3: Among the options, “than” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: than."
  },
  {
    "id": "apt-original-verbal-14",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Hardly had the train stopped ___ the passengers began to leave.",
    "choices": [
      "than",
      "then",
      "so",
      "when"
    ],
    "key": 3,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Hardly…when is the conventional temporal correlation, unlike no sooner…than.\n\nStep 3: Among the options, “when” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: when."
  },
  {
    "id": "apt-original-verbal-15",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "The patient underwent ___ MRI scan before visiting ___ university clinic.",
    "choices": [
      "an; a",
      "a; an",
      "an; an",
      "a; a"
    ],
    "key": 0,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Article choice follows initial sound: MRI starts with the vowel sound em, while university starts with the consonant sound yoo.\n\nStep 3: Among the options, “an; a” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: an; a."
  },
  {
    "id": "apt-original-verbal-16",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "The voltage fluctuation may ___ the result; its ___ is not yet known.",
    "choices": [
      "effect; affect",
      "affect; effect",
      "affect; affect",
      "effect; effect"
    ],
    "key": 1,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Affect is the verb meaning influence; effect is the noun meaning a result or consequence in this context.\n\nStep 3: Among the options, “affect; effect” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: affect; effect."
  },
  {
    "id": "apt-original-verbal-17",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "A speaker may ___ a conclusion, while a listener may ___ it.",
    "choices": [
      "infer; imply",
      "imply; imply",
      "imply; infer",
      "infer; infer"
    ],
    "key": 2,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Imply concerns suggesting a meaning; infer concerns drawing that meaning from evidence.\n\nStep 3: Among the options, “imply; infer” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: imply; infer."
  },
  {
    "id": "apt-original-verbal-18",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "The new sensor will ___ the existing system; the reviewer offered a ___.",
    "choices": [
      "compliment; complement",
      "complement; complement",
      "compliment; compliment",
      "complement; compliment"
    ],
    "key": 3,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Complement means complete or enhance; compliment means praise. Their similar spelling does not make them interchangeable.\n\nStep 3: Among the options, “complement; compliment” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: complement; compliment."
  },
  {
    "id": "apt-original-verbal-19",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "The vehicle remained ___ outside the shop selling ___.",
    "choices": [
      "stationary; stationery",
      "stationery; stationary",
      "stationary; stationary",
      "stationery; stationery"
    ],
    "key": 0,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Stationary means not moving; stationery names writing supplies.\n\nStep 3: Among the options, “stationary; stationery” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: stationary; stationery."
  },
  {
    "id": "apt-original-verbal-20",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "To deliberately disobey a regulation is to ___ it.",
    "choices": [
      "flaunt",
      "flout",
      "foster",
      "flatter"
    ],
    "key": 1,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Flout means openly disregard; flaunt means display ostentatiously and is not the verb for violating a rule.\n\nStep 3: Among the options, “flout” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: flout."
  },
  {
    "id": "apt-original-verbal-21",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "A meticulous inspector is best described as ___.",
    "choices": [
      "indifferent to accuracy",
      "unwilling to inspect",
      "careful about small details",
      "excessively hurried"
    ],
    "key": 2,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Meticulous denotes close attention to detail and precision rather than speed or indifference.\n\nStep 3: Among the options, “careful about small details” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: careful about small details."
  },
  {
    "id": "apt-original-verbal-22",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Which word is closest to the opposite of laconic?",
    "choices": [
      "concise",
      "terse",
      "brief",
      "verbose"
    ],
    "key": 3,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Laconic means using few words; verbose means using more words than necessary.\n\nStep 3: Among the options, “verbose” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: verbose."
  },
  {
    "id": "apt-original-verbal-23",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Which word is closest to the opposite of equivocal?",
    "choices": [
      "unambiguous",
      "uncertain",
      "ambivalent",
      "indefinite"
    ],
    "key": 0,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Equivocal permits multiple interpretations or avoids a clear commitment; unambiguous excludes that uncertainty.\n\nStep 3: Among the options, “unambiguous” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: unambiguous."
  },
  {
    "id": "apt-original-verbal-24",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Which action is opposite in meaning to mitigating a risk?",
    "choices": [
      "reducing it",
      "intensifying it",
      "alleviating it",
      "lessening it"
    ],
    "key": 1,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Mitigate means make less severe, so intensify gives the required contrast.\n\nStep 3: Among the options, “intensifying it” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: intensifying it."
  },
  {
    "id": "apt-original-verbal-25",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "A ubiquitous technology is one that is ___.",
    "choices": [
      "restricted to one laboratory",
      "not yet invented",
      "found almost everywhere",
      "no longer in use"
    ],
    "key": 2,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Ubiquitous describes widespread presence rather than age, novelty or technical sophistication.\n\nStep 3: Among the options, “found almost everywhere” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: found almost everywhere."
  },
  {
    "id": "apt-original-verbal-26",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "A pragmatic solution primarily emphasizes ___.",
    "choices": [
      "abstract elegance regardless of use",
      "ceremonial tradition",
      "deliberate uncertainty",
      "practical effectiveness"
    ],
    "key": 3,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Pragmatic concerns what works in actual conditions, rather than a purely theoretical or ceremonial preference.\n\nStep 3: Among the options, “practical effectiveness” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: practical effectiveness."
  },
  {
    "id": "apt-original-verbal-27",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "An obsolete component is one that is ___.",
    "choices": [
      "outdated or no longer used",
      "newly patented",
      "always unreliable",
      "not yet tested"
    ],
    "key": 0,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Obsolete describes loss of current use or relevance; it does not by itself prove that every individual component fails.\n\nStep 3: Among the options, “outdated or no longer used” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: outdated or no longer used."
  },
  {
    "id": "apt-original-verbal-28",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "A tenuous link between two findings is a ___ link.",
    "choices": [
      "certain",
      "weak",
      "unbreakable",
      "directly proven"
    ],
    "key": 1,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Tenuous means slight, weak or insufficiently substantial. It is not a statement of demonstrated causation.\n\nStep 3: Among the options, “weak” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: weak."
  },
  {
    "id": "apt-original-verbal-29",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "A pilot study improved average accuracy from 80% to 84%, but used only ten cases. Which statement is best supported?",
    "choices": [
      "Every future case will improve.",
      "The method is certainly worse.",
      "The observed sample improved; wider reliability still needs testing.",
      "The population improvement is exactly four points."
    ],
    "key": 2,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: A small observed improvement supports a sample-level statement; it does not establish an exact population effect or universal outcome.\n\nStep 3: Among the options, “The observed sample improved; wider reliability still needs testing.” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: The observed sample improved; wider reliability still needs testing.."
  },
  {
    "id": "apt-original-verbal-30",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "All inspected units passed the test. Only one-quarter of production was inspected. What follows necessarily?",
    "choices": [
      "Every produced unit passed.",
      "Exactly three-quarters failed.",
      "No uninspected unit can pass.",
      "Every inspected unit passed."
    ],
    "key": 3,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: A universal statement about a sampled subset cannot be extended to the uninspected remainder without additional evidence.\n\nStep 3: Among the options, “Every inspected unit passed.” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: Every inspected unit passed.."
  },
  {
    "id": "apt-original-verbal-31",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "A city’s bus use rose after fares fell. Which conclusion is justified by these facts alone?",
    "choices": [
      "The change is consistent with a fare effect, but causation is not established.",
      "Lower fares were certainly the sole cause.",
      "All riders previously used cars.",
      "Bus use must fall next month."
    ],
    "key": 0,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: An observed sequence or correlation does not exclude simultaneous changes or establish a unique causal mechanism.\n\nStep 3: Among the options, “The change is consistent with a fare effect, but causation is not established.” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: The change is consistent with a fare effect, but causation is not established.."
  },
  {
    "id": "apt-original-verbal-32",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "A report says “some faults are intermittent.” Which statement must be true?",
    "choices": [
      "All faults are intermittent.",
      "At least one fault is intermittent.",
      "No intermittent event is a fault.",
      "Most faults are intermittent."
    ],
    "key": 1,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Some is an existential quantifier: it guarantees at least one example but does not fix a majority or a universal pattern.\n\nStep 3: Among the options, “At least one fault is intermittent.” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: At least one fault is intermittent.."
  },
  {
    "id": "apt-original-verbal-33",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Choose the best order: P: Finally, document the result. Q: First, calibrate the sensor. R: Then, collect readings. S: Next, analyze the readings.",
    "choices": [
      "P–Q–R–S",
      "R–Q–P–S",
      "Q–R–S–P",
      "S–R–Q–P"
    ],
    "key": 2,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: The temporal markers establish calibration before collection, collection before analysis, and documentation last.\n\nStep 3: Among the options, “Q–R–S–P” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: Q–R–S–P."
  },
  {
    "id": "apt-original-verbal-34",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Choose the best order: P: This expansion raises pressure. Q: A sealed gas is heated. R: The higher pressure moves the piston. S: The gas tends to expand.",
    "choices": [
      "S–Q–R–P",
      "P–Q–S–R",
      "R–P–S–Q",
      "Q–S–P–R"
    ],
    "key": 3,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: The event chain begins with heating, followed by expansion tendency, pressure increase and piston motion.\n\nStep 3: Among the options, “Q–S–P–R” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: Q–S–P–R."
  },
  {
    "id": "apt-original-verbal-35",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Choose the correct passive form of “The team has verified the result.”",
    "choices": [
      "The result has been verified by the team.",
      "The result was verify by the team.",
      "The result has verified by the team.",
      "The result is been verified by the team."
    ],
    "key": 0,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: A present-perfect passive uses has or have been plus the past participle, preserving the original tense.\n\nStep 3: Among the options, “The result has been verified by the team.” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: The result has been verified by the team.."
  },
  {
    "id": "apt-original-verbal-36",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Choose the standard indirect report of a past statement: Riya said, “I am ready.”",
    "choices": [
      "Riya said that I am ready.",
      "Riya said that she was ready.",
      "Riya says that she were ready.",
      "Riya said that she ready."
    ],
    "key": 1,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: In a standard backshifted report after past-tense said, am becomes was and I refers to the original speaker as she.\n\nStep 3: Among the options, “Riya said that she was ready.” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: Riya said that she was ready.."
  },
  {
    "id": "apt-original-verbal-37",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "Choose the sentence with correct agreement.",
    "choices": [
      "The list of selected candidates are on the noticeboard.",
      "The list of selected candidates have on the noticeboard.",
      "The list of selected candidates is on the noticeboard.",
      "The list of selected candidates were are on the noticeboard."
    ],
    "key": 2,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: The head of the subject phrase is singular list; candidates belongs to the modifying of-phrase.\n\nStep 3: Among the options, “The list of selected candidates is on the noticeboard.” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: The list of selected candidates is on the noticeboard.."
  },
  {
    "id": "apt-original-verbal-38",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "The trial was postponed ___ heavy rain.",
    "choices": [
      "because",
      "although of",
      "despite of",
      "because of"
    ],
    "key": 3,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Because of takes a noun phrase; because requires a clause with its own subject and verb.\n\nStep 3: Among the options, “because of” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: because of."
  },
  {
    "id": "apt-original-verbal-39",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "A statement is described as corroborated when it is ___.",
    "choices": [
      "supported by additional evidence",
      "withdrawn without explanation",
      "deliberately contradicted",
      "made impossible to check"
    ],
    "key": 0,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: Corroboration is independent support or confirmation, not merely repetition or denial.\n\nStep 3: Among the options, “supported by additional evidence” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: supported by additional evidence."
  },
  {
    "id": "apt-original-verbal-40",
    "topic": "apt",
    "bank": "original",
    "category": "Verbal",
    "level": "GATE-style",
    "prompt": "An argument assumes that a condition is necessary when it claims ___.",
    "choices": [
      "the condition alone always guarantees the outcome",
      "the outcome cannot occur without that condition",
      "the outcome proves every other condition",
      "the condition is irrelevant to the outcome"
    ],
    "key": 1,
    "why": "Principle: Match grammatical form, precise meaning or logical scope to the context.\n\nStep 1: Identify what the sentence or argument actually asks you to complete or infer.\n\nStep 2: A necessary condition must hold whenever the outcome occurs; that differs from a sufficient condition that guarantees it.\n\nStep 3: Among the options, “the outcome cannot occur without that condition” satisfies that requirement without changing the stated meaning.\n\nCheck and interpretation: Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.\n\nAnswer: the outcome cannot occur without that condition."
  },
  {
    "id": "apt-original-rank-1",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "In a row with no ties, a student is 6th from the left and 17th from the right. How many students are in the row?",
    "choices": [
      "23",
      "21",
      "22",
      "24"
    ],
    "key": 2,
    "why": "Principle: The named person is included in both directional position counts.\n\nStep 1: The left count includes 5 people before the student and the student.\n\nStep 2: The right count includes 16 after the student and the same student.\n\nStep 3: Total is 6+17−1=22.\n\nCheck and interpretation: Subtract one to avoid counting the named student twice.\n\nAnswer: 22."
  },
  {
    "id": "apt-original-implication-1",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "The only rule is: if a report is encrypted, it is verified. Which statement follows necessarily?",
    "choices": [
      "If it is verified, it must be encrypted.",
      "If it is not encrypted, it cannot be verified.",
      "Every report is encrypted.",
      "If the report is not verified, it is not encrypted."
    ],
    "key": 3,
    "why": "Principle: An implication P⇒Q is logically equivalent to its contrapositive ¬Q⇒¬P.\n\nStep 1: Let P mean encrypted and Q mean verified.\n\nStep 2: A case with P true and Q false is forbidden by the rule.\n\nStep 3: Therefore Q being false excludes P, exactly as in the contrapositive.\n\nCheck and interpretation: The converse and inverse are not guaranteed by a one-way implication.\n\nAnswer: If the report is not verified, it is not encrypted.."
  },
  {
    "id": "apt-original-syllogism-1",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "All engineers are graduates. Some engineers are musicians. Which conclusion follows necessarily?",
    "choices": [
      "Some graduates are musicians.",
      "All graduates are engineers.",
      "All musicians are engineers.",
      "No graduates are musicians."
    ],
    "key": 0,
    "why": "Principle: An explicitly existing member of a subset also belongs to its superset.\n\nStep 1: The word some establishes at least one object in both engineers and musicians.\n\nStep 2: Every member of engineers also belongs to graduates.\n\nStep 3: The same witness therefore belongs to both graduates and musicians.\n\nCheck and interpretation: Universal set inclusions cannot be reversed without additional information.\n\nAnswer: Some graduates are musicians.."
  },
  {
    "id": "apt-original-schedule-1",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "5 distinct tasks are arranged in a sequence. Task A must precede B, and C must precede D. There are no other restrictions. How many valid sequences exist?",
    "choices": [
      "60",
      "30",
      "15",
      "120"
    ],
    "key": 1,
    "why": "Principle: For two disjoint ordered pairs, each pair removes half of all permutations independently.\n\nStep 1: There are 5!=120 unrestricted orders.\n\nStep 2: Swapping A and B pairs an order violating A-before-B with one satisfying it, halving the count.\n\nStep 3: The independent C-before-D condition halves it again, leaving 120/4=30.\n\nCheck and interpretation: No requirement says the paired tasks must be adjacent.\n\nAnswer: 30."
  },
  {
    "id": "apt-original-age-ratios-1",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "3 years ago, a child's age to the parent's age was 1:4. In 3 years, it will be 2:5. Find the child's current age in years.",
    "choices": [
      "6",
      "12",
      "9",
      "18"
    ],
    "key": 2,
    "why": "Principle: Write both time-shifted ratios in terms of the same present ages.\n\nStep 1: Let present ages be a and p. The past ratio gives p−3=4(a−3), so p=4a−9.\n\nStep 2: The future ratio gives 5(a+3)=2(p+3), so 2p=5a+9.\n\nStep 3: Substitute to obtain 8a−18=5a+9, hence a=9.\n\nCheck and interpretation: The resulting parent age is 27; both original ratios check exactly.\n\nAnswer: 9."
  },
  {
    "id": "apt-original-truth-1",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "Exactly one of Asha, Bina, Chitra caused an error. Asha says “Bina did it.” Bina says “Chitra did it.” Chitra says “Bina did not do it.” Exactly two statements are true. Who caused the error?",
    "choices": [
      "Asha",
      "Bina",
      "Cannot be determined",
      "Chitra"
    ],
    "key": 3,
    "why": "Principle: Test each possible culprit against the exact required number of true statements.\n\nStep 1: If Asha caused it, only Chitra's statement is true.\n\nStep 2: If Bina caused it, only Asha's statement is true.\n\nStep 3: If Chitra caused it, Bina and Chitra are truthful while Asha is false, satisfying exactly two truths.\n\nCheck and interpretation: The puzzle fixes the truth count, not a permanent truth-teller status for each person.\n\nAnswer: Chitra."
  },
  {
    "id": "apt-original-set-exactly-one-1",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "Among 10 students, 4 study A and 5 study B. Exactly 3 study neither. How many study exactly one of A and B?",
    "choices": [
      "5",
      "7",
      "2",
      "9"
    ],
    "key": 0,
    "why": "Principle: Exactly-one membership equals the union minus the intersection.\n\nStep 1: The union contains 10−3=7.\n\nStep 2: The intersection is 4+5−7=2.\n\nStep 3: Exactly one is 7−2=5.\n\nCheck and interpretation: Adding the two subject totals counts the intersection twice, so it cannot be used directly.\n\nAnswer: 5."
  },
  {
    "id": "apt-original-letter-code-1",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "A code shifts every capital letter by the same number of positions forward, wrapping after Z. CODE becomes FRGH. How is EXAM encoded?",
    "choices": [
      "GZCO",
      "HADP",
      "IBEQ",
      "JCFR"
    ],
    "key": 1,
    "why": "Principle: A fixed Caesar shift is applied independently to each letter modulo 26.\n\nStep 1: Comparing C with F reveals a forward shift of 3.\n\nStep 2: Apply the same shift to E, X, A and M, wrapping any index beyond Z back to A.\n\nStep 3: The transformed letters form HADP.\n\nCheck and interpretation: The positions of letters in the word remain unchanged; only their alphabet indices move.\n\nAnswer: HADP."
  },
  {
    "id": "apt-original-cube-one-face-1",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A cube is painted on all six exterior faces and cut into 4×4×4 equal cubes. How many small cubes have paint on exactly one face?",
    "choices": [
      "54",
      "96",
      "24",
      "25"
    ],
    "key": 2,
    "why": "Principle: Exactly-one-face cubes lie in the interior of an exterior face, excluding all edges.\n\nStep 1: Each face has an interior grid of (4−2)×(4−2) small cubes.\n\nStep 2: There are six faces with disjoint face interiors.\n\nStep 3: The count is 6×2²=24.\n\nCheck and interpretation: Edge and corner cubes have two or three painted faces and must be excluded.\n\nAnswer: 24."
  },
  {
    "id": "apt-original-cube-two-faces-1",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "All faces of a cube are painted, then it is cut into 4 equal divisions along each edge. How many small cubes have paint on exactly two faces?",
    "choices": [
      "8",
      "48",
      "25",
      "24"
    ],
    "key": 3,
    "why": "Principle: Exactly-two-face cubes occupy an edge interior rather than a corner.\n\nStep 1: A cube has 12 edges.\n\nStep 2: Each edge contributes 4−2=2 small cubes after excluding its two corners.\n\nStep 3: The count is 12×2=24.\n\nCheck and interpretation: Corner cubes have three painted faces and are not counted even though they also touch multiple edges.\n\nAnswer: 24."
  },
  {
    "id": "apt-original-orthogonal-cuts-1",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A cuboid receives 1 cuts parallel to one face, 2 parallel to a second perpendicular face, and 3 parallel to the third. Every cut spans the whole cuboid and no cuts coincide. How many pieces result?",
    "choices": [
      "24",
      "6",
      "23",
      "25"
    ],
    "key": 0,
    "why": "Principle: Cuts in three mutually perpendicular families form a rectangular grid of independent subdivisions.\n\nStep 1: The first family creates 2 layers.\n\nStep 2: The second divides each layer into 3 strips, and the third divides each strip into 4 pieces.\n\nStep 3: Multiply to obtain (2)(3)(4)=24.\n\nCheck and interpretation: The number of intervals is one greater than the number of cuts in each direction.\n\nAnswer: 24."
  },
  {
    "id": "apt-original-rotation-1",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "Point P=(2, 3) is rotated 90° clockwise about the origin in a standard Cartesian plane. What are its new coordinates?",
    "choices": [
      "(−3, 2)",
      "(3, −2)",
      "(−2, −3)",
      "(2, −3)"
    ],
    "key": 1,
    "why": "Principle: A clockwise quarter-turn maps (x,y) to (y,−x).\n\nStep 1: The x-coordinate of the rotated point is the original y-coordinate, 3.\n\nStep 2: The new y-coordinate is the negative of the original x-coordinate, −2.\n\nStep 3: Thus P becomes (3,−2), with its distance from the origin unchanged.\n\nCheck and interpretation: A counterclockwise turn would instead give (−y,x); a reflection changes only one coordinate without exchanging them.\n\nAnswer: (3, −2)."
  },
  {
    "id": "apt-original-grid-rectangles-1",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A grid contains 3 rows and 4 columns of unit squares. How many axis-aligned rectangles, including squares, are formed by grid lines?",
    "choices": [
      "12",
      "20",
      "60",
      "120"
    ],
    "key": 2,
    "why": "Principle: Every axis-aligned rectangle is uniquely specified by two horizontal and two vertical boundary lines.\n\nStep 1: There are 4 horizontal lines, providing C(4,2)=6 pairs.\n\nStep 2: There are 5 vertical lines, providing C(5,2)=10 pairs.\n\nStep 3: Multiply the independent choices to obtain 60 rectangles.\n\nCheck and interpretation: Squares count as rectangles. Counting just the unit cells omits rectangles spanning multiple cells.\n\nAnswer: 60."
  },
  {
    "id": "apt-original-folded-holes-1",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A sheet is folded exactly in half 3 times, doubling the stacked layers each time. One small hole is punched through every layer at a point that unfolds to distinct interior locations and lies on no crease. How many holes appear after unfolding?",
    "choices": [
      "3",
      "6",
      "7",
      "8"
    ],
    "key": 3,
    "why": "Principle: Each complete half-fold doubles the number of sheet layers. An interior punch through all layers creates one distinct hole per layer under the stated conditions.\n\nStep 1: After one fold there are 2 layers.\n\nStep 2: After 3 folds there are 2^3=8 layers.\n\nStep 3: The punch passes through all of them, leaving 8 distinct holes after unfolding.\n\nCheck and interpretation: Punches on creases or boundaries could merge locations; the question excludes those special cases.\n\nAnswer: 8."
  },
  {
    "id": "apt-original-rank-2",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "In a row with no ties, a student is 7th from the left and 18th from the right. How many students are in the row?",
    "choices": [
      "24",
      "25",
      "23",
      "26"
    ],
    "key": 0,
    "why": "Principle: The named person is included in both directional position counts.\n\nStep 1: The left count includes 6 people before the student and the student.\n\nStep 2: The right count includes 17 after the student and the same student.\n\nStep 3: Total is 7+18−1=24.\n\nCheck and interpretation: Subtract one to avoid counting the named student twice.\n\nAnswer: 24."
  },
  {
    "id": "apt-original-implication-2",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "The only rule is: if a report is approved, it is signed. Which statement follows necessarily?",
    "choices": [
      "If it is signed, it must be approved.",
      "If the report is not signed, it is not approved.",
      "If it is not approved, it cannot be signed.",
      "Every report is approved."
    ],
    "key": 1,
    "why": "Principle: An implication P⇒Q is logically equivalent to its contrapositive ¬Q⇒¬P.\n\nStep 1: Let P mean approved and Q mean signed.\n\nStep 2: A case with P true and Q false is forbidden by the rule.\n\nStep 3: Therefore Q being false excludes P, exactly as in the contrapositive.\n\nCheck and interpretation: The converse and inverse are not guaranteed by a one-way implication.\n\nAnswer: If the report is not signed, it is not approved.."
  },
  {
    "id": "apt-original-syllogism-2",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "All roses are plants. Some roses are red objects. Which conclusion follows necessarily?",
    "choices": [
      "All plants are roses.",
      "All red objects are roses.",
      "Some plants are red objects.",
      "No plants are red objects."
    ],
    "key": 2,
    "why": "Principle: An explicitly existing member of a subset also belongs to its superset.\n\nStep 1: The word some establishes at least one object in both roses and red objects.\n\nStep 2: Every member of roses also belongs to plants.\n\nStep 3: The same witness therefore belongs to both plants and red objects.\n\nCheck and interpretation: Universal set inclusions cannot be reversed without additional information.\n\nAnswer: Some plants are red objects.."
  },
  {
    "id": "apt-original-schedule-2",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "6 distinct tasks are arranged in a sequence. Task A must precede B, and C must precede D. There are no other restrictions. How many valid sequences exist?",
    "choices": [
      "360",
      "90",
      "720",
      "180"
    ],
    "key": 3,
    "why": "Principle: For two disjoint ordered pairs, each pair removes half of all permutations independently.\n\nStep 1: There are 6!=720 unrestricted orders.\n\nStep 2: Swapping A and B pairs an order violating A-before-B with one satisfying it, halving the count.\n\nStep 3: The independent C-before-D condition halves it again, leaving 720/4=180.\n\nCheck and interpretation: No requirement says the paired tasks must be adjacent.\n\nAnswer: 180."
  },
  {
    "id": "apt-original-age-ratios-2",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "4 years ago, a child's age to the parent's age was 1:4. In 4 years, it will be 2:5. Find the child's current age in years.",
    "choices": [
      "12",
      "8",
      "16",
      "24"
    ],
    "key": 0,
    "why": "Principle: Write both time-shifted ratios in terms of the same present ages.\n\nStep 1: Let present ages be a and p. The past ratio gives p−4=4(a−4), so p=4a−12.\n\nStep 2: The future ratio gives 5(a+4)=2(p+4), so 2p=5a+12.\n\nStep 3: Substitute to obtain 8a−24=5a+12, hence a=12.\n\nCheck and interpretation: The resulting parent age is 36; both original ratios check exactly.\n\nAnswer: 12."
  },
  {
    "id": "apt-original-truth-2",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "Exactly one of Dev, Eshan, Farid caused an error. Dev says “Eshan did it.” Eshan says “Farid did it.” Farid says “Eshan did not do it.” Exactly two statements are true. Who caused the error?",
    "choices": [
      "Dev",
      "Farid",
      "Eshan",
      "Cannot be determined"
    ],
    "key": 1,
    "why": "Principle: Test each possible culprit against the exact required number of true statements.\n\nStep 1: If Dev caused it, only Farid's statement is true.\n\nStep 2: If Eshan caused it, only Dev's statement is true.\n\nStep 3: If Farid caused it, Eshan and Farid are truthful while Dev is false, satisfying exactly two truths.\n\nCheck and interpretation: The puzzle fixes the truth count, not a permanent truth-teller status for each person.\n\nAnswer: Farid."
  },
  {
    "id": "apt-original-set-exactly-one-2",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "Among 20 students, 8 study A and 10 study B. Exactly 6 study neither. How many study exactly one of A and B?",
    "choices": [
      "14",
      "4",
      "10",
      "18"
    ],
    "key": 2,
    "why": "Principle: Exactly-one membership equals the union minus the intersection.\n\nStep 1: The union contains 20−6=14.\n\nStep 2: The intersection is 8+10−14=4.\n\nStep 3: Exactly one is 14−4=10.\n\nCheck and interpretation: Adding the two subject totals counts the intersection twice, so it cannot be used directly.\n\nAnswer: 10."
  },
  {
    "id": "apt-original-letter-code-2",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "A code shifts every capital letter by the same number of positions forward, wrapping after Z. CODE becomes GSHI. How is EXAM encoded?",
    "choices": [
      "HADP",
      "JCFR",
      "KDGS",
      "IBEQ"
    ],
    "key": 3,
    "why": "Principle: A fixed Caesar shift is applied independently to each letter modulo 26.\n\nStep 1: Comparing C with G reveals a forward shift of 4.\n\nStep 2: Apply the same shift to E, X, A and M, wrapping any index beyond Z back to A.\n\nStep 3: The transformed letters form IBEQ.\n\nCheck and interpretation: The positions of letters in the word remain unchanged; only their alphabet indices move.\n\nAnswer: IBEQ."
  },
  {
    "id": "apt-original-cube-one-face-2",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A cube is painted on all six exterior faces and cut into 5×5×5 equal cubes. How many small cubes have paint on exactly one face?",
    "choices": [
      "54",
      "96",
      "36",
      "150"
    ],
    "key": 0,
    "why": "Principle: Exactly-one-face cubes lie in the interior of an exterior face, excluding all edges.\n\nStep 1: Each face has an interior grid of (5−2)×(5−2) small cubes.\n\nStep 2: There are six faces with disjoint face interiors.\n\nStep 3: The count is 6×3²=54.\n\nCheck and interpretation: Edge and corner cubes have two or three painted faces and must be excluded.\n\nAnswer: 54."
  },
  {
    "id": "apt-original-cube-two-faces-2",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "All faces of a cube are painted, then it is cut into 5 equal divisions along each edge. How many small cubes have paint on exactly two faces?",
    "choices": [
      "8",
      "36",
      "54",
      "60"
    ],
    "key": 1,
    "why": "Principle: Exactly-two-face cubes occupy an edge interior rather than a corner.\n\nStep 1: A cube has 12 edges.\n\nStep 2: Each edge contributes 5−2=3 small cubes after excluding its two corners.\n\nStep 3: The count is 12×3=36.\n\nCheck and interpretation: Corner cubes have three painted faces and are not counted even though they also touch multiple edges.\n\nAnswer: 36."
  },
  {
    "id": "apt-original-orthogonal-cuts-2",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A cuboid receives 2 cuts parallel to one face, 3 parallel to a second perpendicular face, and 4 parallel to the third. Every cut spans the whole cuboid and no cuts coincide. How many pieces result?",
    "choices": [
      "24",
      "9",
      "60",
      "59"
    ],
    "key": 2,
    "why": "Principle: Cuts in three mutually perpendicular families form a rectangular grid of independent subdivisions.\n\nStep 1: The first family creates 3 layers.\n\nStep 2: The second divides each layer into 4 strips, and the third divides each strip into 5 pieces.\n\nStep 3: Multiply to obtain (3)(4)(5)=60.\n\nCheck and interpretation: The number of intervals is one greater than the number of cuts in each direction.\n\nAnswer: 60."
  },
  {
    "id": "apt-original-rotation-2",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "Point P=(3, 5) is rotated 90° clockwise about the origin in a standard Cartesian plane. What are its new coordinates?",
    "choices": [
      "(−5, 3)",
      "(−3, −5)",
      "(3, −5)",
      "(5, −3)"
    ],
    "key": 3,
    "why": "Principle: A clockwise quarter-turn maps (x,y) to (y,−x).\n\nStep 1: The x-coordinate of the rotated point is the original y-coordinate, 5.\n\nStep 2: The new y-coordinate is the negative of the original x-coordinate, −3.\n\nStep 3: Thus P becomes (5,−3), with its distance from the origin unchanged.\n\nCheck and interpretation: A counterclockwise turn would instead give (−y,x); a reflection changes only one coordinate without exchanging them.\n\nAnswer: (5, −3)."
  },
  {
    "id": "apt-original-grid-rectangles-2",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A grid contains 4 rows and 5 columns of unit squares. How many axis-aligned rectangles, including squares, are formed by grid lines?",
    "choices": [
      "150",
      "20",
      "30",
      "300"
    ],
    "key": 0,
    "why": "Principle: Every axis-aligned rectangle is uniquely specified by two horizontal and two vertical boundary lines.\n\nStep 1: There are 5 horizontal lines, providing C(5,2)=10 pairs.\n\nStep 2: There are 6 vertical lines, providing C(6,2)=15 pairs.\n\nStep 3: Multiply the independent choices to obtain 150 rectangles.\n\nCheck and interpretation: Squares count as rectangles. Counting just the unit cells omits rectangles spanning multiple cells.\n\nAnswer: 150."
  },
  {
    "id": "apt-original-folded-holes-2",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A sheet is folded exactly in half 4 times, doubling the stacked layers each time. One small hole is punched through every layer at a point that unfolds to distinct interior locations and lies on no crease. How many holes appear after unfolding?",
    "choices": [
      "4",
      "16",
      "8",
      "15"
    ],
    "key": 1,
    "why": "Principle: Each complete half-fold doubles the number of sheet layers. An interior punch through all layers creates one distinct hole per layer under the stated conditions.\n\nStep 1: After one fold there are 2 layers.\n\nStep 2: After 4 folds there are 2^4=16 layers.\n\nStep 3: The punch passes through all of them, leaving 16 distinct holes after unfolding.\n\nCheck and interpretation: Punches on creases or boundaries could merge locations; the question excludes those special cases.\n\nAnswer: 16."
  },
  {
    "id": "apt-original-rank-3",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "In a row with no ties, a student is 8th from the left and 19th from the right. How many students are in the row?",
    "choices": [
      "27",
      "25",
      "26",
      "28"
    ],
    "key": 2,
    "why": "Principle: The named person is included in both directional position counts.\n\nStep 1: The left count includes 7 people before the student and the student.\n\nStep 2: The right count includes 18 after the student and the same student.\n\nStep 3: Total is 8+19−1=26.\n\nCheck and interpretation: Subtract one to avoid counting the named student twice.\n\nAnswer: 26."
  },
  {
    "id": "apt-original-implication-3",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "The only rule is: if a report is complete, it is archived. Which statement follows necessarily?",
    "choices": [
      "If it is archived, it must be complete.",
      "If it is not complete, it cannot be archived.",
      "Every report is complete.",
      "If the report is not archived, it is not complete."
    ],
    "key": 3,
    "why": "Principle: An implication P⇒Q is logically equivalent to its contrapositive ¬Q⇒¬P.\n\nStep 1: Let P mean complete and Q mean archived.\n\nStep 2: A case with P true and Q false is forbidden by the rule.\n\nStep 3: Therefore Q being false excludes P, exactly as in the contrapositive.\n\nCheck and interpretation: The converse and inverse are not guaranteed by a one-way implication.\n\nAnswer: If the report is not archived, it is not complete.."
  },
  {
    "id": "apt-original-syllogism-3",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "All servers are machines. Some servers are portable objects. Which conclusion follows necessarily?",
    "choices": [
      "Some machines are portable objects.",
      "All machines are servers.",
      "All portable objects are servers.",
      "No machines are portable objects."
    ],
    "key": 0,
    "why": "Principle: An explicitly existing member of a subset also belongs to its superset.\n\nStep 1: The word some establishes at least one object in both servers and portable objects.\n\nStep 2: Every member of servers also belongs to machines.\n\nStep 3: The same witness therefore belongs to both machines and portable objects.\n\nCheck and interpretation: Universal set inclusions cannot be reversed without additional information.\n\nAnswer: Some machines are portable objects.."
  },
  {
    "id": "apt-original-schedule-3",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "7 distinct tasks are arranged in a sequence. Task A must precede B, and C must precede D. There are no other restrictions. How many valid sequences exist?",
    "choices": [
      "2520",
      "1260",
      "630",
      "5040"
    ],
    "key": 1,
    "why": "Principle: For two disjoint ordered pairs, each pair removes half of all permutations independently.\n\nStep 1: There are 7!=5040 unrestricted orders.\n\nStep 2: Swapping A and B pairs an order violating A-before-B with one satisfying it, halving the count.\n\nStep 3: The independent C-before-D condition halves it again, leaving 5040/4=1260.\n\nCheck and interpretation: No requirement says the paired tasks must be adjacent.\n\nAnswer: 1260."
  },
  {
    "id": "apt-original-age-ratios-3",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "5 years ago, a child's age to the parent's age was 1:4. In 5 years, it will be 2:5. Find the child's current age in years.",
    "choices": [
      "10",
      "20",
      "15",
      "30"
    ],
    "key": 2,
    "why": "Principle: Write both time-shifted ratios in terms of the same present ages.\n\nStep 1: Let present ages be a and p. The past ratio gives p−5=4(a−5), so p=4a−15.\n\nStep 2: The future ratio gives 5(a+5)=2(p+5), so 2p=5a+15.\n\nStep 3: Substitute to obtain 8a−30=5a+15, hence a=15.\n\nCheck and interpretation: The resulting parent age is 45; both original ratios check exactly.\n\nAnswer: 15."
  },
  {
    "id": "apt-original-truth-3",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "Exactly one of Gita, Hema, Indu caused an error. Gita says “Hema did it.” Hema says “Indu did it.” Indu says “Hema did not do it.” Exactly two statements are true. Who caused the error?",
    "choices": [
      "Gita",
      "Hema",
      "Cannot be determined",
      "Indu"
    ],
    "key": 3,
    "why": "Principle: Test each possible culprit against the exact required number of true statements.\n\nStep 1: If Gita caused it, only Indu's statement is true.\n\nStep 2: If Hema caused it, only Gita's statement is true.\n\nStep 3: If Indu caused it, Hema and Indu are truthful while Gita is false, satisfying exactly two truths.\n\nCheck and interpretation: The puzzle fixes the truth count, not a permanent truth-teller status for each person.\n\nAnswer: Indu."
  },
  {
    "id": "apt-original-set-exactly-one-3",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "Among 30 students, 12 study A and 15 study B. Exactly 9 study neither. How many study exactly one of A and B?",
    "choices": [
      "15",
      "21",
      "6",
      "27"
    ],
    "key": 0,
    "why": "Principle: Exactly-one membership equals the union minus the intersection.\n\nStep 1: The union contains 30−9=21.\n\nStep 2: The intersection is 12+15−21=6.\n\nStep 3: Exactly one is 21−6=15.\n\nCheck and interpretation: Adding the two subject totals counts the intersection twice, so it cannot be used directly.\n\nAnswer: 15."
  },
  {
    "id": "apt-original-letter-code-3",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "A code shifts every capital letter by the same number of positions forward, wrapping after Z. CODE becomes HTIJ. How is EXAM encoded?",
    "choices": [
      "IBEQ",
      "JCFR",
      "KDGS",
      "LEHT"
    ],
    "key": 1,
    "why": "Principle: A fixed Caesar shift is applied independently to each letter modulo 26.\n\nStep 1: Comparing C with H reveals a forward shift of 5.\n\nStep 2: Apply the same shift to E, X, A and M, wrapping any index beyond Z back to A.\n\nStep 3: The transformed letters form JCFR.\n\nCheck and interpretation: The positions of letters in the word remain unchanged; only their alphabet indices move.\n\nAnswer: JCFR."
  },
  {
    "id": "apt-original-cube-one-face-3",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A cube is painted on all six exterior faces and cut into 6×6×6 equal cubes. How many small cubes have paint on exactly one face?",
    "choices": [
      "150",
      "48",
      "96",
      "216"
    ],
    "key": 2,
    "why": "Principle: Exactly-one-face cubes lie in the interior of an exterior face, excluding all edges.\n\nStep 1: Each face has an interior grid of (6−2)×(6−2) small cubes.\n\nStep 2: There are six faces with disjoint face interiors.\n\nStep 3: The count is 6×4²=96.\n\nCheck and interpretation: Edge and corner cubes have two or three painted faces and must be excluded.\n\nAnswer: 96."
  },
  {
    "id": "apt-original-cube-two-faces-3",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "All faces of a cube are painted, then it is cut into 6 equal divisions along each edge. How many small cubes have paint on exactly two faces?",
    "choices": [
      "8",
      "96",
      "72",
      "48"
    ],
    "key": 3,
    "why": "Principle: Exactly-two-face cubes occupy an edge interior rather than a corner.\n\nStep 1: A cube has 12 edges.\n\nStep 2: Each edge contributes 6−2=4 small cubes after excluding its two corners.\n\nStep 3: The count is 12×4=48.\n\nCheck and interpretation: Corner cubes have three painted faces and are not counted even though they also touch multiple edges.\n\nAnswer: 48."
  },
  {
    "id": "apt-original-orthogonal-cuts-3",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A cuboid receives 3 cuts parallel to one face, 4 parallel to a second perpendicular face, and 5 parallel to the third. Every cut spans the whole cuboid and no cuts coincide. How many pieces result?",
    "choices": [
      "120",
      "60",
      "12",
      "119"
    ],
    "key": 0,
    "why": "Principle: Cuts in three mutually perpendicular families form a rectangular grid of independent subdivisions.\n\nStep 1: The first family creates 4 layers.\n\nStep 2: The second divides each layer into 5 strips, and the third divides each strip into 6 pieces.\n\nStep 3: Multiply to obtain (4)(5)(6)=120.\n\nCheck and interpretation: The number of intervals is one greater than the number of cuts in each direction.\n\nAnswer: 120."
  },
  {
    "id": "apt-original-rotation-3",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "Point P=(4, 7) is rotated 90° clockwise about the origin in a standard Cartesian plane. What are its new coordinates?",
    "choices": [
      "(−7, 4)",
      "(7, −4)",
      "(−4, −7)",
      "(4, −7)"
    ],
    "key": 1,
    "why": "Principle: A clockwise quarter-turn maps (x,y) to (y,−x).\n\nStep 1: The x-coordinate of the rotated point is the original y-coordinate, 7.\n\nStep 2: The new y-coordinate is the negative of the original x-coordinate, −4.\n\nStep 3: Thus P becomes (7,−4), with its distance from the origin unchanged.\n\nCheck and interpretation: A counterclockwise turn would instead give (−y,x); a reflection changes only one coordinate without exchanging them.\n\nAnswer: (7, −4)."
  },
  {
    "id": "apt-original-grid-rectangles-3",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A grid contains 5 rows and 6 columns of unit squares. How many axis-aligned rectangles, including squares, are formed by grid lines?",
    "choices": [
      "30",
      "42",
      "315",
      "630"
    ],
    "key": 2,
    "why": "Principle: Every axis-aligned rectangle is uniquely specified by two horizontal and two vertical boundary lines.\n\nStep 1: There are 6 horizontal lines, providing C(6,2)=15 pairs.\n\nStep 2: There are 7 vertical lines, providing C(7,2)=21 pairs.\n\nStep 3: Multiply the independent choices to obtain 315 rectangles.\n\nCheck and interpretation: Squares count as rectangles. Counting just the unit cells omits rectangles spanning multiple cells.\n\nAnswer: 315."
  },
  {
    "id": "apt-original-folded-holes-3",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A sheet is folded exactly in half 5 times, doubling the stacked layers each time. One small hole is punched through every layer at a point that unfolds to distinct interior locations and lies on no crease. How many holes appear after unfolding?",
    "choices": [
      "5",
      "10",
      "31",
      "32"
    ],
    "key": 3,
    "why": "Principle: Each complete half-fold doubles the number of sheet layers. An interior punch through all layers creates one distinct hole per layer under the stated conditions.\n\nStep 1: After one fold there are 2 layers.\n\nStep 2: After 5 folds there are 2^5=32 layers.\n\nStep 3: The punch passes through all of them, leaving 32 distinct holes after unfolding.\n\nCheck and interpretation: Punches on creases or boundaries could merge locations; the question excludes those special cases.\n\nAnswer: 32."
  },
  {
    "id": "apt-original-rank-4",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "In a row with no ties, a student is 9th from the left and 20th from the right. How many students are in the row?",
    "choices": [
      "28",
      "29",
      "27",
      "30"
    ],
    "key": 0,
    "why": "Principle: The named person is included in both directional position counts.\n\nStep 1: The left count includes 8 people before the student and the student.\n\nStep 2: The right count includes 19 after the student and the same student.\n\nStep 3: Total is 9+20−1=28.\n\nCheck and interpretation: Subtract one to avoid counting the named student twice.\n\nAnswer: 28."
  },
  {
    "id": "apt-original-implication-4",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "The only rule is: if a report is valid, it is registered. Which statement follows necessarily?",
    "choices": [
      "If it is registered, it must be valid.",
      "If the report is not registered, it is not valid.",
      "If it is not valid, it cannot be registered.",
      "Every report is valid."
    ],
    "key": 1,
    "why": "Principle: An implication P⇒Q is logically equivalent to its contrapositive ¬Q⇒¬P.\n\nStep 1: Let P mean valid and Q mean registered.\n\nStep 2: A case with P true and Q false is forbidden by the rule.\n\nStep 3: Therefore Q being false excludes P, exactly as in the contrapositive.\n\nCheck and interpretation: The converse and inverse are not guaranteed by a one-way implication.\n\nAnswer: If the report is not registered, it is not valid.."
  },
  {
    "id": "apt-original-syllogism-4",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "All novels are books. Some novels are translations. Which conclusion follows necessarily?",
    "choices": [
      "All books are novels.",
      "All translations are novels.",
      "Some books are translations.",
      "No books are translations."
    ],
    "key": 2,
    "why": "Principle: An explicitly existing member of a subset also belongs to its superset.\n\nStep 1: The word some establishes at least one object in both novels and translations.\n\nStep 2: Every member of novels also belongs to books.\n\nStep 3: The same witness therefore belongs to both books and translations.\n\nCheck and interpretation: Universal set inclusions cannot be reversed without additional information.\n\nAnswer: Some books are translations.."
  },
  {
    "id": "apt-original-schedule-4",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "8 distinct tasks are arranged in a sequence. Task A must precede B, and C must precede D. There are no other restrictions. How many valid sequences exist?",
    "choices": [
      "20160",
      "5040",
      "40320",
      "10080"
    ],
    "key": 3,
    "why": "Principle: For two disjoint ordered pairs, each pair removes half of all permutations independently.\n\nStep 1: There are 8!=40320 unrestricted orders.\n\nStep 2: Swapping A and B pairs an order violating A-before-B with one satisfying it, halving the count.\n\nStep 3: The independent C-before-D condition halves it again, leaving 40320/4=10080.\n\nCheck and interpretation: No requirement says the paired tasks must be adjacent.\n\nAnswer: 10080."
  },
  {
    "id": "apt-original-age-ratios-4",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "6 years ago, a child's age to the parent's age was 1:4. In 6 years, it will be 2:5. Find the child's current age in years.",
    "choices": [
      "18",
      "12",
      "24",
      "36"
    ],
    "key": 0,
    "why": "Principle: Write both time-shifted ratios in terms of the same present ages.\n\nStep 1: Let present ages be a and p. The past ratio gives p−6=4(a−6), so p=4a−18.\n\nStep 2: The future ratio gives 5(a+6)=2(p+6), so 2p=5a+18.\n\nStep 3: Substitute to obtain 8a−36=5a+18, hence a=18.\n\nCheck and interpretation: The resulting parent age is 54; both original ratios check exactly.\n\nAnswer: 18."
  },
  {
    "id": "apt-original-truth-4",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "Exactly one of Jai, Kiran, Lalit caused an error. Jai says “Kiran did it.” Kiran says “Lalit did it.” Lalit says “Kiran did not do it.” Exactly two statements are true. Who caused the error?",
    "choices": [
      "Jai",
      "Lalit",
      "Kiran",
      "Cannot be determined"
    ],
    "key": 1,
    "why": "Principle: Test each possible culprit against the exact required number of true statements.\n\nStep 1: If Jai caused it, only Lalit's statement is true.\n\nStep 2: If Kiran caused it, only Jai's statement is true.\n\nStep 3: If Lalit caused it, Kiran and Lalit are truthful while Jai is false, satisfying exactly two truths.\n\nCheck and interpretation: The puzzle fixes the truth count, not a permanent truth-teller status for each person.\n\nAnswer: Lalit."
  },
  {
    "id": "apt-original-set-exactly-one-4",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "Among 40 students, 16 study A and 20 study B. Exactly 12 study neither. How many study exactly one of A and B?",
    "choices": [
      "28",
      "8",
      "20",
      "36"
    ],
    "key": 2,
    "why": "Principle: Exactly-one membership equals the union minus the intersection.\n\nStep 1: The union contains 40−12=28.\n\nStep 2: The intersection is 16+20−28=8.\n\nStep 3: Exactly one is 28−8=20.\n\nCheck and interpretation: Adding the two subject totals counts the intersection twice, so it cannot be used directly.\n\nAnswer: 20."
  },
  {
    "id": "apt-original-letter-code-4",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "A code shifts every capital letter by the same number of positions forward, wrapping after Z. CODE becomes IUJK. How is EXAM encoded?",
    "choices": [
      "JCFR",
      "LEHT",
      "MFIU",
      "KDGS"
    ],
    "key": 3,
    "why": "Principle: A fixed Caesar shift is applied independently to each letter modulo 26.\n\nStep 1: Comparing C with I reveals a forward shift of 6.\n\nStep 2: Apply the same shift to E, X, A and M, wrapping any index beyond Z back to A.\n\nStep 3: The transformed letters form KDGS.\n\nCheck and interpretation: The positions of letters in the word remain unchanged; only their alphabet indices move.\n\nAnswer: KDGS."
  },
  {
    "id": "apt-original-cube-one-face-4",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A cube is painted on all six exterior faces and cut into 7×7×7 equal cubes. How many small cubes have paint on exactly one face?",
    "choices": [
      "150",
      "216",
      "60",
      "294"
    ],
    "key": 0,
    "why": "Principle: Exactly-one-face cubes lie in the interior of an exterior face, excluding all edges.\n\nStep 1: Each face has an interior grid of (7−2)×(7−2) small cubes.\n\nStep 2: There are six faces with disjoint face interiors.\n\nStep 3: The count is 6×5²=150.\n\nCheck and interpretation: Edge and corner cubes have two or three painted faces and must be excluded.\n\nAnswer: 150."
  },
  {
    "id": "apt-original-cube-two-faces-4",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "All faces of a cube are painted, then it is cut into 7 equal divisions along each edge. How many small cubes have paint on exactly two faces?",
    "choices": [
      "8",
      "60",
      "150",
      "84"
    ],
    "key": 1,
    "why": "Principle: Exactly-two-face cubes occupy an edge interior rather than a corner.\n\nStep 1: A cube has 12 edges.\n\nStep 2: Each edge contributes 7−2=5 small cubes after excluding its two corners.\n\nStep 3: The count is 12×5=60.\n\nCheck and interpretation: Corner cubes have three painted faces and are not counted even though they also touch multiple edges.\n\nAnswer: 60."
  },
  {
    "id": "apt-original-orthogonal-cuts-4",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A cuboid receives 4 cuts parallel to one face, 5 parallel to a second perpendicular face, and 6 parallel to the third. Every cut spans the whole cuboid and no cuts coincide. How many pieces result?",
    "choices": [
      "120",
      "15",
      "210",
      "209"
    ],
    "key": 2,
    "why": "Principle: Cuts in three mutually perpendicular families form a rectangular grid of independent subdivisions.\n\nStep 1: The first family creates 5 layers.\n\nStep 2: The second divides each layer into 6 strips, and the third divides each strip into 7 pieces.\n\nStep 3: Multiply to obtain (5)(6)(7)=210.\n\nCheck and interpretation: The number of intervals is one greater than the number of cuts in each direction.\n\nAnswer: 210."
  },
  {
    "id": "apt-original-rotation-4",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "Point P=(5, 9) is rotated 90° clockwise about the origin in a standard Cartesian plane. What are its new coordinates?",
    "choices": [
      "(−9, 5)",
      "(−5, −9)",
      "(5, −9)",
      "(9, −5)"
    ],
    "key": 3,
    "why": "Principle: A clockwise quarter-turn maps (x,y) to (y,−x).\n\nStep 1: The x-coordinate of the rotated point is the original y-coordinate, 9.\n\nStep 2: The new y-coordinate is the negative of the original x-coordinate, −5.\n\nStep 3: Thus P becomes (9,−5), with its distance from the origin unchanged.\n\nCheck and interpretation: A counterclockwise turn would instead give (−y,x); a reflection changes only one coordinate without exchanging them.\n\nAnswer: (9, −5)."
  },
  {
    "id": "apt-original-grid-rectangles-4",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A grid contains 6 rows and 7 columns of unit squares. How many axis-aligned rectangles, including squares, are formed by grid lines?",
    "choices": [
      "588",
      "42",
      "56",
      "1176"
    ],
    "key": 0,
    "why": "Principle: Every axis-aligned rectangle is uniquely specified by two horizontal and two vertical boundary lines.\n\nStep 1: There are 7 horizontal lines, providing C(7,2)=21 pairs.\n\nStep 2: There are 8 vertical lines, providing C(8,2)=28 pairs.\n\nStep 3: Multiply the independent choices to obtain 588 rectangles.\n\nCheck and interpretation: Squares count as rectangles. Counting just the unit cells omits rectangles spanning multiple cells.\n\nAnswer: 588."
  },
  {
    "id": "apt-original-folded-holes-4",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A sheet is folded exactly in half 6 times, doubling the stacked layers each time. One small hole is punched through every layer at a point that unfolds to distinct interior locations and lies on no crease. How many holes appear after unfolding?",
    "choices": [
      "6",
      "64",
      "12",
      "63"
    ],
    "key": 1,
    "why": "Principle: Each complete half-fold doubles the number of sheet layers. An interior punch through all layers creates one distinct hole per layer under the stated conditions.\n\nStep 1: After one fold there are 2 layers.\n\nStep 2: After 6 folds there are 2^6=64 layers.\n\nStep 3: The punch passes through all of them, leaving 64 distinct holes after unfolding.\n\nCheck and interpretation: Punches on creases or boundaries could merge locations; the question excludes those special cases.\n\nAnswer: 64."
  },
  {
    "id": "apt-original-rank-5",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "In a row with no ties, a student is 10th from the left and 21st from the right. How many students are in the row?",
    "choices": [
      "31",
      "29",
      "30",
      "32"
    ],
    "key": 2,
    "why": "Principle: The named person is included in both directional position counts.\n\nStep 1: The left count includes 9 people before the student and the student.\n\nStep 2: The right count includes 20 after the student and the same student.\n\nStep 3: Total is 10+21−1=30.\n\nCheck and interpretation: Subtract one to avoid counting the named student twice.\n\nAnswer: 30."
  },
  {
    "id": "apt-original-implication-5",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "The only rule is: if a report is successful, it is recorded. Which statement follows necessarily?",
    "choices": [
      "If it is recorded, it must be successful.",
      "If it is not successful, it cannot be recorded.",
      "Every report is successful.",
      "If the report is not recorded, it is not successful."
    ],
    "key": 3,
    "why": "Principle: An implication P⇒Q is logically equivalent to its contrapositive ¬Q⇒¬P.\n\nStep 1: Let P mean successful and Q mean recorded.\n\nStep 2: A case with P true and Q false is forbidden by the rule.\n\nStep 3: Therefore Q being false excludes P, exactly as in the contrapositive.\n\nCheck and interpretation: The converse and inverse are not guaranteed by a one-way implication.\n\nAnswer: If the report is not recorded, it is not successful.."
  },
  {
    "id": "apt-original-syllogism-5",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "All squares are rectangles. Some squares are blue shapes. Which conclusion follows necessarily?",
    "choices": [
      "Some rectangles are blue shapes.",
      "All rectangles are squares.",
      "All blue shapes are squares.",
      "No rectangles are blue shapes."
    ],
    "key": 0,
    "why": "Principle: An explicitly existing member of a subset also belongs to its superset.\n\nStep 1: The word some establishes at least one object in both squares and blue shapes.\n\nStep 2: Every member of squares also belongs to rectangles.\n\nStep 3: The same witness therefore belongs to both rectangles and blue shapes.\n\nCheck and interpretation: Universal set inclusions cannot be reversed without additional information.\n\nAnswer: Some rectangles are blue shapes.."
  },
  {
    "id": "apt-original-schedule-5",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "9 distinct tasks are arranged in a sequence. Task A must precede B, and C must precede D. There are no other restrictions. How many valid sequences exist?",
    "choices": [
      "181440",
      "90720",
      "45360",
      "362880"
    ],
    "key": 1,
    "why": "Principle: For two disjoint ordered pairs, each pair removes half of all permutations independently.\n\nStep 1: There are 9!=362880 unrestricted orders.\n\nStep 2: Swapping A and B pairs an order violating A-before-B with one satisfying it, halving the count.\n\nStep 3: The independent C-before-D condition halves it again, leaving 362880/4=90720.\n\nCheck and interpretation: No requirement says the paired tasks must be adjacent.\n\nAnswer: 90720."
  },
  {
    "id": "apt-original-age-ratios-5",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "7 years ago, a child's age to the parent's age was 1:4. In 7 years, it will be 2:5. Find the child's current age in years.",
    "choices": [
      "14",
      "28",
      "21",
      "42"
    ],
    "key": 2,
    "why": "Principle: Write both time-shifted ratios in terms of the same present ages.\n\nStep 1: Let present ages be a and p. The past ratio gives p−7=4(a−7), so p=4a−21.\n\nStep 2: The future ratio gives 5(a+7)=2(p+7), so 2p=5a+21.\n\nStep 3: Substitute to obtain 8a−42=5a+21, hence a=21.\n\nCheck and interpretation: The resulting parent age is 63; both original ratios check exactly.\n\nAnswer: 21."
  },
  {
    "id": "apt-original-truth-5",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "Exactly one of Mira, Nila, Ovi caused an error. Mira says “Nila did it.” Nila says “Ovi did it.” Ovi says “Nila did not do it.” Exactly two statements are true. Who caused the error?",
    "choices": [
      "Mira",
      "Nila",
      "Cannot be determined",
      "Ovi"
    ],
    "key": 3,
    "why": "Principle: Test each possible culprit against the exact required number of true statements.\n\nStep 1: If Mira caused it, only Ovi's statement is true.\n\nStep 2: If Nila caused it, only Mira's statement is true.\n\nStep 3: If Ovi caused it, Nila and Ovi are truthful while Mira is false, satisfying exactly two truths.\n\nCheck and interpretation: The puzzle fixes the truth count, not a permanent truth-teller status for each person.\n\nAnswer: Ovi."
  },
  {
    "id": "apt-original-set-exactly-one-5",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "Among 50 students, 20 study A and 25 study B. Exactly 15 study neither. How many study exactly one of A and B?",
    "choices": [
      "25",
      "35",
      "10",
      "45"
    ],
    "key": 0,
    "why": "Principle: Exactly-one membership equals the union minus the intersection.\n\nStep 1: The union contains 50−15=35.\n\nStep 2: The intersection is 20+25−35=10.\n\nStep 3: Exactly one is 35−10=25.\n\nCheck and interpretation: Adding the two subject totals counts the intersection twice, so it cannot be used directly.\n\nAnswer: 25."
  },
  {
    "id": "apt-original-letter-code-5",
    "topic": "apt",
    "bank": "original",
    "category": "Analytical",
    "level": "GATE-style",
    "prompt": "A code shifts every capital letter by the same number of positions forward, wrapping after Z. CODE becomes JVKL. How is EXAM encoded?",
    "choices": [
      "KDGS",
      "LEHT",
      "MFIU",
      "NGJV"
    ],
    "key": 1,
    "why": "Principle: A fixed Caesar shift is applied independently to each letter modulo 26.\n\nStep 1: Comparing C with J reveals a forward shift of 7.\n\nStep 2: Apply the same shift to E, X, A and M, wrapping any index beyond Z back to A.\n\nStep 3: The transformed letters form LEHT.\n\nCheck and interpretation: The positions of letters in the word remain unchanged; only their alphabet indices move.\n\nAnswer: LEHT."
  },
  {
    "id": "apt-original-cube-one-face-5",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A cube is painted on all six exterior faces and cut into 8×8×8 equal cubes. How many small cubes have paint on exactly one face?",
    "choices": [
      "294",
      "72",
      "216",
      "384"
    ],
    "key": 2,
    "why": "Principle: Exactly-one-face cubes lie in the interior of an exterior face, excluding all edges.\n\nStep 1: Each face has an interior grid of (8−2)×(8−2) small cubes.\n\nStep 2: There are six faces with disjoint face interiors.\n\nStep 3: The count is 6×6²=216.\n\nCheck and interpretation: Edge and corner cubes have two or three painted faces and must be excluded.\n\nAnswer: 216."
  },
  {
    "id": "apt-original-cube-two-faces-5",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "All faces of a cube are painted, then it is cut into 8 equal divisions along each edge. How many small cubes have paint on exactly two faces?",
    "choices": [
      "8",
      "216",
      "96",
      "72"
    ],
    "key": 3,
    "why": "Principle: Exactly-two-face cubes occupy an edge interior rather than a corner.\n\nStep 1: A cube has 12 edges.\n\nStep 2: Each edge contributes 8−2=6 small cubes after excluding its two corners.\n\nStep 3: The count is 12×6=72.\n\nCheck and interpretation: Corner cubes have three painted faces and are not counted even though they also touch multiple edges.\n\nAnswer: 72."
  },
  {
    "id": "apt-original-orthogonal-cuts-5",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A cuboid receives 5 cuts parallel to one face, 6 parallel to a second perpendicular face, and 7 parallel to the third. Every cut spans the whole cuboid and no cuts coincide. How many pieces result?",
    "choices": [
      "336",
      "210",
      "18",
      "335"
    ],
    "key": 0,
    "why": "Principle: Cuts in three mutually perpendicular families form a rectangular grid of independent subdivisions.\n\nStep 1: The first family creates 6 layers.\n\nStep 2: The second divides each layer into 7 strips, and the third divides each strip into 8 pieces.\n\nStep 3: Multiply to obtain (6)(7)(8)=336.\n\nCheck and interpretation: The number of intervals is one greater than the number of cuts in each direction.\n\nAnswer: 336."
  },
  {
    "id": "apt-original-rotation-5",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "Point P=(6, 11) is rotated 90° clockwise about the origin in a standard Cartesian plane. What are its new coordinates?",
    "choices": [
      "(−11, 6)",
      "(11, −6)",
      "(−6, −11)",
      "(6, −11)"
    ],
    "key": 1,
    "why": "Principle: A clockwise quarter-turn maps (x,y) to (y,−x).\n\nStep 1: The x-coordinate of the rotated point is the original y-coordinate, 11.\n\nStep 2: The new y-coordinate is the negative of the original x-coordinate, −6.\n\nStep 3: Thus P becomes (11,−6), with its distance from the origin unchanged.\n\nCheck and interpretation: A counterclockwise turn would instead give (−y,x); a reflection changes only one coordinate without exchanging them.\n\nAnswer: (11, −6)."
  },
  {
    "id": "apt-original-grid-rectangles-5",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A grid contains 7 rows and 8 columns of unit squares. How many axis-aligned rectangles, including squares, are formed by grid lines?",
    "choices": [
      "56",
      "72",
      "1008",
      "2016"
    ],
    "key": 2,
    "why": "Principle: Every axis-aligned rectangle is uniquely specified by two horizontal and two vertical boundary lines.\n\nStep 1: There are 8 horizontal lines, providing C(8,2)=28 pairs.\n\nStep 2: There are 9 vertical lines, providing C(9,2)=36 pairs.\n\nStep 3: Multiply the independent choices to obtain 1008 rectangles.\n\nCheck and interpretation: Squares count as rectangles. Counting just the unit cells omits rectangles spanning multiple cells.\n\nAnswer: 1008."
  },
  {
    "id": "apt-original-folded-holes-5",
    "topic": "apt",
    "bank": "original",
    "category": "Spatial",
    "level": "GATE-style",
    "prompt": "A sheet is folded exactly in half 7 times, doubling the stacked layers each time. One small hole is punched through every layer at a point that unfolds to distinct interior locations and lies on no crease. How many holes appear after unfolding?",
    "choices": [
      "7",
      "14",
      "127",
      "128"
    ],
    "key": 3,
    "why": "Principle: Each complete half-fold doubles the number of sheet layers. An interior punch through all layers creates one distinct hole per layer under the stated conditions.\n\nStep 1: After one fold there are 2 layers.\n\nStep 2: After 7 folds there are 2^7=128 layers.\n\nStep 3: The punch passes through all of them, leaving 128 distinct holes after unfolding.\n\nCheck and interpretation: Punches on creases or boundaries could merge locations; the question excludes those special cases.\n\nAnswer: 128."
  }
];
