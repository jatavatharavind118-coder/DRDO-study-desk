import assert from 'node:assert/strict';
import fs from 'node:fs';
import {questions} from '../dist/data.js';
const root=new URL('../dist/',import.meta.url);
assert.equal(new Set(questions.map(q=>q.id)).size,questions.length);
for(const [prefix,total] of [['i20-',80],['g09-',60],['g07-',85],['g08-',85],['g16s1-',65],['g16s2-',65],['g16s3-',65],['g17s1-',65],['g17s2-',65],['i24-',95]]){
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
console.log('Passed 730 new Q&A entries: counts, numbering, source PDFs, figures, withdrawal status, and independent convolution, Boolean and numerical checks.');

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
