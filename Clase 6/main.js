// OBJETOS

// // Declaracion del objeto
// const personaje = {
//     nombre: "Homero",
//     apellido: "Simpsons",
//     direccion: "Av. Siempre Viva",
// };


// // para llamar el objeto

//     // Notación del punto:
// console.log(personaje.nombre);

//     // Con corchetes
// console.log(personaje["apellido"]);


// const jugador = {
//     nombre: "Lionel Andres",
//     apellido: "Messi",
//     edad: 35,
//     equipo: "Inter Miami",
// };


// let entrada = prompt("Ingrese key please: ");

// alert(jugador[entrada]);

// function Jugador(nombre, apellido, edad, equipo){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.equipo = equipo;
// }

// let nombre = prompt("Ingrese nombre: ");
// let apellido = prompt("Ingrese apellido: ");
// let edad = parseInt(prompt("Ingrese edad: "));
// let equipo = prompt("Ingrese equipo: ");

// const jugador = new Jugador(nombre, apellido, edad, equipo);

// alert(`El jugador ${jugador.nombre} tiene una edad de ${jugador.edad}`);

// CON FOR--IN

// function Jugador(nombre, apellido, equipo){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.equipo = equipo;
//     this.presentacion = function (){
//         console.log(`El jugador ${nombre} ${apellido} juega en ${equipo}`);
//     };
// };

// const jugador = new Jugador("Lionel Andres", "Messi", "Inter Miami");


// for(const player in jugador){
//     console.log(jugador[player]);
// }

// jugador.presentacion();

// CON CLASE

// class Jugador{
//     constructor(nombre, apellido, equipo){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.equipo = equipo;
//     }

//     presentacion(){
//         console.log(`El jugador ${this.nombre} ${this.apellido} juega en el equipo ${this.equipo}`);
//     }
// }

// const jugador = new Jugador("Lionel Andres", "Messi", "Inter Miami");

// jugador.presentacion();
