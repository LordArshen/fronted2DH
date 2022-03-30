/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  

     let nombre = prompt( "ingresa tu nombre: " );
    console.log( nombre ); 

     
     let edad = parseInt ( prompt("ingresa tu año de nacimiento: ") ); 
    
    /*  if( typeof edad !== "number" ) {
      edad = parseInt ( prompt("ingresa tu edad en numeros: ") )
    } else {
      console.log( edad );
    };  */
    edad = 2022-edad;
    console.log(edad);

    let ciudad = prompt( "ingresa la cuidad donde vives: " );
    console.log( ciudad );
    let interesPorJs = confirm("te interesa js: ");
    console.log( interesPorJs );
    if(interesPorJs){
      interesPorJs = "Si";
    }else{
      interesPorJs = "No";
    }

    datosPersona.nombre = nombre;
    datosPersona.edad = edad;
    datosPersona.ciudad = ciudad;
    datosPersona.interesPorJs = interesPorJs;
    console.log( datosPersona); 
    
    


}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    const htmlNombre = document.querySelector("#nombre");
    htmlNombre.innerHTML = datosPersona.nombre;
    const htmlEdad = document.querySelector("#edad");
    htmlEdad.innerHTML = datosPersona.edad;
    const htmlCuidad = document.querySelector("#ciudad");
    htmlCuidad.innerHTML = datosPersona.ciudad;
    const htmlInteres = document.querySelector("#javascript");
    htmlInteres.innerHTML = datosPersona.interesPorJs;


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
    
        for (const materia of listado) {
            
            const materiasFrontend = document.querySelector("#fila") ;
            const divMateria = document.createElement("div");
            const imgMateria = document.createElement("img");
            imgMateria.setAttribute( "src", `${materia.imgUrl}`);
            divMateria.appendChild(imgMateria);
            const parrafoLenguaje = document.createElement("p")
            const parrafoBimestre = document.createElement("p")
            
            
            console.log(parrafoLenguaje);

            const contenidoLenguaje = document.createTextNode(`${materia.lenguajes}`);
            const contenidoBimestre = document.createTextNode(`${materia.bimestre}`);
            parrafoBimestre.appendChild(contenidoBimestre);
            parrafoLenguaje.appendChild(contenidoLenguaje);
            console.log(parrafoLenguaje);

            divMateria.appendChild(parrafoLenguaje).classList.add("lenguajes") ;;
            divMateria.appendChild(parrafoBimestre).classList.add("bimestre");

                        
            materiasFrontend.appendChild(divMateria).classList.add("caja");
            
        }
        
        materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas)
 
   
  
  

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
    document.querySelector("#sitio").classList.toggle("dark");
    console.log("se ha dado click")
  
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let teclas = {
  f: 70
};

document.addEventListener("keyup", mostrarTexto )

function mostrarTexto(evento){
  switch (evento.keyCode) {
  case teclas.f:
      console.log("f oprimida");
      document.querySelector("#sobre-mi").classList.remove("oculto")
      
      break;
  default:
        console.log("otra tecla")
        break;
    }
}
