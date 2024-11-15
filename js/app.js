class Persona {
  constructor(nombre, sexo, DNI, edad, peso, altura, anioNacimento) {
    this.nombre = nombre;
    this.sexo = sexo;
    this.DNI = DNI;
    this.edad = edad;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimento = anioNacimento;
  }

  esMayorDeEdad() {
    if (isNaN(this.edad)) {
      return "ingrese un numero valido";
    } else if (this.edad >= 18) {
      return "eres mayor de edad";
    } else {
      return "eres menor de edad";
    }
  }

  static generaciones = {
    GeneracionZ: {
      inicio: 1994,
      fin: 2010,
      poblacion: "7.800.000",
      circunstancia: "expansión de Internet",
      rasgo: "irreverencia",
    },
    Milennials: {
      inicio: 1981,
      fin: 1993,
      poblacion: "7.200.000",
      circunstancia: "inicio de digitalización",
      rasgo: "frustración",
    },
    GeneracionX: {
      inicio: 1969,
      fin: 1980,
      poblacion: "9.300.000",
      circunstancia: "crisis del 73 y transición española",
      rasgo: "obsesión por el éxito",
    },
    "Baby Boom": {
      inicio: 1949,
      fin: 1968,
      poblacion: "12.200.000",
      circunstancia: "paz",
      rasgo: "ambición",
    },
    "Silent Generation": {
      inicio: 1930,
      fin: 1948,
      poblacion: "6.300.000",
      circunstancia: "conflictos bélicos",
      rasgo: "austeridad",
    },
  };

  mostrarDatos() {
    return `
      Nombre: ${this.nombre}
      Edad: ${this.edad}
      DNI: ${this.DNI}
      Sexo: ${this.sexo}
      Peso: ${this.peso} 
      Altura: ${this.altura} 
      Año de Nacimiento: ${this.anioNacimiento}
     `;
  }

  mostrarGeneraciones() {
    for (let [generacion, datos] of Object.entries(Persona.generaciones))
      if (
        this.anioNacimento >= datos.inicio &&
        this.anioNacimento <= datos.fin
      ) {
        return `Pertenece a la generacion : ${generacion} cuyo rasgo caracteritico es ${datos.rasgo}`;
      } else {
        return "generacion no identificada";
      }
  }
}

function DatosObtenidos(e) {
  e.preventDefault();

  // Obtener valores de los inputs
  const nombre = document.getElementById("nombre").value;
  const sexo = document.getElementById("sexo").value;
  const DNI = document.getElementById("DNI").value;
  const edad = parseInt(document.getElementById("edad").value, 10);
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseInt(document.getElementById("altura").value, 10);
  const anioNacimento = parseInt(
    document.getElementById("anioNacimiento").value,
    10
  );

  // Crear una nueva instancia de Persona
  const nuevaPersona = new Persona(
    nombre,
    sexo,
    DNI,
    edad,
    peso,
    altura,
    anioNacimento
  );

  // Mostrar todo en un solo alert
  alert(mensaje);

  const mensaje = `
  ${nuevaPersona.esMayorDeEdad()}
  ${nuevaPersona.mostrarGeneraciones()}
  ${nuevaPersona.mostrarDatos()}
  `;
}

document
  .getElementById("personaForm")
  .addEventListener("submit", DatosObtenidos);
