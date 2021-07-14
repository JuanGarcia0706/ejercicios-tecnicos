// Dado un texto, censurar y reemplazar con [-CENSURADO-] todas las coincidencias de un parametro censura

function censurado(texto, busqueda) {
  let err = validateFields(texto, busqueda);
  if (err) {
    return err;
  }

  return texto.replace(new RegExp(busqueda, 'gi'), '[-CENSURADO-]');
}

function validateFields(t, c) {
  if (!t && !c) {
    return 'No se puede leer el texto y la busqueda';
  } else if (!c) {
    return 'No se puede leer el texto';
  } else if (!c) {
    return 'No se puede hacer la busqueda';
  } else {
    return null;
  }
}

console.log(censurado('hola, esto es un string hola2', 'hola'));
