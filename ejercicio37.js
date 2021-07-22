// Dado un array o un texto, devolver el elemento o palabra que mas aparece

const counter = (el) => {
  const itemsMap = new Map();
  let arr = el;
  if (typeof el === 'string') arr = el.trim().split(' ');
  for (let item of arr) {
    !itemsMap.has(item) ? itemsMap.set(item, 1) : itemsMap.set(item, itemsMap.get(item) + 1);
  }
  return Array.from(itemsMap).sort((a, b) => b[1] - a[1])[0][0];
}

console.log(counter('victor robles victor'));
console.log(counter([1, 2, 3, 4, 1, 4, 4, 4]));
