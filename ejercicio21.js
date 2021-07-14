// Crear una funcion que reciba dos parametros, un string y un numero
// Recortar el string y devolver los n primeros caracteres

const cut = (str, n) => {
  if (typeof str !== 'string') {
    return 'Debes incluir una string valido';
  }

  if (typeof n !== 'number') {
    return 'Debes incluir un numero valido';
  }

  return str.substring(0, n);
};

console.log(cut('Cursos desarrollo web', 6));
