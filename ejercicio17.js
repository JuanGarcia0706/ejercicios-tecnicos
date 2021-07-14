// Dado un numero, mostrar los numeros del 1 al hasta el numero.
// Para los multiplos de tres, imprimir Buzz
// Para los multiplos de cinco, imprimir Fizz
// Para los multiplos de tres y de cinco, imprimir BuzzFizz

function buzz(n) {
  if (n < 1) {
    return console.log(`${n} debe ser mayor que 1`);
  }

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log(`${i}: BuzzFizz`);
    } else if (i % 5 === 0) {
      console.log(`${i}: Fizz`);
    } else if (i % 3 === 0) {
      console.log(`${i}: Buzz`);
    } else {
      console.log(i);
    }
  }
}

buzz(15);
