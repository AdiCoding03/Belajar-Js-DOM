// DOM adalah Document Object Model
// DOM berguna untuk membuat halaman website kita lebih menarik dan interactive
// DOM juga berfungsi untuk berinteraksi dengan halaman web kita
// "DOM adalah antarmuka pemograman untuk HTML yang merepresentasikan halaman web, sehingga program dapat mengubah dan memanipulasi strukturnya"
// by Mozilla
// Document adalah dokumen web kita / isi dari web kita / bagian dari windownya
// Object adalah sebuah nilai yang ada didalam javascript yang memiliki property dan value
// Model adalah presentasi terhadap sesuatu
// DOM adalah "Representasi elemen HTML pada dokumen menjadi sebuah object"
// by Sandika Galih
// jadi jika kita membuat sebuah dokumen html maka browser akan merepresentasikan dokumen tadi sebagai object

// contohnya jika kita menuliskan document di console
console.log(document);

// maka akan terlihat tag - tag yang kita buat

// DOM tadi tersimpan sebagai pohon hirarki DOM / DOM tree
// kenapa ?
// karna DOM juga memiliki cabang
// - html
  // - head
    // - title
    // - meta
    // - meta
  // - body
    // - h1
    // - script

// dan tiap - tiap bagian akan kita sebut node / simpul
// contoh
// {/* <p>ini adalah paragraf dengan <a href="tes.html">link</a> di dalamnya</p> */}
// maka pohon domnya adalah
// - p
  // - ini adalah paragraf dengan
  // - a
    // - href
      // - tes.html
    // - link
  // - di dalamnya

// dokumen adalah adalah salah satu object dari window
// window lebih besar lagi, karna window bahkan bisa mengontrol browser itu sendiri

// Kesimpulan DOM

// - Antarmuka pemograman berbasis objek yang merepresentasikan dokumen web
// - DOM membuat seluruh komponen dari halaman web dapat diakses dan dimanipulasi
// - Komponen
  // - Elemen HTML
  // - Atribut
  // - Text
// - DOM dapat dimanipulasi (dibuat, diubah, dihapus) dengan javascript
