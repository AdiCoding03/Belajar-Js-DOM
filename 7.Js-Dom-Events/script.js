// sebelum kita belajar mengenai events, perlu di ketahui
// ! events tidak sama dengan even
// ! karna events berarti kejadian, sedangkan even adalah genap
// lalu apa itu events?
// definisi event pada javascript merepresentasikan sebuah kejadian yang terjadi didalam DOM
// kejadian itu bisa dilakukan oleh user, seperti ketika kita mengklik mousenya, atau menekan tombol di keyboard, dll
// atau event juga bisa dilakukan secara otomatis oleh API, seperti ketika animasi yang kita buat di css telah selesai, atau ketika halaman selesai di load, dll
// by "https://developer.mozilla.org/en-US/docs/Web/API/Event"

// ada beberapa cara untuk menerapkan event, atau istilahnya mendengarkan, jadi nanti komputer akan mendengarkan apakah ada event yang dilakukan
// dan cara mendengarkannya ada 2 cara
// - Event Handler
//    - Inline HTML Attribute
//    - Element method
// - addEventListener()

// cara membuat eventHandler adalah
// on<event>
// jadi misalkan user menekan tombol pada mouse atau pada keyboard, event yang bisa digunakan adalah

// * onClick()

// misal kita akan mendengarkan sebuah aksi terhadap halaman html kita
// misal kita ingin ketika kita kil paragraf 3nya maka backgroundColor nya akan berubah menjadi lightBlue

// sebenarnya kita bisa buat ini didalam css
// * lihat file 'tes.html' dan lihat tag style
// sebenarnya kita bisa saja membuat paragraf 3 memiliki background lightblue tanpa menggunakan event onClick tadi
// pertama kita tangkap elementnya
// * const p3 = document.querySelector('.p3');
// lalu kita ubah stylenya
// * p3.style.backgroundColor = 'lightblue';
// tapi dengan begini maka backgroundnya akan berubah dari awal, sedangkan kita inginnya saat paragraf 3 nya baru diklik, berarti kita akan menjalakan program tadi saat event nya berhasil dijalankan
// misal kita buat sebuah function untuk backgroundnya
// * function ubahWarnaP3() {
// *   p3.style.backgroundColor = 'lightblue';
// * }
// setelah itu kita akan menambahkan event handler didalam elementnya, karna tadi ada dua cara untuk menggunakan event handler dan yang pertama adalah
// ! buka file 'tes.html'

// sekarang kita gunakan cara kedua dengan menggunakan method
// kita akan mencoba nya dengan paragraf 2
// * const p2 = document.querySelector('.p2');
// * p2.onclick = ubahWarna;
// tapi yang berubah paragraf 3 nya, karna itu kita buat dulu function untuk mengubah warna p2 nya
// * function ubahWarnaP2() {
// *   p2.style.backgroundColor = 'lightgreen';
// * }
// * const p2 = document.querySelector('.p2');
// * p2.onclick = ubahWarnaP2;


// cara selanjutnya yaitu menggunakan method addEventListener()
// misal kita ingin mendengarkan event ketika paragraf 4 diklik maka kita akan menambahkan list baru
// pertama kita ambil paragraf 4nya
// * const p4 = document.querySelector('#b p');
// lalu kita akan menambahkan event nya
// ! elementYangMauDiberikanEvent.addEventListener('eventnya', functionnya);
// kita bisa menggunakan anonymous function untuk membuat functionnya
// atau kita juga bisa membuat functionya lebih dulu baru memasukannya kedalam event
// kita akan menggunakan anonymous function
// * p4.addEventListener('click', () => {
// misal kita tes dengan alert
// * alert('ok');
// jika berhasil kita akan melanjutkannya
// karna kita ingin menambahkan list baru setiap kita mengklik paragraf 4 ini jadi kita perlu menyiapkan beberapa hal
// pertama kita akan mencari parent dari listnya
// * const ul = document.querySelector('#b ul');
// lalu kita buat elemen barunya
// * const liBaru = document.createElement('li');
// lalu kita buat teks untuk linya
// * const teksLiBaru = document.createTextNode('list baru');
// sekarang kita akan meletakan teks nya kedalam li
// * liBaru.appendChild(teksLiBaru);
// teakhir kita akan meletakannya di akhir ul
// * ul.appendChild(liBaru);
// berhasil
// });

// lalu perbedaannya apa?
// - menggunakan eventHandler itu cara lama, meskipun apa yang dilakukan eventHandler pasti bisa dilakukan addEventListener
// - ketika kita meberikan lebih dari satu perubahan pada sebuah event, jika kita menggunakan eventHandler maka perubahan yang terakhir dilakukan akan menimpa perubahan sebelumnya, sedangkan jika kita menggunakan addEventListener, maka dia akan menambah perubahannya
// contoh

// misal kita ingin mengubah background colornya jadi lightblue seperti tadi
// pertama kita ambil paragraf 3
const p3 = document.querySelector('.p3');
// lalu pertama kita akan menggunakan eventHandler lebih dulu
// * p3.onclick = () => {
// * p3.style.backgroundColor = 'lightBlue';
// sudah berhasil
// * }
// tapi jika kita tambahkan event lagi
// * p3.onclick = () => {
// * p3.style.color = 'red';
// berhasil
// * }
// jadi sekarang ada 2 event yang akan dilakukan ketika kita klik paragraf 3, tapi yang dilakukan hanya event kedua saja, karna pada eventHandler ketika kita membuat dua atau lebih perubahan pada satu event, maka dia akan mengambil perubahan yang terakhir dibuat, tidak peduli apapun yang dilakukan sebelumnya

// sekarang kita akan mencoba menggunakan addEventListener
p3.addEventListener('click', () => {
  p3.style.backgroundColor = 'lightBlue';
});
// lalu kita akan membuat perubahan kedua
p3.addEventListener('click', () => {
  p3.style.color = 'red';
});
// ketika kita klik maka keduanya akan dijalankan

// lalu ada event apa saja di dalam DOM?
// - Mouse Event
  // - click
  // - dblclick
  // - mouseover
  // - mouseenter
  // - mouseleave
  // - mouseup
  // - wheel
  // - dll
// - Keyboard Event
  // - keydown
  // - keypress
  // - keyup
  // - dll
// - Resources Event
// - Focus Event
// - View Event
  // - resize
  // - scroll
  // - dll
// - Form Event
  // - reset
  // - submit
  // - dll
// - CSS Animation & Transition Event
// - Drag & Drop Event
// - dll
// https://developer.mozilla.org/en-US/docs/Web/Events
