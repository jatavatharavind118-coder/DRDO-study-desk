import {workedSolutionMarkup,questionContextMarkup,finalAnswerMarkup} from './worked-solutions.js';
import {examArchive} from './exam-archive.js';
import {setupExamSeries} from './exam-series.js';
import {topics, papers, questions, drills, interview} from './data.js';
import {formulaBank, lessons, questionPrep, calculations} from './lessons.js?v=20261124-formulas';
import {equationMarkup} from './math.js';
import {setupTopicStudy} from './topic-study.js';
import {setupAptitudeStudy,aptitudeQuestions} from './aptitude-study.js';

const routes = {
  dashboard:['⊞','Dashboard'], roadmap:['☷','Roadmap'],
  gate:['◇','GATE PYQs'], isro:['◎','ISRO PYQs'], drdo:['△','DRDO PYQs'], practice:['▷','Additional practice'],
  'gate-tests':['◷','GATE test series'], 'isro-tests':['◷','ISRO test series'],
  aptitude:['✦','Aptitude practice'],
  'topic-lessons':['▤','Topic lessons'], 'topic-quizzes':['✓','Topic quizzes'], 'topic-matching':['⇄','Match the terms'], 'topic-plan':['☷','What to study today'],
  theory:['▤','Theory notes'], formulas:['ƒ','Formula revision'], revision:['↻','Revision session'],
  interview:['◉','Interview prep'], mock:['◷','Mock interview'], progress:['▥','Daily progress']
};
const groups = [
  ['Overview',['dashboard','roadmap','progress']],
  ['Questions',['gate','gate-tests','isro','isro-tests','drdo','practice','aptitude']],
  ['Topic study',['topic-lessons','topic-quizzes','topic-matching','topic-plan']],
  ['Study',['theory','formulas','revision']],
  ['Interview',['interview','mock']]
];
const topicMap = Object.fromEntries(topics.map(topic=>[topic.id,topic]));
const formulaIndex = Object.fromEntries(Object.entries(formulaBank).map(([topic, formulas]) => [topic, Object.fromEntries(formulas.map(formula => [formula.id, formula]))]));
const questionMap = Object.fromEntries([...questions,...drills,...aptitudeQuestions].map(question=>[question.id,question]));
const examWindow = ['2027-02-06','2027-02-07','2027-02-13','2027-02-14','2027-02-20','2027-02-21'];
const examSource = 'https://gate2027.iitm.ac.in/important_dates';
const storageKey = 'gate-ece-desk-v1';
const ist = new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'});
const displayDate = new Intl.DateTimeFormat('en-IN',{timeZone:'UTC',day:'numeric',month:'short',year:'numeric'});
const today = () => {
  const parts = Object.fromEntries(ist.formatToParts().map(({type,value})=>[type,value]));
  return [parts.year,parts.month,parts.day].join('-');
};
const dateLabel = date => displayDate.format(new Date(date+'T00:00:00Z'));
const escape = str => String(str ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const practiceExplanation = why => '<div class="worked-solution">'+String(why).split('\n\n').map(paragraph=>'<p>'+escape(paragraph)+'</p>').join('')+'</div>';
const defaultState = {background:'#ffffff',date:'',logs:{},attempts:{},solved:{},done:{},saved:{},mocks:[],wrong:{}};
let state;
try { state = {...defaultState,...JSON.parse(localStorage.getItem(storageKey) || '{}')}; }
catch { state = {...defaultState}; }
const aptitudeStudy=setupAptitudeStudy({state,save,today,escape,explanation:practiceExplanation});
state.topicStudy={seen:{},answers:{},matches:{},scores:{},...state.topicStudy};
let active = 'dashboard';
const filters = {};
state.paperFilters={gate:'gate-2026',isro:'isro-2025',...state.paperFilters};
let practiceSession = [];
let practiceIndex = 0;
let practiceAnswer = null;
let practiceSelection = null;
let mock = null;
let showMockResults = false;
let mockClock;
let toastTimer;
const main = document.querySelector('#main');
const nav = document.querySelector('#nav');

function save() {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); }
  catch { toast('This browser could not save your changes.'); }
}
function toast(message) {
  const target = document.querySelector('#toast');
  target.textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>target.textContent='',3000);
}
function applyBackground(color) {
  const validated = /^#[0-9a-f]{6}$/i.test(color) ? color : '#ffffff';
  document.documentElement.style.setProperty('--page',validated);
  document.querySelector('#background').value = validated;
}
function archiveLink(file) {
  if(file.startsWith('https://')) return file;
  const [name,hash]=file.split('#');
  return './papers/'+encodeURIComponent(name)+(hash?'#'+hash:'');
}
const ext = (url,label) => '<a href="'+escape(url)+'" target="_blank" rel="noopener">'+escape(label)+'</a>';
const section = (title,note) => '<div class="heading"><h1>'+title+'</h1><p class="sub">'+note+'</p></div>';
const link = (route,text,secondary=false) => '<a class="btn'+(secondary?' secondary':'')+'" href="#'+route+'">'+text+'</a>';
const button = (action,text,secondary=false,extra='') => '<button class="btn'+(secondary?' secondary':'')+'" type="button" data-action="'+action+'" '+extra+'>'+text+'</button>';
const currentTopic = route => filters[route] || '';
const topicSelect = route => '<label class="field">Topic<select id="topic-filter"><option value="">All topics</option>'+topics.map(t=>'<option value="'+t.id+'" '+(currentTopic(route)===t.id?'selected':'')+'>'+t.name+'</option>').join('')+'</select></label>';
const matchTopic = item => !currentTopic(active) || currentTopic(active)===item.topic;
const minutes = day => state.logs[day]?.minutes || 0;
const attempts = day => state.attempts[day] || {};
const accuracy = day => {
  const values=Object.values(attempts(day));
  return values.length ? Math.round(100*values.filter(Boolean).length/values.length) : null;
};
const stat = (label,value,context) => '<div class="card stat"><span>'+label+'</span><strong>'+value+'</strong><span>'+context+'</span></div>';
const daysBetween = (now,target) => Math.round((Date.parse(target)-Date.parse(now))/86400000);
const dayOffset = offset => new Date(Date.parse(today())+offset*86400000).toISOString().slice(0,10);
const solvedOn = day => Object.values(state.solved).filter(date=>date===day).length;
const routeCard = (id,desc) => '<a class="card route-card" href="#'+id+'"><h3>'+routes[id][1]+'</h3><p class="sub">'+desc+'</p></a>';
const updateFlag = (obj,id,val) => { if (obj[id]) delete obj[id]; else obj[id]=val; save(); };

