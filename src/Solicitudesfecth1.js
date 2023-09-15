/*
A CONTINUACION SE ESCRIBE EL CODIGO DE:

                                    GRABAR USUARIO EN USERS

PARA CRAR NUEVO REGISTRO DE USUARIO
*/

async function POSTregistro() {
  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("clave").value;
  const razonsocial = document.getElementById("razonsocial").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const ciudad = document.getElementById("ciudad").value;
  const datosI = {
    correo: correo,
    clave: clave,
    razonsocial: razonsocial,
    ciudad: ciudad,
    whatsapp: whatsapp,
  };

  // validar correo
  const cadena = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const esValido = cadena.test(correo);
  if (!esValido) {
    mostrar("Correo no cumple Las condiciones", "NADA");
    return;
  }

  // validar clave

  if (clave.trim().length < 4) {
    mostrar("La clave tiene menos de 4 caracteres", "NADA");
    return;
  }

  // validar razonSocial
  if (razonsocial.trim().length < 2) {
    mostrar("La Razon Social no se ha definido", "NADA");
    return;
  }
  // validar ciudad
  if (ciudad.trim().length < 4) {
    mostrar("La  ciudad no es valida", "NADA");
    return;
  }

  if (whatsapp.trim().length < 9) {
    mostrar("El numero tiene menos de 10 digito", "NADA");
    return;
  }

  // parte de llamado al backend
  try {
    const response = await fetch("/src/grabarusers.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosI),
    });

    if (!response.ok) {
      throw new Error('Error al obtener la respuesta del servidor. Código de estado: ' + response.status);
    }

    // Leer el cuerpo de la respuesta como texto
    const responseBody = await response.text();
    console.log(responseBody)
    // Convertir la respuesta JSON a objeto
    const req = JSON.parse(responseBody);

    // Obtener el mensaje del objeto JSON
    const mensaje = req.mensaje;
    // Mostrar el mensaje recibido desde el servidor en la alerta
    if (mensaje === "insertado") {
      mostrar("Usuario creado con exito, de ClicK en  Salir del formulario", "NADA");

      limpiarFormulario();
    } else if (mensaje === "duplicado") {
      mostrar("Usuario ya existe pruebe otro usuario", "NADA");
    } else {
      mostrar("Se presento un error, intente nuevamente", "NADA");
    }
  } catch (error) {
    // Imprime el error completo en la consola
    console.error(error);

    // Muestra un mensaje de alerta con el error completo
    mostrar("Ocurrió un error al enviar la solicitud", "NADA");
  }
}

// otra funcion para inicializar variables
function limpiarFormulario() {
  document.getElementById("correo").value = "";
  document.getElementById("clave").value = "";
  document.getElementById("razonsocial").value = "";
  document.getElementById("ciudad").value = "";
  document.getElementById("whatsapp").value = "";
}


/*
A CONTINUACION SE ESCRIBE EL CODIGO DE:

                                    BUSCAR  USUARIO EN USERS

PARA CRAR ENTRAR EN PROCESO PRODUCTO
*/


async function GETregistro() {
  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("clave").value;

  const datosI = {
    correo: correo,
    clave: clave,
  };

  // Validar correo
  const cadena = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const esValido = cadena.test(correo);
  if (!esValido) {
    await mostrar("Correo no cumple las condiciones");
    return false;
  }

  // Validar clave
  if (clave.trim().length < 4) {
    await mostrar("La clave tiene menos de 4 caracteres", "NADA");
    return;
  }

  try {
    const response = await fetch("/src/buscarusers.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosI),
    });

    if (!response.ok) {
      throw new Error('Error al obtener la respuesta del servidor. Código de estado: ' + response.status);
    }

    const responseBody = await response.text();

    const req = JSON.parse(responseBody);

    const mensaje = req.mensaje;
    // Mostrar el mensaje recibido desde el servidor en la alerta
    if (mensaje === "valido") {

      const fechaHoraActual = new Date();
      const clavefecha = `${fechaHoraActual.getFullYear()}${fechaHoraActual.getMonth() + 1}${fechaHoraActual.getDate()}${fechaHoraActual.getHours()}${fechaHoraActual.getMinutes()}${fechaHoraActual.getSeconds()}`;
      const clave2 = parseInt(clavefecha);
      const clave = { clave1: correo, clave2: clave2 };
      sessionStorage.setItem("correo", JSON.stringify(clave));

      await mostrar("Validacion exitosa, de Clicl nuevamente en productos", "NADA");

      await grabarcliente(clave);
      document.querySelector("#cuerpo").style.display = "none"
      return;  
      
      //  mostrar("Usuario validado correctamente", "NADA");
    } else if (mensaje === "invalido") {
      await mostrar("Usuario invalido, si no tiene Usuario vaya a opcion REGISTRESE", "NADA");
      return;
    } else {
      await mostrar("Se presento un error, intente nuevamente", "NADA");
    }
  } catch (error) {
    // Imprime el error completo en la consola
    console.error(error);

    // Muestra un mensaje de alerta con el error completo
    await mostrar("Ocurrió un error al enviar la solicitud", "NADA");
  }
  recargarHome();
}

