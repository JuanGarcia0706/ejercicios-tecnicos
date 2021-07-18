// Hacer una funcion calculadora que devuelva los resultados de 2 valores: suma, resta, multiplicacion y division

const calculadora = (n1, n2) => {
  return `
  La suma es: ${n1 + n2}
  La resta es: ${n1 - n2}
  La multiplicacion es: ${n1 * n2}
  La division es: ${n1 / n2}
  `;
}

console.log(calculadora(5, 5));
