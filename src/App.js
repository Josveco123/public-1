/**
 * 
 * Recargar pagina inical
 */

function recargarHome() {
  location.reload();
}
/**
 * 
 * aqui va el codigo para ejecutar busqueda de lupa
 */
function submitForm() {
  var input = document.getElementById('inputBuscar').value.trim();
  if (input !== '') {
    var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(input);
    window.open(searchUrl, '_blank');
  }
}

function expandir() {
  var searchForm = document.getElementById('mnu-search');
  searchForm.classList.remove('collapsed'); // Quitamos la clase 'collapsed'
}

function recojer() {
  var searchForm = document.getElementById('mnu-search');
  searchForm.classList.add('collapsed'); // Agregamos la clase 'collapsed'
}
/**
 * 
 * Este codigo despliega el menu hamburguesa
 */

function desplegarMenu() {
  let desplegar = document.getElementById("mnu-Amb");
  let menuA = document.getElementById("menuA");

  if (desplegar.style.visibility === "visible") {
    // Si el menú ya está visible, lo ocultamos y cambiamos el color de fondo a transparente
    desplegar.style.visibility = "hidden";
    menuA.style.backgroundColor = "transparent";
    menuA.style.border = "none";
  } else {
    // Si el menú está oculto, lo mostramos, cambiamos el color de fondo a rojo y aplicamos la regla hover
    desplegar.style.visibility = "visible";
    menuA.style.border = "1px solid red";
  }
}
/**
 * 
 * Este codigo ejecuta el avance de los slider de la primera pagina
 */

