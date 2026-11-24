import {equationMarkup,inlineEquationMarkup} from './math.js';
import {examSolutionGuides} from './exam-solution-guides.js';
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const enhancedExam=q=>q.exam==='gate'||q.exam==='isro'||q.exam==='drdo';
const names=new Set(('sin cos tan cot sec csc sinc cosh sinh tanh exp ln log log2 log10 sqrt arctan atan arcsin arccos asin acos det lim Re Im max min abs Q erfc mod sgn '+
 'SNR SINR SQNR BER PSD RMS ROC LSB MSB DC AC RF IF dB dBm dBW Hz kHz MHz GHz rad bit bits '+
 'mA μA nA pA mV μV kV mW μW kW mH μH nH mF μF nF pF kΩ MΩ ms μs ns ps cm mm μm nm eV '+
 'gm gmb ro rpi rπ re Rs RL RC RE RD RF Rf Rin Rout Rth RTH Rload Rg R1 R2 R3 R4 '+
 'Vin Vout Vi Vo Vb Vc Ve Vd Vg Vs Vref Vth VT VTH VOV VBE VCE VCB VEB VCC VDD VGS VDS VGD VSB '+
 'IB IC IE ID IS Is Ic Ib Ie Id Iin Iout Cin Cout Cox Cgs Cgd Cpi Cμ C1 C2 L1 L2 '+
 'Zin Zout ZL Zs ZS Zth ZTE ZTM Z0 Z11 Z12 Z21 Z22 Y11 Y12 Y21 Y22 '+
 'Xs Xp XL XC fc fs fm fmax fmin f0 ft fT ωc ωs ωm ω0 Eb Es N0 No Pc Ps Pb Pe Pr Pt '+
 'NA ND ni np pn Dn Dp VT0 IDSS Vp VP βn βp Ka Kp Ki Kd Kv Ta Ts Tp Tr PM GM '+
 'x1 x2 x3 y1 y2 h1 h2 H1 H2 t0 n0 V1 V2 I1 I2 RLC').split(/\s+/));
