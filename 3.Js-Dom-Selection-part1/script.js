// DOM Selection digunakan untuk menyeleksi element - elemnent HTML dan DOM Selection ini merupakan tahap awal dari DOM Manipulation

// DOM Selection Method
  // getELementById() --> element
    // memilih element yang ada didocument kita dengan menyeleksi id nya, ini merupakan cara termudah untuk melakukan DOM Selection karna didalam satu document hanya tidak diperbolehkan menggunakan id yang sama
  // getElementsByTagName() --> HTMLCollection
    // memilih element berdasarkan tag HTML nya, dan method ini berbeda dari ById yang hanya memilih satu karna ByTagName mungkin saja berisi banyak element
  // getElementsByClassName() --> HTMLCollection
    // memilih element yang memiliki kelas tertentu berbede dengan id class boleh dimiliki lebih dari satu element
  // querySelector() --> element
  // querySelectorAll() --> nodeList
    // kedua method ini mencari elemen berdasarkan selector seperti css

// LetsCode
// kita gunakan "tes.html" untuk latihan
// sebelum kita menggunakan DOM Selection kita harus menulis node rootnya

// document.getELementById()
// kita bisa gunakan variable untuk menampung element yang akan kita selection
const judul = document.getElementById('judul');
// nama variable dan id tidak perlu sama
// console.log(judul);
// misal kita manipulasi elemen judul
// kita akan ubah warnanya menjadi merah
judul.style.color = 'red';
// dengan begini kita akan menambahkan inline css
// lalu misal kita ganti backgroundnya
judul.style.backgroundColor = '#ccc';
// note : jangan gunakan minus(-) karna dijaascript itu akan dianggap aritmatika, kita bisa gunkan camelCasing, jika lebih dari satu kata sambungkan dan awali dengan huruf besar
// kita juga bisa mengganti tulisannya
judul.innerHTML = 'Dimas Adi';


// document.getElementsByTagName()
// misal kita mau menyeleksi semua element p
const p = document.getElementsByTagName('p');
// ini akan menghasilkan HTMLCollection yang mirip dengan array
// jika kita ingin mengubah semua backgroundnya dengan lightblue
// kita tidak bisa menulisnya seperti ini
// p.style.backgroundColor = 'lightblue';
// kita bisa menambahkan indexnya seperti array (n/t : zerobase)
// p[2].style.backgroundColor = 'lightblue';
// atau kita bisa menggunakan looping
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightblue';
}

// lalu bagaimana jika kita menggunakan getElementsByTagName padahal untuk memilih satu elemen? Meskipun begitu yang dikembalikan tetap HTMLCollection
// const h1 = document.getElementsByTagName('h1');
// console.log(h1);
// lalu jika kita ingin membuatnya menjadi elemen kita bisa menggunakan cara ini
const h1 = document.getElementsByTagName('h1')[0];
// jadi kita akan mengambil element dengan tag h1 tapi hanya ambil yang memiliki index 0 atau element pertamanya
// console.log(h1);
// lalu misal kita ubah fontsize nya
h1.style.fontSize = '40px';



// document.getElemntsByClassName
// misal kita punya class p1 untuk mengambil paragraf 1
// const p1 = document.getElementsByClassName('p1');
// console.log(p1);
// sama seperti getElementsByTagName ini juga akan mengembalikan HTMLCollection
// jadi jika kita ingin memanipulasinya kita harus memberikan indexnya atau menggunakan cara tadi
const p1 = document.getElementsByClassName('p1')[0];
// console.log(p1);
// lalu misal kita ubah isinya
p1.innerHTML = 'diubah dari javascript';


