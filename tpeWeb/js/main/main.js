const nav= document.querySelector("#nav");
const abrir= document.querySelector("#desplegar");
const cerrar= document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


  
// Funcion JavaScript para cambiar la clase "responsive" en la barra de navegacion
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  function mostrarCaptcha() {
    var captchaImage = document.getElementById('captchaImage');
    var submitButton = document.getElementById('submitButton');

    // Muestra la imagen captcha
    captchaImage.src = 'ruta/a/tu/imagen_captcha.jpg';
    captchaImage.style.display = 'inline';

    // Muestra el botón de enviar
    submitButton.style.display = 'inline';
}

function mostrarCaptcha() {
  var captchaImage = document.getElementById('captchaImage');
  var submitButton = document.getElementById('submitButton');

  // Muestra la imagen captcha
  captchaImage.src = 'ruta/a/tu/recaptchaimagen.jpg';
  captchaImage.style.display = 'inline';

  // Muestra el botón de enviar
  submitButton.style.display = 'inline';
}

function validarCaptcha(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  var userInput = document.getElementById('captchaInput').value.trim().toLowerCase();
  var captchaText = 'soy-humano';

  var ingresoMensaje = document.getElementById('ingreso');

  if (userInput === captchaText.toLowerCase()) {
      ingresoMensaje.textContent = 'Captcha correcto. Formulario enviado (simulado).';
      ingresoMensaje.classList.remove('error');
      return true; // Permite enviar el formulario
  } else {
      ingresoMensaje.textContent = 'El captcha es incorrecto. Inténtalo de nuevo.';
      ingresoMensaje.classList.add('error');
      return false; // Evita enviar el formulario
  }
}