const subs={gm:'g_m',gmb:'g_{mb}',ro:'r_o',rpi:'r_π',re:'r_e',Rs:'R_s',RL:'R_L',RC:'R_C',RE:'R_E',RD:'R_D',RF:'R_F',Rf:'R_f',Rin:'R_{in}',Rout:'R_{out}',Rth:'R_{th}',RTH:'R_{th}',Rload:'R_{load}',Vin:'V_{in}',Vout:'V_{out}',Vi:'V_i',Vo:'V_o',Vref:'V_{ref}',Vth:'V_{th}',VT:'V_T',VTH:'V_{TH}',VOV:'V_{OV}',VBE:'V_{BE}',VCE:'V_{CE}',VCB:'V_{CB}',VEB:'V_{EB}',VCC:'V_{CC}',VDD:'V_{DD}',VGS:'V_{GS}',VDS:'V_{DS}',VGD:'V_{GD}',VSB:'V_{SB}',IB:'I_B',IC:'I_C',IE:'I_E',ID:'I_D',IS:'I_S',Iin:'I_{in}',Iout:'I_{out}',Cin:'C_{in}',Cout:'C_{out}',Cox:'C_{ox}',Cgs:'C_{gs}',Cgd:'C_{gd}',Zin:'Z_{in}',Zout:'Z_{out}',ZL:'Z_L',Zth:'Z_{th}',ZTE:'Z_{TE}',ZTM:'Z_{TM}',Xs:'X_s',Xp:'X_p',XL:'X_L',XC:'X_C',fc:'f_c',fs:'f_s',fm:'f_m',fmax:'f_{max}',fmin:'f_{min}',Eb:'E_b',Es:'E_s',N0:'N_0',Pc:'P_c',Ps:'P_s',Pb:'P_b',Pe:'P_e',Pr:'P_r',Pt:'P_t',NA:'N_A',ND:'N_D',ni:'n_i',Dn:'D_n',Dp:'D_p',Ka:'K_a',Kp:'K_p',Ki:'K_i',Kd:'K_d',Kv:'K_v',Ts:'T_s',Tp:'T_p',Tr:'T_r',log2:'log_2',log10:'log_{10}'};
const superMap={'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁻':'−','⁺':'+'};
function closeAt(s,start){const pairs={'(':')','[':']','{':'}'};const stack=[];for(let i=start;i<s.length;i++){if(pairs[s[i]])stack.push(pairs[s[i]]);else if(')]}'.includes(s[i])){if(stack.pop()!==s[i])return -1;if(!stack.length)return i;}}return -1;}
function ungroup(s){if('(['.includes(s[0])&&closeAt(s,0)===s.length-1)return s.slice(1,-1);return s;}
// Keep source meaning: only recognized mathematical runs are typeset. Unknown prose stays escaped text.
export function normalizeExamEquation(raw){
 let s=String(raw).replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]+/g,run=>'^{'+[...run].map(c=>superMap[c]).join('')+'}').replace(/\b(?:arctan|atan)\b/g,'tan^{−1}').replace(/\b(?:arcsin|asin)\b/g,'sin^{−1}').replace(/\b(?:arccos|acos)\b/g,'cos^{−1}');
 s=s.replace(/\b[A-Za-z][A-Za-z0-9]*\b/g,w=>subs[w]||w).replace(/\|\|/g,'∥');
 const tokens=[];let i=0;
 while(i<s.length){
  if(/\s/.test(s[i])){i++;continue;}
  if('([{'.includes(s[i])){const end=closeAt(s,i);if(end<0)throw Error('Unbalanced source math');const a=s[i],b=s[end];tokens.push(a+normalizeExamEquation(s.slice(i+1,end))+b);i=end+1;}
  else if(s[i]==='√'){i++;while(s[i]===' ')i++;let val;if('([{'.includes(s[i])){const end=closeAt(s,i);if(end<0)throw Error('Unbalanced root');val=normalizeExamEquation(s.slice(i+1,end));i=end+1;}else{const match=s.slice(i).match(/^(?:\d+(?:\.\d+)?|[A-Za-zα-ωΑ-Ω]+(?:_\{[^}]+\}|_[A-Za-zα-ω])?)/);if(!match)throw Error('Unknown root');val=match[0];i+=val.length;}tokens.push('sqrt{'+val+'}');}
  else if(s[i]==='^'||s[i]==='_'){
   const op=s[i++];let val='';
   if(s[i]==='{'||s[i]==='('){const end=closeAt(s,i);if(end<0)throw Error('Unbalanced exponent');val=normalizeExamEquation(s.slice(i+1,end));i=end+1;}
   else{const match=s.slice(i).match(/^[−+-]?(?:\d+(?:\.\d+)?|[A-Za-zα-ωΑ-Ω])/);if(!match)throw Error('Missing script');val=match[0];i+=val.length;}
   if(!tokens.length)throw Error('Missing script base');tokens[tokens.length-1]+=op+'{'+val+'}';
  }else{const match=s.slice(i).match(/^(?:\d+(?:\.\d+)?|[A-Za-zα-ωΑ-Ω]+)/);if(match){tokens.push(match[0]);i+=match[0].length;}else tokens.push(s[i++]);}
 }
 for(let p=0;p<tokens.length;p++)if(tokens[p]==='/'){
  const left=tokens[p-1],right=tokens[p+1];if(!left||!right||/[=≈<>+−]/.test(left.slice(-1))||/^[=≈<>+−]$/.test(right))continue;
  tokens.splice(p-1,3,'frac{'+ungroup(left)+'}{'+ungroup(right)+'}');p--;
 }
 return tokens.join('');
}
function isMathWord(word){return word.length===1||names.has(word)||/^\d/.test(word)||/^[α-ωΑ-Ω]+$/.test(word);}
export function examTextParts(value){
 const s=String(value);const tokens=[...s.matchAll(/\d+(?:\.\d+)?|[A-Za-zα-ωΑ-Ω]+[0-9]*|\s+|./gu)].map(m=>({text:m[0],start:m.index,end:m.index+m[0].length}));
 const parts=[];let start=null,end=null;
 const flush=()=>{if(start===null)return;let raw=s.slice(start,end);const leading=raw.match(/^[\s,]+/)?.[0]||'',trailing=raw.match(/[\s,]+$/)?.[0]||'';if(leading.length===raw.length){parts.push({text:raw});start=end=null;return;}raw=raw.slice(leading.length,raw.length-trailing.length);if(leading)parts.push({text:leading});
  const significant=/[=≈≠≤≥∝∗×÷\/√_^⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺+−]/.test(raw)&&/[A-Za-zα-ωΑ-Ω0-9]/.test(raw)&&raw.length<600;
  if(significant){try{const math=normalizeExamEquation(raw);inlineEquationMarkup(math);parts.push({math,source:raw});}catch{parts.push({text:raw});}}else parts.push({text:raw});
  if(trailing)parts.push({text:trailing});start=end=null;
 };
 for(const token of tokens){const t=token.text;const valid=/^\s+$/.test(t)||(/^[A-Za-zα-ωΑ-Ω]/.test(t)?isMathWord(t):/^(?:\d+(?:\.\d+)?|[()\[\]{}=≈≠≤≥<>∝∗×÷\/√_^⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺+−*|,π∞δθωΩβμλρσφψζητ·°%−-])$/.test(t));
  if(valid){if(start===null)start=token.start;end=token.end;}else{flush();parts.push({text:t});}}
 flush();return parts;
}
export function examTextMarkup(value){return examTextParts(value).map(p=>p.math?inlineEquationMarkup(p.math):esc(p.text)).join('');}
function richParts(parts){return parts.map(p=>p.math?inlineEquationMarkup(p.math):esc(typeof p==='string'?p:p.text)).join('');}
function proseBlocks(value){
 const parts=examTextParts(value);let html='',inline='';
 const flush=()=>{if(inline.trim())html+='<p>'+inline+'</p>';inline='';};
 for(const part of parts){if(part.math&&/[=≈]/.test(part.source)&&part.source.length>30){flush();html+='<div class="display-equation">'+equationMarkup(part.math)+'</div>';}else inline+=part.math?inlineEquationMarkup(part.math):esc(part.text);}
 flush();return html;
}
export function examGuide(q){return examSolutionGuides[q.id];}
export function examPromptMarkup(q){
 const guide=examGuide(q);if(guide?.question)return '<div class="exam-question-statement">'+guide.question.map(b=>b.equation?'<div class="display-equation">'+equationMarkup(b.equation)+'</div>':'<p>'+examTextMarkup(b.text)+'</p>').join('')+'</div>';
 return '<div class="exam-question-statement"><p>'+examTextMarkup(q.prompt)+'</p></div>';
}
function sectionTitle(step,index,total,unresolved){
 if(unresolved)return ['Identify the missing information','Check the available source','Explain why the answer cannot be fixed'][Math.min(index,2)];
 const intro=step.split(':')[0];if(step.includes(':')&&intro.length<65&&/^(Use|Apply|Find|Transform|Compute|Calculate|Write|Convert|Substitute|Factor|Compare|Check|Evaluate|Normalize|Differentiate|Integrate|Count|Expand|Combine)/i.test(intro)&&!/[=≈]/.test(intro))return intro;
 if(index===total-1)return 'Check and interpret the result';
 const rules=[[/\bKCL\b|nodal|node equation/i,'Write the node equation'],[/\bKVL\b|loop equation/i,'Write the loop equation'],[/Laplace|transform each|Fourier|DFT|Z-transform/i,'Apply the transform relation'],[/common denominator|numerator|factor/i,'Simplify the expression'],[/\bimpedance|reactance/i,'Find the impedance'],[/\bprobability|entropy|Bayes/i,'Apply the probability model'],[/truth table|Boolean|XOR|logic/i,'Evaluate the logic'],[/\bfrequency|Nyquist|sampling/i,'Find the relevant frequency'],[/\bcurrent|transconductance/i,'Calculate the current relation'],[/\bgain|feedback/i,'Apply the gain relation'],[/\bderivative|differentiat/i,'Differentiate the expression'],[/\bintegrat|area under/i,'Evaluate the integral'],[/\bconvert|units|in metres|in seconds/i,'Convert to consistent units'],[/\bassume|model|approximation/i,'State the model and assumptions']];
 return rules.find(([pattern])=>pattern.test(step))?.[1]||(index===0?'Identify the governing principle':'Work through the calculation');
}
function guideBlock(b){if(b.equation)return '<div class="'+(b.boxed?'boxed-equation':'display-equation')+'">'+equationMarkup(b.equation)+'</div>';if(b.conclusion)return '<p class="step-conclusion"><strong>'+examTextMarkup(b.conclusion)+'</strong></p>';return '<p>'+(Array.isArray(b.text)?richParts(b.text):examTextMarkup(b.text))+'</p>';}
export function examWorkedSolutionMarkup(q){
 const guide=examGuide(q);const sections=guide?.sections||q.steps.map((step,i)=>({title:sectionTitle(step,i,q.steps.length,q.unresolved),original:step}));
 return '<div class="worked-explanation exam-worked-explanation">'+sections.map((s,i)=>'<section class="solution-section"><h5>'+(i+1)+') '+esc(s.title)+'</h5>'+(s.original?proseBlocks(s.original):s.blocks.map(guideBlock).join(''))+'</section>').join('')+'</div>';
}
export function examAnswerMarkup(q){return examTextMarkup(examGuide(q)?.answer||q.answer);}
