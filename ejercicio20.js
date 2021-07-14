// Dados dos strings, crear una funcion que verifique si son anagramas

const pattern = /[\W_]/gi;

const anagrama = (str1, str2) => {
  const letras1 = str1.toLowerCase().trim().replace(pattern, '').split('');
  const letras2 = [];
  for (let l of str2.toLowerCase().trim().replace(pattern, '')) {
    letras1.indexOf(l) > -1 && letras2.push(l);
  }

  return letras1.length === letras2.length;
}

console.log(anagrama('sergio', 'riesgo'));
