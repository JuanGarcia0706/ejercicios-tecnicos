// Dado un string, convertirlo a mayusculas o minusculas dependiendo de la cantidad
// de mayusculas y minusculas del mismo

const convert = (str) => {
  let upper = 0;
  for (let l of str) {
    l === l.toUpperCase() && upper++;
  }
  return upper > str.length - upper ? str.toUpperCase() : str.toLowerCase();
}

console.log(convert('VICTor'));
