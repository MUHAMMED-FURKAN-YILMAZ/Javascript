// ara butonuna tiklandiginda calan telefon ciksin, zil calsin

let resim = document.querySelector(".resim"); // resim'e ulastim
let ring = document.querySelector(".ses"); // audio'ya ulastim

//ara tusuna ulastim
document.querySelector(".on").onclick = function () {
  resim.src = "./img/img.gif"; // resim degistirdim
  ring.play(); //sesi calistirdim, play yaptim
};

//baglat butonuna basinca gif gelsin ses kesilsin
//baglat butonunu bagladik
document.querySelector(".off").onclick = function () {
  resim.src = "./img/telbagla.gif";
  ring.pause(); //sesi durdurduk
};

// konus butonuna basinca yeni gif gelsin
document.querySelector(".speak").onclick = function () {
  resim.src = "./img/tel.gif";
};

// ekle butonuna basildiginda yeni bir li ekle
const liste = document.querySelector(".liste");

document.querySelector(".ekle").onclick = function () {
  const giris = document.querySelector(".dil");

  liste.innerHTML += `<li>${giris.value}</li>`;
  giris.value = "";
};

//sil butonuna tiklandiginda li elemani silinsin
document.querySelector(".sil").onclick = function () {
  liste.removeChild(liste.lastElementChild);
}; // listenin cocuklarindan listenin son cocugunu sildik

const parag = document.querySelector(".forH1");
parag.innerHTML = `<h1>${"Programlama Dilleri"}</h1>`;

// klavyeden bir tusa basildiginda buyusun/kuculsun
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");

  if (checkbox.checked) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};

//mouse resmin ustune geldiginde aslan kukresin

resim.onmouseover = function () {
  resim.src = "./img/aslan2.jpeg";
};

//2. yol-->addEventListener() yolu
// resim.addEventListener("mouseout",function(){
//   resim.src="./img/aslan2.jpeg";
// })

//mouse resmin ustunden cekildiginde
resim.onmouseout = function () {
  resim.src = "./img/aslan1.jpeg";
};

// enter=13  delete=46
//! onkeydown=klavyedeki tusa basip elinizi cektiginizde

document.querySelector(".dil").onkeydown = function (olay) {
  //->olay keyword degil biz tanimladik

  if (olay.keyCode == 13) {
    // enter'i cagirdik

    document.querySelector(".ekle").onclick();
  }
  if (olay.keyCode == 46) {
    // delete'yi cagirdik

    document.querySelector(".sil").onclick();
  }
};
