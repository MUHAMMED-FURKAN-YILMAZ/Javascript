function hesapEt(sonuc) {
  if (form.displayResult.value == 0) {
    form.displayResult.value = sonuc;
  } else {
    form.displayResult.value += sonuc;
  }
}

// buna gerek yoktu cunku value'su="" . ama yine de yapalim dedik
document.querySelector(".bos").onclick = function () {
  document.querySelector("ekranBorder").value = "";
};
