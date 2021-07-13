// logika Game Suwit Jawa
// - menangkap pilihan computer secara random
// - menentukan rules
// - menampilkan hasil


// pilihan computer
function getComp() {
  // kita bangkitkan bilangan random untuk pemilihan computernya
  const comp = Math.random();

  if (comp < 0.34) return 'gajah';
  if (comp >= 0.34 && comp <= 0.67) return 'orang';
  return 'semut';
}

// sekarang kita akan menentukan rulesnya, sekaligus menentukan hasil akhirnya
function getHasil(comp, player) {
  if (player == comp) return 'SERI!';
  if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
  if (player == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH!';
  if (player == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}

// sekarang kita akan menambahkan event untuk pilihan dari player
// ! kita akan menangkap gajah dulu
// * const pGajah = document.querySelector('.gajah');
// * pGajah.addEventListener('click', () => {
// kita ambil pilihan computer
// *   const compSelect = getComp();
// kita ambil pilihan player berdasarkan classnya karna kebetulan nama classnya sama
// *   const playerSelect = pGajah.className;
// lalu kita berikan hasilnya
// *   const hasil = getHasil(compSelect, playerSelect);
// kita ubah gambar untuk computernya
// *   const compImg = document.querySelector('.img-computer');
// *   compImg.setAttribute('src', `img/${compSelect}.png`);
// kita akan meletakan hasilnya ditempat yang sudah kita sediakan
// *   const info = document.querySelector('.info');
// *   info.innerHTML = hasil;
// selesai
// * });

// ! untuk orang
// * const pOrang = document.querySelector('.orang');
// * pOrang.addEventListener('click', () => {
// kita ambil pilihan computer
// *   const compSelect = getComp();
// kita ambil pilihan player berdasarkan classnya karna kebetulan nama classnya sama
// *   const playerSelect = pOrang.className;
// lalu kita berikan hasilnya
// *   const hasil = getHasil(compSelect, playerSelect);
// kita ubah gambar untuk computernya
// *   const compImg = document.querySelector('.img-computer');
// *   compImg.setAttribute('src', `img/${compSelect}.png`);
// kita akan meletakan hasilnya ditempat yang sudah kita sediakan
// *   const info = document.querySelector('.info');
// *   info.innerHTML = hasil;
// selesai
// * });

// ! untuk semut
// * const pSemut = document.querySelector('.semut');
// * pSemut.addEventListener('click', () => {
// kita ambil pilihan computer
// *   const compSelect = getComp();
// kita ambil pilihan player berdasarkan classnya karna kebetulan nama classnya sama
// *   const playerSelect = pSemut.className;
// lalu kita berikan hasilnya
// *   const hasil = getHasil(compSelect, playerSelect);
// kita ubah gambar untuk computernya
// *   const compImg = document.querySelector('.img-computer');
// *   compImg.setAttribute('src', `img/${compSelect}.png`);
// kita akan meletakan hasilnya ditempat yang sudah kita sediakan
// *   const info = document.querySelector('.info');
// *   info.innerHTML = hasil;
// selesai
// * });

// nah sebenarnya ini sudah jadi
// hanya saja cara diatas kurang efisien
// kita akan membuatnya lebih efisien dengan array looping
// pertama kita akan menggunakan querySelectorAll
// * const playerSel = document.querySelectorAll('li img');
// lalu kita akan menggunakan looping untuk playerSel nya karna itu bertype nodeList
// *  playerSel.forEach(e => {
// *  e.addEventListener('click', () => {
// *     const compSelect = getComp();
// *     const playerSelect = e.className;
// *     const hasil = getHasil(compSelect, playerSelect);
// *     const compImg = document.querySelector('.img-computer');
// *     compImg.setAttribute('src', `img/${compSelect}.png`);
// *     const info = document.querySelector('.info');
// *     info.innerHTML = hasil;
// *   });
// * });

// dengan begini kita sudah bisa membuat untuk ketiganya hanya dengan 1 function
// tapi jika begini rasanya masih ada yang kurang, karna terlalu monoton jadi kita akan membuat computernya berputar dulu sebelum memilih jadi kita akan menggunakan setInterval dan setTimeOut

// kita buat functionya untuk putarannya dulu
function putar() {
  // kita buat array untuk menampung gajah, orang, dan semut untuk melakukan looping
  const img = document.querySelector('.img-computer');
  const rand = ['gajah', 'orang', 'semut'];
  let i = 0;
  // mengambil waktu mulai
  const start = new Date().getTime();
  setInterval(() => {
    // untuk memberhentikan intervalnya kita harus mengambil selisih antara waktu mulai dan selisih waktu saat ini, dan jika sudah sampai 1000ms / 1s maka kita jalankan clearInterval untuk menghentikan intervalnya, lalu kita return untuk keluar dari functionnya
    if (new Date().getTime() - start > 1000) {
      clearInterval;
      return;
    }
    img.setAttribute('src', `img/${rand[i++]}.png`);
    // karna kita hanya memiliki 3 gambar, maka saat i = 3 gambar akan rusak karna sudah tidak ada lagi, karna itu kita akan mengubahnya menjadi 0 lagi jika index pada array kita sudah habis
    if (i == rand.length) i = 0;
  }, 100);
}

const playerSel = document.querySelectorAll('li img');
playerSel.forEach(e => {
  e.addEventListener('click', () => {
    const compSelect = getComp();
    const playerSelect = e.className;
    const hasil = getHasil(compSelect, playerSelect);

    // kita akan memasukan functionya kesini
    putar();

    // lalu kita akan menggati gambarnya setelah function putarnya selesai dengan setTimeOut
    setTimeout(() => {
      const compImg = document.querySelector('.img-computer');
      compImg.setAttribute('src', `img/${compSelect}.png`);
      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    }, 1000);

  });
});

// selesai