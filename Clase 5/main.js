// FUNCIONES

// const BLUE = 520.00;
// const BOLSA = 498.50;
// const BANCO = 450.50;

// let continueChoice;

// const buyDolarAmount = function(pesosCant, dolarType){
//     return pesosCant / dolarType
// }


// do{
//     let dolarChoice = prompt(`Que tipo de dolar quiere comprar? \nBLUE: $ ${BLUE}\nBOLSA: $ ${BOLSA}\nBANCO: $ ${BANCO}`).toLowerCase();
//     let pesosCant = parseInt(prompt("Cuanta cantidad de pesos tiene?"));

//     switch(dolarChoice){
//         case "blue":
//             alert(buyDolarAmount(pesosCant, BLUE));
//             break;
//         case "bolsa":
//             alert(buyDolarAmount(pesosCant, BOLSA));
//             break;
//         case "banco":
//             alert(buyDolarAmount(pesosCant, BANCO));
//             break;
//         default:
//             alert("No existe esa opción");
//     }

//     continueChoice = prompt("Desea continuar? YES or NO").toUpperCase();
// }while(continueChoice != "NO")


// FUNCTION ARROW
// La function arrow, funciona declarando una constante y luego a esa constante asignarle los parametros, y de los parametros hacer una flecha sin colocar el return, ya que el lenguaje sabe que estamos hablando de un return (Solo en casos simples como en esta funcion)

// const BLUE = 520.00;
// const BOLSA = 498.50;
// const BANCO = 450.50;

// let continueChoice;

// const buyDolarAmount = (pesosCant, dolarType) => pesosCant / dolarType

// do{
//     let dolarChoice = prompt(`Que tipo de dolar quiere comprar? \nBLUE: $ ${BLUE}\nBOLSA: $ ${BOLSA}\nBANCO: $ ${BANCO}`).toLowerCase();
//     let pesosCant = parseInt(prompt("Cuanta cantidad de pesos tiene?"));

//     switch(dolarChoice){
//         case "blue":
//             alert(buyDolarAmount(pesosCant, BLUE));
//             break;
//         case "bolsa":
//             alert(buyDolarAmount(pesosCant, BOLSA));
//             break;
//         case "banco":
//             alert(buyDolarAmount(pesosCant, BANCO));
//             break;
//         default:
//             alert("No existe esa opción");
//     }

//     continueChoice = prompt("Desea continuar? YES or NO").toUpperCase();
// }while(continueChoice != "NO")