// Dado un numero, devolver cuantos "bucles" tiene.
// Llamandose bucle al "circulo" que tiene un numero. Ejemplo: 6 tiene un circulo, 8 tiene 2.

const bucles = (num) => {
  const values = { '0': 1, '6': 1, '8': 2, '9': 1 };
  let result = 0;
  for (let n of num.toString()) {
    if (values[n]) result+= values[n];
  }
  return result;
}

console.log(bucles(2880961));
