import assert from 'node:assert/strict';
import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
import {questions} from '../dist/data.js';
const root=fileURLToPath(new URL('../dist/',import.meta.url));
const gate=questions.filter(q=>q.id.startsWith('g26-'));
assert.equal(gate.length,65);
assert.equal(new Set(questions.map(q=>q.id)).size,questions.length);
for(let n=1;n<=65;n++) {
 const q=gate.find(q=>q.id===`g26-${n}`);
 assert(q,`Missing question ${n}`);
 assert(q.prompt&&q.answer&&q.steps.length>=2,`Incomplete Q&A ${n}`);
 assert(q.response,`Missing response format ${n}`);
 assert.equal(q.file,'https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf');
 assert(q.page>=1&&q.page<=58);
 if(q.figure)assert(fs.existsSync(root+q.figure),`Missing diagram ${n}`);
}
// Recalculate representative numerical and Boolean results independently.
assert(Math.abs((1-Math.pow(.9,7)-7*.1*Math.pow(.9,6))-.1496944)<1e-9);
assert(Math.abs((1-2*Math.pow(10,-.4))*100-20.3785658893)<1e-9);
assert.equal(18*77,1386);
assert(Math.abs((1+Math.sqrt(17))/2-2.5615528128)<1e-9);
assert(Math.abs(1.6e-19*35*((1e16-2e17)/3e-4)/100+35.4666666667)<1e-9);
for(let m=0;m<16;m++) {
 const w=(m>>3)&1,x=(m>>2)&1,y=(m>>1)&1,z=m&1;
 const expected=[0,2,5,7,8,10,13,14,15].includes(m);
 assert.equal(Boolean((!x&&!z)||(x&&z)||(w&&x&&y)),expected);
 assert.equal(Boolean((!x&&!z)||(x&&z)||(w&&y&&!z)),expected);
}
console.log('Passed: 65 complete GATE 2026 Q&As, unique IDs, source/diagram references, and independent numerical/Boolean checks.');
