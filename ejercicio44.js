// Dado un array de strings, devolver un array con los valores que esten formados por mas de dos palabras

const twoWords = (arr) => arr.filter(item => item.split(' ').length >= 2);

console.log(twoWords(['hola', 'san francisco', 'ciudad real', 'juan', 'lala']));
