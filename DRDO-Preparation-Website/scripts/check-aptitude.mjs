import assert from 'node:assert/strict';
import fs from 'node:fs';
import {aptitudeQuestions,setupAptitudeStudy} from '../dist/aptitude-study.js';
import {aptitudeOriginal} from '../dist/aptitude-original.js';
import {aptitudePyqs} from '../dist/aptitude-pyq.js';
import {drills,questions} from '../dist/data.js';

assert.equal(aptitudeOriginal.length,200);
assert.equal(aptitudePyqs.length,100);
assert.equal(drills.length,1000,'Existing practice count preserved');
const ids=[...questions,...drills,...aptitudeQuestions].map(q=>q.id);
assert.equal(new Set(ids).size,ids.length,'No cross-bank progress ID collisions');
assert.equal(new Set(aptitudeOriginal.map(q=>q.prompt)).size,200);
assert.equal(new Set(aptitudePyqs.map(q=>[q.year,q.session,q.number].join('/'))).size,100);
for(const q of aptitudeQuestions){
 assert.equal(new Set(q.choices).size,4,q.id);
 assert.ok(q.key>=0&&q.key<4,q.id);
 assert.ok(q.why.includes('Step 3:'),q.id);
 assert.ok(q.why.includes('Check and interpretation:'),q.id);
 if(q.sourceImage){
  const svg=fs.readFileSync(new URL('../dist/'+q.sourceImage.replace('./',''),import.meta.url),'utf8');
  assert.ok(svg.includes('<svg'),q.id);
  assert.ok(!/<script|onload=|onerror=/i.test(svg),q.id);
 }
 if(q.bank==='pyq'){
  assert.ok(q.page>=1&&q.keySource,q.id);
  assert.ok(q.acceptedKeys.includes(q.key));
 }
}
const state={saved:{},wrong:{},attempts:{}};
let saves=0;
const dependencies={state,save:()=>saves++,today:()=>'2026-11-22',escape:String,explanation:s=>s};
const desk=setupAptitudeStudy(dependencies);
const click=(action,id)=>desk.handleClick({dataset:{action,id:String(id)}});
const change=(id,value)=>desk.handleChange({id,value:String(value)});
assert.match(desk.render(),/200 questions in this selection/);
const first=aptitudeOriginal[0],wrong=(first.key+1)%4;
click('apt-answer',wrong);
assert.equal(state.aptitude.answers[first.id],wrong);
assert.equal(state.wrong[first.id],true);
click('apt-answer',first.key);
assert.equal(state.aptitude.answers[first.id],wrong,'Repeated submissions cannot rewrite the first attempt');
assert.equal(state.attempts['2026-11-22'][first.id],false);
click('apt-next');assert.equal(state.aptitude.positions.original,1);
click('apt-prev');assert.equal(state.aptitude.positions.original,0);
click('apt-mode','pyq');assert.match(desk.render(),/100 questions in this selection/);
const multiple=aptitudePyqs.findIndex(q=>q.acceptedKeys.length>1);
change('apt-jump',multiple);
const alt=aptitudePyqs[multiple];
click('apt-answer',alt.acceptedKeys[1]);
assert.equal(state.attempts['2026-11-22'][alt.id],true,'Official alternative MCQ answer is accepted');
assert.match(desk.render(),/Detailed explanation/);
change('apt-year','2026');change('apt-category','Spatial');
assert.match(desk.render(),/No questions match these filters/);
click('apt-answer','0');
click('apt-mode','original');
assert.match(desk.render(),/200 questions in this selection/,'Bank switch clears incompatible filters');
change('apt-category','Verbal');assert.match(desk.render(),/40 questions in this selection/);
change('apt-category','Spatial');assert.match(desk.render(),/30 questions in this selection/);
change('apt-category','');
const resumed=setupAptitudeStudy(dependencies);
assert.match(resumed.render(),/1 \/ 200 answered/,'Stored progress survives setup');
assert.ok(saves>0);
console.log('PASS: 200 original + 100 authentic-reference PYQs; assets and IDs; detailed solutions; filters/navigation; persistent first attempts; official alternative-answer grading.');
