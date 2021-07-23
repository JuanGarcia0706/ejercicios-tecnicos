// Dados dos numeros, sacar un numero aleatorio entre ellos.

const random = (n1, n2) => Math.round(Math.random() * (n2 - n1) + n1);

console.log(random(1, 100));
