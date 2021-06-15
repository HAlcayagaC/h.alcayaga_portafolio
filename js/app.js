//EVENTO SCROLL
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  if (scrollY >= 770) {
    header.style.backgroundColor = "black";
    header.style.paddingTop = "1rem";
  } else {
    header.style.backgroundColor = "white";
    header.style.paddingTop = "2rem";
  }
});

//MENU CELULARES

const buttonHamburger = document.querySelector(".barra__navegacion--phone");
const menuPhone = document.querySelector(".barra__navegacion__mobile");
buttonHamburger.addEventListener("click", () => {
    menuPhone.classList.toggle("mobile");
});

//SELECTORES
const inputNombre = document.querySelector(".input__name");
const inputEmail = document.querySelector(".input__email");
const inputMensaje = document.querySelector(".input__mesagge");
const buttonSubmit = document.querySelector(".boton__submit");
const formulario = document.querySelector(".form__contact");
const mensajeDiv = document.querySelector(".message");

let opNombre = false;
let opEmail = false;
let opMensaje = false;

//EVENTOS

inputNombre.addEventListener("blur", (e) => {
  let value = e.target.value;
  const exRegName = /^[a-zA-ZÀ-ÿs]{1,40}$/;

  validarInputs("nombre", exRegName, value);
});

inputEmail.addEventListener("blur", (e) => {
  let valueEmail = e.target.value;
  const exRegEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  validarInputs("email", exRegEmail, valueEmail);
});

inputMensaje.addEventListener("blur", (e) => {
  let valueMensaje = e.target.value;
  validarInputs("textArea", 0, valueMensaje);
});

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (opNombre == true && opEmail == true && opMensaje == true) {
    mensajeDiv.classList.add("message__div__info");
    mensajeDiv.innerHTML = "Enviando mensaje ...";
    setTimeout(() => {
      mensajeDiv.classList.remove("message__div__info");
      mensajeDiv.classList.add("message__div__success");
      mensajeDiv.innerHTML = "Mensaje enviado exitosamente";
      formulario.reset();
    }, 2000);
  } else {
    mensajeDiv.classList.add("message__div__info");
    mensajeDiv.innerHTML = "Todos los campos son obligatorios";
    setTimeout(() => {
      mensajeDiv.classList.remove("message__div__info");
      mensajeDiv.innerHTML = "";
    }, 2000);
  }
});

//FUNCIONES

const validarInputs = (tipo, expresion, valor) => {
  const textMensaje = [
    "Nombre correcto",
    "Solo debe indicar el nombre sin caracteres especiales",
    "Email Correcto",
    "Email no valido",
    "Mensaje Correcto",
    "Mensaje no puede ser inferior a 3 palabras",
  ];

  switch (tipo) {
    case "nombre":
      if (expresion.test(valor) && valor.length >= 3) {
        mensajeDiv.classList.remove("message__div__error");
        mensajeDiv.classList.add("message__div__success");
        mensajeDiv.innerHTML = textMensaje[0];
        opNombre = true;
        setTimeout(() => {
          mensajeDiv.classList.remove("message__div__success");
          mensajeDiv.innerHTML = "";
        }, 2000);
      } else {
        mensajeDiv.classList.remove("message__div__success");
        mensajeDiv.classList.add("message__div__error");
        mensajeDiv.innerHTML = textMensaje[1];
        opNombre = false;
        setTimeout(() => {
          mensajeDiv.classList.remove("message__div__error");
          mensajeDiv.innerHTML = "";
        }, 2000);
      }
      break;

    case "email":
      if (expresion.test(valor) && valor.length >= 3) {
        mensajeDiv.classList.remove("message__div__error");
        mensajeDiv.classList.add("message__div__success");
        mensajeDiv.innerHTML = textMensaje[2];
        opEmail = true;
        setTimeout(() => {
          mensajeDiv.classList.remove("message__div__success");
          mensajeDiv.innerHTML = "";
        }, 2000);
      } else {
        mensajeDiv.classList.remove("message__div__success");
        mensajeDiv.classList.add("message__div__error");
        mensajeDiv.innerHTML = textMensaje[3];
        opEmail = false;
        setTimeout(() => {
          mensajeDiv.classList.remove("message__div__error");
          mensajeDiv.innerHTML = "";
        }, 2000);
      }
      break;

    case "textArea":
      if (valor.length >= 3) {
        mensajeDiv.classList.remove("message__div__error");
        mensajeDiv.classList.add("message__div__success");
        mensajeDiv.innerHTML = textMensaje[4];
        opMensaje = true;
        setTimeout(() => {
          mensajeDiv.classList.remove("message__div__success");
          mensajeDiv.innerHTML = "";
        }, 2000);
      } else {
        mensajeDiv.classList.remove("message__div__success");
        mensajeDiv.classList.add("message__div__error");
        mensajeDiv.innerHTML = textMensaje[5];
        opMensaje = false;
        setTimeout(() => {
          mensajeDiv.classList.remove("message__div__error");
          mensajeDiv.innerHTML = "";
        }, 2000);
      }

      break;
  }
};

//AÑO FOOTER
const fechaAno = new Date().getFullYear();
const spanDate = document.querySelector(".footer__text__year");
spanDate.innerHTML = fechaAno;
