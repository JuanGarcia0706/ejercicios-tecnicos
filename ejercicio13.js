// Hacer una funcion que divida un array en n cantidad de arrays

function divideArray(arr, n) {
  const finalArray = [];
  for (let el of arr) {
    let last = finalArray[finalArray.length - 1];
    last?.length < n ? last.push(el) : finalArray.push([ el ]);
  }
  return finalArray;
}

console.log(divideArray([1, 2, 3, 4, 5, 6, 7], 2));
