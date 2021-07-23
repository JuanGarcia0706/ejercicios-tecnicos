// Dado un string, devolver cuales son las letras que aparecen solo una vez y cual es la primera

const oneTime = (str) => {
  const map = new Map();
  for (let l of str) {
    !map.has(l) ? map.set(l, 1) : map.set(l, map.get(l) + 1);
  }
  const result = Array.from(map).filter(el => el[1] === 1).map(el => el[0]);
  return [result, result[0]];
}

console.log(oneTime('frase frase HOY'));
