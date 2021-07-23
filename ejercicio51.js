// Dado un array, devolver un nuevo array con los numeros pares e impares separados

const pares = (arr) => {
  const res = [[], []];
  arr.forEach(n => n & 2 !== 0 ? res[1].push(n) : res[0].push(n));
  return { pares: res[0], impares: res[1] };
}

console.log(pares([1, 2, 3, 4]));

