import assert from 'node:assert/strict';
import {questions} from '../dist/data.js';
import {examTextParts,examTextMarkup,normalizeExamEquation,examWorkedSolutionMarkup} from '../dist/exam-presentation.js';
import {questionPromptMarkup,questionContextMarkup,workedSolutionMarkup,finalAnswerMarkup} from '../dist/worked-solutions.js';
const rows=questions.filter(q=>q.exam==='isro'||q.exam==='drdo');assert.equal(rows.length,413);
let mathRuns=0;
for(const q of rows){
 const strings=[q.prompt,q.answer,...q.steps,...(q.response.choices||[]).filter(x=>typeof x==='string')];
 for(const text of strings){const parts=examTextParts(text);assert.equal(parts.map(p=>p.source??p.text).join(''),text,`Dropped or changed source text ${q.id}`);mathRuns+=parts.filter(p=>p.math).length;assert(!examTextMarkup(text).includes('undefined')||text.includes('undefined'));}
 const html=questionPromptMarkup(q)+questionContextMarkup(q)+workedSolutionMarkup(q)+finalAnswerMarkup(q);
 assert(!html.includes('undefined')||JSON.stringify(q).includes('undefined'),q.id);assert(html.includes('solution-section'),q.id);assert(!/<h5>Step \d/.test(html),q.id);
 if(q.unresolved)assert(html.includes('Answer status')&&html.includes('source-status-answer'),q.id);
}
assert.equal(normalizeExamEquation('X(s)=1−4/[3(s+1)]+1/[3(s−2)]'),'X(s)=1−frac{4}{3(s+1)}+frac{1}{3(s−2)}');
assert.equal(normalizeExamEquation('e^(−2t)'),'e^{−2t}');
assert.equal(normalizeExamEquation('(s−1)²'),'(s−1)^{2}');
assert.equal(normalizeExamEquation('ZTE=η/√[1−(fc/f)²]'),'Z_{TE}=frac{η}{sqrt{1−(frac{f_{c}}{f})^{2}}}');
assert(examTextMarkup('<script>alert(1)</script>').includes('&lt;script&gt;'));
assert(!examTextMarkup('<script>alert(1)</script>').includes('<script>'));
// Independently validate the screenshot example after combining its transform terms.
for(const s of [-3,0,.5,1,3,4]){const direct=1-4/(3*(s+1))+1/(3*(s-2));const factored=(s-1)**2/((s+1)*(s-2));assert(Math.abs(direct-factored)<1e-12);}
assert.equal(500*.020,10);assert.equal(Math.atan(10/10)*180/Math.PI,45);
assert.equal(.98/(1-.98)>48.9999,true);
const p=(rl,xl)=>rl/((4+rl)**2+(3+xl)**2);assert(p(4,-3)>p(3,-3)&&p(4,-3)>p(5,-3)&&p(4,-3)>p(4,0));
console.log(`Passed ${rows.length} ISRO/DRDO cards and ${mathRuns} recognized math runs: source-text preservation, equation structure, status labels, escaping, and independent pole/zero and circuit checks.`);
