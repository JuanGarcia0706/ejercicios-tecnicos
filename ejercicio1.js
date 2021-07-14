// Dado un numero, devolver su tabla de multiplicar completa

function obtenerTabla(n) {
  console.log(`# Tabla del ${n} # \n`);
  for (i = 1; i < 11; i ++) {
    console.log(`${i} x ${n} = ${i*n}`);
  }
}

obtenerTabla(5);
