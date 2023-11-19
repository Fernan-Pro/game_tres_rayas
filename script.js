const cuadro_btn = document.querySelectorAll(".cuadro");
const info = document.getElementById("juego-info");
const juego_btn = document.getElementById("juego-boton");
var i = 1;
const jBtn_e = "pointer-events:initial;opacity:initial;",
  jBtn_d = "pointer-events:none;opacity:40%;";
let state = false;
var pWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function comprobar() {
  juego_btn.style.cssText = jBtn_d;
  for (var j = 0; j < pWin.length; j++) {
    if (
      cuadro_btn[pWin[j][0]].innerHTML === "X" &&
      cuadro_btn[pWin[j][1]].innerHTML === "X" &&
      cuadro_btn[pWin[j][2]].innerHTML === "X"
    ) {
      info.innerHTML = '"X" Gana';
      state = true;
      deshabilitarCasillas();
    } else if (
      cuadro_btn[pWin[j][0]].innerHTML === "O" &&
      cuadro_btn[pWin[j][1]].innerHTML === "O" &&
      cuadro_btn[pWin[j][2]].innerHTML === "O"
    ) {
      info.innerHTML = '"O" Gana';
      state = true;
      deshabilitarCasillas();
    }
  }
  if (i > 9 && state === false) {
    info.innerHTML = "Empate";
    juego_btn.style.cssText = jBtn_e;
  }
}

function deshabilitarCasillas() {
  for (var k = 0; k < cuadro_btn.length; k++) {
    cuadro_btn[k].style.pointerEvents = "none";
  }
  juego_btn.style.cssText = jBtn_e;
}

function habilitarCasillas() {
  for (var l = 0; l < cuadro_btn.length; l++) {
    cuadro_btn[l].style.pointerEvents = "initial";
    cuadro_btn[l].innerHTML = "";
  }
  i = 1;
  state = false;
  info.innerHTML = "";
  juego_btn.style.cssText = jBtn_d;
}

for (var m = 0; m < cuadro_btn.length; m++) {
  cuadro_btn[m].addEventListener("click", function () {
    if (this.innerHTML === "") {
      if (i % 2 === 0) {
        this.innerHTML = "O";
      } else {
        this.innerHTML = "X";
      }
      i++;
      comprobar();
    }
  });
}

juego_btn.addEventListener("click", function () {
  habilitarCasillas();
});
