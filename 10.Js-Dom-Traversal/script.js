// DOM Traversal / Penelusuran DOM
// jadi DOM Tarversal memungkinkan kita untuk menelusuri DOM Tree kita

// misal kita memiliki DOM Tree seperti ini

// document
// html
// head
// title
// "DOM Tree"
// body
// h1
// "Hello Wolrd"
// p
// "paragraf 1"
// p
// "paragraf 2"
// div
// p
// "paragraf 3"
// a
// href
// "halaman.html"
// "Ke Halaman Selanjutnya"

// jadi jika kita menggunakan DOM Selection pada DOM Tree itu untuk mengambil satu atau lebih dari element atau node yang ada di DOM Tree itu dengan getElementById, getElementsByTagName, dll
// contohnya kita ingin memilih sebuah element dengan DOM Selection
// jika kita ingin memilih <h1> dengan DOM Selection kita bisa memilihnya dengan mudah menggunakan getElementById jika <h1> memiliki id, atau kita bisa memiihnya menggunakan querySelector, atau kita juga bisa menggunakan getElementsByTagName
// atau kita ingin memilih paragraf yang ada di dalam <div> kita bisa gunakan method DOM Selection untuk memilihnya
// lalu bagaimana cara menggunakan DOM Traversal? jadi, jika kita ingin menggunakan DOM Traversal ini kita harus menyeleksi sebuah element dulu dengan DOM Selection, lalu setelah element tertentu itu terseleksi, kita bisa memilih element yang lain berdasarkan element yang kita seleksi tadi,
// misal kita ingin menyeleksi paragraf, kita bisa gunakan getElementById / querySelector, lalu setelah itu kita ingin memilih tag <a> berdasarkan element yang kita seleksi tadi
// jadi dari paragraf kita bisa keatas dan ketemulah element <div> setelah itu kita cari element <a> tadi
// jadi nanti cara penelusurannya ada beberapa
// untuk menggunakan DOM Traversal ini kita harus memahami konsep silsilah keluarga dulu
// jadi kita harus mengetahui tag mana anaknya dari tag mana, atau mana orang tuanya tag mana, atau siapa saudara kandungnya

// ? kenapa kita harus menelusuri DOM itu? Kenapa tidak kita seleksi saja
// misal kita ingin memilih tag <a> nya kenapa tidak kita seleksi saja tag <a> nya?

// contohnya seperti ini
// karna kita sudah memiliki halaman web dengan card didalamnya dan kita akan membuat, ketika kita mengklik huruf X nya, maka cardnya akan hilang

// kita bisa menggunakan css dan kita ubah display cardnya menjadi none untuk menghilangkannya

// oke pertama kita harus mengambil tombol closenya dulu
// * const close = document.querySelector('.close');
// lalu kita akan mengambil cardnya
// * const card = document.querySelector('.card');

// sekarang kita bisa menaruh event untuk tombol closenya
// * close.addEventListener('click', () => {
// ketika tombol close di klik maka display dari cardnya akan berubah menjadi none
// *   card.style.display = 'none';
// * })

// oke berhasil
// lalu kapan kita butuh DOM Traversalnya?
// sekarang kita akan membuat beberapa card lagi
// ! buka file 'index.html'
// jika sudah dibuat kita lihat halamannya
// jika kita klik tombol close kedua dan seterusnya itu tidak berfungsi ya? kenapa?
// karna jika kita menyeleksi menggunakan querySelector yang dikembalikan adalah element dan yang terpilih hanya yang pertama kali
// jadi kita harus menggunakan querySelectorAll untuk menyeleksi semuanya
const close = document.querySelectorAll('.close');
// * const card = document.querySelectorAll('.card');

