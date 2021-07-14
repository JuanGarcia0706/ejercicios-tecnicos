// Dada una cadena de texto, comprobar si es palindromo o no.

const p = 'otto';

function palindromo(str) {
  const str1 = str.toString().trim().toLowerCase();
  const str2 = str.toString().trim().toLowerCase().split('').reverse().join('');
  return str1 === str2;
}

console.log(`Forma 1: ${p} es palindromo?: ${palindromo(p)}`);

function palindromo2(str) {
  let fStr = '';
  for (let l of str) {
    fStr = l + fStr;
  }
  return str === fStr;
}

console.log(`Forma 2: ${p} es palindromo?: ${palindromo2(p)}`);

function palindromo3(str) {
  let fStr = '';
  for (let i = 0; i < str.length; i++) {
    fStr = str[i] + fStr;
  }
  return fStr === str;
}

console.log(`Forma 3: ${p} es palindromo?: ${palindromo3(p)}`);
