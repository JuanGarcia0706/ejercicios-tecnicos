// Dada una cadena de texto, devolver el primer caracter de cada palabra en mayuscula

const capitalize = (str) => {
  const result = str?.split(' ');
  for (let i = 0; i < result?.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
  }
  return result?.join(' ');
}

console.log(capitalize('hola soy juan'));
