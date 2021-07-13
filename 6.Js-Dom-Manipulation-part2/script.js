// Setelah mempelajari cara memanipulasi element pada DOM, sekarang kita akan belajar cara memanipulasi Node pada DOM
// Memanipulasi DOM memungkinkan kita untuk menambahkan Node, menghilangkannya, atau bahkan menggatinya

// Method Manipulasi Node pada DOM
// - document.createElement()
// - document.createTextNode()
// - node.appendChild()
// - node.insertBefore()
// - parentNode.removeChild()
// - parentNode.replaceChild()
// - dll


// misal kita ingin menambahkan paragraf baru setelah paragraf 3 dengan javascript
// ada beberapa hal yang harus kita lakukan untuk membuatnya
// pertama kita akan membuat tag <p> nya terlebih dulu
// lalu kita akan membuat tulisan untuk mengisi tag <p> tadi
// lalu kita akan meminta javascript untuk memindahkan tulisan yang sudah kita buat untuk mengisi tag p tadi kedalam tag <p> nya
// lalu kita akan membuat javascriptnya untuk menaruh tap <p> tadi setelah tag paragraf ke3, atau sesuai keinginan kita


// document.createElement()
// kita bisa membuat Element baru dengan method ini, karna kita ingin membuat tag <p>, jadi kita bisa menulisnya seperti ini
const pBaru = document.createElement('p');
// nah kita sudah membuat paragraf baru, meskipun belum muncul di halaman web kita karna kita baru membuatnya belum meletakannya

// document.createTextNode()
const textBaru = document.createTextNode('Paragraf Baru');
// kita sudah membuat tulisan untuk paragraf baru yang kita buat, meskipun belum di ada di dalam tag <p> yang baru kita buat tadi

// lalu sekarang kita akan menyimpan tulisan tadi kedalam tag pBaru dan meletakannya setelah paragraf 3

// node.appendChild()
pBaru.appendChild(textBaru);
// nah dengan begini kita sudah memasukan textnya kedalam pBaru, karna method ini berfungsi untuk membuat child baru didalam sebuah Node
// tapi dengan ini saja kita belum bisa menampilkannya dihalaman web kita, karna kita belum meletakannya ke tempat yang kita inginkan

// sekarang kita akan menyimpan pBaru ke akhir dari sectionA
// pertama kita harus memanggil sectionA
const sectA = document.getElementById('a');

// lalu kita baru bisa menambahkan pBaru tadi
sectA.appendChild(pBaru);
// nah dengan begini paragraf baru sudah muncul di halaman web kita

// tapi itu hanya menggunakan method appendChild() yang berfungsi untuk menambahkan elemen baru / child baru ke bagian akhir dari element parent / node parent dengan sectA sebagai parentnya dan tambahkan pBaru ke bagian akhirnya sebagai childnya



// lalu bagaimana jika kita ingin menambahkannya diawal? misal kita ingin membuat list item baru, tapi kita ingin meletakkannya setelah item 1 dan sebelum item 2?

// sama seperti tadi, kita akan membuat tag <li> lebih dulu
const liBaru = document.createElement('li');

// lalu kita buat tulisannya
const textLiBaru = document.createTextNode('item baru');

// lalu kita masukan tulisannya kedalam tag <li> yang sudah kita buat
liBaru.appendChild(textLiBaru);

// setelah itu kita ambil parent dari item 1 karna kita ingin meletakannya setelah item 1, dan disini <ul> yang ada di sectB
const ul = document.querySelector('#b ul');

// lalu kita harus mencari element setelahnya, karna kita akan menggunakan method insertBefore()
const li2 = ul.querySelector('li:nth-child(2)');

// dengan begini kita sudah memiliki komponen yang kita butuhkan, jadi sekarang kita bisa meletakannya

// node.insertBefore(elementYangMauDisimpan, disimpanSebelumElementApa?);
ul.insertBefore(liBaru, li2);

// sekarang item baru sudah tersimpan ditempat yang kita inginkan
// sampai sini kita sudah menggunakan 4 method

// lalu misal kita ingin meremove link yang kita miliki
// pertama kita harus mencari parentnya, karna parent dari link itu adalah sectA dan kita diatas sudah menangkapnya jadi kita tidak perlu menangkapnya lagi
// sekarang kita hanya perlu mengambil element link itu
const link = sectA.querySelector('a');

// sekarang kita bisa menghapusnya
sectA.removeChild(link);

// dengan begitu kita sudah bisa menghapusnya

// lalu misal kita ingin mengganti paragraf 4 nya dengan h2
// pertama kita harus menangkap parent dari paragraf 4, dan disini parentnya adalah sectB
const sectB = document.getElementById('b');
// setelah itu kita tangkap elemen yang mau kita ganti
const p4 = sectB.querySelector('p');
// lalu kita harus membuat element baru untuk menggantinya , karna kita ingin menggantinya dengan h2, jadi kita harus membuat element h2 terlebih dulu
const h2Baru = document.createElement('h2');
// lalu kita buat teks untuk h2 tadi
const textH2Baru = document.createTextNode('Judul Baru');
// lalu kita letakan textnya kedalam h2
h2Baru.appendChild(textH2Baru);
// setelah itu kita bisa menggantinya
// parentDariNodeYangMauDiganti.replaceChild(nodeBaru, nodeLama);
sectB.replaceChild(h2Baru, p4);
// selesai

// untuk menandakan element - element barunya kita bisa memberikan style
pBaru.style.backgroundColor = 'lightBlue';
liBaru.style.backgroundColor = 'lightBlue';
h2Baru.style.backgroundColor = 'lightBlue';