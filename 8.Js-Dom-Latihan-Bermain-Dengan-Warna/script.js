// * Kasus Pertama
// pertama kita harus menangkap buttonnya lebih dulu
const button = document.getElementById('button');
// lalu kita tangkap element yang ingin kita ubah, karna kita ingin mengubah background halaman nya maka kita harus menangkap bodynya
// tapi karna khusus untuk body kita tidak perlu mengambilnya, karna body memiliki
// document.body 

// sekarang kita bisa tambahkan eventnya
// button.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'lightBlue';
// });
// dengan begini kita sudah berhasil, tapi sekarang saya mau jika kita klik sekali lagi, maka backgroundnya akan kembali menjadi warna putih
// kita bisa gunakan toogleClass
button.onclick = () => {
  document.body.classList.toggle('ubahWarna');
};
// sekarang saat kita klik lagi, maka v=backgroundnya akan berubah jadi putih lagi

// * Kasus Kedua
// kita ingin membuat hal yang sama tapi kita tidak akan mengubahnya menjadi warna favorit kita, tapi kita akan mengubahnya secara random
// dan kita juga akan membuat buttonnya lewat javascript, tidak dengan HTML

// pertama kita buat buttonnya
const randButton = document.createElement('button');
// lalu kita akan set type buttonnya dengan type button
randButton.setAttribute('type', 'button');
// lalu kita akan membuat teksnya
const teksRandButton = document.createTextNode('Ubah Warna Secara Acak');
// lalu kita masukan teksnya kedalam button
randButton.appendChild(teksRandButton);
// terakhir kita akan meletakannya setelah button ubah warna menggunakan after()
button.after(randButton);

// kita tes dulu buttonnya dengan event
// * randButton.addEventListener('click', () => {
// * alert('ok');
// berhasil
// * });

// nah sekarang kita akan memberikan event yang aslinya
randButton.addEventListener('click', () => {
  // jika kita taruh program pertama tadi kita sudah bisa mengubah warna backgroundnya
  // * document.body.classList.toggle('ubahWarna');
  // tapi, ini akan merubahnya menjadi lightBLue, sedangkan kita maunya mengubahnya secara random setiap kita klik
  // kuncinya adalah
  // ! warna bisa kita isi dengan 3 value, dengan nama warnanya, dengan hexadesimal, dan dengan RGB(Red, Green, Blue);
  // jadi kita akan menggunakan RGB dengan nilai Red, Green, dan Blue nya secara acak
  // caranya kita bisa menggunakan function bawaan javascript, yaitu Math.random() untuk mencari nilai random dari 0 sampai 1
  // kita akan mencoba nya di console
  // * const tes = Math.random();
  // * console.log(tes);
  // maka akan muncul bilangan random dari 0 sampai 1
  // tapi kita inginnya memunculkan bilangan random dari 0 sampai 255, karna RGB itu sampai 255
  // kita bisa mengkalikannya dengan 255 dan menambahnya dengan 1
  // * const tes = Math.random() * 255 + 1;
  // * console.log(tes);
  // maka akan muncul bilangan random antara 0 sampai 255
  // sekarang kita bisa menghilangkan angka dibelakang koma(,), karna RGB menggunakan bilangan bulat bukan bilangan desimal dengan fungsi pembulatan
  // ada tiga fungsi pembulatan
  // *  - round
  // *    yang paling mendekati
  // *  - floor
  // *    pembulatan kebawah
  // *  - ceil
  // *    pembulatan keatas

  // kita akan menggunakan round
  // * const tes = Math.round(Math.random() * 255 + 1);
  // * console.log(tes);
  // nah, sekarang kita sudah selesai menyiapkannya
  // sekarang kita akan memasukan angka - angkanya

  // kita buat nilai random untuk warna merah
  const red = Math.round(Math.random() * 255 + 1);
  // kita buat nilai random untuk warna hijau
  const green = Math.round(Math.random() * 255 + 1);
  // kita buat nilai random untuk warna blue
  const blue = Math.round(Math.random() * 255 + 1);

  // kita akan menggunakan concet / concatenasi
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  // selesai

});


// * kasus ke3
// misal kita ingin membuat slide untuk RGB nya jadi setiap kita menggeser slidenya kekanan maka angkanya akan semakin besar sampai maxnya 255, karna RGB hanya sampai 255
// kita akan menjalankan eventnya setiap slidenya digeser / digerakan menggunakan event 'input'
// pertama kita akan mengambil slidenya
const slideRed = document.querySelector('input[name=slideRed]');
// kita ambil juga slide yang lainnya
const slideGreen = document.querySelector('input[name=slideGreen]');
const slideBlue = document.querySelector('input[name=slideBlue]');

