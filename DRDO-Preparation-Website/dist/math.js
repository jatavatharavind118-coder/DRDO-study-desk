// Renders the small equation notation used by the study content as native MathML.
const escape = text => text.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const namedOperators = new Set(['cos','tan','ln','log','lim','mod','det']);
const units = new Set(['Hz','kHz','MHz','GHz','mV','mA','mW','dB','dBm','bit','Mbit','nm','eV']);
const words = new Set(['SQNR','SNR','VSWR','Change','mean','new','old']);
const tokenPattern = /\\[{}]|(?:frac|sqrt)(?=\{)|[A-Za-z]+|\d+(?:\.\d+)?|[^\s]/gu;
const isSymbol = /^(?:[A-Za-z]+|\p{L})$/u;

function atom(token) {
  const value = escape(token);
  if (/^\d/.test(token)) return '<mn>'+value+'</mn>';
  if (!isSymbol.test(token)) return '<mo>'+value+'</mo>';
  const upright = namedOperators.has(token) || units.has(token) || words.has(token);
  return '<mi'+(upright?' mathvariant="normal"':'')+'>'+value+'</mi>';
}

function equationRow(equation) {
  const tokens = (equation.match(tokenPattern) || []).flatMap(token =>
    /^[A-Za-z]{2,}$/.test(token) && !['frac','sqrt'].includes(token) &&
      !namedOperators.has(token) && !units.has(token) && !words.has(token) ? [...token] : [token]);
  let cursor = 0;
  function take() {
    const token = tokens[cursor++];
    if (token === undefined || token === '}') throw new Error('Incomplete equation: '+equation);
    if (token === '\\{' || token === '\\}') return atom(token.slice(1));
    if (token === 'frac') return '<mfrac>'+take()+take()+'</mfrac>';
    if (token === 'sqrt') return '<msqrt>'+take()+'</msqrt>';
    if (token !== '{') return atom(token);
    const body = expression();
    if (tokens[cursor++] !== '}') throw new Error('Unclosed group: '+equation);
    return '<mrow>'+body+'</mrow>';
  }
  function expression() {
    let output = '';
    while (cursor < tokens.length && tokens[cursor] !== '}') {
      let base = take();
      let sub = '';
      let sup = '';
      while (tokens[cursor] === '_' || tokens[cursor] === '^') {
        if (tokens[cursor++] === '_') sub = take();
        else sup = take();
      }
      if (sub && sup) base = '<msubsup>'+base+sub+sup+'</msubsup>';
      else if (sub) base = '<msub>'+base+sub+'</msub>';
      else if (sup) base = '<msup>'+base+sup+'</msup>';
      output += base;
    }
    return output;
  }
  const rendered = expression();
  if (cursor !== tokens.length) throw new Error('Unexpected group end: '+equation);
  return '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow>'+rendered+'</mrow></math>';
}

export function equationMarkup(equation) {
  return '<div class="equation">'+equation.split(';').map(equationRow).join('')+'</div>';
}

// Inline MathML shares the exact parser used for displayed equations.
export function inlineEquationMarkup(equation) {
  return equationRow(equation).replace('display="block"','display="inline"');
}
