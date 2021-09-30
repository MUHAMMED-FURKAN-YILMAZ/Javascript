//************* DIZILERDE ITERASYON *********** */

//******** FOR DONGUSU ********* */

const koordinatlar = [120, 100, -100, 220, 330, -50];

let pozitif = 0;
let negatif = 0;

for (let i = 0; i < koordinatlar.length; i++) {
  koordinatlar[i] < 0
    ? (negatif += koordinatlar[i])
    : (pozitif += koordinatlar[i]);
}

console.log(`negatifler toplami ${negatif} pozitifler toplami ${pozitif}`);

//********** FOR IN DONGUSU **********/
//? syntax'i daha kolay ama daha yavas..--> sadece dizilerde kullaniliyor

// let pozitif = 0;
// let negatif = 0;

// for (let i in koordinatlar) {
//   koordinatlar[i] < 0
//     ? (negatif += koordinatlar[i])
//     : (pozitif += koordinatlar[i]);
// }

console.log(`negatifler toplami ${negatif} pozitifler toplami ${pozitif}`);

// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//       bir dizide saklandığı varsayalım.Bu hayvanları türüne
//       göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//       ana programa döndürecek fonksiyonu yaziniz. Eğer o
//       türden bir hayvan yok ise bulunamadığını yazdırsın.

const hayvanlar = [
  "aslan",
  "fil",
  "kartal",
  "kanarya",
  "aslan",
  "aslan",
  "timsah",
];
// const ara = prompt("sayisini merak ettigin hayvanin adiniz yaz");
// const bulDondur = function (ara) {
//   let hayvanSayisi = 0;

//   for (let i in hayvanlar) {
//     if (hayvanlar[i] == ara) hayvanSayisi++;
//   }

//   hayvanSayisi == 0
//     ? alert("aradigin hayvandan bulunamadi")
//     : alert(`aradiginiz ${ara} hayvanindan ${hayvanSayisi} tane bulunmaktadir`);
// };
// bulDondur(ara);

//*********** FOR OF DONGUSU *********** */-> her yerde gecerli ama yavas
// for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde
//guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme
//kullanmaya gerek yoktur.

let arabalar = ["BMW", "Volvo", "Mini"];

for (let i of arabalar) {
  console.log(i);
}

//********** FOREACH METHODU ********/
//! foreach methodu orjinal diziyi bozmaz

let ogrenciler = ["Onur", "Hakan", "Furkan"];

const dene = ogrenciler.forEach((x) => console.log(x)); // diziyi tukettigi icin dene'nin karsisi undefined
// x önemsiz ne atarsan o olur
console.log(dene); // undefined

ogrenciler.forEach((deger, index) =>
  console.log(index + ". kisi " + deger + "'dir")
);
//0. kisi Onur'dir
//1. kisi Hakan'dir
//2. kisi Furkan'dir

console.log(ogrenciler); // ['Onur', 'Hakan', 'Furkan']

//********** MAP METHODU ******** */
//! map methodu orjinal diziyi degistirmez

//ornek butun elemanlarin 3 katini aliniz

const rakamlar = [3, 5, 3, 2, 6, 7, 9];
console.log(rakamlar.map((x) => x * 3));

console.log(
  rakamlar.map((x, index) => `${index + 1}. elemanin 3 kati ${x * 3}`)
);

//ornek  isimler dizisinin icerisindeki her ismi buyuk harf olarak yeni bir diziye sakla
const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

// map methodu bir dizi dondurur
const buyuk = isimler.map((x) => x.toUpperCase());
console.log(buyuk);

document.querySelector(".baslik").textContent = buyuk.join("->");

//************ FILTER METHODU *********** */

//ornek fiyatlar dizisindeki 250'den buyuk fiyatlari yazdir
const fiyatlar = [120, 260, 300, 322.5, 400, 768];

console.log(fiyatlar.filter((t) => t > 250));

//-------------- ÖRNEK -------------------
// maası 4000 $'dan düsük olanlara %50 zam yapmak istiyoruz
// ve bunu ayri dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];
const yeni = maaslar.filter((a) => a <= 4000).map((a) => a * 1.5);

console.log(yeni);

//-------------- ÖRNEK -------------------

const adlar = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];

// ilk harfi A olanlari konsolda yazdir
adlar.filter((x) => x.startsWith("A")).forEach((x) => console.log(x));

//*************** REDUCE METHODU ******** */
//! reduce cikis methodudur , reduce'dan sonra foreach calismaz

const maaslarim = [3000, 5000, 4000, 2000, 1000];

console.log(maaslarim.reduce((x, y) => x + y, 0)); // x-> toplam , y-> dizide gezip donen
