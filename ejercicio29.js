// Dado un numero devolver si es un numero capicua o no

const isCapicua = (n) => {
  return parseInt(n.toString().trim().split('').reverse().join('')) === n;
}

console.log(isCapicua(101));
