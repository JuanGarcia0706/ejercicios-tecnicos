// Dado un objecto, comprobar si existe una propiedad especifica

const exists = (obj, find) => {
  if (typeof obj !== 'object' || typeof find !== 'string') {
    throw new Error('Debes introducir parametros validos');
  }
  return !!obj[find];
}

console.log(exists({ valor: 1, otra: 'cosa' }, 'valor'));
