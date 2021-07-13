// * const close = document.querySelectorAll('.close');

// * close.forEach(i => {
  // *   i.addEventListener('click', (e) => {
    // *     e.target.parentElement.style.display = 'none';
    // *   });
    // * });
// * const close = document.querySelectorAll('.close');


// prevent default berfungsi untuk menghentikan aksi default yang dilakukan oleh element web kita nanti

// kita akan menggunakan contoh halaman web dari latihan sebelumnya
// kita memiliki tombol x / close yang dimana jika tombol close diklik maka cardnya / parentnya akan menghilang
// kita membuat close menggunakan element <span>
// lalu kita akan mencoba mengganti closenya dengan element <a>
// ! buka file "index.html"

// setelah kita mengganti tombol close tadi dengan element <a>, saat kita klik tombol closenya kenapa cardnya tidak menghilang ya??
// karna begitu tombol close diklik
// itu karna ada aksi default yang dilakukan oleh element <a> tadi
// aksi defaultnya element <a> nya adalah ketika kita klik tombol closenya, karna element <a> adalah hyperlink jadi dia akan mengarah ke halaman di atribut hrefnya, tapi karna kita mengosongkan atribut href nya, jadi pada saat kita klik halamannya akan kembali ke halaman semula, jadi otomatis dia akan merefresh halamannya, karna saat direfresh cardnya akan muncul kembali
// ? lalu bagaimana jika kita ingin menghentikan aksi default dari element <a> tadi??
// karna terkadang kita ingin membuat aksi sendiri dengan javascript untuk aksi defaultnya

// contohnya
const close = document.querySelectorAll('.close');

close.forEach(i => {
  i.addEventListener('click', (e) => {
    e.target.parentElement.style.display = 'none';
    // ketika kita klik tombolnya maka parentnya akan menghilang, setelah halamannya hilang halamannya akan direfresh, tapi kita tidak ingin halamannya direfresh lagi
    // jadi kita bisa menggunakan method prefentDefault
    e.preventDefault();
    // selesai
  });
});

