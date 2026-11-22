import {curriculum} from './topic-curriculum.js';
import {topicChecks} from './topic-checks.js';
import {conceptExamples} from './concept-examples.js';
import {electricalFundamentals} from './electrical-fundamentals.js';
import {topicKey,getQuestions,scoreQuiz,mastery,studyReport} from './topic-progress.js';

const sentenceSegments = new Intl.Segmenter('en', {granularity:'sentence'});
const lessonStarters = {
  "devices": [
    "Every material is made of atoms. Here we look at which energy levels electrons can occupy when many atoms form a solid."
  ],
  "analog": [
    "An analog circuit works with voltages or currents that can vary smoothly. Here we start by turning a voltage that changes polarity into an output that keeps one polarity."
  ],
  "digital": [
    "Digital circuits represent information with symbols such as 0 and 1. Before working with gates, learn how to read numbers written with those symbols."
  ],
  "signals": [
    "A signal is a record of a quantity that changes. Think of a microphone voltage measured continuously, or its recorded values listed one sample at a time.",
    "These five building blocks let you describe what happens at a specific instant and what a signal does before and after it.",
    "Imagine sliding, stretching, or flipping a drawing on graph paper. Changing the time argument moves the features. Multiplying outside the argument changes their height.",
    "A system is a rule that turns an input into an output. Test one property at a time by asking what changes if you add inputs, shift them, or use a bounded input.",
    "An impulse is a mathematical stand-in for a very short input. For a linear time-invariant system, its response lets you construct the output for much more complicated inputs.",
    "One waveform can contain several rates of oscillation. Fourier analysis describes how much of each frequency is present and how its peaks line up.",
    "The Laplace transform rewrites a time waveform in a form that makes decay, growth, and circuit equations easier to analyze.",
    "The Z-transform does for numbered samples what the Laplace transform does for many continuous-time signals. It turns a one-sample delay into simple multiplication.",
    "Sampling is like taking snapshots at regular intervals. If you take them too far apart, a fast change can look like a slower one.",
    "Correlation measures how well two waveforms line up when one is shifted. A spectrum describes how their energy or power is distributed over frequency."
  ],
  "dsp": [
    "Digital signal processing works with a list of samples. We begin by asking what happens to those samples when viewed by frequency instead of by time."
  ],
  "control": [
    "A control system tries to make a physical quantity follow a command. A thermostat is an example: it compares room temperature with a target and responds to the difference."
  ],
  "comm": [
    "Communication sends information from one place to another. A message can travel directly at its original frequencies or be shifted onto a carrier for transmission."
  ],
  "em": [
    "Electric and magnetic fields describe how charges and currents affect the space around them. A changing field can also produce another field."
  ],
  "antennas": [
    "An antenna connects a circuit to waves traveling through space. A radiation pattern shows the directions in which it sends the most or least power."
  ],
  "embedded": [
    "A processor follows instructions stored in memory. Its registers hold values in use, its arithmetic unit operates on those values, and its control unit coordinates the steps."
  ],
  "measure": [
    "Every measurement has limits. Start by separating how close a reading is to the true value from how consistently the instrument repeats it."
  ]
};

