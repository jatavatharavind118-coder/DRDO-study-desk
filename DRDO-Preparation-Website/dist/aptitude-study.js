import {aptitudeOriginal} from './aptitude-original.js';
import {aptitudePyqs} from './aptitude-pyq.js';
export const aptitudeQuestions=[...aptitudeOriginal,...aptitudePyqs];

export function setupAptitudeStudy({state,save,today,escape,explanation}){
 const banks={original:aptitudeOriginal,pyq:aptitudePyqs};
 const progress=state.aptitude??={answers:{},positions:{original:0,pyq:0},mode:'original'};
 progress.answers??={};progress.positions??={original:0,pyq:0};
 let mode=Object.hasOwn(banks,progress.mode)?progress.mode:'original';
 let category='',year='',order=null;
 const correct=(q,answer)=>(q.acceptedKeys||[q.key]).includes(answer);
 const currentList=()=>order||banks[mode].filter(q=>(!category||q.category===category)&&(!year||q.year===Number(year)));
 const reset=()=>{order=null;progress.positions[mode]=0;save();};
 const answered=q=>Number.isInteger(progress.answers[q.id]);
 function source(q){
   if(!q.file)return '';
   const paper=q.file.startsWith('https:')?q.file:'./papers/'+encodeURIComponent(q.file);
   return '<figure class="apt-source">'+(q.sourceImage?'<a href="'+escape(q.sourceImage)+'" target="_blank" rel="noopener" aria-label="Open original question artwork at full size"><img class="apt-question-image" src="'+escape(q.sourceImage)+'" alt="Original GATE '+q.year+' '+escape(q.session)+' question '+q.number+', including its answer options and diagrams" loading="lazy" decoding="async"></a>':'')+
     '<figcaption>GATE '+q.year+' · '+escape(q.session)+' · Q'+q.number+' · '+q.marks+' mark'+(q.marks>1?'s':'')+'</figcaption>'+
     '<div class="actions"><a class="btn secondary" href="'+escape(paper+'#page='+q.page)+'" target="_blank" rel="noopener">Open original PDF · page '+q.page+'</a>'+
     (q.sourceImage?'<a class="btn secondary" href="'+escape(q.sourceImage)+'" target="_blank" rel="noopener">Zoom original artwork</a>':'')+'</div></figure>';
 }
 function render(){
  const list=currentList();
  const categories=['Quantitative','Verbal','Analytical','Spatial'];
  const years=[...new Set(aptitudePyqs.map(q=>q.year))].sort((a,b)=>b-a);
  const solved=banks[mode].filter(answered),right=solved.filter(q=>correct(q,progress.answers[q.id])).length;
  const header='<div class="heading"><h1>Aptitude practice</h1><p class="sub">A dedicated GATE aptitude desk: 200 original questions and 100 previous GATE questions. Work through quantitative, verbal, analytical and spatial problems with detailed solutions.</p></div>'+
    '<div class="apt-tabs" role="tablist" aria-label="Aptitude question banks">'+[['original','Original practice · 200'],['pyq','Previous GATE questions · 100']].map(([id,label])=>'<button type="button" class="btn '+(mode===id?'':'secondary')+'" role="tab" aria-selected="'+(mode===id)+'" data-action="apt-mode" data-id="'+id+'">'+label+'</button>').join('')+'</div>'+
    '<div class="toolbar apt-toolbar"><label class="field">Aptitude topic<select id="apt-category"><option value="">All aptitude topics</option>'+categories.map(c=>'<option '+(category===c?'selected ':'')+'value="'+c+'">'+c+'</option>').join('')+'</select></label>'+
    (mode==='pyq'?'<label class="field">Exam year<select id="apt-year"><option value="">All years</option>'+years.map(y=>'<option '+(year===String(y)?'selected ':'')+'value="'+y+'">'+y+'</option>').join('')+'</select></label>':'')+
    '<span class="meta">'+list.length+' questions in this selection</span><button class="btn secondary" data-action="apt-shuffle" type="button">Shuffle questions</button></div>'+
    '<p class="meta">'+solved.length+' / '+banks[mode].length+' answered · '+right+' correct'+(solved.length?' · '+Math.round(100*right/solved.length)+'% accuracy':'')+'</p>';
  if(!list.length)return header+'<div class="card"><p>No questions match these filters. Choose another aptitude topic or year.</p></div>';
  const index=Math.max(0,Math.min(progress.positions[mode]||0,list.length-1));progress.positions[mode]=index;
  const q=list[index],answer=progress.answers[q.id],judged=answered(q),keys=q.acceptedKeys||[q.key];
  return header+'<article class="card review-card apt-review"><p class="meta">'+escape(q.category)+' · '+(mode==='pyq'?'GATE '+q.year+' · '+escape(q.session)+' · Q'+q.number:'Original GATE-style practice')+' · '+(index+1)+' of '+list.length+'</p>'+
   '<h2>'+escape(q.prompt)+'</h2>'+source(q)+
   (mode==='pyq'&&q.sourceImage?'<p class="sub">Read the original question and options above, then select the matching option letter.</p>':'')+
   '<div class="choices">'+q.choices.map((choice,i)=>'<button type="button" class="choice '+(judged&&keys.includes(i)?'correct':judged&&answer===i?'wrong':'')+'" data-action="apt-answer" data-id="'+i+'" '+(judged?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+escape(choice)+'</button>').join('')+'</div>'+
   (judged?'<p class="status '+(correct(q,answer)?'good':'bad')+'">'+(correct(q,answer)?'Correct':'Review this one')+'</p><h3>Detailed explanation</h3>'+explanation(q.why)+(q.keySource?'<p><a href="'+escape(q.keySource)+'" target="_blank" rel="noopener">Check the source answer key</a></p>':''):'')+
   '<div class="actions"><button type="button" class="btn secondary" data-action="apt-prev" '+(index===0?'disabled':'')+'>Previous question</button>'+
   '<button type="button" class="btn" data-action="apt-next" '+(index===list.length-1?'disabled':'')+'>Next question</button>'+
   '<button type="button" class="btn secondary" data-action="save-item" data-id="'+q.id+'">'+(state.saved[q.id]?'Remove from revision':'Save for revision')+'</button></div>'+
   '<label class="field apt-jump">Go to question<select id="apt-jump">'+list.map((item,i)=>'<option value="'+i+'" '+(i===index?'selected':'')+'>'+(i+1)+' · '+escape(item.category)+(item.year?' · '+item.year+' Q'+item.number:'')+(answered(item)?' · answered':'')+'</option>').join('')+'</select></label>'+
   (mode==='original'?'<p class="meta">Original practice includes numerical variants. Round numerical answers to four decimal places unless specified otherwise.</p>':'')+'</article>';
 }
 function handleChange(el){
   if(el.id==='apt-category'){category=el.value;reset();return true;}
   if(el.id==='apt-year'){year=el.value;reset();return true;}
   if(el.id==='apt-jump'){const n=Number(el.value);if(Number.isInteger(n)&&n>=0&&n<currentList().length){progress.positions[mode]=n;save();}return true;}
   return false;
 }
 function handleClick(el){
   const action=el.dataset.action;
   if(!action?.startsWith('apt-'))return false;
   if(action==='apt-mode'&&Object.hasOwn(banks,el.dataset.id)){
     mode=el.dataset.id;progress.mode=mode;category='';year='';order=null;save();return true;
   }
   const list=currentList(),index=progress.positions[mode]||0,q=list[index];
   if(action==='apt-shuffle'){
     order=[...list];for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
     progress.positions[mode]=0;save();return true;
   }
   if(action==='apt-prev'&&index>0)progress.positions[mode]--;
   if(action==='apt-next'&&index<list.length-1)progress.positions[mode]++;
   if(action==='apt-answer'&&q&&!answered(q)){
     const answer=Number(el.dataset.id);if(!Number.isInteger(answer)||answer<0||answer>3)return true;
     progress.answers[q.id]=answer;
     const right=correct(q,answer);(state.attempts[today()]??={})[q.id]=right;
     if(right)delete state.wrong[q.id];else state.wrong[q.id]=true;
   }
   save();return true;
 }
 return {render,handleChange,handleClick,source};
}
