// Dado un numero, hacer una escalera con escalones [-] usando un numero n

function escalera(n) {
  if (n < 1) {
    return console.log('La escalera debe tener al menos 1 escalon');
  }

  for (let i = 1; i < n + 1; i++) {
    console.log(new Array(i).fill('[-]').join(''));
  }
}

escalera(5);
