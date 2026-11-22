import {papers} from './data.js';
import {additionalPractice} from './practice-bank.js';

const gateKeys = (
  'B A D B B A C C C C A D D C D A C D B A B C A A A BD B AB CD ' +
  '0.95:1.05 71.5:72.5 0.95:1.05 20.5:21.5 20:21 4.9:5.1 ' +
  'A A A B B C C C B B B B C A A D B C ABD C AD ABC ACD ' +
  '1386:1386 2.5:2.6 0.6:0.7 2.9:3.1 0.1:0.2 -36.5:-34.5|34.5:36.5 3.7:4.3'
).split(' ');

// Revised Series A key in question order. X marks questions excluded by ISRO.
const isroKeys = (
  'B C C D C D C D C A ' +
  'B B D B C A B C C A ' +
  'A C C B B B D B C A ' +
  'D D C C A C D C B C ' +
  'C A B X C A B B X D ' +
  'B C D A A D A B C B ' +
  'A B C C B C C A A A ' +
  'A A C C C C C A B B ' +
  'D X B C B B D C D C ' +
  'B D D C A '
).trim().split(' ');

const isroPractice = [
  ['A 60 Hz full-wave rectifier feeds a smoothing capacitor. What is the ripple frequency?', ['30 Hz','60 Hz','120 Hz','240 Hz'], 2, 'The capacitor is recharged twice per mains cycle, giving 2 × 60 = 120 Hz.'],
  ['A 12-bit ADC spans 0 to 4.096 V. What is its ideal step size?', ['0.5 mV','1 mV','2 mV','4 mV'], 1, 'Divide the span by 2¹² = 4096 to obtain 0.001 V.'],
  ['A sequential circuit divides a 48 MHz clock by 16. What output frequency results?', ['1.5 MHz','6 MHz','3 MHz','768 MHz'], 2, 'Divide 48 MHz by 16 to obtain 3 MHz.'],
  ['An ideal inverting amplifier uses a 5 kΩ input resistor and a 30 kΩ feedback resistor. What is its voltage gain?', ['−6','−1/6','+6','+7'], 0, 'The inverting gain is −Rf/Rin = −30/5 = −6.'],
  ['Which filter preserves a DC offset while attenuating high-frequency noise?', ['High-pass','Band-pass with a nonzero lower cutoff','Differentiator','Low-pass'], 3, 'A low-pass filter passes frequencies near zero, including DC.'],
  ['A transmission line with characteristic impedance 75 Ω terminates in 75 Ω. What is the load reflection coefficient?', ['−1','0','0.5','1'], 1, 'The numerator of Γ = (ZL − Z₀)/(ZL + Z₀) is zero for a matched load.'],
  ['A unity negative-feedback system has a loop gain of 9 at DC. What is its DC sensitivity to forward-path gain?', ['0.1','1/9','0.9','10'], 0, 'The normalized closed-loop sensitivity to forward-path gain is 1/(1+9) = 0.1.'],
  ['A signal occupies the baseband from DC to 9 kHz. Which rate exceeds its Nyquist rate?', ['9 ksample/s','12 ksample/s','16 ksample/s','20 ksample/s'], 3, 'The Nyquist rate is 2 × 9 = 18 ksample/s. Only 20 exceeds it.'],
  ['An equiprobable 16-symbol source sends 2500 symbols/s. What is the uncoded bit rate using fixed-length labels?', ['2.5 kbit/s','5 kbit/s','10 kbit/s','40 kbit/s'], 2, 'Each label uses log₂(16) = 4 bits, so the bit rate is 4 × 2500 = 10,000 bit/s.'],
  ['A silicon diode in the constant-drop model carries 5 mA from a 5.7 V supply through a resistor. With a diode drop of 0.7 V, find the resistance.', ['100 Ω','1 kΩ','1.14 kΩ','5 kΩ'], 1, 'The resistor drops 5.7 − 0.7 = 5 V. Dividing by 5 mA gives 1 kΩ.'],
  ['An AM carrier has positive envelope extremes of 8 V and 2 V. What is its modulation index?', ['0.25','0.4','0.6','0.75'], 2, 'The modulation index is (Vmax − Vmin)/(Vmax + Vmin) = 6/10 = 0.6.'],
  ['What is the approximate free-space wavelength for a 2.4 GHz carrier?', ['1.25 cm','8 cm','24 cm','12.5 cm'], 3, 'Use λ = c/f = (3 × 10⁸)/(2.4 × 10⁹) = 0.125 m.']
].map(([prompt,choices,key,why])=>({prompt,choices,key,why}));

const gateTopics = ['math','networks','signals','devices','analog','digital','control','comm','em'];
function practiceSets(exam, problems, size, minutes) {
  return [0,1].map(index=>({
    id: exam+'-practice-'+(index+1), title: 'Original practice '+(index+1), minutes,
    items: problems.slice(index*size,(index+1)*size).map(item=>({
      ...item, kind:'MCQ', marks:1, key:'ABCD'[item.key]
    }))
  }));
}

export const examSeries = {
  gate: [{
    id:'gate-2026', title:'2026 official EC paper', minutes:180, paper:papers.gate[0],
    items:gateKeys.map((key,index)=>{
      const number=index+1;
      const kind=key.includes(':')?'NAT':((number>=25&&number<=29)||(number>=54&&number<=58)?'MSQ':'MCQ');
      const marks=(number<=5||(number>=11&&number<=35))?1:2;
      return {number,kind,marks,key,penalty:kind==='MCQ'?marks/3:0};
    })
  },...practiceSets('gate',[1,2].flatMap(version=>gateTopics.map(topic=>
    additionalPractice.find(item=>item.topic===topic&&item.id.endsWith('-'+version)))),9,24)],
  isro: [{
    id:'isro-2025-a', title:'October 2025 official Electronics paper · Series A', minutes:120,
    paper:{...papers.isro[0],answer:'https://www.isro.gov.in/media_isro/pdf/recruitmentNotice/2026/May/ELECTRONICS_revised_answer_key_15052026.pdf'},
    items:isroKeys.map((key,index)=>({
      number:index+1,kind:'MCQ',marks:index<80?1:0,penalty:index<80?0.33:0,key
    })).filter(item=>item.key!=='X')
  },...practiceSets('isro',isroPractice,6,9)]
};
