import assert from 'node:assert/strict';
import {drills,topics,questions} from '../dist/data.js';
import {additionalPractice} from '../dist/practice-bank.js';

assert.equal(drills.length,1000);
assert.equal(additionalPractice.length,900);
assert.equal(new Set([...questions,...drills].map(q=>q.id)).size,questions.length+drills.length);
assert.equal(new Set(drills.map(q=>q.prompt)).size,1000);
for(const topic of topics){
  const rows=drills.filter(q=>q.topic===topic.id);
  assert.equal(rows.length,100,topic.id);
  const generated=rows.filter(q=>q.level==='GATE-style');
  assert.equal(generated.length,90);
  assert.equal(new Set(generated.map(q=>q.family)).size,15);
  for(const family of new Set(generated.map(q=>q.family)))assert.equal(generated.filter(q=>q.family===family).length,6);
}
for(const q of drills){
  assert.equal(q.choices.length,4,q.id);
  assert.equal(new Set(q.choices).size,4,q.id);
  assert.ok(Number.isInteger(q.key)&&q.key>=0&&q.key<4,q.id);
  assert.ok(topics.some(t=>t.id===q.topic),q.id);
  assert.ok(q.why.length>=100,q.id);
  if(q.level){
    assert.ok(q.why.includes(`Answer: ${q.choices[q.key]}.`),q.id);
    assert.ok(q.why.includes('Step 3:'),q.id);
    assert.ok(q.why.includes('Check and interpretation:'),q.id);
    assert.ok(!/NaN|Infinity|undefined/.test(q.prompt+q.choices.join(' ')+q.why),q.id);
  }
}

const result=(topic,family,k)=>{
  const q=additionalPractice.find(q=>q.id===`gate-${topic}-${family}-${k}`);
  assert.ok(q,`${topic}/${family}/${k}`);
  return Number.parseFloat(q.choices[q.key]);
};
const close=(got,want,label,tol=.000051)=>assert.ok(Math.abs(got-want)<=tol,`${label}: got ${got}, expected ${want}`);
function simpson(fn,a,b,n=2000){
  const h=(b-a)/n;let sum=fn(a)+fn(b);
  for(let i=1;i<n;i++)sum+=(i%2?4:2)*fn(a+i*h);
  return sum*h/3;
}
for(let k=1;k<=6;k++){
  // Independent checks: numerical integration against closed-form answers.
  close(result('math','double-integral',k),simpson(x=>x**(k+1),0,1),'double integral');
  close(result('signals','exponential-convolution',k),simpson(t=>Math.exp(-(k+1)*t)*Math.exp(-(k+3)*(.5-t)),0,.5),'convolution integral');
  close(result('signals','fourier-dc',k),2*simpson(t=>Math.exp(-(k+2)*t),0,30),'Fourier DC area');
  // Direct summation rather than the finite-geometric closed form.
  const a=.1+.03*k,b=.65+.02*k;
  let convolution=0;for(let m=0;m<=3;m++)convolution+=a**m*b**(3-m);
  close(result('signals','discrete-convolution',k),convolution,'discrete convolution');
  // Confirm alias waveforms agree at several actual sampling instants.
  const f=7+k,fs=2*f-3,alias=result('signals','alias-folding',k);
  for(let n=0;n<20;n++)close(Math.cos(2*Math.PI*f*n/fs),Math.cos(2*Math.PI*alias*n/fs),'alias sample',1e-10);
  // KCL residual using the rounded selected voltage.
  const v=result('networks','nodal-two-sources',k);
  close((v-(10+k))/(k+1)+(v-(4+k))/(k+3)+v/(k+4),0,'KCL residual',.0001);
  // Verify conservation of incident power at a complex termination.
  const r=20+5*k,x=10+4*k,p=10+k,delivered=result('em','complex-load-power',k);
  const incidentVoltageSquared=2*p*50;
  const currentSquared=incidentVoltageSquared*4/((r+50)**2+x*x);
  close(delivered,currentSquared*r/2,'load current power');
  // Substitution in the diode equation checks unit conversion and the inverse.
  const voltage=result('devices','diode-bias',k),current=.01*(Math.exp(voltage/.026)-1);
  assert.ok(Math.abs(current-(k+1))/(k+1)<.002,'diode equation residual');
  // Ensure the fixed-bias BJT assumption is physically consistent.
  const vce=result('devices','bjt-active-check',k);
  assert.ok(vce>.7&&vce<10+k,'forward-active BJT bias');
  // Check Routh boundary directly at an imaginary-axis polynomial root.
  const ra=k+1,rb=2*k+3,boundary=result('control','routh-cubic-bound',k),omega=Math.sqrt(rb);
  close(-ra*omega**2+boundary,0,'Routh boundary real part',1e-9);
  close(-(omega**3)+rb*omega,0,'Routh boundary imaginary part',1e-9);
  // A repeated root must satisfy both polynomial and derivative at breakaway.
  const p1=k+1,p2=3*k+5,s=-(p1+p2)/2,gain=result('control','root-locus-breakaway',k);
  close((s+p1)*(s+p2)+gain,0,'breakaway characteristic',1e-9);
  close(2*s+p1+p2,0,'breakaway derivative',1e-9);
  // Monotone bounds catch errors involving power/amplitude and rate/time.
  assert.ok(result('em','waveguide-velocity',k)>0&&result('em','waveguide-velocity',k)<1);
  assert.ok(result('comm','cascade-noise-figure',k)>2+k/2);
  assert.ok(result('apt','combined-work',k)<k+4);
  assert.ok(result('apt','pipes-drain',k)>k+2);
}
console.log('PASS: 1,000 unique questions; 100 per subject; 15 GATE-style families per subject; answer/explanation integrity; numerical and physical consistency checks.');
