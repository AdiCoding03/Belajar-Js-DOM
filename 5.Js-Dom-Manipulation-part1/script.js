// setelah kita bisa menyeleksi element di dalam html, sekarang kita akan mencoba memanipulasi element - element itu

// DOM Manipulation Method
  // - Manipulasi Element
    // element yang kita ambil akan kita manipulasi seperti mengubah tulisannya menambahkan style dll
  // - Manipulasi Node
    // jika kita ingin menambahkan, menyisipkan, atau menghilangkan sebuah node di document kita itu disebut Manipulasi Node

    
// Method untuk Manipulasi element
  // - element.innerHTML
    // untuk mengubah isi dari sebuah tag yang kita seleksi
  // - element.style.<property>
    // untuk menambahkan / mengubah style dari element yang sudah kita seleksi
  // - element.setAttribute()
    // untuk memanipulasi atribut pada sebuah element
  // - element.classList
    // untuk memanipulasi class secara spesifik, meskipun class termasuk attribute juga tapi class berperan penting didalam html, karna class bisa digunakan lebih dari satu didalam satu document
  // - dll


// element.innerHtml
// misal kita ingin mengubah isi dari element h1 dengan id judul
// const judul = document.getElementById('judul');
// sebenarnya jika kita menggunakan innerHtml maka kita mengganti isi dari element tersebut, karna itu kita bisa mengisinya dengan text ataupun tag html lagi, dll
// judul.innerHTML = 'Dimas Adi';
// kita juga bisa mengisikan sebuah tag, misal kita ingin membuatnya cetak miring kita bisa menambahkan tag <em>
// judul.innerHTML = '<em>Dimas Adi</em>';
// kenapa hasilnya ada bordernya? karna didalam css kita menambahkan border untuk universal atau untuk semua elementnya

// atau jika kita ingin mengambil section a
// const sectA = document.querySelector('section#a');
// karna didalam section a ada beberapa element maka jika kita ubah dengan innerHtml kita akan menghapus semua element - element itu dan menggantinya tidak peduli seberapa banyaknya itu
// sectA.innerHTML = 'Diubah dengan javascript';
// atau kita juga bisa merangkainya lagi
// sectA.innerHTML = '<div><p>paragraf javascript</p></div>';


// element.style.<property>
// misal kita ingin mengubah style untuk id judul
// const judul = document.getElementById('judul');
// judul.style.color = 'lightBlue';
// jika property lebih dari satu kata kita harus menggunakan camelCasing(n/t : huruf pertama dari kata kedua dan seterusnya diawali dengan huruf besar)
// judul.style.backgroundColor = 'salmon';


// element.setAttribute()
// atau kita juga bisa mengelola atribut dengan method lain
// element.getAttribute()
// element.removeAttribute()

// const judul = document.getElementById('judul');
// misal kita ingin menambahkan attribute baru, misal atribut name
// judul.setAttribute('name', 'Dimas');
// jika kita lihat di inspect element maka di id judul akan ada atribut baru yaitu name dengan value Dimas
// kita juga bisa menulisnya langsung di console, tapi saat di refresh atributnya akan langsung menghilang
// misal kita ingin menambahkan atribut baru ke element a
// const a = document.querySelector('a');
// salin tulisan berikut ke console tanpa '//'
// a.setAttribute('id', 'link');

// lalu jika kita ingin tau isi dari atribut kita bisa menggunakan getAttribute()
// misal kita tulis di console sebagai berikut
// a.getAttribute('href');

// lalu misal kita ingin menghapus atribut
// misal kita hapus atribut href dari a di console
// a.removeAttribute('href');


// misal kita ingin menambahkan class dari javascript
// misal kita ingin menambahkan class ke element p dengan class p2
// const p2 = document.querySelector('section#a .p2');
// p2.setAttribute('class', 'label');
// jika kita inspect element maka class label sudah ada, tapi problemnya class p2nya menghilang, sedangkan kita inginnya menambahkan class baru bukan menggantinya, karna jika kita gunakan setAttribute ini akan menimpa atribut sebelumnya, jadi kita butuh method lain yang khusus untuk mengelola class


// element.classList
  // - element.classList.add()
    // untuk menambah class baru
  // - element.classList.remove()
    // untuk menghapus class
  // - element.classList.toggle()
    // jika sebuah element tidak memiliki class tertentu maka akan ditambahkan, tapi jika ada maka akan dihapus
  // - element.classList.item()
    // untuk mengetahui class tertentu yang ada didalam sebuah element, misal didalam sebuah element kita memiliki 3 class, lalu kita ingin melihat class ke 3 nya apa, kita bisa menggunakan method ini
  // - element.classList.contains()
    // untuk mengecek apakah disebuah element memiliki class tertentu
  // - element.classList.replace()
    // untuk menggati class yang ada dengan yang baru

const p2 = document.querySelector('.p2');
// salin tulisan berikut ke console tanpa double slash '//*'
//* p2.classList;
// maka akan muncul class - class yang ada didalamnya
//* p2.classList.add('label');
// maka akan menambahkan class label tanpa menimpanya
//* p2.classList.remove('label');
// jika ada class label maka akan di hapus
//* p2.classList.toggle('label');
// jalankan toggle 2x
// jika p2 tidak memiliki label maka tambahkan, jika ada hilangkan
// contoh lain untuk toggle, misal kita buat css untuk class biru-muda di css lalu kita tambahkan atau hilangkan dengan toggle
//* p2.classList.toggle('biru-muda');
// maka akan menambahkan class biru-muda
// misal kita tambahkan 3 class terlebih dulu
//* p2.classList.add('satu');
//* p2.classList.add('dua');
//* p2.classList.add('tiga');
// lalu kita ingin melihat class ke2 dengan zerobase
//* p2.classList.item('dua');
// lalu jika menggunakan contains
//* p3.classList.contains('dua');
// maka javascript akan bertanya ada atau tidak class 'dua' didalam p2? jika mengembalikan nilai true maka ada, dan jika false maka tidak ada
// lalu jika kita ingin menggantinya
//* p2.classList.replace('tiga', 'lima');
// maka class 'tiga' akan diubah menjadi 'lima'