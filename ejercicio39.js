// Dado un string, comprobar si es un email valido o no.

const isEmail = (str) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);

console.log(isEmail('hola@mail.com'));