// lalu karna querySelectorAll mengembalikan nodeList sebagai typenya maka kita bisa menggunakan looping seperti array untuk mengetahui tombol mana yang kita klik
// * for (let i = 0; i < close.length; i++) {
  // * close[i].addEventListener('click', (e) => {
    // * alert(`tombol ke${i}`);
    // oke berhasil
    // sekarang kita coba gunakan cara yang tadi, meskipun cara ini masih salah / kurang efisien
    // * card[i].style.display = 'none';
    // oke sekarang ketika kita klik tombol close yang manapun card yang bersangkutan akan menghilang
    // hanya saja cara ini masih salah, dan tidak menggunakan DOM Traversal
    // lalu bagaimana?
    // pertama kita hanya perlu tombol closenya karna nanti kita akan menelusuri halaman kita dengan DOM Traversal berdasarkan tombol close yang kita klik nanti
    // jadi jika tombol close di klik kita akan menelusuri siapa parentnya, karna disini card adalah parentnya jadi kita akan menelusuri parentnya lalu hapus parent dari tombol close
    // * close[i].parentElement.style.display = 'none';
    // jadi cari parentElement dari tombol close yang sedang kita klik dan buat displaynya menjadi none
    // tapi ini juga akan masih kita lakukan beberapa perbaikan
    // pertama kita bisa menggati close[i]nya dengan menggunakan eventnya
    // jadi kita akan menambahkan parameter di functionya
    // maka e / parameternya akan berisi sebuah object yang berisi banyak hal
    // kita akan melihatnya di vn
    // * console.log(e);
    // nah disana ada sebuah object yang bernama mouseEvent
    // ! ada satu informasi mengenai targetnya
    // jadi taget ini adalah informasi mengenai siapa / element apa yang kita klik tadi
    // karna itu kita bisa menggunakan ini sebagai ganti dari close[i] nya
    // * e.target.parentElement.style.display = 'none';
    // meskipun hanya perubahan kecil tapi ini akan lebih bermanfaat saat kita menggunakannya di latihan - latihan selanjutnya
  // * });
// * }

// atau kita juga bisa menggunakan cara kedua yang lebih praktis lagi
// seperti yang kita tau close itu bertype nodeList, dan nodeList bisa kita perlakukan seperti array, jadi kita bisa menggunakan forEach

close.forEach(e => {
  e.addEventListener('click', (e) => {
    e.target.parentElement.style.display = 'none'
  });
});

// meskipun nanti masih ada cara yang lebih efektif lagi

// sekarang kita akan melihat ada method apa saja yang ada di DOM Traversal ini
// DOM Traversal Method
  // - parentNode
    // mengembalikan node
  // - parentElement
    // mengembalikan element
  // - nextSibling
    // mengembalikan node
  // - nextElementSibling
    // mengembalikan element
  // - previousSibling
    // mengembalikan node
  // - previousElementSibling
    // mengembalikan element

// kita akan mencoba beberapa methodnya

// misal kita akan mengambil nama pada card pertama
const nama = document.querySelector('.nama');
// jika kita console
console.log(nama);
// maka akan muncul element nama pada card pertama
// lalu jika kita gunakan method parentElement
console.log(nama.parentElement);
// maka akan muncul div dari card pertama
// lalu bagaimana jika kita menggunakan parentNode
console.log(nama.parentNode);
// dan hasilnya ternyata sama
// nanti akan kita lihat hasilnya saat kita menggunakan method yang lain
// sekarang misal kita ingin mengambil container dari card nya
// maka container bisa kita anggap sebagai kakeknya si nama, jadi kita bisa naik satu lalu kita naik lagi satu
console.log(nama.parentElement.parentElement);
// maka akan muncul container nya
// jika kita tambahkan parentElement lagi maka akan terseleksi parent dari containernya yaitu body

// lalu misal kita ingin mencari saudara kandung setelahnya
console.log(nama.nextSibling);
// ? tapi hasilnya kenapa jadi text ya?? padahal seharusnya telp kan
// itu karna jika kita menggunakan nextSibling maka yang dihasilkan adalah node bukan element
// jadi apa masalahnya??
// itu karna di dalam html kita, saat kita menulis element nama, setelahnya kita menambahkan enter, jadi enter itulah yang akan terseleksi
// jadi itulah perbedaan antara node dan Element
// jika kita ingin mengambil element maka kita gunakan method nextElementSibling agar nodenya diabaikan
console.log(nama.nextElementSibling);
// dengan begitu yang terseleksi adalah element setelahnya
// begitu pula dengan previousSibling dan previuosElementSibling
console.log(nama.previousSibling);
console.log(nama.previousElementSibling);
// lalu bagaimana jika kita cari element sebelumnya lagi?
console.log(nama.previousElementSibling.previousElementSibling);
// hasilnya adalah null / tidak ada, kenapa? karna sebelum element <img> sudah tidak ada element lagi jadi itu akan mengembalikan null

// oke selesai
