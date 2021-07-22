// Dado un numero devolver array de los cuadrados de todos los numeros hasta llegar al mismo

const getCuadrados = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i * i);
  }
  return result;
}

console.log(getCuadrados(4));
