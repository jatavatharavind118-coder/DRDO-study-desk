import {examSeries} from './exam-series-data.js';

export function grade(item, answer) {
  if (item.key==='MTA') return 'Awarded';
  if (!answer) return 'Skipped';
  if (item.kind !== 'NAT') return item.key.split('|').includes(answer) ? 'Correct' : 'Incorrect';
  const value=Number(answer);
  return item.key.split('|').some(range=>{
    const [low,high]=range.split(':').map(Number);
    return value>=low && value<=high;
  }) ? 'Correct' : 'Incorrect';
}

export function setupExamSeries(main,{state,save,escape,section,ext,archiveLink,draw}) {
  state.examSeries ??= {};
  let visible;
  const filters={gate:'all',isro:'all'};
  const format = value => String(Math.round(value*100)/100);
  const current = test => state.examSeries[test.id];
  const button = (label,action,id) => `<button type="button" class="btn" data-series-action="${action}" data-test="${id}">${label}</button>`;
  const sourceLink = file => {
    const [path,anchor]=file.split('#');
    return archiveLink(path)+(anchor?'#'+anchor:'');
  };
  const paperLink = test => ext(sourceLink(test.paper.file),test.paper.external?'Open hosted paper copy':'Open question paper PDF');
  const keyLink = test => test.paper?.answer?ext(sourceLink(test.paper.answer),'Open published answer key'):'';
  const notesField = (answer,readonly=false) =>
    `<label class="field">Your numbered answers<textarea name="notes" data-answer maxlength="16000" rows="12" ${readonly?'readonly':''}
      placeholder="1. B&#10;2. 4.25&#10;3. A, D">${escape(answer)}</textarea></label>`;
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
    if (item.key==='MTA') return '<p class="sub">Marks awarded to all candidates.</p>';
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
    if (test.manual) return `<section class="card"><h2 tabindex="-1" data-series-focus>Review your attempt</h2>
      <p class="sub">Compare your saved answers with the paper and any published key.</p>
      <div class="actions">${paperLink(test)}${keyLink(test)}${button('Retake test','start',test.id)}</div>
      ${notesField(attempt.answers.notes,true)}</section>`;
    const results=test.items.map((item,index)=>grade(item,attempt.answers[index]));
    const count=results.filter(result=>result==='Correct').length;
    const marks=test.items.reduce((total,item,index)=>total+
      (['Correct','Awarded'].includes(results[index])?item.marks:results[index]==='Incorrect'?-(item.penalty||0):0),0);
    const maximum=test.items.reduce((total,item)=>total+item.marks,0);
    const aptitudeResults=results.filter((_,index)=>test.items[index].number>80);
    return `<section class="card"><h2 tabindex="-1" data-series-focus>Results</h2>
      <p><strong>${count} of ${test.items.length} correct</strong> · ${test.technicalScore?'Technical score ':''}${format(marks)} / ${maximum} marks</p>
      ${test.technicalScore?'<p class="sub">Aptitude accuracy: '+aptitudeResults.filter(result=>result==='Correct').length+' / '+aptitudeResults.length+' correct.</p>':''}
      <p>${results.filter(result=>result==='Skipped').length} skipped</p>
      <div class="actions">${button('Retake test','start',test.id)}${keyLink(test)}</div></section>
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
      'Choose a timed past paper or a shorter original practice set.');
    if (!test) {
      const filter=filters[exam];
      const matches=tests.filter(item=>filter==='all'||(filter==='practice'?!item.paper:
        item.paper&&(filter==='manual'?item.manual:!item.manual)));
      const options=[['all','All tests'],['scored','Auto-scored past papers'],['manual','Manual-review past papers'],['practice','Original practice']];
      return header+`<div class="toolbar"><label class="field">Show tests<select data-series-filter="${exam}">
        ${options.map(([value,label])=>`<option value="${value}" ${value===filter?'selected':''}>${label}</option>`).join('')}
        </select></label><span class="meta">${matches.length} tests</span></div>
        <div class="exam-catalog">${matches.map(item=>{
      const attempt=current(item);
      return `<article class="card"><h2>${item.title}</h2><p class="sub">${item.manual?'Manual review':item.items.length+' scored questions'} · ${item.minutes} minutes</p>
        <div class="actions">${button(attempt?(attempt.finished||attempt.until<=Date.now()?'View results':'Resume test'):'Start test',attempt?'open':'start',item.id)}</div></article>`;
    }).join('')}</div>`;
    }
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
        <p class="sub">${test.manual?'Open the paper alongside this test and enter your numbered answers for manual review.':
          test.paper?'Open the paper alongside this answer sheet. Match responses by section and question number.':
          'Each correct answer earns one mark.'} ${test.notice||''}</p>
        <form data-series-form="${test.id}" class="${test.paper&&!test.manual?'exam-answer-grid':'stack'}">
        ${test.manual?notesField(attempt.answers.notes):test.items.map((item,index)=>`<fieldset class="card">
          <legend>Question ${item.number??index+1} · ${item.kind}</legend>
          ${item.prompt?`<p>${escape(item.prompt)}</p>`:''}
          ${item.kind==='MSQ'?'<p class="sub">Select all that apply.</p>':''}
          ${answerField(item,index,attempt.answers[index])}
        </fieldset>`).join('')}</form>`}`;
  }

  main.addEventListener('submit',event=>{
    if (event.target.matches('[data-series-form]')) event.preventDefault();
  });
  main.addEventListener('change',event=>{
    const select=event.target;
    if (!select.matches('[data-series-filter]')) return;
    filters[select.dataset.seriesFilter]=select.value;
    draw();
    main.querySelector('[data-series-filter]').focus();
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
