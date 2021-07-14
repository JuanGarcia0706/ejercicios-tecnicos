// Dado una cadena de texto devolver cuantas vocales tiene

function getVocales1(str) {
  let count = 0;
  for (let letter of str) {
    new RegExp(/[aeiou]/gi).exec(letter) && count ++;
  }
  return count;
}

console.log(getVocales1('victorroblesweb.es'));

const getVocales2 = (str) => {
  const res = str.match(/[aeiou]/gi);
  return res ? res.length : 0;
};

console.log(getVocales2('victorroblesweb.es'));
