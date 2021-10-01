//******************** NESNELER ****************** */

// diziler sirali bellek bolgeleridir. Dolayisiyla dizilere erisim index'le oluyor. Eger diziler
// complex ise (nesne) indexle erisim guclugu ortaya cikar bu yuzden =>..................

//! OBJECT (nesne)

// nesnelerde property-value(javada key-value idi) yapisi kullanilir
// nesnelerde aradigimiz veriye erismek icin property adini kullanmamiz gerekir

const insan = {
  ad: "Kenan",
  soyad: "Kul",
  yas: 30,
  meslek: "developer",
  diller: ["Java", "JS", "SQL", "HTML"],
};
console.log(insan);

// 1-) .dot notasyonu
console.log(insan.ad);
console.log(insan.diller);

// 2-) koseli parantez icine
console.log(insan["ad"]);
console.log(insan["diller"]);

console.log(`Adım: ${insan.ad} ve yasim: ${insan.yas}`);

const bilgi = prompt(
  "insan nesenesinden hangisini gormek istersin-ad,soyad,yas..-"
);
console.log(insan[bilgi]); //Kenan --> koseli paranteze dikkat. prompterden gelirken onu aratmak icin[] arasina prompter yazilir

// objeye (key)property.value'lar ekleme
insan.konum = "Turkiye";
insan.email = "insan@hotmail.com";
insan["dogumTarihi"] = 1991;

console.log(insan);

//******************** NESNE methodlari *************** */
const kisi = {
  ad: "Merve",
  soyad: "Aslan",
  dogumTarihi: 1990,
  meslek: "tester",
  tool: "selenyum",
  ehliyet: "true",
  yasHesapla: function () {
    // bugunun yilini al=>Date().getFullYear()
    return new Date().getFullYear() - this.dogumTarihi;
  },

  ozet: function () {
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir`;
  },
};

console.log(kisi);
console.log(kisi.yasHesapla());
console.log(kisi.ozet());

// **nesne(object) iterasyon*** ornekleri

const people = [
  {
    ad: "hakan",
    soyad: "inal",
    meslek: "developer",
    yas: 41,
  },
  {
    ad: "said",
    soyad: "can",
    meslek: "tester",
    yas: 37,
  },
  {
    ad: "kubilay",
    soyad: "tuncel",
    meslek: "team lead",
    yas: 33,
  },
  {
    ad: "osman",
    soyad: "turker",
    meslek: "grafiker",
    yas: 29,
  },
  {
    ad: "huseyin",
    soyad: "harran",
    meslek: "developer",
    yas: 32,
  },
];
console.log(people);

//ornek1- people dizisindeki kisilerin mesleklerini console'da yazdiralim

people.forEach((x) => console.log(x.meslek));

//ornek2- people dizisindeki tum kisilerin yaslarini 1 artirarak yazdiriniz

people.map((x) => x.yas + 1).forEach((x) => console.log(x)); //-> map'ten zaten x.yas ile geldik, x artik x.yas o yuzden sonunda sadece x

//ornek3- yasi 35'e esit veya kucuk olanlarin adlarini yazdir

people.filter((x) => x.yas <= 35).forEach((x) => console.log(x.ad));

//ornek4- people dizisindeki kisilerin isimlerini buyuk harf olarak alan ve yaslarini 5 artiran
//  ve soyadinin ilk 2 harfini yazdiran fonksiyonu yaziniz

people
  .map((x) => {
    return {
      // her donuste tek bir veri oldugunu gostermek icin
      // fonksiyon yok ama return var. 1 satiri gecince (coklu veride) curly braces var
      ad: x.ad.toUpperCase(),
      yas: x.yas + 5,
      soyad: x.soyad.slice(0, 2),
    };
  })
  .forEach((x) => console.log(x));

//ornek5- meslegi developer olanlarin isimlerini buyuk harf yap ve yaslarini yazdir (isterseniz diziyi atayip diziyi yazdir)

const yeni = people
  .filter((x) => x.meslek == "developer")
  .map((x) => {
    return {
      ad: x.ad.toUpperCase(),
      yas: x.yas,
    };
  });
console.log(yeni);
