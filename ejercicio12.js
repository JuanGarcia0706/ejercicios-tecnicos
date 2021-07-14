// Dada una funcion retornar una lista de numeros de 8 en 8 desde 0 hasta el valor
// especificado en el parametro, donde cada numero debe empezar por #
// Debe tener el titulo "--- Del n al 0 ---"

function hastaCero(n) {
  let last = n;
  console.log(`--- Del ${n} al 0 ---`);
  while(last > 0) {
    console.log(`-# ${last}`);
    last -= 8;
  }
  last === 0 && console.log(`-# ${last}`);
  console.log('--- FIN ---');
}

hastaCero(100);
