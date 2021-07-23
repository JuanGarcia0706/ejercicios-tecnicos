// Dado un array de alumnos con nota, devolver cuantos estan suspendidos y cuantos aprobados

const alumnos = [
  [ 'Victor', 10 ],
  [ 'Juan', 5 ],
  [ 'Pepe', 4 ],
  [ 'Maria', 8 ],
  [ 'Marta', 3 ],
];

const suspensos = (arr) => {
  const a = arr.filter(item => item[1] >= 5);
  return { aprobados: a.length, suspendidos: arr.length - a.length }
};

console.log(suspensos(alumnos));
