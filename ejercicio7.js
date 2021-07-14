// Dados dos numeros, devolver cuantos impares hay entre ellos

function impares(start, stop) {
  let n = 0;
  for (let i = start + 1; i < stop; i++) {
    i % 2 !== 0 && n++;
  }
  return n;
}

console.log(impares(94, 100));
