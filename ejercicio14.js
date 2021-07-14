// Crear una funcion que repita un string tantas veces como el parametro n lo indique

String.prototype.repiteme = function (n) {
  return this.repeat(n);
}

console.log('hola'.repiteme(3));
