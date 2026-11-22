import {topics, papers, questions, drills, interview} from './data.js';
import {formulaBank, lessons, questionPrep, calculations} from './lessons.js';
import {equationMarkup} from './math.js';
import {setupTopicStudy} from './topic-study.js';

const routes = {
  dashboard:['⊞','Dashboard'], roadmap:['☷','Roadmap'],
  gate:['◇','GATE PYQs'], isro:['◎','ISRO PYQs'], drdo:['△','DRDO PYQs'], practice:['▷','Additional practice'],
  'topic-lessons':['▤','Topic lessons'], 'topic-quizzes':['✓','Topic quizzes'], 'topic-matching':['⇄','Match the terms'], 'topic-plan':['☷','What to study today'],
  theory:['▤','Theory notes'], formulas:['ƒ','Formula revision'], revision:['↻','Revision session'],
  interview:['◉','Interview prep'], mock:['◷','Mock interview'], progress:['▥','Daily progress']
};
const groups = [
  ['Overview',['dashboard','roadmap','progress']],
  ['Questions',['gate','isro','drdo','practice']],
  ['Topic study',['topic-lessons','topic-quizzes','topic-matching','topic-plan']],
  ['Study',['theory','formulas','revision']],
  ['Interview',['interview','mock']]
];
const topicMap = Object.fromEntries(topics.map(topic=>[topic.id,topic]));
const formulaIndex = Object.fromEntries(Object.entries(formulaBank).map(([topic, formulas]) => [topic, Object.fromEntries(formulas.map(formula => [formula.id, formula]))]));
const questionMap = Object.fromEntries([...questions,...drills].map(question=>[question.id,question]));
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
const defaultState = {background:'#ffffff',date:'',logs:{},attempts:{},solved:{},done:{},saved:{},mocks:[],wrong:{}};
let state;
try { state = {...defaultState,...JSON.parse(localStorage.getItem(storageKey) || '{}')}; }
catch { state = {...defaultState}; }
state.topicStudy={seen:{},answers:{},matches:{},scores:{},...state.topicStudy};
let active = 'dashboard';
const filters = {};
let practiceSession = [];
let practiceIndex = 0;
let practiceAnswer = null;
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
  return file.startsWith('https://') ? file : './papers/'+encodeURIComponent(file);
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
    '<h2>Continue studying</h2><div class="route-grid">'+routeCard('revision','Revisit saved questions and practice mistakes.')+routeCard('formulas','Review formulas by subject.')+routeCard('progress','Log study time and rate your day.')+'</div>';
}

