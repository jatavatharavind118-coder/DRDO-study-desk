import {curriculum} from './topic-curriculum.js';
import {topicChecks} from './topic-checks.js';
import {electricalFundamentals} from './electrical-fundamentals.js';
import {topicKey,getQuestions,scoreQuiz,mastery,studyReport} from './topic-progress.js';

const labels = {
  'topic-lessons':'Topic lessons',
  'topic-quizzes':'Topic quizzes',
  'topic-matching':'Match the terms',
  'topic-plan':'What to study today'
};
const hasTopics = mode => mode === 'topic-lessons' || mode === 'topic-quizzes';
const destination = (mode, subject, index=0,question=0) => '#'+mode+(mode==='topic-plan'?'':'/'+subject.id+(hasTopics(mode)?'/'+(index+1):''))+(mode==='topic-quizzes'&&question>0?'/'+(question+1):'');
const optionOrder = (values, offset) => [...values.slice(offset),...values.slice(0,offset)];
const illustrated = new Set('network-7 network-10 devices-4 devices-8 analog-8 analog-9 digital-5 digital-10 signals-5 signals-9 dsp-2 dsp-5 control-1 control-4 control-9 comm-2 comm-10 em-5 em-7 antennas-5 antennas-6 embedded-1 embedded-6 measure-3 measure-5'.split(' '));


