/*================================================================
            FONKSIYONLAR
    =================================================== */

//! 1.YONTEM: FUNCTION DECLARATION
// DECLARATION yontemi ile fonksiyonun tanimlanmasi cagrilmasindan
//  once veya sonra olabilir

// fonksiyonun tanimlanmasi

// function yazdirAd() {
//   console.log("Hakan");
// }
// //fonksiyonun cagrilmasi
// yazdirAd(); //Hakan

// //ornek:klavyeden girilen sayinin tek mi cift mi oldugunu gosteren fonks.

// const sayiniz = prompt("sayi giriniz");
// console.log(tekCift(sayiniz));

// function tekCift(sayimiz) {
//   return sayimiz % 2 == 0 ? `${sayimiz} cifttir` : `${sayimiz} tektir`;
// }

//!     2.YONTEM : FUNCTION EXPRESSION (bu yontem daha yaygin)

const tekCift1 = function (sayi) {
  return sayi % 2 == 0 ? `CIFT` : `TEK`;
};
console.log(tekCift1(5));

//ornek verilen 3 sayidan en buyuk sayiyi bulma:

let buyukBul = function (x, y, z) {
  let enBuyuk;

  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > z && y > x) {
    enBuyuk = y;
  } else {
    enBuyuk = z;
  }

  return enBuyuk;
};
console.log(buyukBul(5, 8, 9));

//! 3.YONTEM : FUNCTION ARROW

const ciftMi = (sayi) => (sayi % 2 == 0 ? `${sayi} cift` : `${sayi} tek`);

console.log(ciftMi(7));

//ornek fonksiyon ile us alma

const taban = prompt("taban gir");
const us = prompt("us gir");

const ustAl = (x, y) => x ** y;
console.log(ustAl(taban, us));
