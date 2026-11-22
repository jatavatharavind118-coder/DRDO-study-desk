import fs from 'node:fs';
import assert from 'node:assert/strict';
import {generateGatePractice} from './generate-gate-practice.mjs';
const f=n=>Number(n.toFixed(4)).toString();
const solution=(principle,steps,check)=>[`Principle: ${principle}`,...steps.map((s,i)=>`Step ${i+1}: ${s}`),`Check and interpretation: ${check}`].join('\n\n');
const bank=generateGatePractice(7,12).filter(q=>q.topic==='apt').map(q=>({...q,id:'apt-original-'+q.id,bank:'original',category:'Quantitative'}));
function add(id,category,prompt,correct,wrong,principle,steps,check){
 const choices=[...new Set(wrong)].filter(x=>x!==correct).slice(0,3);
 assert.equal(choices.length,3,id);
 const key=bank.length%4;choices.splice(key,0,correct);
 bank.push({id:'apt-original-'+id,topic:'apt',bank:'original',category,level:'GATE-style',prompt,choices,key,
  why:solution(principle,steps,check)+'\n\nAnswer: '+correct+'.'});
}
const verbal=[
 ['Each of the measurements ___ been checked twice.','has',['have','were','are'],'Each is the singular grammatical subject; the plural noun in the of-phrase does not control agreement.'],
 ['Neither the sensor nor the cables ___ damaged.','are',['is','has','was'],'With neither…nor, agreement here follows the nearer plural subject cables.'],
 ['The design is not only inexpensive ___ reliable.','but also',['rather than','and nor','or else'],'The correlative conjunction not only pairs with but also; the two adjectives are parallel.'],
 ['The new process uses ___ components but consumes ___ energy.','fewer; less',['less; fewer','fewer; fewer','less; less'],'Components are countable and take fewer; energy is an uncountable quantity and takes less.'],
 ['The agreement remains between you and ___.','me',['I','myself alone','mine'],'A pronoun serving as the object of a preposition takes objective case, so between takes me.'],
 ['Choose the correctly punctuated sentence.','The instrument has lost its calibration.',['The instrument has lost it’s calibration.','The instrument have lost its calibration.','The instrument has lose its calibration.'],'Its is possessive; it’s expands to it is or it has and cannot modify the noun calibration here.'],
 ['Which sentence is logically equivalent to “The test fails unless the switch is closed”?','If the switch is not closed, the test fails.',['If the switch is closed, the test must fail.','If the test fails, the switch is not closed.','If the test passes, the switch is open.'],'Unless introduces the condition whose absence triggers the stated result; it does not establish a biconditional.'],
 ['Choose the sentence with standard concessive grammar.','Although the model is simple, it predicts the trend.',['Although the model is simple, but it predicts the trend.','Despite the model is simple, it predicts the trend.','In spite the model is simple, it predicts the trend.'],'Although introduces a clause directly and does not need but to introduce the main clause.'],
 ['The team aims to design, ___, and verify the controller.','test',['testing','tested','to testing'],'The three coordinated verbs share the initial to and should all appear in base form.'],
 ['The latest news about the trials ___ encouraging.','is',['are','have','were all'],'News is a singular mass noun despite its final s; a singular present verb is required.'],
 ['To ___ should the package be addressed?','whom',['who','whose','whoever is'],'Whom is the objective form used after the preposition to in formal written English.'],
 ['Had I known the deadline, I ___ the form earlier.','would have submitted',['will submit','would submit tomorrow','am submitting'],'An unreal past condition in the past perfect pairs with would have plus a past participle.'],
 ['No sooner had the trial begun ___ the power failed.','than',['when','then','that'],'The standard correlative construction is no sooner…than; the inversion had the trial begun is already supplied.'],
 ['Hardly had the train stopped ___ the passengers began to leave.','when',['than','then','so'],'Hardly…when is the conventional temporal correlation, unlike no sooner…than.'],
 ['The patient underwent ___ MRI scan before visiting ___ university clinic.','an; a',['a; an','an; an','a; a'],'Article choice follows initial sound: MRI starts with the vowel sound em, while university starts with the consonant sound yoo.'],
 ['The voltage fluctuation may ___ the result; its ___ is not yet known.','affect; effect',['effect; affect','affect; affect','effect; effect'],'Affect is the verb meaning influence; effect is the noun meaning a result or consequence in this context.'],
 ['A speaker may ___ a conclusion, while a listener may ___ it.','imply; infer',['infer; imply','imply; imply','infer; infer'],'Imply concerns suggesting a meaning; infer concerns drawing that meaning from evidence.'],
 ['The new sensor will ___ the existing system; the reviewer offered a ___.','complement; compliment',['compliment; complement','complement; complement','compliment; compliment'],'Complement means complete or enhance; compliment means praise. Their similar spelling does not make them interchangeable.'],
 ['The vehicle remained ___ outside the shop selling ___.','stationary; stationery',['stationery; stationary','stationary; stationary','stationery; stationery'],'Stationary means not moving; stationery names writing supplies.'],
 ['To deliberately disobey a regulation is to ___ it.','flout',['flaunt','foster','flatter'],'Flout means openly disregard; flaunt means display ostentatiously and is not the verb for violating a rule.'],
 ['A meticulous inspector is best described as ___.','careful about small details',['indifferent to accuracy','unwilling to inspect','excessively hurried'],'Meticulous denotes close attention to detail and precision rather than speed or indifference.'],
 ['Which word is closest to the opposite of laconic?','verbose',['concise','terse','brief'],'Laconic means using few words; verbose means using more words than necessary.'],
 ['Which word is closest to the opposite of equivocal?','unambiguous',['uncertain','ambivalent','indefinite'],'Equivocal permits multiple interpretations or avoids a clear commitment; unambiguous excludes that uncertainty.'],
 ['Which action is opposite in meaning to mitigating a risk?','intensifying it',['reducing it','alleviating it','lessening it'],'Mitigate means make less severe, so intensify gives the required contrast.'],
 ['A ubiquitous technology is one that is ___.','found almost everywhere',['restricted to one laboratory','not yet invented','no longer in use'],'Ubiquitous describes widespread presence rather than age, novelty or technical sophistication.'],
 ['A pragmatic solution primarily emphasizes ___.','practical effectiveness',['abstract elegance regardless of use','ceremonial tradition','deliberate uncertainty'],'Pragmatic concerns what works in actual conditions, rather than a purely theoretical or ceremonial preference.'],
 ['An obsolete component is one that is ___.','outdated or no longer used',['newly patented','always unreliable','not yet tested'],'Obsolete describes loss of current use or relevance; it does not by itself prove that every individual component fails.'],
 ['A tenuous link between two findings is a ___ link.','weak',['certain','unbreakable','directly proven'],'Tenuous means slight, weak or insufficiently substantial. It is not a statement of demonstrated causation.'],
 ['A pilot study improved average accuracy from 80% to 84%, but used only ten cases. Which statement is best supported?','The observed sample improved; wider reliability still needs testing.',['Every future case will improve.','The method is certainly worse.','The population improvement is exactly four points.'],'A small observed improvement supports a sample-level statement; it does not establish an exact population effect or universal outcome.'],
 ['All inspected units passed the test. Only one-quarter of production was inspected. What follows necessarily?','Every inspected unit passed.',['Every produced unit passed.','Exactly three-quarters failed.','No uninspected unit can pass.'],'A universal statement about a sampled subset cannot be extended to the uninspected remainder without additional evidence.'],
 ['A city’s bus use rose after fares fell. Which conclusion is justified by these facts alone?','The change is consistent with a fare effect, but causation is not established.',['Lower fares were certainly the sole cause.','All riders previously used cars.','Bus use must fall next month.'],'An observed sequence or correlation does not exclude simultaneous changes or establish a unique causal mechanism.'],
 ['A report says “some faults are intermittent.” Which statement must be true?','At least one fault is intermittent.',['All faults are intermittent.','No intermittent event is a fault.','Most faults are intermittent.'],'Some is an existential quantifier: it guarantees at least one example but does not fix a majority or a universal pattern.'],
 ['Choose the best order: P: Finally, document the result. Q: First, calibrate the sensor. R: Then, collect readings. S: Next, analyze the readings.','Q–R–S–P',['P–Q–R–S','R–Q–P–S','S–R–Q–P'],'The temporal markers establish calibration before collection, collection before analysis, and documentation last.'],
 ['Choose the best order: P: This expansion raises pressure. Q: A sealed gas is heated. R: The higher pressure moves the piston. S: The gas tends to expand.','Q–S–P–R',['S–Q–R–P','P–Q–S–R','R–P–S–Q'],'The event chain begins with heating, followed by expansion tendency, pressure increase and piston motion.'],
 ['Choose the correct passive form of “The team has verified the result.”','The result has been verified by the team.',['The result was verify by the team.','The result has verified by the team.','The result is been verified by the team.'],'A present-perfect passive uses has or have been plus the past participle, preserving the original tense.'],
 ['Choose the standard indirect report of a past statement: Riya said, “I am ready.”','Riya said that she was ready.',['Riya said that I am ready.','Riya says that she were ready.','Riya said that she ready.'],'In a standard backshifted report after past-tense said, am becomes was and I refers to the original speaker as she.'],
 ['Choose the sentence with correct agreement.','The list of selected candidates is on the noticeboard.',['The list of selected candidates are on the noticeboard.','The list of selected candidates have on the noticeboard.','The list of selected candidates were are on the noticeboard.'],'The head of the subject phrase is singular list; candidates belongs to the modifying of-phrase.'],
 ['The trial was postponed ___ heavy rain.','because of',['because','although of','despite of'],'Because of takes a noun phrase; because requires a clause with its own subject and verb.'],
 ['A statement is described as corroborated when it is ___.','supported by additional evidence',['withdrawn without explanation','deliberately contradicted','made impossible to check'],'Corroboration is independent support or confirmation, not merely repetition or denial.'],
 ['An argument assumes that a condition is necessary when it claims ___.','the outcome cannot occur without that condition',['the condition alone always guarantees the outcome','the outcome proves every other condition','the condition is irrelevant to the outcome'],'A necessary condition must hold whenever the outcome occurs; that differs from a sufficient condition that guarantees it.']
];
assert.equal(verbal.length,40);
verbal.forEach(([prompt,correct,wrong,rule],i)=>add('verbal-'+(i+1),'Verbal',prompt,correct,wrong,
 'Match grammatical form, precise meaning or logical scope to the context.',
 ['Identify what the sentence or argument actually asks you to complete or infer.',rule,`Among the options, “${correct}” satisfies that requirement without changing the stated meaning.`],
 'Eliminate alternatives for their specific grammatical or logical defect rather than choosing by similar spelling or plausibility alone.'));
