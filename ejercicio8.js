// Dado un numero entero, invertirlo y devolver otro numero entero

function invertir(n) {
  return parseInt(Math.floor(n).toString().split('').reverse().join('')) * Math.sign(n);
}

console.log(invertir(67));
console.log(invertir(-67));
