const form = document.getElementById("form");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const fieldsets = document.querySelectorAll("fieldset");

let currentStep = 0;

function showStep(step) {
  fieldsets.forEach((fieldset, index) => {
    if (index === step) {
      fieldset.style.display = "block";
    } else {
      fieldset.style.display = "none";
    }
  });
  if (step === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline";
  }
  if (step === fieldsets.length - 1) {
    nextBtn.style.display = "none";
   submitBtn.style.display = "inline";
  } else {
    nextBtn.style.display = "inline";
   submitBtn.style.display = "none";
  }
  currentStep = step;
}

function next() {
  showStep(currentStep + 1);
}

function prev() {
  showStep(currentStep - 1);
}

showStep(currentStep);



//**********************confirmacion

//const form = document.getElementById("form");
const confirmacion = document.getElementById("confirmacion");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email_parentesco").value;
  const telefono = document.getElementById("telefono").value;
  const enfermedad = document.getElementById("enfermedad").value;
  const tratamiento = document.getElementById("tratamiento").value;
  const nombreEmergencia = document.getElementById("nombre_parentesco").value;
  const telefonoEmergencia = document.getElementById("telefono_parentesco").value;

  // Asignar los valores a la página de confirmación
  document.getElementById("confirmacion_nombre").textContent = nombre;
  document.getElementById("confirmacion_email").textContent = email;
  document.getElementById("confirmacion_telefono").textContent = telefono;
  document.getElementById("confirmacion_enfermedad").textContent = enfermedad;
  document.getElementById("confirmacion_tratamiento").textContent = tratamiento;
  document.getElementById("confirmacion_nombre_parentesco").textContent = nombreEmergencia;
  document.getElementById("confirmacion_telefono_parentesco").textContent = telefonoEmergencia;

  // Mostrar la página de confirmación

  form.style.display = "none";
  confirmacion.style.display = "block";
});

document.getElementById("editar").addEventListener("click", () => {
  // Ocultar la página de confirmación y volver al formulario
  confirmacion.style.display = "none";
  form.style.display = "block";
});

document.getElementById("enviar").addEventListener("click", () => {
  // Enviar el formulario y mostrar un mensaje de éxito
  alert("Formulario enviado con éxito");

  const formData = new FormData(form);
  const patient = {};
  for (const [key, value] of formData.entries()) {
    patient[key] = value;
  }

  console.log(patient);
});

function nuevo(){
    form.reset();
    showStep(0);
  
    confirmacion.style.display = "none";
    form.style.display = "block";
  
  };

  

/* /*********************************json

function guardar_datos(){

    
//************** guardar datos

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Configuración del middleware para procesar formularios
app.use(bodyParser.urlencoded({ extended: false }));

// Servir archivos estáticos
app.use(express.static('public'));

// Ruta para guardar los datos del formulario
app.post('pacientes', (req, res) => {
  // Obtener los datos del formulario


  // Leer el archivo JSON
  const archivo = fs.readFileSync('datosCompletos.json');
  const contenido = JSON.parse(archivo);

  // Agregar los nuevos datos al array
  contenido.push(datosCompletos);

  // Escribir los datos en el archivo JSON
  fs.writeFileSync('datos.json', JSON.stringify(contenido));

  // Responder al cliente con un mensaje de éxito
  res.send('Datos guardados con éxito');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});

} */