function countdown() {
  const chosen=examWindow.includes(state.date);
  const target=chosen ? state.date : examWindow[0];
  const count=daysBetween(today(),target);
  const label=chosen?'Your selected EC exam day':'Start of the official exam window';
  return '<div class="countdown"><span class="eyebrow">'+label+'</span><strong class="days">'+Math.max(count,0)+'</strong><strong>'+ (count===0?'Today':count<0?'Target date passed':'days remaining')+'</strong><p>'+dateLabel(target)+'</p><p>'+ (chosen?'Update your date if your admit card changes.':'Select your EC date when the official schedule or admit card confirms it.')+'</p></div>';
}
function dashboard() {
  const date=today(), score=accuracy(date), completed=Object.keys(state.done).length;
  return '<section class="hero"><div><p class="eyebrow">GATE 2027 · Electronics &amp; Communication</p><h1>Your GATE ECE Study Desk</h1><p class="sub">Work through past questions, study the theory behind them, and track your preparation each day.</p><div class="actions">'+link('gate','Open GATE PYQs')+link('topic-lessons','Study by topic',true)+link('topic-plan','What to study today',true)+link('practice','Start practice',true)+'</div></div>'+countdown()+'</section>'+
    '<div class="stats">'+stat('Study time today',minutes(date)+' min','Logged study time')+
    stat('Practice accuracy',score===null?'—':score+'%',Object.keys(attempts(date)).length+' distinct questions today')+
    stat('Roadmap progress',completed+' / '+topics.length,'Subjects marked complete')+'</div>'+
    '<div class="two"><section class="card"><h2>Study by exam</h2><div class="actions">'+link('gate','GATE',true)+link('isro','ISRO',true)+link('drdo','DRDO',true)+'</div></section>'+
    '<section class="card"><h2>GATE EC exam date</h2><div class="toolbar"><label class="field">Set the date from your admit card<select id="exam-date"><option value="">Use exam-window opening day</option>'+examWindow.map(d=>'<option value="'+d+'" '+(d===state.date?'selected':'')+'>'+dateLabel(d)+'</option>').join('')+'</select></label></div>'+ext(examSource,'Official GATE 2027 exam dates')+'</section></div>'+
    '<h2>Continue studying</h2><div class="route-grid">'+routeCard('aptitude','200 original aptitude questions and 100 previous GATE questions.')+routeCard('revision','Revisit saved questions and practice mistakes.')+routeCard('formulas','Review formulas by subject.')+routeCard('progress','Log study time and rate your day.')+'</div>';
}

