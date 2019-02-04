//operatorler
// ===, !==, <=, <, >, >=, &&, ||
//tek satir if
//switch

// === -> type kontrolu ile esitlik
// == -> type kontrolu olmadan esitlik sagliyor
// !==
// !=

console.log('2' == 2);
console.log('2' === 2);
console.log(2 === 2);

//&& and - ve
// || or - veya
console.log(2 < 3 && 2 > 3);
console.log(2 < 3 || 2 > 3);

if (2 > 1) {
  console.log('buyuk');
} else {
  console.log('kucuk');
}

2 > 1 ? console.log('buyuk') : console.log('kucuk')

//switch -> her sey if ile yapabilirsiniz.
const day = 'Pazartesi';

switch (day) {
  case 'Pazartesi':
    console.log(1);
    break;
  case 'Sali':
    console.log(2);
    break;
  default:
    console.log(3);
}
