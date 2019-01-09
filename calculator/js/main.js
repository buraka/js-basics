const ilkSayi = document.getElementById('ilk-sayi');
const ikinciSayi = document.getElementById('ikinci-sayi');
const btnTopla = document.getElementById('btn-topla');
const btnCikar = document.getElementById('btn-cikar');
const btnCarp = document.getElementById('btn-carp');
const btnBol = document.getElementById('btn-bol');
const sonuc = document.getElementById('sonuc');

btnTopla.addEventListener('click', () => {
  const x = parseFloat(ilkSayi.value) || 0;
  const y = parseFloat(ikinciSayi.value) || 0;
  sonuc.innerHTML = (x + y);
});

btnCarp.addEventListener('click', () => {
  const x = parseFloat(ilkSayi.value) || 0;
  const y = parseFloat(ikinciSayi.value) || 0;
  sonuc.innerHTML = (x * y);
});

btnCikar.addEventListener('click', () => {
  const x = parseFloat(ilkSayi.value) || 0;
  const y = parseFloat(ikinciSayi.value) || 0;
  sonuc.innerHTML = (x - y);
});

btnBol.addEventListener('click', () => {
  const x = parseFloat(ilkSayi.value) || 0;
  const y = parseFloat(ikinciSayi.value) || 0;
  sonuc.innerHTML = (x / y);
});
