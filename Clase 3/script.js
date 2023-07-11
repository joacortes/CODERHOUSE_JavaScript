// Estrucutra IF

// let edad = 17;


// if(edad >= 18){
//     console.log("You are of legal age");
// }

// Estructura IF-ELSE

// let availableMoney = 5000;
// const TAX = 0.05;

// if(availableMoney >= 5000){
//     availableMoney = availableMoney - (availableMoney * TAX);
// } else {
//     console.log("Congratulations! You don't have to pay taxes");
// }

// console.log(availableMoney);

/* 
1. "=" - Asignación
2. "==" - Comparación
3. "===" - Exactamente igual
*/

// let age = prompt("How old are you? ", "Type an age");

// if(age >= 18){
//     alert("You are of legal age")
// }else if(age < 18){
//     alert("You are a minor dude");
// }else{
//     let question = prompt("Did you type a number?").toLowerCase();
//     if(question == "si"){
//         alert("You are a lier");
//     }else{
//         alert("You are a idiot");
//     }
// }

// Logics Operators

let playerName = prompt("Enter name of a football player: ");
let insult = prompt("Enter a insult to that shit: ");

if(playerName != "" && insult != ""){
    alert(playerName + ", you are a piece of shit and my friend want to tell you something: " + insult);
}else{
    alert("You are so chicken motherfucker, fuck off!");
}
