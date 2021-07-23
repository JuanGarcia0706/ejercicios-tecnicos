// Dado un array de objetos, devolver cuales son las aficiones mas comunes de los usuarios.

const objArr = [
  { user: 1, hobbie: 'Informatica' },
  { user: 2, hobbie: 'Informatica' },
  { user: 3, hobbie: 'Informatica' },
  { user: 4, hobbie: 'Informatica' },
  { user: 5, hobbie: 'Informatica' },
  { user: 6, hobbie: 'Informatica' },
  { user: 7, hobbie: 'Cine' },
  { user: 8, hobbie: 'Cine' },
  { user: 9, hobbie: 'Cine' },
  { user: 10, hobbie: 'Cine' },
  { user: 11, hobbie: 'Cine' },
  { user: 12, hobbie: 'Cine' },
  { user: 13, hobbie: 'Cine' },
  { user: 14, hobbie: 'Futbol' },
  { user: 15, hobbie: 'Futbol' },
  { user: 16, hobbie: 'Videojuegos' },
];

const aficiones = (arr) => {
  const map = new Map();
  for (let item of arr) {
    !map.has(item.hobbie) ? map.set(item.hobbie, 1) : map.set(item.hobbie, map.get(item.hobbie) + 1);
  }
  return Array.from(map).sort((a, b) => b[1] - a[1]).map(el => ({ [el[0]]: el[1] }));
}

console.log(aficiones(objArr));
