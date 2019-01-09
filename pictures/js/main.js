const findikLink = document.getElementById('findik-link');
const fistikLink = document.getElementById('fistik-link');
const cekirdekLink = document.getElementById('cekirdek-link');
const fotoFindik = document.getElementById('foto-findik');
const fotoFistik = document.getElementById('foto-fistik');
const fotoCekirdek = document.getElementById('foto-cekirdek');

const fotoClick = (event) => {
  const imgList = document.querySelectorAll('img');
  imgList.forEach((img) => {
    img.className = 'hide';
  });

  const fotoId = event.target.attributes['data-img'].value;
  const foto = document.getElementById(fotoId);
  if (foto.className === 'hide') {
    foto.className = '';
  } else {
    foto.className = 'hide';
  }
}

findikLink.addEventListener('mouseenter', fotoClick);
fistikLink.addEventListener('mouseenter', fotoClick);
cekirdekLink.addEventListener('mouseenter', fotoClick);
