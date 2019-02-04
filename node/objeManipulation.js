let obj = {
  name: 'Ali',
  age: 17,
  isStudent: true
};

console.log({ ...obj, surname: 'Alp' });
console.log(obj);

console.log('--------');
obj = { ...obj, age: 18 };
console.log(obj);

const updateObjects =
      (obj, key, value, callback) => {
  const result = { ...obj, [key]: value };
  callback(result);
};

updateObjects(obj, 'name', 'Burak', (result) => {
  console.log(result);
});

updateObjects(obj, 'age', 22, (result) => {
  console.log(result);
});
