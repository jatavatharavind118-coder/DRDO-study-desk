import {examSeries} from './exam-series-data.js';

export function grade(item, answer) {
  if (!answer) return 'Skipped';
  if (item.kind !== 'NAT') return answer === item.key ? 'Correct' : 'Incorrect';
  const value=Number(answer);
  return item.key.split('|').some(range=>{
    const [low,high]=range.split(':').map(Number);
    return value>=low && value<=high;
  }) ? 'Correct' : 'Incorrect';
}

export function setupExamSeries(main,{state,save,escape,section,ext,archiveLink,draw}) {
  state.examSeries ??= {};
  let visible;
  const format = value => String(Math.round(value*100)/100);
  const current = test => state.examSeries[test.id];
  const button = (label,action,id) => `<button type="button" class="btn" data-series-action="${action}" data-test="${id}">${label}</button>`;
  const paperLink = test => ext(archiveLink(test.paper.file),'Open original paper PDF');
  const allTests = Object.values(examSeries).flat();

  function finish(test) {
    const attempt=current(test);
    if (!attempt || attempt.finished) return;
    attempt.finished=true;
    save();
  }

  function tick() {
    const clock=main.querySelector('[data-series-clock]');
    if (!clock) return;
    const test=allTests.find(item=>item.id===clock.dataset.seriesClock);
    const seconds=Math.max(0,Math.ceil((current(test).until-Date.now())/1000));
    clock.textContent=Math.floor(seconds/60)+':'+String(seconds%60).padStart(2,'0');
    if (!seconds) {finish(test);draw();}
  }
  setInterval(tick,1000);

  function answerField(item,index,answer) {
    const name=String(index);
    if (item.kind==='NAT') {
      return `<label class="field">Numerical answer<input name="${name}" data-answer type="number" step="any" value="${escape(answer)}"></label>`;
    }
    if (!item.choices && item.kind==='MCQ') {
      return `<label class="field">Your answer<select name="${name}" data-answer><option value="">Unanswered</option>${[...'ABCD'].map(letter=>
        `<option ${answer===letter?'selected':''}>${letter}</option>`).join('')}</select></label>`;
    }
    return [...'ABCD'].map((letter,i)=>
      `<label class="exam-option"><input data-answer name="${name}" type="${item.kind==='MSQ'?'checkbox':'radio'}" value="${letter}" ${answer?.includes(letter)?'checked':''}> ${letter}${item.choices?' · '+escape(item.choices[i]):''}</label>`
    ).join('')+(item.kind==='MCQ'?'<label class="exam-option"><input data-answer type="radio" name="'+name+'" value=""> Skip</label>':'');
  }

  function review(test,attempt) {
    const results=test.items.map((item,index)=>grade(item,attempt.answers[index]));
    const count=results.filter(result=>result==='Correct').length;
    const marks=test.items.reduce((total,item,index)=>total+
      (results[index]==='Correct'?item.marks:results[index]==='Incorrect'?-(item.penalty||0):0),0);
    const maximum=test.items.reduce((total,item)=>total+item.marks,0);
    const isroPaper=test.id==='isro-2025-a';
    return `<section class="card"><h2 tabindex="-1" data-series-focus>Results</h2>
      <p><strong>${count} of ${test.items.length} correct</strong> · ${isroPaper?'Technical score ':''}${format(marks)} / ${maximum} marks</p>
      ${isroPaper?'<p class="sub">Aptitude score is shown as accuracy: '+results.slice(78).filter(result=>result==='Correct').length+' / 14 correct.</p>':''}
      <p>${results.filter(result=>result==='Skipped').length} skipped</p>
      <div class="actions">${button('Retake test','start',test.id)}${test.paper?ext(archiveLink(test.paper.answer),'Official answer key'):''}</div></section>
      <div class="stack">${test.items.map((item,index)=>`<article class="card">
      <h3>Question ${item.number??index+1} · ${results[index]}</h3>
      ${item.prompt?`<p>${escape(item.prompt)}</p>`:''}
      <p>Your answer: ${escape(attempt.answers[index]||'Skipped')}</p>
      <p>Correct answer: ${escape(item.choices?item.key+' · '+item.choices['ABCD'.indexOf(item.key)]:item.key.replaceAll(':',' to ').replaceAll('|',' or '))}</p>
      ${item.why?`<details><summary>Worked solution</summary>${item.why.split('\n\n').map(part=>`<p>${escape(part)}</p>`).join('')}</details>`:''}
      </article>`).join('')}</div>`;
  }

  function render(exam) {
    const tests=examSeries[exam];
    const test=tests.find(item=>item.id===visible);
    const header=section(exam==='gate'?'GATE EC test series':'ISRO Electronics test series',
      'Take a timed official past paper or practise with shorter original question sets.');
    if (!test) return header+`<div class="stack">${tests.map(item=>{
      const attempt=current(item);
      return `<article class="card"><h2>${item.title}</h2><p class="sub">${item.items.length} scored questions · ${item.minutes} minutes</p>
        <div class="actions">${button(attempt?(attempt.finished||attempt.until<=Date.now()?'View results':'Resume test'):'Start test',attempt?'open':'start',item.id)}</div></article>`;
    }).join('')}</div>`;
    const attempt=current(test);
    if (attempt.until<=Date.now()) finish(test);
    return header+`<div class="actions">${button('Back to test list','list',test.id)}</div>
      <h2 class="section" tabindex="-1" data-series-focus>${test.title}</h2>
      ${attempt.finished?`<div class="stack">${review(test,attempt)}</div>`:`
        <div class="card exam-toolbar">
          <strong>Time left <span data-series-clock="${test.id}"></span></strong>
          ${button('Submit test','finish',test.id)}
          ${test.paper?paperLink(test):''}
        </div>
        <p class="sub">${test.paper?'Open the original PDF alongside this answer sheet. Match responses by question number.':'Each correct answer earns one mark.'}
        ${test.id==='isro-2025-a'?' The final key excludes Q44, Q49 and Q82.':''}</p>
        <form data-series-form="${test.id}" class="${test.paper?'exam-answer-grid':'stack'}">
        ${test.items.map((item,index)=>`<fieldset class="card">
          <legend>Question ${item.number??index+1} · ${item.kind}</legend>
          ${item.prompt?`<p>${escape(item.prompt)}</p>`:''}
          ${item.kind==='MSQ'?'<p class="sub">Select all that apply.</p>':''}
          ${answerField(item,index,attempt.answers[index])}
        </fieldset>`).join('')}</form>`}`;
  }

  main.addEventListener('submit',event=>{
    if (event.target.matches('[data-series-form]')) event.preventDefault();
  });
  main.addEventListener('input',event=>{
    const field=event.target;
    if (!field.matches('[data-answer]')) return;
    const test=allTests.find(item=>item.id===field.form.dataset.seriesForm);
    const attempt=current(test);
    if (attempt.until<=Date.now()) {finish(test);draw();return;}
    const group=field.form.elements.namedItem(field.name);
    attempt.answers[field.name]=field.type==='checkbox'
      ? Array.from(group).filter(input=>input.checked).map(input=>input.value).join('')
      : field.value;
    save();
  });
  main.addEventListener('click',event=>{
    const control=event.target.closest('[data-series-action]');
    if (!control) return;
    const test=allTests.find(item=>item.id===control.dataset.test);
    const action=control.dataset.seriesAction;
    visible=action==='list'?null:test.id;
    if (action==='start') {
      state.examSeries[test.id]={until:Date.now()+test.minutes*60000,answers:{}};
      save();
    }
    if (action==='finish') finish(test);
    draw();
    (main.querySelector('[data-series-focus]')||main).focus();
    window.scrollTo(0,0);
  });
  return {render,tick};
}
