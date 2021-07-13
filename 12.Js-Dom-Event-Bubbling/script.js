// * const close = document.querySelectorAll('.close');

// * close.forEach(i => {
// *   i.addEventListener('click', (e) => {
// *     e.target.parentElement.style.display = 'none';
// *     e.preventDefault();
// *   });
// * });

// event bubbling itu seperti gelembung air artinya 
// di html kita, kita memiliki tombol close, dan kita sudah menempelkan sebuah event ke tombol ini, lalu secara default saat kita memberikan event ke sebuah element maka event itu akan berlaku untuk element - element pembungkusnya juga
// jadi karna kita memberikan event ke element <a> maka event itu akan berlaku juga untuk element pembungkusnya yaitu card dan berlaku juga untuk element pembungkusnya lagi yaitu container nya
// jadi karna itu disebut event bubbling
// contohnya karna kita sudah memberikan event untuk element <a> lalu kita ingin memberikan event untuk element card

// kita akan membuat sebuah variable untuk mengambil semua element card kita
// * const cards = document.querySelectorAll('.card');

// * cards.forEach(card => {
  // * card.addEventListener('click', (e) => {
    // jadi ketika salah satu element card diklik maka kita akan mencobanya dengan alert 
    // * alert('ok');
    // sekarang jika kita klik dimanapun selama itu masih bagian dari card maka eventnya akan terpanggil
    // lalu bagaimana jika kita klik tombol closenya?
    // yang terjadi adalah ketika kita klik tombol closenya event pada card akan terpanggil lebih dulu, setelah kita klik ok pada alertnya, barulah event dari tombol closenya akan dijalankan
// *   });

// jadi intinya adalah ketika kita memberikan event pada parent dan childnya, lalu kita ingin menjalankan event pada childnya, maka event pada parentnya akan dijalankan lebih dulu, jadi event bubling ini akan terus mengecek keatasnya lagi jadi dia akan mengecek parentnya lagi, parentnya lagi, dst... sampai sudah tidak ada event lagi / sampai gelembungnya pecah

// lalu bagaimana jika kita inginnya saat kita klik tombol close, event pada card tidak dijalankan
// jadi kita harus menambahkan satu method lagi yaitu stopPropagation
// const close = document.querySelectorAll('.close');

// * close.forEach(i => {
// *   i.addEventListener('click', (e) => {
// *     e.target.parentElement.style.display = 'none';
// *     e.preventDefault();
// *     e.stopPropagation();
// *   });
// * });

// * const cards = document.querySelectorAll('.card');

// * cards.forEach(card => {
// *   card.addEventListener('click', (e) => {
// *     alert('ok');
// *   });
// * });

// oke sekarang saat kita klik tombol closenya maka event pada cardnya tidak akan dijalankan lagi kecuali saat kita klik bagian card lainnya
// nah untuk event bubbling ini bisa kita manfaatkan fungsinya untuk membuat kode yang sudah kita buat ini menjadi lebih efektif lagi

// pertama kita akan mengubah element <a> nya lagi dengan element <span>
// ! buka file "index.html"

// kenapa fungsi sebelumnya kurang efektif??
// pertama kita menyeleksi seluruh element yang memiliki class close, itu artinya kita memiliki 4 element karna kita memiliki 4 card, lalu setiap element tadi kita tambahkan event click, jadi setiap tombol close tadi sudah memiliki event click
// coba kita buka halaman web kita di browser lalu inspect element dan kita akan menambahkan card lagi secara realtime dari inspect element tadi, kita bisa mengcopy card terakhir untuk membuat card baru, lalu logikanya karna kita sudah menambahkan event click untuk ke 4 card yang dari awal memang sudah ada jadi saat salah satu dari 4 card itu kita klik tombol closenya maka cardnya akan menghilang, tapi ketika kita klik card yang kita buat secara realtime tadi, card itu tidak menghilang, kenapa??
// itu karna seperti yang kita tau ke4 card yang sudah kita buat dari awal itu sudah memiliki event, sedangkan yang kita buat secara realtime masih belum memiliki event
// jadi itulah kenapa cara ini masih kurang efektif

// seperti yang kita tau, kita memberikan event pada element close yang mana dia akan melakukan bubbling ke element parentnya yaitu card dan card akan melakukan bubbling ke parentnya yaitu container, container ke body, body ke html dan selesai
// lalu bagaimana cara memanfaatkan event bubbling ini??
// kita akan membuat element - element tadi melakukan bubbling secara terbalik, jadi kita akan menaruh eventnya di container supaya event itu tau tombol mana yang kita klik

// pertama kita ambil containernya
const container = document.querySelector('.container');
// lalu kita berikan event pada container
container.addEventListener('click', (e) => {
  // jadi ini artinya ketika kita klik apapun yang ada didalam container maka event akan dijalankan
  // kita coba di console
  // console.log(e.target);
  // tapi dengan begini javascript akan tau bagian mana yang kita klik, jadi kita bisa memanfaatkannya
  // pertama kita cari bagian mana yang kita klik
  if (e.target.className = 'close') {
    // jika yang kita klik adalah element yang memiliki class 'close'
    e.target.parentElement.style.display = 'none';
    // lalu kita akan mengambil parentnya yaitu card nya dan mengubah displaynya menjadi 'none'
  }
});

// dengan begini kita sudah membuat kodenya lebih efektif karna kita hanya memberikan satu event saja
// dan manfaat kedua javascriptnya tidak peduli jika terjadi perubahan secara realtime pada contentnya
// kita akan mencoba membuat card secara realtime seperti tadi
// dan jika kita klik tombol close pada card itu maka cardnya akan menghilang, itu karna yang di cek oleh javascript nya adalah containernya

