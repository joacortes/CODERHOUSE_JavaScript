const cuentas = [];


class Cliente {
    constructor(idCuenta, firstName, saldo){
        this.idCuenta = idCuenta;
        this.firstName = firstName;
        this.saldo = 0;
    }

    consultarSaldo(){
        return "$ " + this.saldo;
    }

    depositar(monto){
        this.saldo += monto;
    }

    retirar(monto){
        this.saldo -= monto;
    }

    transferir(cuenta, monto){
        for(let i = 0; i < cuentas.length; i++){
            if(cuentas[i].idCuenta == cuenta){
                this.saldo -= monto;
                cuentas[i].saldo += monto;
            }
        }
    }
}


let menu = prompt("\n1. Iniciar sesion\n2. Crear cuenta\n3. Salir");

while(menu != "3"){
    if(menu === "1"){
        let cuenta = prompt("Ingrese el id de su cuenta: ");
        for(let i = 0; i < cuentas.length; i++){
            if(cuentas[i].idCuenta == cuenta){
                alert(`Welcome to my system ${cuentas[i].firstName}`);
                let choice = prompt(`Account: ${cuentas[i].idCuenta}\nName: ${cuentas[i].firstName}\n1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Transferrir\n5. Salir`);
                while(choice != "5"){
                    if(choice == "1") alert(cuentas[i].consultarSaldo());
                    else if(choice == "2"){
                        let ammount = parseFloat(prompt("Ingrese monto a depositar"));
                        cuentas[i].depositar(ammount);
                    }
                    else if(choice == "3"){
                        let ammount = parseFloat(prompt("Ingrese monto a retirar"));
                        cuentas[i].retirar(ammount);
                    }
                    else if(choice == "4"){
                        let ammount = parseFloat(prompt("Ingrese cantidad a transferir"));
                        let ac = cuentas.map((acc) => acc.idCuenta + " - " + acc.firstName)
                        let account = prompt(`Ingrese cuenta a transferir\nCuentas disponibles\n ${ac}`);
                        cuentas[i].transferir(account, ammount);
                    }
                    else alert("Opción incorrecta");
                    choice = prompt(`Account: ${cuentas[i].idCuenta}\nName: ${cuentas[i].firstName}\n1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Transferrir\n5. Salir`);
                }
            }
        }
    }else if(menu === "2"){
        let nombre = prompt("Ingrese nombre: ");
        let generarId = Math.floor(Math.random()*(999999 - 100000) + 100000);
        const nuevo = new Cliente(generarId, nombre, 0);
        cuentas.push(nuevo);
        alert(`Your ID is ${generarId}`);
    }

    menu = prompt("\n1. Iniciar sesion\n2. Crear cuenta\n3. Salir");
}

