// CICLO FOR

// let number = parseInt(prompt("Enter a number to multiply: ", "123456"));

// for(let i = 1; i <= 10; i++){
//     let result = number * i;
//     alert(`${number} x ${i} = ${result}`);
// }

// Sentencias BREAK y CONTINUE
// CONTINUE: Al indicar una condición saltea esta misma.
// BREAK: Al indicar una condición detiene el bucle cuando se cumple.

// for(let i = 0; i < 10; i++){
//     if(i % 2 != 0){
//         continue;
//     }
//     console.log(i);
// }

// Result: 0 2 4 6 8

// for(let i=0; i < 10; i++){
//     console.log(i)
//     if(i == 7){
//         break;
//     }
// }

// Result: 0 1 2 3 4 5 6 7

// CICLO WHILE

// const ORIGINALUSER = "joacortes";
// const ORIGINALPASSWORD = "123456";

// let user = prompt("Username: ").toLowerCase();

// while(user != ORIGINALUSER){
//     alert("wrong user");
//     user = prompt("Username: ").toLowerCase();
// }

// alert("Correct user");

// let passwd = prompt("Password: ").toLowerCase();

// while(passwd != ORIGINALPASSWORD){
//     alert("wrong password");
//     passwd = prompt("Password: ").toLowerCase();
// }

// alert("Correct password");
// alert("¡Welcome to my system!");

// ACTIVIDAD N° 1

const BANCO = 454.575;
const BLUE = 498.00;
const MAYORISTA = 264.05;
const BOLSA = 485.15;
const CONTADO = 510.51;

let price;
let dolarType = parseInt(prompt("Enter a dolar type \n1. BANCO\n2. BLUE\n3. MAYORISTA\n4. BOLSA\n5. CONTADO LIQUI \n[0 Para salir]: "));
let amount = parseInt(prompt("How much do yo want to buy?: "));

while(dolarType != 0){
    switch(dolarType){
        case 1:
            price = amount * BANCO;
            alert(`You need $ ${price} to buy USD ${amount}`);
            break;
        case 2:
            price = amount * BLUE;
            alert(`You need $ ${price} to buy USD ${amount}`);
            break;
        case 3:
            price = amount * MAYORISTA;
            alert(`You need $ ${price} to buy USD ${amount}`);
            break;
        case 4:
            price = amount * BOLSA;
            alert(`You need $ ${price} to buy USD ${amount}`);
            break;
        case 5:
            price = amount * CONTADO;
            alert(`You need $ ${price} to buy USD ${amount}`);
            break;
        default:
            alert("Wrong option");
            break;
    }
    dolarType = parseInt(prompt("Enter a dolar type 1. BANCO\n2. BLUE\n3. MAYORISTA\n4. BOLSA\n5. CONTADO LIQUI [0 Para salir]: "));
    amount = parseInt(prompt("How much do yo want to buy?: "));
}