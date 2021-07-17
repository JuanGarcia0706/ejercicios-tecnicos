// Dado un numero devolver su factorial

const factorial = (n) => {
  let last = 1;
  for (let i = 1; i <= n; i++) {
    last *= i;
  }
  return last;
}

console.log(factorial(5));
