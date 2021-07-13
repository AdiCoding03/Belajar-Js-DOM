// DOM Tree adalah Representasi dokumen HTML kita jadi misal kita dokumen HTML baru dengan nama "tes.html" lalu jika kita representasikan "tes.html" tadi ke dalam DOM Tree maka akan jadi seperti ini

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

// itu adalah DOM Tree dari "tes.html" dan kita bisa menyebutnya node / simpul, dan simpul yang paling atas / simpul document akan kita sebut simpul root / node root
// tiap - tiap node memiliki beberapa tipe, yaitu

// document
  // html --> elemen
    // head --> elemen
      // title --> elemen
        // "DOM Tree" --> text
    // body --> elemen
      // h1 --> elemen
        // "Hello Wolrd" --> text
      // p --> elemen
        // "paragraf 1" --> text
      // p --> elemen
        // "paragraf 2" --> text
      // div --> elemen
        // p --> elemen
          // "paragraf 3" --> text
      // a --> elemen
        // href --> atribut
          // "halaman.html" --> text
        // "Ke Halaman Selanjutnya" --> text

// dan masih ada banyak lagi type lainnya, yaitu :
// - Elemen
// - Attribute
// - Text
// - CData Section
// - Entity Reference
// - Entity
// - Processing Instruction
// - Comment
// - Document
// - Document Type
// - Document Fragment
// - Notation

// untuk saat ini kita akan mempelajari tiga type, yaitu ELemen, Text, dan Document
// Istilah - istilah yang harus kita pahami
// - Node List : jika kita memilih lebih dari satu node itu artinya kita membuat node list, tidak peduli apapun typenya
// - HTML Collection : kumpulan node yang khusus untuk type Element saja

// Kesimpulannya
// Node List vs HTML Collection
// - Keduanya merupakan node
// - Struktur datanya mirip dengan array meskipun bukan array
// - nodeList dapat berisi apapun, sedangkan HTMLCollection harus berisi element HTMl
// - HTMLCollection bersifat live, sedangkan nodeList tidak

// Struktur Hierarki DOM Tree
// Root Node
  // node yang menjadi sumber dari semua node lain didalam DOM
  // Defaultnya adalah document
// Parent Node
  // node yang berada 1 tingkat diatas node yang lain
  // didalam kasus "tes.html" body adalah parent dari h1, p, p, div, dan a
// GrandParent Node
  // node yang berada 2 tingkat diatas node yang lain
  // didalam kasus "tes.html" body adalah GrandParent dari p didalam div
// Ancestor
  // node yang berada lebih dari 2 tingkat diatas node yang lain
  // didalam kasus "tes.html" element html adalah ancestor dari element p yang ada didalam div didalam tag body
// Child Node
  // node yang berada 1 tingkat dibawah node yang lain tanpa peduli type nodenya apa text, attribute, elemen, dll
  // h1 adalah child dari body
// Children
  // Clid Node yang lebih spesifik karna hanya bertype elemen HTMl
// Siblings
  // Child Node yang memiliki Parent yang sama
// Descendent
  // node yang berada 2 tingkat dan seterusnya dibawah node lain
