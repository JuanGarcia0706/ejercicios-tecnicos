// Dados dos numeros indicar cual es mayor y cual es menor

const comparar = (n1, n2) => [n1, n2].sort((a, b) => b - a)[0];

console.log(`El numero mayor es: ${comparar(10, 2)}`);
