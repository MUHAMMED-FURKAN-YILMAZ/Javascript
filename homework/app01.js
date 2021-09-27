let btn = document.querySelector(".switcher");
let bck = document.querySelector(".darkmode");

let i = 0;

btn.onclick = function () {
  if (i % 2 == 0) {
    bck.style.color = "black";
    bck.style.backgroundColor = "white";

    btn.innerHTML = `<i class="fas fa-sun"></i>`;
    btn.style.backgroundColor = "black";
    i++;
  } else if (i % 2 == 1) {
    bck.style.color = "white";
    bck.style.backgroundColor = "black";

    btn.innerHTML = `<i class="fas fa-moon"></i>`;
    btn.style.backgroundColor = "white";
    i++;
  }
};
