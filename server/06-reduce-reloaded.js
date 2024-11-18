const items = [1, 3, 2, 3, 10, 10];

const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] += +1;
  }
  return obj;
}, {});
console.log(rta);

const data = [
  {
    name: 'Nicolas',
    level: 'low',
  },
  {
    name: 'Andres',
    level: 'medium',
  },
  {
    name: 'Zulema',
    level: 'high',
  },
  {
    name: 'Santiago',
    level: 'low',
  },
  {
    name: 'Valentina',
    level: 'medium',
  },
  {
    name: 'Luica',
    level: 'high',
  },
];

const rta1 = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += +1;
    }
    return obj;
  }, {});

console.log(rta1);

const numbers = [1, 1, 1, 2, 3, 6, 7, 8, 9, 10, 10, 4, 5, 3, 7, 8, 10, 4];

const reto = numbers.reduce((counter, number) => {
  if (number >= 1 && number <= 5) {
    counter['1-5'] = (counter['1-5'] || 0) + 1;
  } else if (number >= 6 && number <= 8) {
    counter['6-8'] = (counter['6-8'] || 0) + 1;
  } else if (number >= 9 && number <= 10) {
    counter['9-10'] = (counter['9-'] || 0) + 1;
  }
  return counter;
}, {});

console.log('reto', reto);
