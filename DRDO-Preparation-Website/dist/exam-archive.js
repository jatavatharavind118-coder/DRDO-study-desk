import {papers} from './data.js';
import {archiveKeys} from './exam-archive-keys.js';

const gateOfficial = 'https://gate2027.iitm.ac.in/static/doc/download/';
const gateMirror = 'https://www.gateexam.info/docs/papers/EC/';
const gateKeyFiles = {
  2025:'2025_Key/EC_Keys.pdf',
  2024:'2024/ECFinalAnswerKey.pdf',
  2023:'Answer_keys2023/EC_ANS_GATE2023.pdf',
  2022:'Answer_keys2022/ec_2022.pdf',
  2021:'Answer_keys2021/ec_2021.pdf'
};

function archivedPaper(id,title,minutes,file,{answer,external=false,isro=false,notice}={}) {
  const items=(archiveKeys[id]||[]).map(([number,kind,marks,key])=>({
    number,kind,marks,key,penalty:kind==='MCQ'?(isro?(marks?0.33:0):marks/3):0
  }));
  return {id,title,minutes,items,paper:{file,answer,external},manual:!items.length,notice,
    ...(isro&&items.length?{technicalScore:true}:{})};
}

const combined = {
  2016:[[1,20],[22,39],[41,63]],
  2015:[[2],[27],[54]],
  2014:[[2,19],[21,39],[41,62],[64,83]],
  2013:[[2],[21],[40],[59]]
};

const gate = papers.gate.slice(1).flatMap(paper=>{
  const year=Number(paper.name.slice(0,4));
  const sessions=combined[year];
  if (sessions) return sessions.map(([page,keyPage],index)=>archivedPaper(
    'gate-'+year+'-'+(index+1),year+' · Set '+(index+1),180,paper.file+'#page='+page,
    {answer:keyPage?paper.file+'#page='+keyPage:undefined,
      notice:'The PDF contains several sets. Use only the set named above.'}
  ));
  const set=year===2017?Number(paper.name.at(-1)):null;
  const keyPage={2012:15,2018:21,2020:19}[year];
  const answer=gateKeyFiles[year]?gateOfficial+gateKeyFiles[year]:
    set===1?gateMirror+'EC-2017-1-Ans.pdf':set===2?paper.file+'#page=31':
    year===2019?gateMirror+'EC-2019-Ans.pdf':keyPage?paper.file+'#page='+keyPage:undefined;
  return archivedPaper('gate-'+year+(set?'-'+set:''),paper.name,180,
    set===1?gateMirror+'EC-2017-1.pdf':paper.file,{answer});
});

for (let year=2006;year>=1991;year--) {
  gate.push(archivedPaper('gate-'+year,String(year),180,
    gateMirror+'EC-'+year+'.pdf'));
}

const isroPaper2024=papers.isro[1];
const isro=[archivedPaper('isro-2024-a','January 2024 Electronics paper · Series A',120,isroPaper2024.file,
  {answer:isroPaper2024.answer,isro:true,notice:'The final key excludes Q23, Q32 and Q44.'}),
  archivedPaper('isro-2020','January 2020 Electronics paper',90,
    'https://www.madeeasy.in/uploads/examsolution/200ufrep_ec_isro2020paper.pdf',{external:true})];
const isroCopies='https://www.cmb-space.com/isro-pyq/electronics/';
for (const year of ['2018','2017-2','2017',...Array.from({length:11},(_,i)=>String(2016-i))]) {
  isro.push(archivedPaper('isro-'+year,year==='2017-2'?'2017 · Paper 2':year,90,isroCopies+year,{external:true}));
}
isro.unshift(archivedPaper('isro-2026','2026 Electronics paper · Hosted copy',120,isroCopies+'2026',{external:true}));

export const examArchive={gate,isro};
