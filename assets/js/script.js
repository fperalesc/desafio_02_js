// PROBLEMA #1
function bordeRojo() {
  let borde = document.getElementById("caja");
  let fondo = document.getElementById("contenedor-problema1");
  let h2 = document.getElementById("h2-Caja");
  if (borde.style.border == "") {
    borde.style.border = "2px solid red";
    fondo.style.backgroundImage = "url(/assets/imgs/fondoCaja.jpg)";
    fondo.style.backgroundSize = "cover";
    fondo.style.backgroundPositionY = "50%";
    h2.style.color = "rgb(255, 0, 0)";
    h2.style.opacity = "0.9";
    h2.style.textShadow = "2px 2px 2px rgb(133, 18, 16)";
    borde.style.animations;
  } else {
    borde.style.border = "";
    fondo.style.backgroundImage = "";
    h2.style.color = "white";
    h2.style.opacity = "1";
    h2.style.textShadow = "";
  }
}

// PROBLEMA #2
function verificacion() {
  let sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
  let sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
  let sticker3 = parseInt(document.getElementById("sticker3").value) || 0;
  let mensaje = document.getElementById("mensaje");

  if (
    sticker1 + sticker2 + sticker3 <= 10 &&
    sticker1 + sticker2 + sticker3 >= 0 &&
    sticker1 + sticker2 + sticker3 != 1
  ) {
    mensaje.innerText = `Llevas ${sticker1 + sticker2 + sticker3} stickers`;
    mensaje.style.color = "black";
  } else if (sticker1 + sticker2 + sticker3 > 10) {
    mensaje.innerText = `¡Llevas demasiados stickers (${
      sticker1 + sticker2 + sticker3
    })! Puedes llevar un máximo de 10 unidades`;
    mensaje.style.color = "red";
  } else if (sticker1 + sticker2 + sticker3 == 1) {
    mensaje.innerText = `Llevas ${sticker1 + sticker2 + sticker3} sticker`;
    mensaje.style.color = "black";
  } else {
    mensaje.innerText =
      "No puedes seleccionar números negativos. ¡Inténtalo otra vez!";
    mensaje.style.color = "red";
  }
}

// PROBLEMA #3

function passVerification() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let mensaje = document.getElementById("mensaje-pass");

  if (num1 == 9 && num2 == 1 && num3 == 1) {
    mensaje.innerText = "Password 1 correcto";
    mensaje.style.color = "green";
  } else if (num1 == 7 && num2 == 1 && num3 == 4) {
    mensaje.innerText = "Password 1 correcto";
    mensaje.style.color = "green";
  } else {
    mensaje.innerText = "Password incorrecto";
    mensaje.style.color = "red";
  }
}
