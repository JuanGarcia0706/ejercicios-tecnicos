// Dado un string devolver cuantas consonantes y cuantas vocales tiene
// Dado un texto devolver cuantas vocales y cuantas consonantes tiene.

const getLetters = (str) => {
  const clean = str.toString().trim().replace(/[\W]/gi, '');
  const v = [];
  for (let l of clean) {
    (/[aeiou]/gi).test(l) && v.push(l);
  }
  return { vocals: v.length, consonants: clean.length - v.length }
}

console.log(getLetters('victorroblesweb.es'));
