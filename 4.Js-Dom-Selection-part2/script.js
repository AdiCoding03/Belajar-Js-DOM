// // document.querySelector()
// // lalu bagaimana jika kita ingin membuat hal yang sama di javascript dengan querySelector
// const p4 = document.querySelector('#b p');
// // console.log(p4);
// // maka akan terpilih element p yang ada didalam element dengan id b
// // lalu misa kita berikan style
// p4.style.color = 'green';
// p4.style.fontSize = '20px';

// // lalu misal kita ingin memilih element kedua li dengan spesifik selector
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// // console.log(li2);
// // lalu kita warnai backgroundnya
// li2.style.backgroundColor = 'orange';

// // dengan menggunakan querySelector karna mengembalikan satu element, tapi kita misalnya ingin menyeleksi semua paragraf
// // const p = document.querySelector('p');
// // console.log(p);
// // maka yang terseleksi hanyalah paragraf yang pertama kali dia temukan saja berlaku juga untuk element - element lain
// // lalu misal kita coba ubah tulisannya
// // p.innerHTML = 'ini diubah dengan javascript';
// // lalu bagaimana jika kita ingin memilih semuanya?
// // kita bisa menggunakan querySelectorAll


// // document.querySelectorAll()
// // dengan menggunakan ini maka dia akan menyeleksi semua element yang sama
// const p = document.querySelectorAll('p');
// // console.log(p);
// // dengan begini kita punya 4 element dengan type nodeList
// // karna nodeList mirip dengan array jadi jika kita ingin memberikan style untuk salah satunya kita harus menggunakan index(n/t : zero base)
// // p[1].style.color = 'lightblue';
// // jika kita ingin memberikan style yang sama untuk semuanya kita harus menggunakan looping
// for (let i = 0; i < p.length; i++) {
//   p[i].style.color = 'lightblue';
// }



// dan itulah kelima method untuk DOM Selection
// lalu kita harus menggunakan yang mana?
// kita bisa memilihnya berdasarkan kasus yang kita hadapi nanti, misal jika didalam HTML kita kita, element yang ingin kita target memiliki id kita bisa gunakan getElementById, atau jika dia sudah punya class kita bisa gunakangetELementsByClassName, tapi ketika kita diharuskan tidak boleh merubah struktur html kita termasuk memberikan id dan class maka kita bisa menggunakan querySelector atau querySelectorAll

// kita juga bisa mengubah node root
// misal kita ingin mentarget paragraf 4, karna paragraf 4 tidak memiliki id atau class jadi kita tidak bisa menggunakan ById ataupun ByClassName, jadi kita bisa menggunakan 3 lainnya

// const p4 = document.getElementsByTagName('p')[3];
// console.log(p4);
// atau
// const p4 = document.querySelector('#b p');
// console.log(p4);
// atau
// const p4 = document.querySelectorAll('p')[3];
// console.log(p4);

// lalu ada satu cara lagi, yaitu kita bisa mengubah node rootnya, jadi biasanya kita akan menulis document untuk node rootnya, kita bisa mengganti node rootnya untuk mempersempit scope pencariannya, dengan cara berikut
// pertama kita buat node rootnya, misal kita ingin mengambil element dari section dengan id b, kita bisa mengambil section tadi terlebih dahulu dan menjadikannya node root
const sectionB = document.getElementById('b');
// lalu jika kita ingin mengambil paragraf ke 4 kita tidak perlu menulis document lagi karna kita bisa menggantinya dengan sectionB
// const p4 = sectionB.getElementsByTagName('p');
// atau
const p4 = sectionB.querySelector('p');
console.log(p4);
p4.style.color = 'lightblue';