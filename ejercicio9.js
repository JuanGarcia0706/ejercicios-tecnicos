// Dados dos array, devolver un array que contenga los elementos comunes entre ambos

const arr1 = [4, 5, 6, 7];
const arr2 = [7, 8, 9, 7, 5];

const comunes = (arr1, arr2) => arr1.filter(el => arr2.includes(el));

console.log(comunes(arr1, arr2));
