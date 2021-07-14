// Crear una funcion que devuelva n cantidad de numeros de la serie fibonacci

const fib = (n) => {
  let limits = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    limits.push(limits[i] + limits[i + 1]);
  }
  return limits[limits.length - 1];
}

console.log(fib(10));
