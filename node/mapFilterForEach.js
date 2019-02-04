//array - diziler
//filter
//map
//forEach

const a = [ 2, 3, 4, 5];

console.log(a.filter(x => x % 2 === 1)); //tekler
console.log(a.filter(x => x % 2 === 0)); //ciftler

console.log(a.map(x => x *= 2));
console.log(a);

a.forEach(x => console.log(x * 2));

const result = a.map(x => {
  if (x % 2 === 0) {
    return x * 5;
  } else {
    return x * 3;
  }
})

console.log(result)
