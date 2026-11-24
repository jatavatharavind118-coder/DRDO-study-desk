import {equationMarkup,inlineEquationMarkup} from './math.js';
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const math=value=>({math:value});
const text=value=>({text:value});
export const solutionGuides={
 'g25-17':{
  meaning:'Decide whether the complete cascade is linear and whether shifting its input simply shifts its output. Test these properties separately.',
  setup:[text('First combine the two LTI blocks and the two added impulses. Convolution with a unit impulse leaves a sequence unchanged:'),math('y[n]=x[n]∗h_1[n]∗h_2[n]+b(h_2[n]−δ[n])')],
  sections:[
   {title:'Linearity test',blocks:[text(['Put ',math('x[n]=0'),':']),math('T\\{0\\}=b(h_2[n]−δ[n])'),text(['Since ',math('b>0'),' and ',math('h_2[n]≠δ[n]'),', the zero-input output is not the zero sequence:']),{equation:'T\\{0\\}≠0',boxed:true},text('A linear system must produce zero output for zero input. This necessary condition fails.'),{conclusion:'Therefore, the system is nonlinear.'}]},
   {title:'Time-invariance test',blocks:[text(['Shift the input by ',math('n_0'),':']),math('T\\{x[n−n_0]\\}=x[n−n_0]∗h_1[n]∗h_2[n]+b(h_2[n]−δ[n])'),text('Now shift the original output by the same amount:'),math('y[n−n_0]=x[n−n_0]∗h_1[n]∗h_2[n]+b(h_2[n−n_0]−δ[n−n_0])'),text('The input-dependent convolution shifts in both expressions. The fixed added sequence stays at its original position when only the input is shifted; shifting the output moves that sequence too.'),{equation:'T\\{x[n−n_0]\\}≠y[n−n_0]',boxed:true},{conclusion:'Therefore, the system is time variant in the intended setting of the paper.'}]}
  ],answer:'D — Nonlinear and time variant'
 }
};
function inline(parts){return (Array.isArray(parts)?parts:[parts]).map(part=>typeof part==='string'?escape(part):inlineEquationMarkup(part.math)).join('');}
function block(item){
 if(item.math||item.equation)return '<div class="'+(item.boxed?'boxed-equation':'display-equation')+'">'+equationMarkup(item.math||item.equation)+'</div>';
 if(item.conclusion)return '<p class="step-conclusion"><strong>'+escape(item.conclusion)+'</strong></p>';
 return '<p>'+inline(item.text)+'</p>';
}
export function questionContextMarkup(q){const guide=q.solutionGuide||solutionGuides[q.id];return guide?.meaning?'<div class="question-meaning"><h5>What the question asks</h5><p>'+escape(guide.meaning)+'</p></div>':'';}
export function workedSolutionMarkup(q){
 const guide=q.solutionGuide||solutionGuides[q.id];
 const sections=guide?.sections||q.steps.map((step,index)=>typeof step==='string'?{title:'Step '+(index+1),blocks:[text(step)]}:step);
 return '<div class="worked-explanation">'+(guide?.setup?'<div class="solution-setup"><h5>Combine the blocks</h5>'+guide.setup.map(block).join('')+'</div>':'')+sections.map((section,index)=>'<section class="solution-section"><h5>'+(guide?(index+1)+') ':'')+escape(section.title)+'</h5>'+section.blocks.map(block).join('')+'</section>').join('')+'</div>';
}
export function finalAnswerMarkup(q){const guide=q.solutionGuide||solutionGuides[q.id];return '<div class="answer-line boxed-final-answer"><strong>Final answer</strong><span>'+escape(guide?.answer||q.answer)+'</span></div>';}
