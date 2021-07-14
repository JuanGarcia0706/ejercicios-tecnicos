// Dada una cadena de texto, devolver el caracter mas usado

const masUsado = (str) => {
  const map = new Map();
  for (let c of str) {
    c.toString().trim() && !map.has(c) ? map.set(c, 1) : map.set(c, map.get(c) + 1);
  }
  return `Lo que mas se repite es: "${Array.from(map.entries()).sort((a, b) => b[1] - a[1])[0][0]}"`;
}

console.log(masUsado('victorrobesweb.es'));