const digitalCodeDetails = {
  "BCD": [
    [
      "BCD stands for binary-coded decimal. Decimal is the usual base-ten number system. A bit is one binary digit, either 0 or 1. In standard 8421 BCD, encode each decimal digit separately in four bits with place values 8, 4, 2 and 1.",
      "The four-bit codes 0000 through 1001 represent the digits 0 through 9. Codes 1010 through 1111 are unused because a single decimal digit cannot exceed 9."
    ],
    [
      "Split decimal 29 into the digits 2 and 9.",
      "Write 2 as 0010 because its 2-place is on. Write 9 as 1001 because 8 + 1 = 9.",
      "Join the groups: 0010 1001. Ordinary binary writes 29 as 11101₂ because 16 + 8 + 4 + 1 = 29."
    ]
  ],
  "Gray code": [
    [
      "Gray code labels consecutive counts so that exactly one bit changes at a time. In ordinary binary, going from 3 (011) to 4 (100) changes all three bits. A sensor that reads during a transition could briefly capture a mixed value.",
      "To convert binary to reflected Gray code, copy the leftmost bit. For each remaining Gray bit, compare the two adjacent original binary bits to its left and at its position. Write 1 if they differ and 0 if they match. This comparison is called XOR."
    ],
    [
      "For decimal 3, write 011. Copy 0, compare 0 with 1 to get 1, then compare 1 with 1 to get 0. The Gray code is 010.",
      "For decimal 4, write 100. Copy 1, compare 1 with 0 to get 1, then compare 0 with 0 to get 0. The Gray code is 110.",
      "010 and 110 differ only in the leftmost bit."
    ]
  ],
  "Even parity": [
    [
      "Even parity adds one extra bit to make the total number of 1s even. Count the 1s in the original data. Append 0 if the count is already even and 1 if it is odd."
    ],
    [
      "Data 1011 contains three 1s, an odd count.",
      "Append a parity bit of 1. The transmitted word 10111 contains four 1s, an even count."
    ]
  ],
  "Parity detection": [
    [
      "The receiver counts the 1s in the entire received word, including the parity bit. If even parity was used, an odd count signals an error. Every single-bit flip changes the count by one, so it always changes parity.",
      "Any odd number of flips changes parity. An even number can pass the check. A parity mismatch tells you an error occurred, but it cannot tell you which bit to correct."
    ],
    [
      "Start with the valid even-parity word 10111. Flip the first bit to get 00111. The receiver counts three 1s and flags an error.",
      "Flip the first two bits instead to get 01111. There are four 1s, so the parity check passes even though the data changed."
    ]
  ]
};

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

  function conceptTerms(subject,index) {
    const terms=topicChecks[subject.id][index];
    const examples=conceptExamples[subject.id][index];
    const details=subject.id==='digital'&&index===2?digitalCodeDetails:null;
    return '<section aria-label="Concept map terms"><h3>Concept map explained</h3><ol class="course-theory">'+
      terms.map(([term,meaning],i)=>{
        if(!details) return '<li><p><strong>'+escape(term)+'</strong><br>'+escape(meaning)+
          '<br><strong>Example.</strong> '+escape(examples[i])+'</p></li>';
        const [explanation,steps]=details[term];
        return '<li><h4>'+escape(term)+'</h4><ul>'+
          explanation.map(point=>'<li>'+escape(point)+'</li>').join('')+
          '</ul><p><strong>Worked example</strong></p><ol>'+
          steps.map(step=>'<li>'+escape(step)+'</li>').join('')+'</ol></li>';
      }).join('')+'</ol></section>';
  }

  function theoryPoints(theory) {
    return '<h3>Theory, step by step</h3><ul class="course-theory">'+
      Array.from(sentenceSegments.segment(theory),({segment})=>'<li>'+escape(segment.trim())+'</li>').join('')+'</ul>';
  }

  function visual(subject,index,key) {
    return (illustrated.has(key)?'<figure class="topic-figure"><img src="./topic-images/'+key+'.png" loading="lazy" width="980" height="330" alt="'+
      escape(subject.topics[index].title+' — illustrated explanation')+'"><figcaption>'+escape(subject.topics[index].title)+'</figcaption></figure>':'')+
      '<figure class="topic-map"><figcaption>Concept map <a href="./topic-maps/'+key+'.png" target="_blank" rel="noopener">Open full size</a></figcaption><img class="concept-map-image" src="./topic-maps/'+key+'.png" loading="lazy" width="960" height="540" alt=""></figure>';
  }

  function lesson(selection) {
    const {mode,subject,index,topic,key}=selection;
    const seen=Object.hasOwn(progress.seen,key);
    const visuals=visual(subject,index,key);
    const terms=conceptTerms(subject,index);
    const starter=lessonStarters[subject.id]?.[index];
    const introduction=starter?'<p><strong>Start here.</strong> '+escape(starter)+'</p>':'';
    const content=key==='network-1'
      ? electricalFundamentals()+visuals+terms
      : introduction+visuals+terms+theoryPoints(topic.theory)+
        '<p class="example-line"><strong>Worked example</strong> '+escape(topic.example)+'</p>';
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
