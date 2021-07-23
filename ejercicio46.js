// Dado un string, devolver un array con todos los posibles substrings

const substring = (str) => {
  let substrings = [];
  for (l in str) {
    let start = parseInt(l);
    for (let i = 0; i <= str.length - start; i++) {
      substrings.push(str.substring(start, parseInt(i) + parseInt(start)));
    }
  }
  return substrings.filter(el => el.length >= 1);
}

console.log(substring('hola'));