export function setupTopicStudy(main, {state,save,today,escape}) {
  const progress=state.topicStudy;
  for (const [key,previous] of Object.entries(progress.answers)) {
    if (typeof previous==='string') progress.answers[key]={base:previous};
  }
  const choicesFor=(question,index,n)=>optionOrder([question.correct,...question.distractors],(index+n)%4);
  const lessonScore=(subject,index)=>scoreQuiz(getQuestions(subject,index),progress.answers[topicKey(subject,index)]||{});
  const action=(mode,subject,index,text,primary=false) =>
    '<a class="btn'+(primary?'':' secondary')+'" href="'+destination(mode,subject,index)+'">'+escape(text)+'</a>';

  function current() {
    const [mode,id,number,questionNumber]=location.hash.slice(1).split('/');
    const subject=curriculum.find(item=>item.id===id)||curriculum[0];
    const parsed=Number(number)-1;
    const index=Number.isInteger(parsed)&&parsed>=0&&parsed<subject.topics.length?parsed:0;
    const key=topicKey(subject,index);
    const questions=getQuestions(subject,index);
    const answers=progress.answers[key]||{};
    const parsedQuestion=Number(questionNumber)-1;
    const remaining=questions.findIndex(q=>!Object.hasOwn(answers,q.id));
    const questionIndex=Number.isInteger(parsedQuestion)&&parsedQuestion>=0&&parsedQuestion<questions.length
      ? parsedQuestion : Math.max(remaining,0);
    return {mode,subject,index,topic:subject.topics[index],key,questions,answers,questionIndex};
  }

  function filters({mode,subject,index}) {
    return '<div class="toolbar course-toolbar"><label class="field">Subject<select data-course-field="subject">'+curriculum.map(item=>
      '<option value="'+item.id+'" '+(item.id===subject.id?'selected':'')+'>'+escape(item.name)+'</option>').join('')+'</select></label>'+
      (hasTopics(mode)?'<label class="field">Topic<select data-course-field="topic">'+subject.topics.map((topic,i)=>
      '<option value="'+i+'" '+(i===index?'selected':'')+'>'+(i+1)+'. '+escape(topic.title)+'</option>').join('')+'</select></label>':'')+'</div>';
  }

  function indexList({mode,subject,index}) {
    return '<section class="card course-index"><h2>Topics in this subject</h2><ol>'+
      subject.topics.map((topic,i)=>{
        const key=topicKey(subject,i);
        const score=mode==='topic-quizzes'?lessonScore(subject,i):null;
        const status=mode==='topic-lessons'?(progress.seen[key]?'Studied':''):
          score.count?(score.count===score.total?score.correct+'/'+score.total+' correct':score.count+'/'+score.total+' answered'):'';
        return '<li><a '+(i===index?'aria-current="step" ':'')+'href="'+destination(mode,subject,i)+'">'+escape(topic.title)+'</a>'+
          (status?'<span class="meta">'+status+'</span>':'')+'</li>';
      }).join('')+'</ol></section>';
  }

  function pager(mode,subject,index) {
    return '<div class="actions course-pager">'+
      (index>0?action(mode,subject,index-1,'Previous topic'):'')+
      (index+1<subject.topics.length?action(mode,subject,index+1,'Next topic'):'')+'</div>';
  }

  function visual(subject,index,key) {
    const map=topicChecks[subject.id][index];
    return (illustrated.has(key)?'<figure class="topic-figure"><img src="./topic-images/'+key+'.png" loading="lazy" width="980" height="330" alt="'+
      escape(subject.topics[index].title+' — illustrated explanation')+'"><figcaption>'+escape(subject.topics[index].title)+'</figcaption></figure>':'')+
      '<figure class="topic-map"><figcaption>Concept map <a href="./topic-maps/'+key+'.png" target="_blank" rel="noopener">Open full size</a></figcaption><img class="concept-map-image" src="./topic-maps/'+key+'.png" loading="lazy" width="960" height="540" alt="">'+
      '<ul class="concept-map-text">'+map.map(([term,meaning])=>
        '<li><strong>'+escape(term)+'</strong><span>'+escape(meaning)+'</span></li>').join('')+'</ul></figure>';
  }

  function lesson(selection) {
    const {mode,subject,index,topic,key}=selection;
    const seen=Object.hasOwn(progress.seen,key);
    const visuals=visual(subject,index,key);
    const content=key==='network-1'
      ? electricalFundamentals()+visuals
      : '<p class="course-theory">'+escape(topic.theory)+'</p>'+visuals+
        '<p class="example-line"><strong>Example</strong> '+escape(topic.example)+'</p>';
    return '<div class="course-body"><article class="card course-card"><p class="meta">Topic '+(index+1)+' of '+subject.topics.length+'</p>'+
      '<h2>'+escape(topic.title)+'</h2>'+content+'<div class="actions">'+
      action('topic-quizzes',subject,index,'Take this topic’s quiz',true)+
      '<button class="btn secondary" type="button" data-course-action="study" aria-pressed="'+seen+'">'+(seen?'Studied ✓':'Mark studied')+'</button></div>'+
      pager(mode,subject,index)+'</article>'+indexList(selection)+'</div>';
  }

  function quiz(selection) {
    const {mode,subject,index,topic,key,questions,answers,questionIndex}=selection;
    const quiz=questions[questionIndex];
    const {question,correct,reason}=quiz;
    const choices=choicesFor(quiz,index,questionIndex);
    const submitted=Object.hasOwn(answers,quiz.id);
    const selected=answers[quiz.id];
    const score=scoreQuiz(questions,answers);
    const finished=score.count===score.total;
    const routeFor=n=>destination(mode,subject,index,n)+(n===0?'/1':'');
    const navigation='<nav class="quiz-positions" aria-label="Quiz questions">'+questions.map((item,i)=>
      '<a href="'+routeFor(i)+'" '+(i===questionIndex?'aria-current="step" ':'')+
      'aria-label="Question '+(i+1)+(Object.hasOwn(answers,item.id)?', answered':'')+'">'+(i+1)+'</a>').join('')+'</nav>';
    const next=questions.findIndex((item,i)=>i>questionIndex&&!Object.hasOwn(answers,item.id));
    const nextRemaining=questions.findIndex(item=>!Object.hasOwn(answers,item.id));
    const pending=next<0?nextRemaining:next;
    return '<div class="course-body"><article class="card course-card"><p class="meta">'+escape(topic.title)+'</p>'+
      '<p class="meta">Question '+(questionIndex+1)+' of '+questions.length+' · '+score.count+' answered</p>'+navigation+
      (finished?'<div class="answer-line" role="status"><strong>Quiz complete · '+score.correct+' of '+score.total+' correct · '+mastery(score)+'</strong>'+
      '<div class="actions">'+action('topic-plan',subject,index,'What to study today',true)+
      '<button class="btn secondary" type="button" data-course-action="retake">Retake quiz</button></div></div>':'')+
      '<h2 class="quiz-question">'+escape(question)+'</h2><form data-course-form="quiz"><fieldset class="course-choices"><legend class="meta">Choose one answer.</legend>'+
      choices.map((item,i)=>'<label class="course-option'+(submitted&&item===correct?' right':submitted&&item===selected?' wrong':'')+
      '"><input type="radio" name="answer" value="'+i+'" '+(submitted?'disabled ':'')+(selected===item?'checked ':'')+
      'required><span class="option-letter">'+String.fromCharCode(65+i)+'</span><span>'+escape(item)+'</span></label>').join('')+
      '</fieldset>'+(submitted?'<div class="course-feedback '+(selected===correct?'answer-line':'check-line')+'" role="status" tabindex="-1"><strong>'+
      (selected===correct?'Correct':'Correct answer')+'</strong> '+escape(correct)+'<p>'+escape(reason)+'</p></div>':'')+
      '<div class="actions">'+(submitted&&pending>=0?'<a class="btn" href="'+routeFor(pending)+'">Next unanswered question</a>':
      submitted?'':'<button type="submit" class="btn">Check answer</button>')+
      '<button class="btn secondary" type="button" data-course-action="erase-quiz">Erase</button>'+
      action('topic-lessons',subject,index,'Read this topic’s theory')+'</div></form>'+
      pager(mode,subject,index)+'</article>'+indexList(selection)+'</div>';
  }

  function plan() {
    const {weak,developing,strong,untested,unfinished,recommend}=studyReport(progress);
    const itemLinks=(item,text)=>
      '<div><a href="'+destination('topic-lessons',item.subject,item.index)+'">'+escape(item.topic.title)+'</a>'+
      '<p class="meta">'+escape(item.subject.name)+' · '+escape(text)+'</p></div>';
    const scoreText=item=>item.score.correct+'/'+item.score.total+' correct';
    const group=(title,items,empty)=>'<section class="card topic-assessment"><h2>'+title+'</h2>'+
      (items.length?'<ul>'+items.map(item=>'<li>'+itemLinks(item,scoreText(item))+'</li>').join('')+'</ul>':'<p class="sub">'+empty+'</p>')+'</section>';
    const reason=item=>item.level==='Weak'?'Review the lesson and retry · '+scoreText(item):
      item.level==='Developing'?'Revisit missed concepts · '+scoreText(item):
      item.level==='Strong'?'Refresh a completed topic · '+scoreText(item):
      item.attempt.count?'Finish the quiz · '+item.attempt.count+'/'+item.attempt.total+' answered':'Study the lesson and take its quiz';
    return '<section class="card topic-today"><h2>Recommended for today</h2>'+
      '<ol>'+recommend.map(item=>'<li>'+itemLinks(item,reason(item))+action('topic-quizzes',item.subject,item.index,item.attempt.count&&!item.score?'Resume quiz':'Open quiz')+'</li>').join('')+'</ol></section>'+
      '<p class="sub">Ratings use your latest completed quiz for each topic. Strong is 80% or above, developing is 60–79%, and weak is below 60%. '+untested+' topics untested · '+unfinished+' quizzes in progress.</p>'+
      '<div class="topic-assessments">'+group('Weak topics',weak,'No weak topics identified from completed quizzes yet.')+
      group('Developing topics',developing,'No developing topics identified yet.')+
      group('Strong topics',strong,'Complete a quiz to identify a strength.')+'</div>';
  }

  function matching({subject,index}) {
    const checked=progress.matches[subject.id];
    const order=optionOrder(subject.matches.map((_,i)=>i), 1+curriculum.indexOf(subject)%3);
    const total=subject.matches.length;
    const score=checked?.filter((value,i)=>value===i).length;
    return '<article class="card course-card course-matching"><h2>'+escape(subject.name)+'</h2>'+
      '<p class="sub">Pair each term with a description. Use each description once.</p><form data-course-form="match">'+
      '<div class="match-rows">'+subject.matches.map(([term,description],i)=>{
        const correct=checked?.[i]===i;
        return '<div class="match-row"><label for="match-'+i+'">'+escape(term)+'</label><div><select id="match-'+i+'" name="match-'+i+'" required>'+
          '<option value="">Choose a description</option>'+order.map(j=>'<option value="'+j+'" '+(checked?.[i]===j?'selected':'')+'>'+
            escape(subject.matches[j][1])+'</option>').join('')+'</select>'+
          (checked?'<p class="meta '+(correct?'good':'bad')+'">'+(correct?'Correct match':'Correct match: '+escape(description))+'</p>':'')+
          '</div></div>';
      }).join('')+'</div>'+
      (checked?'<p class="answer-line" role="status"><strong>'+score+' of '+total+' correct</strong></p>':'')+
      '<div class="actions"><button class="btn" type="submit">Check matches</button>'+
      '<button type="button" data-course-action="reset-matches" class="btn secondary">Erase</button>'+
      action('topic-lessons',subject,index,'Review this subject')+'</div></form></article>';
  }

  function render() {
    const selection=current();
    const {mode,subject,index}=selection;
    const title=labels[mode];
    const text={
      'topic-lessons':'Study the theory and example, then try the quiz for that topic.',
      'topic-quizzes':'Practice 5 questions on core topics or 10 on multi-step topics. Check each answer and read its explanation.',
      'topic-matching':'Practice connecting terms to their meanings, one subject at a time.',
      'topic-plan':'Review your quiz results and choose the next topics to study.'
    };
    const studied=subject.topics.filter((_,i)=>progress.seen[topicKey(subject,i)]).length;
    const completed=subject.topics.filter((_,i)=>{const score=lessonScore(subject,i);return score.count===score.total;}).length;
    return '<header class="heading"><h1>'+title+'</h1><p class="sub">'+text[mode]+'</p></header>'+
      '<nav class="course-tabs" aria-label="Topic study">'+Object.entries(labels).map(([route,label])=>
        '<a href="'+destination(route,subject,index)+'" '+(route===mode?'aria-current="page"':'')+'>'+label+'</a>').join('')+'</nav>'+
      (mode==='topic-plan'?plan():filters(selection)+'<p class="meta course-progress" role="status">'+studied+' of '+subject.topics.length+' topics studied · '+completed+' of '+subject.topics.length+' quizzes completed</p>'+
      (mode==='topic-lessons'?lesson(selection):mode==='topic-quizzes'?quiz(selection):matching(selection)));
  }

  function refresh(focus) {
    main.innerHTML=render();
    main.querySelector(focus)?.focus({preventScroll:true});
  }

  main.addEventListener('change',event=>{
    const field=event.target.dataset.courseField;
    if (!field) return;
    const {mode,subject}=current();
    const target=field==='subject'?curriculum.find(item=>item.id===event.target.value):subject;
    location.hash=destination(mode,target,field==='topic'?Number(event.target.value):0);
  });

  main.addEventListener('click',event=>{
    const trigger=event.target.closest('[data-course-action]');
    if (!trigger) return;
    const {subject,key,questions,answers,questionIndex}=current();
    let focus='[data-course-action="study"]';
    if (trigger.dataset.courseAction==='study') {
      if (progress.seen[key]) delete progress.seen[key];
      else progress.seen[key]=true;
    } else if (trigger.dataset.courseAction==='retake') {
      delete progress.answers[key];
      save();
      const next=destination('topic-quizzes',subject,current().index);
      if (location.hash!==next) {location.hash=next;return;}
      focus='[data-course-form="quiz"] input';
    } else if (trigger.dataset.courseAction==='erase-quiz') {
      const quiz=questions[questionIndex];
      if (Object.hasOwn(answers,quiz.id)) {
        delete answers[quiz.id];
        delete progress.scores[key];
        delete state.attempts[today()]?.['topic-'+key+(quiz.id==='base'?'':'-'+quiz.id)];
      }
      focus='[data-course-form="quiz"] input';
    } else {
      delete progress.matches[subject.id];
      focus='[data-course-form="match"] select';
    }
    save();
    refresh(focus);
  });

  main.addEventListener('submit',event=>{
    const form=event.target.dataset.courseForm;
    if (!form) return;
    event.preventDefault();
    const {subject,index,key,questions,answers,questionIndex}=current();
    const data=new FormData(event.target);
    if (form==='quiz') {
      const choice=data.get('answer');
      const quiz=questions[questionIndex];
      if (choice===null || Object.hasOwn(answers,quiz.id)) return;
      const picked=choicesFor(quiz,index,questionIndex)[Number(choice)];
      if (!picked) return;
      const fixedUrl=destination('topic-quizzes',subject,index,questionIndex);
      // The first-question route needs an explicit index after submitting so feedback remains visible.
      history.replaceState(null,'',questionIndex===0?fixedUrl+'/1':fixedUrl);
      progress.answers[key]={...answers,[quiz.id]:picked};
      (state.attempts[today()]??={})['topic-'+key+(quiz.id==='base'?'':'-'+quiz.id)]=picked===quiz.correct;
      const score=scoreQuiz(questions,progress.answers[key]);
      if (score.count===score.total) progress.scores[key]={...score,day:today()};

    } else {
      const selections=subject.matches.map((_,i)=>data.get('match-'+i));
      if (selections.some(value=>value===null||value==='')) return;
      progress.matches[subject.id]=selections.map(Number);
    }
    save();
    refresh(form==='quiz'?'.course-feedback':'[data-course-form="match"] button[type="submit"]');
  });

  return {render};
}