/*
A CONTINUACION SE ESCRIBE EL CODIGO DE:

                                    GRABAR INGRESO USUARIO

PARA CRAR ENTRAR EN PROCESO PRODUCTO
*/
async function grabarcliente(clave) {
  var fechaActual = new Date();

  var dia = fechaActual.getDate();
  var mes = fechaActual.getMonth() + 1;
  var anio = fechaActual.getFullYear();

  // Formatear la fecha como "DD/MM/AAAA"
  var fechahoy = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${anio}`;

  const datosI = {
    correo: clave.clave1,
    codigo: "inicio",
    fecha: fechahoy,
    control: clave.clave2,
  }

  try {
    const response = await fetch("/src/grabardatos.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosI),
    });
    if (!response.ok) {
      throw new Error('Error al obtener la respuesta del servidor. Código de estado: ' + response.status);
    }

    // Leer el cuerpo de la respuesta como texto
    const responseBody = await response.text();

    // Convertir la respuesta JSON a objeto
    const req = JSON.parse(responseBody);

    const mensaje = req.mensaje;
    // Mostrar el mensaje recibido desde el servidor en la alerta
    if (mensaje === "insertado") {
      // alert("linea 240 de solicitudfecth, se grabo el registro")
      recargarHome();
    } else {
      console.log("Se presento un error, intente nuevamente");
    }
  } catch (error) {
    // Imprime el error completo en la consola
    console.error(error);

    // Muestra un mensaje de alerta con el error completo
    console.log("Ocurrió un error al enviar la solicitud");
  }

}





/*
A CONTINUACION SE ESCRIBE EL CODIGO DE:

                                    GRABAR DATOS USUARIO

PARA CRAR ENTRAR EN PROCESO PRODUCTO
*/

async function fichaTecnica(event) {
  var productoC = event.target.id;
  await POSTfichaTecnica(productoC);
  verFichaTecnica(productoC);
}

async function POSTfichaTecnica(productoC) {

  const claves = JSON.parse(sessionStorage.getItem("correo"));

  // para tomar fecha y hora colombiana
  var options = {
    timeZone: 'America/Bogota',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  var fechaActual = new Date().toLocaleString('es-CO', options);
  const datosI = {
    correo: claves.clave1,
    codigo: productoC,
    fecha: fechaActual,
    control: claves.clave2,
  }

  try {
    const response = await fetch("../src/grabardatos.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosI),
    });
    if (!response.ok) {
      throw new Error('Error al obtener la respuesta del servidor. Código de estado: ' + response.status);
    }

    // Leer el cuerpo de la respuesta como texto
    const responseBody = await response.text();

    // Convertir la respuesta JSON a objeto
    const req = JSON.parse(responseBody);

    // Obtener el mensaje del objeto JSON
    const mensaje = req.mensaje;
    // Mostrar el mensaje recibido desde el servidor en la alerta
    if (mensaje === "insertado") {
      // alert("linea 240 de solicitudfecth, se grabo el registro")
    } else {
      mostrar("Se presento un error, intente nuevamente", "NADA");
    }
  } catch (error) {
    // Imprime el error completo en la consola
    console.error(error);

    // Muestra un mensaje de alerta con el error completo
    mostrar("Ocurrió un error al enviar la solicitud", "NADA");
  };

}


async function verFichaTecnica(productoC) {
  const archivoPDF = productoC + ".pdf";
  const url = "../images/pdf/printPDF.html?archivoPDF=" + encodeURIComponent(archivoPDF);
  window.open(url);
}
/*
A CONTINUACION SE ESCRIBE EL CODIGO DE:

                                    ENVIAR CORREO SUGERENCIAS

PARA CRAR ENTRAR EN PROCESO PRODUCTO
*/

async function sugerencia() {
  const form = document.getElementById('formulario-correo');
  const datosI = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value,
  }

  // envio de correo a del formato de la pagina
  try {
    const response = await fetch("../src/enviarsolicitud.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosI),
    });

    if (!response.ok) {
      throw new Error('Error al obtener la respuesta del servidor. Código de estado: ' + response.status);
    }
    const responseBody = await response.text();
    const req = JSON.parse(responseBody);
    const mensaje = req.mensaje;
    if (mensaje === "enviado") {
      mostrar("Su mensage fue enviado", "NADA");
      form.reset();
      return;
    } else {
      mostrar("Se presento un error, intente nuevamente", "NADA");
    }
  } catch (error) {
    console.error(error);
    mostrar("Ocurrió un error al enviar el mensage", "NADA");
  };
}

/*
A CONTINUACION SE ESCRIBE EL CODIGO DE:

                                    BUSCAR CLAVE CORREO OLVIDADO  viene de APP enviarCorreo

PARA CRAR ENTRAR EN PROCESO PRODUCTO
*/

async function rescatacorreo() {
    console.log("linea 373 solicitudesfecth rescata correo entro");
  const correoEntrada = document.getElementById('correo');
  const correo = correoEntrada.value;

  const cadena = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const esValido = cadena.test(correo);
  if (!esValido) {
    await mostrar("Correo no cumple las condiciones");
    return ;
  }

  const datosI = {
    correo: correo,
    clave: "",
  };
    console.log("se dirige a fecth de buscacorreo");
  //trabanando en enviarcorreoahora

  try {
    const response = await fetch("../src/buscacorreo.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosI),
    });

    if (!response.ok) {
      throw new Error('Error al obtener la respuesta del servidor. Código de estado: ' + response.status);
    }
    const responseData = await response.json();
    
    console.log("response linea 403 de rescatacorreo",responseData.mensaje);
    
    if (responseData.mensaje === "valido") {
        const resultadoConsulta = responseData.resultadoConsulta;
        const usuario = resultadoConsulta[0];
        const correo = usuario.correo;
        const clave = usuario.clave;
        
        console.log("linea 410 de fecth datos de buscacorreo =",correo, clave);
        
        return { correo, clave };
   
    } else if (responseData.mensaje === "invalido") {

      await mostrar('Correo no registra en la base de datos', 'NADA');
      recargarHome()
    } else {
      await mostrar('currio un error y no se pudo enviar su clave, si el error persiste escribanos por contacto', 'NADA');
      document.getElementById("saca").style.display = "block";
      document.getElementById("clave").style.display = "block";
      const olvido = document.getElementById('boton-registro');
      olvido.style.fontSize = "17px";
      olvido.innerText = "Ingresar";
      olvido.onclick = GETregistro;
      GETregistro();
    }
  } catch (error) {
    console.error(error);
    // Resto del manejo de errores aquí
  }
  recargarHome()
}

/*
A CONTINUACION SE ESCRIBE EL CODIGO DE:

                                    ENVIAR CLAVE CORREO OLVIDADO

PARA CRAR ENTRAR EN PROCESO PRODUCTO
*/

async function enviaclave(datos) {
    console.log("linea 441  fecth de solicitudesfecth entro a enviarclave",datos);
  const form = document.getElementById('formulario-correo');
  const datosI = {
    correo: datos.correo,
    clave: datos.clave,
  }
  // envio de correo a del formato de la pagina
  try {
    const response = await fetch("../src/enviarclave.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosI),
    });

    if (!response.ok) {
      throw new Error('Error al obtener la respuesta del servidor. Código de estado: ' + response.status);
    }
    const responseBody = await response.text();
    const req = JSON.parse(responseBody);
    const mensaje = req.mensaje;
        console.log("linea 465  fecth respuesta de servidor",req.mensaje);
    if (mensaje === "enviado") {
      await mostrar("Su clave fue enviada con exito", "NADA");
      recargarHome();
    } else {
      mostrar("Se presento un error con su clave", "NADA");
      return;
    }
  } catch (error) {
    console.error(error);
    mostrar("Ocurrió un error al enviar la clave", "NADA");
  };
  return;
}



/*
funcion mostrar
 
*/

function mostrar(mostrar, valor) {
  return new Promise((resolve) => {

    var alerta = document.createElement('div');
    alerta.style.width = "300px";
    alerta.style.height = "auto";
    alerta.id = 'cuerpo1';

    var mensaje = document.createElement('div');
    mensaje.className = 'cuerpo1-message';
    mensaje.textContent = mostrar;

    var botonCerrar = document.createElement('button');
    botonCerrar.textContent = 'Continuar';
    botonCerrar.onclick = () => {

      cerrarAlerta(mostrar, valor);

      resolve(); // Resuelve la promesa cuando se cierra la alerta
    };

    alerta.appendChild(mensaje);
    alerta.appendChild(botonCerrar);

    // Agrega la alerta al cuerpo del documento
    document.body.appendChild(alerta);

    // Muestra la alerta
    alerta.classList.add('show');
  });

}

function cerrarAlerta(parametro1, parametro2) {
  if (parametro2 === 'GET') {
    // termina prueba
  };
  if (parametro2 === 'POST') {
    location.reload(true)
  }
  var alerta = document.querySelector('#cuerpo1');
  alerta.parentNode.removeChild(alerta);
}
