// Dado un array de numeros, devolver el promedio de todos ellos.

const promedio1 = (arr) => {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum / arr.length;
}

console.log(promedio1([1, 2, 3]));

const promedio2 = (arr) => arr.reduce((prev, current) => prev + current) / arr.length;

console.log(promedio2([1, 2, 3]));
