// Dado un array de numeros y un numero, detectar si la lista es una permutacion
// del numero.

const permutacion = (arr, n) => {
  for (let i = 0; i < n; i++) {
    if (arr.indexOf(i + 1) < 0) {
      return false;
    }
  }
  return true;
}

console.log(permutacion([1, 2, 3, 4, 5], 5));
