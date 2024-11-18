const totals = [1, 2, 3, 4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
  const item = totals[index];
  sum += item;
}
console.log(sum);

const rta = totals.reduce((sum, item) => sum + item, 0);
console.log('rta', rta);