slideRed.addEventListener('input', () => {
  // kita akan mencobanya dengan alert dulu
  // * alert('ok');
  // jika berhasil kita akan mengambil valuenya, kita munculkan di console dulu
  // * console.log(slideRed.value);
  // jika berhasil sekarang kita akan menggunakannya untuk mengubah warna RGBnya
  // pertama kita masukan valuenya kedalam sebuah variable
  const r = slideRed.value;
  // kita lakukan juga untuk yang lainnya
  const g = slideGreen.value;
  const b = slideBlue.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
// kita buat juga untuk dua lainnya
slideGreen.addEventListener('input', () => {
  // kita akan mencobanya dengan alert dulu
  // * alert('ok');
  // jika berhasil kita akan mengambil valuenya, kita munculkan di console dulu
  // * console.log(slideGreen.value);
  // jika berhasil sekarang kita akan menggunakannya untuk mengubah warna RGBnya
  // pertama kita masukan valuenya kedalam sebuah variable
  const r = slideRed.value;
  // kita lakukan juga untuk yang lainnya
  const g = slideGreen.value;
  const b = slideBlue.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
slideBlue.addEventListener('input', () => {
  // kita akan mencobanya dengan alert dulu
  // * alert('ok');
  // jika berhasil kita akan mengambil valuenya, kita munculkan di console dulu
  // * console.log(slideBlue.value);
  // jika berhasil sekarang kita akan menggunakannya untuk mengubah warna RGBnya
  // pertama kita masukan valuenya kedalam sebuah variable
  const r = slideRed.value;
  // kita lakukan juga untuk yang lainnya
  const g = slideGreen.value;
  const b = slideBlue.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// selesai


// * Sekarang kita akan membuat setiap mouse kita gerakan selama itu masih berada di dalam halaman maka backgroundnya akan berubah - ubah
// logikanya seperti ini
// ! kita akan bekerja dengan posisi dari mouse, jadi kita akan mencari tau koordinat dari mousenya, dan nanti koordinat itu akan relative terhadap lebar dan tinggi dari halaman web kita
// pertama kita akan menangkap bodynya, kenapa? karna didalam body nanti kita bisa mencari koordinat mousenya, dengan event mousemove
document.body.addEventListener('mousemove', (e) => {
  // jadi ketika mouse bergerak didalam body kita akan menjalankan functionnya
  // sekarang kita bisa mencari posisi dari mousenya
  // ada 2 yang harus kita cari yaitu, sumbu X dan sumbu Y dari mousenya
  // pertama kita akan mencari sumbu X dari mousenya menggunakan method yang bernama clientX untuk mencari sumbu X nya, tapi clientX ini harus menempel pada sebuah object dan objectnya harus dikirim ke dalam function, jadi kita akan menambahkan parameter untuk functionnya, kita gunakan e(event) sebagai parameternya
  // akan kita coba tulis didalam consolenya
  // * console.log(e.clientX);
  // jika kita menggerakan mousenya kekanan nilainya akan bertambah
  // sekarang kita cari nilai sumbu Y nya dengan clientY
  // kita akan mencobanya di console dulu
  // * console.log(e.clientY);
  // sekarang saat kita menggerakan mouse kebawah nilainya akan semakin besar
  // kita juga harus mencari ukuran browsernya
  // karna browser merukapakan object window dan bukan document, karna object dokumen hanya mencakup apa yang kita punya didalam halaman web kita, sedangkan window mencakup semua yang ada didalam browser kita seperti tombol close, tombol minimize, address bar, dll
  // kita akan menggunakan method innerWidth untuk mengetahui lebar dari document kita
  // kita akan mencobanya di console
  // * console.log(window.innerWidth);
  // kita mendapatkan 599 sebagai lebarnya (n/t : mungkin lebarnya nanti akan berbeda - beda)
  // jadi sekarang kita punya lebar dan punya posisi X
  // sekarang jika kita ingin mendapatkan angka diantara 0 sampai 255 kita harus membuat variable untuk menampungnya, dan kita isi dengan posisi cursor yang dibagi dengan lebar browsernya dan dikali dengan 255
  // * const xPosition = (e.clientX / window.innerWidth) * 255;
  // sekarang kita akan memunculkannya di console
  // * console.log(xPosition);
  // nah kita sudah mendapatkan angkanya
  // kita akan membuatnya menjadi bilangan bulat dengan method Math.round()
  const xPosition = Math.round((e.clientX / window.innerWidth) * 255);
  // kita coba di console
  // * console.log(xPosition);
  // nah kita sudah mendapatkannya, kita akan menggunakan ini untuk warna merahnya, lalu sumbu Y akan mengganti warna Hijau, sedangkan warna birunya akan kita tetapkan
  // sekarang kita cari sumbu Y nya
  const yPosition = Math.round((e.clientY / window.innerHeight) * 255);
  // kita muncul kan di console
  // * console.log(yPosition);
  // selesai
  // sekarang kita hanya perlu menggunakannya untuk mengubah warna RGB dari body
  document.body.style.backgroundColor = `rgb(${xPosition}, ${yPosition}, 255)`;
  // tapi ini masih ada bugnya, karna jika kita menggerakan mousenya terlalu kebawah warnanya tidak berubah, kenapa?
  // karna kita menaruh eventListener nya di body, jadi scopenya hanya body, dan seharusnya body itu mencakup seluruh halaman web kita, tapi karna content kita belum memenuhi satu halaman karna itu terjadi bug, karna yang dibawah slider biru tidak dianggap body
  // jadi kita bisa mengakalinya, dengan mengubah bodynya menjadi penuh dengan CSS
  // ! buka file html kita
});


