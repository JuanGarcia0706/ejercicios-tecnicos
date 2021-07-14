// Dado un numero, mostrar a cuantos años, meses y dias equivale

const eq = (n) => {
  let y = Math.floor(n / 365);
  let m = Math.floor((n % 365) / 30);
  let d = Math.floor((n % 365) % 30);
  return `${n} equivale a ${y} años, ${m} meses y ${d} días`;
}

console.log(eq(910));