function paperArchive(exam) {
  const additional = exam==='drdo'
    ? '<p class="sub">Scientist ‘B’ written recruitment format has varied by year. '+ext('https://rac.gov.in/download/syllabus-drdo-ece.pdf','RAC descriptive ECE syllabus')+' · '+ext('https://www.youtube.com/watch?v=5QG1d9YBtvo','2022 Paper I solutions walkthrough')+'</p><p class="sub">Separate technical assistant recruitment · '+ext('https://www.adda247.com/engineering-jobs/drdo-ceptam-previous-year-papers/','DRDO CEPTAM papers')+'</p>'
    : exam==='gate' ? '<p class="sub">'+ext('https://gate2026.iitg.ac.in/download.html','Official GATE archive and available answer keys')+'</p>' : '';
  return '<details class="card section" id="paper-archive"><summary><strong>Full paper archive ('+papers[exam].length+')</strong></summary><ul class="paper-list">'+papers[exam].map(item=>'<li><strong>'+escape(item.name)+'</strong><span>'+ext(archiveLink(item.file),'Question paper')+(item.answer?ext(archiveLink(item.answer),'Answer key'):'')+'</span></li>').join('')+'</ul>'+additional+'</details>';
}
let formulaSearch='';
function formulaCard(formula, compact=false) {
  return '<article class="formula-card'+(compact?' compact':'')+'" data-formula-search="'+escape([formula.title,formula.category||'',formula.equation,formula.symbols,formula.when,formula.example].join(' ').toLowerCase())+'"><h4>'+escape(formula.title)+'</h4>'+
    equationMarkup(formula.equation)+
    '<dl class="definition-list"><div><dt>Symbols</dt><dd>'+escape(formula.symbols)+'</dd></div>'+
    '<div><dt>When to use it</dt><dd>'+escape(formula.when)+'</dd></div>'+
    (compact?'':'<div><dt>Quick example</dt><dd>'+escape(formula.example)+'</dd></div>')+'</dl></article>';
}
function linkedFormulas(topic, refs) {
  return refs.length ? '<div class="formula-grid">'+refs.map(id=>formulaCard(formulaIndex[topic][id],true)).join('')+'</div>' : '';
}
function responsePrompt(response) {
  const {type,choices:rawChoices,unit,places}=response;
  const choices=rawChoices||['Figure (A)','Figure (B)','Figure (C)','Figure (D)'];
  if(type==='TEXT') return '';
  if(type==='NAT'&&places===undefined) return '<p class="response-note"><strong>Numerical answer</strong> Use the units and precision requested in the question.</p>';
  if (type==='NAT') {
    return '<p class="response-note"><strong>Numerical answer</strong> Give your answer in '+escape(unit)+
      ', rounded to '+places+' decimal '+(places===1?'place':'places')+'.</p>';
  }
  const guidance=type==='MSQ'?'One or more choices may be correct.':'Choose one answer.';
  return '<p class="response-note">'+escape(guidance)+'</p><ol type="A" class="pyq-options" aria-label="Answer options">'+
    choices.map((item,i)=>'<li><span class="option-letter">'+String.fromCharCode(65+i)+'</span><div class="option-value">'+
      (typeof item==='string'?escape(item):equationMarkup(item.equation))+'</div></li>').join('')+'</ol>';
}
function questionCard(q) {
  const topic=topicMap[q.topic];
  const prep=questionPrep[q.id]||{title:topic.name,idea:topic.scope,refs:[],approach:q.steps[0],trap:q.trap};
  const workings=calculations[q.id]||[];
  return '<article class="card question" id="'+q.id+'"><header><h3>'+topic.name+'</h3><span class="meta">'+escape(q.ref)+'</span></header>'+

    '<div class="qa"><div><h4>Question</h4><p>'+escape(q.prompt)+'</p>'+questionContextMarkup(q)+(q.figure?'<figure class="pyq-figure"><a href="'+escape(q.figure)+'" target="_blank" rel="noopener"><img src="'+escape(q.figure)+'" alt="'+escape(q.figureAlt)+'" loading="lazy"></a><figcaption>'+escape(q.figureCaption||'Question diagram · click to enlarge')+'</figcaption></figure>':'')+responsePrompt(q.response)+'</div>'+
    '<div><h4>'+(q.unresolved?'Source limitation':q.excluded||q.marksToAll?'Official status and explanation':'Worked solution')+'</h4>'+workedSolutionMarkup(q)+
    (workings.length?'<div class="solution-math">'+workings.map(equationMarkup).join('')+'</div>':'')+
    finalAnswerMarkup(q)+
    (prep.trap?'<p class="check-line"><strong>Common mistake</strong> '+escape(prep.trap)+'</p>':'')+(q.reviewNote?'<p class="notice"><strong>Source note:</strong> '+escape(q.reviewNote)+'</p>':'')+'</div></div>'+
    '<details class="question-lesson optional-pyq-theory"><summary>Theory behind this question</summary><h4>'+escape(prep.title)+'</h4><p>'+escape(prep.idea)+'</p>'+linkedFormulas(q.topic,prep.refs)+'<p><strong>How to start</strong> '+escape(prep.approach)+'</p><div class="actions">'+button('open-study-topic','Read the full topic notes',true,'data-id="'+q.topic+'" data-route="theory"')+'</div></details>'+
    '<footer>'+ext(archiveLink(q.file)+'#page='+q.page,'Open original PDF')+(q.sources||[]).map(url=>ext(url,'Supporting source')).join('')+
    button('save-item',state.saved[q.id]?'Remove from revision':'Save for revision',true,'data-id="'+q.id+'"')+
    button('solved',state.solved[q.id]?'Solved ✓':'Mark solved',true,'data-id="'+q.id+'"')+'</footer></article>';
}
function questionPaperId(q) {
  if(q.paperId) return q.paperId;
  const year=q.ref.match(/\b(20\d{2})\b/)?.[1];
  const set=q.ref.match(/(?:Set|Session)\s*(\d)/i)?.[1];
  return q.exam+'-'+year+(set?'-'+set:'');
}
function pyqPaperOptions(exam) {
  if(exam==='gate') return Array.from({length:20},(_,i)=>2026-i).flatMap(year=>{
    const sets={2017:2,2016:3,2015:3,2014:4,2013:4}[year];
    return Array.from({length:sets||1},(_,i)=>({id:'gate-'+year+(sets?'-'+(i+1):''),label:'GATE '+year+(sets?' · '+(year===2013?'Booklet ':'Set ')+(year===2013?'ABCD'[i]:i+1):'')}));
  });
  return [...new Map([...questions.filter(q=>q.exam===exam).map(q=>[questionPaperId(q),{id:questionPaperId(q),label:exam.toUpperCase()+' '+q.ref.match(/\b(20\d{2})\b/)?.[1]}]),...(examArchive[exam]||[]).map(p=>[p.id,{id:p.id,label:exam.toUpperCase()+' '+p.title}])]).values()].sort((a,b)=>b.id.localeCompare(a.id));
}
function selectedPaperSource(exam) {
  const id=state.paperFilters[exam];if(!id)return '';
  const item=(examArchive[exam]||[]).find(p=>p.id===id);
  const year=id.split('-')[1];
  const source=item?.paper||papers[exam].find(p=>new RegExp('\\b'+year+'\\b').test(p.name));
  const sample=questions.find(q=>q.exam===exam&&questionPaperId(q)===id);
  return source?'<div class="actions">'+ext(archiveLink(sample?.file||source.file),'Open selected question paper')+(source.answer?ext(archiveLink(source.answer),'Open selected answer key'):'')+'</div>':'';
}
function paperSelect(exam) {
  return '<label class="field">Paper<select id="paper-filter"><option value="">All papers</option>'+pyqPaperOptions(exam).map(p=>'<option value="'+p.id+'" '+(state.paperFilters[exam]===p.id?'selected':'')+'>'+escape(p.label)+'</option>').join('')+'</select></label>';
}
function pyq(exam) {
  const selectedPaper=state.paperFilters[exam]||'';
  const list=questions.filter(q=>q.exam===exam&&matchTopic(q)&&(!selectedPaper||questionPaperId(q)===selectedPaper));
  const description='Read each question alongside its step-by-step worked solution. Theory is hidden until you open it; the original PDF is an optional source link.';
  const pending=list.filter(q=>q.unresolved);
  const selectedLabel=pyqPaperOptions(exam).find(p=>p.id===selectedPaper)?.label||'All papers';
  const ready=list.filter(q=>!q.unresolved);
  const order=q=>q.number??Number(q.id.match(/(\d+)$/)?.[1]||0);
  const byTopic=selectedPaper?(ready.length?[{topic:{name:selectedLabel},items:ready.slice().sort((a,b)=>order(a)-order(b))}]:[]):topics.map(topic=>({topic,items:ready.filter(item=>item.topic===topic.id)})).filter(group=>group.items.length);
  return section(routes[exam][1],description)+
    (exam==='drdo'?'':'<div class="actions">'+link(exam+'-tests',routes[exam+'-tests'][1])+'</div>')+
    '<div class="toolbar">'+paperSelect(exam)+topicSelect(exam)+'<span class="meta">'+ready.length+' Q&amp;A '+(ready.length!==1?'entries':'entry')+(pending.length?' · '+pending.length+' need missing source information':'')+'</span>'+button('jump-archive','Open full papers',true)+'</div>'+
    '<p class="meta">Showing '+escape(selectedLabel)+(selectedPaper?' · '+questions.filter(q=>q.exam===exam&&!q.unresolved).length+' total Q&amp;A entries across all papers':'')+'</p>'+selectedPaperSource(exam)+
    (list.length?'<div class="stack">'+byTopic.map(({topic,items})=>'<section class="pyq-topic"><h2>'+topic.name+'</h2><div class="stack">'+items.map(questionCard).join('')+'</div></section>').join('')+'</div>':'<p class="card">No worked solutions match this paper and topic yet. Choose another paper or open the source paper below.</p>')+
    (pending.length?'<details class="card section"><summary><strong>Questions needing complete source material ('+pending.length+')</strong></summary><p>The supplied memory-based copy omits essential figures or data for these questions. Their exact limitations are shown below.</p><div class="stack">'+pending.map(questionCard).join('')+'</div></details>':'')+paperArchive(exam);
}
function formulaCatalog(topic) {
  const groups=new Map();
  for(const item of formulaBank[topic.id]){const name=item.category||'Core formulas';if(!groups.has(name))groups.set(name,[]);groups.get(name).push(item);}
  return '<div class="formula-catalog">'+[...groups].map(([name,items])=>'<section class="formula-chapter"><h3>'+escape(name)+' <span class="meta">'+items.length+'</span></h3><div class="formula-grid revision-formulas">'+items.map(item=>formulaCard(item)).join('')+'</div></section>').join('')+'</div>';
}
function applyFormulaSearch(){
  if(active!=='formulas')return;
  const terms=formulaSearch.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const cards=[...main.querySelectorAll('.formula-catalog .formula-card')];let visible=0;
  for(const card of cards){card.hidden=!terms.every(term=>card.dataset.formulaSearch.includes(term));if(!card.hidden)visible++;}
  for(const chapter of main.querySelectorAll('.formula-chapter'))chapter.hidden=![...chapter.querySelectorAll('.formula-card')].some(card=>!card.hidden);
  for(const topic of main.querySelectorAll('.study-topic'))topic.hidden=![...topic.querySelectorAll('.formula-card')].some(card=>!card.hidden);
  const count=main.querySelector('#formula-count');if(count)count.textContent=visible+' / '+cards.length+' formula cards';
  const empty=main.querySelector('#formula-empty');if(empty)empty.hidden=visible!==0;
}
function studyPage(formula) {
  const title=formula?'Formula revision':'Theory notes';
  const instructions=formula?'Revise the ECE formula collection by subject and chapter. Each card explains its symbols, conditions and a quick example. Search by formula name, concept or symbol.':'Study each concept, connect it to the equations, and check your understanding with a worked example.';
  const selected=topics.filter(t=>!currentTopic(active)||currentTopic(active)===t.id);
  const total=selected.reduce((count,topic)=>count+(formula?formulaBank[topic.id]:lessons[topic.id]).length,0);
  return section(title,instructions)+'<div class="toolbar">'+topicSelect(active)+'<span class="meta"'+(formula?' id="formula-count" role="status" aria-live="polite"':'')+'>'+total+(formula?' formula cards':' lessons')+'</span></div>'+
    (formula?'<div class="formula-search"><label for="formula-search">Find a formula</label><input id="formula-search" type="search" placeholder="Search, e.g. MOSFET, Fourier, BER or waveguide" value="'+escape(formulaSearch)+'"><p class="meta">Choose All topics to search every subject. Hz and rad/s conventions, peak/RMS values and model assumptions are stated on the cards.</p></div><p id="formula-empty" class="card" hidden>No matching formulas in this subject. Try a shorter term or choose All topics.</p>':'')+
    '<div class="stack study-topics">'+selected.map(topic=>
      '<section class="card study-topic"><header><h2>'+topic.name+'</h2><p class="sub">'+topic.scope+'</p></header>'+
      (formula
        ? formulaCatalog(topic)
        : '<div class="chapter-list">'+lessons[topic.id].map(({title,explanation,refs,worked,check})=>
          '<article class="lecture"><h3>'+escape(title)+'</h3><p>'+escape(explanation)+'</p>'+
          '<details class="theory lesson-formulas"><summary>Key formulas for this lesson ('+refs.length+')</summary>'+linkedFormulas(topic.id,refs)+'</details>'+
          '<p class="example-line"><strong>Worked example</strong> '+escape(worked)+'</p>'+
          '<p class="check-line"><strong>Common mistake</strong> '+escape(check)+'</p></article>').join('')+'</div>')+
      '<div class="actions">'+(formula?button('open-study-topic','Read theory notes',true,'data-id="'+topic.id+'" data-route="theory"'):button('open-study-topic','Open formula revision',true,'data-id="'+topic.id+'" data-route="formulas"'))+
      button('open-topic','Practice this topic',true,'data-id="'+topic.id+'"')+'</div></section>').join('')+'</div>'+(formula?'<p class="meta formula-scope">Coverage: Engineering Mathematics, Networks, Signals, Devices, Analog, Digital, Control, Communications, Electromagnetics and quantitative aptitude. <a href="https://gate2027.iitm.ac.in/static/doc/GATE2027_Syllabus/EC_GATE2027_Syllabus.pdf" target="_blank" rel="noopener">Official EC syllabus</a>. A card may contain several related equations; stated assumptions take precedence over a memorized shortcut.</p>':'');
}