const factorial=n=>{let p=1;for(let i=2;i<=n;i++)p*=i;return p;};
const ordinal=n=>n+([11,12,13].includes(n%100)?'th':({1:'st',2:'nd',3:'rd'}[n%10]||'th'));
function numeric(id,category,prompt,value,wrong,principle,steps,check,unit=''){
 const label=x=>f(x)+(unit?' '+unit:'');
 add(id,category,prompt,label(value),[...wrong,value+1,value/2,value*2].map(label),principle,steps,check);
}
for(let k=1;k<=5;k++){
 const n=20+2*k,left=5+k,right=n-left+1;
 numeric('rank-'+k,'Analytical',`In a row with no ties, a student is ${ordinal(left)} from the left and ${ordinal(right)} from the right. How many students are in the row?`,n,[n+1,n-1,left+right+1],
 'The named person is included in both directional position counts.',[`The left count includes ${left-1} people before the student and the student.`,`The right count includes ${right-1} after the student and the same student.`,`Total is ${left}+${right}−1=${n}.`], 'Subtract one to avoid counting the named student twice.');
 const contexts=[['encrypted','verified'],['approved','signed'],['complete','archived'],['valid','registered'],['successful','recorded']][k-1];
 const [p,q]=contexts;
 add('implication-'+k,'Analytical',`The only rule is: if a report is ${p}, it is ${q}. Which statement follows necessarily?`,
 `If the report is not ${q}, it is not ${p}.`,[`If it is ${q}, it must be ${p}.`,`If it is not ${p}, it cannot be ${q}.`,`Every report is ${p}.`],
 'An implication P⇒Q is logically equivalent to its contrapositive ¬Q⇒¬P.',
 [`Let P mean ${p} and Q mean ${q}.`,`A case with P true and Q false is forbidden by the rule.`,`Therefore Q being false excludes P, exactly as in the contrapositive.`], 'The converse and inverse are not guaranteed by a one-way implication.');
 const classes=[['engineers','graduates','musicians'],['roses','plants','red objects'],['servers','machines','portable objects'],['novels','books','translations'],['squares','rectangles','blue shapes']][k-1];
 const [a,b,c]=classes;
 add('syllogism-'+k,'Analytical',`All ${a} are ${b}. Some ${a} are ${c}. Which conclusion follows necessarily?`,`Some ${b} are ${c}.`,[`All ${b} are ${a}.`,`All ${c} are ${a}.`,`No ${b} are ${c}.`],
 'An explicitly existing member of a subset also belongs to its superset.',[`The word some establishes at least one object in both ${a} and ${c}.`,`Every member of ${a} also belongs to ${b}.`,`The same witness therefore belongs to both ${b} and ${c}.`], 'Universal set inclusions cannot be reversed without additional information.');
 const tasks=k+4,total=factorial(tasks);
 numeric('schedule-'+k,'Analytical',`${tasks} distinct tasks are arranged in a sequence. Task A must precede B, and C must precede D. There are no other restrictions. How many valid sequences exist?`,total/4,[total/2,total/8,total],
 'For two disjoint ordered pairs, each pair removes half of all permutations independently.',[`There are ${tasks}!=${total} unrestricted orders.`,`Swapping A and B pairs an order violating A-before-B with one satisfying it, halving the count.`,`The independent C-before-D condition halves it again, leaving ${total}/4=${total/4}.`], 'No requirement says the paired tasks must be adjacent.');
 const t=k+2;
 numeric('age-ratios-'+k,'Analytical',`${t} years ago, a child's age to the parent's age was 1:4. In ${t} years, it will be 2:5. Find the child's current age in years.`,3*t,[2*t,4*t,6*t],
 'Write both time-shifted ratios in terms of the same present ages.',[`Let present ages be a and p. The past ratio gives p−${t}=4(a−${t}), so p=4a−${3*t}.`,`The future ratio gives 5(a+${t})=2(p+${t}), so 2p=5a+${3*t}.`,`Substitute to obtain 8a−${6*t}=5a+${3*t}, hence a=${3*t}.`], `The resulting parent age is ${9*t}; both original ratios check exactly.`);
 const names=[['Asha','Bina','Chitra'],['Dev','Eshan','Farid'],['Gita','Hema','Indu'],['Jai','Kiran','Lalit'],['Mira','Nila','Ovi']][k-1];
 const [a1,b1,c1]=names;
 add('truth-'+k,'Analytical',`Exactly one of ${a1}, ${b1}, ${c1} caused an error. ${a1} says “${b1} did it.” ${b1} says “${c1} did it.” ${c1} says “${b1} did not do it.” Exactly two statements are true. Who caused the error?`,c1,[a1,b1,'Cannot be determined'],
 'Test each possible culprit against the exact required number of true statements.',[`If ${a1} caused it, only ${c1}'s statement is true.`,`If ${b1} caused it, only ${a1}'s statement is true.`,`If ${c1} caused it, ${b1} and ${c1} are truthful while ${a1} is false, satisfying exactly two truths.`], 'The puzzle fixes the truth count, not a permanent truth-teller status for each person.');
 numeric('set-exactly-one-'+k,'Analytical',`Among ${10*k} students, ${4*k} study A and ${5*k} study B. Exactly ${3*k} study neither. How many study exactly one of A and B?`,5*k,[7*k,2*k,9*k],
 'Exactly-one membership equals the union minus the intersection.',[`The union contains ${10*k}−${3*k}=${7*k}.`,`The intersection is ${4*k}+${5*k}−${7*k}=${2*k}.`,`Exactly one is ${7*k}−${2*k}=${5*k}.`], 'Adding the two subject totals counts the intersection twice, so it cannot be used directly.');
 const shift=k+2,encode=(text,s)=>[...text].map(ch=>String.fromCharCode(65+(ch.charCodeAt(0)-65+s)%26)).join('');
 add('letter-code-'+k,'Analytical',`A code shifts every capital letter by the same number of positions forward, wrapping after Z. CODE becomes ${encode('CODE',shift)}. How is EXAM encoded?`,encode('EXAM',shift),[encode('EXAM',shift-1),encode('EXAM',shift+1),encode('EXAM',shift+2)],
 'A fixed Caesar shift is applied independently to each letter modulo 26.',[`Comparing C with ${encode('C',shift)} reveals a forward shift of ${shift}.`,`Apply the same shift to E, X, A and M, wrapping any index beyond Z back to A.`,`The transformed letters form ${encode('EXAM',shift)}.`], 'The positions of letters in the word remain unchanged; only their alphabet indices move.');

 const side=k+3;
 numeric('cube-one-face-'+k,'Spatial',`A cube is painted on all six exterior faces and cut into ${side}×${side}×${side} equal cubes. How many small cubes have paint on exactly one face?`,6*(side-2)**2,[6*(side-1)**2,12*(side-2),6*side**2],
 'Exactly-one-face cubes lie in the interior of an exterior face, excluding all edges.',[`Each face has an interior grid of (${side}−2)×(${side}−2) small cubes.`,`There are six faces with disjoint face interiors.`,`The count is 6×${side-2}²=${6*(side-2)**2}.`], 'Edge and corner cubes have two or three painted faces and must be excluded.');
 numeric('cube-two-faces-'+k,'Spatial',`All faces of a cube are painted, then it is cut into ${side} equal divisions along each edge. How many small cubes have paint on exactly two faces?`,12*(side-2),[8,6*(side-2)**2,12*side],
 'Exactly-two-face cubes occupy an edge interior rather than a corner.',[`A cube has 12 edges.`,`Each edge contributes ${side}−2=${side-2} small cubes after excluding its two corners.`,`The count is 12×${side-2}=${12*(side-2)}.`], 'Corner cubes have three painted faces and are not counted even though they also touch multiple edges.');
 const cuts=[k,k+1,k+2];
 numeric('orthogonal-cuts-'+k,'Spatial',`A cuboid receives ${cuts[0]} cuts parallel to one face, ${cuts[1]} parallel to a second perpendicular face, and ${cuts[2]} parallel to the third. Every cut spans the whole cuboid and no cuts coincide. How many pieces result?`,(k+1)*(k+2)*(k+3),[k*(k+1)*(k+2),3*k+3,(k+1)*(k+2)*(k+3)-1],
 'Cuts in three mutually perpendicular families form a rectangular grid of independent subdivisions.',[`The first family creates ${k+1} layers.`,`The second divides each layer into ${k+2} strips, and the third divides each strip into ${k+3} pieces.`,`Multiply to obtain (${k+1})(${k+2})(${k+3})=${(k+1)*(k+2)*(k+3)}.`], 'The number of intervals is one greater than the number of cuts in each direction.');
 const x=k+1,y=2*k+1;
 add('rotation-'+k,'Spatial',`Point P=(${x}, ${y}) is rotated 90° clockwise about the origin in a standard Cartesian plane. What are its new coordinates?`,`(${y}, −${x})`,[`(−${y}, ${x})`,`(−${x}, −${y})`,`(${x}, −${y})`],
 'A clockwise quarter-turn maps (x,y) to (y,−x).', [`The x-coordinate of the rotated point is the original y-coordinate, ${y}.`,`The new y-coordinate is the negative of the original x-coordinate, −${x}.`,`Thus P becomes (${y},−${x}), with its distance from the origin unchanged.`], 'A counterclockwise turn would instead give (−y,x); a reflection changes only one coordinate without exchanging them.');
 const rows=k+2,cols=k+3;
 numeric('grid-rectangles-'+k,'Spatial',`A grid contains ${rows} rows and ${cols} columns of unit squares. How many axis-aligned rectangles, including squares, are formed by grid lines?`,rows*(rows+1)*cols*(cols+1)/4,[rows*cols,(rows+1)*(cols+1),rows*(rows+1)*cols*(cols+1)/2],
 'Every axis-aligned rectangle is uniquely specified by two horizontal and two vertical boundary lines.',[`There are ${rows+1} horizontal lines, providing C(${rows+1},2)=${rows*(rows+1)/2} pairs.`,`There are ${cols+1} vertical lines, providing C(${cols+1},2)=${cols*(cols+1)/2} pairs.`,`Multiply the independent choices to obtain ${rows*(rows+1)*cols*(cols+1)/4} rectangles.`], 'Squares count as rectangles. Counting just the unit cells omits rectangles spanning multiple cells.');
 const folds=k+2;
 numeric('folded-holes-'+k,'Spatial',`A sheet is folded exactly in half ${folds} times, doubling the stacked layers each time. One small hole is punched through every layer at a point that unfolds to distinct interior locations and lies on no crease. How many holes appear after unfolding?`,2**folds,[folds,2*folds,2**folds-1],
 'Each complete half-fold doubles the number of sheet layers. An interior punch through all layers creates one distinct hole per layer under the stated conditions.',[`After one fold there are 2 layers.`,`After ${folds} folds there are 2^${folds}=${2**folds} layers.`,`The punch passes through all of them, leaving ${2**folds} distinct holes after unfolding.`], 'Punches on creases or boundaries could merge locations; the question excludes those special cases.');
}
assert.equal(bank.length,200);
assert.equal(new Set(bank.map(q=>q.id)).size,200);
assert.equal(new Set(bank.map(q=>q.prompt)).size,200);
for(const q of bank){assert.equal(new Set(q.choices).size,4,q.id);assert.ok(q.why.includes('Step 3:'),q.id);}
fs.writeFileSync(new URL('../dist/aptitude-original.js',import.meta.url),'// 200 original GATE-style aptitude MCQs; reproducible numerical variants and authored verbal questions.\nexport const aptitudeOriginal = '+JSON.stringify(bank,null,2)+';\n');
console.log('Generated 200 original aptitude questions.');