function paperArchive(exam) {
  const additional = exam==='drdo'
    ? '<p class="sub">Scientist ‘B’ written recruitment format has varied by year. '+ext('https://rac.gov.in/download/syllabus-drdo-ece.pdf','RAC descriptive ECE syllabus')+' · '+ext('https://www.youtube.com/watch?v=5QG1d9YBtvo','2022 Paper I solutions walkthrough')+'</p><p class="sub">Separate technical assistant recruitment · '+ext('https://www.adda247.com/engineering-jobs/drdo-ceptam-previous-year-papers/','DRDO CEPTAM papers')+'</p>'
    : exam==='gate' ? '<p class="sub">'+ext('https://gate2026.iitg.ac.in/download.html','Official GATE archive and available answer keys')+'</p>' : '';
  return '<details class="card section" id="paper-archive"><summary><strong>Full paper archive ('+papers[exam].length+')</strong></summary><ul class="paper-list">'+papers[exam].map(item=>'<li><strong>'+escape(item.name)+'</strong><span>'+ext(archiveLink(item.file),'Question paper')+(item.answer?ext(archiveLink(item.answer),'Answer key'):'')+'</span></li>').join('')+'</ul>'+additional+'</details>';
}
function formulaCard(formula, compact=false) {
  return '<article class="formula-card'+(compact?' compact':'')+'"><h4>'+escape(formula.title)+'</h4>'+
    equationMarkup(formula.equation)+
    '<dl class="definition-list"><div><dt>Symbols</dt><dd>'+escape(formula.symbols)+'</dd></div>'+
    '<div><dt>When to use it</dt><dd>'+escape(formula.when)+'</dd></div>'+
    (compact?'':'<div><dt>Quick example</dt><dd>'+escape(formula.example)+'</dd></div>')+'</dl></article>';
}
function linkedFormulas(topic, refs) {
  return refs.length ? '<div class="formula-grid">'+refs.map(id=>formulaCard(formulaIndex[topic][id],true)).join('')+'</div>' : '';
}
function responsePrompt(response) {
  const {type,choices,unit,places}=response;
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
  const prep=questionPrep[q.id];
  const workings=calculations[q.id]||[];
  return '<article class="card question" id="'+q.id+'"><header><h3>'+topic.name+'</h3><span class="meta">'+escape(q.ref)+'</span></header>'+
    '<section class="question-lesson"><p class="lesson-kicker">Theory before the question</p><h4>'+escape(prep.title)+'</h4><p>'+escape(prep.idea)+'</p>'+
    linkedFormulas(q.topic,prep.refs)+'<p class="method"><strong>How to start</strong> '+escape(prep.approach)+'</p>'+
    '<div class="actions">'+button('open-study-topic','Read the full topic notes',true,'data-id="'+q.topic+'" data-route="theory"')+'</div></section>'+
    '<div class="qa"><div><h4>Question</h4><p>'+escape(q.prompt)+'</p>'+responsePrompt(q.response)+'</div>'+
    '<div><h4>Worked solution</h4><ol class="solution-steps">'+q.steps.map(step=>'<li>'+escape(step)+'</li>').join('')+'</ol>'+
    (workings.length?'<div class="solution-math">'+workings.map(equationMarkup).join('')+'</div>':'')+
    '<p class="answer-line"><strong>Final answer</strong> '+escape(q.answer)+'</p>'+
    '<p class="check-line"><strong>Common mistake</strong> '+escape(prep.trap)+'</p></div></div>'+
    '<footer>'+ext(archiveLink(q.file)+'#page='+q.page,'Open original PDF')+
    button('save-item',state.saved[q.id]?'Remove from revision':'Save for revision',true,'data-id="'+q.id+'"')+
    button('solved',state.solved[q.id]?'Solved ✓':'Mark solved',true,'data-id="'+q.id+'"')+'</footer></article>';
}
function pyq(exam) {
  const list=questions.filter(q=>q.exam===exam&&matchTopic(q));
  const description={gate:'Learn the topic and formulas first, then solve the question and compare your steps. Each paraphrased prompt links to its original paper.',
    isro:'Learn the underlying theory, then work through Scientist/Engineer ‘SC’ Electronics questions with original paper links.',
    drdo:'Learn the circuit concepts before working through older Scientist Entry Test questions and browsing RAC preparation sources.'}[exam];
  const byTopic=topics.map(topic=>({topic,items:list.filter(item=>item.topic===topic.id)})).filter(group=>group.items.length);
  return section(routes[exam][1],description)+
    '<div class="toolbar">'+topicSelect(exam)+'<span class="meta">'+list.length+' worked question'+(list.length!==1?'s':'')+'</span>'+button('jump-archive','Open full papers',true)+'</div>'+
    (list.length?'<div class="stack">'+byTopic.map(({topic,items})=>'<section class="pyq-topic"><h2>'+topic.name+'</h2><div class="stack">'+items.map(questionCard).join('')+'</div></section>').join('')+'</div>':'<p class="card">Worked questions for that topic aren’t in this section yet. Browse the full papers below.</p>')+
    paperArchive(exam);
}
function studyPage(formula) {
  const title=formula?'Formula revision':'Theory notes';
  const instructions=formula?'Each equation includes its symbols, when to use it, and a quick substitution.':'Study each concept, connect it to the equations, and check your understanding with a worked example.';
  const selected=topics.filter(t=>!currentTopic(active)||currentTopic(active)===t.id);
  const total=selected.reduce((count,topic)=>count+(formula?formulaBank[topic.id]:lessons[topic.id]).length,0);
  return section(title,instructions)+'<div class="toolbar">'+topicSelect(active)+'<span class="meta">'+total+(formula?' formulas':' lessons')+'</span></div>'+
    '<div class="stack study-topics">'+selected.map(topic=>
      '<section class="card study-topic"><header><h2>'+topic.name+'</h2><p class="sub">'+topic.scope+'</p></header>'+
      (formula
        ? '<div class="formula-grid revision-formulas">'+formulaBank[topic.id].map(item=>formulaCard(item)).join('')+'</div>'
        : '<div class="chapter-list">'+lessons[topic.id].map(({title,explanation,refs,worked,check})=>
          '<article class="lecture"><h3>'+escape(title)+'</h3><p>'+escape(explanation)+'</p>'+
          '<details class="theory lesson-formulas"><summary>Key formulas for this lesson ('+refs.length+')</summary>'+linkedFormulas(topic.id,refs)+'</details>'+
          '<p class="example-line"><strong>Worked example</strong> '+escape(worked)+'</p>'+
          '<p class="check-line"><strong>Common mistake</strong> '+escape(check)+'</p></article>').join('')+'</div>')+
      '<div class="actions">'+(formula?button('open-study-topic','Read theory notes',true,'data-id="'+topic.id+'" data-route="theory"'):button('open-study-topic','Open formula revision',true,'data-id="'+topic.id+'" data-route="formulas"'))+
      button('open-topic','Practice this topic',true,'data-id="'+topic.id+'"')+'</div></section>').join('')+'</div>';
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
}
function practice() {
  if (!practiceSession.length) newPractice();
  const item=practiceSession[practiceIndex];
  const selected=practiceAnswer;
  const judged=selected!==null;
  return section('Additional practice','Solve 100 original questions across 10 subjects, with formulas, worked calculations and detailed explanations.')+
    '<div class="toolbar">'+topicSelect(active)+button('restart-practice','Shuffle questions',true)+'</div>'+
    '<article class="card review-card"><p class="meta">'+topicMap[item.topic].name+' · '+(practiceIndex+1)+' of '+practiceSession.length+'</p>'+
    '<h2>'+escape(item.prompt)+'</h2><div class="choices">'+item.choices.map((option,i)=>
       '<button type="button" class="choice '+(judged&&i===item.key?'correct':judged&&selected===i?'wrong':'')+'" data-action="choice" data-id="'+i+'" '+(judged?'disabled':'')+'>'+String.fromCharCode(65+i)+'. '+escape(option)+'</button>').join('')+'</div>'+
    (judged?'<p class="status '+(selected===item.key?'good':'bad')+'">'+(selected===item.key?'Correct':'Review this one')+'</p><h3>Detailed explanation</h3><p>'+escape(item.why)+'</p>':'')+
    '<div class="actions">'+(judged?button('next-practice',practiceIndex===practiceSession.length-1?'Start another round':'Next question'):'')+
    button('save-item',state.saved[item.id]?'Remove from revision':'Save for revision',true,'data-id="'+item.id+'"')+'</div></article>';
}

