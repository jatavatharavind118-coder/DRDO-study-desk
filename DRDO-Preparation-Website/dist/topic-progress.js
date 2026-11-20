import {curriculum} from './topic-curriculum.js';
import {advancedChecks,topicChecks} from './topic-checks.js';

export const topicKey = (subject,index) => subject.id+'-'+(index+1);

export function getQuestions(subject,index) {
  const key=topicKey(subject,index);
  const concepts=topicChecks[subject.id][index];
  const recall=concepts.map(([term,description],i)=>({
    id:'recall-'+(i+1),question:'Which term matches this description? '+description,
    correct:term,distractors:concepts.filter(([other])=>other!==term).map(([other])=>other),
    reason:term+' — '+description.charAt(0).toLowerCase()+description.slice(1)+'.'
  }));
  return [{id:'base',...subject.topics[index].quiz},...recall,
    ...(advancedChecks[key]||[]).map((quiz,i)=>({id:'apply-'+(i+1),...quiz}))];
}

export function scoreQuiz(questions,answers) {
  const count=questions.filter(question=>Object.hasOwn(answers,question.id)).length;
  const correct=questions.filter(question=>answers[question.id]===question.correct).length;
  return {count,correct,total:questions.length};
}
export function mastery(score) {
  if (!score || score.count<score.total) return 'Unassessed';
  const percent=100*score.correct/score.total;
  return percent>=80?'Strong':percent<60?'Weak':'Developing';
}

const allTopics=curriculum.flatMap(subject=>subject.topics.map((topic,index)=>({
  subject,topic,index,key:topicKey(subject,index)
})));
const percent=item=>100*item.score.correct/item.score.total;

export function studyReport(progress) {
  const topics=allTopics.map(item=>{
    const questions=getQuestions(item.subject,item.index);
    const attempt=scoreQuiz(questions,progress.answers[item.key]||{});
    const score=progress.scores[item.key] || (attempt.count===attempt.total?attempt:null);
    return {...item,attempt,score,level:mastery(score)};
  });
  const weak=topics.filter(item=>item.level==='Weak').sort((a,b)=>percent(a)-percent(b));
  const developing=topics.filter(item=>item.level==='Developing').sort((a,b)=>percent(a)-percent(b));
  const strong=topics.filter(item=>item.level==='Strong').sort((a,b)=>percent(b)-percent(a));
  const unfinished=topics.filter(item=>!item.score&&item.attempt.count);
  const untested=topics.filter(item=>!item.score&&!item.attempt.count);
  const recommend=[...weak,...developing,...unfinished,...untested].slice(0,3);
  if (!recommend.length) recommend.push(...strong.slice().reverse().slice(0,3));
  return {weak,developing,strong,untested:untested.length,unfinished:unfinished.length,recommend};
}
