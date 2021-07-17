// Crear una funcion que retorne que tipo de angulo es mi numero

const angulo = (n) => {
  if (n === 90) return 'Angulo recto';
  if (n === 180) return 'Angulo llano';
  if (n < 90) return 'Angulo agudo';
  if (n > 90 && n < 180) return 'Angulo obtuso';
  if (n > 180 && n < 360) return 'Angulo concavo';
  return 'Angulo completo';
}

console.log(angulo(1));
console.log(angulo(90));
console.log(angulo(120));
console.log(angulo(180));
console.log(angulo(200));
console.log(angulo(360));
console.log(angulo(400));
