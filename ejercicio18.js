// Dado un numero, mostrar todos sus numeros divisores

const getDivisores = (n) => {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    n % i === 0 && nums.push(i);
   }
  return nums;
}

console.log(getDivisores(20));
