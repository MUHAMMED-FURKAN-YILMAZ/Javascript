const yaslar = [5, 10, 28, 42];

const isimler = [
  "Hakan",
  "Alaaddin",
  "Furkan",
  "Dayanch",
  20,
  40,
  true,
  23.5,
  yaslar,
  "Ayse",
];
console.log(isimler);

console.log(isimler[3]);
console.log((isimler[3] = "Sadi"));
console.log(isimler);

//! const degistirilemiyordu ama arrayler degistirilebilir
//! nedeni ise aslinda dizi sabit sadece icerigi degistiriliyor, o yüzden primitive'den farkli

isimler[isimler.length - 2] = false;

console.log(isimler[8][1]);

//! ************** DIZIYI DEGISTIREN METHODLAR *******************

let meyveler = ["Elma", "Armut", "Muz", "Kivi"];

const baslik = document.querySelector(".baslik");

//! .pop() --> en son elemani siler
//! log icinde yazdirirsaniz da sildigini yazdirir

//meyveler.pop(); [Elma,Armut,Muz]
console.log(meyveler.pop());

//!shift() --> dizinin 0 indexli elemanini siler, ve yazdirirsak sildigi elemani dondurur

//meyveler.shift(); [Armut,Muz]

console.log(meyveler.shift());

//! push() --> dizinin sonua eleman ekler
meyveler.push("Cilek", "karpuz");

//! unshift() --> dizin 0 index'ine eleman ekler
meyveler.unshift("Ayva");

//! reverse() --> dizinin tamamini ters cevirir
//meyveler.reverse();

//! sort() --> diziyi natural order siralar , alfabetik ve yükselen sayiya gore
meyveler.sort();

//! splice() -->
meyveler.splice(1, 0, "erik"); // 1->eleman eklemek istedigim index,
// 0-> hiçbir elemani silme beni araya sikistir

meyveler.splice(4, 1, "uzum"); // buradaki 1-> o index yerine ekle . (oncekini sil bunu ekle)

// *********** DIZI ERISIM METHODLARI  (diziyi degistirmez) ***********

const sayilar = [3, 4, 5, 2, "2", "uc", "bes", 5, 2, 7];

console.log(sayilar.includes("5")); // false
console.log(sayilar.includes(5)); // true

//! ** indexOf()--> ilk eslesen index'i dondurur

console.log(sayilar.indexOf(2)); //3
console.log(sayilar.lastIndexOf(5)); //7
console.log(sayilar.indexOf(2, 4)); //8  --> ben 2'nin index'ini istiyorum ama
// 4 numarali indexten sonraki ilk 2'nin index'ini... 4 inclusive (dahil)
console.log(sayilar.indexOf(5, 3)); //7

//! ** join() -->dizinin elemanlarini birlestirip string haline getirir
console.log(sayilar.join());
console.log(sayilar.join(""));
console.log(sayilar.join(" "));
console.log(sayilar.join("-"));
//todo join default olarak virgullerle ayirarak diziden kurtarir. Ama istersek " " yazarak bosluklarla
//todo "-" yaparak tirelerle ayirabiliriz

//! toString() --> join() gibidir sadece virgulle ayirir
console.log(sayilar.toString());

const arabalar = ["bmw", "mercedes", "Volvo", "sahin", "anadol"];
//! ** slice() --> substring() gibi
console.log(arabalar.slice(2)); // 2. index'ten itibaren yazdirir->substring(2) gibi .. 2-> inclusive
console.log(arabalar.slice(1, 3)); // 1. index'ten 3. index'e kadar->substring(1,3) gibi.. 3->exclusive

//******************* CONCAT **************** */

const birlesik = sayilar.concat(arabalar, true, false, [3, 4, 5]);
console.log(birlesik);
