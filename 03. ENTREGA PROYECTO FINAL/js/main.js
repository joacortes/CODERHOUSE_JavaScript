class Personaje {
    constructor(nombre, raza, clase, contra, email){
        this.nombre = nombre;
        this.raza = raza;
        this.clase = clase;
        this.contra = contra;
        this.email = email;
    }
}

const validateForm = () => {
    let nombre = document.getElementById("name").value;
    let raza = document.getElementById("raza").value;
    let clase = document.getElementById("clase").value;
    let contra = document.getElementById("contra").value;
    let email = document.getElementById("email").value;

    if(nombre == ""){
        alert("El nombre es obligatorio");
        return false;
    }

    if(raza == ""){
        alert("Debe ingresar la raza");
        return false;
    }

    if(clase == ""){
        alert("Debe ingresar la clase");
        return false;
    }

    if(contra == ""){
        alert("La contraseña es obligatoria");
        return false;
    }

    if(email == ""){
        alert("El email es obligatorio");
        return false;
    }else if(!email.includes('@')){
        return false;
    }


    return true;
}

const readData = () => {
    let listPersonajes;

    if(localStorage.getItem('listPersonajes') == null){
        listPersonajes = [];
        console.log("Esta vacio");
    }else{
        listPersonajes = JSON.parse(localStorage.getItem('listPersonajes')); 
    }

    let html = "";

    
    listPersonajes.forEach(function(element, index){
        html += "<tr>";
        html += "<td>" + element.nombre + "</td>";
        html += "<td>" + element.raza + "</td>";
        html += "<td>" + element.clase + "</td>";
        html += `<td> <input type="password" value="${element.contra}" class="passwd" id="passwd${index}" readonly></td>`;
        html += "<td>" + element.email + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btnEliminar">Eliminar</button> <button onclick="updateData(' + index + ')">Actualizar</button> <button onclick="showPsswd(' + index + ')" id="btnPasswd">Password</button>'
        html += "</tr>"
    });

    document.querySelector('#tableData').innerHTML = html;
}

document.onload = readData();

const addData = () => {

    if(validateForm() == true){
        let nombre = document.getElementById("name").value;
        let raza = document.getElementById("raza").value;
        let clase = document.getElementById("clase").value;
        let contra = document.getElementById("contra").value;
        let email = document.getElementById("email").value;

        let listPersonajes;

        if(localStorage.getItem('listPersonajes') == null){
            listPersonajes = [];
        }else{
            listPersonajes = JSON.parse(localStorage.getItem('listPersonajes'));
        }

        
        let nuevoPersonaje = new Personaje(nombre, raza, clase, contra, email);
        listPersonajes.push(nuevoPersonaje);

        localStorage.setItem('listPersonajes', JSON.stringify(listPersonajes))

        readData();

        document.getElementById("name").value = "";
        document.getElementById("raza").value = "";
        document.getElementById("clase").value = "";
        document.getElementById("contra").value = "";
        document.getElementById("email").value = "";
    }
}

document.getElementById("btnAdd").onclick = () => addData();

const deleteData = (index) => {
    let listPersonajes;

    if(localStorage.getItem('listPersonajes') == null){
        listPersonajes = [];
    }else{
        listPersonajes = JSON.parse(localStorage.getItem('listPersonajes'));
    }

    listPersonajes.splice(index, 1);
    localStorage.setItem("listPersonajes", JSON.stringify(listPersonajes));
    readData();
}

// Función par actualizar los datos de los personajes;

const updateData = (index) => {
    let listPersonajes;

    if(localStorage.getItem('listPersonajes') == null){
        listPersonajes = [];
    }else{
        listPersonajes = JSON.parse(localStorage.getItem('listPersonajes'));
    }

    document.getElementById("name").value = listPersonajes[index].nombre;
    document.getElementById("raza").value = listPersonajes[index].raza;
    document.getElementById("clase").value = listPersonajes[index].clase;
    document.getElementById("contra").value = listPersonajes[index].phone;
    document.getElementById("email").value = listPersonajes[index].email;
    
    document.getElementById("btnUpdate").onclick = () => {
        if(validateForm() == true){
            listPersonajes[index].nombre = document.getElementById("name").value;
            listPersonajes[index].raza = document.getElementById("raza").value;
            listPersonajes[index].clase = document.getElementById("clase").value;
            listPersonajes[index].contra = document.getElementById("contra").value;
            listPersonajes[index].email = document.getElementById("email").value;

            localStorage.setItem("listPersonajes", JSON.stringify(listPersonajes));
            readData();

            document.getElementById("name").value = "";
            document.getElementById("raza").value = "";
            document.getElementById("clase").value = "";
            document.getElementById("contra").value = "";
            document.getElementById("email").value = " ";
        }
    }
}

// Función para mostrar y ocultar la contraseña

const showPsswd = (index) =>{
    let listPersonajes;

    if(localStorage.getItem('listPersonajes') == null){
        listPersonajes = [];
    }else{
        listPersonajes = JSON.parse(localStorage.getItem('listPersonajes'));
    }

    let passwd = document.getElementById(`passwd${index}`);

    if(passwd.type == 'text'){
        passwd.type = 'password';
    }else{
        passwd.type = 'text';
    }
    
}

