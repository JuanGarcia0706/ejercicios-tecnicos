// Dado un array de numeros, devolver un array sin elementos duplicados

const eliminarDuplicados = (arr) => [...new Set(arr)];

console.log(eliminarDuplicados([1, 2, 3, 4, 4, 3, 2]));
