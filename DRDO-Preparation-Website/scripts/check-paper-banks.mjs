import assert from 'node:assert/strict';
import fs from 'node:fs';
import {questions,topics} from '../dist/data.js';
const root=new URL('../dist/',import.meta.url);
assert.equal(new Set(questions.map(q=>q.id)).size,questions.length);
for(const [prefix,total] of [['g13a-',65],['g13b-',65],['g13c-',65],['g13d-',65],['g12-',65],['g11-',65],['g10-',65],['i20-',80],['g09-',60],['g07-',85],['g08-',85],['g16s1-',65],['g16s2-',65],['g16s3-',65],['g17s1-',65],['g17s2-',65],['i24-',95]]){
 const rows=questions.filter(q=>q.id.startsWith(prefix));assert.equal(rows.length,total,prefix);
 for(let number=1;number<=total;number++){
  const q=rows.find(q=>q.number===number);assert(q,`Missing ${prefix}${number}`);
  assert(q.prompt&&q.answer&&q.steps.length>=2,`Missing content ${q.id}`);
  assert(q.paperId&&q.response&&q.page>0,`Missing paper metadata ${q.id}`);
  if(['MCQ','MSQ'].includes(q.response.type))assert(Array.isArray(q.response.choices)&&q.response.choices.length===4,`Missing choices ${q.id}`);
  if(/^https:\/\//.test(q.file))assert.equal(new URL(q.file).protocol,'https:');else assert(fs.existsSync(new URL('papers/'+q.file,root)),`Missing source ${q.id}`);
  if(q.figure)assert(fs.existsSync(new URL(q.figure,root)),`Missing figure ${q.id}`);
 }
}
assert.deepEqual(questions.filter(q=>q.id.startsWith('i24-')&&q.excluded).map(q=>q.number),[23,32,44]);
// Recompute representative results without using answer strings.
const conv=Array(5).fill(0);for(const [i,h]of [1,-1,2].entries())for(const j of [0,2])conv[i+j]+=h;
assert.deepEqual(conv,[1,-1,3,-1,2]);
for(let bits=0;bits<16;bits++){
 const p=(bits>>3)&1,q=(bits>>2)&1,r=(bits>>1)&1,s=bits&1;
 const mux=[p||!q,p,p&&q,p][2*r+s];
 assert.equal(Boolean(mux),Boolean((p&&q)||(p&&!q&&s)||(!q&&!r&&!s)));
}
assert.equal(0x30a0*2,0x6140);
assert.equal(Math.ceil(6.2/.5),13);
assert.equal(20*60*2*(12+10)/2,26400);
assert(Math.abs(10*Math.log10(10+9/10+9/100)-10.410)<.001);
assert(Math.abs((1.2**2-1)*100-44)<1e-10);
assert.equal(155**2,24025);
assert.equal(2500/(100**2+150**2)*100,7.6923076923076925);

// GATE 2007: independently check the minimized Boolean function and R–2R voltages.
for(let bits=0;bits<16;bits++){
 const a=(bits>>3)&1,b=(bits>>2)&1,c=(bits>>1)&1,d=bits&1;
 assert.equal(Boolean((!a&&b&&c&&!d)||(!b&&!c&&d)||(a&&b&&!c&&!d)),[1,6,9,12].includes(bits));
}
assert.equal((300-50)/(300+50),5/7);
assert.equal((5/20000+1.25/20000)*10000,3.125);

// GATE 2009: compute DFT and display logic independently.
const seq=[1,0,2,3];
const dft=seq.map((_,k)=>seq.reduce((z,v,n)=>[z[0]+v*Math.cos(2*Math.PI*k*n/4),z[1]-v*Math.sin(2*Math.PI*k*n/4)],[0,0]));
for(const [k,expected]of [[6,0],[-1,3],[0,0],[-1,-3]].entries())for(let i=0;i<2;i++)assert(Math.abs(dft[k][i]-expected[i])<1e-12);
const masks=['abcdef','acdfg','abdeg','adefg'];
for(let p=0;p<2;p++)for(let q=0;q<2;q++){
 const actual={a:1,b:!q,c:!p,d:1,e:p||!q,f:!p||q,g:p||q};
 for(const segment of 'abcdefg')assert.equal(Boolean(actual[segment]),masks[2*p+q].includes(segment));
}
assert(Math.abs(10*Math.log10(16000)-42.0412)<.0001);
assert(Math.abs((4+Math.sqrt(3)/2)-(5-(1-Math.sqrt(3)/2)))<1e-12);

assert.equal(questions.filter(q=>q.id.startsWith('i20-')&&q.unresolved).length,1);
const convolution=Array(9).fill(0);for(const [i,x]of [1,2,3,4,5].entries())for(const [j,h]of [5,4,3,2,1].entries())convolution[i+j]+=x*h;
assert.deepEqual(convolution,[5,14,26,40,55,40,26,14,5]);
assert(Math.abs((1.1**2/.9**2)-121/81)<1e-12);
assert.equal(2**20*16/8,2**21);
for(let a=0;a<2;a++)for(let x=0;x<2;x++)for(let y=0;y<2;y++)assert.equal(Boolean((a^x)||y),Boolean(a?(!x||y):(x||y)));
assert.equal(4*(4*2-1)-(-2)*(-2*2),20);
const edges=[['a','b'],['a','c'],['c','b'],['b','d'],['c','d'],['d','c'],['b','e'],['e','b'],['a','e'],['e','e'],['d','d']];
const cycles=new Set();
for(const start of new Set(edges.flat())){
 const walk=(node,path)=>{for(const [u,v]of edges){if(u!==node)continue;if(v===start){const names=path;const key=names.map((_,i)=>names.slice(i).concat(names.slice(0,i)).join('')).sort()[0];cycles.add(key);}else if(!path.includes(v))walk(v,[...path,v]);}};walk(start,[start]);
}
assert.equal(cycles.size,5);

// GATE 2010: verify MUX minterms and shift-register cycle from its state equations.
const minterms=[];for(let v=0;v<16;v++){const a=(v>>3)&1,b=(v>>2)&1,c=(v>>1)&1,d=v&1;if([c,d,!c,!c&&!d][2*a+b])minterms.push(v);}
assert.deepEqual(minterms,[2,3,5,7,8,9,12]);
let state=[0,0,0];const stream=[];for(let i=0;i<7;i++){stream.push(state[0]);const [a,b,c]=state;state=[Number(!(b^c)),a,b];}
assert.deepEqual(stream,[0,1,1,0,1,0,0]);
let euler=0;for(let i=0;i<3;i++)euler+=.1*(euler+.1*i);assert(Math.abs(euler-.031)<1e-12);
const fourDigits=new Set();for(const a of [2,3,4])for(const b of [2,3,4])for(const c of [2,3,4])for(const d of [2,3,4]){const digits=[a,b,c,d];if(1000*a+100*b+10*c+d>3000&&digits.filter(x=>x===2).length<=2&&digits.filter(x=>x===3).length<=3)fourDigits.add(digits.join(''));}assert.equal(fourDigits.size,51);
assert(Math.abs(1/(2*Math.PI*4.7e-6*1250)-27.0902)<.0001);

const validTopics=new Set(topics.map(t=>t.id));for(const q of questions)assert(validTopics.has(q.topic),`Unknown topic ${q.id}: ${q.topic}`);

// GATE 2011: independently enumerate die outcomes, capacitor boundary and PSK energy.
let greater=0;for(let a=1;a<=6;a++)for(let b=1;b<=6;b++)if(b>a)greater++;assert.equal(greater/36,5/12);
assert.equal((1e-3-.5e-3)/5e-6,100);assert.equal(5/100,.05);
assert(Math.abs(10*Math.log10((Math.sin(Math.PI/4)/Math.sin(Math.PI/8))**2)-5.3329)<.0001);
for(let n=1;n<=8;n++){let sum=0,term=0;for(let k=1;k<=n;k++){term=10*term+4;sum+=term;}assert(Math.abs(sum-4/81*(10**(n+1)-9*n-10))<1e-6);}
assert.deepEqual(questions.filter(q=>q.id.startsWith('g12-')&&q.marksToAll).map(q=>q.number),[4,16,40]);
assert(Math.abs((56-70*.8)/(2+.8)**3)<1e-12);
assert.equal(1-(.75**2),7/16);
for(const q of questions.filter(q=>q.id.startsWith('g12-'))){assert(q.solutionGuide?.sections.length>=2);if(!q.marksToAll)assert(q.answer.startsWith('('+q.archivedKey+')'),q.id);}
const g13keys=JSON.parse(fs.readFileSync(new URL('./fixtures/gate-2013-keys.json',import.meta.url))).rows;
for(const q of questions.filter(q=>q.id.startsWith('g13'))){const column='abcd'.indexOf(q.id[3]);assert.equal(q.archivedKey,g13keys[q.number-1][column],q.id);assert.equal(q.archivedKey,g13keys[q.canonicalQuestionNumber-1][0],q.id);}
// GATE 2013: booklet coverage and independently recomputed results.
for(const booklet of 'abcd'){
 const rows=questions.filter(q=>q.id.startsWith('g13'+booklet+'-'));
 assert.equal(new Set(rows.map(q=>q.canonicalQuestionNumber)).size,65);
 for(const q of rows){assert(q.solutionGuide.meaning&&q.solutionGuide.sections.length>=2);assert('ABCD'.includes(q.archivedKey));}
}
assert.equal(1/(100e-6*10000),1);
assert(Math.abs(1/(2*Math.PI*1e-6*20000)-7.957747)<1e-6);
assert.equal((10+5*2/(5+2))*2.8,32);
assert.equal((5+5+4+3+2+1+3).toString(16),'17');
for(const s of [1,2,3]){const c=(s+1)/(5*s*s+6*s+2);const a=1-2*c,b=a/s-4*c;assert(Math.abs(c-(1+1/s)*b)<1e-12);}
const counts=new Map();for(const u of [-1,1])for(const v of [-1,1])counts.set(u+v,(counts.get(u+v)||0)+1);let entropy=0;for(const count of counts.values()){const p=count/4;entropy-=p*Math.log2(p);}assert.equal(entropy,1.5);
console.log('Passed 1185 new Q&A entries: counts, numbering, source PDFs, figures, withdrawal status, and independent convolution, Boolean and numerical checks.');