function contactos() {
  document.getElementById('inicio').style.display = "block";
  // Obtener referencia al contenedor
  var contacto = document.getElementById("cajon");
  contacto.innerHTML = `
  <section id="pag-contactos">
    <div id="nombre-contacto"> CONTACTOS</div>
    <div class="figura0"></div>
    <div class="figura1">
      <div id="contactos-p">
        <ul>
          <li>
            <p>
              <span>ventas@laboratoriodelcaribe.com</span> <br /> <span> Celular: (+57)
              3155277697</span>
            </p>
          </li>
          <li>
            <p>
              <span>comercial@laboratoriodelcaribe.com</span> <br /> <span> Celular: (+57)
                3126869891</span>
            </p>
          </li>
          <li>
            <p>
              <span>sincelejo@laboratoriodelcaribe.com</span> <br /> <span>Celular: (+57)
                3135120781</span>
            </p>
          </li>
          <li>
            <p>
              <span>monteria@laboratoriodelcaribe.com</span> <br /> <span>Celular: (+57) 3126874903</span>
            </p>
          </li>
          <li>
            <p>
              <span>gerencia@laboratoriodelcaribe.com </span> <br /> <span>Celular: (+57)
                3126869891</span>
            </p>
          </li>
          <li>
            <p>
              <span>WhatsApp:</span> <br /> <span> Numeros: (+57) 3135120781 y (+57) 3126869891</span>
            </p>
          </li>
        </ul>
      </div>
      <div id="form-correo">
        <div id="correos">
          <h2 class="tit-pag4D">Queremos escucharte!</h2>
          <div id="correosPag">
            <form id="formulario-correo" autocomplete="off">
              <label class="label-correo" for="nombre">Nombre:</label>
              <input type="text" id="nombre" name="name"  required autofocus/>

              <label class="label-correo" for="correo">Correo:</label>
              <input type="email" id="correo" name="email"  required />

              <label class="label-correo" for="telefono">Teléfono:</label>
              <input type="text" id="telefono" name="phone"  required />

              <label class="label-correo" for="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="message" rows="4" required></textarea><br />
              <a id="enviar-btn" class="enviar" name="submit" onClick="sugerencia()" type="submit">Enviar</a><br />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
}


/**
 *
 * // comienza importe de pagina NOSOTROS--------------------
 *
 */

async function fNosotros() {
  await functionNosotros();
}

function functionNosotros() {
  document.getElementById('inicio').style.display = "block";
  // Obtener referencia al contenedor
  var nosotros = document.getElementById("cajon");
  nosotros.innerHTML = `
  <section id="pag-nosotros">
    <div id="figuraN">
      <div id="figura1">
        <span> ACERCA DE NOSOTROS </span>
      </div>
      <div id="linea1nosotros"></div>
    </div>
  
    <div id="nosotros">
      <div class="nos">
        <div id="nos11" class="nosT">
          <h2 id="denosotros" class="tit-nos">Reseña historica</h2>
        </div>
        <div id="nos12" class="nosC">
          <p>
            <span>
            Laboratorio del caribe S.A.S. inició labores en Sincelejo el 20 de marzo de 1984. 
            Se obtiene el primer Registro Sanitario para el producto comercializado bajo la marca 
            Artrixin iniciándose la expansión y posicionamiento en todo el territorio Nacional. <br/><br/>
            A través de los años Laboratorio del Caribe S.A.S. ha crecido de manera importante en 
            el mercado Nacional, manteniendo una posición de liderazgo y prestigio ante el 
            cuerpo médico por la calidad de sus productos.
            </span>
          </p>
        </div>
      </div>
      <div class="nos">
        <div id="nos21" class="nosT">
          <h2 id="politica-calidad" class="tit-nos">Politícas de la calidad</h2>
        </div>
        <div id="nos22" class="nosC">
          <p>
            <span>
            Laboratorio del Caribe S.A.S., es una empresa farmacéutica que está en un mejoramiento 
            continuo, ofreciendo productos y servicios confiables que cumplan con las normas de Buenas 
            Prácticas de Manufactura, para contribuir de esta forma al bienestar de la Sociedad. <br /><br />
            Con ética y responsabilidad ofrecemos al mercado productos de excelente calidad, seguros y 
            efectivos, que satisfacen las necesidades del cliente, cumpliendo con normas Nacionales e 
            Internacionales, y respetando el medio ambiente. <br /><br />
            A través de la gestión adecuada de los recursos y el compromiso asumido por nuestros 
            colaboradores, Laboratorio del Caribe S.A.S., genera el nivel de rentabilidad acorde a las 
            expectativas de los socios, permitiendo el desarrollo integral de los miembros de nuestra 
            organización.
            </span>
          </p>
        </div>
      </div>
      <div class="nos">
        <div id="nos41" class="nosT">
          <h2 id="politica-calidad" class="tit-nos">Misión</h2>
  
        </div>
        <div id="nos42" class="nosC">
          <p>
            <span>
            Laboratorio del Caribe S.A.S., es una empresa farmacéutica que tiene como misión, comercializar 
            productos de excelente calidad, cumpliendo con todas las Normas exigidas por las entidades que 
            nos vigilan, respetando el medio ambiente y generando de esta forma bienestar a la comunidad. <br /><br />
            Laboratorio del Caribe S.A.S. propenderá por el desarrollo integral de sus colaboradores al mismo tiempo 
            que satisface las expectativas de sus socios.
            </span>
          </p>
        </div>
      </div>
      <div class="nos">
        <div id="nos51" class="nosT">
          <h2 id="politica-calidad" class="tit-nos">Visión</h2>
        </div>
        <div id="nos52" class="nosC">
          <p>
            <span>
            Laboratorios del Caribe S.A.S. va a ser uno de los más reconocidos Laboratorios farmacéuticos de 
            Colombia, ampliando su línea de productos, para hacer una contribución a la sociedad, a través de 
            sus productos, construyendo herramientas para ser más competitivos y posicionarse como uno de los 
            principales laboratorios farmacéuticos en las regiones donde hace presencia
            </span>
          </p>
        </div>
      </div>
      <div class="nos">
        <div id="nos61" class="nosT">
          <h2 id="politica-calidad" class="tit-nos">Valores corporativos</h2>
        </div>
        <div id="nos62" class="nosC">
          <p>
            <span class="list-container">
              <span><strong>Respeto:</strong> Aceptamos las decisiones y acciones de
                los clientes internos y externos siendo tolerantes.</span>         <br />        <br />
              <span><strong>Compromiso:</strong> Damos lo máximo de cada uno de
                nosotros con sentido de pertenencia hacia la empresa.</span> <br>        <br />
              <span><strong>Honestidad:</strong> Actuamos conforme a los intereses
                comunes y no particulares de acuerdo a la ley y las
                costumbres.</span>         <br />        <br />
              <span><strong>Lealtad:</strong> Somos fieles frente a los compromisos y
                objetivos de la empresa.</span>         <br />        <br />
              <span><strong>Responsabilidad:</strong> Somos conscientes de nuestras
                actuaciones, cumpliendo cabalmente de forma que se logren los
                objetivos de la empresa.</span>
            </span>
          </p>
        </div>
      </div>
    </div>
    </div>
  </section>
  `;
}



/**
 * Buscar clave  Olvidada con el correo 
 * 
 */

async function buscarClave() {
  await form_recuperar();
  await mostrar('En la casilla de correo digita bien el correo al cual vas a recuperar la CLAVE, seguidamente teclea "Recuperar" o "Salir", segun sea la decision', 'NADA')
}

function form_recuperar() {
  document.getElementById("saca").style.display = "none";
  document.getElementById("clave").style.display = "none";
  document.getElementById("olvido-clave").style.display = "none";
  const olvido = document.getElementById('boton-registro');
  olvido.style.fontSize = "15px";
  olvido.innerText = "Recuperar";
  olvido.onclick = enviarCorreo;  // esta funcion esta en la linea 276 de este archivo
}

// funcion para enviar correo olvidado
//
async function enviarCorreo() {
    
  console.log("app 277 entro en enviarCorreo")  
  
  const resultaclave = await rescatacorreo();  // esta en solicitudesfecth.js n linea
  if (!resultaclave) {return};
  const  resultacorreo= await enviaclave(resultaclave)
  recargarHome()
}
/*
  var producto = document.querySelector("#cuerpo");
  producto.style.display = "block"
  producto.innerHTML = `
  <div id="contenedor-producto">
    <div id="cont-producto">
      <div id="tit1">
        <h1>Ingresa tu cuenta</h1>
      </div>

      <form id="datos-captura" action="">
        <div id="E-mail" class="datos-correo">
          <p>Email Empresa o Persona</p>
          <input
          id="correo"
          class="correo"
          type="text"
          placeholder="Correo electrónico"
          />
        </div>

        <div id="contraseña" class="datos-correo">
          <p>Contraseña de acceso</p>
          <input
          id="clave"
          class="clave"
          type="text"
           placeholder="Contraseña"
          />
        </div>    
      </form>
      <a id="olvido-clave" onClick="buscarClave()" href="#">Olvide la contraseña</a>
      <div id="ejecutar">
            <button id="boton-registro" onclick="GETregistro()">
              Verificar
            </button>
            <a id="ocultar" href="/index.html">Exit</a>
          </div>
   </div>
  </div>
`;
*/




/*
area de creacion de usuarios registrarse
*/

function registro() {
  document.getElementById('inicio').style.display = "block";
  var registro = document.querySelector("body");
  registro.innerHTML += `
  <div id="cuerpo">
    <!--<div id="contenedor-contacto">  -->
    <div id="cont-registro">
      <div id="tit1">
        <h1>Registrate</h1>
      </div>
      <form id="datos-captura" action="">
        <div>
          <label for="correo" class="pCaptura">Email Empresa o Persona</label>
          <input id="correo" class="correo datoF" type="text" name="correo" placeholder="Correo electrónico" required />
        </div>

        <div>
          <label for="clave" class="pCaptura">Contraseña de acceso</label>
          <input id="clave" class="clave datoF" type="text" name="clave" placeholder="Contraseña" required />
        </div>

        <div>
          <label for="razonsocial" class="pCaptura">Razon Social de la empresa</label>
          <input id="razonsocial" class="razonsocial datoF" type="text" name="razonsocial" placeholder="razonsocial"
            required />
        </div>

        <div>
          <label for="ciudad" class="pCaptura">Ciudad de residencia</label>
          <input id="ciudad" class="ciudad datoF" type="text" name="ciudad" placeholder="Donde Reside" required />
        </div>

        <div>
          <label for="whatsapp" class="pCaptura">Whatsapp Numero</label>
          <input id="whatsapp" class="whatsapp datoF" type="tel" name="whatsapp" placeholder="Whatsapp" required />
        </div>

        <div id="ejecutar">
          <button id="boton-registro" type="button" onclick="POSTregistro()">
            Guardar
          </button>
          <a id="ocultar" href="index.html">Salir</a>
        </div>
        <p id="bienvenida">
          Bienvenido a Laboratorios del Caribe. <br />Su cuenta ha sido creada con éxito. <br /><br />
          <a href="index.html">Continuar</a>
        </p>
      </form>
    </div>
  </div>
  `;
}

/**
 *
 *
 * funcion producto permite registrarte si no estas registrado
 *
 */


async function producto() {
  document.getElementById('inicio').style.display = "block";
  const claves = JSON.parse(sessionStorage.getItem("correo"));
  if (!claves) {
    var producto = document.querySelector("#cuerpo");
    producto.style.display = "block"
    producto.innerHTML = `
    <div id="contenedor-producto">
        <div id="cont-producto">
            <div id="titValidar">
                <h1>Validar Usuario</h1>
            </div>

            <form id="formValidar">

            <p class="formClaveP">Email Empresa o Persona</p>
            <input id="correo" class="correo formValidarI" type="text" placeholder="Correo electrónico" />
    
            <p id="saca" class="formClaveP">Contraseña de acceso</p>
            <input id="clave" class="clave formValidarI" type="text" placeholder="Contraseña" />
    
            <div id="ejecutar">
              <a id="boton-registro" onclick="GETregistro()">Ingresar</a>
           <a id="ocultar" href="index.html">Salir</a>
            </div>
          </form>
            <a id="olvido-clave" onClick="buscarClave()" href="#">Recuperar contraseña</a>
        </div>
    </div>
  `;
  } else {
    pagProductos();
  }
}


/**
 * 
 * area programa pagina productos
 * 
 * 
 */
function pagProductos() {
  document.getElementById('inicio').style.display = "block";
  document.getElementById("cuerpo").innerHTML = ""
  // Obtener referencia al contenedor
  var pProductos = document.getElementById("cajon");
  pProductos.innerHTML = `
  <div id="cabezaProducto">
    <div id="cabeza">PRODUCTOS</div>
    <div class="cajonProducto">
      <!-- 
            1  titulos> 
     -->
             <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="images/favorite.png" alt="" />
        </div>
        <div class="imageProducto">
          <img src="images/productos/producto1.png" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                  Artrixin gel 
          </span>
          <span class="presentacion">
                  Display x 25 sobres x 12g
          </span>
          <span class="contenido">
                  “Para inflamación y dolor Artrixin gel es lo mejor”
          </span>
          <button id="pdf1" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>
      <!--        
          2
      -->
      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="images/productos/producto2.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Artrixin gel 
          </span>
          <span class="presentacion">
                Tubo x 30g  
          </span>
          <span class="contenido">
                “Para inflamación y dolor Artrixin gel es lo mejor”
          </span>
          <button id="pdf2" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>
      <!-- 
           3 
            -->
      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="images/productos/producto3.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Nomante pastillas  
          </span>
          <span class="presentacion">
                Caja x 24 sobres x 4 pastillas 
          </span>
          <span class="contenido">
                “Garganta fresca y despejada Nomante es la indicada”
          </span>
          <button id="pdf3" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>
      <!-- 
            4
            -->

      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="images/productos/producto4.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Aceite de Almendra 
          </span>
          <span class="presentacion">
                Frasco x 30ml  
          </span>
          <button id="pdf4" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>
      <!-- 
            5
            -->

      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="images/productos/producto5.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Aceite de Coco
          </span>
          <span class="presentacion">
                Frasco x 30ml  
          </span>
          <button id="pdf5" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>
      <!-- 
            6
            -->

      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="images/productos/producto6.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Aceite de Comer
          </span>
          <span class="presentacion">
                Frasco x 30ml  
          </span>
          <button id="pdf6" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>

      <!-- 
            7
            -->
      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="images/productos/producto7.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Acido Borico 
          </span>
          <span class="presentacion">
                Caja x 25 sobres x 10g
          </span>
          <button id="pdf7" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>

      <!-- 
            8
            -->

      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="images/productos/producto8.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Acido Salicilico
          </span>
          <span class="presentacion">
                Caja x 25 sobres x 7g
          </span>
          <button id="pdf8" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>

      <!-- 
            9
            -->

      <div class="itemProducto">
        <div class="tituloProducto">
          <img id="imgProducto1" src="images/medicina.png" alt="" />
          <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <img id="imgProducto2" src="images/favorite.png" alt="" />
        </div>
        <!-- titulos>  -->
        <div class="imageProducto">
          <img src="images/productos/producto9.jpg" alt="" />
        </div>
        <!-- imagen  -->
        <div class="info">
          <span class="descripcionPorducto">
                Alcanfor 
          </span>
          <span class="presentacion">
                Caja x 25 sobres x 7g  
          </span>
          <button id="pdf9" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
        </div>
      </div>
      <!-- 
            10
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="images/productos/producto10.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Alumbre 
              </span>
              <span class="presentacion">
                    Caja x 25 sobres x 20g 
              </span>
              <button id="pdf10" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
      <!-- 
            11
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="images/productos/producto11.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Azucar de leche 
              </span>
              <span class="presentacion">
                    Caja x 25 sobres x 10g
              </span>
              <button id="pdf11" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
      <!-- 
            12
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="images/productos/producto12.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Bicarbonato de sodio 
              </span>
              <span class="presentacion">
                    Caja x 25 sobres x 20g
              </span>
              <button id="pdf12" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
      <!-- 
            13
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="images/productos/producto13.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Glicerina
              </span>
              <span class="presentacion">
                    Frasco x 30ml  
              </span>
              <button id="pdf13" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
      <!-- 
            14
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="images/productos/producto14.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Sal de Epsom 
              </span>
              <span class="presentacion">
                    Caja x 25 sobres x20g
              </span>
              <button id="pdf14" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
                  <!-- 
            15
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="images/productos/producto15.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Sal Glauber 
              </span>
              <span class="presentacion">
                    Caja x 25 sobres x 20g  
              </span>
              <button id="pdf15" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
             <!-- 
            16
            -->

            <div class="itemProducto">
              <div class="tituloProducto">
                <img id="imgProducto1" src="images/medicina.png" alt="" />
                <div class="label">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <img id="imgProducto2" src="images/favorite.png" alt="" />
              </div>
              <!-- titulos>  -->
              <div class="imageProducto">
                <img src="images/productos/producto16.jpg" alt="" />
              </div>
              <!-- imagen  -->
              <div class="info">
              <span class="descripcionPorducto">
                    Vaselina Pura 
              </span>
              <span class="presentacion">
                    Pote x 20g, y x 100g 
              </span>
              <button id="pdf16" onClick="fichaTecnica(event)" class="fichaTecnica">FICHA TECNICA</button>
            </div>
            </div>
          </div>
    </div>
  </div>
  `;
}
/**
 * 
 * parte para distribuidores
 */


function distribuidores() {
  document.getElementById('inicio').style.display = "block";
  // Obtener referencia al contenedor
  var contacto = document.getElementById("cajon");
  contacto.innerHTML = `
  <div id="contenedor-distr">
  <div id="dist-titulo">
    <h1 id="titulo">DISTRIBUIDORES</h1>
  </div>
  <DIV class="dist-contenido">
    <h1 id="oficinas-distri"><Span>Distribuidores</Span> en Colombia</h1>
    <div class="dist-nombre">
    <img src="images/distribuidor0.png" alt="">
    </div>
    <div class="dist-nombre">
    <img src="images/distribuidor1.png" alt="">
    </div>
    <div class="dist-nombre">
      <img src="images/distribuidor2.png" alt="">
    </div>
    <div class="dist-nombre">
      <img src="images/distribuidor3.png" alt="">
    </div>
    <div class="dist-nombre">
      <img src="images/distribuidor4.png" alt="">
    </div>
    <div class="dist-nombre">
      <img src="images/distribuidor5.png" alt="">
    </div>
    <div class="dist-nombre">
      <img src="images/distribuidor6.png" alt="">
    </div>
    <div class="dist-nombre">
    <img src="images/distribuidor7.png" alt="">
    </div>

    <div class="dist-nombre">
    <img src="images/distribuidor8.png" alt="">
  </div>
  <div class="dist-nombre">
    <img src="images/distribuidor9.png" alt="">
  </div>
  <div class="dist-nombre">
    <img src="images/distribuidor10.png" alt="">
  </div>
  <div class="dist-nombre">
  <img src="images/distribuidor11.png" alt="">
  </div>

  </div>
</div>
  `;
}
