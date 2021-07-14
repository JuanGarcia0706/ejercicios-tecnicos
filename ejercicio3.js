// Dada una palabra, buscar cuantas veces aparece en una frase.

const f = 'Hola soy una palabra en una frase, PALABRA. PALABRA.,/@#$%^&*()_+=!';
const p = 'palabra';
const pattern = /[\W_]/gi;

function coincidencia1(f, p) {
  return f.split(' ').filter(l => {
    return l.trim().toLowerCase().replace(pattern, '') === p.trim().toLowerCase();
  }).length;
}

console.log(`Solucion 1: La palabra "${p}" aparece ${coincidencia1(f, p)} veces`);

function coincidencia2(f, p) {
  const words = f.split(' ');
  let n = 0;
  for (let w of words) {
    if (w.trim().toLowerCase().replace(pattern, '') === p.trim().toLowerCase()) n++;
  }
  return n;
}

console.log(`Solucion 2: La palabra "${p}" aparece ${coincidencia2(f, p)} veces`);