function shuffle(list) {
  const output=[...list];
  for(let i=output.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [output[i],output[j]]=[output[j],output[i]];
  }
  return output;
}
function newPractice() {
  practiceSession=shuffle(drills.filter(matchTopic));
  practiceIndex=0;
  practiceAnswer=null;
  practiceSelection=null;
}
function practice() {
  if (!practiceSession.length) newPractice();
  const item=practiceSession[practiceIndex];
  const selected=practiceAnswer;
  const judged=selected!==null;
  return section('Additional practice','100 questions per subject · 1,000 total. Practise core concepts and original GATE-style numerical problems with detailed worked solutions. Numerical answers are rounded to four decimal places unless stated otherwise. These include numerical variants; official past questions are in GATE PYQs.')+
    '<div class="toolbar">'+topicSelect(active)+'<span class="meta">'+practiceSession.length+' questions in this selection</span>'+button('restart-practice','Shuffle questions',true)+'</div>'+
    '<article class="card review-card"><p class="meta">'+topicMap[item.topic].name+' · '+(item.level||'Core concept')+' · '+(practiceIndex+1)+' of '+practiceSession.length+'</p>'+
    '<h2>'+escape(item.prompt)+'</h2><div class="choices">'+item.choices.map((option,i)=>
       '<button type="button" class="choice '+(judged&&i===item.key?'correct':judged&&selected===i?'wrong':!judged&&practiceSelection===i?'selected':'')+'" aria-pressed="'+(!judged&&practiceSelection===i)+'" data-action="choice" data-id="'+i+'" '+(judged?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+escape(option)+'</button>').join('')+'</div>'+
    '<div class="actions">'+button('submit-practice','Submit answer',false,judged||practiceSelection===null?'disabled':'')+
    button('erase-practice','Erase',true,!judged&&practiceSelection===null?'disabled':'')+'</div>'+
    (judged?'<p class="status '+(selected===item.key?'good':'bad')+'">'+(selected===item.key?'Correct':'Review this one')+'</p><h3>Detailed explanation</h3>'+practiceExplanation(item.why):'')+
    '<div class="actions">'+(judged?button('next-practice',practiceIndex===practiceSession.length-1?'Start another round':'Next question'):'')+
    button('save-item',state.saved[item.id]?'Remove from revision':'Save for revision',true,'data-id="'+item.id+'"')+'</div></article>';
}

function revision() {
  const ids=[...new Set([...Object.keys(state.saved),...Object.keys(state.wrong)])].filter(id=>questionMap[id]);
  return section('Revision session','Review bookmarked questions and practice mistakes.')+
    (ids.length?'<div class="stack">'+ids.map(id=>{
      const item=questionMap[id];
      return item.exam ? questionCard(item) :
        '<article class="card"><p class="meta">'+topicMap[item.topic].name+(state.wrong[id]?' · Practice mistake':'')+'</p><h2>'+escape(item.prompt)+'</h2>'+aptitudeStudy.source(item)+
        '<details class="theory"><summary>Reveal answer</summary><p><strong>'+escape(item.choices[item.key])+'</strong></p>'+practiceExplanation(item.why)+'</details>'+
        '<div class="actions">'+(state.wrong[id]?button('clear-wrong','Mark reviewed',true,'data-id="'+id+'"'):'')+
        (state.saved[id]?button('save-item','Remove bookmark',true,'data-id="'+id+'"'):'')+'</div></article>';
    }).join('')+'</div>':'<div class="card"><p>Saved questions and practice mistakes will appear here.</p><div class="actions">'+link('gate','Browse questions')+link('practice','Start practice',true)+'</div></div>');
}
function roadmap() {
  const completed=Object.keys(state.done).length;
  return section('Roadmap overview','Check off each subject after covering the theory, solving questions, and reviewing mistakes.')+
    '<article class="card"><h2>'+completed+' of '+topics.length+' subjects complete</h2><div class="bar" role="progressbar" aria-label="Subjects completed" aria-valuenow="'+completed+'" aria-valuemax="'+topics.length+'"><span style="width:'+(100*completed/topics.length)+'%"></span></div></article>'+
    '<div class="two">'+topics.map(t=>'<article class="card"><div class="road-row"><input id="road-'+t.id+'" data-road="'+t.id+'" type="checkbox" '+(state.done[t.id]?'checked':'')+'><label for="road-'+t.id+'">'+t.name+'<span class="meta">'+t.scope+'</span></label></div><div class="actions">'+button('open-topic','Practice topic',true,'data-id="'+t.id+'"')+'</div></article>').join('')+'</div>';
}
function progress() {
  const date=today(), prev=dayOffset(-1), log=state.logs[date]||{};
  const now=accuracy(date), yesterday=accuracy(prev);
  const delta=now!==null&&yesterday!==null?(now-yesterday>=0?'+':'')+(now-yesterday)+' pp vs yesterday':'Compare once you have practice on both days';
  const days=Array.from({length:7},(_,i)=>dayOffset(i-6));
  const maximum=Math.max(1,...days.map(minutes));
  const logDays=[...new Set([...Object.keys(state.logs),...Object.keys(state.attempts),...Object.values(state.solved)])].sort().reverse();
  return section('Daily progress','Track your improvements and give today’s study a rating out of ten.')+
    '<div class="stats">'+stat('Time studied',minutes(date)+' min','Today')+stat('Practice accuracy',now===null?'—':now+'%',delta)+stat('Worked PYQs completed',solvedOn(date),'Today')+'</div>'+
    '<div class="two"><form class="card" id="log-form"><h2>Log today · '+dateLabel(date)+'</h2><div class="toolbar"><label class="field">Study minutes<input name="minutes" type="number" min="0" max="1440" required value="'+(log.minutes ?? '')+'"></label><label class="field">Your rating / 10<input name="rating" type="number" min="1" max="10" required value="'+(log.rating ?? '')+'"></label></div><label class="field">What improved today?<textarea name="note" maxlength="500">'+escape(log.note)+'</textarea></label><div class="actions"><button class="btn" type="submit">Save daily log</button></div></form>'+
    '<div class="card"><h2>Last seven days</h2><p class="sub">Study minutes logged</p><div class="bars" aria-label="Study minutes by day">'+days.map(day=>'<div><strong>'+minutes(day)+'</strong><i aria-hidden="true"><b style="height:'+Math.round(100*minutes(day)/maximum)+'%"></b></i><span>'+day.slice(8)+'</span></div>').join('')+'</div><h3 class="section">Daily history</h3>'+ (logDays.length?logDays.slice(0,30).map(day=>'<div class="log-row"><strong>'+dateLabel(day)+'</strong><span>'+minutes(day)+' min · '+(state.logs[day]?.rating?state.logs[day].rating+'/10':'No rating')+' · '+(accuracy(day)===null?'No quiz':accuracy(day)+'% quiz')+'</span>'+(state.logs[day]?.note?'<p class="meta">'+escape(state.logs[day].note)+'</p>':'')+'</div>').join(''):'<p class="sub">Your activity will appear here.</p>')+'</div></div>'+
    '<p class="notice">Progress, ratings and study notes are saved in this browser. Quiz accuracy uses your latest answer for each question that day.</p>';
}
function interviewPage() {
  return section('Interview prep','Answer aloud first, then compare against the suggested answer and try the follow-up.')+
    '<div class="toolbar">'+topicSelect(active)+'</div><div class="two">'+interview.filter(matchTopic).map(i=>
    '<article class="card"><p class="meta">'+topicMap[i.topic].name+'</p><h2>'+escape(i.prompt)+'</h2><details class="theory"><summary>Suggested answer</summary><p>'+escape(i.answer)+'</p><p><strong>Follow-up</strong> '+escape(i.follow)+'</p></details></article>').join('')+'</div>'+
    (interview.some(matchTopic)?'':'<p class="card">No interview prompts for this topic yet. Choose another topic.</p>');
}
function finishMock() {
  state.mocks.unshift({day:today(),answers:mock.items.map((item,index)=>({id:item.id,response:mock.responses[index]||''}))});
  state.mocks=state.mocks.slice(0,15);
  mock=null;
  showMockResults=true;
  save();
}
function updateClock() {
  if (!mock) return;
  const remain=Math.max(0,Math.ceil((mock.until-Date.now())/1000));
  const clock=document.querySelector('#mock-clock');
  if (clock) clock.textContent=Math.floor(remain/60)+':'+String(remain%60).padStart(2,'0');
  if (remain===0) {finishMock(); if(active==='mock') draw();}
}
function mockPage() {
  const header=section('Mock interview','Run a five-minute, three-question session. Type answers or practise aloud, then compare with the model answers.');
  if (!mock) {
    const latest=state.mocks[0];
    return header+'<div class="card review-card">'+button('start-mock','Start mock interview')+
      (latest?'<div class="actions">'+button('show-mock',showMockResults?'Hide last review':'Review last mock',true)+'</div>':'')+'</div>'+
      (latest&&showMockResults?'<div class="stack section">'+latest.answers.map(({id,response})=>{
        const item=interview.find(i=>i.id===id);
        return '<article class="card"><h2>'+escape(item.prompt)+'</h2><p class="sub"><strong>Your answer</strong> '+escape(response||'No typed answer')+'</p><p><strong>Model answer</strong> '+escape(item.answer)+'</p><p><strong>Follow-up</strong> '+escape(item.follow)+'</p></article>';
      }).join('')+'</div>':'');
  }
  const i=mock.items[mock.index];
  return header+'<article class="card review-card"><p class="meta">Question '+(mock.index+1)+' of '+mock.items.length+' · <span class="mock-timer" id="mock-clock"></span></p><h2>'+escape(i.prompt)+'</h2><p class="sub">Follow-up · '+escape(i.follow)+'</p>'+
    '<label class="field section">Your answer<textarea id="mock-answer" maxlength="2000">'+escape(mock.responses[mock.index])+'</textarea></label>'+
    '<div class="actions">'+(mock.index?button('mock-prev','Previous',true):'')+button('mock-next',mock.index===mock.items.length-1?'Finish interview':'Next question')+button('mock-erase','Erase',true)+ (mock.index<mock.items.length-1?button('mock-finish','Finish early',true):'')+'</div></article>';
}

const topicStudy=setupTopicStudy(main,{state,save,today,escape});
const series=setupExamSeries(main,{state,save,escape,section,ext,archiveLink,draw});
const pages={'gate-tests':()=>series.render('gate'),'isro-tests':()=>series.render('isro'),aptitude:aptitudeStudy.render,'topic-lessons':topicStudy.render,'topic-quizzes':topicStudy.render,'topic-matching':topicStudy.render,'topic-plan':topicStudy.render,dashboard,roadmap,progress,gate:()=>pyq('gate'),isro:()=>pyq('isro'),drdo:()=>pyq('drdo'),practice,theory:()=>studyPage(false),formulas:()=>studyPage(true),revision,interview:interviewPage,mock:mockPage};
function draw() {
  for(const link of nav.querySelectorAll('a')) {
    if (link.hash==='#'+active) link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  }
  document.querySelector('#breadcrumb').textContent='Study desk / '+routes[active][1];
  document.title=routes[active][1]+' · GATE ECE Study Desk';
  main.innerHTML=pages[active]();
  applyFormulaSearch();
  series.tick();
  updateClock();
}
function route() {
  const target=location.hash.slice(1).split('/')[0];
  if (target==='main') {main.focus(); return;}
  active=Object.hasOwn(routes,target)?target:'dashboard';
  const menu=document.querySelector('#menu');
  document.querySelector('#sidebar').classList.remove('open');
  menu.setAttribute('aria-expanded','false');
  draw();
  window.scrollTo(0,0);
  main.focus({preventScroll:true});
}

nav.innerHTML=groups.map(([name,ids])=>'<div class="nav-group"><p class="nav-label">'+name+'</p>'+ids.map(id=>'<a class="nav-link" href="#'+id+'"><span aria-hidden="true">'+routes[id][0]+'</span>'+routes[id][1]+'</a>').join('')+'</div>').join('');
applyBackground(state.background);
document.querySelector('#background').addEventListener('input',event=>{state.background=event.target.value;applyBackground(state.background);save();});
document.querySelector('#reset-color').addEventListener('click',()=>{state.background='#ffffff';applyBackground(state.background);save();});
document.querySelector('#menu').addEventListener('click',event=>{
  const open=document.querySelector('#sidebar').classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded',String(open));
});

main.addEventListener('change',event=>{
  const el=event.target;
  if(aptitudeStudy.handleChange(el)){draw();document.getElementById(el.id)?.focus();return;}
  if (el.id==='paper-filter') {state.paperFilters[active]=el.value;save();draw();document.querySelector('#paper-filter')?.focus();}
  if (el.id==='topic-filter') {filters[active]=el.value;if(active==='practice') newPractice();draw();document.querySelector('#topic-filter')?.focus();}
  if (el.id==='exam-date') {state.date=el.value;save();draw();document.querySelector('#exam-date')?.focus();}
  if (el.dataset.road) {updateFlag(state.done,el.dataset.road,true);draw();document.getElementById(el.id)?.focus();}
});
main.addEventListener('input',event=>{if(event.target.id==='formula-search'){formulaSearch=event.target.value;applyFormulaSearch();return;}if(event.target.id==='mock-answer'&&mock) mock.responses[mock.index]=event.target.value;});
main.addEventListener('submit',event=>{
  if(event.target.id!=='log-form') return;
  event.preventDefault();
  const data=new FormData(event.target);
  state.logs[today()]={minutes:Number(data.get('minutes')),rating:Number(data.get('rating')),note:data.get('note').trim()};
  save();draw();toast('Daily log saved.');
});
main.addEventListener('click',event=>{
  const el=event.target.closest('button[data-action]');
  if (!el) return;
  const id=el.dataset.id;
  if(aptitudeStudy.handleClick(el)){
    draw();
    if (el.dataset.action==='apt-select') main.querySelector('[data-action="apt-select"][aria-pressed="true"]')?.focus();
    if (el.dataset.action==='apt-erase') main.querySelector('[data-action="apt-select"]')?.focus();
    if (el.dataset.action==='apt-submit') main.querySelector('[data-action="apt-erase"]')?.focus();
    return;
  }
  switch(el.dataset.action) {
    case 'save-item': updateFlag(state.saved,id,true);break;
    case 'solved': updateFlag(state.solved,id,today());break;
    case 'clear-wrong': delete state.wrong[id];save();break;
    case 'jump-archive': {
      const archive=document.querySelector('#paper-archive');
      archive.open=true;
      archive.querySelector('summary').focus();
      archive.scrollIntoView({block:'start'});
      return;
    }
    case 'open-study-topic':
      filters[el.dataset.route]=id;
      location.hash=el.dataset.route;
      return;
    case 'open-topic':
      filters.practice=id;
      active='practice';
      newPractice();
      location.hash='practice';
      return;
    case 'restart-practice': newPractice();break;
    case 'next-practice':
      if(practiceIndex+1===practiceSession.length) newPractice();
      else {practiceIndex++;practiceAnswer=null;practiceSelection=null;}
      break;
    case 'choice':
      if(practiceAnswer===null) practiceSelection=Number(id);
      break;
    case 'erase-practice': {
      const item=practiceSession[practiceIndex];
      if(practiceAnswer!==null){
        delete state.attempts[today()]?.[item.id];
        delete state.wrong[item.id];
        save();
      }
      practiceAnswer=null;
      practiceSelection=null;
      break;
    }
    case 'submit-practice': {
      if(practiceAnswer!==null||practiceSelection===null) return;
      const item=practiceSession[practiceIndex];
      practiceAnswer=practiceSelection;
      practiceSelection=null;
      const date=today();
      const right=practiceAnswer===item.key;
      (state.attempts[date]??={})[item.id]=right;
      if(right) delete state.wrong[item.id];else state.wrong[item.id]=true;
      save();
      break;
    }
    case 'start-mock':
      mock={items:shuffle(interview).slice(0,3),responses:[],index:0,until:Date.now()+300000};
      break;
    case 'show-mock': showMockResults=!showMockResults;break;
    case 'mock-erase': if(mock) mock.responses[mock.index]='';break;
    case 'mock-prev': if(mock) mock.index--;break;
    case 'mock-next':
      if(mock&&mock.index+1<mock.items.length) mock.index++;
      else if(mock) finishMock();
      break;
    case 'mock-finish': if(mock) finishMock();break;
  }
  draw();
  const focusAfterAnswer={
    choice:'[data-action="choice"][aria-pressed="true"]',
    'submit-practice':'[data-action="erase-practice"]',
    'erase-practice':'[data-action="choice"]',
    'mock-erase':'#mock-answer'
  }[el.dataset.action];
  if (focusAfterAnswer) main.querySelector(focusAfterAnswer)?.focus();
});
window.addEventListener('hashchange',route);
route();
mockClock=setInterval(updateClock,1000);
window.addEventListener('pagehide',()=>clearInterval(mockClock));
window.addEventListener('pageshow',()=>{clearInterval(mockClock);mockClock=setInterval(updateClock,1000);});
setInterval(()=>{if(active==='dashboard') {const panel=document.querySelector('.countdown');if(panel) panel.outerHTML=countdown();}},60000);