function revision() {
  const ids=[...new Set([...Object.keys(state.saved),...Object.keys(state.wrong)])].filter(id=>questionMap[id]);
  return section('Revision session','Review bookmarked questions and practice mistakes.')+
    (ids.length?'<div class="stack">'+ids.map(id=>{
      const item=questionMap[id];
      return item.exam ? questionCard(item) :
        '<article class="card"><p class="meta">'+topicMap[item.topic].name+(state.wrong[id]?' · Practice mistake':'')+'</p><h2>'+escape(item.prompt)+'</h2>'+
        '<details class="theory"><summary>Reveal answer</summary><p><strong>'+escape(item.choices[item.key])+'</strong></p><p>'+escape(item.why)+'</p></details>'+
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
    '<div class="actions">'+(mock.index?button('mock-prev','Previous',true):'')+button('mock-next',mock.index===mock.items.length-1?'Finish interview':'Next question')+ (mock.index<mock.items.length-1?button('mock-finish','Finish early',true):'')+'</div></article>';
}

const topicStudy=setupTopicStudy(main,{state,save,today,escape});
const pages={'topic-lessons':topicStudy.render,'topic-quizzes':topicStudy.render,'topic-matching':topicStudy.render,'topic-plan':topicStudy.render,dashboard,roadmap,progress,gate:()=>pyq('gate'),isro:()=>pyq('isro'),drdo:()=>pyq('drdo'),practice,theory:()=>studyPage(false),formulas:()=>studyPage(true),revision,interview:interviewPage,mock:mockPage};
function draw() {
  for(const link of nav.querySelectorAll('a')) {
    if (link.hash==='#'+active) link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  }
  document.querySelector('#breadcrumb').textContent='Study desk / '+routes[active][1];
  document.title=routes[active][1]+' · GATE ECE Study Desk';
  main.innerHTML=pages[active]();
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
  if (el.id==='topic-filter') {filters[active]=el.value;if(active==='practice') newPractice();draw();document.querySelector('#topic-filter')?.focus();}
  if (el.id==='exam-date') {state.date=el.value;save();draw();document.querySelector('#exam-date')?.focus();}
  if (el.dataset.road) {updateFlag(state.done,el.dataset.road,true);draw();document.getElementById(el.id)?.focus();}
});
main.addEventListener('input',event=>{if(event.target.id==='mock-answer'&&mock) mock.responses[mock.index]=event.target.value;});
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
      else {practiceIndex++;practiceAnswer=null;}
      break;
    case 'choice': {
      if(practiceAnswer!==null) return;
      const item=practiceSession[practiceIndex];
      practiceAnswer=Number(id);
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
    case 'mock-prev': if(mock) mock.index--;break;
    case 'mock-next':
      if(mock&&mock.index+1<mock.items.length) mock.index++;
      else if(mock) finishMock();
      break;
    case 'mock-finish': if(mock) finishMock();break;
  }
  draw();
});
window.addEventListener('hashchange',route);
route();
mockClock=setInterval(updateClock,1000);
window.addEventListener('pagehide',()=>clearInterval(mockClock));
window.addEventListener('pageshow',()=>{clearInterval(mockClock);mockClock=setInterval(updateClock,1000);});
setInterval(()=>{if(active==='dashboard') {const panel=document.querySelector('.countdown');if(panel) panel.outerHTML=countdown();}},60000);
