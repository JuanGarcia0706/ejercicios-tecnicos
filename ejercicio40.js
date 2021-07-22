// Dado un array de numeros, devolver el valor mas bajo y el mas alto

const getValues = (arr) => {
  const sorted = arr.sort((a, b) => b - a);
  return [ sorted[sorted.length - 1], sorted[0] ];
}

console.log(getValues([1, 2, 3, 5, 3, 10]));
