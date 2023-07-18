// VARIABLES
const CUENTA1 = "40748483";
const CUENTA2 = "40324423";
const CUENTA3 = "48483234";

let cantidadTotalCuenta1 = 0;
let cantidadTotalCuenta2 = 0;
let cantidadTotalCuenta3 = 0;
let cant = 0;
let documento;

// FUNCIONES

const consultarSaldo = (cuenta) => {
    switch(cuenta){
        case CUENTA1:
            alert(`Cantidad total de la cuenta ${CUENTA1}: $ ${cantidadTotalCuenta1}`);
            break;
        case CUENTA2:
            alert(`Cantidad total de la cuenta ${CUENTA2}: $ ${cantidadTotalCuenta2}`);
            break;
        case CUENTA3:
            alert(`Cantidad total de la cuenta ${CUENTA3}: $ ${cantidadTotalCuenta3}`);
            break;
        default:
            alert("No existe esa cuenta");
    }
}

const depositar = (cuenta, cantidadDeposito) => {
    switch(cuenta){
        case CUENTA1:
            cantidadTotalCuenta1 += cantidadDeposito;
            alert(`Se realizo el deposito de ${cantidadDeposito} a la cuenta ${cuenta}`);
            break;
        case CUENTA2:
            cantidadTotalCuenta2 += cantidadDeposito;
            alert(`Se realizo el deposito de ${cantidadDeposito} a la cuenta ${cuenta}`);
            break;
        case CUENTA3:
            cantidadTotalCuenta3 += cantidadDeposito;
            alert(`Se realizo el deposito de ${cantidadDeposito} a la cuenta ${cuenta}`);
            break;
        default:
            alert("No existe esa cuenta");
    }
}

const retirar = (cuenta, cantidadRetiro) => {
    switch(cuenta){
        case CUENTA1:
            cantidadTotalCuenta1 -= cantidadRetiro;
            alert(`Se realizo el retiro de ${cantidadRetiro} a la cuenta ${cuenta}`);
            break;
        case CUENTA2:
            cantidadTotalCuenta2 -= cantidadRetiro;
            alert(`Se realizo el retiro de ${cantidadRetiro} a la cuenta ${cuenta}`);
            break;
        case CUENTA3:
            cantidadTotalCuenta3 -= cantidadRetiro;
            alert(`Se realizo el retiro de ${cantidadRetiro} a la cuenta ${cuenta}`);
            break;
        default:
            alert("No existe esa cuenta");
    }
}

const transferir = (cuentaOrigen, cuentaDestino, cantidad) => {
    switch(cuentaOrigen){
        case CUENTA1:
            switch(cuentaDestino){
                case CUENTA2:
                    cantidadTotalCuenta1 -= cantidad;
                    cantidadTotalCuenta2 += cantidad;
                    alert(`Se realizo la transferencia de la cuenta ${cuentaOrigen} a la cuenta ${cuentaDestino} de un total de $ ${cantidad}`);
                    break;
                case CUENTA3:
                    cantidadTotalCuenta1 -= cantidad;
                    cantidadTotalCuenta3 += cantidad;
                    alert(`Se realizo la transferencia de la cuenta ${cuentaOrigen} a la cuenta ${cuentaDestino} de un total de $ ${cantidad}`);
                    break;
                default:
                    alert("No existe esa cuenta");
            }
            break;
        case CUENTA2:
            switch(cuentaDestino){
                case CUENTA1:
                    cantidadTotalCuenta2 -= cantidad;
                    cantidadTotalCuenta1 += cantidad;
                    alert(`Se realizo la transferencia de la cuenta ${cuentaOrigen} a la cuenta ${cuentaDestino} de un total de $ ${cantidad}`);
                    break;
                case CUENTA3:
                    cantidadTotalCuenta2 -= cantidad;
                    cantidadTotalCuenta3 += cantidad;
                    alert(`Se realizo la transferencia de la cuenta ${cuentaOrigen} a la cuenta ${cuentaDestino} de un total de $ ${cantidad}`);
                    break;
                default:
                    alert("No existe esa cuenta");
            }
            break;
        case CUENTA3:
            switch(cuentaDestino){
                case CUENTA1:
                    cantidadTotalCuenta3 -= cantidad;
                    cantidadTotalCuenta1 += cantidad;
                    alert(`Se realizo la transferencia de la cuenta ${cuentaOrigen} a la cuenta ${cuentaDestino} de un total de $ ${cantidad}`);
                    break;
                case CUENTA2:
                    cantidadTotalCuenta3 -= cantidad;
                    cantidadTotalCuenta2 += cantidad;
                    alert(`Se realizo la transferencia de la cuenta ${cuentaOrigen} a la cuenta ${cuentaDestino} de un total de $ ${cantidad}`);
                    break;
                default:
                    alert("No existe esa cuenta");
            }
            break;
        default:
            alert("No existe esa cuenta");
    }
}

// ENTRADA USUARIO

documento = prompt("Ingrese DNI o escriba '0' para salir del sistema: ");
alert(`Eres la cuenta ${documento}`);

while(documento != 0){
    
    let choice = prompt("\nIngrese una opción\n 1. Depositar\n 2. Retirar\n 3. Transferir \n 4. Consultar saldo\n0. Cerrar sesión");

    while(choice != 0){
        switch(choice){
            case "1":
                cant = parseInt(prompt("Ingrese cantidad a depositar"));
                depositar(documento, cant);
                break;
            case "2":
                cant = parseInt(prompt("Ingrese cantidad a retirar"));
                retirar(documento, cant);
                break;
            case "3":
                cant = parseInt(prompt("Ingrese cantidad a transferir"));
                let cuentaDestino = prompt("Ingrese cuenta destino");
                transferir(documento, cuentaDestino, cant);
                break;
            case "4":
                consultarSaldo(documento);
                break;
        }
        choice = prompt("\nIngrese una opción\n 1. Depositar\n 2. Retirar\n 3. Transferir \n 4. Consultar saldo\n0. Cerrar sesión");
    }

    documento = prompt("Ingrese DNI o escriba '0' para salir del sistema: ");
    if(documento != 0) alert(`Eres la cuenta ${documento}`);
}

    



