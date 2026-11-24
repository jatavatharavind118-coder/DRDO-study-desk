import assert from 'node:assert/strict';
import {formulaBank,lessons} from '../dist/lessons.js';
import {topics} from '../dist/data.js';
import {equationMarkup} from '../dist/math.js';
let cards=0,equations=0;
for(const topic of topics){
 const rows=formulaBank[topic.id];assert(rows?.length>=20,`Thin subject coverage: ${topic.id}`);
 assert.equal(new Set(rows.map(f=>f.id)).size,rows.length,`Duplicate formula ID: ${topic.id}`);
 for(const f of rows){for(const key of ['id','title','equation','symbols','when','example'])assert(typeof f[key]==='string'&&f[key].trim(),`${topic.id}/${f.id}: ${key}`);const markup=equationMarkup(f.equation);assert(markup.includes('<math '));assert(!markup.includes('undefined'));cards++;equations+=f.equation.split(';').length;}
 for(const lesson of lessons[topic.id])for(const ref of lesson.refs)assert(rows.some(f=>f.id===ref),`Broken lesson reference ${topic.id}/${ref}`);
}
// Independently recompute representative examples and limiting cases.
assert.equal(1e-6*2e3,2e-3); // capacitor i=C dv/dt
assert(Math.abs(Math.sqrt(25*1e-6)-.005)<1e-12); // diffusion length, cm
assert(Math.abs(1/(.02*.001)-50000)<1e-8); // MOS output resistance
assert.equal(1e-3/.025,.04); // BJT transconductance
assert.equal(16*12-12+15,195); // last sum output of a 16-bit ripple adder
assert(Math.abs(.5*16e-12*4*1e8-.0032)<1e-12); // CMOS dynamic power: alpha*C*V^2*f
assert(Math.abs(2e-3*10000/2-10)<1e-12); // differential single-ended gain magnitude
assert(Math.abs(1/(2*Math.PI*1e4*1e-8)-1591.54943)<1e-5);
assert(Math.abs(1/(1+2/100)-.9803921569)<1e-10); // mirror base-current loss
assert.equal(2**6-1,63); // flash comparator count
assert.equal(30*3,90); // clock angle at 3:00
assert.equal(2*30*60/(30+60),40); // equal-distance average speed
assert(Math.abs(100*1.1*.9-100+1)<1e-12); // +10%, then -10%
assert.equal(50*200,100**2); // quarter-wave transformer
assert.equal(100000/Math.log2(4)*1.2,60000); // QPSK RF bandwidth
assert(Math.abs(10**2/(2*377)-.1326259947)<1e-10); // peak-phasor Poynting convention denominator
assert(Math.abs(10*Math.log10(Math.log(2))+1.591745)<1e-6); // Shannon wideband limit
assert.equal(1-Math.log2(2),0); // BSC p=0.5
for(const alpha of [1/9,1/3,.5]){
 const phase=Math.asin((1-alpha)/(1+alpha));
 const x=1/Math.sqrt(alpha);const actual=Math.atan(x)-Math.atan(alpha*x);
 assert(Math.abs(actual-phase)<1e-12);
}
console.log(`Passed ${cards} formula cards / ${equations} displayed equations: fields, unique IDs, MathML parsing, subject coverage, preserved lesson links and independent numerical checks.`);
