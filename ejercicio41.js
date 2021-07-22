// Dado un numero, dibujar un triangulo de asteriscos con ese numero de filas

const triangulo = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i === 1 ? ' '.repeat(n - 1).concat('*') : ' '.repeat(i === n ? 0 : n - i).concat('*'.repeat(i + i - 1)));
  } 
}

triangulo(7);
