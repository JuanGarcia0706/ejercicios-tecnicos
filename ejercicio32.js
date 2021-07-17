// Dado un array de numeros, devolver un array con todos sus valores numericos al cuadrado.
// Si no son numeros, eliminarlos del array.

const cuadrado = (arr) => arr.filter(i => typeof i === 'number').map(n => n * n);

console.log(cuadrado([ 5, 6, 7, 'hola' ]));
