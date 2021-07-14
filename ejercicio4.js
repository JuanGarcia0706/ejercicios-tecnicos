// Dado una cadena de texto darle la vuelta e invertir el orden de sus caracteres
// sin usar metodos propios del lenguaje, solo estrcuturas de control.

const str = 'Esto es una cadena de texto';

function reverse1(str) {
  let rStr = '';
  for (let l of str) {
    rStr = l + rStr;
  }
  return rStr;
}

console.log(`Solucion 1: ${reverse1(str)}`);

function reverse2(str) {
  let rStr = '';
  for (let i = 0; i < str.length; i++) {
    rStr = str[i] + rStr;
  }
  return rStr;
}

console.log(`Solucion 2: ${reverse2(str)}`);
