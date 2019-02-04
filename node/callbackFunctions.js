//callback fonksiyonlari

const sum = (a, b, callback) => {
  callback(a + b);
}

sum(2, 3, (result) => {
  console.log('sonuc: ' + result * 2);
});

// 'a,b' => ['a', 'b'] => split

const split = (str, callback) => {
  const result = str.split(',');

  callback(result);
};

split('a,b', (result) => {
  console.log(result)
});
